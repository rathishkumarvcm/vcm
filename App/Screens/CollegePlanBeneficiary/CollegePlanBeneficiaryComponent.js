import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GInputComponent, GHeaderComponent, GFooterComponent, showAlert, GDropDownComponent } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';



const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
];



class CollegePlanBeneficiaryComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            itemID: "",
            selectedItemID: "",
            selectedItemName: "",


            beneficiary: "",
            beneficiaryDropDown: false,

            accountOwnerSelected: "",
            firstName: "",
            middleInitial: "",
            lastName: "",
            dob: "",
            relationship: "",
            relationshipDropDown: false,

            beneficiaryValidation: true,
            accountOwnerSelectedValidation: true,
            firstNameValidation: true,
            middleInitialValidation: true,
            lastNameValidation: true,
            dobValidation: true,
            relationshipValidation: true,





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
        const { navigation } = this.props;
        const { goBack } = navigation;
        goBack('termsAndConditions');
    }

    onClickNext = () => {
        this.validateFields();
    }

    onClickSave = () => {
        this.validateFields();
    }

    onClickDownloadPDF = () => {
        AppUtils.debugLog("#TODO : Download");
    }

    onSelected = (item) => {
        AppUtils.debugLog(`item: ${item.id}`);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
        //  alert("You selected :: " + item.name)
    }

    selectedDropDownValue = (dropDownName, value) => () => {
        switch (dropDownName) {
            case "beneficiaryDropDown":
                this.setState({
                    beneficiary: value,
                    beneficiaryDropDown: false
                });
                break;

            case "relationshipDropDown":
                this.setState({
                    relationship: value,
                    relationshipDropDown: false
                });
                break;



            default:
                break;

        }

    }

    onSubmitEditing = (input) => text => {
        AppUtils.debugLog(`onSubmitEditing:::>${text}`);
        input.focus();
    }

    onChangeText = (keyName) => text => {
        AppUtils.debugLog("onChangeText:::>");
        this.setState({
            [keyName]: text
        });

    }

    onPressDropDown = (keyName) => () => this.setState({
        [keyName]: !this.state[keyName]
    });

    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text
    });

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    generateKeyExtractor = (item) => item.key;



    renderCustomDropDown = ({ stateKey = "", dropDownName = "", lblDropdownName = "", isOptional = false }) => {
        const validationKey = `${stateKey}Validation`;
        const { errMsg } = this.state;
        const validationKeyValue = this.state[validationKey] !== undefined ? !this.state[validationKey] : false;


        const dropDownData = dummyData;

        switch (dropDownName) {

            case "beneficiaryDropDown":
                break;
            case "relationshipDropDown":
                break;
            default:
                break;

        }





        return (
            <GDropDownComponent
                inputref={this.setInputRef(`${stateKey}`)}
                dropDownLayout={styles.dropDownLayout}
                dropDownTextName={styles.dropDownTextName}
                dropDownName={lblDropdownName}
                data={dropDownData}
                dropDownValue={this.state[stateKey]}
                selectedDropDownValue={this.onSelectedDropDownValue(stateKey, dropDownName)}
                dropDownPostition={styles.dropDownPostition}
                errorFlag={isOptional ? false : validationKeyValue}
                errorText={errMsg}
                isOptional={isOptional}
                disabled={stateKey === "taxBracket"}
            />
        );

    }

    onSelectedDropDownValue = (stateKey, dropDownName) => (value, index, data) => {
        AppUtils.debugLog(`onSelectedDropDownValue:${dropDownName}`);
        const item = data[index];

        this.setState(({
            [stateKey]: item.value,
            [`${stateKey}Validation`]: true,

        }));


    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        }
        return false;

    }

    validateFields = () => {
        AppUtils.debugLog("validateFields::: ");
        const { navigation } = this.props;
        const { push } = navigation;
        const {
            beneficiary,
            accountOwnerSelected,
            firstName,
            lastName,
            dob,
            relationship } = this.state;

        this.setState({
            beneficiaryValidation: true,
            accountOwnerSelectedValidation: true,
            firstNameValidation: true,
            middleInitialValidation: true,
            lastNameValidation: true,
            dobValidation: true,
            relationshipValidation: true,

        });

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";



        if (this.isEmpty(beneficiary)) {
            errMsg = gblStrings.accManagement.confirmBeneficiaryforThePlanMsg;
        } else if (this.isEmpty(accountOwnerSelected)) {
            errMsg = gblStrings.accManagement.emptySuccessOwnerMsg;
        } else if (this.isEmpty(firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
        } else if (this.isEmpty(lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
        } else if (this.isEmpty(dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
        } else if (this.isEmpty(relationship)) {
            errMsg = gblStrings.accManagement.emptyRelationShipMsg;
            input = 'relationship';
        } else {
            isValidationSuccess = true;
        }



        if (isValidationSuccess) {
            push('collegePlanPartOneTwo', { pageNo: 6 });

        } else {
            this.setState({
                [`${input}Validation`]: false
            });
            //  var temp = input !== "" ? this[input].focus() : ""
            showAlert(gblStrings.common.appName, errMsg, gblStrings.common.ok);


        }

    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const currentPage = 5;
        const { navigation } = this.props;

        const {
           // beneficiary,
            accountOwnerSelected,
            // firstName,
            // lastName,
            // dob,
           // relationship,
            firstNameValidation,
            lastNameValidation,
            dobValidation,
           // relationshipValidation

        } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} onPress={this.onClickHeader} />
                <ScrollView style={styles.scrollView}>
                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage} ${gblStrings.accManagement.beneficiaryInfo}`} />


                    { /* -----------Plan Beneficiary -------------------*/}

                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.planBeneficiary}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.accManagement.chooseThePersonWhoseEducation}
                        </Text>


                        {this.renderCustomDropDown({
                            stateKey: "beneficiary",
                            dropDownName: "beneficiaryDropDown",
                            lblDropdownName: gblStrings.accManagement.whoWillBeTheBeneficiary,
                            isOptional: true
                        })
                        }

                        <GButtonComponent
                            buttonStyle={styles.addBeneficiaryBtn}
                            buttonText="+ Add a Beneficiary"
                            textStyle={styles.addBeneficiaryBtnTxt}
                        />

                    </View>
                    { /* -----------Successor Account Owner Information -------------------*/}

                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.successorAccOwnerInfo}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.regulatoryQuestTxt}>
                            {gblStrings.accManagement.successorAccOwnerInfoQuest}
                        </Text>



                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                size={30}
                                componentStyle={styles.radioCol1}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Yes"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((accountOwnerSelected !== "" && accountOwnerSelected === true))}
                                onPress={this.onPressRadio("accountOwnerSelected", true)}

                            />
                            <CustomRadio
                                size={30}
                                componentStyle={styles.radioCol2}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="No"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((accountOwnerSelected !== "" && accountOwnerSelected !== true))}
                                onPress={this.onPressRadio("accountOwnerSelected", false)}
                            />
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.firstName}
                        </Text>


                        <GInputComponent
                            inputref={this.setInputRef("firstName")}
                            propInputStyle={firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.firstName}
                            /*  onChangeText={(text) => {
                                  this.setState({ firstName: text });
                              }}
                              */
                            onChangeText={this.onChangeText("firstName")}
                            //  onSubmitEditing={() => this.middleInitial.focus()}
                            onSubmitEditing={this.onSubmitEditing(this.middleInitial)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.middleInitial}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("middleInitial")}
                            propInputStyle={styles.customTxtBox}
                            placeholder=""
                            maxLength={gblStrings.maxLength.middleInitial}
                            onChangeText={this.onChangeText("middleInitial")}
                            onSubmitEditing={this.onSubmitEditing(this.lastName)}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.lastName}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("lastName")}
                            propInputStyle={lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.dob}
                            onChangeText={this.onChangeText("lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.dob)}
                        />



                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.dob}
                        </Text>
                        <GInputComponent

                            inputref={this.setInputRef("dob")}
                            propInputStyle={dobValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.dob}
                            onChangeText={this.onChangeText("dob")}
                            onSubmitEditing={this.onSubmitEditing(this.relationship)}

                        />
                        <Text style={styles.hintLabelTxt}>
                            MM/DD/YYYY
                        </Text>

                      
                        {this.renderCustomDropDown({
                            stateKey: "relationship",
                            dropDownName: "relationshipDropDown",
                            lblDropdownName: gblStrings.accManagement.relationship,
                            isOptional: false
                        })
                        }


                    </View>

                    { /* ----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>

                        <Text style={styles.agreeTxt}>
                            {gblStrings.accManagement.ApplicationPartDisclaimer}
                        </Text>
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


CollegePlanBeneficiaryComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default CollegePlanBeneficiaryComponent;