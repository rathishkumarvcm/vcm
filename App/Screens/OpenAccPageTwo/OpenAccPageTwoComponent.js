/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList,Image } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GInputComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner, GIcon, GDateComponent,GDropDownComponent } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio, CustomDropDown } from '../../AppComponents';

import PropTypes from "prop-types";
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import ImagePicker from 'react-native-image-picker';

let imagePickerOptions = {
    title: 'Select Image',
    customButtons: [
      { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
      avatarSource : ''
    },
  };

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
];

/*
const prefixData = [
    { "key": "atty", "value": "Atty" },
    { "key": "brother", "value": "Brother" },
    { "key": "dean", "value": "Dean" },
    { "key": "dr", "value": "Dr" },
    { "key": "elder", "value": "Elder" },
    { "key": "father", "value": "Father" },
];
const genderData = [
    { "key": "M", "value": "male" },
    { "key": "F", "value": "female" }
];
const maritalStatusData = [
    { "key": "D", "value": "divorced" },
    { "key": "M", "value": "married" },
    { "key": "S", "value": "single" }
];
*/

const suffixData = [
    { "key": "cpa", "value": "CPA" },
    { "key": "dds", "value": "DDS" },
    { "key": "esq", "value": "Esq" },
    { "key": "jd", "value": "JD" },
    { "key": "jr", "value": "Jr" },
    { "key": "lld", "value": "LLD" },
    { "key": "md", "value": "MD" },
    { "key": "phd", "value": "PHd" },
    { "key": "ret", "value": "Ret" },
    { "key": "rn", "value": "RN" },
    { "key": "sr", "value": "Sr" },
    { "key": "do", "value": "DO" }
];


const beneficiaryTypeData =
    [
        { "key": "individuals", "value": "Individuals1" },
        { "key": "other - individuals", "value": "Other - Individual1" }];

const relationShipData = [
    { "key": "individuals", "value": "Individuals" },
    { "key": "other - individuals", "value": "Other - Individual" },
    { "key": "aunt", "value": "Aunt" },
    { "key": "brother", "value": "Brother" }
];

const empStatusData = [
    {
        "key": 'MilitaryServices',
        "value": 'Full Time Military Service',
    },
    {
        "key": 'Public Sevctor',
        "value": 'Government (non Military) Public Sector',
    },
    {
        "key": 'Homemaker',
        "value": 'Homemaker',
    },
    {
        "key": 'Private Sector',
        "value": 'Private Sector or non Government',
    },
    {
        "key": 'Retired',
        "value": 'Retired',
    },
    {
        "key": 'Self-Employed',
        "value": 'Self-Employed',
    },
    {
        "key": 'Student',
        "value": 'Student',
    },
    {
        "key": 'Unemployed',
        "value": 'Not Employed',
    },
    {
        "key": 'Others',
        "value": 'Others',
    },
];



const DropDownListItem = (props) => {
    console.log("DropDownListItem:: ");
    return (
        <TouchableOpacity
            style={{ height: 33 }}
            onPress={props.onSelectedItem}
        >
            <Text> {props.value} </Text>
        </TouchableOpacity>
    );
};
DropDownListItem.propTypes = {
    onSelectedItem: PropTypes.func,
    value: PropTypes.string
};


class OpenAccPageTwoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isValidationSuccess: true,
            errMsg:"",
            itemID: "",
            selectedItemID: "",
            selectedItemName: "",
            // Perosnal info
            nickname: "",
            userAvatar:"",
            personal: {
                prefix: "",
                prefixDropDown: false,
                firstName: "",
                middleInitial: "",
                lastName: "",
                suffix: "",
                suffixDropDown: false,
                dob: "",
                gender: "",
                maritalStatus: "",
                maritalStatusDropDown: false,
                citizenship: "U.S",

                mailingAddressType: "",
                addressType: "",
                addrLine1: "",
                addrLine2: "",
                zipcode: "",
                city: "",
                stateCity: "",
                stateCityDropDown: false,
                isYourPhysicalAddresSame: false,
                mobileNo: "",
                contactDuringMobNo: "",
                contactDuringMobNoDropDown: false,
                telePhoneNo2: "",
                contactDuringTelePhone2: "",
                contactDuringTelePhone2DropDown: false,
                telePhoneNo3: "",
                contactDuringTelePhone3: "",
                contactDuringTelePhone3DropDown: false,
                emailAddress: "",
                socialSecurityNo: "",
                phoneType:"",
                phoneTypeDropDown:false,
                PhoneType2:"",
                phoneType2DropDown:false,
                PhoneType3:"",
                phoneType3DropDown:false,


                phoneTypeValidation:true,
                phoneType2Validation:true,
                phoneType3Validation:true,
                contactDuringMobNoValidation:true,
                prefixValidation: true,
                firstNameValidation: true,
                lastNameValidation: true,
                dobValidation: true,
                genderValidation: true,
                maritalStatusValidation: true,
                citizenshipValidation: true,
                addressTypeValidation: true,
                mailingAddressTypeValidation: true,
                addrLine1Validation: true,
                addrLine2Validation: true,
                zipcodeValidation: true,
                cityValidation: true,
                stateCityValidation: true,
                stateValidation: true,
                isYourPhysicalAddresSameValidation: false,
                mobileNoValidation: true,
                workPhoneNoValidation: true,
                emailAddressValidation: true,
                socialSecurityNoValidation: true,

                // Employer Info
                empStatus: "",
                empStatusDropDown: false,
                empIndustry: "",
                empIndustryDropDown: false,
                empOccupation: "",
                empName: "",
                empAddrLine1: "",
                empAddrLine2: "",
                empWorkPhoneNo: "",
                empZipcode: "",
                empCity: "",
                empStateCity: "",
                empStateCityDropDown: false,
                isSeniorPoliticalFigure: null,
                seniorPoliticalName: "",

                empStatusValidation: true,
                seniorPoliticalNameValidation: true,



                // Financial Info
                annualIncome: "",
                annualIncomeDropDown: false,
                taxBracket: "",
                taxBracketDropDown: false,
                networth: "",
                networthDropDown: false,
                taxFilingStatus: "",
                taxFilingStatusDropDown: false,


                //Military Info

                isMilitaryHistory: null,
                militaryStatus: "",
                militaryStatusDropDown: false,
                branchOfService: "",
                branchOfServiceDropDown: false,
                rank: "",
                rankKey: "",
                rankDropDown: false,

                fromDateMilitary: "",
                toDateMilitary: "",
                commissionSource: "",

                militaryStatusValidation: true,


                //ExpandCollapse
                isPersonalInfoExpanded: true,
                isEmploymentInfoExpanded: true,
                isFinancialInfoExpanded: true,
                isMilitaryInfoExpanded: true,
                isRegulatoryInfoExpanded: true,

            },

            jointOwner: {
                prefix: "",
                prefixDropDown: false,
                firstName: "",
                middleInitial: "",
                lastName: "",
                suffix: "",
                suffixDropDown: false,
                dob: "",
                gender: "",
                maritalStatus: "",
                maritalStatusDropDown: false,
                citizenship: "U.S",

                mailingAddressType: "",
                addressType: "",
                addrLine1: "",
                addrLine2: "",
                zipcode: "",
                city: "",
                stateCity: "",
                stateCityDropDown: false,
                isYourPhysicalAddresSame: false,
                mobileNo: "",
                contactDuringMobNo: "",
                contactDuringMobNoDropDown: false,
                telePhoneNo2: "",
                contactDuringTelePhone2: "",
                contactDuringTelePhone2DropDown: false,
                telePhoneNo3: "",
                contactDuringTelePhone3: "",
                contactDuringTelePhone3DropDown: false,
                emailAddress: "",
                socialSecurityNo: "",
                relationshipToAcc: "",
                relationshipToAccDropDown: false,
                phoneType:"",
                phoneTypeDropDown:false,
                PhoneType2:"",
                phoneType2DropDown:false,
                PhoneType3:"",
                phoneType3DropDown:false,


                phoneTypeValidation:true,
                phoneType2Validation:true,
                phoneType3Validation:true,
                contactDuringMobNoValidation:true,
                prefixValidation: true,
                firstNameValidation: true,
                lastNameValidation: true,
                dobValidation: true,
                genderValidation: true,
                maritalStatusValidation: true,
                citizenshipValidation: true,
                addressTypeValidation: true,
                mailingAddressTypeValidation: true,
                addrLine1Validation: true,
                addrLine2Validation: true,
                zipcodeValidation: true,
                cityValidation: true,
                stateCityValidation: true,
                stateValidation: true,
                isYourPhysicalAddresSameValidation: false,
                mobileNoValidation: true,
                workPhoneNoValidation: true,
                emailAddressValidation: true,
                socialSecurityNoValidation: true,
                relationshipToAccValidation: true,
                dobJointValidation: true,


                // Employer Info
                empStatus: "",
                empStatusDropDown: false,
                empIndustry: "",
                empIndustryDropDown: false,
                empOccupation: "",
                empName: "",
                empAddrLine1: "",
                empAddrLine2: "",
                empWorkPhoneNo: "",
                empZipcode: "",
                empCity: "",
                empStateCity: "",
                empStateCityDropDown: false,
                isSeniorPoliticalFigure: null,
                seniorPoliticalName: "",

                empStatusValidation: true,
                seniorPoliticalNameValidation: true,

                // Employer Info
                annualIncome: "",
                annualIncomeDropDown: false,
                taxBracket: "",
                taxBracketDropDown: false,
                networth: "",
                networthDropDown: false,
                taxFilingStatus: "",
                taxFilingStatusDropDown: false,


                //Military Info

                isMilitaryHistory: null,
                militaryStatus: "",
                militaryStatusDropDown: false,
                branchOfService: "",
                branchOfServiceDropDown: false,
                rank: "",
                rankKey: "",
                rankDropDown: false,

                fromDateMilitary: "",
                toDateMilitary: "",
                commissionSource: "",

                militaryStatusValidation: true,

                isPersonalInfoExpanded: true,
                isEmploymentInfoExpanded: true,
                isFinancialInfoExpanded: true,
                isMilitaryInfoExpanded: true,
                isRegulatoryInfoExpanded: true,
            },

            childBeneficiary: {
                prefix: "",
                prefixDropDown: false,
                firstName: "",
                middleInitial: "",
                lastName: "",
                suffix: "",
                suffixDropDown: false,
                dob: "",
                gender: "",
                mobileNo: "",
                emailAddress: "",
                socialSecurityNo: "",
                relationshipToAcc: "",
                relationshipToAccDropDown: false,
                vcmNo: "",
                phoneType:"",
                phoneTypeDropDown:false,


                phoneTypeValidation:true,
                prefixValidation: true,
                firstNameValidation: true,
                lastNameValidation: true,
                dobValidation: true,
                genderValidation: true,
                vcmNoValidation: true,


                mobileNoValidation: true,
                emailAddressValidation: true,
                socialSecurityNoValidation: true,
                relationshipToAccValidation: true,



                isSeniorPoliticalFigure: null,
                seniorPoliticalName: "",

                seniorPoliticalNameValidation: true,

                isPersonalInfoExpanded: true,
                isEmploymentInfoExpanded: true,
                isFinancialInfoExpanded: true,
                isMilitaryInfoExpanded: true,
                isRegulatoryInfoExpanded: true,

            },

            retirement: {
                beneficiaryType: "",
                beneficiaryTypeDropDown: false,
                beneficiaryDistPercent: "",

                prefix: "",
                prefixDropDown: false,
                firstName: "",
                middleInitial: "",
                lastName: "",
                suffix: "",
                suffixDropDown: false,
                dob: "",
                gender: "",

                mobileNo: "",
                emailAddress: "",
                socialSecurityNo: "",
                relationshipToAcc: "",
                relationshipToAccDropDown: false,
                phoneType:"",
                phoneTypeDropDown:false,


                phoneTypeValidation:true,
                firstNameValidation: true,
                lastNameValidation: true,
                dobValidation: true,
                emailAddressValidation: true,
                socialSecurityNoValidation: true,
                beneficiaryTypeValidation: true,
                relationshipToAccValidation: true,
                beneficiaryDistPercentValidation: true,


                isPersonalInfoExpanded: true,
                isEmploymentInfoExpanded: true,
                isFinancialInfoExpanded: true,
                isMilitaryInfoExpanded: true,
                isRegulatoryInfoExpanded: true,
            },

             currentZipCodeRef :{
                   stateKey:"",
                   keyName:""
             }
            // others
        };
        // this.onChangeText = this.onChangeText.bind(this);

    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

        console.log("componentDidMount::::> " + this.props);
        let payload = [

        ];
        const compositePayloadData = [
            "prefix",
            "suffix",
            "gender",
            "marital_status",
            "citizenship",
            "mailing_addr_type",
            "contact_time",
            "employment_status",
            "industry",
            "prim_src_income",
            "annual_income",
            "net_worth",
            "tax_filling_status",
            "mil_status",
            "mil_serv_branch",
            "relationship",
            "ben_type",
            "custd_relation",
            "phone_type"
        ];

        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }

        this.props.getPersonalCompositeData(payload);


    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate::::> "+prevState);
        if (this.props !== prevProps) {
            const responseKey = ActionTypes.PERSONAL_INFO_SAVE_OPENING_ACCT;
            if (this.props.accOpeningData[responseKey]) {
                if (this.props.accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = this.props.accOpeningData[responseKey];
                    if (tempResponse.statusCode == 200 || tempResponse.statusCode == '200') {
                        let msg = tempResponse.message;
                        console.log("Account Type Saved ::: :: " + msg);
                        alert(tempResponse.result);
                    } else {
                        alert(tempResponse.message);
                    }
                }
            }

            const stateCityKey = ActionTypes.GET_STATECITY;
            if (this.props.addressFormatData[stateCityKey]) {
                if (this.props.addressFormatData[stateCityKey] !== prevProps.addressFormatData[stateCityKey]) {
                    const tempResponse = this.props.addressFormatData[stateCityKey];
                    if (tempResponse && tempResponse.City) {
                      
                       // alert("currentZipCodeRef::"+this.state.currentZipCodeRef.keyName);

                            if(this.state.currentZipCodeRef.keyName == "empZipcode"){
                                this.setState(prevState => ({
                                    [this.state.currentZipCodeRef.stateKey]: {
                                        ...prevState[this.state.currentZipCodeRef.stateKey],
                                        empCity: tempResponse.City,
                                        empStateCity: tempResponse.State
    
                                    }
                                }));
                            }else{
                                this.setState(prevState => ({
                                    [this.state.currentZipCodeRef.stateKey]: {
                                        ...prevState[this.state.currentZipCodeRef.stateKey],
                                        city: tempResponse.City,
                                        stateCity: tempResponse.State
    
                                    }
                                }));
                            }
                    } 
                }
            }

            const addressKey = ActionTypes.GET_ADDRESSFORMAT;
            if (this.props.addressFormatData[addressKey]) {
                if (this.props.addressFormatData[addressKey] !== prevProps.addressFormatData[addressKey]) {
                    const tempResponse = this.props.addressFormatData[addressKey];
                    if (tempResponse && tempResponse.City) {

                        if (this.state.currentZipCodeRef.keyName == "empZipcode") {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    empCity: tempResponse.City,
                                    empStateCity: tempResponse.State,
                                    empAddrLine1: tempResponse.Address1 || "",
                                    empAddrLine2: tempResponse.Address2 || ""

                                }
                            }));
                        } else {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    city: tempResponse.City,
                                    stateCity: tempResponse.State,
                                    addrLine1: tempResponse.Address1 || "",
                                    addrLine2: tempResponse.Address2 || ""

                                }
                            }));
                        }

                    }
                }
            }

            const uploadImgKey = ActionTypes.UPLOAD_AVATAR;
            if (this.props.accOpeningData[uploadImgKey]) {
                if (this.props.accOpeningData[uploadImgKey] !== prevProps.accOpeningData[uploadImgKey]) {
                    const tempResponse = this.props.accOpeningData[uploadImgKey];
                    //alert ("Image stautus \n::"+JSON.stringify(tempResponse));
                    if (tempResponse && tempResponse.b ) {
                         if(tempResponse.b.Location){
                             alert ("Image Uploaded Successfully \n::"+tempResponse.b.Location);
                         }
                    }
                }
            }
            
        }


    }


    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    /*------- Page Navigation methods --------*/

    onClickHeader = () => {
        console.log("#TODO : onClickHeader");
    }
    goBack = () => {
        this.props.navigation.goBack();
    }
    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }
    onClickDownloadPDF = () => {
        alert("#TODO : Download");
    }
    onSelected = (item) => {
        console.log("item: " + item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    onClickNext = () => {


        if (this.validateFields()) {
            const payload = this.getPayload();
            this.props.saveData("OpenAccPageTwo", payload);
            this.props.navigation.navigate({ routeName: 'openAccPageThree', key: 'openAccPageThree' });
        }
    }
    getPayload = () => {
        const accType = "" + this.props.navigation.getParam('accType', '');

        const individualAccPayload = {
            "personalInfo": {
                "prefix": this.state.personal.prefix || "-",
                "firstName": this.state.personal.firstName || "-",
                "lastName": this.state.personal.lastName || "-",
                "suffix": this.state.personal.suffix || "-",
                "dateOfBirth": this.state.personal.dob || "-",
                "gender": this.state.personal.gender || "-",
                "maritalStatus": this.state.personal.maritalStatus || "-",
                "citizenship": this.state.personal.citizenship || "-",
                "ssnTin": this.state.personal.socialSecurityNo || "-",
                "mailingAddress": {
                    "addressType": this.state.personal.citizenship || "-",
                    "streetNbr": this.state.personal.addrLine1 || "-",
                    "streetName": this.state.personal.addrLine2 || "-",
                    "zip": this.state.personal.zipcode || "-",
                    "city": this.state.personal.city || "-",
                    "state": this.state.personal.stateCity || "-"
                },
                "isPhysAddrSameAsMailAddr": this.state.personal.isYourPhysicalAddresSame || "-",
                "physicalAddress": {
                    "addressType": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.citizenship || "-" : "-",
                    "streetNbr": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.addrLine1 || "-" : "-",
                    "streetName": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.addrLine2 || "-" : "-",
                    "zip": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.zipcode || "-" : "-",
                    "city": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.city || "-" : "-",
                    "state": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.stateCity || "-" : "-",
                },
                "contactDetails": {
                    "phoneNumber1": {
                        "phoneNumber": this.state.personal.mobileNo || "-",
                        "phoneType": "Home",
                        "contactDuring": this.state.personal.contactDuringMobNo || "-"
                    },
                    "phoneNumber2": {
                        "phoneNumber": this.state.personal.telePhoneNo2 || "-",
                        "phoneType": "Home",
                        "contactDuring": this.state.personal.contactDuringTelePhone2 || "-"
                    },
                    "phoneNumber3": {
                        "phoneNumber": this.state.personal.telePhoneNo3 || "-",
                        "phoneType": "Home",
                        "contactDuring": this.state.personal.contactDuringTelePhone3 || "-"
                    },
                    "emailAddress": this.state.personal.emailAddress || "-"
                }
            },
            "employementInfo": {
                "employmentStatus": this.state.personal.empStatus || "-",
                "industry": this.state.personal.empIndustry || "-",
                "occupation": this.state.personal.empOccupation || "-",
                "employerName": this.state.personal.empName || "-",
                "employerAddress": {
                    "addressLine1": this.state.personal.empAddrLine1 || "-",
                    "addressLine2": this.state.personal.empAddrLine2 || "-",
                    "city": this.state.personal.empCity || "-",
                    "state": this.state.personal.empStateCity || "-",
                    "zip": this.state.personal.empZipcode || "-",
                }
            },
            "financialInfo": {
                "annualIncome": this.state.personal.annualIncome || "-",
                "taxBracket": this.state.personal.taxBracket || "-",
                "netWorth": this.state.personal.networth || "-",
                "taxFilingStatus": this.state.personal.taxFilingStatus || "-",
            },
            "militaryInfo": {
                "servingStatus": this.state.personal.isMilitaryHistory || "-",
                "militaryStatus": this.state.personal.militaryStatus || "-",
                "branchOfService": this.state.personal.branchOfService || "-",
                "rank": this.state.personal.rank || "-",
                "serviceStartDate": this.state.personal.fromDateMilitary || "-",
                "serviceToDate": this.state.personal.toDateMilitary || "-",
                "commissionSource": this.state.personal.commissionSource || "-",
            },
            "regulatoryDetails": {
                "isPep": this.state.personal.isSeniorPoliticalFigure || "-",
                "pepName": this.state.personal.seniorPoliticalName || "-",
            }
        };

        const jointAccPayload = {
            "jointOwner": {
                "relation": "-",
                "personalInfo": {
                    "prefix": this.state.jointOwner.prefix || "-",
                    "firstName": this.state.jointOwner.firstName || "-",
                    "lastName": this.state.jointOwner.lastName || "-",
                    "suffix": this.state.jointOwner.suffix || "-",
                    "dateOfBirth": this.state.jointOwner.dob || "-",
                    "gender": this.state.jointOwner.gender || "-",
                    "maritalStatus": this.state.jointOwner.maritalStatus || "-",
                    "citizenship": this.state.jointOwner.citizenship || "-",
                    "ssnTin": this.state.jointOwner.socialSecurityNo || "-",
                    "mailingAddress": {
                        "addressType": this.state.jointOwner.citizenship || "-",
                        "streetNbr": "-",
                        "streetName": "-",
                        "zip": this.state.jointOwner.zipcode || "-",
                        "city": this.state.jointOwner.city || "-",
                        "state": this.state.jointOwner.stateCity || "-"
                    },
                    "isPhysAddrSameAsMailAddr": this.state.jointOwner.isYourPhysicalAddresSame || "-",
                    "physicalAddress": {
                        "addressType": "U.S or U.S Territories",
                        "streetNbr": "4900",
                        "streetName": "Tiedeman Rd",
                        "zip": "44144",
                        "city": "Brooklyn",
                        "state": "OH"
                    },
                    "contactDetails": {
                        "phoneNumber1": {
                            "phoneNumber": this.state.jointOwner.mobileNo || "-",
                            "phoneType": "Home",
                            "contactDuring": this.state.jointOwner.contactDuringMobNo || "-"
                        },
                        "phoneNumber2": {
                            "phoneNumber": this.state.jointOwner.telePhoneNo2 || "-",
                            "phoneType": "Home",
                            "contactDuring": this.state.jointOwner.contactDuringTelePhone2 || "-"
                        },
                        "phoneNumber3": {
                            "phoneNumber": this.state.jointOwner.telePhoneNo3 || "-",
                            "phoneType": "Home",
                            "contactDuring": this.state.jointOwner.contactDuringTelePhone3 || "-"
                        },
                        "emailAddress": this.state.jointOwner.emailAddress || "-"
                    }
                },
                "employementInfo": {
                    "employmentStatus": this.state.jointOwner.empStatus || "-",
                    "industry": this.state.jointOwner.empIndustry || "-",
                    "occupation": this.state.jointOwner.empOccupation || "-",
                    "employerName": this.state.jointOwner.empName || "-",
                    "employerAddress": {
                        "addressLine1": this.state.jointOwner.empAddrLine1 || "-",
                        "addressLine2": this.state.jointOwner.empAddrLine2 || "-",
                        "city": this.state.jointOwner.empCity || "-",
                        "state": this.state.jointOwner.empStateCity || "-",
                        "zip": this.state.jointOwner.empZipcode || "-",
                    }
                },
                "financialInfo": {
                    "annualIncome": this.state.jointOwner.annualIncome || "-",
                    "taxBracket": this.state.jointOwner.taxBracket || "-",
                    "netWorth": this.state.jointOwner.networth || "-",
                    "taxFilingStatus": this.state.jointOwner.taxFilingStatus || "-",
                },
                "militaryInfo": {
                    "servingStatus": this.state.jointOwner.isMilitaryHistory || "-",
                    "militaryStatus": this.state.jointOwner.militaryStatus || "-",
                    "branchOfService": this.state.jointOwner.branchOfService || "-",
                    "rank": this.state.jointOwner.rank || "-",
                    "serviceStartDate": this.state.jointOwner.fromDateMilitary || "-",
                    "serviceToDate": this.state.jointOwner.toDateMilitary || "-",
                    "commissionSource": this.state.jointOwner.commissionSource || "-",
                },
                "regulatoryDetails": {
                    "isPep": this.state.jointOwner.isSeniorPoliticalFigure || "-",
                    "pepName": this.state.jointOwner.seniorPoliticalName || "-",
                }
            }
        };

        const retirementAccPayload = {
            "beneficiaryInfo": {
                "primaryBeneficiary": {
                    "totalBeneficiary": "1",
                    "beneficiary1Details": {
                        "type": this.state.retirement.beneficiaryType || "-",
                        "relation": this.state.retirement.relationshipToAcc || "-",
                        "distributionPercentage": this.state.retirement.beneficiaryDistPercent || "-",
                        "firstName": this.state.retirement.firstName || "-",
                        "middleInitial": this.state.retirement.middleInitial || "-",
                        "lastName": this.state.retirement.lastName || "-",
                        "ssnTin": this.state.retirement.socialSecurityNo || "-",
                        "dateOfBirth": this.state.retirement.dob || "-",
                        "emailAddress": this.state.retirement.emailAddress || "-"
                    }
                    //"beneficiary2Details,beneficiary3Details": ""
                },
                "secondBeneficiary": { //  #TODO
                    "beneficiary1Details": {
                        "type": this.state.retirement.beneficiaryType || "-",
                        "relation": this.state.retirement.relationshipToAcc || "-",
                        "distributionPercentage": this.state.retirement.beneficiaryDistPercent || "-",
                        "firstName": this.state.retirement.firstName || "-",
                        "middleInitial": this.state.retirement.middleInitial || "-",
                        "lastName": this.state.retirement.lastName || "-",
                        "ssnTin": this.state.retirement.socialSecurityNo || "-",
                        "dateOfBirth": this.state.retirement.dob || "-",
                        "emailAddress": this.state.retirement.emailAddress || "-"
                    }
                }
            }
        };




        let payload = {};
        if (this.props && this.props.accOpeningData && this.props.accOpeningData.savedAccData) {
            payload = {
                ...this.props.accOpeningData.savedAccData,
                "accountNickName": this.state.nickname || "-"
            };
        }



        switch (accType) {
            case "Individual Account":
                payload = {
                    ...payload,
                    ...individualAccPayload
                };
                break;
            case "Joint Account":
                payload = {
                    ...payload,
                    ...individualAccPayload,
                    ...jointAccPayload
                };
                break;
            case "Retirement Account":
                payload = {
                    ...payload,
                    ...individualAccPayload,
                    ...retirementAccPayload
                };
                break;
            case "UGMA/UTMA Account":
                break;
        }

        return payload;
    }
    onClickSave = () => {

        console.log("onClickSave::::> ");
        if (this.validateFields()) {
            const payload = this.getPayload();
            this.props.saveAccountOpening("OpenAccPageTwo", payload);
        }
    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }
    uploadImage = () => {
        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            //console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log('IMAGE PICKER SUCCESS::> ');

                const source = { uri: response.uri };
                const base64source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log("base64source", base64source.length);
                this.setState({
                    userAvatar: source
                });
              if(response.data && response.data != null && response.data != undefined && response.data.length>0){
                    const payload = {
                        "Body":""+response.data
                    };
                    this.props.uploadAavatarImg(payload);
              }
                
            }
        });
    }

    launchCamera = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.launchCamera(options, (response) => {
         // console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
           // const source = { uri: response.uri };
            // console.log('response', JSON.stringify(response));
            this.setState({
              filePath: response,
              fileData: response.data,
              fileUri: response.uri
            });
          }
        });
    
      }

    uploadForm = () => {
        
    }
    /*------- Input Events & Delegate methods --------*/


    onSubmitZipEditing = (stateKey,keyName,nextInputFocus) => text =>{
        console.log("onSubmitZipEditing:::>" +nextInputFocus+" "+text);

        let newItems = {...this.state.currentZipCodeRef};
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
       // alert("onSubmitZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

        const payload = {
            "Zip": this.state[stateKey][keyName]
        };
        const addressPayload = {
            ...payload,
            "Address1": this.state[stateKey]["addrLine1"],
            "Address2": this.state[stateKey]["addrLine2"],
            "City": this.state[stateKey]["city"],
            "State":this.state[stateKey]["stateCity"]
        };

        
        this.props.getStateCity(payload);
        this.props.getAddressFormat(addressPayload);

       // nextInputFocus.focus();
    }
    onSubmitEmpZipEditing = (stateKey,keyName,nextInputFocus) => text =>{
        console.log("onSubmitEmpZipEditing:::>" +nextInputFocus+" "+text);

        let newItems = {...this.state.currentZipCodeRef};
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
       // alert("onSubmitEmpZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

        const payload = {
            "Zip": this.state[stateKey][keyName]
        };
        const addressPayload = {
            ...payload,
            "Address1": this.state[stateKey]["empAddrLine1"],
            "Address2": this.state[stateKey]["empAddrLine2"],
            "City": this.state[stateKey]["empCity"],
            "State":this.state[stateKey]["empStateCity"]
        };

        
        this.props.getStateCity(payload);
        this.props.getAddressFormat(addressPayload);

       // nextInputFocus.focus();
    }

    onSubmitEditing = (input) => text => {

        console.log("onSubmitEditing:::>" + text);
        /* 
       
         if (input !== "" && input !== null && input !== undefined) {
             if (this[input] !== null && input !== undefined) {
                 if (typeof this[input].focus === 'function') {
                   //  this[input].focus();
                 }
             }
         }  
         */

        input.focus();
    }
    onChangeDate = (stateKey, keyName) => date => {
        console.log("onChangeDate:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: date
            }
        }));
    }
    onChangeSpiltDate = (stateKey, keyName, index) => date => {
        console.log("onChangeSpiltDate:::>" + index + " " + date);
        let tempCurrentDate = "" + this.state[stateKey][keyName];

        let tempCurrentDateComp = tempCurrentDate != "" ? tempCurrentDate.split('-') : [];

        let returnDate = "";
        if (tempCurrentDateComp.length > 2) {
            tempCurrentDateComp[index] = date;
        } else {
            console.log("index:::>" + index);

            switch (index) {

                case 0:
                    console.log("0:::>" + index);

                    tempCurrentDateComp[index] = date;
                    tempCurrentDateComp[1] = "";
                    tempCurrentDateComp[2] = "";

                    break;
                case 1:
                    console.log("2:::>" + index);

                    tempCurrentDateComp[0] = "";
                    tempCurrentDateComp[index] = date;
                    tempCurrentDateComp[2] = "";
                    break;
                case 2:
                    console.log("3:::>" + index);

                    tempCurrentDateComp[0] = "";
                    tempCurrentDateComp[1] = "";
                    tempCurrentDateComp[index] = date;
                    break;
            }
        }

        returnDate = tempCurrentDateComp.join("-");



        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: returnDate
            }
        }));
    }
    onChangeText = (stateKey, keyName) => text => {
        console.log("onChangeText:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: text
            }
        }));
    }
    onChangeNickName = () => text => {
        console.log("onChangeNickName:::>");
        this.setState({ nickname: text });
    }
    onPressDropDown = (stateKey, keyName) => () => this.setState(prevState => ({
        [stateKey]: {
            ...prevState[stateKey],
            [keyName]: !this.state[stateKey][keyName]
        }
    }));

    onPressRadio = (stateKey, keyName, text) => () => this.setState(prevState => ({
        [stateKey]: {
            ...prevState[stateKey],
            [keyName]: text
        }
    }));

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }


    /*------- Validations methods --------*/

    validateIndividualAccInfoFields = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";
        // var employmentInfoVisible = false;

        if (this.isEmpty(this.state.personal.empStatus) && this.state.personal.empStatus !== "Not Employed" && this.state.personal.empStatus !== "Homemaker" && this.state.personal.empStatus !== "Others" && this.state.personal.empStatus !== "Self-Employed") {
            //  employmentInfoVisible = true;
        }

        /* if (this.isEmpty(this.state.personal.prefix)) {
             errMsg = gblStrings.accManagement.emptyPrefixMsg;
             input = 'prefix';
         } else 
         */
        if (this.isEmpty(this.state.personal.firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
        } else if (this.isEmpty(this.state.personal.lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
        } else if (this.isEmpty(this.state.personal.dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
        } else if (this.isEmpty(this.state.personal.gender)) {
            errMsg = gblStrings.accManagement.emptyGenderMsg;
        } else if (this.isEmpty(this.state.personal.maritalStatus)) {
            errMsg = gblStrings.accManagement.emptyMaritalMsg;
            input = 'maritalStatus';
        } else if (this.isEmpty(this.state.personal.citizenship)) {
            errMsg = gblStrings.accManagement.emptyCitizenshipMsg;
        } else if (this.isEmpty(this.state.personal.mailingAddressType)) {
            errMsg = gblStrings.accManagement.emptyAddressTypeMsg;
        } else if (this.isEmpty(this.state.personal.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
        } else if (this.isEmpty(this.state.personal.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
        } else if (this.isEmpty(this.state.personal.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
        } else if (this.isEmpty(this.state.personal.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
        } else if (this.isEmpty(this.state.personal.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
        } else if (this.isEmpty(this.state.personal.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
        } else if (this.isEmpty(this.state.personal.mobileNo)) {
            errMsg = gblStrings.accManagement.emptyMobileNoMsg;
            input = 'mobileNo';
        } else if (this.isEmpty(this.state.personal.emailAddress)) {
            errMsg = gblStrings.accManagement.emptyEmailAddressMsg;
            input = 'emailAddress';
        } else if (!emailRegex.test(this.state.personal.emailAddress)) {
            errMsg = gblStrings.accManagement.invalidEmailMasg;
            input = 'emailAddress';
        } else if (this.isEmpty(this.state.personal.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(this.state.personal.empStatus)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusMsg;
            input = 'empStatus';
        } else if (this.isEmpty(this.state.personal.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
        } else if (this.isEmpty(this.state.personal.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
        } else if (this.state.personal.isSeniorPoliticalFigure == true && this.isEmpty(this.state.personal.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            console.log("Personal Info errMsg:: " + errMsg);

            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    [input + 'Validation']: false,
                    isPersonalInfoExpanded: true,
                    isEmploymentInfoExpanded: true,
                    isFinancialInfoExpanded: true,
                    isMilitaryInfoExpanded: true,
                    isRegulatoryInfoExpanded: true,
                },
                isValidationSuccess: isValidationSuccess,
                errMsg:isValidationSuccess == false ? errMsg:""
            }));


            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && input !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }
            alert(errMsg);
            this.setState({
               
             });
        }

        return isValidationSuccess;
    }

    validateJointAccInfoFields = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";
        //var employmentInfoVisible = false;

        if (this.isEmpty(this.state.jointOwner.empStatus) && this.state.jointOwner.empStatus !== "Not Employed" && this.state.jointOwner.empStatus !== "Homemaker" && this.state.jointOwner.empStatus !== "Others" && this.state.jointOwner.empStatus !== "Self-Employed") {
            //employmentInfoVisible = true;
        }

        if (this.isEmpty(this.state.jointOwner.prefix)) {
            errMsg = gblStrings.accManagement.emptyPrefixMsg;
            input = 'prefix';
        } else if (this.isEmpty(this.state.jointOwner.firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
        } else if (this.isEmpty(this.state.jointOwner.lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
        } else if (this.isEmpty(this.state.jointOwner.dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
        } else if (this.isEmpty(this.state.jointOwner.gender)) {
            errMsg = gblStrings.accManagement.emptyGenderMsg;
        } else if (this.isEmpty(this.state.jointOwner.maritalStatus)) {
            errMsg = gblStrings.accManagement.emptyMaritalMsg;
            input = 'maritalStatus';
        } else if (this.isEmpty(this.state.jointOwner.citizenship)) {
            errMsg = gblStrings.accManagement.emptyCitizenshipMsg;
        } else if (this.isEmpty(this.state.jointOwner.mailingAddressType)) {
            errMsg = gblStrings.accManagement.emptyAddressTypeMsg;
        } else if (this.isEmpty(this.state.jointOwner.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
        } else if (this.isEmpty(this.state.jointOwner.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
        } else if (this.isEmpty(this.state.jointOwner.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
        } else if (this.isEmpty(this.state.jointOwner.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
        } else if (this.isEmpty(this.state.jointOwner.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
        } else if (this.isEmpty(this.state.jointOwner.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
        } else if (this.isEmpty(this.state.jointOwner.mobileNo)) {
            errMsg = gblStrings.accManagement.emptyMobileNoMsg;
            input = 'mobileNo';
        } else if (this.isEmpty(this.state.jointOwner.emailAddress)) {
            errMsg = gblStrings.accManagement.emptyEmailAddressMsg;
            input = 'emailAddress';
        } else if (!emailRegex.test(this.state.jointOwner.emailAddress)) {
            errMsg = gblStrings.accManagement.invalidEmailMasg;
            input = 'emailAddress';
        } else if (this.isEmpty(this.state.jointOwner.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(this.state.jointOwner.empStatus)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusMsg;
            input = 'empStatus';
        } else if (this.isEmpty(this.state.jointOwner.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
        } else if (this.isEmpty(this.state.jointOwner.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
        } else if (this.state.jointOwner.isSeniorPoliticalFigure && this.isEmpty(this.state.jointOwner.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            console.log("JointOwner Info errMsg:: " + errMsg);

            this.setState(prevState => ({
                jointOwner: {
                    ...prevState.jointOwner,
                    [input + 'Validation']: false
                }
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && input !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }
            alert(errMsg);
        }

        return isValidationSuccess;
    }

    validateChildBeneficiaryInfoFields = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";
        //var employmentInfoVisible = false;


        if (this.isEmpty(this.state.childBeneficiary.vcmNo)) {
            errMsg = gblStrings.accManagement.emptyVCMNoMsg;
            input = 'prefix';
        } else if (this.isEmpty(this.state.childBeneficiary.firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
        } else if (this.isEmpty(this.state.childBeneficiary.lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
        } else if (this.isEmpty(this.state.childBeneficiary.dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
        } else if (this.isEmpty(this.state.childBeneficiary.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(this.state.childBeneficiary.relationshipToAcc)) {
            errMsg = gblStrings.accManagement.emptyRelationShipMsg;
            input = 'empStatus';
        } else if (this.isEmpty(this.state.childBeneficiary.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
        } else if (this.state.childBeneficiary.isSeniorPoliticalFigure == true && this.isEmpty(this.state.childBeneficiary.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            console.log("Personal Info errMsg:: " + errMsg);

            this.setState(prevState => ({
                childBeneficiary: {
                    ...prevState.childBeneficiary,
                    [input + 'Validation']: false
                }
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && input !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }
            alert(errMsg);
        }

        return isValidationSuccess;
    }

    validateIRABeneficiaryInfoFields = () => {

        let isValidationSuccess = false;
        return isValidationSuccess;
    }


    validateFields = () => {
       //return this.props.navigation.navigate({ routeName: 'openAccPageThree', key: 'openAccPageThree' });
        try {


            const accType = this.props.navigation.getParam('accType', '');
            console.log("validateFields::: " + accType);

            let isValidationSuccess = false;

            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    prefixValidation: true,
                    firstNameValidation: true,
                    lastNameValidation: true,
                    dobValidation: true,
                    genderValidation: true,
                    maritalStatusValidation: true,
                    citizenshipValidation: true,
                    addressTypeValidation: true,
                    addrLine1Validation: true,
                    addrLine2Validation: true,
                    zipcodeValidation: true,
                    cityValidation: true,
                    stateCityValidation: true,
                    stateValidation: true,
                    isYourPhysicalAddresSameValidation: false,
                    mobileNoValidation: true,
                    workPhoneNoValidation: true,
                    emailAddressValidation: true,
                    socialSecurityNoValidation: true,

                    empStatusValidation: true,
                    seniorPoliticalNameValidation: true,

                    militaryStatusValidation: true,


                },
                jointOwner: {
                    ...prevState.jointOwner,
                    prefixValidation: true,
                    firstNameValidation: true,
                    lastNameValidation: true,
                    dobValidation: true,
                    genderValidation: true,
                    maritalStatusValidation: true,
                    citizenshipValidation: true,
                    addressTypeValidation: true,
                    addrLine1Validation: true,
                    addrLine2Validation: true,
                    zipcodeValidation: true,
                    cityValidation: true,
                    stateCityValidation: true,
                    stateValidation: true,
                    isYourPhysicalAddresSameValidation: false,
                    mobileNoValidation: true,
                    workPhoneNoValidation: true,
                    emailAddressValidation: true,
                    socialSecurityNoValidation: true,

                    empStatusValidation: true,
                    seniorPoliticalNameValidation: true,

                    militaryStatusValidation: true,


                },
                childBeneficiary: {
                    ...prevState.childBeneficiary,

                    prefixValidation: true,
                    firstNameValidation: true,
                    lastNameValidation: true,
                    dobValidation: true,
                    genderValidation: true,
                    vcmNoValidation: true,
                    mobileNoValidation: true,
                    emailAddressValidation: true,
                    socialSecurityNoValidation: true,
                    relationshipToAccValidation: true,
                    seniorPoliticalNameValidation: true,

                }
            }));


            if (!this.validateIndividualAccInfoFields()) {
                isValidationSuccess = false;
            } else if (accType == "Joint Account" && !this.validateJointAccInfoFields()) {
                isValidationSuccess = false;
            } else if (accType == "UGMA/UTMA Account" && !this.validateChildBeneficiaryInfoFields()) {
                isValidationSuccess = false;
            } else {
                isValidationSuccess = true;
            }


            return isValidationSuccess;
        } catch (err) {
            console.log("Error:::" + JSON.stringify(err));
        }

    }
    
    /*------- Custom render methods --------*/

    generateKeyExtractor = (item) => item.key;
    renderDropDownListItem = (dropDownName) => ({ item }) =>
        (<DropDownListItem
            value={item.value}
            onSelectedItem={this.selectedDropDownValue(dropDownName, item, item.key)}
         />
        );

    renderCalender = (sectionName, calendarName) => {
        console.log("renderCalender::: " + calendarName);
        return (
            <GDateComponent
                date={this.state[sectionName][calendarName]}
                placeholder="Select Date"
                errorFlag={this.state[sectionName][calendarName + "Validation"] != undefined ? !this.state[sectionName][calendarName + "Validation"] : false}
                errMsg="Please selectDate"
                onDateChange={this.onChangeDate(sectionName, calendarName)}

            />
        );
    }

    renderSplitCalender = (sectionName, calendarName) => {
        console.log("renderSplitCalender::: " + calendarName);

        let tempCurrentDate = "" + this.state[sectionName][calendarName];
        let tempCurrentDateComp = tempCurrentDate != "" ? tempCurrentDate.split('-') : [];

        return (
            <View
                style={[styles.splitDateGrp]}
                ref={this.setInputRef(calendarName)}
            >
                <GDateComponent
                    componentStyle={{
                        width: scaledHeight(80), marginRight: scaledHeight(8), marginTop: scaledHeight(0)
                    }}
                    date={tempCurrentDateComp.length > 2 ? tempCurrentDateComp[0] : ""}
                    placeholder="MM"
                    format="MM"
                    iconComponent={<GIcon
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                                   />}
                    onDateChange={this.onChangeSpiltDate(sectionName, calendarName, 0)}
                />
                <GDateComponent
                    componentStyle={{ width: scaledHeight(80), marginRight: scaledHeight(8) ,marginTop: scaledHeight(0)}}

                    date={tempCurrentDateComp.length > 2 ? tempCurrentDateComp[1] : ""}
                    placeholder="DD"
                    format="DD"
                    iconComponent={<GIcon
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                                   />}
                    onDateChange={this.onChangeSpiltDate(sectionName, calendarName, 1)}
                />
                <GDateComponent
                    componentStyle={{ width: scaledHeight(100),marginTop: scaledHeight(0) }}

                    date={tempCurrentDateComp.length > 2 ? tempCurrentDateComp[2] : ""}
                    placeholder="YYYY"
                    format="YYYY"
                    iconComponent={<GIcon
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                                   />}
                    onDateChange={this.onChangeSpiltDate(sectionName, calendarName, 2)}
                />
            </View>

        );
    }


    renderCustomDropDown = ({section="",stateKey="",dropDownName="",lblDropdownName="",isOptional = false}) =>{
        let validationKey = stateKey+"Validation";
        let validationKeyValue = !this.state[section][validationKey];

        let dropDownData = dummyData;
        let tempkey = "";

        switch (dropDownName) {
            case "prefixDropDown":
            case "prefixDropDown_joint":
            case "prefixDropDown_IRA":
            case "prefixDropDown_childben":
                tempkey = "prefix";
                break;
            case "suffixDropDown":
            case "suffixDropDown_joint":
            case "suffixDropDown_IRA":
            case "suffixDropDown_childben":

                tempkey = "suffix";
                break;
            case "maritalStatusDropDown":
            case "maritalStatusDropDown_joint":
            case "maritalStatusDropDown_IRA":
            case "maritalStatusDropDown_childben":

                tempkey = "marital_status";
                break;
            case "stateCityDropDown":
            case "stateCityDropDown_joint":
            case "stateCityDropDown_IRA":
            case "stateCityDropDown_childben":

                tempkey = "city";
                break;
            case "contactDuringMobNoDropDown":
            case "contactDuringTelePhone2DropDown":
            case "contactDuringTelePhone3DropDown":
            case "contactDuringMobNoDropDown_joint":
            case "contactDuringTelePhone2DropDown_joint":
            case "contactDuringTelePhone3DropDown_joint":
            case "contactDuringMobNoDropDown_IRA":
            case "contactDuringTelePhone2DropDown_IRA":
            case "contactDuringTelePhone3DropDown_IRA":
            case "contactDuringMobNoDropDown_childben":
            case "contactDuringTelePhone2DropDown_childben":
            case "contactDuringTelePhone3DropDown_childben":

                tempkey = "contact_time";
                break;
            case "empStatusDropDown":
            case "empStatusDropDown_joint":
            case "empStatusDropDown_IRA":
            case "empStatusDropDown_childben":

                tempkey = "employment_status";
                break;
            case "empIndustryDropDown":
            case "empIndustryDropDown_joint":
            case "empIndustryDropDown_IRA":
            case "empIndustryDropDown_childben":

                tempkey = "industry";
                break;
            case "empStateCityDropDown":
            case "empStateCityDropDown_joint":
            case "empStateCityDropDown_IRA":
            case "empStateCityDropDown_childben":

                tempkey = "city";
                break;
            case "annualIncomeDropDown":
            case "annualIncomeDropDown_joint":
            case "annualIncomeDropDown_IRA":
            case "annualIncomeDropDown_childben":

                tempkey = "annual_income";
                break;
            case "taxBracketDropDown":
            case "taxBracketDropDown_joint":
            case "taxBracketDropDown_IRA":
            case "taxBracketDropDown_childben":

                tempkey = "taxBracket";
                break;
            case "networthDropDown":
            case "networthDropDown_joint":
            case "networthDropDown_IRA":
            case "networthDropDown_childben":

                tempkey = "net_worth";

                break;
            case "taxFilingStatusDropDown":
            case "taxFilingStatusDropDown_joint":
            case "taxFilingStatusDropDown_IRA":
            case "taxFilingStatusDropDown_childben":

                tempkey = "tax_filling_status";
                break;

            case "militaryStatusDropDown":
            case "militaryStatusDropDown_joint":
            case "militaryStatusDropDown_IRA":
            case "militaryStatusDropDown_childben":
                tempkey = "mil_status";
                break;
            case "branchOfServiceDropDown":
            case "branchOfServiceDropDown_joint":
            case "branchOfServiceDropDown_IRA":
            case "branchOfServiceDropDown_childben":

                tempkey = "mil_serv_branch";
                break;
            case "rankDropDown":
                tempkey = this.state.personal.rankKey;
                dropDownData = [];
                break;
            case "rankDropDown_joint":
                tempkey = this.state.jointOwner.rankKey;
                dropDownData = [];
                break;
            case "rankDropDown_IRA":
            case "rankDropDown_childben":
                dropDownData = [];
                break;
            case "beneficiaryTypeDropDown_IRA":
                tempkey = "ben_type";
                break;
            case "relationshipToAccDropDown_joint":
            case "relationshipToAccDropDown_childben":
            case "relationshipToAccDropDown_IRA":
                tempkey = "relationship";
                break;
            case "phoneTypeDropDown":
            case "phoneTypeDropDown_joint":
            case "phoneTypeDropDown_childben":
            case "phoneTypeDropDown_IRA":
                tempkey = "phone_type";
                break;

        }

        if (tempkey !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            dropDownData = this.props.masterLookupStateData[tempkey].value;
        }
        return (
            <GDropDownComponent
                inputref={this.setInputRef(dropDownName)}
                dropDownLayout={styles.dropDownLayout}
                dropDownTextName={styles.dropDownTextName}
                textInputStyle={styles.textInputStyle}
                dropDownName={lblDropdownName}
                data={dropDownData}
                dropDownValue={this.state[section][stateKey]}
                showDropDown={this.state[section][dropDownName]}
                changeState={this.onPressDropDown(section, dropDownName)}
                selectedDropDownValue={this.onSelectedDropDownValue(dropDownName)}
                itemToDisplay={"value"}
                dropDownPostition={{ ...styles.dropDownPostition }}
                errorFlag={isOptional ? false : validationKeyValue}
                errorText={this.state.errMsg}
                isOptional={isOptional}
            />
        );

    }
    renderDropDown = (dropDownName, dropDownCompState = false, data, width = '100%') => {
        console.log("renderDropDown::: " + dropDownName);
        let dropDownData = dummyData;
        let tempkey = "";

        switch (dropDownName) {
            case "prefixDropDown":
            case "prefixDropDown_joint":
            case "prefixDropDown_IRA":
            case "prefixDropDown_childben":
                tempkey = "prefix";
                break;
            case "suffixDropDown":
            case "suffixDropDown_joint":
            case "suffixDropDown_IRA":
            case "suffixDropDown_childben":

                tempkey = "suffix";
                break;
            case "maritalStatusDropDown":
            case "maritalStatusDropDown_joint":
            case "maritalStatusDropDown_IRA":
            case "maritalStatusDropDown_childben":

                tempkey = "marital_status";
                break;
            case "stateCityDropDown":
            case "stateCityDropDown_joint":
            case "stateCityDropDown_IRA":
            case "stateCityDropDown_childben":

                tempkey = "city";
                break;
            case "contactDuringMobNoDropDown":
            case "contactDuringTelePhone2DropDown":
            case "contactDuringTelePhone3DropDown":
            case "contactDuringMobNoDropDown_joint":
            case "contactDuringTelePhone2DropDown_joint":
            case "contactDuringTelePhone3DropDown_joint":
            case "contactDuringMobNoDropDown_IRA":
            case "contactDuringTelePhone2DropDown_IRA":
            case "contactDuringTelePhone3DropDown_IRA":
            case "contactDuringMobNoDropDown_childben":
            case "contactDuringTelePhone2DropDown_childben":
            case "contactDuringTelePhone3DropDown_childben":

                tempkey = "contact_time";
                break;
            case "empStatusDropDown":
            case "empStatusDropDown_joint":
            case "empStatusDropDown_IRA":
            case "empStatusDropDown_childben":

                tempkey = "employment_status";
                break;
            case "empIndustryDropDown":
            case "empIndustryDropDown_joint":
            case "empIndustryDropDown_IRA":
            case "empIndustryDropDown_childben":

                tempkey = "industry";
                break;
            case "empStateCityDropDown":
            case "empStateCityDropDown_joint":
            case "empStateCityDropDown_IRA":
            case "empStateCityDropDown_childben":

                tempkey = "city";
                break;
            case "annualIncomeDropDown":
            case "annualIncomeDropDown_joint":
            case "annualIncomeDropDown_IRA":
            case "annualIncomeDropDown_childben":

                tempkey = "annual_income";
                break;
            case "taxBracketDropDown":
            case "taxBracketDropDown_joint":
            case "taxBracketDropDown_IRA":
            case "taxBracketDropDown_childben":

                tempkey = "taxBracket";
                break;
            case "networthDropDown":
            case "networthDropDown_joint":
            case "networthDropDown_IRA":
            case "networthDropDown_childben":

                tempkey = "net_worth";

                break;
            case "taxFilingStatusDropDown":
            case "taxFilingStatusDropDown_joint":
            case "taxFilingStatusDropDown_IRA":
            case "taxFilingStatusDropDown_childben":

                tempkey = "tax_filling_status";
                break;

            case "militaryStatusDropDown":
            case "militaryStatusDropDown_joint":
            case "militaryStatusDropDown_IRA":
            case "militaryStatusDropDown_childben":
                tempkey = "mil_status";
                break;
            case "branchOfServiceDropDown":
            case "branchOfServiceDropDown_joint":
            case "branchOfServiceDropDown_IRA":
            case "branchOfServiceDropDown_childben":

                tempkey = "mil_serv_branch";
                break;
            case "rankDropDown":
                tempkey = this.state.personal.rankKey;
                dropDownData = [];
                break;
            case "rankDropDown_joint":
                tempkey = this.state.jointOwner.rankKey;
                dropDownData = [];
                break;
            case "rankDropDown_IRA":
            case "rankDropDown_childben":
                dropDownData = [];
                break;
            case "beneficiaryTypeDropDown_IRA":
                tempkey = "ben_type";
                break;
            case "relationshipToAccDropDown_joint":
            case "relationshipToAccDropDown_childben":
            case "relationshipToAccDropDown_IRA":
                tempkey = "relationship";
                break;
            case "phoneTypeDropDown":
            case "phoneTypeDropDown_joint":
            case "phoneTypeDropDown_childben":
            case "phoneTypeDropDown_IRA":
                tempkey = "phone_type";
                break;

        }

        if (tempkey !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            dropDownData = this.props.masterLookupStateData[tempkey].value;
        }

        if (dropDownCompState) {
            return (
                <View style={{ height: 100, borderWidth: 1, width: width, borderColor: "#DEDEDF", backgroundColor: 'white' }}>
                    <FlatList
                        data={dropDownData}
                        renderItem={this.renderDropDownListItem(dropDownName)}
                        keyExtractor={this.generateKeyExtractor}
                    />
                </View>
            );

        }
    }


    selectedDropDownValue = (dropDownName, item, key) => () => {

        let tempRankKey = "mil_rank_"+key;
        let payload = "";
        switch (dropDownName) {
            case "prefixDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        prefix: item.value,
                        prefixDropDown: false
                    }
                }));
                break;
            case "suffixDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        suffix: item.value,
                        suffixDropDown: false
                    }
                }));
                break;
            case "maritalStatusDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        maritalStatus: item.value,
                        maritalStatusDropDown: false
                    }
                }));
                break;
            case "stateCityDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        stateCity: item.value,
                        stateCityDropDown: false
                    }
                }));
                break;
            case "phoneTypeDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        phoneType: item.value,
                        phoneTypeDropDown: false
                    }
                }));
                break;

            case "contactDuringMobNoDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        contactDuringMobNo: item.value,
                        contactDuringMobNoDropDown: false
                    }
                }));
                break;
            case "contactDuringTelePhone2DropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        contactDuringTelePhone2: item.value,
                        contactDuringTelePhone2DropDown: false
                    }
                }));
                break;
            case "contactDuringTelePhone3DropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        contactDuringTelePhone3: item.value,
                        contactDuringTelePhone3DropDown: false
                    }
                }));
                break;
            case "empStatusDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        empStatus: item.value,
                        empStatusDropDown: false
                    }
                }));
                break;

            case "empIndustryDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        empIndustry: item.value,
                        empIndustryDropDown: false
                    }
                }));
                break;
            case "empStateCityDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        empStateCity: item.value,
                        empStateCityDropDown: false
                    }
                }));
                break;

            case "annualIncomeDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        annualIncome: item.value,
                        annualIncomeDropDown: false,
                        taxBracket: item.taxbracket,
                        taxBracketDropDown: false
                    }
                }));
                break;
            case "taxBracketDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        taxBracket: item.value,
                        taxBracketDropDown: false
                    }
                }));
                break;
            case "networthDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        networth: item.value,
                        networthDropDown: false
                    }
                }));
                break;
            case "taxFilingStatusDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        taxFilingStatus: item.value,
                        taxFilingStatusDropDown: false
                    }
                }));
                break;

            case "militaryStatusDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        militaryStatus: item.value,
                        militaryStatusDropDown: false
                    }
                }));
                break;
            case "branchOfServiceDropDown":


                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        branchOfService: item.value,
                        branchOfServiceDropDown: false,
                        rankKey: tempRankKey
                    }
                }));



                if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempRankKey]) {
                    payload = tempRankKey;
                    this.props.getRankData(payload);
                }


                break;
            case "rankDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        rank: item.value,
                        rankDropDown: false
                    }
                }));
                break;

            // Joint account owner
            case "relationshipToAccDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        relationshipToAcc: item.value,
                        relationshipToAccDropDown: false
                    }
                }));
                break;
            case "prefixDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        prefix: item.value,
                        prefixDropDown: false
                    }
                }));
                break;
            case "suffixDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        suffix: item.value,
                        suffixDropDown: false
                    }
                }));
                break;
            case "maritalStatusDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        maritalStatus: item.value,
                        maritalStatusDropDown: false
                    }
                }));
                break;
            case "stateCityDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        stateCity: item.value,
                        stateCityDropDown: false
                    }
                }));
                break;
            case "phoneTypeDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        phoneType: item.value,
                        phoneTypeDropDown: false
                    }
                }));
                break;
    
            case "contactDuringMobNoDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        contactDuringMobNo: item.value,
                        contactDuringMobNoDropDown: false
                    }
                }));
                break;
            case "contactDuringTelePhone2DropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        contactDuringTelePhone2: item.value,
                        contactDuringTelePhone2DropDown: false
                    }
                }));
                break;
            case "contactDuringTelePhone3DropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        contactDuringTelePhone3: item.value,
                        contactDuringTelePhone3DropDown: false
                    }
                }));
                break;
            case "empStatusDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        empStatus: item.value,
                        empStatusDropDown: false
                    }
                }));
                break;

            case "empIndustryDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        empIndustry: item.value,
                        empIndustryDropDown: false
                    }
                }));
                break;
            case "empStateCityDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        empStateCity: item.value,
                        empStateCityDropDown: false
                    }
                }));
                break;

            case "annualIncomeDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        annualIncome: item.value,
                        annualIncomeDropDown: false,
                        taxBracket: item.taxbracket,
                        taxBracketDropDown: false
                    }
                }));
                break;
            case "taxBracketDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        taxBracket: item.value,
                        taxBracketDropDown: false
                    }
                }));
                break;
            case "networthDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        networth: item.value,
                        networthDropDown: false
                    }
                }));
                break;
            case "taxFilingStatusDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        taxFilingStatus: item.value,
                        taxFilingStatusDropDown: false
                    }
                }));
                break;

            case "militaryStatusDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        militaryStatus: item.value,
                        militaryStatusDropDown: false
                    }
                }));
                break;
            case "branchOfServiceDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        branchOfService: item.value,
                        branchOfServiceDropDown: false,
                        rankKey: tempRankKey
                    }
                }));

                if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempRankKey]) {
                    payload = tempRankKey;
                    this.props.getRankData(payload);
                }
                break;
            case "rankDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        rank: item.value,
                        rankDropDown: false
                    }
                }));
                break;

            // Child benefriciary
            case "relationshipToAccDropDown_childben":
                this.setState(prevState => ({
                    childBeneficiary: {
                        ...prevState.childBeneficiary,
                        relationshipToAcc: item.value,
                        relationshipToAccDropDown: false
                    }
                }));
                break;

            // Retirment benefriciary
            case "beneficiaryTypeDropDown_IRA":
                this.setState(prevState => ({
                    retirement: {
                        ...prevState.retirement,
                        beneficiaryType: item.value,
                        beneficiaryTypeDropDown: false
                    }
                }));
                break;
            case "relationshipToAccDropDown_IRA":
                this.setState(prevState => ({
                    retirement: {
                        ...prevState.retirement,
                        relationshipToAcc: item.value,
                        relationshipToAccDropDown: false
                    }
                }));
                break;



            default:
                break;

        }

    }
    onSelectedDropDownValue = (dropDownName, key="") => (item) => {
       console.log("onSelectedDropDownValue:");
        let tempRankKey = "mil_rank_"+key;
        let payload = "";
        switch (dropDownName) {
            case "prefixDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        prefix: item.value,
                        prefixDropDown: false
                    }
                }));
                break;
            case "suffixDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        suffix: item.value,
                        suffixDropDown: false
                    }
                }));
                break;
            case "maritalStatusDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        maritalStatus: item.value,
                        maritalStatusDropDown: false
                    }
                }));
                break;
            case "stateCityDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        stateCity: item.value,
                        stateCityDropDown: false
                    }
                }));
                break;
            case "phoneTypeDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        phoneType: item.value,
                        phoneTypeDropDown: false
                    }
                }));
                break;

            case "contactDuringMobNoDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        contactDuringMobNo: item.value,
                        contactDuringMobNoDropDown: false
                    }
                }));
                break;
            case "contactDuringTelePhone2DropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        contactDuringTelePhone2: item.value,
                        contactDuringTelePhone2DropDown: false
                    }
                }));
                break;
            case "contactDuringTelePhone3DropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        contactDuringTelePhone3: item.value,
                        contactDuringTelePhone3DropDown: false
                    }
                }));
                break;
            case "empStatusDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        empStatus: item.value,
                        empStatusDropDown: false
                    }
                }));
                break;

            case "empIndustryDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        empIndustry: item.value,
                        empIndustryDropDown: false
                    }
                }));
                break;
            case "empStateCityDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        empStateCity: item.value,
                        empStateCityDropDown: false
                    }
                }));
                break;

            case "annualIncomeDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        annualIncome: item.value,
                        annualIncomeDropDown: false,
                        taxBracket: item.taxbracket,
                        taxBracketDropDown: false
                    }
                }));
                break;
            case "taxBracketDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        taxBracket: item.value,
                        taxBracketDropDown: false
                    }
                }));
                break;
            case "networthDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        networth: item.value,
                        networthDropDown: false
                    }
                }));
                break;
            case "taxFilingStatusDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        taxFilingStatus: item.value,
                        taxFilingStatusDropDown: false
                    }
                }));
                break;

            case "militaryStatusDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        militaryStatus: item.value,
                        militaryStatusDropDown: false
                    }
                }));
                break;
            case "branchOfServiceDropDown":


                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        branchOfService: item.value,
                        branchOfServiceDropDown: false,
                        rankKey: tempRankKey
                    }
                }));



                if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempRankKey]) {
                    payload = tempRankKey;
                    this.props.getRankData(payload);
                }


                break;
            case "rankDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        rank: item.value,
                        rankDropDown: false
                    }
                }));
                break;

            // Joint account owner
            case "relationshipToAccDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        relationshipToAcc: item.value,
                        relationshipToAccDropDown: false
                    }
                }));
                break;
            case "prefixDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        prefix: item.value,
                        prefixDropDown: false
                    }
                }));
                break;
            case "suffixDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        suffix: item.value,
                        suffixDropDown: false
                    }
                }));
                break;
            case "maritalStatusDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        maritalStatus: item.value,
                        maritalStatusDropDown: false
                    }
                }));
                break;
            case "stateCityDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        stateCity: item.value,
                        stateCityDropDown: false
                    }
                }));
                break;
            case "phoneTypeDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        phoneType: item.value,
                        phoneTypeDropDown: false
                    }
                }));
                break;
    
            case "contactDuringMobNoDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        contactDuringMobNo: item.value,
                        contactDuringMobNoDropDown: false
                    }
                }));
                break;
            case "contactDuringTelePhone2DropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        contactDuringTelePhone2: item.value,
                        contactDuringTelePhone2DropDown: false
                    }
                }));
                break;
            case "contactDuringTelePhone3DropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        contactDuringTelePhone3: item.value,
                        contactDuringTelePhone3DropDown: false
                    }
                }));
                break;
            case "empStatusDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        empStatus: item.value,
                        empStatusDropDown: false
                    }
                }));
                break;

            case "empIndustryDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        empIndustry: item.value,
                        empIndustryDropDown: false
                    }
                }));
                break;
            case "empStateCityDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        empStateCity: item.value,
                        empStateCityDropDown: false
                    }
                }));
                break;

            case "annualIncomeDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        annualIncome: item.value,
                        annualIncomeDropDown: false,
                        taxBracket: item.taxbracket,
                        taxBracketDropDown: false
                    }
                }));
                break;
            case "taxBracketDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        taxBracket: item.value,
                        taxBracketDropDown: false
                    }
                }));
                break;
            case "networthDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        networth: item.value,
                        networthDropDown: false
                    }
                }));
                break;
            case "taxFilingStatusDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        taxFilingStatus: item.value,
                        taxFilingStatusDropDown: false
                    }
                }));
                break;

            case "militaryStatusDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        militaryStatus: item.value,
                        militaryStatusDropDown: false
                    }
                }));
                break;
            case "branchOfServiceDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        branchOfService: item.value,
                        branchOfServiceDropDown: false,
                        rankKey: tempRankKey
                    }
                }));

                if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempRankKey]) {
                    payload = tempRankKey;
                    this.props.getRankData(payload);
                }
                break;
            case "rankDropDown_joint":
                this.setState(prevState => ({
                    jointOwner: {
                        ...prevState.jointOwner,
                        rank: item.value,
                        rankDropDown: false
                    }
                }));
                break;

            // Child benefriciary
            case "relationshipToAccDropDown_childben":
                this.setState(prevState => ({
                    childBeneficiary: {
                        ...prevState.childBeneficiary,
                        relationshipToAcc: item.value,
                        relationshipToAccDropDown: false
                    }
                }));
                break;

            // Retirment benefriciary
            case "beneficiaryTypeDropDown_IRA":
                this.setState(prevState => ({
                    retirement: {
                        ...prevState.retirement,
                        beneficiaryType: item.value,
                        beneficiaryTypeDropDown: false
                    }
                }));
                break;
            case "relationshipToAccDropDown_IRA":
                this.setState(prevState => ({
                    retirement: {
                        ...prevState.retirement,
                        relationshipToAcc: item.value,
                        relationshipToAccDropDown: false
                    }
                }));
                break;



            default:
                break;

        }

    }


    renderRadio = (sectionName, radioName, radioSize, componentStyle, layoutStyle) => {
        console.log("renderRadio::: " + radioName);
        let tempkey = "";//"title";
        let radioData = dummyData;
        switch (radioName) {
            case "gender":
                tempkey = "gender";
                break;
            case "citizenship":
                tempkey = "citizenship";
                break;
            case "mailingAddressType":
                tempkey = "mailing_addr_type";
                break;


        }

        console.log("tempkey::" + tempkey);

        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            console.log("tempkey inside::" + tempkey);
            radioData = this.props.masterLookupStateData[tempkey].value;
        } else {
            console.log("tempkey not there::" + tempkey);

        }

        let radioCoponents = [];


        for (let i = 0; i < radioData.length; i++) {

            radioCoponents.push(
                <CustomRadio
                    key={radioData[i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor={"#DEDEDF"}
                    innerCicleColor={"#61285F"}
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[i].value}
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel={""}
                    selected={(this.state[sectionName][radioName] !== null && this.state[sectionName][radioName] == radioData[i].value) ? true : false}
                    onPress={this.onPressRadio(sectionName, radioName, radioData[i].value)}

                />
            );
        }
        return (
            <View style={layoutStyle}>
                {radioCoponents}

            </View>
        );




    }


    onClickExpandCollpaseEvent = (stateKey, keyName) => () => {
        console.log("onClickExpandCollpaseEvent:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: !this.state[stateKey][keyName]
            }
        }));
    }


    renderIndividualSection = () => {
        return (
            <View >
                <this.renderPersonalInfo />
                <this.renderEmploymentInfo />
                <this.renderFinancialInfo />
                <this.renderMilitaryInfo />
                {
                    (this.state.personal.empStatus !== "Not Employed" && this.state.personal.empStatus !== "") && <this.renderRegulatoryInfo />
                }
            </View>
        );
    }

    renderPersonalInfo = () => {
        return (
            <View style={[styles.sectionGrp]}>
                <View style={styles.accTypeSelectSection} >
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformation}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                        onPress={this.onClickExpandCollpaseEvent("personal", "isPersonalInfoExpanded")}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.personal.isPersonalInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />
                {
                    this.state.personal.isPersonalInfoExpanded &&
                    <View style={styles.childSectionGrp}>
                        <View style={{ flexGrow: 1, width: "40%" }}>
                            {this.renderCustomDropDown({
                                section: "personal",
                                stateKey: "prefix",
                                dropDownName: "prefixDropDown",
                                lblDropdownName: gblStrings.accManagement.prefix,
                                isOptional:true
                            })
                            }
                        </View>


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.firstName}
                        </Text>
                        <GInputComponent
                            //inputref={(ref)=> this.firstName = ref}
                            inputref={this.setInputRef("firstName")}

                            propInputStyle={this.state.personal.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.firstName}
                            onChangeText={this.onChangeText("personal", "firstName")}
                            onSubmitEditing={this.onSubmitEditing(this.middleInitial)}

                        />

                        <Text style={styles.lblTxt}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.middleInitial}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <GInputComponent
                            // inputref={(ref)=> this.middleInitial = ref}
                            inputref={this.setInputRef("middleInitial")}

                            propInputStyle={styles.customTxtBox}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.middleInitial}
                            onChangeText={this.onChangeText("personal", "middleInitial")}
                            onSubmitEditing={this.onSubmitEditing(this.lastName)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.lastName}
                        </Text>
                        <GInputComponent
                            // inputref={ref => this.lastName = ref}
                            inputref={this.setInputRef("lastName")}
                            propInputStyle={this.state.personal.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.lastName}
                            returnKeyType={"done"}
                            onChangeText={this.onChangeText("personal", "lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.suffix)}

                        />

                        <View style={{ flexGrow: 1, width: "40%" }}>
                            {this.renderCustomDropDown({
                                section: "personal",
                                stateKey: "suffix",
                                dropDownName: "suffixDropDown",
                                lblDropdownName: gblStrings.accManagement.suffix,
                                isOptional:true
                            })
                            }
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.dob}
                        </Text>
                        <GDateComponent
                            date={this.state.personal.dob}
                            placeholder="Select Date"
                            errorFlag={!this.state.personal.dobValidation}
                            errMsg="Please selectDate"
                            onDateChange={this.onChangeDate("personal", "dob")}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.gender}
                        </Text>
                        {this.renderRadio("personal", "gender", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}



                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "maritalStatus",
                            dropDownName: "maritalStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.maritalStatus,
                            isOptional:false
                          })
                        }

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.citizenship}
                        </Text>
                        {this.renderRadio("personal", "citizenship", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                        <View style={{ flexGrow: 1 ,marginTop:scaledHeight(25)}}>
                            <Text>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.uploadW8Form}
                                </Text>
                                <Text style={styles.optionalTxt}>
                                    {`  ${gblStrings.accManagement.whatISW8Form}`}
                                </Text>
                            </Text>
                            
                            
                            <GButtonComponent
                                buttonStyle={styles.browseBtn}
                                buttonText={gblStrings.common.browse}
                                textStyle={styles.normalBlackBtnTxt}
                                onPress={this.uploadForm}

                            />
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.addressType}
                        </Text>
                        {this.renderRadio("personal", "mailingAddressType", 30, { marginBottom: scaledHeight(13) }, styles.radioBtnColGrp)}


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.address}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("addrLine1")}
                            propInputStyle={this.state.personal.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine1}
                            maxLength={gblStrings.maxLength.emplAddress1}
                            value={this.state.personal.addrLine1}
                            onChangeText={this.onChangeText("personal", "addrLine1")}
                            onSubmitEditing={this.onSubmitEditing(this.addrLine2)}
                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2")}
                            propInputStyle={this.state.personal.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            value={this.state.personal.addrLine2}
                            onChangeText={this.onChangeText("personal", "addrLine2")}
                            onSubmitEditing={this.onSubmitEditing(this.zipcode)}


                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.zipcode}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("zipcode")}
                            propInputStyle={this.state.personal.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterZip}
                            maxLength={gblStrings.maxLength.zipCode}
                            returnKeyType={"done"}
                            onChangeText={this.onChangeText("personal", "zipcode")}
                            //onSubmitEditing={() => {}}
                            onSubmitEditing={this.onSubmitZipEditing("personal","zipcode",this.city)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.cityAndState}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("city")}
                            propInputStyle={this.state.personal.cityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterCity}
                            maxLength={gblStrings.maxLength.city}
                            value={this.state.personal.city}
                            onChangeText={this.onChangeText("personal", "city")}
                            onSubmitEditing={this.onSubmitEditing(this.stateCity)}

                        />
                        <GInputComponent
                            inputref={this.setInputRef("stateCity")}
                            propInputStyle={this.state.personal.stateCityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterState}
                            returnKeyType={"done"}
                            maxLength={gblStrings.maxLength.state}
                            value={this.state.personal.stateCity}
                            onChangeText={this.onChangeText("personal", "stateCity")}
                            onSubmitEditing={this.onSubmitEditing(this.mobileNo)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.isYourPhysicalAddressSame}
                        </Text>
                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={{ width: "30%", marginBottom: scaledHeight(0) }}
                                size={30}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"Yes"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.personal.isYourPhysicalAddresSame !== null && this.state.personal.isYourPhysicalAddresSame == "Yes") ? true : false}
                                onPress={this.onPressRadio("personal", "isYourPhysicalAddresSame", "Yes")}
                            />
                            <CustomRadio
                                componentStyle={{ marginBottom: scaledHeight(0) }}
                                size={30}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"No"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.personal.isYourPhysicalAddresSame !== null && this.state.personal.isYourPhysicalAddresSame == "No") ? true : false}
                                onPress={this.onPressRadio("personal", "isYourPhysicalAddresSame", "No")}

                            />
                        </View>

                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "phoneType",
                            dropDownName: "phoneTypeDropDown",
                            lblDropdownName: gblStrings.accManagement.phoneType,
                            isOptional:false
                          })
                        }


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.phoneNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("mobileNo")}
                            propInputStyle={this.state.personal.mobileNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.mobileNo}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("personal", "mobileNo")}
                            onSubmitEditing={this.onSubmitEditing(this.contactDuringMobNo)}

                        />

                       
                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "contactDuringMobNo",
                            dropDownName: "contactDuringMobNoDropDown",
                            lblDropdownName: gblStrings.accManagement.contactMeDuring,
                            isOptional:true
                          })
                        }


                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "phoneType2",
                            dropDownName: "phoneType2DropDown",
                            lblDropdownName: gblStrings.accManagement.phoneType,
                            isOptional: true
                        })
                        }

                        <Text>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.telePhoneNo2}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo2")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.telePhoneNo2}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("personal", "telePhoneNo2")}
                            onSubmitEditing={this.onSubmitEditing(this.contactDuringTelePhone2)}

                        />

                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "contactDuringTelePhone2",
                            dropDownName: "contactDuringTelePhone2DropDown",
                            lblDropdownName: gblStrings.accManagement.contactMeDuring,
                            isOptional:true
                          })
                        }


                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "phoneType3",
                            dropDownName: "phoneType3DropDown",
                            lblDropdownName: gblStrings.accManagement.phoneType,
                            isOptional: true
                        })
                        }
                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.telePhoneNo3}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </View>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo3")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.telePhoneNo3}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("personal", "telePhoneNo3")}
                            onSubmitEditing={this.onSubmitEditing(this.contactDuringTelePhone3)}

                        />
                         {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "contactDuringTelePhone3",
                            dropDownName: "contactDuringTelePhone3DropDown",
                            lblDropdownName: gblStrings.accManagement.contactMeDuring,
                            isOptional:true
                          })
                        }

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.emailAddress}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("emailAddress")}
                            propInputStyle={this.state.personal.emailAddressValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.emailformat}
                            keyboardType="email-address"
                            maxLength={gblStrings.maxLength.emailID}
                            onChangeText={this.onChangeText("personal", "emailAddress")}
                            onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo)}


                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo")}
                            propInputStyle={this.state.personal.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            keyboardType="default"
                            returnKeyType={"done"}
                            maxLength={gblStrings.maxLength.ssnNo}
                            onChangeText={this.onChangeText("personal", "socialSecurityNo")}
                        />
                    </View>
                }
            </View>

        );
    }

    renderEmploymentInfo = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.employmentInformation}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("personal", "isEmploymentInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.personal.isEmploymentInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    this.state.personal.isEmploymentInfoExpanded &&
                    <View style={styles.childSectionGrp}>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.empStatus}
                        </Text>
                        <CustomDropDown
                            inputref={this.setInputRef("empStatus")}
                            onPress={this.onPressDropDown("personal", "empStatusDropDown")}
                            value={this.state.personal.empStatus}
                            propInputStyle={this.state.personal.empStatusValidation ? styles.customListTxtBox : styles.customListTxtBoxError}
                            placeholder={""}

                        />
                        {this.renderDropDown('empStatusDropDown', this.state.personal.empStatusDropDown, empStatusData)}

                        {
                            // Render employment fields if user have employment history
                            (this.state.personal.empStatus !== "" && this.state.personal.empStatus !== "Not Employed" && this.state.personal.empStatus !== "Homemaker" && this.state.personal.empStatus !== "Others" && this.state.personal.empStatus !== "Self-Employed") &&


                            <View style={styles.childSectionGrp}>

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.industry}
                                </Text>
                                <CustomDropDown
                                    inputref={this.setInputRef("empIndustry")}
                                    onPress={this.onPressDropDown("personal", "empIndustryDropDown")}
                                    value={this.state.personal.empIndustry}
                                    propInputStyle={styles.customListTxtBox}
                                    placeholder={gblStrings.common.select}

                                />
                                {this.renderDropDown('empIndustryDropDown', this.state.personal.empIndustryDropDown, dummyData)}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.occupation}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empOccupation")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.occupation}
                                    onChangeText={this.onChangeText("personal", "empOccupation")}
                                    onSubmitEditing={this.onSubmitEditing(this.empName)}



                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.empName}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empName")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.name}
                                    maxLength={gblStrings.maxLength.employerName}
                                    onChangeText={this.onChangeText("personal", "empName")}
                                    onSubmitEditing={this.onSubmitEditing(this.empAddrLine1)}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.empAddress}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empAddrLine1")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.empAddrLine1}
                                    maxLength={gblStrings.maxLength.address}
                                    value={this.state.personal.empAddrLine1}
                                    onChangeText={this.onChangeText("personal", "empAddrLine1")}
                                    onSubmitEditing={this.onSubmitEditing(this.empAddrLine2)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empAddrLine2")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.address}
                                    value={this.state.personal.empAddrLine2}
                                    onChangeText={this.onChangeText("personal", "empAddrLine2")}
                                    onSubmitEditing={this.onSubmitEditing(this.workPhoneNo)}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.zipcode}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empZipcode")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterZip}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    keyboardType="number-pad"
                                    onChangeText={this.onChangeText("personal", "empZipcode")}
                                    onSubmitEditing={this.onSubmitEmpZipEditing("personal", "empZipcode", this.empCity)}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empCity")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    maxLength={gblStrings.maxLength.city}
                                    value={this.state.personal.empCity}
                                    onChangeText={this.onChangeText("personal", "empCity")}
                                    onSubmitEditing={this.onSubmitEditing(this.empStateCity)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empStateCity")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    returnKeyType={"done"}
                                    maxLength={gblStrings.maxLength.city}
                                    value={this.state.personal.empStateCity}
                                    onChangeText={this.onChangeText("personal", "empCity")}
                                    onSubmitEditing={this.onSubmitEditing(this.empWorkPhoneNo)}


                                />
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.workPhoneNo}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empWorkPhoneNo")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.phoneNoFormat}
                                    maxLength={gblStrings.maxLength.workPhone}
                                    keyboardType="phone-pad"
                                    onChangeText={this.onChangeText("personal", "empWorkPhoneNo")}

                                />

                            
                            </View>
                        }
                    </View>
                }
            </View>
        );
    }

    renderMilitaryInfo = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.militaryInformation}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("personal", "isMilitaryInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.personal.isMilitaryInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    this.state.personal.isMilitaryInfoExpanded &&
                    <View style={styles.childSectionGrp}>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.servingStatus}
                        </Text>
                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={{ width: "30%", marginBottom: scaledHeight(0) }}
                                size={30}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"Yes"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.personal.isMilitaryHistory !== null && this.state.personal.isMilitaryHistory == "Yes") ? true : false}
                                onPress={this.onPressRadio("personal", "isMilitaryHistory", "Yes")}

                            />
                            <CustomRadio
                                componentStyle={{ marginBottom: scaledHeight(0) }}
                                size={30}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"No"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.personal.isMilitaryHistory !== null && this.state.personal.isMilitaryHistory == "No") ? true : false}
                                onPress={this.onPressRadio("personal", "isMilitaryHistory", "No")}
                            />
                        </View>


                        {
                            this.state.personal.isMilitaryHistory == "Yes" &&


                            <View >
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.militaryStatus}
                                </Text>
                                <CustomDropDown
                                    inputref={this.setInputRef("militaryStatus")}
                                    onPress={this.onPressDropDown("personal", "militaryStatusDropDown")}
                                    value={this.state.personal.militaryStatus}
                                    propInputStyle={styles.customListTxtBox}
                                    placeholder={gblStrings.common.select}

                                />
                                {this.renderDropDown('militaryStatusDropDown', this.state.personal.militaryStatusDropDown, dummyData)}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.branchOfService}
                                </Text>
                                <CustomDropDown
                                    inputref={this.setInputRef("branchOfService")}
                                    onPress={this.onPressDropDown("personal", "branchOfServiceDropDown")}
                                    value={this.state.personal.branchOfService}
                                    propInputStyle={styles.customListTxtBox}
                                    placeholder={gblStrings.common.select}

                                />
                                {this.renderDropDown('branchOfServiceDropDown', this.state.personal.branchOfServiceDropDown, dummyData)}


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.rank}
                                </Text>
                                <CustomDropDown
                                    inputref={this.setInputRef("rank")}
                                    onPress={this.onPressDropDown("personal", "rankDropDown")}
                                    value={this.state.personal.rank}
                                    propInputStyle={styles.customListTxtBox}
                                    placeholder={gblStrings.common.select}
                                />
                                {this.renderDropDown('rankDropDown', this.state.personal.rankDropDown, dummyData)}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.datesOfService}
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={[styles.optionalTxt, { width: '20%' }]}>
                                        {gblStrings.accManagement.from}
                                    </Text>
                                    <View style={{ width: '80%', marginLeft: '0%' }}>
                                        <GDateComponent
                                            date={this.state.personal.fromDateMilitary}
                                            placeholder="Select Date"
                                            onDateChange={this.onChangeDate("personal", "fromDateMilitary")}

                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={[styles.optionalTxt, { width: '20%' }]}>
                                        {gblStrings.accManagement.to}
                                    </Text>
                                    <View style={{ width: '80%', marginLeft: '0%' }}>
                                        <GDateComponent
                                            date={this.state.personal.fromDateMilitary}
                                            placeholder="Select Date"
                                            onDateChange={this.onChangeDate("personal", "toDateMilitary")}

                                        />

                                    </View>
                                </View>


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.commissionSource}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("commissionSource")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={""}
                                    maxLength={60}
                                    onChangeText={this.onChangeText("personal", "commissionSource")}
                                />

                            </View>
                        }

                    </View>

                }
            </View>
        );

    }

    renderFinancialInfo = () => {
        return (


            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.financialInformation}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("personal", "isFinancialInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.personal.isFinancialInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    this.state.personal.isFinancialInfoExpanded &&
                    <View style={styles.childSectionGrp}>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.annualIncome}
                        </Text>
                        <CustomDropDown
                            inputref={this.setInputRef("annualIncome")}
                            onPress={this.onPressDropDown("personal", "annualIncomeDropDown")}
                            value={this.state.personal.annualIncome}
                            propInputStyle={styles.customListTxtBox}
                            placeholder={gblStrings.common.select}

                        />
                        {this.renderDropDown('annualIncomeDropDown', this.state.personal.annualIncomeDropDown, dummyData)}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.taxBracket}
                        </Text>
                        <CustomDropDown
                            inputref={this.setInputRef("taxBracket")}
                            value={this.state.personal.taxBracket}
                            propInputStyle={styles.customListTxtBox}
                            placeholder={gblStrings.common.select}

                        />
                        { // this.renderDropDown('taxBracketDropDown', this.state.personal.taxBracketDropDown, dummyData)
                                                   // onPress={this.onPressDropDown("personal", "taxBracketDropDown")}

                        }


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.networth}
                        </Text>
                        <CustomDropDown
                            inputref={this.setInputRef("networth")}
                            onPress={this.onPressDropDown("personal", "networthDropDown")}
                            value={this.state.personal.networth}
                            propInputStyle={styles.customListTxtBox}
                            placeholder={gblStrings.common.select}
                        />
                        {this.renderDropDown('networthDropDown', this.state.personal.networthDropDown, dummyData)}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.taxFilingStatus}
                        </Text>
                        <CustomDropDown
                            inputref={this.setInputRef("taxFilingStatus")}
                            onPress={this.onPressDropDown("personal", "taxFilingStatusDropDown")}
                            value={this.state.personal.taxFilingStatus}
                            propInputStyle={styles.customListTxtBox}
                            placeholder={gblStrings.common.select}

                        />
                        {this.renderDropDown('taxFilingStatusDropDown', this.state.personal.taxFilingStatusDropDown, dummyData)}
                    </View>
                }
            </View>
        );
    }

    renderRegulatoryInfo = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.regulatoryQuestion}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("personal", "isRegulatoryInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.personal.isRegulatoryInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.lblLine} />
                {
                    this.state.personal.isRegulatoryInfoExpanded &&
                    <View style={styles.childSectionGrp}>

                        <Text style={styles.regulatoryNoteTxt}>
                            {gblStrings.accManagement.regulatoryNoteTxt}
                        </Text>

                        <Text style={styles.regulatoryQuestTxt}>
                            {gblStrings.accManagement.regulatoryQuestTxt}
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "flex-start" }}>
                            <Text style={styles.explainTxt}>
                                {"Explain - "}
                            </Text>
                            <View style={styles.explainDottedBorder}>
                                <Text style={styles.explainDotteBorderTxt}>
                                    {"Senior Foreign Political Figure"}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={{ width: "30%", marginBottom: scaledHeight(0) }}
                                size={30}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"Yes"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.personal.isSeniorPoliticalFigure !== null && this.state.personal.isSeniorPoliticalFigure == "Yes") ? true : false}
                                onPress={this.onPressRadio("personal", "isSeniorPoliticalFigure", "Yes")}

                            />
                            <CustomRadio
                                componentStyle={{ marginBottom: scaledHeight(0) }}
                                size={30}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"No"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.personal.isSeniorPoliticalFigure !== null && this.state.personal.isSeniorPoliticalFigure == "No") ? true : false}
                                onPress={this.onPressRadio("personal", "isSeniorPoliticalFigure", "No")}

                            />
                        </View>
                        {this.state.personal.isSeniorPoliticalFigure == "Yes" &&

                            <View style={{ flexGrow: 1 }}>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.seniorPoliticalName}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("seniorPoliticalName")}
                                    propInputStyle={this.state.personal.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterSeniorName}
                                    returnKeyType={"done"}
                                    maxLength={gblStrings.maxLength.seniorPoliticalMaxLength}
                                    onChangeText={this.onChangeText("personal", "seniorPoliticalName")}
                                />
                            </View>

                        }



                    </View>
                }
            </View>
        );
    }

    renderJointOwnerSection = () => {
        return (
            <View >
                <this.renderPersonalInfo_JointOwner />
                <this.renderEmploymentInfo_JointOwner />
                <this.renderFinancialInfo_JointOwner />
                <this.renderMilitaryInfo_JointOwner />
                {
                    (this.state.jointOwner.empStatus !== "Not Employed" && this.state.jointOwner.empStatus !== "") && <this.renderRegulatoryInfo_JointOwner />
                }
            </View>
        );


    }

    renderPersonalInfo_JointOwner = () => {
        return (
            <View style={[styles.sectionGrp]}>
                <View style={styles.accTypeSelectSection} >
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformationJoint}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isPersonalInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.jointOwner.isPersonalInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />
                {
                    this.state.jointOwner.isPersonalInfoExpanded &&
                    <View style={styles.childSectionGrp}>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.relationshipToAccHolder}
                        </Text>
                        <CustomDropDown
                            inputref={this.setInputRef("relationshipToAcc_joint")}
                            onPress={this.onPressDropDown("jointOwner", "relationshipToAccDropDown")}
                            value={this.state.jointOwner.relationshipToAcc}
                            propInputStyle={this.state.jointOwner.relationshipToAccValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.common.select}

                        />
                        {this.renderDropDown('relationshipToAccDropDown_joint', this.state.jointOwner.relationshipToAccDropDown, relationShipData)}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.prefix}
                        </Text>
                        <View style={{ flexGrow: 1, width: "40%" }}>
                            <CustomDropDown
                                inputref={this.setInputRef("prefix_joint")}
                                onPress={this.onPressDropDown("jointOwner", "prefixDropDown")}
                                value={this.state.jointOwner.prefix}
                                propInputStyle={this.state.jointOwner.prefixValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={""}

                            />
                            {this.renderDropDown('prefixDropDown_joint', this.state.jointOwner.prefixDropDown, suffixData)}
                        </View>


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.firstName}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("firstName_joint")}
                            propInputStyle={this.state.jointOwner.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.firstName}
                            onChangeText={this.onChangeText("jointOwner", "firstName")}
                            onSubmitEditing={this.onSubmitEditing(this.middleInitial_joint)}

                        />

                        <Text style={styles.lblTxt}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.middleInitial}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("middleInitial_joint")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.middleInitial}
                            onChangeText={this.onChangeText("jointOwner", "middleInitial")}
                            onSubmitEditing={this.onSubmitEditing(this.lastName_joint)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.lastName}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("lastName_joint")}
                            propInputStyle={this.state.jointOwner.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.lastName}
                            returnKeyType={"done"}
                            onChangeText={this.onChangeText("jointOwner", "lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.suffix_joint)}

                        />

                        <Text style={styles.lblTxt}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.suffix}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <View style={{ flexGrow: 1, width: "40%" }}>
                            <CustomDropDown
                                inputref={this.setInputRef("suffix_joint")}
                                onPress={this.onPressDropDown("jointOwner", "suffixDropDown")}
                                value={this.state.jointOwner.suffix}
                                propInputStyle={styles.customListTxtBox}
                                placeholder={""}
                            />
                            {this.renderDropDown('suffixDropDown_joint', this.state.jointOwner.suffixDropDown, suffixData)}
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.dob}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("dob_joint")}
                            propInputStyle={this.state.jointOwner.dobJointValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            returnKeyType={"done"}
                            onChangeText={this.onChangeText("jointOwner", "dob")}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.gender}
                        </Text>
                        {this.renderRadio("jointOwner", "gender", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.maritalStatus}
                        </Text>
                        <CustomDropDown
                            inputref={this.setInputRef("maritalStatus_joint")}
                            onPress={this.onPressDropDown("jointOwner", "maritalStatusDropDown")}
                            value={this.state.jointOwner.maritalStatus}
                            propInputStyle={this.state.jointOwner.maritalStatusValidation ? styles.customListTxtBox : styles.customListTxtBoxError}
                            placeholder={""}

                        />
                        {this.renderDropDown('maritalStatusDropDown_joint', this.state.jointOwner.maritalStatusDropDown, dummyData)}


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.citizenship}
                        </Text>
                        {this.renderRadio("jointOwner", "citizenship", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.mailingAddressType}
                        </Text>
                        {this.renderRadio("jointOwner", "mailingAddressType", 30, { marginBottom: scaledHeight(13) }, styles.radioBtnColGrp)}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.address}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("addrLine1_joint")}
                            propInputStyle={this.state.jointOwner.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine1}
                            maxLength={gblStrings.maxLength.emplAddress1}
                            onChangeText={this.onChangeText("jointOwner", "addrLine1")}
                            onSubmitEditing={this.onSubmitEditing(this.addrLine2_joint)}


                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2_joint")}
                            propInputStyle={this.state.jointOwner.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            onChangeText={this.onChangeText("jointOwner", "addrLine2")}
                            onSubmitEditing={this.onSubmitEditing(this.zipcode_joint)}
                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.zipcode}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("zipcode_joint")}
                            propInputStyle={this.state.jointOwner.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterZip}
                            maxLength={gblStrings.maxLength.zipCode}
                            keyboardType="number-pad"
                            returnKeyType={"done"}
                            onChangeText={this.onChangeText("jointOwner", "zipcode")}
                            onSubmitEditing={this.onSubmitEditing(this.city_joint)}


                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.cityAndState}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("city_joint")}
                            propInputStyle={this.state.jointOwner.cityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterCity}
                            returnKeyType={"done"}
                            maxLength={gblStrings.maxLength.city}
                            onChangeText={this.onChangeText("jointOwner", "city")}
                            onSubmitEditing={this.onSubmitEditing(this.stateCity_joint)}



                        />
                        <CustomDropDown
                            inputref={this.setInputRef("stateCity_joint")}
                            onPress={this.onPressDropDown("jointOwner", "stateCityDropDown")}
                            value={this.state.jointOwner.stateCity}
                            propInputStyle={this.state.jointOwner.stateCityValidation ? styles.customListTxtBox : styles.customListTxtBoxError}
                            placeholder={"Select State"}

                        />
                        {this.renderDropDown('stateCityDropDown_joint', this.state.jointOwner.stateCityDropDown, dummyData)}


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.isYourPhysicalAddressSame}
                        </Text>
                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={{ width: "30%", marginBottom: scaledHeight(0) }}
                                size={30}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"Yes"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.jointOwner.isYourPhysicalAddresSame !== null && this.state.jointOwner.isYourPhysicalAddresSame == "Yes") ? true : false}
                                onPress={this.onPressRadio("jointOwner", "isYourPhysicalAddresSame", "Yes")}
                            />
                            <CustomRadio
                                size={30}
                                componentStyle={{ marginBottom: scaledHeight(0) }}
                                outerCicleColor={"#DEDEDF"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.lblRadioBtnTxt}
                                label={"No"}
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel={""}
                                selected={(this.state.isYourPhysicalAddresSame !== null && this.state.isYourPhysicalAddresSame == "No") ? true : false}
                                onPress={this.onPressRadio("jointOwner", "isYourPhysicalAddresSame", "No")}
                            />
                        </View>



                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.mobileNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("mobileNo_joint")}
                            propInputStyle={this.state.jointOwner.mobileNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.mobileNo}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("jointOwner", "mobileNo")}
                            onSubmitEditing={this.onSubmitEditing(this.contactDuringMobNo_joint)}

                        />

                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.contactMeDuring}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </View>
                        <CustomDropDown
                            inputref={this.setInputRef("contactDuringMobNo_joint")}
                            onPress={this.onPressDropDown("jointOwner", "contactDuringMobNoDropDown")}
                            value={this.state.jointOwner.contactDuringMobNo}
                            propInputStyle={styles.customListTxtBox}
                            placeholder={""}

                        />
                        {this.renderDropDown('contactDuringMobNoDropDown_joint', this.state.jointOwner.contactDuringMobNoDropDown, dummyData)}


                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.telePhoneNo2}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </View>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo2_joint")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.telePhoneNo2}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("jointOwner", "telePhoneNo2")}
                            onSubmitEditing={this.onSubmitEditing(this.contactDuringTelePhone2_joint)}

                        />

                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.contactMeDuring}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </View>
                        <CustomDropDown
                            inputref={this.setInputRef("contactDuringTelePhone2_joint")}
                            onPress={this.onPressDropDown("jointOwner", "contactDuringTelePhone2DropDown")}
                            value={this.state.jointOwner.contactDuringTelePhone2}
                            propInputStyle={styles.customListTxtBox}
                            placeholder={""}

                        />
                        {this.renderDropDown('contactDuringTelePhone2DropDown_joint', this.state.jointOwner.contactDuringTelePhone2DropDown, dummyData)}


                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.telePhoneNo3}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </View>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo3_joint")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.telePhoneNo3}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("jointOwner", "telePhoneNo3")}
                            onSubmitEditing={this.onSubmitEditing(this.contactDuringTelePhone3_joint)}

                        />

                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.contactMeDuring}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </View>
                        <CustomDropDown
                            inputref={this.setInputRef("contactDuringTelePhone3_joint")}
                            onPress={this.onPressDropDown("jointOwner", "contactDuringTelePhone3DropDown")}
                            value={this.state.jointOwner.contactDuringTelePhone3}
                            propInputStyle={styles.customListTxtBox}
                            placeholder={""}

                        />
                        {this.renderDropDown('contactDuringTelePhone3DropDown_joint', this.state.jointOwner.contactDuringTelePhone3DropDown, dummyData)}


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.emailAddress}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("emailAddress_joint")}
                            propInputStyle={this.state.jointOwner.emailAddressValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.emailformat}
                            keyboardType="email-address"
                            maxLength={gblStrings.maxLength.emailID}
                            onChangeText={this.onChangeText("jointOwner", "emailAddress")}
                            onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo_joint)}


                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo_joint")}
                            propInputStyle={this.state.jointOwner.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            keyboardType="default"
                            returnKeyType={"done"}

                            maxLength={gblStrings.maxLength.ssnNo}
                            onChangeText={this.onChangeText("jointOwner", "socialSecurityNo")}

                        />
                    </View>
                }
            </View>

        );
    }

    renderEmploymentInfo_JointOwner = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.employmentInformationJoint}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isEmploymentInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.jointOwner.isEmploymentInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.lblLine} />
                {
                    this.state.jointOwner.isEmploymentInfoExpanded &&
                    <View style={styles.childSectionGrp}>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.empStatus}
                        </Text>
                        <CustomDropDown
                            inputref={this.setInputRef("empStatus_joint")}
                            onPress={this.onPressDropDown("jointOwner", "empStatusDropDown")}
                            value={this.state.jointOwner.empStatus}
                            propInputStyle={this.state.jointOwner.empStatusValidation ? styles.customListTxtBox : styles.customListTxtBoxError}
                            placeholder={"e.g Employed"}

                        />
                        {this.renderDropDown('empStatusDropDown_joint', this.state.jointOwner.empStatusDropDown, empStatusData)}

                        {
                            // Render employment fields if user have employment history
                            (this.state.jointOwner.empStatus !== "" && this.state.jointOwner.empStatus !== "Not Employed" && this.state.jointOwner.empStatus !== "Homemaker" && this.state.jointOwner.empStatus !== "Others" && this.state.jointOwner.empStatus !== "Self-Employed") &&


                            <View style={styles.childSectionGrp}>

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.industry}
                                </Text>
                                <CustomDropDown
                                    inputref={this.setInputRef("empIndustry_joint")}
                                    onPress={this.onPressDropDown("jointOwner", "empIndustryDropDown")}
                                    value={this.state.jointOwner.empIndustry}
                                    propInputStyle={styles.customListTxtBox}
                                    placeholder={gblStrings.common.select}

                                />
                                {this.renderDropDown('empIndustryDropDown_joint', this.state.jointOwner.empIndustryDropDown, dummyData)}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.occupation}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("occupation_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={"Mobile Communication Officer"}
                                    maxLength={gblStrings.maxLength.occupation}
                                    onChangeText={this.onChangeText("jointOwner", "occupation")}
                                    onSubmitEditing={this.onSubmitEditing(this.empName_joint)}


                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.empName}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empName_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.name}
                                    maxLength={gblStrings.maxLength.employerName}
                                    onChangeText={this.onChangeText("jointOwner", "empName")}
                                    onSubmitEditing={this.onSubmitEditing(this.empAddrLine1_joint)}


                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.empAddress}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empAddrLine1_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.empAddrLine1}
                                    maxLength={gblStrings.maxLength.address}
                                    onChangeText={this.onChangeText("jointOwner", "empAddrLine1")}
                                    onSubmitEditing={this.onSubmitEditing(this.empAddrLine2_joint)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empAddrLine2_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.address}
                                    onChangeText={this.onChangeText("jointOwner", "empAddrLine2")}
                                    onSubmitEditing={this.onSubmitEditing(this.workPhoneNo_joint)}


                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.workPhoneNo}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empWorkPhoneNo_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.phoneNoFormat}
                                    maxLength={gblStrings.maxLength.workPhone}
                                    keyboardType="phone-pad"
                                    onChangeText={this.onChangeText("jointOwner", "empWorkPhoneNo")}
                                    onSubmitEditing={this.onSubmitEditing(this.empZipcode_joint)}


                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.zipcode}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empZipcode_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterZip}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    keyboardType="number-pad"
                                    onChangeText={this.onChangeText("jointOwner", "empZipcode")}
                                    onSubmitEditing={this.onSubmitEditing(this.empCity_joint)}


                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empCity_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    returnKeyType={"done"}
                                    maxLength={gblStrings.maxLength.city}
                                    onChangeText={this.onChangeText("jointOwner", "empCity")}
                                    onSubmitEditing={this.onSubmitEditing(this.empStateCity_joint)}


                                />
                                <CustomDropDown
                                    inputref={this.setInputRef("empStateCity_joint")}
                                    onPress={this.onPressDropDown("jointOwner", "empStateCityDropDown")}
                                    value={this.state.jointOwner.empStateCity}
                                    propInputStyle={styles.customListTxtBox}
                                    placeholder={"Select State"}

                                />
                                {this.renderDropDown('empStateCityDropDown_joint', this.state.jointOwner.empStateCityDropDown, dummyData)}
                            </View>
                        }
                    </View>
                }
            </View>
        );
    }

    renderMilitaryInfo_JointOwner = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.militaryInformationJoint}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole={'button'}

                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {"[ - ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />

                <View style={styles.childSectionGrp}>

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.servingStatus}
                    </Text>
                    <View style={styles.radioBtnGrp}>
                        <CustomRadio
                            componentStyle={{ width: "30%", marginBottom: scaledHeight(0) }}
                            size={30}
                            itemBottom={0}
                            outerCicleColor={"#DEDEDF"}
                            innerCicleColor={"#61285F"}
                            labelStyle={styles.lblRadioBtnTxt}
                            label={"Yes"}
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel={""}
                            selected={(this.state.jointOwner.isMilitaryHistory !== null && this.state.jointOwner.isMilitaryHistory == "Yes") ? true : false}
                            onPress={this.onPressRadio("jointOwner", "isMilitaryHistory", "Yes")}

                        />
                        <CustomRadio
                            size={30}
                            componentStyle={{ marginBottom: scaledHeight(0) }}
                            outerCicleColor={"#DEDEDF"}
                            innerCicleColor={"#61285F"}
                            labelStyle={styles.lblRadioBtnTxt}
                            label={"No"}
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel={""}
                            selected={(this.state.jointOwner.isMilitaryHistory !== null && this.state.jointOwner.isMilitaryHistory == "No") ? true : false}
                            onPress={this.onPressRadio("jointOwner", "isMilitaryHistory", "No")}
                        />
                    </View>


                    {
                        this.state.jointOwner.isMilitaryHistory == "Yes" &&


                        <View >
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.militaryStatus}
                            </Text>
                            <CustomDropDown
                                inputref={this.setInputRef("militaryStatus_joint")}
                                onPress={this.onPressDropDown("jointOwner", "militaryStatusDropDown")}
                                value={this.state.jointOwner.militaryStatus}
                                propInputStyle={styles.customListTxtBox}
                                placeholder={gblStrings.common.select}

                            />
                            {this.renderDropDown('militaryStatusDropDown_joint', this.state.jointOwner.militaryStatusDropDown, dummyData)}

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.branchOfService}
                            </Text>
                            <CustomDropDown
                                inputref={this.setInputRef("branchOfService_joint")}
                                onPress={this.onPressDropDown("jointOwner", "branchOfServiceDropDown")}
                                value={this.state.jointOwner.branchOfService}
                                propInputStyle={styles.customListTxtBox}
                                placeholder={gblStrings.common.select}

                            />
                            {this.renderDropDown('branchOfServiceDropDown_joint', this.state.jointOwner.branchOfServiceDropDown, dummyData)}


                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.rank}
                            </Text>
                            <CustomDropDown
                                inputref={this.setInputRef("rank_joint")}
                                onPress={this.onPressDropDown("jointOwner", "rankDropDown")}
                                value={this.state.jointOwner.rank}
                                propInputStyle={styles.customListTxtBox}
                                placeholder={gblStrings.common.select}
                            />
                            {this.renderDropDown('rankDropDown_joint', this.state.jointOwner.rankDropDown, dummyData)}

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.datesOfService}
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={[styles.optionalTxt, { width: '20%' }]}>
                                    {gblStrings.accManagement.from}
                                </Text>
                                <View style={{ width: '80%', marginLeft: '0%' }}>
                                    <GInputComponent
                                        inputref={this.setInputRef("fromDateMilitary_joint")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={""}
                                        maxLength={60}
                                        onChangeText={this.onChangeText("jointOwner", "fromDateMilitary")}

                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={[styles.optionalTxt, { width: '20%' }]}>
                                    {gblStrings.accManagement.to}
                                </Text>
                                <View style={{ width: '80%', marginLeft: '0%' }}>
                                    <GInputComponent
                                        inputref={this.setInputRef("toDateMilitary_joint")}
                                        propInputStyle={styles.customTxtBox}

                                        placeholder={""}
                                        maxLength={60}
                                        onChangeText={this.onChangeText("jointOwner", "toDateMilitary")}

                                    />
                                </View>
                            </View>


                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.commissionSource}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("commissionSource_joint")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={""}
                                maxLength={60}
                                onChangeText={this.onChangeText("jointOwner", "commissionSource")}

                            />

                        </View>
                    }

                </View>
            </View>
        );

    }

    renderFinancialInfo_JointOwner = () => {
        return (


            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.financialInformationJoint}
                    </Text>
                    <TouchableOpacity
                        // onPress={() => { alert("Expand/Cllapse") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {"[ - ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />

                <View style={styles.childSectionGrp}>

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.annualIncome}
                    </Text>
                    <CustomDropDown
                        inputref={this.setInputRef("annualIncome_joint")}
                        onPress={this.onPressDropDown("jointOwner", "annualIncomeDropDown")}

                        value={this.state.jointOwner.annualIncome}
                        propInputStyle={styles.customListTxtBox}
                        placeholder={gblStrings.common.select}

                    />
                    {this.renderDropDown('annualIncomeDropDown_joint', this.state.jointOwner.annualIncomeDropDown, dummyData)}

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.taxBracket}
                    </Text>
                    <CustomDropDown
                        inputref={this.setInputRef("taxBracket_joint")}
                        onPress={this.onPressDropDown("jointOwner", "taxBracketDropDown")}
                        value={this.state.jointOwner.taxBracket}
                        propInputStyle={styles.customListTxtBox}
                        placeholder={gblStrings.common.select}

                    />
                    {this.renderDropDown('taxBracketDropDown_joint', this.state.jointOwner.taxBracketDropDown, dummyData)}


                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.networth}
                    </Text>
                    <CustomDropDown
                        inputref={this.setInputRef("networth_joint")}
                        onPress={this.onPressDropDown("jointOwner", "networthDropDown")}
                        value={this.state.jointOwner.networth}
                        propInputStyle={styles.customListTxtBox}
                        placeholder={gblStrings.common.select}
                    />
                    {this.renderDropDown('networthDropDown_joint', this.state.jointOwner.networthDropDown, dummyData)}

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.taxFilingStatus}
                    </Text>
                    <CustomDropDown
                        inputref={this.setInputRef("taxFilingStatus_joint")}
                        onPress={this.onPressDropDown("jointOwner", "taxFilingStatusDropDown")}
                        value={this.state.jointOwner.taxFilingStatus}
                        propInputStyle={styles.customListTxtBox}
                        placeholder={gblStrings.common.select}

                    />
                    {this.renderDropDown('taxFilingStatusDropDown_joint', this.state.jointOwner.taxFilingStatusDropDown, dummyData)}
                </View>
            </View>
        );
    }

    renderRegulatoryInfo_JointOwner = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.regulatoryQuestionJoint}
                    </Text>
                    <TouchableOpacity
                        // onPress={() => { alert("Expand/Cllapse") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {"[ - ]"}
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.lblLine} />

                <View style={styles.childSectionGrp}>

                    <Text style={styles.regulatoryNoteTxt}>
                        {gblStrings.accManagement.regulatoryNoteTxt}
                    </Text>

                    <Text style={styles.regulatoryQuestTxt}>
                        {gblStrings.accManagement.regulatoryQuestTxt}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "flex-start" }}>
                        <Text style={styles.explainTxt}>
                            {"Explain - "}
                        </Text>
                        <View style={styles.explainDottedBorder}>
                            <Text style={styles.explainDotteBorderTxt}>
                                {"Senior Foreign Political Figure"}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.radioBtnGrp}>
                        <CustomRadio
                            componentStyle={{ width: "30%", marginBottom: scaledHeight(0) }}
                            size={30}
                            outerCicleColor={"#DEDEDF"}
                            innerCicleColor={"#61285F"}
                            labelStyle={styles.lblRadioBtnTxt}
                            label={"Yes"}
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel={""}
                            selected={(this.state.jointOwner.isSeniorPoliticalFigure !== null && this.state.jointOwner.isSeniorPoliticalFigure == 'Yes') ? true : false}
                            onPress={this.onPressRadio("jointOwner", "isSeniorPoliticalFigure", "Yes")}

                        />
                        <CustomRadio
                            size={30}
                            componentStyle={{ marginBottom: scaledHeight(0) }}
                            outerCicleColor={"#DEDEDF"}
                            innerCicleColor={"#61285F"}
                            labelStyle={styles.lblRadioBtnTxt}
                            label={"No"}
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel={""}
                            selected={(this.state.jointOwner.isSeniorPoliticalFigure !== null && !this.state.jointOwner.isSeniorPoliticalFigure == "No") ? true : false}
                            onPress={this.onPressRadio("jointOwner", "isSeniorPoliticalFigure", "No")}

                        />
                    </View>
                    {this.state.jointOwner.isSeniorPoliticalFigure &&

                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.seniorPoliticalName}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("seniorPoliticalName_joint")}
                                propInputStyle={this.state.jointOwner.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.enterSeniorName}
                                returnKeyType={"done"}
                                maxLength={gblStrings.maxLength.seniorPoliticalMaxLength}
                                onChangeText={this.onChangeText("jointOwner", "seniorPoliticalName")}

                            />
                        </View>

                    }

                </View>
            </View>

        );
    }


    renderChildBeneficiarySection = () => {
        return (
            <View >
                <this.renderPersonalInfo_Child />
                <this.renderRegulatoryInfo_Child />
            </View>
        );


    }


    renderPersonalInfo_Child = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformationChild}
                    </Text>
                    <TouchableOpacity
                        // onPress={() => { alert("Expand/Cllapse") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {"[ - ]"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.childSectionGrp}>

                    <Text style={styles.regulatoryQuestTxt}>
                        {gblStrings.accManagement.childBeneficiaryNote}
                    </Text>

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.vcmNo}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("vcmNo_childben")}
                        propInputStyle={this.state.childBeneficiary.vcmNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.accManagement.ssnNoFormat}
                        maxLength={gblStrings.maxLength.usaaNo}
                        onChangeText={this.onChangeText("childBeneficiary", "vcmNo")}
                        onSubmitEditing={this.onSubmitEditing(this.firstName_childben)}

                    />

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.firstName}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("firstName_childben")}
                        propInputStyle={this.state.childBeneficiary.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={""}
                        maxLength={gblStrings.maxLength.firstName}
                        onChangeText={this.onChangeText("childBeneficiary", "firstName")}
                        onSubmitEditing={this.onSubmitEditing(this.middleInitial_childben)}

                    />

                    <Text style={styles.lblTxt}>
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.middleInitial}
                        </Text>
                        <Text style={styles.optionalTxt}>
                            {" " + gblStrings.accManagement.optional}
                        </Text>
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("middleInitial_childben")}
                        propInputStyle={styles.customTxtBox}
                        placeholder={""}
                        maxLength={gblStrings.maxLength.middleInitial}
                        onChangeText={this.onChangeText("childBeneficiary", "middleInitial")}

                        onSubmitEditing={this.onSubmitEditing(this.lastName_childben)}

                    />

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.lastName}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("lastName_childben")}
                        propInputStyle={this.state.childBeneficiary.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={""}
                        maxLength={gblStrings.maxLength.lastName}
                        returnKeyType={"done"}
                        onChangeText={this.onChangeText("childBeneficiary", "lastName")}
                        onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo_childben)}

                    />



                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("socialSecurityNo_childben")}
                        propInputStyle={this.state.childBeneficiary.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.accManagement.ssnNoFormat}
                        keyboardType="default"
                        returnKeyType={"done"}
                        maxLength={gblStrings.maxLength.ssnNo}
                        onChangeText={this.onChangeText("childBeneficiary", "socialSecurityNo")}
                        onSubmitEditing={this.onSubmitEditing(this.dob_childben)}

                    />
                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.dob}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("dob_childben")}
                        propInputStyle={this.state.childBeneficiary.dobValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={""}
                        returnKeyType={"done"}
                        onChangeText={this.onChangeText("childBeneficiary", "dob")}
                    />

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.relationshipCustodian}
                    </Text>
                    <CustomDropDown
                        inputref={this.setInputRef("relationshipToAcc_childben")}
                        onPress={this.onPressDropDown("childBeneficiary", "relationshipToAccDropDown")}
                        value={this.state.childBeneficiary.relationshipToAcc}
                        propInputStyle={this.state.childBeneficiary.relationshipToAccValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.common.select}

                    />
                    {this.renderDropDown('relationshipToAccDropDown_childben', this.state.childBeneficiary.relationshipToAccDropDown, relationShipData)}

                </View>
            </View>
        );


    }
    renderRegulatoryInfo_Child = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.regulatoryQuestionChild}
                    </Text>
                    <TouchableOpacity
                        // onPress={() => { alert("Expand/Cllapse") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {"[ - ]"}
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.lblLine} />

                <View style={styles.childSectionGrp}>

                    <Text style={styles.regulatoryNoteTxt}>
                        {gblStrings.accManagement.regulatoryNoteTxt}
                    </Text>

                    <Text style={styles.regulatoryQuestTxt}>
                        {gblStrings.accManagement.regulatoryQuestTxt}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "flex-start" }}>
                        <Text style={styles.explainTxt}>
                            {"Explain - "}
                        </Text>
                        <View style={styles.explainDottedBorder}>
                            <Text style={styles.explainDotteBorderTxt}>
                                {"Senior Foreign Political Figure"}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.radioBtnGrp}>
                        <CustomRadio
                            componentStyle={{ width: "30%", marginBottom: scaledHeight(0) }}
                            size={30}
                            outerCicleColor={"#DEDEDF"}
                            innerCicleColor={"#61285F"}
                            labelStyle={styles.lblRadioBtnTxt}
                            label={"Yes"}
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel={""}
                            selected={(this.state.childBeneficiary.isSeniorPoliticalFigure !== null && this.state.childBeneficiary.isSeniorPoliticalFigure == "Yes") ? true : false}
                            onPress={this.onPressRadio("childBeneficiary", "isSeniorPoliticalFigure", "Yes")}

                        />
                        <CustomRadio

                            size={30}
                            componentStyle={{ marginBottom: scaledHeight(0) }}
                            outerCicleColor={"#DEDEDF"}
                            innerCicleColor={"#61285F"}
                            labelStyle={styles.lblRadioBtnTxt}
                            label={"No"}
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel={""}
                            selected={(this.state.childBeneficiary.isSeniorPoliticalFigure !== null && !this.state.childBeneficiary.isSeniorPoliticalFigure) ? true : false}
                            onPress={this.onPressRadio("childBeneficiary", "isSeniorPoliticalFigure", "No")}

                        />
                    </View>
                    {this.state.childBeneficiary.isSeniorPoliticalFigure &&

                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.seniorPoliticalName}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("seniorPoliticalName_childben")}
                                propInputStyle={this.state.childBeneficiary.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.enterSeniorName}
                                returnKeyType={"done"}
                                maxLength={gblStrings.maxLength.seniorPoliticalMaxLength}
                                onChangeText={this.onChangeText("seniorPoliticalName", "vcmNo")}
                            />
                        </View>

                    }

                </View>
            </View>

        );
    }

    renderBeneficiary_Retirement = () => {
        return (

            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.beneficiariesOpt}
                    </Text>
                    <TouchableOpacity
                        //  onPress={() => { alert("Expand/Cllapse") }}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {"[ - ]"}
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.lblLine} />

                <View style={styles.childSectionGrp}>
                    <Text style={styles.regulatoryNoteTxt}>
                        {gblStrings.accManagement.beneficiariesNote}
                    </Text>

                    <Text style={styles.regulatoryQuestTxt}>
                        {gblStrings.accManagement.beneficiariesCond}
                    </Text>

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.beneficiary}
                    </Text>
                    <CustomDropDown
                        inputref={this.setInputRef("beneficiaryType_IRA")}
                        onPress={this.onPressDropDown("retirement", "beneficiaryTypeDropDown")}
                        value={this.state.retirement.beneficiaryType}
                        propInputStyle={this.state.retirement.beneficiaryTypeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.common.select}

                    />
                    {this.renderDropDown('beneficiaryTypeDropDown_IRA', this.state.retirement.beneficiaryTypeDropDown, beneficiaryTypeData)}


                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.relationshipToAccHolder}
                    </Text>
                    <CustomDropDown
                        inputref={this.setInputRef("relationshipToAcc_IRA")}
                        onPress={this.onPressDropDown("retirement", "relationshipToAccDropDown")}
                        value={this.state.retirement.relationshipToAcc}
                        propInputStyle={this.state.retirement.relationshipToAccValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.common.select}

                    />
                    {this.renderDropDown('relationshipToAccDropDown_IRA', this.state.retirement.relationshipToAccDropDown, relationShipData)}



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(25), }}>
                        <View style={{ width: '60%' }}>
                            <Text style={styles.lblRowTxt}>
                                {gblStrings.accManagement.distributionPercentage}
                            </Text>
                        </View>
                        <View style={{ width: '30%' }}>

                            <GInputComponent
                                inputref={this.setInputRef("beneficiaryDistPercent_IRA")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={""}
                                maxLength={gblStrings.maxLength.distributionPercentage}
                                onChangeText={this.onChangeText("retirement", "beneficiaryDistPercent")}
                                onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo_IRA)}


                            />
                        </View>
                        <View style={{ width: '10%' }}>

                            <Text style={styles.lblRowTxt}>
                                {"%"}
                            </Text>
                        </View>

                    </View>

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("socialSecurityNo_IRA")}
                        propInputStyle={this.state.retirement.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.accManagement.ssnNoFormat}
                        keyboardType="default"
                        returnKeyType={"done"}
                        maxLength={gblStrings.maxLength.ssnNo}
                        onChangeText={this.onChangeText("retirement", "socialSecurityNo")}
                        onSubmitEditing={this.onSubmitEditing(this.firstName_IRA)}

                    />

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.firstName}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("firstName_IRA")}
                        propInputStyle={this.state.retirement.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={""}
                        maxLength={gblStrings.maxLength.firstName}
                        onChangeText={this.onChangeText("retirement", "firstName")}
                        onSubmitEditing={this.onSubmitEditing(this.middleInitial_IRA)}

                    />

                    <Text style={styles.lblTxt}>
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.middleInitial}
                        </Text>
                        <Text style={styles.optionalTxt}>
                            {" " + gblStrings.accManagement.optional}
                        </Text>
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("middleInitial_IRA")}
                        propInputStyle={styles.customTxtBox}
                        placeholder={""}
                        maxLength={gblStrings.maxLength.middleInitial}
                        onChangeText={this.onChangeText("retirement", "middleInitial")}
                        onSubmitEditing={this.onSubmitEditing(this.lastName_IRA)}
                    />

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.lastName}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("lastName_IRA")}
                        propInputStyle={this.state.retirement.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={""}
                        maxLength={gblStrings.maxLength.lastName}
                        returnKeyType={"done"}
                        onChangeText={this.onChangeText("retirement", "lastName")}
                        onSubmitEditing={this.onSubmitEditing(this.dob_IRA)}

                    />




                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.dob}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("dob_IRA")}
                        propInputStyle={this.state.retirement.dobValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={""}
                        returnKeyType={"done"}
                        onChangeText={this.onChangeText("retirement", "dob")}
                        onSubmitEditing={this.onSubmitEditing(this.emailAddress_IRA)}


                    />

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.emailAddress}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("emailAddress_IRA")}
                        propInputStyle={this.state.retirement.emailAddressValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.accManagement.emailformat}
                        keyboardType="email-address"
                        maxLength={gblStrings.maxLength.emailID}
                        onChangeText={this.onChangeText("retirement", "emailAddress")}


                    />

                    <GButtonComponent
                        buttonStyle={styles.removeWhiteBtn}
                        buttonText={gblStrings.common.remove}

                        textStyle={styles.removeWhiteBtnTxt}
                    />
                </View>

                <GButtonComponent
                    buttonStyle={styles.addBeneficiaryBtn}
                    buttonText={gblStrings.accManagement.addAnotherBeneficiary}
                    textStyle={styles.addBeneficiaryBtnTxt}
                />
            </View>

        );


    }

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };
    /*
    scrollToItem = (itemRef) => {
        console.log("itemRef--------------:::" + JSON.stringify(itemRef));

        requestAnimationFrame(() => {
            if (this[itemRef] && this.scrollViewRef) {
                this[itemRef].measureLayout(
                    findNodeHandle(this.scrollViewRef), (x, y) => {
                        this.scrollViewRef.scrollTo({ x: 0, y: y, animated: true });
                    });
            }
        });
    }
    */
    /*----------------------
                                 Render Methods
                                                                 -------------------------- */


    render() {
        console.log("RENDER::: OpenAccPageTwo ::>>>  ::::" + JSON.stringify(this.props));

        const accType = "" + this.props.navigation.getParam('accType', '');
        const tempAccTypeCAPS = accType.toUpperCase();
        console.log("render accType::::>" + accType);


        let currentPage = 2;
        return (
            <View style={styles.container}>
                {
                    (this.props.accOpeningData.isLoading || this.props.masterLookupStateData.isLoading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                    <View style={styles.accSelection}>
                        <Text style={styles.accSelectionTxt}>
                            {tempAccTypeCAPS}
                        </Text>
                    </View>

                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + " Personal Info"} />



                    { /*-----------Personalize -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.personalize}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.lblTxt}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.nickname}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <GInputComponent
                            propInputStyle={styles.customTxtBox}
                            placeholder={"e.g John Michael"}
                            maxLength={gblStrings.maxLength.nickname}
                            onChangeText={this.onChangeNickName()}
                            secureTextEntry={false}
                        />
                        <View style={{ flexGrow: 1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center' }}>
                            <View style={{ flexGrow: 1 }}>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.uploadImage}
                                </Text>
                                <Text style={styles.optionalTxt}>
                                    {gblStrings.accManagement.optional}
                                </Text>
                                <GButtonComponent
                                    buttonStyle={styles.browseBtn}
                                    buttonText={gblStrings.common.browse}
                                    textStyle={styles.normalBlackBtnTxt}
                                    onPress={this.uploadImage}

                                />
                            </View>


                            {
                                this.state.userAvatar!="" && <Image source={this.state.userAvatar} style={styles.userAvatar} />
                            }
                        </View>
                    </View>

                    { /*----------- Individual Account Info -------------------*/}
                    <this.renderIndividualSection />


                    { /*----------- Joint Account Info -------------------*/
                        accType == "Joint Account" &&
                        <this.renderJointOwnerSection />

                    }

                    { /*----------- Investing for Children Account-------------------*/

                        accType == "UGMA/UTMA Account" &&
                        <this.renderChildBeneficiarySection />
                    }


                    { /*----------- Beneficiaries (optional) -------------------*/
                        accType == "Retirement Account" &&
                        <this.renderBeneficiary_Retirement />
                    }

                    { /*----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>

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

                    { /*----------- Privacy Notice -------------------*/}


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
            </View >

        );
    }
}

OpenAccPageTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    getPersonalCompositeData: PropTypes.instanceOf(Object),
    addressFormatData:PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    saveData:PropTypes.func,
    uploadAavatarImg:PropTypes.func,
    getStateCity:PropTypes.func,
    saveAccountOpening:PropTypes.func,
    getRankData:PropTypes.func,
    getAddressFormat:PropTypes.func
};
export default OpenAccPageTwoComponent;

