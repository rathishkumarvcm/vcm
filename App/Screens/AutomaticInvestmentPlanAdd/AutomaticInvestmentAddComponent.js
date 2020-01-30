import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GSingletonClass,
    GIcon,
} from '../../CommonComponents';
import AppUtils from '../../Utils/AppUtils';
import { CustomRadio } from '../../AppComponents';
import globalString from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";


const switchStyle = { flase: '#DBDBDB', true: '#444444' };
const myInstance = GSingletonClass.getInstance();

class AutomaticInvestmentAddComponent extends Component {
    constructor(props) {
        super(props);
        const automaticAdd = myInstance.getAutomaticInvestmentEditMode() ? (myInstance.getScreenStateData().automaticAdd || {}) : {};
        const { navigation } = this.props;
        this.isValidScreen = true;
        this.addBank = false;
        this.otherBank = false;
        this.popularAccount = [
            "Discover",
            "Bank of America",
            "Wells Fargo",
            "Chase",
            "Bank Name 1",
            "Bank Name 2",
            "Bank Name 3",
            "Others"
        ];
        this.IsNotValidAmount = false;
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
            refresh: false,
            errorMsg: 'Please enter amount greater than or equal to 50',
            errMsg: "",
            // IsNotValidAmount:false,
            bankAccountDetails: [],
            addBankAccount: {
                accountType: "",
                financialInstitutionName: "",
                accountOwner: "",
                transitRoutingNumber: "",
                accountNumber: "",
                accountTypeValidation: true,
                financialInstitutionNameValidation: true,
                accountOwnerValidation: true,
                transitRoutingNumberValidation: true,
                accountNumberValidation: true,
                addrLine1: '',
                addrLine2: '',
                zipcode: '',
                city: "",
                stateCity: "",
                zipcodeValidation: true,
                cityValidation: true,
                stateCityValidation: true,
                stateValidation: true,
                isZipApiCalling: false,
                isAddressApiCalling: false,
                addrLine1Validation: true,
                addrLine2Validation: true,
                userCity: '',
                userState: '',
            },
            currentZipCodeRef: {
                stateKey: "",
                keyName: "",
                objIndex: ""
            },
            ...automaticAdd
        };
    }


    componentDidMount() {
        const { getFundListData, getBankAccountInfo, automaticInvestmentState, bankAccountInfo } = this.props;
        const { fundList, ItemToEdit, accountType } = this.state;
        if (fundList && !fundList.length > 0) {
            const fundListPayload = { companyId: '' };
            getFundListData(fundListPayload);
        }
        getBankAccountInfo();
        if (ItemToEdit > -1) {
            if (this.props && automaticInvestmentState) {
                let valueToEdit;
                switch (accountType) {
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
                if (valueToEdit != null) {
                    let bankIndex = 0;
                    bankAccountInfo.forEach((bank, index) => {
                        if (bank.bankName === valueToEdit.fundFrom) {
                            bankIndex = index;
                        }
                    });

                    let invest = [...valueToEdit.investedIn.map(v => ({ ...v, isActive: true, IsNotValidAmount: false, errorMsg: 'Please enter amount greater than or equal to 50' }))];
                    this.setState({
                        accName: valueToEdit.account.split('|')[0],
                        accNumber: valueToEdit.account.split('|')[1],
                        totalFund: Number(valueToEdit.totalAmount),
                        fundList: invest,
                        fundConsumed: Number(valueToEdit.totalAmount),
                        fundRemaining: 0,
                        selectedBank: bankIndex,
                    });
                }
            }
        }

    }

    componentDidUpdate(prevProps, prevState) {
        const { fundListState, bankAccountInfo, addressFormatData } = this.props;
        const { bankAccountDetails, ItemToEdit, currentZipCodeRef, estate } = this.state;
        if (this.props !== prevProps) {
            let tempFundListData = [];
            if (ItemToEdit == -1) {
                if (fundListState[ActionTypes.GET_FUNDLIST] !== undefined && fundListState[ActionTypes.GET_FUNDLIST].Items !== null) {
                    tempFundListData = fundListState[ActionTypes.GET_FUNDLIST];
                    if (bankAccountInfo && bankAccountInfo !== bankAccountDetails) {
                        this.setState({
                            fundList: [...tempFundListData.map(v => ({ ...v, isActive: false, fundAmount: 0, IsNotValidAmount: false, errorMsg: 'Please enter amount greater than or equal to 50' }))],
                            bankAccountDetails: bankAccountInfo
                        });
                    }
                }
            }
            else {
                if (bankAccountInfo && bankAccountInfo !== bankAccountDetails) {
                    this.setState({
                        bankAccountDetails: bankAccountInfo
                    });
                }
            }
            const {
                keyName = "",
                objIndex = -1
            } = currentZipCodeRef;

            if (this.props !== prevProps) {

                const stateCityKey = ActionTypes.GET_STATECITY;
                if (addressFormatData[stateCityKey]) {
                    if (addressFormatData[stateCityKey] !== prevProps.addressFormatData[stateCityKey]) {
                        const tempResponse = addressFormatData[stateCityKey];

                        if (tempResponse && tempResponse.City) {
                            if (keyName === "zipcode" && objIndex !== -1) {
                                const newItems = [...estate.trusteeData];
                                newItems[objIndex].city = tempResponse.City;
                                newItems[objIndex].stateCity = tempResponse.State;

                                this.setState(() => (() => ({
                                    [prevState.currentZipCodeRef.stateKey]: {
                                        ...prevState[prevState.currentZipCodeRef.stateKey],
                                        trusteeData: newItems

                                    }
                                })));
                            } else {
                                this.setState(() => ({
                                    [prevState.currentZipCodeRef.stateKey]: {
                                        ...prevState[prevState.currentZipCodeRef.stateKey],
                                        city: tempResponse.City,
                                        stateCity: tempResponse.State

                                    }
                                }));
                            }
                        }
                    }
                }

                const addressKey = ActionTypes.GET_ADDRESSFORMAT;
                if (addressFormatData[addressKey]) {
                    if (addressFormatData[addressKey] !== prevProps.addressFormatData[addressKey]) {
                        const tempResponse = addressFormatData[addressKey];

                        if (tempResponse && tempResponse.City) {
                            if (keyName === "zipcode" && objIndex !== -1) {
                                const newItems = [...estate.trusteeData];
                                newItems[objIndex].city = tempResponse.City;
                                newItems[objIndex].stateCity = tempResponse.State;
                                newItems[objIndex].addrLine1 = tempResponse.Address1 || "";
                                newItems[objIndex].addrLine2 = tempResponse.Address2 || "";
                                newItems[objIndex].addrLine1Validation = true;
                                newItems[objIndex].addrLine2Validation = true;

                                this.setState(() => (() => ({
                                    [prevState.currentZipCodeRef.stateKey]: {
                                        ...prevState[prevState.currentZipCodeRef.stateKey],
                                        trusteeData: newItems
                                    }
                                })));
                            }
                            else {
                                this.setState(() => ({
                                    [prevState.currentZipCodeRef.stateKey]: {
                                        ...prevState[prevState.currentZipCodeRef.stateKey],
                                        city: tempResponse.City,
                                        stateCity: tempResponse.State,
                                        addrLine1: tempResponse.Address1 || "",
                                        addrLine2: tempResponse.Address2 || "",
                                        addrLine1Validation: true,
                                        addrLine2Validation: true
                                    }
                                }));
                            }
                        } else if (tempResponse && tempResponse.ErrorNumber) {
                            if (currentZipCodeRef.keyName === "zipcode" && objIndex !== -1) {
                                const newItems = [...estate.trusteeData];
                                newItems[objIndex].addrLine1 = "";
                                newItems[objIndex].addrLine2 = "";
                                newItems[objIndex].addrLine1Validation = false;
                                newItems[objIndex].addrLine2Validation = false;

                                this.setState(() => (() => ({
                                    [prevState.currentZipCodeRef.stateKey]: {
                                        ...prevState[prevState.currentZipCodeRef.stateKey],
                                        trusteeData: newItems
                                    },
                                    errMsg: "Invalid address"

                                })));
                            } else {
                                this.setState(() => ({
                                    [prevState.currentZipCodeRef.stateKey]: {
                                        ...prevState[prevState.currentZipCodeRef.stateKey],
                                        // addrLine1: "",
                                        // addrLine2: "",
                                        addrLine1Validation: false,
                                        addrLine2Validation: false
                                    },
                                    errMsg: "Invalid address"
                                }));
                            }
                        }
                    }
                }
            }
        }
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined" || str.replace(/^\s+|\s+$/gm, '') === "") {
            return true;
        }
        return false;
    }

    getPayload = () => {

        const { fundList, ItemToEdit, accName, accNumber, accountType,
            fundRemaining, totalFund, bankAccountDetails, selectedBank, fundConsumed, refresh,addBankAccount } = this.state;
        const selected = [];
        fundList.forEach(item => {
            if (item.fundAmount >= 50) {
                selected.push({ fundName: item.fundName, fundAmount: item.fundAmount });
            }
        });
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
            totalFund: `${totalFund}`,
            fundFrom: selectedBank!=-1?bankAccountDetails[Number(selectedBank)].bankName:addBankAccount.financialInstitutionName,
            investedIn: selected,
            fundConsumed,
            refresh,
        };
        return payload;

    }

    navigationNext = () => {
        const { navigation } = this.props;
        const { ItemToEdit, accName, accNumber, accountType } = this.state;
        if(this.validateInfoFields())
        {
            const payload = this.getPayload();
            const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAutomaticData(payload);
            const screenState = {
                ...stateData,
                "automaticAdd": { ...this.state }
            };
            myInstance.setScreenStateData(screenState);
            
            navigation.navigate({
                routeName: 'automaticInvestmentSchedule', key: 'automaticInvestmentSchedule', params: {
                    ItemToEdit,
                    accName,
                    accNumber,
                    accountType
                }
            });
        }
    }

    onSelected = (item) => () => {

        this.setState({ selectedItemID: item.id, selectedItemName: item.name });
    }

    navigationBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    navigationCancel = () => {
        const { navigation } = this.props;
        const { ItemToEdit } = this.state;
        if (ItemToEdit > -1)
            navigation.goBack();
        else
            navigation.goBack('automaticInvestmentAccount');
    }

    generateKeyExtractor = (item) => item.bankName;

    renderInvestment = () => ({ item, index }) => {
        const { selectedBank } = this.state;
        return (
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
        const { totalFund, fundList, fundRemaining, fundConsumed } = this.state;
        if (totalFund >= 50) {
            const array = [...fundList];
            if (index !== -1) {


                let remining = fundRemaining;
                let consumed = fundConsumed;
                if (array[Number(index)].isActive && array[Number(index)].errorMsg == '') {
                    remining = Number(fundRemaining) + Number(array[Number(index)].fundAmount);
                    consumed = Number(fundConsumed) - Number(array[Number(index)].fundAmount);
                    array[Number(index)].fundAmount = 0;

                }
                else if (array[Number(index)].isActive && array[Number(index)].errorMsg != '') {
                    array[Number(index)].fundAmount = 0;
                    array[Number(index)].IsNotValidAmount = false;
                    array[Number(index)].errorMsg = '';
                    this.isValidScreen = true;
                }
                else if (!array[Number(index)].isActive) {
                    array[Number(index)].fundAmount = array[Number(index)].fundAmount === 0 ? '' : array[Number(index)].fundAmount;
                }
                const switchVal = array[Number(index)].isActive;
                array[Number(index)].isActive = !switchVal;
                this.IsNotValidAmount = false;
                this.setState({ fundList: array, fundRemaining: remining, fundConsumed: consumed });//investedIn:[] 
            }
        }
        else {
            this.IsNotValidAmount = true;
        }
    }

    selectedBankItem = index => () => {
        const { refresh } = this.state;
        this.addBank = false;
        this.otherBank = false;
        this.setState({ selectedBank: index, refresh: !refresh });
    }

    getFundAmount = (value, index) => {
        const { fundList } = this.state;//,ItemToEdit,investedIn
        const array = [...fundList];
        array[Number(index)].fundAmount = value;
        this.setState({ fundList: array });
    }
    changeRemaining = () => {
        const { totalFund, fundList, refresh } = this.state;//,ItemToEdit,investedIn
        let remaining = totalFund;

        fundList.forEach((item, index) => {
            let msg = "Please enter amount greater than or equal to 50";

            const array = [...fundList];
            array[Number(index)].IsNotValidAmount = false;
            array[Number(index)].errorMsg = '';
            if (Number(item.fundAmount) >= 50) {
                this.isValidScreen = true;
                if (Number(item.fundAmount) <= remaining)
                    remaining -= Number(item.fundAmount);
                else {
                    msg = "Amount is greater than Remining amount";
                    array[Number(index)].IsNotValidAmount = true;
                    array[Number(index)].errorMsg = msg;
                    this.isValidScreen = false;
                }
                array[Number(index)].fundAmount = item.fundAmount;
                array[Number(index)].isActive = true;

                this.setState({
                    fundList: array, refresh: !refresh,
                    fundRemaining: remaining, fundConsumed: totalFund - remaining
                });
            }
            else if (item.isActive) {
                array[Number(index)].IsNotValidAmount = true;
                array[Number(index)].errorMsg = msg;
                this.setState({ fundList: array, refresh: !refresh });
            }
        });
    }

    setTotalFund = (value) => {
        let remaining = 0;
        const { fundConsumed } = this.state;
        if (value > fundConsumed)
            remaining = value - fundConsumed;
        this.setState({ totalFund: Number(value), fundRemaining: Number(remaining) });
    }

    checkFundAmount = () => {
        const { totalFund } = this.state;
        this.IsNotValidAmount = (totalFund < 50);
    }

    generateAmountKeyExtractor = (item) => item.fundNumber.toString()

    renderAmount = () => ({ item, index }) => {
        const { ItemToEdit } = this.state;
        return (

            <View style={styles.fundListView}>
                <View style={styles.fundListHeader}>
                    <View style={styles.fundListHeaderView}>
                        <Text style={styles.fundNameText}>{item.fundName}</Text>
                    </View>
                    <View style={styles.fundNameSwitch}>

                        <Switch trackColor={switchStyle}
                            onValueChange={this.toggleSwitch(index)}
                            value={item.isActive}
                            disabled={ItemToEdit > -1 ? true : false}
                        />

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
                                maxLength={13}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                    <Text style={styles.auto_invest_flat_min}>Min $50</Text>
                </View>

            </View>
        );
    }

    setAddBank = () => () => {
        const { refresh } = this.state;
        this.addBank = true;
        this.otherBank = true;
        this.setState({ selectedBank: -1, refresh: !refresh });
    }

    bankInfoKey = (item) => this.popularAccount.indexOf(item);
    renderBankInfo = () => ({ item }) =>
        (
            <TouchableOpacity style={styles.accountView} >
                {/* onPress={this.openAddBankOption(item)} */}
                <GIcon
                    name="closesquareo"
                    type="antdesign"
                    size={11.43}
                    color="#56565A"
                />

                <Text style={styles.accountText}>
                    {`${item}`}
                </Text>
            </TouchableOpacity>
        );

    onPressRadio = (keyName, text) => () => {
        this.setState(prevState => ({

            addBankAccount: {
                ...prevState.addBankAccount,
                [keyName]: text,
                accountTypeValidation: true,
                financialInstitutionNameValidation: true,
                accountOwnerValidation: true,
                transitRoutingNumberValidation: true,
                accountNumberValidation: true
            }

        }));
    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onSubmitEditing = (input) => text => {
        input.focus();
    }

    onChangeText = (stateKey, keyName) => text => {
        AppUtils.debugLog("onChangeText:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: text,
                [`${keyName}Validation`]: true,
            }
        }));
    }

    onSubmitZipEditing = (stateKey, keyName, nextInputFocus) => text => {
        AppUtils.debugLog(`onSubmitZipEditing:::>${nextInputFocus} ${text}`);

        const { getStateCity, getAddressFormat } = this.props;
        const { currentZipCodeRef } = this.state;

        const newItems = { ...currentZipCodeRef };
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = -1;
        newItems.apiName = ActionTypes.GET_STATECITY;

        this.setState({
            currentZipCodeRef: newItems,
            isUSPSAddrFormatAPICalled: true,
            isUSPSStateAPICalled: true
        });

        let payload = {};
        let addressPayload = {};

        payload = {
            "Zip": this.state[stateKey][keyName]
        };

        addressPayload = {
            ...payload,
            "Address1": this.state[stateKey].addrLine1,
            "Address2": this.state[stateKey].addrLine2,
            "City": this.state[stateKey].city,
            "State": this.state[stateKey].stateCity,
            "Zip": this.state[stateKey][keyName]
        };

        getStateCity(payload);
        getAddressFormat(addressPayload);
    }

    validateInfoFields = () => {
        const { addBankAccount } = this.state;
        if(this.addBank){
            let errMsg = "";
            let isValidationSuccess = false;
            let input = "";

            if (this.isEmpty(addBankAccount.addrLine1)) {
                errMsg = globalString.accManagement.emptyAddressLine1Msg;
                input = 'addrLine1';
            } else if (this.isEmpty(addBankAccount.addrLine2)) {
                errMsg = globalString.accManagement.emptyAddressLine2Msg;
                input = 'addrLine2';
            } else if (this.isEmpty(addBankAccount.zipcode)) {
                errMsg = globalString.accManagement.emptyZipCodeMsg;
                input = 'zipcode';
            } else if (addBankAccount.zipcode.length < globalString.maxLength.zipCode) {
                errMsg = globalString.accManagement.invalidZipCodeMsg;
                input = 'zipcode';
            } else if (this.isEmpty(addBankAccount.city)) {
                errMsg = globalString.accManagement.emptyCityMsg;
                input = 'city';
            } else if (this.isEmpty(addBankAccount.stateCity)) {
                errMsg = globalString.accManagement.emptyStateMsg;
                input = 'stateCity';
            } else if (this.isEmpty(addBankAccount.accountType)) {
                errMsg = globalString.accManagement.emptyTypeOfAccount;
                input = "accountType";
            } else if (this.isEmpty(addBankAccount.financialInstitutionName)) {
                errMsg = globalString.accManagement.emptyFinancialInstitution;
                input = "financialInstitutionName";
            } else if (this.isEmpty(addBankAccount.accountOwner)) {
                errMsg = globalString.accManagement.emptyAccountOwnerName;
                input = "accountOwner";
            } else if (this.isEmpty(addBankAccount.transitRoutingNumber)) {
                errMsg = globalString.accManagement.emptyTransitRoutingNo;
                input = "transitRoutingNumber";
            } else if (this.isEmpty(addBankAccount.accountNumber)) {
                errMsg = globalString.accManagement.emptyAccountNumber;
                input = "accountNumber";
            }
            else {
                isValidationSuccess = true;
            }

            if (!isValidationSuccess) {
                AppUtils.debugLog(`add bank errMsg:: ${errMsg}`);

                this.setState(prevState => ({
                    addBankAccount: {
                        ...prevState.addBankAccount,
                        [`${input}Validation`]: false,
                    },
                    isValidationSuccess,
                    errMsg: isValidationSuccess === false ? errMsg : ""
                }));

                if (input !== "" && input !== null && input !== undefined) {
                    if (this[input] !== null && this[input] !== undefined) {
                        if (typeof this[input].focus === 'function') {
                            this[input].focus();
                        }
                    }
                }
            }
            return isValidationSuccess;
        }
        else
            return true;
        
    }

    render() {
        const { navigation } = this.props;
        const { accName, accNumber, bankAccountDetails, totalFund, errorMsg,
            selectedItemID, fundConsumed, fundRemaining, fundList, refresh, selectedBank, addBankAccount, errMsg } = this.state;//,investedIn,ItemToEdit
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
                                <Text style={styles.accountText}>{`Account Number ${accNumber}`}</Text>


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
                            <TouchableOpacity onPress={this.setAddBank()}>
                                {/* onPress={this.setAddBank()} */}
                                <View style={this.addBank ? styles.bankViewSelected : styles.bankView}>
                                    <View style={styles.bankTopView} />
                                    <View style={styles.bankMidView}>
                                        <Text style={styles.bankNameText}>Add Bank Account</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* {this.addBank ?
                                <FlatList
                                    data={this.popularAccount}
                                    renderItem={this.renderBankInfo()}
                                    keyExtractor={this.bankInfoKey}
                                />:null} */}
                            {this.otherBank ?
                                <View style={styles.childSectionGrp}>
                                    <Text style={styles.lblTxt}>
                                        {globalString.accManagement.typeOfAccount}
                                    </Text>
                                    <View style={styles.radioBtnGrp}>
                                        <CustomRadio
                                            inputref={this.setInputRef("accountType")}
                                            componentStyle={styles.savingtxt}
                                            size={30}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="Savings"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={(addBankAccount.accountType !== null && addBankAccount.accountType === "Savings") ? true : false}
                                            onPress={this.onPressRadio("accountType", "Savings")}
                                        />
                                        <CustomRadio
                                            inputref={this.setInputRef("accountType")}
                                            componentStyle={styles.checkingtxt}
                                            size={30}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="Checking"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={(addBankAccount.accountType !== null && addBankAccount.accountType === "Checking") ? true : false}
                                            onPress={this.onPressRadio("accountType", "Checking")}
                                        />

                                    </View>
                                    {!addBankAccount.accountTypeValidation &&
                                        <Text style={styles.errMsg}>
                                            {globalString.accManagement.emptyTypeOfAccount}
                                        </Text>
                                    }

                                    <Text style={styles.lblTxt}>
                                        {globalString.accManagement.financialInstitution}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef("financialInstitutionName")}
                                        propInputStyle={addBankAccount.financialInstitutionNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                        placeholder=""
                                        maxLength={globalString.maxLength.common}
                                        value={addBankAccount.financialInstitutionName}
                                        errorFlag={!addBankAccount.financialInstitutionNameValidation}
                                        errorText={globalString.accManagement.emptyFinancialInstitution}
                                        onChangeText={this.onChangeText("addBankAccount", "financialInstitutionName")}
                                        onSubmitEditing={this.onSubmitEditing(this.accountOwner)}

                                    />

                                    <Text style={styles.lblTxt}>
                                        {globalString.accManagement.accountOwner}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef("accountOwner")}
                                        propInputStyle={addBankAccount.accountOwnerValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                        placeholder=""
                                        maxLength={globalString.maxLength.common}
                                        value={addBankAccount.accountOwner}
                                        errorFlag={!addBankAccount.accountOwnerValidation}
                                        errorText={globalString.accManagement.emptyAccountOwnerName}
                                        onChangeText={this.onChangeText("addBankAccount", "accountOwner")}
                                        onSubmitEditing={this.onSubmitEditing(this.transitRoutingNumber)}

                                    />


                                    <Text style={styles.lblTxt}>
                                        {globalString.accManagement.transitRoutingNo}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef("transitRoutingNumber")}
                                        propInputStyle={addBankAccount.transitRoutingNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                        placeholder=""
                                        maxLength={globalString.maxLength.transitRoutingNumber}
                                        value={addBankAccount.transitRoutingNumber}
                                        errorFlag={!addBankAccount.transitRoutingNumberValidation}
                                        errorText={globalString.accManagement.emptyTransitRoutingNo}
                                        onChangeText={this.onChangeText("addBankAccount", "transitRoutingNumber")}
                                        onSubmitEditing={this.onSubmitEditing(this.accountNumber)}

                                    />

                                    <Text style={styles.lblTxt}>
                                        {globalString.accManagement.accountNumber}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef("accountNumber")}
                                        propInputStyle={addBankAccount.accountNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                        placeholder=""
                                        maxLength={globalString.maxLength.accountNumber}
                                        value={addBankAccount.accountNumber}
                                        errorFlag={!addBankAccount.accountNumberValidation}
                                        errorText={globalString.accManagement.emptyAccountNumber}
                                        onChangeText={this.onChangeText("addBankAccount", "accountNumber")}
                                        keyboardType="number-pad"
                                        returnKeyType="done"

                                    />

                                    <Text style={styles.lblSpecimen}>
                                        {globalString.accManagement.specimen}
                                    </Text>
                                    <Text style={styles.lblSpecimenDesc}>
                                        {globalString.accManagement.accNumberOwnerDesc}
                                    </Text>
                                    <Image style={styles.specimenImg}
                                        resizeMode="contain"
                                        source={require("../../Images/specimen.png")}
                                    />

                                    <View style={styles.addressStyle}>
                                        <Text style={styles.financialTextLabel}>Address</Text>
                                        <GInputComponent placeholder={globalString.addAddressInfo.addressLineOne}
                                            inputref={this.setInputRef("addrLine1")}
                                            propInputStyle={addBankAccount.addrLine1Validation ? styles.addressInput : styles.addressInputError}
                                            maxLength={globalString.maxLength.emplAddress1}
                                            value={addBankAccount.addrLine1}
                                            onChangeText={this.onChangeText("addBankAccount", "addrLine1")}
                                            onSubmitEditing={this.onSubmitZipEditing("addBankAccount", "zipcode", this.addrLine2)}
                                            errorFlag={!addBankAccount.addrLine1Validation}
                                            errorText={errMsg}
                                        />

                                        <GInputComponent
                                            inputref={this.setInputRef("addrLine2")}
                                            propInputStyle={addBankAccount.addrLine2Validation ? styles.addressInput : styles.addressInputError}
                                            maxLength={globalString.maxLength.addressLine2}
                                            value={addBankAccount.addrLine2}
                                            onChangeText={this.onChangeText("addBankAccount", "addrLine2")}
                                            onSubmitEditing={this.onSubmitZipEditing("addBankAccount", "zipcode", this.zipcode)}
                                            errorFlag={!addBankAccount.addrLine2Validation}
                                            errorText={errMsg}
                                        />
                                    </View>

                                    <View style={styles.addressStyle}>
                                        <Text style={styles.financialTextLabel}>ZIP Code</Text>

                                        <GInputComponent
                                            inputref={this.setInputRef("zipcode")}
                                            propInputStyle={addBankAccount.zipcodeValidation ? styles.addressInput : styles.addressInputError}
                                            value={addBankAccount.zipcode}
                                            maxLength={globalString.maxLength.zipCode}
                                            returnKeyType="done"
                                            onChangeText={this.onChangeText("addBankAccount", "zipcode")}
                                            keyboardType="number-pad"
                                            placeholder={globalString.accManagement.enterZip}
                                            onSubmitEditing={this.onSubmitZipEditing("addBankAccount", "zipcode", this.city)}
                                            errorFlag={!addBankAccount.zipcodeValidation}
                                            errorText={errMsg}
                                        />
                                    </View>

                                    <View style={styles.addressStyle}>
                                        <Text style={styles.financialTextLabel}>City & State</Text>
                                        <View style={styles.cityStateBlock}>

                                            <GInputComponent
                                                inputref={this.setInputRef("city")}
                                                propInputStyle={addBankAccount.cityValidation ? styles.cityStateStyle : styles.cityStateError}
                                                maxLength={globalString.maxLength.city}
                                                value={addBankAccount.city}
                                                onChangeText={this.onChangeText("addBankAccount", "city")}
                                                onSubmitEditing={this.onSubmitEditing(this.stateCity)}
                                                errorFlag={!addBankAccount.cityValidation}
                                                errorText={errMsg}
                                                editable={false}
                                            />
                                            <GInputComponent
                                                inputref={this.setInputRef("stateCity")}
                                                propInputStyle={addBankAccount.stateCityValidation ? styles.cityStateStyle : styles.cityStateError}
                                                returnKeyType="done"
                                                maxLength={globalString.maxLength.state}
                                                value={addBankAccount.stateCity}
                                                onChangeText={this.onChangeText("addBankAccount", "stateCity")}
                                                onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                                errorFlag={!addBankAccount.stateCityValidation}
                                                errorText={errMsg}
                                                editable={false}
                                            />

                                        </View>

                                    </View>
                                </View>
                                : null}
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
                                            errorFlag={this.IsNotValidAmount}
                                            errorText={errorMsg}
                                            maxLength={13}
                                            keyboardType="number-pad"
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
                        buttonStyle={(selectedBank > -1 || this.addBank) && totalFund >= 50 && fundRemaining === 0 && this.isValidScreen ? styles.continueButtonSelected : styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={(selectedBank > -1 || this.addBank)&& totalFund >= 50 && fundRemaining === 0 && this.isValidScreen ? this.navigationNext : null}
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
    addressFormatData: PropTypes.instanceOf(Object),
    getFundListData: PropTypes.func,
    getBankAccountInfo: PropTypes.func,
    getStateCity: PropTypes.func,
    getAddressFormat: PropTypes.func,
};

AutomaticInvestmentAddComponent.defaultProps = {
    navigation: {},
    fundListState: {},
    automaticInvestmentState: {},
    bankAccountInfo: {},
    addressFormatData: {},
    getFundListData: () => { },
    getBankAccountInfo: () => { },
    getStateCity: () => { },
    getAddressFormat: () => { },
};

export default AutomaticInvestmentAddComponent;