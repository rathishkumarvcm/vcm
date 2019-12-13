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
        this.amount = '';
    }

    formatAmount = (amount) => {
        var amt = parseInt(amount).toLocaleString();
        return amt;
    }


    navigateLiquidationPageOne = () => this.props.navigation.navigate('LiquidationPageOne');
    navigateLiquidationFinish = () => this.props.navigation.navigate('LiquidationFinish');
    navigateLiquidationPageThree = () => this.props.navigation.navigate('LiquidationPageThree');


    render() {
        let currentPage = 4;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.reviewNConfirmHeading;
        let fundingSourceData = this.props.navigation.getParam('fundingSource');
        let taxAccountingMethodData = this.props.navigation.getParam('taxAccountingMethodData');
        console.log("fundingSourceData------> ", fundingSourceData);
        console.log("taxAccountingMethodData------> ", taxAccountingMethodData);
        console.log("requestedAmountType------> ", taxAccountingMethodData.requestedAmountType);
        if (taxAccountingMethodData.requestedAmountType == "Before Taxes") {
            this.amount = taxAccountingMethodData.amountBeforeTaxes;
        } else {
            this.amount = taxAccountingMethodData.amountAfterTaxes;
        }
        console.log("this.amount------> ", this.amount);
        console.log("formatted amount------> ", parseInt(this.amount).toLocaleString());
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

                    <View style={styles.flex1}>
                        <Text style={styles.subHeading}>{gblStrings.liquidation.tradeType}</Text>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.tradeType}</Text>
                            <Text style={styles.greyText16px}>Purchase</Text>
                        </View>


                    </View>

                    <View style={styles.flex3}>
                        <View style={styles.selectedMutualFunds}>
                            <View style={styles.horizontalFlex}>
                                <Text style={styles.subHeading}>{gblStrings.liquidation.accountSelection}</Text>
                                <Text style={styles.edit}>{gblStrings.common.edit}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>

                        <View style={styles.flex3b}>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Account Name</Text>
                                <Text style={styles.greyText16px}>Account Name 1</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Account Number</Text>
                                <Text style={styles.greyText16px}>XXXX-XXXX-XXXX</Text>
                            </View>
                        </View>
                    </View>

                    {/*selected mutual funds*/}
                    <View style={styles.flex2}>
                        <View style={styles.selectedMutualFunds}>
                            <View style={styles.horizontalFlex}>
                                <Text style={styles.subHeading}>{gblStrings.accManagement.selectedMutualFunds}</Text>
                                <Text style={styles.edit}>{gblStrings.common.edit}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>


                        <View style={styles.govtSecuritiesFund}>
                            <Text style={styles.blackTextBold22px}>{gblStrings.liquidation.govtSecuritiesFund}</Text>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.worthAmount}</Text>
                                <Text style={styles.greyText16px}>$ 6,000</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.sellingAmount}</Text>
                                <Text style={styles.greyText16px}>$ 5,500</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.flex3}>
                        <View style={styles.selectedMutualFunds}>
                            <View style={styles.horizontalFlex}>
                                <Text style={styles.subHeading}>{gblStrings.accManagement.fundingSource}</Text>
                                <Text style={styles.edit}>{gblStrings.common.edit}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>

                        <View style={styles.flex3b}>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.accManagement.fundingSource}</Text>
                                <Text style={styles.greyText16px}>{fundingSourceData.selectedBankAccountName}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                                <Text style={styles.greyText16px}>{fundingSourceData.selectedBankAccountNo}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.flex4}>
                        <View style={styles.selectedMutualFunds}>
                            <View style={styles.horizontalFlex}>
                                <Text style={styles.subHeading}>{gblStrings.liquidation.taxAccountingMethod}</Text>
                                <Text style={styles.edit}>{gblStrings.common.edit}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <View style={styles.flex4b}>
                            <Text style={styles.blackTextBold22px}>{gblStrings.liquidation.govtSecuritiesFund}</Text>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.isTheReqAmount}</Text>
                                <Text style={styles.greyText16px}>{taxAccountingMethodData.requestedAmountType}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.amountAfterTaxes}{taxAccountingMethodData.requestedAmountType}</Text>
                                <Text style={styles.greyText16px}>$ {this.formatAmount(this.amount)}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.federalTax}</Text>
                                <Text style={styles.greyText16px}>{taxAccountingMethodData.federalTax}%</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.stateTax}</Text>
                                <Text style={styles.greyText16px}>{taxAccountingMethodData.stateTax}%</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalTaxToBeWithhold}</Text>
                                <Text style={styles.greyText16px}>$ {this.formatAmount(taxAccountingMethodData.totalTaxToBeWithhold)}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalYouWillReceive}</Text>
                                <Text style={styles.greyText16px}>$ {this.formatAmount(taxAccountingMethodData.totalYouWillReceive)}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalWithdrawal}</Text>
                                <Text style={styles.greyText16px}>$ {this.formatAmount(taxAccountingMethodData.totalWithdrawal)}</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.flex5}>
                        <Text style={styles.text5}>{gblStrings.liquidation.confirmationMsg1}{"\n"}{"\n"}{gblStrings.liquidation.confirmationMsg2}</Text>

                    </View>

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageThree}>
                            <Text style={styles.backButtonText}>{gblStrings.common.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitFlex} onPress={this.navigateLiquidationFinish}>
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
    navigation: PropTypes.instanceOf(Object)
};

LiquidationPageFourComponent.defaultProps = {

};
export default LiquidationPageFourComponent;