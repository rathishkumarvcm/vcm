import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';

let accSelectionData = {};
let savedData = {};

class LiquidationPageOneComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generalAccountIcon: '+   ',
            IRAAccountIcon: '+   ',
            UTMAAccountIcon: '+   ',
            collapseGeneralAccount: true,
            collapseIRAAccount: true,
            collapseUTMAAccount: true,
            selectedGeneralAccIndex: null,
            selectedIRAAccIndex: null,
            selectedUTMAAccIndex: null,
            disableNextButton: true,
            selectedAccountData: {
                accountType: '',
                accountName: '',
                accountNumber: '',
                currentValue: '',
                holdingValue: '',
                AutomaticInvestmentPlan: '',
            }
        };
    }

    onClickExpandGeneralAccount = () => {
        this.setState({
            collapseGeneralAccount: !this.state.collapseGeneralAccount,
            collapseUTMAAccount: true,
            collapseIRAAccount: true
        });
        (this.state.collapseGeneralAccount ?
            this.setState({ generalAccountIcon: "-    ", IRAAccountIcon: "+   ", UTMAAccountIcon: "+   " }) : this.setState({ generalAccountIcon: "+   ", IRAAccountIcon: "+   ", UTMAAccountIcon: "+   " }));
    }
    onClickExpandIRAAccount = () => {
        this.setState({
            collapseIRAAccount: !this.state.collapseIRAAccount,
            collapseUTMAAccount: true,
            collapseGeneralAccount: true
        });
        (this.state.collapseIRAAccount ?
            this.setState({ IRAAccountIcon: "-    ", generalAccountIcon: "+   ", UTMAAccountIcon: "+   " }) : this.setState({ generalAccountIcon: "+   ", IRAAccountIcon: "+   ", UTMAAccountIcon: "+   " }));
    }
    onClickExpandUTMAAccount = () => {
        this.setState({
            collapseUTMAAccount: !this.state.collapseUTMAAccount,
            collapseIRAAccount: true,
            collapseGeneralAccount: true
        });
        (this.state.collapseUTMAAccount ?
            this.setState({ UTMAAccountIcon: "-    ", generalAccountIcon: "+   ", IRAAccountIcon: "+   " }) : this.setState({ generalAccountIcon: "+   ", IRAAccountIcon: "+   ", UTMAAccountIcon: "+   " }));
    }

    onClickSelectGeneralAccount = (item, index) => () => {
        this.setState({
            selectedGeneralAccIndex: index,
            selectedIRAAccIndex: null,
            selectedUTMAAccIndex: null,
            disableNextButton: false,
            selectedAccountData: {
                accountName: item.accName,
                accountNumber: item.accNumber,
                currentValue: item.currentValue,
                holdingValue: item.holdingValue,
                AutomaticInvestmentPlan: item.AutomaticInvestmentPlan,
                accountType: 'General'
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
                accountName: item.accName,
                accountNumber: item.accNumber,
                currentValue: item.currentValue,
                holdingValue: item.holdingValue,
                AutomaticInvestmentPlan: item.AutomaticInvestmentPlan,
                accountType: 'IRA'
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
                accountType: 'UTMA',
                accountName: item.accName,
                accountNumber: item.accNumber,
                currentValue: item.currentValue,
                holdingValue: item.holdingValue,
                AutomaticInvestmentPlan: item.AutomaticInvestmentPlan,
            }
        });
    }

    nextButtonAction = () => {
        console.log('On Click Next Account Selection...');
        const payloadData = {
            saveLiquidationSelectedData: {
                ...savedData,
                "selectedAccountData": {
                    "accountType": this.state.selectedAccountData.accountType,
                    "accountName": this.state.selectedAccountData.accountName,
                    "accountNumber": this.state.selectedAccountData.accountNumber,
                    "currentValue": this.state.selectedAccountData.currentValue,
                    "holdingValue": this.state.selectedAccountData.holdingValue,
                    "AutomaticInvestmentPlan": this.state.selectedAccountData.AutomaticInvestmentPlan
                }
            }
        };
        this.props.saveData(payloadData);
        console.log("Account Selection payloadData---> " + JSON.stringify(payloadData));
        this.props.navigation.navigate({ routeName: 'LiquidationPageTwo', key: 'LiquidationPageTwo' });
    }

    noItemDisplay = () => {
        return (
            <View style={styles.noRecordsFlex}>
                <Text style={styles.blackText14px}>No accounts available</Text>
            </View>
        )
    }

    componentDidMount() {
       // console.log("Page One Compoennt componentDidMount --> " + JSON.stringify(this.props));
    }

    render() {
        const currentPage = 1;
        const totalCount = 4;
        const pageName = gblStrings.liquidation.accountSelectionScreenName;
        if (this.props.liquidationInitialState && this.props.liquidationInitialState.accSelectionData) {
            accSelectionData = this.props.liquidationInitialState.accSelectionData;
            savedData = this.props.liquidationInitialState.saveLiquidationSelectedData;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity onPress={this.goBack}>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>

                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.flex1}>

                        <Text style={styles.greyText16px}>{gblStrings.liquidation.accountSelectionContent}</Text>

                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex}>
                                <Text style={styles.headerText} onPress={this.onClickExpandGeneralAccount}>{this.state.generalAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.generalAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={this.state.collapseGeneralAccount} align="center">
                            <FlatList
                                data={this.props.liquidationInitialState.accSelectionData.General_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedGeneralAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectGeneralAccount(item, index)}>
                                            <View style={styles.accountDetailsFlex}>
                                                <View style={styles.flexAccDetails1}>
                                                    <View style={styles.iconStyle}>
                                                        <GIcon
                                                            name="closesquareo"
                                                            type="antdesign"
                                                            size={40}
                                                            color="#BBB3B3"
                                                        />
                                                    </View>

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
                                ListEmptyComponent={this.noItemDisplay}
                            />
                        </Collapsible>


                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex}>
                                <Text style={styles.headerText} onPress={this.onClickExpandIRAAccount}>{this.state.IRAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.iraAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={this.state.collapseIRAAccount} align="center">
                            <FlatList
                                data={this.props.liquidationInitialState.accSelectionData.IRA_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedIRAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectIRAAccount(item, index)}>
                                            <View style={styles.accountDetailsFlex}>
                                                <View style={styles.flexAccDetails1}>
                                                    <View style={styles.iconStyle}>
                                                        <GIcon
                                                            name="closesquareo"
                                                            type="antdesign"
                                                            size={40}
                                                            color="#BBB3B3"
                                                        />
                                                    </View>

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
                                ListEmptyComponent={this.noItemDisplay}
                            />
                        </Collapsible>


                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex}>
                                <Text style={styles.headerText} onPress={this.onClickExpandUTMAAccount}>{this.state.UTMAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.utmaAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>

                        <Collapsible collapsed={this.state.collapseUTMAAccount} align="center">
                            <FlatList
                                data={this.props.liquidationInitialState.accSelectionData.UTMA_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedUTMAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectUTMAAccount(item, index)}>
                                            <View style={styles.accountDetailsFlex}>

                                                <View style={styles.flexAccDetails1}>
                                                    <View style={styles.iconStyle}>
                                                        <GIcon
                                                            name="closesquareo"
                                                            type="antdesign"
                                                            size={40}
                                                            color="#BBB3B3"
                                                        />
                                                    </View>

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
                                ListEmptyComponent={this.noItemDisplay}
                            />
                        </Collapsible>

                    </View>

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
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


LiquidationPageOneComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    liquidationInitialState: PropTypes.instanceOf(Object),
    saveData: PropTypes.func,
};

LiquidationPageOneComponent.defaultProps = {

};
export default LiquidationPageOneComponent;