import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { PageNumber } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { styles } from './styles';


class PurchaseFourComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
         ammend : false,   
        };
    }

    formatAmount = (amount) => {
        var amt = parseInt(amount).toLocaleString();
        return amt;
    }

    navigatePurchasePageOne = () => 
    { if(this.state.ammend)
        {
        this.props.navigation.navigate('tAmmendComponent');
        }
        else
        {
            this.props.navigation.navigate('purchaseScreenOne');
        }
    }

    navigatePurchasePageThree = () => 
    { if(this.state.ammend)
        {
        this.props.navigation.navigate('purchaseScreenThree',{ammend:true});
        }
        else
        {
        this.props.navigation.navigate('purchaseScreenThree',{ammend:false});
        }
    }

    onClickEditAccountSelection = () => {
        if(this.state.ammend)
        {
        this.props.navigation.navigate('tAmmendComponent',{ammend:true});
        }
        else{
        this.props.navigation.navigate('purchaseScreenOne',{ammend:false});
        }
    }

    onClickEditSelectedFund = () => {
        if(this.state.ammend)
        {
        this.props.navigation.navigate('purchaseScreenTwo',{ammend:true});
        }
        else
        {
            this.props.navigation.navigate('purchaseScreenTwo',{ammend:false});
        }
    }

    onClickEditFundingSource = () => {
        if(this.state.ammend)
        {
        this.props.navigation.navigate('purchaseScreenThree',{ammend:true});
        }
        else
        {
        this.props.navigation.navigate('purchaseScreenThree',{ammend:false});
        }
    }

    onClickEditTaxAccountingmethod = () => {
        if(this.state.ammend)
        {
        this.props.navigation.navigate('LiquidationPageThree',{ammend:true});
        }
        else
        {
        this.props.navigation.navigate('LiquidationPageThree',{ammend:false});
        }
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str == null || str === "null" || str === "undefined") {
            return true;
        } 
            return false;
       
      }

    submitButtonAction = () => {
        
        // console.log('On Click Submit Liquidation ...');
        this.props.navigation.navigate('LiquidationFinish');
    }

    componentDidMount() {
        // console.log(" Screen 4 componentdidmount " + JSON.stringify(this.props));
        this.setState({transactionType:this.props.navigation.getParam('transactionType')});
        if(this.props.navigation.getParam('ammend'))
        {
            this.setState({ammend:true});
        }
        else{
            this.setState({ammend:false});
        }
    }

    render() {
        let currentPage = 4;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.reviewNConfirmHeading;
        if(this.state.ammend)
        {
             currentPage = 2;
             pageName = "3 - Review and Confirm";
             totalCount = 3;
        }
        let sellingAmount = '';
        if(this.props.liquidationInitialState.allSharesSelected){
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount(this.props.liquidationInitialState.worthAmount);
        }else if(this.isEmpty(this.props.liquidationInitialState.percentageValue)){
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount(this.props.liquidationInitialState.dollarValue);
        }else{
            sellingAmount = gblStrings.liquidation.dollarSymbol+this.formatAmount((this.props.liquidationInitialState.percentageValue/100)*this.props.liquidationInitialState.worthAmount);
        }
        const fundWithdrawalData = this.props.liquidationInitialState;
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
                            <Text style={styles.greyText16px}>"Purchase"</Text>
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
                        {(this.props.liquidationInitialState.taxWithHoldingOption == gblStrings.liquidation.withholdTaxes)&&(this.props.liquidationInitialState.accType=="IRA")?
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
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigatePurchasePageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigatePurchasePageThree}>
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


PurchaseFourComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    liquidationInitialState: PropTypes.instanceOf(Object),
};

PurchaseFourComponent.defaultProps = {

};
export default PurchaseFourComponent;