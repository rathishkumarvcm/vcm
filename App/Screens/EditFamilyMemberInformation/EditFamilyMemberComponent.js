import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

class EditFamilyMemberComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            pressedPosition: '',
            isRelation: '',
            profileInformationValues: {}
        };
    }

    componentDidMount() {
        this.familyMemberDidMount();
    }

    familyMemberDidMount = () => {
        const { profileState, navigation } = this.props;
        const { pressedPosition } = this.state;
        let familyMembersData = [];

        if (this.props) {
            this.setState({
                pressedPosition: navigation.getParam('pressedPosition'),
                isRelation: navigation.getParam('isRelation'),
            });
        }
        
        if (this.props &&
            profileState &&
            profileState.profileRelationShipDetails) {
            familyMembersData = [...profileState.profileRelationShipDetails];
            this.setState({
                profileInformationValues: familyMembersData[Number(pressedPosition)]
            });
        }
    }

    //  Go Back to Profile Home Screen

    editFamilyDetailOnCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    }

    //  Edit Relationship Personal Details

    editFamilyDetailManage = () => {
        const { navigation } = this.props;
        const { pressedPosition, isRelation } = this.state;
        navigation.navigate('editFamilyDetail',
            {
                contactPosition: pressedPosition,
                isRelation: !isRelation
            });
    }

    //  Edit Relationship Contact Details

    editFamilyContactDetail = () => {
        const { navigation } = this.props;
        const { pressedPosition, isRelation } = this.state;
        navigation.navigate('editAddressSettings',
            {
                contactPosition: pressedPosition,
                isRelation: !isRelation
            });
    }

    //  Edit Relationship Phone Details

    editFamilyPhoneDetails = () => {
        const { navigation } = this.props;
        const { pressedPosition, isRelation } = this.state;
        navigation.navigate('editPhoneInformation',
            {
                contactPosition: pressedPosition,
                isRelation: !isRelation
            });
    }

    render() {
        const { navigation } = this.props;
        const { profileInformationValues } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.familyMemberFlex}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={styles.editFamilyMemberHead}>
                            Pro..
                        </Text>

                        <Text style={styles.editFamilyMemberOne}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editFamilyMemberHead}>
                            Bas..
                        </Text>

                        <Text style={styles.editFamilyMemberOne}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editFamilyMemberView}>
                            Relationship Information
                        </Text>
                    </View>

                    {/* Manage Regulagtory Section */}

                    <View>

                        <View style={styles.familyMemberRegulatory}>
                            <Text style={styles.editFamilyDivideTwo}>
                                {globalString.profileSettingsPage.profileRelationInfoLabel}
                            </Text>

                            <Text style={styles.editFamilyDivideThree}
                                onPress={this.editFamilyDetailManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        {/* Manage Personal Informations */}

                        <View>
                            <View style={styles.editFamilyBackground}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileNameLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyNameLabel}>
                                        {profileInformationValues.relationShipName}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profilePrefixLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        {profileInformationValues.relationPrefix}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileSuffixLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        {profileInformationValues.relationSuffix}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileRelationLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        {profileInformationValues.relationShipType}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileSsnLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        {profileInformationValues.relationSecurityNumber}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileDobLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        {profileInformationValues.relationDob}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileGenderLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        {profileInformationValues.relationShipGender}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileStatusLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        {profileInformationValues.relationShipStatus}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileCitizenLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        {profileInformationValues.relationCitizenship}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Contact Information with Manage Options */}

                        <View>
                            <View style={styles.familyMemberRegulatory}>
                                <Text style={styles.editFamilyDivideTwo}>
                                    {globalString.profileSettingsPage.profileContactLabel}
                                </Text>

                                <Text style={styles.editFamilyDivideThree}
                                    onPress={this.editFamilyContactDetail}
                                >
                                    {globalString.profileSettingsPage.profileManage}
                                </Text>
                            </View>

                            <View style={styles.settingsBorder} />

                            <View style={styles.settingsAddress}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profileMailingLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        5400 N Black Oak Lake Rd
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profilePhysicalLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        Same as mailing
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Phone Information with Manage Options */}

                        <View>
                            <View style={styles.familyMemberRegulatory}>
                                <Text style={styles.editFamilyDivideTwo}>
                                    {globalString.profileSettingsPage.profilePhoneInfoLabel}
                                </Text>

                                <Text style={styles.editFamilyDivideThree}
                                    onPress={this.editFamilyPhoneDetails}
                                >
                                    {globalString.profileSettingsPage.profileManage}
                                </Text>
                            </View>

                            <View style={styles.settingsBorder} />

                            <View style={styles.settingsPhone}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profilePrimaryMobileLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        +1(xxx) xxx - 7890
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Email Information with Manage Options */}

                        <View>
                            <View style={styles.familyMemberRegulatory}>
                                <Text style={styles.editFamilyDivideTwo}>
                                    {globalString.profileSettingsPage.profileMailLabel}
                                </Text>

                                <Text style={styles.editFamilyDivideThree}>
                                    {globalString.profileSettingsPage.profileManage}
                                </Text>
                            </View>

                            <View style={styles.settingsBorder} />

                            <View style={styles.settingsPhone}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.editFamilyLabel}>
                                        {globalString.profileSettingsPage.profilePrimaryLabel}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.editFamilyValue}>
                                        paxxxxx@example.com
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editFamilyDetailOnCancel}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editAddressSecurity}>
                            {globalString.editAddressInfo.editAddressSecurity}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editAddressInfo.editAddressTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editAddressInfo.editAddressInvestments}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={ImagesLoad.applicationLogo}
                        />
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

                    <View style={styles.copyRightSection}>
                        <Text style={styles.copyRightText}>
                            {globalString.common.copyRights}
                        </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

EditFamilyMemberComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    profileState: PropTypes.instanceOf(Object)
};

EditFamilyMemberComponent.defaultProps = {
    navigation: {},
    profileState: {}
};

export default EditFamilyMemberComponent;