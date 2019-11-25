import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent, GSwitchComponent } from '../../CommonComponents';
import PropTypes from 'prop-types';
import gblStrings from '../../Constants/GlobalStrings';

class AccountMessagingAdviceComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,

            retirementExpand: true,
            retirementTouchDisabled: true,

            financeExpand: false,
            financeTouchDisabled: false,

            familyExpand: false,
            familyTouchDisabled: false,

            militaryExpand: false,
            militaryTouchDisabled: false,

            gettingStartedSwitchOn: false,
            gettingStartedSwitchOff: true,

            livingSwitchOn: false,
            livingSwitchOff: true,

            growingSwitchOn: false,
            growingSwitchOff: true,

            eastPlanningSwitchOn: false,
            eastPlanningSwitchOff: true,

            taxCenterSwitchOn: false,
            taxCenterSwitchOff: true,

            understandingInvestSwitchOn: false,
            understandingInvestSwitchOff: true,

            saveBudgetSwitchOn: false,
            saveBudgetSwitchOff: true,

            debtCreditSwitchOn: false,
            debtCreditSwitchOff: true,

            financialSetSwitchOn: false,
            financialSetSwitchOff: true,

            getMarriedSwitchOn: false,
            getMarriedSwitchOff: true,

            becomeParentSwitchOn: false,
            becomeParentSwitchOff: true,

            parentingSwitchOn: false,
            parentingSwitchOff: true,

            youngAdultSwitchOn: false,
            youngAdultSwitchOff: true,

            getDivorceSwitchOn: false,
            getDivorceSwitchOff: true,

            lossOfLovedSwitchOn: false,
            lossOfLovedSwitchOff: true,

            lifeInsuranceSwitchOn: false,
            lifeInsuranceSwitchOff: true,

            healthInsuranceSwitchOn: false,
            healthInsuranceSwitchOff: true,

            joiningMilitarySwitchOn: false,
            joiningMilitarySwitchOff: true,

            deploymentSwitchOn: false,
            deploymentSwitchOff: true,

            pcsSwitchOn: false,
            pcsSwitchOff: true,

            leaveMilitarySwitchOn: false,
            leaveMilitarySwitchOff: true,
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigategeneralSettings = () => this.props.navigation.navigate('generalSettings');

    componentDidMount() {
    }

    setStateUpdates = (fromlist) => () => {
        switch (fromlist) {
            case 'retirement':
                if (this.state.retirementExpand) {
                    this.setState({
                        retirementExpand: false,
                        retirementTouchDisabled: false,

                        financeExpand: true,
                        financeTouchDisabled: true,

                        familyExpand: true,
                        familyTouchDisabled: true,

                        militaryExpand: true,
                        militaryTouchDisabled: true
                    });
                } else if (!this.state.retirementExpand) {
                    this.setState({
                        retirementExpand: true,
                        retirementTouchDisabled: true,

                        financeExpand: false,
                        financeTouchDisabled: false,

                        familyExpand: false,
                        familyTouchDisabled: false,

                        militaryExpand: false,
                        militaryTouchDisabled: false
                    });
                }
                break;
            case 'personalfinance':
                if (!this.state.financeExpand) {
                    this.setState({
                        retirementExpand: false,
                        retirementTouchDisabled: false,

                        financeExpand: true,
                        financeTouchDisabled: true,

                        familyExpand: false,
                        familyTouchDisabled: false,

                        militaryExpand: false,
                        militaryTouchDisabled: false
                    });
                } else if (this.state.financeExpand) {
                    this.setState({
                        retirementExpand: true,
                        retirementTouchDisabled: true,

                        financeExpand: false,
                        financeTouchDisabled: false,

                        familyExpand: false,
                        familyTouchDisabled: false,

                        militaryExpand: false,
                        militaryTouchDisabled: false
                    });
                }
                break;
            case 'familylife':
                if (!this.state.familyExpand) {
                    this.setState({
                        retirementExpand: false,
                        retirementTouchDisabled: false,

                        financeExpand: false,
                        financeTouchDisabled: false,

                        familyExpand: true,
                        familyTouchDisabled: true,

                        militaryExpand: false,
                        militaryTouchDisabled: false
                    });
                } else if (this.state.familyExpand) {
                    this.setState({
                        retirementExpand: true,
                        retirementTouchDisabled: true,

                        financeExpand: false,
                        financeTouchDisabled: false,

                        familyExpand: false,
                        familyTouchDisabled: false,

                        militaryExpand: false,
                        militaryTouchDisabled: false
                    });
                }
                break;
            case 'militarylife':
                if (!this.state.militaryExpand) {
                    this.setState({
                        retirementExpand: false,
                        retirementTouchDisabled: false,

                        financeExpand: false,
                        financeTouchDisabled: false,

                        familyExpand: false,
                        familyTouchDisabled: false,

                        militaryExpand: true,
                        militaryTouchDisabled: true
                    });
                } else if (this.state.militaryExpand) {
                    this.setState({
                        retirementExpand: true,
                        retirementTouchDisabled: true,

                        financeExpand: false,
                        financeTouchDisabled: false,

                        familyExpand: false,
                        familyTouchDisabled: false,

                        militaryExpand: false,
                        militaryTouchDisabled: false
                    });
                }
                break;
        }
    }

    switchOnOffStateUpdates = (fromView, flag) => () =>{
        switch (fromView) {
            case 'gettingStarted':
                if (flag) this.setState({ gettingStartedSwitchOn: true, gettingStartedSwitchOff: false });
                else this.setState({ gettingStartedSwitchOn: false, gettingStartedSwitchOff: true });
                break;
            case 'living':
                if (flag) this.setState({ livingSwitchOn: true, livingSwitchOff: false });
                else this.setState({ livingSwitchOn: false, livingSwitchOff: true });
                break;
            case 'growing':
                if (flag) this.setState({ growingSwitchOn: true, growingSwitchOff: false });
                else this.setState({ growingSwitchOn: false, growingSwitchOff: true });
                break;
            case 'eastPlanning':
                if (flag) this.setState({ eastPlanningSwitchOn: true, eastPlanningSwitchOff: false });
                else this.setState({ eastPlanningSwitchOn: false, eastPlanningSwitchOff: true });
                break;
            case 'taxCenter':
                if (flag) this.setState({ taxCenterSwitchOn: true, taxCenterSwitchOff: false });
                else this.setState({ taxCenterSwitchOn: false, taxCenterSwitchOff: true });
                break;
            case 'understandingInvest':
                if (flag) this.setState({ understandingInvestSwitchOn: true, understandingInvestSwitchOff: false });
                else this.setState({ understandingInvestSwitchOn: false, understandingInvestSwitchOff: true });
                break;
            case 'saveBudget':
                if (flag) this.setState({ saveBudgetSwitchOn: true, saveBudgetSwitchOff: false });
                else this.setState({ saveBudgetSwitchOn: false, saveBudgetSwitchOff: true });
                break;
            case 'debtCredit':
                if (flag) this.setState({ debtCreditSwitchOn: true, debtCreditSwitchOff: false });
                else this.setState({ debtCreditSwitchOn: false, debtCreditSwitchOff: true });
                break;
            case 'financialSet':
                if (flag) this.setState({ financialSetSwitchOn: true, financialSetSwitchOff: false });
                else this.setState({ financialSetSwitchOn: false, financialSetSwitchOff: true });
                break;
            case 'getMarried':
                if (flag) this.setState({ getMarriedSwitchOn: true, getMarriedSwitchOff: false });
                else this.setState({ getMarriedSwitchOn: false, getMarriedSwitchOff: true });
                break;
            case 'becomeParent':
                if (flag) this.setState({ becomeParentSwitchOn: true, becomeParentSwitchOff: false });
                else this.setState({ becomeParentSwitchOn: false, becomeParentSwitchOff: true });
                break;
            case 'parenting':
                if (flag) this.setState({ parentingSwitchOn: true, parentingSwitchOff: false });
                else this.setState({ parentingSwitchOn: false, parentingSwitchOff: true });
                break;
            case 'youngAdult':
                if (flag) this.setState({ youngAdultSwitchOn: true, youngAdultSwitchOff: false });
                else this.setState({ youngAdultSwitchOn: false, youngAdultSwitchOff: true });
                break;
            case 'getDivorce':
                if (flag) this.setState({ getDivorceSwitchOn: true, getDivorceSwitchOff: false });
                else this.setState({ getDivorceSwitchOn: false, getDivorceSwitchOff: true });
                break;
            case 'lossOfLoved':
                if (flag) this.setState({ lossOfLovedSwitchOn: true, lossOfLovedSwitchOff: false });
                else this.setState({ lossOfLovedSwitchOn: false, lossOfLovedSwitchOff: true });
                break;
            case 'lifeInsurance':
                if (flag) this.setState({ lifeInsuranceSwitchOn: true, lifeInsuranceSwitchOff: false });
                else this.setState({ lifeInsuranceSwitchOn: false, lifeInsuranceSwitchOff: true });
                break;
            case 'healthInsurance':
                if (flag) this.setState({ healthInsuranceSwitchOn: true, healthInsuranceSwitchOff: false });
                else this.setState({ healthInsuranceSwitchOn: false, healthInsuranceSwitchOff: true });
                break;
            case 'joiningMilitary':
                if (flag) this.setState({ joiningMilitarySwitchOn: true, joiningMilitarySwitchOff: false });
                else this.setState({ joiningMilitarySwitchOn: false, joiningMilitarySwitchOff: true });
                break;
            case 'deployment':
                if (flag) this.setState({ deploymentSwitchOn: true, deploymentSwitchOff: false });
                else this.setState({ deploymentSwitchOn: false, deploymentSwitchOff: true });
                break;
            case 'pcs':
                if (flag) this.setState({ pcsSwitchOn: true, pcsSwitchOff: false });
                else this.setState({ pcsSwitchOn: false, pcsSwitchOff: true });
                break;
            case 'leaveMilitary':
                if (flag) this.setState({ leaveMilitarySwitchOn: true, leaveMilitarySwitchOff: false });
                else this.setState({ leaveMilitarySwitchOn: false, leaveMilitarySwitchOff: true });
                break;
        }
    }    

    saveButtonAction = () =>{
       console.log('Save Button Clicked...');      
    }

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
                />
                <ScrollView style={{ flex: 0.85 }}>
                    <View style={styles.settingsView}>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.navigategeneralSettings}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.settingAccountMessaging.setting}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.settingAccountMessaging.accountMessagingArrow}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.settingsInfoCurrent}>
                            {gblStrings.settingAccountMessaging.accountMessagingAdviceArrow}
                        </Text>
                    </View>

                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.settingAccountMessaging.adviceTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingAccountMessaging.accountMessagingAdviceTitleDesc}
                        </Text>
                    </View>

                    <View style={styles.advicecontainer}>
                        <TouchableOpacity style={styles.touchOpacityPosition} disabled={this.state.retirementTouchDisabled} onPress={this.setStateUpdates('retirement')}>
                            <View style={styles.adviceHeaderview}>

                                {this.state.retirementExpand ?
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    /> :
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                }

                                <Text style={styles.adviceHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceRetirement}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                    (this.state.retirementExpand) ?           
                        <View style={styles.adviceContainerBottom}>
                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceGettingStarted}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('gettingStarted', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('gettingStarted', false)}
                                switchOn={this.state.gettingStartedSwitchOn}
                                switchOff={this.state.gettingStartedSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                            <View style={styles.lineBorder} />

                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceLivingRetirement}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('living', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('living', false)}
                                switchOn={this.state.livingSwitchOn}
                                switchOff={this.state.livingSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />

                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceGrowingRetirement}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('growing', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('growing', false)}
                                switchOn={this.state.growingSwitchOn}
                                switchOff={this.state.growingSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                            <View style={styles.lineBorder} />

                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceEastPlanning}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('eastPlanning', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('eastPlanning', false)}
                                switchOn={this.state.eastPlanningSwitchOn}
                                switchOff={this.state.eastPlanningSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>     
                    : null
                    }        

                    <View style={styles.advicecontainer}>
                        <TouchableOpacity style={styles.touchOpacityPosition} disabled={this.state.financeTouchDisabled} onPress={this.setStateUpdates('personalfinance')}>
                            <View style={styles.adviceHeaderview}>
                                {this.state.financeExpand ?
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    /> :
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                }
                                <Text style={styles.adviceHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdvicePersonalFinance}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                        (this.state.financeExpand) ?
                        <View style={styles.adviceContainerBottom}>
                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceTaxCenter}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('taxCenter', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('taxCenter', false)}
                                switchOn={this.state.taxCenterSwitchOn}
                                switchOff={this.state.taxCenterSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                            <View style={styles.lineBorder} />

                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceUnderstandInvest}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('understandingInvest', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('understandingInvest', false)}
                                switchOn={this.state.understandingInvestSwitchOn}
                                switchOff={this.state.understandingInvestSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                            <View style={styles.lineBorder} />

                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceSavingBudget}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('saveBudget', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('saveBudget', false)}
                                switchOn={this.state.saveBudgetSwitchOn}
                                switchOff={this.state.saveBudgetSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                            <View style={styles.lineBorder} />

                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceDebtCredit}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('debtCredit', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('debtCredit', false)}
                                switchOn={this.state.debtCreditSwitchOn}
                                switchOff={this.state.debtCreditSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                            <View style={styles.lineBorder} />

                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceFinancialSet}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('financialSet', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('financialSet', false)}
                                switchOn={this.state.financialSetSwitchOn}
                                switchOff={this.state.financialSetSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                        : null
                    }

                    <View style={styles.advicecontainer}>
                        <TouchableOpacity style={styles.touchOpacityPosition} disabled={this.state.familyTouchDisabled} onPress={this.setStateUpdates('familylife')}>
                            <View style={styles.adviceHeaderview}>
                                {this.state.familyExpand ?
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    /> :
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                }
                                <Text style={styles.adviceHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceFamilyLife}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {                        
                        (this.state.familyExpand)?
                        <View style={styles.adviceContainerBottom}>
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceGettingMarried}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('getMarried', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('getMarried', false)}
                                    switchOn={this.state.getMarriedSwitchOn}
                                    switchOff={this.state.getMarriedSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceBecomingParent}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('becomeParent', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('becomeParent', false)}
                                    switchOn={this.state.becomeParentSwitchOn}
                                    switchOff={this.state.becomeParentSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceParenting}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('parenting', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('parenting', false)}
                                    switchOn={this.state.parentingSwitchOn}
                                    switchOff={this.state.parentingSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceYoungAdults}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('youngAdult', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('youngAdult', false)}
                                    switchOn={this.state.youngAdultSwitchOn}
                                    switchOff={this.state.youngAdultSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceGettingDivorce}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('getDivorce', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('getDivorce', false)}
                                    switchOn={this.state.getDivorceSwitchOn}
                                    switchOff={this.state.getDivorceSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceLossLovedOne}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('lossOfLoved', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('lossOfLoved', false)}
                                    switchOn={this.state.lossOfLovedSwitchOn}
                                    switchOff={this.state.lossOfLovedSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceLifeInsurance}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('lifeInsurance', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('lifeInsurance', false)}
                                    switchOn={this.state.lifeInsuranceSwitchOn}
                                    switchOff={this.state.lifeInsuranceSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceHealthInsurance}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('healthInsurance', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('healthInsurance', false)}
                                    switchOn={this.state.healthInsuranceSwitchOn}
                                    switchOff={this.state.healthInsuranceSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                        </View>
                        : null
                    }
                    <View style={styles.advicecontainer}>
                        <TouchableOpacity style={styles.touchOpacityPosition} disabled={this.state.militaryTouchDisabled} onPress={this.setStateUpdates('militarylife')}>
                            <View style={styles.adviceHeaderview}>
                                {this.state.militaryExpand ?
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    /> :
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                }
                                <Text style={styles.adviceHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceMilitaryLife}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                        (this.state.militaryExpand)?
                        <View style={styles.adviceContainerBottom}>
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceJoinMilitary}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('joiningMilitary', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('joiningMilitary', false)}
                                    switchOn={this.state.joiningMilitarySwitchOn}
                                    switchOff={this.state.joiningMilitarySwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceDeployment}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('deployment', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('deployment', false)}
                                    switchOn={this.state.deploymentSwitchOn}
                                    switchOff={this.state.deploymentSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdvicePcs}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('pcs', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('pcs', false)}
                                    switchOn={this.state.pcsSwitchOn}
                                    switchOff={this.state.pcsSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                                <View style={styles.lineBorder} />
            
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceLeavingMilitary}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('leaveMilitary', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('leaveMilitary', false)}
                                    switchOn={this.state.leaveMilitarySwitchOn}
                                    switchOff={this.state.leaveMilitarySwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                        </View>
                        :null
                    }
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.goBack}
                    />
                    <GButtonComponent
                        buttonStyle={styles.saveButton}
                        buttonText={gblStrings.common.save}
                        textStyle={styles.saveButtonText}
                        onPress={this.saveButtonAction}
                        
                    />
                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

AccountMessagingAdviceComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

AccountMessagingAdviceComponent.defaultProps = {

};

export default AccountMessagingAdviceComponent;
