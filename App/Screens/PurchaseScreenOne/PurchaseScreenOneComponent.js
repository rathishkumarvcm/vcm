import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';

let accSelectionData = {};
class PurchaseScreenOneComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generalAccountIcon: '+',
            IRAAccountIcon: '+',
            UTMAAccountIcon: '+',
            collapseGeneralAccount: true,
            collapseIRAAccount: true,
            collapseUTMAAccount: true,
            selectedGeneralAccIndex: null,
            selectedIRAAccIndex: null,
            selectedUTMAAccIndex: null,
            disableNextButton: true,
            selectedAccountData: {
                selectedAccountName: '',
                selectedAccountNumber: '',
                currentValue: '',
                holdingValue: '',
                AutoInvPlan: '',
                accType: '',
            }
        };
    }

    componentDidMount() {
    }

    onClickExpand = (type) => () => {
        switch (type) {
            case 'General_Account':
                this.setState({ collapseGeneralAccount: !this.state.collapseGeneralAccount, collapseUTMAAccount: true, collapseIRAAccount: true });
                this.state.collapseGeneralAccount ? this.setState({ generalAccountIcon: ' - ', IRAAccountIcon: " + ", UTMAAccountIcon: " + " }) : this.setState({ generalAccountIcon: ' + ', IRAAccountIcon: " + ", UTMAAccountIcon: " + " });
                break;
            case 'IRA_Account':
                this.setState({ collapseIRAAccount: !this.state.collapseIRAAccount, collapseUTMAAccount: true, collapseGeneralAccount: true });
                this.state.collapseIRAAccount ? this.setState({ IRAAccountIcon: ' - ', generalAccountIcon: " + ", UTMAAccountIcon: " + " }) : this.setState({ IRAAccountIcon: ' + ', generalAccountIcon: " + ", UTMAAccountIcon: " + " });
                break;
            case 'UTMA_Account':
                this.setState({ collapseUTMAAccount: !this.state.collapseUTMAAccount, collapseIRAAccount: true, collapseGeneralAccount: true });
                this.state.collapseUTMAAccount ? this.setState({ UTMAAccountIcon: ' - ', generalAccountIcon: " + ", IRAAccountIcon: " + " }) : this.setState({ UTMAAccountIcon: ' + ', IRAAccountIcon: " + ", generalAccountIcon: " + " });
                break;
            default:
                break;
        }
    }

    onClickSelectGeneralAccount = (item, index) => () => {
        this.setState({
            selectedGeneralAccIndex: index,
            selectedIRAAccIndex: null,
            selectedUTMAAccIndex: null,
            disableNextButton: false,
            selectedAccountData: {
                selectedAccountName: item.accName,
                selectedAccountNumber: item.accNumber,
                currentValue: item.currentValue,
                holdingValue: item.holdingValue,
                AutoInvPlan: item.AutomaticInvestmentPlan,
                accType: 'General'
            }
        });
    }

    onClickSelectIRAAccount = (item, index) => () => {
        this.setState({
            selectedGeneralAccIndex: null,
            selectedIRAAccIndex: index,
            selectedUTMAAccIndex: null,
            disableNextButton: false,
            selectedAccountData: {
                selectedAccountName: item.accName,
                selectedAccountNumber: item.accNumber,
                currentValue: item.currentValue,
                holdingValue: item.holdingValue,
                AutoInvPlan: item.AutomaticInvestmentPlan,
                accType: 'IRA'
            }
        });
    }

    onClickSelectUTMAAccount = (item, index) => () => {
        this.setState({
            selectedGeneralAccIndex: null,
            selectedIRAAccIndex: null,
            selectedUTMAAccIndex: index,
            disableNextButton: false,
            selectedAccountData: {
                selectedAccountName: item.accName,
                selectedAccountNumber: item.accNumber,
                currentValue: item.currentValue,
                holdingValue: item.holdingValue,
                AutoInvPlan: item.AutomaticInvestmentPlan,
                accType: 'UTMA'
            }
        });
    }

    nextButtonAction = () => {
        console.log('On Click Next Account Selection...');
        const payloadData = {
            selectedAccountName: this.state.selectedAccountData.selectedAccountName,
            selectedAccountNumber: this.state.selectedAccountData.selectedAccountNumber,
            currentValue: this.state.selectedAccountData.currentValue,
            holdingValue: this.state.selectedAccountData.holdingValue,
            AutoInvPlan: this.state.selectedAccountData.AutoInvPlan,
            accType: this.state.selectedAccountData.accType
        };
        // this.props.saveData(payloadData);
        console.log("payloadData---> " + JSON.stringify(payloadData));
        this.props.navigation.navigate('purchaseScreenTwo', { accSelectionScreenData: this.state.selectedAccountData });
    }

    render() {
        const currentPage = 1;
        const totalCount = 4;
        const pageName = gblStrings.liquidation.accountSelectionScreenName;
        if (this.props.purchaseData && this.props.purchaseData.accSelectionData) {
            accSelectionData = this.props.purchaseData.accSelectionData;
        }
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.mainContainer}>
                        <Text style={styles.greyText16px}>{gblStrings.purchase.accountSelection}</Text>

                        <View style={styles.accountTypeFlex}>
                            <View style={styles.generalAccHeaderView}>
                                <View style={styles.headerFlex} onTouchStart={this.onClickExpand("General_Account")}>
                                    <Text style={[styles.headerText, styles.paddingRightStyle]} >{this.state.generalAccountIcon}</Text>
                                    <Text style={styles.headerText}>{gblStrings.liquidation.generalAccountHeading}</Text>
                                </View>
                                <Text style={styles.openAccStyle}>{gblStrings.purchase.openAccount}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={this.state.collapseGeneralAccount} align="center">
                            <FlatList
                                data={accSelectionData.General_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedGeneralAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectGeneralAccount(item, index)}>
                                            <View style={styles.accountDetailsFlex} >
                                                <View style={styles.flexAccDetails1}>
                                                    <View style={styles.accountNumberFlex}>
                                                        <Text style={styles.blackTextBold18px}>{gblStrings.liquidation.accountName} {item.accName}</Text>
                                                        <Text style={styles.blackTextBold18px}>{gblStrings.liquidation.accountNumber}</Text>
                                                        <Text style={styles.blackTextBold18px}>{item.accNumber}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.line} />
                                                <View style={styles.flexAccDetails2}>
                                                    <View style={styles.currentValueflex}>
                                                        <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.currentValue}</Text>
                                                        <Text style={styles.blackText14px}>{item.currentValue}</Text>
                                                    </View>
                                                    <View style={styles.currentValueflex}>
                                                        <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.holding}</Text>
                                                        <Text style={styles.blackText14px}>{item.holdingValue}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.flexAccDetails3}>
                                                    <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.automaticInvestmentPlan}</Text>
                                                    <Text style={styles.blackText14px}>{item.AutomaticInvestmentPlan}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    );
                                }}
                                keyExtractor={x => x.accNumber}
                                extraData={this.state}
                            />
                        </Collapsible>


                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex} onTouchStart={this.onClickExpand("IRA_Account")}>
                                <Text style={[styles.headerText, styles.paddingRightStyle]}>{this.state.IRAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.iraAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={this.state.collapseIRAAccount} align="center">
                            <FlatList
                                data={accSelectionData.IRA_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedIRAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectIRAAccount(item, index)}>
                                            <View style={styles.accountDetailsFlex}>
                                                <View style={styles.flexAccDetails1}>
                                                    <View style={styles.accountNumberFlex}>
                                                        <Text style={styles.blackTextBold18px}>{gblStrings.liquidation.accountName} {item.accName}</Text>
                                                        <Text style={styles.blackTextBold18px}>{gblStrings.liquidation.accountNumber}</Text>
                                                        <Text style={styles.blackTextBold18px}>{item.accNumber}</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.line} />


                                                <View style={styles.flexAccDetails2}>
                                                    <View style={styles.currentValueflex}>
                                                        <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.currentValue}</Text>
                                                        <Text style={styles.blackText14px}>{item.currentValue}</Text>
                                                    </View>
                                                    <View style={styles.currentValueflex}>
                                                        <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.holding}</Text>
                                                        <Text style={styles.blackText14px}>{item.holdingValue}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.flexAccDetails3}>
                                                    <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.automaticInvestmentPlan}</Text>
                                                    <Text style={styles.blackText14px}>{item.AutomaticInvestmentPlan}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    );
                                }}
                                keyExtractor={x => x.accNumber}
                                extraData={this.state}
                            />
                        </Collapsible>


                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex} onTouchStart={this.onClickExpand("UTMA_Account")}>
                                <Text style={[styles.headerText, styles.paddingRightStyle]} >{this.state.UTMAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.utmaAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>

                        <Collapsible collapsed={this.state.collapseUTMAAccount} align="center">
                            <FlatList
                                data={accSelectionData.UTMA_Account}
                                renderItem={this.renderUTMADetails}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedUTMAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectUTMAAccount(item, index)}>
                                            <View style={styles.accountDetailsFlex}>

                                                <View style={styles.flexAccDetails1}>
                                                    <View style={styles.accountNumberFlex}>
                                                        <Text style={styles.blackTextBold18px}>{gblStrings.liquidation.accountName} {item.accName}</Text>
                                                        <Text style={styles.blackTextBold18px}>{gblStrings.liquidation.accountNumber}</Text>
                                                        <Text style={styles.blackTextBold18px}>{item.accNumber}</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.line} />


                                                <View style={styles.flexAccDetails2}>
                                                    <View style={styles.currentValueflex}>
                                                        <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.currentValue}</Text>
                                                        <Text style={styles.blackText14px}>{item.currentValue}</Text>
                                                    </View>
                                                    <View style={styles.currentValueflex}>
                                                        <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.holding}</Text>
                                                        <Text style={styles.blackText14px}>{item.holdingValue}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.flexAccDetails3}>
                                                    <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.automaticInvestmentPlan}</Text>
                                                    <Text style={styles.blackText14px}>{item.AutomaticInvestmentPlan}</Text>
                                                </View>
                                            </View>
                                        </View>

                                    );
                                }}
                                keyExtractor={x => x.accNumber}
                                extraData={this.state}
                            />
                        </Collapsible>

                    </View>

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} >
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.disableNextButton ? styles.submitFlexDisabled : styles.submitFlex} onPress={this.nextButtonAction} disabled={this.state.disableNextButton}>
                            <Text style={styles.submitText}>{gblStrings.common.next}</Text>
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


PurchaseScreenOneComponent.propTypes = {
    purchaseData: PropTypes.instanceOf(Object),
    navigation: PropTypes.instanceOf(Object),
};


export default PurchaseScreenOneComponent;