import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from './styles';
import {
  GHeaderComponent,
  GInputComponent,
  GIcon,
  GFooterComponent,
  GButtonComponent,
  GDropDownComponent
} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import {zipCodeRegex} from '../../Constants/RegexConstants';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';

const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
const phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
const monthData=[
    { "key": "key1", "title": "Jan" },
    { "key": "key2", "title": "Feb" },
    { "key": "key3", "title": "Mar" },
    { "key": "key4", "title": "April" },
    { "key": "key5", "title": "March" },
    { "key": "key6", "title": "June" },
    { "key": "key7", "title": "July" },
    { "key": "key8", "title": "Aug" },
    { "key": "key9", "title": "Sept" },
    { "key": "key10", "title": "Oct" },
    { "key": "key11", "title": "Nov" },
    { "key": "key12", "title": "Dec" }
];

let yearData=[];

const dateData=[
    { "key": "key1", "title": "01" },
    { "key": "key2", "title": "02" },
    { "key": "key3", "title": "03" },
    { "key": "key4", "title": "04" },
    { "key": "key5", "title": "05" },
    { "key": "key6", "title": "06" },
    { "key": "key7", "title": "07" },
    { "key": "key8", "title": "08" },
    { "key": "key9", "title": "09" },
    { "key": "key10", "title": "10" },
    { "key": "key11", "title": "11" },
    { "key": "key12", "title": "12" },
    { "key": "key13", "title": "13" },
    { "key": "key14", "title": "14" },
    { "key": "key15", "title": "15" },
    { "key": "key16", "title": "16" },
    { "key": "key17", "title": "17" },
    { "key": "key18", "title": "18" },
    { "key": "key19", "title": "19" },
    { "key": "key20", "title": "20" },
    { "key": "key21", "title": "21" },
    { "key": "key22", "title": "22" },
    { "key": "key23", "title": "23" },
    { "key": "key24", "title": "24" },
    { "key": "key25", "title": "25" },
    { "key": "key26", "title": "26" },
    { "key": "key27", "title": "27" },
    { "key": "key28", "title": "28" },
    { "key": "key29", "title": "29" },
    { "key": "key30", "title": "30" },
    { "key": "key31", "title": "31" }
];

const nameDobData=[
  { "key": "key1", "title": "option1" },
  { "key": "key2", "title": "option2" },
  { "key": "key3", "title": "option3" },
];

let suffixData=[
  {"key": "ii", "value": "II"},
  {"key": "iii", "value": "III"},
  {"key": "iv", "value": "IV"},
  {"key": "cpa", "value": "CPA"},
  {"key": "dds", "value": "DDS"},
  {"key": "esq", "value": "Esq"},
  {"key": "jd", "value": "JD"},
  {"key": "jr", "value": "Jr"},
  {"key": "lld", "value": "LLD"},
  {"key": "md", "value": "MD"},
  {"key": "phd", "value": "PHd"},
  {"key": "ret", "value": "Ret"},
  {"key": "rn", "value": "RN"},
  {"key": "sr", "value": "Sr"},
  {"key": "do", "value": "DO"}
];

let relationData=[
  {"key": "aunt_uncle", "value": "Aunt Uncle"},
  {"key": "bro_sis", "value": "Brother/Sister"},
 {"key": "bro_sis_in_law", "value": "Brother/Sister In Law"},
 {"key": "child", "value": "Child"},
  {"key": "cohabitant", "value": "Cohabitant"},
 {"key": "cohab_child", "value": "Cohabitant Child "},
 {"key": "cousin", "value": "Cousin"},
 {"key": "fat_mot_in_law", "value": "Father/Mother In Law"},
 {"key": "fiance", "value": "Fiancé"},
 {"key": "foster_child", "value": "Foster Child"},
 {"key": "foster_parent", "value": "Foster Parent"},
 {"key": "grand_child", "value": "Grandchild"},
 {"key": "grand_parent", "value": "Grandparent"},
 {"key": "legal_guard", "value": "Legal Guardian"},
 {"key": "legal_ward", "value": "Legal Ward"},
 {"key": "niece_nephew", "value": "Niece/Nephew"},
 {"key": "parent", "value": "Parent"},
 {"key": "son_daug_in_law", "value": "Son/Daughter In Law"},
 {"key": "spouse", "value": "Spouse"},
 {"key": "step_child", "value": "Step Child"},
 {"key": "step_mot_fat", "value": "Step Mother/Father"},
 {"key": "step_sis_bro", "value": "Step Sister/Brother"}
];

const zipcodeData=[
  {
      "zip":"11111",
      "city": 'Phoenix',
      "state":'Arizona (AZ)'
  },
  {
      "zip":"00000",
      "city": "Little Rock",
      "state":'Arkansas (AR)'
  },
  {
      "zip":"22222",
      "city": "Beverly Hills",
      "state":'California (CA)'
  }
];

const MultipleAccountData = [
  {
    "accountType": 'Traditional IRA',
    "contractNumber": '123456789',
    "dateModified": '10/10/2018',
    "balance": '$23512',
    "name":"Lorem Ipsum",
    "owner":"Lorem Name",
    "primaryBeneficiary": [
      {
        "name":'Lorem Name',
        "distribution": '100',
        "dob": '10/10/2018',
        "relationToOwner":"Wife"
      }
    ],
    "contingentBeneficiary":[
      {
        "name":'Lorem Name',
        "relationToOwner": 'Son',
        "distribution": '100%',
        "dob": '01/05/1962'
    }
    ],
  },
  {
    "accountType": 'Roth IRA',
    "contractNumber": '123456789',
    "dateModified": '10/10/2018',
    "balance": '$23512',
    "name":"Lorem Ipsum",
    "owner":"Lorem Name",
    "primaryBeneficiary": [
      {
        "name":'Lorem Name',
        "distribution": '100',
        "dob": '01/05/1962',
        "relationToOwner":"Wife",
        "balance": '$23512',
      }
    ],
    "contingentBeneficiary":[
      {
        "name":'Lorem Name',
        "relationToOwner": 'Son',
        "distribution": '100%',
        "dob": '01/05/1962'
      }
    ],
  },
];

class ManageBenificiariesComponent extends Component {
  constructor(props) {
    super(props);
    //set true to isLoading if data for this screen yet to be received and wanted to show loader.
    this.state = {
      isLoading: false,
      isMainView: true,
      isPrimaryBenificiary: false,
      isContingentBenificiary: false,
      account_Type:"",
      contingentData:[],
      manageBeneficiaries: MultipleAccountData,
      //contingent Beneficiary fields
      contingent: {
        nameDob: '',
        relationToOwner: '',
        distribution: '',
        firstName: '',
        middleInitial: '',
        lastName: '',
        suffix: '',
        ssn: '',
        addrLine1: '',
        addrLine2: '',
        workTelephone: '',
        city: '',
        stateValue: '',
        zipCode: '',
        month: '',
        date: '',
        year: '',
        totalDistribution: "",
        firstNameValidation: true,
        lastNameValidation: true,
        suffixValidation: true,
        ssnValidation: true,
        addrLine1Validation: true,
        addrLine2Validation: true,
        workTelephoneValidation: true,
        cityValidation: true,
        stateValidation:true,
        zipCodeValidation: true,
        distributionValidation:true,
        distributionError:"",
        phoneFormatMessage:"",
        nameDobDropDown:false,
        monthDropDown:false,
        dateDropDown:false,
        yearDropDown:false,
        suffixDropDown:false,
        relationToOwnerDropDown:false,
        dropDownSuffixFlag: false,
        dropDownRelationFlag: false,
        dropDownSuffixMsg: '',
        dropDownRelationMsg: '',
        ssnValidationMsg:''
      },
    };
  }

  componentDidMount() {
    console.log("Multiple Accounts Data::::",this.state.manageBeneficiaries);
    this.showContingentData();
    this.getDropDownData();
    this.getYear();
  }

  showContingentData=()=>{
    let value={};
    this.state.manageBeneficiaries.map((dataObj) => {
      if(dataObj.accountType === "Roth IRA") {
        value=dataObj;     
      }
   });
   this.setState({contingentData:value.contingentBeneficiary});
   console.log("Contingent Beneficiary Data::::",this.state.contingentData);
  }

  getYear=()=>{
    let d = new Date();
    let n = d.getFullYear();
    let diff=n-100;
    for (i=0;i<=100;i++){
      let obj={key:"key"+i,title:"" };
      obj.title=(diff+i).toString();
      yearData.push(obj);
    }
    console.log("YearData in date",yearData);
  };

  updateCityState = () => {
    let zip=this.state.contingent.zipCode;
    zipcodeData.map((m) => {
        if(zip === m.zip){
            this.onUpdateField("contingent","city",m.city);
            this.onUpdateField("contingent","stateValue",m.state);
            
        }
    });
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

  setScrollViewRef = (element) => {
    this.scrollViewRef = element;
  };

  setInputRef = (inputComp) => (ref) => {
      this[inputComp] = ref;
  }

  onSubmitEditing = (input) => text => {
      console.log("onSubmitEditing:::>" + text);
      input.focus();
  }

  isEmpty = (str) => {
      if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
          return true;
      } else {
          return false;
      }
  }

  validateFields = () => {
    try {
      console.log('validateFields:::');
      let isValidationSuccess = false;
      this.setState(prevState => ({
        contingent: {
          ...prevState.contingent,
          firstNameValidation: true,
          lastNameValidation: true,
          addrLine1Validation: true,
          addrLine2Validation: true,
          zipCodeValidation: true,
          cityValidation: true,
          workTelephoneValidation: true,
          ssnValidation: true,
          suffixVlaidation: true,
          distributionValidation:true
        },
      }));
      if (!this.validateEachFields()) {
        isValidationSuccess = false;
      } else {
        isValidationSuccess = true;
      }
      if (isValidationSuccess) {
         this.onClickSave();
      }
    } catch (err) {
      console.log('Error:::' + err);
    }
  };

  validateDistribution=()=>{
    let totalDistribution=100,temp=0;
    this.state.contingentData.map((dataObj) => {
      temp+=dataObj.distribution;
   });
   temp=temp+this.state.contingent.distribution;
   if(temp>totalDistribution){
    this.setState({distributionError:"Distribution cannot exceed 100"});
    this.onUpdateField('contingent', 'distributionValidation', false);
   } else{
    this.setState({distributionError:""});
    this.onUpdateField('contingent', 'distributionValidation', true);
   }
   
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  onClickSave=()=>{
    let arr=[],obj={};
        obj.name=this.state.contingent.firstName+" "+this.state.contingent.middleInitial+" "+this.state.contingent.lastName;
        obj.suffix=this.state.contingent.suffix;
        obj.relationToOwner=this.state.contingent.relationToOwner;
        obj.ssn=this.state.contingent.ssn;
        obj.address=this.state.contingent.addrLine1+","+this.state.contingent.addrLine2;
        obj.zipCode=this.state.contingent.zipCode;
        obj.stateValue=this.state.contingent.stateValue;
        obj.workTelephone=this.state.contingent.workTelephone;
        obj.dob=this.state.contingent.date+"/"+this.state.contingent.month+"/"+this.state.contingent.year;
        obj.distribution=this.state.contingent.distribution;
        arr.push(obj);
        this.setState({contingentData:this.state.contingentData.concat(arr)},console.log("Data for contingent Beneficiary:::",this.state.contingentData));
        
  }

  onChangeText = (stateKey, keyName) => text => {
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [keyName]: text,
      },
    }));
  };

  onUpdateField = (stateKey, keyName, val) => {
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [keyName]: val,
      },
    }));
  };

  selectNameDob = () => {
    this.onUpdateField("contingent","nameDobDropDown",!this.state.nameDobDropDown);
  }

  selectedNameDobDropDownValue = (value) => {
    this.onUpdateField("contingent","nameDob",value.value);
    this.onUpdateField("contingent","nameDobDropDown",false);
    //this.onUpdateField("contingent","dropDownNameDobFlag",false);
  }

  selectRelation = () => {
    this.onUpdateField("contingent","relationToOwnerDropDown",!this.state.relationToOwnerDropDown);
  }

  selectedRelationDropDownValue = (value) => {
    this.onUpdateField("contingent","relationToOwnerDropDown",false);
    this.onUpdateField("contingent","relationToOwner",value.value);
    this.onUpdateField("contingent","dropDownRelationFlag",false);
  }

  selectSuffix=()=>{
    this.onUpdateField("contingent","suffixDropDown",!this.state.suffixDropDown);
  }

  selectedSuffixDropDownValue=(value)=>{
    this.onUpdateField("contingent","suffixDropDown",false);
    this.onUpdateField("contingent","suffix",value.value);
    this.onUpdateField("contingent","dropDownSuffixFlag",false);
  }

  selectMonth = () => {
    this.onUpdateField("contingent","monthDropDown",!this.state.monthDropDown);
  }

  selectedMonthDropDownValue = (value) => {
    this.onUpdateField("contingent","monthDropDown",false);
    this.onUpdateField("contingent","month",value.title);
  }

  selectDate = () => {
    this.onUpdateField("contingent","dateDropDown",!this.state.dateDropDown);
  }

  selectedDateDropDownValue = (value) => {
    this.onUpdateField("contingent","dateDropDown",false);
    this.onUpdateField("contingent","date",value.title);
  }

  selectYear = () => {
    this.onUpdateField("contingent","yearDropDown",!this.state.yearDropDown);
  }

  selectedYearDropDownValue = (value) => {
    this.onUpdateField("contingent","yearDropDown",false);
    this.onUpdateField("contingent","year",value.title);
  }

  validateEachFields = () => {
    var errMsg = '';
    var isValidationSuccess = false;

    if (this.isEmpty(this.state.contingent.firstName)) {
      this.onUpdateField('contingent', 'firstNameValidation', false);
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'firstNameValidation', true);
    }

    if (this.isEmpty(this.state.contingent.lastName)) {
      this.onUpdateField('contingent', 'lastNameValidation', false);
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'lastNameValidation', true);
    }

    if (this.isEmpty(this.state.contingent.ssn)) {
      this.onUpdateField('contingent', 'ssnValidation', false);
      this.onUpdateField('contingent', "ssnValidation", gblStrings.accManagement.emptySSNMsg);
      errMsg = 'error';
    } else {
      this.validateSsn(this.state.contingent.ssn);
     // this.onUpdateField('contingent', 'ssnValidation', true);
    }

    if (this.isEmpty(this.state.contingent.addrLine1)) {
      this.onUpdateField('contingent', 'addrLine1Validation', false);
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'addrLine1Validation', true);
    }

    if (this.isEmpty(this.state.contingent.addrLine2)) {
      this.onUpdateField('contingent', 'addrLine2Validation', false);
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'addrLine2Validation', true);
    }

    if (this.isEmpty(this.state.contingent.zipCode)) {
      this.onUpdateField('contingent', 'zipCodeValidation', false);
      this.onUpdateField('contingent', "zipCodeFormatMsg", gblStrings.accManagement.emptyZipCodeMsg);
      errMsg = 'error';
    } else {
      this.validateZip(this.state.contingent.zipCode);
      //this.onUpdateField('contingent', 'zipCodeValidation', true);
    }

    if (this.isEmpty(this.state.contingent.workTelephone)) {
      this.onUpdateField('contingent', 'workTelephoneValidation', false);
      this.onUpdateField('contingent', "phoneFormatMessage", gblStrings.accManagement.emptyWorkPhoneNoMsg);
      errMsg = 'error';
    } else {
      this.validateWorkPhone(this.state.contingent.workTelephone);
      //this.onUpdateField('contingent', 'workTelephoneValidation', true);
    }

    if (this.isEmpty(this.state.contingent.city)) {
      this.onUpdateField('contingent', 'cityValidation', false);
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'cityValidation', true);
    }

    if (this.isEmpty(this.state.contingent.stateValue)) {
      this.onUpdateField('contingent', 'stateValidation', false);
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'stateValidation', true);
    }
    if (this.isEmpty(this.state.contingent.distribution)) {
      this.onUpdateField('contingent', 'distributionError', gblStrings.accManagement.emptyDistributionMsg);
      this.onUpdateField('contingent', 'distributionValidation', false);
      errMsg = 'error';
    } else {
      this.validateDistributionValue(this.state.contingent.distribution);
      //errMsg = 'error';
    }

    if (this.state.contingent.relationToOwner === '') {
      this.onUpdateField("contingent","dropDownRelationFlag",true);
    } 

    if (errMsg != 'error') {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  };

  validateSsn=(text)=>{
    if(!this.isEmpty(text)){
      let validate = ssnRegex.test(text);
      this.onUpdateField("contingent","ssnValidation",validate);
      this.onUpdateField("contingent","ssnValidation",gblStrings.accManagement.ssnNoFormat);
    }
  };

  validateWorkPhone = (text) => {
    if(!this.isEmpty(text)){
      let validate = phoneRegex.test(text);
      this.onUpdateField("contingent","workTelephoneValidation",validate);
      this.onUpdateField("contingent","workTelephoneValidation",gblStrings.accManagement.phoneNoFormat);
    }
  };

  validateZip=(text)=>{
    if(!this.isEmpty(text)){
      let validate = zipCodeRegex.test(text);
      this.onUpdateField("contingent","zipCodeValidation",validate);
      this.onUpdateField("contingent","zipCodeValidationMsg",gblStrings.accManagement.zipCodeFormat);
      
      if(validate){
          this.onUpdateField("contingent","zipCodeValidation",validate);
          this.updateCityState();
      }
    }
  };

  validateDistributionValue=(text)=>{
    if(!this.isEmpty(text)){
      let value=parseInt(text);
      if(value>100){
        this.onUpdateField("contingent","distributionValidation",false);
        this.onUpdateField("contingent","distributionError",gblStrings.accManagement.distributionValidationExceed);
      } else {
        this.onUpdateField("contingent","distributionValidation",true);
      }
    }
  };

  updateRothIRA = () => {
    this.setState({
      isMainView: false,
      isPrimaryBenificiary: false,
      isContingentBenificiary: true,
    });
  };

  onClickUpdate=(value)=>{
    if(value!=gblStrings.accManagement.traditionalIra){
      this.setState({isPrimaryBenificiary: true, isMainView: false, account_Type: value });
    }
  }
  // ------------Primary Beneficiary----------------------------
  primaryBeneficiary = () => {

    let data={};
    this.state.manageBeneficiaries.map((dataObj) => {
       if(dataObj.accountType === this.state.account_Type) {
           data=dataObj;     
       }
    });

    console.log("data roth IRA ::",data);
     const detailsView=data.primaryBeneficiary.map((item,key)=>{
       return(
         <View key={key}>
           <View style={styles.contentViewBlock}>
            <Text style={styles.shortHeadingText}>
              {gblStrings.accManagement.nameDob}
            </Text>
            <Text style={styles.shortContentText}>
              {item.name +' | '+item.dob}
            </Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortHeadingText}>
              {'Relationship to Owner'}
            </Text>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToOwner}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortHeadingText}>
              {gblStrings.accManagement.distribution}
            </Text>
            <View style={styles.flexDirectionRowStyle}>
              <GInputComponent
                propInputStyle={styles.customDistributionTxtBox}
                placeholder={''}
                editable={false}
                value={item.distribution}
                maxLength={gblStrings.maxLength.distributionPercentage}
              />
              <Text style={[styles.shortContentText, styles.paddingStyleLeft,{marginTop:scaledHeight(20)}]}>
                {'%'}
              </Text>
           </View>
          </View>
          <Text style={[styles.contactUsLink, styles.deleteLink]}>
            {gblStrings.common.delete}
          </Text>
          <Text style={styles.addPrimaryLink}>
          {' + ' + gblStrings.accManagement.addPrimaryBeneficiary}
          </Text>
         </View>
           
       );
     });
    return (
      <View style={styles.primaryBeniView}>
        <View style={styles.enterDetailsView}>
          <View style={styles.iconEnterView}>
            <GIcon name="add" type="MaterialIcons" size={16} color="#0000FF" />
          </View>
          <View style={styles.paddingHorizontalView}>
            <Text style={styles.enterDetailsTxt}>
              {gblStrings.accManagement.enterDetails}
            </Text>
            <Text style={styles.subHeading}>
              {gblStrings.accManagement.accBeneficiaryContent}
            </Text>
            <View style={styles.dataAccountBeneficiary}>
              <View
                style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                <View style={styles.noteIconView}>
                  <GIcon
                    name="circle"
                    type="entypo"
                    size={10}
                    color="#707070"
                  />
                </View>
                <Text style={styles.disclaimerTxt}>
                  {gblStrings.accManagement.enterDetailsPrimaryDisc}
                </Text>
              </View>
              <View
                style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                <View style={styles.noteIconView}>
                  <GIcon
                    name="circle"
                    type="entypo"
                    size={10}
                    color="#707070"
                  />
                </View>
                <Text style={styles.disclaimerTxt}>
                  {gblStrings.accManagement.enterDetailsContingentBene}
                </Text>
              </View>
              <View
                style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                <View style={styles.noteIconView}>
                  <GIcon
                    name="circle"
                    type="entypo"
                    size={10}
                    color="#707070"
                  />
                </View>
                <Text style={styles.disclaimerTxt}>
                  {gblStrings.accManagement.enterDetailsIfYouWish}
                </Text>
              </View>
              <View
                style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                <View style={styles.noteIconView}>
                  <GIcon
                    name="circle"
                    type="entypo"
                    size={10}
                    color="#707070"
                  />
                </View>
                <Text style={styles.disclaimerTxt}>
                  {gblStrings.accManagement.enterDetailsIfNoBene}
                </Text>
              </View>
              <View
                style={[styles.noteEnterDetail, styles.flexDirectionRowStyle]}>
                <View style={styles.noteIconView}>
                  <GIcon
                    name="circle"
                    type="entypo"
                    size={10}
                    color="#707070"
                  />
                </View>
                <Text style={styles.disclaimerTxt}>
                  {gblStrings.accManagement.enterDetailsAdditionalAdvisor}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentViewInternal} >
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortHeadingText}>
                {gblStrings.accManagement.rothIra}
              </Text>
              <Text style={styles.shortContentText}>{data.name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortHeadingText}>{'Registration Owner'}</Text>
              <Text style={styles.shortContentText}>{data.owner}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortHeadingText}>{gblStrings.accManagement.balance}</Text>
              <Text style={styles.shortContentText}>{data.balance}</Text>
            </View>
        </View>
        <View style={styles.contentViewInternal}>
          <Text
            style={[styles.manageBenificiariesHeadline,styles.paddingStyleLeft]}>
            {gblStrings.accManagement.primaryBeneficiary}
          </Text>
          <View style={styles.borderInternal} />
          {detailsView}
        </View>
        <View style={styles.distributionTotalView}>
          <Text
            style={[styles.shortContentText, styles.distributionFieldInput]}>
            {'Distribution Total'}
          </Text>
          <Text
            style={[styles.shortContentText, styles.distributionFieldInput]}>
            {'100.00%'}
          </Text>
        </View>
        <View style={styles.contentViewInternal}>
          <Text
            style={[styles.manageBenificiariesHeadline,styles.paddingStyleLeft]}>
            {gblStrings.accManagement.contingentBeneficiary}
          </Text>
          <View style={styles.borderInternal} />
          <View style={styles.contentViewBlock}>
            <GDropDownComponent 
              dropDownName={gblStrings.accManagement.nameDob}
              dropDownTextName={styles.shortHeadingText} 
              data={nameDobData}
              changeState={this.selectNameDob}
              showDropDown={this.state.contingent.nameDobDropDown}
              dropDownValue={this.state.contingent.nameDob}
              selectedDropDownValue={this.selectedNameDobDropDownValue}
            />
          </View>
        </View>
        <View style={styles.btnGrp}>
          <GButtonComponent
            buttonStyle={styles.normalWhiteBtn}
            buttonText={gblStrings.common.cancel}
            textStyle={styles.normalWhiteBtnTxt}
          />
          <GButtonComponent
            buttonStyle={styles.normalBlackBtn}
            buttonText={gblStrings.common.next}
            textStyle={styles.normalBlackBtnTxt}
            onPress={this.updateRothIRA}
          />
        </View>
      </View>
    );
  };

  // ----------------contingentBeneficiary--------------------------
  contingentBenificiary = () => {
    if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.suffix && this.props.masterLookupStateData.suffix.value) {
      suffixData=this.props.masterLookupStateData.suffix.value;
    }
    if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.relationship && this.props.masterLookupStateData.relationship.value) {
      relationData=this.props.masterLookupStateData.relationship.value;
    }

    return (
      <View>
        <View style={[styles.contentViewInternal, styles.paddingStyleLeft]}>
          <Text
            style={[styles.manageBenificiariesHeadline,styles.paddingStyleLeft]}>
            {gblStrings.accManagement.contingentBeneficiary}
          </Text>
          <View style={styles.borderInternal} />
          <GDropDownComponent 
            dropDownName={gblStrings.accManagement.nameDob}
            dropDownTextName={styles.shortHeadingText} 
            data={nameDobData}
            changeState={this.selectNameDob}
            showDropDown={this.state.contingent.nameDobDropDown}
            dropDownValue={this.state.contingent.nameDob}
            selectedDropDownValue={this.selectedNameDobDropDownValue}
          />
          <GDropDownComponent 
            dropDownName={gblStrings.accManagement.relationToOwner}
            dropDownTextName={styles.shortHeadingText} 
            data={relationData}
            textInputStyle={styles.dropdownTextInput}
            itemToDisplay={"value"}
            changeState={this.selectRelation}
            errorFlag={this.state.contingent.dropDownRelationFlag}
            errorText={this.dropDownRelationMsg}
            showDropDown={this.state.contingent.relationToOwnerDropDown}
            dropDownValue={this.state.contingent.relationToOwner}
            selectedDropDownValue={this.selectedRelationDropDownValue}
            errorFlag={this.state.contingent.dropDownRelationFlag}
            errorText={gblStrings.accManagement.emptyRelationShipMsg}
          />
          <View style={styles.contingentView}>
            <Text style={styles.shortHeadingText}>
              {gblStrings.accManagement.distribution}
            </Text>
          </View>
          <View style={[styles.flexDirectionRowStyle,{paddingLeft:'4%'}]}>
            <View style={{width:'70%'}}>
              <GInputComponent
                inputref={this.setInputRef("distribution")}
                propInputStyle={styles.customDistributionTxtBox}
                placeholder={''}
                keyboardType={'numeric'}
                onBlur={this.validateDistributionValue}
                maxLength={gblStrings.maxLength.distributionPercentage}
                onChangeText={this.onChangeText('contingent', 'distribution')}
                errorFlag={!this.state.contingent.distributionValidation}
                errorText={this.state.contingent.distributionError}
                onSubmitEditing={this.onSubmitEditing(this.firstName)}
              />
            </View>
            <Text style={[styles.shortContentText, styles.paddingStyleLeft,{marginTop:scaledHeight(20)}]}>
              {'%'}
            </Text>
          </View>
          <Text style={[styles.manageBenificiariesHeadline,styles.titleAlignStyle]}>
            {gblStrings.accManagement.beneficiaryName}
          </Text>
          <View style={styles.paddingStyleLeft}>
            <Text style={styles.lblTxt}>
              {'*' + gblStrings.accManagement.firstName}
            </Text>
            <GInputComponent
              inputref={this.setInputRef("firstName")}
              propInputStyle={styles.customTxtBox}
              placeholder={""}
              maxLength={gblStrings.maxLength.firstName}
              onChangeText={this.onChangeText('contingent','firstName')}
              errorFlag={!this.state.contingent.firstNameValidation}
              errorText={gblStrings.accManagement.emptyFirstNameMsg}
              onSubmitEditing={this.onSubmitEditing(this.middleInitial)}
            />
            <Text style={styles.lblTxt}>
              {gblStrings.accManagement.middleInitial}
            </Text>
            <GInputComponent
              inputref={this.setInputRef("middleInitial")}
              propInputStyle={styles.customTxtBox}
              placeholder={""}
              maxLength={gblStrings.maxLength.middleInitial}
              onChangeText={this.onChangeText('contingent', 'middleInitial')}
              onSubmitEditing={this.onSubmitEditing(this.lastName)}
            />
            <Text style={styles.lblTxt}>
              {'*' + gblStrings.accManagement.lastName}
            </Text>
            <GInputComponent
              inputref={this.setInputRef("lastName")}
              propInputStyle={styles.customTxtBox}
              placeholder={""}
              maxLength={gblStrings.maxLength.lastName}
              onChangeText={this.onChangeText('contingent', 'lastName')}
              onSubmitEditing={this.onSubmitEditing(this.lastName)}
              errorFlag={!this.state.contingent.lastNameValidation}
              errorText={gblStrings.accManagement.emptyLastNameMsg}
            />
            <GDropDownComponent 
              dropDownName={gblStrings.accManagement.suffix}
              dropDownTextName={styles.lblTxt} 
              data={suffixData} 
              placeholder={gblStrings.common.select}
              changeState={this.selectSuffix}
              itemToDisplay={"value"}
              errorFlag={this.state.contingent.dropDownSuffixFlag}
              errorText={this.state.contingent.dropDownSuffixMsg}
              showDropDown={this.state.contingent.suffixDropDown}
              dropDownValue={this.state.contingent.suffix}
              selectedDropDownValue={this.selectedSuffixDropDownValue}
            />
          </View>

          {/*------------ beneficiary Information ------------------ */}

          <Text style={[styles.manageBenificiariesHeadline,styles.titleAlignStyle]}>
            {gblStrings.accManagement.beneficiaryInfo}
          </Text>
          <View style={styles.paddingStyleLeft}>
            <Text style={styles.lblTxt}>{gblStrings.accManagement.ssn}</Text>
            <GInputComponent
              inputref={this.setInputRef("ssn")}
              propInputStyle={styles.customTxtBox}
              placeholder={''}
              keyboardType={'numeric'}
              onBlur={this.validateSsn}
              maxLength={gblStrings.maxLength.ssnNo}
              onChangeText={this.onChangeText('contingent', 'ssn')}
              onSubmitEditing={this.onSubmitEditing(this.dob)}
              errorFlag={!this.state.contingent.ssnValidation}
              errorText={this.state.contingent.ssnValidationMsg}
            />
            <View style={(styles.noteEnterDetail,{width:'100%',flexDirection:'row',justifyContent:'space-around'})}>
              <Text style={styles.helpTextStyle}>{'Eg: 222-33-4444'}</Text>
              <Text style={styles.contactUsLink}>
                {gblStrings.settingAccountMessaging.accountMessagingGeneralPrivacyPromise}
              </Text>
            </View>
            <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
            <View style={styles.flexDirectionRowStyle}>
              <View style={styles.dateDropDownWidth}>
                <GDropDownComponent  
                  data={monthData} 
                  placeholder={'MM'}
                  itemToDisplay={"title"}
                  changeState={this.selectMonth}
                  showDropDown={this.state.contingent.monthDropDown}
                  dropDownValue={this.state.contingent.month}
                  selectedDropDownValue={this.selectedMonthDropDownValue}
                  //errorFlag={this.state.contingent.dateValidation}
                  //errorText={gblStrings.accManagement.emptyDOBMsg}
                />
              </View>
              <View style={styles.dateDropDownWidth}>
                <GDropDownComponent  
                  data={dateData} 
                  placeholder={'DD'}
                  itemToDisplay={"title"}
                  changeState={this.selectDate}
                  showDropDown={this.state.contingent.dateDropDown}
                  dropDownValue={this.state.contingent.date}
                  selectedDropDownValue={this.selectedDateDropDownValue}
                  //errorFlag={this.state.contingent.monthValidation}
                  //errorText={gblStrings.accManagement.emptyDOBMsg}
                />
              </View>
              <View style={styles.dateDropDownWidth}>
                <GDropDownComponent  
                  data={yearData} 
                  placeholder={'YYYY'}
                  itemToDisplay={"title"}
                  changeState={this.selectYear}
                  showDropDown={this.state.contingent.yearDropDown}
                  dropDownValue={this.state.contingent.year}
                  selectedDropDownValue={this.selectedYearDropDownValue}
                  //errorFlag={this.state.contingent.yearValidation}
                  //errorText={gblStrings.accManagement.emptyDOBMsg}
                />
              </View>
            </View>
          </View>

          {/* --------------Beneficiary Address----------------------------------*/}

          <Text style={[styles.manageBenificiariesHeadline,styles.titleAlignStyle]}>
            {gblStrings.accManagement.beneficiaryAdd}
          </Text>
          <Text style={styles.topContentText}>
            {gblStrings.accManagement.pleaseProvideCorrectAdd}
          </Text>
          <View style={styles.paddingStyleLeft}>
            <Text style={styles.lblTxt}>
              {gblStrings.accManagement.address}
            </Text>
            <GInputComponent
              inputref={this.setInputRef("addrLine1")}
              propInputStyle={styles.customTxtBox}
              placeholder={gblStrings.accManagement.empAddrLine1}
              maxLength={gblStrings.maxLength.emplAddress1}
              onChangeText={this.onChangeText('contingent', 'addrLine1')}
              onSubmitEditing={this.onSubmitEditing(this.addrLine2)}
              errorFlag={!this.state.contingent.addrLine1Validation}
              errorText={gblStrings.accManagement.emptyAddressLine1Msg}
            />
            <GInputComponent
              inputref={this.setInputRef("addrLine2")}
              propInputStyle={styles.customTxtBox}
              placeholder={gblStrings.accManagement.empAddrLine2}
              maxLength={gblStrings.maxLength.addressLine2}
              onChangeText={this.onChangeText('contingent', 'adaddrLine2')}
              onSubmitEditing={this.onSubmitEditing(this.workTelephone)}
              errorFlag={!this.state.contingent.addrLine2Validation}
              errorText={gblStrings.accManagement.emptyAddressLine2Msg}
            />
            <Text style={styles.lblTxt}>
              {gblStrings.accManagement.workPhoneNo}
            </Text>
            <GInputComponent
              inputref={this.setInputRef("workTelephone")}
              propInputStyle={styles.customTxtBox}
              placeholder={'XXX-XXX-XXXX'}
              keyboardType={'phone-pad'}
              onBlur={this.validateWorkPhone}
              maxLength={gblStrings.maxLength.phoneNo}
              onChangeText={this.onChangeText('contingent', 'workTelephone')}
              onSubmitEditing={this.onSubmitEditing(this.city)}
              errorFlag={!this.state.contingent.workTelephoneValidation}
              errorText={this.state.contingent.phoneFormatMessage}
            />
            <Text style={styles.lblTxt}>{gblStrings.accManagement.city}</Text>
            <GInputComponent
              inputref={this.setInputRef("city")}
              propInputStyle={styles.customTxtBox}
              placeholder={gblStrings.accManagement.enterCity}
              maxLength={gblStrings.maxLength.city}
              value={this.state.contingent.city}
              onChangeText={this.onChangeText('contingent', 'city')}
              onSubmitEditing={this.onSubmitEditing(this.stateValue)}
              errorFlag={!this.state.contingent.cityValidation}
              errorText={gblStrings.accManagement.emptyCityMsg}
            />
            <Text style={styles.lblTxt}>{gblStrings.accManagement.state}</Text>
            <GInputComponent
              inputref={this.setInputRef("stateValue")}
              propInputStyle={styles.customTxtBox}
              placeholder={gblStrings.accManagement.enterState}
              maxLength={gblStrings.maxLength.state}
              value={this.state.contingent.stateValue}
              onChangeText={this.onChangeText('contingent', 'stateValue')}
              onSubmitEditing={this.onSubmitEditing(this.Zip)}
              errorFlag={!this.state.contingent.stateValidation}
              errorText={gblStrings.accManagement.emptyStateMsg}
            />
            <Text style={styles.lblTxt}>
              {gblStrings.accManagement.zipcode}
            </Text>
            <GInputComponent
              inputref={this.setInputRef("Zip")}
              propInputStyle={styles.customTxtBox}
              placeholder={gblStrings.accManagement.enterZip}
              keyboardType={'numeric'}
              onBlur={this.validateZip}
              maxLength={gblStrings.maxLength.zipCode}
              onChangeText={this.onChangeText('contingent', 'zipCode')}
              errorFlag={!this.state.contingent.zipCodeValidation}
              errorText={this.state.contingent.zipCodeFormatMsg}
            />
          </View>

          <Text style={styles.addBeneficiaryLink}>
            {'+ Add contingent Beneficiary'}
          </Text>
        </View>
        <View style={styles.distributionTotalView}>
          <Text
            style={[styles.shortContentText, styles.distributionFieldInput]}>
            {'Total Distribution'}
          </Text>
          <Text
            style={[styles.shortContentText, styles.distributionFieldInput]}>
            {'00.00%'}
          </Text>
        </View>
        <View style={styles.btnGrp}>
          <GButtonComponent
            buttonStyle={styles.normalWhiteBtn}
            buttonText={gblStrings.common.cancel}
            textStyle={styles.normalWhiteBtnTxt}
          />
          <GButtonComponent
            buttonStyle={styles.normalBlackBtn}
            buttonText={gblStrings.common.next}
            textStyle={styles.normalBlackBtnTxt}
            onPress={this.validateFields}
          />
        </View>
      </View>
    );
  };

  renderList=()=>{
    return(
        <View>
          {this.state.manageBeneficiaries.map((item, key) => {
              let AccountType=item.accountType;
              const beneficiaryData=item.primaryBeneficiary.map((m,n)=>{
                return(
                  <View key={n}>
                    <View style={styles.blockMarginTop}>
                      <Text style={styles.shortHeadingText}>
                        {gblStrings.accManagement.primaryBeneficiary}
                      </Text>
                      <Text style={styles.shortContentText}>
                        {m.name}
                      </Text>
                      </View>
                      {AccountType===
                      gblStrings.accManagement.traditionalIra ? (
                          <View style={styles.blockMarginTop}>
                            <Text style={styles.shortHeadingText}>
                              {'Relationship To Account Owner'}
                            </Text>
                            <Text style={styles.shortContentText}>
                              {m.relationToOwner}
                            </Text>
                          </View>
                        ) : (
                          <View style={styles.blockMarginTop}>
                            <Text style={styles.shortHeadingText}>
                              {'Accumulated Value'}
                            </Text>
                            <Text style={styles.shortContentText}>
                              {m.balance}
                            </Text>
                          </View>
                      )}
                      <View style={styles.blockMarginTop}>
                        <Text style={styles.shortHeadingText}>
                          {gblStrings.accManagement.distribution}
                        </Text>
                        <Text style={styles.shortContentText}>
                          {m.distribution}
                        </Text>
                      </View>
                  </View>
                );
              });
              return (
                <View style={styles.contentViewInternal} key={key}>
                  <Text
                    style={[styles.manageBenificiariesHeadline,styles.paddingHorizontalStyle]}>
                    {item.accountType}
                  </Text>
                  <View style={styles.borderInternal} />
                  <View style={styles.paddingHorizontalStyle}>
                    <View style={styles.blockMarginTop}>
                      <Text style={styles.shortHeadingText}>
                        {gblStrings.accManagement.contractNumber}
                      </Text>
                      <Text style={[styles.shortContentText, styles.contractNumberSize]}>
                        {item.contractNumber}
                      </Text>
                    </View>
                    <View style={styles.settingsBorder} />
                    <View style={styles.blockMarginTop}>
                      <Text style={styles.infoShortText}>
                        {'Information as on ' + item.dateModified}
                      </Text>
                    </View>
                    {beneficiaryData}
                  </View>
                  <View style={styles.borderInternal} />
                  <GButtonComponent
                    buttonStyle={styles.updateButton}
                    buttonText={gblStrings.common.update}
                    textStyle={styles.updateButtonText}
                    onPress={()=>{this.onClickUpdate(AccountType);}}
                  />
                </View>
              );
            })}
        </View>
    );
    
  }

  render() {
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={this.props.navigation} />
        <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef} >
          <View style={[styles.mainHeadingView, styles.flexStyle]}>
            <Text style={styles.manageBenificiariesHeadline}>
              {gblStrings.accManagement.manageBeneficiaries}
            </Text>
            <Text style={[styles.contactUsLink, styles.marginStyle]}>
              {gblStrings.accManagement.contactUs}
            </Text>
          </View>
          <View style={styles.settingsBorder} />
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageBenificiariesSubHeadline}>
              {gblStrings.accManagement.myAccountBeneficiariesInfo}
            </Text>
            {this.state.isPrimaryBenificiary && this.primaryBeneficiary()}
            {this.state.isContingentBenificiary && this.contingentBenificiary()}
            {this.state.isMainView && (
              <View>
                <Text style={styles.contentText}>
                  {gblStrings.accManagement.beneficiariesAccount}
                  <Text style={styles.contactUsInternalLink}>
                    {gblStrings.accManagement.contactUs}
                  </Text>
                </Text>
                {<this.renderList/>}
              </View>
            )}
          </View>
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

ManageBenificiariesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object)
};

export default ManageBenificiariesComponent;
