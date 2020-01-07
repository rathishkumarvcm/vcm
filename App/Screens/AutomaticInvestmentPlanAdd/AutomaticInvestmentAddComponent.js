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

const autoInvestmentAddBankJson = [

    {
        account: 'Bank Account 1',
        accountNumber: 'xxx-xxx-xxxx'
    },
    {
        account: 'Bank Account 2',
        accountNumber: 'xxx-xxx-xxxx'
    },
    {
        account: 'Bank Account 3',
        accountNumber: 'xxx-xxx-xxxx'
    }
];


const myInstance = GSingletonClass.getInstance();
class AutomaticInvestmentAddComponent extends Component {
    constructor(props) {
        super(props);
        const automaticAdd =  myInstance.getAutomaticInvestmentEditMode()? (myInstance.getScreenStateData().automaticAdd || {}):{};
        this.state = {

            selectedItemID: "D",
            selectedItemName: "Doller",
            autoInvestmentAddAmountJson: {},
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
            ...automaticAdd
        };
    }


    componentDidMount() {
        if (this.state && this.state.fundList && !this.state.fundList.length > 0) {
            const fundListPayload = {};
            this.props.getFundListData(fundListPayload);
        }
        if (this.state.ItemToEdit > -1) {
            if (this.props && this.props.automaticInvestmentState) {
                let valueToEdit = this.props.automaticInvestmentState.general[this.state.ItemToEdit];
                let strTotal = valueToEdit.totalAmount.replace('$', '').trim();
                let bankIndex = 0;
                autoInvestmentAddBankJson.map((bank, index) => {
                    if (bank.account === valueToEdit.fundFrom) {
                        bankIndex = index;
                    }
                })
                this.setState({
                    autoInvestmentAddAmountJson: valueToEdit,
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

    getPayload = () => {


        let selected = [];
        this.state.fundList.map((item) => {
            console.log('outside if',item.fundAmount)
            if (item.fundAmount>=50) {
                
                selected.push({ name: item.fundName, amount: item.fundAmount })
            }
        })
        console.log('selected',selected)

        const savedAutoData = myInstance.getSavedAutomaticData();
        let payload = {
            ...savedAutoData,
            //  account: this.state.acc_name+'|'+this.state.acc_no,
            //  totalAmount: '$' + this.state.totalFund,
            //  fundFrom: autoInvestmentAddBankJson[this.state.selectedBank].account,
            //  investedIn: selected,
            //  switchOnOff: true
            selectedItemID: "D",
            selectedItemName: "Doller",
            autoInvestmentAddAmountJson: this.state.autoInvestmentAddAmountJson,
            fundList: this.state.fundList,
            ItemToEdit: this.state.ItemToEdit,
            acc_name: this.state.acc_name,
            acc_no: this.state.acc_no,
            accountType: this.state.accountType,
            selectedBank: this.state.selectedBank,
            fundRemaining: this.state.fundRemaining,
            totalFund: '$' +this.state.totalFund,
            //  investedIn: this.state.investedIn,
            fundFrom: autoInvestmentAddBankJson[this.state.selectedBank].account,
            investedIn: selected,
            fundConsumed: this.state.fundConsumed,
            refresh:this.state.refresh,
            errorMsg:this.state.errorMsg,
        };
        //  if (this.props && this.props.automaticInvestmentState && this.props.automaticInvestmentState.savedAccData) {
        //      payload = {
        //          ...payload,
        //          ...this.props.automaticInvestmentState.savedAccData
        //      };
        //  }
        return payload;

    }

    navigationNext = () => {

        const payload = this.getPayload();
        // this.props.saveData("automaticInvestmentAdd", payload);
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
    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            let tempFundListData = [];
            let tempFundAmount = [];
            if (this.props.fundListState[ActionTypes.GET_FUNDLIST] != undefined && this.props.fundListState[ActionTypes.GET_FUNDLIST].Items != null) {
                tempFundListData = this.props.fundListState[ActionTypes.GET_FUNDLIST].Items;
                this.setState({
                    fundList: [...tempFundListData.map(v => ({ ...v, isActive: false, fundAmount: 0,IsNotValidAmount:false }))],
                });
            }

        }
    }
    onSelected = (item) => () => {

        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    // navigationNext = () => this.props.navigation.navigate('automaticInvestmentSchedule', { ItemToEdit: this.state.ItemToEdit });
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});

    generateKeyExtractor = (item) => item.account;
    renderInvestment = () => ({ item, index }) =>
        (
            <TouchableOpacity onPress={this.selectedBank(index)}>

                <View style={this.state.selectedBank === index ? styles.bankViewSelected : styles.bankView}>
                    <View style={{ width: scaledWidth(66), margin: scaledWidth(5), backgroundColor: '#E9E9E9' }}></View>
                    <View style={{ justifyContent: 'center', marginLeft: scaledWidth(20) }}>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold' }}>{item.account}</Text>
                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>{item.accountNumber}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    toggleSwitch = index => e => {
        // this.setState({ switch1Value: value });


        var array = [...this.state.fundList]; //  make a separate copy of the array
        // var indexChange = this.state.selectedIndex
        if (index !== -1) {

            let switchVal = array[index].isActive;
            array[index].isActive = !switchVal;
            if (!array[index].isActive) {
                array[index].fundAmount = 0;
            }
            this.setState({ fundList: array });
        }
    }

    selectedBank = index => e => {

        this.setState({ selectedBank: index })
    }

    getFundAmount = (value, index) => {
        var array = [...this.state.fundList]; //  make a separate copy of the array
        var indexChange = this.state.selectedIndex
        if (index !== -1) {
            array[index].fundAmount = value;
            // let remaining=this.state.totalFund-value;
            // this.setState({ fundList: array,fundRemaining:remaining});
            this.setState({ fundList: array });
        }
    }

    changeRemaining = e => {
        let remaining = 0;
        this.state.fundList.map((item,index) => {
            let msg="Please enter amount greater than or equal to 50";
            
            var array = [...this.state.fundList];
            array[index].IsNotValidAmount = false;
            if(Number(item.fundAmount)>=50)
            {
                if (Number(item.fundAmount) <= this.state.fundRemaining)
                    remaining = remaining + Number(item.fundAmount);
                else {
                    msg="Amount is greater than Remining amount"
                    array[index].IsNotValidAmount = true;
                }
                array[index].fundAmount=item.fundAmount;
                array[index].isActive=true;
                this.setState({ fundList: array,refresh:!this.state.refresh,errorMsg:msg });
            }
            else if(item.isActive){
                var array = [...this.state.fundList]; //  make a separate copy of the array
                array[index].IsNotValidAmount = true;
                this.setState({ fundList: array,refresh:!this.state.refresh });
                //  console.log('****************************',this.state.fundList)
            }
        })
        this.setState({ fundRemaining: this.state.totalFund - remaining, fundConsumed: remaining });
    }



    setTotalFund = (value) => {
        let remaining
        if(value>this.state.fundConsumed)
            remaining=value-this.state.fundConsumed;
        this.setState({ totalFund: Number(value), fundRemaining: Number(remaining) })
    }

    generateAmountKeyExtractor = (item) => item.fundNumber.toString()
    renderAmount = () => ({ item, index }) =>
        (

            <View style={{ borderWidth: 1, borderColor: '#5D83AE99', marginTop: scaledHeight(10) }}>
                {this.state.investedIn.map((fund) => {

                    if (fund.name === item.fundName) {
                        item.isActive = true;
                        item.fundAmount = fund.amount.replace('$', '');
                        return;
                    }
                })}
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: "center", alignItems: 'center', borderBottomColor: '#61285F45', borderBottomWidth: 1, padding: scaledHeight(20) }}>
                    <View style={{ flex: 0.7 }}>
                        <Text style={{ color: '#544A54', fontSize: scaledHeight(13), fontWeight: 'bold' }}>{item.fundName}</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'flex-end', marginRight: '4%' }}>
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
                            errorText={this.state.errorMsg}/>
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
                <ScrollView style={{ flex: 0.85 }}>
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
                                data={autoInvestmentAddBankJson}
                                renderItem={this.renderInvestment()}
                                keyExtractor={this.generateKeyExtractor}

                            />
                            <Text style={styles.autoInvest_sub_title_text}>{'- Invest To'}</Text>
                            <View style={styles.seperator_line} />

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Total Amount'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} onChangeText={this.setTotalFund} value={this.state.totalFund.toString()} />
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
                        buttonStyle={this.state.selectedBank>-1 && this.state.totalFund>=50 && this.state.fundRemaining===0? styles.continueButtonSelected:styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.state.selectedBank>-1 && this.state.totalFund>=50 && this.state.fundRemaining===0?this.navigationNext:null}
                    />





                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentAddComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentAddComponent.defaultProps = {

};

export default AutomaticInvestmentAddComponent;