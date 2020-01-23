import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { PageNumber } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import styles from './styles';

let savedData = {};
let menuList = [];
let selectedFundData = {};

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
        const { liquidationInitialState } = this.props;
        console.log(" Screen 4 componentdidmount ", JSON.stringify(liquidationInitialState.saveLiquidationSelectedData));
        this.getData();
    }

    getData = () => {
        const { navigation , amendReducerData } = this.props;
        const { getParam } = navigation; 
        if (getParam('ammend')) {
            this.setState({
                ammend: getParam('ammend'),
                ammendData: getParam('data'),
                ammendIndex: getParam('index')
            });

        } else {
            this.setState({ ammend: false });
        }
        if (this.props && amendReducerData && amendReducerData.menu) {
            menuList = amendReducerData.menu;
        }

    }

    formatAmount = (amount) => {
        const amt = parseInt(amount).toLocaleString();
        return amt;
    }

    navigateLiquidationPageOne = () => {
        const { navigation} = this.props;
        const { navigate } = navigation; 
        const { ammend } = this.state;
        if (ammend) {
            navigate({ routeName: 'tAmmendComponent', key: 'tAmmendComponent' });
        }
        else {
            navigate({ routeName: 'LiquidationPageOne', key: 'LiquidationPageOne' });
        }
    }

    navigateLiquidationPageThree = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;
        const { ammend } = this.state; 
        if (ammend) {
            navigate('LiquidationPageThree', { ammend: true });
        }
        else {
            navigate('LiquidationPageThree', { ammend: false });
        }
    }

    onClickEditAccountSelection = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;
        const { ammend } = this.state;
        if (ammend) {
            navigate('tAmmendComponent', { ammend: true });
        }
        else {
            navigate('LiquidationPageOne', { ammend: false });
        }
    }

    onClickEditSelectedFund = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;
        const { ammend } = this.state;
        if (ammend) {
            navigate('LiquidationPageTwo', { ammend: true });
        }
        else {
            navigate('LiquidationPageTwo', { ammend: false });
        }
    }

    onClickEditFundingSource = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;
        const { ammend } = this.state;
        if (ammend) {
            navigate('LiquidationPageThree', { ammend: true });
        }
        else {
            navigate('LiquidationPageThree', { ammend: false });
        }
    }

    onClickEditTaxAccountingmethod = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;
        const { ammend } = this.state;
        if (ammend) {
            navigate('LiquidationPageThree', { ammend: true });
        }
        else {
            navigate('LiquidationPageThree', { ammend: false });
        }
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;

    }

    submitButtonAction = () => {
        const { navigation,ammendActions,saveData } = this.props;
        const { navigate } = navigation;
        const { ammend,ammendData,ammendIndex } = this.state;
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const updatedDate = `${date} / ${month} / ${year}`;
        const finalKey = menuList[menuList.length - 1];
        let paymentMode = "";
            if(savedData.selectedFundWithdrawalData.PaymentMethod === "05"){
                paymentMode = "NetBanking";
            }else{
                paymentMode = "Check";
            }
        if (ammend) {
            const pIndex = menuList.findIndex((item) => item.key === ammendIndex);
            const amndObj = menuList[pIndex];

            const transType = `${ammendData.TransactionType} Amended`;
            const ammendPayloadData = {
                "key": amndObj.key,
                "title": amndObj.title,
                "data": {
                    "count": ammendData.count,
                    "Dateadded": updatedDate,
                    "TransactionType": transType,
                    "OrderStatus": ammendData.OrderStatus,
                    "totalSHares": ammendData.totalSHares,
                    "worth": ammendData.worth,
                    "selectedAccountData": ammendData.selectedAccountData,
                    "selectedFundData": savedData.selectedFundData,
                    "selectedFundWithdrawalData": savedData.selectedFundWithdrawalData,
                    "selectedFundSourceData": {
                        "paymentMode": paymentMode,
                        "fundSourceType": "",
                        "totalInvestment": "",
                        "bankAccountName": "",
                        "bankAccountNumber": "",
                    },
                    "currentSecurities": ammendData.currentSecurities,
                    "contribution": ammendData.contribution,
                    "estimated": ammendData.estimated,
                }
            };
            menuList.splice(pIndex, 1, ammendPayloadData);
            ammendActions(menuList);
            // navigate({ routeName: 'tAmmendComponent', key: 'tAmmendComponent' });
            navigation.navigate('tAmmendComponent',{ orderId : amndObj.title,transactionType:"Liquidation",amend:true});
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
                    "selectedFundSourceData": {
                        "paymentMode": paymentMode,
                        "fundSourceType": "",
                        "totalInvestment": "",
                        "bankAccountName": "",
                        "bankAccountNumber": "",
                    },
                }
            };
            menuList.push(payloadData);
            ammendActions(menuList);

            const liquidationData = {
                    "saveLiquidateFundsData": {
                        "customerId": "45435",
                        "CompanyNumber": "591",
                        "FundNumber": selectedFundData.FundNumber,
                        "AccountNumber": savedData.selectedAccountData.accountNumber,
                        "TypeValueReq": selectedFundData.TypeValueReq,
                        "liquidateAmount": selectedFundData.sellingAmount,
                        "PaymentMethod": savedData.selectedFundWithdrawalData.PaymentMethod,
                        "TaxWithholdingCode": "P",
                        "AmountBeforeTaxes": savedData.selectedFundWithdrawalData.amountBeforeTaxes,
                        "AmountAfterTaxes": savedData.selectedFundWithdrawalData.amountAfterTaxes,
                        "FederalTax": savedData.selectedFundWithdrawalData.federalTaxInPerc,
                        "StateTax": savedData.selectedFundWithdrawalData.stateTaxInPerc,
                        "TotalTaxestobewithhold": savedData.selectedFundWithdrawalData.totalTaxToBeWithHold,
                        "Totalyouwillreceive": savedData.selectedFundWithdrawalData.totalYouWillReceive,
                        "TotalWithdrawal": savedData.selectedFundWithdrawalData.totalWithdrawal
                    },
            };
            saveData(liquidationData);

            navigate('LiquidationFinish', { orderId: orderId });
        }

    }


    render() {
        let currentPage = 4;
        let totalCount = 4;
        const { liquidationInitialState } = this.props;
        const { navigation } = this.props;
        const { ammend,ammendData } = this.state;
        let pageName = gblStrings.liquidation.reviewNConfirmHeading;
        if (ammend) {
            currentPage = 2;
            pageName = "3 - Review and Confirm";
            totalCount = 3;
        }
        if (liquidationInitialState && liquidationInitialState.saveLiquidationSelectedData) {
            savedData = liquidationInitialState.saveLiquidationSelectedData;
        }
        for (let i = 0; i < savedData.selectedFundData.funds.length; i += 1) {
            if (savedData.selectedFundData.funds[i].isSelected) {
                selectedFundData = savedData.selectedFundData.funds[i];
            }
        }
        let fundWithdrawalData = {};
        let accType = "";
        if (ammend) {
            accType = ammendData.selectedAccountData.accountType;
        } else {
            accType = savedData.selectedAccountData.accountType;
        }
        fundWithdrawalData = savedData.selectedFundWithdrawalData;
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
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <View style={styles.headerTextView}>
                        <Text style={styles.titleHeaderTextStyle}>{gblStrings.liquidation.liquidation}</Text>
                        <View style={styles.line} />
                    </View>
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
                            <Text style={styles.greyText16px}>{gblStrings.liquidation.accountName}{ammend ? ammendData.selectedAccountData.accountName : savedData.selectedAccountData.accountName}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                            <Text style={styles.greyText16px}>{ammend ? ammendData.selectedAccountData.accountNumber : savedData.selectedAccountData.accountNumber}</Text>
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
                                <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol}{this.formatAmount(selectedFundData.worthAmount)}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.sellingAmount}</Text>
                                <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol}{this.formatAmount(selectedFundData.sellingAmount)}</Text>
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
                            (
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalInvestment}</Text>
                                    <Text style={styles.greyText16px}>{fundWithdrawalData.bankAccountNo}</Text>
                                </View>
                            ) :
                            (
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                                    <Text style={styles.greyText16px}>{fundWithdrawalData.bankAccountNo}</Text>
                                </View>
                            )
                        }
                        {/* -----------------------------------Tax Accounting Method starts here-------------------------------- */}
                        {(fundWithdrawalData.taxWithHoldingOption === gblStrings.liquidation.withholdTaxes) && (accType === "IRA") ?
                            (
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
                                        <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol + this.formatAmount(amount)}</Text>
                                    </View>
                                    <View style={styles.section}>
                                        <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.federalTax}</Text>
                                        <Text style={styles.greyText16px}>{fundWithdrawalData.federalTaxInPerc}%  -  {gblStrings.liquidation.dollarSymbol + fundWithdrawalData.federalTaxInDollars}</Text>
                                    </View>
                                    <View style={styles.section}>
                                        <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.stateTax}</Text>
                                        <Text style={styles.greyText16px}>{fundWithdrawalData.stateTaxInPerc}%  -  {gblStrings.liquidation.dollarSymbol + fundWithdrawalData.stateTaxInDollars}</Text>
                                    </View>
                                    <View style={styles.section}>
                                        <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalTaxToBeWithhold}</Text>
                                        <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol + fundWithdrawalData.totalTaxToBeWithHold}</Text>
                                    </View>
                                    <View style={styles.section}>
                                        <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalYouWillReceive}</Text>
                                        <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol + fundWithdrawalData.totalYouWillReceive}</Text>
                                    </View>
                                    <View style={styles.section}>
                                        <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalWithdrawal}</Text>
                                        <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol + fundWithdrawalData.totalWithdrawal}</Text>
                                    </View>
                                </View>
                            )
                            : null}

                        {/* -----------------------------------Tax Accounting Method ends here-------------------------------- */}
                        <View style={styles.flex5}>
                            <Text style={styles.text5}>{gblStrings.liquidation.reviewAndConfirmMsg}</Text>

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
    ammendActions: PropTypes.func,
    saveData: PropTypes.func,
};

LiquidationPageFourComponent.defaultProps = {
    navigation:{},
    liquidationInitialState:{},
    amendReducerData:{},
    ammendActions:()=>{},
    saveData:()=>{},
};
export default LiquidationPageFourComponent;