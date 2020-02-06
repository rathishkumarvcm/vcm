import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GIcon, GFooterSettingsComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class GeneralSettingsComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,           
        };
    }

    componentDidMount() { }

    navigateprofileSettings = () =>{
        const {navigation} = this.props;
        navigation.navigate('profileSettings');
    }

    navigateDeliverySettings = () =>{
        const {navigation} = this.props;
        navigation.navigate('deliverySettings');
    }

    navigateaccountMessagingSettings = () =>{
        const {navigation} = this.props;
        navigation.navigate('accountMessagingSettings');
    }

    navigateSecurityPreference = () => {
        const {navigation} = this.props;
        navigation.navigate('securityPreference');
    }
   
    navigateMarketingPrivacySettings = () =>{
        const {navigation} = this.props;
        navigation.navigate('marketingandPrivacySettings');
    }

    render() {
        const {navigation,initialState} = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollViewFlex}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsHeadline}>
                            {gblStrings.common.settings}
                        </Text>
                    </View>

                    <View style={styles.signInView}>
                    {
                        (this.props && initialState && initialState.email && initialState.firstName &&initialState.lastName)? (
                        <Text style={styles.signInUserNametext}>
                            {initialState.firstName} {initialState.lastName}{", "}  
                            <Text style={styles.signInUserEmailtext}>
                                {initialState.email}
                            </Text>
                        </Text>
                      )
                        :null
                    }                        
                    </View>
                    <TouchableOpacity onPress={this.navigateprofileSettings}>
                        <View style={styles.listContainer}>
                            <GIcon
                                name="appstore1"
                                type="antdesign"
                                size={25}
                                color="#000000"
                            />
                            <View style={styles.listTitleContainer}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.settingsTitleText}>
                                        {gblStrings.userManagement.profilePreferences}
                                    </Text>
                                </View>
                                <View style={styles.signInView}>
                                    <Text style={styles.settingsTitleDescText}>
                                        {gblStrings.userManagement.managePersonalDetails}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateDeliverySettings}>
                        <View style={styles.listContainer}>
                            <GIcon
                                name="appstore1"
                                type="antdesign"
                                size={25}
                                color="#000000"
                            />
                            <View style={styles.listTitleContainer}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.settingsTitleText}>
                                        {gblStrings.userManagement.deliverySettings}
                                    </Text>
                                </View>
                                <View style={styles.signInView}>
                                    <Text style={styles.settingsTitleDescText}>
                                        {gblStrings.userManagement.manageDeliverySettings}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateaccountMessagingSettings}>
                        <View style={styles.listContainer}>
                            <GIcon
                                name="appstore1"
                                type="antdesign"
                                size={25}
                                color="#000000"
                            />
                            <View style={styles.listTitleContainer}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.settingsTitleText}>
                                        {gblStrings.userManagement.accouintMessaging}
                                    </Text>
                                </View>
                                <View style={styles.signInView}>
                                    <Text style={styles.settingsTitleDescText}>
                                        {gblStrings.userManagement.manageAccountMessaging}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateSecurityPreference}>
                        <View style={styles.listContainer}>
                            <GIcon
                                name="appstore1"
                                type="antdesign"
                                size={25}
                                color="#000000"
                            />
                            <View style={styles.listTitleContainer}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.settingsTitleText}>
                                        {gblStrings.userManagement.securityPreferences}
                                    </Text>
                                </View>
                                <View style={styles.signInView}>
                                    <Text style={styles.settingsTitleDescText}>
                                        {gblStrings.userManagement.manageSecurityDetails}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateMarketingPrivacySettings}>
                        <View style={styles.listContainer}>
                            <GIcon
                                name="appstore1"
                                type="antdesign"
                                size={25}
                                color="#000000"
                            />
                            <View style={styles.listTitleContainer}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.settingsTitleText}>
                                        {gblStrings.userManagement.marketingPrivacy}
                                    </Text>
                                </View>
                                <View style={styles.signInView}>
                                    <Text style={styles.settingsTitleDescText}>
                                        {gblStrings.userManagement.manageMarketingDetails}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

GeneralSettingsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object)
};

GeneralSettingsComponent.defaultProps = {
    navigation:{},
    initialState:{}

};

export default GeneralSettingsComponent;