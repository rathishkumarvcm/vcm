import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Modal} from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent ,GDateComponent, GDropDownComponent, GButtonComponent, GFooterComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import {CustomCheckBox, PageNumber } from '../../AppComponents';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import InvestmentDetails from "../../Models/InvestmentDetails";
import { scaledHeight } from '../../Utils/Resolution';

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

let filtermindata = [
    { key: '3000', value: '3000' },
    { key: '1000', value: '1000' },
    { key: '500', value: '500' },
    { key: '50', value: '50 initial and 50 monthly' },
];

let filterriskdata = [
    { key: 'pre_cap', value: 'Preservation of Capital' },
    { key: 'con', value: 'Conservative' },
    { key: 'mod_con', value: 'Moderately Conservative' },
    { key: 'mod', value: 'Moderate' },
    { key: 'mod_agr', value: 'Moderately Aggressive' },
    { key: 'agg', value: 'Aggressive' },
    { key: 'very_agg', value: 'Very Aggressive' },
];

let filterfunddata = [
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

class PurchaseScreenTwoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedAccountData: {
                selectedAccountName: '',
                selectedAccountNumber: '',
                currentValue: '',
                holdingValue: '',
                AutoInvPlan: '',
                accType: '',
            },
            selectedFundInvestmentData:{},
            selectedFundIndex:null,
            disableNextButton:true,
            isValidationSuccess: true,
            errMsg:"",
            isFilterApplied: false,
            modalVisible: false,
            filtermindata: [...filtermindata.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...filterriskdata.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...filterfunddata.map(v => ({ ...v, isActive: false }))],
            applyFilterState: false,
            fundList: [],
            fundingSourceList: [],
            totalInitialInvestment: "",
            isFundYourInvestmentVisible:false
        };
    }

    componentDidMount(){
        console.log("componentDidMount::::> ");
        this.bindReceivedData();
        this.getLookUpData();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate::::> "+prevState);
        if (this.props !== prevProps) {
            let tempFundListData = [];
            if (this.props.accOpeningData[ActionTypes.GET_FUNDLIST] != undefined && this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items != null) {
                console.log("tempFundingSourceList:: " + JSON.stringify(this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items));
                tempFundListData = this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items;
                this.setState({
                    fundList: [...tempFundListData],
                    isFilterApplied: false
                });
            }
        }

    }

    getLookUpData=()=>{
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

    bindReceivedData=()=>{
        let data=this.props.navigation.getParam("accSelectionScreenData");
        this.setState({
            selectedAccountData: {
                selectedAccountName: data.selectedAccountName,
                selectedAccountNumber: data.selectedAccountNumber,
                currentValue: data.currentValue,
                holdingValue: data.holdingValue,
                AutoInvPlan: data.AutomaticInvestmentPlan,
                accType: data.accType
            }
        });
    }

    /* ---------------Button Events ------------------- */
    goBack = () => {
        this.props.navigation.goBack();
    }

    onClickCancel=()=>{
        this.props.navigation.navigate('purchaseScreenOne');
    }
    
    onClickNext=()=>{
        console.log("onclick Next:::");
        //this.props.navigation.navigate('purchaseScreenTwo');
    }

    /* ----------------- Filter Events ------------------ */
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

    setModalVisible = (visible) => () => {
        if (!visible && !this.state.applyFilterState) {
            this.clearFilterAction();
        }
        this.setState({ modalVisible: visible });
        if (!this.state.applyFilterState) {
            this.constructFilterData();
        }
    }

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

    /* -------------------Validation Events ----------------------- */

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    /* ----------------- Fund List Events -------------------------- */
    getIndex = (value, arr, prop) => {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][prop] === value) {
                return i;
            }
        }
        return -1; //to handle the case where the value doesn't exist
    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onSelectFund = (item, index) => () => {
        console.log("onSelectFundList:: " + index);
        this.setState({ selectedFundIndex:index });

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

        this.setState({selectedFundInvestmentData: tempData});
    }

    onPressDropDownForInvestment = (keyName) => () => {
        console.log("onPressDropDownForInvestment::: " + keyName);
        let newData = this.state.selectedFundInvestmentData;

        newData[keyName]=!newData[keyName]
        newData.fundingOptionValidation = true;
        newData.initialInvestmentValidation = true;
        newData.monthlyInvestmentValidation = true;
        newData.startDateValidation = true;
        this.setState({
            selectedFundInvestmentsData: newData,
        });
    }

    onSelectedDropDownValue = (dropDownName) => (item) => {
        console.log("onSelectedDropDownValue:: " + dropDownName);
        let newData = this.state.selectedFundInvestmentData;
        newData[dropDownName] = false;
        newData.fundingOption = item.value;
        this.setState({selectedFundInvestmentData: newData});
    }

    onChangeDateForInvestment = (keyName) => date => {
        console.log("onChangeDateForInvestment:::>");
        let newData = this.state.selectedFundInvestmentData;
        newData[keyName] = date;
        newData.fundingOptionValidation = true;
        newData.initialInvestmentValidation = true;
        newData.monthlyInvestmentValidation = true;
        newData.startDateValidation = true;

        this.setState({selectedFundInvestmentData: newData});
    }

    onChangeTextForInvestment = (keyName) => text => {
        console.log("onChangeTextForInvestment:::>");
        let newData = this.state.selectedFundInvestmentData;

        newData[keyName] = text;
        newData.fundingOptionValidation = true;
        newData.initialInvestmentValidation = true;
        newData.monthlyInvestmentValidation = true;
        newData.startDateValidation = true;

        let total = 0;
        if (!isNaN(newData["initialInvestment"]) && newData["initialInvestment"] != "") {
            total = total + parseFloat(newData["initialInvestment"]);
        }
        console.log("total:::>" + total);
        this.setState({
            totalInitialInvestment: "$ " + total,
            selectedFundInvestmentData: newData,
        });
    }

    generateFundListKeyExtractor = (item) => item.fundNumber.toString();


    render() {
        let currentPage = 2;
        let pageName = '2 - Investment Selection';
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1; 
        const year = new Date().getFullYear(); 
        const currentdate = month+"-"+date+"-"+year;
        return (
            <View style={styles.container} >
               
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <PageNumber currentPage={currentPage} pageName={pageName} />
                    <View style={styles.topContainer}>
                        <Text style={styles.topContainerTxtBold}>{gblStrings.liquidation.accountName} {this.state.selectedAccountData.selectedAccountName}</Text>
                        <View style={styles.flexDirectionStyle}>
                            <Text style={styles.topContainerTxtBold}>{gblStrings.liquidation.accountNumber}</Text>
                            <Text style={styles.topContainerTxtBold}>{this.state.selectedAccountData.selectedAccountNumber}</Text>
                        </View>
                    </View>

                    {/*-------------Select VCM Funds -----------------------*/}

                    <View style={styles.innerContainerStyle}>
                        <Text style={styles.headerText}>{gblStrings.purchase.selectVcmMutualFund}</Text>
                        <View style={styles.line} />
                        <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.selectStmt}</Text>
                        <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.useFilterStmt}</Text>
                        <View style={styles.contentView}>
                            <GButtonComponent
                                buttonStyle={styles.filterFundsBtn}
                                buttonText={gblStrings.purchase.fillerFund}
                                textStyle={styles.filterFundsBtnTxt}
                                onPress={this.setModalVisible(true)}
                            />
                            <GButtonComponent
                                buttonStyle={styles.compareFundsBtn}
                                buttonText={gblStrings.purchase.compareFund}
                                textStyle={styles.compareFundsBtnTxt}
                                //onPress={this.navigateCompareFunds}
                            />
                            <View style={styles.fundListGrp}>
                                <FlatList
                                    data={this.state.fundList?this.state.fundList:[]}
                                    keyExtractor={this.generateFundListKeyExtractor}
                                    extraData={this.state}
                                    renderItem={({ item, index }) => {
                                        return(
                                            <View style={(this.state.selectedFundIndex===index)?styles.fundItemStyleSelected:styles.fundItemStyle} onTouchStart={this.onSelectFund(item,index)}>
                                                <View style={styles.fundItemHeaderView}>
                                                    <Text style={styles.fundItemHeaderTxt}>{item.fundName}</Text>
                                                    {item.existingFund?<Text style={styles.existingFundStyle}>{"Existing Fund"}</Text>:null}
                                                </View>
                                                <View style={styles.lineStyle} />
                                                <View style={styles.fundItemContntView}>
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundItemValueHeading}>{"Last NAV (Previous day close"}</Text>
                                                        <Text style={styles.fundItemValueTxt}>{"$ 143"}</Text>
                                                    </View>
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundItemValueHeading}>{"NAV in %"}</Text>
                                                        <Text style={styles.fundItemValueTxt}>{"14.3"}</Text>
                                                    </View>
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundItemValueHeading}>{"Min. / Max. Amopunt"}</Text>
                                                        <Text style={styles.fundItemValueTxt}>{"$ 300/ $ 5000"}</Text>
                                                    </View>
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundItemValueHeading}>{"52 week Min. / Max. Values"}</Text>
                                                        <Text style={styles.fundItemValueTxt}>{"$ 3000 / $ 5000"}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    {this.state.selectedFundIndex ?
                        <View style={styles.innerContainerStyle}>
                            <Text style={styles.headerText}>{" - "+"Fund Your Investments"}</Text>
                            <View style={styles.line} />
                            <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.fundAccStmt}</Text>
                            <View>
                                {/* <TouchableOpacity
                                    onPress={this.onPressRemoveInvestment(item,index)}
                                    activeOpacity={0.8}
                                    accessibilityRole={'button'}
                                    style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: scaledHeight(22) }}
                                >
                                    <Text style={{ fontSize: scaledHeight(16), color: '#61285F', fontWeight: 'bold', width: '100%', textAlign: 'right', lineHeight: 20 }}>
                                        {gblStrings.common.remove}
                                    </Text>
                                </TouchableOpacity> */}

                                <View style={styles.fundInvestView}>
                                    <View style={styles.marginBottomStyle}>
                                        <Text style={styles.fundInvestTitle}>{gblStrings.accManagement.fundName}</Text>
                                        <Text style={styles.fundItemValueTxt}>{this.state.selectedFundInvestmentData.fundName}</Text>
                                    </View>
                                    <View style={styles.marginBottomStyle}>
                                        <GDropDownComponent
                                            inputref={this.setInputRef("fundingOptionDropDown")}
                                            dropDownLayout={styles.dropDownLayout}
                                            dropDownTextName={styles.fundInvestTitle}
                                            textInputStyle={styles.textInputStyle}
                                            dropDownName={gblStrings.accManagement.fundingOptions}
                                            data={fundingOptionsData}
                                            changeState={this.onPressDropDownForInvestment("fundingOptionDropDown")}
                                            showDropDown={this.state.selectedFundInvestmentData.fundingOptionDropDown}
                                            dropDownValue={this.state.selectedFundInvestmentData.fundingOption}
                                            selectedDropDownValue={this.onSelectedDropDownValue("fundingOptionDropDown")}
                                            itemToDisplay={"value"}
                                            errorFlag={!this.state.selectedFundInvestmentData.fundingOptionValidation}
                                            errorText={gblStrings.accManagement.emptyFundOptionsMsg}
                                        />
                                    </View>
                                    <View style={styles.marginBottomStyle}>
                                        <Text style={styles.fundInvestTitle}>{gblStrings.purchase.initialInvestment}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>{"$"}</Text>
                                            <GInputComponent
                                                inputref={this.setInputRef("initialInvestment")}
                                                propInputStyle={{ width: '90%' }}
                                                maxLength={gblStrings.maxLength.initInvestment}
                                                placeholder={"Initial Investment"}
                                                keyboardType="decimal-pad"
                                                onChangeText={this.onChangeTextForInvestment("initialInvestment")}
                                                errorFlag={!this.state.selectedFundInvestmentData.initialInvestmentValidation}
                                                errorText={""}
                                            /> 
                                        </View>
                                        {!this.state.selectedFundInvestmentData.initialInvestmentValidation &&
                                            <Text style={styles.errMsg}>{gblStrings.accManagement.emptyInitInvestmentMsg}</Text>
                                        }
                                        <Text style={{ textAlign: 'right', width: '100%', color: '#56565A', fontSize: scaledHeight(12), marginTop: scaledHeight(12), }}>
                                            {`Minimum $${this.state.selectedFundInvestmentData.mininitialInvestment}`}
                                        </Text>
                                        {this.state.selectedFundInvestmentData.fundingOption == "Initial and Monthly Investment" && 
                                            <View style={{flexGrow:1}}>
                                                <Text style={styles.fundInvestTitle}>{gblStrings.purchase.monthlyInvestment}</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                                        {"$"}
                                                    </Text>
                                                    <GInputComponent
                                                        inputref={this.setInputRef("monthlyInvestment")}
                                                        propInputStyle={{ width: '90%' }}
                                                        maxLength={gblStrings.maxLength.monthlyInvestment}
                                                        placeholder={"Monthly Investment"}
                                                        value={this.state.selectedFundInvestmentData.monthlyInvestment}
                                                        keyboardType="decimal-pad"
                                                        onChangeText={this.onChangeTextForInvestment("monthlyInvestment")}
                                                        errorFlag={!this.state.selectedFundInvestmentData.monthlyInvestmentValidation}
                                                        errorText={""}
                                                    />
                                                </View> 
                                                {!this.state.selectedFundInvestmentData.monthlyInvestmentValidation &&<Text style={styles.errMsg}>{gblStrings.accManagement.emptyMonthlyInvestmentMsg}</Text>}
                                                <Text style={styles.fundInvestTitle}>{gblStrings.purchase.startDate}</Text>
                                                <GDateComponent
                                                    inputref={this.setInputRef("startDate")}
                                                    date={this.state.selectedFundInvestmentData.startDate}
                                                    minDate={currentdate}
                                                    placeholder="MM/DD/YYYY"
                                                    errorFlag={!this.state.selectedFundInvestmentData.startDateValidation}
                                                    errorMsg={gblStrings.accManagement.emptyStartDate}
                                                    onDateChange={this.onChangeDateForInvestment("startDate")}
                                                />
                                            </View>
                                        }
                                    </View>
                                    <View style={styles.line}/>
                                    <View style={styles.totalView}>
                                        <Text style={styles.fundInvestTitle}>{gblStrings.accManagement.total}</Text>
                                        <Text style={styles.fundInvestTitle}>{this.state.totalInitialInvestment}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>:null
                    }
              
                   {/*----------------- Button Group -------------------- */}

                   <View style={styles.btnGrp}>
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />
                        <GButtonComponent
                            buttonStyle={this.state.disableNextButton?styles.normalBlackBtn:styles.normalBlackDisabledBtn}
                            buttonText={gblStrings.common.next}
                            textStyle={this.state.disableNextButton?styles.normalBlackBtnTxt:styles.normalBlackBtnDisabledTxt}
                            onPress={this.onClickNext}
                        />
                    </View>

                    {/*---------------------- Footer View -------------------- */}

                    <View style={styles.fullLine} />
                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>
                    <GFooterComponent />

                    {/* --------------------- Modal View For Filter Funds -------------------------- */}
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
                                            {gblStrings.purchase.fillerFund}
                                        </Text>
                                        <TouchableOpacity onPress={this.setModalVisible(!this.state.modalVisible)}>
                                            <GIcon name="close" type="antdesign" size={30} color="black" />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>
                                            {gblStrings.accManagement.minimumInvestment}
                                        </Text>
                                        {this.state.filtermindata.map((item, index) => {
                                                let itemvalue = item.value;
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
                                        {this.state.filterriskdata.map((item, index) => {
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
                                                            <GIcon name="infocirlceo" type="antdesign" size={20} color="#DEDEDF" />
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
                                        {this.state.filterfunddata.map((item, index) => {
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


PurchaseScreenTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

PurchaseScreenTwoComponent.defaultProps = {

};
export default PurchaseScreenTwoComponent;