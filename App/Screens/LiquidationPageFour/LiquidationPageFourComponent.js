import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { PageNumber } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { styles } from './styles';
import PropTypes from 'prop-types';

class LiquidationPageFourComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewConfirmLiquidationData: {
                tradeType: '',
                selectedAccountName: '',
                selectedAccountNo: '',
                worthAmount: '',
                sellingAmount: '',
                fundingSource: '',
                fundingSourceAccountNo: '',
                totalInvestment: '',
                requestedAmountType: '',
                amount: '',
                federalTaxInPerc: '',
                stateTaxInPerc: '',
                totalTaxesToBeWithhold: '',
                totalYouWillReceive: '',
                totalWithdrawal: '',
                accType: ''
            },
        };
        this.amount = '';
    }

    formatAmount = (amount) => {
        var amt = parseInt(amount).toLocaleString();
        return amt;
    }


    navigateLiquidationPageOne = () => this.props.navigation.navigate('LiquidationPageOne');
    navigateLiquidationPageThree = () => this.props.navigation.navigate('LiquidationPageThree');

    onClickEditAccountSelection = () => {
        this.props.navigation.navigate('LiquidationPageOne');
    }

    onClickEditSelectedFund = () => {
        this.props.navigation.navigate('LiquidationPageTwo');
    }

    onClickEditFundingSource = () => {
        this.props.navigation.navigate('LiquidationPageThree');
    }

    onClickEditTaxAccountingmethod = () => {
        this.props.navigation.navigate('LiquidationPageThree');
    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
      }

    submitButtonAction = () => {
        console.log('On Click Submit Liquidation ...');
        const payloadData = this.state.reviewConfirmLiquidationData;
        this.props.saveData(payloadData);
        console.log("payloadData---> " + JSON.stringify(payloadData));
        this.props.navigation.navigate('LiquidationFinish', { reviewConfirmLiquidationData: this.state.reviewConfirmLiquidationData });
    }

    componentDidMount() {
        console.log(" Screen 4 componentdidmount " + JSON.stringify(this.props));
        let fundingSourceData = this.props.navigation.getParam('fundingSource');
        let taxAccountingMethodData = this.props.navigation.getParam('taxAccountingMethodData');
        let tradeType = "Liquidation";
        let fundSource = '';
        let sellingAmount = '';
        if(this.props.liquidationPageTwoInitialState.allSharesSelected){
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount(this.props.liquidationPageTwoInitialState.worthAmount);
        }else if(this.isEmpty(this.props.liquidationPageTwoInitialState.percentageValue)){
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount(this.props.liquidationPageTwoInitialState.dollarValue);
        }else{
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount((this.props.liquidationPageTwoInitialState.percentageValue/100)*this.props.liquidationPageTwoInitialState.worthAmount);
        }
        console.log("componentDidMount fundingSourceData------> ", fundingSourceData);
        console.log("componentDidMount taxAccountingMethodData------> ", taxAccountingMethodData);
        if (taxAccountingMethodData.requestedAmountType == "Before Taxes") {
            this.amount = taxAccountingMethodData.amountBeforeTaxes;
        } else {
            this.amount = taxAccountingMethodData.amountAfterTaxes;
        }
        if (fundingSourceData.checkOrderSelected) {
            fundSource = gblStrings.liquidation.check;
        } else {
            fundSource = fundingSourceData.selectedBankAccountName;
        }
        this.setState(prevState => ({
            reviewConfirmLiquidationData: {
                ...prevState.reviewConfirmLiquidationData,
                tradeType: tradeType,
                selectedAccountName: this.props.liquidationPageOneInitialState.selectedAccountName,
                selectedAccountNo: this.props.liquidationPageOneInitialState.selectedAccountNumber,
                worthAmount: this.formatAmount(this.props.liquidationPageTwoInitialState.worthAmount),
                sellingAmount:sellingAmount,
                fundingSource: fundSource,
                fundingSourceAccountNo: fundingSourceData.selectedBankAccountNo,
                totalInvestment: '$ 5,500',
                requestedAmountType: taxAccountingMethodData.requestedAmountType,
                amount: this.formatAmount(this.amount),
                federalTaxInPerc: taxAccountingMethodData.federalTax + "%",
                stateTaxInPerc: taxAccountingMethodData.stateTax + "%",
                stateTaxInDollars:gblStrings.liquidation.dollarSymbol+this.formatAmount(taxAccountingMethodData.stateTaxInDollars),
                federalTaxInDollars:gblStrings.liquidation.dollarSymbol+this.formatAmount(taxAccountingMethodData.federalTaxInDollars),
                totalTaxesToBeWithhold: gblStrings.liquidation.dollarSymbol+this.formatAmount(taxAccountingMethodData.totalTaxToBeWithhold),
                totalYouWillReceive: gblStrings.liquidation.dollarSymbol+this.formatAmount(taxAccountingMethodData.totalYouWillReceive),
                totalWithdrawal: gblStrings.liquidation.dollarSymbol+this.formatAmount(taxAccountingMethodData.totalWithdrawal),
                accType: this.props.liquidationPageOneInitialState.accType,
            },
        }));
    }


    render() {
        let currentPage = 4;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.reviewNConfirmHeading;
        let taxAccountingMethodData = this.props.navigation.getParam('taxAccountingMethodData');
        if (this.state.reviewConfirmLiquidationData.requestedAmountType == "Before Taxes") {
            this.amount = taxAccountingMethodData.amountBeforeTaxes;
        } else {
            this.amount = taxAccountingMethodData.amountAfterTaxes;
        }
        return (
            <View style={styles.container} >
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
                            <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.tradeType}</Text>
                        </View>
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.liquidation.accountSelection}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditAccountSelection} >{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountName}</Text>
                            <Text style={styles.greyText16px}>{gblStrings.liquidation.accountName}{this.props.liquidationPageOneInitialState.selectedAccountName}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                            <Text style={styles.greyText16px}>{this.props.liquidationPageOneInitialState.selectedAccountNumber}</Text>
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
                                <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol}{this.formatAmount(this.props.liquidationPageTwoInitialState.worthAmount)}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.sellingAmount}</Text>
                                <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.sellingAmount}</Text>
                            </View>
                        </View>

                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.accManagement.fundingSource}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditFundingSource}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.accManagement.fundingSource}</Text>
                            <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.fundingSource}</Text>
                        </View>

                        {(this.state.reviewConfirmLiquidationData.fundingSource==gblStrings.liquidation.check) ?
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalInvestment}</Text>
                                <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.totalInvestment}</Text>
                            </View> : <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                                <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.fundingSourceAccountNo}</Text>
                            </View>
                        }
                        {/*-----------------------------------Tax Accounting Method starts here-------------------------------- */}
                        {this.props.liquidationPageOneInitialState.accType == "IRA" ?
                            <View>
                                <View style={styles.horizontalFlex}>
                                    <Text style={styles.subHeading}>{gblStrings.liquidation.taxAccountingMethod}</Text>
                                    <Text style={styles.edit} onPress={this.onClickEditTaxAccountingmethod}>{gblStrings.common.edit}</Text>
                                </View>
                                <View style={styles.line} />
                                <Text style={styles.blackTextBold22px}>{taxAccountingMethodData.taxHoldingOption}</Text>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.isTheReqAmount}</Text>
                                    <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.requestedAmountType}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.amount}{this.state.reviewConfirmLiquidationData.requestedAmountType}</Text>
                                    <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol}{this.formatAmount(this.amount)}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.federalTax}</Text>
                                    <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.federalTaxInPerc}  -  {this.state.reviewConfirmLiquidationData.federalTaxInDollars}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.stateTax}</Text>
                                    <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.stateTaxInPerc}  -  {this.state.reviewConfirmLiquidationData.stateTaxInDollars}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalTaxToBeWithhold}</Text>
                                    <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.totalTaxesToBeWithhold}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalYouWillReceive}</Text>
                                    <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.totalYouWillReceive}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalWithdrawal}</Text>
                                    <Text style={styles.greyText16px}>{this.state.reviewConfirmLiquidationData.totalWithdrawal}</Text>
                                </View>
                            </View>
                            : null}

                        {/*-----------------------------------Tax Accounting Method ends here-------------------------------- */}
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
    liquidationPageOneInitialState: PropTypes.instanceOf(Object),
    liquidationPageTwoInitialState: PropTypes.instanceOf(Object),
};

LiquidationPageFourComponent.defaultProps = {

};
export default LiquidationPageFourComponent;