import React, { Component } from 'react';
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
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
            profileRelationShipData: this.props.profileState.profileRelationShipDetails,
            isRelationRefreshed: false,
            isProfileRetired: this.props.profileState.profileIsRetired,
            isServingMilitary: this.props.profileState.profileServingMilitary,
            selectedIndex: -1,

            // Profile Information
            profileName: this.props.initialState.firstName,
            profilePrefix: this.props.profileState.profilePrefix,
            profileSuffix: this.props.profileState.profileSuffix,
            profileVcmID: this.props.profileState.profileVcmID,
            profileSsnNumber: this.props.profileState.profileSsnNumber,
            profileDob: this.props.profileState.profileDob,
            profileGender: this.props.profileState.profileGender,
            profileMaritalStatus: this.props.profileState.profileMaritalStatus,
            profileCitizenship: this.props.profileState.profileCitizenship,

            // Contact Information
            profileMailingAddress: this.props.profileState.profileMailingAddress,
            profilePhysicalAddress: this.props.profileState.profilePhysicalAddress,

            // Phone Information
            profilePrimaryMobile: this.props.profileState.profilePrimaryMobile,

            // Email Information
            profilePrimayMail: this.props.profileState.profilePrimayMail,

            // Finanicial Information
            profileAnnualIncome: `$ ${this.props.profileState.financialInformations.profileAnnualIncome}`,
            profileTaxBracket: `${this.props.profileState.financialInformations.profileTaxBracket} %`,
            profileNetWorth: `$ ${this.props.profileState.financialInformations.profileNetWorth}`,
            profileTaxFilling: this.props.profileState.financialInformations.profileTaxFilling,

            // Employment Information
            profileEmploymentStatus: this.props.profileState.employmentInformations.profileEmploymentStatus,
            profileEmpIndustry: this.props.profileState.employmentInformations.profileEmpIndustry,
            profileEmpOccupation: this.props.profileState.employmentInformations.profileEmpOccupation,
            profileEmpEmployer: this.props.profileState.employmentInformations.profileEmpEmployer,
            profilePrimarySourceIncome: this.props.profileState.employmentInformations.profileSourceOfIncome,

            // Military Information
            profileMilitaryBranch: this.props.profileState.profileMilitaryInformation.profileMilitaryBranch,
            profileMilitaryRank: this.props.profileState.profileMilitaryInformation.profileMilitaryRank,
        };
    }

    componentDidMount() { }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if (this.props && this.props.profileState) {
                this.setState({
                    profilePrimaryMobile: this.props.profileState.profilePrimaryMobile,
                    profilePrimayMail: this.props.profileState.profilePrimayMail,
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

                    isProfileRetired: this.props.profileState.profileIsRetired,
                    isServingMilitary: this.props.profileState.profileServingMilitary
                });

                // Financial Information

                if (this.props && this.props.profileState && this.props.profileState.financialInformations) {
                    this.setState({
                        profileAnnualIncome: `$ ${this.props.profileState.financialInformations.profileAnnualIncome}`,
                        profileTaxBracket: `${this.props.profileState.financialInformations.profileTaxBracket} %`,
                        profileNetWorth: `$ ${this.props.profileState.financialInformations.profileNetWorth}`,
                        profileTaxFilling: this.props.profileState.financialInformations.profileTaxFilling,
                    });
                }

                // Employment Information

                if (this.props && this.props.profileState && this.props.profileState.employmentInformations) {
                    this.setState({
                        profileEmploymentStatus: this.props.profileState.employmentInformations.profileEmploymentStatus,
                        profileEmpIndustry: this.props.profileState.employmentInformations.profileEmpIndustry,
                        profileEmpOccupation: this.props.profileState.employmentInformations.profileEmpOccupation,
                        profileEmpEmployer: this.props.profileState.employmentInformations.profileEmpEmployer,
                        profilePrimarySourceIncome: this.props.profileState.employmentInformations.profileSourceOfIncome
                    });
                }

                // Military Information

                if (this.props && this.props.profileState && this.props.profileState.profileMilitaryInformation) {
                    this.setState({
                        profileMilitaryBranch: this.props.profileState.profileMilitaryInformation.profileMilitaryBranch,
                        profileMilitaryRank: this.props.profileState.profileMilitaryInformation.profileMilitaryRank
                    });
                }

                // Relationship Details

                if (this.props &&
                    this.props.profileState &&
                    this.props.profileState.profileRelationShipDetails) {
                    this.setState({
                        profileRelationShipData: this.props.profileState.profileRelationShipDetails,
                        isRelationRefreshed: true
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

    // Add Relationship Details

    profileSettingAddRelation = () => this.props.navigation.navigate('editRelationshipInfo');

    renderRelationShipInformation = () => ({ item, index }) =>
        (<View style={styles.editEmailHolder}>
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

            {index === this.state.selectedIndex ?
                (<FlatList
                    style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={this.renderProfileMenuOptions()}
                />)
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

    renderProfileMenuOptions = () => ({ item, index }) =>
        (<TouchableOpacity style={styles.editDropdown}>
            <Text style={styles.editDropdownText}
                onPress={this.onMenuItemClicked(index)}
            >
                {item.menuName}
            </Text>
        </TouchableOpacity>);

    // Manage Relationship Menu Option

    onMenuOptionClicked = (index) => () => {
        index === this.state.selectedIndex ?
            this.setState({
                isRelationRefreshed: !this.state.isRelationRefreshed,
                selectedIndex: -1
            }) :
            this.setState({
                isRelationRefreshed: !this.state.isRelationRefreshed,
                selectedIndex: index
            });
    }

    // Manage Relationship Details

    relationShipOnPressed = (index) => () => {
        if (index !== -1) {
            this.props.navigation.navigate('editFamilyMemberInfo',
                {
                    pressedPosition: index,
                    isRelation: true
                });
        }
    }

    // Manage Relationship Menu Item Clicked

    onMenuItemClicked = (index) => () => {
        switch (index) {
            case 0:
                showAlertWithCancelButton(globalString.common.vcmMemberService, 
                globalString.common.deleteAlertMsg, 
                globalString.common.cancel,
                globalString.common.delete,
                () => {
                    this.setState({
                        isRelationRefreshed: !this.state.isRelationRefreshed,
                        selectedIndex: -1
                    });
                }, 
                () => {
                    var array = [...this.state.profileRelationShipData];
                    var indexDelete = this.state.selectedIndex
                    if (indexDelete !== -1) {
                        array.splice(indexDelete, 1);
                        this.setState({
                            profileRelationShipData: array,
                            isRelationRefreshed: !this.state.isRelationRefreshed,
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
        if (this.state.show === true) {
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
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
                        <View style={styles.profileHeaderViewCenter}>
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
                        <View style={styles.profileHeaderViewCenter}>
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
                        <View style={styles.profileHeaderViewCenter}>
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
                        <View style={styles.profileHeaderViewCenter}>
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
                        <View style={styles.profileHeaderViewCenter}>
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

                            {/* User Not Retired */}

                            {!this.state.isProfileRetired ? (
                                <View>
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
                            ) : null}

                            {/* User Retired */}

                            {this.state.isProfileRetired ? (
                                <View>
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
                                            {globalString.accManagement.primarySourceIncome}
                                        </Text>
                                    </View>

                                    <View style={styles.signInView}>
                                        <Text style={styles.profileSettingValueLabel}>
                                            {this.state.profilePrimarySourceIncome}
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
                                onPress={this.profileSettingMilitaryManage}
                            >
                                {globalString.profileSettingsPage.profileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        {/* User Not Serving Military */}

                        {!this.state.isServingMilitary ? (
                            <View style={styles.settingsMilitary}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.profileSettingViewBack}>
                                        {globalString.profileSettingsPage.profileMilitaryProvideInfo}
                                    </Text>
                                </View>
                            </View>) : null}

                        {/* User Serving Military */}

                        {this.state.isServingMilitary ? (
                            <View style={styles.settingsMilitaryServing}>
                                <View style={styles.settingsView1}>
                                    <Text style={styles.profileSettingLabel}>
                                        {globalString.militaryInformationLabel.militaryStatus}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.profileSettingValueLabel}>
                                        {this.state.profileMaritalStatus}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.profileSettingLabel}>
                                        {globalString.militaryInformationLabel.militaryBranchService}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.profileSettingValueLabel}>
                                        {this.state.profileMilitaryBranch}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={styles.profileSettingLabel}>
                                        {globalString.militaryInformationLabel.militaryRank}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={styles.profileSettingValueLabel}>
                                        {this.state.profileMilitaryRank}
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
                                onPress={this.profileSettingAddRelation}
                            >
                                {globalString.profileSettingsPage.profileRelationshipAdd}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <FlatList
                            data={this.state.profileRelationShipData}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.isRelationRefreshed}
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
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object)
};

ProfileSettingsComponent.defaultProps = {
    profileState: {},
    initialState: {}
};

export default ProfileSettingsComponent;