import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Modal ,Image} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import ListItem from './ListItem';
import SourceListItem from './SourceListItem';
import { GButtonComponent, GInputComponent, GIcon, GHeaderComponent, GFooterComponent, GLoadingSpinner, GDropDownComponent, GDateComponent,GSingletonClass ,showAlert} from '../../CommonComponents';
import { CustomPageWizard, CustomRadio, CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import InvestmentDetails from "../../Models/InvestmentDetails";
import AppUtils from '../../Utils/AppUtils';


const offlinemethod1 = require("../../Images/offlinemethod1.png");
const offlinemethod2 = require("../../Images/offlinemethod2.png");
const offlinemethod3 = require("../../Images/offlinemethod3.png");
const onlinemethod1 = require("../../Images/onlinemethod1.png");
const specimen = require("../../Images/specimen.png");



const images = {
    offline: [
        offlinemethod1,
        offlinemethod2,
        offlinemethod3    
    ],
    online:[
        onlinemethod1
    ]
      
    };


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



const tempFiltermindata = [
    { key: '3000', value: '3000' },
    { key: '1000', value: '1000' },
    { key: '500', value: '500' },
    { key: '50', value: '50 initial and 50 monthly' },
];
const tempFilterriskdata = [
    { key: 'pre_cap', value: 'Preservation of Capital' },
    { key: 'con', value: 'Conservative' },
    { key: 'mod_con', value: 'Moderately Conservative' },
    { key: 'mod', value: 'Moderate' },
    { key: 'mod_agr', value: 'Moderately Aggressive' },
    { key: 'agg', value: 'Aggressive' },
    { key: 'very_agg', value: 'Very Aggressive' },
];
const tempFilterfunddata = [
    { key: 'sta_fund', value: 'Starters Funds' },
    { key: 'tar_risk', value: 'Target Risk Funds' },
    { key: 'tar_ret', value: 'Target Retirement Funds' },
    { key: 'tax_bon', value: 'Taxable Bond Funds' },
    { key: 'tax_exe', value: 'Tax Exempt Bond Funds' },
    { key: 'sto_fund', value: 'Stock Funds' },
    { key: 'ind_fun', value: 'Index Funds' },
    { key: 'alt_sec', value: 'Alternative/Sector Funds' },
    { key: 'mon_fun', value: 'Money Market Funds' },
];





const myInstance = GSingletonClass.getInstance();
class OpenAccPageThreeComponent extends Component {
    constructor(props) {
        const openAccPageThree = myInstance.getAccOpeningEditMode() ? (myInstance.getScreenStateData().openAccPageThree || {}):{};

        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            isValidationSuccess: true,
            errMsg:"",
            minCount: 5,
            fundList: [],
            fundingSourceList: [],
            method: "",
            offLineMethods: [],
            onLineMethods: [],
            selectedCount: 0,
            fundingSourceName: "",
            fundName: "",
            fundingOptions: "",
            fundingOptionsDropDown: false,
            initInvestment: "",
            monthlyInvestment: "",
            monthlyInvestmentDropDown: "",
            investStartDate: "",

            accountType: "",
            financialInstitutionName: "",
            accountOwner: "",
            transitRoutingNumber: "",
            accountNumber: "",

            selectedCountValidation:true,
            fundingSourceNameValidation: true,

            fundingOptionsValidation: true,
            initInvestmentValidation: true,
            monthlyInvestmentValidation: true,
            investStartDateValidation: true,

            accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true,

            totalInitialInvestment: "",
            action: "",
            selectedFundInvestmentsData: [],

            // Filters
            isFilterApplied: false,
            modalVisible: false,
            filtermindata: [...tempFiltermindata.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...tempFilterriskdata.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...tempFilterfunddata.map(v => ({ ...v, isActive: false }))],
            applyFilterState: false,

            isAddBankAccount: false,
            isValidBankAccount: true,
            validBankAccountMsg: '',
            // others
            ...openAccPageThree
        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        AppUtils.debugLog("componentDidMount::::> ");
        const { getFundListData,getCompositeLookUpData,masterLookupStateData} = this.props;
        const {fundList} = this.state;

        if (this.state && fundList && !fundList.length > 0) {
            const fundListPayload = {};
            getFundListData(fundListPayload);
        }

        const payload = [];
        const compositePayloadData = [
            "fund_source",
            "fund_options",
            "filter_min_inv",
            "filter_fund_type",
            "filter_risk"
        ];

        for (let i = 0; i < compositePayloadData.length; i +=1) {
            const tempkey = compositePayloadData[i];
            if (this.props && masterLookupStateData && !masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        getCompositeLookUpData(payload);
    }

    componentDidUpdate(prevProps, prevState) {
        AppUtils.debugLog(`componentDidUpdate::::> ${prevState}`);
        const { accOpeningData,masterLookupStateData,addBankAccount} = this.props;
        const { fundingSourceList,offLineMethods,onLineMethods} = this.state;

        if (this.props !== prevProps) {
            let tempFundListData = [];
                if (accOpeningData[ActionTypes.GET_FUNDLIST] !== undefined && accOpeningData[ActionTypes.GET_FUNDLIST].Items !== null) {
                    tempFundListData = accOpeningData[ActionTypes.GET_FUNDLIST].Items;
                    this.setState({
                        fundList: [...tempFundListData.map(v => ({ ...v, isActive: false }))],
                        isFilterApplied: false
                    });
                }
            

            let tempFundingSourceList = [];
            if(fundingSourceList.length === 0){
                if (this.props && masterLookupStateData && masterLookupStateData.fund_source && masterLookupStateData.fund_source.value) {
                    tempFundingSourceList = masterLookupStateData.fund_source.value;
                    AppUtils.debugLog(`tempFundingSourceList:: ${ JSON.stringify(tempFundingSourceList)}`);
                        if (tempFundingSourceList.length > 0) {
                            const tempOffLineSubtypes = tempFundingSourceList[0].subtypes;
                            const tempOnLineSubtypes = tempFundingSourceList[1].subtypes;
                            this.setState({
                                offLineMethods: [...tempOffLineSubtypes.map(v => ({ ...v, isActive: false }))],
                                onLineMethods: [...tempOnLineSubtypes.map(v => ({ ...v, isActive: false }))],
                                fundingSourceList: [...offLineMethods.map(v => ({ ...v, isActive: false })), ...onLineMethods.map(v => ({ ...v, isActive: false }))]
                            });
                        }
                }
            }
           

            const responseKey = ActionTypes.INVEST_SELECT_SAVE_OPENING_ACCT;
            if (accOpeningData[responseKey]) {
                if (accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = accOpeningData[responseKey];
                    if (tempResponse.statusCode === 200) {
                        const msg = tempResponse.message;
                        AppUtils.debugLog(`Account Type Saved ::: :: ${ msg}`);
                        showAlert(gblStrings.common.appName ,tempResponse.result,"OK");
                        AppUtils.debugLog(tempResponse.result);
                    } else {
                        showAlert(gblStrings.common.appName ,tempResponse.message,"OK");
                        AppUtils.debugLog(tempResponse.message);
                    }
                }
            }

            const addBankAccKey = ActionTypes.ADD_BANK_ACCOUNT;
            if (addBankAccount[addBankAccKey]) {
                if (addBankAccount[addBankAccKey] !== prevProps.addBankAccount[addBankAccKey]) {
                    const tempResponse = addBankAccount[addBankAccKey];
                    if (tempResponse.statusCode === 200 && tempResponse.statusType === "S") {
                        AppUtils.debugLog(`Valid bank account::${tempResponse.message}`);
                            this.setState({
                                isValidBankAccount: true,
                                validBankAccountMsg:tempResponse.message
                            });
                        
                    } else {
                        AppUtils.debugLog(`Not Valid bank account::${tempResponse.message}`);

                        this.setState({
                            isValidBankAccount: false,
                            validBankAccountMsg:tempResponse.message

                        });
                    }
                }
            }


        }

    }


    /*----------------------
                                 Button Events
                                                                 -------------------------- */
    onClickHeader = () => {
        AppUtils.debugLog("#TODO : onClickHeader");
    }

    goBack = () => {
        const { navigation} = this.props;
        const { goBack } = navigation; 
        goBack();
    }

    onClickCancel = () => {
        myInstance.setAccOpeningEditMode(false);
        const { navigation} = this.props;
        const { goBack } = navigation; 
       goBack('termsAndConditions');
    }

    onClickDownloadPDF = () => {
        AppUtils.debugLog("#TODO : Download");
    }

    onClickNext = () => {
        const { navigation} = this.props;
        const { navigate } = navigation; 
        if (this.validateFields()) {
            const payload = this.getPayload();
           // this.props.saveData("OpenAccPageThree", payload);
        
            myInstance.setSavedAccData(payload);
            const stateData = myInstance.getScreenStateData();
            const screenState = {
                ...stateData,
                "openAccPageThree":{...this.state}
              }; 
            myInstance.setScreenStateData(screenState);
            navigate({ routeName: 'openAccPageFour', key: 'openAccPageFour' });
        }
    }

    onClickSave = () => {
        const { saveAccountOpening} = this.props;
        if (this.validateFields()) {
            const payload = this.getPayload();
            saveAccountOpening("OpenAccPageThree", payload);
        }
    }

    validateBankAccount = () => {
        const { 
            accountType,
            financialInstitutionName,
            accountOwner,
            transitRoutingNumber,
            accountNumber } = this.state;

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

        if (this.isEmpty(accountType)) {
            errMsg = gblStrings.accManagement.emptyTypeOfAccount;
            input = "accountType";
        } else if (this.isEmpty(financialInstitutionName)) {
            errMsg = gblStrings.accManagement.emptyFinancialInstitution;
            input = "financialInstitutionName";
        } else if (this.isEmpty(accountOwner)) {
            errMsg = gblStrings.accManagement.emptyAccountOwnerName;
            input = "accountOwner";
        } else if (this.isEmpty(transitRoutingNumber)) {
            errMsg = gblStrings.accManagement.emptyTransitRoutingNo;
            input = "transitRoutingNumber";
        } else if (this.isEmpty(accountNumber)) {
            errMsg = gblStrings.accManagement.emptyAccountNumber;
            input = "accountNumber";
        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            this.setState({
                [`${input}Validation`]: false,
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            });

            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && this[input] !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }

            //  alert(errMsg);
        } else {
            this.callValidateBankAccount();
        }
        return isValidationSuccess;

    }

    callValidateBankAccount = () => {
        const { 
            accountType,
            financialInstitutionName,
            accountOwner,
            transitRoutingNumber,
            accountNumber } = this.state;
        const { addBankAccountAction} = this.props;
     
        const validateBankAccountPayload = {
            "accountType": accountType || "",
            "financialInstitutionName": financialInstitutionName || "",
            "accountOwnerNames": accountOwner || "",
            "transitRoutingNumber": transitRoutingNumber || "",
            "accountNumber": accountNumber || ""

        };

        addBankAccountAction(validateBankAccountPayload);
    }

    getSelectedFundsList = () => {
        AppUtils.debugLog("getSelectedFundsList::::>");
        const fundDataList = [];
        const {fundList} = this.state;

        for (let i = 0; i < fundList.length; i +=1) {
            const tempObj = fundList[i];
            if (tempObj.isActive) {
                fundDataList.push(tempObj);
            }
        }
        return fundDataList;
    }

    getPayload = () => {
        const savedAccData = myInstance.getSavedAccData();
        const { 
            method,
            fundingSourceName,
            accountType,
            financialInstitutionName,
            accountOwner,
            transitRoutingNumber,
            accountNumber,
            selectedFundInvestmentsData,
            totalInitialInvestment,
        } = this.state;
        const payload = {
                ...savedAccData,
                "investmentInfo": {
                    "fundingSource": {
                        "method": method || "",
                        "bankAccount": fundingSourceName || "",
                        "accountType": accountType || "",
                        "financialInstitutionName": financialInstitutionName || "",
                        "accountOwner": accountOwner || "",
                        "transitRoutingNumber": transitRoutingNumber || "",
                        "accountNumber":accountNumber || "",
                    },
                    "totalFunds": `${ selectedFundInvestmentsData.length}` || "",
                    "totalInitialInvestment": totalInitialInvestment || "",
                    "fundListData": selectedFundInvestmentsData
                },
            };
        
            return payload;
    }

    replaceUndefinedOrNull= (key, value) => {
        if (value === null || value === undefined || value ==='') {
          return undefined;
        }

        return value;
    }

    getCleanedPayload = (payload) =>{
        const cleanedObject = JSON.stringify(payload, this.replaceUndefinedOrNull, 4);
        return JSON.parse(cleanedObject);
    }

    onSubmitEditing = (input) => text => {

        AppUtils.debugLog(`onSubmitEditing:::>${ text}`);

        input.focus();
    }

    onChangeText = (keyName) => text => {
        AppUtils.debugLog("onChangeText:::>");
        this.setState({
            [keyName]: text,
            accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true
        });
    }

    onChangeTextForInvestment = (keyName, index) => text => {
        AppUtils.debugLog("onChangeTextForInvestment:::>");
        const {selectedFundInvestmentsData} = this.state;
        const newItems = [...selectedFundInvestmentsData];
        newItems[index][keyName] = text;
       // newItems[index][keyName+"Validation"] = false;
        newItems[index].fundingOptionValidation = true;
        newItems[index].initialInvestmentValidation = true;
        newItems[index].monthlyInvestmentValidation = true;
        newItems[index].startDateValidation = true;

        let total = 0;
        for (let i = 0; i < newItems.length; i +=1) {
            if (!isNaN(newItems[i].initialInvestment) && newItems[i].initialInvestment !== "") {
                total += parseFloat(newItems[i].initialInvestment);

            }
        }

        AppUtils.debugLog(`total:::>${ total}`);

        this.setState({
            totalInitialInvestment: `$ ${ total}`,
            selectedFundInvestmentsData: newItems,
        });


    }

    onChangeDateForInvestment = (keyName, index) => date => {
        AppUtils.debugLog("onChangeDateForInvestment:::>");
        const { selectedFundInvestmentsData } = this.state;
        const newItems = [...selectedFundInvestmentsData];
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

    onPressDropDown = (keyName) => () => this.setState({
        [keyName]: !this.state[keyName],
        accountTypeValidation: true,
        financialInstitutionNameValidation: true,
        accountOwnerValidation: true,
        transitRoutingNumberValidation: true,
        accountNumberValidation: true,
    });

    onPressDropDownForInvestment = (keyName, index) => () => {
        AppUtils.debugLog(`onPressDropDownForInvestment::: ${ keyName}`);
        const {selectedFundInvestmentsData} = this.state;
        const newItems = [...selectedFundInvestmentsData];
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
        AppUtils.debugLog(`onPressRemoveInvestment::: ${ item}`);
        const {selectedFundInvestmentsData,fundList} = this.state;
        const newSelectedData = [...selectedFundInvestmentsData];
        const newItems = [...fundList];
        const isObjExistIndex = this.getIndex(item.fundNumber, newSelectedData, 'fundNumber');

        if (isObjExistIndex !== -1) {

            newItems[isObjExistIndex].isActive = false;
            newSelectedData[index].isActive = false;
            newSelectedData.splice(index, 1);

        }

        // newSelectedData[index].isActive = false;
        // newSelectedData.splice(index, 1);
        this.setState({
            fundList: newItems,
            selectedFundInvestmentsData: newSelectedData,
            selectedCount: this.getSelectedItems().length

        });
    }

    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text,
        accountTypeValidation: true,
        financialInstitutionNameValidation: true,
        accountOwnerValidation: true,
        transitRoutingNumberValidation: true,
        accountNumberValidation: true

    });

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onSelectFundList = (item, index) => () => {
        AppUtils.debugLog(`onSelectFundList:: ${ index}`);
        const {selectedFundInvestmentsData,fundList} = this.state;
        const newItems = [...fundList];
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


        let newSelectedData = [...selectedFundInvestmentsData];
        const isObjExistIndex = this.getIndex(tempData.fundNumber, newSelectedData, 'fundNumber');

        if (isObjExistIndex === -1 && newItems[index].isActive) {

            newSelectedData = [...newSelectedData, tempData];

        } else if (isObjExistIndex !== -1 && newItems[index].isActive === false) {


            newSelectedData.splice(isObjExistIndex, 1);

        }


        this.setState({
            fundList: newItems,
            selectedFundInvestmentsData: newSelectedData,
            selectedCount: this.getSelectedItems().length,
            selectedCountValidation:true

        });




    }

    getIndex = (value, arr, prop) => {
        for (let i = 0; i < arr.length; i+=1) {
            if (arr[i][prop] === value) {
                return i;
            }
        }
        return -1; // to handle the case where the value doesn't exist
    }

    onClickRowItem = (item, index) => () => {
        AppUtils.debugLog(`onSelectFundList:: ${ item.fundNumber} & ${index}`);
        //  this.props.navigation.navigate({ routeName: 'investmentPlanInfo', key: 'investmentPlanInfo' })
        const { navigation} = this.props;
        const { push } = navigation;  
        push('investmentPlanInfo', { fundDetails: item.fundNumber });

    }

    onSelectSourceFundList = (item, index, method) => () => {
        AppUtils.debugLog(`onSelectSourceFundList:::>  ${ method}`);
        let toBeChangedData = [];
        let notToBeChangedData = [];
        const {offLineMethods,onLineMethods} = this.state;

        switch (method) {
            case "offline":
                toBeChangedData = [...offLineMethods];
                notToBeChangedData = [...onLineMethods];

                break;
            case "online":
                toBeChangedData = [...onLineMethods];
                notToBeChangedData = [...offLineMethods];
                break;
            default:
                break;
        }

        for (let m = 0; m < toBeChangedData.length; m +=1) {
            if (index === m) {
                toBeChangedData[index].isActive = true;
            } else {
                toBeChangedData[m].isActive = false;
            }
        }
        for (let m = 0; m < notToBeChangedData.length; m +=1) {
            notToBeChangedData[m].isActive = false;
        }

        this.setState({
            method,
            offLineMethods: method === "offline" ? toBeChangedData : notToBeChangedData,
            onLineMethods: method === "online" ? toBeChangedData : notToBeChangedData,
            fundingSourceName: item,
            fundingSourceNameValidation:true

        });


    }

    getSelectedItems = () => {
        AppUtils.debugLog("getSelectedItems:: ");
        const selecteditems = [];
        const {fundList} = this.state;
        const newItems = [...fundList];
        newItems.map((item) => {
            if (item.isActive === true) {
                selecteditems.push(item);
            }
        });
        AppUtils.debugLog(`selecteditems:: ${ selecteditems.length}`);

        return selecteditems;


    }

    showAllItems = (count) => () => {
        AppUtils.debugLog(`showAllItems:: ${ count}`);
        this.setState({ minCount: count });

    }

    onSelectedDropDownValue = (dropDownName, objIndex) => (value, index,data) => {
        AppUtils.debugLog(`onSelectedDropDownValue:: ${ dropDownName}`);
        const item = data[index];
        const {selectedFundInvestmentsData} = this.state;

        const newItems = [...selectedFundInvestmentsData];

        switch (dropDownName) {
            case "fundingOptionDropDown":
                newItems[objIndex].fundingOptionDropDown = item.value;
                newItems[objIndex].fundingOption = item.key;

                AppUtils.debugLog(`item.value:: ${ item.value}`);
                AppUtils.debugLog(`newItems[objIndex]:: ${ newItems[objIndex]}`);

                this.setState({
                    selectedFundInvestmentsData: newItems
                });


                break;

            default:
                break;

        }
    }

    selectedDropDownValue = (dropDownName, value) => () => {
        switch (dropDownName) {
            case "fundingOptionsDropDown":
                this.setState({
                    fundingOptions: value,
                    fundingOptionsDropDown: false
                }); break;


            default:
                break;

        }

    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    generateDropDownListKeyExtractor = (item) => item.key;

    generateFundListKeyExtractor = (item) => item.fundNumber.toString();

    generateFundSourceKeyExtractor = (item) => item.key;

    generateFundInvestmentListKeyExtractor = (item) => item.fundNumber.toString();



    renderFundListItem = () => ({ item, index }) =>
        (
            <ListItem
                isActive={item.isActive}
                fundName={item.fundName}
                minimum={`$ ${item.initialInvestment}`}
                autoInvesting={`$ ${item.initialInvestment} w/ $ ${item.monthlyInvestment} monthly`}
                risk={item.risk}
                onClickCheckbox={this.onSelectFundList(item, index)}
                onClickItem={this.onClickRowItem(item, index)}
            />
        );

    renderFundSourceListItem = (method) => ({ item, index }) =>
        (
            <SourceListItem
                style={item.isActive ? styles.accountItemSelected : styles.accountItem}
                sourceName={item.value}
                img={images[method][index]}
                onPress={this.onSelectSourceFundList(item.value, index, method)}
            />
        );

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        } 
            return false;
        
    }



    validateFields = () => {

        // return this.props.navigation.navigate({ routeName: 'openAccPageFour', key: 'openAccPageFour' });

        let errMsg = "";
        let isValidationSuccess = false;
        let errMsgCount = 0;
        let input = "";

        const { 
            selectedCount,
            fundingSourceName,
            selectedFundInvestmentsData
        } = this.state;

        if (this.isEmpty(selectedCount)) {
            errMsg = gblStrings.accManagement.emptySeletedFundMsg;
            input = "selectedCount";
            errMsgCount +=1;

        } else if (selectedCount > 10) {
            errMsg = gblStrings.accManagement.maximumSeletedFundMsg;
            input = "selectedCount";
            errMsgCount +=1;

        } else if (this.isEmpty(fundingSourceName)) {
            errMsg = gblStrings.accManagement.emptyFundingSourceMsg;
            input = "fundingSourceName";
            errMsgCount +=1;

        } else if (selectedFundInvestmentsData.length > 0) {
            let inputField = "";

            for (let i = 0; i < selectedFundInvestmentsData.length; i +=1) {
                let tempErrMsg = "";
                const tempObj = selectedFundInvestmentsData[i];
                AppUtils.debugLog(`tempObj::${ JSON.stringify(tempObj)}`);
                AppUtils.debugLog(`tempObj.fundname::${ tempObj.fundName}`);

                let tempValidation = false;
                if (this.isEmpty(tempObj.fundingOption)) {
                    tempErrMsg = gblStrings.accManagement.emptyFundOptionsMsg;
                    inputField = "fundingOption";

                } else if (this.isEmpty(tempObj.initialInvestment)) {
                    tempErrMsg = gblStrings.accManagement.emptyInitInvestmentMsg;
                    inputField = "initialInvestment";

                } else if (parseFloat(tempObj.initialInvestment) < parseFloat(tempObj.mininitialInvestment)) {
                    tempErrMsg = gblStrings.accManagement.minInitInvestmentMsg;
                    inputField = "initialInvestment";

                }

                else if (tempObj.fundingOptionDropDown === "Initial and Monthly Investment" && this.isEmpty(tempObj.monthlyInvestment)) {
                    tempErrMsg = gblStrings.accManagement.emptyMonthlyInvestmentMsg;
                    inputField = "monthlyInvestment";

                }/* else if ( tempObj.fundingOption === "Initial and Monthly Investment" && tempObj.monthlyInvestment < tempObj.mininitialInvestment) {
                    tempErrMsg = gblStrings.accManagement.minMonthlyInvestmentMsg;
                } */ else if (tempObj.fundingOptionDropDown === "Initial and Monthly Investment" && this.isEmpty(tempObj.startDate)) {
                    tempErrMsg = gblStrings.accManagement.emptyStartDate;
                    inputField = "startDate";

                } else {
                    tempValidation = true;
                }

                AppUtils.debugLog(`tempErrMsg: ${ tempErrMsg}`);

                if (!tempValidation) {
                    errMsg = tempErrMsg;
                    errMsgCount +=1;
                    const newItems = [...selectedFundInvestmentsData];
                    newItems[i][`${inputField }Validation`] = false;
                    this.setState({
                        selectedFundInvestmentsData: newItems,
                        isValidationSuccess,
                        errMsg: isValidationSuccess === false ? errMsg : ""
                    });

                    if (inputField !== "" && inputField !== null && inputField !== undefined) {
                        if (this[inputField + i] !== null && this[inputField + i] !== undefined) {
                            if (typeof this[inputField + i].focus === 'function') {
                                this[inputField + i].focus();
                            }
                        }
                    }

                    break;
                }
            }

            if (errMsgCount === 0) {
                isValidationSuccess = true;
            }



        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            this.setState({
                [`${input}Validation`]: false,
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            });
           // alert(errMsg);
        }

        return isValidationSuccess;


    }



    // Modal - Filter Funds
    setModalVisible = (visible) => () => {
        const {applyFilterState} = this.state;

        if (!visible && !applyFilterState) {
            this.clearFilterAction();
        }
        this.setState({ modalVisible: visible });
        if (!applyFilterState) {
            this.constructFilterData();
        }
    }

    // Apply Filter Actions  
    applyFilterAction = (visible) => () => {
        const {getFundListData} = this.props;
        const { 
            filtermindata,
            filterriskdata,
            filterfunddata
         } = this.state;

        this.setState({
            modalVisible: visible,
            applyFilterState: true,
            fundList:[],
            isFilterApplied: true
        });

        let mininvestkey = "";
        filtermindata.map((item) => {
            if (item.isActive) {
                if (mininvestkey !== null && mininvestkey !== "") {
                    mininvestkey = mininvestkey.concat(`|${ item.value}`);
                } else {
                    mininvestkey = item.value;
                }
            }
        });
     
        let riskkey = "";
        filterriskdata.map((item) => {
            if (item.isActive) {
                if (riskkey !== null && riskkey !== "") {
                    riskkey = riskkey.concat(`|${ item.key}`);
                } else {
                    riskkey = item.key;
                }
            }
        });
      
        let funddatakey = "";
        filterfunddata.map((item) => {
            if (item.isActive) {
                if (funddatakey !== null && funddatakey !== "") {
                    funddatakey = funddatakey.concat(`|${ item.key}`);
                } else {
                    funddatakey = item.key;
                }
            }
        });
        AppUtils.debugLog("minInvest=", mininvestkey);
        AppUtils.debugLog("risk=", riskkey);
        AppUtils.debugLog("fundData=", funddatakey);

        const fundListPayload = { 'minInvestment': mininvestkey };
        getFundListData(fundListPayload);
    }

    // Clear Filter Actions  
    clearFilterAction = () => {
        this.setState({ applyFilterState: false });
        const { 
            filtermindata,
            filterriskdata,
            filterfunddata
         } = this.state;

        const tempmindata = [...filtermindata];
        const tempriskdata = [...filterriskdata];
        const tempfunddata = [...filterfunddata];

        this.setState({
            filtermindata: [...tempmindata.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...tempriskdata.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...tempfunddata.map(v => ({ ...v, isActive: false }))]
        });
    }

    // Construct Filter values from Master Data on Clicking Filter Funds
    constructFilterData = () => {

        const { masterLookupStateData} = this.props;

        const tempKeyMinInv = 'filter_min_inv';
        const tempKeyRisk = 'filter_risk';
        const tempKeyFundType = 'filter_fund_type';
        let tempMinInvData = [];
        let tempRiskData = [];
        let tempFundTypeData = [];

       

        AppUtils.debugLog('Filter Clicked...');
        if (tempKeyMinInv !== "" && this.props && masterLookupStateData && masterLookupStateData[tempKeyMinInv] && masterLookupStateData[tempKeyMinInv].value) {
            tempMinInvData = masterLookupStateData[tempKeyMinInv].value;
        }

        if (tempKeyRisk !== "" && this.props && masterLookupStateData && masterLookupStateData[tempKeyRisk] && masterLookupStateData[tempKeyRisk].value) {
            tempRiskData = masterLookupStateData[tempKeyRisk].value; 
        }

        if (tempKeyFundType !== "" && this.props && masterLookupStateData && masterLookupStateData[tempKeyFundType] && masterLookupStateData[tempKeyFundType].value) {
            tempFundTypeData = masterLookupStateData[tempKeyFundType].value;
        }

        this.setState({
            filtermindata: [...tempMinInvData.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...tempRiskData.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...tempFundTypeData.map(v => ({ ...v, isActive: false }))]
        });
    }

    // Checkbox selection on Clicking Filters 
    onCheckboxSelect = (fromtype, item, index) => () => {
        AppUtils.debugLog('Index : ', index);
        AppUtils.debugLog('Checkbox Selected : ', `${item.key } ${ item.value } ${ item.isActive}`);
        let newItm = [];
        const { 
            filtermindata,
            filterriskdata,
            filterfunddata
         } = this.state;

        switch (fromtype) {
            case 'minInvest':
                newItm = [...filtermindata];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filtermindata: newItm });
                break;
            case 'risk':
                newItm = [...filterriskdata];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterriskdata: newItm });
                break;
            case 'fundType':
                newItm = [...filterfunddata];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterfunddata: newItm });
                break;
            default:
                break;
        }
        AppUtils.debugLog(`New Item:${ JSON.stringify(newItm)}`);
    }

    navigateCompareFunds= () =>{
        // AppUtils.debugLog(this.state.selectedFundInvestmentsData);
        const {selectedFundInvestmentsData} = this.state;
        const { navigation} = this.props;
        const { push } = navigation;  
        if(selectedFundInvestmentsData.length > 1){
            if(selectedFundInvestmentsData.length < 5){
                let fundSelectedCompare = "";
                selectedFundInvestmentsData.map((item,index)=>{                   
                    fundSelectedCompare = `${fundSelectedCompare.concat(`fundNumber${index+1}=${item.fundNumber}`)}&`;
                });                                               
               // AppUtils.debugLog("Selected Funds:"+fundSelectedCompare);
               if (fundSelectedCompare !== null && fundSelectedCompare !== "") {
                   push('compareFunds', { fundDetails: fundSelectedCompare });
               }
            }else{
                alert('Please select minimum 2 or maximum 4 funds to compare');
            }
        }else{
            alert('Please select minimum 2 or maximum 4 funds to compare');
        }      
    }


    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        AppUtils.debugLog(`RENDER::: OpenAccPageThree ::>>>  ::::${ JSON.stringify(this.props)}`);
        const tempFundOptionsData = fundingOptionsData;
        const {
            fundList,
            minCount,
            selectedCount,
            selectedCountValidation,
            selectedFundInvestmentsData,
            fundingSourceNameValidation,
            offLineMethods,
            method,
            onLineMethods,
            accountType,
            accountTypeValidation,
            financialInstitutionNameValidation,
            financialInstitutionName,
            accountOwner,
            accountOwnerValidation,
            transitRoutingNumber,
            transitRoutingNumberValidation,
            accountNumber,
            accountNumberValidation,
            isValidBankAccount,
            validBankAccountMsg,
            totalInitialInvestment,
            modalVisible,
            filtermindata,
            filterriskdata,
            filterfunddata,
        } = this.state;
        const { navigation,accOpeningData,masterLookupStateData,addBankAccount} = this.props;
        const currentPage = 3;
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month}-${date}-${year}`;
        const tempFundListData = fundList.length > minCount ? fundList.slice(0, minCount) : fundList;

        return (
            <View style={styles.container}>
                {
                    (accOpeningData.isLoading || masterLookupStateData.isLoading || addBankAccount.isloading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollView}>
                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage } ${ gblStrings.accManagement.investmentSelection}`} />
                    { /* -----------Personal Info -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.selectYourMutualFunds}
                            </Text>
                            <TouchableOpacity
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
                                {gblStrings.accManagement.investmentSelectionNote}
                            </Text>

                            <GButtonComponent
                                buttonStyle={styles.filterFundsBtn}
                                buttonText={gblStrings.accManagement.filterFunds}
                                textStyle={styles.filterFundsBtnTxt}
                                onPress={this.setModalVisible(true)}
                            />

                            <GButtonComponent
                                buttonStyle={styles.compareFundsBtn}
                                buttonText={gblStrings.accManagement.compareFunds}
                                textStyle={styles.compareFundsBtnTxt}
                                onPress={this.navigateCompareFunds}
                            />

                            <View style={styles.fundListGrp}>
                                <Text style={styles.lblSelectedCountTxt}>
                                    {(selectedCount > 0) ? `${selectedCount} of ${fundList.length} Items selected` : ""}
                                </Text>

                                {!selectedCountValidation && (
                                    <Text style={styles.errMsg}>
                                        {gblStrings.accManagement.emptySeletedFundMsg}
                                    </Text>
                                  )}


                                <FlatList
                                    data={tempFundListData}
                                    keyExtractor={this.generateFundListKeyExtractor}
                                    renderItem={this.renderFundListItem()}
                                />
                                {selectedFundInvestmentsData.length > 25 && (
                                    <TouchableOpacity style={styles.showAllItemsContainer}
                                        onPress={this.showAllItems(fundList.length)}
                                        activeOpacity={0.2}
                                    >
                                        <View style={styles.showAllItemsTxt}>
                                            <Text style={styles.showPagesTxt}>
                                                {`Show all ${fundList.length} Items`}
                                            </Text>
                                            <GIcon
                                                name="right"
                                                type="antdesign"
                                                size={20}
                                                color="#61285F"
                                            />
                                        </View>

                                    </TouchableOpacity>
                                  )}




                            </View>


                        </View>


                    </View>
                    { /* ----------- Fund Your Account -------------------*/}

                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.fundYourAccount}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />

                        <View style={styles.childSectionGrp}>
                            <Text style={styles.sectionDescTxt}>
                                {gblStrings.accManagement.fundYourAccountNote}
                            </Text>
                            {!fundingSourceNameValidation && (
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.emptyFundingSourceMsg}
                                </Text>
                              )}

                            <Text style={styles.lblOfflineTxt}>
                                {gblStrings.accManagement.offlineMethod}
                            </Text>
                            <Text style={styles.lblOfflineDescTxt}>
                                {gblStrings.accManagement.offlineMethodDesc}
                            </Text>
                            <View style={styles.commonColView}>
                                <FlatList
                                    data={offLineMethods}
                                    keyExtractor={this.generateFundSourceKeyExtractor}
                                    renderItem={this.renderFundSourceListItem('offline')}
                                />
                            </View>

                            {method === "offline" && (
                                <View style={styles.tollFreeContainer}>
                                    <Text style={styles.lblMSRDescTxt}>
                                        {gblStrings.accManagement.contactMSRDesc}
                                    </Text>
                                    <View style={styles.contactMSR}>
                                        <GIcon
                                            name="phone"
                                            type="font-awesome"
                                            size={35}
                                            color="#000000"
                                        />
                                        <Text style={styles.lblMSRTxt}>
                                            {gblStrings.accManagement.contactMSR}
                                        </Text>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.callMSR}
                                        onPress={null}
                                    >
                                        <Text>
                                            <Text style={styles.callTollFee}>{gblStrings.accManagement.callTollFee} </Text>
                                            <Text style={styles.callTollFeeNo}>{gblStrings.accManagement.callTollFeeNo} </Text>
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                              )}

                            
                            <Text style={styles.labOR}>
                                or
                            </Text>
                            
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.onlineMethod}
                            </Text>
                            <Text style={styles.sectionDescTxt}>
                                {gblStrings.accManagement.onlineMethodDesc}
                            </Text>
                            <View style={styles.commonColView}>
                                <FlatList
                                    data={onLineMethods}
                                    keyExtractor={this.generateFundSourceKeyExtractor}
                                    renderItem={this.renderFundSourceListItem('online')}
                                />
                            </View>


                        </View>
                    </View>

                    { /* ----------- Add Bank Account  New-------------------*/}

                    {
                       method === "online" && (
                        <View style={styles.sectionGrp}>
                            <View style={styles.accTypeSelectSection}>
                                <Text style={styles.headings}>
                                    {gblStrings.accManagement.addBankAccount}
                                </Text>
                            </View>

                            <Text style={styles.lblLine} />

                            <View style={styles.childSectionGrp}>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.typeOfAccount}
                                </Text>
                                <View style={styles.radioBtnGrp}>
                                    <CustomRadio
                                        componentStyle={styles.radioCol1}
                                        size={30}
                                        outerCicleColor="#DEDEDF"
                                        innerCicleColor="#61285F"
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label="Savings"
                                        descLabelStyle={styles.lblRadioDescTxt}
                                        descLabel=""
                                        selected={!!((accountType !== null && accountType === "Savings"))}
                                        onPress={this.onPressRadio("accountType", "Savings")}
                                    />
                                    <CustomRadio
                                        componentStyle={styles.radioCol2}
                                        size={30}
                                        outerCicleColor="#DEDEDF"
                                        innerCicleColor="#61285F"
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label="Checking"
                                        descLabelStyle={styles.lblRadioDescTxt}
                                        descLabel=""
                                        selected={!!((accountType !== null && accountType === "Checking"))}
                                        onPress={this.onPressRadio("accountType", "Checking")}
                                    />
                                 
                                </View>
                                {!accountTypeValidation && (
                                    <Text style={styles.errMsg}>
                                        {gblStrings.accManagement.emptyTypeOfAccount}
                                    </Text>
                                  )}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.financialInstitution}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("financialInstitutionName")}
                                    propInputStyle={financialInstitutionNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.common}
                                    value={financialInstitutionName}
                                    errorFlag={!financialInstitutionNameValidation}
                                    errorText={gblStrings.accManagement.emptyFinancialInstitution}
                                    onChangeText={this.onChangeText("financialInstitutionName")}
                                    onSubmitEditing={this.onSubmitEditing(this.accountOwner)}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.accountOwner}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("accountOwner")}
                                    propInputStyle={accountOwnerValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.common}
                                    value={accountOwner}
                                    errorFlag={!accountOwnerValidation}
                                    errorText={gblStrings.accManagement.emptyAccountOwnerName}
                                    onChangeText={this.onChangeText("accountOwner")}
                                    onSubmitEditing={this.onSubmitEditing(this.transitRoutingNumber)}

                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.transitRoutingNo}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("transitRoutingNumber")}
                                    propInputStyle={transitRoutingNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.transitRoutingNumber}
                                    value={transitRoutingNumber}
                                    errorFlag={!transitRoutingNumberValidation}
                                    errorText={gblStrings.accManagement.emptyTransitRoutingNo}
                                    onChangeText={this.onChangeText("transitRoutingNumber")}
                                    onSubmitEditing={this.onSubmitEditing(this.accountNumber)}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.accountNumber}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("accountNumber")}
                                    propInputStyle={accountNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.accountNumber}
                                    value={accountNumber}
                                    errorFlag={!accountNumberValidation}
                                    errorText={gblStrings.accManagement.emptyAccountNumber}
                                    onChangeText={this.onChangeText("accountNumber")}
                                    keyboardType="number-pad"
                                    returnKeyType="done"

                                />

                                <Text style={styles.lblSpecimen}>
                                    {gblStrings.accManagement.specimen}
                                </Text>
                                <Text style={styles.lblSpecimenDesc}>
                                    {gblStrings.accManagement.accNumberOwnerDesc}
                                </Text>
                                <Image style={styles.specimenImg}
                                    resizeMode="contain"
                                    source={specimen}
                                />

                                {!isValidBankAccount && (
                                    <Text style={styles.errMsg}>
                                        {validBankAccountMsg}
                                    </Text>
                                  )}

                                <GButtonComponent
                                    buttonStyle={styles.saveButtonStyle}
                                    buttonText={gblStrings.common.validate}
                                    textStyle={styles.normalBlackBtnTxt}
                                    onPress={this.validateBankAccount}
                                />


                            </View>
                        </View>
                      )}
                  

                    { /* ----------- Fund Your Investments -------------------*/}
                    {selectedFundInvestmentsData.length > 0 && (
                        <View style={styles.sectionGrp}>
                            <View style={styles.accTypeSelectSection}>
                                <Text style={styles.headings}>
                                    {gblStrings.accManagement.fundYourInvest}
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
                                    {gblStrings.accManagement.fundYourInvestNote}
                                </Text>

                                {selectedFundInvestmentsData.map((item, index) => {
                                    return (
                                        <View
                                            key={item.fundNumber}
                                        >
                                            <TouchableOpacity
                                                onPress={this.onPressRemoveInvestment(item,index)}
                                                activeOpacity={0.8}
                                                accessibilityRole="button"
                                                style={styles.removeInvestment}
                                            >
                                                <Text style={styles.removeInvestmentTxt}>
                                                    {gblStrings.common.remove}
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={styles.investmentSection}>
                                                <Text style={styles.lblTxt}>
                                                    {gblStrings.accManagement.fundName}
                                                </Text>
                                                <Text style={styles.sectionDescTxt}>
                                                    {item.fundName}
                                                </Text>


                                                <GDropDownComponent
                                                    inputref={this.setInputRef(`fundingOptionDropDown${index}`)}
                                                    dropDownLayout={styles.dropDownLayout}
                                                    dropDownTextName={styles.dropDownTextName}
                                                    textInputStyle={styles.textInputStyle}
                                                    dropDownName={gblStrings.accManagement.fundingOptions}
                                                    data={tempFundOptionsData}
                                                    changeState={this.onPressDropDownForInvestment("fundingOptionDropDown", index)}
                                                   // showDropDown={this.state.selectedFundInvestmentsData[index].fundingOptionDropDown}
                                                    dropDownValue={item.fundingOptionDropDown}
                                                    selectedDropDownValue={this.onSelectedDropDownValue("fundingOptionDropDown", index)}
                                                    itemToDisplay="value"
                                                   // dropDownPostition={{ ...styles.dropDownPostition, top: scaledHeight(160) }}
                                                    errorFlag={!item.fundingOptionValidation}
                                                    errorText={gblStrings.accManagement.emptyFundOptionsMsg}
                                                />

                                                <Text style={styles.lblTxt}>
                                                    {gblStrings.accManagement.initInvestment}
                                                </Text>
                                                <View style={styles.initInvestmentContainer}>

                                                    <Text style={styles.dollarTxt}>
                                                        $
                                                    </Text>
                                                    <GInputComponent
                                                        inputref={this.setInputRef(`initialInvestment${index}`)}
                                                        propInputStyle={styles.initInvestTxtBox}
                                                        maxLength={gblStrings.maxLength.initInvestment}
                                                        placeholder="Initial Investment"
                                                        keyboardType="decimal-pad"
                                                        value={item.initialInvestment}
                                                        onChangeText={this.onChangeTextForInvestment("initialInvestment", index)}
                                                        errorFlag={!item.initialInvestmentValidation}
                                                        errorText=""
                                                    />
                                                
                                                </View>
                                                {!item.initialInvestmentValidation && (
                                                    <Text style={styles.errMsg}>
                                                        {gblStrings.accManagement.emptyInitInvestmentMsg}
                                                    </Text>
                                                  )}
                                                <Text style={styles.mininitialInvestment}>
                                                    {`Minimum $${item.mininitialInvestment}`}
                                                </Text>


                                                {
                                                    item.fundingOptionDropDown === "Initial and Monthly Investment" && (
                                                    <View style={styles.commonColView}>
                                                        <Text style={styles.lblTxt}>
                                                            {gblStrings.accManagement.monthlyInvestment}
                                                        </Text>
                                                        <View style={styles.monthInvestmentContainer}>
                                                            <Text style={styles.dollarTxt}>
                                                                $
                                                            </Text>
                                                            <GInputComponent
                                                                inputref={this.setInputRef(`monthlyInvestment${index}`)}
                                                                propInputStyle={styles.initInvestTxtBox}
                                                                maxLength={gblStrings.maxLength.monthlyInvestment}
                                                                placeholder="Monthly Investment"
                                                                value={item.monthlyInvestment}
                                                                keyboardType="decimal-pad"
                                                                onChangeText={this.onChangeTextForInvestment("monthlyInvestment", index)}
                                                                errorFlag={!item.monthlyInvestmentValidation}
                                                                errorText=""

                                                            />
                                                        </View> 
                                                        {!item.monthlyInvestmentValidation && (
                                                            <Text style={styles.errMsg}>
                                                                {gblStrings.accManagement.emptyMonthlyInvestmentMsg}
                                                            </Text>
                                                          )}


                                                        <Text style={styles.lblTxt}>
                                                            {gblStrings.accManagement.startDate}
                                                        </Text>

                                                        <GDateComponent
                                                            inputref={this.setInputRef(`startDate${ index}`)}
                                                            date={item.startDate}
                                                            minDate={currentdate}
                                                            placeholder="MM/DD/YYYY"
                                                            errorFlag={!item.startDateValidation}
                                                            errorMsg={gblStrings.accManagement.emptyStartDate}
                                                            onDateChange={this.onChangeDateForInvestment("startDate", index)}
                                                        />

                                                    </View>
                                                  )}

                                               
                                            </View>
                                        </View>

                                    );
                                })}

                                <View style={styles.investmentSectionFooter}>
                                    <View style={styles.totalAmountContainer}>

                                        <Text style={styles.totalAmountTxt}>
                                            {gblStrings.accManagement.total}
                                        </Text>
                                        <Text style={styles.totalAmountTxt}>
                                            {totalInitialInvestment}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                      )}


                    { /* ----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.save}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickSave}

                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={gblStrings.common.next}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickNext}
                        />
                    </View>



                    { /* ----------- Disclaimer -------------------*/}

                    <View style={styles.newVictorySection}>
                        <Text style={styles.disclaimerTitleTxt}>
                            {gblStrings.accManagement.VCDiscalimerTitle}
                        </Text>
                        <Text style={styles.disclaimerTxt}>
                            {gblStrings.accManagement.VCDiscalimerDesc}
                        </Text>
                        <Text style={styles.moreTxt}>
                            {gblStrings.common.more}
                        </Text>
                    </View>
                    <GFooterComponent />

                    <Modal
                        transparent
                        visible={modalVisible}
                        onRequestClose={this.setModalVisible(!modalVisible)}
                    >
                        <View style={styles.modalBackgroundView}>
                            <View style={styles.modalContainer}>
                                <ScrollView>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitleText}>
                                            {gblStrings.accManagement.filterFunds}
                                        </Text>
                                        <TouchableOpacity onPress={this.setModalVisible(!modalVisible)}>
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
                                            {gblStrings.accManagement.minimumInvestment}
                                        </Text>
                                        {
                                           filtermindata.map((item, index) => {
                                                let itemvalue = item.value;
                                                if (item.key === 50) {
                                                    itemvalue = itemvalue.replace(new RegExp('50', 'g'), `${gblStrings.common.dollar }50`);
                                                } else {
                                                    itemvalue = gblStrings.common.dollar + item.value;
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
                                            {gblStrings.accManagement.risk}
                                        </Text>
                                        {
                                            filterriskdata.map((item, index) => {
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
                                            {gblStrings.accManagement.fundType}
                                        </Text>
                                        {
                                            filterfunddata.map((item, index) => {
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
                                            buttonText={gblStrings.accManagement.clearFilter}
                                            textStyle={styles.modalCancelBtnTxt}
                                            onPress={this.clearFilterAction}
                                        />
                                        <GButtonComponent
                                            buttonStyle={styles.modalApplyFilterBtn}
                                            buttonText={gblStrings.accManagement.applyFilter}
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

OpenAccPageThreeComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    addBankAccount:PropTypes.instanceOf(Object),
    saveAccountOpening:PropTypes.func,
    getFundListData:PropTypes.func,
    getCompositeLookUpData:PropTypes.func,
    addBankAccountAction:PropTypes.func

};
OpenAccPageThreeComponent.defaultProps = {
    navigation: {},
    accOpeningData: {},
    addBankAccount: {},
    masterLookupStateData: {},
    getFundListData: null,
    saveAccountOpening: null,
    getCompositeLookUpData: null,
    addBankAccountAction: null

};
export default OpenAccPageThreeComponent;