import React, { Component } from 'react';
import {styles} from './styles';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { GHeaderComponent, GIcon, GFooterComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';
import { scaledHeight } from '../../Utils/Resolution';

class ProfilesAndPreferences extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            showWelcomeText: true,
            onlineId: "",
            firstName: "",
            lastName: ""
        };
    }

    componentDidMount() {
        if (this.props && this.props.initialState) {
            if (this.props.initialState.onlineId) {
                this.setState({ onlineId: this.props.initialState.onlineId });
            }
            if (this.props.initialState.firstName) {
                this.setState({ firstName: this.props.initialState.firstName });
            }
            if (this.props.initialState.lastName) {
                this.setState({ lastName: this.props.initialState.lastName });
            }
        }
    }

    navigateSecurityPreference = () => this.props.navigation.navigate('securityPreference');

    navigateBack = () => this.props.navigation.goBack();

    navigateProfile = () => this.props.navigation.navigate('profileSettings');

    navigateDeliverySettings = () => this.props.navigation.navigate('deliverySettings');

    navigateAccountMessaging = () => this.props.navigation.navigate('accountMessagingSettings');
    
    removeWelcomeText = () => {
        this.setState({showWelcomeText:false});
    }

    render(){
        return(
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>

                    <View style={styles.welcomeView}>
                        <Text style={styles.welcomeText}>
                            {`Welcome ${this.state.firstName + " " + this.state.lastName} to Victory Capital. You have successfully logged as ${this.state.onlineId}. Set up your Security Preferences Now`}
                        </Text>
                    </View>

                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeadline}>
                            {gblStrings.userManagement.profilePreferences}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <TouchableOpacity onPress={this.navigateProfile}>
                        <View style={styles.optionContainer}>
                            <GIcon
                                name="view-grid"
                                type="material-community"
                                size={26}
                                color="black"
                            />

                            <View style={styles.optionHeaderView}>
                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.profile}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.managePersonalDetails}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateDeliverySettings}>
                        <View style={styles.optionContainer}>
                            <GIcon
                                name="view-grid"
                                type="material-community"
                                size={26}
                                color="black"
                            />
                            <View style={styles.optionHeaderView}>
                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.deliverySettings}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.managePersonalDetails}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateAccountMessaging}>
                        <View style={styles.optionContainer}>
                            <GIcon
                                name="view-grid"
                                type="material-community"
                                size={26}
                                color="black"
                            />
                            <View style={styles.optionHeaderView}>
                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.accouintMessaging}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.managePersonalDetails}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.navigateSecurityPreference}>
                        <View style={styles.optionContainer}>
                            <GIcon
                                name="view-grid"
                                type="material-community"
                                size={26}
                                color="black"
                            />
                            <View style={styles.optionHeaderView}>
                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.securityPreferences}
                                </Text>
                            </View>
                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.managePersonalDetails}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.optionContainer}>
                        <GIcon
                            name="view-grid"
                            type="material-community"
                            size={26}
                            color="black"
                        />
                        <View style={styles.optionHeaderView}>
                            <Text style={styles.optionHeaderText}>
                                {gblStrings.userManagement.marketingPrivacy}
                            </Text>
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={styles.optionSubHeaderText}>
                                {gblStrings.userManagement.managePersonalDetails}
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateBack}>
                        <Text style={styles.backButtonText}>{gblStrings.userManagement.back}</Text>
                    </TouchableOpacity>

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

ProfilesAndPreferences.propTypes = {
    navigation : PropTypes.instanceOf(Object)
};

export default ProfilesAndPreferences;
