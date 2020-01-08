import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';

let accSelectionData = {};
let savedData = {};

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
                selectedAccountType: "",
                selectedAccountName: "",
                selectedAccountNumber: "",
                currentValue: "",
                holdingValue: "",
                AutoInvPlan: "",
                accType: "",
            }
        };
    }

    componentDidMount() {
    }

    /* -----------------Button Events --------------------- */

    onClickExpand = (type) => () => {
        const { collapseGeneralAccount, collapseIRAAccount, collapseUTMAAccount } = this.state;
        switch (type) {
            case 'General_Account':
                this.setState(prevState => ({
                    collapseGeneralAccount: !prevState.collapseGeneralAccount,
                    collapseUTMAAccount: true,
                    collapseIRAAccount: true
                }));
                if (collapseGeneralAccount) {
                    this.setState({ generalAccountIcon: ' - ', IRAAccountIcon: " + ", UTMAAccountIcon: " + " });
                } else {
                    this.setState({ generalAccountIcon: ' + ', IRAAccountIcon: " + ", UTMAAccountIcon: " + " });
                }
                break;
            case 'IRA_Account':
                this.setState(prevState => ({
                    collapseIRAAccount: !prevState.collapseIRAAccount,
                    collapseUTMAAccount: true,
                    collapseGeneralAccount: true
                }));
                if (collapseIRAAccount) {
                    this.setState({ IRAAccountIcon: ' - ', generalAccountIcon: " + ", UTMAAccountIcon: " + " });
                } else {
                    this.setState({ IRAAccountIcon: ' + ', generalAccountIcon: " + ", UTMAAccountIcon: " + " });
                }
                break;
            case 'UTMA_Account':
                this.setState(prevState => ({
                    collapseUTMAAccount: !prevState.collapseUTMAAccount,
                    collapseGeneralAccount: true,
                    collapseIRAAccount: true
                }));
                if (collapseUTMAAccount) {
                    this.setState({ UTMAAccountIcon: ' - ', generalAccountIcon: " + ", IRAAccountIcon: " + " });
                } else {
                    this.setState({ UTMAAccountIcon: ' + ', IRAAccountIcon: " + ", generalAccountIcon: " + " });
                }
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
                selectedAccountType: "General",
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
                selectedAccountType: "IRA",
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
                selectedAccountType: "UTMA",
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
        const { selectedAccountData } = this.state;
        const { saveData, navigation } = this.props;
        const payloadData = {
            savePurchaseSelectedData: {
                ...savedData,
                "selectedAccountData": {
                    "accountType": selectedAccountData.selectedAccountType,
                    "accountName": selectedAccountData.selectedAccountName,
                    "accountNumber": selectedAccountData.selectedAccountNumber,
                    "currentValue": selectedAccountData.currentValue,
                    "holdingValue": selectedAccountData.holdingValue,
                    "AutomaticInvestmentPlan": selectedAccountData.AutoInvPlan
                }
            }
        };
        saveData(payloadData);
        navigation.navigate({ routeName: 'purchaseScreenTwo', key: 'purchaseScreenTwo' });
    }

    onClickOpenAccount = () => {
        const { navigation } = this.props;
        navigation.navigate({ routeName: 'termsAndConditions', key: 'termsAndConditions' });
    }

    /* -----------------FlatList Events --------------------- */

    renderGeneralAccount = ({ item, index }) => {
        const { selectedGeneralAccIndex } = this.state;
        return (
            <View style={(selectedGeneralAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectGeneralAccount(item, index)}>
                <View style={styles.accountDetailsFlex}>
                    <View style={styles.flexAccDetails1}>
                        <View style={styles.accountNumberFlex}>
                            <Text style={styles.blackTextBold18px}>{gblStrings.purchase.accountName} {item.accName}</Text>
                            <Text style={styles.blackTextBold18px}>{gblStrings.purchase.accountNumber}</Text>
                            <Text style={styles.blackTextBold18px}>{item.accNumber}</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.flexAccDetails2}>
                        <View style={styles.currentValueflex}>
                            <Text style={styles.blackTextBold14px}>{gblStrings.purchase.currentValue}</Text>
                            <Text style={styles.blackText14px}>{item.currentValue}</Text>
                        </View>
                        <View style={styles.currentValueflex}>
                            <Text style={styles.blackTextBold14px}>{gblStrings.purchase.holding}</Text>
                            <Text style={styles.blackText14px}>{item.holdingValue}</Text>
                        </View>
                    </View>
                    <View style={styles.flexAccDetails3}>
                        <Text style={styles.blackTextBold14px}>{gblStrings.purchase.automaticInvPlan}</Text>
                        <Text style={styles.blackText14px}>{item.AutomaticInvestmentPlan}</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderIraAccount = ({ item, index }) => {
        const { selectedIRAAccIndex } = this.state;
        return (
            <View style={(selectedIRAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectIRAAccount(item, index)}>
                <View style={styles.accountDetailsFlex}>
                    <View style={styles.flexAccDetails1}>
                        <View style={styles.accountNumberFlex}>
                            <Text style={styles.blackTextBold18px}>{gblStrings.purchase.accountName} {item.accName}</Text>
                            <Text style={styles.blackTextBold18px}>{gblStrings.purchase.accountNumber}</Text>
                            <Text style={styles.blackTextBold18px}>{item.accNumber}</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.flexAccDetails2}>
                        <View style={styles.currentValueflex}>
                            <Text style={styles.blackTextBold14px}>{gblStrings.purchase.currentValue}</Text>
                            <Text style={styles.blackText14px}>{item.currentValue}</Text>
                        </View>
                        <View style={styles.currentValueflex}>
                            <Text style={styles.blackTextBold14px}>{gblStrings.purchase.holding}</Text>
                            <Text style={styles.blackText14px}>{item.holdingValue}</Text>
                        </View>
                    </View>
                    <View style={styles.flexAccDetails3}>
                        <Text style={styles.blackTextBold14px}>{gblStrings.purchase.automaticInvPlan}</Text>
                        <Text style={styles.blackText14px}>{item.AutomaticInvestmentPlan}</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderUtmaAccount = ({ item, index }) => {
        const { selectedUTMAAccIndex } = this.state;
        return (
            <View style={(selectedUTMAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectUTMAAccount(item, index)}>
                <View style={styles.accountDetailsFlex}>
                    <View style={styles.flexAccDetails1}>
                        <View style={styles.accountNumberFlex}>
                            <Text style={styles.blackTextBold18px}>{gblStrings.purchase.accountName} {item.accName}</Text>
                            <Text style={styles.blackTextBold18px}>{gblStrings.purchase.accountNumber}</Text>
                            <Text style={styles.blackTextBold18px}>{item.accNumber}</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.flexAccDetails2}>
                        <View style={styles.currentValueflex}>
                            <Text style={styles.blackTextBold14px}>{gblStrings.purchase.currentValue}</Text>
                            <Text style={styles.blackText14px}>{item.currentValue}</Text>
                        </View>
                        <View style={styles.currentValueflex}>
                            <Text style={styles.blackTextBold14px}>{gblStrings.purchase.holding}</Text>
                            <Text style={styles.blackText14px}>{item.holdingValue}</Text>
                        </View>
                    </View>
                    <View style={styles.flexAccDetails3}>
                        <Text style={styles.blackTextBold14px}>{gblStrings.purchase.automaticInvPlan}</Text>
                        <Text style={styles.blackText14px}>{item.AutomaticInvestmentPlan}</Text>
                    </View>
                </View>
            </View>
        );
    }


    generateKeyGeneral = (x) => x.accNumber;

    generateKeyIRA = (x) => x.accNumber;

    generateKeyUTMA = (x) => x.accNumber;

    render() {
        const currentPage = 1;
        const totalCount = 4;
        const pageName = `${currentPage} - ${gblStrings.purchase.accountSelection}`;
        const { disableNextButton, generalAccountIcon, collapseGeneralAccount, UTMAAccountIcon, collapseUTMAAccount, IRAAccountIcon, collapseIRAAccount } = this.state;
        const { purchaseData, navigation } = this.props;
        if (this.props && purchaseData && purchaseData.accSelectionData) {
            accSelectionData = purchaseData.accSelectionData;
            savedData = purchaseData.savePurchaseSelectedData;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.mainContainer}>
                        <Text style={styles.greyText16px}>{gblStrings.liquidation.fundSourceContext}</Text>

                        {/* ---------------------------- General Account  --------------------------------- */}

                        <View style={styles.accountTypeFlex}>
                            <View style={styles.generalAccHeaderView}>
                                <View style={styles.headerFlex} onTouchStart={this.onClickExpand("General_Account")}>
                                    <Text style={styles.headerIconText}>{generalAccountIcon}</Text>
                                    <Text style={styles.headerText}>{gblStrings.liquidation.generalAccountHeading}</Text>
                                </View>
                                <TouchableOpacity onPress={this.onClickOpenAccount}>
                                    <Text style={styles.openAccStyle}>{gblStrings.purchase.openAccount}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={collapseGeneralAccount} align="center">
                            <FlatList
                                data={accSelectionData.General_Account}
                                renderItem={this.renderGeneralAccount}
                                keyExtractor={this.generateKeyGeneral}
                                extraData={this.state}
                            />
                        </Collapsible>

                        {/* ---------------------------- IRA Account  --------------------------------- */}
                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex} onTouchStart={this.onClickExpand("IRA_Account")}>
                                <Text style={styles.headerIconText}>{IRAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.iraAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={collapseIRAAccount} align="center">
                            <FlatList
                                data={accSelectionData.IRA_Account}
                                renderItem={this.renderIraAccount}
                                keyExtractor={this.generateKeyIRA}
                                extraData={this.state}
                            />
                        </Collapsible>

                        {/* ---------------------------- UTMA Account  --------------------------------- */}
                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex} onTouchStart={this.onClickExpand("UTMA_Account")}>
                                <Text style={styles.headerIconText}>{UTMAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.utmaAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={collapseUTMAAccount} align="center">
                            <FlatList
                                data={accSelectionData.UTMA_Account}
                                renderItem={this.renderUtmaAccount}
                                keyExtractor={this.generateKeyUTMA}
                                extraData={this.state}
                            />
                        </Collapsible>

                    </View>

                    {/* ------------------------ Button View ----------------------------- */}

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={disableNextButton ? styles.submitFlexDisabled : styles.submitFlex} onPress={this.nextButtonAction} disabled={disableNextButton}>
                            <Text style={styles.submitText}>{gblStrings.common.next}</Text>
                        </TouchableOpacity>
                    </View>

                    { /* ----------- Disclaimer -------------------*/}

                    <GFooterSettingsComponent />

                </ScrollView>
            </View>

        );
    }
}


PurchaseScreenOneComponent.propTypes = {
    purchaseData: PropTypes.instanceOf(Object),
    navigation: PropTypes.instanceOf(Object),
    saveData: PropTypes.func
};


PurchaseScreenOneComponent.defaultProps = {
    purchaseData: {},
    navigation: {},
    saveData: () => { }
};
export default PurchaseScreenOneComponent;