import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import Slider from 'react-native-slider';
import styles from './styles';
import {
  GHeaderComponent,
  GInputComponent,
  GIcon,
  GFooterComponent,
  GButtonComponent,
  GDropDownComponent,
  GDateComponent
} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { emailRegex, ssnRegex, nameRegex } from '../../Constants/RegexConstants';


let contingentCount = 0;
let primaryCount = 0;

const beneficiaryTypeData = [
  { "key": "key1", "value": "Individuals" },
  { "key": "key2", "value": "Other-Individual" }
];

let relationData = [
  { "key": "1", "value": "Aunt Uncle" },
  { "key": "2", "value": "Brother/Sister" }
];

let suffixData = [
  { "key": "ii", "value": "II" },
  { "key": "iii", "value": "III" }
];

// let supportedAccountData = [
//   { "key": "key1", "value": "Retirement (IRA)" },
//   { "key": "key2", "value": "Traditional" },
//   { "key": "key3", "value": "Roth" },
//   { "key": "key4", "value": "Retirement (for self-employed or small business)" },
//   { "key": "key5", "value": "SEP IRA" },
//   { "key": "key6", "value": "Simple IRA" },
//   { "key": "key7", "value": "Retirement (Other)" },
//   { "key": "key8", "value": "403b" }
// ];

let supportedAccountData = [
  //{ "key": "key1", "value": "Retirement (IRA)" },
  { "key": "key2", "value": "Traditional" },
  { "key": "key3", "value": "Roth" },
  //{ "key": "key4", "value": "Retirement (for self-employed or small business)" },
  //{ "key": "key5", "value": "SEP IRA" },
  //{ "key": "key6", "value": "Simple IRA" },
  //{ "key": "key7", "value": "Retirement (Other)" },
  //{ "key": "key8", "value": "403b" }
];

class AddNewBeneficiaryComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beneData: {
        "key": "",
        "account_Type": "",
        "account_Name": "",
        "account_Number": "",
        "accumulated_Value": "",
        "distribution_Per": "",
        "transfer_on_Death_Bene": [],
        "primary_Bene": [],
        "contingent_Bene": []
      },
      instructionIcon: "+",
      isInstructionCollapse: true,
      editPrimaryIcon: "-",
      addPrimaryText: '',
      addContingentText: '',
      todayDate: '',
      prevDate: '',
      totalDistribution: 0,
      totalPrimary: 0,
      totalContingent: 0,
      newContingentBene: [],
      isAddContingentBene: false,
      newPrimaryBene: [],
      isAddPrimaryBene: false,
      isDistHigh: false,
      supportedAccountFlag: false,
      supportedAccountMsg: ""
    };
  }

  componentDidMount() {
    this.getDropDownData();
    this.getTodayDateFunc();
    this.setInitialState();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.suffix && this.props.masterLookupStateData.suffix.value) {
        suffixData = this.props.masterLookupStateData.suffix.value;
      }
      if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.relationship && this.props.masterLookupStateData.relationship.value) {
        relationData = this.props.masterLookupStateData.relationship.value;
      }
    }
  }

  /* -------------------- Initial Events -------------------------- */

  getTodayDateFunc = () => {
    const date = new Date().getDate();
    const prevDate = date - 1;
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const today = `${month} - ${date} - ${year}`;
    const prev = `${month} - ${prevDate} - ${year}`;
    this.setState({ todayDate: today });
    this.setState({ prevDate: prev });
  }

  getDropDownData = () => {
    const payload = [];
    const compositePayloadData = [
      "suffix",
      "relationship"
    ];

    for (let i = 0; i < compositePayloadData.length; i += 1) {
      const tempKey = compositePayloadData[i];
      if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempKey]) {
        payload.push(tempKey);
      }
    }

    this.props.getPersonalCompositeData(payload);
  }

  setInitialState = () => {
    this.setState({ addContingentText: 'Add Contingent Beneficiary', addPrimaryText: 'Add Primary Beneficiary' });
    this.addNewPrimaryBene();
  }

  /* -------------------- Button Events -------------------------- */
  onClickCancel = () => {
    this.props.navigation.navigate("manageBeneficiaries");
  }

  distributionCheck = () => {
    let totalPri = 0;
    let totalCon = 0;
    let total = 0;
    if (this.state.newPrimaryBene) {
      totalPri = this.state.newPrimaryBene.reduce((prev, cur) => {
        let dist = parseInt(cur.distribution_Per);
        if (this.isEmpty(cur.distribution_Per)) {
          dist = 0;
        }
        return prev + dist;
      }, 0);
    }
    if (this.state.newContingentBene) {
      totalCon = this.state.newContingentBene.reduce((prev, cur) => {
        let dist = parseInt(cur.distribution_Per);
        if (this.isEmpty(cur.distribution_Per)) {
          dist = 0;
        }
        return prev + dist;
      }, 0);
    }
    total = totalPri + totalCon;
    this.setState({ totalPrimary: totalPri, totalContingent: totalCon, totalDistribution: total });
    if (total !== 100) {
      this.setState({ isDistHigh: true });
    } else {
      this.setState({ isDistHigh: false });
      this.onClickSave();
    }
  }

  getPayloadData = () => {
    let completeData = {};
    let newPrimaryBeneData = [];
    let newConBeneData = [];

    if (this.state.newContingentBene && this.state.newContingentBene.length > 0) {
      const tempArr = [];
      const len = this.state.newContingentBene.length;
      for (let i = 0; i < len; i += 1) {
        const data = this.state.newContingentBene[i];
        const tempData = {};

        tempData.key = data.key;
        tempData.fname = data.fname;
        tempData.mname = data.mname;
        tempData.lname = data.lname;
        tempData.contract_Number = data.contract_Number;
        tempData.relationship_To_Insured = data.relationship_To_Insured;
        tempData.accumulated_Value = data.accumulated_Value;
        tempData.distribution_Per = data.distribution_Per;
        tempData.last_modified = this.state.todayDate;
        tempData.dob = data.dob;
        tempData.email = data.email;
        tempData.beneficiaryType = data.beneficiaryType;
        tempData.social_security_number = data.social_security_number;

        tempArr.push(tempData);
      }
      newConBeneData = tempArr;
    }

    if (this.state.newPrimaryBene && this.state.newPrimaryBene.length > 0) {
      const tempArr = [];
      const len = this.state.newPrimaryBene.length;
      for (let i = 0; i < len; i += 1) {
        const data = this.state.newPrimaryBene[i];
        const tempData = {};

        tempData.key = data.key;
        tempData.fname = data.fname;
        tempData.mname = data.mname;
        tempData.lname = data.lname;
        tempData.contract_Number = data.contract_Number;
        tempData.relationship_To_Insured = data.relationship_To_Insured;
        tempData.accumulated_Value = data.accumulated_Value;
        tempData.distribution_Per = data.distribution_Per;
        tempData.last_modified = this.state.todayDate;
        tempData.dob = data.dob;
        tempData.email = data.email;
        tempData.beneficiaryType = data.beneficiaryType;
        tempData.social_security_number = data.social_security_number;

        tempArr.push(tempData);
      }
      newPrimaryBeneData = tempArr;
    }

    completeData.key = "4";
    completeData.account_Type = this.state.beneData.account_Type;
    completeData.account_Name = "Lorem Ipsum";
    completeData.account_Number = "56654654";
    completeData.accumulated_Value = "23152";
    completeData.distribution_Per = this.state.totalDistribution.toString();
    completeData.contingent_Bene = [];
    completeData.primary_Bene = [];
    completeData.transfer_on_Death_Bene = [];
    completeData.new_Primary_Bene = newPrimaryBeneData;
    completeData.new_Contingent_Bene = newConBeneData;

    const payload = {
      savedBeneficiaryData: completeData
    };

    return payload;
  }

  onClickSave = () => {
    const payload = this.getPayloadData();
    this.props.savedBeneficiaryData(payload);
    this.props.navigation.navigate("verifyManageBeneficiaries");
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  onClickInstructionToggle = () => {
    this.setState(prevState => ({ isInstructionCollapse: !prevState.isInstructionCollapse }));
    if (this.state.isInstructionCollapse) {
      this.setState({ instructionIcon: "-" });
    } else {
      this.setState({ instructionIcon: "+" });
    }
  };


  /* -------------------- Add Beneficiary Events -------------------------- */

  setInputRef = (inputComp) => (ref) => {
    this[inputComp] = ref;
  }

  onSubmitEditing = (input) => text => {
    input.focus();
  }

  addNewPrimaryBene = () => {
    primaryCount += 1;
    const array = this.state.newPrimaryBene;
    const tempData = {};
    tempData.key = `${primaryCount}`;
    tempData.fname = "";
    tempData.mname = "";
    tempData.lname = "";
    tempData.suffix = "";
    tempData.contract_Number = "123456789";
    tempData.relationship_To_Insured = "";
    tempData.accumulated_Value = "6322";
    tempData.distribution_Per = 0;
    tempData.last_modified = "";
    tempData.dob = "";
    tempData.email = "";
    tempData.beneficiaryType = "";
    tempData.social_security_number = "";
    tempData.fnameValidation = true;
    tempData.fnameValidationMsg = "";
    tempData.lnameValidation = true;
    tempData.lnameValidationMsg = "";
    tempData.suffixValidationMsg = "";
    tempData.suffixFlag = false;
    tempData.ssnValidation = true;
    tempData.ssnValidationMsg = '';
    tempData.dobValidationFlag = true;
    tempData.dobValidationMsg = '';
    tempData.emailValidation = true;
    tempData.emailValidationMsg = '';
    tempData.beneTypeFlag = false;
    tempData.beneTypeValidationMsg = '';
    tempData.relationToAccOwnerFlag = false;
    tempData.relationToAccOwnerValidationMsg = '';
    tempData.distributionValidation = true;
    tempData.distributionValidationMsg = '';

    array.push(tempData);
    this.setState({ newPrimaryBene: array, isAddPrimaryBene: true, addPrimaryText: 'Add Another Primary Beneficiary( Up To 3)' });
  }

  addContingentBene = () => {
    contingentCount += 1;
    let array = this.state.newContingentBene;
    const tempData = {};
    tempData.key = `${contingentCount}`;
    tempData.fname = "";
    tempData.mname = "";
    tempData.lname = "";
    tempData.suffix = "";
    tempData.contract_Number = "123456789";
    tempData.relationship_To_Insured = "";
    tempData.accumulated_Value = "6322";
    tempData.distribution_Per = 0;
    tempData.last_modified = "";
    tempData.dob = "";
    tempData.email = "";
    tempData.beneficiaryType = "";
    tempData.social_security_number = "";
    tempData.fnameValidation = true;
    tempData.fnameValidationMsg = "";
    tempData.lnameValidation = true;
    tempData.lnameValidationMsg = "";
    tempData.suffixValidationMsg = "";
    tempData.suffixFlag = false;
    tempData.ssnValidation = true;
    tempData.ssnValidationMsg = '';
    tempData.dobValidationFlag = true;
    tempData.dobValidationMsg = '';
    tempData.emailValidation = true;
    tempData.emailValidationMsg = '';
    tempData.beneTypeFlag = false;
    tempData.beneTypeValidationMsg = '';
    tempData.relationToAccOwnerFlag = false;
    tempData.relationToAccOwnerValidationMsg = '';
    tempData.distributionValidation = true;
    tempData.distributionValidationMsg = '';

    array.push(tempData);
    this.setState({ newContingentBene: array, isAddContingentBene: true, addContingentText: "Add Another Contingent Beneficiary" });

  }

  selectedSupportedAccountType = () => (text) => {
    this.setState(prevState => ({
      beneData: {
        ...prevState.beneData,
        account_Type: text
      }
    }));
  }

  selectedNewConDropDownValue = (index, keyName) => text => {
    const newItems = [...this.state.newContingentBene];
    newItems[index][keyName] = text;
    this.setState({
      newContingentBene: newItems
    });
    switch (keyName) {
      case "suffix":
        this.onAddedBeneValidationText(index, "suffixFlag", false);
        break;
      case "beneficiaryType":
        this.onAddedBeneValidationText(index, "beneTypeFlag", false);
        break;
      case "relationship_To_Insured":
        this.onAddedBeneValidationText(index, "relationToAccOwnerFlag", false);
        break;
      default:
        break;
    }
  }

  selectedNewPriDropDownValue = (index, keyName) => text => {
    const newItems = [...this.state.newPrimaryBene];
    newItems[index][keyName] = text;
    this.setState({
      newPrimaryBene: newItems
    });
    switch (keyName) {
      case "suffix":
        this.onAddedPriBeneValidationText(index, "suffixFlag", false);
        break;
      case "beneficiaryType":
        this.onAddedPriBeneValidationText(index, "beneTypeFlag", false);
        break;
      case "relationship_To_Insured":
        this.onAddedPriBeneValidationText(index, "relationToAccOwnerFlag", false);
        break;
      default:
        break;
    }
  }

  onAddedBeneChangeText = (index, keyName) => text => {
    const newItems = [...this.state.newContingentBene];
    let value = text;
    if (keyName === "distribution_Per") {
      value = (text * 100).toFixed(2).toString();
    }
    newItems[index][keyName] = value;
    this.setState({ newContingentBene: newItems });
  }

  onAddedNewPriTextChange = (index, keyName) => text => {
    const newItems = [...this.state.newPrimaryBene];
    let value = text;
    if (keyName === "distribution_Per") {
      value = (text * 100).toFixed(2).toString();
    }
    newItems[index][keyName] = value;
    this.setState({ newPrimaryBene: newItems });
  }

  onAddedBeneValidationText = (index, keyName, value) => {
    const newItems = [...this.state.newContingentBene];
    newItems[index][keyName] = value;
    this.setState({
      newContingentBene: newItems
    });
  }

  onAddedPriBeneValidationText = (index, keyName, value) => {
    const newItems = [...this.state.newPrimaryBene];
    newItems[index][keyName] = value;
    this.setState({
      newPrimaryBene: newItems
    });
  }

  /* -------------------- Validation Events -------------------------- */

  isEmpty = (str) => {
    if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
      return true;
    }
    return false;
  }

  onValidate = () => {
    let isNewContingentSuccess = true;
    let isNewPrimarySuccess = true;

    // this.setState(prevState => ({
    //   newPrimaryBene: {
    //     ...prevState.personal,
    //     fnameValidation: true,
    //     lnameValidation: true,
    //     emailValidation: true,
    //     addressLine1Validation: true,
    //     addressLine2Validation: true,
    //     zipCodeValidation: true,
    //     relationValidation: false,
    //     startDateValidation: true,
    //     endDateValidation: true,
    //     addValidation: true
    //   }
    // }));
    if (this.state.newContingentBene) {
      isNewContingentSuccess = false;
      if (!this.validateEachNewConFields()) {
        isNewContingentSuccess = false;
      } else {
        isNewContingentSuccess = true;
      }
    }
    if (this.state.newPrimaryBene) {
      isNewPrimarySuccess = false;
      if (!this.validateEachNewPriFields()) {
        isNewPrimarySuccess = false;
      } else {
        isNewPrimarySuccess = true;
      }
    }
    if (isNewContingentSuccess && isNewPrimarySuccess) {
      this.distributionCheck();
    }
  }

  validateEachNewConFields = () => {
    let isErrMsg = false;
    let isValidationSuccess = false;
    for (let i = 0; i < this.state.newContingentBene.length; i += 1) {

      if (this.isEmpty(this.state.newContingentBene[i].fname)) {
        this.onAddedBeneValidationText(i, "fnameValidation", false);
        this.onAddedBeneValidationText(i, "fnameValidationMsg", gblStrings.accManagement.emptyFirstNameMsg);
        isErrMsg = true;
      } else {
        const validate = nameRegex.test(this.state.newContingentBene[i].fname);
        this.onAddedBeneValidationText(i, "fnameValidation", validate);
        this.onAddedBeneValidationText(i, "fnameValidationMsg", gblStrings.accManagement.firstNameFormat);
        isErrMsg = !validate;
      }

      if (this.isEmpty(this.state.newContingentBene[i].lname)) {
        this.onAddedBeneValidationText(i, "lnameValidation", false);
        this.onAddedBeneValidationText(i, "lnameValidationMsg", gblStrings.accManagement.emptyLastNameMsg);
        isErrMsg = true;
      } else {
        const validate = nameRegex.test(this.state.newContingentBene[i].lname);
        this.onAddedBeneValidationText(i, "lnameValidation", validate);
        this.onAddedBeneValidationText(i, "lnameValidationMsg", gblStrings.accManagement.lastNameFormat);
        isErrMsg = !validate;
      }

      if (!this.isEmpty(this.state.newContingentBene[i].social_security_number)) {
        const validate = ssnRegex.test(this.state.newContingentBene[i].social_security_number);
        this.onAddedBeneValidationText(i, "ssnValidation", validate);
        this.onAddedBeneValidationText(i, "ssnValidationMsg", gblStrings.accManagement.ssnNoFormat);
        isErrMsg = !validate;
      } else {
        this.onAddedBeneValidationText(i, "ssnValidation", true);
        isErrMsg = false;
      }
      if (!this.isEmpty(this.state.newContingentBene[i].email)) {
        const validate = emailRegex.test(this.state.newContingentBene[i].email);
        this.onAddedBeneValidationText(i, "emailValidation", validate);
        this.onAddedBeneValidationText(i, "emailValidationMsg", gblStrings.accManagement.emailformat);
        isErrMsg = !validate;
      } else {
        this.onAddedBeneValidationText(i, "emailValidation", true);
        isErrMsg = false;
      }
      if (this.isEmpty(this.state.newContingentBene[i].relationship_To_Insured)) {
        this.onAddedBeneValidationText(i, "relationToAccOwnerFlag", true);
        this.onAddedBeneValidationText(i, "relationToAccOwnerValidationMsg", gblStrings.accManagement.emptyRelationShipMsg);
        isErrMsg = true;
      }
      if (this.isEmpty(this.state.newContingentBene[i].beneficiaryType)) {
        this.onAddedBeneValidationText(i, "beneTypeFlag", true);
        this.onAddedBeneValidationText(i, "beneTypeValidationMsg", gblStrings.accManagement.emptyBeneficiaryType);
        isErrMsg = true;
      }
      if (this.state.newContingentBene[i].dob === '') {
        this.onAddedBeneValidationText(i, "dobValidationFlag", false);
        this.onAddedBeneValidationText(i, "dobValidationMsg", gblStrings.accManagement.emptyDateOfBirth);
        isErrMsg = true;
      }
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  }

  validateEachNewPriFields = () => {
    let isErrMsg = false;
    let isValidationSuccess = false;
    for (let i = 0; i < this.state.newPrimaryBene.length; i += 1) {

      if (this.isEmpty(this.state.newPrimaryBene[i].fname)) {
        this.onAddedPriBeneValidationText(i, "fnameValidation", false);
        this.onAddedPriBeneValidationText(i, "fnameValidationMsg", gblStrings.accManagement.emptyFirstNameMsg);
        isErrMsg = true;
      } else {
        const validate = nameRegex.test(this.state.newPrimaryBene[i].fname);
        this.onAddedPriBeneValidationText(i, "fnameValidation", validate);
        this.onAddedPriBeneValidationText(i, "fnameValidationMsg", gblStrings.accManagement.firstNameFormat);
        isErrMsg = !validate;
      }

      if (this.isEmpty(this.state.newPrimaryBene[i].lname)) {
        this.onAddedPriBeneValidationText(i, "lnameValidation", false);
        this.onAddedPriBeneValidationText(i, "lnameValidationMsg", gblStrings.accManagement.emptyLastNameMsg);
        isErrMsg = true;
      } else {
        const validate = nameRegex.test(this.state.newPrimaryBene[i].lname);
        this.onAddedPriBeneValidationText(i, "lnameValidation", validate);
        this.onAddedPriBeneValidationText(i, "lnameValidationMsg", gblStrings.accManagement.lastNameFormat);
        isErrMsg = !validate;
      }

      if (!this.isEmpty(this.state.newPrimaryBene[i].social_security_number)) {
        const validate = ssnRegex.test(this.state.newPrimaryBene[i].social_security_number);
        this.onAddedPriBeneValidationText(i, "ssnValidation", validate);
        this.onAddedPriBeneValidationText(i, "ssnValidationMsg", gblStrings.accManagement.ssnNoFormat);
        isErrMsg = !validate;
      } else {
        this.onAddedPriBeneValidationText(i, "ssnValidation", true);
        isErrMsg = false;
      }
      if (!this.isEmpty(this.state.newPrimaryBene[i].email)) {
        const validate = emailRegex.test(this.state.newPrimaryBene[i].email);
        this.onAddedPriBeneValidationText(i, "emailValidation", validate);
        this.onAddedPriBeneValidationText(i, "emailValidationMsg", gblStrings.accManagement.emailformat);
        isErrMsg = !validate;
      } else {
        this.onAddedPriBeneValidationText(i, "emailValidation", true);
        isErrMsg = false;
      }
      if (this.isEmpty(this.state.newPrimaryBene[i].relationship_To_Insured)) {
        this.onAddedPriBeneValidationText(i, "relationToAccOwnerFlag", true);
        this.onAddedPriBeneValidationText(i, "relationToAccOwnerValidationMsg", gblStrings.accManagement.emptyRelationShipMsg);
        isErrMsg = true;
      }
      if (this.isEmpty(this.state.newPrimaryBene[i].beneficiaryType)) {
        this.onAddedPriBeneValidationText(i, "beneTypeFlag", true);
        this.onAddedPriBeneValidationText(i, "beneTypeValidationMsg", gblStrings.accManagement.emptyBeneficiaryType);
        isErrMsg = true;
      }
      if (this.state.newPrimaryBene[i].dob === '') {
        this.onAddedPriBeneValidationText(i, "dobValidationFlag", false);
        this.onAddedPriBeneValidationText(i, "dobValidationMsg", gblStrings.accManagement.emptyDateOfBirth);
        isErrMsg = true;
      }
      if (this.state.beneData.account_Type === '') {
        this.setState({ supportedAccountFlag: true, supportedAccountMsg: "Please select Account Type" });
        isErrMsg = true;
      }
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  }

  render() {
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={this.props.navigation} />
        <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
          <View style={styles.mainHeadingView}>

          </View>
          <View style={styles.line} />

          {/*----------------- Add Primary Beneficiary ---------------------------*/}

          {this.state.newPrimaryBene && this.state.newPrimaryBene.map((item, index) => {
            return (
              <View key={index} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                  <Text style={styles.titleHeaderText}>{this.state.editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>{index === 0 ? "Add New Beneficiary" : "Add Primary Beneficiary"}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.paddingHorizontalStyle}>
                  {index === 0 ?
                    <View>
                      <Text style={styles.smallHeading}>You may name one or more people or entities as beneficiaries</Text>
                      <Text style={styles.smallTitleText}>Primary distributions must total 100 percent</Text>
                      <View>
                        <GDropDownComponent
                          dropDownName="Supported Account"
                          dropDownTextName={styles.lblTxt}
                          data={supportedAccountData}
                          textInputStyle={styles.dropdownTextInput}
                          dropDownLayout={styles.dropDownLayout}
                          dropDownValue={this.state.beneData.account_Type}
                          selectedDropDownValue={this.selectedSupportedAccountType()}
                          errorFlag={this.state.supportedAccountFlag}
                          errorText={this.state.supportedAccountMsg}
                        />
                      </View>
                    </View>
                    : null
                  }
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.firstName}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    value={item.fname}
                    maxLength={gblStrings.maxLength.firstName}
                    onChangeText={this.onAddedNewPriTextChange(index, 'fname')}
                    errorFlag={!item.fnameValidation}
                    errorText={item.fnameValidationMsg}
                  />
                  <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.middleInitial}
                    <Text style={styles.optionalTxt}>
                      {` ${gblStrings.accManagement.optional}`}
                    </Text>
                  </Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    value={item.mname}
                    maxLength={gblStrings.maxLength.middleInitial}
                    onChangeText={this.onAddedNewPriTextChange(index, 'mname')}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.lastName}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    value={item.lname}
                    maxLength={gblStrings.maxLength.lastName}
                    onChangeText={this.onAddedNewPriTextChange(index, 'lname')}
                    errorFlag={!item.lnameValidation}
                    errorText={item.lnameValidationMsg}
                  />
                  <GDropDownComponent
                    dropDownName={gblStrings.accManagement.suffixOptional}
                    dropDownTextName={styles.lblTxt}
                    data={suffixData}
                    textInputStyle={styles.dropdownTextInput}
                    dropDownLayout={styles.dropDownLayout}
                    dropDownValue={item.suffix}
                    selectedDropDownValue={this.selectedNewPriDropDownValue(index, "suffix")}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.socialSecurityNo}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder='XXX-XX-XXXX'
                    keyboardType='numeric'
                    value={item.social_security_number}
                    //value={item.social_security_number.replace(/\d(?=\d{5})/g, "*")}
                    maxLength={gblStrings.maxLength.ssnNo}
                    onChangeText={this.onAddedNewPriTextChange(index, 'social_security_number')}
                    errorFlag={!item.ssnValidation}
                    errorText={item.ssnValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                  <GDateComponent
                    date={item.dob}
                    placeholder="MM-DD-YYYY"
                    errorFlag={!item.dobValidationFlag}
                    maxDate={this.state.prevDate}
                    errMsg={item.dobValidationMsg}
                    onDateChange={this.onAddedNewPriTextChange(index, "dob")}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder='abc@gmail.com'
                    keyboardType='email-address'
                    value={item.email}
                    onChangeText={this.onAddedNewPriTextChange(index, 'email')}
                    errorFlag={!item.emailValidation}
                    errorText={item.emailValidationMsg}
                  />
                  <GDropDownComponent
                    dropDownName={gblStrings.accManagement.beneficiary_type}
                    dropDownTextName={styles.lblTxt}
                    data={beneficiaryTypeData}
                    textInputStyle={styles.dropdownTextInput}
                    dropDownLayout={styles.dropDownLayout}
                    dropDownValue={item.beneficiaryType}
                    selectedDropDownValue={this.selectedNewPriDropDownValue(index, "beneficiaryType")}
                    errorFlag={item.beneTypeFlag}
                    errorText={item.beneTypeValidationMsg}
                  />
                  <GDropDownComponent
                    dropDownName={gblStrings.accManagement.relationToOwner}
                    dropDownTextName={styles.lblTxt}
                    data={relationData}
                    textInputStyle={styles.dropdownTextInput}
                    dropDownLayout={styles.dropDownLayout}
                    dropDownValue={item.relationship_To_Insured}
                    selectedDropDownValue={this.selectedNewPriDropDownValue(index, "relationship_To_Insured")}
                    errorFlag={item.relationToAccOwnerFlag}
                    errorText={item.relationToAccOwnerValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                  <View style={styles.distributionView}>
                    <View style={styles.sliderView}>
                      <Slider
                        value={parseInt(item.distribution_Per) / 100}
                        onValueChange={this.onAddedNewPriTextChange(index, 'distribution_Per')}
                      />
                    </View>
                    <Text style={styles.distributionValueTxt}>{`${item.distribution_Per} %`}</Text>
                  </View>
                </View>
              </View>
            );
          })}

          {/* ----------------- Add new Contingent Beneficiary --------------------------- */}

          {this.state.newContingentBene && this.state.newContingentBene.map((item, index) => {
            let distributionValue = 0;
            if (this.isEmpty(item.distribution_Per)) {
              distributionValue = 0
            } else {
              distributionValue = parseInt(item.distribution_Per);
            }
            return (
              <View key={index} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                  <Text style={styles.titleHeaderText}>{this.state.editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>Add Contingent Beneficiary</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.paddingHorizontalStyle}>
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.firstName}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    value={item.fname}
                    maxLength={gblStrings.maxLength.firstName}
                    onChangeText={this.onAddedBeneChangeText(index, 'fname')}
                    errorFlag={!item.fnameValidation}
                    errorText={item.fnameValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.middleInitial}<Text style={styles.optionalTxt}>{` ${gblStrings.accManagement.optional}`}</Text></Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    value={item.mname}
                    maxLength={gblStrings.maxLength.middleInitial}
                    onChangeText={this.onAddedBeneChangeText(index, 'mname')}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.lastName}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    value={item.lname}
                    maxLength={gblStrings.maxLength.lastName}
                    onChangeText={this.onAddedBeneChangeText(index, 'lname')}
                    errorFlag={!item.lnameValidation}
                    errorText={item.lnameValidationMsg}
                  />
                  <GDropDownComponent
                    dropDownName={gblStrings.accManagement.suffixOptional}
                    dropDownTextName={styles.lblTxt}
                    data={suffixData}
                    textInputStyle={styles.dropdownTextInput}
                    dropDownLayout={styles.dropDownLayout}
                    dropDownValue={item.suffix}
                    selectedDropDownValue={this.selectedNewConDropDownValue(index, "suffix")}
                    errorFlag={item.suffixFlag}
                    errorText={item.suffixValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.socialSecurityNo}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder='XXX-XX-XXXX'
                    keyboardType='numeric'
                    value={item.social_security_number}
                    //value={item.social_security_number.replace(/\d(?=\d{5})/g, "*")}
                    maxLength={gblStrings.maxLength.ssnNo}
                    onChangeText={this.onAddedBeneChangeText(index, 'social_security_number')}
                    errorFlag={!item.ssnValidation}
                    errorText={item.ssnValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                  <GDateComponent
                    date={item.dob}
                    placeholder="MM-DD-YYYY"
                    maxDate={this.state.prevDate}
                    errorFlag={!item.dobValidationFlag}
                    errMsg={item.dobValidationMsg}
                    onDateChange={this.onAddedBeneChangeText(index, "dob")}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder='abc@gmail.com'
                    keyboardType='email-address'
                    value={item.email}
                    onChangeText={this.onAddedBeneChangeText(index, 'email')}
                    errorFlag={!item.emailValidation}
                    errorText={item.emailValidationMsg}
                  />
                  <GDropDownComponent
                    dropDownName={gblStrings.accManagement.beneficiary_type}
                    dropDownTextName={styles.lblTxt}
                    data={beneficiaryTypeData}
                    textInputStyle={styles.dropdownTextInput}
                    dropDownLayout={styles.dropDownLayout}
                    dropDownValue={item.beneficiaryType}
                    selectedDropDownValue={this.selectedNewConDropDownValue(index, "beneficiaryType")}
                    errorFlag={item.beneTypeFlag}
                    errorText={item.beneTypeValidationMsg}
                  />
                  <GDropDownComponent
                    dropDownName={gblStrings.accManagement.relationToOwner}
                    dropDownTextName={styles.lblTxt}
                    data={relationData}
                    textInputStyle={styles.dropdownTextInput}
                    dropDownLayout={styles.dropDownLayout}
                    dropDownValue={item.relationship_To_Insured}
                    selectedDropDownValue={this.selectedNewConDropDownValue(index, "relationship_To_Insured")}
                    errorFlag={item.relationToAccOwnerFlag}
                    errorText={item.relationToAccOwnerValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                  <View style={styles.distributionView}>
                    <View style={styles.sliderView}>
                      <Slider
                        value={distributionValue / 100}
                        onValueChange={this.onAddedBeneChangeText(index, 'distribution_Per', "Primary")}
                      />
                    </View>
                    <Text style={styles.distributionValueTxt}>{`${distributionValue.toString()} %`}</Text>
                  </View>
                </View>
              </View>
            );
          })}

          <View style={styles.totalDisView}>
            <Text style={styles.disTxtStr}>{`Total Distribution Percentage of Primary ( ${this.state.totalPrimary} ) % Contingent( ${this.state.totalContingent} ) %`}</Text>
            <Text style={styles.totalDistributionTxt}>{`= ${this.state.totalDistribution} %`}</Text>
          </View>


          <TouchableOpacity style={styles.paddingStyleLeft} onPress={this.addNewPrimaryBene}>
            <Text style={styles.addPrimaryLink}>
              {` + ${this.state.addPrimaryText}`}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.paddingStyleLeft} onPress={this.addContingentBene}>
            <Text style={styles.addPrimaryLink}>
              {` + ${this.state.addContingentText}`}
            </Text>
          </TouchableOpacity>



          {this.state.isDistHigh ? <Text style={styles.errorMsg}>Total Distribution Percentage should be 100</Text> : null}

          {/* ----------------- Buttons Group --------------------------- */}

          <View style={styles.btnGrp}>
            <GButtonComponent
              buttonStyle={styles.normalWhiteBtn}
              buttonText={gblStrings.common.save}
              textStyle={styles.normalWhiteBtnTxt}
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
              onPress={this.onValidate}
            />
          </View>


          {/* ---------------- Instructions View ----------------------  */}
          <View >
            <View style={styles.titleHeadingView} onTouchStart={this.onClickInstructionToggle}>
              <Text style={styles.titleHeaderText}>{this.state.instructionIcon}</Text>
              <Text style={styles.titleHeaderText}>Instructions</Text>
            </View>
            <View style={styles.line} />
            <Collapsible collapsed={this.state.isInstructionCollapse} align="center">
              <View style={styles.enterDetailsView}>
                <View style={styles.paddingHorizontalView}>
                  <Text style={styles.subHeading}>
                    {gblStrings.accManagement.accBeneficiaryContent}
                  </Text>
                  <View style={styles.dataAccountBeneficiary}>
                    <View style={styles.noteEnterDetail}>
                      <View style={styles.noteIconView}>
                        <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsPrimaryDisc}
                      </Text>
                    </View>
                    <View style={styles.noteEnterDetail}>
                      <View style={styles.noteIconView}>
                        <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsContingentBene}
                      </Text>
                    </View>
                    <View style={styles.noteEnterDetail}>
                      <View style={styles.noteIconView}>
                        <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsIfYouWish}
                      </Text>
                    </View>
                    <View style={styles.noteEnterDetail}>
                      <View style={styles.noteIconView}>
                        <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsIfNoBene}
                      </Text>
                    </View>
                    <View style={styles.noteEnterDetail}>
                      <View style={styles.noteIconView}>
                        <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsAdditionalAdvisor}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Collapsible>
          </View>

          {/* --------------------------- Footer View -------------------------------- */}
          <View style={styles.footerView} />
          <View style={styles.borderInternal} />
          <View style={styles.blockMarginTop} />
          <View style={styles.mainHeadingView}>
            <Text style={styles.disclaimerTextHeading}>
              {gblStrings.accManagement.VCDiscalimerTitle}
            </Text>
            <Text style={styles.disclaimerTxt}>
              {gblStrings.accManagement.VCDiscalimerDescContent}
            </Text>
          </View>
          <GFooterComponent />
        </ScrollView>
      </View>
    );
  }
}

AddNewBeneficiaryComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  masterLookupStateData: PropTypes.instanceOf(Object),
  getPersonalCompositeData: PropTypes.instanceOf(Object),
  manageBeneficiaryData: PropTypes.instanceOf(Object),
  savedBeneficiaryData: PropTypes.func
};

AddNewBeneficiaryComponent.defaultProps = {
  navigation: {},
  masterLookupStateData: {},
  getPersonalCompositeData: {},
  manageBeneficiaryData: {},
  savedBeneficiaryData: () => { }
};

export default AddNewBeneficiaryComponent;
