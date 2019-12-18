/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity,Image,KeyboardAvoidingView ,Platform} from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GInputComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner, GIcon, GDateComponent, GDropDownComponent } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import PropTypes from "prop-types";
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import ImagePicker from 'react-native-image-picker';
import { Header } from 'react-navigation';

let imagePickerOptions = {
    title: 'Select Image',
    customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images',
        avatarSource: ''
    },
};

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const date = new Date().getDate(); //Current Date
const month = new Date().getMonth() + 1; //Current Month
const year = new Date().getFullYear(); //Current Year
const currentdate = month + "-" + date + "-" + year;

const tempDate = new Date();
tempDate.setDate(tempDate.getDate() - 1);
const prevDate = (tempDate.getMonth() + 1) + "-" + tempDate.getDate() + "-" + tempDate.getFullYear();

const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
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
            enableScrollViewScroll:true,
            isValidationSuccess: true,
            errMsg: "",
            itemID: "",
            selectedItemID: "",
            selectedItemName: "",
            // Perosnal info
            nickname: "",
            userAvatar: "",
            personal: {
                prefix: "",
                prefixDropDown: false,
                firstName: this.props.initialState.firstName || "",
                middleInitial: this.props.initialState.middleInitial || "",
                lastName: this.props.initialState.lastName || "",
                suffix: this.props.initialState.suffix || "",
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
                addrLine1_Phy: "",
                addrLine2_Phy: "",
                zipcode_Phy: "",
                city_Phy: "",
                stateCity_Phy: "",
                stateCity_PhyDropDown: false,
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
                emailAddress: this.props.initialState.email || "",
                socialSecurityNo: "",
                phoneType: "",
                phoneTypeDropDown: false,
                PhoneType2: "",
                phoneType2DropDown: false,
                PhoneType3: "",
                phoneType3DropDown: false,
                primarySourceIncome: "",
                primarySourceIncomeDropDown: false,

                primarySourceIncomeValidation: true,
                phoneTypeValidation: true,
                phoneType2Validation: true,
                phoneType3Validation: true,
                contactDuringMobNoValidation: true,
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
                addrLine1_PhyValidation: true,
                addrLine2_PhyValidation: true,
                zipcode_PhyValidation: true,
                city_PhyValidation: true,
                stateCity_PhyValidation: true,
                state_PhyValidation: true,
                isYourPhysicalAddresSameValidation: true,
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
                empStatusForOther: "",
                empIndustryForOther: "",


                empStatusValidation: true,
                seniorPoliticalNameValidation: true,
                isSeniorPoliticalFigureValidation:true,
                empStatusForOtherValidation: true,
                empIndustryForOtherValidation: true,


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

                isMilitaryHistoryValidation:true,
                militaryStatusValidation: true,


                //ExpandCollapse
                isPersonalInfoExpanded: true,
                isEmploymentInfoExpanded: true,
                isFinancialInfoExpanded: true,
                isMilitaryInfoExpanded: true,
                isRegulatoryInfoExpanded: true,

            },

            jointOwner: {
                relationshipToAcc:"",
                relationshipToAccDropDown: false,
                relationshipToAccValidation: true,

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
                addrLine1_Phy: "",
                addrLine2_Phy: "",
                zipcode_Phy: "",
                city_Phy: "",
                stateCity_Phy: "",
                stateCity_PhyDropDown: false,
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
                phoneType: "",
                phoneTypeDropDown: false,
                PhoneType2: "",
                phoneType2DropDown: false,
                PhoneType3: "",
                phoneType3DropDown: false,
                primarySourceIncome: "",
                primarySourceIncomeDropDown: false,

                primarySourceIncomeValidation: true,
                phoneTypeValidation: true,
                phoneType2Validation: true,
                phoneType3Validation: true,
                contactDuringMobNoValidation: true,
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
                addrLine1_PhyValidation: true,
                addrLine2_PhyValidation: true,
                zipcode_PhyValidation: true,
                city_PhyValidation: true,
                stateCity_PhyValidation: true,
                state_PhyValidation: true,
                isYourPhysicalAddresSameValidation: true,
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
                empStatusForOther: "",
                empIndustryForOther: "",

                empStatusValidation: true,
                seniorPoliticalNameValidation: true,
                isSeniorPoliticalFigureValidation:true,
                empStatusForOtherValidation: true,
                empIndustryForOtherValidation: true,

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
                isMilitaryHistoryValidation:true,

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
                phoneType: "",
                phoneTypeDropDown: false,


                phoneTypeValidation: true,
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
                phoneType: "",
                phoneTypeDropDown: false,


                phoneTypeValidation: true,
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

            retirementBeneficiaryData: [
                {
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
                    phoneType: "",
                    phoneTypeDropDown: false,


                    phoneTypeValidation: true,
                    firstNameValidation: true,
                    lastNameValidation: true,
                    dobValidation: true,
                    emailAddressValidation: true,
                    socialSecurityNoValidation: true,
                    beneficiaryTypeValidation: true,
                    relationshipToAccValidation: true,
                    beneficiaryDistPercentValidation: true,

                }
            ],

            currentZipCodeRef: {
                stateKey: "",
                keyName: ""
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
        console.log("componentDidUpdate::::> " + prevState);
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

                        if (this.state.currentZipCodeRef.keyName == "empZipcode") {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    empCity: tempResponse.City,
                                    empStateCity: tempResponse.State

                                }
                            }));
                        }else if (this.state.currentZipCodeRef.keyName == "zipcode_Phy") {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    city_Phy: tempResponse.City,
                                    stateCity_Phy: tempResponse.State

                                }
                            }));
                        } else {
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
                        }else if (this.state.currentZipCodeRef.keyName == "zipcode_Phy") {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    city_Phy: tempResponse.City,
                                    stateCity_Phy: tempResponse.State,
                                    addrLine1_Phy: tempResponse.Address1 || "",
                                    addrLine2_Phy: tempResponse.Address2 || "",
                                    addrLine1_PhyValidation: true,
                                    addrLine2_PhyValidation: true
                                }
                            }));
                        } else {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    city: tempResponse.City,
                                    stateCity: tempResponse.State,
                                    addrLine1: tempResponse.Address1 || "",
                                    addrLine2: tempResponse.Address2 || "",
                                    addrLine1Validation: true,
                                    addrLine2Validation: true
                                }
                            }));
                        }

                    }else if(tempResponse && tempResponse.ErrorNumber) {
                        if (this.state.currentZipCodeRef.keyName == "empZipcode") {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    empAddrLine1: "",
                                    empAddrLine2: ""

                                }
                            }));
                        }else if(this.state.currentZipCodeRef.keyName == "zipcode_Phy") {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    addrLine1_Phy: "",
                                    addrLine2_Phy: "",
                                    addrLine1_PhyValidation: false,
                                    addrLine2_PhyValidation: false
                                },
                                errMsg:"Invalid address"
                            }));
                        } else {
                            this.setState(prevState => ({
                                [this.state.currentZipCodeRef.stateKey]: {
                                    ...prevState[this.state.currentZipCodeRef.stateKey],
                                    
                                    addrLine1: "",
                                    addrLine2: "",
                                    addrLine1Validation: false,
                                    addrLine2Validation: false
                                },
                                errMsg:"Invalid address"
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
                    if (tempResponse && tempResponse.b) {
                        if (tempResponse.b.Location) {
                            alert("Image Uploaded Successfully \n::" + tempResponse.b.Location);
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
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined" || str.replace(/^\s+|\s+$/gm,'') == "" ) {
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
                if (response.data && response.data != null && response.data != undefined && response.data.length > 0) {
                    const payload = {
                        "Body": "" + response.data
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


    onSubmitZipEditing = (stateKey, keyName, nextInputFocus) => text => {
        console.log("onSubmitZipEditing:::>" + nextInputFocus + " " + text);

        let newItems = { ...this.state.currentZipCodeRef };
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        // alert("onSubmitZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });


        if (this.state[stateKey].citizenship == "U.S") {
            let payload = {};
            let addressPayload = {};
            if(keyName == "zipcode_Phy"){
                 payload = {
                    "Zip": this.state[stateKey][keyName]
                };
                 addressPayload = {
                    ...payload,
                    "Address1": this.state[stateKey]["addrLine1_Phy"],
                    "Address2": this.state[stateKey]["addrLine2_Phy"],
                    "City": this.state[stateKey]["city_Phy"],
                    "State": this.state[stateKey]["stateCity_Phy"]
                };
            }else{
                 payload = {
                    "Zip": this.state[stateKey][keyName]
                };
                 addressPayload = {
                    ...payload,
                    "Address1": this.state[stateKey]["addrLine1"],
                    "Address2": this.state[stateKey]["addrLine2"],
                    "City": this.state[stateKey]["city"],
                    "State": this.state[stateKey]["stateCity"]
                };
            }
            


            this.props.getStateCity(payload);
            this.props.getAddressFormat(addressPayload);
        }

       

        // nextInputFocus.focus();
    }
    onSubmitEmpZipEditing = (stateKey, keyName, nextInputFocus) => text => {
        console.log("onSubmitEmpZipEditing:::>" + nextInputFocus + " " + text);

        let newItems = { ...this.state.currentZipCodeRef };
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        // alert("onSubmitEmpZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

       /*
        if (this.state[stateKey].citizenship == "U.S") {
            const payload = {
                "Zip": this.state[stateKey][keyName]
            };
            const addressPayload = {
                ...payload,
                "Address1": this.state[stateKey]["empAddrLine1"],
                "Address2": this.state[stateKey]["empAddrLine2"],
                "City": this.state[stateKey]["empCity"],
                "State": this.state[stateKey]["empStateCity"]
            };


            this.props.getStateCity(payload);
            this.props.getAddressFormat(addressPayload);
        }
        */
     
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
        },
        enableScrollViewScroll:false
    }));

    onPressRadio = (stateKey, keyName, text) => () => {


        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: text
            }
        }));
    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }


    /*------- Validations methods --------*/

    validateIndividualAccInfoFields = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

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
            input = 'gender';
        } else if (this.isEmpty(this.state.personal.maritalStatus)) {
            errMsg = gblStrings.accManagement.emptyMaritalMsg;
            input = 'maritalStatus';
        } else if (this.isEmpty(this.state.personal.citizenship)) {
            errMsg = gblStrings.accManagement.emptyCitizenshipMsg;
        } else if (this.isEmpty(this.state.personal.mailingAddressType)) {
            errMsg = gblStrings.accManagement.emptyAddressTypeMsg;
            input = 'mailingAddressType';
        } else if (this.isEmpty(this.state.personal.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
        } else if (this.isEmpty(this.state.personal.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
        } else if (this.isEmpty(this.state.personal.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
        } else if (this.state.personal.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
        } else if (this.isEmpty(this.state.personal.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
        } else if (this.isEmpty(this.state.personal.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
        } else if (this.isEmpty(this.state.personal.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
            input = 'isYourPhysicalAddresSame';
        } else if (this.state.personal.isYourPhysicalAddresSame =="No" && this.isEmpty(this.state.personal.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame =="No" && this.isEmpty(this.state.personal.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame =="No" &&this.isEmpty(this.state.personal.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
        }else if (this.state.personal.isYourPhysicalAddresSame =="No" && this.state.personal.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame =="No" &&this.isEmpty(this.state.personal.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame =="No" && this.isEmpty(this.state.personal.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity_Phy';
        } else if (this.isEmpty(this.state.personal.phoneType)) {
            errMsg = gblStrings.accManagement.emptyPhonetypeMsg;
            input = 'phoneType';
        } else if (this.isEmpty(this.state.personal.mobileNo)) {
            errMsg = gblStrings.accManagement.emptyMobileNoMsg;
            input = 'mobileNo';
        } else if (this.state.personal.mobileNo.length < gblStrings.maxLength.mobileNo && this.state.personal.phoneType == "Mobile") {
            errMsg = gblStrings.accManagement.invalidMobileNoMsg;
            input = 'mobileNo';
        } else if (this.state.personal.mobileNo.length < gblStrings.maxLength.phoneNo && this.state.personal.phoneType == "Home") {
            errMsg = gblStrings.accManagement.invalidPhoneNoMsg;
            input = 'mobileNo';
        } else if (this.state.personal.mobileNo.length < gblStrings.maxLength.workPhone && this.state.personal.phoneType == "Work") {
            errMsg = gblStrings.accManagement.invalidWorkPhoneNoMsg;
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
        } else if (this.state.personal.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(this.state.personal.empStatus)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusMsg;
            input = 'empStatus';
        } else if (this.state.personal.empStatus == "Others" && this.isEmpty(this.state.personal.empStatusForOther)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusOthersMsg;
            input = 'empStatusForOther';
        } else if (this.isEmpty(this.state.personal.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
            input = 'isMilitaryHistory';
        } else if (this.isEmpty(this.state.personal.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (this.state.personal.isSeniorPoliticalFigure == "Yes" && this.isEmpty(this.state.personal.seniorPoliticalName)) {
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
                errMsg: isValidationSuccess == false ? errMsg : ""
            }));


            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && this[input] !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }
            alert(errMsg);
        }

        return isValidationSuccess;
    }

    validateJointAccInfoFields = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

        if (this.isEmpty(this.state.jointOwner.relationshipToAcc)) {
            errMsg = gblStrings.accManagement.emptyRelationToAccMsg;
            input = 'relationshipToAcc';
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
            input = 'gender';
        } else if (this.isEmpty(this.state.jointOwner.maritalStatus)) {
            errMsg = gblStrings.accManagement.emptyMaritalMsg;
            input = 'maritalStatus';
        } else if (this.isEmpty(this.state.jointOwner.citizenship)) {
            errMsg = gblStrings.accManagement.emptyCitizenshipMsg;
        } else if (this.isEmpty(this.state.jointOwner.mailingAddressType)) {
            errMsg = gblStrings.accManagement.emptyAddressTypeMsg;
            input = 'mailingAddressType';
        } else if (this.isEmpty(this.state.jointOwner.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
        } else if (this.isEmpty(this.state.jointOwner.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
        } else if (this.isEmpty(this.state.jointOwner.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
        }else if (this.state.personal.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
        } else if (this.isEmpty(this.state.jointOwner.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
        } else if (this.isEmpty(this.state.jointOwner.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
        } else if (this.isEmpty(this.state.jointOwner.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
            input = 'isYourPhysicalAddresSame';
        }else if (this.state.jointOwner.isYourPhysicalAddresSame =="No" && this.isEmpty(this.state.jointOwner.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame =="No" && this.isEmpty(this.state.jointOwner.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame =="No" &&this.isEmpty(this.state.jointOwner.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
        }else if (this.state.jointOwner.isYourPhysicalAddresSame =="No" && this.state.jointOwner.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame =="No" &&this.isEmpty(this.state.jointOwner.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame =="No" && this.isEmpty(this.state.jointOwner.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
        } else if (this.isEmpty(this.state.jointOwner.phoneType)) {
            errMsg = gblStrings.accManagement.emptyPhonetypeMsg;
            input = 'phoneType';
        } else if (this.isEmpty(this.state.jointOwner.mobileNo)) {
            errMsg = gblStrings.accManagement.emptyMobileNoMsg;
            input = 'mobileNo';
        } else if (this.state.jointOwner.mobileNo.length < gblStrings.maxLength.mobileNo && this.state.jointOwner.phoneType == "Mobile") {
            errMsg = gblStrings.accManagement.invalidMobileNoMsg;
            input = 'mobileNo';
        } else if (this.state.jointOwner.mobileNo.length < gblStrings.maxLength.phoneNo && this.state.jointOwner.phoneType == "Home") {
            errMsg = gblStrings.accManagement.invalidPhoneNoMsg;
            input = 'mobileNo';
        } else if (this.state.jointOwner.mobileNo.length < gblStrings.maxLength.workPhone && this.state.jointOwner.phoneType == "Work") {
            errMsg = gblStrings.accManagement.invalidWorkPhoneNoMsg;
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
        }else if (this.state.personal.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(this.state.jointOwner.empStatus)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusMsg;
            input = 'empStatus';
        } else if (this.state.jointOwner.empStatus == "Others" && this.isEmpty(this.state.jointOwner.empStatusForOther)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusOthersMsg;
            input = 'empStatusForOther';
        } else if (this.isEmpty(this.state.jointOwner.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
            input = 'isMilitaryHistory';
        } else if (this.isEmpty(this.state.jointOwner.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (this.state.jointOwner.isSeniorPoliticalFigure == "Yes" && this.isEmpty(this.state.jointOwner.seniorPoliticalName)) {
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
                    [input + 'Validation']: false,
                    isPersonalInfoExpanded: true,
                    isEmploymentInfoExpanded: true,
                    isFinancialInfoExpanded: true,
                    isMilitaryInfoExpanded: true,
                    isRegulatoryInfoExpanded: true,
                },
                isValidationSuccess: isValidationSuccess,
                errMsg: isValidationSuccess == false ? errMsg : ""
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && this[input] !== undefined) {
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
        } else if (this.state.personal.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(this.state.childBeneficiary.relationshipToAcc)) {
            errMsg = gblStrings.accManagement.emptyRelationShipMsg;
            input = 'empStatus';
        } else if (this.isEmpty(this.state.childBeneficiary.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
        } else if (this.state.childBeneficiary.isSeniorPoliticalFigure == "Yes" && this.isEmpty(this.state.childBeneficiary.seniorPoliticalName)) {
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
        // return this.props.navigation.navigate({ routeName: 'openAccPageThree', key: 'openAccPageThree' });
        try {


            const accType = this.props.navigation.getParam('accType', '');
            console.log("validateFields::: " + accType);

            let isValidationSuccess = false;

            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    primarySourceIncomeValidation: true,
                    phoneTypeValidation: true,
                    phoneType2Validation: true,
                    phoneType3Validation: true,
                    contactDuringMobNoValidation: true,
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
                    addrLine1_PhyValidation: true,
                    addrLine2_PhyValidation: true,
                    zipcode_PhyValidation: true,
                    city_PhyValidation: true,
                    stateCity_PhyValidation: true,
                    state_PhyValidation: true,
                    isYourPhysicalAddresSameValidation: true,
                    mobileNoValidation: true,
                    workPhoneNoValidation: true,
                    emailAddressValidation: true,
                    socialSecurityNoValidation: true,

                    empStatusValidation: true,
                    seniorPoliticalNameValidation: true,
                    isSeniorPoliticalFigureValidation:true,

                    militaryStatusValidation: true,
                    isMilitaryHistoryValidation:true,


                },
                jointOwner: {
                    ...prevState.jointOwner,
                    primarySourceIncomeValidation: true,
                    phoneTypeValidation: true,
                    phoneType2Validation: true,
                    phoneType3Validation: true,
                    contactDuringMobNoValidation: true,
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
                    addrLine1_PhyValidation: true,
                    addrLine2_PhyValidation: true,
                    zipcode_PhyValidation: true,
                    city_PhyValidation: true,
                    stateCity_PhyValidation: true,
                    state_PhyValidation: true,
                    isYourPhysicalAddresSameValidation: true,
                    mobileNoValidation: true,
                    workPhoneNoValidation: true,
                    emailAddressValidation: true,
                    socialSecurityNoValidation: true,
                    empStatusValidation: true,
                    seniorPoliticalNameValidation: true,
                    isSeniorPoliticalFigureValidation:true,

                    militaryStatusValidation: true,
                    isMilitaryHistoryValidation:true,


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
                    componentStyle={{ width: scaledHeight(80), marginRight: scaledHeight(8), marginTop: scaledHeight(0) }}

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
                    componentStyle={{ width: scaledHeight(100), marginTop: scaledHeight(0) }}

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


    renderCustomDropDown = ({ section = "", stateKey = "", dropDownName = "", lblDropdownName = "", isOptional = false }) => {
        let validationKey = stateKey + "Validation";
        let validationKeyValue = this.state[section][validationKey] != undefined ? !this.state[section][validationKey] : false;

        let dropDownData = dummyData;
        let tempkey = "";

        switch (dropDownName) {
            case "prefixDropDown":

                tempkey = "prefix";
                break;
            case "suffixDropDown":


                tempkey = "suffix";
                break;
            case "maritalStatusDropDown":


                tempkey = "marital_status";
                break;
            case "stateCityDropDown":

                tempkey = "city";
                break;
            case "contactDuringMobNoDropDown":
            case "contactDuringTelePhone2DropDown":
            case "contactDuringTelePhone3DropDown":


                tempkey = "contact_time";
                break;
            case "empStatusDropDown":


                tempkey = "employment_status";
                break;
            case "primarySourceIncomeDropDown":
                tempkey = "prim_src_income";
                break;
            case "empIndustryDropDown":


                tempkey = "industry";
                break;
            case "empStateCityDropDown":


                tempkey = "city";
                break;
            case "annualIncomeDropDown":

                tempkey = "annual_income";
                break;
            case "taxBracketDropDown":
                tempkey = "taxBracket";
                break;
            case "networthDropDown":

                tempkey = "net_worth";

                break;
            case "taxFilingStatusDropDown":


                tempkey = "tax_filling_status";
                break;

            case "militaryStatusDropDown":

                tempkey = "mil_status";
                break;
            case "branchOfServiceDropDown":


                tempkey = "mil_serv_branch";
                break;
            case "rankDropDown":
                tempkey = this.state[section].rankKey;
                dropDownData = [];
                break;

            case "rankDropDown_IRA":
            case "rankDropDown_childben":
                dropDownData = [];
                break;
            case "beneficiaryTypeDropDown":
                tempkey = "ben_type";
                break;
            case "relationshipToAccDropDown":
                tempkey = "relationship";
                break;
            case "phoneTypeDropDown":
            case "phoneType2DropDown":
            case "phoneType3DropDown":
                tempkey = "phone_type";
                break;

        }

        if (tempkey !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            dropDownData = this.props.masterLookupStateData[tempkey].value;
        }
        let inputRefKey = "";
        if (section == "jointOwner") {
            inputRefKey = "_joint";
        } else if (section == "retirement") {
            inputRefKey = "_IRA";
        } else if (section == "childBeneficiary") {
            inputRefKey = "_childben";
        }


        return (
            <GDropDownComponent
                inputref={this.setInputRef(stateKey + "" + inputRefKey)}
                dropDownLayout={styles.dropDownLayout}
                dropDownTextName={styles.dropDownTextName}
                textInputStyle={styles.textInputStyle}
                dropDownName={lblDropdownName}
                data={dropDownData}
                dropDownValue={this.state[section][stateKey]}
                showDropDown={this.state[section][dropDownName]}
                changeState={(stateKey != "taxBracket") ? this.onPressDropDown(section, dropDownName) : null}
                selectedDropDownValue={this.onSelectedDropDownValue(section, stateKey, dropDownName)}
                itemToDisplay={"value"}
                dropDownPostition={{ ...styles.dropDownPostition }}
                errorFlag={isOptional ? false : validationKeyValue}
                errorText={this.state.errMsg}
                isOptional={isOptional}
            />
        );

    }

    onSelectedDropDownValue = (section, stateKey, dropDownName) => (item) => {
        console.log("onSelectedDropDownValue:");
        let tempRankKey = "mil_rank_" + item.key;
        let payload = "";

        if (dropDownName == "branchOfServiceDropDown") {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[section],
                    [stateKey]: item.value,
                    [dropDownName]: false,
                    rankKey: tempRankKey
                }
            }));

            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempRankKey]) {
                payload = tempRankKey;
                this.props.getRankData(payload);
            }

        } else {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[section],
                    [stateKey]: item.value,
                    [dropDownName]: false
                },
                enableScrollViewScroll:true
            }));
        }

    }

    onSelectedIRABeneficiaryDropDownValue = (dropDownName, index) => (item) => {
        console.log("onSelectedIRABeneficiaryDropDownValue:: " + dropDownName);
        let newItems = [...this.state.retirementBeneficiaryData];

        switch (dropDownName) {

            case "beneficiaryTypeDropDown":
                newItems[index].beneficiaryTypeDropDown = false;
                newItems[index].beneficiaryType = item.value;
                break;
            case "relationshipToAccDropDown":
                newItems[index].relationshipToAccDropDown = false;
                newItems[index].relationshipToAcc = item.value;
                break;

            default:
                break;

        }

        this.setState({
            selectedFundInvestmentsData: newItems
        });


    }
    onPressDropDownForIRABeneficiary = (keyName, index) => () => {
        console.log("onPressDropDownForIRABeneficiary::: " + keyName);
        let newItems = [...this.state.retirementBeneficiaryData];
        newItems[index][keyName] = !newItems[index][keyName];

        this.setState({
            retirementBeneficiaryData: newItems
        });

    }
    onChangeTextForIRABeneficiary = (keyName, index) => text => {
        console.log("onChangeTextForIRABeneficiary:::>");
        let newItems = [...this.state.retirementBeneficiaryData];
        newItems[index][keyName] = text;

        this.setState({
            retirementBeneficiaryData: newItems,
        });


    }

    onChangeDateForIRABeneficiary = (keyName, index) => date => {
        console.log("onChangeDateForIRABeneficiary:::>");
        let newItems = [...this.state.retirementBeneficiaryData];
        newItems[index][keyName] = date;

        this.setState({
            retirementBeneficiaryData: newItems,
        });
    }
    onPressRemoveIRABeneficiary = (index) => () => {
        console.log("onPressRemoveIRABeneficiary::: " + index);
        let newItems = [...this.state.retirementBeneficiaryData];
        newItems.splice(index, 1);
        this.setState({
            retirementBeneficiaryData: newItems
        });
    }
    onPressAddIRABeneficiary = () => {
        console.log("onPressAddIRABeneficiary::: " );

       let tempBeneficiaryObj = {
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
            phoneType: "",
            phoneTypeDropDown: false,


            phoneTypeValidation: true,
            firstNameValidation: true,
            lastNameValidation: true,
            dobValidation: true,
            emailAddressValidation: true,
            socialSecurityNoValidation: true,
            beneficiaryTypeValidation: true,
            relationshipToAccValidation: true,
            beneficiaryDistPercentValidation: true,

        };
        let newItems = [...this.state.retirementBeneficiaryData,tempBeneficiaryObj];
        this.setState({
            retirementBeneficiaryData: newItems
        });
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
                                isOptional: true
                            })
                            }
                        </View>


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.firstName}
                        </Text>
                        <GInputComponent
                            //inputref={(ref)=> this.firstName = ref}
                            inputref={this.setInputRef("firstName")}
                            value={this.state.personal.firstName}
                            editable = {this.state.personal.firstName == "" ? true : false}
                            propInputStyle={this.state.personal.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.firstName}
                            onChangeText={this.onChangeText("personal", "firstName")}
                            onSubmitEditing={this.onSubmitEditing(this.middleInitial)}
                            errorFlag={!this.state.personal.firstNameValidation}
                            errorText={this.state.errMsg}
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
                            value={this.state.personal.middleInitial}
                            editable = {this.props.initialState.middleInitial == "" ? true : false}
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
                            value={this.state.personal.lastName}
                            editable = {this.state.personal.lastName == "" ? true : false}
                            propInputStyle={this.state.personal.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.lastName}
                            returnKeyType={"done"}
                            onChangeText={this.onChangeText("personal", "lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.suffix)}
                            errorFlag={!this.state.personal.lastNameValidation}
                            errorText={this.state.errMsg}

                        />

                        <View style={{ flexGrow: 1, width: "40%" }}>
                            {this.renderCustomDropDown({
                                section: "personal",
                                stateKey: "suffix",
                                dropDownName: "suffixDropDown",
                                lblDropdownName: gblStrings.accManagement.suffix,
                                isOptional: true
                            })
                            }
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.dob}
                        </Text>
                        <GDateComponent
                            inputref={this.setInputRef("dob")}
                            date={this.state.personal.dob}
                            placeholder="Select Date"
                            errorFlag={!this.state.personal.dobValidation}
                            errorMsg={this.state.errMsg}
                            maxDate={prevDate}
                            onDateChange={this.onChangeDate("personal", "dob")}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.gender}
                        </Text>
                        {this.renderRadio("personal", "gender", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                        {!this.state.personal.genderValidation &&
                                    <Text style={styles.errMsg}>
                                        {this.state.errMsg}
                                    </Text>
                                }


                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "maritalStatus",
                            dropDownName: "maritalStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.maritalStatus,
                            isOptional: false
                        })
                        }

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.citizenship}
                        </Text>
                        {this.renderRadio("personal", "citizenship", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                       
                        {
                            this.state.personal.citizenship != "U.S" &&
                            <View style={{ flexGrow: 1, marginTop: scaledHeight(25) }}>
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

                        }
                        
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.addressType}
                        </Text>
                        {this.renderRadio("personal", "mailingAddressType", 30, { marginBottom: scaledHeight(13) }, styles.radioBtnColGrp)}
                        {!this.state.personal.mailingAddressTypeValidation &&
                                    <Text style={styles.errMsg}>
                                        {this.state.errMsg}
                                    </Text>
                                }

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
                            errorFlag={!this.state.personal.addrLine1Validation}
                            errorText={this.state.errMsg}
                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2")}
                            propInputStyle={this.state.personal.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            value={this.state.personal.addrLine2}
                            onChangeText={this.onChangeText("personal", "addrLine2")}
                            onSubmitEditing={this.onSubmitEditing(this.zipcode)}
                            errorFlag={!this.state.personal.addrLine2Validation}
                            errorText={this.state.errMsg}


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
                            keyboardType ="number-pad"
                            onSubmitEditing = {this.onSubmitZipEditing("personal", "zipcode", this.city)}
                            errorFlag={!this.state.personal.zipcodeValidation}
                            errorText={this.state.errMsg}
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
                            errorFlag={!this.state.personal.cityValidation}
                            errorText={this.state.errMsg}
                            editable = {this.state.personal.citizenship != "U.S"? true:false}

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
                            errorFlag={!this.state.personal.stateCityValidation}
                            errorText={this.state.errMsg}
                            editable = {this.state.personal.citizenship != "U.S"? true:false}

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
                        {!this.state.personal.isYourPhysicalAddresSameValidation &&
                                    <Text style={styles.errMsg}>
                                        {this.state.errMsg}
                                    </Text>
                                }

                        {
                            this.state.personal.isYourPhysicalAddresSame == "No" &&
                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.address}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine1_Phy")}
                                    propInputStyle={this.state.personal.addrLine1_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine1}
                                    maxLength={gblStrings.maxLength.emplAddress1}
                                    value={this.state.personal.addrLine1_Phy}
                                    onChangeText={this.onChangeText("personal", "addrLine1_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.addrLine2_Phy)}
                                    errorFlag={!this.state.personal.addrLine1_PhyValidation}
                                    errorText={this.state.errMsg}
                                />
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine2_Phy")}
                                    propInputStyle={this.state.personal.addrLine2_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.addressLine2}
                                    value={this.state.personal.addrLine2_Phy}
                                    onChangeText={this.onChangeText("personal", "addrLine2_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.zipcode_Phy)}
                                    errorFlag={!this.state.personal.addrLine2_PhyValidation}
                                    errorText={this.state.errMsg}


                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.zipcode}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("zipcode_Phy")}
                                    propInputStyle={this.state.personal.zipcode_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterZip}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    returnKeyType={"done"}
                                    onChangeText={this.onChangeText("personal", "zipcode_Phy")}
                                    keyboardType="number-pad"
                                    onSubmitEditing={this.onSubmitZipEditing("personal", "zipcode_Phy", this.city_Phy)}
                                    errorFlag={!this.state.personal.zipcode_PhyValidation}
                                    errorText={this.state.errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("city_Phy")}
                                    propInputStyle={this.state.personal.city_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    maxLength={gblStrings.maxLength.city}
                                    value={this.state.personal.city_Phy}
                                    onChangeText={this.onChangeText("personal", "city_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.stateCity_Phy)}
                                    errorFlag={!this.state.personal.city_PhyValidation}
                                    errorText={this.state.errMsg}
                                    editable = {this.state.personal.citizenship != "U.S"? true:false}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("stateCity_Phy")}
                                    propInputStyle={this.state.personal.stateCity_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType={"done"}
                                    maxLength={gblStrings.maxLength.state}
                                    value={this.state.personal.stateCity_Phy}
                                    onChangeText={this.onChangeText("personal", "stateCity_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                    errorFlag={!this.state.personal.stateCity_PhyValidation}
                                    errorText={this.state.errMsg}
                                    editable = {this.state.personal.citizenship != "U.S"? true:false}

                                />

                            </View>
                        }

                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "phoneType",
                            dropDownName: "phoneTypeDropDown",
                            lblDropdownName: gblStrings.accManagement.phoneType,
                            isOptional: false
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
                            value = {this.state.personal.mobileNo.replace(/\d(?=\d{4})/g, "*")}
                            onChangeText={this.onChangeText("personal", "mobileNo")}
                            onSubmitEditing={this.onSubmitEditing(this.contactDuringMobNo)}
                            errorFlag={!this.state.personal.mobileNoValidation}
                            errorText={this.state.errMsg}
                        />


                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "contactDuringMobNo",
                            dropDownName: "contactDuringMobNoDropDown",
                            lblDropdownName: gblStrings.accManagement.contactMeDuring,
                            isOptional: true
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

                        <Text style={styles.lblTxt}>
                            <Text>
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
                            isOptional: true
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
                        <Text style={styles.lblTxt}>
                            <Text>
                                {gblStrings.accManagement.telePhoneNo3}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
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
                            isOptional: true
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
                            errorFlag={!this.state.personal.emailAddressValidation}
                            errorText={this.state.errMsg}
                            value = {this.state.personal.emailAddress}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo")}
                            propInputStyle={this.state.personal.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            keyboardType="number-pad"
                            returnKeyType={"done"}
                            maxLength={gblStrings.maxLength.ssnNo}
                            onChangeText={this.onChangeText("personal", "socialSecurityNo")}
                            errorFlag={!this.state.personal.socialSecurityNoValidation}
                            errorText={this.state.errMsg}
                            secureTextEntry

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

                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "empStatus",
                            dropDownName: "empStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.empStatus,
                            isOptional: false
                        })
                        }
                        {this.state.personal.empStatus === "Others" &&
                            <GInputComponent
                                inputref={this.setInputRef("empStatusForOther")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={"Enter Employment status"}
                                maxLength={gblStrings.maxLength.common}
                                onChangeText={this.onChangeText("personal", "empStatusForOther")}
                                onSubmitEditing={this.onSubmitEditing(this.empIndustry)}
                                errorFlag={!this.state.personal.empStatusForOtherValidation}
                                errorText={this.state.errMsg}
                            />
                        }


                        {
                            // Render employment fields if user have employment history
                            (this.state.personal.empStatus !== "" && this.state.personal.empStatus !== "Unemployed" && this.state.personal.empStatus !== "Homemaker" && this.state.personal.empStatus !== "Student" && this.state.personal.empStatus !== "Retired") &&

                            <View style={styles.childSectionGrp}>

                                {this.renderCustomDropDown({
                                    section: "personal",
                                    stateKey: "empIndustry",
                                    dropDownName: "empIndustryDropDown",
                                    lblDropdownName: gblStrings.accManagement.industry,
                                    isOptional: false
                                })
                                }
                                {this.state.personal.empIndustry === "Other Industry" &&
                                    <GInputComponent
                                        inputref={this.setInputRef("empIndustryForOther")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={"Enter Industry"}
                                        maxLength={gblStrings.maxLength.common}
                                        onChangeText={this.onChangeText("personal", "empIndustryForOther")}
                                        onSubmitEditing={this.onSubmitEditing(this.empOccupation)}
                                    errorFlag={!this.state.personal.empIndustryForOtherValidation}
                                    errorText={this.state.errMsg}
                                    />
                                }

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
                                    onSubmitEditing={this.onSubmitEditing(this.empZipcode)}

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
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType={"done"}
                                    maxLength={gblStrings.maxLength.state}
                                    value={this.state.personal.empStateCity}
                                    onChangeText={this.onChangeText("personal", "empStateCity")}
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
                        {
                            // Render employment fields if user not have employment history
                            (this.state.personal.empStatus == "Unemployed" || this.state.personal.empStatus == "Homemaker" || this.state.personal.empStatus == "Student" || this.state.personal.empStatus == "Retired") &&

                            <View style={styles.childSectionGrp}>
                                {this.renderCustomDropDown({
                                    section: "personal",
                                    stateKey: "primarySourceIncome",
                                    dropDownName: "primarySourceIncomeDropDown",
                                    lblDropdownName: gblStrings.accManagement.primarySourceIncome,
                                    isOptional: false
                                })
                                }
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
                        {!this.state.personal.isMilitaryHistoryValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }


                        {
                            this.state.personal.isMilitaryHistory == "Yes" &&


                            <View >

                                {this.renderCustomDropDown({
                                    section: "personal",
                                    stateKey: "militaryStatus",
                                    dropDownName: "militaryStatusDropDown",
                                    lblDropdownName: gblStrings.accManagement.militaryStatus,
                                    isOptional: false
                                })
                                }

                                {this.renderCustomDropDown({
                                    section: "personal",
                                    stateKey: "branchOfService",
                                    dropDownName: "branchOfServiceDropDown",
                                    lblDropdownName: gblStrings.accManagement.branchOfService,
                                    isOptional: false
                                })
                                }


                                {this.renderCustomDropDown({
                                    section: "personal",
                                    stateKey: "rank",
                                    dropDownName: "rankDropDown",
                                    lblDropdownName: gblStrings.accManagement.rank,
                                    isOptional: false
                                })
                                }


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
                                            maxDate={currentdate}
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
                                            date={this.state.personal.toDateMilitary}
                                            placeholder="Select Date"
                                            minDate={this.state.personal.fromDateMilitary}
                                            maxDate={currentdate}
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

                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "annualIncome",
                            dropDownName: "annualIncomeDropDown",
                            lblDropdownName: gblStrings.accManagement.annualIncome,
                            isOptional: false
                        })
                        }

                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "taxBracket",
                            dropDownName: "taxBracketDropDown",
                            lblDropdownName: gblStrings.accManagement.taxBracket,
                            isOptional: false
                        })
                        }


                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "networth",
                            dropDownName: "networthDropDown",
                            lblDropdownName: gblStrings.accManagement.networth,
                            isOptional: false
                        })
                        }

                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "taxFilingStatus",
                            dropDownName: "taxFilingStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.taxFilingStatus,
                            isOptional: false
                        })
                        }


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
                        {!this.state.personal.isSeniorPoliticalFigureValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }
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
                                    errorFlag={!this.state.personal.seniorPoliticalNameValidation}
                                    errorText={this.state.errMsg}
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

                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "relationshipToAcc",
                            dropDownName: "relationshipToAccDropDown",
                            lblDropdownName: gblStrings.accManagement.relationshipToAccHolder,
                            isOptional: false
                        })
                        }

                        <View style={{ flexGrow: 1, width: "40%" }}>
                            {this.renderCustomDropDown({
                                section: "jointOwner",
                                stateKey: "prefix",
                                dropDownName: "prefixDropDown",
                                lblDropdownName: gblStrings.accManagement.prefix,
                                isOptional: true
                            })
                            }
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
                            errorFlag={!this.state.jointOwner.firstNameValidation}
                            errorText={this.state.errMsg}
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
                            errorFlag={!this.state.jointOwner.lastNameValidation}
                            errorText={this.state.errMsg}
                        />

                     
                        <View style={{ flexGrow: 1, width: "40%" }}>
                            {this.renderCustomDropDown({
                                section: "jointOwner",
                                stateKey: "suffix",
                                dropDownName: "suffixDropDown",
                                lblDropdownName: gblStrings.accManagement.suffix,
                                isOptional: true
                            })
                            }
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.dob}
                        </Text>
                        <GDateComponent
                            inputref={this.setInputRef("dob_joint")}
                            date={this.state.jointOwner.dob}
                            placeholder="Select Date"
                            errorFlag={!this.state.jointOwner.dobValidation}
                            errorMsg={this.state.errMsg}
                            maxDate={prevDate}
                            onDateChange={this.onChangeDate("jointOwner", "dob")}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.gender}
                        </Text>
                        {this.renderRadio("jointOwner", "gender", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                        {!this.state.jointOwner.genderValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }

                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "maritalStatus",
                            dropDownName: "maritalStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.maritalStatus,
                            isOptional: false
                        })
                        }

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.citizenship}
                        </Text>
                        {this.renderRadio("jointOwner", "citizenship", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                        {
                            this.state.personal.citizenship != "U.S" &&
                            <View style={{ flexGrow: 1, marginTop: scaledHeight(25) }}>
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

                        }

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.mailingAddressType}
                        </Text>
                        {this.renderRadio("jointOwner", "mailingAddressType", 30, { marginBottom: scaledHeight(13) }, styles.radioBtnColGrp)}
                        {!this.state.jointOwner.mailingAddressTypeValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }
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
                            errorFlag={!this.state.jointOwner.addrLine1Validation}
                            errorText={this.state.errMsg}

                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2_joint")}
                            propInputStyle={this.state.jointOwner.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            onChangeText={this.onChangeText("jointOwner", "addrLine2")}
                            onSubmitEditing={this.onSubmitEditing(this.zipcode_joint)}
                            errorFlag={!this.state.jointOwner.addrLine2Validation}
                            errorText={this.state.errMsg}
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
                            onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode", this.city_joint)}
                            errorFlag={!this.state.jointOwner.zipcodeValidation}
                            errorText={this.state.errMsg}


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
                            value={this.state.jointOwner.city}
                            onChangeText={this.onChangeText("jointOwner", "city")}
                            onSubmitEditing={this.onSubmitEditing(this.stateCity_joint)}
                            errorFlag={!this.state.jointOwner.cityValidation}
                            errorText={this.state.errMsg}
                            editable = {this.state.jointOwner.citizenship != "U.S"? true:false}



                        />
                        <GInputComponent
                            inputref={this.setInputRef("stateCity")}
                            propInputStyle={this.state.jointOwner.stateCityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterState}
                            returnKeyType={"done"}
                            maxLength={gblStrings.maxLength.state}
                            value={this.state.jointOwner.stateCity}
                            onChangeText={this.onChangeText("jointOwner", "stateCity")}
                            onSubmitEditing={this.onSubmitEditing(this.mobileNo_joint)}
                            errorFlag={!this.state.jointOwner.stateCityValidation}
                            errorText={this.state.errMsg}
                            editable = {this.state.jointOwner.citizenship != "U.S"? true:false}

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
                                selected={(this.state.jointOwner.isYourPhysicalAddresSame !== null && this.state.isYourPhysicalAddresSame == "No") ? true : false}
                                onPress={this.onPressRadio("jointOwner", "isYourPhysicalAddresSame", "No")}
                            />
                        </View>
                        {!this.state.jointOwner.isYourPhysicalAddresSameValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }

                        {
                            this.state.jointOwner.isYourPhysicalAddresSame == "No" &&
                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.address}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine1_Phy_joint")}
                                    propInputStyle={this.state.jointOwner.addrLine1_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine1}
                                    maxLength={gblStrings.maxLength.emplAddress1}
                                    value={this.state.jointOwner.addrLine1_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "addrLine1_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.addrLine2_Phy)}
                                    errorFlag={!this.state.jointOwner.addrLine1_PhyValidation}
                                    errorText={this.state.errMsg}
                                />
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine2_Phy_joint")}
                                    propInputStyle={this.state.jointOwner.addrLine2_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.addressLine2}
                                    value={this.state.jointOwner.addrLine2_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "addrLine2_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.zipcode_Phy_joint)}
                                    errorFlag={!this.state.jointOwner.addrLine2_PhyValidation}
                                    errorText={this.state.errMsg}


                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.zipcode}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("zipcode_Phy_joint")}
                                    propInputStyle={this.state.jointOwner.zipcode_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterZip}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    returnKeyType={"done"}
                                    onChangeText={this.onChangeText("jointOwner", "zipcode_Phy")}
                                    keyboardType="number-pad"
                                    onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode_Phy", this.city_Phy_joint)}
                                    errorFlag={!this.state.jointOwner.zipcode_PhyValidation}
                                    errorText={this.state.errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("city_Phy_joint")}
                                    propInputStyle={this.state.jointOwner.city_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    maxLength={gblStrings.maxLength.city}
                                    value={this.state.jointOwner.city_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "city_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.stateCity_Phy_joint)}
                                    errorFlag={!this.state.jointOwner.city_PhyValidation}
                                    errorText={this.state.errMsg}
                                    editable = {this.state.jointOwner.citizenship != "U.S"? true:false}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("stateCity_Phy_joint")}
                                    propInputStyle={this.state.jointOwner.stateCity_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType={"done"}
                                    maxLength={gblStrings.maxLength.state}
                                    value={this.state.jointOwner.stateCity_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "stateCity_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo_joint)}
                                    errorFlag={!this.state.jointOwner.stateCity_PhyValidation}
                                    errorText={this.state.errMsg}
                                    editable = {this.state.jointOwner.citizenship != "U.S"? true:false}

                                />

                            </View>
                        }
                 
                      


                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "phoneType",
                            dropDownName: "phoneTypeDropDown",
                            lblDropdownName: gblStrings.accManagement.phoneType,
                            isOptional: false
                        })
                        }


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.phoneNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("mobileNo_joint")}
                            propInputStyle={this.state.jointOwner.mobileNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.mobileNo}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("jointOwner", "mobileNo")}
                            value = {this.state.jointOwner.mobileNo.replace(/\d(?=\d{4})/g, "*")}
                            onSubmitEditing={this.onSubmitEditing(this.telePhoneNo2_joint)}
                            errorFlag={!this.state.jointOwner.mobileNoValidation}
                            errorText={this.state.errMsg}

                        />


                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "contactDuringMobNo",
                            dropDownName: "contactDuringMobNoDropDown",
                            lblDropdownName: gblStrings.accManagement.contactMeDuring,
                            isOptional: true
                        })
                        }


                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "phoneType2",
                            dropDownName: "phoneType2DropDown",
                            lblDropdownName: gblStrings.accManagement.phoneType,
                            isOptional: true
                        })
                        }

                        <Text style={styles.lblTxt}>
                            <Text>
                                {gblStrings.accManagement.telePhoneNo2}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo2_joint")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.telePhoneNo2}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("jointOwner", "telePhoneNo2")}
                            onSubmitEditing={this.onSubmitEditing(this.telePhoneNo3_joint)}

                        />

                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "contactDuringTelePhone2",
                            dropDownName: "contactDuringTelePhone2DropDown",
                            lblDropdownName: gblStrings.accManagement.contactMeDuring,
                            isOptional: true
                        })
                        }


                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "phoneType3",
                            dropDownName: "phoneType3DropDown",
                            lblDropdownName: gblStrings.accManagement.phoneType,
                            isOptional: true
                        })
                        }
                        <Text style={styles.lblTxt}>
                            <Text>
                                {gblStrings.accManagement.telePhoneNo3}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo3")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.telePhoneNo3}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("jointOwner", "telePhoneNo3")}
                            onSubmitEditing={this.onSubmitEditing(this.emailAddress_joint)}

                        />
                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "contactDuringTelePhone3",
                            dropDownName: "contactDuringTelePhone3DropDown",
                            lblDropdownName: gblStrings.accManagement.contactMeDuring,
                            isOptional: true
                        })
                        }
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
                            errorFlag={!this.state.jointOwner.emailAddressValidation}
                            errorText={this.state.errMsg}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo_joint")}
                            propInputStyle={this.state.jointOwner.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            keyboardType="number-pad"
                            returnKeyType={"done"}
                            maxLength={gblStrings.maxLength.ssnNo}
                            onChangeText={this.onChangeText("jointOwner", "socialSecurityNo")}
                            errorFlag={!this.state.jointOwner.socialSecurityNoValidation}
                            errorText={this.state.errMsg}
                            secureTextEntry

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

                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "empStatus",
                            dropDownName: "empStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.empStatus,
                            isOptional: false
                        })
                        }
                       
                         {this.state.jointOwner.empStatus === "Others" &&
                            <GInputComponent
                                inputref={this.setInputRef("empStatusForOther_joint")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={"Enter Employment status"}
                                maxLength={gblStrings.maxLength.common}
                                onChangeText={this.onChangeText("jointOwner", "empStatusForOther")}
                                onSubmitEditing={this.onSubmitEditing(this.empIndustry)}
                                errorFlag={!this.state.jointOwner.empStatusForOtherValidation}
                                errorText={this.state.errMsg}
                            />
                        }



                        {
                            // Render employment fields if user have employment history
                            (this.state.jointOwner.empStatus !== "" && this.state.jointOwner.empStatus !== "Unemployed" && this.state.jointOwner.empStatus !== "Homemaker" && this.state.jointOwner.empStatus !== "Student" && this.state.jointOwner.empStatus !== "Retired") &&

                            <View style={styles.childSectionGrp}>

                                {this.renderCustomDropDown({
                                    section: "jointOwner",
                                    stateKey: "empIndustry",
                                    dropDownName: "empIndustryDropDown",
                                    lblDropdownName: gblStrings.accManagement.industry,
                                    isOptional: false
                                })
                                }
                                {this.state.jointOwner.empIndustry === "Other Industry" &&
                                    <GInputComponent
                                        inputref={this.setInputRef("empIndustryForOther_joint")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={"Enter Industry"}
                                        maxLength={gblStrings.maxLength.common}
                                        onChangeText={this.onChangeText("jointOwner", "empIndustryForOther")}
                                        onSubmitEditing={this.onSubmitEditing(this.empOccupation)}
                                    errorFlag={!this.state.jointOwner.empIndustryForOtherValidation}
                                    errorText={this.state.errMsg}
                                    />
                                }
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.occupation}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empOccupation_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.occupation}
                                    onChangeText={this.onChangeText("jointOwner", "empOccupation")}
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
                                    value={this.state.jointOwner.empAddrLine1}
                                    onChangeText={this.onChangeText("jointOwner", "empAddrLine1")}
                                    onSubmitEditing={this.onSubmitEditing(this.empAddrLine2_joint)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empAddrLine2_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.address}
                                    value={this.state.jointOwner.empAddrLine2}
                                    onChangeText={this.onChangeText("jointOwner", "empAddrLine2")}
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
                                    onSubmitEditing={this.onSubmitEmpZipEditing("jointOwner", "empZipcode", this.empCity_joint)}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empCity_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    maxLength={gblStrings.maxLength.city}
                                    value={this.state.jointOwner.empCity}
                                    onChangeText={this.onChangeText("jointOwner", "empCity")}
                                    onSubmitEditing={this.onSubmitEditing(this.empStateCity_joint)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empStateCity_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType={"done"}
                                    maxLength={gblStrings.maxLength.city}
                                    value={this.state.jointOwner.empStateCity}
                                    onChangeText={this.onChangeText("jointOwner", "empStateCity")}
                                    onSubmitEditing={this.onSubmitEditing(this.empWorkPhoneNo_joint)}


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

                                />


                            </View>
                        }
                        {
                            // Render employment fields if user not have employment history
                            (this.state.jointOwner.empStatus == "Unemployed" || this.state.jointOwner.empStatus == "Homemaker" || this.state.jointOwner.empStatus == "Student" || this.state.jointOwner.empStatus == "Retired") &&

                            <View style={styles.childSectionGrp}>
                                {this.renderCustomDropDown({
                                    section: "jointOwner",
                                    stateKey: "primarySourceIncome",
                                    dropDownName: "primarySourceIncomeDropDown",
                                    lblDropdownName: gblStrings.accManagement.primarySourceIncome,
                                    isOptional: false
                                })
                                }
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
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isMilitaryInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}

                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {"[ - ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />

                {
                    this.state.jointOwner.isMilitaryInfoExpanded &&
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
                                selected={(this.state.jointOwner.isMilitaryHistory !== null && this.state.jointOwner.isMilitaryHistory == "Yes") ? true : false}
                                onPress={this.onPressRadio("jointOwner", "isMilitaryHistory", "Yes")}

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
                                selected={(this.state.jointOwner.isMilitaryHistory !== null && this.state.jointOwner.isMilitaryHistory == "No") ? true : false}
                                onPress={this.onPressRadio("jointOwner", "isMilitaryHistory", "No")}
                            />
                        </View>
                        {!this.state.jointOwner.isMilitaryHistoryValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }


                        {
                            this.state.jointOwner.isMilitaryHistory == "Yes" &&


                            <View >

                                {this.renderCustomDropDown({
                                    section: "jointOwner",
                                    stateKey: "militaryStatus",
                                    dropDownName: "militaryStatusDropDown",
                                    lblDropdownName: gblStrings.accManagement.militaryStatus,
                                    isOptional: false
                                })
                                }

                                {this.renderCustomDropDown({
                                    section: "jointOwner",
                                    stateKey: "branchOfService",
                                    dropDownName: "branchOfServiceDropDown",
                                    lblDropdownName: gblStrings.accManagement.branchOfService,
                                    isOptional: false
                                })
                                }


                                {this.renderCustomDropDown({
                                    section: "jointOwner",
                                    stateKey: "rank",
                                    dropDownName: "rankDropDown",
                                    lblDropdownName: gblStrings.accManagement.rank,
                                    isOptional: false
                                })
                                }


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.datesOfService}
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={[styles.optionalTxt, { width: '20%' }]}>
                                        {gblStrings.accManagement.from}
                                    </Text>
                                    <View style={{ width: '80%', marginLeft: '0%' }}>
                                        <GDateComponent
                                            date={this.state.jointOwner.fromDateMilitary}
                                            placeholder="Select Date"
                                            maxDate={currentdate}
                                            onDateChange={this.onChangeDate("jointOwner", "fromDateMilitary")}

                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={[styles.optionalTxt, { width: '20%' }]}>
                                        {gblStrings.accManagement.to}
                                    </Text>
                                    <View style={{ width: '80%', marginLeft: '0%' }}>
                                        <GDateComponent
                                            date={this.state.jointOwner.toDateMilitary}
                                            placeholder="Select Date"
                                            minDate={this.state.jointOwner.fromDateMilitary}
                                            maxDate={currentdate}
                                            onDateChange={this.onChangeDate("jointOwner", "toDateMilitary")}

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

    renderFinancialInfo_JointOwner = () => {
        return (


            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.financialInformationJoint}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isFinancialInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole={'button'}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {"[ - ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    this.state.jointOwner.isFinancialInfoExpanded &&
                    <View style={styles.childSectionGrp}>

                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "annualIncome",
                            dropDownName: "annualIncomeDropDown",
                            lblDropdownName: gblStrings.accManagement.annualIncome,
                            isOptional: false
                        })
                        }

                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "taxBracket",
                            dropDownName: "taxBracketDropDown",
                            lblDropdownName: gblStrings.accManagement.taxBracket,
                            isOptional: false
                        })
                        }


                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "networth",
                            dropDownName: "networthDropDown",
                            lblDropdownName: gblStrings.accManagement.networth,
                            isOptional: false
                        })
                        }

                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "taxFilingStatus",
                            dropDownName: "taxFilingStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.taxFilingStatus,
                            isOptional: false
                        })
                        }


                    </View>
                }
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
                            selected={(this.state.jointOwner.isSeniorPoliticalFigure !== null && this.state.jointOwner.isSeniorPoliticalFigure == "No") ? true : false}
                            onPress={this.onPressRadio("jointOwner", "isSeniorPoliticalFigure", "No")}

                        />
                    </View>
                    {!this.state.jointOwner.isSeniorPoliticalFigureValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }
                    {this.state.jointOwner.isSeniorPoliticalFigure == "Yes" &&

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
                                errorFlag={!this.state.jointOwner.seniorPoliticalNameValidation}
                                errorText={this.state.errMsg}
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
                        errorFlag={!this.state.childBeneficiary.vcmNoValidation}
                        errorText={this.state.errMsg}
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
                        errorFlag={!this.state.childBeneficiary.firstNameValidation}
                        errorText={this.state.errMsg}
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
                        errorFlag={!this.state.childBeneficiary.lastNameValidation}
                        errorText={this.state.errMsg}
                    />



                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("socialSecurityNo_childben")}
                        propInputStyle={this.state.childBeneficiary.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.accManagement.ssnNoFormat}
                        keyboardType="number-pad"
                        returnKeyType={"done"}
                        maxLength={gblStrings.maxLength.ssnNo}
                        onChangeText={this.onChangeText("childBeneficiary", "socialSecurityNo")}
                        onSubmitEditing={this.onSubmitEditing(this.dob_childben)}
                        errorFlag={!this.state.childBeneficiary.socialSecurityNoValidation}
                        errorText={this.state.errMsg}

                    />

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.dob}
                    </Text>
                    <GDateComponent
                        inputref={this.setInputRef("dob_childben")}
                        date={this.state.childBeneficiary.dob}
                        placeholder="Select Date"
                        errorFlag={!this.state.childBeneficiary.dobValidation}
                        errorMsg={this.state.errMsg}
                        maxDate={prevDate}
                        onDateChange={this.onChangeDate("childBeneficiary", "dob")}

                    />

                    {this.renderCustomDropDown({
                        section: "childBeneficiary",
                        stateKey: "relationshipToAcc",
                        dropDownName: "relationshipToAccDropDown",
                        lblDropdownName: gblStrings.accManagement.relationshipCustodian,
                        isOptional: false
                    })
                    }

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
                            selected={(this.state.childBeneficiary.isSeniorPoliticalFigure !== null && this.state.childBeneficiary.isSeniorPoliticalFigure) ? true : false}
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
                                onChangeText={this.onChangeText("childBeneficiary", "seniorPoliticalName")}
                                errorFlag={!this.state.childBeneficiary.seniorPoliticalNameValidation}
                                errorText={this.state.errMsg}
        
                            />
                        </View>

                    }

                </View>
            </View>

        );
    }

    renderBeneficiary_Retirement = () => {

        let tempBeneficiaryData = dummyData;
        let tempRelationShipData = dummyData;


        let tempkey = "relationship";


        if (tempkey !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            tempRelationShipData = this.props.masterLookupStateData[tempkey].value;
        }

        tempkey = "ben_type";
        if (tempkey !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            tempBeneficiaryData = this.props.masterLookupStateData[tempkey].value;
        }

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

                    {this.state.retirementBeneficiaryData.map((item, index) => {
                        const key = "benificairy" + index;
                        return (
                            <View
                                key={key}
                            >


                                <Text style={styles.regulatoryNoteTxt}>
                                    {gblStrings.accManagement.beneficiariesNote}
                                </Text>

                                <Text style={styles.regulatoryQuestTxt}>
                                    {gblStrings.accManagement.beneficiariesCond}
                                </Text>



                                <GDropDownComponent
                                    inputref={this.setInputRef("beneficiaryType" + index)}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownTextName={styles.dropDownTextName}
                                    textInputStyle={styles.textInputStyle}
                                    dropDownName={gblStrings.accManagement.beneficiary}
                                    data={tempBeneficiaryData}
                                    changeState={this.onPressDropDownForIRABeneficiary("beneficiaryTypeDropDown", index)}
                                    showDropDown={this.state.retirementBeneficiaryData[index].beneficiaryTypeDropDown}
                                    dropDownValue={this.state.retirementBeneficiaryData[index].beneficiaryType}
                                    selectedDropDownValue={this.onSelectedIRABeneficiaryDropDownValue("beneficiaryTypeDropDown", index)}
                                    itemToDisplay={"value"}
                                    dropDownPostition={{ ...styles.dropDownPostition }}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].beneficiaryTypeValidation}
                                    errorText={gblStrings.accManagement.emptyBeneficiaryType}
                                />




                                <GDropDownComponent
                                    inputref={this.setInputRef("relationshipToAcc" + index)}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownTextName={styles.dropDownTextName}
                                    textInputStyle={styles.textInputStyle}
                                    dropDownName={gblStrings.accManagement.relationshipToAccHolder}
                                    data={tempRelationShipData}
                                    changeState={this.onPressDropDownForIRABeneficiary("relationshipToAccDropDown", index)}
                                    showDropDown={this.state.retirementBeneficiaryData[index].relationshipToAccDropDown}
                                    dropDownValue={this.state.retirementBeneficiaryData[index].relationshipToAcc}
                                    selectedDropDownValue={this.onSelectedIRABeneficiaryDropDownValue("relationshipToAccDropDown", index)}
                                    itemToDisplay={"value"}
                                    dropDownPostition={{ ...styles.dropDownPostition }}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].relationshipToAccValidation}
                                    errorText={gblStrings.accManagement.emptyRelationTypeMsg}
                                />



                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(25), }}>
                                    <View style={{ width: '60%' }}>
                                        <Text style={styles.lblRowTxt}>
                                            {gblStrings.accManagement.distributionPercentage}
                                        </Text>
                                    </View>
                                    <View style={{ width: '30%' }}>

                                        <GInputComponent
                                            inputref={this.setInputRef("beneficiaryDistPercent" + index)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={""}
                                            maxLength={gblStrings.maxLength.distributionPercentage}
                                            onChangeText={this.onChangeTextForIRABeneficiary("beneficiaryDistPercent", index)}
                                            onSubmitEditing={this.onSubmitEditing(this["beneficiaryDistPercent" + index])}
                                            errorFlag={!this.state.retirementBeneficiaryData[index].beneficiaryDistPercentValidation}
                                            errorText={""}

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
                                    inputref={this.setInputRef("socialSecurityNo" + index)}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={""}
                                    keyboardType="number-pad"
                                    maxLength={gblStrings.maxLength.ssnNo}
                                    onChangeText={this.onChangeTextForIRABeneficiary("socialSecurityNo", index)}
                                    onSubmitEditing={this.onSubmitEditing(this["firstName" + index])}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].socialSecurityNoValidation}
                                    errorText={""}

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.firstName}
                                </Text>

                                <GInputComponent
                                    inputref={this.setInputRef("firstName" + index)}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.firstName}
                                    onChangeText={this.onChangeTextForIRABeneficiary("firstName", index)}
                                    onSubmitEditing={this.onSubmitEditing(this["middleInitial" + index])}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].firstNameValidation}
                                    errorText={""}

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
                                    inputref={this.setInputRef("middleInitial" + index)}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.middleInitial}
                                    onChangeText={this.onChangeTextForIRABeneficiary("middleInitial", index)}
                                    onSubmitEditing={this.onSubmitEditing(this["lastName" + index])}


                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.lastName}
                                </Text>


                                <GInputComponent
                                    inputref={this.setInputRef("lastName" + index)}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.lastName}
                                    onChangeText={this.onChangeTextForIRABeneficiary("lastName", index)}
                                    onSubmitEditing={this.onSubmitEditing(this["dob" + index])}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].lastNameValidation}
                                    errorText={""}

                                />



                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.dob}
                                </Text>
                                <GDateComponent
                                    inputref={this.setInputRef("dob" + index)}
                                    date={this.state.retirementBeneficiaryData[index].dob}
                                    placeholder="Select Date"
                                    errorFlag={!this.state.retirementBeneficiaryData[index].dobValidation}
                                    errorMsg={this.state.errMsg}
                                    maxDate={prevDate}
                                    onDateChange={this.onChangeDateForIRABeneficiary("dob", index)}

                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.emailAddress}
                                </Text>


                                <GInputComponent
                                    inputref={this.setInputRef("emailAddress" + index)}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={""}
                                    maxLength={gblStrings.maxLength.emailID}
                                    onChangeText={this.onChangeTextForIRABeneficiary("emailAddress", index)}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].emailAddressValidation}
                                    errorText={""}

                                />


                                <GButtonComponent
                                    onPress={this.onPressRemoveIRABeneficiary(index)}
                                    buttonStyle={styles.removeWhiteBtn}
                                    buttonText={gblStrings.common.remove}
                                    textStyle={styles.removeWhiteBtnTxt}
                                />

                            </View>
                        );
                    }
                    )}
                </View>






                <GButtonComponent
                    onPress={this.onPressAddIRABeneficiary}
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
           
            <KeyboardAvoidingView 
            style={styles.container} 
             //keyboardVerticalOffset = { Header.HEIGHT + 20 }  
            //behavior="padding"
             behavior= {(Platform.OS === 'ios')? "padding" : null}
             keyboardVerticalOffset={Platform.select({ios:20, android: 500})}
             >
                {
                    (this.props.accOpeningData.isLoading || this.props.masterLookupStateData.isLoading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}
                scrollEnabled={this.state.enableScrollViewScroll}
                >
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
                        <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
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
                                this.state.userAvatar != "" && <Image source={this.state.userAvatar} style={styles.userAvatar} />
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
            </KeyboardAvoidingView >

        );
    }
}

OpenAccPageTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    getPersonalCompositeData: PropTypes.instanceOf(Object),
    addressFormatData: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    initialState:PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    saveData: PropTypes.func,
    uploadAavatarImg: PropTypes.func,
    getStateCity: PropTypes.func,
    saveAccountOpening: PropTypes.func,
    getRankData: PropTypes.func,
    getAddressFormat: PropTypes.func
};
export default OpenAccPageTwoComponent;

