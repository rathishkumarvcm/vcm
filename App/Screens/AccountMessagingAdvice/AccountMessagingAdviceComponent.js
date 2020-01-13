import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent, GSwitchComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

class AccountMessagingAdviceComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,

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

    componentDidMount() {     
        const {accMessageAdviceinitialState} = this.props;
        if (accMessageAdviceinitialState){            
                this.setState({ 
                    gettingStartedSwitchOff: accMessageAdviceinitialState.gettingStartedSwitchOff, 
                    gettingStartedSwitchOn: accMessageAdviceinitialState.gettingStartedSwitchOn, 
                
                    livingSwitchOff: accMessageAdviceinitialState.livingSwitchOff, 
                    livingSwitchOn: accMessageAdviceinitialState.livingSwitchOn,
               
                    growingSwitchOff: accMessageAdviceinitialState.growingSwitchOff, 
                    growingSwitchOn: accMessageAdviceinitialState.growingSwitchOn, 
                
                    eastPlanningSwitchOff: accMessageAdviceinitialState.eastPlanningSwitchOff,
                    eastPlanningSwitchOn: accMessageAdviceinitialState.eastPlanningSwitchOn,
                
                    taxCenterSwitchOff: accMessageAdviceinitialState.taxCenterSwitchOff,
                    taxCenterSwitchOn: accMessageAdviceinitialState.taxCenterSwitchOn,
                
                    understandingInvestSwitchOff: accMessageAdviceinitialState.understandingInvestSwitchOff,
                    understandingInvestSwitchOn: accMessageAdviceinitialState.understandingInvestSwitchOn,
                
                    saveBudgetSwitchOff: accMessageAdviceinitialState.saveBudgetSwitchOff,
                    saveBudgetSwitchOn: accMessageAdviceinitialState.saveBudgetSwitchOn,
                
                    debtCreditSwitchOff: accMessageAdviceinitialState.debtCreditSwitchOff,
                    debtCreditSwitchOn: accMessageAdviceinitialState.debtCreditSwitchOn,
               
                    financialSetSwitchOff: accMessageAdviceinitialState.financialSetSwitchOff,
                    financialSetSwitchOn: accMessageAdviceinitialState.financialSetSwitchOn,
               
                     getMarriedSwitchOff: accMessageAdviceinitialState.getMarriedSwitchOff, 
                     getMarriedSwitchOn: accMessageAdviceinitialState.getMarriedSwitchOn, 
                  
                    becomeParentSwitchOff: accMessageAdviceinitialState.becomeParentSwitchOff,
                    becomeParentSwitchOn: accMessageAdviceinitialState.becomeParentSwitchOn,
                
                     parentingSwitchOff: accMessageAdviceinitialState.parentingSwitchOff, 
                     parentingSwitchOn: accMessageAdviceinitialState.parentingSwitchOn,
                  
                    youngAdultSwitchOff:accMessageAdviceinitialState.youngAdultSwitchOff,
                    youngAdultSwitchOn: accMessageAdviceinitialState.youngAdultSwitchOn, 
               
                    getDivorceSwitchOff: accMessageAdviceinitialState.getDivorceSwitchOff,
                    getDivorceSwitchOn: accMessageAdviceinitialState.getDivorceSwitchOn,
               
                    lossOfLovedSwitchOff: accMessageAdviceinitialState.lossOfLovedSwitchOff, 
                    lossOfLovedSwitchOn: accMessageAdviceinitialState.lossOfLovedSwitchOn,
               
                    lifeInsuranceSwitchOff: accMessageAdviceinitialState.lifeInsuranceSwitchOff, 
                    lifeInsuranceSwitchOn: accMessageAdviceinitialState.lifeInsuranceSwitchOn, 
               
                    healthInsuranceSwitchOff: accMessageAdviceinitialState.healthInsuranceSwitchOff,
                    healthInsuranceSwitchOn: accMessageAdviceinitialState.healthInsuranceSwitchOn,  
               
                    joiningMilitarySwitchOff: accMessageAdviceinitialState.joiningMilitarySwitchOff,
                    joiningMilitarySwitchOn: accMessageAdviceinitialState.joiningMilitarySwitchOn,
                
                     deploymentSwitchOff: accMessageAdviceinitialState.deploymentSwitchOff,
                     deploymentSwitchOn: accMessageAdviceinitialState.deploymentSwitchOn,
                    
                    pcsSwitchOff: accMessageAdviceinitialState.pcsSwitchOff,
                    pcsSwitchOn: accMessageAdviceinitialState.pcsSwitchOn,
                
                    leaveMilitarySwitchOff: accMessageAdviceinitialState.leaveMilitarySwitchOff, 
                    leaveMilitarySwitchOn: accMessageAdviceinitialState.leaveMilitarySwitchOn,
                });
        }                 
    }

    goBack = () => {
        const {navigation} = this.props;
       navigation.goBack();
    }

    navigategeneralSettings = () => {
        const {navigation} = this.props;
        navigation.navigate('generalSettings');
    }

    setStateUpdates = (fromlist) => () => {
        const {retirementExpand,financeExpand,familyExpand,militaryExpand} = this.state;
        switch (fromlist) {
            case 'retirement':
                if (retirementExpand) {
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
                } else if (!retirementExpand) {
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
                if (!financeExpand) {
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
                } else if (financeExpand) {
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
                if (!familyExpand) {
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
                } else if (familyExpand) {
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
                if (!militaryExpand) {
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
                } else if (militaryExpand) {
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
                default:
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
            default:
                break;    
        }
    }    

    saveButtonAction = () =>{
        AppUtils.debugLog('Save Button Clicked...');          
        const {navigation,saveData} = this.props;

        const {
            gettingStartedSwitchOff,gettingStartedSwitchOn,
            livingSwitchOff,livingSwitchOn,
            growingSwitchOff,growingSwitchOn,
            eastPlanningSwitchOff,eastPlanningSwitchOn,
            taxCenterSwitchOff,taxCenterSwitchOn,
            understandingInvestSwitchOff,understandingInvestSwitchOn,
            saveBudgetSwitchOff,saveBudgetSwitchOn,
            debtCreditSwitchOff,debtCreditSwitchOn,
            financialSetSwitchOff,financialSetSwitchOn,
            getMarriedSwitchOff,getMarriedSwitchOn,
            becomeParentSwitchOff,becomeParentSwitchOn,
            parentingSwitchOff,parentingSwitchOn,
            youngAdultSwitchOff,youngAdultSwitchOn,
            getDivorceSwitchOff,getDivorceSwitchOn,
            lossOfLovedSwitchOff,lossOfLovedSwitchOn,
            lifeInsuranceSwitchOff,lifeInsuranceSwitchOn,
            healthInsuranceSwitchOff,healthInsuranceSwitchOn,
            joiningMilitarySwitchOff,joiningMilitarySwitchOn,
            deploymentSwitchOff,deploymentSwitchOn,
            pcsSwitchOff,pcsSwitchOn,
            leaveMilitarySwitchOff,leaveMilitarySwitchOn
        } = this.state;          

           const payloadData = {
              
            gettingStartedSwitchOff,    
            gettingStartedSwitchOn,   

            livingSwitchOff,   
            livingSwitchOn,

            growingSwitchOff,
            growingSwitchOn,

            eastPlanningSwitchOff,
            eastPlanningSwitchOn,

            taxCenterSwitchOff,
            taxCenterSwitchOn,  

            understandingInvestSwitchOff,
            understandingInvestSwitchOn,

            saveBudgetSwitchOff,
            saveBudgetSwitchOn,

            debtCreditSwitchOff,
            debtCreditSwitchOn,

            financialSetSwitchOff,
            financialSetSwitchOn,

            getMarriedSwitchOff,
            getMarriedSwitchOn,

            becomeParentSwitchOff,
            becomeParentSwitchOn,

            parentingSwitchOff,
            parentingSwitchOn,

            youngAdultSwitchOff,
            youngAdultSwitchOn,

            getDivorceSwitchOff,
            getDivorceSwitchOn,

            lossOfLovedSwitchOff,
            lossOfLovedSwitchOn,

            lifeInsuranceSwitchOff,
            lifeInsuranceSwitchOn,

            healthInsuranceSwitchOff,
            healthInsuranceSwitchOn,

            joiningMilitarySwitchOff,
            joiningMilitarySwitchOn,

            deploymentSwitchOff,
            deploymentSwitchOn,

            pcsSwitchOff,
            pcsSwitchOn,

            leaveMilitarySwitchOff,   
            leaveMilitarySwitchOn,   
        };        
        saveData(payloadData);
        navigation.goBack();    
    }

    render() {
        const {navigation} = this.props;
        const {retirementTouchDisabled,retirementExpand,financeTouchDisabled,
            financeExpand,familyTouchDisabled,familyExpand,
            militaryTouchDisabled,militaryExpand,
        } = this.state;
        const {
            gettingStartedSwitchOff,gettingStartedSwitchOn,
            livingSwitchOff,livingSwitchOn,
            growingSwitchOff,growingSwitchOn,
            eastPlanningSwitchOff,eastPlanningSwitchOn,
            taxCenterSwitchOff,taxCenterSwitchOn,
            understandingInvestSwitchOff,understandingInvestSwitchOn,
            saveBudgetSwitchOff,saveBudgetSwitchOn,
            debtCreditSwitchOff,debtCreditSwitchOn,
            financialSetSwitchOff,financialSetSwitchOn,
            getMarriedSwitchOff,getMarriedSwitchOn,
            becomeParentSwitchOff,becomeParentSwitchOn,
            parentingSwitchOff,parentingSwitchOn,
            youngAdultSwitchOff,youngAdultSwitchOn,
            getDivorceSwitchOff,getDivorceSwitchOn,
            lossOfLovedSwitchOff,lossOfLovedSwitchOn,
            lifeInsuranceSwitchOff,lifeInsuranceSwitchOn,
            healthInsuranceSwitchOff,healthInsuranceSwitchOn,
            joiningMilitarySwitchOff,joiningMilitarySwitchOn,
            deploymentSwitchOff,deploymentSwitchOn,
            pcsSwitchOff,pcsSwitchOn,
            leaveMilitarySwitchOff,leaveMilitarySwitchOn
        } = this.state;          


        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />
                <ScrollView style={styles.scrollViewFlex}>
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
                        <TouchableOpacity style={styles.touchOpacityPosition} disabled={retirementTouchDisabled} onPress={this.setStateUpdates('retirement')}>
                            <View style={styles.adviceHeaderview}>

                                {retirementExpand ? (
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                  ) : (
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                  )}

                                <Text style={styles.adviceHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceRetirement}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                    (retirementExpand) ? (
                        <View style={styles.adviceContainerBottom}>
                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceGettingStarted}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('gettingStarted', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('gettingStarted', false)}
                                switchOn={gettingStartedSwitchOn}
                                switchOff={gettingStartedSwitchOff}
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
                                switchOn={livingSwitchOn}
                                switchOff={livingSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />

                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceGrowingRetirement}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('growing', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('growing', false)}
                                switchOn={growingSwitchOn}
                                switchOff={growingSwitchOff}
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
                                switchOn={eastPlanningSwitchOn}
                                switchOff={eastPlanningSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                      )     
                    : null
                    }        

                    <View style={styles.advicecontainer}>
                        <TouchableOpacity style={styles.touchOpacityPosition} disabled={financeTouchDisabled} onPress={this.setStateUpdates('personalfinance')}>
                            <View style={styles.adviceHeaderview}>
                                {financeExpand ? (
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                  ) : (
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                  )}
                                <Text style={styles.adviceHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdvicePersonalFinance}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                        (financeExpand) ? (
                        <View style={styles.adviceContainerBottom}>
                            <Text style={styles.adviceAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingAdviceTaxCenter}
                            </Text>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('taxCenter', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('taxCenter', false)}
                                switchOn={taxCenterSwitchOn}
                                switchOff={taxCenterSwitchOff}
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
                                switchOn={understandingInvestSwitchOn}
                                switchOff={understandingInvestSwitchOff}
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
                                switchOn={saveBudgetSwitchOn}
                                switchOff={saveBudgetSwitchOff}
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
                                switchOn={debtCreditSwitchOn}
                                switchOff={debtCreditSwitchOff}
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
                                switchOn={financialSetSwitchOn}
                                switchOff={financialSetSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                      )
                        : null
                    }

                    <View style={styles.advicecontainer}>
                        <TouchableOpacity style={styles.touchOpacityPosition} disabled={familyTouchDisabled} onPress={this.setStateUpdates('familylife')}>
                            <View style={styles.adviceHeaderview}>
                                {familyExpand ? (
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                  ) : (
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                  )}
                                <Text style={styles.adviceHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceFamilyLife}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {                        
                        (familyExpand)? (
                        <View style={styles.adviceContainerBottom}>
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceGettingMarried}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('getMarried', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('getMarried', false)}
                                    switchOn={getMarriedSwitchOn}
                                    switchOff={getMarriedSwitchOff}
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
                                    switchOn={becomeParentSwitchOn}
                                    switchOff={becomeParentSwitchOff}
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
                                    switchOn={parentingSwitchOn}
                                    switchOff={parentingSwitchOff}
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
                                    switchOn={youngAdultSwitchOn}
                                    switchOff={youngAdultSwitchOff}
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
                                    switchOn={getDivorceSwitchOn}
                                    switchOff={getDivorceSwitchOff}
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
                                    switchOn={lossOfLovedSwitchOn}
                                    switchOff={lossOfLovedSwitchOff}
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
                                    switchOn={lifeInsuranceSwitchOn}
                                    switchOff={lifeInsuranceSwitchOff}
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
                                    switchOn={healthInsuranceSwitchOn}
                                    switchOff={healthInsuranceSwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                        </View>
                      )
                        : null
                    }
                    <View style={styles.advicecontainer}>
                        <TouchableOpacity style={styles.touchOpacityPosition} disabled={militaryTouchDisabled} onPress={this.setStateUpdates('militarylife')}>
                            <View style={styles.adviceHeaderview}>
                                {militaryExpand ? (
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                  ) : (
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                        color="#088ACC"
                                    />
                                  )}
                                <Text style={styles.adviceHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceMilitaryLife}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                        (militaryExpand)? (
                        <View style={styles.adviceContainerBottom}>
                                <Text style={styles.adviceAlertsContent}>
                                    {gblStrings.settingAccountMessaging.accountMessagingAdviceJoinMilitary}
                                </Text>
                                <GSwitchComponent
                                    switchOnMethod={this.switchOnOffStateUpdates('joiningMilitary', true)}
                                    switchOffMethod={this.switchOnOffStateUpdates('joiningMilitary', false)}
                                    switchOn={joiningMilitarySwitchOn}
                                    switchOff={joiningMilitarySwitchOff}
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
                                    switchOn={deploymentSwitchOn}
                                    switchOff={deploymentSwitchOff}
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
                                    switchOn={pcsSwitchOn}
                                    switchOff={pcsSwitchOff}
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
                                    switchOn={leaveMilitarySwitchOn}
                                    switchOff={leaveMilitarySwitchOff}
                                    switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                    switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                                />
                        </View>
                      )
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
    navigation: PropTypes.instanceOf(Object),
    accMessageAdviceinitialState: PropTypes.instanceOf(Object),

    saveData:PropTypes.func,
};

AccountMessagingAdviceComponent.defaultProps = {
    navigation : {},
    accMessageAdviceinitialState : {},
    saveData: () => { }
};

export default AccountMessagingAdviceComponent;
