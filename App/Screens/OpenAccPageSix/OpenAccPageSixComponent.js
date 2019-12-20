/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner,GSingletonClass} from '../../CommonComponents';
import { CustomRadio, CustomCheckBox, CustomPageWizard } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
];


const viewPdfList = [
    {
        "s3Loc": " ",
        "value": "World Growth Fund Properties",
        "key": "wg_fund_props"
    }
];
const signPdfList = [
    {
        "description": "This document contains the information provided by you as a part of your application,including terms and conditions",
        "s3Loc": " ",
        "value": "Mutual Fund Account Application",
        "key": "mf_acct_appln"
    },
    {
        "description": " This document contains the information provided by you as a part of your application, including terms and conditions",
        "s3Loc": " ",
        "value": "Consent to Electronic Delivery",
        "key": "consent_elect_del"
    }
];
const ViewPDFItem = (props) => {
    return (

        <View style={{ flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap', marginVertical: scaledHeight(10.5) }} >
            <Text style={styles.pdfFileNameTxt}>
                {props.fileName}
            </Text>
            <Text style={styles.pdfFileTxt}>
                {" (" + props.fileType + ")"}
            </Text>
        </View>
    );
};

ViewPDFItem.propTypes = {
    fileName: PropTypes.string,
    fileType: PropTypes.string



};

const SignPDFItem = (props) => {
    return (
        <View style={{ flexGrow: 1, marginTop: scaledHeight(5) }}>
            <View style={{ flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap', marginVertical: scaledHeight(10.5) }} >
                <Text style={styles.pdfFileNameTxt}>
                    {props.fileName}
                </Text>
                <Text style={styles.pdfFileTxt}>
                    {" (" + props.fileType + ")"}
                </Text>
            </View>
            <Text style={styles.pdfFileDescTxt}>
                {props.fileDesc}
            </Text>
            {props.isSeparatorShow && <Text style={styles.lblLine} />}


        </View>


    );
};


SignPDFItem.propTypes = {
    fileName: PropTypes.string,
    fileType: PropTypes.string,
    fileDesc: PropTypes.string,
    isSeparatorShow: PropTypes.bool


};

const myInstance = GSingletonClass.getInstance();

class OpenAccPageSixComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            itemID: "",
            confirmTINType: "",
            confirmTINTypeValidation:true,
            agreeConditionsValidation:true,
            agreeConditions: false,
            isValidationSuccess: true,
            errMsg:""

        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        console.log("componentDidMount::::> ");
        let payload = [];
        const compositePayloadData = [
            "backup_withholding",
            "docs_to_sign",
            "docs_to_view"
        ];

        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        this.props.getCompositeLookUpData(payload);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate::::> "+prevState);
        if (this.props !== prevProps) {
            const responseKey = ActionTypes.ESIGN_SAVE_OPENING_ACCT;
            if (this.props.accOpeningData[responseKey]) {
                if (this.props.accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    let tempResponse = this.props.accOpeningData[responseKey];
                    if (tempResponse.statusCode == 200 || tempResponse.statusCode == '200') {
                        let msg = tempResponse.message;
                        console.log("Account  Saved ::: :: " + msg);
                        alert(tempResponse.result);
                    } else {
                        alert(tempResponse.message);
                    }
                }
            }

            const submitResKey = ActionTypes.SUBMIT_OPENING_ACCT;
            if (this.props.accOpeningData[submitResKey]) {
                if (this.props.accOpeningData[submitResKey] !== prevProps.accOpeningData[submitResKey]) {
                    let tempResponse = this.props.accOpeningData[submitResKey];
                    if (tempResponse.statusCode == 200 || tempResponse.statusCode == '200') {
                        let msg = tempResponse.message;
                        console.log("Account Created ::: :: " + msg);
                        alert(msg+"  :"+ tempResponse.accountId);
                        this.props.navigation.goBack('termsAndConditions');
                    } else {
                        alert(tempResponse.message);
                    }
                }
            }
        }
    }


    /*----------------------
                                    Service API 
                                                                    -------------------------- */
    submitAccOpening = () => {
        console.log("submitAccOpening::::> ");
        const payloadData = {
            "customerId": "123",
            "accountType": "IndivIdual",
            "accountNickName": "TestUser",
            "personalInfo": {
                "prefix": "Mr.",
                "firstName": "Name1",
                "middleInitial": "",
                "lastName": "Name2",
                "suffix": "",
                "dateOfBirth": "01/01/2000",
                "gender": "Male",
                "maritalStatus": "Married",
                "citizenship": "US",
                "ssnTin": "123456789",
                "mailingAddress": {
                    "addressType": "U.S or U.S Territories",
                    "streetNbr": "4900",
                    "streetName": "Tiedeman Rd",
                    "zip": "44144",
                    "city": "Brooklyn",
                    "state": "OH"
                },
                "isPhysAddrSameAsMailAddr": "No",
                "physicalAddress": {
                    "addressType": "U.S or U.S Territories",
                    "streetNbr": "4900",
                    "streetName": "Tiedeman Rd",
                    "zip": "44144",
                    "city": "Brooklyn",
                    "state": "OH"
                },
                "contactDetails": {
                    "phoneNumber1": {
                        "phoneNumber": "1234567890",
                        "phoneType": "Home",
                        "contactDuring": "Morning"
                    },
                    "phoneNumber2": {
                        "phoneNumber": "1234567890",
                        "phoneType": "Home",
                        "contactDuring": "Morning"
                    },
                    "phoneNumber3": {
                        "phoneNumber": "1234567890",
                        "phoneType": "Home",
                        "contactDuring": "Morning"
                    },
                    "emailAddress": "testUser@test.com"
                }
            },
            "employementInfo": {
                "employmentStatus": "Employed",
                "industry": "Accounting",
                "occupation": "SE",
                "employerName": "Test",
                "employerAddress": {
                    "addressLine1": "4900",
                    "addressLine2": "Tiedeman Rd",
                    "city": "Brooklyn",
                    "state": "OH",
                    "zip": "44144"
                }
            },
            "financialInfo": {
                "annualIncome": "9700 and below",
                "taxBracket": "10",
                "netWorth": "34999 and below",
                "taxFilingStatus": "Single indivIdual"
            },
            "militaryInfo": {
                "servingStatus": "Yes",
                "militaryStatus": "Active Duty Military",
                "branchOfService": "Army",
                "rank": "O1 - Second Lieutenant",
                "serviceStartDate": "01/01/2018",
                "commissionSource": "cust1CommissionSource"
            },
            "regulatoryDetails": {
                "isPep": "Y",
                "pepName": ""
            },
            "investmentInfo": {
                "fundingSource": {
                    "method": "",
                    "bankAccount": "",
                    "accountType": "",
                    "financialInstitutionName": "",
                    "accountOwner": "",
                    "transitRoutingNumber": "",
                    "accountNumber": ""
                },
                "totalFunds": "1",
                "fund1": {
                    "fundNumber": "123",
                    "fundName": "Fund1",
                    "fundingOption": "Initial",
                    "initialInvestment": "3000",
                    "monthlyInvestment": "",
                    "startDate": "",
                    "action": "add"
                },
                "fund2...10": ""
            },
            "accountPreferences": {
                "dividendCapitalGain": "1",
                "documentDeliveryFormat": "Online"
            },
            "userConsent": {
                "backupCertFlag": "N",
                "certifiedYN": "Y"
            }
        };



        try {
            this.props.submitAccountOpening(payloadData);
        }
        catch (err) {
            console.log("error", err);
        }

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
    onClickSubmit = () => {
        if (this.validateFields()) {
            const specialMFAUserType = "" + (this.props && this.props.navigation.getParam('SpecialMFA',''));
            if(specialMFAUserType=="GuestUser" || specialMFAUserType=="NewUser" || specialMFAUserType=="UserForm"){
               this.props.navigation.navigate('dashboard');
            }           
            else{
                const payload = this.getPayload();
                this.props.submitAccountOpening(payload);
            }
        }
    }
    onClickSave = () => {
        if (this.validateFields()) {
            const payload = this.getPayload();
            myInstance.setSavedAccData(payload);
            this.props.saveAccountOpening("OpenAccPageSix", payload);
        }
    }

    getPayload = () => {
        const savedAccData = myInstance.getSavedAccData();
        const payload = {
                ...savedAccData,
                "userConsent":{
                    "backupCertFlag":this.state.confirmTINType || "-",
                    "certifiedYN":this.state.agreeConditions || "-"
                  }
            };
        
        return payload;

    }

    onPressCheck = (keyName, text) => () => this.setState({
        [keyName]: text,
        confirmTINTypeValidation:true,
        agreeConditionsValidation:true
    });
    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text,
        confirmTINTypeValidation:true,
        agreeConditionsValidation:true
    });
    isEmpty = (str) => {
        if (str == "" || str == undefined || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }
    validateFields = () => {
        var errMsg = "";
        let input = "";

        var isValidationSuccess = false;
        if (this.isEmpty(this.state.confirmTINType)) {
            errMsg = gblStrings.accManagement.confirmTINBackupWithholdingMsg;
            input = "confirmTINTypeValidation";
        } else if (this.state.agreeConditions === false) {
            errMsg = gblStrings.accManagement.confirmAgreeCondMsg;
            input = "agreeConditionsValidation";

        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
           // alert(errMsg);

        }
        this.setState({
            isValidationSuccess: isValidationSuccess,
            errMsg:isValidationSuccess == false ? errMsg:"",
            [input]: false
         });
        return isValidationSuccess;

    }

    generateKeyExtractor = (item) => item.key;
    renderViewPDFItem = () => ({ item }) =>
        (<ViewPDFItem
            fileName={item.value}
            fileType={"PDF"}
         />
        );

    renderSignPDFItem = (dataLength) => ({ item, index }) =>
        (<SignPDFItem
            fileName={item.value}
            fileType={"PDF"}
            fileDesc={item.description}
            isSeparatorShow={index < dataLength - 1 ? true : false}
         />
        );

    renderRadio = (radioName, radioSize, componentStyle, layoutStyle) => {
        console.log("renderRadio::: " + radioName);
        let radioData = dummyData;
        let tempkey ="";
        switch (radioName) {
            case "confirmTINType":
                tempkey = "backup_withholding";
                break;
        }

        console.log("tempkey::" + tempkey);

        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            radioData = this.props.masterLookupStateData[tempkey].value;
        }

        let radioCoponents = [];
        for (let i = 0; i < radioData.length; i++) {
            radioCoponents.push(
                <CustomRadio
                    key={radioData[i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor={"#DEDEDF"}
                    innerCicleColor={"#61285F"}
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[i].value}
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel={""}
                    selected={(this.state[radioName] !== null && this.state[radioName] == radioData[i].value) ? true : false}
                    onPress={this.onPressRadio(radioName, radioData[i].value)}
                />
            );
        }
        return (
            <View style={layoutStyle}>
                {radioCoponents}
            </View>
        );

    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        console.log("RENDER::: OpenAccPageSix ::>>> ", this.props);
        let tempViewPdfList = {...viewPdfList};
        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData["docs_to_view"] && this.props.masterLookupStateData["docs_to_view"].value) {
            tempViewPdfList = this.props.masterLookupStateData["docs_to_view"].value;
        }

        let tempSignPdfList = {...signPdfList};
        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData["docs_to_sign"] && this.props.masterLookupStateData["docs_to_sign"].value) {
            tempSignPdfList = this.props.masterLookupStateData["docs_to_sign"].value;
        }
        let currentPage = 6;
        const specialMFAUserType = "" + (this.props && this.props.navigation.getParam('SpecialMFA',''));
        return (
            <View style={styles.container}>
                 {
                    (this.props.accOpeningData.isLoading || this.props.masterLookupStateData.isLoading) && <GLoadingSpinner />
                }

                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + " " + gblStrings.accManagement.eSign} />

                    { /*-----------Tax Preferences -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.TINBackupCert}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />


                        <View style={styles.pdfSectionGrp} >
                            {!this.state.confirmTINTypeValidation &&
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.confirmTINBackupWithholdingMsg}
                                </Text>
                            }
                            {this.renderRadio("confirmTINType", 36, { marginBottom: scaledHeight(24), marginTop: scaledHeight(24) }, styles.radioBtnColGrp)}
                        </View>


                    </View>


                    { /*-----------Document View -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.docToView}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <View style={styles.pdfSectionGrp} >
                            <FlatList
                                data={tempViewPdfList}
                                keyExtractor={this.generateKeyExtractor}
                                renderItem={this.renderViewPDFItem()}

                            />

                        </View>
                    </View>

                    { /*-----------Documents to Sign -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.docToSign}
                            </Text>
                        </View>
                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.accManagement.docToSignNote}
                        </Text>
                        <Text style={styles.lblLine} />


                        <View style={styles.pdfSectionGrp} >
                            <FlatList
                                data={tempSignPdfList}
                                keyExtractor={this.generateKeyExtractor}
                                renderItem={this.renderSignPDFItem(signPdfList.length)}
                            />

                        </View>
                        <View style={styles.agreeSectionGrp} >
                            <CustomCheckBox
                                size={24}
                                itemBottom={0}
                                itemTop={0}

                                outerCicleColor={"#707070"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.agreeTermsTxt}
                                label={gblStrings.accManagement.agreeConditions}
                                selected={this.state.agreeConditions}
                                onPress={this.onPressCheck("agreeConditions", !this.state.agreeConditions)}

                            />

                            {!this.state.agreeConditionsValidation &&
                                <Text style={styles.errMsg}>
                                    { gblStrings.accManagement.confirmAgreeCondMsg}
                                </Text>
                            }

                        </View>
                        <View style={{ flexGrow: 1, marginTop: scaledHeight(22) }}>
                            <Text style={styles.pdfFileDescTxt}>
                                {gblStrings.accManagement.IRSConsentMsg}
                            </Text>
                        </View>



                    </View>





                    { /*----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>
                    { 
                        (specialMFAUserType!="" && specialMFAUserType!="GuestUser" && specialMFAUserType!="NewUser" && specialMFAUserType!="UserForm")?
                            <GButtonComponent
                                buttonStyle={styles.normalWhiteBtn}
                                buttonText={gblStrings.common.save}
                                textStyle={styles.normalWhiteBtnTxt}
                                onPress={this.onClickSave}
                            />
                        :null
                    }
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
                            buttonText={gblStrings.common.submit}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickSubmit}
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

OpenAccPageSixComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    accOpeningData: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    submitAccountOpening: PropTypes.func,
    saveAccountOpening: PropTypes.func,
    getCompositeLookUpData:PropTypes.func
};
export default OpenAccPageSixComponent;
