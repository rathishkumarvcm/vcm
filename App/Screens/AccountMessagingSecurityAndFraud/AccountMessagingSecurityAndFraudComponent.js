import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class AccountMessagingSecurityAndFraud extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount() {
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigategeneralSettings = () => this.props.navigation.navigate('generalSettings');

    navigateSecurityPage=()=> {
        alert('Navigate to Security Page');
    }   

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
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
                            {gblStrings.settingAccountMessaging.accountMessagingSecurityFraudArrow}
                        </Text>
                    </View>

                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.settingAccountMessaging.accountMessagingSecurityFraudTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingAccountMessaging.accountMessagingSecurityFraudTitleDesc}
                        </Text>
                    </View>

                    <View style={styles.securitycontainer}>
                        <View style={styles.securityHeaderview}>
                            <GIcon
                                name="minus"
                                type="antdesign"
                                size={30}
                                color="#088ACC"
                            />
                            <Text style={styles.securityHeaderViewTitle}>
                                {gblStrings.settingAccountMessaging.accountMessagingSecurityFraudTitle}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.securitycontainerBottom}>
                        <Text style={styles.securitySuspiciousText}>
                            {gblStrings.settingAccountMessaging.accountMessagingSecurityFraudSuspicious}
                        </Text>
                        <Text style={styles.securityLearnMoreText}>
                            {gblStrings.settingAccountMessaging.accountMessagingSecurityFraudLearnMore}
                            <Text style={styles.securityCenterView} onPress={this.navigateSecurityPage}>
                                {gblStrings.settingAccountMessaging.accountMessagingSecurityFraudCenter}
                            </Text>
                            {gblStrings.settingAccountMessaging.accountMessagingSecurityFraudOnVcm}
                        </Text>
                    </View>
                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

AccountMessagingSecurityAndFraud.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

AccountMessagingSecurityAndFraud.defaultProps = {

};

export default AccountMessagingSecurityAndFraud;
