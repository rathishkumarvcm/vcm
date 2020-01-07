import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import {
    GHeaderComponent,
    GIcon,
    GFooterSettingsComponent,
} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class AccountMessagingSettingsComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
        };
    }   

    componentDidMount() { }

    navigateaccountMessagingGoals = () =>
        this.props.navigation.navigate('accountMessagingGoals');

    navigateaccountMessagingAdvice = () =>
        this.props.navigation.navigate('accountMessagingAdvice');

    navigateaccountMessagingGeneralDocuments = () =>
        this.props.navigation.navigate('accountMessagingGeneralDocuments');

    navigateAccountMessagingSecurityAndFraud = () =>
        this.props.navigation.navigate('AccountMessagingSecurityAndFraud');

    navigateaccountMessagingDeviceManagement = () =>
        this.props.navigation.navigate('accountMessagingDeviceManagement');   

    goBack = () => {
        this.props.navigation.goBack();
    };

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
                                {gblStrings.settingAccountMessaging.setting}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.settingsInfoCurrent}>
                            {gblStrings.settingAccountMessaging.accountMessagingArrow}
                        </Text>
                    </View>
                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.settingAccountMessaging.accountMessagingTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingAccountMessaging.accountMessagingTitleDesc}
                        </Text>
                    </View>

                    <View style={styles.listContainer}>
                        <TouchableOpacity
                            style={styles.touchOpacityPosition}
                            onPress={this.navigateaccountMessagingGoals}
                        >
                            <View style={styles.listContainerItem}>
                                <GIcon
                                    name="appstore1"
                                    type="antdesign"
                                    size={35}
                                    color="#000000"
                                />
                                <Text style={styles.listContainerItemTextTitle}>
                                    {gblStrings.settingAccountMessaging.goalTitle}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.listContainerItemTextSubtitle}>
                                    {gblStrings.settingAccountMessaging.goalTitleDesc}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listContainer}>
                        <TouchableOpacity
                            style={styles.touchOpacityPosition}
                            onPress={this.navigateaccountMessagingAdvice}
                        >
                            <View style={styles.listContainerItem}>
                                <GIcon
                                    name="appstore1"
                                    type="antdesign"
                                    size={35}
                                    color="#000000"
                                />
                                <Text style={styles.listContainerItemTextTitle}>
                                    {gblStrings.settingAccountMessaging.adviceTitle}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.listContainerItemTextSubtitle}>
                                    {gblStrings.settingAccountMessaging.adviceTitleDesc}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listContainer}>
                        <TouchableOpacity
                            style={styles.touchOpacityPosition}
                            onPress={this.navigateaccountMessagingGeneralDocuments}
                        >
                            <View style={styles.listContainerItem}>
                                <GIcon
                                    name="appstore1"
                                    type="antdesign"
                                    size={35}
                                    color="#000000"
                                />
                                <Text style={styles.listContainerItemTextTitle}>
                                    {gblStrings.settingAccountMessaging.generalDocumentsTitle}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.listContainerItemTextSubtitle}>
                                    {gblStrings.settingAccountMessaging.generalDocumentsTitleDesc}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listContainer}>
                        <TouchableOpacity
                            style={styles.touchOpacityPosition}
                            onPress={this.navigateAccountMessagingSecurityAndFraud}
                        >
                            <View style={styles.listContainerItem}>
                                <GIcon
                                    name="appstore1"
                                    type="antdesign"
                                    size={35}
                                    color="#000000"
                                />
                                <Text style={styles.listContainerItemTextTitle}>
                                    {
                                        gblStrings.settingAccountMessaging
                                            .securityAndFraudAlertsTitle
                                    }
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.listContainerItemTextSubtitle}>
                                    {
                                        gblStrings.settingAccountMessaging
                                            .securityAndFraudAlertsTitleDesc
                                    }
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listContainer}>
                        <TouchableOpacity
                            style={styles.touchOpacityPosition}
                            onPress={this.navigateaccountMessagingDeviceManagement}
                        >
                            <View style={styles.listContainerItem}>
                                <GIcon
                                    name="appstore1"
                                    type="antdesign"
                                    size={35}
                                    color="#000000"
                                />
                                <Text style={styles.listContainerItemTextTitle}>
                                    {gblStrings.settingAccountMessaging.deviceManagementTitle}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.listContainerItemTextSubtitle}>
                                    {gblStrings.settingAccountMessaging.deviceManagementTitleDesc}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

AccountMessagingSettingsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
};

AccountMessagingSettingsComponent.defaultProps = {};

export default AccountMessagingSettingsComponent;
