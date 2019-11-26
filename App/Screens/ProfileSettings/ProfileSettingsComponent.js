import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

class ProfileSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            show: false,
            profileName: ''
        };
    }

    ShowHideComponent = () => {
        if (this.state.show == true) {
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    };

    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.firstName) {
            this.setState({
                profileName: this.props.initialState.firstName
            })
        }
    }

    profileSettingPersonalManage = () => this.props.navigation.navigate('editProfileSettings');

    profileSettingAddressManage = () => this.props.navigation.navigate('editAddressSettings');

    profileSettingPhoneManage = () => this.props.navigation.navigate('editPhoneInformation');

    profileSettingMailManage = () => this.props.navigation.navigate('editEmailInformation');

    profileSettingFinancialManage = () => this.props.navigation.navigate('editAddFinancialInfo');

    profileSettingEmployeeManage = () => this.props.navigation.navigate('editOccupationInfo');

    profileSettingMilitaryManage = () => this.props.navigation.navigate('editMilitaryInfo');

    profileSettingRegulatoryManage = () => this.props.navigation.navigate('editRegulatoryInfo');

    profileSettingAddRelation = () => this.props.navigation.navigate('editRelationshipInfo');

    profileSettingFamilyManage = () => this.props.navigation.navigate('editFamilyMemberInfo');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={styles.profileSettingHead}>
                            {globalString.profileSettingsPage.profileHeadOne}
                        </Text>

                        <Text style={styles.profileSettingHeadOne}>
                            {globalString.profileSettingsPage.profileHeadArrow}
                        </Text>

                        <Text style={styles.profileSettingHeadTwo}>
                            {globalString.profileSettingsPage.profileHeadTwo}
                        </Text>
                    </View>

                    {/* Personal Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profilePersonalInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingPersonalManage}>
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.profileSettingPersonalBackground}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileNameLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingNameLabel}
                                    onPress={this.ShowHideComponent}>
                                    {this.state.profileName}
                                </Text>
                            </View>

                            <View style={styles.profileSettingNameBackground}>
                                {this.state.show ? (
                                    <Text style={styles.profileSettingNameDetailLabel}>
                                        {globalString.profileSettingsPage.profileNameContentMsg}
                                    </Text>
                                ) : null}
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profilePrefixLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"1LT"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileSuffixLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"Sr."}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileVcmLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"YYMM9999999"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileSsnLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"xxx-xx-1234"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileDobLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"MM-DD-YYYY"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileGenderLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"Male"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileStatusLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"Married"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileCitizenLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"United States"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Contact Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileContactLabel}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingAddressManage}>
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsAddress}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileMailingLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"5400 N Black Oak Lake Rd"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profilePhysicalLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"Same as mailing"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Phone Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profilePhoneInfoLabel}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingPhoneManage}>
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsPhone}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profilePrimaryMobileLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"+1(xxx) xxx - 7890"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Email Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileMailLabel}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingMailManage}>
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsPhone}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"paxxxxx@example.com"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Financial Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileFinancialInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingFinancialManage}>
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsFinancial}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialOne}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"$ 100,000"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialTwo}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"10%"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialThree}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"$ 100,000,000"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialFour}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"Single individual"}
                                </Text>
                            </View>

                        </View>
                    </View>

                    {/* Employment Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileEmployeeInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingEmployeeManage}>
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsFinancial}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileEmployeeOne}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"None on file"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileEmployeeTwo}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"None on file"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileEmployeeThree}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"None on file"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileEmployeeFour}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"None on file"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Military Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileMilitaryInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingMilitaryManage}>
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsMilitary}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingViewBack}>
                                    {globalString.profileSettingsPage.profileMilitaryProvideInfo}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Regulatory Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileRegulatoryInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingRegulatoryManage}>
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsMilitary}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingViewBack}>
                                    {globalString.profileSettingsPage.profileRegulatoryQues}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Manage Relationship with Add Options */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileRelationshipLabel}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileSettingAddRelation}>
                                {globalString.profileSettingsPage.profileRelationshipAdd}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsRelationShip}
                            onPress={this.profileSettingFamilyManage}>
                            <View style={styles.settingsBorderGap}>
                                <Text style={styles.profileSettingLabel}
                                    onPress={this.profileSettingFamilyManage}>
                                    {globalString.profileSettingsPage.profileFamilyMemberLabel}
                                </Text>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"Wife"}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.settingsRelationShip}>
                            <View style={styles.settingsBorderGap}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFamilyMemberLabel}
                                </Text>
                                <Text style={styles.profileSettingValueLabel}>
                                    {"Daughter"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Social Media Informations */}

                    <View>
                        <View style={[styles.settingsView]}>
                            <Text style={styles.profileSettingSocialView}>
                                {globalString.profileSettingsPage.profileSocialMediaLabel}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsSocialContainer}>

                            <View style={styles.settingsSocial}>

                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/twitterlogo.png")} />

                                <Text style={styles.profileSettingSocialLabel}>
                                    {globalString.profileSettingsPage.profileFacebookLabel}
                                </Text>
                            </View>

                            <View style={styles.settingsSocial}>

                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/linkedinlogo.png")} />

                                <Text style={styles.profileSettingSocialLabel}>
                                    {globalString.profileSettingsPage.profileTwitterLabel}
                                </Text>
                            </View>
                        </View>

                    </View>

                    {/* Footer Section - Privacy and User Agreements */}

                    <View>
                        <View style={styles.profileSettingFooterView}>
                            <Text style={styles.profileSettingShareLabel}>
                                {globalString.profileSettingsPage.profileSharing}
                            </Text>

                            <Text style={styles.profileSettingSecurityLabel}>
                                {globalString.profileSettingsPage.profileSecurity}
                            </Text>
                        </View>

                        <View style={styles.settingsFooter}>
                            <Text style={styles.profileSettingInvestLabel}>
                                {globalString.profileSettingsPage.profileInvest}
                            </Text>

                            <Image style={styles.profileSettingSocialIcon}
                                source={require("../../Images/logo.png")} />

                            <Text style={styles.profileSettingConnectLabel}>
                                {globalString.common.connectWithUs}
                            </Text>

                            <View style={styles.whiteBackground}>
                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/twitterlogo.png")} />
                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/linkedinlogo.png")} />
                            </View>

                            <View style={styles.privacyAgreement}>
                                <Text style={styles.privacyText}>
                                    {globalString.common.privacyPolicy}
                                </Text>

                                <Text style={styles.privacyText}>
                                    {globalString.common.fundDocuments}
                                </Text>
                            </View>

                            <View style={styles.privacyAgreement}>
                                <Text style={styles.privacyText}>
                                    {globalString.common.userAgreement}
                                </Text>

                                <Text style={styles.privacyText}>
                                    {globalString.common.support}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.copyRightSection}>
                            <Text style={styles.copyRightText}>
                                {globalString.common.copyRights}
                            </Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
        );
    }
}

export default ProfileSettingsComponent;