import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import PropTypes from "prop-types";
import { GIcon, GInputComponent, GHeaderComponent, GDateComponent, GDropDownComponent, GButtonComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { CustomCheckBox, PageNumber } from '../../AppComponents';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import InvestmentDetails from "../../Models/InvestmentDetails";
import { scaledHeight } from '../../Utils/Resolution';

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
            isFilterApplied: false
        };
    }

    componentDidMount() {
        this.bindReceivedData();
        this.getLookUpData();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate::::> " + prevState);
        if (this.props !== prevProps) {
            let tempFundListData = [];
            if (this.props.accOpeningData[ActionTypes.GET_FUNDLIST] !== undefined && this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items !== null) {
                tempFundListData = this.props.accOpeningData[ActionTypes.GET_FUNDLIST].Items;
                this.setState({
                    fundList: [...tempFundListData],
                    isFilterApplied: false
                });
            }
        }
    }

    getLookUpData = () => {
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

        for (let i = 0; i < compositePayloadData.length; i=i+1) {
            const tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        this.props.getCompositeLookUpData(payload);
    }

    bindReceivedData = () => {
        const data = this.props.navigation.getParam("accSelectionScreenData");
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

    onClickCancel = () => {
        this.props.navigation.navigate('purchaseScreenOne');
    }

    // onPressRemoveInvestment = (item, index) => () => {
    //     const newData = this.state.selectedFundInvestmentData;
    //     const newItems = [...this.state.fundList];
    //     const isObjExistIndex = this.getIndex(item.fundNumber, newSelectedData, 'fundNumber');

    //     if (isObjExistIndex != -1) {

    //         newData[isObjExistIndex].isActive = false;
    //         newSelectedData[index].isActive = false;
    //         newSelectedData.splice(index, 1);

    //     }

    //     // newSelectedData[index].isActive = false;
    //     // newSelectedData.splice(index, 1);
    //     this.setState({
    //         fundList: newItems,
    //         selectedFundInvestmentsData: newSelectedData,
    //         selectedCount: this.getSelectedItems().length

    //     });
    // }
    /* ----------------- Filter Events ------------------ */
    onCheckboxSelect = (type, item, index) => () => {
        let newItm = [];
        console.log('Index : ', index);
        console.log('Checkbox Selected : ', item.key + " " + item.value + " " + item.isActive);
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
        // console.log('New Item:' + JSON.stringify(newItm));
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
        });
        console.log("minInvest=", minInvestKey);
        console.log("risk=", riskKey);
        console.log("fundData=", fundKey);

        const fundListPayload = { 'minInvestment': minInvestKey };
        this.props.getFundListData(fundListPayload);
    }

    /* -------------------Validation Events ----------------------- */

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        } else {
            return false;
        }
    }

    onValidate = () => {
        try {
            console.log("validateFields:::");
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
            console.log("Error:::" + err);
        }
    }

    onValidateEach = () => {
        console.log("Validate Each Field::");
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
        console.log("in Save function::");
        const savedData = {};

        savedData.fundName = this.state.selectedFundInvestmentData.fundName;
        savedData.fundingOption = this.state.selectedFundInvestmentData.fundingOption;
        savedData.initialInvestment = this.state.selectedFundInvestmentData.initialInvestment;
        savedData.monthlyInvestment = this.state.selectedFundInvestmentData.monthlyInvestment;
        savedData.startDate = this.state.selectedFundInvestmentData.startDate;

        // this.props.navigation.navigate();
    }

    /* ----------------- Fund List Events -------------------------- */
    getIndex = (value, arr, prop) => {
        for (var i = 0; i < arr.length; i=i+1) {
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
        let tempData = new InvestmentDetails();
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
        let newData = this.state.selectedFundInvestmentData;
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
        console.log("total:::>" + total);
        this.setState({
            totalInitialInvestment: "$ " + total,
            selectedFundInvestmentData: newData,
        });
    }

    generateFundListKeyExtractor = (item) => item.fundNumber.toString();


    render() {
        const currentPage = 2;
        const pageName = '2 - Investment Selection';
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const currentDate = month + "-" + date + "-" + year;

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

                    {/* -------------Select VCM Funds ----------------------- */}

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
                                // onPress={this.navigateCompareFunds}
                            />
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
                                    // onPress={this.onPressRemoveInvestment(item,index)}
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
                                            <Text style={styles.dollerIconTxt}>{"$"}</Text>
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
                                        <Text style={styles.helpText}>
                                            {`Minimum $${this.state.selectedFundInvestmentData.mininitialInvestment}`}
                                        </Text>
                                        {this.state.selectedFundInvestmentData.fundingOption == "Initial and Monthly Investment" &&
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundInvestTitle}>{gblStrings.purchase.monthlyInvestment}</Text>
                                                <View style={styles.iconFrontStyle}>
                                                <Text style={styles.dollerIconTxt}>{"$"}</Text>
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
                                        {this.state.filterRiskData.map((item, index) => {
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
                                        {this.state.filterFundData.map((item, index) => {
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
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    getFundListData:PropTypes.func,
    masterLookupStateData:PropTypes.instanceOf(Object),
    getCompositeLookUpData: PropTypes.func
};

PurchaseScreenTwoComponent.defaultProps = {

};
export default PurchaseScreenTwoComponent;