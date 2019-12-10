/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Modal ,Image} from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GInputComponent, GIcon, GHeaderComponent, GFooterComponent, GLoadingSpinner, GDropDownComponent, GDateComponent } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio, CustomCheckBox } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import InvestmentDetails from '../Models/InvestmentDetails';


const images = {
    offline: [
        require("../../Images/offlinemethod1.png"),
        require("../../Images/offlinemethod2.png"),
        require("../../Images/offlinemethod3.png")
    ],
    online:[
        require("../../Images/onlinemethod1.png")
    ]
      
    };

const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
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



var filtermindata = [
    { key: '3000', value: '3000' },
    { key: '1000', value: '1000' },
    { key: '500', value: '500' },
    { key: '50', value: '50 initial and 50 monthly' },
];
var filterriskdata = [
    { key: 'pre_cap', value: 'Preservation of Capital' },
    { key: 'con', value: 'Conservative' },
    { key: 'mod_con', value: 'Moderately Conservative' },
    { key: 'mod', value: 'Moderate' },
    { key: 'mod_agr', value: 'Moderately Aggressive' },
    { key: 'agg', value: 'Aggressive' },
    { key: 'very_agg', value: 'Very Aggressive' },
];
var filterfunddata = [
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

const ListItem = (props) => {
    console.log("ListItem:: " + props);

    return (

        <TouchableOpacity
            onPress={props.onClickItem}
            activeOpacity={0.8}
            accessibilityRole={'button'}
            style={styles.colItem}
        >
            <View style={styles.rowHeaderItem}>
                <CustomCheckBox width="3%"
                    size={24}
                    itemBottom={0}
                    itemTop={3}

                    outerCicleColor={"#707070"}
                    innerCicleColor={"#61285F"}
                    labelStyle={{}}
                    label={""}
                    selected={props.isActive}
                    onPress={props.onClickCheckbox}
                />


                <Text style={styles.lblRowtitleTxt}>
                    {props.fundName}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {gblStrings.accManagement.minimum}
                </Text>
                <Text style={styles.lblRightColTxt}>
                    {props.minimum}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {gblStrings.accManagement.minWithAutoInvesting}
                </Text>
                <Text style={styles.lblRightColTxt}>
                    {props.autoInvesting}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {gblStrings.accManagement.risk}
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
    risk: PropTypes.string,
    isSeparatorShow: PropTypes.bool


};

const SourceListItem = (props) => {
    console.log("SourceListItem:: ");

    return (

        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.8}
            accessibilityRole={'button'}
            style={[styles.touchItem]}

        >
           
            <View style={props.style}>
                <View style={styles.accountItemImgBG}>
                    <Image style={styles.accountItemImg}
                        resizeMode="contain"
                        source={props.img}
                    />
                </View>
                <Text style={styles.accountItemTxt}>
                    {props.sourceName}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
SourceListItem.propTypes = {
    onPress: PropTypes.func,
    sourceName: PropTypes.string,
    img: PropTypes.number,
    style: PropTypes.instanceOf(Object)

};

class OpenAccPageThreeComponent extends Component {
    constructor(props) {

        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
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
            filtermindata: [...filtermindata.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...filterriskdata.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...filterfunddata.map(v => ({ ...v, isActive: false }))],
            applyFilterState: false,

            isAddBankAccount: false,
            isValidBankAccount: false,
            validBankAccountMsg: '',

        };
    }


    validateBankAccount = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

        if (this.isEmpty(this.state.accountType)) {
            errMsg = gblStrings.accManagement.emptyTypeOfAccount;
            input = "accountType";
        } else if (this.isEmpty(this.state.financialInstitutionName)) {
            errMsg = gblStrings.accManagement.emptyFinancialInstitution;
            input = "financialInstitutionName";
        } else if (this.isEmpty(this.state.accountOwner)) {
            errMsg = gblStrings.accManagement.emptyAccountOwnerName;
            input = "accountOwner";
        } else if (this.isEmpty(this.state.transitRoutingNumber)) {
            errMsg = gblStrings.accManagement.emptyTransitRoutingNo;
            input = "transitRoutingNumber";
        } else if (this.isEmpty(this.state.accountNumber)) {
            errMsg = gblStrings.accManagement.emptyAccountNumber;
            input = "accountNumber";
        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            this.setState({
                [input + "Validation"]: false,
            });

            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && this[input] !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }
            
            alert(errMsg);
        }else{
            return this.callValidateBankAccount();
        }

    }

    callValidateBankAccount = () => {
        const validateBankAccountPayload = {
            "accountType": "Checking",
            "financialInstitutionName": " HDFC",
            "accountOwnerNames": "Abc",
            "transitRoutingNumber": 123456,
            "accountNumber": 345213123456
        };

        this.props.addBankAccountAction(validateBankAccountPayload);

        console.log("Add Account 001", this.props.addBankAccount);

        if (!this.state.isValidBankAccount) {
            this.setState({
                isValidBankAccount: true
            });
        }
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        console.log("componentDidMount::::> ");
        if (this.state && this.state.fundList && !this.state.fundList.length > 0) {
            const fundListPayload = {};
            this.props.getFundListData(fundListPayload);
        }




        let payload = [];
        const compositePayloadData = [
            "fund_source",
            "fund_options",
            "filter_min_inv",
            "filter_fund_type",
            "filter_risk"
        ];

        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        this.props.getCompositeLookUpData(payload);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate::::> "+prevState);


        if (this.props !== prevProps) {
            let tempFundListData = [];
                if (this.props.accOpeningData[ActionTypes.GET_FUNDLIST] != undefined && this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items != null) {
                    tempFundListData = this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items;
                    this.setState({
                        fundList: [...tempFundListData.map(v => ({ ...v, isActive: false }))],
                        isFilterApplied: false
                    });
                }
            

            let tempFundingSourceList = [];
            if(this.state.fundingSourceList.length == 0){
                if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData["fund_source"] && this.props.masterLookupStateData["fund_source"].value) {
                    tempFundingSourceList = this.props.masterLookupStateData["fund_source"].value;
                    console.log("tempFundingSourceList:: " + JSON.stringify(tempFundingSourceList));
                        if (tempFundingSourceList.length > 0) {
                            const offLineSubtypes = tempFundingSourceList[0].subtypes;
                            const onLineSubtypes = tempFundingSourceList[1].subtypes;
                            this.setState({
                                offLineMethods: [...offLineSubtypes.map(v => ({ ...v, isActive: false }))],
                                onLineMethods: [...onLineSubtypes.map(v => ({ ...v, isActive: false }))],
                                fundingSourceList: [...this.state.offLineMethods.map(v => ({ ...v, isActive: false })), ...this.state.onLineMethods.map(v => ({ ...v, isActive: false }))]
                            });
                        }
                }
            }
           

            const responseKey = ActionTypes.INVEST_SELECT_SAVE_OPENING_ACCT;
            if (this.props.accOpeningData[responseKey]) {
                if (this.props.accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = this.props.accOpeningData[responseKey];
                    if (tempResponse.statusCode == 200 || tempResponse.statusCode == '200') {
                        let msg = tempResponse.message;
                        console.log("Account Type Saved ::: :: " + msg);
                        alert(tempResponse.result);
                    } else {
                        alert(tempResponse.message);
                    }
                }
            }
        }

    }


    /*----------------------
                                 Button Events
                                                                 -------------------------- */
    onClickHeader = () => {
        console.log("#TODO : onClickHeader");
    }
    goBack = () => {
        this.props.navigation.goBack();
    }
    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }
    onClickDownloadPDF = () => {
        alert("#TODO : Download");
    }

    onClickNext = () => {
        if (this.validateFields()) {
            const payload = this.getPayload();
            this.props.saveData("OpenAccPageThree", payload);
            this.props.navigation.navigate({ routeName: 'openAccPageFour', key: 'openAccPageFour' });
        }
    }

    onClickSave = () => {
        if (this.validateFields()) {
            const payload = this.getPayload();
            this.props.saveAccountOpening("OpenAccPageThree", payload);
        }
    }
    getSelectedFundsList = () => {
        console.log("getSelectedFundsList::::>");
        let fundDataList = [];
        for (let i = 0; i < this.state.fundList.length; i++) {
            const tempObj = this.state.fundList[i];
            if (tempObj.isActive) {
                fundDataList.push(tempObj);
            }
        }
        return fundDataList;
    }
    getPayload = () => {
        let payload = {};
        if (this.props && this.props.accOpeningData && this.props.accOpeningData.savedAccData) {
            payload = {
                ...this.props.accOpeningData.savedAccData,
                "investmentInfo": {
                    "fundingSource": {
                        "method": this.state.method || "-",
                        "bankAccount": this.state.fundingSourceName || "-",
                        "accountType": this.state.accountType || "-",
                        "financialInstitutionName": this.state.financialInstitutionName || "-",
                        "accountOwner": this.state.accountOwner || "-",
                        "transitRoutingNumber": this.state.transitRoutingNumber || "-",
                        "accountNumber": this.state.accountNumber || "-",
                    },
                    "totalFunds": "" + this.state.selectedFundInvestmentsData.length || "-",
                    "totalInitialInvestment": this.state.totalInitialInvestment || "-",
                    "fundDataList": this.state.selectedFundInvestmentsData
                },
            };
        }
        return payload;

    }
    onSubmitEditing = (input) => text => {

        console.log("onSubmitEditing:::>" + text);

        input.focus();
    }
    onChangeText = (keyName) => text => {
        console.log("onChangeText:::>");
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
        console.log("onChangeTextForInvestment:::>");
        let newItems = [...this.state.selectedFundInvestmentsData];
        newItems[index][keyName] = text;
       // newItems[index][keyName+"Validation"] = false;
        newItems[index].fundingOptionValidation = true;
        newItems[index].initialInvestmentValidation = true;
        newItems[index].monthlyInvestmentValidation = true;
        newItems[index].startDateValidation = true;

        let total = 0;
        for (let i = 0; i < newItems.length; i++) {
            if (!isNaN(newItems[i]["initialInvestment"]) && newItems[i]["initialInvestment"] != "") {
                total = total + parseFloat(newItems[i]["initialInvestment"]);

            }
        }

        console.log("total:::>" + total);

        this.setState({
            totalInitialInvestment: "$ " + total,
            selectedFundInvestmentsData: newItems,
        });


    }

    onChangeDateForInvestment = (keyName, index) => date => {
        console.log("onChangeDateForInvestment:::>");
        let newItems = [...this.state.selectedFundInvestmentsData];
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
        console.log("onPressDropDownForInvestment::: " + keyName);
        let newItems = [...this.state.selectedFundInvestmentsData];
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
        console.log("onPressRemoveInvestment::: " + item);
        let newSelectedData = [...this.state.selectedFundInvestmentsData];
        let newItems = [...this.state.fundList];
        var isObjExistIndex = this.getIndex(item.fundNumber, newSelectedData, 'fundNumber');

        if (isObjExistIndex != -1) {

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
        console.log("onSelectFundList:: " + index);
        let newItems = [...this.state.fundList];
        newItems[index].isActive = !newItems[index].isActive;
        let tempData = new InvestmentDetails();
        tempData.fundName = item.fundName;
        tempData.fundNumber = item.fundNumber;
        tempData.fundingOption = "";
        tempData.fundingOptionDropDown = false;
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


        var newSelectedData = [...this.state.selectedFundInvestmentsData];
        var isObjExistIndex = this.getIndex(tempData.fundNumber, newSelectedData, 'fundNumber');

        if (isObjExistIndex == -1 && newItems[index].isActive) {

            newSelectedData = [...newSelectedData, tempData];

        } else if (isObjExistIndex != -1 && newItems[index].isActive == false) {


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
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][prop] === value) {
                return i;
            }
        }
        return -1; //to handle the case where the value doesn't exist
    }

    onClickRowItem = (item, index) => () => {
        console.log("onSelectFundList:: " + item.fundNumber)+" "+index;
        //  this.props.navigation.navigate({ routeName: 'investmentPlanInfo', key: 'investmentPlanInfo' })
        this.props.navigation.push('investmentPlanInfo', { fundDetails: item.fundNumber });

    }

    onSelectSourceFundList = (item, index, method) => () => {
        console.log("onSelectSourceFundList:::>  " + method);
        let toBeChangedData = [];
        let notToBeChangedData = [];
        switch (method) {
            case "offline":
                toBeChangedData = [...this.state.offLineMethods];
                notToBeChangedData = [...this.state.onLineMethods];

                break;
            case "online":
                toBeChangedData = [...this.state.onLineMethods];
                notToBeChangedData = [...this.state.offLineMethods];

                break;
        }

        for (let m = 0; m < toBeChangedData.length; m++) {
            if (index == m) {
                toBeChangedData[index].isActive = true;
            } else {
                toBeChangedData[m].isActive = false;
            }
        }
        for (let m = 0; m < notToBeChangedData.length; m++) {
            notToBeChangedData[m].isActive = false;
        }

        this.setState({
            method: method,
            offLineMethods: method == "offline" ? toBeChangedData : notToBeChangedData,
            onLineMethods: method == "online" ? toBeChangedData : notToBeChangedData,
            fundingSourceName: item,
            fundingSourceNameValidation:true

        });


    }

    getSelectedItems = () => {
        console.log("getSelectedItems:: ");
        var selecteditems = [];
        const newItems = [...this.state.fundList];
        newItems.map((item) => {
            if (item.isActive == true) {
                selecteditems.push(item);
            }
        });
        console.log("selecteditems:: " + selecteditems.length);

        return selecteditems;


    }
    showAllItems = (count) => () => {
        console.log("showAllItems:: " + count);
        this.setState({ minCount: count });

    }

    onSelectedDropDownValue = (dropDownName, index) => (item) => {
        console.log("onSelectedDropDownValue:: " + dropDownName);
        let newItems = [...this.state.selectedFundInvestmentsData];

        switch (dropDownName) {
            case "fundingOptionDropDown":
                newItems[index].fundingOptionDropDown = false;
                newItems[index].fundingOption = item.value;

                console.log("item.value:: " + item.value);
                console.log("newItems[index]:: " + newItems[index]);

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

    renderDropDownListItem = (keyName, dropDownName) => ({ item }) =>
        (<TouchableOpacity
            style={{ height: 120 / 3, alignItems: 'flex-start', justifyContent: 'center' }}
            onPress={this.selectedDropDownValue(dropDownName, item[keyName])}
         >
            <Text style={{ textAlign: 'left', flexWrap: 'wrap', paddingHorizontal: scaledHeight(12) }}> {item[keyName]} </Text>
         </TouchableOpacity>
        );

    renderDropDown = (dropDownName, data, width = '100%') => {
        console.log("renderDropDown::: " + dropDownName);
        let dropDownCompState = false;
        let keyName = "value";//"title";
        let dropDownData = dummyData;
        let tempkey = ""; switch (dropDownName) {
            case "fundingOptionsDropDown":
                dropDownCompState = this.state.fundingOptionsDropDown;
                tempkey = "fund_options";

                break;
            case "monthlyInvestmentDropDown":
                dropDownCompState = this.state.monthlyInvestmentDropDown;
                tempkey = "fund_options";

                break;
            default:
                break;

        }


        if (tempkey !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            dropDownData = this.props.masterLookupStateData[tempkey].value;
        }

        if (dropDownCompState) {
            return (
                <View style={[{ width: width, borderWidth: 1, borderColor: "#DEDEDF", backgroundColor: 'white' }]}>
                    <FlatList
                        data={dropDownData}
                        renderItem={this.renderDropDownListItem(keyName, dropDownName)}
                        keyExtractor={this.generateDropDownListKeyExtractor}
                    />
                </View>
            );

        }
    }


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
    renderFundSourceListItem = (method) => ({ item, index }) =>
        (<SourceListItem
            style={item.isActive ? styles.accountItemSelected : styles.accountItem}
            sourceName={item.value}
            img = {images[method][index]}
            onPress={this.onSelectSourceFundList(item.value, index, method)}
         />
        );

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }



    validateFields = () => {

        // return this.props.navigation.navigate({ routeName: 'openAccPageFour', key: 'openAccPageFour' });

        var errMsg = "";
        var isValidationSuccess = false;
        var errMsgCount = 0;
        let input = "";

        if (this.isEmpty(this.state.selectedCount)) {
            errMsg = gblStrings.accManagement.emptySeletedFundMsg;
            input = "selectedCount";
            ++errMsgCount;

        } else if (this.state.selectedCount > 10) {
            errMsg = gblStrings.accManagement.maximumSeletedFundMsg;
            input = "selectedCount";
            ++errMsgCount;

        } else if (this.isEmpty(this.state.fundingSourceName)) {
            errMsg = gblStrings.accManagement.emptyFundingSourceMsg;
            input = "fundingSourceName";
            ++errMsgCount;

        } else if (this.state.selectedFundInvestmentsData.length > 0) {
            let inputField = "";

            for (let i = 0; i < this.state.selectedFundInvestmentsData.length; i++) {
                var tempErrMsg = "";
                let tempObj = this.state.selectedFundInvestmentsData[i];
                console.log("tempObj::" + JSON.stringify(tempObj));
                console.log("tempObj.fundname::" + tempObj.fundName);

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

                else if (tempObj.fundingOption == "Initial and Monthly Investment" && this.isEmpty(tempObj.monthlyInvestment)) {
                    tempErrMsg = gblStrings.accManagement.emptyMonthlyInvestmentMsg;
                    inputField = "monthlyInvestment";

                }/* else if ( tempObj.fundingOption == "Initial and Monthly Investment" && tempObj.monthlyInvestment < tempObj.mininitialInvestment) {
                    tempErrMsg = gblStrings.accManagement.minMonthlyInvestmentMsg;
                }*/ else if (tempObj.fundingOption == "Initial and Monthly Investment" && this.isEmpty(tempObj.startDate)) {
                    tempErrMsg = gblStrings.accManagement.emptyStartDate;
                    inputField = "startDate";

                } else {
                    tempValidation = true;
                }

                console.log("tempErrMsg: " + tempErrMsg);

                if (!tempValidation) {
                    errMsg = tempErrMsg;
                    ++errMsgCount;
                    let newItems = [...this.state.selectedFundInvestmentsData];
                    newItems[i][inputField + "Validation"] = false;
                    this.setState({
                        selectedFundInvestmentsData: newItems,
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

            if (errMsgCount == 0) {
                isValidationSuccess = true;
            }



        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            this.setState({
                [input+"Validation"]: false
            });
            alert(errMsg);
        }

        /* if(errMsgArray.length>0){
             alert ("Error::"+JSON.stringify(errMsgArray));
         }
         */

        /*

        if (this.isEmpty(this.state.selectedCount)) {
            errMsg = gblStrings.accManagement.emptySeletedFundMsg;
        } else if (this.state.selectedCount > 10) {
            errMsg = gblStrings.accManagement.maximumSeletedFundMsg;
        } else if (this.isEmpty(this.state.fundingSourceName)) {
            errMsg = gblStrings.accManagement.emptyFundingSourceMsg;
        } else if (this.isEmpty(this.state.fundingOptions)) {
            errMsg = gblStrings.accManagement.emptyFundOptionsMsg;
        } else if (this.isEmpty(this.state.initInvestment)) {
            errMsg = gblStrings.accManagement.emptyInitInvestmentMsg;
        } else if (this.state.fundingOptions == "Initial & Monthly Investment" && this.isEmpty(this.state.monthlyInvestment)) {
            errMsg = gblStrings.accManagement.emptyMonthlyInvestmentMsg;
        }
        else if(this.isEmpty(this.state.investStartDate)){
             errMsg = gblStrings.accManagement.emptyStartDate
         
        }else {
            isValidationSuccess = true;
        }

        if (isValidationSuccess) {
        } else {
            alert(errMsg);
        }
        */

        return isValidationSuccess;


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
            fundList:[],
            isFilterApplied: true
        });

        let mininvestkey = "";
        this.state.filtermindata.map((item) => {
            if (item.isActive) {
                if (mininvestkey !== null && mininvestkey !== "") {
                    mininvestkey = mininvestkey.concat("|" + item.value);
                } else {
                    mininvestkey = item.value;
                }
            }
        });
     
        let riskkey = "";
        this.state.filterriskdata.map((item) => {
            if (item.isActive) {
                if (riskkey !== null && riskkey !== "") {
                    riskkey = riskkey.concat("|" + item.key);
                } else {
                    riskkey = item.key;
                }
            }
        });
      
        let funddatakey = "";
        this.state.filterfunddata.map((item) => {
            if (item.isActive) {
                if (funddatakey !== null && funddatakey !== "") {
                    funddatakey = funddatakey.concat("|" + item.key);
                } else {
                    funddatakey = item.key;
                }
            }
        });
        console.log("minInvest=", mininvestkey);
        console.log("risk=", riskkey);
        console.log("fundData=", funddatakey);

        const fundListPayload = { 'minInvestment': mininvestkey };
        this.props.getFundListData(fundListPayload);
    }

    // Clear Filter Actions  
    clearFilterAction = () => {
        this.setState({ applyFilterState: false });
        let tempmindata = [...this.state.filtermindata];
        let tempriskdata = [...this.state.filterriskdata];
        let tempfunddata = [...this.state.filterfunddata];

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

       

        console.log('Filter Clicked...');
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

    // Checkbox selection on Clicking Filters 
    onCheckboxSelect = (fromtype, item, index) => () => {
        console.log('Index : ', index);
        console.log('Checkbox Selected : ', item.key + " " + item.value + " " + item.isActive);
        var newItm = [];
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
        console.log('New Item:' + JSON.stringify(newItm));
    }

    navigateCompareFunds= () =>{
        //console.log(this.state.selectedFundInvestmentsData);
        if(this.state.selectedFundInvestmentsData.length > 1){
            if(this.state.selectedFundInvestmentsData.length < 5){
                let fundSelectedCompare = "";
                this.state.selectedFundInvestmentsData.map((item,index)=>{                   
                    fundSelectedCompare = fundSelectedCompare.concat('fundNumber'+(index+1)+'='+item.fundNumber)+"&";
                });                                               
               //console.log("Selected Funds:"+fundSelectedCompare);
               if (fundSelectedCompare !== null && fundSelectedCompare !== "") {
                    this.props.navigation.push('compareFunds', { fundDetails: fundSelectedCompare });
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
        console.log("RENDER::: OpenAccPageThree ::>>>  ::::" + JSON.stringify(this.props));
        let tempFundOptionsData = fundingOptionsData;
        let tempFundListData = [];
        let currentPage = 3;
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const currentdate = month+"-"+date+"-"+year;
        tempFundListData = this.state.fundList.length > this.state.minCount ? this.state.fundList.slice(0, this.state.minCount) : this.state.fundList;

        return (
            <View style={styles.container}>
                {
                    (this.props.accOpeningData.isLoading || this.props.masterLookupStateData.isLoading || this.props.addBankAccount.isloading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + " " + gblStrings.accManagement.investmentSelection} />
                    { /*-----------Personal Info -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.selectYourMutualFunds}
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                accessibilityRole={'button'}
                            >
                                <Text style={styles.expandCollpaseTxt}>
                                    {"[ - ]"}
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
                                    {(this.state.selectedCount > 0) ? `${this.state.selectedCount} of ${this.state.fundList.length} Items selected` : ""}
                                </Text>

                                {!this.state.selectedCountValidation &&
                                    <Text style={styles.errMsg}>
                                        {gblStrings.accManagement.emptySeletedFundMsg}
                                    </Text>
                                }


                                <FlatList
                                    data={tempFundListData}
                                    keyExtractor={this.generateFundListKeyExtractor}
                                    renderItem={this.renderFundListItem()}
                                />
                                {this.state.selectedFundInvestmentsData.length > 25 && 
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                                        onPress={this.showAllItems(this.state.fundList.length)}
                                        activeOpacity={0.2}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                            <Text style={styles.showPagesTxt}>
                                                {`Show all ${this.state.fundList.length} Items`}
                                            </Text>
                                            <GIcon
                                                name="right"
                                                type="antdesign"
                                                size={20}
                                                color="#61285F"
                                            />
                                        </View>

                                    </TouchableOpacity>}




                            </View>


                        </View>


                    </View>
                    { /*----------- Fund Your Account -------------------*/}

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
                            {!this.state.fundingSourceNameValidation &&
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.emptyFundingSourceMsg}
                                </Text>
                            }

                            <Text style={styles.lblOfflineTxt}>
                                {gblStrings.accManagement.offlineMethod}
                            </Text>
                            <Text style={styles.lblOfflineDescTxt}>
                                {gblStrings.accManagement.offlineMethodDesc}
                            </Text>
                            <View style={{ flexGrow: 1, marginVertical: scaledHeight(0) }}>
                                <FlatList
                                    data={this.state.offLineMethods}
                                    keyExtractor={this.generateFundSourceKeyExtractor}
                                    renderItem={this.renderFundSourceListItem('offline')}
                                />
                            </View>

                            {this.state.method == "offline" &&
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
                                            <Text style={{ fontSize: scaledHeight(15), color: '#333333DE', textAlign: 'center', lineHeight: 22 }}>{gblStrings.accManagement.callTollFee} </Text>
                                            <Text style={{ fontSize: scaledHeight(18), fontWeight: 'bold', color: '#333333DE', textAlign: 'center', lineHeight: 22 }}>{gblStrings.accManagement.callTollFeeNo} </Text>
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            }

                            
                            <Text style={styles.labOR}>
                                {"or"}
                            </Text>
                            
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.onlineMethod}
                            </Text>
                            <Text style={styles.sectionDescTxt}>
                                {gblStrings.accManagement.onlineMethodDesc}
                            </Text>
                            <View style={{ flexGrow: 1, marginVertical: scaledHeight(0) }}>
                                <FlatList
                                    data={this.state.onLineMethods}
                                    keyExtractor={this.generateFundSourceKeyExtractor}
                                    renderItem={this.renderFundSourceListItem('online')}
                                />
                            </View>


                        </View>
                    </View>

                    { /*----------- Add Bank Account  New-------------------*/}

                    {
                        this.state.method == "online" &&
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
                                        componentStyle={{ width: "50%", marginBottom: scaledHeight(0) }}
                                        size={30}
                                        outerCicleColor={"#DEDEDF"}
                                        innerCicleColor={"#61285F"}
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label={"Savings"}
                                        descLabelStyle={styles.lblRadioDescTxt}
                                        descLabel={""}
                                        selected={(this.state.accountType !== null && this.state.accountType == "Savings") ? true : false}
                                        onPress={this.onPressRadio("accountType", "Savings")}
                                    />
                                    <CustomRadio
                                        componentStyle={{width: "50%", marginBottom: scaledHeight(0) }}
                                        size={30}
                                        outerCicleColor={"#DEDEDF"}
                                        innerCicleColor={"#61285F"}
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label={"Checking"}
                                        descLabelStyle={styles.lblRadioDescTxt}
                                        descLabel={""}
                                        selected={(this.state.accountType !== null && this.state.accountType == "Checking") ? true : false}
                                        onPress={this.onPressRadio("accountType", "Checking")}
                                    />
                                 
                                </View>
                                {!this.state.accountTypeValidation &&
                                    <Text style={styles.errMsg}>
                                        {gblStrings.accManagement.emptyTypeOfAccount}
                                    </Text>
                                }

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.financialInstitution}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("financialInstitutionName")}
                                    propInputStyle={this.state.financialInstitutionNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.common}
                                    value={this.state.financialInstitutionName}
                                    errorFlag={!this.state.financialInstitutionNameValidation}
                                    errorText={gblStrings.accManagement.emptyFinancialInstitution}
                                    onChangeText={this.onChangeText("financialInstitutionName")}
                                    onSubmitEditing={this.onSubmitEditing(this.accountOwner)}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.accountOwner}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("accountOwner")}
                                    propInputStyle={this.state.accountOwnerValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.common}
                                    value={this.state.accountOwner}
                                    errorFlag={!this.state.accountOwnerValidation}
                                    errorText={gblStrings.accManagement.emptyAccountOwnerName}
                                    onChangeText={this.onChangeText("accountOwner")}
                                    onSubmitEditing={this.onSubmitEditing(this.transitRoutingNumber)}

                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.transitRoutingNo}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("transitRoutingNumber")}
                                    propInputStyle={this.state.transitRoutingNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.transitRoutingNumber}
                                    value={this.state.transitRoutingNumber}
                                    errorFlag={!this.state.transitRoutingNumberValidation}
                                    errorText={gblStrings.accManagement.emptyTransitRoutingNo}
                                    onChangeText={this.onChangeText("transitRoutingNumber")}
                                    onSubmitEditing={this.onSubmitEditing(this.accountNumber)}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.accountNumber}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("accountNumber")}
                                    propInputStyle={this.state.accountNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.accountNumber}
                                    value={this.state.accountNumber}
                                    errorFlag={!this.state.accountNumberValidation}
                                    errorText={gblStrings.accManagement.emptyAccountNumber}
                                    onChangeText={this.onChangeText("accountNumber")}
                                    keyboardType="number-pad"
                                    returnKeyType={"done"}

                                />

                                <Text style={styles.lblSpecimen}>
                                    {gblStrings.accManagement.specimen}
                                </Text>
                                <Text style={styles.lblSpecimenDesc}>
                                    {gblStrings.accManagement.accNumberOwnerDesc}
                                </Text>
                                <Image style={styles.specimenImg}
                                    resizeMode="contain"
                                    source={require("../../Images/specimen.png")}
                                />

                                {this.state.isValidBankAccount ? (
                                    <Text style={{ width: '92%', marginTop: '4%', marginBottom: '4%', color: '#333300', justifyContent: 'center', alignItems: 'center' }}>
                                        {this.state.validBankAccountMsg}
                                    </Text>) : null}

                                <GButtonComponent
                                    buttonStyle={styles.saveButtonStyle}
                                    buttonText={gblStrings.common.validate}
                                    textStyle={styles.normalBlackBtnTxt}
                                    onPress={this.validateBankAccount}
                                />


                            </View>
                        </View>
                    }
                  

                    { /*----------- Fund Your Investments -------------------*/}
                    {this.state.selectedFundInvestmentsData.length > 0 &&
                        <View style={styles.sectionGrp}>
                            <View style={styles.accTypeSelectSection}>
                                <Text style={styles.headings}>
                                    {gblStrings.accManagement.fundYourInvest}
                                </Text>
                                <TouchableOpacity
                                    //  onPress={() => { alert("Expand/Cllapse") }}
                                    activeOpacity={0.8}
                                    accessibilityRole={'button'}
                                >
                                    <Text style={styles.expandCollpaseTxt}>
                                        {"[ - ]"}
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <Text style={styles.lblLine} />


                            <View style={styles.childSectionGrp}>
                                <Text style={styles.sectionDescTxt}>
                                    {gblStrings.accManagement.fundYourInvestNote}
                                </Text>

                                {this.state.selectedFundInvestmentsData.map((item, index) => {
                                    return (
                                        <View
                                            key={item.fundNumber}
                                        >
                                            <TouchableOpacity
                                                onPress={this.onPressRemoveInvestment(item,index)}
                                                activeOpacity={0.8}
                                                accessibilityRole={'button'}
                                                style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: scaledHeight(22) }}
                                            >
                                                <Text style={{ fontSize: scaledHeight(16), color: '#61285F', fontWeight: 'bold', width: '100%', textAlign: 'right', lineHeight: 20 }}>
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
                                                    inputref={this.setInputRef("fundingOptionDropDown"+index)}
                                                    dropDownLayout={styles.dropDownLayout}
                                                    dropDownTextName={styles.dropDownTextName}
                                                    textInputStyle={styles.textInputStyle}
                                                    dropDownName={gblStrings.accManagement.fundingOptions}
                                                    data={tempFundOptionsData}
                                                    changeState={this.onPressDropDownForInvestment("fundingOptionDropDown", index)}
                                                    showDropDown={this.state.selectedFundInvestmentsData[index].fundingOptionDropDown}
                                                    dropDownValue={this.state.selectedFundInvestmentsData[index].fundingOption}
                                                    selectedDropDownValue={this.onSelectedDropDownValue("fundingOptionDropDown", index)}
                                                    itemToDisplay={"value"}
                                                    dropDownPostition={{ ...styles.dropDownPostition, top: scaledHeight(160) }}
                                                    errorFlag={!this.state.selectedFundInvestmentsData[index].fundingOptionValidation}
                                                    errorText={gblStrings.accManagement.emptyFundOptionsMsg}
                                                />

                                                <Text style={styles.lblTxt}>
                                                    {gblStrings.accManagement.initInvestment}
                                                </Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                                        {"$"}
                                                    </Text>
                                                    <GInputComponent
                                                        inputref={this.setInputRef("initialInvestment"+index)}
                                                        propInputStyle={{ width: '90%' }}
                                                        maxLength={gblStrings.maxLength.initInvestment}
                                                        placeholder={"Initial Investment"}
                                                        keyboardType="decimal-pad"
                                                        onChangeText={this.onChangeTextForInvestment("initialInvestment", index)}
                                                        errorFlag={!this.state.selectedFundInvestmentsData[index].initialInvestmentValidation}
                                                        errorText={gblStrings.accManagement.emptyInitInvestmentMsg}
                                                    />
                                                </View>
                                                <Text style={{ textAlign: 'right', width: '100%', color: '#56565A', fontSize: scaledHeight(12), marginTop: scaledHeight(12), }}>
                                                    {`Minimum $${item.mininitialInvestment}`}
                                                </Text>

                                                {
                                                    this.state.selectedFundInvestmentsData[index].fundingOption == "Initial and Monthly Investment" && 
                                                    <>
                                                        <Text style={styles.lblTxt}>
                                                            {gblStrings.accManagement.monthlyInvestment}
                                                        </Text>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                                                {"$"}
                                                            </Text>
                                                            <GInputComponent
                                                                inputref={this.setInputRef("monthlyInvestment"+index)}
                                                                propInputStyle={{ width: '90%' }}
                                                                maxLength={gblStrings.maxLength.monthlyInvestment}
                                                                placeholder={"Monthly Investment"}
                                                                value={this.state.selectedFundInvestmentsData[index].monthlyInvestment}
                                                                keyboardType="decimal-pad"
                                                                onChangeText={this.onChangeTextForInvestment("monthlyInvestment", index)}
                                                                errorFlag={!this.state.selectedFundInvestmentsData[index].monthlyInvestmentValidation}
                                                                errorText={gblStrings.accManagement.emptyMonthlyInvestmentMsg}

                                                            />
                                                        </View> 

                                                        <Text style={styles.lblTxt}>
                                                            {gblStrings.accManagement.startDate}
                                                        </Text>

                                                        <GDateComponent
                                                            inputref={this.setInputRef("startDate" + index)}
                                                            date={this.state.selectedFundInvestmentsData[index].startDate}
                                                            minDate={currentdate}
                                                            placeholder="MM/DD/YYYY"
                                                            errorFlag={!this.state.selectedFundInvestmentsData[index].startDateValidation}
                                                            errMsg={this.state.selectedFundInvestmentsData[index].startDateValidation}
                                                            onDateChange={this.onChangeDateForInvestment("startDate", index)}
                                                        />

                                                    </>
                                                }

                                               
                                            </View>
                                        </View>

                                    );
                                })}

                                <View style={styles.investmentSectionFooter}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: scaledHeight(20) }}>

                                        <Text style={{ color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                            {gblStrings.accManagement.total}
                                        </Text>
                                        <Text style={{ color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                            {this.state.totalInitialInvestment}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    }


                    { /*----------- Buttons Group -------------------*/}

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



                    { /*----------- Disclaimer -------------------*/}

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
                        visible={this.state.modalVisible}
                        onRequestClose={this.setModalVisible(!this.state.modalVisible)}
                    >
                        <View style={styles.modalBackgroundView}>
                            <View style={styles.modalContainer}>
                                <ScrollView>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitleText}>
                                            {gblStrings.accManagement.filterFunds}
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
                                            {gblStrings.accManagement.minimumInvestment}
                                        </Text>
                                        {
                                            this.state.filtermindata.map((item, index) => {
                                                var itemvalue = item.value;
                                                if (item.key == 50) {
                                                    itemvalue = itemvalue.replace(new RegExp('50', 'g'), gblStrings.common.dollar + '50');
                                                } else {
                                                    itemvalue = gblStrings.common.dollar + item.value;
                                                }
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor={"#DEDEDF"}
                                                        innerCicleColor={"#61285F"}
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
                                            this.state.filterriskdata.map((item, index) => {
                                                return (
                                                    <View key={item.key} style={styles.modalRiskViewContainer}>
                                                        <CustomCheckBox
                                                            size={20}
                                                            itemBottom={0}
                                                            itemTop={0}
                                                            outerCicleColor={"#DEDEDF"}
                                                            innerCicleColor={"#61285F"}
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
                                            this.state.filterfunddata.map((item, index) => {
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor={"#DEDEDF"}
                                                        innerCicleColor={"#61285F"}
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
    navigation: PropTypes.instanceOf(Object).isRequired,
    accOpeningData: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    addBankAccount:PropTypes.instanceOf(Object),
    
    saveData:PropTypes.func,
    saveAccountOpening:PropTypes.func,
    getFundListData:PropTypes.func,
    getCompositeLookUpData:PropTypes.func,
    addBankAccountAction:PropTypes.func

};
export default OpenAccPageThreeComponent;