import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import PropTypes from "prop-types";
import { GIcon, GInputComponent, GHeaderComponent, GDateComponent, GDropDownComponent, GButtonComponent, GFooterSettingsComponent, GLoadingSpinner } from '../../CommonComponents';
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

class ExchangeScreenThreeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
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
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            const { accOpeningData, navigation } = this.props;
            const { ammend } = this.state;
            let tempFundListData = [];
            if (navigation.getParam('ammend')) {
                this.setState({ ammend: true });
                ammendData = navigation.getParam('data');
                ammendIndex = navigation.getParam('index');
            }
            else {
                this.setState({ ammend: false });
            }
            if (accOpeningData[ActionTypes.GET_FUNDLIST] !== undefined && accOpeningData[ActionTypes.GET_FUNDLIST].Items !== null) {
                tempFundListData = accOpeningData[ActionTypes.GET_FUNDLIST].Items;
                this.setState({
                    fundList: [...tempFundListData],
                    isFilterApplied: false,
                    isLoading: false
                });
                if (ammend) {
                    tempFundListData.map((item, k) => {
                        if (item.fundName === ammendData.selectedFundData.fundName) {
                            this.setState({ selectedFundIndex: k });
                        }
                        return 0;
                    });
                    // this.updateAmendDataToReducer();
                    this.onAmendFund();
                }
            }
        }
    }

    getLookUpData = () => {
        const { navigation, getFundListData, masterLookupStateData, getCompositeLookUpData } = this.props;
        const { fundList } = this.state;
        ammendData = navigation.getParam('data');
        ammendIndex = navigation.getParam('index');
        if (navigation.getParam('ammend')) {
            this.setState({ ammend: true });
        }
        else {
            this.setState({ ammend: false });
        }

        this.setState({ isLoading: true });
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

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[i];
            if (this.props && masterLookupStateData && !masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        getCompositeLookUpData(payload);
    }

    /* ---------------Button Events ------------------- */
    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    onClickCancel = () => {
        const { navigation } = this.props;
        const { ammend } = this.state;
        if (ammend) {
            navigation.navigate('tAmmendComponent');
        }
        else {
            navigation.navigate('exchangeScreenOne');
        }
    }

    /* ----------------- Filter Events ------------------ */
    onCheckboxSelect = (type, item, index) => () => {
        const { filterMinData, filterRiskData, filterFundData } = this.state;
        let newItm = [];
        switch (type) {
            case 'minInvest':
                newItm = [...filterMinData];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterMinData: newItm });
                break;
            case 'risk':
                newItm = [...filterRiskData];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterRiskData: newItm });
                break;
            case 'fundType':
                newItm = [...filterFundData];
                newItm[index].isActive = !newItm[index].isActive;
                this.setState({ filterFundData: newItm });
                break;
            default:
                break;
        }
    }

    setModalVisible = (visible) => () => {
        const { applyFilterState } = this.state;
        if (!visible && !applyFilterState) {
            this.clearFilterAction();
        }
        this.setState({ modalVisible: visible });
        if (!applyFilterState) {
            this.constructFilterData();
        }
    }

    clearFilterAction = () => {
        const { filterMinData, filterRiskData, filterFundData } = this.state;
        this.setState({ applyFilterState: false });
        const tempMin = [...filterMinData];
        const tempRisk = [...filterRiskData];
        const tempFund = [...filterFundData];

        this.setState({
            filterMinData: [...tempMin.map(v => ({ ...v, isActive: false }))],
            filterRiskData: [...tempRisk.map(v => ({ ...v, isActive: false }))],
            filterFundData: [...tempFund.map(v => ({ ...v, isActive: false }))]
        });
    }

    constructFilterData = () => {
        const { masterLookupStateData } = this.props;
        const tempKeyMinInv = 'filter_min_inv';
        const tempKeyRisk = 'filter_risk';
        const tempKeyFundType = 'filter_fund_type';
        let tempMinInvData = [];
        let tempRiskData = [];
        let tempFundTypeData = [];

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
            filterMinData: [...tempMinInvData.map(v => ({ ...v, isActive: false }))],
            filterRiskData: [...tempRiskData.map(v => ({ ...v, isActive: false }))],
            filterFundData: [...tempFundTypeData.map(v => ({ ...v, isActive: false }))]
        });
    }

    applyFilterAction = (visible) => () => {
        const { filterMinData, filterRiskData, filterFundData } = this.state;
        const { getFundListData } = this.props;
        this.setState({
            modalVisible: visible,
            applyFilterState: true,
            fundList: [],
            isFilterApplied: true
        });

        let minInvestKey = "";
        filterMinData.map((item) => {
            if (item.isActive) {
                if (minInvestKey !== null && minInvestKey !== "") {
                    minInvestKey = minInvestKey.concat(`| ${item.value}`);
                } else {
                    minInvestKey = item.value;
                }
            }
            return 0;
        });

        let riskKey = "";
        filterRiskData.map((item) => {
            if (item.isActive) {
                if (riskKey !== null && riskKey !== "") {
                    riskKey = riskKey.concat(`| ${item.key}`);
                } else {
                    riskKey = item.key;
                }
            }
            return 0;
        });

        let fundKey = "";
        filterFundData.map((item) => {
            if (item.isActive) {
                if (fundKey !== null && fundKey !== "") {
                    fundKey = fundKey.concat(`| ${item.key}`);
                } else {
                    fundKey = item.key;
                }
            }
            return 0;
        });

        const fundListPayload = { 'minInvestment': minInvestKey };
        getFundListData(fundListPayload);
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
        return false;
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
            // console.log(`Error::: ${err}`);
        }
    }

    onValidateEach = () => {
        let isErr = false;
        let isValidationSuccess = false;
        const { selectedFundInvestmentData } = this.state;
        if (this.isEmpty(selectedFundInvestmentData.fundingOption)) {
            this.onUpdateField("fundingOptionValidation", false);
            isErr = true;
        }

        if (this.isEmpty(selectedFundInvestmentData.initialInvestment)) {
            this.onUpdateField("initialInvestmentValidation", false);
            isErr = true;
        }

        if (selectedFundInvestmentData.fundingOption === 'Initial and Monthly Investment') {
            if (this.isEmpty(selectedFundInvestmentData.monthlyInvestment)) {
                this.onUpdateField("monthlyInvestmentValidation", false);
                isErr = true;
            }
            if (this.isEmpty(selectedFundInvestmentData.startDate)) {
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
        const { selectedFundInvestmentData, ammend, totalInitialInvestment } = this.state;
        const { saveData, navigation } = this.props;
        if (ammend) {
            const ammendPayloadData = {
                saveExchangeSelectedData: {
                    "selectedAccountData": ammendData.selectedAccountData,
                    "selectedFundData": {
                        "fundName": selectedFundInvestmentData.fundName,
                        "fundNumber": selectedFundInvestmentData.fundNumber,
                        "fundingOption": selectedFundInvestmentData.fundingOption,
                        "initialInvestment": selectedFundInvestmentData.initialInvestment,
                        "monthlyInvestment": selectedFundInvestmentData.monthlyInvestment,
                        "startDate": selectedFundInvestmentData.startDate,
                        "count": '',
                        "total": totalInitialInvestment
                    },
                    "selectedFundSourceData": ammendData.selectedFundSourceData,
                    "currentSecurities": ammendData.currentSecurities,
                    "contribution": ammendData.contribution,
                    "estimated": ammendData.estimated
                }
            };
            saveData(ammendPayloadData);
            //   navigation.navigate('purchaseScreenThree', { ammend: true, index: ammendIndex, data: ammendData });
        }
        else {
            const payloadData = {
                saveExchangeSelectedData: {
                    ...savedData,
                    "selectedFundData": {
                        "fundName": selectedFundInvestmentData.fundName,
                        "fundNumber": selectedFundInvestmentData.fundNumber,
                        "fundingOption": selectedFundInvestmentData.fundingOption,
                        "initialInvestment": selectedFundInvestmentData.initialInvestment,
                        "monthlyInvestment": selectedFundInvestmentData.monthlyInvestment,
                        "startDate": selectedFundInvestmentData.startDate,
                        "count": '',
                        "total": totalInitialInvestment
                    },
                }
            };
            saveData(payloadData);
            //  navigation.navigate('purchaseScreenThree', { ammend: false });
        }
    }

    /* ----------------- Fund List Events -------------------------- */

    onPressRemoveInvestment = () => {
        this.setState({ selectedFundIndex: null });
    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onChangeIndex = (item, index) => () => {
        const tempData = {};

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
        this.setState({ disableNextButton: false, selectedFundIndex: index, selectedFundInvestmentData: tempData });

        // if (this.state.ammend) {
        //     this.onAmendFund(item);
        // }
    }

    updateAmendDataToReducer = () => {
        let data = ammendData;
        const payloadData = {
            saveExchangeSelectedData: {
                "selectedFundData": data.selectedFundData,
                "selectedAccountData": data.selectedAccountData,
                "selectedFundSourceData": data.selectedFundSourceData,
                "currentSecurities": data.currentSecurities,
                "contribution": data.contribution,
                "estimated": data.estimated
            }
        };
        this.props.saveData(payloadData);
    }

    onAmendFund = () => {
        const tempData = {};
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

            this.setState({
                selectedFundInvestmentData: tempData,
                disableNextButton: false,
                totalInitialInvestment: ammendData.selectedFundData.total
            });
        }

    }

    onSelectedDropDownValue = (value) => {
        const { selectedFundInvestmentData } = this.state;
        const newData = selectedFundInvestmentData;
        newData.fundingOption = value;
        this.setState({ selectedFundInvestmentData: newData });
    }

    onUpdateField = (keyName, data) => {
        const { selectedFundInvestmentData } = this.state;
        const newData = selectedFundInvestmentData;
        newData[keyName] = data;
        this.setState({ selectedFundInvestmentData: newData });
    }

    onChangeDateForInvestment = (keyName) => date => {
        const { selectedFundInvestmentData } = this.state;
        const newData = selectedFundInvestmentData;
        newData[keyName] = date;
        newData.fundingOptionValidation = true;
        newData.initialInvestmentValidation = true;
        newData.monthlyInvestmentValidation = true;
        newData.startDateValidation = true;
        this.setState({ selectedFundInvestmentData: newData });
    }

    onChangeTextForInvestment = (keyName) => text => {
        const { selectedFundInvestmentData } = this.state;
        const newData = selectedFundInvestmentData;
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

    renderFundList = ({ item, index }) => {
        const { selectedFundIndex } = this.state;
        return (
            <View style={(selectedFundIndex === index) ? styles.fundItemStyleSelected : styles.fundItemStyle} onTouchStart={this.onChangeIndex(item, index)}>
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
    }

    render() {
        const { isLoading, ammend, fundList, selectedFundIndex, selectedFundInvestmentData, totalInitialInvestment, disableNextButton, modalVisible, filterMinData, filterRiskData, filterFundData } = this.state;
        const { exchangeData, accOpeningData, masterLookupStateData, navigation } = this.props;

        let currentPage = 2;
        let pageName = `${currentPage} - ${gblStrings.purchase.investmentSelection}`;
        let totalCount = 4;
        if (ammend) {
            currentPage = 1;
            pageName = `${currentPage} - ${gblStrings.purchase.investmentSelection}`;
            totalCount = 3;
        }

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const currentDate = `${month}-${date}-${year}`;

        if (this.props && exchangeData && exchangeData.saveExchangeSelectedData) {
            savedData = exchangeData.saveExchangeSelectedData;
        }

        return (
            <View style={styles.container}>
                {(accOpeningData.isLoading || masterLookupStateData.isLoading || isLoading) && <GLoadingSpinner />}
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.topContainer}>
                        <Text style={styles.topContainerTxtBold}>{gblStrings.purchase.accountName} {ammend ? ammendData.selectedAccountData.accountName : savedData.selectedAccountData.accountName}</Text>
                        <View style={styles.flexDirectionStyle}>
                            <Text style={styles.topContainerTxtBold}>{gblStrings.purchase.accountNumber}</Text>
                            <Text style={styles.topContainerTxtBold}>{ammend ? ammendData.selectedAccountData.accountNumber : savedData.selectedAccountData.accountNumber}</Text>
                        </View>
                    </View>

                    {/* -------------Select VCM Funds ----------------------- */}

                    <View style={styles.innerContainerStyle}>
                        <Text style={styles.headerText}>{gblStrings.purchase.selectVcmMutualFund}</Text>
                        <View style={styles.line} />
                        {!ammend && <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.selectStmt}</Text>}
                        {!ammend && <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.useFilterStmt}</Text>}
                        <View style={styles.contentView}>
                            {!ammend &&
                                (
                                    <GButtonComponent
                                        buttonStyle={styles.filterFundsBtn}
                                        buttonText={gblStrings.purchase.fillerFund}
                                        textStyle={styles.filterFundsBtnTxt}
                                        onPress={this.setModalVisible(true)}
                                    />
                                )
                            }
                            {!ammend &&
                                (
                                    <GButtonComponent
                                        buttonStyle={styles.compareFundsBtn}
                                        buttonText={gblStrings.purchase.compareFund}
                                        textStyle={styles.compareFundsBtnTxt}
                                        onPress={this.navigateCompareFunds}
                                    />
                                )
                            }
                            <View style={styles.fundListGrp}>
                                <FlatList
                                    data={fundList}
                                    keyExtractor={this.generateFundListKeyExtractor}
                                    extraData={this.state}
                                    renderItem={this.renderFundList}
                                />
                            </View>
                            <View style={styles.loadMoreStyle}>
                                <Text style={styles.removeTxtStyle}>{gblStrings.purchase.loadMore}</Text>
                            </View>
                        </View>
                    </View>

                    {selectedFundIndex ?
                        (
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
                                            <Text style={styles.fundItemValueTxt}>{selectedFundInvestmentData.fundName}</Text>
                                        </View>
                                        <View style={styles.marginBottomStyle}>
                                            <GDropDownComponent
                                                inputref={this.setInputRef("fundingOptionDropDown")}
                                                dropDownLayout={styles.dropDownLayout}
                                                dropDownTextName={styles.fundInvestTitle}
                                                textInputStyle={styles.textInputStyle}
                                                dropDownName={gblStrings.accManagement.fundingOptions}
                                                data={fundingOptionsData}
                                                dropDownValue={selectedFundInvestmentData.fundingOption}
                                                selectedDropDownValue={this.onSelectedDropDownValue}
                                                errorFlag={!selectedFundInvestmentData.fundingOptionValidation}
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
                                                    value={selectedFundInvestmentData.initialInvestment}
                                                    maxLength={gblStrings.maxLength.initInvestment}
                                                    placeholder="Initial Investment"
                                                    keyboardType="decimal-pad"
                                                    onChangeText={this.onChangeTextForInvestment("initialInvestment")}
                                                    errorFlag={!selectedFundInvestmentData.initialInvestmentValidation}
                                                    errorText=""
                                                />
                                            </View>
                                            {!this.state.selectedFundInvestmentData.initialInvestmentValidation &&
                                                <Text style={styles.errMsg}>{gblStrings.accManagement.emptyInitInvestmentMsg}</Text>
                                            }
                                            <Text style={styles.helpText}>
                                                {`Minimum $${selectedFundInvestmentData.mininitialInvestment}`}
                                            </Text>
                                            {selectedFundInvestmentData.fundingOption === "Initial and Monthly Investment" &&
                                                (
                                                    <View style={styles.marginBottomStyle}>
                                                        <Text style={styles.fundInvestTitle}>{gblStrings.purchase.monthlyInvestment}</Text>
                                                        <View style={styles.iconFrontStyle}>
                                                            <Text style={styles.dollerIconTxt}>{"$"}</Text>
                                                            <GInputComponent
                                                                inputref={this.setInputRef("monthlyInvestment")}
                                                                propInputStyle={styles.amountBox}
                                                                maxLength={gblStrings.maxLength.monthlyInvestment}
                                                                placeholder="Monthly Investment"
                                                                value={selectedFundInvestmentData.monthlyInvestment}
                                                                keyboardType="decimal-pad"
                                                                onChangeText={this.onChangeTextForInvestment("monthlyInvestment")}
                                                                errorFlag={!selectedFundInvestmentData.monthlyInvestmentValidation}
                                                                errorText=""
                                                            />
                                                        </View>
                                                        {!selectedFundInvestmentData.monthlyInvestmentValidation &&
                                                            <Text style={styles.errMsg}>{gblStrings.accManagement.emptyMonthlyInvestmentMsg}</Text>
                                                        }
                                                        <Text style={styles.helpText}>
                                                            {`Minimum $${selectedFundInvestmentData.minmonthlyInvestment}`}
                                                        </Text>
                                                        <Text style={styles.fundInvestTitle}>{gblStrings.purchase.startDate}</Text>
                                                        <GDateComponent
                                                            inputref={this.setInputRef("startDate")}
                                                            date={selectedFundInvestmentData.startDate}
                                                            minDate={currentDate}
                                                            placeholder="MM-DD-YYYY"
                                                            errorFlag={!selectedFundInvestmentData.startDateValidation}
                                                            errorMsg={gblStrings.accManagement.emptyStartDate}
                                                            onDateChange={this.onChangeDateForInvestment("startDate")}
                                                        />
                                                    </View>
                                                )
                                            }
                                        </View>
                                        <View style={styles.line} />
                                        <View style={styles.totalView}>
                                            <Text style={styles.fundInvestTitle}>{gblStrings.accManagement.total}</Text>
                                            <Text style={styles.fundInvestTitle}>{totalInitialInvestment}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                        : null
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
                            buttonStyle={disableNextButton ? styles.normalBlackDisabledBtn : styles.normalBlackBtn}
                            buttonText={gblStrings.common.next}
                            textStyle={disableNextButton ? styles.normalBlackBtnTxt : styles.normalBlackBtnDisabledTxt}
                            onPress={this.onValidate}
                            disabled={disableNextButton}
                        />
                    </View>

                    {/* ---------------------- Footer View -------------------- */}
                    <GFooterSettingsComponent />

                    {/* --------------------- Modal View For Filter Funds -------------------------- */}
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
                                        {filterMinData.map((item, index) => {
                                            let temp = item.value;
                                            if (item.key === 50) {
                                                temp = temp.replace(new RegExp('50', 'g'), gblStrings.common.dollar + '50');
                                            } else {
                                                temp = gblStrings.common.dollar + item.value;
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
                                                    label={temp}
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
                                        {filterRiskData.map((item, index) => {
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
                                        {filterFundData.map((item, index) => {
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


ExchangeScreenThreeComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    getFundListData: PropTypes.func,
    masterLookupStateData: PropTypes.instanceOf(Object),
    getCompositeLookUpData: PropTypes.func,
    saveData: PropTypes.func,
    exchangeData: PropTypes.instanceOf(Object)
};

ExchangeScreenThreeComponent.defaultProps = {
    saveData: () => { },
    getCompositeLookUpData: () => { },
    masterLookupStateData: {},
    getFundListData: () => { },
    accOpeningData: {},
    navigation: {},
    exchangeData: {}
};

export default ExchangeScreenThreeComponent;