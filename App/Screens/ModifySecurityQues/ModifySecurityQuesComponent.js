/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GInputComponent, GRadioButtonComponent,GIcon } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { CustomDropDown } from '../../AppComponents';
import PropTypes from 'prop-types';


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
        id:'4',
        title: 'What is your College Name'
}];

const securityQuestions = [
    { index1 : 0, question:"Deliver All my documents online at vcm.com"},
    { index1 : 1, question:"Do not change my document delivery Prefrence"},
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
            question1: "",
            question1Dropdown: false,
            question2: "",
            question2Dropdown: false,
            question3: "",
            question3Dropdown: false,
            q1Ans: "",
            q1Ansval:true,
            q2Ans: "",
            q2Ansval:true,
            q3Ans: "",
            q3Ansval:true,
            primaryEmail: "",
            additionalEmail: "",
            validationPrimaryEmail: true,
            validationAdditionalEmail: true,
            additionalEmailFlag: false,
            radioButton: false,
            radioButtonIndex: 0,
            firstRender: true,
            q1Val:false,
            q2Val:false,
            q3Val:false
        };

    }


    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        if(this.props && this.props.initialState && this.props.initialState.email){
            this.setState({
                primaryEmail : this.props.initialState.email
            });
            
        }
        console.log("------>emailllllllll",this.props);
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

    onChangeText = (stateKey,val) => text => {
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
    renderDropDown = (dropDownName, dropDownCompState = false, data, width = '100%') => {
        console.log("renderDropDown::: " + dropDownName);
        let keyName = "title";
        if (dropDownCompState) {
            return (
                <View style={{ height: 100, borderWidth: 1, width: width, borderColor: "#DEDEDF", backgroundColor: 'white' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => 
                        <DropDownListItem
                        value={item[keyName]}
                        onSelectedItem={() => this.selectedDropDownValue(dropDownName, item[keyName])}
                        />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            );

        }
    }
    selectedDropDownValue = (dropDownName, value) => {
        switch (dropDownName) {

            case "question1Dropdown":
                this.setState({
                    question1: value,
                    question1Dropdown: false
                });
                break;
            case "question2Dropdown":
                this.setState({
                    question2: value,
                    question2Dropdown: false

                });
                break;
            case "question3Dropdown":
                this.setState({
                    question3: value,
                    question3Dropdown: false

                });
                break;

            default:
                break;
        }

    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    additionalEmail = () => 
    {
         this.setState({ additionalEmailFlag: true });
    }

    validateFields = () => {
        
        var errMsg = "";
        var isValidationSuccess = false;
        
        if (this.isEmpty(this.state.q1Ans)) {
            this.setState({q1Ansval:false});
            errMsg="error";
        }
        else
        {
            this.setState({q1Ansval:true}); 
        }

         if (this.isEmpty(this.state.q2Ans)) {
            this.setState({q2Ansval:false});
            errMsg="error";
        }
        else
        {
            this.setState({q2Ansval:true}); 
        }

         if (this.isEmpty(this.state.q3Ans)) {
            this.setState({q3Ansval:false});
            errMsg="error";
        }
        else
        {
            this.setState({q3Ansval:true}); 
        }

         if(this.isEmpty(this.state.primaryEmail))
        {
            errMsg="error";
        }

         if(!this.state.validationPrimaryEmail)
        {
            errMsg = "error";
        }

        if(this.state.question1 == this.state.question2)
        {
            errMsg = "error";
            this.setState({q1Val:true,q2Val:true,q3Val:false});
        }
        else if(this.state.question2 == this.state.question3)
        {
            errMsg = "error";
            this.setState({q2Val:true,q3Val:true,q1Val:false});
        }
        
        else if(this.state.question3 == this.state.question1)
        {
            errMsg = "error";
            this.setState({q3Val:true,q1Val:true,q2Val:false});
        } 
        else
        {
            this.setState({q3Val:false,q1Val:false,q2Val:false});
        }
       
        if(errMsg!="error")
         {
            isValidationSuccess = true;
            if (isValidationSuccess) {
                console.log("-----> Data",this.state.question1,this.state.q1Ans,this.state.question2,this.state.q2Ans,
                    this.state.question3,this.state.q3Ans,this.state.primaryEmail,this.state.additionalEmail);
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
                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.ques1}
                            </Text>
                            <CustomDropDown
                                onPress={this.onPressDropDown("question1", "question1Dropdown")}
                                value={this.state.question1}
                                propInputStyle={this.state.q1Val?styles.customListTxtBoxError:styles.customListTxtBox}
                                placeholder={gblStrings.common.select}
                            />
                            { this.renderDropDown('question1Dropdown', this.state.question1Dropdown, dummyData)}
                            {
                                (this.state.q1Val?(<Text style={styles.errorMsg}>{gblStrings.userManagement.dropDownError}</Text>):null)
                            }
                            <GInputComponent
                                propInputStyle={!this.state.q1Ansval ? styles.userIDTextBoxError : styles.userIDTextBox} 
                                value={this.state.q1Ans}
                                onChangeText={this.onChangeText("q1Ans","q1Ansval")}
                                //propInputStyle={{ marginTop: 20, width: "100%" }}
                                //validateError={this.state.validateEmail}
                            />
                            {
                                (!this.state.q1Ansval?(<Text style={styles.errorMsg}>{gblStrings.userManagement.inputError}</Text>):null)
                            }
                            <Text style={styles.lblTxt}>
                               {gblStrings.userManagement.ques2}
                            </Text>
                            <CustomDropDown
                                onPress={this.onPressDropDown("question2", "question2Dropdown")}
                                value={this.state.question2}
                                propInputStyle={this.state.q2Val?styles.customListTxtBoxError:styles.customListTxtBox}
                                placeholder={gblStrings.common.select}
                            />
                            {this.renderDropDown('question2Dropdown', this.state.question2Dropdown, dummyData)}
                            {
                                (this.state.q2Val?(<Text style={styles.errorMsg}>{gblStrings.userManagement.dropDownError}</Text>):null)
                            }
                            <GInputComponent
                                propInputStyle={!this.state.q2Ansval ? styles.userIDTextBoxError : styles.userIDTextBox} 
                                //propInputStyle={{ marginTop: 20, width: "100%" }}
                                value={this.state.q2Ans}
                                onChangeText={this.onChangeText("q2Ans","q2Ansval")}
                                //validateError={this.state.validateEmail}
                            />
                            {
                                (!this.state.q2Ansval?(<Text style={styles.errorMsg}>{gblStrings.userManagement.inputError}</Text>):null)
                            } 

                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.ques3}
                            </Text>
                            <CustomDropDown
                                onPress={this.onPressDropDown("question2", "question3Dropdown")}
                                value={this.state.question3}
                                propInputStyle={this.state.q3Val?styles.customListTxtBoxError:styles.customListTxtBox}
                                placeholder={gblStrings.common.select}
                            />
                            {this.renderDropDown('question3Dropdown', this.state.question3Dropdown, dummyData)}
                            {
                                (this.state.q3Val?(<Text style={styles.errorMsg}>{gblStrings.userManagement.dropDownError}</Text>):null)
                            }
                            <GInputComponent
                                propInputStyle={!this.state.q3Ansval ? styles.userIDTextBoxError : styles.userIDTextBox} 
                                //propInputStyle={{ marginTop: 20, width: "100%" }}
                                value={this.state.q3Ans}
                                onChangeText={this.onChangeText("q3Ans","q3Ansval")}
                            //validateError={this.state.validateEmail}
                            />
                            {
                                (!this.state.q3Ansval?(<Text style={styles.errorMsg}>{gblStrings.userManagement.inputError}</Text>):null)
                            }
                            <Text style={styles.lblTxt}>
                                {gblStrings.userManagement.confirmPEmail}
                            </Text>
                            <GInputComponent
                                propInputStyle={!this.state.validationPrimaryEmail ? styles.userIDTextBoxError : styles.userIDTextBox}
                                //placeholder={gblStrings.accManagement.emailformat}
                                keyboardType="email-address"
                                value={this.state.primaryEmail}
                                maxLength={gblStrings.maxLength.emailID}
                                onChangeText={this.onChangeText("primaryEmail","")}
                                onBlur={this.validatePrimaryEmail}
                            />
                            {
                                (!this.state.validationPrimaryEmail?(<Text style={styles.errorMsg}>{gblStrings.userManagement.emailError}</Text>):null)
                            }
                            <TouchableOpacity style={{ alignSelf:'flex-end' }} onPress={this.additionalEmail}>
                                <Text style={{ textDecorationLine: 'underline',color:"#0000FF" }}>{gblStrings.userManagement.addAdditionalEmail}</Text>
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
                            
                    {securityQuestions.map((item,index) => 
                    index == this.state.radioButtonIndex ? 
                    <GRadioButtonComponent 
                    onPress={()=>this.radioButtonClicked(index)}
                    selected
                    questions = {item.question}
                    />
                    :
                    <GRadioButtonComponent 
                    onPress={()=>this.radioButtonClicked(index)}
                    selected = {false}
                    questions = {item.question}
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
    navigation: PropTypes.instanceOf(Object)
};

ModifySecQuesComponent.defaultProps = {
    onSelectedItem: PropTypes.instanceOf(Object),
    value: PropTypes.instanceOf(Object)
};
export default ModifySecQuesComponent;