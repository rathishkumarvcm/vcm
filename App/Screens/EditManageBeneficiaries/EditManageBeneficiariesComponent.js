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
  GFooterSettingsComponent,
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

class EditManageBenificiariesComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beneData: {},
      instructionIcon: "+",
      isInstructionCollapse: true,
      editPrimaryIcon: "-",
      isPrimaryCollapse: false,
      primaryBeneficiaryData: [],
      contingentBeneficiaryData: [],
      todBeneficiaryData: [],
      addContingentText: '',
      addPrimaryText: '',
      todayDate: '',
      prevDate: '',
      totalDistribution: 0,
      totalPrimary: 0,
      totalContingent: 0,
      newContingentBene: [],
      newPrimaryBene: [],
      isDistHigh: false
    };
  }

  componentDidMount() {
    this.getBeneData();
    this.getDropDownData();
    this.getTodayDateFunc();
  }

  componentDidUpdate(prevProps) {
    const { masterLookupStateData } = this.props;
    if (this.props !== prevProps) {
      if (this.props && masterLookupStateData && masterLookupStateData.suffix && masterLookupStateData.suffix.value) {
        suffixData = masterLookupStateData.suffix.value;
      }
      if (this.props && masterLookupStateData && masterLookupStateData.relationship && masterLookupStateData.relationship.value) {
        relationData = masterLookupStateData.relationship.value;
      }
      this.getBeneData();
    }
  }

  /* -------------------- Initial Events -------------------------- */

  getTodayDateFunc = () => {
    const date = new Date().getDate();
    const prevDate = date - 1;
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const today = `${month}-${date}-${year}`;
    const prev = `${month}-${prevDate}-${year}`;
    this.setState({ todayDate: today });
    this.setState({ prevDate: prev });
  }

  getDropDownData = () => {
    const { masterLookupStateData, getPersonalCompositeData } = this.props;
    const payload = [];
    const compositePayloadData = [
      "suffix",
      "relationship"
    ];

    for (let i = 0; i < compositePayloadData.length; i += 1) {
      const tempKey = compositePayloadData[parseInt(i, 10)];
      if (this.props && masterLookupStateData && !masterLookupStateData[`${tempKey}`]) {
        payload.push(tempKey);
      }
    }
    getPersonalCompositeData(payload);
  }

  getBeneData = () => {
    const { manageBeneficiaryData } = this.props;
    if (this.props && manageBeneficiaryData && manageBeneficiaryData.savedBeneficiaryData) {
      this.setState({ beneData: manageBeneficiaryData.savedBeneficiaryData }, () => this.setInitialValue());
    }
  }

  setInitialValue = () => {
    const { beneData } = this.state;
    if (beneData) {
      if (beneData.transfer_on_Death_Bene && beneData.transfer_on_Death_Bene.length > 0) {
        primaryCount = beneData && beneData.transfer_on_Death_Bene && beneData.transfer_on_Death_Bene.length;
        if (primaryCount > 0) {
          this.setState({ addPrimaryText: "Add Another Primary Beneficiary" });
        } else {
          this.setState({ addPrimaryText: "Add Primary Beneficiary" });
        }
      } else {
        contingentCount = beneData && beneData.contingent_Bene && beneData.contingent_Bene.length;
        if (contingentCount > 0) {
          this.setState({ addContingentText: "Add Another Contingent Beneficiary" });
        } else {
          this.setState({ addContingentText: "Add Contingent Beneficiary" });
        }
      }

      if (beneData.primary_Bene && beneData.primary_Bene.length) {
        const tempArr = [];
        const len = beneData.primary_Bene.length;
        for (let i = 0; i < len; i += 1) {
          const data = beneData.primary_Bene[parseInt(i, 10)];
          const tempData = {};

          tempData.key = data.key;
          tempData.fname = data.fname;
          tempData.mname = data.mname;
          tempData.lname = data.lname;
          tempData.contract_Number = data.contract_Number;
          tempData.relationship_To_Insured = data.relationship_To_Insured;
          tempData.accumulated_Value = data.accumulated_Value;
          tempData.distribution_Per = data.distribution_Per;
          tempData.last_modified = data.last_modified;
          tempData.dob = data.dob;
          tempData.email = data.email;
          tempData.beneficiaryType = data.beneficiary_type;
          tempData.social_security_number = data.social_security_number;
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

          tempArr.push(tempData);
        }
        this.setState({ primaryBeneficiaryData: tempArr });
      }
      if (beneData.contingent_Bene && beneData.contingent_Bene.length) {
        const tempArr = [];
        const len = beneData.contingent_Bene.length;
        for (let i = 0; i < len; i += 1) {
          const data = beneData.contingent_Bene[parseInt(i, 10)];
          const tempData = {};

          tempData.key = data.key;
          tempData.fname = data.fname;
          tempData.mname = data.mname;
          tempData.lname = data.lname;
          tempData.contract_Number = data.contract_Number;
          tempData.relationship_To_Insured = data.relationship_To_Insured;
          tempData.accumulated_Value = data.accumulated_Value;
          tempData.distribution_Per = data.distribution_Per;
          tempData.last_modified = data.last_modified;
          tempData.dob = data.dob;
          tempData.email = data.email;
          tempData.beneficiaryType = data.beneficiary_type;
          tempData.social_security_number = data.social_security_number;
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

          tempArr.push(tempData);
        }
        this.setState({ contingentBeneficiaryData: tempArr });
      }
      if (beneData.transfer_on_Death_Bene && beneData.transfer_on_Death_Bene.length) {
        const tempArr = [];
        const len = beneData.transfer_on_Death_Bene.length;
        for (let i = 0; i < len; i += 1) {
          const data = beneData.transfer_on_Death_Bene[parseInt(i, 10)];
          const tempData = {};

          tempData.key = data.key;
          tempData.fname = data.fname;
          tempData.mname = data.mname;
          tempData.lname = data.lname;
          tempData.contract_Number = data.contract_Number;
          tempData.relationship_To_Insured = data.relationship_To_Insured;
          tempData.accumulated_Value = data.accumulated_Value;
          tempData.distribution_Per = data.distribution_Per;
          tempData.last_modified = data.last_modified;
          tempData.dob = data.dob;
          tempData.email = data.email;
          tempData.beneficiaryType = data.beneficiary_type;
          tempData.social_security_number = data.social_security_number;
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

          tempArr.push(tempData);
        }
        this.setState({ todBeneficiaryData: tempArr });
      }
      if (beneData.new_Primary_Bene && beneData.new_Primary_Bene.length) {
        const tempArr = [];
        const len = beneData.new_Primary_Bene.length;
        for (let i = 0; i < len; i += 1) {
          const data = beneData.new_Primary_Bene[parseInt(i, 10)];
          const tempData = {};

          tempData.key = data.key;
          tempData.fname = data.fname;
          tempData.mname = data.mname;
          tempData.lname = data.lname;
          tempData.contract_Number = data.contract_Number;
          tempData.relationship_To_Insured = data.relationship_To_Insured;
          tempData.accumulated_Value = data.accumulated_Value;
          tempData.distribution_Per = data.distribution_Per;
          tempData.last_modified = data.last_modified;
          tempData.dob = data.dob;
          tempData.email = data.email;
          tempData.beneficiaryType = data.beneficiary_type;
          tempData.social_security_number = data.social_security_number;
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

          tempArr.push(tempData);
        }
        this.setState({ newPrimaryBene: tempArr });
      }
      if (beneData.new_Contingent_Bene && beneData.new_Contingent_Bene.length) {
        const tempArr = [];
        const len = beneData.new_Contingent_Bene.length;
        for (let i = 0; i < len; i += 1) {
          const data = beneData.new_Contingent_Bene[parseInt(i, 10)];
          const tempData = {};

          tempData.key = data.key;
          tempData.fname = data.fname;
          tempData.mname = data.mname;
          tempData.lname = data.lname;
          tempData.contract_Number = data.contract_Number;
          tempData.relationship_To_Insured = data.relationship_To_Insured;
          tempData.accumulated_Value = data.accumulated_Value;
          tempData.distribution_Per = data.distribution_Per;
          tempData.last_modified = data.last_modified;
          tempData.dob = data.dob;
          tempData.email = data.email;
          tempData.beneficiaryType = data.beneficiary_type;
          tempData.social_security_number = data.social_security_number;
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

          tempArr.push(tempData);
        }
        this.setState({ newContingentBene: tempArr });
      }
    }
  }

  /* -------------------- Button Events -------------------------- */
  onClickCancel = () => {
    const { navigation } = this.props;
    navigation.navigate("manageBeneficiaries");
  }

  distributionCheck = () => {
    let totTod = 0;
    let totalPri = 0;
    let totalCon = 0;
    let total = 0;
    const { todBeneficiaryData, primaryBeneficiaryData, contingentBeneficiaryData, newPrimaryBene, newContingentBene } = this.state;
    if (todBeneficiaryData) {
      const data = [...todBeneficiaryData, ...newPrimaryBene];
      totTod = data.reduce((prev, cur) => {
        let dist = parseInt(cur.distribution_Per,10);
        if (this.isEmpty(cur.distribution_Per)) {
          dist = 0;
        }
        return prev + dist;
      }, 0);
    }
    if (primaryBeneficiaryData) {
      totalPri = primaryBeneficiaryData.reduce((prev, cur) => {
        return prev + parseInt(cur.distribution_Per,10);
      }, 0);
    }
    if (contingentBeneficiaryData) {
      const data = contingentBeneficiaryData.concat(newContingentBene);
      totalCon = data.reduce((prev, cur) => {
        let dist = parseInt(cur.distribution_Per,10);
        if (this.isEmpty(cur.distribution_Per)) {
          dist = 0;
        }
        return prev + dist;
      }, 0);
    }
    total = totTod + totalPri + totalCon;
    this.setState({ totalPrimary: totalPri, totalContingent: totalCon, totalDistribution: total });
    if (total !== 100) {
      this.setState({ isDistHigh: true });
    } else {
      this.setState({ isDistHigh: false });
      this.onClickSave();
    }
  }

  onClickSave = () => {
    const { beneData, todayDate, todBeneficiaryData, primaryBeneficiaryData, contingentBeneficiaryData, newPrimaryBene, newContingentBene } = this.state;
    const { savedBeneficiaryData, navigation } = this.props;
    const completeData = beneData;
    let primaryData = [];
    let contingentData = [];
    let transferOnDeathData = [];
    let newPrimaryBeneData = [];
    let newConBeneData = [];

    if (primaryBeneficiaryData && primaryBeneficiaryData.length > 0) {
      const tempArr = [];
      const len = primaryBeneficiaryData.length;
      for (let i = 0; i < len; i += 1) {
        const data = primaryBeneficiaryData[parseInt(i, 10)];
        const tempData = {};

        tempData.key = data.key;
        tempData.fname = data.fname;
        tempData.mname = data.mname;
        tempData.lname = data.lname;
        tempData.contract_Number = data.contract_Number;
        tempData.relationship_To_Insured = data.relationship_To_Insured;
        tempData.accumulated_Value = data.accumulated_Value;
        tempData.distribution_Per = data.distribution_Per;
        tempData.last_modified = todayDate;
        tempData.dob = data.dob;
        tempData.email = data.email;
        tempData.beneficiaryType = data.beneficiaryType;
        tempData.social_security_number = data.social_security_number;

        tempArr.push(tempData);
      }
      primaryData = tempArr;
    }

    if (contingentBeneficiaryData && contingentBeneficiaryData.length > 0) {
      const tempArr = [];
      const len = contingentBeneficiaryData.length;
      for (let i = 0; i < len; i += 1) {
        const data = contingentBeneficiaryData[parseInt(i, 10)];
        const tempData = {};

        tempData.key = data.key;
        tempData.fname = data.fname;
        tempData.mname = data.mname;
        tempData.lname = data.lname;
        tempData.contract_Number = data.contract_Number;
        tempData.relationship_To_Insured = data.relationship_To_Insured;
        tempData.accumulated_Value = data.accumulated_Value;
        tempData.distribution_Per = data.distribution_Per;
        tempData.last_modified = todayDate;
        tempData.dob = data.dob;
        tempData.email = data.email;
        tempData.beneficiaryType = data.beneficiaryType;
        tempData.social_security_number = data.social_security_number;

        tempArr.push(tempData);
      }
      contingentData = tempArr;
    }

    if (todBeneficiaryData && todBeneficiaryData.length > 0) {
      const tempArr = [];
      const len = todBeneficiaryData.length;
      for (let i = 0; i < len; i += 1) {
        const data = todBeneficiaryData[parseInt(i, 10)];
        const tempData = {};

        tempData.key = data.key;
        tempData.fname = data.fname;
        tempData.mname = data.mname;
        tempData.lname = data.lname;
        tempData.contract_Number = data.contract_Number;
        tempData.relationship_To_Insured = data.relationship_To_Insured;
        tempData.accumulated_Value = data.accumulated_Value;
        tempData.distribution_Per = data.distribution_Per;
        tempData.last_modified = todayDate;
        tempData.dob = data.dob;
        tempData.email = data.email;
        tempData.beneficiaryType = data.beneficiaryType;
        tempData.social_security_number = data.social_security_number;

        tempArr.push(tempData);
      }
      transferOnDeathData = tempArr;
    }

    if (newContingentBene && newContingentBene.length > 0) {
      const tempArr = [];
      const len = newContingentBene.length;
      for (let i = 0; i < len; i += 1) {
        const data = newContingentBene[parseInt(i, 10)];
        const tempData = {};

        tempData.key = data.key;
        tempData.fname = data.fname;
        tempData.mname = data.mname;
        tempData.lname = data.lname;
        tempData.contract_Number = data.contract_Number;
        tempData.relationship_To_Insured = data.relationship_To_Insured;
        tempData.accumulated_Value = data.accumulated_Value;
        tempData.distribution_Per = data.distribution_Per;
        tempData.last_modified = todayDate;
        tempData.dob = data.dob;
        tempData.email = data.email;
        tempData.beneficiaryType = data.beneficiaryType;
        tempData.social_security_number = data.social_security_number;

        tempArr.push(tempData);
      }
      newConBeneData = tempArr;
    }

    if (newPrimaryBene && newPrimaryBene.length > 0) {
      const tempArr = [];
      const len = newPrimaryBene.length;
      for (let i = 0; i < len; i += 1) {
        const data = newPrimaryBene[parseInt(i, 10)];
        const tempData = {};

        tempData.key = data.key;
        tempData.fname = data.fname;
        tempData.mname = data.mname;
        tempData.lname = data.lname;
        tempData.contract_Number = data.contract_Number;
        tempData.relationship_To_Insured = data.relationship_To_Insured;
        tempData.accumulated_Value = data.accumulated_Value;
        tempData.distribution_Per = data.distribution_Per;
        tempData.last_modified = todayDate;
        tempData.dob = data.dob;
        tempData.email = data.email;
        tempData.beneficiaryType = data.beneficiaryType;
        tempData.social_security_number = data.social_security_number;

        tempArr.push(tempData);
      }
      newPrimaryBeneData = tempArr;
    }

    completeData.primary_Bene = primaryData;
    completeData.contingent_Bene = contingentData;
    completeData.transfer_on_Death_Bene = transferOnDeathData;
    completeData.new_Primary_Bene = newPrimaryBeneData;
    completeData.new_Contingent_Bene = newConBeneData;

    const payload = {
      savedBeneficiaryData: completeData
    };

    savedBeneficiaryData(payload);
    navigation.navigate("verifyManageBeneficiaries");
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onClickInstructionToggle = () => {
    const { isInstructionCollapse } = this.state;
    this.setState(prevState => ({ isInstructionCollapse: !prevState.isInstructionCollapse }));
    if (isInstructionCollapse) {
      this.setState({ instructionIcon: "-" });
    } else {
      this.setState({ instructionIcon: "+" });
    }
  };

  onClickPrimaryToggle = () => {
    const { isPrimaryCollapse } = this.state;
    this.setState(prevState => ({ isPrimaryCollapse: !prevState.isPrimaryCollapse }));
    if (isPrimaryCollapse) {
      this.setState({ editPrimaryIcon: "-" });
    } else {
      this.setState({ editPrimaryIcon: "+" });
    }
  };

  /* -------------------- onChange Events -------------------------- */


  generateEditPrimaryBeneficiaryKeyExtractor = (item) => item.key;

  generateContingentBeneficiaryKeyExtractor = (item) => item.key;

  generateNewContingentBeneficiaryKeyExtractor = (item) => item.key;

  generateTodBeneficiaryKeyExtractor = (item) => item.key;

  generateNewTodBeneficiaryKeyExtractor = (item) => item.key;

  setInputRef = (inputComp) => (ref) => {
    this[`${inputComp}`] = ref;
  }

  selectedDropDown = (index, keyName, type) => text => {
    const { primaryBeneficiaryData, contingentBeneficiaryData, todBeneficiaryData } = this.state;
    switch (type) {
      case "Primary": {
        const newItems = [...primaryBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = text;
        this.setState({
          primaryBeneficiaryData: newItems
        });
        switch (keyName) {
          case "beneficiaryType":
            this.onChangeValidationText(index, "beneTypeFlag", false, "Primary");
            break;
          case "relationship_To_Insured":
            this.onChangeValidationText(index, "relationToAccOwnerFlag", false, "Primary");
            break;
          default:
            break;
        }
        break;
      }
      case "Contingent": {
        const newItems = [...contingentBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = text;
        this.setState({
          contingentBeneficiaryData: newItems
        });
        switch (keyName) {
          case "beneficiaryType":
            this.onChangeValidationText(index, "beneTypeFlag", false, "Contingent");
            break;
          case "relationship_To_Insured":
            this.onChangeValidationText(index, "relationToAccOwnerFlag", false, "Contingent");
            break;
          default:
            break;
        }
        break;
      }
      case "Tod": {
        const newItems = [...todBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = text;
        this.setState({
          todBeneficiaryData: newItems
        });
        switch (keyName) {
          case "beneficiaryType":
            this.onChangeValidationText(index, "beneTypeFlag", false, "Tod");
            break;
          case "relationship_To_Insured":
            this.onChangeValidationText(index, "relationToAccOwnerFlag", false, "Tod");
            break;
          default:
            break;
        }
        break;
      }
      default:
        break;
    }
  }

  onChangeText = (index, keyName, type) => text => {
    const { primaryBeneficiaryData, contingentBeneficiaryData, todBeneficiaryData } = this.state;
    let value = text;
    if (keyName === "distribution_Per") {
      value = (text * 100).toFixed(2).toString();
    }
    switch (type) {
      case "Primary": {
        const newItems = [...primaryBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = value;
        this.setState({ primaryBeneficiaryData: newItems });
        break;
      }
      case "Contingent": {
        const newItems = [...contingentBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = value;
        this.setState({ contingentBeneficiaryData: newItems });
        break;
      }
      case "Tod": {
        const newItems = [...todBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = value;
        this.setState({ todBeneficiaryData: newItems });
        break;
      }
      default:
        break;
    }
  }

  onChangeValidationText = (index, keyName, val, type) => {
    const { primaryBeneficiaryData, contingentBeneficiaryData, todBeneficiaryData } = this.state;
    const value = val;
    switch (type) {
      case "Primary": {
        const newItems = [...primaryBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = value;
        this.setState({ primaryBeneficiaryData: newItems });
        break;
      }
      case "Contingent": {
        const newItems = [...contingentBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = value;
        this.setState({ contingentBeneficiaryData: newItems });
        break;
      }
      case "Tod": {
        const newItems = [...todBeneficiaryData];
        newItems[parseInt(index, 10)][`${keyName}`] = value;
        this.setState({ todBeneficiaryData: newItems });
        break;
      }
      default:
        break;
    }
  }

  /* -------------------- Add Beneficiary Events -------------------------- */

  addNewPrimaryBene = () => {
    const { newPrimaryBene, beneData } = this.state;
    primaryCount += 1;
    const array = newPrimaryBene;
    const tempData = {};
    tempData.key = `tod_${beneData.key}_${primaryCount}`;
    tempData.fname = "";
    tempData.mname = "";
    tempData.lname = "";
    tempData.suffix = "";
    tempData.contract_Number = "123456789";
    tempData.relationship_To_Insured = "";
    tempData.accumulated_Value = "6322";
    tempData.distribution_Per = "";
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
    this.setState({ newPrimaryBene: array });
  }

  addContingentBene = () => {
    const { newContingentBene, beneData } = this.state;
    contingentCount += 1;
    const array = newContingentBene;
    const tempData = {};
    tempData.key = `con_${beneData.key}_${contingentCount}`;
    tempData.fname = "";
    tempData.mname = "";
    tempData.lname = "";
    tempData.suffix = "";
    tempData.contract_Number = "123456789";
    tempData.relationship_To_Insured = "";
    tempData.accumulated_Value = "6322";
    tempData.distribution_Per = "";
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
    this.setState({ newContingentBene: array });

  }

  selectedNewConDropDownValue = (index, keyName) => text => {
    const { newContingentBene } = this.state;
    const newItems = [...newContingentBene];
    newItems[parseInt(index, 10)][`${keyName}`] = text;
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
    const { newPrimaryBene } = this.state;
    const newItems = [...newPrimaryBene];
    newItems[parseInt(index, 10)][`${keyName}`] = text;
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
    const { newContingentBene } = this.state;
    let value = text;
    if (keyName === "distribution_Per") {
      value = (text * 100).toFixed(2).toString();
    }
    const newItems = [...newContingentBene];
    newItems[parseInt(index, 10)][`${keyName}`] = value;
    this.setState({ newContingentBene: newItems });
  }

  onAddedNewPriTextChange = (index, keyName) => text => {
    const { newPrimaryBene } = this.state;
    let value = text;
    if (keyName === "distribution_Per") {
      value = (text * 100).toFixed(2).toString();
    }
    const newItems = [...newPrimaryBene];
    newItems[parseInt(index, 10)][`${keyName}`] = value;
    this.setState({ newPrimaryBene: newItems });
  }

  onAddedBeneValidationText = (index, keyName, value) => {
    const { newContingentBene } = this.state;
    const newItems = [...newContingentBene];
    const val = value;
    newItems[parseInt(index, 10)][`${keyName}`] = val;
    this.setState({ newContingentBene: newItems });
  }

  onAddedPriBeneValidationText = (index, keyName, value) => {
    const { newPrimaryBene } = this.state;
    const newItems = [...newPrimaryBene];
    const val = value;
    newItems[parseInt(index, 10)][`${keyName}`] = val;
    this.setState({ newPrimaryBene: newItems });
  }

  /* -------------------- Validation Events -------------------------- */

  isEmpty = (str) => {
    if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
      return true;
    }
    return false;
  }

  onValidate = () => {
    const { todBeneficiaryData, primaryBeneficiaryData, contingentBeneficiaryData, newPrimaryBene, newContingentBene } = this.state;
    let isPriValidationSuccess = true;
    let isConValidationSuccess = true;
    let isTodValidationSuccess = true;
    let isNewContingentSuccess = true;
    let isNewPrimarySuccess = true;


    if (primaryBeneficiaryData) {
      isPriValidationSuccess = false;
      if (!this.validateEachPriFields()) {
        isPriValidationSuccess = false;
      } else {
        isPriValidationSuccess = true;
      }
    }
    if (contingentBeneficiaryData) {
      isConValidationSuccess = false;
      if (!this.validateEachConFields()) {
        isConValidationSuccess = false;
      } else {
        isConValidationSuccess = true;
      }
    }
    if (todBeneficiaryData) {
      isTodValidationSuccess = false;
      if (!this.validateEachTodFields()) {
        isTodValidationSuccess = false;
      } else {
        isTodValidationSuccess = true;
      }
    }
    if (newContingentBene) {
      isNewContingentSuccess = false;
      if (!this.validateEachNewConFields()) {
        isNewContingentSuccess = false;
      } else {
        isNewContingentSuccess = true;
      }
    }
    if (newPrimaryBene) {
      isNewPrimarySuccess = false;
      if (!this.validateEachNewPriFields()) {
        isNewPrimarySuccess = false;
      } else {
        isNewPrimarySuccess = true;
      }
    }
    if (isPriValidationSuccess && isConValidationSuccess && isTodValidationSuccess && isNewContingentSuccess && isNewPrimarySuccess) {
      this.distributionCheck();
    }
  }

  validateEachPriFields = () => {
    let isErrMsg = false;
    let isValidationSuccess = false;
    const { primaryBeneficiaryData } = this.state;
    for (let i = 0; i < primaryBeneficiaryData.length; i += 1) {
      const obj = primaryBeneficiaryData[parseInt(i, 10)];
      if (!this.isEmpty(obj.social_security_number)) {
        const validate = ssnRegex.test(obj.social_security_number);
        this.onChangeValidationText(i, "ssnValidation", validate, "Primary");
        this.onChangeValidationText(i, "ssnValidationMsg", gblStrings.accManagement.ssnNoFormat, "Primary");
        isErrMsg = (!validate);
      } else {
        this.onChangeValidationText(i, "ssnValidation", true, "Primary");
        isErrMsg = false;
      }
      if (!this.isEmpty(obj.email)) {
        const validate = emailRegex.test(obj.email);
        this.onChangeValidationText(i, "emailValidation", validate, "Primary");
        this.onChangeValidationText(i, "emailValidationMsg", gblStrings.accManagement.emailformat, "Primary");
        isErrMsg = (!validate);
      } else {
        this.onChangeValidationText(i, "emailValidation", true, "Primary");
        isErrMsg = false;
      }
      if (this.isEmpty(obj.relationship_To_Insured)) {
        this.onChangeValidationText(i, "relationToAccOwnerFlag", true, "Primary");
        this.onChangeValidationText(i, "relationToAccOwnerValidationMsg", gblStrings.accManagement.emptyRelationShipMsg, "Primary");
        isErrMsg = true;
      }
      if (this.isEmpty(obj.beneficiaryType)) {
        this.onChangeValidationText(i, "beneTypeFlag", true, "Primary");
        this.onChangeValidationText(i, "beneTypeValidationMsg", gblStrings.accManagement.emptyBeneficiaryType, "Primary");
        isErrMsg = true;
      }
      if (obj.dob === '') {
        this.onChangeValidationText(i, "dobValidationFlag", false, "Primary");
        this.onChangeValidationText(i, "dobValidationMsg", gblStrings.accManagement.emptyDateOfBirth, "Primary");
        isErrMsg = true;
      }
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  }

  validateEachTodFields = () => {
    let isErrMsg = false;
    let isValidationSuccess = false;
    const { todBeneficiaryData } = this.state;
    for (let i = 0; i < todBeneficiaryData.length; i += 1) {
      const obj = todBeneficiaryData[parseInt(i, 10)];
      if (!this.isEmpty(obj.social_security_number)) {
        const validate = ssnRegex.test(obj.social_security_number);
        this.onChangeValidationText(i, "ssnValidation", validate, "Tod");
        this.onChangeValidationText(i, "ssnValidationMsg", gblStrings.accManagement.ssnNoFormat, "Tod");
        isErrMsg = !validate;
      } else {
        this.onChangeValidationText(i, "ssnValidation", true, "Tod");
        isErrMsg = false;
      }
      if (!this.isEmpty(obj.email)) {
        const validate = emailRegex.test(obj.email);
        this.onChangeValidationText(i, "emailValidation", validate, "Tod");
        this.onChangeValidationText(i, "emailValidationMsg", gblStrings.accManagement.emailformat, "Tod");
        isErrMsg = !validate;
      } else {
        this.onChangeValidationText(i, "emailValidation", true, "Tod");
        isErrMsg = false;
      }
      if (obj.relationship_To_Insured === '') {
        this.onChangeValidationText(i, "relationToAccOwnerFlag", true, "Tod");
        this.onChangeValidationText(i, "relationToAccOwnerValidationMsg", gblStrings.accManagement.emptyRelationShipMsg, "Tod");
        isErrMsg = true;
      }
      if (obj.beneficiaryType === '') {
        this.onChangeValidationText(i, "beneTypeFlag", true, "Tod");
        this.onChangeValidationText(i, "beneTypeValidationMsg", gblStrings.accManagement.emptyBeneficiaryType, "Tod");
        isErrMsg = true;
      }
      if (obj.dob === '') {
        this.onChangeValidationText(i, "dobValidationFlag", false, "Tod");
        this.onChangeValidationText(i, "dobValidationMsg", gblStrings.accManagement.emptyDateOfBirth, "Tod");
        isErrMsg = true;
      }
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  }

  validateEachConFields = () => {
    let isErrMsg = false;
    let isValidationSuccess = false;
    const { contingentBeneficiaryData } = this.state;
    const len = contingentBeneficiaryData.length;
    for (let i = 0; i < len; i += 1) {
      const obj = contingentBeneficiaryData[parseInt(i, 10)];
      if (!this.isEmpty(obj.social_security_number)) {
        const validate = ssnRegex.test(obj.social_security_number);
        this.onChangeValidationText(i, "ssnValidation", validate, "Contingent");
        this.onChangeValidationText(i, "ssnValidationMsg", gblStrings.accManagement.ssnNoFormat, "Contingent");
        isErrMsg = !validate;
      } else {
        this.onChangeValidationText(i, "ssnValidation", true, "Contingent");
        isErrMsg = false;
      }
      if (!this.isEmpty(obj.email)) {
        const validate = emailRegex.test(obj.email);
        this.onChangeValidationText(i, "emailValidation", validate, "Contingent");
        this.onChangeValidationText(i, "emailValidationMsg", gblStrings.accManagement.emailformat, "Contingent");
        isErrMsg = !validate;
      } else {
        this.onChangeValidationText(i, "emailValidation", true, "Contingent");
        isErrMsg = false;
      }
      if (this.isEmpty(obj.relationship_To_Insured)) {
        this.onChangeValidationText(i, "relationToAccOwnerFlag", true, "Contingent");
        this.onChangeValidationText(i, "relationToAccOwnerValidationMsg", gblStrings.accManagement.emptyRelationShipMsg, "Contingent");
        isErrMsg = true;
      }
      if (this.isEmpty(obj.beneficiaryType)) {
        this.onChangeValidationText(i, "beneTypeFlag", true, "Contingent");
        this.onChangeValidationText(i, "beneTypeValidationMsg", gblStrings.accManagement.emptyBeneficiaryType, "Contingent");
        isErrMsg = true;
      }
      if (obj.dob === '') {
        this.onChangeValidationText(i, "dobValidationFlag", false, "Contingent");
        this.onChangeValidationText(i, "dobValidationMsg", gblStrings.accManagement.emptyDateOfBirth, "Contingent");
        isErrMsg = true;
      }
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  }

  validateEachNewConFields = () => {
    let isErrMsg = false;
    let isValidationSuccess = false;
    const { newContingentBene } = this.state;
    for (let i = 0; i < newContingentBene.length; i += 1) {
      const obj = newContingentBene[parseInt(i, 10)];
      if (this.isEmpty(obj.fname)) {
        this.onAddedBeneValidationText(i, "fnameValidation", false);
        this.onAddedBeneValidationText(i, "fnameValidationMsg", gblStrings.accManagement.emptyFirstNameMsg);
        isErrMsg = true;
      } else {
        const validate = nameRegex.test(obj.fname);
        this.onAddedBeneValidationText(i, "fnameValidation", validate);
        this.onAddedBeneValidationText(i, "fnameValidationMsg", gblStrings.accManagement.firstNameFormat);
        isErrMsg = !validate;
      }

      if (this.isEmpty(obj.lname)) {
        this.onAddedBeneValidationText(i, "lnameValidation", false);
        this.onAddedBeneValidationText(i, "lnameValidationMsg", gblStrings.accManagement.emptyLastNameMsg);
        isErrMsg = true;
      } else {
        const validate = nameRegex.test(obj.lname);
        this.onAddedBeneValidationText(i, "lnameValidation", validate);
        this.onAddedBeneValidationText(i, "lnameValidationMsg", gblStrings.accManagement.lastNameFormat);
        isErrMsg = !validate;
      }

      if (!this.isEmpty(obj.social_security_number)) {
        const validate = ssnRegex.test(obj.social_security_number);
        this.onAddedBeneValidationText(i, "ssnValidation", validate);
        this.onAddedBeneValidationText(i, "ssnValidationMsg", gblStrings.accManagement.ssnNoFormat);
        isErrMsg = !validate;
      } else {
        this.onAddedBeneValidationText(i, "ssnValidation", true);
        isErrMsg = false;
      }
      if (!this.isEmpty(obj.email)) {
        const validate = emailRegex.test(obj.email);
        this.onAddedBeneValidationText(i, "emailValidation", validate);
        this.onAddedBeneValidationText(i, "emailValidationMsg", gblStrings.accManagement.emailformat);
        isErrMsg = !validate;
      } else {
        this.onAddedBeneValidationText(i, "emailValidation", true);
        isErrMsg = false;
      }
      if (this.isEmpty(obj.relationship_To_Insured)) {
        this.onAddedBeneValidationText(i, "relationToAccOwnerFlag", true);
        this.onAddedBeneValidationText(i, "relationToAccOwnerValidationMsg", gblStrings.accManagement.emptyRelationShipMsg);
        isErrMsg = true;
      }
      if (this.isEmpty(obj.beneficiaryType)) {
        this.onAddedBeneValidationText(i, "beneTypeFlag", true);
        this.onAddedBeneValidationText(i, "beneTypeValidationMsg", gblStrings.accManagement.emptyBeneficiaryType);
        isErrMsg = true;
      }
      if (obj.dob === '') {
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
    const { newPrimaryBene } = this.state;
    for (let i = 0; i < newPrimaryBene.length; i += 1) {
      const obj = newPrimaryBene[parseInt(i, 10)];
      if (this.isEmpty(obj.fname)) {
        this.onAddedPriBeneValidationText(i, "fnameValidation", false);
        this.onAddedPriBeneValidationText(i, "fnameValidationMsg", gblStrings.accManagement.emptyFirstNameMsg);
        isErrMsg = true;
      } else {
        const validate = nameRegex.test(obj.fname);
        this.onAddedPriBeneValidationText(i, "fnameValidation", validate);
        this.onAddedPriBeneValidationText(i, "fnameValidationMsg", gblStrings.accManagement.firstNameFormat);
        isErrMsg = !validate;
      }

      if (this.isEmpty(obj.lname)) {
        this.onAddedPriBeneValidationText(i, "lnameValidation", false);
        this.onAddedPriBeneValidationText(i, "lnameValidationMsg", gblStrings.accManagement.emptyLastNameMsg);
        isErrMsg = true;
      } else {
        const validate = nameRegex.test(obj.lname);
        this.onAddedPriBeneValidationText(i, "lnameValidation", validate);
        this.onAddedPriBeneValidationText(i, "lnameValidationMsg", gblStrings.accManagement.lastNameFormat);
        isErrMsg = !validate;
      }

      if (!this.isEmpty(obj.social_security_number)) {
        const validate = ssnRegex.test(obj.social_security_number);
        this.onAddedPriBeneValidationText(i, "ssnValidation", validate);
        this.onAddedPriBeneValidationText(i, "ssnValidationMsg", gblStrings.accManagement.ssnNoFormat);
        isErrMsg = !validate;
      } else {
        this.onAddedPriBeneValidationText(i, "ssnValidation", true);
        isErrMsg = false;
      }
      if (!this.isEmpty(obj.email)) {
        const validate = emailRegex.test(obj.email);
        this.onAddedPriBeneValidationText(i, "emailValidation", validate);
        this.onAddedPriBeneValidationText(i, "emailValidationMsg", gblStrings.accManagement.emailformat);
        isErrMsg = !validate;
      } else {
        this.onAddedPriBeneValidationText(i, "emailValidation", true);
        isErrMsg = false;
      }
      if (this.isEmpty(obj.relationship_To_Insured)) {
        this.onAddedPriBeneValidationText(i, "relationToAccOwnerFlag", true);
        this.onAddedPriBeneValidationText(i, "relationToAccOwnerValidationMsg", gblStrings.accManagement.emptyRelationShipMsg);
        isErrMsg = true;
      }
      if (this.isEmpty(obj.beneficiaryType)) {
        this.onAddedPriBeneValidationText(i, "beneTypeFlag", true);
        this.onAddedPriBeneValidationText(i, "beneTypeValidationMsg", gblStrings.accManagement.emptyBeneficiaryType);
        isErrMsg = true;
      }
      if (obj.dob === '') {
        this.onAddedPriBeneValidationText(i, "dobValidationFlag", false);
        this.onAddedPriBeneValidationText(i, "dobValidationMsg", gblStrings.accManagement.emptyDateOfBirth);
        isErrMsg = true;
      }
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  }

  render() {
    const { navigation } = this.props;
    const { beneData, prevDate, isDistHigh, editPrimaryIcon, instructionIcon, isInstructionCollapse, primaryBeneficiaryData, contingentBeneficiaryData, todBeneficiaryData, newContingentBene, addContingentText, addPrimaryText, newPrimaryBene, totalDistribution, totalContingent, totalPrimary } = this.state;
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={navigation} />
        <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageBenificiariesHeadline}>
              {gblStrings.accManagement.manageBeneficiaries}
            </Text>
          </View>
          <View style={styles.line} />

          <View style={styles.contentViewInternal}>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{beneData.account_Type}</Text>
              <Text style={styles.shortContentValueText}>{beneData.account_Name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.registrationOwner}</Text>
              <Text style={styles.shortContentValueText}>{beneData.account_Name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.accountNumber}</Text>
              <Text style={styles.shortContentValueText}>{beneData.account_Number}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.balance}</Text>
              <Text style={styles.shortContentValueText}>{`$ ${beneData.accumulated_Value}`}</Text>
            </View>
          </View>

          {/* -------------------- Edit Primary Details -------------------------- */}

          {primaryBeneficiaryData && primaryBeneficiaryData.map((item, index) => {
            let distributionValue = 0;
            if (this.isEmpty(item.distribution_Per)) {
              distributionValue = 0;
            } else {
              distributionValue = parseInt(item.distribution_Per,10);
            }
            return (
              <View key={this.generateEditPrimaryBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                  <Text style={styles.titleHeaderText}>{editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>{gblStrings.accManagement.editPrimaryBene}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.paddingHorizontalStyle}>
                  <View style={styles.marginStyle}>
                    <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                    <Text style={styles.beneNameTxtStyle}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
                  </View>
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.socialSecurityNo}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder="XXX-XX-XXXX"
                    keyboardType="numeric"
                    // value={item.social_security_number.replace(/\d(?=\d{5})/g, "*")}
                    value={item.social_security_number}
                    maxLength={gblStrings.maxLength.ssnNo}
                    onChangeText={this.onChangeText(index, 'social_security_number', "Primary")}
                    errorFlag={!item.ssnValidation}
                    errorText={item.ssnValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                  <GDateComponent
                    date={item.dob}
                    placeholder="MM-DD-YYYY"
                    maxDate={prevDate}
                    errorFlag={!item.dobValidationFlag}
                    errMsg={item.dobValidationMsg}
                    onDateChange={this.onChangeText(index, "dob", "Primary")}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder="abc@gmail.com"
                    keyboardType="email-address"
                    value={item.email}
                    onChangeText={this.onChangeText(index, 'email', "Primary")}
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
                    selectedDropDownValue={this.selectedDropDown(index, "beneficiaryType", "Primary")}
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
                    selectedDropDownValue={this.selectedDropDown(index, "relationship_To_Insured", "Primary")}
                    errorFlag={item.relationToAccOwnerFlag}
                    errorText={item.relationToAccOwnerValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                  <View style={styles.distributionView}>
                    <View style={styles.sliderView}>
                      <Slider
                        value={distributionValue / 100}
                        onValueChange={this.onChangeText(index, 'distribution_Per', "Primary")}
                      />
                    </View>
                    <Text style={styles.distributionValueTxt}>{`${distributionValue} %`}</Text>
                  </View>
                </View>
              </View>
            );
          })}


          {/* ----------------- Edit Contingent Beneficiary --------------------------- */}

          {contingentBeneficiaryData && contingentBeneficiaryData.map((item, index) => {
            let distributionValue = 0;
            if (this.isEmpty(item.distribution_Per)) {
              distributionValue = 0;
            } else {
              distributionValue = parseInt(item.distribution_Per,10);
            }
            return (
              <View key={this.generateContingentBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                  <Text style={styles.titleHeaderText}>{editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>{gblStrings.accManagement.editContingentBene}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.paddingHorizontalStyle}>
                  <View style={styles.marginStyle}>
                    <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                    <Text style={styles.beneNameTxtStyle}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
                  </View>
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.socialSecurityNo}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder="XXX-XX-XXXX"
                    keyboardType="numeric"
                    value={item.social_security_number}
                    // value={item.social_security_number.replace(/\d(?=\d{5})/g, "*")}
                    maxLength={gblStrings.maxLength.ssnNo}
                    onChangeText={this.onChangeText(index, 'social_security_number', "Contingent")}
                    errorFlag={!item.ssnValidation}
                    errorText={item.ssnValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                  <GDateComponent
                    date={item.dob}
                    placeholder="MM-DD-YYYY"
                    maxDate={prevDate}
                    errorFlag={!item.dobValidationFlag}
                    errMsg={item.dobValidationMsg}
                    onDateChange={this.onChangeText(index, "dob", "Contingent")}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder="abc@gmail.com"
                    keyboardType="email-address"
                    value={item.email}
                    onChangeText={this.onChangeText(index, 'email', "Contingent")}
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
                    selectedDropDownValue={this.selectedDropDown(index, "beneficiaryType", "Contingent")}
                    errorFlag={item.beneTypeFlag}
                    errorText={item.beneTypeValidationMsg}
                  />
                  <GDropDownComponent
                    dropDownName={gblStrings.accManagement.relationToOwner}
                    dropDownTextName={styles.lblTxt}
                    textInputStyle={styles.dropdownTextInput}
                    dropDownLayout={styles.dropDownLayout}
                    data={relationData}
                    dropDownValue={item.relationship_To_Insured}
                    selectedDropDownValue={this.selectedDropDown(index, "relationship_To_Insured", "Contingent")}
                    errorFlag={item.relationToAccOwnerFlag}
                    errorText={item.relationToAccOwnerValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                  <View style={styles.distributionView}>
                    <View style={styles.sliderView}>
                      <Slider
                        value={distributionValue / 100}
                        onValueChange={this.onChangeText(index, 'distribution_Per', "Contingent")}
                      />
                    </View>
                    <Text style={styles.distributionValueTxt}>{`${distributionValue} %`}</Text>
                  </View>
                </View>
              </View>
            );
          })}

          {/* ----------------- Add new Contingent Beneficiary --------------------------- */}

          {newContingentBene && newContingentBene.map((item, index) => {
            let distributionValue = 0;
            if (this.isEmpty(item.distribution_Per)) {
              distributionValue = 0;
            } else {
              distributionValue = parseInt(item.distribution_Per,10);
            }
            return (
              <View key={this.generateNewContingentBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                  <Text style={styles.titleHeaderText}>{editPrimaryIcon}</Text>
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
                    placeholder="XXX-XX-XXXX"
                    keyboardType="numeric"
                    value={item.social_security_number}
                    // value={item.social_security_number.replace(/\d(?=\d{5})/g, "*")}
                    maxLength={gblStrings.maxLength.ssnNo}
                    onChangeText={this.onAddedBeneChangeText(index, 'social_security_number')}
                    errorFlag={!item.ssnValidation}
                    errorText={item.ssnValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                  <GDateComponent
                    date={item.dob}
                    placeholder="MM-DD-YYYY"
                    maxDate={prevDate}
                    errorFlag={!item.dobValidationFlag}
                    errMsg={item.dobValidationMsg}
                    onDateChange={this.onAddedBeneChangeText(index, "dob")}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder="abc@gmail.com"
                    keyboardType="email-address"
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
                        value={(distributionValue) / 100}
                        onValueChange={this.onAddedBeneChangeText(index, 'distribution_Per')}
                      />
                    </View>
                    <Text style={styles.distributionValueTxt}>{`${distributionValue} %`}</Text>
                  </View>
                </View>
              </View>
            );
          })}

          {todBeneficiaryData && todBeneficiaryData.length <= 0 ?
            (
              <View style={styles.totalDisView}>
                <Text style={styles.disTxtStr}>{`Total Distribution Percentage of Primary ( ${totalPrimary} ) % Contingent( ${totalContingent} ) %`}</Text>
                <Text style={styles.totalDistributionTxt}>{`= ${totalDistribution} %`}</Text>
              </View>
            ) : null
          }

          {todBeneficiaryData && todBeneficiaryData.length <= 0 ?
            (
              <TouchableOpacity style={styles.paddingStyleLeft} onPress={this.addContingentBene}>
                <Text style={styles.addPrimaryLink}>
                  {` + ${addContingentText}`}
                </Text>
              </TouchableOpacity>
            ) : null
          }

          {/* ----------------- Edit Transfer On Death Beneficiary --------------------------- */}


          {todBeneficiaryData && todBeneficiaryData.map((item, index) => {

            let distributionValue = 0;
            if (this.isEmpty(item.distribution_Per)) {
              distributionValue = 0;
            } else {
              distributionValue = parseInt(item.distribution_Per,10);
            }
            return (
              <View key={this.generateTodBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                  <Text style={styles.titleHeaderText}>{editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>{gblStrings.accManagement.editTodBene}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.paddingHorizontalStyle}>
                  <View style={styles.marginStyle}>
                    <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                    <Text style={styles.beneNameTxtStyle}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
                  </View>
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.socialSecurityNo}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder="XXX-XX-XXXX"
                    keyboardType="numeric"
                    value={item.social_security_number}
                    // value={item.social_security_number.replace(/\d(?=\d{5})/g, "*")}
                    maxLength={gblStrings.maxLength.ssnNo}
                    onChangeText={this.onChangeText(index, 'social_security_number', "Tod")}
                    errorFlag={!item.ssnValidation}
                    errorText={item.ssnValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                  <GDateComponent
                    date={item.dob}
                    placeholder="MM-DD-YYYY"
                    maxDate={prevDate}
                    errorFlag={!item.dobValidationFlag}
                    errMsg={item.dobValidationMsg}
                    onDateChange={this.onChangeText(index, "dob", "Tod")}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder="abc@gmail.com"
                    keyboardType="email-address"
                    value={item.email}
                    onChangeText={this.onChangeText(index, 'email', "Tod")}
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
                    selectedDropDownValue={this.selectedDropDown(index, "beneficiaryType", "Tod")}
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
                    selectedDropDownValue={this.selectedDropDown(index, "relationship_To_Insured", "Tod")}
                    errorFlag={item.relationToAccOwnerFlag}
                    errorText={item.relationToAccOwnerValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                  <View style={styles.distributionView}>
                    <View style={styles.sliderView}>
                      <Slider
                        value={distributionValue / 100}
                        onValueChange={this.onChangeText(index, 'distribution_Per', "Tod")}
                      />
                    </View>
                    <Text style={styles.distributionValueTxt}>{`${distributionValue} %`}</Text>
                  </View>
                </View>
              </View>
            );
          })}


          {/* ----------------- Add Primary Beneficiary --------------------------- */}

          {newPrimaryBene && newPrimaryBene.map((item, index) => {
            let distributionValue = 0;
            if (this.isEmpty(item.distribution_Per)) {
              distributionValue = 0;
            } else {
              distributionValue = parseInt(item.distribution_Per,10);
            }
            return (
              <View key={this.generateNewTodBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                  <Text style={styles.titleHeaderText}>{editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>{gblStrings.accManagement.addPrimaryBeneficiary}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.paddingHorizontalStyle}>

                  <Text style={styles.lblTxt}>{gblStrings.accManagement.firstName}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    value={item.fname}
                    maxLength={gblStrings.maxLength.firstName}
                    onChangeText={this.onAddedNewPriTextChange(index, 'fname')}
                    errorFlag={!item.fnameValidation}
                    errorText={item.fnameValidationMsg}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.middleInitial}</Text>
                  <Text style={styles.lblTxt}>
                    <Text style={styles.lblTxt}>
                      {gblStrings.accManagement.middleInitial}
                    </Text>
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
                    placeholder="XXX-XX-XXXX"
                    keyboardType="numeric"
                    value={item.social_security_number}
                    // value={item.social_security_number.replace(/\d(?=\d{5})/g, "*")}
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
                    maxDate={prevDate}
                    errMsg={item.dobValidationMsg}
                    onDateChange={this.onAddedNewPriTextChange(index, "dob")}
                  />
                  <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                  <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder="abc@gmail.com"
                    keyboardType="email-address"
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
                        value={distributionValue / 100}
                        onValueChange={this.onAddedNewPriTextChange(index, 'distribution_Per')}
                      />
                    </View>
                    <Text style={styles.distributionValueTxt}>{`${distributionValue} %`}</Text>
                  </View>
                </View>
              </View>
            );
          })}


          {todBeneficiaryData && todBeneficiaryData.length > 0 &&
            (
              <TouchableOpacity style={styles.paddingStyleLeft} onPress={this.addNewPrimaryBene}>
                <Text style={styles.addPrimaryLink}>
                  {` + ${addPrimaryText}`}
                </Text>
              </TouchableOpacity>
            )
          }

          {isDistHigh ? <Text style={styles.errorMsg}>Total Distribution Percentage should be 100</Text> : null}

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
          <View>
            <View style={styles.titleHeadingView} onTouchStart={this.onClickInstructionToggle}>
              <Text style={styles.titleHeaderText}>{instructionIcon}</Text>
              <Text style={styles.titleHeaderText}>Instructions</Text>
            </View>
            <View style={styles.line} />
            <Collapsible collapsed={isInstructionCollapse} align="center">
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

          {/* ---------------------- Footer View -------------------- */}
          <GFooterSettingsComponent />
        </ScrollView>
      </View>
    );
  }
}

EditManageBenificiariesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  masterLookupStateData: PropTypes.instanceOf(Object),
  getPersonalCompositeData: PropTypes.instanceOf(Object),
  manageBeneficiaryData: PropTypes.instanceOf(Object),
  savedBeneficiaryData: PropTypes.func
};

EditManageBenificiariesComponent.defaultProps = {
  navigation: {},
  masterLookupStateData: {},
  getPersonalCompositeData: {},
  manageBeneficiaryData: {},
  savedBeneficiaryData: () => { }
};

export default EditManageBenificiariesComponent;
