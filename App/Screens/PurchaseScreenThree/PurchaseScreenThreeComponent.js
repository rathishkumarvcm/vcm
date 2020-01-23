import React, { Component } from 'react';
import { Text, View, ScrollView, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent, GFooterSettingsComponent, GButtonComponent, GDropDownComponent, GSwitchComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';


const checkOrder = require("../../Images/offlinemethod1.png");
const wireTransfer = require("../../Images/offlinemethod2.png");
const BankAcc = require("../../Images/onlinemethod1.png");

let savedData = {};
let ammendData = {};
let ammendIndex = null;

const bankAccounts = [
    { key: "1", bankAccName: "Bank Account 1", bankAccountNo: "XXX-XXX-3838", verified: "true" },
    { key: "2", bankAccName: "Bank Account 2", bankAccountNo: "XXX-XXX-5163", verified: "true" }
];

const contributionData = [
    {
        key: '1',
        value: 'Current Year'
    },
    {
        key: '2',
        value: 'Previous Year'
    },
];

let isIRA = false;


class PurchaseScreenThreeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBankAccountIndex: null,
            showCheckMsg: false,
            showWireTransferMsg: false,
            disableNextButton: true,
            switchOff: false,
            switchOn: true,
            selectedContributionData: {
                contribution: "",
            },
            contributionFlag: true,
            contributionErrMsg: "",
            fundingMethod: "",
            fundingSourceName: "",
            bankAccountNumber: "",
            bankAccountName: "",
            ammend: false

        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        ammendData = navigation.getParam('data');
        ammendIndex = navigation.getParam('index');
        this.updateState();
    }

    updateState = () => {
        const { navigation } = this.props;
        if (navigation.getParam('ammend')) {
            this.setState({ ammend: true });
        }
        else {
            this.setState({ ammend: false });
        }
        if (savedData) {
            if (savedData.selectedFundSourceData) {
                this.setState({
                    fundingSourceName: savedData.selectedFundSourceData.paymentMode,
                    fundingMethod: savedData.selectedFundSourceData.fundSourceType,
                    bankAccountName: savedData.selectedFundSourceData.bankAccountName,
                    bankAccountNumber: savedData.selectedFundSourceData.bankAccountNumber
                });
                if (savedData.selectedFundSourceData.paymentMode === 'Check') {
                    this.setState({ showCheckMsg: true, disableNextButton: false, showWireTransferMsg: false });
                } else if (savedData.selectedFundSourceData.paymentMode === 'Wire Transfer') {
                    this.setState({ showWireTransferMsg: true, disableNextButton: false, showCheckMsg: false });
                } else if (savedData.selectedFundSourceData.paymentMode === 'NetBanking') {
                    this.setState({ showWireTransferMsg: false, disableNextButton: false, showCheckMsg: false });
                }
                if (savedData.selectedFundSourceData.bankAccountName) {
                    bankAccounts.map((m, n) => {
                        if (m.bankAccName === savedData.selectedFundSourceData.bankAccountName) {
                            this.setState({ selectedBankAccountIndex: n });
                        }
                        return 0;
                    });
                }
            }
            if (savedData.currentSecurities) {
                this.setState({ switchOff: savedData.currentSecurities.reinvest, switchOn: !savedData.currentSecurities.reinvest });
            }

            if (savedData.contribution) {
                this.setState({
                    selectedContributionData: {
                        contribution: savedData.contribution.contribution,
                    }
                });
            }
        }
    }

    /* -------------------------------- Button Events ---------------------------------- */

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
            navigation.navigate('purchaseScreenOne');
        }
    }

    onClickSave = () => {
        const { navigation, saveData } = this.props;
        const { ammend, fundingSourceName, bankAccountName, fundingMethod, bankAccountNumber, switchOff, selectedContributionData } = this.state;
        const payloadData = {
            savePurchaseSelectedData: {
                ...savedData,
                "selectedFundSourceData": {
                    "paymentMode": fundingSourceName,
                    "bankAccountName": bankAccountName,
                    "bankAccountNumber": bankAccountNumber,
                    "fundSourceType": fundingMethod,
                    "totalInvestment": savedData.selectedFundData.total
                },
                "currentSecurities": {
                    "reinvest": switchOff
                },
                "contribution": {
                    "contribution": selectedContributionData.contribution
                }
            }
        };
        saveData(payloadData);
        if (ammend) {
            navigation.navigate('purchaseScreenFour', { ammend: true, data: ammendData, index: ammendIndex });
        }
        else {
            navigation.navigate('purchaseScreenFour', { ammend: false });
        }
    }

    /* -------------------------------- Validation Events ---------------------------------- */

    onValidate = () => {
        try {
            let isValidationSuccess = false;
            this.setState({
                contributionFlag: true,
                contributionErrMsg: ""
            });
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
        const { selectedContributionData } = this.state;
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const todaysDate = `${month}-${date}-${year}`;
        const lastDateToContribute = `04-15-${year}`;

        if (isIRA) {
            if (selectedContributionData.contribution === "") {
                this.setState({ contributionFlag: false, contributionErrMsg: "Please select Contribution" });
                isErr = true;
            } else if (selectedContributionData.contribution === "Previous Year") {
                if (new Date(todaysDate) > new Date(lastDateToContribute)) {
                    this.setState({ contributionFlag: false, contributionErrMsg: "Please enter valid data" });
                    isErr = true;
                }
            }
        }

        if (!isErr) {
            isValidationSuccess = true;
        }

        return isValidationSuccess;
    }

    /* -------------------------------- Fund Source Events Events ---------------------------------- */


    onClickCheckOrderSelected = () => {
        this.setState({
            showCheckMsg: true,
            showWireTransferMsg: false,
            fundingMethod: 'Offline',
            fundingSourceName: "Check",
            switchOff: true,
            switchOn: false,
            selectedBankAccountIndex: null,
            bankAccountNumber: "",
            bankAccountName: "",
            disableNextButton: false
        });
    }

    onClickWireTransferSelected = () => {
        this.setState({
            showCheckMsg: false,
            showWireTransferMsg: true,
            fundingMethod: 'Offline',
            fundingSourceName: "Wire Transfer",
            switchOff: true,
            switchOn: false,
            selectedBankAccountIndex: null,
            bankAccountNumber: "",
            bankAccountName: "",
            disableNextButton: false
        });
    }

    onClickAddBankAccount = () => {
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate('bankAccount');
    }

    switchMethod = () => {
        const { fundingMethod } = this.state;
        if (fundingMethod === 'Online') {
            this.setState(prevState => ({
                switchOff: !prevState.switchOff,
                switchOn: !prevState.switchOn,
            }));
        }
    }

    onSelectedDropDownValue = (value) => {
        const selectedData = {};
        selectedData.contribution = value;
        this.setState({ selectedContributionData: selectedData });
    }

    onSelectBankAccount = (item, index) => () => {
        this.setState({
            showCheckMsg: false,
            showWireTransferMsg: false,
            fundingMethod: "Online",
            fundingSourceName: "NetBanking",
            bankAccountNumber: item.bankAccountNo,
            bankAccountName: item.bankAccName,
            selectedBankAccountIndex: index,
            disableNextButton: false
        });
    }

    renderBankAccList = ({ item, index }) => {
        const { selectedBankAccountIndex } = this.state;
        return (
            <View style={(selectedBankAccountIndex === index) ? styles.boxStyleViewSelected : styles.boxStyleView} onTouchStart={this.onSelectBankAccount(item, index)}>
                <View style={styles.iconContainerView}>
                    <Image source={BankAcc} resizeMode="contain" />
                </View>
                <View style={styles.titleContainerView}>
                    <Text style={styles.bankTitle}>{item.bankAccName}</Text>
                    <Text style={styles.bankDisc}>{item.bankAccountNo}</Text>
                    {!item.verified ? <Text style={styles.verifiedText}>To Be Verified</Text> : null}
                </View>
            </View>
        );
    }

    generateFundSourceKeyExtractor = (item) => item.key;

    generateBankKey = (a) => a.bankAccountNo;

    render() {
        let currentPage = 3;
        let totalCount = 4;
        const { disableNextButton, ammend, fundingSourceName, showCheckMsg, showWireTransferMsg, switchOff, switchOn, selectedContributionData, contributionFlag, contributionErrMsg } = this.state;
        const { purchaseData, navigation } = this.props;
        let pageName = `${currentPage} - ${gblStrings.purchase.fundSource}`;
        if (ammend) {
            currentPage = 2;
            pageName = `${currentPage} - ${gblStrings.purchase.fundSource}`;
            totalCount = 3;
        }

        if (this.props && purchaseData && purchaseData.savePurchaseSelectedData) {
            savedData = purchaseData.savePurchaseSelectedData;
        }

        if (savedData && savedData.selectedAccountData && savedData.selectedAccountData.accountType === 'IRA') {
            isIRA = true;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <View style={styles.headerTextView}>
                        <Text style={styles.titleHeaderTextStyle}>Purchase</Text>
                        <View style={styles.line} />
                    </View>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.topContainer}>
                        <Text style={styles.topContainerTxtBold}>{gblStrings.purchase.accountName} {savedData.selectedAccountData.accountName}</Text>
                        <View style={styles.flexDirectionStyle}>
                            <Text style={styles.topContainerTxtBold}>{gblStrings.purchase.accountNumber}</Text>
                            <Text style={styles.topContainerTxtBold}>{savedData.selectedAccountData.accountNumber}</Text>
                        </View>
                    </View>

                    {/* ------------------------- Fund Your Account ----------------------------- */}

                    <View style={styles.innerContainerStyle}>
                        <Text style={styles.headerText}>{gblStrings.purchase.fundAcc}</Text>
                        <View style={styles.line} />
                        <Text style={styles.stmtTxtStyle}>{gblStrings.purchase.fundStmt}</Text>
                        <View style={styles.marginTopStyle}>
                            <Text style={styles.subHeadingTxtStyle}>{gblStrings.purchase.offlineMethod}</Text>
                            <Text style={styles.dummyTextStyle}>{gblStrings.purchase.commnStmt}</Text>
                            <View style={fundingSourceName === 'Check' ? styles.boxStyleViewSelected : styles.boxStyleView} onTouchStart={this.onClickCheckOrderSelected}>
                                <View style={styles.iconContainerView}>
                                    <Image source={checkOrder} resizeMode="contain" />
                                </View>
                                <View style={styles.titleContainerView}>
                                    <Text style={styles.titleTxtStyle}>{gblStrings.purchase.checkOrder}</Text>
                                </View>
                            </View>
                            <View style={fundingSourceName === 'Wire Transfer' ? styles.boxStyleViewSelected : styles.boxStyleView} onTouchStart={this.onClickWireTransferSelected}>
                                <View style={styles.iconContainerView}>
                                    <Image source={wireTransfer} resizeMode="contain" />
                                </View>
                                <View style={styles.titleContainerView}>
                                    <Text style={styles.titleTxtStyle}>{gblStrings.purchase.wireTransfer}</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.labOR}>{gblStrings.purchase.or}</Text>

                        <View>
                            <Text style={styles.subHeadingTxtStyle}>{gblStrings.purchase.onlineMethod}</Text>
                            <FlatList
                                data={bankAccounts}
                                renderItem={this.renderBankAccList}
                                keyExtractor={this.generateBankKey}
                                extraData={this.state}
                            />
                            <View style={styles.boxStyleView} onTouchStart={this.onClickAddBankAccount}>
                                <View style={styles.iconContainerView}>
                                    <Image source={BankAcc} resizeMode="contain" />
                                </View>
                                <View style={styles.titleContainerView}>
                                    <Text style={styles.bankTitle}>{gblStrings.purchase.addBnkAcc}</Text>
                                </View>
                            </View>
                        </View>
                        {showCheckMsg &&
                            (
                                <View style={styles.checkOrderStmtView}>
                                    <Text style={styles.checkOrderTitle}>{gblStrings.purchase.check}</Text>
                                    <View style={styles.line} />
                                    <View>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.checkOrderStmt1}</Text>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.checkOrderStmt2}</Text>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.checkOrderStmt3}</Text>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.checkOrderStmt4}</Text>
                                    </View>
                                </View>
                            )
                        }
                        {showWireTransferMsg &&
                            (
                                <View style={styles.checkOrderStmtView}>
                                    <Text style={styles.checkOrderTitle}>{gblStrings.purchase.wireTransfer}</Text>
                                    <View style={styles.line} />
                                    <View>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.usaaFundName}</Text>
                                        <Text style={styles.wireTransferTxt}>{savedData.selectedFundData.fundName}</Text>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.usaaAccNum}</Text>
                                        <Text style={styles.wireTransferTxt}>{savedData.selectedAccountData.accountNumber}</Text>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.name}</Text>
                                        <Text style={styles.wireTransferTxt}>William</Text>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.usaaMutualFundAccNumber}</Text>
                                        <Text style={styles.wireTransferTxt}>{savedData.selectedFundData.fundNumber}</Text>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.mailingToNumber}</Text>
                                        <Text style={styles.addressText}>{gblStrings.purchase.address}</Text>
                                        <Text style={styles.checkOrderText}>{gblStrings.purchase.wireTransferStmt}</Text>
                                    </View>
                                </View>
                            )
                        }
                    </View>

                    {/* ------------------------- Dividends and Capital Gain Preferences ----------------------------- */}

                    <View style={styles.innerContainerStyle}>
                        <Text style={styles.headerText}>{gblStrings.purchase.dividendsCapitalGain}</Text>
                        <View style={styles.line} />
                        <Text style={styles.stmtSmallTextStyle}>{gblStrings.purchase.reinvestStmt}</Text>
                        <Text style={styles.stmtBoldTxtStyle}>{gblStrings.purchase.cashOrderWireTransferStmt}</Text>
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOffText="No"
                                switchOnText="Yes"
                                switchOff={switchOff}
                                switchOn={switchOn}
                                switchOnMethod={this.switchMethod}
                                switchOffMethod={this.switchMethod}
                                onStyle={styles.onButtonStyle}
                                offStyle={styles.offButtonStyle}
                                onStyleDisabled={styles.onButtonStyleDisable}
                                offStyleDisabled={styles.offButtonStyleDisable}
                                textOnStyle={styles.TextOnStyle}
                                textOffStyle={switchOn ? styles.TextOffStyle : styles.TextOffStyleBold}
                            />
                            <View style={styles.switchTextStyle}>
                                <Text style={styles.switchTxt}>{gblStrings.purchase.notReinvest}</Text>
                                <Text style={styles.switchTxt}>{gblStrings.purchase.reinvest}</Text>
                            </View>
                        </View>

                    </View>

                    {/* ------------------------- Contribution ----------------------------- */}

                    {isIRA ?
                        (
                            <View style={styles.innerContainerStyle}>
                                <Text style={styles.headerText}>{gblStrings.purchase.contribution}</Text>
                                <View style={styles.line} />
                                <Text style={styles.stmtSmallTextStyle}>{gblStrings.purchase.contDummyText}</Text>
                                <GDropDownComponent
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownTextName={styles.dropDownTextName}
                                    textInputStyle={styles.textInputStyle}
                                    dropDownName={gblStrings.accManagement.contForIRAAccount}
                                    data={contributionData}
                                    dropDownValue={selectedContributionData.contribution}
                                    selectedDropDownValue={this.onSelectedDropDownValue}
                                    errorFlag={!contributionFlag}
                                    errorText={contributionErrMsg}
                                />
                            </View>
                        ) : null
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

                    { /* ----------- Disclaimer -------------------*/}

                    <GFooterSettingsComponent />
                </ScrollView>
            </View>

        );
    }
}


PurchaseScreenThreeComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    purchaseData: PropTypes.instanceOf(Object),
    saveData: PropTypes.func
};

PurchaseScreenThreeComponent.defaultProps = {
    navigation: {},
    purchaseData: {},
    saveData: () => { }
};

export default PurchaseScreenThreeComponent;