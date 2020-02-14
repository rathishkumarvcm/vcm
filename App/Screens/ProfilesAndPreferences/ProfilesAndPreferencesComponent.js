import React, { Component } from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GIcon, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class ProfilesAndPreferences extends Component {
    constructor(props){
        super(props);
        this.state = {
            // isLoading:false,
            // onlineId: "",
            // firstName: "",
            // lastName: ""
        };
    }

    componentDidMount() {
        const { initialState } = this.props;
        if (this.props && initialState) {
            // if (initialState.onlineId) {
            //     this.setState({ onlineId: initialState.onlineId });
            // }
            // if (initialState.firstName) {
            //     this.setState({ firstName: initialState.firstName });
            // }
            // if (initialState.lastName) {
            //     this.setState({ lastName: initialState.lastName });
            // }
        }
    }

    navigateBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }
   
    navigateProfile = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    }

    navigateDeliverySettings = () => {
        const { navigation } = this.props;
        navigation.navigate('deliverySettings');
    }

    navigateAccountMessaging = () => {
        const { navigation } = this.props;
        navigation.navigate('accountMessagingSettings');
    }

    navigateSecurityPreference = () => {
        const { navigation } = this.props;
        navigation.navigate('securityPreference');
    }
    
    navigateMarketingPrivacySettings = () => {
        const { navigation } = this.props;
        navigation.navigate('marketingandPrivacySettings');
    }

    render(){
        const { navigation } = this.props;
        return(
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.containercenter}>

                    {/* <View style={styles.welcomeView}>
                        <Text style={styles.welcomeText}>
                            {`Welcome ${this.state.firstName + " " + this.state.lastName} to Victory Capital. You have successfully logged as ${this.state.onlineId}. Set up your Security Preferences Now`}
                        </Text>
                    </View> */}

                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeadline}>
                            {gblStrings.userManagement.profilePreferences}
                        </Text>
                    </View>

                    {/* <View style={styles.linkBreak1} /> */}

                    <TouchableOpacity onPress={this.navigateProfile}>

                        <View style={styles.optionContainer}>
                            <View style={styles.optionRowContainer}>
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
                            </View>
                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateDeliverySettings}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionRowContainer}>
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
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateAccountMessaging}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionRowContainer}>
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
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.navigateSecurityPreference}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionRowContainer}>
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
                            </View>
                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateMarketingPrivacySettings}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionRowContainer}>
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
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>                        
                        </View>
                    </TouchableOpacity>

                    <View style={styles.securityContainer}>
                        <Text style={styles.securityContainerText}>
                            {gblStrings.userManagement.securityText} 
                            <Text style={styles.securityContainerPhoneText}>
                            {gblStrings.common.supportVCMPhoneNumber} 
                            </Text>                          
                        </Text>
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
    navigation : PropTypes.instanceOf(Object),
    initialState : PropTypes.instanceOf(Object)
};
ProfilesAndPreferences.defaultProps = {
    navigation:{},
    initialState:{}
};
export default ProfilesAndPreferences;
