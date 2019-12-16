import React, { Component } from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";

const tempRelationShipDetails = [
    {
        "relationShipName": 'Anna',
        "relationShipType": 'Wife',
        "relationShipGender": 'Female',
        "relationShipEmail": 'xyz@abc.com',
        "relationShipStatus": 'Married',
    }
];

const UserRelationShipInformation = (props) => {
    return (
        <View style={styles.editEmailHolder}>

            <View style={[styles.profileDivideIcon]}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {props.relationShipName}
                    </Text>
                </View>

                <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View>
            </View>

            <View style={styles.editEmailBorder} />

            <View style={styles.relationLabelTextView}>
                <Text style={styles.profileSettingLabel}>
                    {globalString.accManagement.relationToOwner}
                </Text>

                <Text style={styles.profileSettingValueLabel}>
                    {props.relationShipType}
                </Text>
            </View>

            <View style={styles.relationLabelTextView}>
                <Text style={styles.profileSettingLabel}>
                    {globalString.accManagement.gender}
                </Text>

                <Text style={styles.profileSettingValueLabel}>
                    {props.relationShipGender}
                </Text>
            </View>

            <View style={styles.relationLabelTextView}>
                <Text style={styles.profileSettingLabel}>
                    {globalString.accManagement.emailAddress}
                </Text>

                <Text style={styles.profileSettingValueLabel}>
                    {props.relationShipEmail}
                </Text>
            </View>

            <View style={styles.relationLabelTextView}>
                <Text style={styles.profileSettingLabel}>
                    {globalString.accManagement.maritalStatus}
                </Text>

                <Text style={styles.profileSettingValueLabel}>
                    {props.relationShipStatus}
                </Text>
            </View>

        </View>
    );
};

UserRelationShipInformation.propTypes = {
    relationShipName: PropTypes.string,
    relationShipType: PropTypes.string,
    relationShipGender: PropTypes.string,
    relationShipEmail: PropTypes.string,
    relationShipStatus: PropTypes.string
};

class ProfileSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            show: false,

            // Profile Information
            profileName: '',
            profilePrefix: '',
            profileSuffix: '',
            profileVcmID: '',
            profileSsnNumber: '',
            profileDob: '',
            profileGender: '',
            profileMaritalStatus: '',
            profileCitizenship: '',

            // Contact Information
            profileMailingAddress: '',
            profilePhysicalAddress: '',

            // Phone Information
            profilePrimaryMobile: '',

            // Email Information
            profilePrimayMail: '',

            // Finanicial Information
            profileAnnualIncome: '',
            profileTaxBracket: '',
            profileNetWorth: '',
            profileTaxFilling: '',

            // Employment Information
            profileEmploymentStatus: '',
            profileEmpIndustry: '',
            profileEmpOccupation: '',
            profileEmpEmployer: '',

            // RelationShip Information
            profileRelationToOwner: '',
            profileRelationGender: '',
            profileRelationMail: '',
            profileRelationMarital: ''
        };
    }

    renderRelationShipInformation = (dataLength) => ({ item, index }) =>
        (<UserRelationShipInformation
            relationShipName={item.relationShipName}
            relationShipType={item.relationShipType}
            relationShipGender={item.relationShipGender}
            relationShipEmail={item.relationShipEmail}
            relationShipStatus={item.relationShipStatus} />);

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
            });
        }

        if (this.props && this.props.initialState && this.props.initialState.phone) {
            this.setState({
                profilePrimaryMobile: this.props.initialState.phone
            });
        }

        if (this.props && this.props.initialState && this.props.initialState.email) {
            this.setState({
                profilePrimayMail: this.props.initialState.email
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profilePrefix) {
            this.setState({
                profilePrefix: this.props.profileState.profilePrefix
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileSuffix) {
            this.setState({
                profileSuffix: this.props.profileState.profileSuffix
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileVcmID) {
            this.setState({
                profileVcmID: this.props.profileState.profileVcmID
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileSsnNumber) {
            this.setState({
                profileSsnNumber: this.props.profileState.profileSsnNumber
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileDob) {
            this.setState({
                profileDob: this.props.profileState.profileDob
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileGender) {
            this.setState({
                profileGender: this.props.profileState.profileGender
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileMaritalStatus) {
            this.setState({
                profileMaritalStatus: this.props.profileState.profileMaritalStatus
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileCitizenship) {
            this.setState({
                profileCitizenship: this.props.profileState.profileCitizenship
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileMailingAddress) {
            this.setState({
                profileMailingAddress: this.props.profileState.profileMailingAddress
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profilePhysicalAddress) {
            this.setState({
                profilePhysicalAddress: this.props.profileState.profilePhysicalAddress
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profilePrimaryMobile) {
            this.setState({
                profilePrimaryMobile: this.props.profileState.profilePrimaryMobile
            });
        }

        // Financial Informations 

        if (this.props && this.props.profileState && this.props.profileState.financialInformations && this.props.profileState.financialInformations.profileAnnualIncome) {
            this.setState({
                profileAnnualIncome: '$ ' + this.props.profileState.financialInformations.profileAnnualIncome
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.financialInformations && this.props.profileState.financialInformations.profileTaxBracket) {
            this.setState({
                profileTaxBracket: this.props.profileState.financialInformations.profileTaxBracket + ' %'
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.financialInformations && this.props.profileState.financialInformations.profileNetWorth) {
            this.setState({
                profileNetWorth: '$ ' + this.props.profileState.financialInformations.profileNetWorth
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.financialInformations && this.props.profileState.financialInformations.profileTaxFilling) {
            this.setState({
                profileTaxFilling: this.props.profileState.financialInformations.profileTaxFilling
            });
        }

        // Employment Informations

        if (this.props && this.props.profileState && this.props.profileState.employmentInformations
            && this.props.profileState.employmentInformations.profileEmploymentStatus) {
            this.setState({
                profileEmploymentStatus: this.props.profileState.employmentInformations.profileEmploymentStatus
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.employmentInformations
            && this.props.profileState.employmentInformations.profileEmpIndustry) {
            this.setState({
                profileEmpIndustry: this.props.profileState.employmentInformations.profileEmpIndustry
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.employmentInformations
            && this.props.profileState.employmentInformations.profileEmpOccupation) {
            this.setState({
                profileEmpOccupation: this.props.profileState.employmentInformations.profileEmpOccupation
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.employmentInformations
            && this.props.profileState.employmentInformations.profileEmpEmployer) {
            this.setState({
                profileEmpEmployer: this.props.profileState.employmentInformations.profileEmpEmployer
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileRelationToOwner) {
            this.setState({
                profileRelationToOwner: this.props.profileState.profileRelationToOwner
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileRelationGender) {
            this.setState({
                profileRelationGender: this.props.profileState.profileRelationGender
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileRelationMail) {
            this.setState({
                profileRelationMail: this.props.profileState.profileRelationMail
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileRelationMarital) {
            this.setState({
                profileRelationMarital: this.props.profileState.profileRelationMarital
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            console.log("####################### Financial Update", this.props.profileState);
            if (this.props && this.props.profileState) {
                this.setState({
                    profilePrefix: this.props.profileState.profilePrefix,
                    profileSuffix: this.props.profileState.profileSuffix,
                    profileVcmID: this.props.profileState.profileVcmID,
                    profileSsnNumber: this.props.profileState.profileSsnNumber,
                    profileDob: this.props.profileState.profileDob,
                    profileGender: this.props.profileState.profileGender,
                    profileMaritalStatus: this.props.profileState.profileMaritalStatus,
                    profileCitizenship: this.props.profileState.profileCitizenship,
                    profileMailingAddress: this.props.profileState.profileMailingAddress,
                    profilePhysicalAddress: this.props.profileState.profilePhysicalAddress,
                    profilePrimaryMobile: this.props.profileState.profilePrimaryMobile,

                    profileRelationGender: this.props.profileState.profileRelationGender,
                    profileRelationMail: this.props.profileState.profileRelationMail,
                    profileRelationMarital: this.props.profileState.profileRelationMarital,
                });

                if (this.props && this.props.profileState && this.props.profileState.financialInformations) {
                    console.log("@@@@@@@@@@@@@@@@@@@@@ Financial Update", this.props.profileState.financialInformations);
                    this.setState({
                        profileAnnualIncome: '$ ' + this.props.profileState.financialInformations.profileAnnualIncome,
                        profileTaxBracket: this.props.profileState.financialInformations.profileTaxBracket + ' %',
                        profileNetWorth: '$ ' + this.props.profileState.financialInformations.profileNetWorth,
                        profileTaxFilling: this.props.profileState.financialInformations.profileTaxFilling,
                    });

                }

                if (this.props && this.props.profileState && this.props.profileState.employmentInformations) {
                    this.setState({
                        profileEmploymentStatus: this.props.profileState.employmentInformations.profileEmploymentStatus,
                        profileEmpIndustry: this.props.profileState.employmentInformations.profileEmpIndustry,
                        profileEmpOccupation: this.props.profileState.employmentInformations.profileEmpOccupation,
                        profileRelationToOwner: this.props.profileState.employmentInformations.profileRelationToOwner
                    });
                }
            }
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

        let profileRelationShipData = tempRelationShipDetails;

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileRelationShipDetails) {
            profileRelationShipData = this.props.profileState.profileRelationShipDetails;
        }

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
                                onPress={this.profileSettingPersonalManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.profileSettingPersonalBackground}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileNameLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingNameLabel}
                                    onPress={this.ShowHideComponent}
                                >
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
                                    {this.state.profilePrefix}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileSuffixLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileSuffix}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileVcmLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileVcmID}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileSsnLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileSsnNumber}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileDobLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileDob}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileGenderLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileGender}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileStatusLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileMaritalStatus}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileCitizenLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileCitizenship}
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
                                onPress={this.profileSettingAddressManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsAddress}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileMailingLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileMailingAddress}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profilePhysicalLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profilePhysicalAddress}
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
                                onPress={this.profileSettingPhoneManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsPhone}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profilePrimaryMobileLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profilePrimaryMobile}
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
                                onPress={this.profileSettingMailManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsPhone}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profilePrimayMail}
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
                                onPress={this.profileSettingFinancialManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsFinancial}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialOne}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileAnnualIncome}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialTwo}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileTaxBracket}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialThree}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileNetWorth}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialFour}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileTaxFilling}
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
                                onPress={this.profileSettingEmployeeManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsFinancial}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileEmployeeOne}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileEmploymentStatus}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileEmployeeTwo}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileEmpIndustry}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileEmployeeThree}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileEmpOccupation}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileEmployeeFour}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {this.state.profileEmpEmployer}
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
                                onPress={this.profileSettingMilitaryManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsMilitary}>
                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingViewBack}>
                                    {globalString.profileSettingsPage.profileMilitaryProvideInfo}
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

                        <View style={styles.settingsBorder} />

                        <FlatList
                            data={profileRelationShipData}
                            keyExtractor={this.generateKeyExtractor}
                            renderItem={this.renderRelationShipInformation(profileRelationShipData.length)} />

                    </View>

                    {/* Social Media Informations */}

                    <View>
                        <View style={[styles.settingsView]}>
                            <Text style={styles.profileSettingSocialView}>
                                {globalString.profileSettingsPage.profileSocialMediaLabel}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsSocialContainer}>

                            <View style={styles.settingsSocial}>

                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/twitterlogo.png")}
                                />

                                <Text style={styles.profileSettingSocialLabel}>
                                    {globalString.profileSettingsPage.profileFacebookLabel}
                                </Text>
                            </View>

                            <View style={styles.settingsSocial}>

                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/linkedinlogo.png")}
                                />

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
                                source={require("../../Images/logo.png")}
                            />

                            <Text style={styles.profileSettingConnectLabel}>
                                {globalString.common.connectWithUs}
                            </Text>

                            <View style={styles.whiteBackground}>
                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/twitterlogo.png")}
                                />
                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/linkedinlogo.png")}
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