import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';

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
    
    componentDidMount() {
        // console.log(" Screen 1 componentdidmount " + JSON.stringify(this.props.liquidationInitialState.saveLiquidationSelectedData));
    }

    onClickExpandGeneralAccount = () => {
        const { collapseGeneralAccount } = this.state;
        this.setState(prevState => ({
            collapseGeneralAccount: !prevState.collapseGeneralAccount,
            collapseUTMAAccount: true,
            collapseIRAAccount: true
        }));
        (collapseGeneralAccount ?
            this.setState({ generalAccountIcon: "-    ", IRAAccountIcon: "+   ", UTMAAccountIcon: "+   " }) : 
            this.setState({ generalAccountIcon: "+   ", IRAAccountIcon: "+   ", UTMAAccountIcon: "+   " }));
    }

    onClickExpandIRAAccount = () => {
        const { collapseIRAAccount } = this.state;
        this.setState(prevState => ({
            collapseIRAAccount: !prevState.collapseIRAAccount,
            collapseUTMAAccount: true,
            collapseGeneralAccount: true
        }));
        (collapseIRAAccount ?
            this.setState({ IRAAccountIcon: "-    ", generalAccountIcon: "+   ", UTMAAccountIcon: "+   " }) : this.setState({ generalAccountIcon: "+   ", IRAAccountIcon: "+   ", UTMAAccountIcon: "+   " }));
    }

    onClickExpandUTMAAccount = () => {
        const { collapseUTMAAccount } = this.state;
        this.setState(prevState => ({
            collapseUTMAAccount: !prevState.collapseUTMAAccount,
            collapseIRAAccount: true,
            collapseGeneralAccount: true
        }));
        (collapseUTMAAccount ?
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
        const { navigation,saveData } = this.props;
        const { navigate } = navigation; 
        const { selectedAccountData } = this.state;
        const payloadData = {
            saveLiquidationSelectedData: {
                ...savedData,
                "selectedAccountData": {
                    "accountType": selectedAccountData.accountType,
                    "accountName": selectedAccountData.accountName,
                    "accountNumber": selectedAccountData.accountNumber,
                    "currentValue": selectedAccountData.currentValue,
                    "holdingValue": selectedAccountData.holdingValue,
                    "AutomaticInvestmentPlan": selectedAccountData.AutomaticInvestmentPlan
                }
            }
        };
        saveData(payloadData);
        navigate({ routeName: 'LiquidationPageTwo', key: 'LiquidationPageTwo' });
    }
    
    noItemDisplay = () => {
        return (
            <View style={styles.noRecordsFlex}>
                <Text style={styles.blackText14px}>No accounts available</Text>
            </View>
        );
    }

    render() {
        const currentPage = 1;
        const totalCount = 4;
        const pageName = gblStrings.liquidation.accountSelectionScreenName;
        const { navigation, liquidationInitialState } = this.props;
        const { collapseGeneralAccount,selectedGeneralAccIndex,generalAccountIcon,collapseIRAAccount,selectedIRAAccIndex,IRAAccountIcon,collapseUTMAAccount,selectedUTMAAccIndex,UTMAAccountIcon,disableNextButton } = this.state;
        if (liquidationInitialState && liquidationInitialState.accSelectionData) {
            savedData = liquidationInitialState.saveLiquidationSelectedData;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
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
                                <Text style={styles.headerText} onPress={this.onClickExpandGeneralAccount}>{generalAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.generalAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={collapseGeneralAccount} align="center">
                            <FlatList
                                data={liquidationInitialState.accSelectionData.General_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(selectedGeneralAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectGeneralAccount(item, index)}>
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
                                <Text style={styles.headerText} onPress={this.onClickExpandIRAAccount}>{IRAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.iraAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                        <Collapsible collapsed={collapseIRAAccount} align="center">
                            <FlatList
                                data={liquidationInitialState.accSelectionData.IRA_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(selectedIRAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectIRAAccount(item, index)}>
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
                                <Text style={styles.headerText} onPress={this.onClickExpandUTMAAccount}>{UTMAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.utmaAccountHeading}</Text>
                            </View>
                            <View style={styles.line} />
                        </View>

                        <Collapsible collapsed={collapseUTMAAccount} align="center">
                            <FlatList
                                data={liquidationInitialState.accSelectionData.UTMA_Account}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(selectedUTMAAccIndex === index) ? styles.accountDetailsFlexSelected : styles.accountDetailsFlexUnSelected} onTouchStart={this.onClickSelectUTMAAccount(item, index)}>
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
                        <TouchableOpacity style={disableNextButton ? styles.submitFlexDisabled : styles.submitFlex} onPress={this.nextButtonAction} disabled={disableNextButton}>
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
    navigation: {},
    liquidationInitialState: {},
    saveData: () => { }
};
export default LiquidationPageOneComponent;