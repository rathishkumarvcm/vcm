import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { PageNumber } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import styles from './styles';

let savedData = {};
let menuList = [];
let sellingAmount = '';

class LiquidationPageFourComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ammend: false,
            ammendData: {},
            ammendIndex: null
        };
    }

    componentDidMount() {
         console.log(" Screen 4 componentdidmount ",JSON.stringify(this.props.liquidationInitialState.saveLiquidationSelectedData));
        this.getData();
    }

    getData = () => {
        if (this.props.navigation.getParam('ammend')) {
            this.setState({
                ammend: this.props.navigation.getParam('ammend'),
                 ammendData: this.props.navigation.getParam('data'),
                // ammendData1 = this.props.amendReducerData.menu[ammendIndex - 1].data,
                ammendIndex: this.props.navigation.getParam('index')
            });
            if (this.props && this.props.amendReducerData && this.props.amendReducerData.menu) {
                menuList = this.props.amendReducerData.menu;
            }
        }else {
            this.setState({ ammend: false });
        }
        
    }

    formatAmount = (amount) => {
        const amt = parseInt(amount).toLocaleString();
        return amt;
    }

    navigateLiquidationPageOne = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('tAmmendComponent');
        }
        else {
            this.props.navigation.navigate('LiquidationPageOne');
        }
    }

    navigateLiquidationPageThree = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('LiquidationPageThree', { ammend: true });
        }
        else {
            this.props.navigation.navigate('LiquidationPageThree', { ammend: false });
        }
    }

    onClickEditAccountSelection = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('tAmmendComponent', { ammend: true });
        }
        else {
            this.props.navigation.navigate('LiquidationPageOne', { ammend: false });
        }
    }

    onClickEditSelectedFund = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('LiquidationPageTwo', { ammend: true });
        }
        else {
            this.props.navigation.navigate('LiquidationPageTwo', { ammend: false });
        }
    }

    onClickEditFundingSource = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('LiquidationPageThree', { ammend: true });
        }
        else {
            this.props.navigation.navigate('LiquidationPageThree', { ammend: false });
        }
    }

    onClickEditTaxAccountingmethod = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('LiquidationPageThree', { ammend: true });
        }
        else {
            this.props.navigation.navigate('LiquidationPageThree', { ammend: false });
        }
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;

    }

    submitButtonAction = () => {

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const updatedDate = `${date} / ${month} / ${year}`;
        const finalKey = menuList[menuList.length - 1];

        if (this.state.ammend) {
            const pIndex = menuList.findIndex((item) => item.key === this.state.ammendIndex);
            const amndObj = menuList[pIndex];
            const transType = `${this.state.ammendData.TransactionType} `;
            const ammendPayloadData = {
                "key": amndObj.key,
                "title": amndObj.title,
                "data": {
                    "count": this.state.ammendData.count,
                    "Dateadded": updatedDate,
                    "TransactionType": transType,
                    "OrderStatus": this.state.ammendData.OrderStatus,
                    "totalSHares": this.state.ammendData.totalSHares,
                    "worth": this.state.ammendData.worth,
                    "selectedAccountData": this.state.ammendData.selectedAccountData,
                    "selectedFundData": savedData.selectedFundData,
                    "selectedFundWithdrawalData": savedData.selectedFundWithdrawalData,
                    "reviewConfirmLiquidationData": {
                        "tradeType": transType,
                        "accountName": savedData.selectedAccountData.accountName,
                        'accountNumber': savedData.selectedAccountData.accountNumber,
                        "worthAmount": gblStrings.liquidation.dollarSymbol + this.formatAmount(savedData.selectedFundData.worthAmount),
                        "sellingAmount": sellingAmount,
                        "fundingSourceName": savedData.selectedFundWithdrawalData.bankAccountName,
                        "fundingSourceNo": savedData.selectedFundWithdrawalData.bankAccountNo,
                        "taxWithHoldingOption": savedData.selectedFundWithdrawalData.taxWithHoldingOption,
                        "requestedAmountType": savedData.selectedFundWithdrawalData.requestedAmountType,
                        "amountBeforeTaxes": savedData.selectedFundWithdrawalData.amountBeforeTaxes,
                        "amountAfterTaxes": savedData.selectedFundWithdrawalData.amountAfterTaxes,
                        "federalTaxInPerc": savedData.selectedFundWithdrawalData.federalTaxInPerc,
                        "federalTaxInDollars": savedData.selectedFundWithdrawalData.federalTaxInDollars,
                        "stateTaxInPerc": savedData.selectedFundWithdrawalData.stateTaxInPerc,
                        "stateTaxInDollars": savedData.selectedFundWithdrawalData.stateTaxInDollars,
                        "totalTaxToBeWithHold": savedData.selectedFundWithdrawalData.totalTaxToBeWithHold,
                        "totalYouWillReceive": savedData.selectedFundWithdrawalData.totalYouWillReceive,
                        "totalWithdrawal": savedData.selectedFundWithdrawalData.totalWithdrawal
                    },
                    "selectedFundSourceData": this.state.ammendData.selectedFundSourceData,
                    "currentSecurities": this.state.ammendData.currentSecurities,
                    "contribution": this.state.ammendData.contribution,
                    "estimated": this.state.ammendData.estimated,
                }
            };
            menuList.splice(pIndex, 1, ammendPayloadData);
            this.props.ammendActions(menuList);
            this.props.navigation.navigate('tAmmendComponent');
        }
        else {
            const orderId = `Order ID - LIQ0${year}${month}${date}`;
            const payloadData = {
                "key": finalKey,
                "title": orderId,
                "data": {
                    "count": 5,
                    "Dateadded": updatedDate,
                    "TransactionType": gblStrings.liquidation.liquidation,
                    "OrderStatus": "Pending",
                    "totalSHares": "",
                    "worth": "",
                    "selectedAccountData": savedData.selectedAccountData,
                    "selectedFundData": savedData.selectedFundData,
                    "selectedFundWithdrawalData": savedData.selectedFundWithdrawalData,
                    "reviewConfirmLiquidationData": {
                        "tradeType": gblStrings.liquidation.liquidation,
                        "accountName": savedData.selectedAccountData.accountName,
                        'accountNumber': savedData.selectedAccountData.accountNumber,
                        "worthAmount": gblStrings.liquidation.dollarSymbol + this.formatAmount(savedData.selectedFundData.worthAmount),
                        "sellingAmount": sellingAmount,
                        "fundingSourceName": savedData.selectedFundWithdrawalData.bankAccountName,
                        "fundingSourceNo": savedData.selectedFundWithdrawalData.bankAccountNo,
                        "taxWithHoldingOption": savedData.selectedFundWithdrawalData.taxWithHoldingOption,
                        "requestedAmountType": savedData.selectedFundWithdrawalData.requestedAmountType,
                        "amountBeforeTaxes": savedData.selectedFundWithdrawalData.amountBeforeTaxes,
                        "amountAfterTaxes": savedData.selectedFundWithdrawalData.amountAfterTaxes,
                        "federalTaxInPerc": savedData.selectedFundWithdrawalData.federalTaxInPerc,
                        "federalTaxInDollars": savedData.selectedFundWithdrawalData.federalTaxInDollars,
                        "stateTaxInPerc": savedData.selectedFundWithdrawalData.stateTaxInPerc,
                        "stateTaxInDollars": savedData.selectedFundWithdrawalData.stateTaxInDollars,
                        "totalTaxToBeWithHold": savedData.selectedFundWithdrawalData.totalTaxToBeWithHold,
                        "totalYouWillReceive": savedData.selectedFundWithdrawalData.totalYouWillReceive,
                        "totalWithdrawal": savedData.selectedFundWithdrawalData.totalWithdrawal
                    },
                    "selectedFundSourceData": "",
                    "currentSecurities": "",
                    "contribution": "",
                    "estimated": {}
                }
            };
            menuList.push(payloadData);
            this.props.ammendActions(menuList);
            this.props.navigation.navigate('LiquidationFinish', { orderId: orderId });
            
        }

    }


    render() {
        let currentPage = 4;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.reviewNConfirmHeading;
        if (this.state.ammend) {
            currentPage = 2;
            pageName = "3 - Review and Confirm";
            totalCount = 3;
        }
        if (this.props.liquidationInitialState && this.props.liquidationInitialState.saveLiquidationSelectedData) {
            savedData = this.props.liquidationInitialState.saveLiquidationSelectedData;
        }
        let fundWithdrawalData = {};
        let accType = "";
        if (this.state.ammend) {
            accType = this.state.ammendData.selectedAccountData.accountType;
        }else{
            accType = savedData.selectedAccountData.accountType;
        }
            fundWithdrawalData = savedData.selectedFundWithdrawalData;
            if (savedData.selectedFundData.allSharesSelected) {
                sellingAmount = gblStrings.liquidation.dollarSymbol + this.formatAmount(savedData.selectedFundData.worthAmount);
            } else if (this.isEmpty(savedData.selectedFundData.percentageValue)) {
                sellingAmount = gblStrings.liquidation.dollarSymbol + this.formatAmount(savedData.selectedFundData.dollarValue);
            } else {
                sellingAmount = gblStrings.liquidation.dollarSymbol + this.formatAmount((savedData.selectedFundData.percentageValue / 100) * savedData.selectedFundData.worthAmount);
            }
        

        let amount = "";
        if (fundWithdrawalData.requestedAmountType === "Before Taxes") {
            amount = fundWithdrawalData.amountBeforeTaxes;
        } else {
            amount = fundWithdrawalData.amountAfterTaxes;
        }
        let fundingSource = "";
        if (fundWithdrawalData.checkSelectedOrder) {
            fundingSource = gblStrings.liquidation.check;
        } else {
            fundingSource = fundWithdrawalData.bankAccountName;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.flexContainer}>
                        <Text style={styles.subHeading}>{gblStrings.liquidation.tradeType}</Text>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.tradeType}</Text>
                            <Text style={styles.greyText16px}>{gblStrings.liquidation.liquidation}</Text>
                        </View>
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.liquidation.accountSelection}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditAccountSelection}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountName}</Text>
                            <Text style={styles.greyText16px}>{gblStrings.liquidation.accountName}{this.state.ammend ? this.state.ammendData.selectedAccountData.accountName : savedData.selectedAccountData.accountName}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                            <Text style={styles.greyText16px}>{this.state.ammend ? this.state.ammendData.selectedAccountData.accountNumber : savedData.selectedAccountData.accountNumber}</Text>
                        </View>
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.accManagement.selectedMutualFunds}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditSelectedFund}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />

                        <View style={styles.govtSecuritiesFund}>
                            <Text style={styles.blackTextBold22px}>{gblStrings.liquidation.govtSecuritiesFund}</Text>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.worthAmount}</Text>
                                <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol}{this.formatAmount(savedData.selectedFundData.worthAmount)}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.sellingAmount}</Text>
                                <Text style={styles.greyText16px}>{sellingAmount}</Text>
                            </View>
                        </View>

                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.accManagement.fundingSource}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditFundingSource}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.accManagement.fundingSource}</Text>
                            <Text style={styles.greyText16px}>{fundingSource}</Text>
                        </View>

                        {(fundingSource === gblStrings.liquidation.check) ?
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalInvestment}</Text>
                                <Text style={styles.greyText16px}>{fundWithdrawalData.bankAccountNo}</Text>
                            </View> :
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                                <Text style={styles.greyText16px}>{fundWithdrawalData.bankAccountNo}</Text>
                            </View>
                        }
                        {/* -----------------------------------Tax Accounting Method starts here-------------------------------- */}
                        {(fundWithdrawalData.taxWithHoldingOption === gblStrings.liquidation.withholdTaxes) && (accType === "IRA") ?
                            <View>
                                <View style={styles.horizontalFlex}>
                                    <Text style={styles.subHeading}>{gblStrings.liquidation.taxAccountingMethod}</Text>
                                    <Text style={styles.edit} onPress={this.onClickEditTaxAccountingmethod}>{gblStrings.common.edit}</Text>
                                </View>
                                <View style={styles.line} />
                                <Text style={styles.blackTextBold22px}>{fundWithdrawalData.taxWithHoldingOption}</Text>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.isTheReqAmount}</Text>
                                    <Text style={styles.greyText16px}>{fundWithdrawalData.requestedAmountType}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.amount}{fundWithdrawalData.requestedAmountType}</Text>
                                    <Text style={styles.greyText16px}>{amount}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.federalTax}</Text>
                                    <Text style={styles.greyText16px}>{fundWithdrawalData.federalTaxInPerc}  -  {fundWithdrawalData.federalTaxInDollars}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.stateTax}</Text>
                                    <Text style={styles.greyText16px}>{fundWithdrawalData.stateTaxInPerc}  -  {fundWithdrawalData.stateTaxInDollars}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalTaxToBeWithhold}</Text>
                                    <Text style={styles.greyText16px}>{fundWithdrawalData.totalTaxToBeWithHold}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalYouWillReceive}</Text>
                                    <Text style={styles.greyText16px}>{fundWithdrawalData.totalYouWillReceive}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalWithdrawal}</Text>
                                    <Text style={styles.greyText16px}>{fundWithdrawalData.totalWithdrawal}</Text>
                                </View>
                            </View>
                            : null}

                        {/* -----------------------------------Tax Accounting Method ends here-------------------------------- */}
                        <View style={styles.flex5}>
                            <Text style={styles.text5}>{gblStrings.liquidation.confirmationMsg1}{"\n"}{"\n"}{gblStrings.liquidation.confirmationMsg2}</Text>

                        </View>


                    </View>

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageThree}>
                            <Text style={styles.backButtonText}>{gblStrings.common.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitFlex} onPress={this.submitButtonAction}>
                            <Text style={styles.submitText}>{gblStrings.common.submit}</Text>
                        </TouchableOpacity>
                    </View>

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


LiquidationPageFourComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    liquidationInitialState: PropTypes.instanceOf(Object),
    amendReducerData: PropTypes.instanceOf(Object),
    saveData: PropTypes.func,
    ammendActions: PropTypes.func,
};

LiquidationPageFourComponent.defaultProps = {
    navigation: {},
    liquidationInitialState: {},
    amendReducerData: {},
    saveData: () => { },
    ammendActions: () => { }
};
export default LiquidationPageFourComponent;