
import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import SignPDFItem from './SignPDFItem';
import ViewPDFItem from './ViewPDFItem';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner, GSingletonClass, showAlert } from '../../CommonComponents';
import { CustomRadio, CustomCheckBox, CustomPageWizard } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';

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


const myInstance = GSingletonClass.getInstance();

class OpenAccPageSixComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            confirmTINType: "",
            confirmTINTypeValidation: true,
            agreeConditionsValidation: true,
            agreeConditions: false,

        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        AppUtils.debugLog("componentDidMount::::> ");
        const { masterLookupStateData, getCompositeLookUpData } = this.props;
        const payload = [];
        const compositePayloadData = [
            "backup_withholding",
            "docs_to_sign",
            "docs_to_view"
        ];

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[+i];
            if (this.props && masterLookupStateData && !masterLookupStateData[`${tempkey}`]) {
                payload.push(tempkey);
            }
        }
        getCompositeLookUpData(payload);
    }

    componentDidUpdate(prevProps, prevState) {
        AppUtils.debugLog(`componentDidUpdate::::> ${prevState}`);
        const { accOpeningData, navigation } = this.props;
        const { goBack } = navigation;

        if (this.props !== prevProps) {
            const responseKey = ActionTypes.ESIGN_SAVE_OPENING_ACCT;
            if (accOpeningData[`${responseKey}`]) {
                if (accOpeningData[`${responseKey}`] !== prevProps.accOpeningData[`${responseKey}`]) {
                    const tempResponse = accOpeningData[`${responseKey}`];
                    if (tempResponse.status) {
                        const msg = tempResponse.status;
                        AppUtils.debugLog(`Account Type Saved ::: :: ${msg}`);
                        showAlert(gblStrings.common.appName, tempResponse.status, gblStrings.common.ok);
                        AppUtils.debugLog(tempResponse.status);
                    } else {
                        showAlert(gblStrings.common.appName, tempResponse.message, gblStrings.common.ok);
                        AppUtils.debugLog(tempResponse.message);
                    }
                }
            }

            const submitResKey = ActionTypes.SUBMIT_OPENING_ACCT;
            if (accOpeningData[`${submitResKey}`]) {
                if (accOpeningData[`${submitResKey}`] !== prevProps.accOpeningData[`${submitResKey}`]) {
                    const tempResponse = accOpeningData[`${submitResKey}`];
                   /* if (tempResponse.statusCode === 200 || tempResponse.statusCode === '200') {
                        const msg = `${tempResponse.message}  :${tempResponse.accountId}`;
                        AppUtils.debugLog(`Account Created ::: :: ${msg}`);
                        showAlert(gblStrings.common.appName, msg, gblStrings.common.ok);

                        myInstance.setAccOpeningEditMode(false);
                        goBack('termsAndConditions');
                    } else {
                        AppUtils.debugLog(`Account Created failed::: :: ${tempResponse.message}`);
                        showAlert(gblStrings.common.appName, tempResponse.message, gblStrings.common.ok);
                        myInstance.setAccOpeningEditMode(false);
                    } */

                    if (tempResponse.accountId) {
                        // const msg = `${tempResponse.message}  :${tempResponse.accountId}`;
                        const msg = `Your application is successfully submited and Waiting for MSR Review  :${tempResponse.accountId}`;
                        AppUtils.debugLog(`Account Created ::: :: ${msg}`);
                        showAlert(gblStrings.common.appName, msg, gblStrings.common.ok);

                        myInstance.setAccOpeningEditMode(false);
                        goBack('termsAndConditions');
                    } else {
                        AppUtils.debugLog(`Account Created failed::: :: ${tempResponse.message}`);
                        showAlert(gblStrings.common.appName, tempResponse.message, gblStrings.common.ok);
                        myInstance.setAccOpeningEditMode(false);
                    } 

                        // showAlert(gblStrings.common.appName, "Your application is successfully submited and Waiting for MSR Review ", gblStrings.common.ok);
                        // myInstance.setAccOpeningEditMode(false);
                        // goBack('termsAndConditions');
                }
            }
        }
    }



    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    onClickHeader = () => {
        AppUtils.debugLog("#TODO : onClickHeader");
    }

    goBack = () => {
        const { navigation} = this.props;
        const { goBack } = navigation;
        goBack();
    }

    onClickCancel = () => {
        myInstance.setAccOpeningEditMode(false);
        const { navigation} = this.props;
        const { goBack } = navigation;
        goBack('termsAndConditions');
    }

    onClickDownloadPDF = () => {
        AppUtils.debugLog("#TODO : Download");
    }

    onClickSubmit = () => {
        const { navigation,submitAccountOpening} = this.props;
        const { getParam,navigate } = navigation;
        if (this.validateFields()) {
            const specialMFAUserType = `${this.props && getParam('SpecialMFA', '')}`;
            if (specialMFAUserType === "GuestUser" || specialMFAUserType === "NewUser" || specialMFAUserType === "UserForm") {
                navigate('dashboard');
            }
            else {
                const payload = this.getPayload();
                submitAccountOpening(payload);
            }
        }
    }

    onClickSave = () => {
        const { saveAccountOpening} = this.props;

        if (this.validateFields()) {
            const payload = this.getPayload();
            myInstance.setSavedAccData(payload);
           saveAccountOpening("OpenAccPageSix", payload);
        }
    }

    getPayload = () => {
        const savedAccData = myInstance.getSavedAccData();
        const { confirmTINType, agreeConditions } = this.state;

        const payload = {
            ...savedAccData,
            "userConsent": {
                "backupCertFlag": confirmTINType || "",
                "certifiedYN": agreeConditions || ""
            }
        };

        return payload;

    }

    replaceUndefinedOrNull = (key, value) => {
        if (value === null || value === undefined || value === '') {
            return undefined;
        }

        return value;
    }

    getCleanedPayload = (payload) => {
        const cleanedObject = JSON.stringify(payload, this.replaceUndefinedOrNull, 4);
        return JSON.parse(cleanedObject);
    }

    onPressCheck = (keyName, text) => () => this.setState({
        [keyName]: text,
        confirmTINTypeValidation: true,
        agreeConditionsValidation: true
    });

    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text,
        confirmTINTypeValidation: true,
        agreeConditionsValidation: true
    });

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        }
        return false;

    }

    validateFields = () => {
        let input = "";
        const { confirmTINType, agreeConditions } = this.state;


        let isValidationSuccess = false;
        if (this.isEmpty(confirmTINType)) {
            input = "confirmTINTypeValidation";
        } else if (agreeConditions === false) {
            input = "agreeConditionsValidation";

        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            //  alert(errMsg);

        }
        this.setState({
            [input]: false
        });
        return isValidationSuccess;

    }

    generateKeyExtractor = (item) => item.key;

    renderViewPDFItem = () => ({ item }) =>
        (
            <ViewPDFItem
                fileName={item.value}
                fileType="PDF"
            />
        );

    renderSignPDFItem = (dataLength) => ({ item, index }) =>
        (
            <SignPDFItem
                fileName={item.value}
                fileType="PDF"
                fileDesc={item.description}
                isSeparatorShow={index < dataLength - 1}
            />
        );

    renderRadio = (radioName, radioSize, componentStyle, layoutStyle) => {
        AppUtils.debugLog(`renderRadio::: ${radioName}`);
        const { masterLookupStateData } = this.props;
        const {[radioName]:radio} = this.state;

        let radioData = dummyData;
        let tempkey = "";
        switch (radioName) {
            case "confirmTINType":
                tempkey = "backup_withholding";
                break;
            default:
                break;
        }

        AppUtils.debugLog(`tempkey::${tempkey}`);

        if (this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
            radioData = masterLookupStateData[`${tempkey}`].value;
        }

        const radioCoponents = [];
        for (let i = 0; i < radioData.length; i += 1) {
            radioCoponents.push(
                <CustomRadio
                    key={radioData[+i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor="#DEDEDF"
                    innerCicleColor="#61285F"
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[+i].value}
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel=""
                    selected={!!((radio !== null && radio === radioData[+i].key))}
                    onPress={this.onPressRadio(radioName, radioData[+i].key)}
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
        AppUtils.debugLog("RENDER::: OpenAccPageSix ::>>> ", this.props);
        const { masterLookupStateData, accOpeningData, navigation } = this.props;
        const { getParam } = navigation;
        const { confirmTINTypeValidation, agreeConditions, agreeConditionsValidation } = this.state;


        let tempViewPdfList = viewPdfList;
        if (this.props && masterLookupStateData && masterLookupStateData.docs_to_view && masterLookupStateData.docs_to_view.value) {
            tempViewPdfList = masterLookupStateData.docs_to_view.value;
        }

        let tempSignPdfList = signPdfList;
        if (this.props && masterLookupStateData && masterLookupStateData.docs_to_sign && masterLookupStateData.docs_to_sign.value) {
            tempSignPdfList = masterLookupStateData.docs_to_sign.value;
        }
        const currentPage = 6;
        const specialMFAUserType = `${this.props && getParam('SpecialMFA', '')}`;
        return (
            <View style={styles.container}>
                {
                    (accOpeningData.isLoading || masterLookupStateData.isLoading) && <GLoadingSpinner />
                }

                <GHeaderComponent
                    navigation={navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollView}>
                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage} ${gblStrings.accManagement.eSign}`} />

                    { /* -----------Tax Preferences -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.TINBackupCert}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />


                        <View style={styles.pdfSectionGrp}>
                            {!confirmTINTypeValidation && (
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.confirmTINBackupWithholdingMsg}
                                </Text>
                            )}
                            {this.renderRadio("confirmTINType", 36, { marginBottom: scaledHeight(24), marginTop: scaledHeight(24) }, styles.radioBtnColGrp)}
                        </View>


                    </View>


                    { /* -----------Document View -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.docToView}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <View style={styles.pdfSectionGrp}>
                            <FlatList
                                data={tempViewPdfList}
                                keyExtractor={this.generateKeyExtractor}
                                renderItem={this.renderViewPDFItem()}

                            />

                        </View>
                    </View>

                    { /* -----------Documents to Sign -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.docToSign}
                            </Text>
                        </View>
                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.accManagement.docToSignNote}
                        </Text>
                        <Text style={styles.lblLine} />


                        <View style={styles.pdfSectionGrp}>
                            <FlatList
                                data={tempSignPdfList}
                                keyExtractor={this.generateKeyExtractor}
                                renderItem={this.renderSignPDFItem(signPdfList.length)}
                            />

                        </View>
                        <View style={styles.agreeSectionGrp}>
                            <CustomCheckBox
                                size={24}
                                itemBottom={0}
                                itemTop={0}

                                outerCicleColor="#707070"
                                innerCicleColor="#61285F"
                                labelStyle={styles.agreeTermsTxt}
                                label={gblStrings.accManagement.agreeConditions}
                                selected={agreeConditions}
                                onPress={this.onPressCheck("agreeConditions", (agreeConditions ? "Y" : "N"))}

                            />

                            {!agreeConditionsValidation && (
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.confirmAgreeCondMsg}
                                </Text>
                            )}

                        </View>
                        <View style={styles.IRSConsentContainer}>
                            <Text style={styles.pdfFileDescTxt}>
                                {gblStrings.accManagement.IRSConsentMsg}
                            </Text>
                        </View>



                    </View>





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

OpenAccPageSixComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    submitAccountOpening: PropTypes.func,
    saveAccountOpening: PropTypes.func,
    getCompositeLookUpData: PropTypes.func,

};
OpenAccPageSixComponent.defaultProps = {
    navigation: {},
    accOpeningData: {},
    masterLookupStateData: {},
    getCompositeLookUpData: null,
    saveAccountOpening: null,
    submitAccountOpening: null,



};
export default OpenAccPageSixComponent;
