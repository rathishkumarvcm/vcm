import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent ,GLoadingSpinner} from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
];


class OpenAccPageFourComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            selectedDividendCapitalGains: "",
            selectedProspectusReportsRef: "",
            dividendCapitalGainsValidation:true,
            ProspectusReportsRefValidation:true,
            isValidationSuccess: true,
            errMsg:""

        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        let payload = [];
        const compositePayloadData = [
            "div_capGain_pref",
            "stmt_pros_rep"
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
            const responseKey = ActionTypes.PREFERENCE_SAVE_OPENING_ACCT;
            if (this.props.accOpeningData[responseKey]) {
                if (this.props.accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = this.props.accOpeningData[responseKey];
                    if (tempResponse.statusCode == 200 || tempResponse.statusCode == '200') {
                        let msg = tempResponse.message;
                        console.log("Account Type Saved ::: :: " + msg);
                        alert(tempResponse.result);
                    } else {
                        alert(tempResponse.message);
                    }
                }
            }
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
    getPayload = () => {
        let payload ={};
        if (this.props && this.props.accOpeningData && this.props.accOpeningData.savedAccData) {
            payload = {
                ...this.props.accOpeningData.savedAccData,
                "accountPreferences": {
                    "dividendCapitalGain": this.state.selectedDividendCapitalGains,
                    "documentDeliveryFormat": this.state.selectedProspectusReportsRef
                },
            };
        }
        return payload;

    }

    onClickNext = () => {
        if (this.validateFields()) {
            const payload = this.getPayload();
            this.props.saveData("OpenAccPageFour", payload);  
            this.props.navigation.navigate({ routeName: 'openAccPageFive', key: 'openAccPageFive' });
          }
        }
    onClickSave = () => {
        console.log("onClickSave::::> ");
        if (this.validateFields()) {
            const payload = this.getPayload();
            this.props.saveAccountOpening("OpenAccPageFour", payload);
        }
    }
    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text,
        dividendCapitalGainsValidation:true,
        ProspectusReportsRefValidation:true
    });
    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }
    validateFields = () => {
        var errMsg = "";
        let input = "";
        var isValidationSuccess = false;
        if (this.isEmpty(this.state.selectedDividendCapitalGains)) {
            errMsg = gblStrings.accManagement.emptyDividendCapitalGainsMsg;
            input = "dividendCapitalGainsValidation";
        } else if (this.isEmpty(this.state.selectedProspectusReportsRef)) {
            errMsg = gblStrings.accManagement.emptyProspectusReportsRefMsg;
            input = "ProspectusReportsRefValidation";

        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            alert(errMsg);
        }
        this.setState({
            isValidationSuccess: isValidationSuccess,
            errMsg:isValidationSuccess == false ? errMsg:"",
            [input]: false

         });


        return isValidationSuccess;
    }

    renderRadio = (radioName, radioSize, componentStyle, layoutStyle) => {
        console.log("renderRadio::: " + radioName);
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
        let currentPage = 4;
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
                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + " " + gblStrings.accManagement.preferences} />

                    { /*-----------General Account Preferences -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.genealAccPreferences}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.accManagement.genealAccPreferencesNote}
                        </Text>

                        <View style={styles.questSectionGrp} >
                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.dividensAndCapitalQuest}
                            </Text>
                            {!this.state.dividendCapitalGainsValidation &&
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.emptyDividendCapitalGainsMsg}
                                </Text>
                            }

                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "flex-start", flexWrap: 'wrap', marginTop: scaledHeight(13) }}>
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
                            {!this.state.ProspectusReportsRefValidation &&
                                <Text style={styles.errMsg}>
                                    {gblStrings.accManagement.emptyProspectusReportsRefMsg}
                                </Text>
                            }
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "flex-start", flexWrap: 'wrap', marginTop: scaledHeight(13) }}>
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

OpenAccPageFourComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
   
    saveData:PropTypes.func,
    saveAccountOpening:PropTypes.func,
    getCompositeLookUpData:PropTypes.func
};
export default OpenAccPageFourComponent;