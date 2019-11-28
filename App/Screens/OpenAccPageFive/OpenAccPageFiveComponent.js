import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";




class OpenAccPageFiveComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            itemID: "",


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
        console.log("#TODO : onClickHeader");
    }
    goBack = () => {
        this.props.navigation.goBack();
    }
    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }
    onClickDownloadPDF = () => {
        alert("#TODO : Download");
    }
    onClickNext = () => {
        this.validateFields();
    }
    onClickSave = () => {
        this.validateFields();
    }

    validateFields = () => {
        this.props.navigation.navigate({ routeName: 'openAccPageSix', key: 'openAccPageSix' });

    }

    getFieldValue = () => {

    }

    renderAllSection = (data) => {
        console.log("renderAllSection::"+JSON.stringify(data));

        return (
            <View >
                {this.renderPrimaryPersonalInfo(data)}
                {this.renderPrimaryEmploymentInfo (data)}
                {this.renderPrimaryMilitaryInfo (data)}
                {this.renderPrimaryFinancialInfo (data)}
                {this.renderMutualFundList (data)}
                {this.renderInvestmentInfo (data)}
                {this.renderAccPrefencesInfo (data)}
            </View>
        );
    }

    renderPrimaryPersonalInfo = (data) => {
        var { personalInfo = {} } = data ? data : {};

        console.log("personalInfo::"+JSON.stringify(personalInfo));
        var {
            prefix = '',
            firstName = '',
            lastName = '',
            suffix = '',
            dateOfBirth = '',
            gender = '',
            maritalStatus = '',
            citizenship = '',
            ssnTin = '',
            mailingAddress: maillAddr_primary = {},
            physicalAddress: physicAddr_primary = {},
            isPhysAddrSameAsMailAddr = "",
            contactDetails: contact_primary = {},
        } = (personalInfo && personalInfo.prefix) ? personalInfo : {};

        var {
            addressType = '',
            streetNb = '',
            streetName = '',
            zip = '',
            city = '',
            state = '',
        } = (maillAddr_primary && maillAddr_primary.addressType) ? maillAddr_primary : {};
        var {
            addressType: addressType_Phy = '',
            streetNb: streetNb_Phy = '',
            streetName: streetName_Phy = '',
            zip: zip_Phy = '',
            city: city_Phy = '',
            state: state_Phy = '',
        } = (physicAddr_primary && physicAddr_primary.addressType) ? physicAddr_primary : {};

        var {
            phoneNumber1 = {},
            phoneNumber2 = {},
            phoneNumber3 = {},
            emailAddress: emailAddress_primary = ''

        } = (contact_primary && contact_primary.phoneNumber1) ? contact_primary : {};

        var {
            phoneNumber: phoneNumber1_primary = '',
            phoneType: phoneType1_primary = '',
            contactDuring: contactDuring1_primary = '',
        } = (phoneNumber1 && phoneNumber1.phoneNumber) ? phoneNumber1 : {};

        var {
            phoneNumber: phoneNumber2_primary = '',
            phoneType: phoneType2_primary = '',
            contactDuring: contactDuring2_primary = '',
        } = (phoneNumber2 && phoneNumber2.phoneNumber) ? phoneNumber2 : {};

        var {
            phoneNumber: phoneNumber3_primary = '',
            phoneType: phoneType3_primary = '',
            contactDuring: contactDuring3_primary = '',
        } = (phoneNumber3 && phoneNumber3.phoneNumber) ? phoneNumber3 : {};

        
        return (
            <View style={[styles.sectionGrp]}>
                <View style={styles.accTypeSelectSection} >
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInfoPrimary}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp} >
                    <TouchableOpacity
                        // onPress={() => { alert("#TODO:: Edit") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
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
                        {`${emailAddress_primary}`}
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
                        {`${streetNb_Phy} ${streetName_Phy} ${city_Phy} ${state_Phy} ${zip_Phy}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.mobileNo}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber1_primary}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.telePhoneNo2}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber2_primary}`}
                    </Text>

                    <Text style={styles.lblNameTxt}>
                        {gblStrings.accManagement.telePhoneNo3}
                    </Text>
                    <Text style={styles.lblNameValueTxt}>
                        {`${phoneNumber3_primary}`}
                    </Text>

                </View>
            </View>
        );
    }

    renderPrimaryEmploymentInfo = (data) => {


        var { employementInfo = {} }  = data ? data : {};


        var {
            employmentStatus = '',
            industry = '',
            occupation = '',
            employerName = '',
            employerAddress = {}
        } = (employementInfo && employementInfo.employerAddress) ? employementInfo : {};


        var {
            addressLine1 = '',
            addressLine2 = '',
            city: city_empInfo = '',
            state: state_empInfo = '',
            zip: zip_empInfo = '',
        } = (employerAddress && employerAddress.addressLine1) ? employerAddress : {};


        return (
            <View style={[styles.sectionGrp]}>
                <View style={styles.accTypeSelectSection} >
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.employmentInfoPrimary}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp} >
                    <TouchableOpacity
                        //onPress={() => { alert("#TODO:: Edit") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
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
                        {`${addressLine1} ${addressLine2} ${city_empInfo} ${state_empInfo} ${zip_empInfo}`}
                    </Text>
                </View>
            </View>
        );
    }

    renderPrimaryMilitaryInfo = (data) => {


        var { militaryInfo = {} } = data ? data : {};
        var {
            servingStatus = '',
            militaryStatus = '',
            branchOfService = '',
            rank = '',
            serviceStartDate = '',
            serviceToDate = '',
            commissionSource = ''
        } = (militaryInfo && militaryInfo.servingStatus) ? militaryInfo : {};




        return (
            <View style={[styles.sectionGrp]}>
                <View style={styles.accTypeSelectSection} >
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.militaryInformation}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp} >
                    <TouchableOpacity
                        //onPress={() => { alert("#TODO:: Edit") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
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


        var { financialInfo = {} }  = data ? data : {};
        var {
            annualIncome = '',
            taxBracket = '',
            netWorth = '',
            taxFilingStatus = '',
        } = (financialInfo && financialInfo.annualIncome) ? financialInfo : {};




        return (
            <View style={[styles.sectionGrp]}>
                <View style={styles.accTypeSelectSection} >
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.financialInformation}
                    </Text>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.editDetailsGrp} >
                    <TouchableOpacity
                        //onPress={() => { alert("#TODO:: Edit") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
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

    renderMutualFundList = (data) => {
       
        var { financialInfo = {} } = data ? data : {};

        return(
            <View style={[styles.sectionGrp]}>
            <View style={styles.accTypeSelectSection} >
                <Text style={styles.headings}>
                    {gblStrings.accManagement.selectedMutualFunds}
                </Text>
            </View>

            <Text style={styles.lblLine} />

            <Text style={styles.detailsGrpHeaderTxt}>
                {"World Growth Fund"}
            </Text>
            <View style={styles.editSeletedFundsDetailsGrp} >
                <TouchableOpacity
                    // onPress={() => { alert("#TODO:: Edit") }}
                    activeOpacity={0.8}
                    accessibilityRole={'button'}
                    style={styles.editBtn}
                >
                    <Text style={styles.editBtnTxt}>
                        {gblStrings.common.edit}
                    </Text>
                </TouchableOpacity>
                <View style={styles.detailsRow}>
                    <Text style={styles.lblLeftColTxt}>
                        {gblStrings.accManagement.initInvestment}
                    </Text>
                    <Text style={styles.lblRightColTxt}>
                        {"$ 3,000.00"}
                    </Text>
                </View>
            </View>
        </View>

        );
    }

    renderInvestmentInfo = (data) => {
        var { investmentInfo = {} }  = data ? data : {};


        var {
            fundingSource = {},
            totalFunds = '',
            fundDataList = []
        } = (investmentInfo && investmentInfo.fundDataList) ? investmentInfo : {};


        var {
            method = '',
            bankAccount = '',
            accountType = '',
            financialInstitutionName = '',
            accountOwner = '',
            transitRoutingNumber = '',
            accountNumber = '',

        } = (fundingSource && fundingSource.method) ? fundingSource : {};


        return (
            <View style={[styles.sectionGrp]}>
            <View style={styles.accTypeSelectSection} >
                <Text style={styles.headings}>
                    {gblStrings.accManagement.fundingInfo}
                </Text>
            </View>

            <Text style={styles.lblLine} />

            <View style={styles.editDetailsGrp} >
                <TouchableOpacity
                    //onPress={() => { alert("#TODO:: Edit") }}
                    activeOpacity={0.8}
                    accessibilityRole={'button'}
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
                        {"$ 3,000.00"}
                    </Text>
                </View>
            </View>
        </View>

        );
    }

    renderAccPrefencesInfo = (data) =>{
        var { accountPreferences = {} } = data ? data : {};
        
        var {
            documentDeliveryFormat = '',
            dividendCapitalGain = ''
        } = (accountPreferences && accountPreferences.documentDeliveryFormat) ? accountPreferences : {};


        return (
            <View style={[styles.sectionGrp]}>
            <View style={styles.accTypeSelectSection} >
                <Text style={styles.headings}>
                    {gblStrings.accManagement.accountFeatures}
                </Text>
            </View>

            <Text style={styles.lblLine} />

            <View style={styles.editDetailsGrp} >
                <TouchableOpacity
                    // onPress={() => { alert("#TODO:: Edit") }}
                    activeOpacity={0.8}
                    accessibilityRole={'button'}
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


        )
    }
    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        var { accountType = '' } = (this.props && this.props.accOpeningData && this.props.accOpeningData.savedAccData) ? this.props.accOpeningData.savedAccData : {};
        let tempInfoData = (this.props && this.props.accOpeningData && this.props.accOpeningData.savedAccData) ? this.props.accOpeningData.savedAccData : {};
console.log ("tempInfoData:::"+JSON.stringify(tempInfoData));
       /* var {
            dividendCapitalGain = '',
            documentDeliveryFormat = '',
        } = accountPreferences;
*/
        let currentPage = 5;
        return (
            <View style={styles.container}>
                {
                    //this.props.accOpeningData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + " " + gblStrings.accManagement.verifyInfo} />

                    { /*-----------Account information -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.vcmInvestAccInfo}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <View style={styles.detailsGrp} >
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

                    {this.renderAllSection(tempInfoData)}


                    { /*----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>

                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.save}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickSave}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={gblStrings.common.next}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickNext}

                        />
                    </View>

                    { /*----------- Disclaimer -------------------*/}


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
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default OpenAccPageFiveComponent;