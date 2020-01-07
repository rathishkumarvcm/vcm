import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GIcon, GFooterSettingsComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class GeneralSettingsComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,           
        };
    }

    componentDidMount() { }

    navigateprofileSettings = () => this.props.navigation.navigate('profileSettings');
    navigateDeliverySettings = () => this.props.navigation.navigate('deliverySettings');
    navigateaccountMessagingSettings = () => this.props.navigation.navigate('accountMessagingSettings');
    navigateSecurityPreference = () => this.props.navigation.navigate('securityPreference');   
    navigateMarketingPrivacySettings = () => this.props.navigation.navigate('marketingandPrivacySettings');

    render() {

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsHeadline}>
                            {gblStrings.common.settings}
                        </Text>
                    </View>

                    <View style={styles.signInView}>
                    {
                        (this.props && this.props.initialState && this.props.initialState.email && this.props.initialState.firstName && this.props.initialState.lastName)?
                        <Text style={styles.signInUserNametext}>
                            {this.props.initialState.firstName} {this.props.initialState.lastName}{", "}  
                            <Text style={styles.signInUserEmailtext}>
                                {this.props.initialState.email}
                            </Text>
                        </Text>
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

};

export default GeneralSettingsComponent;