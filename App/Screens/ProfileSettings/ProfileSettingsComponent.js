import React, { Component } from 'react';
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, showAlertWithCancelButton } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

const editDeleteMenuOption = [
    {
        menuName: 'Delete',
        menuId: '1'
    }
];

class ProfileSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            profileRelationShipData: '',
            isRelationRefreshed: false,
            isProfileRetired: '',
            isServingMilitary: '',
            selectedIndex: -1,

            //  Profile Information
            personalInformations: {
                profileName: '',
                profilePrefix: '',
                profileSuffix: '',
                profileVcmID: '',
                profileSsnNumber: '',
                profileDob: '',
                profileGender: '',
                profileMaritalStatus: '',
                profileCitizenship: '',
            },

            //  Contact Information
            contactInformations: {
                profileMailingAddress: '',
                profilePhysicalAddress: '',
            },

            //  Phone Information
            profilePrimaryMobile: '',

            //  Email Information
            profilePrimayMail: '',

            //  Finanicial Information
            financialInformationData: {
                profileAnnualIncome: '',
                profileTaxBracket: '',
                profileNetWorth: '',
                profileTaxFilling: '',
            },

            //  Employment Information
            employmentInformationData: {
                profileEmploymentStatus: '',
                profileEmpIndustry: '',
                profileEmpOccupation: '',
                profileEmpEmployer: '',
                profilePrimarySourceIncome: '',
            },

            //  Military Information
            profileMilitaryBranch: '',
            profileMilitaryRank: ''
        };
    }

    componentDidMount() {
        this.profileSettingsMount();
    }

    componentDidUpdate(prevProps) {
        this.profileSettingsUpdateScreen(prevProps);
    }

    profileSettingsMount = () => {
        const { initialState, profileState } = this.props;
        const { personalInformations, contactInformations, financialInformationData, employmentInformationData } = this.state;
        if (this.props) {
            this.setState({
                profileRelationShipData: profileState.profileRelationShipDetails,
                isRelationRefreshed: false,
                isProfileRetired: profileState.profileIsRetired,
                isServingMilitary: profileState.profileServingMilitary,
                selectedIndex: -1,

                // Profile Information
                personalInformations: {
                    ...personalInformations,
                    profileName: initialState.firstName,
                    profilePrefix: profileState.profilePrefix,
                    profileSuffix: profileState.profileSuffix,
                    profileVcmID: profileState.profileVcmID,
                    profileSsnNumber: profileState.profileSsnNumber,
                    profileDob: profileState.profileDob,
                    profileGender: profileState.profileGender,
                    profileMaritalStatus: profileState.profileMaritalStatus,
                    profileCitizenship: profileState.profileCitizenship,
                },

                // Contact Information
                contactInformations: {
                    ...contactInformations,
                    profileMailingAddress: profileState.profileMailingAddress,
                    profilePhysicalAddress: profileState.profilePhysicalAddress,
                },

                // Phone Information
                profilePrimaryMobile: profileState.profilePrimaryMobile,

                // Email Information
                profilePrimayMail: profileState.profilePrimayMail,

                // Finanicial Information
                financialInformationData: {
                    ...financialInformationData,
                    profileAnnualIncome: `$ ${profileState.financialInformations.profileAnnualIncome}`,
                    profileTaxBracket: `${profileState.financialInformations.profileTaxBracket} %`,
                    profileNetWorth: `$ ${profileState.financialInformations.profileNetWorth}`,
                    profileTaxFilling: profileState.financialInformations.profileTaxFilling,
                },

                // Employment Information
                employmentInformationData: {
                    ...employmentInformationData,
                    profileEmploymentStatus: profileState.employmentInformations.profileEmploymentStatus,
                    profileEmpIndustry: profileState.employmentInformations.profileEmpIndustry,
                    profileEmpOccupation: profileState.employmentInformations.profileEmpOccupation,
                    profileEmpEmployer: profileState.employmentInformations.profileEmpEmployer,
                    profilePrimarySourceIncome: profileState.employmentInformations.profileSourceOfIncome,
                },

                // Military Information
                profileMilitaryBranch: profileState.profileMilitaryInformation.profileMilitaryBranch,
                profileMilitaryRank: profileState.profileMilitaryInformation.profileMilitaryRank,
            });
        }
    }

    profileSettingsUpdateScreen = (prevProps) => {
        const { profileState } = this.props;
        if (this.props !== prevProps) {
            if (profileState) {
                this.setState({
                    profilePrimaryMobile: profileState.profilePrimaryMobile,
                    profilePrimayMail: profileState.profilePrimayMail,
                    personalInformations: {
                        profilePrefix: profileState.profilePrefix,
                        profileSuffix: profileState.profileSuffix,
                        profileVcmID: profileState.profileVcmID,
                        profileSsnNumber: profileState.profileSsnNumber,
                        profileDob: profileState.profileDob,
                        profileGender: profileState.profileGender,
                        profileMaritalStatus: profileState.profileMaritalStatus,
                        profileCitizenship: profileState.profileCitizenship,
                    },
                    contactInformations: {
                        profileMailingAddress: profileState.profileMailingAddress,
                        profilePhysicalAddress: profileState.profilePhysicalAddress,
                    },
                    isProfileRetired: profileState.profileIsRetired,
                    isServingMilitary: profileState.profileServingMilitary
                });

                //  Financial Information

                if (profileState.financialInformations) {
                    this.setState({
                        financialInformationData: {
                            profileAnnualIncome: `$ ${profileState.financialInformations.profileAnnualIncome}`,
                            profileTaxBracket: `${profileState.financialInformations.profileTaxBracket} %`,
                            profileNetWorth: `$ ${profileState.financialInformations.profileNetWorth}`,
                            profileTaxFilling: profileState.financialInformations.profileTaxFilling,
                        }
                    });
                }

                //  Employment Information

                if (profileState.employmentInformations) {
                    this.setState({
                        employmentInformationData: {
                            profileEmploymentStatus: profileState.employmentInformations.profileEmploymentStatus,
                            profileEmpIndustry: profileState.employmentInformations.profileEmpIndustry,
                            profileEmpOccupation: profileState.employmentInformations.profileEmpOccupation,
                            profileEmpEmployer: profileState.employmentInformations.profileEmpEmployer,
                            profilePrimarySourceIncome: profileState.employmentInformations.profileSourceOfIncome
                        }
                    });
                }

                //  Military Information

                if (profileState.profileMilitaryInformation) {
                    this.setState({
                        profileMilitaryBranch: profileState.profileMilitaryInformation.profileMilitaryBranch,
                        profileMilitaryRank: profileState.profileMilitaryInformation.profileMilitaryRank
                    });
                }

                //  Relationship Details

                if (profileState.profileRelationShipDetails) {
                    this.setState({
                        profileRelationShipData: profileState.profileRelationShipDetails,
                        isRelationRefreshed: true
                    });
                }
            }
        }
    }

    profileScreenNavigation = (screenName) => () => {
        const { navigation } = this.props;
        switch (screenName) {
            case 'editProfileSettings':
                navigation.navigate('editProfileSettings');
                break;

            case 'editAddressSettings':
                navigation.navigate('editAddressSettings');
                break;

            case 'editPhoneInformation':
                navigation.navigate('editPhoneInformation');
                break;

            case 'editEmailInformation':
                navigation.navigate('editEmailInformation');
                break;

            case 'editAddFinancialInfo':
                navigation.navigate('editAddFinancialInfo');
                break;

            case 'editOccupationInfo':
                navigation.navigate('editOccupationInfo');
                break;

            case 'editMilitaryInfo':
                navigation.navigate('editMilitaryInfo');
                break;

            case 'editRelationshipInfo':
                navigation.navigate('editRelationshipInfo');
                break;

            default:
                break;
        }
    }

    renderRelationShipInformation = () => ({ item, index }) => {
        const { selectedIndex } = this.state;
        return (
            <View style={styles.editEmailHolder}>
                <View style={styles.profileDivideIcon}>
                    <View style={styles.profileDivideIconOne}>
                        <Text style={styles.editEmailType}
                            onPress={this.relationShipOnPressed(index)}
                        >
                            {item.relationShipName}
                        </Text>
                    </View>

                    <View style={styles.profileDivideIconTwo}>
                        <TouchableOpacity
                            onPress={this.onMenuOptionClicked(index)}
                        >
                            <Image style={styles.imageWidthHeight}
                                source={ImagesLoad.menuIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {index === selectedIndex ?
                    (
                        <FlatList
                            style={styles.editFlatList}
                            data={editDeleteMenuOption}
                            renderItem={this.renderProfileMenuOptions()}
                        />
                    )
                    : null}

                <View style={styles.editEmailBorder} />

                <View style={styles.relationLabelTextView}>
                    <Text style={styles.profileSettingLabel}>
                        {globalString.accManagement.relationToOwner}
                    </Text>

                    <Text style={styles.profileSettingValueLabel}>
                        {item.relationShipType}
                    </Text>
                </View>

                <View style={styles.relationLabelTextView}>
                    <Text style={styles.profileSettingLabel}>
                        {globalString.accManagement.gender}
                    </Text>

                    <Text style={styles.profileSettingValueLabel}>
                        {item.relationShipGender}
                    </Text>
                </View>

                <View style={styles.relationLabelTextView}>
                    <Text style={styles.profileSettingLabel}>
                        {globalString.accManagement.emailAddress}
                    </Text>

                    <Text style={styles.profileSettingValueLabel}>
                        {item.relationShipEmail}
                    </Text>
                </View>

                <View style={styles.relationLabelTextView}>
                    <Text style={styles.profileSettingLabel}>
                        {globalString.accManagement.maritalStatus}
                    </Text>

                    <Text style={styles.profileSettingValueLabel}>
                        {item.relationShipStatus}
                    </Text>
                </View>
            </View>
        );
    }

    renderProfileMenuOptions = () => ({ item, index }) =>
        (
            <TouchableOpacity style={styles.editDropdown}>
                <Text style={styles.editDropdownText}
                    onPress={this.onMenuItemClicked(index)}
                >
                    {item.menuName}
                </Text>
            </TouchableOpacity>
        );

    onMenuOptionClicked = (index) => () => {
        const { selectedIndex, isRelationRefreshed } = this.state;
        if (index === selectedIndex) {
            this.setState({
                isRelationRefreshed: !isRelationRefreshed,
                selectedIndex: -1
            });
        } else {
            this.setState({
                isRelationRefreshed: !isRelationRefreshed,
                selectedIndex: index
            });
        }
    }

    //  Manage Relationship Details

    relationShipOnPressed = (index) => () => {
        const { navigation } = this.props;
        if (index !== -1) {
            navigation.navigate('editFamilyMemberInfo',
                {
                    pressedPosition: index,
                    isRelation: true
                });
        }
    }

    //  Manage Relationship Menu Item Clicked

    onMenuItemClicked = (index) => () => {
        switch (index) {
            case 0:
                showAlertWithCancelButton(globalString.common.vcmMemberService,
                    globalString.common.deleteAlertMsg,
                    globalString.common.cancel,
                    globalString.common.delete,
                    () => {
                        const { isRelationRefreshed } = this.state;
                        this.setState({
                            isRelationRefreshed: !isRelationRefreshed,
                            selectedIndex: -1
                        });
                    },
                    () => {
                        const { isRelationRefreshed, profileRelationShipData, selectedIndex } = this.state;
                        const array = [...profileRelationShipData];
                        const indexDelete = selectedIndex;
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                profileRelationShipData: array,
                                isRelationRefreshed: !isRelationRefreshed,
                                selectedIndex: -1
                            });
                        }
                    });
                break;

            default:
                break;
        }
    }

    ShowHideComponent = () => {
        const { show } = this.state;
        if (show === true) {
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    };

    render() {
        const { navigation } = this.props;
        const { personalInformations, show, contactInformations, profilePrimaryMobile, profilePrimayMail,
            financialInformationData, isProfileRetired, employmentInformationData, isServingMilitary,
            profileRelationShipData, isRelationRefreshed, profileMilitaryBranch, profileMilitaryRank } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.profileFlex}>

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
                        <View style={styles.profileHeaderViewCenter}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profilePersonalInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileScreenNavigation('editProfileSettings')}
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
                                    {personalInformations.profileName}
                                </Text>
                            </View>

                            <View style={styles.profileSettingNameBackground}>
                                {show ? (
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
                                    {personalInformations.profilePrefix}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileSuffixLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {personalInformations.profileSuffix}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileVcmLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {personalInformations.profileVcmID}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileSsnLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {personalInformations.profileSsnNumber}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileDobLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {personalInformations.profileDob}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileGenderLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {personalInformations.profileGender}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileStatusLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {personalInformations.profileMaritalStatus}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileCitizenLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {personalInformations.profileCitizenship}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Contact Information with Manage Options */}

                    <View>
                        <View style={styles.profileHeaderViewCenter}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileContactLabel}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileScreenNavigation('editAddressSettings')}
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
                                    {contactInformations.profileMailingAddress}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profilePhysicalLabel}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {contactInformations.profilePhysicalAddress}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Phone Information with Manage Options */}

                    <View>
                        <View style={styles.profileHeaderViewCenter}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profilePhoneInfoLabel}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileScreenNavigation('editPhoneInformation')}
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
                                    {profilePrimaryMobile}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Email Information with Manage Options */}

                    <View>
                        <View style={styles.profileHeaderViewCenter}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileMailLabel}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileScreenNavigation('editEmailInformation')}
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
                                    {profilePrimayMail}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Financial Information with Manage Options */}

                    <View>
                        <View style={styles.profileHeaderViewCenter}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileFinancialInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileScreenNavigation('editAddFinancialInfo')}
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
                                    {financialInformationData.profileAnnualIncome}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialTwo}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {financialInformationData.profileTaxBracket}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialThree}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {financialInformationData.profileNetWorth}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={styles.profileSettingLabel}>
                                    {globalString.profileSettingsPage.profileFinancialFour}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={styles.profileSettingValueLabel}>
                                    {financialInformationData.profileTaxFilling}
                                </Text>
                            </View>

                        </View>
                    </View>

                    {/* Employment Information with Manage Options */}

                    <View>
                        <View style={styles.profileHeaderViewCenter}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileEmployeeInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileScreenNavigation('editOccupationInfo')}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsFinancial}>

                            {/* User Not Retired */}

                            {!isProfileRetired ? (
                                <View>
                                    <View style={styles.settingsView1}>
                                        <Text style={styles.profileSettingLabel}>
                                            {globalString.profileSettingsPage.profileEmployeeOne}
                                        </Text>
                                    </View>

                                    <View style={styles.signInView}>
                                        <Text style={styles.profileSettingValueLabel}>
                                            {employmentInformationData.profileEmploymentStatus}
                                        </Text>
                                    </View>

                                    <View style={styles.settingsView1}>
                                        <Text style={styles.profileSettingLabel}>
                                            {globalString.profileSettingsPage.profileEmployeeTwo}
                                        </Text>
                                    </View>

                                    <View style={styles.signInView}>
                                        <Text style={styles.profileSettingValueLabel}>
                                            {employmentInformationData.profileEmpIndustry}
                                        </Text>
                                    </View>

                                    <View style={styles.settingsView1}>
                                        <Text style={styles.profileSettingLabel}>
                                            {globalString.profileSettingsPage.profileEmployeeThree}
                                        </Text>
                                    </View>

                                    <View style={styles.signInView}>
                                        <Text style={styles.profileSettingValueLabel}>
                                            {employmentInformationData.profileEmpOccupation}
                                        </Text>
                                    </View>

                                    <View style={styles.settingsView1}>
                                        <Text style={styles.profileSettingLabel}>
                                            {globalString.profileSettingsPage.profileEmployeeFour}
                                        </Text>
                                    </View>

                                    <View style={styles.signInView}>
                                        <Text style={styles.profileSettingValueLabel}>
                                            {employmentInformationData.profileEmpEmployer}
                                        </Text>
                                    </View>
                                </View>
                            ) : null}

                            {/* User Retired */}

                            {isProfileRetired ? (
                                <View>
                                    <View style={styles.settingsView1}>
                                        <Text style={styles.profileSettingLabel}>
                                            {globalString.profileSettingsPage.profileEmployeeOne}
                                        </Text>
                                    </View>

                                    <View style={styles.signInView}>
                                        <Text style={styles.profileSettingValueLabel}>
                                            {employmentInformationData.profileEmploymentStatus}
                                        </Text>
                                    </View>

                                    <View style={styles.settingsView1}>
                                        <Text style={styles.profileSettingLabel}>
                                            {globalString.accManagement.primarySourceIncome}
                                        </Text>
                                    </View>

                                    <View style={styles.signInView}>
                                        <Text style={styles.profileSettingValueLabel}>
                                            {employmentInformationData.profilePrimarySourceIncome}
                                        </Text>
                                    </View>
                                </View>
                            ) : null}

                        </View>

                    </View>

                    {/* Military Information with Manage Options */}

                    <View>
                        <View style={styles.profileHeaderViewCenter}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileMilitaryInfo}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileScreenNavigation('editMilitaryInfo')}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        {/* User Not Serving Military */}

                        {!isServingMilitary ? (
                            <View style={styles.settingsMilitary}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.profileSettingViewBack}>
                                        {globalString.profileSettingsPage.profileMilitaryProvideInfo}
                                    </Text>
                                </View>
                            </View>
                        ) : null}

                        {/* User Serving Military */}

                        {isServingMilitary ? (
                            <View style={styles.settingsMilitaryServing}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.profileSettingLabel}>
                                        {globalString.militaryInformationLabel.militaryStatus}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.profileSettingValueLabel}>
                                        {personalInformations.profileMaritalStatus}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.profileSettingLabel}>
                                        {globalString.militaryInformationLabel.militaryBranchService}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.profileSettingValueLabel}>
                                        {profileMilitaryBranch}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.profileSettingLabel}>
                                        {globalString.militaryInformationLabel.militaryRank}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.profileSettingValueLabel}>
                                        {profileMilitaryRank}
                                    </Text>
                                </View>
                            </View>
                        ) : null}

                    </View>

                    {/* Manage Relationship with Add Options */}

                    <View>
                        <View style={styles.profileHeaderViewCenter}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.profileSettingsPage.profileRelationshipLabel}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}
                                onPress={this.profileScreenNavigation('editRelationshipInfo')}
                            >
                                {globalString.profileSettingsPage.profileRelationshipAdd}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <FlatList
                            data={profileRelationShipData}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={isRelationRefreshed}
                            renderItem={this.renderRelationShipInformation()}
                        />

                    </View>

                    {/* Social Media Informations */}

                    <View>
                        <View style={styles.settingsView}>
                            <Text style={styles.profileSettingSocialView}>
                                {globalString.profileSettingsPage.profileSocialMediaLabel}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsSocialContainer}>
                            <View style={styles.settingsSocial}>
                                <Image style={styles.imageWidthHeight}
                                    source={ImagesLoad.twitterlogo}
                                />
                                <Text style={styles.profileSettingSocialLabel}>
                                    {globalString.profileSettingsPage.profileFacebookLabel}
                                </Text>
                            </View>

                            <View style={styles.settingsSocial}>
                                <Image style={styles.imageWidthHeight}
                                    source={ImagesLoad.linkedinlogo}
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
                                source={ImagesLoad.applicationLogo}
                            />

                            <Text style={styles.profileSettingConnectLabel}>
                                {globalString.common.connectWithUs}
                            </Text>

                            <View style={styles.whiteBackground}>
                                <Image style={styles.imageWidthHeight}
                                    source={ImagesLoad.twitterlogo}
                                />
                                <Image style={styles.imageWidthHeight}
                                    source={ImagesLoad.linkedinlogo}
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

ProfileSettingsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    profileState: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object)
};

ProfileSettingsComponent.defaultProps = {
    navigation: {},
    profileState: {},
    initialState: {}
};

export default ProfileSettingsComponent;