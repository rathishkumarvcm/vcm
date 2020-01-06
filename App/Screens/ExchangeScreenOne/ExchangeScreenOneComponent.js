import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';

let accSelectionData = {};
let savedData = {};

class ExchangeScreenOneComponent extends Component {

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
            },
        };
    }

    componentDidMount() {
    }

    onClickExpand = (type) => () => {
        switch (type) {
            case 'General_Account':
                this.setState(prevState => ({
                    collapseGeneralAccount: !prevState.collapseGeneralAccount,
                    collapseUTMAAccount: true,
                    collapseIRAAccount: true
                }));
                if (this.state.collapseGeneralAccount) {
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
                if (this.state.collapseIRAAccount) {
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
                if (this.state.collapseUTMAAccount) {
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
            },
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
            },
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
            },
        });
    }

    nextButtonAction = () => {
        const payloadData = {
            saveExchangeSelectedData: {
                ...savedData,
                "selectedAccountData": {
                    "accountType": this.state.selectedAccountData.selectedAccountType,
                    "accountName": this.state.selectedAccountData.selectedAccountName,
                    "accountNumber": this.state.selectedAccountData.selectedAccountNumber,
                    "currentValue": this.state.selectedAccountData.currentValue,
                    "holdingValue": this.state.selectedAccountData.holdingValue,
                    "AutomaticInvestmentPlan": this.state.selectedAccountData.AutoInvPlan
                },
            }
        };
        this.props.saveData(payloadData);
        this.props.navigation.navigate('exchangeScreenTwo');
    }

    render() {
        const currentPage = 1;
        const totalCount = 4;
        const pageName = `${currentPage} - ${gblStrings.exchange.accountSelection}`;

        if (this.props.exchangeData && this.props.exchangeData.accSelectionData) {
            accSelectionData = this.props.exchangeData.accSelectionData;
            savedData = this.props.exchangeData.savePurchaseSelectedData;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.mainContainer}>
                        <Text style={styles.greyText16px}>{gblStrings.liquidation.fundSourceContext}</Text>

                        {/* ---------------------------- General Account  --------------------------------- */}

                        <View style={styles.accountTypeFlex}>
                            <View style={styles.generalAccHeaderView}>
                                <View style={styles.headerFlex} onTouchStart={this.onClickExpand("General_Account")}>
                                    <Text style={styles.headerIconText}>{this.state.generalAccountIcon}</Text>
                                    <Text style={styles.headerText}>{gblStrings.liquidation.generalAccountHeading}</Text>
                                </View>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={this.state.collapseGeneralAccount} align="center">
                            <FlatList
                                data={accSelectionData.General_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedGeneralAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectGeneralAccount(item, index)}>
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
                                }}
                                keyExtractor={x => x.accNumber}
                                extraData={this.state}
                            />
                        </Collapsible>

                        {/* ---------------------------- IRA Account  --------------------------------- */}
                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex} onTouchStart={this.onClickExpand("IRA_Account")}>
                                <Text style={styles.headerIconText}>{this.state.IRAAccountIcon}</Text>
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
                                }}
                                keyExtractor={x => x.accNumber}
                                extraData={this.state}
                            />
                        </Collapsible>

                        {/* ---------------------------- UTMA Account  --------------------------------- */}
                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex} onTouchStart={this.onClickExpand("UTMA_Account")}>
                                <Text style={styles.headerIconText}>{this.state.UTMAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.utmaAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={this.state.collapseUTMAAccount} align="center">
                            <FlatList
                                data={accSelectionData.UTMA_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedUTMAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectUTMAAccount(item, index)}>
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
                                }}
                                keyExtractor={x => x.accNumber}
                                extraData={this.state}
                            />
                        </Collapsible>

                    </View>

                    {/* ------------------------ Button View ----------------------------- */}

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.disableNextButton ? styles.submitFlexDisabled : styles.submitFlex} onPress={this.nextButtonAction} disabled={this.state.disableNextButton}>
                            <Text style={styles.submitText}>{gblStrings.common.next}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ------------------------ Footer View ----------------------------- */}
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


ExchangeScreenOneComponent.propTypes = {
    exchangeData: PropTypes.instanceOf(Object),
    navigation: PropTypes.instanceOf(Object),
    saveData: PropTypes.func
};


ExchangeScreenOneComponent.defaultProps = {
    exchangeData: {},
    navigation: {},
    saveData: () => { }
};
export default ExchangeScreenOneComponent;