/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GInputComponent, GRadioButtonComponent, GIcon, GDropDownComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { CustomDropDown } from '../../AppComponents';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const dummyData = [
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
const DropDownListItem = (props) => {
    console.log("DropDownListItem:: ");
    return (
        <TouchableOpacity style={{ height: 33 }} onPress={props.onSelectedItem}>
            <Text> {props.value} </Text>
        </TouchableOpacity>
    );
};
class ModifySecQuesComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
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
            q2Select:true,
            q3Select:true,
            errorText1:"",
            errorText2:"",
            errorText3:"",

        };

    }


    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.email) {
            this.setState({
                primaryEmail: this.props.initialState.email
            });

        }
        console.log("------>emailllllllll", this.props);
    }
    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    goBack = () => {
        this.props.navigation.goBack();
    }



    radioButtonClicked = (index) => {
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });
        }
        else {
            this.setState({
                radioButton: false
            });
        }
    }

    onPressDropDown = (stateKey, keyName) => () => this.setState(prevState => ({
        ...prevState[stateKey],
        [keyName]: !this.state.keyName

    }));

    onChangeText = (stateKey, val) => text => {
        console.log("onChangeText:::>");
        this.setState({
            [stateKey]: text,
            [val]: (!this.isEmpty(text)),
        });
    }
    validatePrimaryEmail = () => {
        let validate = emailRegex.test(this.state.primaryEmail);
        this.setState({
            validationPrimaryEmail: validate
        });
    }
    validateAdditionalEmail = () => {
        let validate = emailRegex.test(this.state.additionalEmail);
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
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    additionalEmail = () => {
        this.setState({ additionalEmailFlag: true });
    }

    validateFields = () => {

        var errMsg = "";
        var isValidationSuccess = false;

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
        
        if (!this.isEmpty(this.state.question1)&&!this.isEmpty(this.state.question2)&&this.state.question1 == this.state.question2) {
            errMsg = "error";
            this.setState({ q1Val: true, q2Val: true, q3Val: false,errorText1:gblStrings.userManagement.dropDownError,errorText2:gblStrings.userManagement.dropDownError });
        }
        else if (!this.isEmpty(this.state.question2)&&!this.isEmpty(this.state.question3)&&this.state.question2 == this.state.question3) {
            errMsg = "error";
            this.setState({ q2Val: true, q3Val: true, q1Val: false,errorText2:gblStrings.userManagement.dropDownError,errorText3:gblStrings.userManagement.dropDownError });
        }

        else if (!this.isEmpty(this.state.question3)&&!this.isEmpty(this.state.question1)&&this.state.question3 == this.state.question1) {
            errMsg = "error";
            this.setState({ q3Val: true, q1Val: true, q2Val: false,errorText3:gblStrings.userManagement.dropDownError,errorText1:gblStrings.userManagement.dropDownError });
        }
        else {
            this.setState({ q3Val: false, q1Val: false, q2Val: false});
        }

        if (errMsg != "error") {
            isValidationSuccess = true;
            if (isValidationSuccess) {
                console.log("-----> Data", this.state.question1, this.state.q1Ans, this.state.question2, this.state.q2Ans,
                    this.state.question3, this.state.q3Ans, this.state.primaryEmail, this.state.additionalEmail);
                //this.props.navigation.navigate({ routeName: 'openAccPageFive', key: 'openAccPageFive' });
            }
        }



    }

    
    render() {

        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <TouchableOpacity >
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />

                    </TouchableOpacity>
                    <View style={styles.signInView} >
                        <Text style={styles.signIntext}>
                            {gblStrings.userManagement.modifySecurityHeading}
                        </Text>
                        <Text style={styles.lblLine} />
                        <ScrollView style={{ marginTop: 25 }}>
                            <View style={{ width: "100%" }}>
                                <Text style={styles.lblTxt} >
                                    {gblStrings.userManagement.modifySecuritySelect}
                                </Text>
                            </View>
                            {/*<Text style={styles.lblTxt}>
                                {gblStrings.userManagement.ques1}
                            </Text>*/}
                            
                            <GDropDownComponent
                                textInputStyle={styles.dropdownTextInput}
                                dropDownName={gblStrings.userManagement.ques1}
                                data={dummyData}
                                changeState={this.selectTheQuestion}
                                showDropDown={this.state.question1Dropdown}
                                dropDownValue={this.state.question1}
                                selectedDropDownValue={this.selectedDropDownValue}
                                errorFlag={!this.state.q1Select||this.state.q1Val}
                                errorText={this.state.errorText1}
                                dropDownPostition={{ position: 'absolute', top: scaledHeight(155),width:"100%",marginLeft:"0%",marginRight:"0%" }}
                            />
                            <GInputComponent
                                //propInputStyle={!this.state.q1Ansval ? styles.userIDTextBoxError : styles.userIDTextBox} 
                                propInputStyle={styles.userIDTextBox}
                                value={this.state.q1Ans}
                                onChangeText={this.onChangeText("q1Ans", "q1Ansval")}
                                errorFlag={!this.state.q1Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            />
                            {/*{
                                (!this.state.q1Ansval?(<Text style={styles.errorMsg}>{gblStrings.userManagement.inputError}</Text>):null)
                            }*/}
                           {/* <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.ques2}
                        </Text>*/}
                            
                            <GDropDownComponent
                                textInputStyle={styles.dropdownTextInput}
                                dropDownName={gblStrings.userManagement.ques2}
                                data={dummyData}
                                changeState={this.selectTheQuestion2}
                                showDropDown={this.state.question2Dropdown}
                                dropDownValue={this.state.question2}
                                selectedDropDownValue={this.selectedDropDownValue2}
                                errorFlag={!this.state.q2Select||this.state.q2Val}
                                errorText={this.state.errorText2}
                                dropDownPostition={{ position: 'absolute', top: scaledHeight(330),width:"100%",marginLeft:"0%",marginRight:"0%" }}
                            />
                            <GInputComponent
                                //propInputStyle={!this.state.q2Ansval ? styles.userIDTextBoxError : styles.userIDTextBox} 
                                propInputStyle={styles.userIDTextBox}
                                //propInputStyle={{ marginTop: 20, width: "100%" }}
                                value={this.state.q2Ans}
                                onChangeText={this.onChangeText("q2Ans", "q2Ansval")}
                                errorFlag={!this.state.q2Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            //validateError={this.state.validateEmail}
                            />
                            {/*{
                                (!this.state.q2Ansval?(<Text style={styles.errorMsg}>{gblStrings.userManagement.inputError}</Text>):null)
                            } */}
                                <GDropDownComponent
                            //propInputStyle={{width:"100%"}}
                                textInputStyle={styles.dropdownTextInput}
                                dropDownName={gblStrings.userManagement.ques3}
                                data={dummyData}
                                changeState={this.selectTheQuestion3}
                                showDropDown={this.state.question3Dropdown}
                                dropDownValue={this.state.question3}
                                selectedDropDownValue={this.selectedDropDownValue3}
                                errorFlag={!this.state.q3Select||this.state.q3Val}
                                errorText={this.state.errorText3}
                                dropDownPostition={{ position: 'absolute', top: scaledHeight(500),width:"100%",marginLeft:"0%",marginRight:"0%" }}
                            />          
                            {/*<Text style={styles.lblTxt}>
                                {gblStrings.userManagement.ques3}
                        </Text>*/}
                           
                            <GInputComponent
                                propInputStyle={!this.state.q3Ansval ? styles.userIDTextBoxError : styles.userIDTextBox}
                                propInputStyle={styles.userIDTextBox}
                                //propInputStyle={{ marginTop: 20, width: "100%" }}
                                value={this.state.q3Ans}
                                onChangeText={this.onChangeText("q3Ans", "q3Ansval")}
                                errorFlag={!this.state.q3Ansval}
                                errorText={gblStrings.userManagement.inputError}
                            //validateError={this.state.validateEmail}
                            />
                            {/*{
                                (!this.state.q3Ansval?(<Text style={styles.errorMsg}>{gblStrings.userManagement.inputError}</Text>):null)
                            }*/}
                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.confirmPEmail}
                            </Text>
                            <GInputComponent
                                //propInputStyle={!this.state.validationPrimaryEmail ? styles.userIDTextBoxError : styles.userIDTextBox}
                                propInputStyle={styles.userIDTextBox}
                                placeholder={gblStrings.accManagement.emailformat}
                                keyboardType="email-address"
                                value={this.state.primaryEmail}
                                maxLength={gblStrings.maxLength.emailID}
                                onChangeText={this.onChangeText("primaryEmail", "")}
                                onBlur={this.validatePrimaryEmail}
                                errorFlag={!this.state.validationPrimaryEmail}
                                errorText={gblStrings.userManagement.emailError}
                            />
                            {/*{
                                (!this.state.validationPrimaryEmail?(<Text style={styles.errorMsg}>{gblStrings.userManagement.emailError}</Text>):null)
                            }*/}
                            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={this.additionalEmail}>
                                <Text style={{ textDecorationLine: 'underline', color: "#0000FF" }}>{gblStrings.userManagement.addAdditionalEmail}</Text>
                            </TouchableOpacity>
                            {(this.state.additionalEmailFlag) ?
                                (
                                    <GInputComponent
                                        propInputStyle={!this.state.validationAdditionalEmail ? styles.userIDTextBoxError : styles.userIDTextBox}
                                        placeholder={gblStrings.accManagement.emailformat}
                                        keyboardType="email-address"
                                        maxLength={gblStrings.maxLength.emailID}
                                        onChangeText={this.onChangeText("additionalEmail")}
                                        onBlur={this.validateAdditionalEmail}
                                    />
                                ) : null

                            }
                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.documentDeliveryPreference}
                            </Text>

                            {securityQuestions.map((item, index) =>
                                index == this.state.radioButtonIndex ?
                                    <GRadioButtonComponent
                                        onPress={() => this.radioButtonClicked(index)}
                                        selected
                                        questions={item.question}
                                    />
                                    :
                                    <GRadioButtonComponent
                                        onPress={() => this.radioButtonClicked(index)}
                                        selected={false}
                                        questions={item.question}
                                    />
                            )}
                            <GButtonComponent
                                buttonStyle={styles.cancelButton}
                                buttonText={gblStrings.common.back}
                                textStyle={styles.cancelButtonText}
                            //onPress={()=>this.props.navigation.navigate('registerPassword')}
                            />
                            <GButtonComponent
                                buttonStyle={styles.cancelButton}
                                buttonText={gblStrings.common.cancel}
                                textStyle={styles.cancelButtonText}
                            //onPress={()=>this.props.navigation.navigate('registerPassword')}
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
    initialState: PropTypes.instanceOf(Object)
};

ModifySecQuesComponent.defaultProps = {
    onSelectedItem: PropTypes.instanceOf(Object),
    value: PropTypes.instanceOf(Object)
};
export default ModifySecQuesComponent;