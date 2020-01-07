/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GInputComponent, GRadioButtonComponent, GIcon, GDropDownComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
// import { scaledHeight } from '../../Utils/Resolution';


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
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
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
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

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }

        this.props.getPersonalCompositeData(payload);
        // console.log("------>emailllllllll", this.props);
        // console.log("payload", payload);
       
        this.getInitialValues();
        // console.log("questions",this.props.masterLookupStateData.security_ques.value);
    }

      getInitialValues = () =>{
        if (this.props && this.props.initialState && this.props.initialState.email) {
            this.setState({
                primaryEmail: this.props.initialState.email
            });

        }
        if(this.props && this.props.saveQuestionsData&&this.props.saveQuestionsData.list_security_questions)
        {
            this.setState({
                question1:this.props.saveQuestionsData.list_security_questions[0].question1,
                q1Ans:this.props.saveQuestionsData.list_security_questions[0].answer1,
                question2:this.props.saveQuestionsData.list_security_questions[1].question2,
                q2Ans:this.props.saveQuestionsData.list_security_questions[1].answer2,
                question3:this.props.saveQuestionsData.list_security_questions[2].question3,
                q3Ans:this.props.saveQuestionsData.list_security_questions[2].answer3,
                primaryEmail:this.props.saveQuestionsData.primaryEmail,
                additionalEmail:this.props.saveQuestionsData.additonalEmail
            });
            if(this.props.saveQuestionsData.documentDeliveryPreference === "Deliver All my documents online at vcm.com")
            {
                this.setState({
                    radioButtonIndex:0
                });
            }
            else{
                this.setState({
                    radioButtonIndex:1
                });
            }
            if(!this.isEmpty(this.props.saveQuestionsData.additonalEmail))
            {
                this.setState({
                    additionalEmailFlag:true
                });
            }
        }
      }

    /* ----------------------
                                 Button Events 
                                 -------------------------- */

    goBack = () => {
        this.props.navigation.goBack();
    }

    onClickSave = () => {
        // console.log("Save:::");
        this.manageData();
    }

    saveQuestions = () => {
        let addedQuestionsPayload = {}; 
        const questionsList = [];

        questionsList.push({ "question1": this.state.question1, "answer1": this.state.q1Ans });
        questionsList.push({ "question2": this.state.question2, "answer2": this.state.q2Ans });
        questionsList.push({ "question3": this.state.question3, "answer3": this.state.q3Ans });


        addedQuestionsPayload = {
            list_security_questions: questionsList,
            primaryEmail: this.state.primaryEmail,
            additonalEmail: this.state.additionalEmail,
            documentDeliveryPreference: this.state.documentPreference
        };


        // list.push(addedQuestionsPayload);
        return addedQuestionsPayload;
    }

    manageData = () => {
        const payloadData = this.saveQuestions();
        this.props.saveQuestions("saveQuestionsData", payloadData);
        // console.log("----questions", payloadData);
        this.props.navigation.navigate('otpSecurityConfirm');
        //this.goBack();
        // this.scrollToTop();
    }

    radioButtonClicked = (index) =>()=> {
        if (index !== this.state.radioButtonIndex) {
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
        ...prevState[stateKey],
        [keyName]: !prevState.keyName

    }));

    onChangeText = (stateKey, val) => text => {
        // console.log("onChangeText:::>");
        this.setState({
            [stateKey]: text,
            [val]: (!this.isEmpty(text)),
        });
    }

    validatePrimaryEmail = () => {
        const validate = emailRegex.test(this.state.primaryEmail);
        this.setState({
            validationPrimaryEmail: validate
        });
    }
    
    validateAdditionalEmail = () => {
        const validate = emailRegex.test(this.state.additionalEmail);
        this.setState({
            validationAdditionalEmail: validate
        });
    }
    
    selectTheQuestion = () => {
        this.setState({
            question1Dropdown: !this.state.question1Dropdown
        });
    }

    selectTheQuestion2 = () => {
        this.setState({
            question2Dropdown: !this.state.question2Dropdown
        });
    }
    
    selectTheQuestion3 = () => {
        this.setState({
            question3Dropdown: !this.state.question3Dropdown
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

        if (this.isEmpty(this.state.q1Ans)) {
            this.setState({ q1Ansval: false });
            errMsg = "error";
        }
        else {
            this.setState({ q1Ansval: true });
        }

        if (this.isEmpty(this.state.q2Ans)) {
            this.setState({ q2Ansval: false });
            errMsg = "error";
        }
        else {
            this.setState({ q2Ansval: true });
        }

        if (this.isEmpty(this.state.q3Ans)) {
            this.setState({ q3Ansval: false });
            errMsg = "error";
        }
        else {
            this.setState({ q3Ansval: true });
        }

        if (this.isEmpty(this.state.primaryEmail)) {
            errMsg = "error";
        }

        if (!this.state.validationPrimaryEmail) {
            errMsg = "error";
        }

        if (this.isEmpty(this.state.question1)) {
            this.setState({ q1Select: false,errorText1:"Please Select your Question" });
            errMsg = "error";
        }
        else{
            this.setState({ q1Select: true, });
        }
        if (this.isEmpty(this.state.question2)) {
            this.setState({ q2Select: false,errorText2:"Please Select your Question" });
            errMsg = "error";
        }
        else{
            this.setState({ q2Select: true,});
        }
        if (this.isEmpty(this.state.question3)) {
            this.setState({ q3Select: false,errorText3:"Please Select your Question" });
            errMsg = "error";
        }
        else{
            this.setState({ q3Select: true, });
        }
        
        if (!this.isEmpty(this.state.question1)&&!this.isEmpty(this.state.question2)&&this.state.question1 === this.state.question2) {
            errMsg = "error";
            this.setState({ q1Val: true, q2Val: true, q3Val: false,errorText1:gblStrings.userManagement.dropDownError,errorText2:gblStrings.userManagement.dropDownError });
        }
        else if (!this.isEmpty(this.state.question2)&&!this.isEmpty(this.state.question3)&&this.state.question2 === this.state.question3) {
            errMsg = "error";
            this.setState({ q2Val: true, q3Val: true, q1Val: false,errorText2:gblStrings.userManagement.dropDownError,errorText3:gblStrings.userManagement.dropDownError });
        }

        else if (!this.isEmpty(this.state.question3)&&!this.isEmpty(this.state.question1)&&this.state.question3 === this.state.question1) {
            errMsg = "error";
            this.setState({ q3Val: true, q1Val: true, q2Val: false,errorText3:gblStrings.userManagement.dropDownError,errorText1:gblStrings.userManagement.dropDownError });
        }
        else {
            this.setState({ q3Val: false, q1Val: false, q2Val: false});
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

        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.security_ques && this.props.masterLookupStateData.security_ques.value) {
            quesData = this.props.masterLookupStateData.security_ques.value;
        }
        // console.log("props", this.props.masterLookupStateData);
        // console.log("security questions render",this.props.saveQuestionsData);
        
        return (

            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
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
                                showDropDown={this.state.question1Dropdown}
                                dropDownValue={this.state.question1}
                                selectedDropDownValue={this.selectedDropDownValue}
                                errorFlag={!this.state.q1Select||this.state.q1Val}
                                errorText={this.state.errorText1}
                                dropDownPostition={styles.dropDown1}
                            />
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox}
                                value={this.state.q1Ans}
                                onChangeText={this.onChangeText("q1Ans", "q1Ansval")}
                                errorFlag={!this.state.q1Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            /> 
                            <GDropDownComponent
                                dropDownLayout={styles.dropdownTextInput}
                                dropDownName={gblStrings.userManagement.ques2}
                                data={quesData}
                                placeholder={gblStrings.common.select}
                                itemToDisplay="value"
                                changeState={this.selectTheQuestion2}
                                showDropDown={this.state.question2Dropdown}
                                dropDownValue={this.state.question2}
                                selectedDropDownValue={this.selectedDropDownValue2}
                                errorFlag={!this.state.q2Select||this.state.q2Val}
                                errorText={this.state.errorText2}
                                dropDownPostition={styles.dropDown2}
                            />
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox}
                                value={this.state.q2Ans}
                                onChangeText={this.onChangeText("q2Ans", "q2Ansval")}
                                errorFlag={!this.state.q2Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            />
                                <GDropDownComponent
                                dropDownLayout={styles.dropdownTextInput}
                                dropDownName={gblStrings.userManagement.ques3}
                                data={quesData}
                                placeholder={gblStrings.common.select}
                                itemToDisplay="value"
                                changeState={this.selectTheQuestion3}
                                showDropDown={this.state.question3Dropdown}
                                dropDownValue={this.state.question3}
                                selectedDropDownValue={this.selectedDropDownValue3}
                                errorFlag={!this.state.q3Select||this.state.q3Val}
                                errorText={this.state.errorText3}
                                dropDownPostition={styles.dropDown3}
                                />                                 
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox}
                                value={this.state.q3Ans}
                                onChangeText={this.onChangeText("q3Ans", "q3Ansval")}
                                errorFlag={!this.state.q3Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.confirmPEmail}
                            </Text>
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox}
                                placeholder={gblStrings.accManagement.emailformat}
                                keyboardType="email-address"
                                value={this.state.primaryEmail}
                                maxLength={gblStrings.maxLength.emailID}
                                onChangeText={this.onChangeText("primaryEmail")}
                                onBlur={this.validatePrimaryEmail}
                                errorFlag={!this.state.validationPrimaryEmail}
                                errorText={gblStrings.userManagement.emailError}
                            />
                            <TouchableOpacity style={styles.additionaemailView} onPress={this.additionalEmail}>
                                <Text style={styles.underlineText}>{gblStrings.userManagement.addAdditionalEmail}</Text>
                            </TouchableOpacity>
                            {(this.state.additionalEmailFlag) ?
                                (
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox}
                                        placeholder={gblStrings.accManagement.emailformat}
                                        keyboardType="email-address"
                                        maxLength={gblStrings.maxLength.emailID}
                                        onChangeText={this.onChangeText("additionalEmail")}
                                        onBlur={this.validateAdditionalEmail}
                                        value={this.state.additionalEmail}
                                    />
                                ) : null

                            }
                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.documentDeliveryPreference}
                            </Text>

                            {securityQuestions.map((item, index) =>
                                index === this.state.radioButtonIndex ?
                                    <GRadioButtonComponent
                                        onPress={this.radioButtonClicked(index)}
                                        selected
                                        questions={item.question}
                                    />
                                    :
                                    <GRadioButtonComponent
                                        onPress={this.radioButtonClicked(index)}
                                        selected={false}
                                        questions={item.question}
                                    />
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
    // onSelectedItem: PropTypes.func,
    value: PropTypes.instanceOf(Object),
    saveQuestions: PropTypes.func,
    saveQuestionsData:PropTypes.instanceOf(Object),
    getPersonalCompositeData: PropTypes.func
};

ModifySecQuesComponent.defaultProps = {
    navigation: {},
    initialState: {},
    masterLookupStateData: {},
    // onSelectedItem: ()=>{},
    value: {},
    saveQuestions: ()=>{},
    saveQuestionsData:{},
    getPersonalCompositeData:()=>{}
};
export default ModifySecQuesComponent;