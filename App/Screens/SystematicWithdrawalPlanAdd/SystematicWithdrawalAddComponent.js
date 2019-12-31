import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GDropDownComponent,
    GSingletonClass
} from '../../CommonComponents';
import { CustomRadio } from '../../AppComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

const deliveryAddressJson = [
    {
        "id": '1',
        "value": 'Current mailing address',
    },
    {
        "id": '2',
        "value": 'Payee and address',
    },
];

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
class SystematicWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
        const systematicAdd =  myInstance.getSystematicWithdrawalEditMode()? (myInstance.getScreenStateData().systematicAdd || {}):{};
        // this.state = {
        //     selectedItemID: "",
        //     selectedItemName: "",
        //     //sysWithdrawalAmountJson: {},
        //     fundList: [],
        //     ItemToEdit: this.props.navigation.getParam('ItemToEdit', -1),
        //     onlineMethod: -1,
        //     offlineMethod:-1,
        //     fundRemaining: 0,
        //     totalFund: 0,
        //     addressDropDown: false,
        //     valueaddressDropDown: '',
            
        // };
        this.state = {

            selectedItemID: "D",
            selectedItemName: "Doller",
            sysWithdrawalAmountJson: {},
            fundList: [],
            onlineMethod: -1,
            offlineMethod:-1,
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
            ...systematicAdd
        };
    }
    componentDidMount() {
        if (this.state && this.state.fundList && !this.state.fundList.length > 0) {
            const fundListPayload = {};
            this.props.getFundListData(fundListPayload);
        }
        if (this.state.ItemToEdit > -1) {
            if (this.props && this.props.systematicWithdrawalState) {
                let valueToEdit = this.props.systematicWithdrawalState.general[this.state.ItemToEdit];
                let strTotal = valueToEdit.totalAmount.replace('$', '').trim();
                let bankIndex = 0;
                autoInvestmentAddBankJson.map((bank, index) => {
                    if (bank.account === valueToEdit.fundTo) {
                        bankIndex = index;
                    }
                })
                this.setState({
                    sysWithdrawalAmountJson: valueToEdit,
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

    // getPayload = () => {


    //     let payload = {
    //         totalAmount: '$500',
    //         fundTo: 'Bank 1',
    //         investedIn: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
    //     };
    //     if (this.props && this.props.systematicWithdrawalState && this.props.systematicWithdrawalState.savedAccData) {
    //         payload = {
    //             ...payload,
    //             ...this.props.systematicWithdrawalState.savedAccData
    //         };
    //     }
    //     return payload;

    // }

    getPayload = () => {


        let selected = [];
        this.state.fundList.map((item) => {
            if (item.fundAmount>=50) {
                
                selected.push({ name: item.fundName, amount: item.fundAmount })
            }
        })
        console.log('selected',selected)

        const savedAutoData = myInstance.getSavedSystematicData();
        let payload = {
            ...savedAutoData,
            selectedItemID: "D",
            selectedItemName: "Doller",
            sysWithdrawalAmountJson: this.state.sysWithdrawalAmountJson,
            fundList: this.state.fundList,
            ItemToEdit: this.state.ItemToEdit,
            acc_name: this.state.acc_name,
            acc_no: this.state.acc_no,
            accountType: this.state.accountType,
            selectedBank: this.state.selectedBank,
            fundRemaining: this.state.fundRemaining,
            totalFund: '$' +this.state.totalFund,
            fundTo: autoInvestmentAddBankJson[this.state.selectedBank].account,
            investedIn: selected,
            fundConsumed: this.state.fundConsumed,
            refresh:this.state.refresh,
            errorMsg:this.state.errorMsg,
        };
        return payload;

    }

    // navigationNext = () => {
    //     //const payload = this.getPayload();
    //     //this.props.saveData("systematicWithdrawalAdd", payload); 
    //     this.props.navigation.navigate('systematicWithdrawalSchedule', { ItemToEdit: this.state.ItemToEdit });
    // }
    navigationNext = () => {

        const payload = this.getPayload();
        const stateData = myInstance.getScreenStateData();
            myInstance.setSavedSystematicData(payload);
            const screenState = {
                ...stateData,
                "systematicAdd":{...this.state}
            }
            myInstance.setScreenStateData(screenState);
        this.props.navigation.navigate({routeName:'systematicWithdrawalSchedule',key:'systematicWithdrawalSchedule',params: {
            ItemToEdit: this.state.ItemToEdit,
            acc_name: this.state.acc_name,
            acc_no: this.state.acc_no,
            accountType: this.state.accountType
        }});
    }
    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate::::> "+prevState);


        if (this.props !== prevProps) {
            let tempFundListData = [];
            let tempFundAmount = [];
            if (this.props.fundListState[ActionTypes.GET_FUNDLIST] != undefined && this.props.fundListState[ActionTypes.GET_FUNDLIST].Items != null) {
                tempFundListData = this.props.fundListState[ActionTypes.GET_FUNDLIST].Items;

                this.setState({
                    fundList: [...tempFundListData.map(v => ({ ...v, isActive: false, fundAmount: 0 ,IsNotValidAmount:false }))],

                    //isFilterApplied: false
                });
            }

        }
    }
    onSelected = (item) => () => {
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    onlineMethodFuc=index=>e=>{
        
        this.setState({onlineMethod:index,offlineMethod:-1,selectedBank:index})
    }
    offlineMethodFuc=index=>e=>{
        
        this.setState({offlineMethod:index,onlineMethod:-1})
    }
    
    // navigationNext = () => this.props.navigation.navigate('systematicWithdrawalSchedule');
    generateKeyExtractor = (item) => item.account;
    renderInvestment = () => ({ item,index }) =>
        (

            <TouchableOpacity onPress={this.onlineMethodFuc(index)}>

                <View style={this.state.onlineMethod === index ? styles.bankViewSelected : styles.bankView}>
                    <View style={{ width: scaledWidth(66), margin: scaledWidth(5), backgroundColor: '#E9E9E9' }}></View>
                    <View style={{ justifyContent: 'center', marginLeft: scaledWidth(20) }}>
                        <Text style={{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold' }}>{item.account}</Text>
                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>{item.accountNumber}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    toggleSwitch = index => e => {
        //this.setState({ switch1Value: value });
        //console.log('Switch 1 is: ' + index);

        var array = [...this.state.fundList]; // make a separate copy of the array
        //var indexChange = this.state.selectedIndex
        if (index !== -1) {

            let switchVal = array[index].isActive;
            array[index].isActive = !switchVal;
            if (!array[index].isActive) {
                array[index].fundAmount = 0;
            }
            this.setState({ fundList: array });
        }
    }
    getFundAmount = (value, index) => {
        var array = [...this.state.fundList]; // make a separate copy of the array
        var indexChange = this.state.selectedIndex
        if (index !== -1) {
            array[index].fundAmount = value;
            //let remaining=this.state.totalFund-value;
            //this.setState({ fundList: array,fundRemaining:remaining});
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
                var array = [...this.state.fundList]; // make a separate copy of the array
                array[index].IsNotValidAmount = true;
                this.setState({ fundList: array,refresh:!this.state.refresh });
                // console.log('****************************',this.state.fundList)
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
    selectAddress = () => {
        this.setState({
            addressDropDown: !this.state.addressDropDown
        });
    }

    selectedDropDownAddressValue = (valueAddress) => {
        this.setState({
            valueaddressDropDown: valueAddress,
            addressDropDown: false
        });
    }

    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate('systematicWithdrawal');

    generateAmountKeyExtractor = (item) => item.fundNumber.toString()
    renderAmount = () => ({ item,index }) =>
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
                {/* <View style={styles.auto_invest_to_flat}>
                    <Text style={styles.auto_invest_to_top}>{'Amount'}</Text>
                    <View style={styles.auto_invest_to_top_view}>
                        <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                        <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
                    </View>
                    <Text style={styles.auto_invest_flat_min}>{'Min $50'}</Text>
                </View> */}

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
                        <Text style={styles.autoInvestHead}>{'Create Systematic Withdrawal Plan'}</Text>
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


                            <Text style={styles.autoInvest_sub_title_text}>{'- Withdrawal From'}</Text>
                            <View style={styles.seperator_line} />

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Total Amount'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} onChangeText={this.setTotalFund} value={this.state.totalFund.toString()}/>
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
                                            selected={(this.state.selectedItemID !== "" && "Y" == this.state.selectedItemID) ? true : false}
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
                                            selected={(this.state.selectedItemID !== "" && "N" == this.state.selectedItemID) ? true : false}
                                            onPress={this.onSelected({ name: 'Percentage', id: 'P' })}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Amount Consumed'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} value={this.state.fundConsumed.toString()}/>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Amount Remaining'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} value={this.state.fundRemaining.toString()}/>
                                </View>
                            </View>


                            <FlatList style={{ marginTop: scaledHeight(20) }}
                                data={this.state.fundList}
                                renderItem={this.renderAmount()}
                                keyExtractor={this.generateAmountKeyExtractor}

                            />

                            {/* <View>
                                <Text style={styles.autoInvest_sub_title_text}>{'- Contingent Funding Options'}</Text>
                                <Text style={styles.sysWith_sub_text}>{'– Investment Only'}</Text>
                                <Text style={styles.sysWith_sub_text}>{'(Optional Selection)'}</Text>
                                <View style={styles.seperator_line} />
                                <Text style={styles.sysWith_sub_text}>{'Will be used ONLY if main funding source selected above has insufficient funds.'}</Text>
                                <Text style={styles.sysWith_sub_text1}>{'Contingent Funding Options'}</Text>

                                <View style={styles.radioBtnGrp1}>
                                    <CustomRadio
                                        componentStyle={{ marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                        size={30}
                                        outerCicleColor={"#DEDEDF"}
                                        innerCicleColor={"#61285F"}
                                        labelStyle={styles.lblRadioBtnTxt1}
                                        label={"I would like to add contingent funding from my core sweep account only."}
                                        descLabelStyle={styles.lblRadioDescTxt1}
                                        descLabel={""}
                                        selected={(this.state.selectedItemID !== "" && "1" == this.state.selectedItemID) ? true : false}
                                        onPress={this.onSelected({ name: 'option 1', id: '1' })}
                                    />
                                    <CustomRadio

                                        size={30}
                                        componentStyle={{ marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                        outerCicleColor={"#DEDEDF"}
                                        innerCicleColor={"#61285F"}
                                        labelStyle={styles.lblRadioBtnTxt1}
                                        label={"I would not like contingent funding added at this time."}
                                        descLabelStyle={styles.lblRadioDescTxt1}
                                        descLabel={""}
                                        selected={(this.state.selectedItemID !== "" && "2" == this.state.selectedItemID) ? true : false}
                                        onPress={this.onSelected({ name: 'option 2', id: '2' })}
                                    />

                                    <CustomRadio

                                        size={30}
                                        componentStyle={{ marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                        outerCicleColor={"#DEDEDF"}
                                        innerCicleColor={"#61285F"}
                                        labelStyle={styles.lblRadioBtnTxt1}
                                        label={"I would like to add contingent funding from my core sweep account and other eligible mutual fund positions."}
                                        descLabelStyle={styles.lblRadioDescTxt1}
                                        descLabel={""}
                                        selected={(this.state.selectedItemID !== "" && "3" == this.state.selectedItemID) ? true : false}
                                        onPress={this.onSelected({ name: 'option 3', id: '3' })}
                                    />
                                </View>
                                <Text style={styles.lblRadioDescTxt1}>{'NOTE: Withdrawals will be made from other eligible mutual funds positions, the fund with the lowest balance will be liquidated first.'}</Text>

                            </View> */}

                            <Text style={styles.autoInvest_sub_title_text}>{'- Fund To'}</Text>
                            <View style={styles.seperator_line} />
                            <Text style={styles.autoInvestCont}>{'Choose how you will fund your account and indicate your initial investment amount.'}</Text>
                            <Text style={styles.autoInvest_sub_title_text}>{'Offline Method'}</Text>
                            <Text style={styles.autoInvestCont}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcittet'}</Text>

                            <TouchableOpacity onPress={this.offlineMethodFuc(1)}>

                                <View style={this.state.offlineMethod === 1 ? styles.bankViewSelected : styles.bankView}>
                                    <View style={{ width: scaledWidth(66), margin: scaledWidth(5), backgroundColor: '#E9E9E9', justifyContent: 'center',  }}></View>
                                    <View style={{ justifyContent: 'center', marginLeft: scaledWidth(20) }}>
                                        <Text style={{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold' }}>{'Check Order'}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.offlineMethodFuc(2)}>

                                <View style={this.state.offlineMethod === 2 ? styles.bankViewSelected : styles.bankView}>
                                    <View style={{ width: scaledWidth(66), margin: scaledWidth(5), backgroundColor: '#E9E9E9', justifyContent: 'center' }}></View>
                                    <View style={{ justifyContent: 'center', marginLeft: scaledWidth(20) }}>
                                        <Text style={{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold',alignItems:'center',justifyContent:'center' }}>{'Directed SWPs'}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={{alignItems:"center"}}><Text style={styles.autoInvest_sub_title_text}>{'Or'}</Text></View>
                            <Text style={styles.autoInvest_sub_title_text}>{'Online Method'}</Text>
                            <FlatList style={{ marginTop: scaledHeight(20) }}
                                data={autoInvestmentAddBankJson}
                                renderItem={this.renderInvestment()}
                                keyExtractor={this.generateKeyExtractor}

                            />


                            <Text style={styles.autoInvest_sub_title_text}>{'- Delivery Address'}</Text>
                            <View style={styles.seperator_line} />
                            <Text style={styles.autoInvestCont}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcittet'}</Text>
                            <GDropDownComponent
                                dropDownTextName={styles.financialTextLabel}
                                dropDownName="Delivery Address"
                                data={deliveryAddressJson}
                                changeState={this.selectAddress}
                                showDropDown={this.state.addressDropDown}
                                dropDownValue={this.state.valueaddressDropDown}
                                selectedDropDownValue={this.selectedDropDownAddressValue}
                                itemToDisplay={"value"}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(263) }}
                            />
                            <View style={{flexDirection:'column',marginLeft:scaledWidth(15),marginTop:scaledHeight(15),width:'100%'}}>
                                <Text style={styles.financialTextLabel}>{'Address'}</Text>
                                <GInputComponent value={""} />
                                <GInputComponent value={""} propInputStyle={{marginTop:scaledHeight(10)}} />
                            </View>

                            <View style={{flexDirection:'column',marginLeft:scaledWidth(15),marginTop:scaledHeight(15),width:'100%'}}>
                                <Text style={styles.financialTextLabel}>{'ZIP Code'}</Text>
                                <GInputComponent value={""} />
                                
                            </View>

                            <View style={{flexDirection:'column',marginLeft:scaledWidth(15),marginTop:scaledHeight(15),width:'100%'}}>
                                <Text style={styles.financialTextLabel}>{'City & State'}</Text>
                                <View style={{flexDirection:'row',flex:1,marginBottom:scaledHeight(20)}}>
                                    <GInputComponent value={""} propInputStyle={{flex:0.5,marginRight:scaledWidth(30)}} />
                                    <GInputComponent value={""} propInputStyle={{flex:0.5,marginRight:scaledWidth(30)}}/>
                                </View>
                                
                            </View>
                       
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
                        textStyle={styles.navigationBack}
                        onPress={this.navigationLogin}
                    />
                    <GButtonComponent
                        buttonStyle={this.state.totalFund>=50 && this.state.fundRemaining===0? styles.continueButtonSelected:styles.continueButton}//this.state.selectedBank>-1 && 
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.state.totalFund>=50 && this.state.fundRemaining===0?this.navigationNext:null}//this.state.selectedBank>-1 && 
                    />





                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

SystematicWithdrawalComponent.defaultProps = {

};

export default SystematicWithdrawalComponent;