import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
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
 
    getFieldValue = () =>{
       
    }


    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        

        let currentPage = 5;
        return (
            <View style={styles.container}>
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
                                    {"Individual"}
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
                                {"John Due"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.mailingAddress}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"287 Hillcrest Lane"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.physicalAddress}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"287 Hillcrest Lane"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.homeTelephone}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"(555) 555-1234"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.workPhoneNo}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"(555) 555-1234"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.emailAddress}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"John@gmail.com"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.socialSecurityNo}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"000-00-1234"}
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
                                {"Employed"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.occupation}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"Accountant"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.empName}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"Cognizant"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.empAddress}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"5400 N Black Oak Lake Rd"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.cityAndState}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"Kansas MO"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.zipcode}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"64155"}
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
                                    {"Send only one copy of prospectuses and reports to my household"}
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