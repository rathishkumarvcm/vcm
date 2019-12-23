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
            
        };
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
        this.props.navigation.navigate('LiquidationFinish');
    }

    componentDidMount() {
        console.log(" Screen 4 componentdidmount " + JSON.stringify(this.props));
    }

    render() {
        let currentPage = 4;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.reviewNConfirmHeading;
        let sellingAmount = '';
        if(this.props.liquidationInitialState.allSharesSelected){
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount(this.props.liquidationInitialState.worthAmount);
        }else if(this.isEmpty(this.props.liquidationInitialState.percentageValue)){
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount(this.props.liquidationInitialState.dollarValue);
        }else{
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount((this.props.liquidationInitialState.percentageValue/100)*this.props.liquidationInitialState.worthAmount);
        }
        var fundWithdrawalData = this.props.liquidationInitialState;
        let amount = "";
        if (fundWithdrawalData.requestedAmountType == "Before Taxes") {
            amount = fundWithdrawalData.amountBeforeTaxes;
        } else {
            amount = fundWithdrawalData.amountAfterTaxes;
        }
        let fundingSource = "";
        if(fundWithdrawalData.checkSelectedOrder){
            fundingSource = gblStrings.liquidation.check;
        }else{
            fundingSource = fundWithdrawalData.bankAccountName;
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
                            <Text style={styles.greyText16px}>{gblStrings.liquidation.liquidation}</Text>
                        </View>
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.liquidation.accountSelection}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditAccountSelection} >{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountName}</Text>
                            <Text style={styles.greyText16px}>{gblStrings.liquidation.accountName}{this.props.liquidationInitialState.selectedAccountName}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                            <Text style={styles.greyText16px}>{this.props.liquidationInitialState.selectedAccountNumber}</Text>
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
                                <Text style={styles.greyText16px}>{gblStrings.liquidation.dollarSymbol}{this.formatAmount(this.props.liquidationInitialState.worthAmount)}</Text>
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

                        {(fundingSource==gblStrings.liquidation.check) ?
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalInvestment}</Text>
                                <Text style={styles.greyText16px}>{fundWithdrawalData.bankAccountNo}</Text>
                            </View> : <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                                <Text style={styles.greyText16px}>{fundWithdrawalData.bankAccountNo}</Text>
                            </View>
                        }
                        {/*-----------------------------------Tax Accounting Method starts here-------------------------------- */}
                        {this.props.liquidationInitialState.taxWithHoldingOption == gblStrings.liquidation.withholdTaxes?
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
    liquidationInitialState: PropTypes.instanceOf(Object),
};

LiquidationPageFourComponent.defaultProps = {

};
export default LiquidationPageFourComponent;