import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import PropTypes from "prop-types";
import { GIcon, GInputComponent, GHeaderComponent, GDateComponent, GDropDownComponent, GButtonComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { CustomCheckBox, PageNumber } from '../../AppComponents';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

const fundingOptionsData = [
    { "key": "init", "value": "Initial Investment" },
    { "key": "init_mon", "value": "Initial and Monthly Investment" }
];

const filterMinData = [
    { key: '3000', value: '3000' },
    { key: '1000', value: '1000' },
    { key: '500', value: '500' },
    { key: '50', value: '50 initial and 50 monthly' },
];

const filterRiskData = [
    { key: 'pre_cap', value: 'Preservation of Capital' },
    { key: 'con', value: 'Conservative' },
    { key: 'mod_con', value: 'Moderately Conservative' },
    { key: 'mod', value: 'Moderate' },
    { key: 'mod_agr', value: 'Moderately Aggressive' },
    { key: 'agg', value: 'Aggressive' },
    { key: 'very_agg', value: 'Very Aggressive' },
];

const filterFundData = [
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

let savedData = {};
let ammendData = {};
let ammendIndex = 0;

class PurchaseScreenTwoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFundInvestmentData: {},
            selectedFundIndex: null,
            disableNextButton: true,
            modalVisible: false,
            filterMinData: [...filterMinData.map(v => ({ ...v, isActive: false }))],
            filterRiskData: [...filterRiskData.map(v => ({ ...v, isActive: false }))],
            filterFundData: [...filterFundData.map(v => ({ ...v, isActive: false }))],
            applyFilterState: false,
            fundList: [],
            totalInitialInvestment: "",
            isFilterApplied: false,
            ammend: false
        };
    }

    componentDidMount() {
        this.getLookUpData();
        ammendData = this.props.navigation.getParam('data');
        ammendIndex = this.props.navigation.getParam('index');
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            let tempFundListData = [];
            if (this.props.accOpeningData[ActionTypes.GET_FUNDLIST] !== undefined && this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items !== null) {
                tempFundListData = this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items;
                this.setState({
                    fundList: [...tempFundListData],
                    isFilterApplied: false
                });
                if (this.state.ammend) {
                    tempFundListData.map((item, k) => {
                        if (item.fundName === ammendData.selectedFundData.fundName) {
                            this.setState({ selectedFundIndex: k });
                        }
                        return 0;
                    });
                    this.onAmmendFund();
                }
            }
        }
    }

    getLookUpData = () => {
        if (this.props.navigation.getParam('ammend')) {
            this.setState({ ammend: true });
        }
        else {
            this.setState({ ammend: false });
        }

        if (this.state && this.state.fundList && !this.state.fundList.length > 0) {
            const fundListPayload = {};
            this.props.getFundListData(fundListPayload);
        }

        const payload = [];
        const compositePayloadData = [
            "fund_source",
            "fund_options",
            "filter_min_inv",
            "filter_fund_type",
            "filter_risk"
        ];

        for (let i = 0; i < compositePayloadData.length; i = i + 1) {
            const tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        this.props.getCompositeLookUpData(payload);
    }

    /* ---------------Button Events ------------------- */
    goBack = () => {
        this.props.navigation.goBack();
    }

    onClickCancel = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('tAmmendComponent');
        }
        else {
            this.props.navigation.navigate('purchaseScreenOne');
        }
    }

    /* ----------------- Filter Events ------------------ */
    onCheckboxSelect = (type, item, index) => () => {
        let newItm = [];
        switch (type) {
            case 'minInvest':
                newItm = [...this.state.filterMinData];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterMinData: newItm });
                break;
            case 'risk':
                newItm = [...this.state.filterRiskData];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterRiskData: newItm });
                break;
            case 'fundType':
                newItm = [...this.state.filterFundData];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterFundData: newItm });
                break;
            default:
                break;
        }
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
        const tempMin = [...this.state.filterMinData];
        const tempRisk = [...this.state.filterRiskData];
        const tempFund = [...this.state.filterFundData];

        this.setState({
            filterMinData: [...tempMin.map(v => ({ ...v, isActive: false }))],
            filterRiskData: [...tempRisk.map(v => ({ ...v, isActive: false }))],
            filterFundData: [...tempFund.map(v => ({ ...v, isActive: false }))]
        });
    }

    constructFilterData = () => {
        const tempKeyMinInv = 'filter_min_inv';
        const tempKeyRisk = 'filter_risk';
        const tempKeyFundType = 'filter_fund_type';
        let tempMinInvData = [];
        let tempRiskData = [];
        let tempFundTypeData = [];

        if (tempKeyMinInv !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempKeyMinInv] && this.props.masterLookupStateData[tempKeyMinInv].value) {
            tempMinInvData = this.props.masterLookupStateData[tempKeyMinInv].value;
        }

        if (tempKeyRisk !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempKeyRisk] && this.props.masterLookupStateData[tempKeyRisk].value) {
            tempRiskData = this.props.masterLookupStateData[tempKeyRisk].value;
        }

        if (tempKeyFundType !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempKeyFundType] && this.props.masterLookupStateData[tempKeyFundType].value) {
            tempFundTypeData = this.props.masterLookupStateData[tempKeyFundType].value;
        }

        this.setState({
            filterMinData: [...tempMinInvData.map(v => ({ ...v, isActive: false }))],
            filterRiskData: [...tempRiskData.map(v => ({ ...v, isActive: false }))],
            filterFundData: [...tempFundTypeData.map(v => ({ ...v, isActive: false }))]
        });
    }

    applyFilterAction = (visible) => () => {
        this.setState({
            modalVisible: visible,
            applyFilterState: true,
            fundList: [],
            isFilterApplied: true
        });

        let minInvestKey = "";
        this.state.filterMinData.map((item) => {
            if (item.isActive) {
                if (minInvestKey !== null && minInvestKey !== "") {
                    minInvestKey = minInvestKey.concat("|" + item.value);
                } else {
                    minInvestKey = item.value;
                }
            }
            return 0;
        });

        let riskKey = "";
        this.state.filterRiskData.map((item) => {
            if (item.isActive) {
                if (riskKey !== null && riskKey !== "") {
                    riskKey = riskKey.concat("|" + item.key);
                } else {
                    riskKey = item.key;
                }
            }
            return 0;
        });

        let fundKey = "";
        this.state.filterFundData.map((item) => {
            if (item.isActive) {
                if (fundKey !== null && fundKey !== "") {
                    fundKey = fundKey.concat("|" + item.key);
                } else {
                    fundKey = item.key;
                }
            }
            return 0;
        });

        const fundListPayload = { 'minInvestment': minInvestKey };
        this.props.getFundListData(fundListPayload);
    }

    navigateCompareFunds = () => {
        //  AppUtils.debugLog(this.state.selectedFundInvestmentsData);
        //  if (this.state.selectedFundInvestmentsData.length > 1) {
        //      if (this.state.selectedFundInvestmentsData.length < 5) {
        //          let fundSelectedCompare = "";
        //          this.state.selectedFundInvestmentsData.map((item, index) => {
        //              fundSelectedCompare = `${fundSelectedCompare.concat(`fundNumber${index + 1}=${item.fundNumber}`)}&`;
        //          });
        //          //  AppUtils.debugLog("Selected Funds:"+fundSelectedCompare);
        //          if (fundSelectedCompare !== null && fundSelectedCompare !== "") {
        //              this.props.navigation.push('compareFunds', { fundDetails: fundSelectedCompare });
        //          }
        //      } else {
        //          alert('Please select minimum 2 or maximum 4 funds to compare');
        //      }
        //  } else {
        //      alert('Please select minimum 2 or maximum 4 funds to compare');
        //  }
    }

    /* -------------------Validation Events ----------------------- */

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        }
    }

    onValidate = () => {
        try {
            let isValidationSuccess = false;
            this.setState(prevState => ({
                selectedFundInvestmentData: {
                    ...prevState.selectedFundInvestmentData,
                    fundingOptionValidation: true,
                    initialInvestmentValidation: true,
                    monthlyInvestmentValidation: true,
                    startDateValidation: true
                }
            }));
            if (!this.onValidateEach()) {
                isValidationSuccess = false;
            } else {
                isValidationSuccess = true;
            }
            if (isValidationSuccess) {
                this.onClickSave();
            }
        } catch (err) {
            console.log(`Error::: ${err}`);
        }
    }

    onValidateEach = () => {
        let isErr = false;
        let isValidationSuccess = false;

        if (this.isEmpty(this.state.selectedFundInvestmentData.fundingOption)) {
            this.onUpdateField("fundingOptionValidation", false);
            isErr = true;
        }

        if (this.isEmpty(this.state.selectedFundInvestmentData.initialInvestment)) {
            this.onUpdateField("initialInvestmentValidation", false);
            isErr = true;
        }

        if (this.state.selectedFundInvestmentData.fundingOption === 'Initial and Monthly Investment') {
            if (this.isEmpty(this.state.selectedFundInvestmentData.monthlyInvestment)) {
                this.onUpdateField("monthlyInvestmentValidation", false);
                isErr = true;
            }
            if (this.isEmpty(this.state.selectedFundInvestmentData.startDate)) {
                this.onUpdateField("startDateValidation", false);
                isErr = true;
            }
        }

        if (!isErr) {
            isValidationSuccess = true;
        }

        return isValidationSuccess;
    }

    onClickSave = () => {
        if (this.state.ammend) {
            const ammendPayloadData = {
                savePurchaseSelectedData: {
                    "selectedAccountData": ammendData.selectedAccountData,
                    "selectedFundData": {
                        "fundName": this.state.selectedFundInvestmentData.fundName,
                        "fundNumber": this.state.selectedFundInvestmentData.fundNumber,
                        "fundingOption": this.state.selectedFundInvestmentData.fundingOption,
                        "initialInvestment": this.state.selectedFundInvestmentData.initialInvestment,
                        "monthlyInvestment": this.state.selectedFundInvestmentData.monthlyInvestment,
                        "startDate": this.state.selectedFundInvestmentData.startDate,
                        "count": '',
                        "total": this.state.totalInitialInvestment
                    },
                    "selectedFundSourceData": ammendData.selectedFundSourceData,
                    "currentSecurities": ammendData.currentSecurities,
                    "contribution": ammendData.contribution,
                    "estimated": ammendData.estimated
                }
            };
            this.props.saveData(ammendPayloadData);
            this.props.navigation.navigate('purchaseScreenThree', { ammend: true, index: ammendIndex, data: ammendData });
        }
        else {
            const payloadData = {
                savePurchaseSelectedData: {
                    ...savedData,
                    "selectedFundData": {
                        "fundName": this.state.selectedFundInvestmentData.fundName,
                        "fundNumber": this.state.selectedFundInvestmentData.fundNumber,
                        "fundingOption": this.state.selectedFundInvestmentData.fundingOption,
                        "initialInvestment": this.state.selectedFundInvestmentData.initialInvestment,
                        "monthlyInvestment": this.state.selectedFundInvestmentData.monthlyInvestment,
                        "startDate": this.state.selectedFundInvestmentData.startDate,
                        "count": '',
                        "total": this.state.totalInitialInvestment
                    },
                }
            };
            this.props.saveData(payloadData);
            this.props.navigation.navigate('purchaseScreenThree', { ammend: false });
        }
    }

    /* ----------------- Fund List Events -------------------------- */

    onPressRemoveInvestment = () => {
        this.setState({ selectedFundIndex: null });
    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onSelectFund = (item, index) => () => {
        const tempData = {};
        if (!this.state.ammend) {
            tempData.fundName = item.fundName;
            tempData.fundNumber = item.fundNumber;
            tempData.fundingOption = "";
            tempData.initialInvestment = "";
            tempData.mininitialInvestment = item.initialInvestment;
            tempData.monthlyInvestment = "";
            tempData.minmonthlyInvestment = item.initialInvestment;
            tempData.startDate = "";
            tempData.fundingOptionValidation = true;
            tempData.initialInvestmentValidation = true;
            tempData.monthlyInvestmentValidation = true;
            tempData.startDateValidation = true;
            tempData.action = "add";

            this.setState({ selectedFundInvestmentData: tempData, disableNextButton: false, selectedFundIndex: index });
        }

    }

    onAmmendFund = () => {
        let tempData = {};
        if (ammendData) {
            tempData.fundName = ammendData.selectedFundData.fundName;
            tempData.fundNumber = ammendData.selectedFundData.fundNumber;
            tempData.fundingOption = ammendData.selectedFundData.fundingOption;
            tempData.initialInvestment = ammendData.selectedFundData.initialInvestment;
            tempData.mininitialInvestment = '5244';
            tempData.monthlyInvestment = ammendData.selectedFundData.monthlyInvestment;
            tempData.minmonthlyInvestment = '4522';
            tempData.startDate = ammendData.selectedFundData.startDate;
            tempData.fundingOptionValidation = true;
            tempData.initialInvestmentValidation = true;
            tempData.monthlyInvestmentValidation = true;
            tempData.startDateValidation = true;
            tempData.action = "ammend";

            this.setState({
                selectedFundInvestmentData: tempData,
                disableNextButton: false,
                totalInitialInvestment: ammendData.selectedFundData.total
            });
        }

    }

    onSelectedDropDownValue = (value) => {
        const newData = this.state.selectedFundInvestmentData;
        newData.fundingOption = value;
        this.setState({ selectedFundInvestmentData: newData });
    }

    onUpdateField = (keyName, data) => {
        const newData = this.state.selectedFundInvestmentData;
        newData[keyName] = data;
        this.setState({ selectedFundInvestmentData: newData });
    }

    onChangeDateForInvestment = (keyName) => date => {
        const newData = this.state.selectedFundInvestmentData;
        newData[keyName] = date;
        newData.fundingOptionValidation = true;
        newData.initialInvestmentValidation = true;
        newData.monthlyInvestmentValidation = true;
        newData.startDateValidation = true;
        this.setState({ selectedFundInvestmentData: newData });
    }

    onChangeTextForInvestment = (keyName) => text => {
        const newData = this.state.selectedFundInvestmentData;
        let total = 0;
        newData[keyName] = text;
        newData.fundingOptionValidation = true;
        newData.initialInvestmentValidation = true;
        newData.monthlyInvestmentValidation = true;
        newData.startDateValidation = true;

        if (!isNaN(newData.initialInvestment) && newData.initialInvestment !== "") {
            total = total + parseFloat(newData.initialInvestment);
        }
        if (!isNaN(newData.monthlyInvestment) && newData.monthlyInvestment !== "") {
            total = total + parseFloat(newData.monthlyInvestment);
        }
        this.setState({
            totalInitialInvestment: `$ ${total}`,
            selectedFundInvestmentData: newData,
        });
    }

    generateFundListKeyExtractor = (item) => item.fundNumber.toString();


    render() {
        let currentPage = 2;
        let pageName = `${currentPage} - ${gblStrings.purchase.investmentSelection}`;
        let totalCount = 4;
        if (this.state.ammend) {
            currentPage = 1;
            pageName = `${currentPage} - ${gblStrings.purchase.investmentSelection}`;
            totalCount = 3;
        }

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const currentDate = `${month}-${date}-${year}`;

        if (this.props.purchaseData && this.props.purchaseData.savePurchaseSelectedData) {
            savedData = this.props.purchaseData.savePurchaseSelectedData;
        }

        return (
            <View style={styles.container}>
                {this.props.accOpeningData.isLoading || this.props.masterLookupStateData.isLoading && <GLoadingSpinner />}
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.topContainer}>
                        <Text style={styles.topContainerTxtBold}>{gblStrings.purchase.accountName} {this.state.ammend ? ammendData.selectedAccountData.accountName : savedData.selectedAccountData.accountName}</Text>
                        <View style={styles.flexDirectionStyle}>
                            <Text style={styles.topContainerTxtBold}>{gblStrings.purchase.accountNumber}</Text>
                            <Text style={styles.topContainerTxtBold}>{this.state.ammend ? ammendData.selectedAccountData.accountNumber : savedData.selectedAccountData.accountNumber}</Text>
                        </View>
                    </View>

                    {/* -------------Select VCM Funds ----------------------- */}

                    <View style={styles.innerContainerStyle}>
                        <Text style={styles.headerText}>{gblStrings.purchase.selectVcmMutualFund}</Text>
                        <View style={styles.line} />
                        {!this.state.ammend && <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.selectStmt}</Text>}
                        {!this.state.ammend && <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.useFilterStmt}</Text>}
                        <View style={styles.contentView}>
                            {!this.state.ammend && <GButtonComponent
                                buttonStyle={styles.filterFundsBtn}
                                buttonText={gblStrings.purchase.fillerFund}
                                textStyle={styles.filterFundsBtnTxt}
                                onPress={this.setModalVisible(true)}
                            />}
                            {!this.state.ammend && <GButtonComponent
                                buttonStyle={styles.compareFundsBtn}
                                buttonText={gblStrings.purchase.compareFund}
                                textStyle={styles.compareFundsBtnTxt}
                                onPress={this.navigateCompareFunds}
                            />}
                            <View style={styles.fundListGrp}>
                                <FlatList
                                    data={this.state.fundList ? this.state.fundList : []}
                                    keyExtractor={this.generateFundListKeyExtractor}
                                    extraData={this.state}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View style={(this.state.selectedFundIndex === index) ? styles.fundItemStyleSelected : styles.fundItemStyle} onTouchStart={this.onSelectFund(item, index)}>
                                                <View style={styles.fundItemHeaderView}>
                                                    <Text style={styles.fundItemHeaderTxt}>{item.fundName}</Text>
                                                    {item.existingFund ? <Text style={styles.existingFundStyle}>Existing Fund</Text> : null}
                                                </View>
                                                <View style={styles.lineStyle} />
                                                <View style={styles.fundItemContntView}>
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundItemValueHeading}>Last NAV (Previous day close</Text>
                                                        <Text style={styles.fundItemValueTxt}>$ 143</Text>
                                                    </View>
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundItemValueHeading}>NAV in %</Text>
                                                        <Text style={styles.fundItemValueTxt}>14.3</Text>
                                                    </View>
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundItemValueHeading}>Min. / Max. Amount</Text>
                                                        <Text style={styles.fundItemValueTxt}>$ 300/ $ 5000</Text>
                                                    </View>
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundItemValueHeading}>52 week Min. / Max. Values</Text>
                                                        <Text style={styles.fundItemValueTxt}>$ 3000 / $ 5000</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    }}
                                />
                            </View>
                            <View style={styles.loadMoreStyle}>
                                <Text style={styles.removeTxtStyle}>{gblStrings.purchase.loadMore}</Text>
                            </View>
                        </View>
                    </View>

                    {this.state.selectedFundIndex ?
                        <View style={styles.innerContainerStyle}>
                            <Text style={styles.headerText}>{gblStrings.purchase.fundYourAcc}</Text>
                            <View style={styles.line} />
                            <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.fundAccStmt}</Text>
                            <View>
                                <TouchableOpacity
                                    onPress={this.onPressRemoveInvestment}
                                    style={styles.removeBtnStyle}
                                >
                                    <Text style={styles.removeTxtStyle}>
                                        {gblStrings.common.remove}
                                    </Text>
                                </TouchableOpacity>

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
                                            dropDownValue={this.state.selectedFundInvestmentData.fundingOption}
                                            selectedDropDownValue={this.onSelectedDropDownValue}
                                            errorFlag={!this.state.selectedFundInvestmentData.fundingOptionValidation}
                                            errorText={gblStrings.accManagement.emptyFundOptionsMsg}
                                        />
                                    </View>
                                    <View style={styles.marginBottomStyle}>
                                        <Text style={styles.fundInvestTitle}>{gblStrings.purchase.initialInvestment}</Text>
                                        <View style={styles.iconFrontStyle}>
                                            <Text style={styles.dollerIconTxt}>$</Text>
                                            <GInputComponent
                                                inputref={this.setInputRef("initialInvestment")}
                                                propInputStyle={styles.amountBox}
                                                value={this.state.selectedFundInvestmentData.initialInvestment}
                                                maxLength={gblStrings.maxLength.initInvestment}
                                                placeholder="Initial Investment"
                                                keyboardType="decimal-pad"
                                                onChangeText={this.onChangeTextForInvestment("initialInvestment")}
                                                errorFlag={!this.state.selectedFundInvestmentData.initialInvestmentValidation}
                                                errorText=""
                                            />
                                        </View>
                                        {!this.state.selectedFundInvestmentData.initialInvestmentValidation &&
                                            <Text style={styles.errMsg}>{gblStrings.accManagement.emptyInitInvestmentMsg}</Text>
                                        }
                                        <Text style={styles.helpText}>
                                            {`Minimum $${this.state.selectedFundInvestmentData.mininitialInvestment}`}
                                        </Text>
                                        {this.state.selectedFundInvestmentData.fundingOption === "Initial and Monthly Investment" &&
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundInvestTitle}>{gblStrings.purchase.monthlyInvestment}</Text>
                                                <View style={styles.iconFrontStyle}>
                                                    <Text style={styles.dollerIconTxt}>{"$"}</Text>
                                                    <GInputComponent
                                                        inputref={this.setInputRef("monthlyInvestment")}
                                                        propInputStyle={styles.amountBox}
                                                        maxLength={gblStrings.maxLength.monthlyInvestment}
                                                        placeholder="Monthly Investment"
                                                        value={this.state.selectedFundInvestmentData.monthlyInvestment}
                                                        keyboardType="decimal-pad"
                                                        onChangeText={this.onChangeTextForInvestment("monthlyInvestment")}
                                                        errorFlag={!this.state.selectedFundInvestmentData.monthlyInvestmentValidation}
                                                        errorText=""
                                                    />
                                                </View>
                                                {!this.state.selectedFundInvestmentData.monthlyInvestmentValidation && <Text style={styles.errMsg}>{gblStrings.accManagement.emptyMonthlyInvestmentMsg}</Text>}
                                                <Text style={styles.helpText}>
                                                    {`Minimum $${this.state.selectedFundInvestmentData.minmonthlyInvestment}`}
                                                </Text>
                                                <Text style={styles.fundInvestTitle}>{gblStrings.purchase.startDate}</Text>
                                                <GDateComponent
                                                    inputref={this.setInputRef("startDate")}
                                                    date={this.state.selectedFundInvestmentData.startDate}
                                                    minDate={currentDate}
                                                    placeholder="MM-DD-YYYY"
                                                    errorFlag={!this.state.selectedFundInvestmentData.startDateValidation}
                                                    errorMsg={gblStrings.accManagement.emptyStartDate}
                                                    onDateChange={this.onChangeDateForInvestment("startDate")}
                                                />
                                            </View>
                                        }
                                    </View>
                                    <View style={styles.line} />
                                    <View style={styles.totalView}>
                                        <Text style={styles.fundInvestTitle}>{gblStrings.accManagement.total}</Text>
                                        <Text style={styles.fundInvestTitle}>{this.state.totalInitialInvestment}</Text>
                                    </View>
                                </View>
                            </View>
                        </View> : null
                    }

                    {/* ----------------- Button Group -------------------- */}

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
                            buttonStyle={this.state.disableNextButton ? styles.normalBlackDisabledBtn : styles.normalBlackBtn}
                            buttonText={gblStrings.common.next}
                            textStyle={this.state.disableNextButton ? styles.normalBlackBtnTxt : styles.normalBlackBtnDisabledTxt}
                            onPress={this.onValidate}
                            disabled={this.state.disableNextButton}
                        />
                    </View>

                    {/* ---------------------- Footer View -------------------- */}

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
                                        {this.state.filterMinData.map((item, index) => {
                                            let itemvalue = item.value;
                                            if (item.key === 50) {
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
                                        {this.state.filterRiskData.map((item, index) => {
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
                                        {this.state.filterFundData.map((item, index) => {
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


PurchaseScreenTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    getFundListData: PropTypes.func,
    masterLookupStateData: PropTypes.instanceOf(Object),
    getCompositeLookUpData: PropTypes.func,
    saveData: PropTypes.func,
    purchaseData: PropTypes.instanceOf(Object)
};

PurchaseScreenTwoComponent.defaultProps = {
    saveData: () => { },
    getCompositeLookUpData: () => { },
    masterLookupStateData: {},
    getFundListData: () => { },
    accOpeningData: {},
    navigation: {},
    purchaseData: {}
};

export default PurchaseScreenTwoComponent;