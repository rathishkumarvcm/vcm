import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GSingletonClass, showAlert } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';



const myInstance = GSingletonClass.getInstance();

class OpenAccPageFiveComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
    }

    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    onClickHeader = () => {
        AppUtils.debugLog("#TODO : onClickHeader");
    }

    goBack = () => {
        const { navigation } = this.props;
        const { goBack } = navigation;
        goBack();
    }

    onClickCancel = () => {
        myInstance.setAccOpeningEditMode(false);
        const { navigation } = this.props;
        const { goBack } = navigation;
        goBack('termsAndConditions');
    }

    onClickDownloadPDF = () => {
        showAlert(gblStrings.common.appName, "#TODO : Download", gblStrings.common.ok);

    }

    onClickNext = () => {
        this.validateFields();
    }

    onClickSave = () => {
        this.validateFields();
    }

    validateFields = () => {
        const { navigation} = this.props;
        const { push, navigate,getParam} = navigation;  
        const specialMFAUserType = `${this.props && getParam('SpecialMFA', '')}`;
        if (specialMFAUserType === "GuestUser") {
            push('login', { SpecialMFA: 'GuestUser' });
        }
        else if (specialMFAUserType === "NewUser") {
            push('openAccPageSix', { SpecialMFA: 'NewUser' });
        }
        else if (specialMFAUserType === "UserForm") {
            push('openAccPageSix', { SpecialMFA: 'UserForm' });
        }
        else {
            navigate({ routeName: 'openAccPageSix', key: 'openAccPageSix' });
        }
    }

    getFieldValue = () => {

    }

    navigateToScreen = (routeName) => () => {
        myInstance.setAccOpeningEditMode(true);
        const { navigation} = this.props;
        const { navigate } = navigation;  
        
        navigate({ routeName, key: routeName });
    }

    generateKeyExtractor = (item) => item.fundNumber.toString();

    renderFundItem = () => ({ item }) =>
        (
            <View>
                <Text style={styles.detailsGrpHeaderTxt}>
                    {item.fundName}
                </Text>
                <View style={styles.fundItem}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageThree")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.editSeletedFundsDetailsGrp}>



                    <View style={styles.detailsRow}>
                        <Text style={styles.lblLeftColTxt}>
                            {gblStrings.accManagement.initInvestment}
                        </Text>
                        <Text style={styles.lblRightColTxt}>
                            {`$ ${item.initialInvestment}`}
                        </Text>
                    </View>
                </View>
            </View>
        );

    renderAllSection = (data) => {
        AppUtils.debugLog(`renderAllSection::${JSON.stringify(data)}`);
        const { 
            accountType = '',
            accountSubType = '',
            // accountSubCategory = '',
              regType = '' 
            } = data || {};
        AppUtils.debugLog(`accountType::${accountType} => accountSubType::${accountSubType} => regType::${regType} =>`);


        return (
            <View>

                {this.renderAccountTypeInfo(data)}
                {(regType === "Trust Account" || regType === "Estate Account") && this.renderEsateAndTrustInfo(data)}
                {(regType === "Trust Account" || regType === "Estate Account") && this.renderTrusteeInfo(data)}
                {(regType !== "Trust Account" && regType !== "Estate Account") && this.renderPrimaryPersonalInfo(data)}
                {(regType !== "Trust Account" && regType !== "Estate Account") && this.renderPrimaryEmploymentInfo(data)}
                {(regType !== "Trust Account" && regType !== "Estate Account") && this.renderPrimaryMilitaryInfo(data)}
                {(regType !== "Trust Account" && regType !== "Estate Account") && this.renderPrimaryFinancialInfo(data)}

                {(regType === "Joint Account") && this.renderPrimaryPersonalInfoJoint(data)}
                {(regType === "Joint Account") && this.renderPrimaryEmploymentInfoJoint(data)}
                {(regType === "Joint Account") && this.renderPrimaryMilitaryInfoJoint(data)}
                {(regType === "Joint Account") && this.renderPrimaryFinancialInfoJoint(data)}

                {(regType === "Retirement Account") && this.renderIRABeneficiaryInfo(data)}

                {(regType === "UGMA/UTMA Account") && this.renderChildBeneficiaryInfo(data)}

                {this.renderMutualFundList(data)}
                {this.renderAccPrefencesInfo(data)}
            </View>
        );
    }


    renderAccountTypeInfo = (data) => {
        const { accountType = '' } = data || {};

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.vcmInvestAccInfo}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.detailsGrp}>
                    <View style={styles.detailsRow}>
                        <Text style={styles.lblLeftColTxt}>
                            {gblStrings.accManagement.registrationType}
                        </Text>
                        <Text style={styles.lblRightColTxt}>
                            {accountType}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    renderPrimaryPersonalInfo = (data) => {
        const { personalInfo = {} } = data || {};

        AppUtils.debugLog(`personalInfo::${JSON.stringify(personalInfo)}`);
        const {
            prefix = '',
            firstName = '',
            lastName = '',
            suffix = '',
            dateOfBirth = '',
            gender = '',
            maritalStatus = '',
            citizenship = '',
            ssnTin = '',
            mailingAddress: maillAddrPrimary = {},
            physicalAddress: physicAddrPrimary = {},
            //  isPhysAddrSameAsMailAddr = "",
            contactDetails: contactPrimary = {},
        } = (personalInfo && personalInfo.firstName) ? personalInfo : {};

        const {
            //  addressType = '',
            streetNb = '',
            streetName = '',
            zip = '',
            city = '',
            state = '',
        } = (maillAddrPrimary && maillAddrPrimary.addressType) ? maillAddrPrimary : {};
        const {
            //  addressType: addressType_Phy = '',
            streetNb: streetNbPhy = '',
            streetName: streetNamePhy = '',
            zip: zipPhy = '',
            city: cityPhy = '',
            state: statePhy = '',
        } = (physicAddrPrimary && physicAddrPrimary.addressType) ? physicAddrPrimary : {};

        const {
            phoneNumber1 = {},
            phoneNumber2 = {},
            phoneNumber3 = {},
            emailAddress: emailAddressPrimary = ''

        } = (contactPrimary && contactPrimary.phoneNumber1) ? contactPrimary : {};

        const {
            phoneNumber: phoneNumber1Primary = '',
            //  phoneType: phoneType1_primary = '',
            //  contactDuring: contactDuring1_primary = '',
        } = (phoneNumber1 && phoneNumber1.phoneNumber) ? phoneNumber1 : {};

        const {
            phoneNumber: phoneNumber2Primary = '',
            //   phoneType: phoneType2_primary = '',
            //  contactDuring: contactDuring2_primary = '',
        } = (phoneNumber2 && phoneNumber2.phoneNumber) ? phoneNumber2 : {};

        const {
            phoneNumber: phoneNumber3Primary = '',
            //  phoneType: phoneType3_primary = '',
            //  contactDuring: contactDuring3_primary = '',
        } = (phoneNumber3 && phoneNumber3.phoneNumber) ? phoneNumber3 : {};


        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInfoPrimary}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.name}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${prefix} ${firstName} ${lastName} ${suffix}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.dob}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${dateOfBirth}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.gender}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${gender}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.maritalStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${maritalStatus}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.citizenship}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${citizenship}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${ssnTin}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.emailAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${emailAddressPrimary}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.mailingAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${streetNb} ${streetName} ${city} ${state} ${zip}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.physicalAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${streetNbPhy} ${streetNamePhy} ${cityPhy} ${statePhy} ${zipPhy}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.mobileNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber1Primary}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.telePhoneNo2}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber2Primary}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.telePhoneNo3}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber3Primary}`}
                    </Text>

                </View>
            </View>
        );
    }

    renderPrimaryEmploymentInfo = (data) => {


        const { employementInfo = {} } = data || {};


        const {
            employmentStatus = '',
            industry = '',
            occupation = '',
            employerName = '',
            employerAddress = {}
        } = (employementInfo && employementInfo.employerAddress) ? employementInfo : {};


        const {
            addressLine1 = '',
            addressLine2 = '',
            city: cityEmpInfo = '',
            state: stateEmpInfo = '',
            zip: zipEmpInfo = '',
        } = (employerAddress && employerAddress.addressLine1) ? employerAddress : {};


        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.employmentInfoPrimary}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.empStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${employmentStatus}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.industry}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${industry}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.occupation}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${occupation}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.empName}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${employerName}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.empAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${addressLine1} ${addressLine2} ${cityEmpInfo} ${stateEmpInfo} ${zipEmpInfo}`}
                    </Text>
                </View>
            </View>
        );
    }

    renderPrimaryMilitaryInfo = (data) => {


        const { militaryInfo = {} } = data || {};
        const {
            //  servingStatus = '',
            militaryStatus = '',
            branchOfService = '',
            rank = '',
            serviceStartDate = '',
            serviceToDate = '',
            commissionSource = ''
        } = (militaryInfo && militaryInfo.servingStatus) ? militaryInfo : {};




        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.militaryInformation}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.militaryStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${militaryStatus}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.branchOfService}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${branchOfService}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.rank}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${rank}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.datesOfService}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${serviceStartDate} - ${serviceToDate}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.commissionSource}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${commissionSource}`}
                    </Text>
                </View>
            </View>
        );
    }

    renderPrimaryFinancialInfo = (data) => {


        const { financialInfo = {} } = data || {};
        const {
            annualIncome = '',
            taxBracket = '',
            netWorth = '',
            taxFilingStatus = '',
        } = (financialInfo && financialInfo.annualIncome) ? financialInfo : {};




        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.financialInformation}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.annualIncome}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${annualIncome}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.taxBracket}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${taxBracket}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.networth}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${netWorth}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.taxFilingStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${taxFilingStatus}`}
                    </Text>
                </View>
            </View>
        );
    }

    renderPrimaryPersonalInfoJoint = (data) => {
        const { jointOwner = {} } = data || {};
        AppUtils.debugLog(`jointOwner::${JSON.stringify(jointOwner)}`);
        const { personalInfo = {} } = jointOwner || {};

        const {
            prefix = '',
            firstName = '',
            lastName = '',
            suffix = '',
            dateOfBirth = '',
            gender = '',
            maritalStatus = '',
            citizenship = '',
            ssnTin = '',
            mailingAddress: maillAddrPrimary = {},
            physicalAddress: physicAddrPrimary = {},
            //  isPhysAddrSameAsMailAddr = "",
            contactDetails: contactPrimary = {},
        } = (personalInfo && personalInfo.firstName) ? personalInfo : {};

        const {
            //  addressType = '',
            streetNb = '',
            streetName = '',
            zip = '',
            city = '',
            state = '',
        } = (maillAddrPrimary && maillAddrPrimary.addressType) ? maillAddrPrimary : {};
        const {
            //  addressType: addressType_Phy = '',
            streetNb: streetNbPhy = '',
            streetName: streetNamePhy = '',
            zip: zipPhy = '',
            city: cityPhy = '',
            state: statePhy = '',
        } = (physicAddrPrimary && physicAddrPrimary.addressType) ? physicAddrPrimary : {};

        const {
            phoneNumber1 = {},
            phoneNumber2 = {},
            phoneNumber3 = {},
            emailAddress: emailAddressPrimary = ''

        } = (contactPrimary && contactPrimary.phoneNumber1) ? contactPrimary : {};

        const {
            phoneNumber: phoneNumber1Primary = '',
            //  phoneType: phoneType1_primary = '',
            //  contactDuring: contactDuring1_primary = '',
        } = (phoneNumber1 && phoneNumber1.phoneNumber) ? phoneNumber1 : {};

        const {
            phoneNumber: phoneNumber2Primary = '',
            //   phoneType: phoneType2_primary = '',
            //  contactDuring: contactDuring2_primary = '',
        } = (phoneNumber2 && phoneNumber2.phoneNumber) ? phoneNumber2 : {};

        const {
            phoneNumber: phoneNumber3Primary = '',
            //  phoneType: phoneType3_primary = '',
            //  contactDuring: contactDuring3_primary = '',
        } = (phoneNumber3 && phoneNumber3.phoneNumber) ? phoneNumber3 : {};


        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformationJoint}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.name}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${prefix} ${firstName} ${lastName} ${suffix}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.dob}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${dateOfBirth}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.gender}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${gender}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.maritalStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${maritalStatus}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.citizenship}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${citizenship}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${ssnTin}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.emailAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${emailAddressPrimary}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.mailingAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${streetNb} ${streetName} ${city} ${state} ${zip}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.physicalAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${streetNbPhy} ${streetNamePhy} ${cityPhy} ${statePhy} ${zipPhy}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.mobileNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber1Primary}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.telePhoneNo2}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber2Primary}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.telePhoneNo3}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber3Primary}`}
                    </Text>

                </View>
            </View>
        );
    }

    renderPrimaryEmploymentInfoJoint = (data) => {
        const { jointOwner = {} } = data || {};
        const { employementInfo = {} } = jointOwner || {};
        AppUtils.debugLog(`jointOwner  employementInfo::${JSON.stringify(employementInfo)}`);


        const {
            employmentStatus = '',
            industry = '',
            occupation = '',
            employerName = '',
            employerAddress = {}
        } = (employementInfo && employementInfo.employerAddress) ? employementInfo : {};


        const {
            addressLine1 = '',
            addressLine2 = '',
            city: cityEmpInfo = '',
            state: stateEmpInfo = '',
            zip: zipEmpInfo = '',
        } = (employerAddress && employerAddress.addressLine1) ? employerAddress : {};


        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.employmentInformationJoint}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.empStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${employmentStatus}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.industry}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${industry}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.occupation}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${occupation}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.empName}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${employerName}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.empAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${addressLine1} ${addressLine2} ${cityEmpInfo} ${stateEmpInfo} ${zipEmpInfo}`}
                    </Text>
                </View>
            </View>
        );
    }

    renderPrimaryMilitaryInfoJoint = (data) => {
        const { jointOwner = {} } = data || {};
        const { militaryInfo = {} } = jointOwner || {};
        AppUtils.debugLog(`jointOwner  militaryInfo::${JSON.stringify(militaryInfo)}`);


        const {
            //  servingStatus = '',
            militaryStatus = '',
            branchOfService = '',
            rank = '',
            serviceStartDate = '',
            serviceToDate = '',
            commissionSource = ''
        } = (militaryInfo && militaryInfo.servingStatus) ? militaryInfo : {};




        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.militaryInformationJoint}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.militaryStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${militaryStatus}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.branchOfService}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${branchOfService}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.rank}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${rank}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.datesOfService}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${serviceStartDate} - ${serviceToDate}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.commissionSource}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${commissionSource}`}
                    </Text>
                </View>
            </View>
        );
    }

    renderPrimaryFinancialInfoJoint = (data) => {
        const { jointOwner = {} } = data || {};
        const { financialInfo = {} } = jointOwner || {};
        AppUtils.debugLog(`jointOwner  financialInfo::${JSON.stringify(financialInfo)}`);



        const {
            annualIncome = '',
            taxBracket = '',
            netWorth = '',
            taxFilingStatus = '',
        } = (financialInfo && financialInfo.annualIncome) ? financialInfo : {};




        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.financialInformationJoint}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.annualIncome}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${annualIncome}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.taxBracket}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${taxBracket}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.networth}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${netWorth}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.taxFilingStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${taxFilingStatus}`}
                    </Text>
                </View>
            </View>
        );
    }


    renderChildBeneficiaryInfo = (data) => {
        const { beneficiaryInfo = {} } = data || {};
        const { childBeneficiary = {} } = beneficiaryInfo || {};
        const { beneficiaryDetails = {} } = childBeneficiary || {};
        AppUtils.debugLog(`beneficiaryDetails::${JSON.stringify(beneficiaryDetails)}`);

        const {
            prefix = '',
            firstName = '',
            middleInitial = '',
            lastName = '',
            suffix = '',
            ssnTin = '',
            dateOfBirth = '',
           // relation = '',
        } = (beneficiaryDetails && beneficiaryDetails.firstName) ? beneficiaryDetails : {};


        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformationChild}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.name}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${prefix} ${firstName} ${middleInitial} ${lastName} ${suffix}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.dob}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${dateOfBirth}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${ssnTin}`}
                    </Text>

                </View>
            </View>
        );
    }

    renderIRABeneficiaryInfo = (data) => {
        const { beneficiaryInfo = {} } = data || {};
        const { beneficiaryDetails = [] } = beneficiaryInfo || {};
        /*
                    "type": this.state.retirementBeneficiaryData[i].beneficiaryType || "",
                    "relation": this.state.retirementBeneficiaryData[i].relationshipToAcc || "",
                    "distributionPercentage": this.state.retirementBeneficiaryData[i].beneficiaryDistPercent || "",
                    "firstName": this.state.retirementBeneficiaryData[i].firstName || "",
                    "middleInitial": this.state.retirementBeneficiaryData[i].middleInitial || "",
                    "lastName": this.state.retirementBeneficiaryData[i].lastName || "",
                    "ssnTin": this.state.retirementBeneficiaryData[i].socialSecurityNo || "",
                    "dateOfBirth": this.state.retirementBeneficiaryData[i].dob || "",
                    "emailAddress": this.state.retirementBeneficiaryData[i].emailAddress || "",
                    "isPrimaryBeneficiary": "true"
        */

        AppUtils.debugLog(`beneficiaryDetails::${JSON.stringify(beneficiaryDetails)}`);


        return (

            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.beneficiariesOpt}
                    </Text>
                </View>
                <Text style={styles.lblLine} />

                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    {beneficiaryDetails.map((item, index) => {
                        const key = `benificairy${index}`;
                        const {
                            type = "",
                            relation = "",
                            distributionPercentage = "",
                            prefix = "",
                            firstName = "",
                            middleInitial = "",
                            lastName = "",
                            suffix = "",
                            ssnTin = "",
                            dateOfBirth = "",
                            emailAddress = "",
                           // isPrimaryBeneficiary = false


                        } = item;

                        return (
                            <View
                                key={key}
                            >
                                {index !== 0 && <Text style={styles.lblLine} />}


                                <Text style={styles.lblNameTxt}>
                                    {gblStrings.accManagement.beneficiary_type}
                                </Text>
                                <Text style={styles.lblNameValueTxt}>
                                    {`${type}`}
                                </Text>

                                <Text style={styles.lblNameTxt}>
                                    {gblStrings.accManagement.relationshipToAccHolder}
                                </Text>
                                <Text style={styles.lblNameValueTxt}>
                                    {`${relation}`}
                                </Text>

                                <Text style={styles.lblNameTxt}>
                                    {gblStrings.accManagement.distributionPercentage}
                                </Text>
                                <Text style={styles.lblNameValueTxt}>
                                    {`${distributionPercentage}`}
                                </Text>


                                <Text style={styles.lblLeftColTxt}>
                                    {gblStrings.accManagement.name}
                                </Text>
                                <Text style={styles.lblNameValueTxt}>
                                    {`${prefix} ${firstName} ${middleInitial} ${lastName} ${suffix}`}
                                </Text>

                                <Text style={styles.lblNameTxt}>
                                    {gblStrings.accManagement.dob}
                                </Text>
                                <Text style={styles.lblNameValueTxt}>
                                    {`${dateOfBirth}`}
                                </Text>

                                <Text style={styles.lblNameTxt}>
                                    {gblStrings.accManagement.socialSecurityNo}
                                </Text>
                                <Text style={styles.lblNameValueTxt}>
                                    {`${ssnTin}`}
                                </Text>

                                <Text style={styles.lblNameTxt}>
                                    {gblStrings.accManagement.emailAddress}
                                </Text>
                                <Text style={styles.lblNameValueTxt}>
                                    {`${emailAddress}`}
                                </Text>




                            </View>
                        );
                    }
                    )}

                </View>


            </View>

        );

    }

    renderMutualFundList = (data) => {

        const { investmentInfo = {} } = data || {};
        const {
            //  fundingSource = {},
            //  totalFunds = '',
            fundListData = []
        } = (investmentInfo && investmentInfo.fundListData) ? investmentInfo : {};

        /*
         const {
             method = '',
             bankAccount = '',
             accountType = '',
             financialInstitutionName = '',
             accountOwner = '',
             transitRoutingNumber = '',
             accountNumber = '',
 
         } = (fundingSource && fundingSource.method) ? fundingSource : {};
 
         */
        return (
            <>
                <View style={styles.sectionGrp}>
                    <View style={styles.accTypeSelectSection}>
                        <Text style={styles.headings}>
                            {gblStrings.accManagement.selectedMutualFunds}
                        </Text>
                    </View>

                    <Text style={styles.lblLine} />

                    <FlatList
                        data={fundListData}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderFundItem()}

                    />

                </View>
                {fundListData.length > 0 && this.renderInvestmentInfo(data)}
            </>

        );
    }

    renderInvestmentInfo = (data) => {
        const { investmentInfo = {} } = data || {};


        const {
            fundingSource = {},
            //  totalFunds = '',
            totalInitialInvestment = '',
            //  fundListData = []
        } = (investmentInfo && investmentInfo.fundListData) ? investmentInfo : {};


        const {
            method = ''
        } = (fundingSource && fundingSource.method) ? fundingSource : {};


        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.fundingInfo}
                    </Text>
                </View>

                <Text style={styles.lblLine} />

                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageThree")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.detailsRow}>
                        <Text style={styles.lblLeftColTxt}>
                            {gblStrings.accManagement.fundingSource}
                        </Text>
                        <Text style={styles.lblRightColTxt}>
                            {method}
                        </Text>
                    </View>

                    <View style={styles.detailsRow}>
                        <Text style={styles.lblLeftColTxt}>
                            {gblStrings.accManagement.totalInitInvestment}
                        </Text>
                        <Text style={styles.lblRightColTxt}>
                            {totalInitialInvestment}
                        </Text>
                    </View>
                </View>
            </View>

        );
    }

    renderAccPrefencesInfo = (data) => {
        const { accountPreferences = {} } = data || {};

        const {
            documentDeliveryFormat = '',
            //  dividendCapitalGain = ''
        } = (accountPreferences && accountPreferences.documentDeliveryFormat) ? accountPreferences : {};


        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.accountFeatures}
                    </Text>
                </View>

                <Text style={styles.lblLine} />

                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageFour")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.detailsRow}>
                        <Text style={styles.lblLeftColTxt}>
                            {gblStrings.accManagement.prospectus}
                        </Text>
                        <Text style={styles.lblRightColTxt}>
                            {`${documentDeliveryFormat}`}
                        </Text>
                    </View>


                </View>
            </View>
        );
    }

    renderEsateAndTrustInfo = (data) => {

        const { estateInfo = {} } = data || {};
        AppUtils.debugLog(`estateInfo::${JSON.stringify(estateInfo)}`);
        const {
            name = '',
            creationDate = '',
            ssnTin = '',
            mailingAddress: maillAddrPrimary = {},
            physicalAddress: physicAddrPrimary = {},
            isFederalLawApplicable = '',
            specifyState = '',
            orgCountry = '',
            isBusinessTrust = '',
            isBrokerOrDealerTrust = '',
            brokerOrDealer = '',
            isBankTrust = '',
            isForeignUSBranchTrust = '',
            isMoneyTranOrCurrencyExchangeOrgnaised = '',
            isCorrespondentAccountsOffersProvided = '',
            typeOfFiniancialInstitution = '',
            isFinanacialInstitutionDescribed = '',
            finanacialInstitutionDesc = '',
            isPhysicalPresenceMaintained = '',
            isIndividualEmploymentThere = '',
            isTrustMaintainRecords = '',
            isCorrespondentAccountsForeignOffersProvided = '',

        } = (estateInfo && estateInfo.name) ? estateInfo : {};

        const {
            //  addressType = '',
            streetNbr = '',
            streetName = '',
            zip = '',
            city = '',
            state = '',
        } = (maillAddrPrimary && maillAddrPrimary.zip) ? maillAddrPrimary : {};
        const {
            //  addressType: addressType_Phy = '',
            streetNbr: streetNbrPhy = '',
            streetName: streetNamePhy = '',
            zip: zipPhy = '',
            city: cityPhy = '',
            state: statePhy = '',
        } = (physicAddrPrimary && physicAddrPrimary.zip) ? physicAddrPrimary : {};




        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.estateInfo}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.name}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${name}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.creationDate}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${creationDate}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${ssnTin}`}
                    </Text>



                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.mailingAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${streetNbr} ${streetName} ${city} ${state} ${zip}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.physicalAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${streetNbrPhy} ${streetNamePhy} ${cityPhy} ${statePhy} ${zipPhy}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.federalLawDesc}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isFederalLawApplicable}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.specifyState}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${specifyState}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.specifyCountry}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${orgCountry}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isBusinessTrust}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isBusinessTrust}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isBrokerDealerTrust}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isBrokerOrDealerTrust}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isBrokerOrDealer}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${brokerOrDealer}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isBankTrust}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isBankTrust}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isForeignUSBranchTrust}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isForeignUSBranchTrust}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.businessTrust}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isBusinessTrust}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isMoneyTransmitterOrCurrencyExchangeOrgnaised}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isMoneyTranOrCurrencyExchangeOrgnaised}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isCorrespondentAccountsOffersProvided}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isCorrespondentAccountsOffersProvided}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isCorrespondentAccountsForeignOffersProvided}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isCorrespondentAccountsForeignOffersProvided}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.typeOfFiniancialInstitution}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${typeOfFiniancialInstitution}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isFinanacialInstitutionDescribed}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isFinanacialInstitutionDescribed}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.describeFinanacialInstitution}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${finanacialInstitutionDesc}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isPhysicalPresenceMaintained}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isPhysicalPresenceMaintained}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isIndividualEmploymentThere}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isIndividualEmploymentThere}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.isTrustMaintainRecords}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${isTrustMaintainRecords}`}
                    </Text>
                </View>
            </View>
        );
    }

    renderTrusteeInfo = (data) => {
        const { trusteeInfo = {} } = data || {};

        AppUtils.debugLog(`trusteeInfo::${JSON.stringify(trusteeInfo)}`);

        const {
            prefix = '',
            firstName = '',
            middleInitial = '',
            lastName = '',
            suffix = '',
            dateOfBirth = '',
            gender = '',
            maritalStatus = '',
            mobileNo = '',
            memberPhoneNo = '',
            busniessPhoneNo = '',
            residencePhoneNo = '',
            emailAddress = '',
            memberNumber = '',
            ssnTin = '',
            mailingAddress: maillAddrPrimary = {},
            physicalAddress: physicAddrPrimary = {},
        } = (trusteeInfo && trusteeInfo.firstName) ? trusteeInfo : {};

        const {
            //  addressType = '',
            streetNbr = '',
            streetName = '',
            zip = '',
            city = '',
            state = '',
        } = (maillAddrPrimary && maillAddrPrimary.zip) ? maillAddrPrimary : {};
        const {
            //  addressType: addressType_Phy = '',
            streetNbr: streetNbrPhy = '',
            streetName: streetNamePhy = '',
            zip: zipPhy = '',
            city: cityPhy = '',
            state: statePhy = '',
        } = (physicAddrPrimary && physicAddrPrimary.zip) ? physicAddrPrimary : {};




        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.trusteeOrExector}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen("openAccPageTwo")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        style={styles.editBtn}
                    >
                        <Text style={styles.editBtnTxt}>
                            {gblStrings.common.edit}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.name}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${prefix} ${firstName} ${middleInitial} ${lastName} ${suffix}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.dob}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${dateOfBirth}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.gender}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${gender}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.maritalStatus}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${maritalStatus}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${ssnTin}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.memberNumber}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${memberNumber}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.emailAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${emailAddress}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.mailingAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${streetNbr} ${streetName} ${city} ${state} ${zip}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.physicalAddress}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${streetNbrPhy} ${streetNamePhy} ${cityPhy} ${statePhy} ${zipPhy}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.mobileNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${mobileNo}`}
                    </Text>


                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.businessPhoneNumber}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${memberPhoneNo}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.businessPhoneNumber}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${busniessPhoneNo}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.residencePhoneNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${residencePhoneNo}`}
                    </Text>

                </View>
            </View>
        );
    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        //  const tempInfoData = (this.props && this.props.accOpeningData && this.props.accOpeningData.savedAccData) ? this.props.accOpeningData.savedAccData : {};
        const tempInfoData = myInstance.getSavedAccData();
        const { navigation} = this.props;
        const { getParam } = navigation;  
        
        const currentPage = 5;
        const specialMFAUserType = `${this.props && getParam('SpecialMFA', '')}`;
        return (
            <View style={styles.container}>
                {
                    //  this.props.accOpeningData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollView}>
                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage} ${gblStrings.accManagement.verifyInfo}`} />

                    { /* -----------Account information -------------------*/}

                    {this.renderAllSection(tempInfoData)}


                    { /* ----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>
                        {
                            (specialMFAUserType !== "" && specialMFAUserType !== "GuestUser" && specialMFAUserType !== "NewUser" && specialMFAUserType !== "UserForm") ? (
                                <GButtonComponent
                                    buttonStyle={styles.normalWhiteBtn}
                                    buttonText={gblStrings.common.save}
                                    textStyle={styles.normalWhiteBtnTxt}
                                    onPress={this.onClickSave}
                                />
                            )
                                : null
                        }
                        {
                            (specialMFAUserType !== "" && specialMFAUserType !== "GuestUser" && specialMFAUserType !== "NewUser" && specialMFAUserType !== "UserForm") ? (
                                <GButtonComponent
                                    buttonStyle={styles.normalWhiteBtn}
                                    buttonText={gblStrings.common.cancel}
                                    textStyle={styles.normalWhiteBtnTxt}
                                    onPress={this.onClickCancel}
                                />
                            )
                                : null
                        }
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={(specialMFAUserType !== "" && (specialMFAUserType === "GuestUser" || specialMFAUserType === "NewUser" || specialMFAUserType === "UserForm")) ? gblStrings.common.cancel : gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={specialMFAUserType === "GuestUser" ? gblStrings.common.verifySign : gblStrings.common.next}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickNext}

                        />
                    </View>

                    { /* ----------- Disclaimer -------------------*/}


                    <View style={styles.newVictorySection}>
                        <Text style={styles.disclaimerTitleTxt}>
                            {gblStrings.accManagement.VCDiscalimerTitle}
                        </Text>
                        <Text style={styles.disclaimerTxt}>
                            {gblStrings.accManagement.VCDiscalimerDesc}
                        </Text>
                        <Text style={styles.moreTxt}>
                            {gblStrings.common.more}
                        </Text>
                    </View>
                    <GFooterComponent />


                </ScrollView>
            </View>

        );
    }
}

OpenAccPageFiveComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
   // accOpeningData: PropTypes.instanceOf(Object)
};
OpenAccPageFiveComponent.defaultProps = {
    navigation: {},
   //  accOpeningData: {}
   
    

};
export default OpenAccPageFiveComponent;