import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import PropTypes from "prop-types";
import { styles } from './styles';
import { GHeaderComponent, GIcon, GFooterSettingsComponent, GSwitchComponent, GButtonComponent, GInputComponent } from '../../CommonComponents';
import { CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';

class DeliverySettingsComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,

            emailReadMoreUrgentMessages: false,
            emailReadMoreNotification: false,
            emailReadMoreGuidance: false,
            pushNotifyReadMoreUrgentMessages: false,
            pushNotifyReadMoreNotification: false,
            pushNotifyReadMoreGuidance: false,
            textReadMoreUrgentMessages: false,
            textReadMoreNotification: false,
            textReadMoreGuidance: false,

            emailUrgentSwitchOn: false,
            emailUrgentSwitchOff: true,
            emailNotificationSwitchOn: false,
            emailNotificationSwitchOff: true,
            emailGuidanceSwitchOn: false,
            emailGuidanceSwitchOff: true,

            notificationUrgentSwitchOn: false,
            notificationUrgentSwitchOff: true,
            notificationNotificationSwitchOn: false,
            notificationNotificationSwitchOff: true,
            notificationGuidanceSwitchOn: false,
            notificationGuidanceSwitchOff: true,

            textUrgentSwitchOn: false,
            textUrgentSwitchOff: true,
            textNotificationSwitchOn: false,
            textNotificationSwitchOff: true,
            textGuidanceSwitchOn: false,
            textGuidanceSwitchOff: true,

            preferenceMorning: false,
            preferenceMidDay: false,
            preferenceEarlyEvening: false,
            preferenceNight: false,

            modalVisible: false,
            resendSuccessVisible: false,

            resendPinCode: '',
            enterCorrectCode: false,

            email: '',
            phoneno: '',
        };
    }

    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.email) {
            this.setState({ email: this.props.initialState.email});
        }
        if (this.props && this.props.initialState && this.props.initialState.phone) {
            this.setState({ phoneno: this.props.initialState.phone});
        }

        if (this.props && this.props.deliverySettingsinitialState){            
                this.setState({ 
                    emailUrgentSwitchOn: this.props.deliverySettingsinitialState.emailUrgentSwitchOn, 
                    emailUrgentSwitchOff: this.props.deliverySettingsinitialState.emailUrgentSwitchOff, 
               
                    emailNotificationSwitchOn: this.props.deliverySettingsinitialState.emailNotificationSwitchOn, 
                    emailNotificationSwitchOff: this.props.deliverySettingsinitialState.emailNotificationSwitchOff, 
           
                    emailGuidanceSwitchOn: this.props.deliverySettingsinitialState.emailGuidanceSwitchOn, 
                    emailGuidanceSwitchOff: this.props.deliverySettingsinitialState.emailGuidanceSwitchOff,
              
                    notificationUrgentSwitchOn: this.props.deliverySettingsinitialState.notificationUrgentSwitchOn, 
                    notificationUrgentSwitchOff: this.props.deliverySettingsinitialState.notificationUrgentSwitchOff,
              
                    notificationNotificationSwitchOn: this.props.deliverySettingsinitialState.notificationNotificationSwitchOn, 
                    notificationNotificationSwitchOff: this.props.deliverySettingsinitialState.notificationNotificationSwitchOff,
               
                    notificationGuidanceSwitchOn: this.props.deliverySettingsinitialState.notificationGuidanceSwitchOn, 
                    notificationGuidanceSwitchOff: this.props.deliverySettingsinitialState.notificationGuidanceSwitchOff,
               
                    textUrgentSwitchOn: this.props.deliverySettingsinitialState.textUrgentSwitchOn, 
                    textUrgentSwitchOff: this.props.deliverySettingsinitialState.textUrgentSwitchOff,
               
                    textNotificationSwitchOn: this.props.deliverySettingsinitialState.textNotificationSwitchOn, 
                    textNotificationSwitchOff: this.props.deliverySettingsinitialState.textNotificationSwitchOff,
               
                    textGuidanceSwitchOn: this.props.deliverySettingsinitialState.textGuidanceSwitchOn, 
                    textGuidanceSwitchOff: this.props.deliverySettingsinitialState.textGuidanceSwitchOff,
                
                   preferenceMorning: this.props.deliverySettingsinitialState.preferenceMorning,
                   preferenceMidDay: this.props.deliverySettingsinitialState.preferenceMidDay, 
                   preferenceEarlyEvening: this.props.deliverySettingsinitialState.preferenceEarlyEvening, 
                   preferenceNight: this.props.deliverySettingsinitialState.preferenceNight,                  
        });
    }
}

    goBack = () => {
        this.props.navigation.goBack();
    };

    navigateEditEmail = () =>{
        this.props.navigation.navigate('editEmailInformation');
    };

    navigateEditPhone = () =>{
        this.props.navigation.navigate('editPhoneInformation');
    };

    navigateEditNotification = () =>{
        this.props.navigation.navigate('accountMessagingDeviceManagement');
    };

    setModalVisible = (visible) =>()=> {
        this.setState({ modalVisible: visible, resendSuccessVisible: false, resendPinCode: '', enterCorrectCode: false });
    }

    setResendSuccess = (visible) =>()=>{
        this.setState({ resendSuccessVisible: visible, enterCorrectCode: false });
    }

    validateInputData = () => {
        if (this.state.resendPinCode === '') {
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
            case 'emailGuidance':
                if (flag) this.setState({ emailGuidanceSwitchOn: true, emailGuidanceSwitchOff: false });
                else this.setState({ emailGuidanceSwitchOn: false, emailGuidanceSwitchOff: true });
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
            case 'pushNotifyGuidance':
                if (flag) this.setState({ notificationGuidanceSwitchOn: true, notificationGuidanceSwitchOff: false });
                else this.setState({ notificationGuidanceSwitchOn: false, notificationGuidanceSwitchOff: true });
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
            case 'textGuidance':
                if (flag) this.setState({ textGuidanceSwitchOn: true, textGuidanceSwitchOff: false });
                else this.setState({ textGuidanceSwitchOn: false, textGuidanceSwitchOff: true });
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
                    emailReadMoreGuidance: false,
                });
                break;
            case 'emailNotification':
                this.setState({
                    emailReadMoreUrgentMessages: false,
                    emailReadMoreNotification: true,
                    emailReadMoreGuidance: false,
                });
                break;
            case 'emailGuidance':
                this.setState({
                    emailReadMoreUrgentMessages: false,
                    emailReadMoreNotification: false,
                    emailReadMoreGuidance: true,
                });
                break;
            case 'pushNotifyUrgentMessage':
                this.setState({
                    pushNotifyReadMoreUrgentMessages: true,
                    pushNotifyReadMoreNotification: false,
                    pushNotifyReadMoreGuidance: false,
                });
                break;
            case 'pushNotifyNotification':
                this.setState({
                    pushNotifyReadMoreUrgentMessages: false,
                    pushNotifyReadMoreNotification: true,
                    pushNotifyReadMoreGuidance: false,
                });
                break;
            case 'pushNotifyGuidance':
                this.setState({
                    pushNotifyReadMoreUrgentMessages: false,
                    pushNotifyReadMoreNotification: false,
                    pushNotifyReadMoreGuidance: true,
                });
                break;
            case 'textUrgentMessage':
                this.setState({
                    textReadMoreUrgentMessages: true,
                    textReadMoreNotification: false,
                    textReadMoreGuidance: false,
                });
                break;
            case 'textNotification':
                this.setState({
                    textReadMoreUrgentMessages: false,
                    textReadMoreNotification: true,
                    textReadMoreGuidance: false,
                });
                break;
            case 'textGuidance':
                this.setState({
                    textReadMoreUrgentMessages: false,
                    textReadMoreNotification: false,
                    textReadMoreGuidance: true,
                });
                break;
            default:
                break;     
        }
    }

    setPreferenceUpdates = (fromview) => ()=>{
        switch (fromview) {
            case 'morning':
                this.setState({
                    preferenceMorning: !this.state.preferenceMorning,
                    preferenceMidDay: false,
                    preferenceEarlyEvening: false,
                    preferenceNight: false,
                });
                break;
            case 'midDay':
                this.setState({
                    preferenceMorning: false,
                    preferenceMidDay: !this.state.preferenceMidDay,
                    preferenceEarlyEvening: false,
                    preferenceNight: false,
                });
                break;
            case 'earlyEvening':
                this.setState({
                    preferenceMorning: false,
                    preferenceMidDay: false,
                    preferenceEarlyEvening: !this.state.preferenceEarlyEvening,
                    preferenceNight: false,
                });
                break;
            case 'night':
                this.setState({
                    preferenceMorning: false,
                    preferenceMidDay: false,
                    preferenceEarlyEvening: false,
                    preferenceNight: !this.state.preferenceNight,
                });
                break;
            default:
                break; 
        }
    }

    saveButtonAction = () => {
        console.log('Save Button Clicked...'); 

        const payloadData = {                              
                            
            emailUrgentSwitchOn: this.state.emailUrgentSwitchOn,    
            emailUrgentSwitchOff: this.state.emailUrgentSwitchOff,   

            emailNotificationSwitchOn: this.state.emailNotificationSwitchOn,    
            emailNotificationSwitchOff: this.state.emailNotificationSwitchOff,  
            
            emailGuidanceSwitchOn: this.state.emailGuidanceSwitchOn,    
            emailGuidanceSwitchOff: this.state.emailGuidanceSwitchOff, 

            notificationUrgentSwitchOn: this.state.notificationUrgentSwitchOn,    
            notificationUrgentSwitchOff: this.state.notificationUrgentSwitchOff, 

            notificationNotificationSwitchOn: this.state.notificationNotificationSwitchOn,    
            notificationNotificationSwitchOff: this.state.notificationNotificationSwitchOff, 

            notificationGuidanceSwitchOn: this.state.notificationGuidanceSwitchOn,    
            notificationGuidanceSwitchOff: this.state.notificationGuidanceSwitchOff,

            textUrgentSwitchOn: this.state.textUrgentSwitchOn,    
            textUrgentSwitchOff: this.state.textUrgentSwitchOff,   

            textNotificationSwitchOn: this.state.textNotificationSwitchOn,    
            textNotificationSwitchOff: this.state.textNotificationSwitchOff,  
            
            textGuidanceSwitchOn: this.state.textGuidanceSwitchOn,    
            textGuidanceSwitchOff: this.state.textGuidanceSwitchOff, 

            preferenceMorning: this.state.preferenceMorning,
            preferenceMidDay: this.state.preferenceMidDay,
            preferenceEarlyEvening: this.state.preferenceEarlyEvening,
            preferenceNight: this.state.preferenceNight          
        };        
        this.props.saveData(payloadData);
        this.props.navigation.goBack();    
    }

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

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
                            {this.state.email}
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
                        {this.state.emailReadMoreUrgentMessages ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreUrgent}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('emailUrgentMessage', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('emailUrgentMessage', false)}
                                switchOn={this.state.emailUrgentSwitchOn}
                                switchOff={this.state.emailUrgentSwitchOff}
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
                        {this.state.emailReadMoreNotification ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreNotification}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('emailNotification', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('emailNotification', false)}
                                switchOn={this.state.emailNotificationSwitchOn}
                                switchOff={this.state.emailNotificationSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>

                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="clock"
                                type="feather"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentGuidanceGoals}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('emailGuidance')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {this.state.emailReadMoreGuidance ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreGuidance}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('emailGuidance', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('emailGuidance', false)}
                                switchOn={this.state.emailGuidanceSwitchOn}
                                switchOff={this.state.emailGuidanceSwitchOff}
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
                        {this.state.pushNotifyReadMoreUrgentMessages ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreUrgent}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('pushNotifyUrgentMessage', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('pushNotifyUrgentMessage', false)}
                                switchOn={this.state.notificationUrgentSwitchOn}
                                switchOff={this.state.notificationUrgentSwitchOff}
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
                        {this.state.pushNotifyReadMoreNotification ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreNotification}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('pushNotifyNotification', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('pushNotifyNotification', false)}
                                switchOn={this.state.notificationNotificationSwitchOn}
                                switchOff={this.state.notificationNotificationSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>

                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="clock"
                                type="feather"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentGuidanceGoals}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('pushNotifyGuidance')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {this.state.pushNotifyReadMoreGuidance ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreGuidance}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('pushNotifyGuidance', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('pushNotifyGuidance', false)}
                                switchOn={this.state.notificationGuidanceSwitchOn}
                                switchOff={this.state.notificationGuidanceSwitchOff}
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
                    <Text style={styles.userRegisterNumberText}>{this.state.phoneno}</Text>
                    <View style={styles.registerNumberContainer}>
                        <GIcon
                            name="alert-circle"
                            type="material-community"
                            size={20}
                            color="#56565A"
                        />
                        <Text style={styles.registerNumberText} onPress={this.setModalVisible(true)}>Register this number</Text>
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
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('textUrgentMessage')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {this.state.textReadMoreUrgentMessages ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreUrgent}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('textUrgentMessage', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('textUrgentMessage', false)}
                                switchOn={this.state.textUrgentSwitchOn}
                                switchOff={this.state.textUrgentSwitchOff}
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
                        {this.state.textReadMoreNotification ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreNotification}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('textNotification', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('textNotification', false)}
                                switchOn={this.state.textNotificationSwitchOn}
                                switchOff={this.state.textNotificationSwitchOff}
                                switchOnText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOn}
                                switchOffText={gblStrings.settingAccountMessaging.accountMessagingAdviceSwitchOff}
                            />
                        </View>
                    </View>

                    <View style={styles.emailPreferenceContainer}>
                        <View style={styles.emailPreferenceUrgentContainer}>
                            <GIcon
                                name="clock"
                                type="feather"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.emailPreferenceUrgentText}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceUrgentGuidanceGoals}
                            </Text>
                            <Text style={styles.readMoreText} onPress={this.setReadMoreStateUpdates('textGuidance')}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMore}
                            </Text>
                        </View>
                        {this.state.textReadMoreGuidance ?
                            <Text style={styles.emailPreferenceDescTitle}>
                                {gblStrings.settingsDeliveryPreference.deliveryPreferenceReadMoreGuidance}
                            </Text>
                            : null}
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOnMethod={this.switchOnOffStateUpdates('textGuidance', true)}
                                switchOffMethod={this.switchOnOffStateUpdates('textGuidance', false)}
                                switchOn={this.state.textGuidanceSwitchOn}
                                switchOff={this.state.textGuidanceSwitchOff}
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
                                selected={this.state.preferenceMorning}
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
                                selected={this.state.preferenceMidDay}
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
                                selected={this.state.preferenceEarlyEvening}
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
                                selected={this.state.preferenceNight}
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
                        visible={this.state.modalVisible}
                        onRequestClose={this.setModalVisible(!this.state.modalVisible)}
                    >

                        <View style={styles.modalBackgroundView}>
                            <View style={styles.modalCloseIcon}>
                                <TouchableOpacity onPress={this.setModalVisible(!this.state.modalVisible)}>
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
                                    <Text style={styles.modalTitleText}>{this.state.phoneno}</Text>
                                </Text>
                                <Text style={styles.modalRegisterCodeText}>
                                    {gblStrings.settingsDeliveryPreference.modalRegisterCodeText}
                                </Text>

                                <GInputComponent
                                    propInputStyle={styles.modalEnterCodeInput}
                                    placeholder="XXXX"
                                    onChangeText={this.setResendCode}
                                    value={this.state.resendPinCode}
                                />
                                {this.state.enterCorrectCode ?
                                    <Text style={styles.modalEnterCode}>
                                        {gblStrings.settingsDeliveryPreference.modalEnterCorrectCode}
                                    </Text>
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
                                    <Text style={styles.modalresendCodeText} onPress={this.setResendSuccess(!this.state.resendSuccessVisible)}>
                                        {gblStrings.settingsDeliveryPreference.modalResendCode}
                                    </Text>
                                </View>
                                {this.state.resendSuccessVisible ?
                                    <Text style={styles.modalCodeSentSuccess}>
                                        {gblStrings.settingsDeliveryPreference.modalCodeSentSuccess}
                                    </Text>
                                    : null
                                }
                                <GButtonComponent
                                    buttonStyle={styles.modalcancelButton}
                                    buttonText={gblStrings.common.cancel}
                                    textStyle={styles.cancelButtonText}
                                    onPress={this.setModalVisible(!this.state.modalVisible)}
                                />
                                <GButtonComponent
                                    buttonStyle={this.state.resendPinCode !== '' ? styles.modalSaveButton : styles.modalSaveButtonDim}
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