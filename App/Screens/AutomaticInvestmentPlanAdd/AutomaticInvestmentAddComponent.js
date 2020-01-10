import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GSingletonClass
} from '../../CommonComponents';
import { CustomRadio } from '../../AppComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";



const myInstance = GSingletonClass.getInstance();
let isValidScreen=true;
class AutomaticInvestmentAddComponent extends Component {
    constructor(props) {
        super(props);
        const automaticAdd =  myInstance.getAutomaticInvestmentEditMode()? (myInstance.getScreenStateData().automaticAdd || {}):{};
        this.state = {

            selectedItemID: "D",
            selectedItemName: "Doller",
            fundList: [],
            ItemToEdit: `${this.props.navigation.getParam('ItemToEdit', -1)}`,
            acc_name: `${this.props.navigation.getParam('acc_name')}`,
            acc_no: `${this.props.navigation.getParam('acc_no')}`,
            accountType: `${this.props.navigation.getParam('accountType')}`,
            selectedBank: -1,
            fundRemaining: 0,
            totalFund: 0,
            investedIn: [],
            fundConsumed: 0,
            refresh:false,
            errorMsg:'Please enter amount greater than or equal to 50',
            IsNotValidAmount:false,
            bankAccountInfo: [],
            ...automaticAdd
        };
    }


    componentDidMount() {
        if (this.state && this.state.fundList && !this.state.fundList.length > 0) {
            const fundListPayload = {};
            this.props.getFundListData(fundListPayload);
        }
        this.props.getBankAccountInfo();
        if (this.state.ItemToEdit > -1) {
            if (this.props && this.props.automaticInvestmentState) {
                let valueToEdit;
                switch(this.state.accountType)
                {
                    case 'General':
                        valueToEdit = this.props.automaticInvestmentState.general[this.state.ItemToEdit];
                        break;
                    case 'Ira':
                        valueToEdit = this.props.automaticInvestmentState.ira[this.state.ItemToEdit];
                        break;
                    case 'Utma':
                        valueToEdit = this.props.automaticInvestmentState.utma[this.state.ItemToEdit];
                        break;
                }
                let strTotal = valueToEdit.totalAmount.replace('$', '').trim();
                let bankIndex = 0;
                this.props.bankAccountInfo.map((bank, index) => {
                    if (bank.bankName === valueToEdit.fundFrom) {
                        bankIndex = index;
                    }
                })
                
                this.setState({
                    acc_name: valueToEdit.account.split('|')[0],
                    acc_no: valueToEdit.account.split('|')[1],
                    totalFund: Number(strTotal),
                    investedIn: valueToEdit.investedIn,
                    fundConsumed: Number(strTotal),
                    fundRemaining: 0,
                    selectedBank: bankIndex,
                });
            }
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            let tempFundListData = [];
            if (this.props.fundListState[ActionTypes.GET_FUNDLIST] != undefined && this.props.fundListState[ActionTypes.GET_FUNDLIST].Items != null) 
            {
                tempFundListData = this.props.fundListState[ActionTypes.GET_FUNDLIST].Items;
                if (this.props && this.props.bankAccountInfo && this.props.bankAccountInfo != this.state.bankAccountInfo) {
                    this.setState({
                        fundList: [...tempFundListData.map(v => ({ ...v, isActive: false, fundAmount: 0,IsNotValidAmount:false,errorMsg:'Please enter amount greater than or equal to 50' }))],
                        bankAccountInfo: this.props.bankAccountInfo 
                    });
                }   
            }

        }
    }

    getPayload = () => {


        let selected = [];
        this.state.fundList.map((item) => {
            if (item.fundAmount>=50) {
                
                selected.push({ name: item.fundName, amount: item.fundAmount })
            }
        })

        const savedAutoData = myInstance.getSavedAutomaticData();
        let payload = {
            ...savedAutoData,
            selectedItemID: "D",
            selectedItemName: "Doller",
            fundList: this.state.fundList,
            ItemToEdit: this.state.ItemToEdit,
            acc_name: this.state.acc_name,
            acc_no: this.state.acc_no,
            accountType: this.state.accountType,
            selectedBank: this.state.selectedBank,
            fundRemaining: this.state.fundRemaining,
            totalFund: '$' +this.state.totalFund,
            fundFrom: this.state.bankAccountInfo[this.state.selectedBank].bankName,
            investedIn: selected,
            fundConsumed: this.state.fundConsumed,
            refresh:this.state.refresh,
        };
        return payload;

    }

    navigationNext = () => {

        const payload = this.getPayload();
        const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAutomaticData(payload);
            const screenState = {
                ...stateData,
                "automaticAdd":{...this.state}
            }
            myInstance.setScreenStateData(screenState);
        this.props.navigation.navigate({routeName:'automaticInvestmentSchedule',key:'automaticInvestmentSchedule',params: {
            ItemToEdit: this.state.ItemToEdit,
            acc_name: this.state.acc_name,
            acc_no: this.state.acc_no,
            accountType: this.state.accountType
        }});
    }
    
    onSelected = (item) => () => {

        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});

    generateKeyExtractor = (item) => item.bankName;
    renderInvestment = () => ({ item, index }) =>
        (
            <TouchableOpacity onPress={this.selectedBank(index)}>

                <View style={this.state.selectedBank === index ? styles.bankViewSelected : styles.bankView}>
                    <View style={styles.bankTopView}></View>
                    <View style={styles.bankMidView}>

                        <Text style={styles.bankNameText}>{item.bankName}</Text>
                        <Text style={styles.bankNumberText}>{item.accountNumber}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    toggleSwitch = index => e => {

        if(this.state.totalFund>=50)
        {
            var array = [...this.state.fundList]; 
            if (index !== -1) {
                
                let switchVal = array[index].isActive;
                array[index].isActive = !switchVal;
                array[index].IsNotValidAmount=false;
                array[index].errorMsg='';
                let remining=this.state.fundRemaining;
                let consumed=this.state.fundConsumed;
                if (!array[index].isActive) {
                    remining=Number(this.state.fundRemaining)+Number(array[index].fundAmount)
                    consumed=Number(this.state.fundConsumed)-Number(array[index].fundAmount)
                    array[index].fundAmount = 0;
                    
                }
                else if (array[index].isActive) {
                    array[index].fundAmount=array[index].fundAmount === 0?'':array[index].fundAmount
                }
                this.setState({ fundList: array,fundRemaining:remining,fundConsumed:consumed,IsNotValidAmount:false,investedIn:[] });
            }
        }
        else{
                this.setState({IsNotValidAmount:true})
        }
    }

    selectedBank = index => e => {

        this.setState({ selectedBank: index })
    }

    getFundAmount = (value, index) => {
        var array = [...this.state.fundList]; 
        if (index !== -1) {
            array[index].fundAmount = value;
            this.setState({ fundList: array });
        }
    }

    changeRemaining = e => {
        let remaining = this.state.totalFund;
        this.state.fundList.map((item,index) => {
            let msg="Please enter amount greater than or equal to 50";
            
            var array = [...this.state.fundList];
            array[index].IsNotValidAmount = false;
            array[index].errorMsg='';
            if(Number(item.fundAmount)>=50)
            {
                isValidScreen=true;
                if (Number(item.fundAmount) <= remaining)//this.state.fundRemaining
                    remaining = remaining - Number(item.fundAmount);
                else {
                    msg="Amount is greater than Remining amount"
                    array[index].IsNotValidAmount = true;
                    array[index].errorMsg=msg;
                    isValidScreen=false;
                }
                array[index].fundAmount=item.fundAmount;
                array[index].isActive=true;
                
                 this.setState({ fundList: array,refresh:!this.state.refresh,
                    fundRemaining:  remaining, fundConsumed: this.state.totalFund -remaining});
            }
            else if(item.isActive){
                var array = [...this.state.fundList]; // make a separate copy of the array
                array[index].IsNotValidAmount = true;
                array[index].errorMsg=msg;
                 this.setState({ fundList: array,refresh:!this.state.refresh });
            }
        })
    }



    setTotalFund = (value) => {
        let remaining=0;
        
        if(value>this.state.fundConsumed)
            remaining=value-this.state.fundConsumed;
        this.setState({ totalFund: Number(value), fundRemaining: Number(remaining)})
    }

    checkFundAmount=()=>{
        this.setState({IsNotValidAmount:this.state.totalFund>=50?false:true })
    }

    generateAmountKeyExtractor = (item) => item.fundNumber.toString()
    renderAmount = () => ({ item, index }) =>
        (

            <View style={styles.fundListView}>
                {this.state.investedIn.map((fund) => {

                    if (fund.name === item.fundName) {
                        item.isActive = true;
                        item.fundAmount = fund.amount.replace('$', '');
                        return;
                    }
                })}
                <View style={styles.fundListHeader}>
                    <View style={styles.fundListHeaderView}>
                        <Text style={styles.fundNameText}>{item.fundName}</Text>
                    </View>
                    <View style={styles.fundNameSwitch}>
                        <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                            onValueChange={this.toggleSwitch(index)}
                            value={item.isActive}
                        />
                    </View>
                </View>
                <View style={styles.auto_invest_to_flat} pointerEvents={item.isActive ? 'auto' : 'none'}>
                    <Text style={styles.auto_invest_to_top}>{'Amount'}</Text>
                    <View style={styles.auto_invest_to_top_view}>
                        <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                        <View style={{flexDirection:'column',width:'100%'}}>
                            <GInputComponent style={styles.leftSpace} 
                            onChangeText={(value) => this.getFundAmount(value, index)} 
                            onEndEditing={this.changeRemaining}
                            value={item.fundAmount.toString()} 
                            errorFlag={item.IsNotValidAmount}
                            errorText={item.errorMsg}/>
                        </View>
                    </View>
                    <Text style={styles.auto_invest_flat_min}>{'Min $50'}</Text>
                </View>

            </View>
        )



    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.scrollView}>
                    <View>
                        <Text style={styles.autoInvestHead}>{'Create Automatic Investment Plan'}</Text>
                        <View style={styles.seperator_line} />
                        <View style={styles.circle_view}>
                            <View style={styles.circle_Completed}>
                                <Text style={styles.circleTextNew}>{'1'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_Inprogress}>
                                <Text style={styles.circleText}>{'2'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'3'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'4'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'5'}</Text>
                            </View>

                        </View>
                        <View style={styles.autoInvest_title_view}>
                            <Text style={styles.autoInvest_title_text}>{'2 - Plan Details'}</Text>
                        </View>
                        <View style={styles.body}>

                            <View style={{ flexDirection: 'column', justifyContent: "center", borderColor: '#9DB4CE', borderWidth: 1, padding: scaledHeight(20), marginTop: scaledHeight(20) }}>

                                <Text style={{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{this.state.acc_name}</Text>
                                <Text style={{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{'Account Number ' + this.state.acc_no}</Text>


                            </View>

                            <Text style={styles.autoInvest_sub_title_text}>{'- Fund To'}</Text>


                            <View style={styles.seperator_line} />
                            <Text style={styles.autoInvestCont}>{'Choose how you will fund your account and indicate your initial investment amount.'}</Text>
                            <FlatList style={{ marginTop: scaledHeight(20) }}
                                data={this.state.bankAccountInfo}
                                renderItem={this.renderInvestment()}
                                keyExtractor={this.generateKeyExtractor}

                            />
                            <Text style={styles.autoInvest_sub_title_text}>{'- Invest To'}</Text>
                            <View style={styles.seperator_line} />

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Total Amount'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <View style={{flexDirection:'column',width:'100%'}}>
                                        <GInputComponent style={{ marginLeft: scaledWidth(10) }} 
                                        onChangeText={this.setTotalFund} 
                                        onEndEditing={this.checkFundAmount}
                                        value={this.state.totalFund.toString()} 
                                        errorFlag={this.state.IsNotValidAmount}
                                        errorText={this.state.errorMsg}/>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'In'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <View style={styles.radioBtnGrp}>
                                        <CustomRadio
                                            componentStyle={{ width: "30%", marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                            size={30}
                                            outerCicleColor={"#DEDEDF"}
                                            innerCicleColor={"#61285F"}
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label={"$"}
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel={""}
                                            selected={(this.state.selectedItemID !== "" && "D" == this.state.selectedItemID) ? true : false}
                                            onPress={this.onSelected({ name: 'Doller', id: 'D' })}
                                        />
                                        <CustomRadio

                                            size={30}
                                            componentStyle={{ width: "30%", marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                            outerCicleColor={"#DEDEDF"}
                                            innerCicleColor={"#61285F"}
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label={"%"}
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel={""}
                                            selected={(this.state.selectedItemID !== "" && "P" == this.state.selectedItemID) ? true : false}
                                            onPress={this.onSelected({ name: 'Percentage', id: 'P' })}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to} pointerEvents="none">
                                <Text style={styles.auto_invest_to_top}>{'Amount Consumed'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} value={this.state.fundConsumed.toString()} />
                                </View>
                            </View>

                            <View style={styles.auto_invest_to} pointerEvents="none">
                                <Text style={styles.auto_invest_to_top}>{'Amount Remaining'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} value={this.state.fundRemaining.toString()} />
                                </View>
                            </View>


                            <FlatList style={{ marginTop: scaledHeight(20) }}
                                data={this.state.fundList}
                                renderItem={this.renderAmount()}
                                keyExtractor={this.generateAmountKeyExtractor}
                                extraData={this.state.refresh}
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
                        buttonStyle={this.state.selectedBank>-1 && this.state.totalFund>=50 && this.state.fundRemaining===0 && isValidScreen? styles.continueButtonSelected:styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.state.selectedBank>-1 && this.state.totalFund>=50 && this.state.fundRemaining===0 && isValidScreen?this.navigationNext:null}
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