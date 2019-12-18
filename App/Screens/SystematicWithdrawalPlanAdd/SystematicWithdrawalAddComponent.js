import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GDropDownComponent

} from '../../CommonComponents';
import { CustomRadio } from '../../AppComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import * as regEx from '../../Constants/RegexConstants';

const deliveryAddressJson = [
    {
        "id": '1',
        "title": 'Current mailing address',
    },
    {
        "id": '2',
        "title": 'Payee and address',
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

const autoInvestmentAddAmountJson = [
    {
        accountName: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
        switchOnOff: false
    },
    {
        accountName: 'LOREM 2 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
        switchOnOff: false
    },
    {
        accountName: 'LOREM 3 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
        switchOnOff: false
    }
];
const dummyTypeJson = [
    {
        "id": '1',
        "title": 'Monthly',
    },
    {
        "id": '2',
        "title": 'Quaterly',
    },
];

class SystematicWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItemID: "",
            selectedItemName: "",
            //autoInvestmentAddAmountJson: {},
            fundList: [],
            ItemToEdit: this.props.navigation.getParam('ItemToEdit', -1),
            onlineMethod: -1,
            offlineMethod:-1,
            fundRemaining: 0,
            totalFund: 0,
            addressDropDown: false,
            valueaddressDropDown: '',
            
        };
    }
    componentDidMount() {
        // if (this.state && this.state.fundList && !this.state.fundList.length > 0) {
        //     const fundListPayload = {};
        //     this.props.getFundListData(fundListPayload);
        // }
        // if (this.props && this.props.automaticInvestmentState) {

        //     this.setState({
        //         autoInvestmentAddAmountJson: this.props.automaticInvestmentState,
        //     });
        // }
    }

    getPayload = () => {


        let payload = {
            totalAmount: '$500',
            fundFrom: 'Bank 1',
            investedIn: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
        };
        if (this.props && this.props.automaticInvestmentState && this.props.automaticInvestmentState.savedAccData) {
            payload = {
                ...payload,
                ...this.props.automaticInvestmentState.savedAccData
            };
        }
        return payload;

    }

    navigationNext = () => {
        //const payload = this.getPayload();
        //this.props.saveData("systematicWithdrawalAdd", payload); 
        this.props.navigation.navigate('systematicWithdrawalSchedule', { ItemToEdit: this.state.ItemToEdit });
    }
    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate::::> "+prevState);


        if (this.props !== prevProps) {
            let tempFundListData = [];
            let tempFundAmount = [];
            if (this.props.fundListState[ActionTypes.GET_FUNDLIST] != undefined && this.props.fundListState[ActionTypes.GET_FUNDLIST].Items != null) {
                tempFundListData = this.props.fundListState[ActionTypes.GET_FUNDLIST].Items;

                this.setState({
                    fundList: [...tempFundListData.map(v => ({ ...v, isActive: false, fundAmount: 0 }))],

                    //isFilterApplied: false
                });
            }

        }
    }
    onSelected = (item) => () => {
        console.log("item: " + item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    onlineMethodFuc=index=>e=>{
        
        this.setState({onlineMethod:index,offlineMethod:-1})
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

    selectAddress = () => {
        this.setState({
            addressDropDown: !this.state.addressDropDown
        });
    }

    selectedDropDownAddressValue = (valueAddress) => {
        this.setState({
            valueaddressDropDown: valueAddress.title,
            addressDropDown: false
        });
    }

    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate('systematicWithdrawal');

    generateAmountKeyExtractor = (item) => item.accountName;
    renderAmount = () => ({ item }) =>
        (
            <View style={{ borderWidth: 1, borderColor: '#5D83AE99', marginTop: scaledHeight(10) }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: "center", alignItems: 'center', borderBottomColor: '#61285F45', borderBottomWidth: 1, padding: scaledHeight(20) }}>
                    <View style={{ flex: 0.7 }}>
                        <Text style={{ color: '#544A54', fontSize: scaledHeight(13), fontWeight: 'bold' }}>{item.accountName}</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'flex-end', marginRight: '4%' }}>
                        <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                            onValueChange={this.toggleSwitch1}
                            value={this.state.switch1Value}
                        />
                    </View>
                </View>
                <View style={styles.auto_invest_to_flat}>
                    <Text style={styles.auto_invest_to_top}>{'Amount'}</Text>
                    <View style={styles.auto_invest_to_top_view}>
                        <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                        <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
                    </View>
                    <Text style={styles.auto_invest_flat_min}>{'Min $50'}</Text>
                </View>

            </View>
        )



    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation} />
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
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
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
                                            onPress={this.onSelected({ name: 'Yes', id: 'Y' })}
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
                                            onPress={this.onSelected({ name: 'No', id: 'N' })}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Amount Consumed'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Amount'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
                                </View>
                            </View>


                            <FlatList style={{ marginTop: scaledHeight(20) }}
                                data={autoInvestmentAddAmountJson}
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
                                itemToDisplay={"title"}
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
                        buttonStyle={styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.navigationNext}
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