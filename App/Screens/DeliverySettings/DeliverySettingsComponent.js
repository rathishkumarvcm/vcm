import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GIcon, GFooterSettingsComponent, GSwitchComponent, GButtonComponent, GInputComponent } from '../../CommonComponents';
import { CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

class DeliverySettingsComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.

        const{ initialState,deliverySettingsinitialState }=props;

        this.state = {
            // isLoading: false,

            emailReadMoreUrgentMessages: false,
            emailReadMoreNotification: false,          
            pushNotifyReadMoreUrgentMessages: false,
            pushNotifyReadMoreNotification: false,         
            textReadMoreUrgentMessages: false,
            textReadMoreNotification: false,           

            emailUrgentSwitchOn: deliverySettingsinitialState.emailUrgentSwitchOn, 
            emailUrgentSwitchOff: deliverySettingsinitialState.emailUrgentSwitchOff, 
        
            emailNotificationSwitchOn: deliverySettingsinitialState.emailNotificationSwitchOn, 
            emailNotificationSwitchOff: deliverySettingsinitialState.emailNotificationSwitchOff,           
                            
            notificationUrgentSwitchOn: deliverySettingsinitialState.notificationUrgentSwitchOn, 
            notificationUrgentSwitchOff: deliverySettingsinitialState.notificationUrgentSwitchOff,
        
            notificationNotificationSwitchOn: deliverySettingsinitialState.notificationNotificationSwitchOn, 
            notificationNotificationSwitchOff: deliverySettingsinitialState.notificationNotificationSwitchOff,
                        
            textUrgentSwitchOn: deliverySettingsinitialState.textUrgentSwitchOn, 
            textUrgentSwitchOff: deliverySettingsinitialState.textUrgentSwitchOff,
        
            textNotificationSwitchOn: deliverySettingsinitialState.textNotificationSwitchOn, 
            textNotificationSwitchOff: deliverySettingsinitialState.textNotificationSwitchOff,
        
            preferenceMorning: deliverySettingsinitialState.preferenceMorning,
            preferenceMidDay:deliverySettingsinitialState.preferenceMidDay, 
            preferenceEarlyEvening: deliverySettingsinitialState.preferenceEarlyEvening, 
            preferenceNight: deliverySettingsinitialState.preferenceNight,         

            modalVisible: false,
            resendSuccessVisible: false,

            resendPinCode: '',
            enterCorrectCode: false,

            email: initialState.email,
            phoneno: initialState.phone,
        };
    }

    componentDidMount() {
    //     const{ initialState,deliverySettingsinitialState }=this.props;

    //     if (initialState && initialState.email) {
    //         this.setState({ email: initialState.email});
    //     }
    //     if (initialState && initialState.phone) {
    //         this.setState({ phoneno: initialState.phone});
    //     }

    //     if (deliverySettingsinitialState){            
    //             this.setState({ 
    //                 emailUrgentSwitchOn: deliverySettingsinitialState.emailUrgentSwitchOn, 
    //                 emailUrgentSwitchOff: deliverySettingsinitialState.emailUrgentSwitchOff, 
               
    //                 emailNotificationSwitchOn: deliverySettingsinitialState.emailNotificationSwitchOn, 
    //                 emailNotificationSwitchOff: deliverySettingsinitialState.emailNotificationSwitchOff,           
                                 
    //                 notificationUrgentSwitchOn: deliverySettingsinitialState.notificationUrgentSwitchOn, 
    //                 notificationUrgentSwitchOff: deliverySettingsinitialState.notificationUrgentSwitchOff,
              
    //                 notificationNotificationSwitchOn: deliverySettingsinitialState.notificationNotificationSwitchOn, 
    //                 notificationNotificationSwitchOff: deliverySettingsinitialState.notificationNotificationSwitchOff,
                             
    //                 textUrgentSwitchOn: deliverySettingsinitialState.textUrgentSwitchOn, 
    //                 textUrgentSwitchOff: deliverySettingsinitialState.textUrgentSwitchOff,
               
    //                 textNotificationSwitchOn: deliverySettingsinitialState.textNotificationSwitchOn, 
    //                 textNotificationSwitchOff: deliverySettingsinitialState.textNotificationSwitchOff,
               
    //                 preferenceMorning: deliverySettingsinitialState.preferenceMorning,
    //                 preferenceMidDay:deliverySettingsinitialState.preferenceMidDay, 
    //                 preferenceEarlyEvening: deliverySettingsinitialState.preferenceEarlyEvening, 
    //                 preferenceNight: deliverySettingsinitialState.preferenceNight,                  
    //     });
    // }
}

    goBack = () => {
        const{ navigation }=this.props;
        navigation.goBack();
    };

    navigateEditEmail = () =>{
        const{ navigation }=this.props;
        navigation.navigate('editEmailInformation');
    };

    navigateEditPhone = () =>{
        const{ navigation }=this.props;
        navigation.navigate('editPhoneInformation');
    };

    navigateEditNotification = () =>{
        const{ navigation }=this.props;
        navigation.navigate('accountMessagingDeviceManagement');
    };

    setModalVisible = (visible) =>()=> {
        this.setState({ modalVisible: visible, resendSuccessVisible: false, resendPinCode: '', enterCorrectCode: false });
    }

    setResendSuccess = (visible) =>()=>{
        this.setState({ resendSuccessVisible: visible, enterCorrectCode: false });
    }

    validateInputData = () => {
        const{ resendPinCode }=this.state;
        if (resendPinCode === '') {
            this.setState({ enterCorrectCode: true, resendSuccessVisible: false });
        } else {
            this.setState({ enterCorrectCode: false, resendSuccessVisible: false });
        }
    }

    setResendCode = text => {        
        this.setState({ resendPinCode : text });
    }

    switchOnOffStateUpdates = (fromView, flag) =>()=> {
        switch (fromView) {
            //  Email Section Switch
            case 'emailUrgentMessage':
                if (flag) this.setState({ emailUrgentSwitchOn: true, emailUrgentSwitchOff: false });
                else this.setState({ emailUrgentSwitchOn: false, emailUrgentSwitchOff: true });
                break;
            case 'emailNotification':
                if (flag) this.setState({ emailNotificationSwitchOn: true, emailNotificationSwitchOff: false });
                else this.setState({ emailNotificationSwitchOn: false, emailNotificationSwitchOff: true });
                break;           
            //  Notification Section Switch
            case 'pushNotifyUrgentMessage':
                if (flag) this.setState({ notificationUrgentSwitchOn: true, notificationUrgentSwitchOff: false });
                else this.setState({ notificationUrgentSwitchOn: false, notificationUrgentSwitchOff: true });
                break;
            case 'pushNotifyNotification':
                if (flag) this.setState({ notificationNotificationSwitchOn: true, notificationNotificationSwitchOff: false });
                else this.setState({ notificationNotificationSwitchOn: false, notificationNotificationSwitchOff: true });
                break;            
            //  Text Message Section Switch
            case 'textUrgentMessage':
                if (flag) this.setState({ textUrgentSwitchOn: true, textUrgentSwitchOff: false });
                else this.setState({ textUrgentSwitchOn: false, textUrgentSwitchOff: true });
                break;
            case 'textNotification':
                if (flag) this.setState({ textNotificationSwitchOn: true, textNotificationSwitchOff: false });
                else this.setState({ textNotificationSwitchOn: false, textNotificationSwitchOff: true });
                break;            
            default:
                break;    
        }
    }

    setReadMoreStateUpdates = (fromview) => () =>{
        switch (fromview) {
            case 'emailUrgentMessage':
                this.setState({
                    emailReadMoreUrgentMessages: true,
                    emailReadMoreNotification: false,                    
                });
                break;
            case 'emailNotification':
                this.setState({
                    emailReadMoreUrgentMessages: false,
                    emailReadMoreNotification: true,                  
                });
                break;           
            case 'pushNotifyUrgentMessage':
                this.setState({
                    pushNotifyReadMoreUrgentMessages: true,
                    pushNotifyReadMoreNotification: false,                   
                });
                break;
            case 'pushNotifyNotification':
                this.setState({
                    pushNotifyReadMoreUrgentMessages: false,
                    pushNotifyReadMoreNotification: true,                  
                });
                break;           
            case 'textUrgentMessage':
                this.setState({
                    textReadMoreUrgentMessages: true,
                    textReadMoreNotification: false,                    
                });
                break;
            case 'textNotification':
                this.setState({
                    textReadMoreUrgentMessages: false,
                    textReadMoreNotification: true,                    
                });
                break;           
            default:
                break;     
        }
    }

    setPreferenceUpdates = (fromview) => ()=>{
        const {preferenceMorning,preferenceMidDay,preferenceEarlyEvening,preferenceNight} = this.state;

        switch (fromview) {
            case 'morning':
                this.setState({
                    preferenceMorning: !preferenceMorning,
                    preferenceMidDay: false,
                    preferenceEarlyEvening: false,
                    preferenceNight: false,
                });
                break;
            case 'midDay':
                this.setState({
                    preferenceMorning: false,
                    preferenceMidDay: !preferenceMidDay,
                    preferenceEarlyEvening: false,
                    preferenceNight: false,
                });
                break;
            case 'earlyEvening':
                this.setState({
                    preferenceMorning: false,
                    preferenceMidDay: false,
                    preferenceEarlyEvening: !preferenceEarlyEvening,
                    preferenceNight: false,
                });
                break;
            case 'night':
                this.setState({
                    preferenceMorning: false,
                    preferenceMidDay: false,
                    preferenceEarlyEvening: false,
                    preferenceNight: !preferenceNight,
                });
                break;
            default:
                break; 
        }
    }

    saveButtonAction = () => {
        AppUtils.debugLog('Save Button Clicked...'); 

        const {
            emailUrgentSwitchOn,emailUrgentSwitchOff,
            emailNotificationSwitchOn,emailNotificationSwitchOff,
            notificationUrgentSwitchOn,notificationUrgentSwitchOff,
            notificationNotificationSwitchOn,notificationNotificationSwitchOff,
            textUrgentSwitchOn,textUrgentSwitchOff,
            textNotificationSwitchOn,textNotificationSwitchOff,
            preferenceMorning,preferenceMidDay,preferenceEarlyEvening,preferenceNight

        } = this.state;

        const {saveData,navigation} = this.props;

        const payloadData = {                              
                            
            emailUrgentSwitchOn,  
            emailUrgentSwitchOff,   

            emailNotificationSwitchOn,    
            emailNotificationSwitchOff,              
            
            notificationUrgentSwitchOn,    
            notificationUrgentSwitchOff, 

            notificationNotificationSwitchOn,    
            notificationNotificationSwitchOff,            

            textUrgentSwitchOn,    
            textUrgentSwitchOff,   

            textNotificationSwitchOn,    
            textNotificationSwitchOff,                         

            preferenceMorning,
            preferenceMidDay,
            preferenceEarlyEvening,
            preferenceNight          
        };        
        saveData(payloadData);
        navigation.goBack();    
    }

    render() {
        const {navigation} = this.props;
        const {
            email,emailReadMoreUrgentMessages,emailUrgentSwitchOn,emailUrgentSwitchOff,emailReadMoreNotification,
            emailNotificationSwitchOn,emailNotificationSwitchOff,
            pushNotifyReadMoreUrgentMessages,notificationUrgentSwitchOn,notificationUrgentSwitchOff,pushNotifyReadMoreNotification,
            notificationNotificationSwitchOn,notificationNotificationSwitchOff,
            phoneno,textReadMoreUrgentMessages,textUrgentSwitchOn,textUrgentSwitchOff,textReadMoreNotification,
            textNotificationSwitchOn,textNotificationSwitchOff,
            preferenceMorning,preferenceMidDay,preferenceEarlyEvening,preferenceNight,modalVisible,resendPinCode,enterCorrectCode,resendSuccessVisible,
        } = this.state;

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollViewFlex}>

                    <View style={styles.settingsView}>
                        <TouchableOpacity
                            style={styles.touchOpacityPosition}
                            onPress={this.goBack}
                        >
                            <Text style={styles.settingsInfo}>
                                {gblStrings.common.settings}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.settingsInfoCurrent}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferencearrow}
                        </Text>
                    </View>

                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceTitleDesc}
                        </Text>
                    </View>

                    <View style={styles.getNotifiedContainer}>
                        <Text style={styles.getNotifiedText}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceNotifiedBy}
                        </Text>
                    </View>

                    <View style={styles.settingsSocial}>
                        <TouchableOpacity style={styles.touchOpacity}>
                            <GIcon
                                name="mail"
                                type="material"
                                size={30}
                                color="#56565A"
                            />
                        </TouchableOpacity>
                        <Text style={styles.emailText}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceEmail}
                        </Text>
                        <Text style={styles.emailEditText} onPress={this.navigateEditEmail}>
                            {gblStrings.common.edit}
                        </Text>
                    </View>

                    <View style={styles.userEmailTextContainer}>
                        <Text style={styles.userEmailText}>
                            {email}
                        </Text>
                    </View>

                    {/* Email - Category */}
                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="alert-circle"
                                type="feather"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentMessage}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('emailUrgentMessage')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {emailReadMoreUrgentMessages ? (
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreUrgent}
                            </Text>
                          )
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('emailUrgentMessage', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('emailUrgentMessage', false)}
                                switchOn={emailUrgentSwitchOn}
                                switchOff={emailUrgentSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>

                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="notifications-active"
                                type="material"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentNotifications}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('emailNotification')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {emailReadMoreNotification ? (
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreNotification}
                            </Text>
                          )
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('emailNotification', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('emailNotification', false)}
                                switchOn={emailNotificationSwitchOn}
                                switchOff={emailNotificationSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>                   

                    {/* Push Notification - Category */}
                    <View style={styles.pushNotificationContainer}>
                        <GIcon
                            name="notifications-active"
                            type="material"
                            size={30}
                            color="black"
                        />
                        <Text style={styles.emailText}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferencePushNotification}
                        </Text>
                    </View>
                    <Text style={styles.explainPushNotification}>Explain Push notifications</Text>

                    <View style={styles.pushNotificationDeviceContainer}>
                        <Text style={styles.pushNotificationDeviceText}>
                            iphone XR
                        </Text>
                        <Text style={styles.emailEditText} onPress={this.navigateEditNotification}>
                            {gblStrings.common.edit}
                        </Text>
                    </View>

                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="alert-circle"
                                type="feather"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentMessage}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('pushNotifyUrgentMessage')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {pushNotifyReadMoreUrgentMessages ? (
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreUrgent}
                            </Text>
                          )
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('pushNotifyUrgentMessage', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('pushNotifyUrgentMessage', false)}
                                switchOn={notificationUrgentSwitchOn}
                                switchOff={notificationUrgentSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>

                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="notifications-active"
                                type="material"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentNotifications}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('pushNotifyNotification')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {pushNotifyReadMoreNotification ? (
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreNotification}
                            </Text>
                          )
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('pushNotifyNotification', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('pushNotifyNotification', false)}
                                switchOn={notificationNotificationSwitchOn}
                                switchOff={notificationNotificationSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>
                    
                    {/* Text Message - Category */}
                    <View style={styles.textMessageContainer}>
                        <TouchableOpacity style={styles.touchOpacity}>
                            <GIcon
                                name="message-reply-text"
                                type="material-community"
                                size={30}
                                color="#56565A"
                            />
                        </TouchableOpacity>
                        <Text style={styles.emailText}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceTextMessage}
                        </Text>
                        <Text style={styles.emailEditText} onPress={this.navigateEditPhone}>
                            {gblStrings.common.edit}
                        </Text>
                    </View>
                    <Text style={styles.explainTextMessage}>Explain Text Message</Text>
                    <Text style={styles.userRegisterNumberText}>{phoneno}</Text>
                    {/* <View style={styles.registerNumberContainer}>
                        <GIcon
                            name="alert-circle"
                            type="material-community"
                            size={20}
                            color="#56565A"
                        />
                        <Text style={styles.registerNumberText} onPress={this.setModalVisible(true)}>Register this number</Text>
                    </View> */}

                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="alert-circle"
                                type="feather"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentMessage}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('textUrgentMessage')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {textReadMoreUrgentMessages ? (
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreUrgent}
                            </Text>
                          )
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('textUrgentMessage', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('textUrgentMessage', false)}
                                switchOn={textUrgentSwitchOn}
                                switchOff={textUrgentSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>

                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="notifications-active"
                                type="material"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentNotifications}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('textNotification')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {textReadMoreNotification ? (
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreNotification}
                            </Text>
                          )
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('textNotification', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('textNotification', false)}
                                switchOn={textNotificationSwitchOn}
                                switchOff={textNotificationSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>                    

                    {/*  Call Preference Section */}
                    <View style={styles.callPreferenceContainer}>

                        <Text style={styles.callPreferenceTitle}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceCall}
                        </Text>
                        <Text style={styles.callPreferenceTitleDesc}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceAvailability}
                            <Text style={styles.callPreferenceTitleDescOpt}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceAvailabilityDesc}
                            </Text>
                        </Text>
                        <Text style={styles.callPreferenceTitleDescOpt}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceAvailabilityDescPref}
                        </Text>

                        <View style={styles.preferenceSectionGrp}>
                            <CustomCheckBox
                                size={20}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor="#4D4D4D"
                                innerCicleColor="#61285F"
                                labelStyle={styles.preferenceSectionTxt}
                                label="Morning 8:00 AM - 10:00 AM"
                                selected={preferenceMorning}
                                onPress={this.setPreferenceUpdates('morning')}
                            />
                        </View>
                        <View style={styles.preferenceSectionGrp}>
                            <CustomCheckBox
                                size={20}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor="#4D4D4D"
                                innerCicleColor="#61285F"
                                labelStyle={styles.preferenceSectionTxt}
                                label="Mid-Day 10:00 AM - 04:00 PM"
                                selected={preferenceMidDay}
                                onPress={this.setPreferenceUpdates('midDay')}
                            />
                        </View>
                        <View style={styles.preferenceSectionGrp}>
                            <CustomCheckBox
                                size={20}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor="#4D4D4D"
                                innerCicleColor="#61285F"
                                labelStyle={styles.preferenceSectionTxt}
                                label="Early Evening 04:00 PM - 06:00 PM"
                                selected={preferenceEarlyEvening}
                                onPress={this.setPreferenceUpdates('earlyEvening')}
                            />
                        </View>
                        <View style={styles.preferenceSectionGrp}>
                            <CustomCheckBox
                                size={20}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor="#4D4D4D"
                                innerCicleColor="#61285F"
                                labelStyle={styles.preferenceSectionTxt}
                                label="Night 06:00 PM - 09:00 PM"
                                selected={preferenceNight}
                                onPress={this.setPreferenceUpdates('night')}
                            />
                        </View>
                    </View>

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

                    <View style={styles.lineBorder} />
                    <View style={styles.quietTimeContainer}>
                        <GIcon
                            name="volume-off"
                            type="material-community"
                            size={30}
                            color="black"
                        />
                        <Text style={styles.quietTimeText}>
                            {gblStrings.settingsDeliveryPreference.deliveryPreferenceQuietTime}
                        </Text>
                    </View>
                    <Text style={styles.quietTimeTextDelay}>
                        {gblStrings.settingsDeliveryPreference.deliveryPreferenceQuietTimeDelay}
                    </Text>
                    <View style={styles.lineBorder} />

                    <Text style={styles.priorityTextContent}>
                        {gblStrings.settingsDeliveryPreference.priorityTextContent}
                    </Text>
                    <Text style={styles.priorityTextContent}>
                        {gblStrings.settingsDeliveryPreference.priorityTextContentMessage}
                    </Text>
                    <Text style={styles.priorityTextContent}>
                        {gblStrings.settingsDeliveryPreference.priorityTextContentText}
                        <Text style={styles.priorityTextContentDataRateColor}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentStop}
                        </Text>
                        <Text style={styles.priorityTextContent}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentTo}
                        </Text>
                        <Text style={styles.priorityTextContentDataRateColor}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentMyVcm}{'(XXXXXX)'}
                        </Text>
                        <Text style={styles.priorityTextContent}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentMobileDevice}
                        </Text>
                        <Text style={styles.priorityTextContentDataRateColor}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentHelp}
                        </Text>
                        <Text style={styles.priorityTextContent}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentTo}
                        </Text>
                        <Text style={styles.priorityTextContentDataRateColor}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentMyVcm}{'(XXXXXX)'}
                        </Text>
                        <Text style={styles.priorityTextContentDataRate}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentDataRate}
                        </Text>
                    </Text>

                    <Text style={styles.priorityTextContent}>
                        {gblStrings.settingsDeliveryPreference.priorityTextContentVcm}
                        <Text style={styles.priorityTextContentBold}>
                            1-877-632-3002.
                        </Text>
                    </Text>
                    <Text style={styles.priorityTextContent}>
                        {gblStrings.settingsDeliveryPreference.priorityTextContentSupport}
                        <Text style={styles.priorityTextContentUnderline}>
                            {gblStrings.settingsDeliveryPreference.priorityTextContentSupportMobile}
                        </Text>
                    </Text>

                    <Modal
                        transparent
                        visible={modalVisible}
                        onRequestClose={this.setModalVisible(!modalVisible)}
                    >

                        <View style={styles.modalBackgroundView}>
                            <View style={styles.modalCloseIcon}>
                                <TouchableOpacity onPress={this.setModalVisible(!modalVisible)}>
                                    <GIcon
                                        name="closecircle"
                                        type="antdesign"
                                        size={30}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalTitleText}>
                                    {gblStrings.settingsDeliveryPreference.modalTitle}
                                </Text>
                                <View style={styles.modallineBorder} />
                                <Text style={styles.modalRegisterText}>
                                    {gblStrings.settingsDeliveryPreference.modalRegisterText}
                                    <Text style={styles.modalTitleText}>{phoneno}</Text>
                                </Text>
                                <Text style={styles.modalRegisterCodeText}>
                                    {gblStrings.settingsDeliveryPreference.modalRegisterCodeText}
                                </Text>

                                <GInputComponent
                                    propInputStyle={styles.modalEnterCodeInput}
                                    placeholder="XXXX"
                                    onChangeText={this.setResendCode}
                                    value={resendPinCode}
                                />
                                {enterCorrectCode ? (
                                    <Text style={styles.modalEnterCode}>
                                        {gblStrings.settingsDeliveryPreference.modalEnterCorrectCode}
                                    </Text>
                                  )
                                    : null
                                }
                                <View style={styles.modalDidntReceiveContainer}>
                                    <Text style={styles.modalDidntReceiveText}>
                                        {gblStrings.settingsDeliveryPreference.modalDidntReceive}
                                    </Text>
                                    <GIcon
                                        name="youtube-play"
                                        type="font-awesome"
                                        size={15}
                                        color="black"
                                    />
                                    <Text style={styles.modalresendCodeText} onPress={this.setResendSuccess(!resendSuccessVisible)}>
                                        {gblStrings.settingsDeliveryPreference.modalResendCode}
                                    </Text>
                                </View>
                                {resendSuccessVisible ? (
                                    <Text style={styles.modalCodeSentSuccess}>
                                        {gblStrings.settingsDeliveryPreference.modalCodeSentSuccess}
                                    </Text>
                                  )
                                    : null
                                }
                                <GButtonComponent
                                    buttonStyle={styles.modalcancelButton}
                                    buttonText={gblStrings.common.cancel}
                                    textStyle={styles.cancelButtonText}
                                    onPress={this.setModalVisible(!modalVisible)}
                                />
                                <GButtonComponent
                                    buttonStyle={resendPinCode !== '' ? styles.modalSaveButton : styles.modalSaveButtonDim}
                                    buttonText={gblStrings.common.save}
                                    textStyle={styles.saveButtonText}
                                    onPress={this.validateInputData}
                                />
                            </View>
                        </View>
                    </Modal>

                    <GFooterSettingsComponent />

                </ScrollView>
            </View>
        );
    }
}

DeliverySettingsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object),
    deliverySettingsinitialState: PropTypes.instanceOf(Object),

    saveData:PropTypes.func,
};

DeliverySettingsComponent.defaultProps = {
    navigation : {},
    initialState : {},
    deliverySettingsinitialState : {},
    saveData: () => { }

};

export default DeliverySettingsComponent;