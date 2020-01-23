import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GSingletonClass
} from '../../CommonComponents';
import { CustomRadio } from '../../AppComponents';
import globalString from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";


const switchStyle={ flase: '#DBDBDB', true: '#444444' };
const myInstance = GSingletonClass.getInstance();
let isValidScreen=true;
class AutomaticInvestmentAddComponent extends Component {
    constructor(props) {
        super(props);
        const automaticAdd = myInstance.getAutomaticInvestmentEditMode()? (myInstance.getScreenStateData().automaticAdd || {}):{};
        const{navigation}=this.props;
        this.state = {

            selectedItemID: "D",
            selectedItemName: "Doller",
            fundList: [],
            ItemToEdit: `${navigation.getParam('ItemToEdit', -1)}`,
            accName: `${navigation.getParam('accName')}`,
            accNumber: `${navigation.getParam('accNumber')}`,
            accountType: `${navigation.getParam('accountType')}`,
            selectedBank: -1,
            fundRemaining: 0,
            totalFund: 0,
            investedIn: [],
            fundConsumed: 0,
            refresh:false,
            errorMsg:'Please enter amount greater than or equal to 50',
            IsNotValidAmount:false,
            bankAccountDetails: [],
            ...automaticAdd
        };
    }


    componentDidMount() {
        const{getFundListData,getBankAccountInfo,automaticInvestmentState,bankAccountInfo}=this.props;
        const{fundList,ItemToEdit,accountType}=this.state;
        if (fundList && !fundList.length > 0) {
            const fundListPayload = {};
            getFundListData(fundListPayload);
        }
        getBankAccountInfo();
        if (ItemToEdit > -1) {
            if (this.props && automaticInvestmentState) {
                let valueToEdit;
                switch(accountType)
                {
                    case 'General':
                        valueToEdit = automaticInvestmentState.general[Number(ItemToEdit)];
                        break;
                    case 'Ira':
                        valueToEdit = automaticInvestmentState.ira[Number(ItemToEdit)];
                        break;
                    case 'Utma':
                        valueToEdit = automaticInvestmentState.utma[Number(ItemToEdit)];
                        break;
                    default:
                        break;
                }
                const strTotal = valueToEdit.totalAmount.replace('$', '').trim();
                let bankIndex = 0;
                bankAccountInfo.forEach((bank, index) => {
                    if (bank.bankName === valueToEdit.fundFrom) {
                        bankIndex = index;
                    }
                });
                // bankAccountInfo.map((bank, index) => () => {
                //     if (bank.bankName === valueToEdit.fundFrom) {
                //         bankIndex = index;
                //     }
                // });
                
                this.setState({
                    accName: valueToEdit.account.split('|')[0],
                    accNumber: valueToEdit.account.split('|')[1],
                    totalFund: Number(strTotal),
                    investedIn: valueToEdit.investedIn,
                    fundConsumed: Number(strTotal),
                    fundRemaining: 0,
                    selectedBank: bankIndex,
                });
            }
        }
        
    }

    componentDidUpdate(prevProps) {
        const{fundListState,bankAccountInfo}=this.props;
        const{bankAccountDetails} = this.state;
        if (this.props !== prevProps) {
            let tempFundListData = [];
            if (fundListState[ActionTypes.GET_FUNDLIST] !== undefined && fundListState[ActionTypes.GET_FUNDLIST].Items !== null) 
            {
                tempFundListData = fundListState[ActionTypes.GET_FUNDLIST].Items;
                if (bankAccountInfo && bankAccountInfo !== bankAccountDetails) {
                    this.setState({
                        fundList: [...tempFundListData.map(v => ({ ...v, isActive: false, fundAmount: 0,IsNotValidAmount:false,errorMsg:'Please enter amount greater than or equal to 50' }))],
                        bankAccountDetails: bankAccountInfo 
                    });
                }   
            }

        }
    }

    getPayload = () => {

const{fundList,ItemToEdit,accName,accNumber,accountType,
    fundRemaining,totalFund,bankAccountDetails,selectedBank,fundConsumed,refresh} =this.state;
        const selected = [];
        fundList.forEach(item => {
            if (item.fundAmount>=50) {
                selected.push({ name: item.fundName, amount: item.fundAmount });
            }
        });
        // fundList.map((item) => {
        //     if (item.fundAmount>=50) {
        //         selected.push({ name: item.fundName, amount: item.fundAmount });
        //     }
        // });

        const savedAutoData = myInstance.getSavedAutomaticData();
        const payload = {
            ...savedAutoData,
            selectedItemID: "D",
            selectedItemName: "Doller",
            fundList,
            ItemToEdit,
            accName,
            accNumber,
            accountType,
            selectedBank,
            fundRemaining,
            totalFund: `$${ totalFund}`,
            fundFrom: bankAccountDetails[Number(selectedBank)].bankName,
            investedIn: selected,
            fundConsumed,
            refresh,
        };
        return payload;

    }

    navigationNext = () => {
        const{navigation}=this.props;
        const{ItemToEdit,accName,accNumber,accountType} = this.state;
        const payload = this.getPayload();
        const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAutomaticData(payload);
            const screenState = {
                ...stateData,
                "automaticAdd":{...this.state}
            };
            myInstance.setScreenStateData(screenState);
        navigation.navigate({routeName:'automaticInvestmentSchedule',key:'automaticInvestmentSchedule',params: {
            ItemToEdit,
            accName,
            accNumber,
            accountType
        }});
    }
    
    onSelected = (item) => () => {

        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }

    navigationBack = () => 
    {
        const{navigation}=this.props;
        navigation.goBack();
    }

    navigationCancel = () => 
    { 
        const{navigation}=this.props;
        const{ItemToEdit}=this.state;
        if(ItemToEdit>-1)
            navigation.goBack();
        else
            navigation.goBack('automaticInvestmentAccount');
    }

    generateKeyExtractor = (item) => item.bankName;

    renderInvestment = () => ({ item, index }) =>{
        const{selectedBank} =this.state;
        return(
            <TouchableOpacity onPress={this.selectedBankItem(index)}>

                <View style={selectedBank === index ? styles.bankViewSelected : styles.bankView}>
                    <View style={styles.bankTopView} />
                    <View style={styles.bankMidView}>

                        <Text style={styles.bankNameText}>{item.bankName}</Text>
                        <Text style={styles.bankNumberText}>{item.accountNumber}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
        

    toggleSwitch = index => () => {
        const{totalFund,fundList,fundRemaining,fundConsumed}= this.state;
        if(totalFund>=50)
        {
            const array = [...fundList]; 
            if (index !== -1) {
                
                const switchVal = array[Number(index)].isActive;
                array[Number(index)].isActive = !switchVal;
                array[Number(index)].IsNotValidAmount=false;
                array[Number(index)].errorMsg='';
                let remining=fundRemaining;
                let consumed=fundConsumed;
                if (!array[Number(index)].isActive) {
                    remining=Number(fundRemaining)+Number(array[Number(index)].fundAmount);
                    consumed=Number(fundConsumed)-Number(array[Number(index)].fundAmount);
                    array[Number(index)].fundAmount = 0;
                    
                }
                else if (array[Number(index)].isActive) {
                    array[Number(index)].fundAmount=array[Number(index)].fundAmount === 0?'':array[Number(index)].fundAmount;
                }
                this.setState({ fundList: array,fundRemaining:remining,fundConsumed:consumed,IsNotValidAmount:false,investedIn:[] });
            }
        }
        else{
                this.setState({IsNotValidAmount:true});
        }
    }

    selectedBankItem = index => () => {
        const{refresh} =this.state;
        console.log('index**********************',index)
        this.setState({ selectedBank: index,refresh:!refresh });
    }

    getFundAmount = (value, index) => {
        const{fundList,ItemToEdit,investedIn} =this.state;
        const array = [...fundList]; 
        
        if(ItemToEdit>-1 && index !== -1)
        {
            const arrayInvest=[...investedIn];
            arrayInvest[Number(index)].amount = value;
            array[Number(index)].fundAmount = value;
            this.setState({ investedIn: arrayInvest,fundList: array });
        }
        else if (index !== -1) {
            array[Number(index)].fundAmount = value;
            this.setState({ fundList: array });
        }
    }

    changeRemaining = () => {
        const{totalFund,fundList,refresh}=this.state;
        let remaining = totalFund;
       
        fundList.forEach((item,index) => {
            let msg="Please enter amount greater than or equal to 50";
            
            const array = [...fundList];
            array[Number(index)].IsNotValidAmount = false;
            array[Number(index)].errorMsg='';
            if(Number(item.fundAmount)>=50)
            {
                isValidScreen=true;
                if (Number(item.fundAmount) <= remaining)// fundRemaining
                    remaining -= Number(item.fundAmount);
                else {
                    msg="Amount is greater than Remining amount";
                    array[Number(index)].IsNotValidAmount = true;
                    array[Number(index)].errorMsg=msg;
                    isValidScreen=false;
                }
                array[Number(index)].fundAmount=item.fundAmount;
                array[Number(index)].isActive=true;
                
                 this.setState({ fundList: array,refresh:!refresh,
                    fundRemaining:  remaining, fundConsumed: totalFund -remaining});
            }
            else if(item.isActive){
                // let array = [...fundList]; // make a separate copy of the array
                array[Number(index)].IsNotValidAmount = true;
                array[Number(index)].errorMsg=msg;
                 this.setState({ fundList: array,refresh:!refresh });
            }
        });
    }



    setTotalFund = (value) => {
        let remaining=0;
        const{fundConsumed}=this.state;
        if(value>fundConsumed)
            remaining=value-fundConsumed;
        this.setState({ totalFund: Number(value), fundRemaining: Number(remaining)});
    }

    checkFundAmount=()=>{
        const{totalFund}=this.state;
        this.setState({IsNotValidAmount:!(totalFund>=50) });
    }

    generateAmountKeyExtractor = (item) => item.fundNumber.toString()

    renderAmount = () => ({ item, index }) =>{
        const{investedIn,ItemToEdit}=this.state;
        return(

            <View style={styles.fundListView}>
                {investedIn.forEach(fund => {

                    if (fund.name === item.fundName) {
                        item.isActive = true;
                        item.fundAmount = fund.amount.replace('$', '');   
                    }
                })}
                <View style={styles.fundListHeader}>
                    <View style={styles.fundListHeaderView}>
                        <Text style={styles.fundNameText}>{item.fundName}</Text>
                    </View>
                    <View style={styles.fundNameSwitch}>
                        {ItemToEdit>-1?null:
                        <Switch trackColor={switchStyle}
                            onValueChange={this.toggleSwitch(index)}
                            value={item.isActive}
                        />
                        }
                    </View>
                </View>
                <View style={styles.auto_invest_to_flat} pointerEvents={item.isActive ? 'auto' : 'none'}>
                    <Text style={styles.auto_invest_to_top}>Amount</Text>
                    <View style={styles.auto_invest_to_top_view}>
                        <Text style={styles.auto_invest_to_top}>$</Text>
                        <View style={styles.inputError}>
                            <GInputComponent style={styles.leftSpace} 
                            onChangeText={(value) => this.getFundAmount(value, index)} 
                            onEndEditing={this.changeRemaining}
                            value={item.fundAmount.toString()} 
                            errorFlag={item.IsNotValidAmount}
                            errorText={item.errorMsg}
                            />
                        </View>
                    </View>
                    <Text style={styles.auto_invest_flat_min}>Min $50</Text>
                </View>

            </View>
        );
    }
        



    render() {
        const{navigation}=this.props;
        const{accName,accNumber,bankAccountDetails,totalFund,IsNotValidAmount,errorMsg,
        selectedItemID,fundConsumed,fundRemaining,fundList,refresh,selectedBank} = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>
                    <View>
                        <Text style={styles.autoInvestHead}>Create Automatic Investment Plan</Text>
                        <View style={styles.seperator_line} />
                        <View style={styles.circle_view}>
                            <View style={styles.circle_Completed}>
                                <Text style={styles.circleTextNew}>1</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_Inprogress}>
                                <Text style={styles.circleText}>2</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>3</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>4</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>5</Text>
                            </View>

                        </View>
                        <View style={styles.autoInvest_title_view}>
                            <Text style={styles.autoInvest_title_text}>2 - Plan Details</Text>
                        </View>
                        <View style={styles.body}>

                            <View style={styles.accountBlock}>

                                <Text style={styles.accountText}>{accName}</Text>
                                <Text style={styles.accountText}>{`Account Number ${ accNumber}`}</Text>


                            </View>

                            <Text style={styles.autoInvest_sub_title_text}>- Fund To</Text>


                            <View style={styles.seperator_line} />
                            <Text style={styles.autoInvestCont}>Choose how you will fund your account and indicate your initial investment amount.</Text>
                            <FlatList style={styles.fundListStyle}
                                data={bankAccountDetails}
                                renderItem={this.renderInvestment()}
                                keyExtractor={this.generateKeyExtractor}
                                extraData={refresh}
                            />
                            <Text style={styles.autoInvest_sub_title_text}>- Invest To</Text>
                            <View style={styles.seperator_line} />

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>Total Amount</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>$</Text>
                                    <View style={styles.inputError}>
                                        <GInputComponent style={styles.fundRemainStyle} 
                                        onChangeText={this.setTotalFund} 
                                        onEndEditing={this.checkFundAmount}
                                        value={totalFund.toString()} 
                                        errorFlag={IsNotValidAmount}
                                        errorText={errorMsg}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>In</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <View style={styles.radioBtnGrp}>
                                        <CustomRadio
                                            componentStyle={styles.radioStyle}
                                            size={30}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="$"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={!!((selectedItemID !== "" && selectedItemID === "D"))}
                                            onPress={this.onSelected({ name: 'Doller', id: 'D' })}
                                        />
                                        <CustomRadio

                                            size={30}
                                            componentStyle={styles.radioStyle}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="%"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={!!((selectedItemID !== "" && selectedItemID === "P"))}
                                            onPress={this.onSelected({ name: 'Percentage', id: 'P' })}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to} pointerEvents="none">
                                <Text style={styles.auto_invest_to_top}>Amount Consumed</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>$</Text>
                                    <GInputComponent style={styles.fundRemainStyle} 
                                    value={fundConsumed.toString()} />
                                </View>
                            </View>

                            <View style={styles.auto_invest_to} pointerEvents="none">
                                <Text style={styles.auto_invest_to_top}>Amount Remaining</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>$</Text>
                                    <GInputComponent style={styles.fundRemainStyle} value={fundRemaining.toString()} />
                                </View>
                            </View>


                            <FlatList style={styles.fundListStyle}
                                data={fundList}
                                renderItem={this.renderAmount()}
                                keyExtractor={this.generateAmountKeyExtractor}
                                extraData={refresh}
                            />
                        </View>
                    </View>

                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationCancel}
                    />
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.back}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationBack}
                    />
                    <GButtonComponent
                        buttonStyle={selectedBank>-1 && totalFund>=50 && fundRemaining===0 && isValidScreen? styles.continueButtonSelected:styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={selectedBank>-1 && totalFund>=50 && fundRemaining===0 && isValidScreen?this.navigationNext:null}
                    />





                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentAddComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    fundListState: PropTypes.instanceOf(Object),
    automaticInvestmentState: PropTypes.instanceOf(Object),
    bankAccountInfo: PropTypes.instanceOf(Object),
    getFundListData:PropTypes.func,
    getBankAccountInfo:PropTypes.func,
};

AutomaticInvestmentAddComponent.defaultProps = {
    navigation:{},
    fundListState:{},
    automaticInvestmentState:{},
    bankAccountInfo:{},
    getFundListData:null,
    getBankAccountInfo:null
};

export default AutomaticInvestmentAddComponent;