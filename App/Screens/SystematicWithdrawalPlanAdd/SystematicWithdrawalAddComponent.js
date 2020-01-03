import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GDropDownComponent,
    GSingletonClass,
    GDateComponent,
    GIcon,
} from '../../CommonComponents';
import { CustomRadio, CustomCheckBox } from '../../AppComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import * as reGex from '../../Constants/RegexConstants';
import AppUtils from '../../Utils/AppUtils';
import InvestmentDetails from "../../Models/InvestmentDetails";

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
const fundingOptionsData = [
    {
        "key": "init",
        "value": "Initial Investment"
    },
    {
        "key": "init_mon",
        "value": "Initial and Monthly Investment"
    }
];


const ListItem = (props) => {
    AppUtils.Dlog(`ListItem:: ${props}`);

    return (

        <TouchableOpacity
            onPress={props.onClickItem}
            activeOpacity={0.8}
            accessibilityRole="button"
            style={styles.colItem}
        >
            <View style={styles.rowHeaderItem}>
                <CustomCheckBox width="3%"
                    size={24}
                    itemBottom={0}
                    itemTop={3}

                    outerCicleColor="#707070"
                    innerCicleColor="#61285F"
                    labelStyle={{}}
                    label=""
                    selected={props.isActive}
                    onPress={props.onClickCheckbox}
                />


                <Text style={styles.lblRowtitleTxt}>
                    {props.fundName}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {globalString.accManagement.minimum}
                </Text>
                <Text style={styles.lblRightColTxt}>
                    {props.minimum}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {globalString.accManagement.minWithAutoInvesting}
                </Text>
                <Text style={styles.lblRightColTxt}>
                    {props.autoInvesting}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {globalString.accManagement.risk}
                </Text>
                <Text style={styles.lblRightColTxt}>
                    {props.risk}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
ListItem.propTypes = {
    isActive: PropTypes.bool,
    onClickItem: PropTypes.func,
    onClickCheckbox: PropTypes.func,
    fundName: PropTypes.string,
    minimum: PropTypes.string,
    autoInvesting: PropTypes.string,
    risk: PropTypes.string

};
ListItem.defaultProps = {
    isActive: false,
    onClickItem: null,
    onClickCheckbox: null,
    fundName: "",
    minimum: "",
    autoInvesting: "",
    risk: ""
};

const myInstance = GSingletonClass.getInstance();
class SystematicWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
        const systematicAdd = myInstance.getSystematicWithdrawalEditMode() ? (myInstance.getScreenStateData().systematicAdd || {}) : {};
        this.state = {

            selectedItemID: "D",
            selectedItemName: "Doller",
            sysWithdrawalAmountJson: {},
            fundList: [],
            onlineMethod: -1,
            offlineMethod: -1,
            ItemToEdit: `${this.props.navigation.getParam('ItemToEdit', -1)}`,
            acc_name: `${this.props.navigation.getParam('acc_name')}`,
            acc_no: `${this.props.navigation.getParam('acc_no')}`,
            accountType: `${this.props.navigation.getParam('accountType')}`,
            selectedBank: -1,
            fundRemaining: 0,
            totalFund: 0,
            investedIn: [],
            fundConsumed: 0,
            refresh: false,
            errorMsg: 'Please enter amount greater than or equal to 50',
            valueaddressDropDown: 'Current mailing address',
            //zip address validation
            isZipApiCalling: false,
            isAddressApiCalling: false,
            validationAddressOne: true,
            addressOne: '',

            isZipCodeValid: true,
            zipCodeValue: '11722',

            addressTwo: '154 Hawthorne Ave',
            userCity: 'CENTRAL ISLIP',
            userState: 'NY',

            payeeName: '',
            validationPayeeName: true,


            vcmFundList: [],
            selectedCountValidation: true,
            accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true,
            selectedFundInvestmentsData: [],
            action: "",
            totalInitialInvestment: "",
            // Filters
            isFilterApplied: false,
            modalVisible: false,
            filtermindata: [],
            filterriskdata: [],
            filterfunddata: [],
            applyFilterState: false,
            ...systematicAdd
        };
    }
    componentDidMount() {
        if (this.state && this.state.fundList && !this.state.fundList.length > 0) {
            const fundListPayload = {};
            this.props.getFundListData(fundListPayload);
        }
        if (this.state && this.state.vcmFundList && !this.state.vcmFundList.length > 0) {
            const fundListPayload = {};
            this.props.getFundListData(fundListPayload);
        }
        //filter funds
        const payload = [];
        const compositePayloadData = [
            "filter_min_inv",
            "filter_fund_type",
            "filter_risk"
        ];

        for (let i = 0; i < compositePayloadData.length; i++) {
            const tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        this.props.getCompositeLookUpData(payload);



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

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            let tempFundListData = [];
            let tempFundAmount = [];
            if (this.props.fundListState[ActionTypes.GET_FUNDLIST] != undefined && this.props.fundListState[ActionTypes.GET_FUNDLIST].Items != null) {
                tempFundListData = this.props.fundListState[ActionTypes.GET_FUNDLIST].Items;

                this.setState({
                    fundList: [...tempFundListData.map(v => ({ ...v, isActive: false, fundAmount: 0, IsNotValidAmount: false }))],
                    vcmFundList: [...tempFundListData.map(v => ({ ...v, isActive: false }))],
                    isFilterApplied: false
                });
            }

        }

        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;

        if (this.state.isZipApiCalling) {
            if (this.props != prevProps) {
                if (this.props && this.props.stateCityData[stateCityResponseData]) {
                    const tempResponse = this.props.stateCityData[stateCityResponseData];
                    if (tempResponse && tempResponse.City) {
                        this.setState({
                            userCity: tempResponse.City,
                            userState: tempResponse.State,
                            isZipCodeValid: true
                        });
                    } else {
                        this.setState({
                            userCity: ' - ',
                            userState: ' - ',
                            isZipCodeValid: false
                        });
                    }
                }
            }
        }

        if (this.state.isAddressApiCalling) {
            if (this.props != prevProps) {
                if (this.props && this.props.stateCityData[addressResponseData]) {
                    const tempAddressResponse = this.props.stateCityData[addressResponseData];
                    if (tempAddressResponse && tempAddressResponse.Address2) {
                        this.setState({
                            addressOne: tempAddressResponse.Address1 || "",
                            addressTwo: tempAddressResponse.Address2 || "",
                            validationAddressOne: true
                        });
                    } else {
                        this.setState({
                            addressOne: '',
                            addressTwo: '',
                            validationAddressOne: false
                        });
                    }
                }
            }
        }
    }

    getPayload = () => {


        let selected = [];
        this.state.fundList.map((item) => {
            if (item.fundAmount >= 50) {

                selected.push({ name: item.fundName, amount: item.fundAmount })
            }
        })

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
            totalFund: '$' + this.state.totalFund,
            fundTo: autoInvestmentAddBankJson[this.state.selectedBank].account,
            investedIn: selected,
            fundConsumed: this.state.fundConsumed,
            refresh: this.state.refresh,
            errorMsg: this.state.errorMsg,
            valueaddressDropDown: this.state.valueaddressDropDown,

            "totalFunds": `${this.state.selectedFundInvestmentsData.length}` || "",
            "totalInitialInvestment": this.state.totalInitialInvestment || "",
            "fundListData": this.state.selectedFundInvestmentsData,
            vcmFundList: this.state.vcmFundList,
        };
        return payload;

    }

    setPayeeName = (text) => {
        this.setState({
            payeeName: text,
            validationPayeeName: true
        });
    }
    setAddressOne = (text) => {
        this.setState({
            addressOne: text,
            validationAddressOne: true
        });
    }

    setAddressTwo = (text) => {
        this.setState({
            addressTwo: text
        });
    }

    setZipcodeValue = (text) => {

        this.setState({
            zipCodeValue: text,
            isZipCodeValid: true
        });
    }

    addAddressOnValidate = (validationType) => () => {

        switch (validationType) {

            case 'validateAddressValueOne':

                if (this.state.payeeName === "") {
                    this.setState({
                        validationPayeeName: false
                    });
                }
                if (this.state.addressOne === "") {
                    this.setState({
                        validationAddressOne: false
                    });
                }

                if (this.state.zipCodeValue === "") {
                    let validate = reGex.zipCodeRegex.test(this.state.zipCodeValue);
                    this.setState({
                        isZipCodeValid: validate
                    });
                }

                if (this.state.addressOne != '' &&
                    this.state.zipCodeValue != '') {

                    this.addNewAddress();
                }
                break;
        }
    }

    validateZipCodeValue = () => {

        if (this.state.zipCodeValue != '') {
            const payload = {
                'Zip': this.state.zipCodeValue
            };

            this.setState({
                isZipCodeValid: true,
                isZipApiCalling: true
            });
            this.props.getStateCity(payload);
        } else {
            this.setState({
                isZipCodeValid: false
            })
        }
    }

    addNewAddress = () => {
        var addNewAddressPayload = {};
        if (this.state.zipCodeValue != '') {
            addNewAddressPayload = {
                "Address1": this.state.addressOne,
                "Address2": this.state.addressTwo,
                "City": this.state.userCity,
                "State": this.state.userState,
                "Zip": this.state.zipCodeValue
            };
        } else {
            addNewAddressPayload = {
                "Address1": this.state.addressOne,
                "Address2": this.state.addressTwo,
                "City": this.state.userCity,
                "State": this.state.userState,
            };
        }

        this.setState({
            isAddressApiCalling: true
        })
        this.props.getAddressFormat(addNewAddressPayload);
    }

    navigationNext = () => {

        const payload = this.getPayload();
        const stateData = myInstance.getScreenStateData();
        myInstance.setSavedSystematicData(payload);
        const screenState = {
            ...stateData,
            "systematicAdd": { ...this.state }
        }
        myInstance.setScreenStateData(screenState);
        this.props.navigation.navigate({
            routeName: 'systematicWithdrawalSchedule', key: 'systematicWithdrawalSchedule', params: {
                ItemToEdit: this.state.ItemToEdit,
                acc_name: this.state.acc_name,
                acc_no: this.state.acc_no,
                accountType: this.state.accountType
            }
        });
    }
    onSelected = (item) => () => {
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    onlineMethodFuc = index => e => {

        this.setState({ onlineMethod: index, offlineMethod: -1, selectedBank: index })
    }
    offlineMethodFuc = index => e => {

        this.setState({ offlineMethod: index, onlineMethod: -1 })
    }

    generateKeyExtractor = (item) => item.account;
    renderInvestment = () => ({ item, index }) =>
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
        var array = [...this.state.fundList];

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
        var array = [...this.state.fundList];
        var indexChange = this.state.selectedIndex
        if (index !== -1) {
            array[index].fundAmount = value;
            this.setState({ fundList: array });
        }
    }

    changeRemaining = e => {
        let remaining = 0;
        this.state.fundList.map((item, index) => {
            let msg = "Please enter amount greater than or equal to 50";

            var array = [...this.state.fundList];
            array[index].IsNotValidAmount = false;
            if (Number(item.fundAmount) >= 50) {
                if (Number(item.fundAmount) <= this.state.fundRemaining)
                    remaining = remaining + Number(item.fundAmount);
                else {
                    msg = "Amount is greater than Remining amount"
                    array[index].IsNotValidAmount = true;
                }
                array[index].fundAmount = item.fundAmount;
                array[index].isActive = true;
                this.setState({ fundList: array, refresh: !this.state.refresh, errorMsg: msg });
            }
            else if (item.isActive) {
                var array = [...this.state.fundList];
                array[index].IsNotValidAmount = true;
                this.setState({ fundList: array, refresh: !this.state.refresh });
            }
        })
        this.setState({ fundRemaining: this.state.totalFund - remaining, fundConsumed: remaining });
    }



    setTotalFund = (value) => {
        let remaining
        if (value > this.state.fundConsumed)
            remaining = value - this.state.fundConsumed;
        this.setState({ totalFund: Number(value), fundRemaining: Number(remaining) })
    }
    selectAddress = () => {
        this.setState({
            addressDropDown: !this.state.addressDropDown
        });
    }

    selectedDropDownAddressValue = (valueAddress) => {
        let addrOne = '', addrTwo = '', zip = '', city = '', state = '';
        if (valueAddress === 'Current mailing address') {
            addrOne = '';
            addrTwo = '154 Hawthorne Ave';
            zip = '11722';
            city = 'CENTRAL ISLIP';
            state = 'NY';
        }
        this.setState({
            addressOne: addrOne,
            addressTwo: addrTwo,
            zipCodeValue: zip,
            userState: state,
            userCity: city,
            validationAddressOne: true,
            validationPayeeName: true,
            isZipCodeValid: true,
            valueaddressDropDown: valueAddress,
            addressDropDown: false
        });
    }

    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate('systematicWithdrawal');

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
                        <View style={{ flexDirection: 'column', width: '100%' }}>
                            <GInputComponent style={styles.leftSpace}
                                onChangeText={(value) => this.getFundAmount(value, index)}
                                onEndEditing={this.changeRemaining}
                                value={item.fundAmount.toString()}
                                errorFlag={item.IsNotValidAmount}
                                errorText={this.state.errorMsg} />
                        </View>
                    </View>
                    <Text style={styles.auto_invest_flat_min}>{'Min $50'}</Text>
                </View>

            </View>
        )
    generateFundListKeyExtractor = (item) => item.fundNumber.toString();
    renderFundListItem = () => ({ item, index }) =>
        (<ListItem
            isActive={item.isActive}
            fundName={item.fundName}
            minimum={`$ ${item.initialInvestment}`}
            autoInvesting={`$ ${item.initialInvestment} w/ $ ${item.monthlyInvestment} monthly`}
            risk={item.risk}
            onClickCheckbox={this.onSelectFundList(item, index)}
            onClickItem={this.onClickRowItem(item, index)}
        />
        );

    onSelectFundList = (item, index) => () => {
        AppUtils.Dlog(`onSelectFundList:: ${index}`);
        const newItems = [...this.state.vcmFundList];
        AppUtils.Dlog(`newItems:: ${newItems}`);
        newItems[index].isActive = !newItems[index].isActive;
        const tempData = new InvestmentDetails();
        tempData.fundName = item.fundName;
        tempData.fundNumber = item.fundNumber;
        tempData.fundingOption = "";
        tempData.fundingOptionDropDown = "";
        tempData.initialInvestment = "";
        tempData.mininitialInvestment = item.initialInvestment;
        tempData.monthlyInvestment = "0";
        tempData.minmonthlyInvestment = item.initialInvestment;
        tempData.startDate = "";
        tempData.fundingOptionValidation = true;
        tempData.initialInvestmentValidation = true;
        tempData.monthlyInvestmentValidation = true;
        tempData.startDateValidation = true;
        tempData.action = "add";


        let newSelectedData = [...this.state.selectedFundInvestmentsData];
        const isObjExistIndex = this.getIndex(tempData.fundNumber, newSelectedData, 'fundNumber');

        if (isObjExistIndex == -1 && newItems[index].isActive) {

            newSelectedData = [...newSelectedData, tempData];

        } else if (isObjExistIndex != -1 && newItems[index].isActive == false) {


            newSelectedData.splice(isObjExistIndex, 1);

        }


        this.setState({
            vcmFundList: newItems,
            selectedFundInvestmentsData: newSelectedData,
            selectedCount: this.getSelectedItems().length,
            selectedCountValidation: true

        });
    }

    getIndex = (value, arr, prop) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][prop] === value) {
                return i;
            }
        }
        return -1; // to handle the case where the value doesn't exist
    }

    getSelectedItems = () => {
        AppUtils.Dlog("getSelectedItems:: ");
        const selecteditems = [];
        const newItems = [...this.state.vcmFundList];
        newItems.map((item) => {
            if (item.isActive == true) {
                selecteditems.push(item);
            }
        });
        AppUtils.Dlog(`selecteditems:: ${selecteditems.length}`);

        return selecteditems;


    }

    onClickRowItem = (item, index) => () => {
        AppUtils.Dlog(`onSelectFundList:: ${item.fundNumber}`);
        //  this.props.navigation.navigate({ routeName: 'investmentPlanInfo', key: 'investmentPlanInfo' })
        this.props.navigation.push('investmentPlanInfo', { fundDetails: item.fundNumber });

    }

    onChangeText = (keyName) => text => {
        AppUtils.Dlog("onChangeText:::>");
        this.setState({
            [keyName]: text,
            accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true
        });
    }

    onPressDropDown = (keyName) => () => this.setState({
        [keyName]: !this.state[keyName],
        accountTypeValidation: true,
        financialInstitutionNameValidation: true,
        accountOwnerValidation: true,
        transitRoutingNumberValidation: true,
        accountNumberValidation: true,
    });

    onPressDropDownForInvestment = (keyName, index) => () => {
        AppUtils.Dlog(`onPressDropDownForInvestment::: ${keyName}`);
        const newItems = [...this.state.selectedFundInvestmentsData];
        newItems[index][keyName] = !newItems[index][keyName];
        // newItems[index][keyName+"Validation"] = false;
        newItems[index].fundingOptionValidation = true;
        newItems[index].initialInvestmentValidation = true;
        newItems[index].monthlyInvestmentValidation = true;
        newItems[index].startDateValidation = true;

        this.setState({
            selectedFundInvestmentsData: newItems,
        });

    }

    onPressRemoveInvestment = (item, index) => () => {
        AppUtils.Dlog(`onPressRemoveInvestment::: ${item}`);
        const newSelectedData = [...this.state.selectedFundInvestmentsData];
        const newItems = [...this.state.vcmFundList];
        const isObjExistIndex = this.getIndex(item.fundNumber, newSelectedData, 'fundNumber');

        if (isObjExistIndex != -1) {

            newItems[isObjExistIndex].isActive = false;
            newSelectedData[index].isActive = false;
            newSelectedData.splice(index, 1);

        }

        // newSelectedData[index].isActive = false;
        // newSelectedData.splice(index, 1);
        this.setState({
            vcmFundList: newItems,
            selectedFundInvestmentsData: newSelectedData,
            selectedCount: this.getSelectedItems().length

        });
    }
    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onChangeTextForInvestment = (keyName, index) => text => {
        AppUtils.Dlog("onChangeTextForInvestment:::>");
        const newItems = [...this.state.selectedFundInvestmentsData];
        newItems[index][keyName] = text;
        // newItems[index][keyName+"Validation"] = false;
        newItems[index].fundingOptionValidation = true;
        newItems[index].initialInvestmentValidation = true;
        newItems[index].monthlyInvestmentValidation = true;
        newItems[index].startDateValidation = true;

        let total = 0;
        for (let i = 0; i < newItems.length; i++) {
            if (!isNaN(newItems[i].initialInvestment) && newItems[i].initialInvestment != "") {
                total += parseFloat(newItems[i].initialInvestment);

            }
        }

        AppUtils.Dlog(`total:::>${total}`);

        this.setState({
            totalInitialInvestment: `$ ${total}`,
            selectedFundInvestmentsData: newItems,
        });


    }

    onChangeDateForInvestment = (keyName, index) => date => {
        AppUtils.Dlog("onChangeDateForInvestment:::>");
        const newItems = [...this.state.selectedFundInvestmentsData];
        newItems[index][keyName] = date;
        // newItems[index][keyName+"Validation"] = false;
        newItems[index].fundingOptionValidation = true;
        newItems[index].initialInvestmentValidation = true;
        newItems[index].monthlyInvestmentValidation = true;
        newItems[index].startDateValidation = true;

        this.setState({
            selectedFundInvestmentsData: newItems,
        });
    }

    onSelectedDropDownValue = (dropDownName, objIndex) => (value, index, data) => {
        AppUtils.Dlog(`onSelectedDropDownValue:: ${dropDownName}`);
        let item = data[index];
        const newItems = [...this.state.selectedFundInvestmentsData];

        switch (dropDownName) {
            case "fundingOptionDropDown":
                newItems[objIndex].fundingOptionDropDown = item.value;
                newItems[objIndex].fundingOption = item.key;

                AppUtils.Dlog(`item.value:: ${item.value}`);
                AppUtils.Dlog(`newItems[objIndex]:: ${newItems[objIndex]}`);

                this.setState({
                    selectedFundInvestmentsData: newItems
                });


                break;

            default:
                break;

        }
    }
    // Modal - Filter Funds
    setModalVisible = (visible) => () => {
        if (!visible && !this.state.applyFilterState) {
            this.clearFilterAction();
        }
        this.setState({ modalVisible: visible });
        if (!this.state.applyFilterState) {
            this.constructFilterData();
        }
    }

    // Apply Filter Actions  
    applyFilterAction = (visible) => () => {
        this.setState({
            modalVisible: visible,
            applyFilterState: true,
            fundList: [],
            isFilterApplied: true
        });

        let mininvestkey = "";
        this.state.filtermindata.map((item) => {
            if (item.isActive) {
                if (mininvestkey !== null && mininvestkey !== "") {
                    mininvestkey = mininvestkey.concat(`|${item.value}`);
                } else {
                    mininvestkey = item.value;
                }
            }
        });

        let riskkey = "";
        this.state.filterriskdata.map((item) => {
            if (item.isActive) {
                if (riskkey !== null && riskkey !== "") {
                    riskkey = riskkey.concat(`|${item.key}`);
                } else {
                    riskkey = item.key;
                }
            }
        });

        let funddatakey = "";
        this.state.filterfunddata.map((item) => {
            if (item.isActive) {
                if (funddatakey !== null && funddatakey !== "") {
                    funddatakey = funddatakey.concat(`|${item.key}`);
                } else {
                    funddatakey = item.key;
                }
            }
        });
        AppUtils.Dlog("minInvest=", mininvestkey);
        AppUtils.Dlog("risk=", riskkey);
        AppUtils.Dlog("fundData=", funddatakey);

        const fundListPayload = { 'minInvestment': mininvestkey };
        this.props.getFundListData(fundListPayload);
    }
    // Checkbox selection on Clicking Filters 
    onCheckboxSelect = (fromtype, item, index) => () => {
        AppUtils.Dlog('Index : ', index);
        AppUtils.Dlog('Checkbox Selected : ', `${item.key} ${item.value} ${item.isActive}`);
        let newItm = [];
        switch (fromtype) {
            case 'minInvest':
                newItm = [...this.state.filtermindata];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filtermindata: newItm });
                break;
            case 'risk':
                newItm = [...this.state.filterriskdata];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterriskdata: newItm });
                break;
            case 'fundType':
                newItm = [...this.state.filterfunddata];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterfunddata: newItm });
                break;
        }
        AppUtils.Dlog(`New Item:${JSON.stringify(newItm)}`);
    }

    // Clear Filter Actions  
    clearFilterAction = () => {
        this.setState({ applyFilterState: false });
        const tempmindata = [...this.state.filtermindata];
        const tempriskdata = [...this.state.filterriskdata];
        const tempfunddata = [...this.state.filterfunddata];

        this.setState({
            filtermindata: [...tempmindata.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...tempriskdata.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...tempfunddata.map(v => ({ ...v, isActive: false }))]
        });
    }

    // Construct Filter values from Master Data on Clicking Filter Funds
    constructFilterData = () => {
        const temp_key_min_inv = 'filter_min_inv';
        const temp_key_risk = 'filter_risk';
        const temp_key_fund_type = 'filter_fund_type';
        let tempMinInvData = [];
        let tempRiskData = [];
        let tempFundTypeData = [];



        AppUtils.Dlog('Filter Clicked...');
        if (temp_key_min_inv !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[temp_key_min_inv] && this.props.masterLookupStateData[temp_key_min_inv].value) {
            tempMinInvData = this.props.masterLookupStateData[temp_key_min_inv].value;
        }

        if (temp_key_risk !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[temp_key_risk] && this.props.masterLookupStateData[temp_key_risk].value) {
            tempRiskData = this.props.masterLookupStateData[temp_key_risk].value;
        }

        if (temp_key_fund_type !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[temp_key_fund_type] && this.props.masterLookupStateData[temp_key_fund_type].value) {
            tempFundTypeData = this.props.masterLookupStateData[temp_key_fund_type].value;
        }

        this.setState({
            filtermindata: [...tempMinInvData.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...tempRiskData.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...tempFundTypeData.map(v => ({ ...v, isActive: false }))]
        });
    }

    navigateCompareFunds = () => {
        // AppUtils.Dlog(this.state.selectedFundInvestmentsData);
        if (this.state.selectedFundInvestmentsData.length > 1) {
            if (this.state.selectedFundInvestmentsData.length < 5) {
                let fundSelectedCompare = "";
                this.state.selectedFundInvestmentsData.map((item, index) => {
                    fundSelectedCompare = `${fundSelectedCompare.concat(`fundNumber${index + 1}=${item.fundNumber}`)}&`;
                });
                // AppUtils.Dlog("Selected Funds:"+fundSelectedCompare);
                if (fundSelectedCompare !== null && fundSelectedCompare !== "") {
                    this.props.navigation.push('compareFunds', { fundDetails: fundSelectedCompare });
                }
            } else {
                alert('Please select minimum 2 or maximum 4 funds to compare');
            }
        } else {
            alert('Please select minimum 2 or maximum 4 funds to compare');
        }
    }


    render() {
        const tempFundOptionsData = fundingOptionsData;
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month}-${date}-${year}`;
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
                            <View style={{ flexDirection: 'column', justifyContent: "center", borderColor: '#9DB4CE', borderWidth: 1, padding: scaledHeight(20), marginTop: scaledHeight(20) }}>

                                <Text style={{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{this.state.acc_name}</Text>
                                <Text style={{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{'Account Number ' + this.state.acc_no}</Text>


                            </View>

                            <Text style={styles.autoInvest_sub_title_text}>{'- Withdrawal From'}</Text>
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

                            />

                            <Text style={styles.autoInvest_sub_title_text}>{'- Fund To'}</Text>
                            <View style={styles.seperator_line} />
                            <Text style={styles.autoInvestCont}>{'Choose how you will fund your account and indicate your initial investment amount.'}</Text>
                            <Text style={styles.autoInvest_sub_title_text}>{'Offline Method'}</Text>
                            <Text style={styles.autoInvestCont}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcittet'}</Text>

                            <TouchableOpacity onPress={this.offlineMethodFuc(1)}>

                                <View style={this.state.offlineMethod === 1 ? styles.bankViewSelected : styles.bankView}>
                                    <View style={{ width: scaledWidth(66), margin: scaledWidth(5), backgroundColor: '#E9E9E9', justifyContent: 'center', }}></View>
                                    <View style={{ justifyContent: 'center', marginLeft: scaledWidth(20) }}>
                                        <Text style={{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold' }}>{'Check Order'}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.offlineMethodFuc(2)}>

                                <View style={this.state.offlineMethod === 2 ? styles.bankViewSelected : styles.bankView}>
                                    <View style={{ width: scaledWidth(66), margin: scaledWidth(5), backgroundColor: '#E9E9E9', justifyContent: 'center' }}></View>
                                    <View style={{ justifyContent: 'center', marginLeft: scaledWidth(20) }}>
                                        <Text style={{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' }}>{'Directed SWPs'}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={{ alignItems: "center" }}><Text style={styles.autoInvest_sub_title_text}>{'Or'}</Text></View>
                            <Text style={styles.autoInvest_sub_title_text}>{'Online Method'}</Text>
                            <FlatList style={{ marginTop: scaledHeight(20) }}
                                data={autoInvestmentAddBankJson}
                                renderItem={this.renderInvestment()}
                                keyExtractor={this.generateKeyExtractor}

                            />

                            {this.state.offlineMethod === 1 ?
                                <View>
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
                                    {this.state.valueaddressDropDown === 'Payee and address' ?
                                        <View style={{ flexDirection: 'column', marginLeft: scaledWidth(15), marginTop: scaledHeight(15), width: '100%' }}>
                                            <Text style={styles.financialTextLabel}>{'Payee Name'}</Text>
                                            <GInputComponent onChangeText={this.setPayeeName}
                                                value={this.state.payeeName}
                                                errorFlag={!this.state.validationPayeeName}
                                                errorText={globalString.profileValidationMessages.validatePayeeName} />
                                        </View>
                                        : null}
                                    <View style={{ flexDirection: 'column', marginLeft: scaledWidth(15), marginTop: scaledHeight(15), width: '100%' }}
                                        pointerEvents={this.state.valueaddressDropDown === 'Payee and address' ? "auto" : "none"}>
                                        <Text style={styles.financialTextLabel}>{'Address'}</Text>
                                        <GInputComponent placeholder={globalString.addAddressInfo.addressLineOne}
                                            onChangeText={this.setAddressOne}
                                            value={this.state.addressOne}
                                            errorFlag={!this.state.validationAddressOne}
                                            errorText={globalString.profileValidationMessages.validateAddressLineOne} />

                                        <GInputComponent propInputStyle={{ marginTop: scaledHeight(10) }} placeholder={globalString.addAddressInfo.addressLineTwo}
                                            value={this.state.addressTwo}
                                            onChangeText={this.setAddressTwo} />
                                    </View>

                                    <View style={{ flexDirection: 'column', marginLeft: scaledWidth(15), marginTop: scaledHeight(15), width: '100%' }}
                                        pointerEvents={this.state.valueaddressDropDown === 'Payee and address' ? "auto" : "none"}>
                                        <Text style={styles.financialTextLabel}>{'ZIP Code'}</Text>
                                        <GInputComponent placeholder={globalString.addAddressInfo.zipCode}
                                            onBlur={this.validateZipCodeValue}
                                            onChangeText={this.setZipcodeValue}
                                            value={this.state.zipCodeValue}
                                            maxLength={5}
                                            errorFlag={!this.state.isZipCodeValid}
                                            errorText={globalString.profileValidationMessages.validateZipcode} />
                                        {/* keyboardType="numeric" */}
                                    </View>

                                    <View style={{ flexDirection: 'column', marginLeft: scaledWidth(15), marginTop: scaledHeight(15), width: '100%' }}
                                        pointerEvents={this.state.valueaddressDropDown === 'Payee and address' ? "auto" : "none"}>
                                        <Text style={styles.financialTextLabel}>{'City & State'}</Text>
                                        <View style={{ flexDirection: 'row', flex: 1, marginBottom: scaledHeight(20) }}>
                                            <GInputComponent value={this.state.userCity} propInputStyle={{ flex: 0.5, marginRight: scaledWidth(30) }} />
                                            <GInputComponent value={this.state.userState} propInputStyle={{ flex: 0.5, marginRight: scaledWidth(30) }} />
                                        </View>

                                    </View>
                                </View> : null}

                            {this.state.offlineMethod === 2 ?
                                <View>
                                    <Text style={styles.sectionDescTxt}>
                                        {globalString.accManagement.investmentSelectionNote}
                                    </Text>

                                    <GButtonComponent
                                        buttonStyle={styles.filterFundsBtn}
                                        buttonText={globalString.accManagement.filterFunds}
                                        textStyle={styles.filterFundsBtnTxt}
                                        onPress={this.setModalVisible(true)}
                                    />

                                    <GButtonComponent
                                        buttonStyle={styles.compareFundsBtn}
                                        buttonText={globalString.accManagement.compareFunds}
                                        textStyle={styles.compareFundsBtnTxt}
                                        onPress={this.navigateCompareFunds}
                                    />
                                    <FlatList
                                        data={this.state.vcmFundList}
                                        keyExtractor={this.generateFundListKeyExtractor}
                                        renderItem={this.renderFundListItem()}
                                    />

                                    { /* ----------- Fund Your Investments -------------------*/}
                                    {this.state.selectedFundInvestmentsData.length > 0 &&
                                        <View style={styles.sectionGrp}>
                                            <View style={styles.accTypeSelectSection}>
                                                <Text style={styles.headings}>
                                                    {globalString.accManagement.fundYourInvest}
                                                </Text>
                                                <TouchableOpacity
                                                    //  onPress={() => { alert("Expand/Cllapse") }}
                                                    activeOpacity={0.8}
                                                    accessibilityRole="button"
                                                >
                                                    <Text style={styles.expandCollpaseTxt}>
                                                        [ - ]
                                    </Text>
                                                </TouchableOpacity>

                                            </View>
                                            <Text style={styles.lblLine} />


                                            <View style={styles.childSectionGrp}>
                                                <Text style={styles.sectionDescTxt}>
                                                    {globalString.accManagement.fundYourInvestNote}
                                                </Text>

                                                {this.state.selectedFundInvestmentsData.map((item, index) => {
                                                    return (
                                                        <View
                                                            key={item.fundNumber}
                                                        >
                                                            <TouchableOpacity
                                                                onPress={this.onPressRemoveInvestment(item, index)}
                                                                activeOpacity={0.8}
                                                                accessibilityRole="button"
                                                                style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: scaledHeight(22) }}
                                                            >
                                                                <Text style={{ fontSize: scaledHeight(16), color: '#61285F', fontWeight: 'bold', width: '100%', textAlign: 'right', lineHeight: 20 }}>
                                                                    {globalString.common.remove}
                                                                </Text>
                                                            </TouchableOpacity>
                                                            <View style={styles.investmentSection}>
                                                                <Text style={styles.lblTxt}>
                                                                    {globalString.accManagement.fundName}
                                                                </Text>
                                                                <Text style={styles.sectionDescTxt}>
                                                                    {item.fundName}
                                                                </Text>


                                                                <GDropDownComponent
                                                                    inputref={this.setInputRef(`fundingOptionDropDown${index}`)}
                                                                    dropDownLayout={styles.dropDownLayout}
                                                                    dropDownTextName={styles.dropDownTextName}
                                                                    textInputStyle={styles.textInputStyle}
                                                                    dropDownName={globalString.accManagement.fundingOptions}
                                                                    data={tempFundOptionsData}
                                                                    changeState={this.onPressDropDownForInvestment("fundingOptionDropDown", index)}
                                                                    // showDropDown={this.state.selectedFundInvestmentsData[index].fundingOptionDropDown}
                                                                    dropDownValue={this.state.selectedFundInvestmentsData[index].fundingOptionDropDown}
                                                                    selectedDropDownValue={this.onSelectedDropDownValue("fundingOptionDropDown", index)}
                                                                    itemToDisplay="value"
                                                                    dropDownPostition={{ ...styles.dropDownPostition, top: scaledHeight(160) }}
                                                                    errorFlag={!this.state.selectedFundInvestmentsData[index].fundingOptionValidation}
                                                                    errorText={globalString.accManagement.emptyFundOptionsMsg}
                                                                />

                                                                <Text style={styles.lblTxt}>
                                                                    {globalString.accManagement.initInvestment}
                                                                </Text>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>

                                                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                                                        $
                                                    </Text>
                                                                    <GInputComponent
                                                                        inputref={this.setInputRef(`initialInvestment${index}`)}
                                                                        propInputStyle={{ width: '90%' }}
                                                                        maxLength={globalString.maxLength.initInvestment}
                                                                        placeholder="Initial Investment"
                                                                        keyboardType="decimal-pad"
                                                                        value={this.state.selectedFundInvestmentsData[index].initialInvestment}
                                                                        onChangeText={this.onChangeTextForInvestment("initialInvestment", index)}
                                                                        errorFlag={!this.state.selectedFundInvestmentsData[index].initialInvestmentValidation}
                                                                        errorText=""
                                                                    />

                                                                </View>
                                                                {!this.state.selectedFundInvestmentsData[index].initialInvestmentValidation &&
                                                                    <Text style={styles.errMsg}>
                                                                        {globalString.accManagement.emptyInitInvestmentMsg}
                                                                    </Text>
                                                                }
                                                                <Text style={{ textAlign: 'right', width: '100%', color: '#56565A', fontSize: scaledHeight(12), marginTop: scaledHeight(12), }}>
                                                                    {`Minimum $${item.mininitialInvestment}`}
                                                                </Text>


                                                                {
                                                                    this.state.selectedFundInvestmentsData[index].fundingOptionDropDown == "Initial and Monthly Investment" &&
                                                                    <View style={{ flexGrow: 1 }}>
                                                                        <Text style={styles.lblTxt}>
                                                                            {globalString.accManagement.monthlyInvestment}
                                                                        </Text>
                                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                                                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                                                                $
                                                            </Text>
                                                                            <GInputComponent
                                                                                inputref={this.setInputRef(`monthlyInvestment${index}`)}
                                                                                propInputStyle={{ width: '90%' }}
                                                                                maxLength={globalString.maxLength.monthlyInvestment}
                                                                                placeholder="Monthly Investment"
                                                                                value={this.state.selectedFundInvestmentsData[index].monthlyInvestment}
                                                                                keyboardType="decimal-pad"
                                                                                onChangeText={this.onChangeTextForInvestment("monthlyInvestment", index)}
                                                                                errorFlag={!this.state.selectedFundInvestmentsData[index].monthlyInvestmentValidation}
                                                                                errorText=""

                                                                            />
                                                                        </View>
                                                                        {!this.state.selectedFundInvestmentsData[index].monthlyInvestmentValidation &&
                                                                            <Text style={styles.errMsg}>
                                                                                {globalString.accManagement.emptyMonthlyInvestmentMsg}
                                                                            </Text>
                                                                        }


                                                                        <Text style={styles.lblTxt}>
                                                                            {globalString.accManagement.startDate}
                                                                        </Text>

                                                                        <GDateComponent
                                                                            inputref={this.setInputRef(`startDate${index}`)}
                                                                            date={this.state.selectedFundInvestmentsData[index].startDate}
                                                                            minDate={currentdate}
                                                                            placeholder="MM/DD/YYYY"
                                                                            errorFlag={!this.state.selectedFundInvestmentsData[index].startDateValidation}
                                                                            errorMsg={globalString.accManagement.emptyStartDate}
                                                                            onDateChange={this.onChangeDateForInvestment("startDate", index)}
                                                                        />

                                                                    </View>
                                                                }


                                                            </View>
                                                        </View>

                                                    );
                                                })}

                                                <View style={styles.investmentSectionFooter}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: scaledHeight(20) }}>

                                                        <Text style={{ color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                                            {globalString.accManagement.total}
                                                        </Text>
                                                        <Text style={{ color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                                            {this.state.totalInitialInvestment}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>

                                        </View>
                                    }
                                </View> : null}
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
                        onPress={this.navigationLogin}
                    />
                    {this.state.valueaddressDropDown === 'Payee and address' ?
                        <GButtonComponent
                            buttonStyle={styles.continueButtonSelected}//this.state.selectedBank>-1 && 
                            buttonText={globalString.common.validate}
                            textStyle={styles.continueButtonText}
                            onPress={this.addAddressOnValidate('validateAddressValueOne')}
                        /> : null}
                    <GButtonComponent
                        buttonStyle={this.state.totalFund >= 50 && this.state.fundRemaining === 0 ? styles.continueButtonSelected : styles.continueButton}//this.state.selectedBank>-1 && 
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.state.totalFund >= 50 && this.state.fundRemaining === 0 ? this.navigationNext : null}//this.state.selectedBank>-1 && 
                    />
                    <GFooterComponent />


                    <Modal
                        transparent
                        visible={this.state.modalVisible}
                        onRequestClose={this.setModalVisible(!this.state.modalVisible)}
                    >
                        <View style={styles.modalBackgroundView}>
                            <View style={styles.modalContainer}>
                                <ScrollView>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitleText}>
                                            {globalString.accManagement.filterFunds}
                                        </Text>
                                        <TouchableOpacity onPress={this.setModalVisible(!this.state.modalVisible)}>
                                            <GIcon
                                                name="close"
                                                type="antdesign"
                                                size={30}
                                                color="black"
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>
                                            {globalString.accManagement.minimumInvestment}
                                        </Text>
                                        {
                                            this.state.filtermindata.map((item, index) => {
                                                let itemvalue = item.value;
                                                if (item.key == 50) {
                                                    itemvalue = itemvalue.replace(new RegExp('50', 'g'), `${globalString.common.dollar}50`);
                                                } else {
                                                    itemvalue = globalString.common.dollar + item.value;
                                                }
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor="#DEDEDF"
                                                        innerCicleColor="#61285F"
                                                        labelStyle={styles.modalCheckBoxLabel}
                                                        label={itemvalue}
                                                        selected={item.isActive}
                                                        onPress={this.onCheckboxSelect("minInvest", item, index)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalRiskCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>
                                            {globalString.accManagement.risk}
                                        </Text>
                                        {
                                            this.state.filterriskdata.map((item, index) => {
                                                return (
                                                    <View key={item.key} style={styles.modalRiskViewContainer}>
                                                        <CustomCheckBox
                                                            size={20}
                                                            itemBottom={0}
                                                            itemTop={0}
                                                            outerCicleColor="#DEDEDF"
                                                            innerCicleColor="#61285F"
                                                            labelStyle={styles.modalCheckBoxLabel}
                                                            label={item.value}
                                                            selected={item.isActive}
                                                            onPress={this.onCheckboxSelect("risk", item, index)}
                                                        />
                                                        <TouchableOpacity>
                                                            <GIcon
                                                                name="infocirlceo"
                                                                type="antdesign"
                                                                size={20}
                                                                color="#DEDEDF"
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalFundCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>
                                            {globalString.accManagement.fundType}
                                        </Text>
                                        {
                                            this.state.filterfunddata.map((item, index) => {
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor="#DEDEDF"
                                                        innerCicleColor="#61285F"
                                                        labelStyle={styles.modalCheckBoxLabel}
                                                        label={item.value}
                                                        selected={item.isActive}
                                                        onPress={this.onCheckboxSelect("fundType", item, index)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalActionContainer}>
                                        <GButtonComponent
                                            buttonStyle={styles.modalClearFilterBtn}
                                            buttonText={globalString.accManagement.clearFilter}
                                            textStyle={styles.modalCancelBtnTxt}
                                            onPress={this.clearFilterAction}
                                        />
                                        <GButtonComponent
                                            buttonStyle={styles.modalApplyFilterBtn}
                                            buttonText={globalString.accManagement.applyFilter}
                                            textStyle={styles.modalApplyBtnTxt}
                                            onPress={this.applyFilterAction(false)}
                                        />
                                    </View>

                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
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