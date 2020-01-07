import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { GButtonComponent, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio, CustomDropDown } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import { scaledHeight } from '../../Utils/Resolution';



const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
];

const relationShipData = [
    {
        "key": '1',
        "value": 'Aunt Uncle ',
    },
    {
        "key": '2',
        "value": 'Brother/Sister',
    },
    {
        "key": '3',
        "value": 'Brother/Sister In Law',
    },
    {
        "key": '4',
        "value": 'Child',
    },
    {
        "key": '5',
        "value": 'Cohabitant',
    },
    {
        "key": '6',
        "value": 'Cohabitant Child',
    },
    {
        "key": '7',
        "value": 'Cousin ',
    },
    {
        "key": '8',
        "value": 'Father/Mother In Law',
    },
    {
        "key": '9',
        "value": 'Fiance',
    },
    {
        "key": '10',
        "value": 'Spouse',
    },
    {
        "key": '11',
        "value": 'Parent',
    },
    {
        "key": '12',
        "value": 'Grandparent',
    },
    {
        "key": '13',
        "value": 'Grandchild',
    },
    {
        "key": '14',
        "value": 'Son/Daughter In Law ',
    },
    {
        "key": '15',
        "value": 'Step Child',
    },
    {
        "key": '16',
        "value": 'Step Mother/Father',
    },
    {
        "key": '17',
        "value": 'Step Sister/Brother',
    },
    {
        "key": '18',
        "value": 'Legal Guardian',
    },



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
        console.log("#TODO : onClickHeader");
    }
    goBack = () => {
        this.props.navigation.goBack();
    }
    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }
    onClickNext = () => {
        this.validateFields();
    }
    onClickSave = () => {
        this.validateFields();
    }
    onClickDownloadPDF = () => {
        alert("#TODO : Download");
    }
    onSelected = (item) => {
        console.log("item: " + item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
        //  alert("You selected :: " + item.name)
    }

    selectedDropDownValue = (dropDownName, value) =>()=> {
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
        console.log("onSubmitEditing:::>"+text);
        input.focus();
    }

    onChangeText = (keyName) => text => {
        console.log("onChangeText:::>");
        this.setState({
            [keyName]: text
        });

    }
    onPressDropDown = (keyName) => () => this.setState({
            [keyName]: !this.state[keyName]
    });

    onPressRadio = ( keyName, text) => () => this.setState ({
        [keyName]: text
    });
    setInputRef = (inputComp)=> (ref) => {
        this[inputComp]= ref;
    }
    setInputRef = (inputComp)=> (ref) => {
        this[inputComp]= ref;
    }

    generateKeyExtractor = (item) => item.key ;
    renderDropDownListItem = (keyName, dropDownName) => ({ item }) =>
        (<TouchableOpacity
            style={{ height: 33 }}
            onPress={this.selectedDropDownValue(dropDownName, item[keyName])}
         >
            <Text> {item[keyName]} </Text>
         </TouchableOpacity>
        );
    renderDropDown = (dropDownName, data, width = '100%') => {
        console.log("renderDropDown::: " + dropDownName);
        var dropDownCompState = false;
        let keyName = "value";
        switch (dropDownName) {
            case "beneficiaryDropDown":
                dropDownCompState = this.state.beneficiaryDropDown;
                break;
            case "relationshipDropDown":
                dropDownCompState = this.state.relationshipDropDown;
                break;

            default:
                break;

        }
        if (dropDownCompState) {
            return (
                <View style={{ height: 100, width: width, borderWidth: 1, borderColor: "#DEDEDF", backgroundColor: 'white' }}>
                    <FlatList
                        data={data}
                        renderItem={this.renderDropDownListItem(keyName,dropDownName)}
                        keyExtractor={this.generateKeyExtractor}
                    />
                </View>
            );

        }
    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }
    validateFields = () => {
        console.log("validateFields::: ");

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



        if (this.isEmpty(this.state.beneficiary)) {
            errMsg = gblStrings.accManagement.confirmBeneficiaryforThePlanMsg;
        } else if (this.isEmpty(this.state.accountOwnerSelected)) {
            errMsg = gblStrings.accManagement.emptySuccessOwnerMsg;
        } else if (this.isEmpty(this.state.firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
        } else if (this.isEmpty(this.state.lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
        } else if (this.isEmpty(this.state.dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
        } else if (this.isEmpty(this.state.relationship)) {
            errMsg = gblStrings.accManagement.emptyRelationShipMsg;
            input = 'relationship';
        } else {
            isValidationSuccess = true;
        }



        if (isValidationSuccess) {
            this.props.navigation.push('collegePlanPartOneTwo', { pageNo: 6 });

        } else {
            this.setState({
                [input + 'Validation']: false
            });
           //  var temp = input !== "" ? this[input].focus() : ""
            alert(errMsg);

        }

    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        let currentPage = 5;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} onPress={this.onClickHeader} />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + " " + gblStrings.accManagement.beneficiaryInfo} />


                    { /*-----------Plan Beneficiary -------------------*/}

                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.planBeneficiary}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.accManagement.chooseThePersonWhoseEducation}
                        </Text>


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.whoWillBeTheBeneficiary}
                        </Text>

                        <CustomDropDown
                            inputref ={this.setInputRef("beneficiary")}
                            onPress={this.onPressDropDown("beneficiaryDropDown")}
                            value={this.state.beneficiary}
                            propInputStyle={styles.customTxtBox}
                            placeholder={"Client"}

                        />
                        {this.renderDropDown('beneficiaryDropDown', dummyData)}


                        <GButtonComponent
                            buttonStyle={styles.addBeneficiaryBtn}
                            buttonText="+ Add a Beneficiary"
                            textStyle={styles.addBeneficiaryBtnTxt}
                        />

                    </View>
                    { /*-----------Successor Account Owner Information -------------------*/}

                    <View style={[styles.sectionGrp]}>
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
                                componentStyle={{width:"30%", marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"Yes"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.accountOwnerSelected !== "" && this.state.accountOwnerSelected == true ) ? true : false}
                                onPress={this.onPressRadio("accountOwnerSelected",true)}  

                            />
                            <CustomRadio

                                size={30}
                                componentStyle={{marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"No"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.accountOwnerSelected !== "" && this.state.accountOwnerSelected != true ) ? true : false}
                                onPress={this.onPressRadio("accountOwnerSelected",false)}  
                            />
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.firstName}
                        </Text>
                       

                        <GInputComponent
                            inputref ={this.setInputRef("firstName")}
                            propInputStyle={this.state.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.firstName}
                          /*  onChangeText={(text) => {
                                this.setState({ firstName: text });
                            }}
                            */
                            onChangeText = {this.onChangeText("firstName")}
                           //  onSubmitEditing={() => this.middleInitial.focus()}
                            onSubmitEditing={this.onSubmitEditing(this.middleInitial)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.middleInitial}
                        </Text>
                        <GInputComponent
                            inputref ={this.setInputRef("middleInitial")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.middleInitial}
                            onChangeText = {this.onChangeText("middleInitial")}
                            onSubmitEditing={this.onSubmitEditing(this.lastName)}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.lastName}
                        </Text>
                        <GInputComponent
                            inputref ={this.setInputRef("lastName")}
                            propInputStyle={this.state.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.dob}
                            onChangeText = {this.onChangeText("lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.dob)}
                        />



                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.dob}
                        </Text>
                        <GInputComponent
                          
                            inputref ={this.setInputRef("dob")}
                            propInputStyle={this.state.dobValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.dob}
                            onChangeText = {this.onChangeText("dob")}
                            onSubmitEditing={this.onSubmitEditing(this.relationship)}
                           
                        />
                        <Text style={styles.hintLabelTxt}>
                            {"MM/DD/YYYY"}
                        </Text>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.relationship}
                        </Text>
                        <CustomDropDown
                            inputref ={this.setInputRef("relationship")}
                            onPress={this.onPressDropDown("relationshipDropDown")}
                            value={this.state.relationship}
                            propInputStyle={this.state.relationshipValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={"Select Relationship"}

                        />
                        {this.renderDropDown('relationshipDropDown', relationShipData)}


                    </View>

                    { /*----------- Buttons Group -------------------*/}

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


CollegePlanBeneficiaryComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
  };
export default CollegePlanBeneficiaryComponent;