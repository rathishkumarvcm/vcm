import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from "prop-types";
import ImagePicker from 'react-native-image-picker';
import { styles } from './styles';
import { GButtonComponent, GInputComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner, GDateComponent, GDropDownComponent, GSingletonClass } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';
// import { Header } from 'react-navigation';

const imagePickerOptions = {
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
const date = new Date().getDate(); // Current Date
const month = new Date().getMonth() + 1; // Current Month
const year = new Date().getFullYear(); // Current Year
const currentdate = `${month}-${date}-${year}`;

const tempDate = new Date();
tempDate.setDate(tempDate.getDate() - 1);
const prevDate = `${tempDate.getMonth() + 1}-${tempDate.getDate()}-${tempDate.getFullYear()}`;

const dummyData = [
    { "key": "key1", "value": "Option1" },
    { "key": "key2", "value": "Option2" }
];


const myInstance = GSingletonClass.getInstance();
class OpenAccPageTwoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        const openAccPageTwo = myInstance.getAccOpeningEditMode() ? (myInstance.getScreenStateData().openAccPageTwo || {}) : {};
        this.state = {
            enableScrollViewScroll: true,
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
                phoneType2: "",
                phoneType2DropDown: false,
                phoneType3: "",
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
                isSeniorPoliticalFigureValidation: true,
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


                // Military Info

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

                isMilitaryHistoryValidation: true,
                militaryStatusValidation: true,


                // ExpandCollapse
                isPersonalInfoExpanded: false,
                isEmploymentInfoExpanded: false,
                isFinancialInfoExpanded: false,
                isMilitaryInfoExpanded: false,
                isRegulatoryInfoExpanded: false,

            },

            jointOwner: {
                relationshipToAcc: "",
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
                phoneType2: "",
                phoneType2DropDown: false,
                phoneType3: "",
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
                isSeniorPoliticalFigureValidation: true,
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


                // Military Info

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
                isMilitaryHistoryValidation: true,

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
                isSeniorPoliticalFigureValidation: true,


                isPersonalInfoExpanded: false,
                isEmploymentInfoExpanded: false,
                isFinancialInfoExpanded: false,
                isMilitaryInfoExpanded: false,
                isRegulatoryInfoExpanded: false,

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


                isPersonalInfoExpanded: false,
                isEmploymentInfoExpanded: false,
                isFinancialInfoExpanded: false,
                isMilitaryInfoExpanded: false,
                isRegulatoryInfoExpanded: false,


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

            estate: {
                name: "",
                creationDate: "",
                isFederalLawApplicable: false,
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
                orgCountry: "",
                mobileNo: "",
                emailAddress: "",
                socialSecurityNo: "",

                nameValidation: true,
                creationDateValidation: true,
                isFederalLawApplicableValidation: true,
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
                orgCountryValidation: true,
                mobileNoValidation: true,
                emailAddressValidation: true,
                socialSecurityNoValidation: true,

                // ExpandCollapse
                isTrustInfoExpanded: false,
                isTrusteeInfoExpanded: false,

                trusteeData: [
                    {
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
                        city: "Florida",
                        stateCity: "CA",
                        stateCityDropDown: false,
                        addrLine1_Phy: "",
                        addrLine2_Phy: "",
                        zipcode_Phy: "",
                        city_Phy: "",
                        stateCity_Phy: "",
                        stateCity_PhyDropDown: false,
                        isYourPhysicalAddresSame: false,
                        mobileNo: "",
                        memberPhoneNo: "",
                        busniessPhoneNo: "",
                        residencePhoneNo:"",
                        emailAddress: "",
                        memberNumber: "",
                        socialSecurityNo:"",

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
                        emailAddressValidation: true,
                        socialSecurityNoValidation: true,
                        memberPhoneNoValidation: true,
                        busniessPhoneNoValidation: true,
                        residencePhoneNoValidation: true,
                        memberNumberValidation: true,
                    }
                    
                ]

            },
            currentZipCodeRef: {
                stateKey: "",
                keyName: "",
                objIndex:""
            },
            // others
           //  ...openAccPageTwo


        };
        AppUtils.Dlog("Constructor 2::" + JSON.stringify(this.state))

    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

        AppUtils.Dlog(`componentDidMount::::> ${this.props}`);

        const payload = [
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

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }

        this.props.getPersonalCompositeData(payload);


    }

    componentDidUpdate(prevProps, prevState) {
        AppUtils.Dlog(`componentDidUpdate::::> ${prevState}`);
        if (this.props !== prevProps) {
            const responseKey = ActionTypes.PERSONAL_INFO_SAVE_OPENING_ACCT;
            if (this.props.accOpeningData[responseKey]) {
                if (this.props.accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = this.props.accOpeningData[responseKey];
                    if (tempResponse.statusCode === 200 || tempResponse.statusCode === '200') {
                        const msg = tempResponse.message;
                        AppUtils.Dlog(`Account Type Saved ::: :: ${msg}`);
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

                        if (this.state.currentZipCodeRef.keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    empCity: tempResponse.City,
                                    empStateCity: tempResponse.State

                                }
                            }));
                        }else if (this.state.currentZipCodeRef.keyName === "zipcode_Phy" && this.state.currentZipCodeRef.objIndex) {
                            const newItems = [...this.state.estate.trusteeData];
                            newItems[objIndex].city_Phy = tempResponse.City,
                            newItems[objIndex].stateCity_Phy = tempResponse.State,
                          
                          
                            this.setState(() => (prevState => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (this.state.currentZipCodeRef.keyName === "zipcode" && this.state.currentZipCodeRef.objIndex) {
                            const newItems = [...this.state.estate.trusteeData];
                            newItems[objIndex].city = tempResponse.City,
                            newItems[objIndex].stateCity = tempResponse.State,
                         
                                              
                            this.setState(() => (prevState => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (this.state.currentZipCodeRef.keyName === "zipcode_Phy") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    city_Phy: tempResponse.City,
                                    stateCity_Phy: tempResponse.State

                                }
                            }));
                        } else {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
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
                        
                        if (this.state.currentZipCodeRef.keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    empCity: tempResponse.City,
                                    empStateCity: tempResponse.State,
                                    empAddrLine1: tempResponse.Address1 || "",
                                    empAddrLine2: tempResponse.Address2 || ""

                                }
                            }));
                        } else if (this.state.currentZipCodeRef.keyName === "zipcode_Phy" && this.state.currentZipCodeRef.objIndex) {
                            const newItems = [...this.state.estate.trusteeData];
                            newItems[objIndex].city_Phy = tempResponse.City,
                            newItems[objIndex].stateCity_Phy = tempResponse.State,
                            newItems[objIndex].addrLine1_Phy = tempResponse.Address1 || "",
                            newItems[objIndex].addrLine2_Phy = tempResponse.Address2 || "",
                            newItems[objIndex].addrLine1_PhyValidation = true,
                            newItems[objIndex].addrLine2_PhyValidation = true
                          
                            this.setState(() => (prevState => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (this.state.currentZipCodeRef.keyName === "zipcode" && this.state.currentZipCodeRef.objIndex) {
                            const newItems = [...this.state.estate.trusteeData];
                            newItems[objIndex].city = tempResponse.City,
                            newItems[objIndex].stateCity = tempResponse.State,
                            newItems[objIndex].addrLine1= tempResponse.Address1 || "",
                            newItems[objIndex].addrLine2 = tempResponse.Address2 || "",
                            newItems[objIndex].addrLine1Validation = true,
                            newItems[objIndex].addrLine2Validation = true
                                              
                            this.setState(() => (prevState => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (this.state.currentZipCodeRef.keyName === "zipcode_Phy") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    city_Phy: tempResponse.City,
                                    stateCity_Phy: tempResponse.State,
                                    addrLine1_Phy: tempResponse.Address1 || "",
                                    addrLine2_Phy: tempResponse.Address2 || "",
                                    addrLine1_PhyValidation: true,
                                    addrLine2_PhyValidation: true
                                }
                            }));
                        } else {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    city: tempResponse.City,
                                    stateCity: tempResponse.State,
                                    addrLine1: tempResponse.Address1 || "",
                                    addrLine2: tempResponse.Address2 || "",
                                    addrLine1Validation: true,
                                    addrLine2Validation: true
                                }
                            }));
                        }

                    } else if (tempResponse && tempResponse.ErrorNumber) {
                        if (this.state.currentZipCodeRef.keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    empAddrLine1: "",
                                    empAddrLine2: ""

                                }
                            }));
                        } else if (this.state.currentZipCodeRef.keyName === "zipcode_Phy" && this.state.currentZipCodeRef.objIndex) {
                            const newItems = [...this.state.estate.trusteeData];
                            newItems[objIndex].city_Phy = tempResponse.City,
                            newItems[objIndex].stateCity_Phy = tempResponse.State,
                            newItems[objIndex].addrLine1_Phy=  "",
                            newItems[objIndex].addrLine2_Phy = "",
                            newItems[objIndex].addrLine1_PhyValidation = false,
                            newItems[objIndex].addrLine2_PhyValidation = false
                                              
                            this.setState(() => (prevState => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (this.state.currentZipCodeRef.keyName === "zipcode" && this.state.currentZipCodeRef.objIndex) {
                            const newItems = [...this.state.estate.trusteeData];
                            newItems[objIndex].city = tempResponse.City,
                            newItems[objIndex].stateCity = tempResponse.State,
                            newItems[objIndex].addrLine1=  "",
                            newItems[objIndex].addrLine2 = "",
                            newItems[objIndex].addrLine1Validation = false,
                            newItems[objIndex].addrLine2Validation = false
                                              
                            this.setState(() => (prevState => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (this.state.currentZipCodeRef.keyName === "zipcode_Phy") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    addrLine1_Phy: "",
                                    addrLine2_Phy: "",
                                    addrLine1_PhyValidation: false,
                                    addrLine2_PhyValidation: false
                                },
                                errMsg: "Invalid address"
                            }));
                        } else {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],

                                    addrLine1: "",
                                    addrLine2: "",
                                    addrLine1Validation: false,
                                    addrLine2Validation: false
                                },
                                errMsg: "Invalid address"
                            }));
                        }
                    }
                }
            }

            const uploadImgKey = ActionTypes.UPLOAD_AVATAR;
            if (this.props.accOpeningData[uploadImgKey]) {
                if (this.props.accOpeningData[uploadImgKey] !== prevProps.accOpeningData[uploadImgKey]) {
                    const tempResponse = this.props.accOpeningData[uploadImgKey];
                    // alert ("Image stautus \n::"+JSON.stringify(tempResponse));
                    if (tempResponse && tempResponse.b) {
                        if (tempResponse.b.Location) {
                            alert(`Image Uploaded Successfully \n::${tempResponse.b.Location}`);
                        }
                    }
                }
            }

        }


    }


    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    /* ------- Page Navigation methods --------*/

    onClickHeader = () => {
        AppUtils.Dlog("#TODO : onClickHeader");
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    onClickCancel = () => {
        myInstance.setAccOpeningEditMode(false);
        this.props.navigation.goBack('termsAndConditions');
    }

    onClickDownloadPDF = () => {
        alert("#TODO : Download");
    }

    onSelected = (item) => {
        AppUtils.Dlog(`item: ${item.id}`);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }

    onClickNext = () => {


        if (this.validateFields()) {
            const payload = this.getPayload();
            //this.props.saveData("OpenAccPageTwo", payload);
            const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAccData(payload);
            const screenState = {
                ...stateData,
                "openAccPageTwo": { ...this.state }
            }
            myInstance.setScreenStateData(screenState);

            this.props.navigation.navigate({ routeName: 'openAccPageThree', key: 'openAccPageThree' });
        }
    }

    getPayload = () => {
        const accType = `${this.props.navigation.getParam('accType', '')}`;

        const individualAccPayload = {
            "personalInfo": {
                "prefix": this.state.personal.prefix || "",
                "firstName": this.state.personal.firstName || "",
                "lastName": this.state.personal.lastName || "",
                "suffix": this.state.personal.suffix || "",
                "dateOfBirth": this.state.personal.dob || "",
                "gender": this.state.personal.gender || "",
                "maritalStatus": this.state.personal.maritalStatus || "",
                "citizenship": this.state.personal.citizenship || "",
                "ssnTin": this.state.personal.socialSecurityNo || "",
                "mailingAddress": {
                    "addressType": this.state.personal.mailingAddressType || "",
                    "streetNbr": this.state.personal.addrLine1 || "",
                    "streetName": this.state.personal.addrLine2 || "",
                    "zip": this.state.personal.zipcode || "",
                    "city": this.state.personal.city || "",
                    "state": this.state.personal.stateCity || ""
                },
                "isPhysAddrSameAsMailAddr": this.state.personal.isYourPhysicalAddresSame || "",
                "physicalAddress": {
                    "addressType": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.mailingAddressType || "" : this.state.personal.mailingAddressType,
                    "streetNbr": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.addrLine1 || "" : this.state.personal.addrLine1_Phy,
                    "streetName": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.addrLine2 || "" : this.state.personal.addrLine2_Phy,
                    "zip": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.zipcode || "" : this.state.personal.zipcode_Phy,
                    "city": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.city || "" : this.state.personal.city_Phy,
                    "state": this.state.personal.isYourPhysicalAddresSame ? this.state.personal.stateCity || "" : this.state.personal.stateCity_Phy,
                },
                "contactDetails": {
                    "phoneNumber1": {
                        "phoneNumber": this.state.personal.mobileNo || "",
                        "phoneType":this.state.personal.phoneType || "",
                        "contactDuring": this.state.personal.contactDuringMobNo || "Anytime"
                    },
                    "phoneNumber2": {
                        "phoneNumber": this.state.personal.telePhoneNo2 || "",
                        "phoneType":this.state.personal.phoneType2 || "",
                        "contactDuring": this.state.personal.contactDuringTelePhone2 || ""
                    },
                    "phoneNumber3": {
                        "phoneNumber": this.state.personal.telePhoneNo3 || "",
                        "phoneType":this.state.personal.phoneType3 || "",
                        "contactDuring": this.state.personal.contactDuringTelePhone3 || ""
                    },
                    "emailAddress": this.state.personal.emailAddress || ""
                }
            },
            "employementInfo": {
                "employmentStatus": this.state.personal.empStatus || "",
                "industry": this.state.personal.empIndustry || "",
                "occupation": this.state.personal.empOccupation || "",
                "employerName": this.state.personal.empName || "",
                "employerAddress": {
                    "addressLine1": this.state.personal.empAddrLine1 || "",
                    "addressLine2": this.state.personal.empAddrLine2 || "",
                    "city": this.state.personal.empCity || "",
                    "state": this.state.personal.empStateCity || "",
                    "zip": this.state.personal.empZipcode || "",
                }
            },
            "financialInfo": {
                "annualIncome": this.state.personal.annualIncome || "",
                "taxBracket": this.state.personal.taxBracket || "",
                "netWorth": this.state.personal.networth || "",
                "taxFilingStatus": this.state.personal.taxFilingStatus || "",
            },
            "militaryInfo": {
                "servingStatus": this.state.personal.isMilitaryHistory || "",
                "militaryStatus": this.state.personal.militaryStatus || "",
                "branchOfService": this.state.personal.branchOfService || "",
                "rank": this.state.personal.rank || "",
                "serviceStartDate": this.state.personal.fromDateMilitary || "",
                "serviceToDate": this.state.personal.toDateMilitary || "",
                "commissionSource": this.state.personal.commissionSource || "",
            },
            "regulatoryDetails": {
                "isPep": this.state.personal.isSeniorPoliticalFigure || "",
                "pepName": this.state.personal.seniorPoliticalName || "",
            }
        };

        const jointAccPayload = {
            "jointOwner": {
                "relation": "",
                "personalInfo": {
                    "prefix": this.state.jointOwner.prefix || "",
                    "firstName": this.state.jointOwner.firstName || "",
                    "lastName": this.state.jointOwner.lastName || "",
                    "suffix": this.state.jointOwner.suffix || "",
                    "dateOfBirth": this.state.jointOwner.dob || "",
                    "gender": this.state.jointOwner.gender || "",
                    "maritalStatus": this.state.jointOwner.maritalStatus || "",
                    "citizenship": this.state.jointOwner.citizenship || "",
                    "ssnTin": this.state.jointOwner.socialSecurityNo || "",
                    "mailingAddress": {
                        "addressType": this.state.jointOwner.mailingAddressType || "",
                        "streetNbr": this.state.jointOwner.addrLine1 || "",
                        "streetName": this.state.jointOwner.addrLine2 || "",
                        "zip": this.state.jointOwner.zipcode || "",
                        "city": this.state.jointOwner.city || "",
                        "state": this.state.jointOwner.stateCity || ""
                    },
                    "isPhysAddrSameAsMailAddr": this.state.jointOwner.isYourPhysicalAddresSame || "",
                    "physicalAddress": {
                        "addressType": this.state.jointOwner.isYourPhysicalAddresSame ? this.state.jointOwner.mailingAddressType || "" : this.state.jointOwner.mailingAddressType,
                        "streetNbr": this.state.jointOwner.isYourPhysicalAddresSame ? this.state.jointOwner.addrLine1 || "" : this.state.jointOwner.addrLine1_Phy,
                        "streetName": this.state.jointOwner.isYourPhysicalAddresSame ? this.state.jointOwner.addrLine2 || "" : this.state.jointOwner.addrLine2_Phy,
                        "zip": this.state.jointOwner.isYourPhysicalAddresSame ? this.state.jointOwner.zipcode || "" : this.state.jointOwner.zipcode_Phy,
                        "city": this.state.jointOwner.isYourPhysicalAddresSame ? this.state.jointOwner.city || "" : this.state.jointOwner.city_Phy,
                        "state": this.state.jointOwner.isYourPhysicalAddresSame ? this.state.jointOwner.stateCity || "" : this.state.jointOwner.stateCity_Phy,
                    },
                    "contactDetails": {
                        "phoneNumber1": {
                            "phoneNumber": this.state.jointOwner.mobileNo || "",
                            "phoneType": "Home",
                            "contactDuring": this.state.jointOwner.contactDuringMobNo || ""
                        },
                        "phoneNumber2": {
                            "phoneNumber": this.state.jointOwner.telePhoneNo2 || "",
                            "phoneType": "Home",
                            "contactDuring": this.state.jointOwner.contactDuringTelePhone2 || ""
                        },
                        "phoneNumber3": {
                            "phoneNumber": this.state.jointOwner.telePhoneNo3 || "",
                            "phoneType": "Home",
                            "contactDuring": this.state.jointOwner.contactDuringTelePhone3 || ""
                        },
                        "emailAddress": this.state.jointOwner.emailAddress || ""
                    }
                },
                "employementInfo": {
                    "employmentStatus": this.state.jointOwner.empStatus || "",
                    "industry": this.state.jointOwner.empIndustry || "",
                    "occupation": this.state.jointOwner.empOccupation || "",
                    "employerName": this.state.jointOwner.empName || "",
                    "employerAddress": {
                        "addressLine1": this.state.jointOwner.empAddrLine1 || "",
                        "addressLine2": this.state.jointOwner.empAddrLine2 || "",
                        "city": this.state.jointOwner.empCity || "",
                        "state": this.state.jointOwner.empStateCity || "",
                        "zip": this.state.jointOwner.empZipcode || "",
                    }
                },
                "financialInfo": {
                    "annualIncome": this.state.jointOwner.annualIncome || "",
                    "taxBracket": this.state.jointOwner.taxBracket || "",
                    "netWorth": this.state.jointOwner.networth || "",
                    "taxFilingStatus": this.state.jointOwner.taxFilingStatus || "",
                },
                "militaryInfo": {
                    "servingStatus": this.state.jointOwner.isMilitaryHistory || "",
                    "militaryStatus": this.state.jointOwner.militaryStatus || "",
                    "branchOfService": this.state.jointOwner.branchOfService || "",
                    "rank": this.state.jointOwner.rank || "",
                    "serviceStartDate": this.state.jointOwner.fromDateMilitary || "",
                    "serviceToDate": this.state.jointOwner.toDateMilitary || "",
                    "commissionSource": this.state.jointOwner.commissionSource || "",
                },
                "regulatoryDetails": {
                    "isPep": this.state.jointOwner.isSeniorPoliticalFigure || "",
                    "pepName": this.state.jointOwner.seniorPoliticalName || "",
                }
            }
        };

        /* const retirementAccPayload = {
             "beneficiaryInfo": {
                 "primaryBeneficiary": {
                     "totalBeneficiary": "1",
                     "beneficiary1Details": {
                         "type": this.state.retirement.beneficiaryType || "",
                         "relation": this.state.retirement.relationshipToAcc || "",
                         "distributionPercentage": this.state.retirement.beneficiaryDistPercent || "",
                         "firstName": this.state.retirement.firstName || "",
                         "middleInitial": this.state.retirement.middleInitial || "",
                         "lastName": this.state.retirement.lastName || "",
                         "ssnTin": this.state.retirement.socialSecurityNo || "",
                         "dateOfBirth": this.state.retirement.dob || "",
                         "emailAddress": this.state.retirement.emailAddress || ""
                     }
                     // "beneficiary2Details,beneficiary3Details": ""
                 },
                 "secondBeneficiary": { //  #TODO
                     "beneficiary1Details": {
                         "type": this.state.retirement.beneficiaryType || "",
                         "relation": this.state.retirement.relationshipToAcc || "",
                         "distributionPercentage": this.state.retirement.beneficiaryDistPercent || "",
                         "firstName": this.state.retirement.firstName || "",
                         "middleInitial": this.state.retirement.middleInitial || "",
                         "lastName": this.state.retirement.lastName || "",
                         "ssnTin": this.state.retirement.socialSecurityNo || "",
                         "dateOfBirth": this.state.retirement.dob || "",
                         "emailAddress": this.state.retirement.emailAddress || ""
                     }
                 }
             }
         };
         */

   

        let tempBeneficiaryDetails = [];
        for (let i = 0; i < this.state.retirementBeneficiaryData.length; i += 1) {
            const tempObj = {
                "type": this.state.retirementBeneficiaryData[i].beneficiaryType || "",
                "relation": this.state.retirementBeneficiaryData[i].relationshipToAcc || "",
                "distributionPercentage": this.state.retirementBeneficiaryData[i].beneficiaryDistPercent || "",
                "firstName": this.state.retirementBeneficiaryData[i].firstName || "",
                "middleInitial": this.state.retirementBeneficiaryData[i].middleInitial || "",
                "lastName": this.state.retirementBeneficiaryData[i].lastName || "",
                "ssnTin": this.state.retirementBeneficiaryData[i].socialSecurityNo || "",
                "dateOfBirth": this.state.retirementBeneficiaryData[i].dob || "",
                "emailAddress": this.state.retirementBeneficiaryData[i].emailAddress || "",
                "isPrimaryBeneficiary": "true"
            }
            tempBeneficiaryDetails.push(tempObj);
        }
        const retirementAccPayload = {
            "beneficiaryInfo": {
                "totalBeneficiary": "1",
                "beneficiaryDetails": tempBeneficiaryDetails
            }
        };




        let payload = {};
        const savedAccData = myInstance.getSavedAccData();
        payload = {
            ...savedAccData,
            "accountNickName": this.state.nickname || ""
        };

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
                payload = {
                    ...payload,
                    ...individualAccPayload

                };
                break;
            default:
                break;
        };
        AppUtils.Dlog(`payload:: ${JSON.stringify(payload)}`);


        return payload;
    }
    replaceUndefinedOrNull= (key, value) => {
        if (value === null || value === undefined || value ==='') {
          return undefined;
        }

        return value;
      }
    getCleanedPayload = (payload) =>{
        const cleanedObject = JSON.stringify(payload, this.replaceUndefinedOrNull, 4);
        return JSON.parse(cleanedObject);
    }

    onClickSave = () => {

        AppUtils.Dlog("onClickSave::::> ");
        if (this.validateFields()) {
            const payload = this.getPayload();
            this.props.saveAccountOpening("OpenAccPageTwo", payload);
        }
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined" || str.replace(/^\s+|\s+$/gm, '') === "") {
            return true;
        }
        return false;

    }

    uploadImage = () => {
        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            // AppUtils.Dlog('Response = ', response);

            if (response.didCancel) {
                AppUtils.Dlog('User cancelled image picker');
            } else if (response.error) {
                AppUtils.Dlog('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                AppUtils.Dlog('User tapped custom button: ', response.customButton);
            } else {
                AppUtils.Dlog('IMAGE PICKER SUCCESS::> ');

                const source = { uri: response.uri };
                const base64source = { uri: `data:image/jpeg;base64,${response.data}` };
                AppUtils.Dlog("base64source", base64source.length);
                this.setState({
                    userAvatar: source
                });
                if (response.data && response.data !== null && response.data !== undefined && response.data.length > 0) {
                    const payload = {
                        "Body": `${response.data}`
                    };
                    this.props.uploadAavatarImg(payload);
                }

            }
        });
    }

    launchCamera = () => {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (response) => {
            // AppUtils.Dlog('Response = ', response);
            if (response.didCancel) {
                AppUtils.Dlog('User cancelled image picker');
            } else if (response.error) {
                AppUtils.Dlog('ImagePicker Error: ', response.error);
                alert('Error: ', response.error);

            } else if (response.customButton) {
                AppUtils.Dlog('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                // const source = { uri: response.uri };
                // AppUtils.Dlog('response', JSON.stringify(response));
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
    /* ------- Input Events & Delegate methods --------*/


    onSubmitZipEditing = (stateKey, keyName, nextInputFocus) => text => {
        AppUtils.Dlog(`onSubmitZipEditing:::>${nextInputFocus} ${text}`);

        const newItems = { ...this.state.currentZipCodeRef };
        //  const newItems = { ...this.state.currentZipCodeRef };

        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        // alert("onSubmitZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

        let payload = {};
        let addressPayload = {};
        if (this.state[stateKey].citizenship === "U.S" || this.state[stateKey].citizenship === undefined ) {
          
            if (keyName === "zipcode_Phy") {
                payload = {
                    "Zip": this.state[stateKey][keyName]
                };
                addressPayload = {
                    ...payload,
                    "Address1": this.state[stateKey].addrLine1_Phy,
                    "Address2": this.state[stateKey].addrLine2_Phy,
                    "City": this.state[stateKey].city_Phy,
                    "State": this.state[stateKey].stateCity_Phy
                };
            } else {
                payload = {
                    "Zip": this.state[stateKey][keyName]
                };
                addressPayload = {
                    ...payload,
                    "Address1": this.state[stateKey].addrLine1,
                    "Address2": this.state[stateKey].addrLine2,
                    "City": this.state[stateKey].city,
                    "State": this.state[stateKey].stateCity
                };
            }



        }


        this.props.getStateCity(payload);
        this.props.getAddressFormat(addressPayload);



        // nextInputFocus.focus();
    }

    onSubmitEmpZipEditing = (stateKey, keyName, nextInputFocus) => text => {
        AppUtils.Dlog(`onSubmitEmpZipEditing:::>${nextInputFocus} ${text}`);

        const newItems = { ...this.state.currentZipCodeRef };
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        // alert("onSubmitEmpZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

        // nextInputFocus.focus();
    }

    onSubmitZipTrusteeEditing = (stateKey, keyName, nextInputFocus,objIndex) => text => {
        AppUtils.Dlog(`onSubmitZipTrusteeEditing:::>${nextInputFocus} ${text}`);

        const newItems = { ...this.state.currentZipCodeRef };
        //  const newItems = { ...this.state.currentZipCodeRef };

        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = objIndex;
        // alert("onSubmitZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

        const newTrusteeItmes = [...this.state.estate.trusteeData]
        const tempObj = newTrusteeItmes[objIndex];

        let payload = {};
        let addressPayload = {};
        if (tempObj.citizenship === "U.S" || tempObj.citizenship === undefined ) {
          
            if (keyName === "zipcode_Phy") {
                payload = {
                    "Zip": tempObj[keyName]
                };
                addressPayload = {
                    ...payload,
                    "Address1": tempObj.addrLine1_Phy,
                    "Address2": tempObj.addrLine2_Phy,
                    "City": tempObj.city_Phy,
                    "State": tempObj.stateCity_Phy
                };
            } else {
                payload = {
                    "Zip": tempObj[keyName]
                };
                addressPayload = {
                    ...payload,
                    "Address1": tempObj.addrLine1,
                    "Address2": tempObj.addrLine2,
                    "City": tempObj.city,
                    "State": tempObj.stateCity
                };
            }



        }


        this.props.getStateCity(payload);
        this.props.getAddressFormat(addressPayload);



        // nextInputFocus.focus();
    }

    onSubmitEditing = (input) => text => {

        AppUtils.Dlog(`onSubmitEditing:::>${text}`);

        input.focus();
    }

    onChangeDate = (stateKey, keyName) => dateStr => {
        AppUtils.Dlog("onChangeDate:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: dateStr
            }
        }));
    }

    onChangeSpiltDate = (stateKey, keyName, index) => dateStr => {
        AppUtils.Dlog(`onChangeSpiltDate:::>${index} ${dateStr}`);
        const tempCurrentDate = `${this.state[stateKey][keyName]}`;

        const tempCurrentDateComp = tempCurrentDate !== "" ? tempCurrentDate.split('-') : [];

        let returnDate = "";
        if (tempCurrentDateComp.length > 2) {
            tempCurrentDateComp[index] = dateStr;
        } else {
            AppUtils.Dlog(`index:::>${index}`);

            switch (index) {

                case 0:
                    AppUtils.Dlog(`0:::>${index}`);

                    tempCurrentDateComp[index] = dateStr;
                    tempCurrentDateComp[1] = "";
                    tempCurrentDateComp[2] = "";

                    break;
                case 1:
                    AppUtils.Dlog(`2:::>${index}`);

                    tempCurrentDateComp[0] = "";
                    tempCurrentDateComp[index] = dateStr;
                    tempCurrentDateComp[2] = "";
                    break;
                case 2:
                    AppUtils.Dlog(`3:::>${index}`);

                    tempCurrentDateComp[0] = "";
                    tempCurrentDateComp[1] = "";
                    tempCurrentDateComp[index] = dateStr;
                    break;
                default:
                    break;
            }
        }

        returnDate = tempCurrentDateComp.join("");



        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: returnDate
            }
        }));
    }

    onChangeText = (stateKey, keyName) => text => {
        AppUtils.Dlog("onChangeText:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: text
            }
        }));
    }

    onChangeNickName = () => text => {
        AppUtils.Dlog("onChangeNickName:::>");
        this.setState({ nickname: text });
    }

    onPressDropDown = (stateKey, keyName) => () => this.setState(prevState => ({
        [stateKey]: {
            ...prevState[stateKey],
            [keyName]: !prevState[stateKey][keyName]
        },
        enableScrollViewScroll: gblStrings.isIOSPlatform
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


    /* ------- Validations methods --------*/

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
        } else if (this.state.personal.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.personal.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.personal.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.personal.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame === "No" && this.state.personal.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.personal.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
        } else if (this.state.personal.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.personal.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity_Phy';
        } else if (this.isEmpty(this.state.personal.phoneType)) {
            errMsg = gblStrings.accManagement.emptyPhonetypeMsg;
            input = 'phoneType';
        } else if (this.isEmpty(this.state.personal.mobileNo)) {
            errMsg = gblStrings.accManagement.emptyMobileNoMsg;
            input = 'mobileNo';
        } else if (this.state.personal.mobileNo.length < gblStrings.maxLength.mobileNo && this.state.personal.phoneType === "Mobile") {
            errMsg = gblStrings.accManagement.invalidMobileNoMsg;
            input = 'mobileNo';
        } else if (this.state.personal.mobileNo.length < gblStrings.maxLength.phoneNo && this.state.personal.phoneType === "Home") {
            errMsg = gblStrings.accManagement.invalidPhoneNoMsg;
            input = 'mobileNo';
        } else if (this.state.personal.mobileNo.length < gblStrings.maxLength.workPhone && this.state.personal.phoneType === "Work") {
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
        } else if (this.state.personal.empStatus === "Others" && this.isEmpty(this.state.personal.empStatusForOther)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusOthersMsg;
            input = 'empStatusForOther';
        } else if (this.isEmpty(this.state.personal.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
            input = 'isMilitaryHistory';
        } else if (this.isEmpty(this.state.personal.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (this.state.personal.isSeniorPoliticalFigure === "Yes" && this.isEmpty(this.state.personal.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            AppUtils.Dlog(`Personal Info errMsg:: ${errMsg}`);

            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    [`${input}Validation`]: false,
                    isPersonalInfoExpanded: true,
                    isEmploymentInfoExpanded: true,
                    isFinancialInfoExpanded: true,
                    isMilitaryInfoExpanded: true,
                    isRegulatoryInfoExpanded: true,
                },
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            }));


            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && this[input] !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }
            // alert(errMsg);
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
        } else if (this.state.personal.zipcode.length < gblStrings.maxLength.zipCode) {
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
        } else if (this.state.jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.jointOwner.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.jointOwner.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.jointOwner.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame === "No" && this.state.jointOwner.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.jointOwner.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
        } else if (this.state.jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.jointOwner.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
        } else if (this.isEmpty(this.state.jointOwner.phoneType)) {
            errMsg = gblStrings.accManagement.emptyPhonetypeMsg;
            input = 'phoneType';
        } else if (this.isEmpty(this.state.jointOwner.mobileNo)) {
            errMsg = gblStrings.accManagement.emptyMobileNoMsg;
            input = 'mobileNo';
        } else if (this.state.jointOwner.mobileNo.length < gblStrings.maxLength.mobileNo && this.state.jointOwner.phoneType === "Mobile") {
            errMsg = gblStrings.accManagement.invalidMobileNoMsg;
            input = 'mobileNo';
        } else if (this.state.jointOwner.mobileNo.length < gblStrings.maxLength.phoneNo && this.state.jointOwner.phoneType === "Home") {
            errMsg = gblStrings.accManagement.invalidPhoneNoMsg;
            input = 'mobileNo';
        } else if (this.state.jointOwner.mobileNo.length < gblStrings.maxLength.workPhone && this.state.jointOwner.phoneType === "Work") {
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
        } else if (this.state.personal.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(this.state.jointOwner.empStatus)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusMsg;
            input = 'empStatus';
        } else if (this.state.jointOwner.empStatus === "Others" && this.isEmpty(this.state.jointOwner.empStatusForOther)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusOthersMsg;
            input = 'empStatusForOther';
        } else if (this.isEmpty(this.state.jointOwner.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
            input = 'isMilitaryHistory';
        } else if (this.isEmpty(this.state.jointOwner.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (this.state.jointOwner.isSeniorPoliticalFigure === "Yes" && this.isEmpty(this.state.jointOwner.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            AppUtils.Dlog(`JointOwner Info errMsg:: ${errMsg}`);

            this.setState(prevState => ({
                jointOwner: {
                    ...prevState.jointOwner,
                    [`${input}Validation`]: false,
                    isPersonalInfoExpanded: true,
                    isEmploymentInfoExpanded: true,
                    isFinancialInfoExpanded: true,
                    isMilitaryInfoExpanded: true,
                    isRegulatoryInfoExpanded: true,
                },
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && this[input] !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }
            // alert(errMsg);
        }

        return isValidationSuccess;
    }

    validateChildBeneficiaryInfoFields = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";
        // var employmentInfoVisible = false;


        /*
        if (this.isEmpty(this.state.childBeneficiary.vcmNo)) {
            errMsg = gblStrings.accManagement.emptyVCMNoMsg;
            input = 'vcmNo';
        } else
         */

        if (this.isEmpty(this.state.childBeneficiary.firstName)) {
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
        } else if (this.state.childBeneficiary.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(this.state.childBeneficiary.relationshipToAcc)) {
            errMsg = gblStrings.accManagement.emptyRelationShipMsg;
            input = 'empStatus';
        } else if (this.isEmpty(this.state.childBeneficiary.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (this.state.childBeneficiary.isSeniorPoliticalFigure === "Yes" && this.isEmpty(this.state.childBeneficiary.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            AppUtils.Dlog(`childBeneficiary Info errMsg:: ${errMsg}`);

            this.setState(prevState => ({
                childBeneficiary: {
                    ...prevState.childBeneficiary,
                    [`${input}Validation`]: false

                },
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[input] !== null && this[input] !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }
            // alert(errMsg);
        }

        return isValidationSuccess;
    }

    validateIRABeneficiaryInfoFields = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let errMsgCount = 0;
        const input = "";

        if (this.state.retirementBeneficiaryData.length > 0) {
            let inputField = "";

            for (let i = 0; i < this.state.retirementBeneficiaryData.length; i += 1) {
                let tempErrMsg = "";
                const tempObj = this.state.retirementBeneficiaryData[i];
                AppUtils.Dlog(`tempObj::${JSON.stringify(tempObj)}`);


                let tempValidation = false;
                if (this.isEmpty(tempObj.beneficiaryType)) {
                    tempErrMsg = gblStrings.accManagement.emptyBeneficiaryType;
                    inputField = "beneficiaryType";

                } else if (this.isEmpty(tempObj.relationshipToAcc)) {
                    tempErrMsg = gblStrings.accManagement.emptyRelationShipMsg;
                    inputField = "relationshipToAcc";

                } else if (this.isEmpty(tempObj.beneficiaryDistPercent)) {
                    tempErrMsg = gblStrings.accManagement.emptyDistributionMsg;
                    inputField = "beneficiaryDistPercent";
                } else if (parseFloat(tempObj.beneficiaryDistPercent) > parseFloat("100")) {
                    tempErrMsg = gblStrings.accManagement.distributionValidationExceed;
                    inputField = "beneficiaryDistPercent";

                } else if (this.isEmpty(tempObj.socialSecurityNo)) {
                    tempErrMsg = gblStrings.accManagement.emptySSNMsg;
                    inputField = 'socialSecurityNo';
                } else if (tempObj.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
                    tempErrMsg = gblStrings.accManagement.invalidSSNMsg;
                    inputField = 'socialSecurityNo';
                } else if (this.isEmpty(tempObj.firstName)) {
                    tempErrMsg = gblStrings.accManagement.emptyFirstNameMsg;
                    inputField = 'firstName';
                } else if (this.isEmpty(tempObj.lastName)) {
                    tempErrMsg = gblStrings.accManagement.emptyLastNameMsg;
                    inputField = 'lastName';
                } else if (this.isEmpty(tempObj.dob)) {
                    tempErrMsg = gblStrings.accManagement.emptyDOBMsg;
                    inputField = 'dob';
                } else if (this.isEmpty(tempObj.emailAddress)) {
                    tempErrMsg = gblStrings.accManagement.emptyEmailAddressMsg;
                    inputField = 'emailAddress';
                } else if (!emailRegex.test(tempObj.emailAddress)) {
                    tempErrMsg = gblStrings.accManagement.invalidEmailMasg;
                    inputField = 'emailAddress';
                } else {
                    tempValidation = true;
                }

                AppUtils.Dlog(`tempErrMsg: ${tempErrMsg}`);

                if (!tempValidation) {
                    errMsg = tempErrMsg;
                    errMsgCount += 1;
                    const newItems = [...this.state.retirementBeneficiaryData];
                    newItems[i][`${inputField}Validation`] = false;
                    this.setState({
                        retirementBeneficiaryData: newItems,
                        isValidationSuccess,
                        errMsg: isValidationSuccess === false ? errMsg : ""
                    });

                    if (inputField !== "" && inputField !== null && inputField !== undefined) {
                        if (this[inputField + i] !== null && this[inputField + i] !== undefined) {
                            if (typeof this[inputField + i].focus === 'function') {
                                this[inputField + i].focus();
                            }
                        }
                    }

                    break;
                }
            }

            if (errMsgCount === 0) {
                isValidationSuccess = true;

            }



        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            this.setState({
                [`${input}Validation`]: false
            });
            // alert(errMsg);
        }



        return isValidationSuccess;

    }
    validateEstateTrustInfoFields = () => {
        AppUtils.Dlog(`validateEstateTrustInfoFields:::`);

        let errMsg = "";
        let isValidationSuccess = false;
        let errMsgCount = 0;
        let input = "";

        if (this.isEmpty(this.state.estate.name)) {
            errMsg = gblStrings.accManagement.emptyEstateNameMsg;
            input = "name";
            ++errMsgCount;

        } else if (this.isEmpty(this.state.estate.creationDate)) {
            errMsg = gblStrings.accManagement.emptyCreationDateMsg;
            input = "creationDate";
            ++errMsgCount;

        } else if (this.isEmpty(this.state.estate.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = "socialSecurityNo";
            ++errMsgCount;

        }else if (this.isEmpty(this.state.estate.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
            ++errMsgCount;

        } else if (this.isEmpty(this.state.estate.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
            ++errMsgCount;

        } else if (this.isEmpty(this.state.estate.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
            ++errMsgCount;

        } else if (this.state.estate.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
            ++errMsgCount;

        } else if (this.isEmpty(this.state.estate.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
            ++errMsgCount;

        } else if (this.isEmpty(this.state.estate.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
            ++errMsgCount;

        } else if (this.isEmpty(this.state.estate.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
            input = 'isYourPhysicalAddresSame';
            ++errMsgCount;

        } else if (this.state.estate.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.estate.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
            ++errMsgCount;

        } else if (this.state.estate.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.estate.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
        } else if (this.state.estate.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.estate.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
            ++errMsgCount;

        } else if (this.state.estate.isYourPhysicalAddresSame === "No" && this.state.estate.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
            ++errMsgCount;

        } else if (this.state.estate.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.estate.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
            ++errMsgCount;

        } else if (this.state.estate.isYourPhysicalAddresSame === "No" && this.isEmpty(this.state.estate.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity_Phy';
            ++errMsgCount;

        } else if (this.isEmpty(this.state.estate.orgCountry)) {
            errMsg = gblStrings.accManagement.emptyOrganisationCountryMsg;
            input = 'orgCountry';
            ++errMsgCount;

        } else if (this.state.estate.trusteeData.length > 0) {
            let inputField = "";
            

            for (let i = 0; i < this.state.estate.trusteeData.length; i++) {
                let tempErrMsg = "";
                const tempObj = this.state.estate.trusteeData[i];
                AppUtils.Dlog(`tempObj::${ JSON.stringify(tempObj)}`);
                

                let tempValidation = false;
                if (this.isEmpty(tempObj.firstName)) {
                    tempErrMsg = gblStrings.accManagement.emptyFirstNameMsg;
                    inputField = "firstName";

                } else if (this.isEmpty(tempObj.lastName)) {
                    tempErrMsg = gblStrings.accManagement.emptyLastNameMsg;
                    inputField = "lastName";

                } else if (this.isEmpty(tempObj.memberNumber)) {
                    tempErrMsg = gblStrings.accManagement.emptyMemberNumberMsg;
                    inputField = "memberNumber";

                } else if (this.isEmpty(tempObj.socialSecurityNo)) {
                    tempErrMsg = gblStrings.accManagement.emptySSNMsg;
                    inputField = "socialSecurityNo";

                } else if (this.isEmpty(tempObj.dob)) {
                    tempErrMsg = gblStrings.accManagement.emptyDateOfBirth;
                    inputField = "dob";

                } else if (this.isEmpty(tempObj.citizenship)) {
                    tempErrMsg = gblStrings.accManagement.emptyCitizenshipMsg;
                    inputField = "citizenship";

                } else if (this.isEmpty(tempObj.addrLine1)) {
                    tempErrMsg = gblStrings.accManagement.emptyAddressLine1Msg;
                    inputField = 'addrLine1';
                } else if (this.isEmpty(tempObj.addrLine2)) {
                    tempErrMsg = gblStrings.accManagement.emptyAddressLine2Msg;
                    inputField = 'addrLine2';
                } else if (this.isEmpty(tempObj.zipcode)) {
                    tempErrMsg = gblStrings.accManagement.emptyZipCodeMsg;
                    inputField = 'zipcode';
                } else if (tempObj.zipcode.length < gblStrings.maxLength.zipCode) {
                    tempErrMsg = gblStrings.accManagement.invalidZipCodeMsg;
                    inputField = 'zipcode';
                } else if (this.isEmpty(tempObj.city)) {
                    tempErrMsg = gblStrings.accManagement.emptyCityMsg;
                    inputField = 'city';
                } else if (this.isEmpty(tempObj.stateCity)) {
                    tempErrMsg = gblStrings.accManagement.emptyStateMsg;
                    inputField = 'stateCity';
                } else if (this.isEmpty(tempObj.isYourPhysicalAddresSame)) {
                    tempErrMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
                    inputField = 'isYourPhysicalAddresSame';
                } else if (tempObj.isYourPhysicalAddresSame === "No" && this.isEmpty(tempObj.addrLine1_Phy)) {
                    tempErrMsg = gblStrings.accManagement.emptyAddressLine1Msg;
                    inputField = 'addrLine1_Phy';
                } else if (tempObj.isYourPhysicalAddresSame === "No" && this.isEmpty(tempObj.addrLine2_Phy)) {
                    tempErrMsg = gblStrings.accManagement.emptyAddressLine2Msg;
                    inputField = 'addrLine2_Phy';
                } else if (tempObj.isYourPhysicalAddresSame === "No" && this.isEmpty(tempObj.zipcode_Phy)) {
                    tempErrMsg = gblStrings.accManagement.emptyZipCodeMsg;
                    inputField = 'zipcode_Phy';
                } else if (tempObj.isYourPhysicalAddresSame === "No" && tempObj.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
                    tempErrMsg = gblStrings.accManagement.invalidZipCodeMsg;
                    inputField = 'zipcode_Phy';
                } else if (tempObj.isYourPhysicalAddresSame === "No" && this.isEmpty(tempObj.city_Phy)) {
                    tempErrMsg = gblStrings.accManagement.emptyCityMsg;
                    inputField = 'city_Phy';
                } else if (tempObj.isYourPhysicalAddresSame === "No" && this.isEmpty(tempObj.stateCity_Phy)) {
                    tempErrMsg = gblStrings.accManagement.emptyStateMsg;
                    inputField = 'stateCity_Phy';
                } else if (this.isEmpty(tempObj.residencePhoneNo)) {
                    tempErrMsg = gblStrings.accManagement.emptyResidentialPhoneMsg;
                    inputField = "residencePhoneNo";

                } else if (this.isEmpty(tempObj.busniessPhoneNo)) {
                    tempErrMsg = gblStrings.accManagement.emptyBusinessPhoneMsg;
                    inputField = "busniessPhoneNo";

                } else if (this.isEmpty(tempObj.emailAddress)) {
                    tempErrMsg = gblStrings.accManagement.emptyEmailAddressMsg;
                    inputField = 'emailAddress';
                } else if (!emailRegex.test(tempObj.emailAddress)) {
                    tempErrMsg = gblStrings.accManagement.invalidEmailMasg;
                    inputField = 'emailAddress';
                }  else {
                    tempValidation = true;
                }

                AppUtils.Dlog(`tempErrMsg: ${ tempErrMsg}`);

                if (!tempValidation) {
                    errMsg = tempErrMsg;
                    ++errMsgCount;
                    const newItems = [...this.state.estate.trusteeData];
                    newItems[i][`${inputField }Validation`] = false;
                   
                    this.setState(() => (prevState => ({
                        estate: {
                            ...prevState.estate,
                            trusteeData:newItems
                        },
                        isValidationSuccess,
                        errMsg: isValidationSuccess === false ? errMsg : ""
                    })));

                    if (inputField !== "" && inputField !== null && inputField !== undefined) {
                        if (this[inputField + i] !== null && this[inputField + i] !== undefined) {
                            if (typeof this[inputField + i].focus === 'function') {
                                this[inputField + i].focus();
                            }
                        }
                    }

                    break;
                }
            }

            if (errMsgCount == 0) {
                isValidationSuccess = true;
            }



        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            this.setState(() => (prevState => ({
                estate: {
                    ...prevState.estate,
                    [`${input}Validation`]: false,
                },
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            })));
           alert(errMsg);
        }



        return isValidationSuccess;

    }



    validateFields = () => {
        // return this.props.navigation.navigate({ routeName: 'openAccPageThree', key: 'openAccPageThree' });
        let isValidationSuccess = false;
        try {


            const accType = this.props.navigation.getParam('accType', '');
            AppUtils.Dlog(`validateFields::: ${accType}`);
         
            if (accType === "Trust or Estate Account" && !this.validateEstateTrustInfoFields()) {
                isValidationSuccess = false;
            }else if(accType !== "Trust or Estate Account"){
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
                        isSeniorPoliticalFigureValidation: true,
    
                        militaryStatusValidation: true,
                        isMilitaryHistoryValidation: true,
    
    
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
                        isSeniorPoliticalFigureValidation: true,
    
                        militaryStatusValidation: true,
                        isMilitaryHistoryValidation: true,
    
    
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
                        isSeniorPoliticalFigureValidation: true,
    
                    }
                }));
    
                if (!this.validateIndividualAccInfoFields()) {
                    isValidationSuccess = false;
                } else if (accType === "Joint Account" && !this.validateJointAccInfoFields()) {
                    isValidationSuccess = false;
                } else if (accType === "UGMA/UTMA Account" && !this.validateChildBeneficiaryInfoFields()) {
                    isValidationSuccess = false;
                } else if (accType === "Retirement Account" && !this.validateIRABeneficiaryInfoFields()) {
                    isValidationSuccess = false;
                } else {
                    isValidationSuccess = true;
                }
            }else{
                isValidationSuccess = true;
            }

           


        } catch (err) {
            AppUtils.Dlog(`Error:::${JSON.stringify(err)}`);
        }
        return isValidationSuccess;


    }

    /* ------- Custom render methods --------*/

    generateKeyExtractor = (item) => item.key;


    renderRadio = (sectionName, radioName, radioSize, componentStyle, layoutStyle) => {
        AppUtils.Dlog(`renderRadio::: ${radioName}`);
        let tempkey = "";// "title";
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
            default:
                break;

        }

        AppUtils.Dlog(`tempkey::${tempkey}`);

        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            AppUtils.Dlog(`tempkey inside::${tempkey}`);
            radioData = this.props.masterLookupStateData[tempkey].value;
        } else {
            AppUtils.Dlog(`tempkey not there::${tempkey}`);

        }

        const radioCoponents = [];


        for (let i = 0; i < radioData.length; i += 1) {
            radioCoponents.push(
                <CustomRadio
                    key={radioData[i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor="#DEDEDF"
                    innerCicleColor="#61285F"
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[i].value}
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel=""
                    selected={!!((this.state[sectionName][radioName] !== null && this.state[sectionName][radioName] === radioData[i].value))}
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
    renderRadioForEstateTrust = (radioName, radioSize, componentStyle, layoutStyle,objIndex) => {
        const sectionName = "estate";
        AppUtils.Dlog(`renderRadioForEstateTrust::: ${radioName}`);
        const newItems = [...this.state.estate.trusteeData];
      
        let tempkey = "";// "title";
        let radioData = dummyData;
        switch (radioName) {
            case "citizenship":
                tempkey = "citizenship";
                break;
            default:
                break;

        }

        AppUtils.Dlog(`tempkey::${tempkey}`);

        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            AppUtils.Dlog(`tempkey inside::${tempkey}`);
            radioData = this.props.masterLookupStateData[tempkey].value;
        } else {
            AppUtils.Dlog(`tempkey not there::${tempkey}`);

        }

        const radioCoponents = [];


        for (let i = 0; i < radioData.length; i += 1) {
            radioCoponents.push(
                <CustomRadio
                    key={radioData[i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor="#DEDEDF"
                    innerCicleColor="#61285F"
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[i].value}
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel=""
                    selected={!!((newItems[objIndex][radioName] !== null && newItems[objIndex][radioName] === radioData[i].value))}
                    onPress={this.onPressRadioForEstateTrust(radioName, objIndex,radioData[i].value)}

                />
            );
        }
        return (
            <View style={layoutStyle}>
                {radioCoponents}
            </View>
        );




    }
    renderCalender = (sectionName, calendarName) => {
        AppUtils.Dlog(`renderCalender::: ${calendarName}`);
        return (
            <GDateComponent
                date={this.state[sectionName][calendarName]}
                placeholder="Select Date"
                errorFlag={this.state[sectionName][`${calendarName}Validation`] !== undefined ? !this.state[sectionName][`${calendarName}Validation`] : false}
                errMsg="Please selectDate"
                onDateChange={this.onChangeDate(sectionName, calendarName)}

            />
        );
    }

    /*
    renderSplitCalender = (sectionName, calendarName) => {
        AppUtils.Dlog(`renderSplitCalender::: ${ calendarName}`);

        const tempCurrentDate = `${ this.state[sectionName][calendarName]}`;
        const tempCurrentDateComp = tempCurrentDate !== "" ? tempCurrentDate.split('-') : [];

        return (
            <View
                style={styles.splitDateGrp}
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

*/
    renderCustomDropDown = ({ section = "", stateKey = "", dropDownName = "", lblDropdownName = "", isOptional = false }) => {
        const validationKey = `${stateKey}Validation`;
        const validationKeyValue = this.state[section][validationKey] !== undefined ? !this.state[section][validationKey] : false;

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
            default:
                break;

        }

        if (tempkey !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            dropDownData = this.props.masterLookupStateData[tempkey].value;
        }
        let inputRefKey = "";
        if (section === "jointOwner") {
            inputRefKey = "_joint";
        } else if (section === "retirement") {
            inputRefKey = "_IRA";
        } else if (section === "childBeneficiary") {
            inputRefKey = "_childben";
        }

        return (
            <GDropDownComponent
                inputref={this.setInputRef(`${stateKey}${inputRefKey}`)}
                dropDownLayout={styles.dropDownLayout}
                dropDownTextName={styles.dropDownTextName}
                // pickerStyle={styles.textInputStyle}
                dropDownName={lblDropdownName}
                data={dropDownData}
                dropDownValue={this.state[section][stateKey]}
                // showDropDown={this.state[section][dropDownName]}
                // changeState={(stateKey !== "taxBracket") ? this.onPressDropDown(section, dropDownName) : null}
                selectedDropDownValue={this.onSelectedDropDownValue(section, stateKey, dropDownName)}
                // itemToDisplay="value"
                dropDownPostition={styles.dropDownPostition}
                errorFlag={isOptional ? false : validationKeyValue}
                errorText={this.state.errMsg}
                isOptional={isOptional}
                disabled={(stateKey !== "taxBracket") ? false : true}
            />
        );

    }

    onSelectedDropDownValue = (section, stateKey, dropDownName) => (value, index, data) => {
        AppUtils.Dlog("onSelectedDropDownValue:");

        let item = data[index];
        const tempRankKey = `mil_rank_${item.key}`;
        let payload = "";

        if (dropDownName === "branchOfServiceDropDown") {
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

        } else if (dropDownName === "annualIncomeDropDown") {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[section],
                    [stateKey]: item.value,
                    [dropDownName]: false,
                    taxBracket: item.taxbracket
                }
            }));

        } else {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[section],
                    [stateKey]: item.value,
                    [dropDownName]: false
                },
                enableScrollViewScroll: true
            }));
        }

    }

    onSelectedIRABeneficiaryDropDownValue = (dropDownName, objIndex) => (value, index, data) => {
        AppUtils.Dlog(`onSelectedIRABeneficiaryDropDownValue:: ${dropDownName}`);
        const newItems = [...this.state.retirementBeneficiaryData];
        let item = data[index];
        switch (dropDownName) {

            case "beneficiaryTypeDropDown":
                newItems[objIndex].beneficiaryTypeDropDown = false;
                newItems[objIndex].beneficiaryType = item.value;
                break;
            case "relationshipToAccDropDown":
                newItems[objIndex].relationshipToAccDropDown = false;
                newItems[objIndex].relationshipToAcc = item.value;
                break;

            default:
                break;

        }

        this.setState({
            selectedFundInvestmentsData: newItems
        });


    }

    onPressDropDownForIRABeneficiary = (keyName, index) => () => {
        AppUtils.Dlog(`onPressDropDownForIRABeneficiary::: ${keyName}`);
        const newItems = [...this.state.retirementBeneficiaryData];
        newItems[index][keyName] = !newItems[index][keyName];
        newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
        newItems[index].beneficiaryTypeValidation = true;
        newItems[index].relationshipToAccValidation = true;
        newItems[index].beneficiaryDistPercentValidation = true;

        this.setState({
            retirementBeneficiaryData: newItems
        });

    }

    onChangeTextForIRABeneficiary = (keyName, index) => text => {
        AppUtils.Dlog("onChangeTextForIRABeneficiary:::>");
        const newItems = [...this.state.retirementBeneficiaryData];
        newItems[index][keyName] = text;

        newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
        newItems[index].beneficiaryTypeValidation = true;
        newItems[index].relationshipToAccValidation = true;
        newItems[index].beneficiaryDistPercentValidation = true;


        this.setState({
            retirementBeneficiaryData: newItems,
        });


    }

    onChangeDateForIRABeneficiary = (keyName, index) => dateStr => {
        AppUtils.Dlog("onChangeDateForIRABeneficiary:::>");
        const newItems = [...this.state.retirementBeneficiaryData];
        newItems[index][keyName] = dateStr;
        newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
        newItems[index].beneficiaryTypeValidation = true;
        newItems[index].relationshipToAccValidation = true;
        newItems[index].beneficiaryDistPercentValidation = true;
        this.setState({
            retirementBeneficiaryData: newItems,
        });
    }

    onPressRemoveIRABeneficiary = (index) => () => {
        AppUtils.Dlog(`onPressRemoveIRABeneficiary::: ${index}`);
        const newItems = [...this.state.retirementBeneficiaryData];
        newItems.splice(index, 1);
        this.setState({
            retirementBeneficiaryData: newItems
        });
    }

    onPressAddIRABeneficiary = () => {
        AppUtils.Dlog("onPressAddIRABeneficiary::: ");

        const tempBeneficiaryObj = {
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

        if (this.state.retirementBeneficiaryData.length < 3) {
            const newItems = [...this.state.retirementBeneficiaryData, tempBeneficiaryObj];
            this.setState({
                retirementBeneficiaryData: newItems
            });
        }
    }

    onSelectedEstateTrustDropDownValue = (dropDownName, objIndex) => (value, index, data) => {
        AppUtils.Dlog(`onSelectedEstateTrustDropDownValue:: ${dropDownName}`);
        const newItems = [...this.state.estate.trusteeData];
        newItems[objIndex].firstNameValidation = true;
        newItems[objIndex].lastNameValidation = true;
        newItems[objIndex].dobValidation = true;
        newItems[objIndex].emailAddressValidation = true;
        newItems[objIndex].socialSecurityNoValidation = true;
      


     
        let item = data[index];
        switch (dropDownName) {
            case "suffixDropDown":
                newItems[objIndex].suffixDropDown = false;
                newItems[objIndex].suffix = item.value;
                break;
            default:
                break;

        }

        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems
            }
        })));


    }

    onChangeTextForEstateTrust = (keyName, index) => text => {
        AppUtils.Dlog("onChangeTextForEstateTrust:::>");

        const newItems = [...this.state.estate.trusteeData];
        newItems[index][keyName] = text;
        newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
      


        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems

            }
        })));
        


    }

    onChangeDateForEstateTrust = (keyName, index) => dateStr => {
        AppUtils.Dlog("onChangeDateForEstateTrust:::>");
        const newItems = [...this.state.estate.trusteeData];
        newItems[index][keyName] = dateStr;
        newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
      


        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems

            }
        })));
    }

    onPressRadioForEstateTrust = (keyName,index,text) => () => {
        AppUtils.Dlog(`onPressRadioForEstateTrust:: ${keyName}`);
        const newItems = [...this.state.estate.trusteeData];
        newItems[index][keyName] = text;

        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems
            }
        })));
    }

    onPressRemoveEstateTrust = (index) => () => {
        AppUtils.Dlog(`onPressRemoveEstateTrust::: ${index}`);
        const newItems = [...this.state.estate.trusteeData];
        newItems.splice(index, 1);
        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems

            }
        })));
    }

    onPressAddIEstateTrust = () => {
        AppUtils.Dlog("onPressAddIEstateTrust::: ");

        const tempTrusteeObj = {
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
            memberPhoneNo: "",
            busniessPhoneNo: "",
            residencePhoneNo:"",
            emailAddress: "",
            memberNumber: "",

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
            emailAddressValidation: true,
            socialSecurityNoValidation: true,
            memberPhoneNoValidation: true,
            busniessPhoneNoValidation: true,
            residencePhoneNoValidation: true,
            memberNumberValidation: true,


        };

        if (this.state.estate.trusteeData.length < 3) {
           let newItems = [...this.state.estate.trusteeData];
            newItems.push(tempTrusteeObj);
            this.setState(() => (prevState => ({
                estate: {
                    ...prevState.estate,
                    trusteeData:newItems
                }
            })));
        }
    }


    onClickExpandCollpaseEvent = (stateKey, keyName) => () => {
        AppUtils.Dlog("onClickExpandCollpaseEvent:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: !prevState[stateKey][keyName]
            }
        }));
    }


    renderIndividualSection = () => {
        return (
            <View>
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
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformation}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole="button"
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
                        <View style={styles.dropDownViewPrefix}>
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
                            // inputref={(ref)=> this.firstName = ref}
                            inputref={this.setInputRef("firstName")}
                            value={this.state.personal.firstName}
                            editable={this.state.personal.firstName === ""}
                            propInputStyle={this.state.personal.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
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
                                {` ${gblStrings.accManagement.optional}`}
                            </Text>
                        </Text>
                        <GInputComponent
                            // inputref={(ref)=> this.middleInitial = ref}
                            inputref={this.setInputRef("middleInitial")}
                            value={this.state.personal.middleInitial}
                            editable={this.props.initialState.middleInitial === ""}
                            propInputStyle={styles.customTxtBox}
                            placeholder=""
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
                            editable={this.state.personal.lastName === ""}
                            propInputStyle={this.state.personal.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.lastName}
                            returnKeyType="done"
                            onChangeText={this.onChangeText("personal", "lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.suffix)}
                            errorFlag={!this.state.personal.lastNameValidation}
                            errorText={this.state.errMsg}

                        />

                        <View style={styles.dropDownViewPrefix}>
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
                            this.state.personal.citizenship !== "U.S" &&
                            <View style={styles.uploadW8View}>
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
                            value={this.state.personal.zipcode}
                            maxLength={gblStrings.maxLength.zipCode}
                            returnKeyType="done"
                            onChangeText={this.onChangeText("personal", "zipcode")}
                            keyboardType="number-pad"
                            onSubmitEditing={this.onSubmitZipEditing("personal", "zipcode", this.city)}
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
                            editable={this.state.personal.citizenship !== "U.S"}

                        />
                        <GInputComponent
                            inputref={this.setInputRef("stateCity")}
                            propInputStyle={this.state.personal.stateCityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterState}
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.state}
                            value={this.state.personal.stateCity}
                            onChangeText={this.onChangeText("personal", "stateCity")}
                            onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                            errorFlag={!this.state.personal.stateCityValidation}
                            errorText={this.state.errMsg}
                            editable={this.state.personal.citizenship !== "U.S"}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.isYourPhysicalAddressSame}
                        </Text>
                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={styles.radioCol1}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Yes"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.personal.isYourPhysicalAddresSame !== null && this.state.personal.isYourPhysicalAddresSame === "Yes"))}
                                onPress={this.onPressRadio("personal", "isYourPhysicalAddresSame", "Yes")}
                            />
                            <CustomRadio
                                componentStyle={styles.radioCol2}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="No"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.personal.isYourPhysicalAddresSame !== null && this.state.personal.isYourPhysicalAddresSame === "No"))}
                                onPress={this.onPressRadio("personal", "isYourPhysicalAddresSame", "No")}

                            />
                        </View>
                        {!this.state.personal.isYourPhysicalAddresSameValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }

                        {
                            this.state.personal.isYourPhysicalAddresSame === "No" &&
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
                                    value={this.state.personal.zipcode_Phy}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    returnKeyType="done"
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
                                    editable={this.state.personal.citizenship !== "U.S"}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("stateCity_Phy")}
                                    propInputStyle={this.state.personal.stateCity_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.state}
                                    value={this.state.personal.stateCity_Phy}
                                    onChangeText={this.onChangeText("personal", "stateCity_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                    errorFlag={!this.state.personal.stateCity_PhyValidation}
                                    errorText={this.state.errMsg}
                                    editable={this.state.personal.citizenship !== "U.S"}

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
                           // value={this.state.personal.mobileNo.replace(/\d(?=\d{4})/g, "*")}
                            value={this.state.personal.mobileNo}
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
                                {` ${gblStrings.accManagement.optional}`}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo2")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            value={this.state.personal.telePhoneNo2}
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
                                {` ${gblStrings.accManagement.optional}`}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo3")}
                            propInputStyle={styles.customTxtBox}
                            placeholder=""
                            value={this.state.personal.telePhoneNo3}
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
                            value={this.state.personal.emailAddress}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo")}
                            propInputStyle={this.state.personal.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            value={this.state.personal.socialSecurityNo}
                            keyboardType="number-pad"
                            returnKeyType="done"
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
                        accessibilityRole="button"
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
                                placeholder="Enter Employment status"
                                value={this.state.personal.empStatusForOther}
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
                                        placeholder="Enter Industry"
                                        value={this.state.personal.empIndustryForOther}
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
                                    value={this.state.personal.occupation}

                                    placeholder=""
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
                                    value={this.state.personal.empZipcode}
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
                                    returnKeyType="done"
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
                                    value={this.state.personal.empWorkPhoneNo}
                                    keyboardType="phone-pad"
                                    onChangeText={this.onChangeText("personal", "empWorkPhoneNo")}

                                />


                            </View>
                        }
                        {
                            // Render employment fields if user not have employment history
                            (this.state.personal.empStatus === "Unemployed" || this.state.personal.empStatus === "Homemaker" || this.state.personal.empStatus === "Student" || this.state.personal.empStatus === "Retired") &&

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
                        accessibilityRole="button"
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
                                componentStyle={styles.radioCol1}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Yes"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.personal.isMilitaryHistory !== null && this.state.personal.isMilitaryHistory === "Yes"))}
                                onPress={this.onPressRadio("personal", "isMilitaryHistory", "Yes")}

                            />
                            <CustomRadio
                                componentStyle={styles.radioCol2}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="No"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.personal.isMilitaryHistory !== null && this.state.personal.isMilitaryHistory === "No"))}
                                onPress={this.onPressRadio("personal", "isMilitaryHistory", "No")}
                            />
                        </View>
                        {!this.state.personal.isMilitaryHistoryValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }


                        {
                            this.state.personal.isMilitaryHistory === "Yes" &&


                            <View>

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
                                <View style={styles.militaryServiceView}>
                                    <Text style={styles.militaryLblDate1}>
                                        {gblStrings.accManagement.from}
                                    </Text>
                                    <View style={styles.militaryLblDate2}>
                                        <GDateComponent
                                            date={this.state.personal.fromDateMilitary}
                                            placeholder="Select Date"
                                            maxDate={currentdate}
                                            onDateChange={this.onChangeDate("personal", "fromDateMilitary")}

                                        />
                                    </View>
                                </View>
                                <View style={styles.militaryServiceView}>
                                    <Text style={styles.militaryLblDate1}>
                                        {gblStrings.accManagement.to}
                                    </Text>
                                    <View style={styles.militaryLblDate2}>
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
                                    placeholder=""
                                    value={this.state.personal.commissionSource}
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
                        accessibilityRole="button"
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
                        accessibilityRole="button"
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

                        <View style={styles.explainView}>
                            <Text style={styles.explainTxt}>
                                {"Explain - "}
                            </Text>
                            <View style={styles.explainDottedBorder}>
                                <Text style={styles.explainDotteBorderTxt}>
                                    Senior Foreign Political Figure
                                </Text>
                            </View>
                        </View>

                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={styles.radioCol1}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Yes"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.personal.isSeniorPoliticalFigure !== null && this.state.personal.isSeniorPoliticalFigure === "Yes"))}
                                onPress={this.onPressRadio("personal", "isSeniorPoliticalFigure", "Yes")}

                            />
                            <CustomRadio
                                componentStyle={styles.radioCol2}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="No"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.personal.isSeniorPoliticalFigure !== null && this.state.personal.isSeniorPoliticalFigure === "No"))}
                                onPress={this.onPressRadio("personal", "isSeniorPoliticalFigure", "No")}

                            />
                        </View>
                        {!this.state.personal.isSeniorPoliticalFigureValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }
                        {this.state.personal.isSeniorPoliticalFigure === "Yes" &&

                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.seniorPoliticalName}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("seniorPoliticalName")}
                                    propInputStyle={this.state.personal.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterSeniorName}
                                    value={this.state.personal.seniorPoliticalName}
                                    returnKeyType="done"
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
            <View>
                <this.renderPersonalInfoJointOwner />
                <this.renderEmploymentInfoJointOwner />
                <this.renderFinancialInfoJointOwner />
                <this.renderMilitaryInfoJointOwner />
                {
                    (this.state.jointOwner.empStatus !== "Not Employed" && this.state.jointOwner.empStatus !== "") && <this.renderRegulatoryInfo_JointOwner />
                }
            </View>
        );


    }

    renderPersonalInfoJointOwner = () => {

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformationJoint}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isPersonalInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
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

                        <View style={styles.dropDownViewPrefix}>
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
                            placeholder=""
                            value={this.state.jointOwner.firstName}
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
                                {` ${gblStrings.accManagement.optional}`}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("middleInitial_joint")}
                            propInputStyle={styles.customTxtBox}
                            value={this.state.jointOwner.middleInitial}
                            placeholder=""
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
                            placeholder=""
                            value={this.state.jointOwner.lastName}
                            maxLength={gblStrings.maxLength.lastName}
                            returnKeyType="done"
                            onChangeText={this.onChangeText("jointOwner", "lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.suffix_joint)}
                            errorFlag={!this.state.jointOwner.lastNameValidation}
                            errorText={this.state.errMsg}
                        />


                        <View style={styles.dropDownViewPrefix}>
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
                            this.state.personal.citizenship !== "U.S" &&
                            <View style={styles.uploadW8View}>
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
                            value={this.state.jointOwner.addrLine1}
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
                            value={this.state.jointOwner.addrLine2}
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
                            value={this.state.jointOwner.zipCode}
                            keyboardType="number-pad"
                            returnKeyType="done"
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
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.city}
                            value={this.state.jointOwner.city}
                            onChangeText={this.onChangeText("jointOwner", "city")}
                            onSubmitEditing={this.onSubmitEditing(this.stateCity_joint)}
                            errorFlag={!this.state.jointOwner.cityValidation}
                            errorText={this.state.errMsg}
                            editable={this.state.jointOwner.citizenship !== "U.S"}



                        />
                        <GInputComponent
                            inputref={this.setInputRef("stateCity")}
                            propInputStyle={this.state.jointOwner.stateCityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterState}
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.state}
                            value={this.state.jointOwner.stateCity}
                            onChangeText={this.onChangeText("jointOwner", "stateCity")}
                            onSubmitEditing={this.onSubmitEditing(this.mobileNo_joint)}
                            errorFlag={!this.state.jointOwner.stateCityValidation}
                            errorText={this.state.errMsg}
                            editable={this.state.jointOwner.citizenship !== "U.S"}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.isYourPhysicalAddressSame}
                        </Text>
                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={styles.radioCol1}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Yes"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.jointOwner.isYourPhysicalAddresSame !== null && this.state.jointOwner.isYourPhysicalAddresSame === "Yes"))}
                                onPress={this.onPressRadio("jointOwner", "isYourPhysicalAddresSame", "Yes")}
                            />
                            <CustomRadio
                                size={30}
                                componentStyle={styles.radioCol2}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="No"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.jointOwner.isYourPhysicalAddresSame !== null && this.state.isYourPhysicalAddresSame === "No"))}
                                onPress={this.onPressRadio("jointOwner", "isYourPhysicalAddresSame", "No")}
                            />
                        </View>
                        {!this.state.jointOwner.isYourPhysicalAddresSameValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }

                        {
                            this.state.jointOwner.isYourPhysicalAddresSame === "No" &&
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
                                    value={this.state.jointOwner.zipcode_Phy}
                                    returnKeyType="done"
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
                                    editable={this.state.jointOwner.citizenship !== "U.S"}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("stateCity_Phy_joint")}
                                    propInputStyle={this.state.jointOwner.stateCity_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.state}
                                    value={this.state.jointOwner.stateCity_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "stateCity_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo_joint)}
                                    errorFlag={!this.state.jointOwner.stateCity_PhyValidation}
                                    errorText={this.state.errMsg}
                                    editable={this.state.jointOwner.citizenship !== "U.S"}

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
                            value={this.state.jointOwner.mobileNo.replace(/\d(?=\d{4})/g, "*")}
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
                                {` ${gblStrings.accManagement.optional}`}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo2_joint")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.telePhoneNo2}
                            value={this.state.jointOwner.telePhoneNo2}
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
                                {` ${gblStrings.accManagement.optional}`}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("telePhoneNo3")}
                            propInputStyle={styles.customTxtBox}
                            placeholder=""
                            value={this.state.jointOwner.telePhoneNo3}
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
                            value={this.state.jointOwner.emailAddress}
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
                            value={this.state.jointOwner.socialSecurityNo}
                            keyboardType="number-pad"
                            returnKeyType="done"
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

    renderEmploymentInfoJointOwner = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.employmentInformationJoint}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isEmploymentInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
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
                                placeholder="Enter Employment status"
                                value={this.state.jointOwner.empStatusForOther}
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
                                        placeholder="Enter Industry"
                                        maxLength={gblStrings.maxLength.common}
                                        value={this.state.jointOwner.empIndustryForOther}

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
                                    placeholder=""
                                    value={this.state.jointOwner.empOccupation}
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
                                    value={this.state.jointOwner.empName}
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
                                    value={this.state.jointOwner.empZipcode}
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
                                    returnKeyType="done"
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
                                    value={this.state.jointOwner.empWorkPhoneNo}
                                    maxLength={gblStrings.maxLength.workPhone}
                                    keyboardType="phone-pad"
                                    onChangeText={this.onChangeText("jointOwner", "empWorkPhoneNo")}

                                />


                            </View>
                        }
                        {
                            // Render employment fields if user not have employment history
                            (this.state.jointOwner.empStatus === "Unemployed" || this.state.jointOwner.empStatus === "Homemaker" || this.state.jointOwner.empStatus === "Student" || this.state.jointOwner.empStatus === "Retired") &&

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

    renderMilitaryInfoJointOwner = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.militaryInformationJoint}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isMilitaryInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"

                    >
                        <Text style={styles.expandCollpaseTxt}>
                            [ - ]
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
                                componentStyle={styles.radioCol1}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Yes"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.jointOwner.isMilitaryHistory !== null && this.state.jointOwner.isMilitaryHistory === "Yes"))}
                                onPress={this.onPressRadio("jointOwner", "isMilitaryHistory", "Yes")}

                            />
                            <CustomRadio
                                componentStyle={styles.radioCol2}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="No"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.jointOwner.isMilitaryHistory !== null && this.state.jointOwner.isMilitaryHistory === "No"))}
                                onPress={this.onPressRadio("jointOwner", "isMilitaryHistory", "No")}
                            />
                        </View>
                        {!this.state.jointOwner.isMilitaryHistoryValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }


                        {
                            this.state.jointOwner.isMilitaryHistory === "Yes" &&


                            <View>

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
                                <View style={styles.militaryServiceView}>
                                    <Text style={styles.militaryLblDate1}>
                                        {gblStrings.accManagement.from}
                                    </Text>
                                    <View style={styles.militaryLblDate2}>
                                        <GDateComponent
                                            date={this.state.jointOwner.fromDateMilitary}
                                            placeholder="Select Date"
                                            maxDate={currentdate}
                                            onDateChange={this.onChangeDate("jointOwner", "fromDateMilitary")}

                                        />
                                    </View>
                                </View>
                                <View style={styles.militaryServiceView}>
                                    <Text style={styles.militaryLblDate1}>
                                        {gblStrings.accManagement.to}
                                    </Text>
                                    <View style={styles.militaryLblDate2}>
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
                                    value={this.state.jointOwner.commissionSource}
                                    placeholder=""
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

    renderFinancialInfoJointOwner = () => {
        return (


            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.financialInformationJoint}
                    </Text>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isFinancialInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            [ - ]
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

    renderRegulatoryInfoJointOwner = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.regulatoryQuestionJoint}
                    </Text>
                    <TouchableOpacity
                        // onPress={() => { alert("Expand/Cllapse") }}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            [ - ]
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

                    <View style={styles.explainView}>
                        <Text style={styles.explainTxt}>
                            {"Explain - "}
                        </Text>
                        <View style={styles.explainDottedBorder}>
                            <Text style={styles.explainDotteBorderTxt}>
                                Senior Foreign Political Figure
                            </Text>
                        </View>
                    </View>

                    <View style={styles.radioBtnGrp}>
                        <CustomRadio
                            componentStyle={styles.radioCol1}
                            size={30}
                            outerCicleColor="#DEDEDF"
                            innerCicleColor="#61285F"
                            labelStyle={styles.lblRadioBtnTxt}
                            label="Yes"
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel=""
                            selected={!!((this.state.jointOwner.isSeniorPoliticalFigure !== null && this.state.jointOwner.isSeniorPoliticalFigure === 'Yes'))}
                            onPress={this.onPressRadio("jointOwner", "isSeniorPoliticalFigure", "Yes")}

                        />
                        <CustomRadio
                            size={30}
                            componentStyle={styles.radioCol2}
                            outerCicleColor="#DEDEDF"
                            innerCicleColor="#61285F"
                            labelStyle={styles.lblRadioBtnTxt}
                            label="No"
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel=""
                            selected={!!((this.state.jointOwner.isSeniorPoliticalFigure !== null && this.state.jointOwner.isSeniorPoliticalFigure === "No"))}
                            onPress={this.onPressRadio("jointOwner", "isSeniorPoliticalFigure", "No")}

                        />
                    </View>
                    {!this.state.jointOwner.isSeniorPoliticalFigureValidation &&
                        <Text style={styles.errMsg}>
                            {this.state.errMsg}
                        </Text>
                    }
                    {this.state.jointOwner.isSeniorPoliticalFigure === "Yes" &&

                        <View>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.seniorPoliticalName}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("seniorPoliticalName_joint")}
                                propInputStyle={this.state.jointOwner.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.enterSeniorName}
                                value={this.state.jointOwner.seniorPoliticalName}
                                returnKeyType="done"
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
            <View>
                <this.renderPersonalInfoChild />
                <this.renderRegulatoryInfoChild />
            </View>
        );


    }


    renderPersonalInfoChild = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformationChild}
                    </Text>
                    <TouchableOpacity
                        // onPress={() => { alert("Expand/Cllapse") }}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            [ - ]
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.lblLine} />
                <View style={styles.childSectionGrp}>

                    <Text style={styles.regulatoryQuestTxt}>
                        {gblStrings.accManagement.childBeneficiaryNote}
                    </Text>


                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.firstName}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("firstName_childben")}
                        propInputStyle={this.state.childBeneficiary.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder=""
                        maxLength={gblStrings.maxLength.firstName}
                        value={this.state.childBeneficiary.firstName}
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
                            {` ${gblStrings.accManagement.optional}`}
                        </Text>
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("middleInitial_childben")}
                        propInputStyle={styles.customTxtBox}
                        value={this.state.childBeneficiary.middleInitial}
                        placeholder=""
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
                        placeholder=""
                        value={this.state.childBeneficiary.lastName}
                        maxLength={gblStrings.maxLength.lastName}
                        returnKeyType="done"
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
                        value={this.state.childBeneficiary.socialSecurityNo}
                        keyboardType="number-pad"
                        returnKeyType="done"
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

    renderRegulatoryInfoChild = () => {
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.regulatoryQuestionChild}
                    </Text>
                    <TouchableOpacity
                        // onPress={() => { alert("Expand/Cllapse") }}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            [ - ]
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

                    <View style={styles.explainView}>
                        <Text style={styles.explainTxt}>
                            {"Explain - "}
                        </Text>
                        <View style={styles.explainDottedBorder}>
                            <Text style={styles.explainDotteBorderTxt}>
                                Senior Foreign Political Figure
                            </Text>
                        </View>
                    </View>

                    <View style={styles.radioBtnGrp}>
                        <CustomRadio
                            componentStyle={styles.radioCol1}
                            size={30}
                            outerCicleColor="#DEDEDF"
                            innerCicleColor="#61285F"
                            labelStyle={styles.lblRadioBtnTxt}
                            label="Yes"
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel=""
                            selected={!!((this.state.childBeneficiary.isSeniorPoliticalFigure !== null && this.state.childBeneficiary.isSeniorPoliticalFigure === "Yes"))}
                            onPress={this.onPressRadio("childBeneficiary", "isSeniorPoliticalFigure", "Yes")}

                        />
                        <CustomRadio

                            size={30}
                            componentStyle={styles.radioCol2}
                            outerCicleColor="#DEDEDF"
                            innerCicleColor="#61285F"
                            labelStyle={styles.lblRadioBtnTxt}
                            label="No"
                            descLabelStyle={styles.lblRadioDescTxt}
                            descLabel=""
                            selected={!!((this.state.childBeneficiary.isSeniorPoliticalFigure !== null && this.state.childBeneficiary.isSeniorPoliticalFigure === "No"))}
                            onPress={this.onPressRadio("childBeneficiary", "isSeniorPoliticalFigure", "No")}

                        />
                    </View>
                    {!this.state.childBeneficiary.isSeniorPoliticalFigureValidation &&
                        <Text style={styles.errMsg}>
                            {this.state.errMsg}
                        </Text>
                    }
                    {this.state.childBeneficiary.isSeniorPoliticalFigure === "Yes" &&

                        <View>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.seniorPoliticalName}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("seniorPoliticalName_childben")}
                                propInputStyle={this.state.childBeneficiary.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.enterSeniorName}
                                value={this.state.childBeneficiary.seniorPoliticalName}
                                returnKeyType="done"
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

    renderBeneficiaryRetirement = () => {

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
                        accessibilityRole="button"
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            [ - ]
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
                    {this.state.retirementBeneficiaryData.map((item, index) => {
                        const key = `benificairy${index}`;
                        return (
                            <View
                                key={key}
                            >

                                <GDropDownComponent
                                    inputref={this.setInputRef(`beneficiaryType${index}`)}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownTextName={styles.dropDownTextName}
                                    textInputStyle={styles.textInputStyle}
                                    dropDownName={gblStrings.accManagement.beneficiary}
                                    data={tempBeneficiaryData}
                                   // changeState={this.onPressDropDownForIRABeneficiary("beneficiaryTypeDropDown", index)}
                                    showDropDown={this.state.retirementBeneficiaryData[index].beneficiaryTypeDropDown}
                                    dropDownValue={this.state.retirementBeneficiaryData[index].beneficiaryType}
                                    selectedDropDownValue={this.onSelectedIRABeneficiaryDropDownValue("beneficiaryTypeDropDown", index)}
                                    itemToDisplay="value"
                                    dropDownPostition={styles.dropDownPostition}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].beneficiaryTypeValidation}
                                    errorText={gblStrings.accManagement.emptyBeneficiaryType}
                                />




                                <GDropDownComponent
                                    inputref={this.setInputRef(`relationshipToAcc${index}`)}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownTextName={styles.dropDownTextName}
                                    textInputStyle={styles.textInputStyle}
                                    dropDownName={gblStrings.accManagement.relationshipToAccHolder}
                                    data={tempRelationShipData}
                                   // changeState={this.onPressDropDownForIRABeneficiary("relationshipToAccDropDown", index)}
                                    showDropDown={this.state.retirementBeneficiaryData[index].relationshipToAccDropDown}
                                    dropDownValue={this.state.retirementBeneficiaryData[index].relationshipToAcc}
                                    selectedDropDownValue={this.onSelectedIRABeneficiaryDropDownValue("relationshipToAccDropDown", index)}
                                    itemToDisplay="value"
                                    dropDownPostition={styles.dropDownPostition}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].relationshipToAccValidation}
                                    errorText={gblStrings.accManagement.emptyRelationTypeMsg}
                                />



                                <View style={styles.distributionView}>
                                    <View style={styles.distributionCol1}>
                                        <Text style={styles.lblRowTxt}>
                                            {gblStrings.accManagement.distributionPercentage}
                                        </Text>
                                    </View>
                                    <View style={styles.distributionCol2}>

                                        <GInputComponent
                                            inputref={this.setInputRef(`beneficiaryDistPercent${index}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder=""
                                            value={this.state.retirementBeneficiaryData[index].beneficiaryDistPercent}
                                            maxLength={gblStrings.maxLength.distributionPercentage}
                                            keyboardType="decimal-pad"
                                            onChangeText={this.onChangeTextForIRABeneficiary("beneficiaryDistPercent", index)}
                                            onSubmitEditing={this.onSubmitEditing(this[`beneficiaryDistPercent${index}`])}
                                            errorFlag={!this.state.retirementBeneficiaryData[index].beneficiaryDistPercentValidation}
                                            errorText={this.state.errMsg}

                                        />
                                    </View>
                                    <View style={styles.distributionCol3}>

                                        <Text style={styles.lblRowTxt}>
                                            %
                                        </Text>
                                    </View>

                                </View>

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.socialSecurityNo}
                                </Text>

                                <GInputComponent
                                    inputref={this.setInputRef(`socialSecurityNo${index}`)}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.ssnNoFormat}
                                    value={this.state.retirementBeneficiaryData[index].socialSecurityNo}
                                    keyboardType="number-pad"
                                    maxLength={gblStrings.maxLength.ssnNo}
                                    onChangeText={this.onChangeTextForIRABeneficiary("socialSecurityNo", index)}
                                    onSubmitEditing={this.onSubmitEditing(this[`firstName${index}`])}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].socialSecurityNoValidation}
                                    errorText={this.state.errMsg}
                                    secureTextEntry
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.firstName}
                                </Text>

                                <GInputComponent
                                    inputref={this.setInputRef(`firstName${index}`)}
                                    propInputStyle={styles.customTxtBox}
                                    value={this.state.retirementBeneficiaryData[index].firstName}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.firstName}
                                    onChangeText={this.onChangeTextForIRABeneficiary("firstName", index)}
                                    onSubmitEditing={this.onSubmitEditing(this[`middleInitial${index}`])}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].firstNameValidation}
                                    errorText={this.state.errMsg}

                                />

                                <Text style={styles.lblTxt}>
                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.middleInitial}
                                    </Text>
                                    <Text style={styles.optionalTxt}>
                                        {` ${gblStrings.accManagement.optional}`}
                                    </Text>
                                </Text>

                                <GInputComponent
                                    inputref={this.setInputRef(`middleInitial${index}`)}
                                    propInputStyle={styles.customTxtBox}
                                    value={this.state.retirementBeneficiaryData[index].middleInitial}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.middleInitial}
                                    onChangeText={this.onChangeTextForIRABeneficiary("middleInitial", index)}
                                    onSubmitEditing={this.onSubmitEditing(this[`lastName${index}`])}


                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.lastName}
                                </Text>


                                <GInputComponent
                                    inputref={this.setInputRef(`lastName${index}`)}
                                    propInputStyle={styles.customTxtBox}
                                    value={this.state.retirementBeneficiaryData[index].lastName}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.lastName}
                                    onChangeText={this.onChangeTextForIRABeneficiary("lastName", index)}
                                    onSubmitEditing={this.onSubmitEditing(this[`dob${index}`])}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].lastNameValidation}
                                    errorText={this.state.errMsg}

                                />



                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.dob}
                                </Text>
                                <GDateComponent
                                    inputref={this.setInputRef(`dob${index}`)}
                                    date={this.state.retirementBeneficiaryData[index].dob}
                                    value={this.state.retirementBeneficiaryData[index].dob}
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
                                    inputref={this.setInputRef(`emailAddress${index}`)}
                                    propInputStyle={styles.customTxtBox}
                                    value={this.state.retirementBeneficiaryData[index].emailAddress}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.emailID}
                                    onChangeText={this.onChangeTextForIRABeneficiary("emailAddress", index)}
                                    errorFlag={!this.state.retirementBeneficiaryData[index].emailAddressValidation}
                                    errorText={this.state.errMsg}

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

    renderEstateInfoSection = () => {
        return (
            <View>
                <this.renderEstateInfo />
                <this.renderTrusteeInfo />
            </View>
        );
    }

    renderEstateInfo = () => {

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.estateInfo}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        onPress={this.onClickExpandCollpaseEvent("estate", "isTrustInfoExpanded")}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.estate.isTrustInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />

                {
                    this.state.estate.isTrustInfoExpanded &&
                    <View style={styles.childSectionGrp}>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.estateName}
                        </Text>
                        <GInputComponent
                            // inputref={(ref)=> this.firstName = ref}
                            inputref={this.setInputRef("name")}
                            value={this.state.estate.name}
                            propInputStyle={this.state.estate.nameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.name}
                            onChangeText={this.onChangeText("estate", "name")}
                            onSubmitEditing={this.onSubmitEditing(this.creationDate)}
                            errorFlag={!this.state.estate.nameValidation}
                            errorText={this.state.errMsg}
                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.creationDate}
                        </Text>
                        <GDateComponent
                            inputref={this.setInputRef("creationDate")}
                            date={this.state.estate.creationDate}
                            placeholder="Select Date"
                            errorFlag={!this.state.estate.creationDateValidation}
                            errorMsg={this.state.errMsg}
                            maxDate={prevDate}
                            onDateChange={this.onChangeDate("estate", "creationDate")}
                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo")}
                            propInputStyle={this.state.estate.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            value={this.state.estate.socialSecurityNo}
                            keyboardType="number-pad"
                            maxLength={gblStrings.maxLength.ssnNo}
                            onChangeText={this.onChangeText("estate", "socialSecurityNo")}
                            onSubmitEditing={this.onSubmitEditing(this.addrLine1)}
                            errorFlag={!this.state.estate.socialSecurityNoValidation}
                            errorText={this.state.errMsg}
                            secureTextEntry

                        />



                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.address}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("addrLine1")}
                            propInputStyle={this.state.estate.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine1}
                            maxLength={gblStrings.maxLength.emplAddress1}
                            value={this.state.estate.addrLine1}
                            onChangeText={this.onChangeText("estate", "addrLine1")}
                            onSubmitEditing={this.onSubmitEditing(this.addrLine2)}
                            errorFlag={!this.state.estate.addrLine1Validation}
                            errorText={this.state.errMsg}
                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2")}
                            propInputStyle={this.state.estate.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            value={this.state.estate.addrLine2}
                            onChangeText={this.onChangeText("estate", "addrLine2")}
                            onSubmitEditing={this.onSubmitEditing(this.zipcode)}
                            errorFlag={!this.state.estate.addrLine2Validation}
                            errorText={this.state.errMsg}


                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.zipcode}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("zipcode")}
                            propInputStyle={this.state.estate.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterZip}
                            value={this.state.estate.zipcode}
                            maxLength={gblStrings.maxLength.zipCode}
                            returnKeyType="done"
                            onChangeText={this.onChangeText("estate", "zipcode")}
                            keyboardType="number-pad"
                            onSubmitEditing={this.onSubmitZipEditing("estate", "zipcode", this.city)}
                            errorFlag={!this.state.personal.zipcodeValidation}
                            errorText={this.state.errMsg}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.cityAndState}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("city")}
                            propInputStyle={this.state.estate.cityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterCity}
                            maxLength={gblStrings.maxLength.city}
                            value={this.state.estate.city}
                            onChangeText={this.onChangeText("estate", "city")}
                            onSubmitEditing={this.onSubmitEditing(this.stateCity)}
                            errorFlag={!this.state.estate.cityValidation}
                            errorText={this.state.errMsg}
                            editable={false}

                        />
                        <GInputComponent
                            inputref={this.setInputRef("stateCity")}
                            propInputStyle={this.state.estate.stateCityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterState}
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.state}
                            value={this.state.estate.stateCity}
                            onChangeText={this.onChangeText("estate", "stateCity")}
                            onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                            errorFlag={!this.state.estate.stateCityValidation}
                            errorText={this.state.errMsg}
                            editable={false}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.isYourPhysicalAddressSame}
                        </Text>
                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={styles.radioCol1}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Yes"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.estate.isYourPhysicalAddresSame !== null && this.state.estate.isYourPhysicalAddresSame === "Yes"))}
                                onPress={this.onPressRadio("estate", "isYourPhysicalAddresSame", "Yes")}
                            />
                            <CustomRadio
                                componentStyle={styles.radioCol2}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="No"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.estate.isYourPhysicalAddresSame !== null && this.state.estate.isYourPhysicalAddresSame === "No"))}
                                onPress={this.onPressRadio("estate", "isYourPhysicalAddresSame", "No")}

                            />
                        </View>
                        {!this.state.estate.isYourPhysicalAddresSameValidation &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }

                        {
                            this.state.estate.isYourPhysicalAddresSame === "No" &&
                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.address}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine1_Phy")}
                                    propInputStyle={this.state.estate.addrLine1_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine1}
                                    maxLength={gblStrings.maxLength.emplAddress1}
                                    value={this.state.estate.addrLine1_Phy}
                                    onChangeText={this.onChangeText("estate", "addrLine1_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.addrLine2_Phy)}
                                    errorFlag={!this.state.estate.addrLine1_PhyValidation}
                                    errorText={this.state.errMsg}
                                />
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine2_Phy")}
                                    propInputStyle={this.state.estate.addrLine2_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.addressLine2}
                                    value={this.state.estate.addrLine2_Phy}
                                    onChangeText={this.onChangeText("estate", "addrLine2_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.zipcode_Phy)}
                                    errorFlag={!this.state.estate.addrLine2_PhyValidation}
                                    errorText={this.state.errMsg}


                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.zipcode}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("zipcode_Phy")}
                                    propInputStyle={this.state.estate.zipcode_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterZip}
                                    value={this.state.estate.zipcode_Phy}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    returnKeyType="done"
                                    onChangeText={this.onChangeText("estate", "zipcode_Phy")}
                                    keyboardType="number-pad"
                                    onSubmitEditing={this.onSubmitZipEditing("estate", "zipcode_Phy", this.city_Phy)}
                                    errorFlag={!this.state.estate.zipcode_PhyValidation}
                                    errorText={this.state.errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("city_Phy")}
                                    propInputStyle={this.state.estate.city_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    maxLength={gblStrings.maxLength.city}
                                    value={this.state.estate.city_Phy}
                                    onChangeText={this.onChangeText("estate", "city_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.stateCity_Phy)}
                                    errorFlag={!this.state.estate.city_PhyValidation}
                                    errorText={this.state.errMsg}
                                    editable={false}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("stateCity_Phy")}
                                    propInputStyle={this.state.estate.stateCity_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.state}
                                    value={this.state.estate.stateCity_Phy}
                                    onChangeText={this.onChangeText("estate", "stateCity_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                    errorFlag={!this.state.estate.stateCity_PhyValidation}
                                    errorText={this.state.errMsg}
                                    editable={false}

                                />

                            </View>
                        }


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.federalLawDesc}
                        </Text>
                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={styles.radioCol1}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Yes"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.estate.isFederalLawApplicable !== null && this.state.estate.isFederalLawApplicable === "Yes"))}
                                onPress={this.onPressRadio("estate", "isFederalLawApplicable", "Yes")}
                            />
                            <CustomRadio
                                componentStyle={styles.radioCol2}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="No"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.estate.isFederalLawApplicable !== null && this.state.estate.isFederalLawApplicable === "No"))}
                                onPress={this.onPressRadio("estate", "isFederalLawApplicable", "No")}

                            />
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.orgCountry}
                        </Text>
                        <GInputComponent
                            // inputref={(ref)=> this.firstName = ref}
                            inputref={this.setInputRef("orgCountry")}
                            value={this.state.estate.orgCountry}
                            propInputStyle={this.state.estate.orgCountryValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.country}
                            onChangeText={this.onChangeText("estate", "orgCountry")}
                            //onSubmitEditing={this.onSubmitEditing(this.middleInitial)}
                            errorFlag={!this.state.estate.orgCountryValidation}
                            errorText={this.state.errMsg}
                        />

                    </View>
                }
            </View>

        );
    }

    renderTrusteeInfo = () => {
       let dropDownData = [];
       let tempkey ="suffix";
       if (tempkey !== "" && this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
        dropDownData = this.props.masterLookupStateData[tempkey].value;
       }
       const tempSuffixData =dropDownData;
       AppUtils.Dlog("this.state.estate.trusteeData.length::: "+this.state.estate.trusteeData.length);

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.trusteeOrExector}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        onPress={this.onClickExpandCollpaseEvent("estate", "isTrusteeInfoExpanded")}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {this.state.estate.isTrusteeInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    accessibilityRole="button"
                    onPress={this.onPressAddIEstateTrust}
                >
                    <Text style={styles.addTrustee}>
                        {gblStrings.accManagement.addTrusteeOrExector}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.lblLine} />

                {
                    this.state.estate.isTrusteeInfoExpanded &&
                    <View style={styles.childSectionGrp}>
                        {this.state.estate.trusteeData.map((item, index) => {
                            const key = `trustee${index}`;
                            return (
                                <View style={styles.commonColView}
                                    key={key}
                                >



                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.firstName}
                                    </Text>

                                    <GInputComponent
                                        inputref={this.setInputRef(`firstName${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        value={this.state.estate.trusteeData[index].firstName}
                                        placeholder=""
                                        maxLength={gblStrings.maxLength.firstName}
                                        onChangeText={this.onChangeTextForEstateTrust("firstName", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`middleInitial${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].firstNameValidation}
                                        errorText={this.state.errMsg}

                                    />

                                    <Text style={styles.lblTxt}>
                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.middleInitial}
                                        </Text>
                                        <Text style={styles.optionalTxt}>
                                            {` ${gblStrings.accManagement.optional}`}
                                        </Text>
                                    </Text>

                                    <GInputComponent
                                        inputref={this.setInputRef(`middleInitial${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        value={this.state.estate.trusteeData[index].middleInitial}
                                        placeholder=""
                                        maxLength={gblStrings.maxLength.middleInitial}
                                        onChangeText={this.onChangeTextForEstateTrust("middleInitial", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`lastName${index}`])}


                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.lastName}
                                    </Text>


                                    <GInputComponent
                                        inputref={this.setInputRef(`lastName${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        value={this.state.estate.trusteeData[index].lastName}
                                        placeholder=""
                                        maxLength={gblStrings.maxLength.lastName}
                                        onChangeText={this.onChangeTextForEstateTrust("lastName", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`suffix${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].lastNameValidation}
                                        errorText={this.state.errMsg}

                                    />

                                    <View style={styles.dropDownViewPrefix}>
                                        <GDropDownComponent
                                            inputref={this.setInputRef(`suffix${index}`)}
                                            dropDownLayout={styles.dropDownLayout}
                                            dropDownTextName={styles.dropDownTextName}
                                            textInputStyle={styles.textInputStyle}
                                            dropDownName={gblStrings.accManagement.suffix}
                                            data={tempSuffixData}
                                            dropDownValue={this.state.estate.trusteeData[index].suffix}
                                            selectedDropDownValue={this.onSelectedEstateTrustDropDownValue("suffixDropDown", index)}
                                            //itemToDisplay="value"
                                            dropDownPostition={{ ...styles.dropDownPostition, top: scaledHeight(160) }}
                                            isOptional
                                        />
                                    </View>




                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.memberNumber}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef(`memberNumber${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.ssnNoFormat}
                                        value={this.state.estate.trusteeData[index].memberNumber}
                                        keyboardType="number-pad"
                                        maxLength={gblStrings.maxLength.ssnNo}
                                        onChangeText={this.onChangeTextForEstateTrust("memberNumber", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`socialSecurityNo${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].memberNumberValidation}
                                        errorText={this.state.errMsg}
                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.socialSecurityNo}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef(`socialSecurityNo${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.ssnNoFormat}
                                        value={this.state.estate.trusteeData[index].socialSecurityNo}
                                        keyboardType="number-pad"
                                        maxLength={gblStrings.maxLength.ssnNo}
                                        onChangeText={this.onChangeTextForEstateTrust("socialSecurityNo", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`dob${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].socialSecurityNoValidation}
                                        errorText={this.state.errMsg}
                                        secureTextEntry
                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.dob}
                                    </Text>
                                    <GDateComponent
                                        inputref={this.setInputRef(`dob${index}`)}
                                        date={this.state.estate.trusteeData[index].dob}
                                        value={this.state.estate.trusteeData[index].dob}
                                        placeholder="Select Date"
                                        errorFlag={!this.state.estate.trusteeData[index].dobValidation}
                                        errorMsg={this.state.errMsg}
                                        maxDate={prevDate}
                                        onDateChange={this.onChangeDateForEstateTrust("dob", index)}

                                    />



                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.citizenship}
                                    </Text>
                                    {this.renderRadioForEstateTrust("citizenship", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp,index)}

                                    {
                                        this.state.estate.trusteeData[index].citizenship !== "U.S" &&
                                        <View style={styles.uploadW8View}>
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


                                    
                                    <View>
                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.mailingAddress}
                                        </Text>
                                        <Text style={styles.poBoxTxt}>
                                            {` ${gblStrings.accManagement.postBoxAcception}`}
                                        </Text>
                                    </View>
                                    <GInputComponent
                                        inputref={this.setInputRef("addrLine1")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.empAddrLine1}
                                        maxLength={gblStrings.maxLength.emplAddress1}
                                        value={this.state.estate.trusteeData[index].addrLine1}
                                        onChangeText={this.onChangeTextForEstateTrust("addrLine1",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`addrLine2${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].addrLine1Validation}
                                        errorText={this.state.errMsg}
                                    />
                                    <GInputComponent
                                        inputref={this.setInputRef("addrLine2")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.empAddrLine2}
                                        maxLength={gblStrings.maxLength.addressLine2}
                                        value={this.state.estate.trusteeData[index].addrLine2}
                                        onChangeText={this.onChangeTextForEstateTrust("addrLine2",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`zipcode${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].addrLine2Validation}
                                        errorText={this.state.errMsg}


                                    />


                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.zipcode}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef("zipcode")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.enterZip}
                                        value={this.state.estate.trusteeData[index].zipcode}
                                        maxLength={gblStrings.maxLength.zipCode}
                                        returnKeyType="done"
                                        onChangeText={this.onChangeTextForEstateTrust("zipcode",index)}
                                        keyboardType="number-pad"
                                        onSubmitEditing={this.onSubmitZipTrusteeEditing("estate", "zipcode", this[`city${index}`],index)}
                                        errorFlag={!this.state.estate.trusteeData[index].zipcodeValidation}
                                        errorText={this.state.errMsg}
                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.cityAndState}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef("city")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.enterCity}
                                        maxLength={gblStrings.maxLength.city}
                                        value={this.state.estate.trusteeData[index].city}
                                        onChangeText={this.onChangeTextForEstateTrust("city",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`stateCity${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].cityValidation}
                                        errorText={this.state.errMsg}
                                        editable={this.state.estate.trusteeData[index].citizenship !== "U.S"}

                                    />
                                    <GInputComponent
                                        inputref={this.setInputRef("stateCity")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.enterState}
                                        returnKeyType="done"
                                        maxLength={gblStrings.maxLength.state}
                                        value={this.state.estate.trusteeData[index].stateCity}
                                        onChangeText={this.onChangeTextForEstateTrust("stateCity",index)}
                                        //onSubmitEditing={this.onSubmitEditing(this[`stateCity${index}`])}
                                        errorFlag={!this.state.personal.stateCityValidation}
                                        errorText={this.state.errMsg}
                                        editable={this.state.estate.trusteeData[index].citizenship !== "U.S"}

                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.isYourPhysicalAddressSame}
                                    </Text>
                                    <View style={styles.radioBtnGrp}>
                                        <CustomRadio
                                            componentStyle={styles.radioCol1}
                                            size={30}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="Yes"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={!!((this.state.estate.trusteeData[index].isYourPhysicalAddresSame !== null && this.state.estate.trusteeData[index].isYourPhysicalAddresSame === "Yes"))}
                                            onPress={this.onPressRadioForEstateTrust("isYourPhysicalAddresSame", index,"Yes")}

                                        />
                                        <CustomRadio
                                            componentStyle={styles.radioCol2}
                                            size={30}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="No"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={!!((this.state.estate.trusteeData[index].isYourPhysicalAddresSame !== null && this.state.estate.trusteeData[index].isYourPhysicalAddresSame === "No"))}
                                            onPress={this.onPressRadioForEstateTrust("isYourPhysicalAddresSame", index,"No")}

                                        />
                                    </View>
                                    {!this.state.estate.trusteeData[index].isYourPhysicalAddresSameValidation &&
                                        <Text style={styles.errMsg}>
                                            {this.state.errMsg}
                                        </Text>
                                    }

                                    {
                                        this.state.estate.trusteeData[index].isYourPhysicalAddresSame === "No" &&
                                        <View>
                                            <View>
                                                <Text style={styles.lblTxt}>
                                                    {gblStrings.accManagement.addressType}
                                                </Text>
                                                <Text style={styles.poBoxTxt}>
                                                    {` ${gblStrings.accManagement.postBoxAcception}`}
                                                </Text>
                                            </View>
                                            <GInputComponent
                                                inputref={this.setInputRef("addrLine1_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.empAddrLine1}
                                                maxLength={gblStrings.maxLength.emplAddress1}
                                                value={this.state.estate.trusteeData[index].addrLine1_Phy}
                                                onChangeText={this.onChangeTextForEstateTrust( "addrLine1_Phy",index)}
                                                onSubmitEditing={this.onSubmitEditing(this[`addrLine2_Phy${index}`])}
                                                errorFlag={!this.state.estate.trusteeData[index].addrLine1_PhyValidation}
                                                errorText={this.state.errMsg}
                                            />
                                            <GInputComponent
                                                inputref={this.setInputRef("addrLine2_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.empAddrLine2}
                                                maxLength={gblStrings.maxLength.addressLine2}
                                                value={this.state.estate.trusteeData[index].addrLine2_Phy}
                                                onChangeText={this.onChangeTextForEstateTrust("addrLine2_Phy",index)}
                                                onSubmitEditing={this.onSubmitEditing(this[`zipcode_Phy${index}`])}
                                                errorFlag={!this.state.estate.trusteeData[index].addrLine2_PhyValidation}
                                                errorText={this.state.errMsg}


                                            />


                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.zipcode}
                                            </Text>
                                            <GInputComponent
                                                inputref={this.setInputRef("zipcode_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.enterZip}
                                                value={this.state.estate.trusteeData[index].zipcode_Phy}
                                                maxLength={gblStrings.maxLength.zipCode}
                                                returnKeyType="done"
                                                onChangeText={this.onChangeTextForEstateTrust("zipcode_Phy",index)}
                                                keyboardType="number-pad"
                                                onSubmitEditing={this.onSubmitZipTrusteeEditing("estate", "zipcode_Phy", this[`city_Phy${index}`],index)}
                                                errorFlag={!this.state.estate.trusteeData[index].zipcode_PhyValidation}
                                                errorText={this.state.errMsg}
                                            />

                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.cityAndState}
                                            </Text>
                                            <GInputComponent
                                                inputref={this.setInputRef("city_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.enterCity}
                                                maxLength={gblStrings.maxLength.city}
                                                value={this.state.estate.trusteeData[index].city_Phy}
                                                onChangeText={this.onChangeTextForEstateTrust( "city_Phy",index)}
                                                onSubmitEditing={this.onSubmitEditing(this[`stateCity_Phy${index}`])}
                                                errorFlag={!this.state.estate.trusteeData[index].city_PhyValidation}
                                                errorText={this.state.errMsg}
                                                editable={this.state.estate.trusteeData[index].citizenship !== "U.S"}


                                            />
                                            <GInputComponent
                                                inputref={this.setInputRef("stateCity_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.enterState}
                                                returnKeyType="done"
                                                maxLength={gblStrings.maxLength.state}
                                                value={this.state.estate.trusteeData[index].stateCity_Phy}
                                                onChangeText={this.onChangeTextForEstateTrust("stateCity_Phy",index)}
                                               // onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                                errorFlag={!this.state.estate.trusteeData[index].stateCity_PhyValidation}
                                                errorText={this.state.errMsg}
                                                editable={this.state.estate.trusteeData[index].citizenship !== "U.S"}

                                            />

                                        </View>
                                    }

                                    <View>
                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.residencePhoneNo}
                                        </Text>
                                        <Text style={styles.poBoxTxt}>
                                            {` ${gblStrings.accManagement.areaCode}`}
                                        </Text>
                                    </View>
                                    <GInputComponent
                                        inputref={this.setInputRef("residencePhoneNo")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.phoneNoFormat}
                                        value={this.state.estate.trusteeData[index].residencePhoneNo}
                                        maxLength={gblStrings.maxLength.telePhoneNo2}
                                        keyboardType="phone-pad"
                                        onChangeText={this.onChangeTextForEstateTrust("residencePhoneNo",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`residencePhoneNo${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].residencePhoneNoValidation}
                                        errorText={this.state.errMsg}
                                    />

                                    <View>
                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.businessPhoneNumber}
                                        </Text>
                                        <Text style={styles.poBoxTxt}>
                                            {` ${gblStrings.accManagement.areaCode}`}
                                        </Text>
                                    </View>
                                    <GInputComponent
                                        inputref={this.setInputRef("busniessPhoneNo")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.phoneNoFormat}
                                        value={this.state.estate.trusteeData[index].busniessPhoneNo}
                                        maxLength={gblStrings.maxLength.telePhoneNo2}
                                        keyboardType="phone-pad"
                                        onChangeText={this.onChangeTextForEstateTrust("busniessPhoneNo",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`emailAddress${index}`])}
                                        errorFlag={!this.state.estate.trusteeData[index].busniessPhoneNoValidation}
                                        errorText={this.state.errMsg}
                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.emailAddress}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef(`emailAddress${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        value={this.state.estate.trusteeData[index].emailAddress}
                                        placeholder=""
                                        returnKeyType="done"
                                        maxLength={gblStrings.maxLength.emailID}
                                        onChangeText={this.onChangeTextForEstateTrust("emailAddress", index)}
                                        errorFlag={!this.state.estate.trusteeData[index].emailAddressValidation}
                                        errorText={this.state.errMsg}

                                    />
                                </View>
                            );
                        }
                        )}
                    </View>
                }
            </View>

        );
    }

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };
    /*
    scrollToItem = (itemRef) => {
        AppUtils.Dlog("itemRef--------------:::" + JSON.stringify(itemRef));

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
        AppUtils.Dlog(`RENDER::: OpenAccPageTwo ::>>>  ::::${JSON.stringify(this.props)}`);

        const accType = `${this.props.navigation.getParam('accType', '')}`;
        const tempAccTypeCAPS = accType.toUpperCase();
        AppUtils.Dlog(`render accType::::>${accType}`);


        const currentPage = 2;
        return (

            <KeyboardAvoidingView
                style={styles.container}
                // keyboardVerticalOffset = { Header.HEIGHT + 20 }  
                // behavior="padding"
                behavior={(Platform.OS === 'ios') ? "padding" : null}
                keyboardVerticalOffset={Platform.select({ ios: 20, android: 500 })}
            >
                {
                    (this.props.accOpeningData.isLoading || this.props.masterLookupStateData.isLoading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}
                    scrollEnabled={this.state.enableScrollViewScroll}
                >
                    <View style={styles.accSelection}>
                        <Text style={styles.accSelectionTxt}>
                            {tempAccTypeCAPS}
                        </Text>
                    </View>

                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage} Personal Info`} />



                    { /* -----------Personalize -------------------*/}
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
                                {` ${gblStrings.accManagement.optional}`}
                            </Text>
                        </Text>
                        <GInputComponent
                            propInputStyle={styles.customTxtBox}
                            placeholder="e.g John Michael"
                            maxLength={gblStrings.maxLength.nickname}
                            onChangeText={this.onChangeNickName()}
                            secureTextEntry={false}
                        />
                        <View style={styles.uploadImgView}>
                            <View>
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
                                this.state.userAvatar !== "" && <Image source={this.state.userAvatar} style={styles.userAvatar} />
                            }
                        </View>
                    </View>

                    {
                        accType === "Trust or Estate Account" &&
                        <this.renderEstateInfoSection />
                    }

                    { /* ----------- Individual Account Info -------------------*/
                        accType !== "Trust or Estate Account" &&
                        <this.renderIndividualSection />
                    }

                    { /* ----------- Joint Account Info -------------------*/
                        accType === "Joint Account" &&
                        <this.renderJointOwnerSection />

                    }

                    { /* ----------- Investing for Children Account-------------------*/

                        accType === "UGMA/UTMA Account" &&
                        <this.renderChildBeneficiarySection />
                    }


                    { /* ----------- Beneficiaries (optional) -------------------*/
                        accType === "Retirement Account" &&
                        <this.renderBeneficiaryRetirement />
                    }



                    { /* ----------- Buttons Group -------------------*/}

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

                    { /* ----------- Privacy Notice -------------------*/}


                    { /* ----------- Disclaimer -------------------*/}

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
            </KeyboardAvoidingView>

        );
    }
}

OpenAccPageTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    getPersonalCompositeData: PropTypes.instanceOf(Object),
    addressFormatData: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    saveData: PropTypes.func,
    uploadAavatarImg: PropTypes.func,
    getStateCity: PropTypes.func,
    saveAccountOpening: PropTypes.func,
    getRankData: PropTypes.func,
    getAddressFormat: PropTypes.func
};
OpenAccPageTwoComponent.defaultProps = {
    navigation: {},
    getPersonalCompositeData: {},
    addressFormatData: {},
    accOpeningData: {},
    initialState: {},
    masterLookupStateData: {},
    saveData: null,
    uploadAavatarImg: null,
    getStateCity: null,
    saveAccountOpening: null,
    getRankData: null,
    getAddressFormat: null

};

export default OpenAccPageTwoComponent;

