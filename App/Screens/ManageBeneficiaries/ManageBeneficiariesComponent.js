import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';
import {
  GHeaderComponent,
  GInputComponent,
  GIcon,
  GFooterComponent,
  GButtonComponent,
} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import {CustomDropDown} from '../../AppComponents';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';

const dummyData = [
  {
    id: '1',
    title: 'Option 1',
  },
  {
    id: '2',
    title: 'Option 2',
  },
  {
    id: '3',
    title: 'Option 3',
  },
];

const suffixData = [
  {
    id: 'Jr',
    title: 'Jr.',
  },
  {
    id: 'Sr',
    title: 'Sr.',
  },
  {
    id: 'Ret.',
    title: 'Ret.',
  },
];


const relationship = [
  {
    id: '1',
    title: 'Aunt Uncle ',
  },
  {
    id: '2',
    title: 'Brother/Sister',
  },
  {
    id: '3',
    title: 'Brother/Sister In Law',
  },
  {
    id: '4',
    title: 'Child',
  },
  {
    id: '5',
    title: 'Cohabitant',
  },
  {
    id: '6',
    title: 'Cohabitant Child',
  },
  {
    id: '7',
    title: 'Cousin ',
  },
  {
    id: '8',
    title: 'Father/Mother In Law',
  },
  {
    id: '9',
    title: 'Fiance',
  },
  {
    id: '10',
    title: 'Spouse',
  },
  {
    id: '11',
    title: 'Parent',
  },
  {
    id: '12',
    title: 'Grandparent',
  },
  {
    id: '13',
    title: 'Grandchild',
  },
  {
    id: '14',
    title: 'Son/Daughter In Law ',
  },
  {
    id: '15',
    title: 'Step Child',
  },
  {
    id: '16',
    title: 'Step Mother/Father',
  },
  {
    id: '17',
    title: 'Step Sister/Brother',
  },
  {
    id: '18',
    title: 'Legal Guardian',
  },
];

const DropDownListItem = props => {
  return (
    <TouchableOpacity style={{height: 33}} onPress={props.onSelectedItem}>
      <Text> {props.value} </Text>
    </TouchableOpacity>
  );
};
DropDownListItem.propTypes = {
  onSelectedItem: PropTypes.func,
  value: PropTypes.string,
};

const MultipleAccountData = [
  {
    accountType: 'Traditional IRA',
    contractNumber: '123456789',
    dateModified: '10/10/2018',
    balance: '$23512',
    name:"Lorem Ipsum",
    owner:"Lorem Name",
    primaryBeneficiary: [
      {
        name:'Lorem Name',
        distribution: '100%',
        dob: '10/10/2018',
        relationToOwner:"Wife"
      }
    ],
    contingentBeneficiary:[
      {
        name:'Lorem Name',
        relationToOwner: 'Son',
        distribution: '100%',
        dob: '01/05/1962'
    }
    ],
  },
  {
    accountType: 'Roth IRA',
    contractNumber: '123456789',
    dateModified: '10/10/2018',
    balance: '$23512',
    name:"Lorem Ipsum",
    owner:"Lorem Name",
    primaryBeneficiary: [
      {
        name:'Lorem Name',
        distribution: '100%',
        dob: '01/05/1962',
        relationToOwner:"Wife",
        balance: '$23512',
      }
    ],
    contingentBeneficiary:[
      {
        name:'Lorem Name',
        relationToOwner: 'Son',
        distribution: '100%',
        dob: '01/05/1962'
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
        nameDOB: '',
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
        state: '',
        zipCode: '',
        month: '',
        date: '',
        year: '',
        firstNameValidation: true,
        lastNameValidation: true,
        suffixValidation: true,
        ssnValidation: true,
        addrLine1Validation: true,
        addrLine2Validation: true,
        workTelephoneValidation: true,
        cityValidation: true,
        zipCodeValidation: true,
        distributionValidation:true,
        distributionError:""
      },
    };
  }

  componentDidMount() {
    console.log("Multiple Accounts Data::::",this.state.manageBeneficiaries);
    this.showContingentData();
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

  isEmpty = str => {
    if (
      str == '' ||
      str == undefined ||
      str == null ||
      str == 'null' ||
      str == 'undefined'
    ) {
      return true;
    } else {
      return false;
    }
  };

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
        obj.state=this.state.personal.state;
        obj.workTelephone=this.state.personal.workTelephone;
        obj.dob=this.state.personal.date+"/"+timingSafeEqual.state.contingent.month+"/"+this.state.contingent.year;
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

  onPressDropDown = (stateKey, keyName) => () =>
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [keyName]: !this.state.contingent[keyName],
      },
    }));

  onUpdateField = (stateKey, keyName, val) => {
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [keyName]: val,
      },
    }));
  };

  selectedDropDownValue = (dropDownName, value) => {
    switch (dropDownName) {
      case 'nameDOBDropDown':
        this.setState(prevState => ({
          contingent: {
            ...prevState.contingent,
            nameDOB: value,
            nameDOBDropDown: false,
          },
        }));
        break;
      case 'relationToOwnerDropDown':
        this.setState(prevState => ({
          contingent: {
            ...prevState.contingent,
            relationToOwner: value,
            relationToOwnerDropDown: false,
          },
        }));
        break;
      case 'suffixDropDown':
        this.setState(prevState => ({
          contingent: {
            ...prevState.contingent,
            suffix: value,
            suffixDropDown: false,
          },
        }));
        break;
      case 'monthDropDown':
        this.setState(prevState => ({
          contingent: {
            ...prevState.contingent,
            month: value,
            monthDropDown: false,
          },
        }));
        break;
      case 'dateDropDown':
        this.setState(prevState => ({
          contingent: {
            ...prevState.contingent,
            date: value,
            dateDropDown: false,
          },
        }));
        break;
      case 'yearDropDown':
        this.setState(prevState => ({
          personal: {
            ...prevState.contingent,
            year: value,
            yearDropDown: false,
          },
        }));
        break;
      default:
        break;
    }
  };

  renderDropDown = (
    dropDownName,
    dropDownCompState = false,
    data,
    width = '100%',
  ) => {
    console.log('renderDropDown::: ' + dropDownName);
    let keyName = 'title';
    if (dropDownCompState) {
      return (
        <View
          style={{
            height: 100,
            borderWidth: 1,
            width: width,
            borderColor: '#DEDEDF',
            backgroundColor: 'white',
          }}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <DropDownListItem
                value={item[keyName]}
                onSelectedItem={() =>
                  this.selectedDropDownValue(dropDownName, item[keyName])
                }
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      );
    }
  };

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
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'ssnValidation', true);
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
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'zipCodeValidation', true);
    }

    if (this.isEmpty(this.state.contingent.workTelephone)) {
      this.onUpdateField('contingent', 'workTelephoneValidation', false);
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'workTelephoneValidation', true);
    }

    if (this.isEmpty(this.state.contingent.city)) {
      this.onUpdateField('contingent', 'cityValidation', false);
      errMsg = 'error';
    } else {
      this.onUpdateField('contingent', 'cityValidation', true);
    }

    if (this.isEmpty(this.state.contingent.distribution)) {
      this.onUpdateField('contingent', 'distributionError', "Please Enter Distribution");
      this.onUpdateField('contingent', 'distributionValidation', false);
      errMsg = 'error';
    } else {
      this.validateDistribution();
      errMsg = 'error';
    }

    if (errMsg != 'error') {
      isValidationSuccess = true;
    }

    return isValidationSuccess;
  };

  updateState = () => {
    this.setState({isPrimaryBenificiary: true, isMainView: false});
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
      this.updateState();
      this.setState({account_Type:value});
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
              {item.name +'|'+item.dob}
            </Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortHeadingText}>
              {'Relationship to Owner'}
            </Text>
            <Text style={styles.shortContentText}>{item.relationToOwner}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortHeadingText}>
              {gblStrings.accManagement.distribution}
            </Text>
            <Text style={styles.shortContentText}>{item.distribution}</Text>
          </View>
          <Text style={[styles.contactUsLink, styles.deleteLink]}>
            {gblStrings.common.delete}
          </Text>
          <Text style={styles.addPrimaryLink}>
            {'+ Add Primary Beneficiary'}
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
                  {
                    'Distributions for primary beneficiary and for contingent beneficiary must equal 100 percentage.'
                  }
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
                  {'Contingent beneficiary are recommended but not required.'}
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
                  {
                    'If you wish to select a spouse or child and that person is not listed, you may add them in your Profile Page If your request cannot be completed using the selections below, please Contact Us.'
                  }
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
                  {
                    "If no beneficiary designation has been received and accepted by the custodian prior to your account (Account Owner) death, or if all of your designated beneficiaries have predeceased you, then your beneficiary sahll be your surviving spouse or, if there is no surviving spouse, then the account owner's estate. See the custodial agreement and disclosure statement applicable to your Victory Capital retirement plan for complete information."
                  }
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
                  {
                    'Additionally, you should contact your legal advisor regarding your specific situation.'
                  }
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
              <Text style={styles.shortHeadingText}>{'Balance'}</Text>
              <Text style={styles.shortContentText}>{data.balance}</Text>
            </View>
        </View>
        <View style={styles.contentViewInternal}>
          <Text
            style={[
              styles.manageBenificiariesHeadline,
              styles.paddingStyleLeft,
            ]}>
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
            style={[
              styles.manageBenificiariesHeadline,
              styles.paddingStyleLeft,
            ]}>
            {gblStrings.accManagement.contingentBeneficiary}
          </Text>
          <View style={styles.borderInternal} />
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortHeadingText}>
              {gblStrings.accManagement.nameDob}
            </Text>
            <CustomDropDown
              placeholder={gblStrings.common.select}
              propInputStyle={styles.customListTxtBox}
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
            onPress={() => {
              this.updateRothIRA();
            }}
          />
        </View>
      </View>
    );
  };

  // ----------------contingentBeneficiary--------------------------
  contingentBenificiary = () => {
    return (
      <View>
        <View style={[styles.contentViewInternal, styles.paddingStyleLeft]}>
          <Text
            style={[
              styles.manageBenificiariesHeadline,
              styles.paddingStyleLeft,
            ]}>
            {gblStrings.accManagement.contingentBeneficiary}
          </Text>
          <View style={styles.borderInternal} />
          <View style={styles.contingentView}>
            <Text style={styles.shortHeadingText}>
              {gblStrings.accManagement.nameDob}
            </Text>
          </View>
          <CustomDropDown
            placeholder={'Other-Person'}
            propInputStyle={styles.customListTxtBox}
          />
          {this.renderDropDown(
            'nameDOBDropDown',
            this.state.contingent.nameDOBDropDown,
            dummyData,
          )}
          <View style={styles.contingentView}>
            <Text style={styles.shortHeadingText}>
              {gblStrings.accManagement.relationToOwner}
            </Text>
          </View>
          <CustomDropDown
            placeholder={gblStrings.common.select}
            value={this.state.contingent.relationToOwner}
            propInputStyle={styles.customListTxtBox}
            onPress={this.onPressDropDown(
              'contingent',
              'relationToOwnerDropDown',
            )}
          />
          {this.renderDropDown(
            'relationToOwnerDropDown',
            this.state.contingent.relationToOwnerDropDown,
            relationship,
          )}
          <View style={styles.contingentView}>
            <Text style={styles.shortHeadingText}>
              {gblStrings.accManagement.distribution}
            </Text>
          </View>
          <View style={styles.flexDirectionRowStyle}>
            <GInputComponent
              //inputref={ref => this.distribution = ref}
              propInputStyle={this.state.contingent.distributionValidation? styles.customDistributionTxtBox:styles.customDistributionErrTxtBox}
              placeholder={''}
              keyboardType={'numeric'}
              maxLength={gblStrings.maxLength.distributionPercentage}
              onChangeText={this.onChangeText('contingent', 'distribution')}
              //onSubmitEditing={() => this.firstName.focus()}
            />
            <Text style={[styles.shortContentText, styles.paddingStyleLeft,{marginTop:scaledHeight(20)}]}>
              {'%'}
            </Text>
          </View>
          {!this.state.contingent.distributionValidation ? (
              <Text style={styles.errorMsg}>
                {this.state.contingent.distributionError}
              </Text>
            ) : null}
          <Text
            style={[
              styles.manageBenificiariesHeadline,
              styles.titleAlignStyle,
            ]}>
            {'Beneficiary Name'}
          </Text>
          <View style={styles.paddingStyleLeft}>
            <Text style={styles.lblTxt}>
              {'*' + gblStrings.accManagement.firstName}
            </Text>
            <GInputComponent
              // inputref={ref => this.firstName = ref}
              propInputStyle={
                this.state.contingent.firstNameValidation
                  ? styles.customTxtBox
                  : styles.customTxtBoxError
              }
              placeholder={''}
              maxLength={gblStrings.maxLength.firstName}
              onChangeText={this.onChangeText('contingent', 'firstName')}
              //onSubmitEditing={() => this.middleInitial.focus()}
            />
            {!this.state.contingent.firstNameValidation ? (
              <Text style={styles.errorMsg}>
                {gblStrings.accManagement.emptyFirstNameMsg}
              </Text>
            ) : null}
            <Text style={styles.lblTxt}>
              {gblStrings.accManagement.middleInitial}
            </Text>
            <GInputComponent
              //inputref={ref => this.middleInitial = ref}
              propInputStyle={styles.customTxtBox}
              placeholder={''}
              maxLength={gblStrings.maxLength.middleInitial}
              onChangeText={this.onChangeText('contingent', 'middleInitial')}
              onSubmitEditing={() => this.lastName.focus()}
            />

            <Text style={styles.lblTxt}>
              {'*' + gblStrings.accManagement.lastName}
            </Text>
            <GInputComponent
              //inputref={ref => this.lastName= ref}
              propInputStyle={
                this.state.contingent.lastNameValidation
                  ? styles.customTxtBox
                  : styles.customTxtBoxError
              }
              placeholder={''}
              maxLength={gblStrings.maxLength.lastName}
              returnKeyType={'done'}
              onChangeText={this.onChangeText('contingent', 'lastName')}
              //onSubmitEditing={() =>{this.suffix.focus()}}
            />
            {!this.state.contingent.lastNameValidation ? (
              <Text style={styles.errorMsg}>
                {gblStrings.accManagement.emptyLastNameMsg}
              </Text>
            ) : null}
            <Text style={styles.lblTxt}>{gblStrings.accManagement.suffix}</Text>
            <CustomDropDown
              placeholder={gblStrings.common.select}
              propInputStyle={styles.customListTxtBox}
              value={this.state.contingent.suffix}
              onPress={this.onPressDropDown('contingent', 'suffixDropDown')}
            />
            {this.renderDropDown(
              'suffixDropDown',
              this.state.contingent.suffixDropDown,
              suffixData,
            )}
          </View>

          {/*------------ beneficiary Information ------------------ */}

          <Text
            style={[
              styles.manageBenificiariesHeadline,
              styles.titleAlignStyle,
            ]}>
            {gblStrings.accManagement.beneficiaryInfo}
          </Text>
          <View style={styles.paddingStyleLeft}>
            <Text style={styles.lblTxt}>{'SSN'}</Text>
            <GInputComponent
              //inputref={ref => this.ssn = ref}
              propInputStyle={
                this.state.contingent.ssnValidation
                  ? styles.customTxtBox
                  : styles.customTxtBoxError
              }
              placeholder={''}
              keyboardType={'numeric'}
              maxLength={gblStrings.maxLength.ssnNo}
              onChangeText={this.onChangeText('contingent', 'ssn')}
            />
            {!this.state.contingent.ssnValidation ? (
              <Text style={styles.errorMsg}>
                {gblStrings.accManagement.emptySSNMsg}
              </Text>
            ) : null}
            <View style={(styles.flexStyle, styles.noteEnterDetail)}>
              <Text style={styles.helpTextStyle}>{'Eg: 222-33-4444'}</Text>
              <Text style={styles.contactUsLink}>
                {
                  gblStrings.settingAccountMessaging
                    .accountMessagingGeneralPrivacyPromise
                }
              </Text>
            </View>
            <Text style={styles.lblTxt}>{gblStrings.accManagement.dob}</Text>
            <View style={styles.flexDirectionRowStyle}>
              <View style={styles.dateDropDownWidth}>
                <CustomDropDown
                  placeholder={'MM'}
                  propInputStyle={styles.customDateTxtBox}
                  value={this.state.contingent.month}
                />
              </View>
              <View style={styles.dateDropDownWidth}>
                <CustomDropDown
                  placeholder={'DD'}
                  propInputStyle={styles.customDateTxtBox}
                  value={this.state.contingent.date}
                />
              </View>
              <View style={styles.dateDropDownWidth}>
                <CustomDropDown
                  placeholder={'YYYY'}
                  propInputStyle={styles.customDateTxtBox}
                  value={this.state.contingent.year}
                />
              </View>
            </View>
          </View>

          {/* --------------Beneficiary Address----------------------------------*/}

          <Text
            style={[
              styles.manageBenificiariesHeadline,
              styles.titleAlignStyle,
            ]}>
            {gblStrings.accManagement.beneficiaryAdd}
          </Text>
          <Text style={styles.topContentText}>
            {
              'Please provide full address. If you do not know the address, please remove and submit without address'
            }
          </Text>
          <View style={styles.paddingStyleLeft}>
            <Text style={styles.lblTxt}>
              {gblStrings.accManagement.address}
            </Text>
            <GInputComponent
              propInputStyle={
                this.state.contingent.addrLine1Validation
                  ? styles.customTxtBox
                  : styles.customTxtBoxError
              }
              placeholder={gblStrings.accManagement.empAddrLine1}
              maxLength={gblStrings.maxLength.emplAddress1}
              onChangeText={this.onChangeText('contingent', 'addrLine1')}
            />
            {!this.state.contingent.addrLine1Validation ? (
              <Text style={styles.errorMsg}>
                {gblStrings.accManagement.emptyAddressLine1Msg}
              </Text>
            ) : null}
            <GInputComponent
              propInputStyle={
                this.state.contingent.addrLine2Validation
                  ? styles.customTxtBox
                  : styles.customTxtBoxError
              }
              placeholder={gblStrings.accManagement.empAddrLine2}
              maxLength={gblStrings.maxLength.addressLine2}
              onChangeText={this.onChangeText('contingent', 'addrLine2')}
            />
            {!this.state.contingent.addrLine2Validation ? (
              <Text style={styles.errorMsg}>
                {gblStrings.accManagement.emptyEmployerAddressLine2Msg}
              </Text>
            ) : null}
            <Text style={styles.lblTxt}>
              {gblStrings.accManagement.workPhoneNo}
            </Text>
            <GInputComponent
              propInputStyle={
                this.state.contingent.workTelephoneValidation
                  ? styles.customTxtBox
                  : styles.customTxtBoxError
              }
              placeholder={'XXX-XXX-XXXX'}
              keyboardType={'phone-pad'}
              maxLength={gblStrings.maxLength.phoneNo}
              onChangeText={this.onChangeText('contingent', 'workTelephone')}
            />
            {!this.state.contingent.workTelephoneValidation ? (
              <Text style={styles.errorMsg}>
                {gblStrings.accManagement.emptyWorkPhoneNoMsg}
              </Text>
            ) : null}
            <Text style={styles.lblTxt}>{gblStrings.accManagement.city}</Text>
            <GInputComponent
              propInputStyle={
                this.state.contingent.cityValidation
                  ? styles.customTxtBox
                  : styles.customTxtBoxError
              }
              placeholder={gblStrings.accManagement.enterCity}
              returnKeyType={'done'}
              maxLength={gblStrings.maxLength.city}
              onChangeText={this.onChangeText('contingent', 'city')}
            />
            {!this.state.contingent.cityValidation ? (
              <Text style={styles.errorMsg}>
                {gblStrings.accManagement.emptyCityMsg}
              </Text>
            ) : null}
            <Text style={styles.lblTxt}>{gblStrings.accManagement.state}</Text>
            <CustomDropDown
              placeholder={gblStrings.common.select}
              propInputStyle={styles.customListTxtBox}
            />
            <Text style={styles.lblTxt}>
              {gblStrings.accManagement.zipcode}
            </Text>
            <GInputComponent
              propInputStyle={
                this.state.contingent.zipCodeValidation
                  ? styles.customTxtBox
                  : styles.customTxtBoxError
              }
              placeholder={gblStrings.accManagement.enterZip}
              returnKeyType={'done'}
              keyboardType={'numeric'}
              maxLength={gblStrings.maxLength.zipCode}
              onChangeText={this.onChangeText('contingent', 'zipCode')}
            />
            {!this.state.contingent.zipCodeValidation ? (
              <Text style={styles.errorMsg}>
                {gblStrings.accManagement.emptyZipCodeMsg}
              </Text>
            ) : null}
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
                    style={[
                      styles.manageBenificiariesHeadline,
                      styles.paddingHorizontalStyle,
                    ]}>
                    {item.accountType}
                  </Text>
                  <View style={styles.borderInternal} />
                  <View style={styles.paddingHorizontalStyle}>
                    <View style={styles.blockMarginTop}>
                      <Text style={styles.shortHeadingText}>
                        {gblStrings.accManagement.contractNumber}
                      </Text>
                      <Text
                        style={[
                          styles.shortContentText,
                          styles.contractNumberSize,
                        ]}>
                        {item.contractNumber}
                      </Text>
                    </View>
                    <View style={styles.settingsBorder} />
                    <View style={styles.blockMarginTop}>
                      <Text style={styles.infoShortText}>
                        {'Information as on' + item.dateModified}
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
        <ScrollView style={styles.flexMainView}>
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
              {
                'Victory Mutual Funds and USAA Mutual Funds are distributed by Victory Capital Advisers, Inc. (VCA). VictoryShares ETFs and VictoryShares USAA ETFs are distributed by Foreside Fund Services, LLC (Foreside). VCA and Foreside are members of FINRA and SIPC. Victory Capital Management Inc. (VCM) is the investment adviser to the Victory Mutual Funds, USAA Mutual Funds, VictoryShares ETFs and VictoryShares USAA ETFs. VCA and VCM are not affiliated with Foreside. USAA is not affiliated with Foreside, VCM, or VCA. USAA and the USAA logos are registered trademarks and the USAA Mutual Funds and USAA Investments logos are trademarks of United Services Automobile Association and are being used by Victory Capital and its affiliates under license. Victory Capital means Victory Capital Management Inc., the investment manager of the USAA 529 College Savings Plan (Plan). The Plan is distributed by Victory Capital Advisers, Inc., a broker dealer registered with FINRA and an affiliate of Victory Capital. Victory Capital and its affiliates are not affiliated with United Services Automobile Association or its affiliates. USAA and the USAA logo are registered trademarks and the USAA 529 College Savings Plan logo is a trademark of United Services Automobile Association and are being used by Victory Capital and its affiliates under license.'
              }
            </Text>
          </View>
          <GFooterComponent />
        </ScrollView>
      </View>
    );
  }
}

ManageBenificiariesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
};

export default ManageBenificiariesComponent;
