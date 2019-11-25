import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon } from '../../CommonComponents';
import PropTypes from 'prop-types';
import gblStrings from '../../Constants/GlobalStrings';

class AccountMessagingGoalsComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigategeneralSettings = () => this.props.navigation.navigate('generalSettings');

    navigateCreateGoal() {
        alert('Navigate to Create Goal');
    }

    componentDidMount() {
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
                            {gblStrings.settingAccountMessaging.accountMessagingGoalsArrow}
                        </Text>
                    </View>

                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.settingAccountMessaging.goalTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingAccountMessaging.accountMessagingGoalTitleDesc}
                        </Text>
                    </View>

                    <View style={styles.goalcontainer}>
                        <View style={styles.goalHeaderview}>
                            <GIcon
                                name="minus"
                                type="antdesign"
                                size={30}
                                color="#088ACC"
                            />
                            <Text style={styles.goalHeaderViewTitle}>
                                {gblStrings.settingAccountMessaging.accountMessagingGoalDebtManagementGoal}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.goalcontainerBottom}>
                        <Text style={styles.goalAlertsContent}>
                            {gblStrings.settingAccountMessaging.accountMessagingGoalAlertForGoals}
                        </Text>
                        <View style={styles.lineBorder} />
                        <Text style={styles.goalNoAlerts}>
                            {gblStrings.settingAccountMessaging.accountMessagingGoalNoGoals}
                        </Text>
                        <View style={styles.goalCreateView}>
                            <GIcon
                                name="rightsquare"
                                type="antdesign"
                                size={20}
                                color="#4D4D4D"
                            />
                            <Text style={styles.goalCreateText} onPress={this.navigateCreateGoal}>
                                {gblStrings.settingAccountMessaging.accountMessagingGoalCreateGoal}
                            </Text>
                        </View>
                    </View>

                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

AccountMessagingGoalsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

AccountMessagingGoalsComponent.defaultProps = {

};

export default AccountMessagingGoalsComponent;
