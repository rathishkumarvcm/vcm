import React, {Component} from 'react';
import {Text, View, ScrollView,TouchableOpacity} from 'react-native';
import {styles} from './styles';
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
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import Slider from 'react-native-slider';
import {allow_Nine_Numeric, emailRegex} from '../../Constants/RegexConstants';

let contingentCount=0;
const beneficiary_type_data=[
  { "key": "key1", "title": "Individuals" },
  { "key": "key2", "title": "Other-Individual" },
];

let relationData=[
  {"key": "aunt_uncle", "value": "Aunt Uncle"},
  {"key": "bro_sis", "value": "Brother/Sister"}
];

// let suffixData=[
//   {"key": "ii", "value": "II"},
//   {"key": "iii", "value": "III"}
// ];


class EditManageBenificiariesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      bene_Data:{},
      isCollapsable:false,
      instructionIcon:"+",
      isInstructionCollapse:true,
      editPrimaryIcon:"-",
      isPrimaryCollapse:false,
      collapseIcon:"-",
      isContingentBene:false,
      distributionValue:0.2,
      primaryBeneficiaryData:[],
      contingentBeneficiaryData:[],
      todBeneficiaryData:[],
      validationPrimaryArray:[],
      validationContingentArray:[],
      validationTodArray:[],
      todValidationArray:[],
      addContingentText:'',
      todayDate:'',
      prevDate:'',
      addedBene:[],
      isAddTodBene:false,
      validationAddedTodArray:[]
    };
  }

  componentDidMount() {
    this.updateInitialDataToState();
    this.getDropDownData();
    this.getTodayDateFunc();
  }

  getTodayDateFunc=()=>{
      var date = new Date().getDate(); //Current Date
      var prevDate=date-1;
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      let today= month + "-" + date + "-" + year;
      let prev=month + "-" + prevDate +"-" +year;
      this.setState({todayDate:today});
      this.setState({prevDate:prev});
  }

  getDropDownData=()=>{
    let payload = [];
    const compositePayloadData = [
            "suffix",
            "relationship"
    ];

    for (let i = 0; i < compositePayloadData.length; i++) {
      let tempkey = compositePayloadData[i];
        if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
          payload.push(tempkey);
      }
    }

    this.props.getPersonalCompositeData(payload);
  }

  updateInitialDataToState=()=>{
    let data=this.props.navigation.getParam('acc_Data');
    contingentCount=data && data.contingent_Bene && data.contingent_Bene.length;
    if(contingentCount>0){
      this.setState({addContingentText:"Add Another Contingent Beneficiary"});
    } else {
      this.setState({addContingentText:"Add Contingent Beneficiary"});
    }
    this.setState({ bene_Data: data, primaryBeneficiaryData:data.primary_Bene, contingentBeneficiaryData:data.contingent_Bene ,todBeneficiaryData:data.transfer_on_Death_Bene });
    this.updateValidationArray(data.primary_Bene,data.contingent_Bene,data.transfer_on_Death_Bene);
  }

  updateValidationArray=(pri,con,tod)=>{
    let tempData={};
    tempData.ssnValidation=true;
    tempData.ssnValidationMsg='';
    tempData.ssnValidation=true;
    tempData.dobValidationFlag=true;
    tempData.dobValidationMsg='' ;
    tempData.emailValidation=true;
    tempData.emailValidationMsg='';
    tempData.beneTypeDropDown=false;
    tempData.beneTypeFlag=false;
    tempData.beneTypeValidationMsg='';
    tempData.relationToAccOwnerDropDown=false;
    tempData.relationToAccOwnerFlag=false;
    tempData.relationToAccOwnerValidationMsg='';
    tempData.distributionVlaidation=true;
    tempData.distributionValidationMsg='';
    let tempPriArrayLength=pri && pri.length,tempPriArray=[];
    let tempConArrayLength=con && con.length,tempConArray=[];
    let tempTodArrayLength=tod && tod.length,tempTodArray=[];
    for(let i=0;i<tempPriArrayLength;i++){
      tempPriArray.push(tempData);
    }
    for(let i=0;i<tempConArrayLength;i++){
      tempConArray.push(tempData);
    }
    for(var i=0;i<tempTodArrayLength;i++){
      tempTodArray.push(tempData);
    }
    this.setState({validationPrimaryArray:tempPriArray, validationContingentArray:tempConArray, validationTodArray:tempTodArray});
  }
  
  onClickCancel=()=>{
    this.props.navigation.navigate("manageBeneficiaries");
  }

  onClickNext=()=>{
    console.log("onCLickNext:::");
    this.props.navigation.navigate("verifyManageBeneficiaries",{mBData:this.state.bene_Data});
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  setInputRef = (inputComp) => (ref) => {
    this[inputComp] = ref;
  }

  isEmpty = (str) => {
    if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
        return true;
    } else {
        return false;
    }
  }

  onClickInstructionToggle = () => {
    this.setState({ isInstructionCollapse: !this.state.isInstructionCollapse });
    (this.state.isInstructionCollapse ? this.setState({ instructionIcon: "-" }) : this.setState({ instructionIcon: "+" }));
  };

  onClickPrimaryToggle = () => {
    this.setState({ isPrimaryCollapse: !this.state.isPrimaryCollapse });
    (this.state.isPrimaryCollapse ? this.setState({ editPrimaryIcon: "-" }) : this.setState({ editPrimaryIcon: "+" }));
  };

  onClickADDContingentBene=()=>{
    contingentCount++;
    let array=this.state.contingentBeneficiaryData;
    let obj={
      key:"key"+contingentCount,
      bene_Name:"",
      contract_Number:"123456789",
      relationship_To_Insured:"",
      accumulated_Value:"6322",
      distribution_Per:"",
      email:"",
      beneficiaryType:"",
      last_modified:"",
      social_security_number:""
    };
    array.push(obj);
    this.setState({contingentBeneficiaryData:array});
    
  }

  onSubmitEditing = (input) => text => {
      console.log("onSubmitEditing:::>" + text);
      input.focus();
  }

  selectPriBeneType=(index)=>()=>{
    this.onPrimaryValidationText(index,"beneTypeDropDown",!this.state.validationPrimaryArray.beneTypeDropDown);
  }

  selectedPriBeneTypeDropDownValue=(index,keyName)=>text=>{
    this.onPrimaryValidationText(index,"beneTypeDropDown",false);
    this.onPrimaryValidationText(index,"beneTypeFlag",false);
    let newItems=[...this.state.primaryBeneficiaryData];
    newItems[index][keyName]=text.title;
    this.setState({
      primaryBeneficiaryData:newItems
    });
  }

  selectPriRelation=(index)=>()=>{
    this.onPrimaryValidationText(index,"relationToAccOwnerDropDown",!this.state.validationPrimaryArray.relationToAccOwnerDropDown);
  }

  selectedPriRelationDropDownValue=(index,keyName)=>text=>{
    this.onPrimaryValidationText(index,"relationToAccOwnerDropDown",false);
    this.onPrimaryValidationText(index,"relationToAccOwnerFlag",false);
    let newItems=[...this.state.primaryBeneficiaryData];
    newItems[index][keyName]=text.value;
    this.setState({
      primaryBeneficiaryData:newItems
    });
  }

  selectConBeneType=(index)=>()=>{
    this.onContingentValidationText(index,"beneTypeDropDown",!this.state.validationContingentArray.beneTypeDropDown);
  }

  selectedConBeneTypeDropDownValue=(index,keyName)=>text=>{
    this.onContingentValidationText(index,"beneTypeDropDown",false);
    this.onContingentValidationText(index,"beneTypeFlag",false);
    let newItems=[...this.state.contingentBeneficiaryData];
    newItems[index][keyName]=text.title;
    this.setState({
      contingentBeneficiaryData:newItems
    });
  }

  selectConRelation=(index)=>()=>{
    this.onContingentValidationText(index,"relationToAccOwnerDropDown",!this.state.validationContingentArray.relationToAccOwnerDropDown);
  }

  selectedConRelationDropDownValue=(index,keyName)=>text=>{
    this.onContingentValidationText(index,"relationToAccOwnerDropDown",false);
    this.onContingentValidationText(index,"relationToAccOwnerFlag",false);
    let newItems=[...this.state.contingentBeneficiaryData];
    newItems[index][keyName]=text.value;
    this.setState({
      contingentBeneficiaryData:newItems
    });
  }

  selectTodBeneType=(index)=>()=>{
    this.onTodValidationText(index,"beneTypeDropDown",!this.state.validationTodArray.beneTypeDropDown);
  }

  selectedTodBeneTypeDropDownValue=(index,keyName)=>text=>{
    this.onTodValidationText(index,"beneTypeDropDown",false);
    this.onTodValidationText(index,"beneTypeFlag",false);
    let newItems=[...this.state.todBeneficiaryData];
    newItems[index][keyName]=text.title;
    this.setState({
      todBeneficiaryData:newItems
    });
  }

  selectTodRelation=(index)=>()=>{
    this.onTodValidationText(index,"relationToAccOwnerDropDown",!this.state.validationTodArray.relationToAccOwnerDropDown);
  }

  selectedTodRelationDropDownValue=(index,keyName)=>text=>{
    this.onTodValidationText(index,"relationToAccOwnerDropDown",false);
    this.onTodValidationText(index,"relationToAccOwnerFlag",false);
    let newItems=[...this.state.todBeneficiaryData];
    newItems[index][keyName]=text.value;
    this.setState({
      todBeneficiaryData:newItems
    });
  }

  selectAddedTodSuffix=(index)=>{
    this.onAddedTodValidationText(index,"suffixAddedTodDropDown",!this.state.addedBene.suffixAddedTodDropDown);
  }

  selectedAddedTodSuffixDropDownValue=(index,keyName)=>text=>{
    this.onAddedTodValidationText(index,"suffixAddedTodDropDown",false);
    this.onAddedTodValidationText(index,"suffixFlag",false);
    let newItems=[...this.state.addedBene];
    newItems[index][keyName]=text.title;
    this.setState({
      addedBene:newItems
    });
  }

  selectAddedTodBeneType=(index)=>()=>{
    this.onAddedTodValidationText(index,"beneTypeDropDown",!this.state.addedBene.beneTypeDropDown);
  }

  selectedTodAddedBeneTypeDropDownValue=(index,keyName)=>text=>{
    this.onAddedTodValidationText(index,"beneTypeDropDown",false);
    this.onAddedTodValidationText(index,"beneTypeFlag",false);
    let newItems=[...this.state.addedBene];
    newItems[index][keyName]=text.title;
    this.setState({
      addedBene:newItems
    });
  }

  selectAddedTodRelation=(index)=>()=>{
    this.onAddedTodValidationText(index,"relationToAccOwnerDropDown",!this.state.addedBene.relationToAccOwnerDropDown);
  }

  selectedAddedRelationDropDownValue=(index,value,keyName)=>text=>{
    this.onAddedTodValidationText(index,"relationToAccOwnerDropDown",false);
    this.onAddedTodValidationText(index,"relationToAccOwnerFlag",false);
    let newItems=[...this.state.addedBene];
    newItems[index][keyName]=text.value;
    this.setState({
      addedBene:newItems
    });
  }

  onPrimaryChangeText=(index, keyName)=>text =>{
    let newItems=[...this.state.primaryBeneficiaryData],value=text;
    if(keyName === "distribution_Per"){
      value=(text*100).toFixed(2).toString();
    }
    newItems[index][keyName]=value;
    this.setState({
      primaryBeneficiaryData:newItems
    });
  }

  onPrimaryValidationText=(index, keyName, value) =>{
    let newItems=[...this.state.validationPrimaryArray];
    newItems[index][keyName]=value;
    this.setState({
      validationPrimaryArray:newItems
    });
  }

  onContingentChangeText=(index, keyName)=>text =>{
    let newItems=[...this.state.contingentBeneficiaryData];
    let value=text;
    if(keyName === "distribution_Per"){
      value=(text*100).toFixed(2).toString();
    }
    newItems[index][keyName]=value;
    this.setState({
      contingentBeneficiaryData:newItems
    });
  }

  onContingentValidationText=(index, keyName,value) =>{
    let newItems=[...this.state.validationContingentArray];
    newItems[index][keyName]=value;
    this.setState({
      validationContingentArray:newItems
    });
  }
	
  onTodChangeText=(index, keyName)=>text =>{
    let newItems=[...this.state.todBeneficiaryData],value=text;
    if(keyName === "distribution_Per"){
      value=(text*100).toFixed(2).toString();
    }
    newItems[index][keyName]=value;
    this.setState({
      todBeneficiaryData:newItems
    });
  }

  onTodValidationText=(index, keyName,value) =>{
    let newItems=[...this.state.validationTodArray];
    newItems[index][keyName]=value;
    this.setState({
      validationTodArray:newItems
    });
  }

  onAddedTodChangeText=(index, keyName)=>text =>{
    let newItems=[...this.state.addedBene],value=text;
    if(keyName === "distribution_Per"){
      value=(text*100).toFixed(2).toString();
    }
    newItems[index][keyName]=value;
    this.setState({
      addedBene:newItems
    });
  }

  onAddedTodValidationText=(index, keyName,value) =>{
    let newItems=[...this.state.addedBene];
    newItems[index][keyName]=value;
    this.setState({
      addedBene:newItems
    });
  }

  onValidate=()=>{
    console.log("onValidate:::::");
    var isPriValidationSuccess=true,isConValidationSuccess=true,isTodValidationSuccess=true;
    this.updateValidationArray(this.state.primaryBeneficiaryData,this.state.contingentBeneficiaryData,this.state.todBeneficiaryData);
    if(this.state.primaryBeneficiaryData){
      isPriValidationSuccess=false;
      if (!this.validateEachPriFields()) {
        isPriValidationSuccess = false;
      } else {
        isPriValidationSuccess = true;
      }
    }
    if(this.state.contingentBeneficiaryData){
      isConValidationSuccess=false;
      if (!this.validateEachConFields()) {
        isConValidationSuccess = false;
      } else {
        isConValidationSuccess = true;
      }
    }
    if(this.state.todBeneficiaryData){
      isTodValidationSuccess=false;
      if (!this.validateEachTodFields()) {
        isTodValidationSuccess = false;
      } else {
        isTodValidationSuccess = true;
      }
    }
    if(isPriValidationSuccess && isConValidationSuccess && isTodValidationSuccess){
      console.log("onValidateSuccess:::::");
      this.onClickNext();
    }
  }

  validateEachPriFields=()=>{
    let isErrMsg = false;
    let isValidationSuccess = false;

    for(let i=0;i<this.state.primaryBeneficiaryData.length;i++){
      if (!this.isEmpty(this.state.primaryBeneficiaryData[i].social_security_number)) {
        let validate = allow_Nine_Numeric.test(this.state.primaryBeneficiaryData[i].social_security_number);
        this.onPrimaryValidationText(i,"ssnValidation",validate);
        this.onPrimaryValidationText(i,"ssnValidationMsg",gblStrings.accManagement.ssnNoFormat);
        isErrMsg = !validate;
      } else {
        this.onPrimaryValidationText(i,"ssnValidation",true);
        isErrMsg = false;
      }
      if (!this.isEmpty(this.state.primaryBeneficiaryData[i].email)) {
        let validate = emailRegex.test(this.state.primaryBeneficiaryData[i].email);
        this.onPrimaryValidationText(i,"emailValidation",validate);
        this.onPrimaryValidationText(i,"emailValidation",gblStrings.accManagement.emailformat);
        isErrMsg = !validate;
      } else {
        this.onPrimaryValidationText(i,"emailValidation",true);
        isErrMsg = false;
      }
      if (this.state.primaryBeneficiaryData[i].relationship_To_Insured === '') {
        this.onPrimaryValidationText(i,"relationToAccOwnerFlag",true);
        this.onPrimaryValidationText(i,"relationToAccOwnerValidationMsg",gblStrings.accManagement.emptyRelationShipMsg);
        isErrMsg=true;
      }
      if (this.state.primaryBeneficiaryData[i].beneficiaryType === '') {
        this.onPrimaryValidationText(i,"beneTypeFlag",true);
        this.onPrimaryValidationText(i,"beneTypeValidationMsg",gblStrings.accManagement.emptyBeneficiaryType);
        isErrMsg=true;
      }
      // if (this.state.primaryBeneficiaryData[i].dob === '') {
      //   this.onPrimaryValidationText(i,dobValidationFlag,false);
      //   this.onPrimaryValidationText(i,dobValidationFlag,gblStrings.accManagement.emptyDateOfBirth);
      //   isErrMsg=true;
      // } else {
      //   if(this.state.primaryBeneficiaryData[i].dob >= this.state.todayDate){
      //     this.onPrimaryValidationText(i,dobValidationFlag,false);
      //     this.onPrimaryValidationText(i,dobValidationFlag,gblStrings.accManagement.validDateOfBirthMsg);
      //     isErrMsg=true;
      //   }
      // } 
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    } 

    return isValidationSuccess;
  }

  validateEachTodFields=()=>{
    let isErrMsg = false;
    let isValidationSuccess = false;
    for(let i=0;i<this.state.todBeneficiaryData.length;i++){
      if (!this.isEmpty(this.state.todBeneficiaryData[i].social_security_number)) {
        let validate = allow_Nine_Numeric.test(this.state.todBeneficiaryData[i].social_security_number);
        this.onTodValidationText(i,"ssnValidation",validate);
        this.onTodValidationText(i,"ssnValidationMsg",gblStrings.accManagement.ssnNoFormat);
        isErrMsg = !validate;
      } else {
        this.onTodValidationText(i,"ssnValidation",true);
        isErrMsg=false;
      }
      if (!this.isEmpty(this.state.todBeneficiaryData[i].email)) {
        let validate = emailRegex.test(this.state.todBeneficiaryData[i].email);
        this.onTodValidationText(i,"emailValidation",validate);
        this.onTodValidationText(i,"emailValidation",gblStrings.accManagement.emailformat);
        isErrMsg = !validate;
      } else {
        this.onTodValidationText(i,"emailValidation",true);
        isErrMsg=false;
      }
      if (this.state.todBeneficiaryData[i].relationship_To_Insured === '') {
        this.onTodValidationText(i,"relationToAccOwnerFlag",true);
        this.onTodValidationText(i,"relationToAccOwnerValidationMsg",gblStrings.accManagement.emptyRelationShipMsg);
        isErrMsg=true;
      } 
      if (this.state.todBeneficiaryData[i].beneficiaryType === '') {
        this.onTodValidationText(i,"beneTypeFlag",true);
        this.onTodValidationText(i,"beneTypeValidationMsg",gblStrings.accManagement.emptyBeneficiaryType);
        isErrMsg=true;
      } 
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  }

  validateEachConFields=()=>{
    let isErrMsg = false;
    let isValidationSuccess = false;

    for(let i=0;i<this.state.contingentBeneficiaryData.length;i++){
      if (!this.isEmpty(this.state.contingentBeneficiaryData[i].social_security_number)) {
        let validate = allow_Nine_Numeric.test(this.state.contingentBeneficiaryData[i].social_security_number);
        this.onContingentValidationText(i,"ssnValidation",validate);
        this.onContingentValidationText(i,"ssnValidationMsg",gblStrings.accManagement.ssnNoFormat);
        isErrMsg = !validate;
      } else {
        this.onContingentValidationText(i,"ssnValidation",true);
        isErrMsg = false;
      }
      if (!this.isEmpty(this.state.contingentBeneficiaryData[i].email)) {
        let validate = emailRegex.test(this.state.contingentBeneficiaryData[i].email);
        this.onContingentValidationText(i,"emailValidation",validate);
        this.onContingentValidationText(i,"emailValidation",gblStrings.accManagement.emailformat);
        isErrMsg = !validate;
      } else {
        this.onContingentValidationText(i,"emailValidation",true);
        isErrMsg = false;
      }
      if (this.state.contingentBeneficiaryData[i].relationship_To_Insured === '') {
        this.onContingentValidationText(i,"relationToAccOwnerFlag",true);
        this.onContingentValidationText(i,"relationToAccOwnerValidationMsg",gblStrings.accManagement.emptyRelationShipMsg);
        isErrMsg=true;
      } 
      if (this.state.contingentBeneficiaryData[i].beneficiaryType === '') {
        this.onContingentValidationText(i,"beneTypeFlag",true);
        this.onContingentValidationText(i,"beneTypeValidationMsg",gblStrings.accManagement.emptyBeneficiaryType);
        isErrMsg=true;
      } 
    }
    if (!isErrMsg) {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  }

  onClickAddTodBene=()=>{
    let array=this.state.addedBene;
    let obj={
      key:"key"+parseInt(this.state.todBeneficiaryData.length)+1,
      fname:"",
      mname:"",
      lname:"",
      suffix:"",
      contract_Number:"123456789",
      relationship_To_Insured:"",
      accumulated_Value:"6322",
      distribution_Per:"",
      dob:"",
      email:"",
      beneficiaryType:"",
      last_modified:this.state.todayDate,
      social_security_number:"",
      fnameValidation:true,
      fnameValidationMsg:'',
      lnameValidation:true,
      lnameValidationMsg:"",
      suffixDropDown:false,
      suffixFlag:false,
      suffixValidationMsg:'',
      ssnValidation:true,
      ssnValidationMsg:'',
      dobValidationFlag:true,
      dobValidationMsg:'',
      emailValidation:true,
      emailValidationMsg:'',
      beneTypeDropDown:false,
      beneTypeFlag:false,
      beneTypeValidationMsg:'',
      relationToAccOwnerDropDown:false,
      relationToAccOwnerFlag:false,
      relationToAccOwnerValidationMsg:'',
      distributionVlaidation:true,
      distributionValidationMsg:'',
    };
    array.push(obj);
    console.log("added array",array);
    this.setState({addedBene:array});
    this.setState({isAddTodBene:true});
  }

  generateEditPrimaryBeneficiaryKeyExtractor = (item) => { return (""+item.key); };
  generateContingentBeneficiaryKeyExtractor = (item) => { return (""+item.key); };

  render() {
    // if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.suffix && this.props.masterLookupStateData.suffix.value) {
    //   suffixData=this.props.masterLookupStateData.suffix.value;
    // }
    if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.relationship && this.props.masterLookupStateData.relationship.value) {
      relationData=this.props.masterLookupStateData.relationship.value;
    }
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={this.props.navigation} />
        <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef} >
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageBenificiariesHeadline}>
              {gblStrings.accManagement.manageBeneficiaries}
            </Text>
          </View>
          <View style={styles.line} />

          <View style={styles.contentViewInternal} >
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{this.state.bene_Data.account_Type}</Text>
              <Text style={styles.shortContentValueText}>{this.state.bene_Data.account_Name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.registrationOwner}</Text>
              <Text style={styles.shortContentValueText}>{this.state.bene_Data.account_Name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.accountNumber}</Text>
              <Text style={styles.shortContentValueText}>{this.state.bene_Data.account_Number}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.balance}</Text>
              <Text style={styles.shortContentValueText}>{"$ "+this.state.bene_Data.accumulated_Value}</Text>
            </View>
          </View>

          {/*-------------------- Edit Primary Details --------------------------*/}

          {this.state.primaryBeneficiaryData && this.state.primaryBeneficiaryData.map((item,index)=>{
            return(
              <View key={this.generateEditPrimaryBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                  <View style={styles.titleHeadingView}>
                      <Text style={styles.titleHeaderText}>{this.state.editPrimaryIcon}</Text>
                      <Text style={styles.titleHeaderText}>{gblStrings.accManagement.editPrimaryBene}</Text>
                  </View>
                  <View style={styles.line} /> 
                  <Collapsible collapsed={this.state.isPrimaryCollapse} align="center">
                      <View style={styles.paddingHorizontalStyle}>
                        <View style={[styles.flexDirectionRowStyle, styles.marginStyle]}>
                          <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                          <Text style={[styles.shortContentValueText, styles.paddingStyleLeft]}>{item.bene_Name}</Text>
                        </View>
                        <Text style={styles.lblTxt}>{gblStrings.accManagement.socialSecurityNo}</Text>
                        <GInputComponent
                          inputref={this.setInputRef("primarySsn"+index)}
                          propInputStyle={styles.customTxtBox}
                          placeholder={'XXX-XX-XXXX'}
                          keyboardType={'numeric'}
                          value={item.social_security_number}
                          maxLength={gblStrings.maxLength.ssnNo}
                          onChangeText={this.onPrimaryChangeText(index, 'social_security_number')}
                          errorFlag={!this.state.validationPrimaryArray[index].ssnValidation}
                          errorText={this.state.validationPrimaryArray[index].ssnValidationMsg}
                        />
                        <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                        <GDateComponent 
                          inputref={this.setInputRef("dateofBirth"+index)}
                          date={item.dob}
                          placeholder="MM/DD/YYYY"
                          errorFlag={!this.state.validationPrimaryArray[index].dobValidationFlag}
                          errMsg={this.state.validationPrimaryArray[index].dobValidationMsg}
                          onDateChange={this.onPrimaryChangeText(index,"dob")}
                        />
                        <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                        <GInputComponent
                          inputref={this.setInputRef("email"+index)}
                          propInputStyle={styles.customTxtBox}
                          placeholder={'abc@gmail.com'}
                          keyboardType={'email-address'}
                          value={item.email}
                          onChangeText={this.onPrimaryChangeText(index, 'email')}
                          errorFlag={!this.state.validationPrimaryArray[index].emailValidation}
                          errorText={this.state.validationPrimaryArray[index].emailValidationMsg}
                        />
                        <GDropDownComponent 
                          dropDownName={gblStrings.accManagement.beneficiary_type}
                          dropDownTextName={styles.lblTxt} 
                          data={beneficiary_type_data}
                          itemToDisplay={"title"}
                          changeState={this.selectPriBeneType(index)}
                          showDropDown={this.state.validationPrimaryArray[index].beneTypeDropDown}
                          dropDownValue={item.beneficiaryType}
                          selectedDropDownValue={this.selectedPriBeneTypeDropDownValue(index,"beneficiaryType")}
                          errorFlag={this.state.validationPrimaryArray[index].beneTypeFlag}
                          errorText={this.state.validationPrimaryArray[index].beneTypeValidationMsg}
                        />
                        <GDropDownComponent 
                          dropDownName={gblStrings.accManagement.relationToOwner}
                          dropDownTextName={styles.lblTxt} 
                          data={relationData}
                          itemToDisplay={"value"}
                          changeState={this.selectPriRelation(index)}
                          showDropDown={this.state.validationPrimaryArray[index].relationToAccOwnerDropDown}
                          dropDownValue={item.relationship_To_Insured}
                          selectedDropDownValue={this.selectedPriRelationDropDownValue(index,"relationship_To_Insured")}
                          errorFlag={this.state.validationPrimaryArray[index].relationToAccOwnerFlag}
                          errorText={this.state.validationPrimaryArray[index].relationToAccOwnerValidationMsg}
                        />
                        <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                        <View style={styles.distributionView}>
                          <Slider
                              value={parseInt(item.distribution_Per)/100}
                              onValueChange={this.onPrimaryChangeText(index, 'distribution_Per')}
                          />
                        </View>
                      
                      </View>
                  </Collapsible>
              </View>
            );
          })}

          
          {/*-----------------Edit Contingent Beneficiary---------------------------*/}

          {this.state.contingentBeneficiaryData && this.state.contingentBeneficiaryData.map((item,index)=>{
            return(
              <View key={this.generateContingentBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView} >
                  <Text style={styles.titleHeaderText}>{this.state.editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>{gblStrings.accManagement.editContingentBene}</Text>
                </View>
                <View style={styles.line} /> 
                <Collapsible collapsed={this.state.isPrimaryCollapse} align="center">
                  <View style={styles.paddingHorizontalStyle}>
                    <View style={[styles.flexDirectionRowStyle, styles.marginStyle]}>
                      <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                      <Text style={[styles.shortContentValueText, styles.paddingStyleLeft]}>{item.bene_Name}</Text>
                    </View>
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.socialSecurityNo}</Text>
                    <GInputComponent
                      inputref={this.setInputRef("conSsn"+index)}
                      propInputStyle={styles.customTxtBox}
                      placeholder={'XXX-XX-XXXX'}
                      keyboardType={'numeric'}
                      value={item.social_security_number}
                      maxLength={gblStrings.maxLength.ssnNo}
                      onChangeText={this.onContingentChangeText(index, 'social_security_number')}
                      errorFlag={!this.state.validationContingentArray[index].ssnValidation}
                      errorText={this.state.validationContingentArray[index].ssnValidationMsg}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                    <GDateComponent 
                      inputref={this.setInputRef("conDateofBirth"+index)}
                      date={item.dob}
                      placeholder="MM/DD/YYYY"
                      errorFlag={this.state.validationContingentArray[index].dobValidation}
                      errMsg={this.state.validationContingentArray[index].dobValidationMsg}
                      onDateChange={this.onContingentChangeText(index,"dob")}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                    <GInputComponent
                      inputref={this.setInputRef("email")}
                      propInputStyle={styles.customTxtBox}
                      placeholder={'abc@gmail.com'}
                      keyboardType={'email-address'}
                      value={item.email}
                      onChangeText={this.onContingentChangeText(index, 'email')}
                      errorFlag={!this.state.validationContingentArray[index].emailValidation}
                      errorText={this.state.validationContingentArray[index].emailValidationMsg}
                    />
                    <GDropDownComponent 
                      dropDownName={gblStrings.accManagement.beneficiary_type}
                      dropDownTextName={styles.lblTxt} 
                      data={beneficiary_type_data}
                      itemToDisplay={"title"}
                      changeState={this.selectConBeneType(index)}
                      showDropDown={this.state.validationContingentArray[index].beneTypeDropDown}
                      dropDownValue={item.beneficiaryType}
                      selectedDropDownValue={this.selectedConBeneTypeDropDownValue(index,"beneficiaryType")}
                      errorFlag={this.state.validationContingentArray[index].beneTypeFlag}
                      errorText={this.state.validationContingentArray[index].beneTypeValidationMsg}
                    />
                    <GDropDownComponent 
                      dropDownName={gblStrings.accManagement.relationToOwner}
                      dropDownTextName={styles.lblTxt} 
                      data={relationData}
                      itemToDisplay={"value"}
                      changeState={this.selectConRelation(index)}
                      showDropDown={this.state.validationPrimaryArray[index].relationToAccOwnerDropDown}
                      dropDownValue={item.relationship_To_Insured}
                      selectedDropDownValue={this.selectedConRelationDropDownValue(index,"relationship_To_Insured")}
                      errorFlag={this.state.validationContingentArray[index].relationToAccOwnerFlag}
                      errorText={this.state.validationContingentArray[index].relationToAccOwnerValidationMsg}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                    <View style={styles.distributionView}>
                      <Slider
                        value={parseInt(item.distribution_Per)/100}
                        onValueChange={this.onContingentChangeText(index, "distribution_Per")}
                      />
                    </View>
                  </View>
                </Collapsible>
              </View>
            );
          })}

          {!this.state.todBeneficiaryData && 
            <TouchableOpacity style={styles.paddingStyleLeft} onPress={this.onClickADDContingentBene}>
              <Text style={styles.addPrimaryLink}>
                {' + ' + this.state.addContingentText}
              </Text>
            </TouchableOpacity>
          }

          {/*-----------------Edit Transfer On Death Beneficiary---------------------------*/}


          {this.state.todBeneficiaryData && this.state.todBeneficiaryData.map((item,index)=>{
            return(
              <View key={this.generateContingentBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView} >
                  <Text style={styles.titleHeaderText}>{this.state.editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>{gblStrings.accManagement.editTodBene}</Text>
                </View>
                <View style={styles.line} /> 
                <Collapsible collapsed={this.state.isPrimaryCollapse} align="center">
                  <View style={styles.paddingHorizontalStyle}>
                    <View style={[styles.flexDirectionRowStyle, styles.marginStyle]}>
                      <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                      <Text style={[styles.shortContentValueText, styles.paddingStyleLeft]}>{item.bene_Name}</Text>
                    </View>
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.socialSecurityNo}</Text>
                    <GInputComponent
                      inputref={this.setInputRef("todSsn"+index)}
                      propInputStyle={styles.customTxtBox}
                      placeholder={'XXX-XX-XXXX'}
                      keyboardType={'numeric'}
                      value={item.social_security_number}
                      maxLength={gblStrings.maxLength.ssnNo}
                      onChangeText={this.onTodChangeText(index, 'social_security_number')}
                      errorFlag={!this.state.validationTodArray[index].ssnValidation}
                      errorText={this.state.validationTodArray[index].ssnValidationMsg}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                    <GDateComponent 
                      inputref={this.setInputRef("todDateofBirth"+index)}
                      date={item.dob}
                      placeholder="MM/DD/YYYY"
                      errorFlag={this.state.validationTodArray[index].dobValidation}
                      errMsg={this.state.validationTodArray[index].dobValidationMsg}
                      onDateChange={this.onTodChangeText(index,"dob")}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                    <GInputComponent
                      inputref={this.setInputRef("email")}
                      propInputStyle={styles.customTxtBox}
                      placeholder={'abc@gmail.com'}
                      keyboardType={'email-address'}
                      value={item.email}
                      onChangeText={this.onTodChangeText(index, 'email')}
                      errorFlag={!this.state.validationTodArray[index].emailValidation}
                      errorText={this.state.validationTodArray[index].emailValidationMsg}
                    />
                    <GDropDownComponent 
                      dropDownName={gblStrings.accManagement.beneficiary_type}
                      dropDownTextName={styles.lblTxt} 
                      data={beneficiary_type_data}
                      itemToDisplay={"title"}
                      changeState={this.selectTodBeneType(index)}
                      showDropDown={this.state.validationTodArray[index].beneTypeDropDown}
                      dropDownValue={item.beneficiaryType}
                      selectedDropDownValue={this.selectedTodBeneTypeDropDownValue(index,"beneficiaryType")}
                      errorFlag={this.state.validationTodArray[index].beneTypeFlag}
                      errorText={this.state.validationTodArray[index].beneTypeValidationMsg}
                    />
                    <GDropDownComponent 
                      dropDownName={gblStrings.accManagement.relationToOwner}
                      dropDownTextName={styles.lblTxt} 
                      data={relationData}
                      itemToDisplay={"value"}
                      changeState={this.selectTodRelation(index)}
                      showDropDown={this.state.validationTodArray[index].relationToAccOwnerDropDown}
                      dropDownValue={item.relationship_To_Insured}
                      selectedDropDownValue={this.selectedRelationDropDownValue(index,"relationship_To_Insured")}
                      errorFlag={this.state.validationTodArray[index].relationToAccOwnerFlag}
                      errorText={this.state.validationTodArray[index].relationToAccOwnerValidationMsg}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                    <View style={styles.distributionView}>
                      <Slider
                        value={parseInt(item.distribution_Per)/100}
                        onValueChange={this.onTodChangeText(index, "distribution_Per")}
                      />
                    </View>
                  </View>
                </Collapsible>
              </View>
            );
          })}


          {/*-----------------Add Transfer On Death Beneficiary---------------------------*/}

          {/* {this.state.addedBene && this.state.addedBene.map((item,index)=>{
            console.log("in added array view",item,index)
            return(
              <View key={this.generateContingentBeneficiaryKeyExtractor} style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView} >
                  <Text style={styles.titleHeaderText}>{this.state.editPrimaryIcon}</Text>
                  <Text style={styles.titleHeaderText}>{gblStrings.accManagement.addPrimaryBeneficiary}</Text>
                </View>
                <View style={styles.line} /> 
                  <View style={styles.paddingHorizontalStyle}>
                    
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.firstName}</Text>
                    <GInputComponent
                      inputref={this.setInputRef("todFirst"+index)}
                      propInputStyle={styles.customTxtBox}
                      value={item.fname}
                      maxLength={gblStrings.maxLength.firstName}
                      onChangeText={this.onAddedTodChangeText(index, 'fname')}
                      errorFlag={!item.fnameValidation}
                      errorText={item.fnameValidationMsg}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.middleInitial}</Text>
                    <GInputComponent
                      inputref={this.setInputRef("todMiddle"+index)}
                      propInputStyle={styles.customTxtBox}
                      value={item.mname}
                      maxLength={gblStrings.maxLength.middleInitial}
                      onChangeText={this.onAddedTodChangeText(index, 'mname')}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.lastName}</Text>
                    <GInputComponent
                      inputref={this.setInputRef("todLast"+index)}
                      propInputStyle={styles.customTxtBox}
                      value={item.lname}
                      maxLength={gblStrings.maxLength.lastName}
                      onChangeText={this.onAddedTodChangeText(index, 'lname')}
                      errorFlag={!item.lnameValidation}
                      errorText={item.lnameValidationMsg}
                    />
                    <GDropDownComponent 
                      dropDownName={gblStrings.accManagement.suffixOptional}
                      dropDownTextName={styles.lblTxt} 
                      data={suffixData}
                      itemToDisplay={"value"}
                      changeState={this.selectAddedTodSuffix(index)}
                      showDropDown={item.suffixAddedTodDropDown}
                      dropDownValue={item.suffix}
                      selectedDropDownValue={(value)=>this.selectedAddedTodSuffixDropDownValue(index,"suffix")}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
                    <GDateComponent 
                      inputref={this.setInputRef("todAddedDateofBirth"+index)}
                      date={item.dob}
                      placeholder="MM/DD/YYYY"
                      errorFlag={item.dobValidation}
                      errMsg={item.dobValidationMsg}
                      onDateChange={this.onAddedTodChangeText(index,"dob")}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.emailAddress}</Text>
                    <GInputComponent
                      inputref={this.setInputRef("todAddedemail"+index)}
                      propInputStyle={styles.customTxtBox}
                      placeholder={'abc@gmail.com'}
                      keyboardType={'email-address'}
                      value={item.email}
                      onChangeText={this.onAddedTodChangeText(index, 'email')}
                      errorFlag={!item.emailValidation}
                      errorText={item.emailValidationMsg}
                    />
                    <GDropDownComponent 
                      dropDownName={gblStrings.accManagement.beneficiary_type}
                      dropDownTextName={styles.lblTxt} 
                      data={beneficiary_type_data}
                      itemToDisplay={"title"}
                      changeState={this.selectAddedTodBeneType(index)}
                      showDropDown={item.beneTypeDropDown}
                      dropDownValue={item.beneficiaryType}
                      selectedDropDownValue={this.selectedTodAddedBeneTypeDropDownValue(index,"beneficiaryType")}
                      errorFlag={item.beneTypeFlag}
                      errorText={item.beneTypeValidationMsg}
                    />
                    <GDropDownComponent 
                      dropDownName={gblStrings.accManagement.relationToOwner}
                      dropDownTextName={styles.lblTxt} 
                      data={relationData}
                      itemToDisplay={"value"}
                      changeState={this.selectAddedTodRelation(index)}
                      showDropDown={item.relationToAccOwnerDropDown}
                      dropDownValue={item.relationship_To_Insured}
                      selectedDropDownValue={this.selectedAddedRelationDropDownValue(index,"relationship_To_Insured")}
                      errorFlag={item.relationToAccOwnerFlag}
                      errorText={item.relationToAccOwnerValidationMsg}
                    />
                    <Text style={styles.lblTxt}>{gblStrings.accManagement.distributionPercentage}</Text>
                    <View style={styles.distributionView}>
                      <Slider
                        value={parseInt(item.distribution_Per)/100}
                        onValueChange={this.onAddedTodChangeText(index, "distribution_Per")}
                      />
                    </View>
                  </View>
              </View>
            );
          })} */}


          {this.state.todBeneficiaryData && 
            <TouchableOpacity style={styles.paddingStyleLeft} >
              <Text style={styles.addPrimaryLink}>
                {' + ' + gblStrings.accManagement.addPrimaryBeneficiary}
              </Text>
            </TouchableOpacity>
          }

          {/*----------------- Buttons Group---------------------------*/}
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
                <Text style={styles.titleHeaderText}>{"Instructions"}</Text>
            </View>
            <View style={styles.line} />
            <Collapsible collapsed={this.state.isInstructionCollapse} align="center">
              <View style={styles.enterDetailsView}>
                <View style={styles.paddingHorizontalView}>
                  <Text style={styles.subHeading}>
                    {gblStrings.accManagement.accBeneficiaryContent}
                  </Text>
                  <View style={styles.dataAccountBeneficiary}>
                    <View style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                      <View style={styles.noteIconView}>
                        <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsPrimaryDisc}
                      </Text>
                    </View>
                    <View style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                      <View style={styles.noteIconView}>
                        <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsContingentBene}
                      </Text>
                    </View>
                    <View style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                      <View style={styles.noteIconView}>
                        <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsIfYouWish}
                      </Text>
                    </View>
                    <View style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                      <View style={styles.noteIconView}>
                      <GIcon name="circle" type="entypo" size={10} color="#707070" />
                      </View>
                      <Text style={styles.disclaimerTxt}>
                        {gblStrings.accManagement.enterDetailsIfNoBene}
                      </Text>
                    </View>
                    <View style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
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

          {/*--------------------------- Footer View --------------------------------*/}
          <View style={styles.footerView} />
          <View style={styles.settingsBorder} />
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

EditManageBenificiariesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  masterLookupStateData: PropTypes.instanceOf(Object),
  getPersonalCompositeData: PropTypes.instanceOf(Object)
};

export default EditManageBenificiariesComponent;
