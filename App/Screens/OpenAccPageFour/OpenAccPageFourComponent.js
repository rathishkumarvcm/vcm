import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent ,GLoadingSpinner,GSingletonClass,showAlert} from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';

const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
];

const myInstance = GSingletonClass.getInstance();

class OpenAccPageFourComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        const openAccPageFour = myInstance.getAccOpeningEditMode() ? (myInstance.getScreenStateData().openAccPageFour || {}):{};

        this.state = {
            selectedDividendCapitalGains: "",
            selectedProspectusReportsRef: "",
            dividendCapitalGainsValidation:true,
            ProspectusReportsRefValidation:true,
            isValidationSuccess: true,
            errMsg:"",
            ...openAccPageFour

        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        const payload = [];
        const compositePayloadData = [
            "div_capGain_pref",
            "stmt_pros_rep"
        ];

        const { masterLookupStateData,getCompositeLookUpData } = this.props;

        for (let i = 0; i < compositePayloadData.length; i+=1) {
            const tempkey = compositePayloadData[i];
            if (this.props && masterLookupStateData && !masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        getCompositeLookUpData(payload);
    }

    componentDidUpdate(prevProps, prevState) {
        AppUtils.debugLog(`componentDidUpdate::::> ${prevState}`);
        const { accOpeningData} = this.props;

        if (this.props !== prevProps) {
            const responseKey = ActionTypes.PREFERENCE_SAVE_OPENING_ACCT;
            if (accOpeningData[responseKey]) {
                if (accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = accOpeningData[responseKey];
                    if (tempResponse.statusCode === 200 || tempResponse.statusCode === '200') {
                        const msg = tempResponse.message;
                        AppUtils.debugLog(`Account Type Saved ::: :: ${ msg}`);
                        showAlert(gblStrings.common.appName ,tempResponse.result,"OK");
                        AppUtils.debugLog(tempResponse.result);
                    } else {
                        showAlert(gblStrings.common.appName ,tempResponse.message,"OK");
                        AppUtils.debugLog(tempResponse.message);
                    }
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
        myInstance.setAccOpeningEditMode(false);
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
        showAlert(gblStrings.common.appName ,"#TODO : Download","OK");
    }

    getPayload = () => {
        const savedAccData = myInstance.getSavedAccData();
        const {selectedDividendCapitalGains,selectedProspectusReportsRef} = this.state;

        const payload = {
            ...savedAccData,
            "accountPreferences": {
                "dividendCapitalGain": selectedDividendCapitalGains || "",
                "documentDeliveryFormat": selectedProspectusReportsRef || ""
            },
        };
        
        return payload;

    }

    replaceUndefinedOrNull= (key, value) => {
        if (value === null || value === undefined || value ==='') {
          return undefined;
        }

        return value;
      }

    getCleanedPayload = (payload) =>{
        const cleanedObject = JSON.stringify(payload, this.replaceUndefinedOrNull, 4);
        return JSON.parse(cleanedObject);
    }

    onClickNext = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;  
        if (this.validateFields()) {
            const payload = this.getPayload();
           //  this.props.saveData("OpenAccPageFour", payload);
            myInstance.setSavedAccData(payload);
            const stateData = myInstance.getScreenStateData();
            const screenState = {
                ...stateData,
                "openAccPageFour":{...this.state}
              }; 
            myInstance.setScreenStateData(screenState);
            navigate({ routeName: 'openAccPageFive', key: 'openAccPageFive' });
          }
        }

    onClickSave = () => {
        AppUtils.debugLog("onClickSave::::> ");
        const { saveAccountOpening} = this.props;
        if (this.validateFields()) {
            const payload = this.getPayload();
            saveAccountOpening("OpenAccPageFour", payload);
        }
    }

    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text,
        dividendCapitalGainsValidation:true,
        ProspectusReportsRefValidation:true
    });

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        } 
            return false;
        
    }

    validateFields = () => {
        const {selectedDividendCapitalGains,selectedProspectusReportsRef} = this.state;

        let errMsg = "";
        let input = "";
        let isValidationSuccess = false;
        if (this.isEmpty(selectedDividendCapitalGains)) {
            errMsg = gblStrings.accManagement.emptyDividendCapitalGainsMsg;
            input = "dividendCapitalGainsValidation";
        } else if (this.isEmpty(selectedProspectusReportsRef)) {
            errMsg = gblStrings.accManagement.emptyProspectusReportsRefMsg;
            input = "ProspectusReportsRefValidation";

        } else {
            isValidationSuccess = true;
        }

       
        this.setState({
            isValidationSuccess,
            errMsg:isValidationSuccess === false ? errMsg:"",
            [input]: false

         });


        return isValidationSuccess;
    }

    renderRadio = (radioName, radioSize, componentStyle, layoutStyle) => {
       
     
        AppUtils.debugLog(`renderRadio::: ${ radioName}`);
        const { masterLookupStateData} = this.props;

        let tempkey = "";
        let radioData = dummyData;
        switch (radioName) {
            case "selectedDividendCapitalGains":
                tempkey = "div_capGain_pref";
                break;
            case "selectedProspectusReportsRef":
                tempkey = "stmt_pros_rep";
                break;
            default:
                break;
            
        }

        AppUtils.debugLog(`tempkey::${ tempkey}`);

        if (this.props && masterLookupStateData && masterLookupStateData[tempkey] && masterLookupStateData[tempkey].value) {
            radioData = masterLookupStateData[tempkey].value;
        }

        const radioCoponents = [];
        for (let i = 0; i < radioData.length; i +=1) {
            radioCoponents.push(
                <CustomRadio
                    key={radioData[i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor="#DEDEDF"
                    innerCicleColor="#61285F"
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[i].value}
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel={radioData[i].value}
                    selected={!!((this.state[radioName] !== null && this.state[radioName] === radioData[i].key))}
                    onPress={this.onPressRadio(radioName, radioData[i].key)}
                />
            );
        }
        return (
            <View style={layoutStyle}>
                {radioCoponents}
            </View>
        );

    }

    renderRadio1 = (radioName, radioSize, componentStyle, layoutStyle) => {
        AppUtils.debugLog(`renderRadio::: ${ radioName}`);
        let tempkey = "";
        let radioData = dummyData;
        switch (radioName) {
            case "selectedDividendCapitalGains":
                tempkey = "div_capGain_pref";
                break;
            case "selectedProspectusReportsRef":
                tempkey = "stmt_pros_rep";
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
                    descLabel={radioData[i].value}
                    selected={(this.state[radioName] !== null && this.state[radioName] == radioData[i].key) ? true : false}
                    onPress={this.onPressRadio(radioName, radioData[i].key)}
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
        const currentPage = 4;
        const { accOpeningData,masterLookupStateData,navigation} = this.props;
        const {dividendCapitalGainsValidation,ProspectusReportsRefValidation} = this.state;

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
                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage } ${ gblStrings.accManagement.preferences}`} />

                    { /* -----------General Account Preferences -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.genealAccPreferences}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.accManagement.genealAccPreferencesNote}
                        </Text>

                        <View style={styles.questSectionGrp}>
                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.dividensAndCapitalQuest}
                            </Text>
                            {!dividendCapitalGainsValidation && (
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.emptyDividendCapitalGainsMsg}
                                </Text>
                              )}

                            <View style={styles.explainContainer}>
                                <Text style={styles.explainTxt}>
                                    {"Explain - "}
                                </Text>
                                <View style={styles.explainDottedBorder}>
                                    <Text style={styles.explainDotteBorderTxt}>
                                        {gblStrings.accManagement.dividensAndCapitalGains}
                                    </Text>
                                </View>
                            </View>

                            {this.renderRadio("selectedDividendCapitalGains", 36, { marginBottom: scaledHeight(24), marginTop: scaledHeight(24) }, styles.radioBtnColGrp)}

                           

                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.prospectusReports}
                            </Text>
                            {!ProspectusReportsRefValidation && (
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.emptyProspectusReportsRefMsg}
                                </Text>
                              )}
                            <View style={styles.explainContainer}>
                                <Text style={styles.explainTxt}>
                                    {"Explain - "}
                                </Text>
                                <View style={styles.explainDottedBorder}>
                                    <Text style={styles.explainDotteBorderTxt}>
                                        {gblStrings.accManagement.prospectusReports}
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.desiredFormatDelivaryDocs}
                            </Text>
                            {this.renderRadio("selectedProspectusReportsRef", 36, { marginBottom: scaledHeight(0), marginTop: scaledHeight(20) }, styles.radioBtnColGrp)}
                        </View>


                    </View>


                    { /* ----------- Buttons Group -------------------*/}

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

OpenAccPageFourComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
   
    saveAccountOpening:PropTypes.func,
    getCompositeLookUpData:PropTypes.func
};
OpenAccPageFourComponent.defaultProps = {
    navigation: {},
    accOpeningData: {},
    masterLookupStateData: {},
    getCompositeLookUpData: null,
    saveAccountOpening: null
    

};
export default OpenAccPageFourComponent;