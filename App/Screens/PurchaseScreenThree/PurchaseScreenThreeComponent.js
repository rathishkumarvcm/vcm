import React, { Component } from 'react';
import { Text, View, ScrollView, Image, FlatList } from 'react-native';
import { GHeaderComponent, GFooterComponent, GButtonComponent, GDropDownComponent, GSwitchComponent } from '../../CommonComponents';
import  styles  from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';
import PropTypes from 'prop-types';

const checkOrder = require("../../Images/offlinemethod1.png");
const wireTransfer = require("../../Images/offlinemethod2.png");
const BankAcc = require("../../Images/onlinemethod1.png");

let savedData = {};

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
            bankAccountName: ""

        };
    }

    componentDidMount() {
    }

    /* -------------------------------- Button Events ---------------------------------- */

    goBack = () => {
        this.props.navigation.goBack();
    }

    onClickCancel = () => {
        this.props.navigation.navigate({ routeName: 'purchaseScreenOne', key: 'purchaseScreenOne' });
    }

    onClickSave = () => {
        const payloadData = {
            savePurchaseSelectedData: {
                ...savedData,
                "selectedFundSourceData": {
                    "paymentMode": this.state.fundingSourceName,
                    "bankAccountName": this.state.bankAccountName || "-",
                    "bankAccountNumber": this.state.bankAccountNumber || "-",
                    "fundSourceType": this.state.fundingMethod,
                    "totalInvestment": savedData.selectedFundData.total
                },
                "currentSecurities": {
                    "reinvest": this.state.switchOff
                },
                "contribution": {
                    "contribution": this.state.selectedContributionData.contribution || "-"
                }
            }
        };
        this.props.saveData(payloadData);
        console.log("savedData:::", payloadData);
        //this.props.navigation.navigate({ routeName: 'purchaseScreenThree', key: 'purchaseScreenThree' });
    }

    onSubmitEditing = (input) => text => {
       // AppUtils.Dlog(`onSubmitEditing:::>${text}`);
        input.focus();
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
            console.log("Error:::" + err);
        }


    }

    onValidateEach = () => {
        console.log("Validate Each Field::");
        let isErr = false;
        let isValidationSuccess = false;

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const todaysDate = `${month}-${date}-${year}`;
        const lastDateToContribute = `04-15-${year}`;

        if (isIRA) {
            if (this.state.selectedContributionData.contribution === "") {
                this.setState({ contributionFlag: false, contributionErrMsg: "Please select Contribution" });
                isErr = true;
            } else if (this.state.selectedContributionData.contribution === "Previous Year") {
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

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onClickCheckOrderSelected = () => {
        this.setState({
            showCheckMsg: true,
            showWireTransferMsg: false,
            fundingMethod: 'Offline',
            fundingSourceName: "Check",
            switchOff: true,
            switchOn: false,
            selectedBankAccountIndex: null,
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
            disableNextButton: false
        });
    }

    onClickAddBankAccount = () => {

    }

    switchMethod = () => {
        if (this.state.fundingMethod === 'Online') {
            this.setState(prevState => ({
                switchOff: !prevState.switchOff,
                switchOn: !prevState.switchOn,
            }));
        }
    }

    onSelectedDropDownValue = (value) => {
        const selectedData = {};
        selectedData.contribution = value;
        this.setState({ selectedContributionData: selectedData })
    }

    onSelectBankAccount = (item, index) => () => {
        this.setState({
            showCheckMsg: false,
            showWireTransferMsg: false,
            fundingMethod: "Online",
            fundingSourceName: "Bank",
            bankAccountNumber: item.bankAccountNo,
            bankAccountName: item.bankAccName,
            selectedBankAccountIndex: index,
            disableNextButton: false
        });
    }

    generateFundSourceKeyExtractor = (item) => item.key;

    render() {
        const currentPage = 3;
        const totalCount = 4;
        const pageName = `${currentPage} - ${gblStrings.purchase.fundSource}`;

        if (this.props.purchaseData && this.props.purchaseData.savePurchaseSelectedData) {
            savedData = this.props.purchaseData.savePurchaseSelectedData;
        }

        if (savedData && savedData.selectedAccountData && savedData.selectedAccountData.accountType === 'IRA') {
            isIRA = true;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
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
                            <View style={this.state.fundingSourceName === 'Check' ? styles.boxStyleViewSelected : styles.boxStyleView} onTouchStart={this.onClickCheckOrderSelected}>
                                <View style={styles.iconContainerView}>
                                    <Image source={checkOrder} resizeMode="contain" />
                                </View>
                                <View style={styles.titleContainerView}>
                                    <Text style={styles.titleTxtStyle}>{gblStrings.purchase.checkOrder}</Text>
                                </View>
                            </View>
                            <View style={this.state.fundingSourceName === 'Wire Transfer' ? styles.boxStyleViewSelected : styles.boxStyleView} onTouchStart={this.onClickWireTransferSelected}>
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
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedBankAccountIndex === index) ? styles.boxStyleViewSelected : styles.boxStyleView} onTouchStart={this.onSelectBankAccount(item, index)}>
                                            <View style={styles.iconContainerView}>
                                                <Image source={BankAcc} resizeMode="contain" />
                                            </View>
                                            <View style={styles.titleContainerView}>
                                                <Text style={styles.bankTitle}>{item.bankAccName}</Text>
                                                <Text style={styles.bankDisc}>{item.bankAccountNo}</Text>
                                                {!item.verified ? <Text style={styles.verifiedText}>{"To Be Verified"}</Text> : null}
                                            </View>
                                        </View>
                                    );
                                }}
                                keyExtractor={a => a.bankAccountNo}
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
                        {this.state.showCheckMsg &&
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
                        }
                        {this.state.showWireTransferMsg &&
                            <View style={styles.checkOrderStmtView}>
                                <Text style={styles.checkOrderTitle}>{gblStrings.purchase.wireTransfer}</Text>
                                <View style={styles.line} />
                                <View>
                                    <Text style={styles.checkOrderText}>{gblStrings.purchase.usaaFundName}</Text>
                                    <Text style={styles.wireTransferTxt}>{savedData.selectedFundData.fundName}</Text>
                                    <Text style={styles.checkOrderText}>{gblStrings.purchase.usaaAccNum}</Text>
                                    <Text style={styles.wireTransferTxt}>{savedData.selectedAccountData.accountNumber}</Text>
                                    <Text style={styles.checkOrderText}>{gblStrings.purchase.name}</Text>
                                    <Text style={styles.wireTransferTxt}>{"William"}</Text>
                                    <Text style={styles.checkOrderText}>{gblStrings.purchase.usaaMutualFundAccNumber}</Text>
                                    <Text style={styles.wireTransferTxt}>{savedData.selectedFundData.fundNumber}</Text>
                                    <Text style={styles.checkOrderText}>{gblStrings.purchase.mailingToNumber}</Text>
                                    <Text style={styles.addressText}>{gblStrings.purchase.address}</Text>
                                    <Text style={styles.checkOrderText}>{gblStrings.purchase.wireTransferStmt}</Text>
                                </View>
                            </View>
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
                                switchOffText={"No"}
                                switchOnText={"Yes"}
                                switchOff={this.state.switchOff}
                                switchOn={this.state.switchOn}
                                switchOnMethod={this.switchMethod}
                                switchOffMethod={this.switchMethod}
                                onStyle={styles.onButtonStyle}
                                offStyle={styles.offButtonStyle}
                                onStyleDisabled={styles.onButtonStyleDisable}
                                offStyleDisabled={styles.offButtonStyleDisable}
                                textOnStyle={styles.TextOnStyle}
                                textOffStyle={this.state.switchOn ? styles.TextOffStyle : styles.TextOffStyleBold}
                            />
                            <View style={styles.switchTextStyle}>
                                <Text style={styles.switchTxt}>{gblStrings.purchase.notReinvest}</Text>
                                <Text style={styles.switchTxt}>{gblStrings.purchase.reinvest}</Text>
                            </View>
                        </View>

                    </View>

                    {/* ------------------------- Contribution ----------------------------- */}

                    {isIRA ? <View style={styles.innerContainerStyle}>
                        <Text style={styles.headerText}>{gblStrings.purchase.contribution}</Text>
                        <View style={styles.line} />
                        <Text style={styles.stmtSmallTextStyle}>{gblStrings.purchase.contDummyText}</Text>
                        <GDropDownComponent
                            dropDownLayout={styles.dropDownLayout}
                            dropDownTextName={styles.dropDownTextName}
                            textInputStyle={styles.textInputStyle}
                            dropDownName={gblStrings.accManagement.contForIRAAccount}
                            data={contributionData}
                            dropDownValue={this.state.selectedContributionData.contribution}
                            selectedDropDownValue={this.onSelectedDropDownValue}
                            errorFlag={!this.state.contributionFlag}
                            errorText={this.state.contributionErrMsg}
                        />
                    </View>:null}


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

                    {/* ------------------------- Footer ----------------------------- */}

                    <View style={styles.fullLine} />
                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>
                    <GFooterComponent />
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