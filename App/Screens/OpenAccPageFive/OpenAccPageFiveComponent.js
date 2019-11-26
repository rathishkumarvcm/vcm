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


    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {


        var {
            accountType = "",
            accountSubType = "",
            personalInfo = {},
            employementInfo = {},
            financialInfo = {},
            militaryInfo = {},
            regulatoryDetails = {},
            accountPreferences = {},
            investmentInfo = {}
        }
            = (this.props && this.props.accOpeningData && this.props.accOpeningData.savedAccData) ? this.props.accOpeningData.savedAccData : {};

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

        var {
            dividendCapitalGain = '',
            documentDeliveryFormat = '',
        } = accountPreferences;

        let currentPage = 5;
        return (
            <View style={styles.container}>
                {
                    this.props.accOpeningData.isLoading && <GLoadingSpinner />
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

                    { /*-----------Personal information -------------------*/}
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
                                {gblStrings.accManagement.homeTelephone}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {`${phoneNumber1_primary}`}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.workPhoneNo}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {`${phoneNumber2_primary}`}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.emailAddress}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {`${emailAddress_primary}`}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.socialSecurityNo}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {`${ssnTin}`}
                            </Text>

                        </View>
                    </View>

                    { /*-----------Employment information -------------------*/}
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
                            <Text style={styles.lblLeftColTxt}>
                                {gblStrings.accManagement.empStatus}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {`${employmentStatus}`}
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

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.cityAndState}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {`${city_empInfo} ${state_empInfo}`}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.zipcode}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {`${zip_empInfo}`}
                            </Text>
                        </View>
                    </View>

                    { /*-----------Selected Mutual Funds -------------------*/}
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

                    { /*-----------Funding Information -------------------*/}
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
                                    {"Check"}
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

                    { /*-----------Account Features -------------------*/}
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