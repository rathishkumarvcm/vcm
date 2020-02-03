/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GInputComponent, GRadioButtonComponent, GDropDownComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import {emailRegex} from '../../Constants/RegexConstants';
//  import { scaledHeight } from '../../Utils/Resolution';


// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
let quesData = [
    {
        id: '1',
        title: 'Which City were you born',
    },
    {
        id: '2',
        title: 'What is the name of your School',
    },
    {
        id: '3',
        title: 'What is your first pet name',
    },
    {
        id: '4',
        title: 'What is your College Name'
    }];

const securityQuestions = [
    { index1: 0, question: "Deliver All my documents online at vcm.com" },
    { index1: 1, question: "Do not change my document delivery Prefrence" },
];


/* const DropDownListItem = (props) => {
    console.log("DropDownListItem:: ");
    return (
        <TouchableOpacity style={{ height: 33 }} onPress={props.onSelectedItem}>
            <Text> {props.value} </Text>
        </TouchableOpacity>
    );
}; */
class ModifySecQuesComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            question1: '',
            question1Dropdown: false,
            question2: "",
            question2Dropdown: false,
            question3: "",
            question3Dropdown: false,
            q1Ans: "",
            q1Ansval: true,
            q2Ans: "",
            q2Ansval: true,
            q3Ans: "",
            q3Ansval: true,
            q1Val: false,
            q2Val: false,
            q3Val: false,
            primaryEmail: "",
            additionalEmail: "",
            validationPrimaryEmail: true,
            validationAdditionalEmail: true,
            additionalEmailFlag: false,
            radioButton: false,
            radioButtonIndex: 0,
            firstRender: true,
            q1Select: true,
            q2Select: true,
            q3Select: true,
            errorText1: "",
            errorText2: "",
            errorText3: "",
            documentPreference: "Deliver All my documents online at vcm.com"

        };

    }


    /* ----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

        const payload = [];
        const compositePayloadData = [
            "security_ques"
        ];
        const { getPersonalCompositeData, masterLookupStateData } = this.props;

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[parseInt(i,0)];
            if (this.props && masterLookupStateData && !masterLookupStateData[parseInt(tempkey,0)]) {
                payload.push(tempkey);
            }
        }

        getPersonalCompositeData(payload);
        //  console.log("------>emailllllllll", this.props);
        //  console.log("payload", payload);

        this.getInitialValues();
        //  console.log("questions",this.props.masterLookupStateData.security_ques.value);
    }

    getInitialValues = () => {
        const { initialState, saveQuestionsData } = this.props;
        if (this.props && initialState && initialState.email) {
            this.setState({
                primaryEmail: initialState.email
            });

        }
        if (this.props && saveQuestionsData && saveQuestionsData.list_security_questions) {
            this.setState({
                question1: saveQuestionsData.list_security_questions[0].question1,
                q1Ans: saveQuestionsData.list_security_questions[0].answer1,
                question2: saveQuestionsData.list_security_questions[1].question2,
                q2Ans: saveQuestionsData.list_security_questions[1].answer2,
                question3: saveQuestionsData.list_security_questions[2].question3,
                q3Ans: saveQuestionsData.list_security_questions[2].answer3,
                primaryEmail: saveQuestionsData.primaryEmail,
                additionalEmail: saveQuestionsData.additonalEmail
            });
            if (saveQuestionsData.documentDeliveryPreference === "Deliver All my documents online at vcm.com") {
                this.setState({
                    radioButtonIndex: 0
                });
            }
            else {
                this.setState({
                    radioButtonIndex: 1
                });
            }
            if (!this.isEmpty(saveQuestionsData.additonalEmail)) {
                this.setState({
                    additionalEmailFlag: true
                });
            }
        }
    }

    /* ----------------------
                                 Button Events 
                                 -------------------------- */

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    onClickSave = () => {
        //  console.log("Save:::");
        this.manageData();
    }

    saveQuestions = () => {
        let addedQuestionsPayload = {};
        const questionsList = [];
        const { question1, question2, question3, q1Ans, q2Ans, q3Ans, primaryEmail, additionalEmail, documentPreference } = this.state;
        questionsList.push({ "question1": question1, "answer1": q1Ans });
        questionsList.push({ "question2": question2, "answer2": q2Ans });
        questionsList.push({ "question3": question3, "answer3": q3Ans });


        addedQuestionsPayload = {
            list_security_questions: questionsList,
            primaryEmail,
            additonalEmail: additionalEmail,
            documentDeliveryPreference: documentPreference
        };


        //  list.push(addedQuestionsPayload);
        return addedQuestionsPayload;
    }

    manageData = () => {
        const payloadData = this.saveQuestions();
        const { saveQuestions, navigation } = this.props;
        saveQuestions("saveQuestionsData", payloadData);
        //  console.log("----questions", payloadData);
        navigation.navigate('otpSecurityConfirm');
        // this.goBack();
        //  this.scrollToTop();
    }

    radioButtonClicked = (index) => () => {
        const { radioButtonIndex } = this.state;
        if (index !== radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });

            if (index === 1) {
                this.setState({
                    documentPreference: "Do not change my document delivery Prefrence"
                });
            }
            else {
                this.setState({
                    documentPreference: "Deliver All my documents online at vcm.com"
                });
            }
        }
        else {
            this.setState({
                radioButton: false
            });
        }
    }

    onPressDropDown = (stateKey, keyName) => () => this.setState(prevState => ({
        ...prevState[stateKey.toString()],
        [keyName]: !prevState.keyName

    }));

    onChangeText = (stateKey, val) => text => {
        //  console.log("onChangeText:::>");
        this.setState({
            [stateKey]: text,
            [val]: (!this.isEmpty(text)),
        });
    }

    validatePrimaryEmail = () => {
        const { primaryEmail } = this.state;
        const validate = emailRegex.test(primaryEmail);
        this.setState({
            validationPrimaryEmail: validate
        });
    }

    validateAdditionalEmail = () => {
        const { additionalEmail } = this.state;
        const validate = emailRegex.test(additionalEmail);
        this.setState({
            validationAdditionalEmail: validate
        });
    }

    selectTheQuestion = () => {
        const { question1Dropdown } = this.state;
        this.setState({
            question1Dropdown: !question1Dropdown
        });
    }

    selectTheQuestion2 = () => {
        const { question2Dropdown } = this.state;
        this.setState({
            question2Dropdown: !question2Dropdown
        });
    }

    selectTheQuestion3 = () => {
        const { question3Dropdown } = this.state;
        this.setState({
            question3Dropdown: !question3Dropdown
        });
    }

    selectedDropDownValue = (value) => {
        this.setState({
            question1: value,
            question1Dropdown: false
        });
    }

    selectedDropDownValue2 = (value) => {
        this.setState({
            question2: value,
            question2Dropdown: false
        });
    }

    selectedDropDownValue3 = (value) => {
        this.setState({
            question3: value,
            question3Dropdown: false
        });
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;

    }

    additionalEmail = () => {
        this.setState({ additionalEmailFlag: true });
    }

    validateFields = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        const { q1Ans, q2Ans, q3Ans, primaryEmail, validationPrimaryEmail, question1, question2, question3 } = this.state;
        if (this.isEmpty(q1Ans)) {
            this.setState({ q1Ansval: false });
            errMsg = "error";
        }
        else {
            this.setState({ q1Ansval: true });
        }

        if (this.isEmpty(q2Ans)) {
            this.setState({ q2Ansval: false });
            errMsg = "error";
        }
        else {
            this.setState({ q2Ansval: true });
        }

        if (this.isEmpty(q3Ans)) {
            this.setState({ q3Ansval: false });
            errMsg = "error";
        }
        else {
            this.setState({ q3Ansval: true });
        }

        if (this.isEmpty(primaryEmail)) {
            errMsg = "error";
        }

        if (!validationPrimaryEmail) {
            errMsg = "error";
        }

        if (this.isEmpty(question1)) {
            this.setState({ q1Select: false, errorText1: "Please Select your Question" });
            errMsg = "error";
        }
        else {
            this.setState({ q1Select: true, });
        }
        if (this.isEmpty(question2)) {
            this.setState({ q2Select: false, errorText2: "Please Select your Question" });
            errMsg = "error";
        }
        else {
            this.setState({ q2Select: true, });
        }
        if (this.isEmpty(question3)) {
            this.setState({ q3Select: false, errorText3: "Please Select your Question" });
            errMsg = "error";
        }
        else {
            this.setState({ q3Select: true, });
        }

        if (!this.isEmpty(question1) && !this.isEmpty(question2) && question1 === question2) {
            errMsg = "error";
            this.setState({ q1Val: true, q2Val: true, q3Val: false, errorText1: gblStrings.userManagement.dropDownError, errorText2: gblStrings.userManagement.dropDownError });
        }
        else if (!this.isEmpty(question2) && !this.isEmpty(question3) && question2 === question3) {
            errMsg = "error";
            this.setState({ q2Val: true, q3Val: true, q1Val: false, errorText2: gblStrings.userManagement.dropDownError, errorText3: gblStrings.userManagement.dropDownError });
        }

        else if (!this.isEmpty(question3) && !this.isEmpty(question1) && question3 === question1) {
            errMsg = "error";
            this.setState({ q3Val: true, q1Val: true, q2Val: false, errorText3: gblStrings.userManagement.dropDownError, errorText1: gblStrings.userManagement.dropDownError });
        }
        else {
            this.setState({ q3Val: false, q1Val: false, q2Val: false });
        }

        if (errMsg !== "error") {
            isValidationSuccess = true;
            if (isValidationSuccess) {
                /* console.log("-----> Data", this.state.question1, this.state.q1Ans, this.state.question2, this.state.q2Ans,
                    this.state.question3, this.state.q3Ans, this.state.primaryEmail, this.state.additionalEmail); */
                this.onClickSave();
            }
        }



    }


    render() {
        const { masterLookupStateData, navigation } = this.props;
        const { question1Dropdown, question1, q1Select, q1Val, errorText1, q1Ans, q1Ansval,
            question2Dropdown, question2, q2Select, q2Val, errorText2, q2Ans, q2Ansval,
            question3Dropdown, question3, q3Select, q3Val, errorText3, q3Ans, q3Ansval, primaryEmail,
            validationPrimaryEmail, additionalEmailFlag, additionalEmail, radioButtonIndex } = this.state;
        if (this.props && masterLookupStateData && masterLookupStateData.security_ques && masterLookupStateData.security_ques.value) {
            quesData = masterLookupStateData.security_ques.value;
        }
        //  console.log("props", this.props.masterLookupStateData);
        //  console.log("security questions render",this.props.saveQuestionsData);

        return (

            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.signInView}>
                        <Text style={styles.signIntext}>
                            {gblStrings.userManagement.modifySecurityHeading}
                        </Text>
                        <Text style={styles.lblLine} />
                        <ScrollView>
                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.userManagement.modifySecuritySelect}
                                </Text>
                            </View>
                            <GDropDownComponent
                                dropDownLayout={styles.dropdownTextInput}
                                dropDownName={gblStrings.userManagement.ques1}
                                data={quesData}
                                placeholder={gblStrings.common.select}
                                itemToDisplay="value"
                                changeState={this.selectTheQuestion}
                                showDropDown={question1Dropdown}
                                dropDownValue={question1}
                                selectedDropDownValue={this.selectedDropDownValue}
                                errorFlag={!q1Select || q1Val}
                                errorText={errorText1}
                                dropDownPostition={styles.dropDown1}
                            />
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox}
                                value={q1Ans}
                                onChangeText={this.onChangeText("q1Ans", "q1Ansval")}
                                errorFlag={!q1Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            />
                            <GDropDownComponent
                                dropDownLayout={styles.dropdownTextInput}
                                dropDownName={gblStrings.userManagement.ques2}
                                data={quesData}
                                placeholder={gblStrings.common.select}
                                itemToDisplay="value"
                                changeState={this.selectTheQuestion2}
                                showDropDown={question2Dropdown}
                                dropDownValue={question2}
                                selectedDropDownValue={this.selectedDropDownValue2}
                                errorFlag={!q2Select || q2Val}
                                errorText={errorText2}
                                dropDownPostition={styles.dropDown2}
                            />
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox}
                                value={q2Ans}
                                onChangeText={this.onChangeText("q2Ans", "q2Ansval")}
                                errorFlag={!q2Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            />
                            <GDropDownComponent
                                dropDownLayout={styles.dropdownTextInput}
                                dropDownName={gblStrings.userManagement.ques3}
                                data={quesData}
                                placeholder={gblStrings.common.select}
                                itemToDisplay="value"
                                changeState={this.selectTheQuestion3}
                                showDropDown={question3Dropdown}
                                dropDownValue={question3}
                                selectedDropDownValue={this.selectedDropDownValue3}
                                errorFlag={!q3Select || q3Val}
                                errorText={errorText3}
                                dropDownPostition={styles.dropDown3}
                            />
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox}
                                value={q3Ans}
                                onChangeText={this.onChangeText("q3Ans", "q3Ansval")}
                                errorFlag={!q3Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.confirmPEmail}
                            </Text>
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox}
                                placeholder={gblStrings.accManagement.emailformat}
                                keyboardType="email-address"
                                value={primaryEmail}
                                maxLength={gblStrings.maxLength.emailID}
                                onChangeText={this.onChangeText("primaryEmail")}
                                onBlur={this.validatePrimaryEmail}
                                errorFlag={!validationPrimaryEmail}
                                errorText={gblStrings.userManagement.emailError}
                            />
                            <TouchableOpacity style={styles.additionaemailView} onPress={this.additionalEmail}>
                                <Text style={styles.underlineText}>{gblStrings.userManagement.addAdditionalEmail}</Text>
                            </TouchableOpacity>
                            {(additionalEmailFlag) ?
                                (
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox}
                                        placeholder={gblStrings.accManagement.emailformat}
                                        keyboardType="email-address"
                                        maxLength={gblStrings.maxLength.emailID}
                                        onChangeText={this.onChangeText("additionalEmail")}
                                        onBlur={this.validateAdditionalEmail}
                                        value={additionalEmail}
                                    />
                                ) : null

                            }
                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.documentDeliveryPreference}
                            </Text>

                            {securityQuestions.map((item, index) =>
                                index === radioButtonIndex ?
                                    (
                                        <GRadioButtonComponent
                                            onPress={this.radioButtonClicked(index)}
                                            selected
                                            questions={item.question}
                                        />
                                    )
                                    :
                                    (
                                        <GRadioButtonComponent
                                            onPress={this.radioButtonClicked(index)}
                                            selected={false}
                                            questions={item.question}
                                        />
                                    )
                            )}
                            <GButtonComponent
                                buttonStyle={styles.cancelButton}
                                buttonText={gblStrings.common.back}
                                textStyle={styles.cancelButtonText}
                                onPress={this.goBack}
                            />
                            <GButtonComponent
                                buttonStyle={styles.cancelButton}
                                buttonText={gblStrings.common.cancel}
                                textStyle={styles.cancelButtonText}
                                onPress={this.goBack}
                            />
                            <GButtonComponent
                                buttonStyle={styles.saveButton}
                                buttonText={gblStrings.common.save}
                                textStyle={styles.saveButtonText}
                                onPress={this.validateFields}
                            />

                            <GFooterComponent />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

ModifySecQuesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    //  onSelectedItem: PropTypes.func,
    value: PropTypes.instanceOf(Object),
    saveQuestions: PropTypes.func,
    saveQuestionsData: PropTypes.instanceOf(Object),
    getPersonalCompositeData: PropTypes.func
};

ModifySecQuesComponent.defaultProps = {
    navigation: {},
    initialState: {},
    masterLookupStateData: {},
    //  onSelectedItem: ()=>{},
    value: {},
    saveQuestions: () => { },
    saveQuestionsData: {},
    getPersonalCompositeData: () => { }
};
export default ModifySecQuesComponent;