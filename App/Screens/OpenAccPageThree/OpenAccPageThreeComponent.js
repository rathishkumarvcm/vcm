import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GInputComponent, GIcon, GHeaderComponent, GFooterComponent, GLoadingSpinner, GDropDownComponent, GDateComponent } from '../../CommonComponents';
import { CustomPageWizard, CustomDropDown, CustomCheckBox } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import InvestmentDetails from '../Models/InvestmentDetails';

const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
];


const fundingSourceList = [
    {
        "key": "pers_check",
        "value": "Personal Check"
    },
    {
        "key": "wire transfer",
        "value": "Wire Transfer"
    },
    {
        "key": "government allotment",
        "value": "Government Allotment"
    }

];

var fundList = [
    {
        "fundName": "USAA Intermediate-Term Bond Adviser",
        "fundNumber": 330,
        "risk": "High",
        "monthlyInvestment": "$0",
        "companyId": 591,
        "id_sort": 1,
        "symbol": "UITBX",
        "initialInvestment": "$3,000",
        "id": 1,
        "fundDescription": "USAA Intermediate-Term Bond Adviser"
    }
];


const fundingOptionsData = [
    {
        "key": "init",
        "value": "Initial Investment"
    },
    {
        "key": "init_mon", "value": "Initial and Monthly Investment"
    }
];



var filtermindata = [
    { key: '3000', value: '3000'},
    { key: '1000', value: '1000'},
    { key: '500', value: '500'},
    { key: '50', value: '50 initial and 50 monthly'},    
];
var filterriskdata = [
    { key: 'pre_cap', value: 'Preservation of Capital'},
    { key: 'con', value: 'Conservative'},
    { key: 'mod_con', value: 'Moderately Conservative'},
    { key: 'mod', value: 'Moderate'},   
    { key: 'mod_agr', value: 'Moderately Aggressive'},   
    { key: 'agg', value: 'Aggressive'},  
    { key: 'very_agg', value: 'Very Aggressive'},    
];
var filterfunddata = [
    { key: 'sta_fund', value: 'Starters Funds'},
    { key: 'tar_risk', value: 'Target Risk Funds'},
    { key: 'tar_ret', value: 'Target Retirement Funds'},
    { key: 'tax_bon', value: 'Taxable Bond Funds'},
    { key: 'tax_exe', value: 'Tax Exempt Bond Funds'}, 
    { key: 'sto_fund', value: 'Stock Funds'}, 
    { key: 'ind_fun', value: 'Index Funds'}, 
    { key: 'alt_sec', value: 'Alternative/Sector Funds'},    
    { key: 'mon_fun', value: 'Money Market Funds'},    
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
    style: PropTypes.instanceOf(Object)

};

class OpenAccPageThreeComponent extends Component {
    constructor(props) {

        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            minCount: 5,
            fundList: [...fundList.map(v => ({ ...v, isActive: false }))],
            fundingSourceList: [],
            offLineMethods:[],
            onLineMethods:[],
            selectedCount: 0,
            fundingSourceName: "",
            fundName: "",
            fundingOptions: "",
            fundingOptionsDropDown: false,
            initInvestment: "",
            monthlyInvestment: "",
            monthlyInvestmentDropDown: "",
            investStartDate: "",

            fundingOptionsValidation: true,
            initInvestmentValidation: true,
            monthlyInvestmentValidation: true,
            investStartDateValidation: true,

            total: "",
            action:"",
            selectedFundInvestmentsData:[],
            /* "fundNumber":"123", 
            "fundName":"Fund1",
            "fundingOption":"Initial",
            "initialInvestment":"3000",
            "monthlyInvestment":"ss",
            "startDate":"ss",
            "action":"add"
            */
           modalVisible: false,    
           filtermindata: [...filtermindata.map(v => ({ ...v, isActive: false }))],
           filterriskdata: [...filterriskdata.map(v => ({ ...v, isActive: false }))],
           filterfunddata: [...filterfunddata.map(v => ({ ...v, isActive: false }))], 
           applyFilterState : false,   

        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        console.log("componentDidMount::::> ");
        if (this.props && this.props.accOpeningData && !this.props.accOpeningData[ActionTypes.GET_FUNDLIST]) {
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
        if (this.props !== prevProps) {
            let tempFundListData = [];

            if (this.props.accOpeningData[ActionTypes.GET_FUNDLIST] != undefined && this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items != null) {
                tempFundListData = this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items;
                if (!prevProps.accOpeningData[ActionTypes.GET_FUNDLIST]) {
                    tempFundListData = this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items;
                    this.setState({
                        fundList: [...tempFundListData.map(v => ({ ...v, isActive: false }))],
                    });
                }
            }
            if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData["fund_source"] && this.props.masterLookupStateData["fund_source"].value) {
                tempFundingSourceList = this.props.masterLookupStateData["fund_source"].value;
                console.log("tempFundingSourceList:: " + JSON.stringify(tempFundingSourceList));
                if (!prevProps.masterLookupStateData["fund_source"]) {
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
                        alert(tempResponse.result)
                    } else {
                        alert(tempResponse.message)
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
    getSelectedFundsList = () =>{
        console.log("getSelectedFundsList::::>");
        let fundDataList = [];
        for (let i=0;i<this.state.fundList.length;i++){
            const tempObj = this.state.fundList[i];
            if(tempObj.isActive){
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
                        "method": this.state.fundingSourceName || "-",
                        "bankAccount": "Axis",
                        "accountType": "accountType",
                        "financialInstitutionName": "financialInstitutionName",
                        "accountOwner": "accountOwner",
                        "transitRoutingNumber": "transitRoutingNumber",
                        "accountNumber": "accountNumber"
                    },
                    "totalFunds": ""+this.state.selectedFundInvestmentsData.length || "-",
                    "totalInitialInvestment":"-",
                    "fundDataList": JSON.stringify(this.state.selectedFundInvestmentsData)
                },
            }
        }
        return payload;

    }
    onChangeText = (keyName) => text => {
        console.log("onChangeText:::>");
        this.setState({
            [keyName]: text
        });
    }
    onChangeTextForInvestment = (keyName, index) => text => {
        console.log("onChangeTextForInvestment:::>");
        let newItems = [...this.state.selectedFundInvestmentsData];
        newItems[index][keyName] = text;

        this.setState({
            selectedFundInvestmentsData: newItems,
        });
    }

    onChangeDateForInvestment = (keyName,index) => date => {
        console.log("onChangeDateForInvestment:::>");
        let newItems = [...this.state.selectedFundInvestmentsData];
        newItems[index][keyName] = date;

        this.setState({
            selectedFundInvestmentsData: newItems,
        });
    }

    onPressDropDown = (keyName) => () => this.setState({
        [keyName]: !this.state[keyName]
    });

    onPressDropDownForInvestment = (keyName, index) => () => {
        console.log("onPressDropDownForInvestment::: " + keyName);
        let newItems = [...this.state.selectedFundInvestmentsData];
        newItems[index][keyName] = !newItems[index][keyName];

        this.setState({
            selectedFundInvestmentsData: newItems,
        });

    }

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
        tempData.monthlyInvestment = "";
        tempData.startDate = "";
        tempData.fundingOptionValidation = false;
        tempData.initialInvestmentValidation = false;
        tempData.monthlyInvestmentValidation = false;
        tempData.startDateValidation = false;
        tempData.action = "add";

        this.setState({
            fundList: newItems,
            selectedFundInvestmentsData: [...this.state.selectedFundInvestmentsData, tempData],
            selectedCount: this.getSelectedItems().length
        });
    }

    onClickRowItem = (item, index) => () => {
        console.log("onSelectFundList:: " + item.fundNumber);
        //  this.props.navigation.navigate({ routeName: 'investmentPlanInfo', key: 'investmentPlanInfo' })
        this.props.navigation.push('investmentPlanInfo', { fundDetails: item.fundNumber });

    }

        onSelectSourceFundList = (item, index, method) => () => {
        console.log("onSelectSourceFundList:::>  " + method)
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
            offLineMethods: method == "offline" ? toBeChangedData : notToBeChangedData,
            onLineMethods: method == "online" ? toBeChangedData : notToBeChangedData,
            fundingSourceName: item

        });
        alert("onSelectSourceFundList:: " + item + " " + this.state.fundingSourceName)


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

        switch (dropDownName) {
            case "fundingOptionDropDown":
                let newItems = [...this.state.selectedFundInvestmentsData];
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
            minimum={item.initialInvestment}
            autoInvesting={`${item.initialInvestment} w/ ${item.monthlyInvestment} monthly`}
            risk={item.risk}
            onClickCheckbox={this.onSelectFundList(item, index)}
            onClickItem={this.onClickRowItem(item, index)}

        />
        );
    renderFundSourceListItem = (method) => ({ item ,index}) =>
        (<SourceListItem
            style={item.isActive? styles.accountItemSelected:styles.accountItem}
            sourceName={item.value}
            onPress={this.onSelectSourceFundList(item.value,index,method)}
        />
        );

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
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

        if (this.isEmpty(this.state.selectedCount)) {
            errMsg = gblStrings.accManagement.emptySeletedFundMsg;
            ++errMsgCount;

        } else if (this.state.selectedFundInvestmentsData.length > 0) {

            for (let i = 0; i < this.state.selectedFundInvestmentsData.length; i++) {
                var tempErrMsg = "";
                let tempObj = this.state.selectedFundInvestmentsData[i];
                console.log("tempObj::" + JSON.stringify(tempObj));
                console.log("tempObj.fundname::" + tempObj.fundName);

                let tempValidation = false;
                if (this.isEmpty(this.state.selectedCount)) {
                    tempErrMsg = gblStrings.accManagement.emptySeletedFundMsg;
                } else if (this.state.selectedCount > 10) {
                    tempErrMsg = gblStrings.accManagement.maximumSeletedFundMsg;
                } else if (this.isEmpty(this.state.fundingSourceName)) {
                    tempErrMsg = gblStrings.accManagement.emptyFundingSourceMsg;
                } else if (this.isEmpty(tempObj.fundingOption)) {
                    tempErrMsg = gblStrings.accManagement.emptyFundOptionsMsg;
                } else if (this.isEmpty(tempObj.initialInvestment)) {
                    tempErrMsg = gblStrings.accManagement.emptyInitInvestmentMsg;
                } else if (tempObj.fundingOption == "Initial and Monthly Investment" && this.isEmpty(tempObj.monthlyInvestment)) {
                    tempErrMsg = gblStrings.accManagement.emptyMonthlyInvestmentMsg;
                }else if(this.isEmpty(tempObj.startDate)){
                    tempErrMsg = gblStrings.accManagement.emptyStartDate;
                
               } else {
                    tempValidation = true;
                }

                console.log("tempErrMsg: " + tempErrMsg);

                if (!tempValidation) {
                    errMsg = tempErrMsg;
                    ++errMsgCount;
                    break;
                }else{
                }
            }

            if(errMsgCount == 0){
                isValidationSuccess = true;
            }

          

        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            alert(errMsg);

        } else {
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
    setModalVisible = (visible) =>()=>{       
        if(!visible && !this.state.applyFilterState){       
             this.clearFilterAction();
        }
        this.setState({ modalVisible: visible });   
        if(!this.state.applyFilterState){        
            this.constructFilterData();
        }             
     }  
 
     // Apply Filter Actions  
     applyFilterAction = (visible) =>()=>{       
         this.setState({ modalVisible: visible,applyFilterState:true });    
 
         var mininvestkey="";
         this.state.filtermindata.map((item)=>{           
            if(item.isActive){             
             if(mininvestkey!==null && mininvestkey!==""){
                 mininvestkey = mininvestkey.concat("|"+item.value)               
             }else{
                 mininvestkey = item.value;
             }
            }
         })    
         var riskkey="";
         this.state.filterriskdata.map((item)=>{           
            if(item.isActive){             
             if(riskkey!==null && riskkey!==""){
                 riskkey = riskkey.concat("|"+item.key)               
             }else{
                 riskkey = item.key;
             }
            }
         })         
         var funddatakey="";
         this.state.filterfunddata.map((item)=>{           
            if(item.isActive){             
             if(funddatakey!==null && funddatakey!==""){
                 funddatakey = funddatakey.concat("|"+item.key)               
             }else{
                 funddatakey = item.key;
             }
            }
         })        
         console.log("minInvest=",mininvestkey);   
         console.log("risk=",riskkey);  
         console.log("fundData=",funddatakey);      
 
         const fundListPayload = {'minInvestment':mininvestkey};
         this.props.getFundListData(fundListPayload);   
     }
 
     // Clear Filter Actions  
     clearFilterAction = () =>{            
         this.setState({applyFilterState:false });                    
         var tempmindata = [...this.state.filtermindata];
         this.setState({       
             filtermindata: [...tempmindata.map(v => ({...v,isActive:false}))]   
             });
 
         var tempriskdata = [...this.state.filterriskdata];
         this.setState({       
             filterriskdata: [...tempriskdata.map(v => ({...v,isActive:false}))]
             });
 
             var tempfunddata = [...this.state.filterfunddata];
         this.setState({       
             filterfunddata: [...tempfunddata.map(v => ({...v,isActive:false}))]
             });        
     }
 
     // Construct Filter values from Master Data on Clicking Filter Funds
     constructFilterData = () => {      
        temp_key_min_inv = 'filter_min_inv';       
        temp_key_risk = 'filter_risk';
        temp_key_fund_type = 'filter_fund_type';
        let tempfiltermindata = [];       
        let tempfilterriskdata = [];
        let tempfilterfunddata= [];
 
        console.log('Filter Clicked...'); 
        if (temp_key_min_inv !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[temp_key_min_inv] && this.props.masterLookupStateData[temp_key_min_inv].value) {
             tempfiltermindata = this.props.masterLookupStateData[temp_key_min_inv].value;                 
             this.setState({
                 filtermindata: [...tempfiltermindata.map(v => ({...v,isActive:false}))]  
             });                             
             console.log('Master Value : ',JSON.stringify(filtermindata));             
        }  
 
         if (temp_key_risk !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[temp_key_risk] && this.props.masterLookupStateData[temp_key_risk].value) {
             tempfilterriskdata = this.props.masterLookupStateData[temp_key_risk].value;            
             this.setState({
                 filterriskdata: [...tempfilterriskdata.map(v => ({...v,isActive:false}))]
             });            
             console.log('Master Value : ',JSON.stringify(filterriskdata));             
         }         
        
        if (temp_key_fund_type !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[temp_key_fund_type] && this.props.masterLookupStateData[temp_key_fund_type].value) {
             tempfilterfunddata = this.props.masterLookupStateData[temp_key_fund_type].value;                    
             this.setState({
                 filterfunddata: [...tempfilterfunddata.map(v => ({...v,isActive:false}))]
             });     
             console.log('Master Value : ',JSON.stringify(filterfunddata));             
        }     
     }
 
     // Checkbox selection on Clicking Filters 
     onCheckboxSelect = (fromtype,item,index) =>()=> {                              
         console.log('Index : ',index);
         console.log('Checkbox Selected : ',item.key + " " +item.value + " " +item.isActive);    
         
         switch(fromtype){
             case 'minInvest':
                 var newItm = [...this.state.filtermindata];
                 newItm[index].isActive = !newItm[index].isActive;
                 this.setState({ filtermindata: newItm });
             break;
             case 'risk':
                 var newItm = [...this.state.filterriskdata];
                 newItm[index].isActive = !newItm[index].isActive;
                 this.setState({ filterriskdata: newItm });
             break;
             case 'fundType':
                 var newItm = [...this.state.filterfunddata];
                 newItm[index].isActive = !newItm[index].isActive;
                 this.setState({ filterfunddata: newItm });
             break;
         }                           
         console.log('New Item:'+JSON.stringify(newItm));              
     }      
 

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        console.log("RENDER::: OpenAccPageThree ::>>>  ::::" + JSON.stringify(this.props));
        let tempFundOptionsData = fundingOptionsData;
        let tempFundListData = [];
        let currentPage = 3;

        tempFundListData = this.state.fundList.length > this.state.minCount ? this.state.fundList.slice(0, this.state.minCount) : this.state.fundList;
       
        return (
            <View style={styles.container}>
                 {
                    (this.props.accOpeningData.isLoading || this.props.masterLookupStateData.isLoading) && <GLoadingSpinner />
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
                            />

                            <View style={styles.fundListGrp}>
                                <Text style={styles.lblSelectedCountTxt}>
                                    {(this.state.selectedCount > 0) ? this.state.selectedCount + " of 25 Items selected" : ""}
                                </Text>

                                <FlatList
                                    data={tempFundListData}
                                    keyExtractor={this.generateFundListKeyExtractor}
                                    renderItem={this.renderFundListItem()}
                                />
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                                    onPress={this.showAllItems(25)}
                                    activeOpacity={0.2}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Text style={styles.showPagesTxt}>
                                            {"Show all 25 Items"}
                                        </Text>
                                        <GIcon
                                            name="right"
                                            type="antdesign"
                                            size={20}
                                            color="#61285F"
                                        />
                                    </View>

                                </TouchableOpacity>

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
                            <View style={{ flexGrow: 1, marginVertical: scaledHeight(0) }}>
                                <FlatList
                                    data={this.state.offLineMethods}
                                    keyExtractor={this.generateFundSourceKeyExtractor}
                                    renderItem={this.renderFundSourceListItem('offline')}
                                />
                            </View>
                            <Text style={{
                                marginTop: scaledHeight(12),
                                fontSize: scaledHeight(18),
                                color: '#56565A',
                                lineHeight: 25,
                                textAlign:'center'
                            }}>
                                {"or"}
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

                    { /*----------- Fund Your Investments -------------------*/}

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

                            <TouchableOpacity
                                //  onPress={() => { alert("#TODO:: Remove") }}
                                activeOpacity={0.8}
                                accessibilityRole={'button'}
                                style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: scaledHeight(22) }}
                            >
                                <Text style={{ fontSize: scaledHeight(16), color: '#61285F', fontWeight: 'bold', width: '100%', textAlign: 'right', lineHeight: 20 }}>
                                    {gblStrings.common.remove}
                                </Text>
                            </TouchableOpacity>
                         
                            {this.state.selectedFundInvestmentsData.map((item, index) => {
                                return (
                                    <View keyExtractor={this.generateFundInvestmentListKeyExtractor}>
                                        <TouchableOpacity
                                            //  onPress={() => { alert("#TODO:: Remove") }}
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
                                                dropDownPostition={{ ...styles.dropDownPostition, top: scaledHeight(160) }} />

                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.initInvestment}
                                            </Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                                    {"$"}
                                                </Text>
                                                <GInputComponent
                                                    propInputStyle={{ width: '90%' }}
                                                    maxLength={gblStrings.maxLength.initInvestment}
                                                    placeholder={"Initial Investment"}
                                                    onChangeText={this.onChangeTextForInvestment("initialInvestment", index)}

                                                />
                                            </View>
                                            <Text style={{ textAlign: 'right', width: '100%', color: '#56565A', fontSize: scaledHeight(12), marginTop: scaledHeight(12), }}>
                                                {"Minimum $3,000"}
                                            </Text>


                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.monthlyInvestment}
                                            </Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                                    {"$"}
                                                </Text>
                                                <GInputComponent
                                                    propInputStyle={{ width: '90%' }}
                                                    maxLength={gblStrings.maxLength.monthlyInvestment}
                                                    placeholder={"Monthly Investment"}
                                                    onChangeText={this.onChangeTextForInvestment("monthlyInvestment", index)}

                                                />
                                            </View>
                                            <Text style={{ textAlign: 'right', width: '100%', color: '#56565A', fontSize: scaledHeight(12), marginTop: scaledHeight(12), }}>
                                                {"Minimum $3,000"}
                                            </Text>

                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.startDate}
                                            </Text>
                                           
                                            <GDateComponent  startDateValidation
                                                date={this.state.selectedFundInvestmentsData[index].startDate}
                                                placeholder = "MM/DD/YYYY"
                                                errorFlag={this.state.selectedFundInvestmentsData[index].startDateValidation}
                                                errMsg = ""
                                                onDateChange={this.onChangeDateForInvestment("startDate", index)}
                                            />
                                        </View>
                                    </View>

                                );
                            })}

                          {/*
                            <View style={styles.investmentSection}>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.fundName}
                                </Text>
                                <Text style={styles.sectionDescTxt}>
                                    {"Aggressive Growth Fund"}
                                </Text>

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.fundingOptions}
                                </Text>
                                <CustomDropDown
                                    onPress={this.onPressDropDown("fundingOptionsDropDown")}
                                    inputref={this.setInputRef("fundingOptions")}
                                    value={this.state.fundingOptions}
                                    propInputStyle={this.state.fundingOptionsValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={"Select"}
                                />
                                {this.renderDropDown('fundingOptionsDropDown', fundingOptionsData)}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.initInvestment}
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                        {"$"}
                                    </Text>
                                    <GInputComponent
                                        propInputStyle={{ width: '90%' }}
                                        maxLength={gblStrings.maxLength.initInvestment}
                                        placeholder={"Initial Investment"}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText("initInvestment")}

                                    />
                                </View>
                                <Text style={{ textAlign: 'right', width: '100%', color: '#56565A', fontSize: scaledHeight(12), marginTop: scaledHeight(12), }}>
                                    {"Minimum $3,000"}
                                </Text>

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.monthlyInvestment}
                                </Text>
                                <CustomDropDown
                                    onPress={this.onPressDropDown("monthlyInvestmentDropDown")}
                                    inputref={this.setInputRef("monthlyInvestment")}
                                    value={this.state.monthlyInvestment}
                                    propInputStyle={this.state.monthlyInvestmentValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={"Select"}


                                />
                                {this.renderDropDown('monthlyInvestmentDropDown', monthlyInvestData)}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.startDate}
                                </Text>
                                <GInputComponent
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={"MM/DD/YYYY "}
                                />
                            </View>
                         */}
                            <View style={styles.investmentSectionFooter}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: scaledHeight(20) }}>

                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {gblStrings.accManagement.total}
                                    </Text>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"$3,000.00"}
                                    </Text>
                                </View>
                                <Text style={styles.lblLine} />
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: scaledHeight(20) }}>
                                    <TouchableOpacity
                                        //  onPress={() => { alert("#TODO:: Update") }}
                                        activeOpacity={0.8}
                                        accessibilityRole={'button'}
                                    >
                                        <Text style={styles.downloadPDFBtnTxt}>
                                            {gblStrings.common.update}
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>


                        </View>
                    
                    </View>



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
                    transparent={true}
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
                                    this.state.filtermindata.map((item,index)=>{    
                                        var itemvalue = item.value;                                
                                        if(item.key == 50){                                          
                                            itemvalue = itemvalue.replace(new RegExp('50', 'g'), '$50');                                            
                                        }else{ 
                                            itemvalue = "$"+item.value;   
                                        }
                                        return(                                           
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
                                                onPress={this.onCheckboxSelect("minInvest",item,index)}
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
                                    this.state.filterriskdata.map((item,index)=>{          
                                        return(
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
                                                    onPress={this.onCheckboxSelect("risk",item,index)}
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
                                    this.state.filterfunddata.map((item,index)=>{          
                                        return(
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
                                                onPress={this.onCheckboxSelect("fundType",item,index)}
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
};
export default OpenAccPageThreeComponent;