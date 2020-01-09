import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from "prop-types";
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import { GButtonComponent, GInputComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner, GDateComponent, GDropDownComponent, GSingletonClass,showAlert } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';
//  import { Header } from 'react-navigation';

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
const date = new Date().getDate(); //  Current Date
const month = new Date().getMonth() + 1; //  Current Month
const year = new Date().getFullYear(); //  Current Year
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
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        const {initialState} = this.props;
        const openAccPageTwo = myInstance.getAccOpeningEditMode() ? (myInstance.getScreenStateData().openAccPageTwo || {}) : {};
        this.state = {
            enableScrollViewScroll: true,
            isValidationSuccess: true,
            errMsg: "",
            itemID: "",
            selectedItemID: "",
            selectedItemName: "",
            //  Perosnal info
            nickname: "",
            userAvatar: "",
            personal: {
                prefix: "",
                prefixDropDown: false,
                firstName: initialState.firstName || "",
                middleInitial: initialState.middleInitial || "",
                lastName: initialState.lastName || "",
                suffix: initialState.suffix || "",
                suffixDropDown: false,
                dob: "",
                gender: "",
                maritalStatus: "",
                maritalStatusDropDown: false,
                citizenship: "U.S",
                residenceStatus: "",
                countryOfCitizenship: "",
                countryOfCitizenshipDropDown: false,
                USResidentCardNo: "",
                USResidentCardNoExpiryDate: "",
                passportNumber: "",
                passportNoExpiryDate: "",

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
                emailAddress: initialState.email || "",
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
                residenceStatusValidation: true,
                countryOfCitizenshipValidation: true,
                USResidentCardNoValidation: true,
                USResidentCardNoExpiryDateValidation: true,
                passportNumberValidation: true,
                passportNoExpiryDateValidation: true,

                //  Employer Info
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


                //  Financial Info
                annualIncome: "",
                annualIncomeDropDown: false,
                taxBracket: "",
                taxBracketDropDown: false,
                networth: "",
                networthDropDown: false,
                taxFilingStatus: "",
                taxFilingStatusDropDown: false,


                //  Military Info

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


                //  ExpandCollapse
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
                residenceStatus: "",
                countryOfCitizenship: "",
                countryOfCitizenshipDropDown: false,
                USResidentCardNo: "",
                USResidentCardNoExpiryDate: "",
                passportNumber: "",
                passportNoExpiryDate: "",

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
                residenceStatusValidation: true,
                countryOfCitizenshipValidation: true,
                USResidentCardNoValidation: true,
                USResidentCardNoExpiryDateValidation: true,
                passportNumberValidation: true,
                passportNoExpiryDateValidation: true,

                //  Employer Info
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

                //  Employer Info
                annualIncome: "",
                annualIncomeDropDown: false,
                taxBracket: "",
                taxBracketDropDown: false,
                networth: "",
                networthDropDown: false,
                taxFilingStatus: "",
                taxFilingStatusDropDown: false,


                //  Military Info

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
                specifyState:"",
                isBusinessTrust:"",
                isBrokerOrDealerTrust:"",
                brokerOrDealer:"",
                isBankTrust:"",
                isForeignUSBranchTrust:"",
                businessTrust:"",
                isMoneyTranOrCurrencyExchangeOrgnaised:"",
                isCorrespondentAccountsOffersProvided:"",
                typeOfFiniancialInstitution:"",
                VCMFundAccountNumbers:"",
                isFinanacialInstitutionDescribed:"",
                finanacialInstitutionDesc:"",
                isPhysicalPresenceMaintained:"",
                isIndividualEmploymentThere:"",
                isTrustMaintainRecords:"",
                isCorrespondentAccountsForeignOffersProvided:"",
                bankTrustType:"",
                USFederalLawCond:"",

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
                specifyStateValidation: true,
                isBusinessTrustValidation: true,
                isBrokerOrDealerTrustValidation: true,
                brokerOrDealerValidation: true,
                isBankTrustValidation: true,
                isForeignUSBranchTrustValidation: true,
                businessTrustValidation: true,
                isMoneyTranOrCurrencyExchangeOrgnaisedValidation: true,
                isCorrespondentAccountsOffersProvidedValidation: true,
                typeOfFiniancialInstitutionValidation: true,
                VCMFundAccountNumbersValidation: true,
                isFinanacialInstitutionDescribedValidation: true,
                finanacialInstitutionDescValidation: true,
                isPhysicalPresenceMaintainedValidation: true,
                isIndividualEmploymentThereValidation: true,
                isTrustMaintainRecordsValidation: true,
                isCorrespondentAccountsForeignOffersProvidedValidation:true,
                bankTrustTypeValidation: true,
                USFederalLawCondValidation: true,

                //  ExpandCollapse
                isTrustInfoExpanded: false,
                isTrusteeInfoExpanded: false,
                isCoTrusteeInfoExpanded: false,


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

            
            currentZipCodeRef: {
                stateKey: "",
                keyName: "",
                objIndex:""
            },
           
            //  others
            ...openAccPageTwo


        };
        AppUtils.debugLog(`Constructor 2::${ JSON.stringify(this.state)}`);

    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

        AppUtils.debugLog(`componentDidMount::::> ${this.props}`);
        const { masterLookupStateData,getPersonalCompositeData} = this.props;
        const payload = [];
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
            if (this.props && masterLookupStateData && !masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }

        getPersonalCompositeData(payload);


    }

    componentDidUpdate(prevProps, prevState) {
        AppUtils.debugLog(`componentDidUpdate::::> ${prevState}`);
       const { accOpeningData,addressFormatData} = this.props;

       const {currentZipCodeRef,estate} = this.state;
        const { 
            //  stateKey = "",
            keyName = "",
            objIndex = -1
        } = currentZipCodeRef;

        if (this.props !== prevProps) {
            const responseKey = ActionTypes.PERSONAL_INFO_SAVE_OPENING_ACCT;
            if (accOpeningData[responseKey]) {
                if (accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = accOpeningData[responseKey];
                    if (tempResponse.statusCode === 200 || tempResponse.statusCode === '200') {
                        const msg = tempResponse.message;
                        AppUtils.debugLog(`Account Type Saved ::: :: ${msg}`);
                        showAlert(gblStrings.common.appName, tempResponse.result, gblStrings.common.ok);
                        AppUtils.debugLog(tempResponse.result);
                    } else {
                        showAlert(gblStrings.common.appName, tempResponse.message, gblStrings.common.ok);
                        AppUtils.debugLog(tempResponse.message);
                    }
                }
            }

            const stateCityKey = ActionTypes.GET_STATECITY;
            if (addressFormatData[stateCityKey]) {
                if (addressFormatData[stateCityKey] !== prevProps.addressFormatData[stateCityKey]) {
                    const tempResponse = addressFormatData[stateCityKey];
                   

                    if (tempResponse && tempResponse.City) {
                        if (keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    empCity: tempResponse.City,
                                    empStateCity: tempResponse.State

                                }
                            }));
                        }else if (keyName === "zipcode_Phy" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].city_Phy = tempResponse.City;
                            newItems[objIndex].stateCity_Phy = tempResponse.State;
                          
                          
                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].city = tempResponse.City;
                            newItems[objIndex].stateCity = tempResponse.State;
                         
                                              
                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (keyName === "zipcode_Phy" && objIndex !== -1) {
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
            if (addressFormatData[addressKey]) {
                if (addressFormatData[addressKey] !== prevProps.addressFormatData[addressKey]) {
                    const tempResponse = addressFormatData[addressKey];

                    if (tempResponse && tempResponse.City) {
                        if (keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    empCity: tempResponse.City,
                                    empStateCity: tempResponse.State,
                                    empAddrLine1: tempResponse.Address1 || "",
                                    empAddrLine2: tempResponse.Address2 || ""

                                }
                            }));
                        } else if (keyName === "zipcode_Phy" && objIndex !== -1 ) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].city_Phy = tempResponse.City;
                            newItems[objIndex].stateCity_Phy = tempResponse.State;
                            newItems[objIndex].addrLine1_Phy = tempResponse.Address1 || "";
                            newItems[objIndex].addrLine2_Phy = tempResponse.Address2 || "";
                            newItems[objIndex].addrLine1_PhyValidation = true;
                            newItems[objIndex].addrLine2_PhyValidation = true;
                          
                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].city = tempResponse.City;
                            newItems[objIndex].stateCity = tempResponse.State;
                            newItems[objIndex].addrLine1= tempResponse.Address1 || "";
                            newItems[objIndex].addrLine2 = tempResponse.Address2 || "";
                            newItems[objIndex].addrLine1Validation = true;
                            newItems[objIndex].addrLine2Validation = true;
                                              
                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                }
                            })));
                        } else if (keyName === "zipcode_Phy") {
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
                        if (currentZipCodeRef.keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    empAddrLine1: "",
                                    empAddrLine2: ""

                                }
                            }));
                        } else if (currentZipCodeRef.keyName === "zipcode_Phy" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].addrLine1_Phy= "";
                            newItems[objIndex].addrLine2_Phy = "";
                            newItems[objIndex].addrLine1_PhyValidation = false;
                            newItems[objIndex].addrLine2_PhyValidation = false;
                                              
                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                },
                                errMsg: "Invalid address"

                            })));
                        } else if (currentZipCodeRef.keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].addrLine1= "";
                            newItems[objIndex].addrLine2 = "";
                            newItems[objIndex].addrLine1Validation = false;
                            newItems[objIndex].addrLine2Validation = false;
                                              
                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData:newItems
        
                                },
                                errMsg: "Invalid address"

                            })));
                        } else if (currentZipCodeRef.keyName === "zipcode_Phy") {
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
            if (accOpeningData[uploadImgKey]) {
                if (accOpeningData[uploadImgKey] !== prevProps.accOpeningData[uploadImgKey]) {
                    const tempResponse = accOpeningData[uploadImgKey];
                    //  alert ("Image stautus \n::"+JSON.stringify(tempResponse));
                    if (tempResponse && tempResponse.b) {
                        if (tempResponse.b.Location) {
                            AppUtils.debugLog(`Image Uploaded Successfully \n::${tempResponse.b.Location}`);
                            showAlert(gblStrings.common.appName, `Image Uploaded Successfully \n::${tempResponse.b.Location}`, gblStrings.common.ok);

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
        AppUtils.debugLog("#TODO : onClickHeader");
    }

    goBack = () => {
        const { navigation} = this.props;
        const { goBack } = navigation;  
        goBack();
    }

    onClickCancel = () => {
        myInstance.setAccOpeningEditMode(false);
        const { navigation} = this.props;
        const { goBack } = navigation;  
        goBack('termsAndConditions');
    }

    onClickDownloadPDF = () => {
        AppUtils.debugLog("#TODO : Download");
    }

    onSelected = (item) => {
        AppUtils.debugLog(`item: ${item.id}`);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }

    onClickNext = () => {

        const { navigation} = this.props;
        const { navigate } = navigation;  
        if (this.validateFields()) {
            const payload = this.getPayload();
            //  this.props.saveData("OpenAccPageTwo", payload);
            const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAccData(payload);
            const screenState = {
                ...stateData,
                "openAccPageTwo": { ...this.state }
            };
            myInstance.setScreenStateData(screenState);
            navigate({ routeName: 'openAccPageThree', key: 'openAccPageThree' });
        }
    }

    getPayload = () => {
        const { navigation} = this.props;
        const { getParam } = navigation; 
        const accType = `${getParam('accType', '')}`;

        const { 
            nickname,
            personal,
            jointOwner,
            childBeneficiary,
            retirementBeneficiaryData,
            estate } = this.state;

        const individualAccPayload = {
            "personalInfo": {
                "prefix": personal.prefix || "",
                "firstName": personal.firstName || "",
                "lastName": personal.lastName || "",
                "suffix": personal.suffix || "",
                "dateOfBirth": personal.dob || "",
                "gender": personal.gender || "",
                "maritalStatus": personal.maritalStatus || "",
                "citizenship": personal.citizenship || "",
                "ssnTin": personal.socialSecurityNo || "",
                "mailingAddress": {
                    "addressType": personal.mailingAddressType || "",
                    "streetNbr": personal.addrLine1 || "",
                    "streetName": personal.addrLine2 || "",
                    "zip": personal.zipcode || "",
                    "city": personal.city || "",
                    "state": personal.stateCity || ""
                },
                "isPhysAddrSameAsMailAddr": personal.isYourPhysicalAddresSame || "",
                "physicalAddress": {
                    "addressType": personal.isYourPhysicalAddresSame ? personal.mailingAddressType || "" : personal.mailingAddressType,
                    "streetNbr": personal.isYourPhysicalAddresSame ? personal.addrLine1 || "" : personal.addrLine1_Phy,
                    "streetName": personal.isYourPhysicalAddresSame ? personal.addrLine2 || "" : personal.addrLine2_Phy,
                    "zip": personal.isYourPhysicalAddresSame ? personal.zipcode || "" : personal.zipcode_Phy,
                    "city": personal.isYourPhysicalAddresSame ? personal.city || "" : personal.city_Phy,
                    "state": personal.isYourPhysicalAddresSame ? personal.stateCity || "" : personal.stateCity_Phy,
                },
                "contactDetails": {
                    "phoneNumber1": {
                        "phoneNumber": personal.mobileNo || "",
                        "phoneType":personal.phoneType || "",
                        "contactDuring": personal.contactDuringMobNo || "Anytime"
                    },
                    "phoneNumber2": {
                        "phoneNumber": personal.telePhoneNo2 || "",
                        "phoneType":personal.phoneType2 || "",
                        "contactDuring": personal.contactDuringTelePhone2 || ""
                    },
                    "phoneNumber3": {
                        "phoneNumber": personal.telePhoneNo3 || "",
                        "phoneType":personal.phoneType3 || "",
                        "contactDuring": personal.contactDuringTelePhone3 || ""
                    },
                    "emailAddress": personal.emailAddress || ""
                }
            },
            "employementInfo": {
                "employmentStatus": personal.empStatus || "",
                "industry": personal.empIndustry || "",
                "occupation": personal.empOccupation || "",
                "employerName": personal.empName || "",
                "employerAddress": {
                    "addressLine1": personal.empAddrLine1 || "",
                    "addressLine2": personal.empAddrLine2 || "",
                    "city": personal.empCity || "",
                    "state": personal.empStateCity || "",
                    "zip": personal.empZipcode || "",
                }
            },
            "financialInfo": {
                "annualIncome": personal.annualIncome || "",
                "taxBracket": personal.taxBracket || "",
                "netWorth": personal.networth || "",
                "taxFilingStatus": personal.taxFilingStatus || "",
            },
            "militaryInfo": {
                "servingStatus": personal.isMilitaryHistory || "",
                "militaryStatus": personal.militaryStatus || "",
                "branchOfService": personal.branchOfService || "",
                "rank": personal.rank || "",
                "serviceStartDate": personal.fromDateMilitary || "",
                "serviceToDate": personal.toDateMilitary || "",
                "commissionSource": personal.commissionSource || "",
            },
            "regulatoryDetails": {
                "isPep": personal.isSeniorPoliticalFigure || "",
                "pepName": personal.seniorPoliticalName || "",
            }
        };

        const jointAccPayload = {
            "jointOwner": {
                "relation": jointOwner.relationshipToAcc || "",
                "personalInfo": {
                    "prefix": jointOwner.prefix || "",
                    "firstName": jointOwner.firstName || "",
                    "lastName": jointOwner.lastName || "",
                    "suffix": jointOwner.suffix || "",
                    "dateOfBirth": jointOwner.dob || "",
                    "gender": jointOwner.gender || "",
                    "maritalStatus": jointOwner.maritalStatus || "",
                    "citizenship": jointOwner.citizenship || "",
                    "ssnTin": jointOwner.socialSecurityNo || "",
                    "mailingAddress": {
                        "addressType": jointOwner.mailingAddressType || "",
                        "streetNbr": jointOwner.addrLine1 || "",
                        "streetName": jointOwner.addrLine2 || "",
                        "zip": jointOwner.zipcode || "",
                        "city": jointOwner.city || "",
                        "state": jointOwner.stateCity || ""
                    },
                    "isPhysAddrSameAsMailAddr": jointOwner.isYourPhysicalAddresSame || "",
                    "physicalAddress": {
                        "addressType": jointOwner.isYourPhysicalAddresSame ? jointOwner.mailingAddressType || "" : jointOwner.mailingAddressType,
                        "streetNbr": jointOwner.isYourPhysicalAddresSame ? jointOwner.addrLine1 || "" : jointOwner.addrLine1_Phy,
                        "streetName": jointOwner.isYourPhysicalAddresSame ? jointOwner.addrLine2 || "" : jointOwner.addrLine2_Phy,
                        "zip": jointOwner.isYourPhysicalAddresSame ? jointOwner.zipcode || "" : jointOwner.zipcode_Phy,
                        "city": jointOwner.isYourPhysicalAddresSame ? jointOwner.city || "" : jointOwner.city_Phy,
                        "state": jointOwner.isYourPhysicalAddresSame ? jointOwner.stateCity || "" : jointOwner.stateCity_Phy,
                    },
                    "contactDetails": {
                        "phoneNumber1": {
                            "phoneNumber": jointOwner.mobileNo || "",
                            "phoneType":jointOwner.phoneType || "",
                            "contactDuring": jointOwner.contactDuringMobNo || "Anytime"
                        },
                        "phoneNumber2": {
                            "phoneNumber": jointOwner.telePhoneNo2 || "",
                            "phoneType":jointOwner.phoneType2 || "",
                            "contactDuring": jointOwner.contactDuringTelePhone2 || ""
                        },
                        "phoneNumber3": {
                            "phoneNumber": jointOwner.telePhoneNo3 || "",
                            "phoneType":jointOwner.phoneType3 || "",
                            "contactDuring": jointOwner.contactDuringTelePhone3 || ""
                        },
                        "emailAddress": jointOwner.emailAddress || ""
                    }
                },
                "employementInfo": {
                    "employmentStatus": jointOwner.empStatus || "",
                    "industry": jointOwner.empIndustry || "",
                    "occupation": jointOwner.empOccupation || "",
                    "employerName": jointOwner.empName || "",
                    "employerAddress": {
                        "addressLine1": jointOwner.empAddrLine1 || "",
                        "addressLine2": jointOwner.empAddrLine2 || "",
                        "city": jointOwner.empCity || "",
                        "state": jointOwner.empStateCity || "",
                        "zip": jointOwner.empZipcode || "",
                    }
                },
                "financialInfo": {
                    "annualIncome": jointOwner.annualIncome || "",
                    "taxBracket": jointOwner.taxBracket || "",
                    "netWorth": jointOwner.networth || "",
                    "taxFilingStatus": jointOwner.taxFilingStatus || "",
                },
                "militaryInfo": {
                    "servingStatus": jointOwner.isMilitaryHistory || "",
                    "militaryStatus": jointOwner.militaryStatus || "",
                    "branchOfService": jointOwner.branchOfService || "",
                    "rank": jointOwner.rank || "",
                    "serviceStartDate": jointOwner.fromDateMilitary || "",
                    "serviceToDate": jointOwner.toDateMilitary || "",
                    "commissionSource": jointOwner.commissionSource || "",
                },
                "regulatoryDetails": {
                    "isPep": jointOwner.isSeniorPoliticalFigure || "",
                    "pepName": jointOwner.seniorPoliticalName || "",
                }
            }
        };

        const investChildPayload = {
            "beneficiaryInfo": {
                "childBeneficiary": {
                    "beneficiaryDetails": {
                        "firstName": childBeneficiary.firstName || "",
                        "middleInitial": childBeneficiary.middleInitial || "",
                        "lastName": childBeneficiary.lastName || "",
                        "ssnTin": childBeneficiary.socialSecurityNo || "",
                        "dateOfBirth": childBeneficiary.dob || "",
                        "relation": childBeneficiary.relationshipToAcc || "",
                    }
                }
            },
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
                     //  "beneficiary2Details,beneficiary3Details": ""
                 },
                 "secondBeneficiary": { //   #TODO
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

   

        const tempBeneficiaryDetails = [];
        for (let i = 0; i < retirementBeneficiaryData.length; i += 1) {
            const tempObj = {
                "type": retirementBeneficiaryData[i].beneficiaryType || "",
                "relation": retirementBeneficiaryData[i].relationshipToAcc || "",
                "distributionPercentage": retirementBeneficiaryData[i].beneficiaryDistPercent || "",
                "firstName": retirementBeneficiaryData[i].firstName || "",
                "middleInitial": retirementBeneficiaryData[i].middleInitial || "",
                "lastName": retirementBeneficiaryData[i].lastName || "",
                "ssnTin": retirementBeneficiaryData[i].socialSecurityNo || "",
                "dateOfBirth": retirementBeneficiaryData[i].dob || "",
                "emailAddress": retirementBeneficiaryData[i].emailAddress || "",
                "isPrimaryBeneficiary": "true"
            };
            tempBeneficiaryDetails.push(tempObj);
        }
        const retirementAccPayload = {
            "beneficiaryInfo": {
                "totalBeneficiary": "1",
                "beneficiaryDetails": tempBeneficiaryDetails
            }
        };

        const tempTrustAccPayload = {
            "estateInfo": {
                "name": estate.name || "",
                "creationDate": estate.creationDate || "",
                "ssnTin": estate.socialSecurityNo || "",
                "mailingAddress": {
                    "addressType": estate.mailingAddressType || "",
                    "streetNbr": estate.addrLine1 || "",
                    "streetName": estate.addrLine2 || "",
                    "zip": estate.zipcode || "",
                    "city": estate.city || "",
                    "state": estate.stateCity || ""
                },
                "isPhysAddrSameAsMailAddr": estate.isYourPhysicalAddresSame || "",
                "physicalAddress": {
                    "addressType": estate.isYourPhysicalAddresSame ? estate.mailingAddressType || "" : estate.mailingAddressType,
                    "streetNbr": estate.isYourPhysicalAddresSame ? estate.addrLine1 || "" : estate.addrLine1_Phy,
                    "streetName": estate.isYourPhysicalAddresSame ? estate.addrLine2 || "" : estate.addrLine2_Phy,
                    "zip": estate.isYourPhysicalAddresSame ? estate.zipcode || "" : estate.zipcode_Phy,
                    "city": estate.isYourPhysicalAddresSame ? estate.city || "" : estate.city_Phy,
                    "state": estate.isYourPhysicalAddresSame ? estate.stateCity || "" : estate.stateCity_Phy,
                },
                "isFederalLawApplicable":estate.isFederalLawApplicable || "",
                "specifyState":estate.specifyState || "",
                "orgCountry":estate.orgCountry || "",
                "isBusinessTrust":estate.isBusinessTrust || "",
                "isBrokerOrDealerTrust":estate.isBrokerOrDealerTrust || "",
                "brokerOrDealer":estate.brokerOrDealer || "",
                "isBankTrust":estate.isBankTrust || "",
                "isForeignUSBranchTrust":estate.isForeignUSBranchTrust || "",
                "businessTrust":estate.businessTrust || "",
                "isMoneyTranOrCurrencyExchangeOrgnaised":estate.isMoneyTranOrCurrencyExchangeOrgnaised || "",
                "isCorrespondentAccountsOffersProvided":estate.isCorrespondentAccountsOffersProvided || "",
                "typeOfFiniancialInstitution":estate.typeOfFiniancialInstitution || "",
                "VCMFundAccountNumbers":estate.VCMFundAccountNumbers || "",
                "isFinanacialInstitutionDescribed":estate.isFinanacialInstitutionDescribed || "",
                "finanacialInstitutionDesc":estate.finanacialInstitutionDesc || "",
                "isPhysicalPresenceMaintained":estate.isPhysicalPresenceMaintained || "",
                "isIndividualEmploymentThere":estate.isIndividualEmploymentThere || "",
                "isTrustMaintainRecords":estate.isTrustMaintainRecords || "",
                "isCorrespondentAccountsForeignOffersProvided":estate.isCorrespondentAccountsForeignOffersProvided || "",
                "bankTrustType":estate.bankTrustType || "",
            },
            "trusteeInfo":{
                "firstName":estate.trusteeData[0].firstName || "",
                "middleInitial": estate.trusteeData[0].middleInitial || "",
                "lastName": estate.trusteeData[0].lastName || "",
                "suffix": estate.trusteeData[0].suffix || "",
                "dateOfBirth":estate.trusteeData[0].dob || "",
                "gender": estate.trusteeData[0].gender || "",
                "maritalStatus": estate.trusteeData[0].maritalStatus || "",

                "mailingAddress": {
                    "addressType": estate.trusteeData[0].mailingAddressType || "",
                    "streetNbr": estate.trusteeData[0].addrLine1 || "",
                    "streetName": estate.trusteeData[0].addrLine2 || "",
                    "zip": estate.trusteeData[0].zipcode || "",
                    "city": estate.trusteeData[0].city || "",
                    "state": estate.trusteeData[0].stateCity || ""
                },
                "isPhysAddrSameAsMailAddr": estate.trusteeData[0].isYourPhysicalAddresSame || "",
                "physicalAddress": {
                    "addressType": estate.trusteeData[0].isYourPhysicalAddresSame ? estate.trusteeData[0].mailingAddressType || "" : estate.trusteeData[0].mailingAddressType,
                    "streetNbr": estate.trusteeData[0].isYourPhysicalAddresSame ? estate.trusteeData[0].addrLine1 || "" : estate.trusteeData[0].addrLine1_Phy,
                    "streetName": estate.trusteeData[0].isYourPhysicalAddresSame ? estate.trusteeData[0].addrLine2 || "" : estate.trusteeData[0].addrLine2_Phy,
                    "zip": estate.trusteeData[0].isYourPhysicalAddresSame ? estate.trusteeData[0].zipcode || "" : estate.trusteeData[0].zipcode_Phy,
                    "city": estate.trusteeData[0].isYourPhysicalAddresSame ? estate.trusteeData[0].city || "" : estate.trusteeData[0].city_Phy,
                    "state": estate.trusteeData[0].isYourPhysicalAddresSame ? estate.trusteeData[0].stateCity || "" : estate.trusteeData[0].stateCity_Phy,
                },

                "mobileNo": estate.trusteeData[0].mobileNo || "",
                "memberPhoneNo": estate.trusteeData[0].memberPhoneNo || "",
                "busniessPhoneNo": estate.trusteeData[0].busniessPhoneNo || "",
                "residencePhoneNo":estate.trusteeData[0].residencePhoneNo || "",
                "emailAddress": estate.trusteeData[0].emailAddress || "",
                "memberNumber": estate.trusteeData[0].memberNumber || "",
                "ssnTin": estate.trusteeData[0].socialSecurityNo || ""
            },
        };

       
        
    


        let trustAccPayload = {};
        if(estate.trusteeData.length>1){
            const coTrusteePayload = {
                "coTrusteeInfo": {
                    "firstName": estate.trusteeData[1].firstName || "",
                    "middleInitial": estate.trusteeData[1].middleInitial || "",
                    "lastName": estate.trusteeData[1].lastName || "",
                    "suffix": estate.trusteeData[1].suffix || "",
                    "dob": estate.trusteeData[1].dob || "",
                    "gender": estate.trusteeData[1].gender || "",
                    "maritalStatus": estate.trusteeData[1].maritalStatus || "",
    
                    "mailingAddress": {
                        "addressType": estate.trusteeData[1].mailingAddressType || "",
                        "streetNbr": estate.trusteeData[1].addrLine1 || "",
                        "streetName": estate.trusteeData[1].addrLine2 || "",
                        "zip": estate.trusteeData[1].zipcode || "",
                        "city": estate.trusteeData[1].city || "",
                        "state": estate.trusteeData[1].stateCity || ""
                    },
                    "isPhysAddrSameAsMailAddr": estate.trusteeData[1].isYourPhysicalAddresSame || "",
                    "physicalAddress": {
                        "addressType": estate.trusteeData[1].isYourPhysicalAddresSame ? estate.trusteeData[1].mailingAddressType || "" : estate.trusteeData[1].mailingAddressType,
                        "streetNbr": estate.trusteeData[1].isYourPhysicalAddresSame ? estate.trusteeData[1].addrLine1 || "" : estate.trusteeData[1].addrLine1_Phy,
                        "streetName": estate.trusteeData[1].isYourPhysicalAddresSame ? estate.trusteeData[1].addrLine2 || "" : estate.trusteeData[1].addrLine2_Phy,
                        "zip": estate.trusteeData[1].isYourPhysicalAddresSame ? estate.trusteeData[1].zipcode || "" : estate.trusteeData[1].zipcode_Phy,
                        "city": estate.trusteeData[1].isYourPhysicalAddresSame ? estate.trusteeData[1].city || "" : estate.trusteeData[1].city_Phy,
                        "state": estate.trusteeData[1].isYourPhysicalAddresSame ? estate.trusteeData[1].stateCity || "" : estate.trusteeData[1].stateCity_Phy,
                    },
    
                    "mobileNo": estate.trusteeData[1].mobileNo || "",
                    "memberPhoneNo": estate.trusteeData[1].memberPhoneNo || "",
                    "busniessPhoneNo": estate.trusteeData[1].busniessPhoneNo || "",
                    "residencePhoneNo": estate.trusteeData[1].residencePhoneNo || "",
                    "emailAddress": estate.trusteeData[1].emailAddress || "",
                    "memberNumber": estate.trusteeData[1].memberNumber || "",
                    "ssnTin": estate.trusteeData[1].socialSecurityNo || ""
                }
            };
    
            trustAccPayload = {...tempTrustAccPayload,coTrusteePayload};
        }else{
            trustAccPayload = {...tempTrustAccPayload};
        }

        let payload = {};
        const savedAccData = myInstance.getSavedAccData();
        payload = {
            ...savedAccData,
            "accountNickName": nickname || "",
            "regType":accType||""
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
                    ...individualAccPayload,
                    ...investChildPayload

                };
                break;
            case "Trust Account":
            case "Estate Account":

                payload = {
                    ...payload,
                    ...trustAccPayload

                };
                break;
            default:
                break;
        };
        AppUtils.debugLog(`payload:: ${JSON.stringify(payload)}`);


        return payload;
    }

   

    onClickSave = () => {

        const { saveAccountOpening} = this.props;
        AppUtils.debugLog("onClickSave::::> ");
        if (this.validateFields()) {
            const payload = this.getPayload();
            saveAccountOpening("OpenAccPageTwo", payload);
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
            //  AppUtils.debugLog('Response = ', response);
            const { uploadAavatarImg} = this.props;

            if (response.didCancel) {
                AppUtils.debugLog('User cancelled image picker');
            } else if (response.error) {
                AppUtils.debugLog('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                AppUtils.debugLog('User tapped custom button: ', response.customButton);
            } else {
                AppUtils.debugLog('IMAGE PICKER SUCCESS::> ');

                const source = { uri: response.uri };
                const base64source = { uri: `data:image/jpeg;base64,${response.data}` };
                AppUtils.debugLog("base64source", base64source.length);
                this.setState({
                    userAvatar: source
                });
                if (response.data && response.data !== null && response.data !== undefined && response.data.length > 0) {
                    const payload = {
                        "Body": `${response.data}`
                    };
                    uploadAavatarImg(payload);
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
            //  AppUtils.debugLog('Response = ', response);
            if (response.didCancel) {
                AppUtils.debugLog('User cancelled image picker');
            } else if (response.error) {
                AppUtils.debugLog('ImagePicker Error: ', response.error);
                showAlert(gblStrings.common.appName ,response.error,"OK");
                AppUtils.debugLog(response.error); 

            } else if (response.customButton) {
                AppUtils.debugLog('User tapped custom button: ', response.customButton);
                showAlert(gblStrings.common.appName ,response.error,"OK");
                AppUtils.debugLog(response.customButton); 
            } else {
                //  const source = { uri: response.uri };
                //  AppUtils.debugLog('response', JSON.stringify(response));
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
        AppUtils.debugLog(`onSubmitZipEditing:::>${nextInputFocus} ${text}`);

        const {getStateCity,getAddressFormat} = this.props;
        const { currentZipCodeRef } = this.state;
        

        const newItems = { ...currentZipCodeRef };
        //   const newItems = { ...this.state.currentZipCodeRef };

        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = -1;

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


        getStateCity(payload);
        getAddressFormat(addressPayload);



        //  nextInputFocus.focus();
    }

    onSubmitEmpZipEditing = (stateKey, keyName, nextInputFocus) => text => {
        AppUtils.debugLog(`onSubmitEmpZipEditing:::>${nextInputFocus} ${text}`);

        const { currentZipCodeRef} = this.state;
        const newItems = { ...currentZipCodeRef };
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = -1;

        //  alert("onSubmitEmpZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

        //  nextInputFocus.focus();
    }

    onSubmitZipTrusteeEditing = (stateKey, keyName, nextInputFocus,objIndex) => text => {
        AppUtils.debugLog(`onSubmitZipTrusteeEditing:::>${nextInputFocus} ${text}`);

        const { currentZipCodeRef,estate} = this.state;
        const {getStateCity,getAddressFormat} = this.props;

        const newItems = { ...currentZipCodeRef };
        //   const newItems = { ...this.state.currentZipCodeRef };

        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = objIndex;
        //  alert("onSubmitZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

        const newTrusteeItmes = [...estate.trusteeData];
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


        getStateCity(payload);
        getAddressFormat(addressPayload);



        //  nextInputFocus.focus();
    }

    onSubmitEditing = (input) => text => {

        AppUtils.debugLog(`onSubmitEditing:::>${text}`);

        input.focus();
    }

    onChangeDate = (stateKey, keyName) => dateStr => {
        AppUtils.debugLog("onChangeDate:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: dateStr,
                [`${keyName}Validation`]: true,

            }
        }));
    }

    onChangeSpiltDate = (stateKey, keyName, index) => dateStr => {
        AppUtils.debugLog(`onChangeSpiltDate:::>${index} ${dateStr}`);
        const tempCurrentDate = `${this.state[stateKey][keyName]}`;

        const tempCurrentDateComp = tempCurrentDate !== "" ? tempCurrentDate.split('-') : [];

        let returnDate = "";
        if (tempCurrentDateComp.length > 2) {
            tempCurrentDateComp[index] = dateStr;
        } else {
            AppUtils.debugLog(`index:::>${index}`);

            switch (index) {

                case 0:
                    AppUtils.debugLog(`0:::>${index}`);

                    tempCurrentDateComp[index] = dateStr;
                    tempCurrentDateComp[1] = "";
                    tempCurrentDateComp[2] = "";

                    break;
                case 1:
                    AppUtils.debugLog(`2:::>${index}`);

                    tempCurrentDateComp[0] = "";
                    tempCurrentDateComp[index] = dateStr;
                    tempCurrentDateComp[2] = "";
                    break;
                case 2:
                    AppUtils.debugLog(`3:::>${index}`);

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
        AppUtils.debugLog("onChangeText:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: text,
                [`${keyName}Validation`]: true,
            }
        }));
       
    }

    onChangeNickName = () => text => {
        AppUtils.debugLog("onChangeNickName:::>");
        this.setState({ nickname: text });
    }

    onPressRadio = (stateKey, keyName, text) => () => {
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: text,
                [`${keyName}Validation`]: true,
            }
        }));
    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }


    /* ------- Validations methods --------*/

    validateIndividualAccInfoFields = () => {

       
        const { personal } = this.state;

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

        if (this.isEmpty(personal.firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
        } else if (this.isEmpty(personal.lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
        } else if (this.isEmpty(personal.dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
        } else if (this.isEmpty(personal.gender)) {
            errMsg = gblStrings.accManagement.emptyGenderMsg;
            input = 'gender';
        } else if (this.isEmpty(personal.maritalStatus)) {
            errMsg = gblStrings.accManagement.emptyMaritalMsg;
            input = 'maritalStatus';
        } else if (this.isEmpty(personal.citizenship)) {
            errMsg = gblStrings.accManagement.emptyCitizenshipMsg;
            input = 'citizenship';

        } else if (personal.citizenship !== "U.S" && this.isEmpty(personal.residenceStatus)) {
            errMsg = gblStrings.accManagement.emptyResidenceStatusMsg;
            input = 'residenceStatus';
        } else if (personal.citizenship !== "U.S" && this.isEmpty(personal.countryOfCitizenship)) {
            errMsg = gblStrings.accManagement.emptyCountryOfCitizenshipMsg;
            input = 'countryOfCitizenship';
        } else if (personal.citizenship !== "U.S" && this.isEmpty(personal.USResidentCardNo)) {
            errMsg = gblStrings.accManagement.emptyUSResidentCardNoMsg;
            input = 'USResidentCardNo';
        } else if (personal.citizenship !== "U.S" && this.isEmpty(personal.USResidentCardNoExpiryDate)) {
            errMsg = gblStrings.accManagement.emptyUSResidentCardNoExpiryDateMsg;
            input = 'USResidentCardNoExpiryDate';
        } else if (personal.citizenship !== "U.S" && this.isEmpty(personal.passportNumber)) {
            errMsg = gblStrings.accManagement.emptyPassportNumberMsg;
            input = 'passportNumber';
        } else if (personal.citizenship !== "U.S" && this.isEmpty(personal.passportNoExpiryDate)) {
            errMsg = gblStrings.accManagement.emptyPassportNoExpiryDateMsg;
            input = 'passportNoExpiryDate';
        }else if (this.isEmpty(personal.mailingAddressType)) {
            errMsg = gblStrings.accManagement.emptyAddressTypeMsg;
            input = 'mailingAddressType';
        } else if (this.isEmpty(personal.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
        } else if (this.isEmpty(personal.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
        } else if (this.isEmpty(personal.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
        } else if (personal.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
        } else if (this.isEmpty(personal.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
        } else if (this.isEmpty(personal.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
        } else if (this.isEmpty(personal.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
            input = 'isYourPhysicalAddresSame';
        } else if (personal.isYourPhysicalAddresSame === "No" && this.isEmpty(personal.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
        } else if (personal.isYourPhysicalAddresSame === "No" && this.isEmpty(personal.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
        } else if (personal.isYourPhysicalAddresSame === "No" && this.isEmpty(personal.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (personal.isYourPhysicalAddresSame === "No" && personal.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (personal.isYourPhysicalAddresSame === "No" && this.isEmpty(personal.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
        } else if (personal.isYourPhysicalAddresSame === "No" && this.isEmpty(personal.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity_Phy';
        } else if (this.isEmpty(personal.phoneType)) {
            errMsg = gblStrings.accManagement.emptyPhonetypeMsg;
            input = 'phoneType';
        } else if (this.isEmpty(personal.mobileNo)) {
            errMsg = gblStrings.accManagement.emptyMobileNoMsg;
            input = 'mobileNo';
        } else if (personal.mobileNo.length < gblStrings.maxLength.mobileNo && personal.phoneType === "Mobile") {
            errMsg = gblStrings.accManagement.invalidMobileNoMsg;
            input = 'mobileNo';
        } else if (personal.mobileNo.length < gblStrings.maxLength.phoneNo && personal.phoneType === "Home") {
            errMsg = gblStrings.accManagement.invalidPhoneNoMsg;
            input = 'mobileNo';
        } else if (personal.mobileNo.length < gblStrings.maxLength.workPhone && personal.phoneType === "Work") {
            errMsg = gblStrings.accManagement.invalidWorkPhoneNoMsg;
            input = 'mobileNo';
        } else if (this.isEmpty(personal.emailAddress)) {
            errMsg = gblStrings.accManagement.emptyEmailAddressMsg;
            input = 'emailAddress';
        } else if (!emailRegex.test(personal.emailAddress)) {
            errMsg = gblStrings.accManagement.invalidEmailMasg;
            input = 'emailAddress';
        } else if (this.isEmpty(personal.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = 'socialSecurityNo';
        } else if (personal.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(personal.empStatus)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusMsg;
            input = 'empStatus';
        } else if (personal.empStatus === "Others" && this.isEmpty(personal.empStatusForOther)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusOthersMsg;
            input = 'empStatusForOther';
        } else if (this.isEmpty(personal.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
            input = 'isMilitaryHistory';
        } else if (this.isEmpty(personal.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (personal.isSeniorPoliticalFigure === "Yes" && this.isEmpty(personal.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            AppUtils.debugLog(`Personal Info errMsg:: ${errMsg}`);

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
            //  alert(errMsg);
        }

        return isValidationSuccess;
    }

    validateJointAccInfoFields = () => {
        const { jointOwner } = this.state;

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

        if (this.isEmpty(jointOwner.relationshipToAcc)) {
            errMsg = gblStrings.accManagement.emptyRelationToAccMsg;
            input = 'relationshipToAcc';
        } else if (this.isEmpty(jointOwner.firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
        } else if (this.isEmpty(jointOwner.lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
        } else if (this.isEmpty(jointOwner.dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
        } else if (this.isEmpty(jointOwner.gender)) {
            errMsg = gblStrings.accManagement.emptyGenderMsg;
            input = 'gender';
        } else if (this.isEmpty(jointOwner.maritalStatus)) {
            errMsg = gblStrings.accManagement.emptyMaritalMsg;
            input = 'maritalStatus';
        } else if (this.isEmpty(jointOwner.citizenship)) {
            errMsg = gblStrings.accManagement.emptyCitizenshipMsg;
        } else if (jointOwner.citizenship !== "U.S" && this.isEmpty(jointOwner.residenceStatus)) {
            errMsg = gblStrings.accManagement.emptyResidenceStatusMsg;
            input = 'residenceStatus';
        } else if (jointOwner.citizenship !== "U.S" && this.isEmpty(jointOwner.countryOfCitizenship)) {
            errMsg = gblStrings.accManagement.emptyCountryOfCitizenshipMsg;
            input = 'countryOfCitizenship';
        } else if (jointOwner.citizenship !== "U.S" && this.isEmpty(jointOwner.USResidentCardNo)) {
            errMsg = gblStrings.accManagement.emptyUSResidentCardNoMsg;
            input = 'USResidentCardNo';
        } else if (jointOwner.citizenship !== "U.S" && this.isEmpty(jointOwner.USResidentCardNoExpiryDate)) {
            errMsg = gblStrings.accManagement.emptyUSResidentCardNoExpiryDateMsg;
            input = 'USResidentCardNoExpiryDate';
        } else if (jointOwner.citizenship !== "U.S" && this.isEmpty(jointOwner.passportNumber)) {
            errMsg = gblStrings.accManagement.emptyPassportNumberMsg;
            input = 'passportNumber';
        } else if (jointOwner.citizenship !== "U.S" && this.isEmpty(jointOwner.passportNoExpiryDate)) {
            errMsg = gblStrings.accManagement.emptyPassportNoExpiryDateMsg;
            input = 'passportNoExpiryDate';
        } else if (this.isEmpty(jointOwner.mailingAddressType)) {
            errMsg = gblStrings.accManagement.emptyAddressTypeMsg;
            input = 'mailingAddressType';
        } else if (this.isEmpty(jointOwner.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
        } else if (this.isEmpty(jointOwner.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
        } else if (this.isEmpty(jointOwner.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
        } else if (jointOwner.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
        } else if (this.isEmpty(jointOwner.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
        } else if (this.isEmpty(jointOwner.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
        } else if (this.isEmpty(jointOwner.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
            input = 'isYourPhysicalAddresSame';
        } else if (jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(jointOwner.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
        } else if (jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(jointOwner.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
        } else if (jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(jointOwner.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (jointOwner.isYourPhysicalAddresSame === "No" && jointOwner.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
        } else if (jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(jointOwner.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
        } else if (jointOwner.isYourPhysicalAddresSame === "No" && this.isEmpty(jointOwner.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
        } else if (this.isEmpty(jointOwner.phoneType)) {
            errMsg = gblStrings.accManagement.emptyPhonetypeMsg;
            input = 'phoneType';
        } else if (this.isEmpty(jointOwner.mobileNo)) {
            errMsg = gblStrings.accManagement.emptyMobileNoMsg;
            input = 'mobileNo';
        } else if (jointOwner.mobileNo.length < gblStrings.maxLength.mobileNo && jointOwner.phoneType === "Mobile") {
            errMsg = gblStrings.accManagement.invalidMobileNoMsg;
            input = 'mobileNo';
        } else if (jointOwner.mobileNo.length < gblStrings.maxLength.phoneNo && jointOwner.phoneType === "Home") {
            errMsg = gblStrings.accManagement.invalidPhoneNoMsg;
            input = 'mobileNo';
        } else if (jointOwner.mobileNo.length < gblStrings.maxLength.workPhone && jointOwner.phoneType === "Work") {
            errMsg = gblStrings.accManagement.invalidWorkPhoneNoMsg;
            input = 'mobileNo';
        } else if (this.isEmpty(jointOwner.emailAddress)) {
            errMsg = gblStrings.accManagement.emptyEmailAddressMsg;
            input = 'emailAddress';
        } else if (!emailRegex.test(jointOwner.emailAddress)) {
            errMsg = gblStrings.accManagement.invalidEmailMasg;
            input = 'emailAddress';
        } else if (this.isEmpty(jointOwner.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = 'socialSecurityNo';
        } else if (jointOwner.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(jointOwner.empStatus)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusMsg;
            input = 'empStatus';
        } else if (jointOwner.empStatus === "Others" && this.isEmpty(jointOwner.empStatusForOther)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusOthersMsg;
            input = 'empStatusForOther';
        } else if (this.isEmpty(jointOwner.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
            input = 'isMilitaryHistory';
        } else if (this.isEmpty(jointOwner.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (jointOwner.isSeniorPoliticalFigure === "Yes" && this.isEmpty(jointOwner.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            AppUtils.debugLog(`JointOwner Info errMsg:: ${errMsg}`);

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
            //  alert(errMsg);
        }

        return isValidationSuccess;
    }

    validateChildBeneficiaryInfoFields = () => {
        const { childBeneficiary } = this.state;

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";
        //  var employmentInfoVisible = false;


        /*
        if (this.isEmpty(childBeneficiary.vcmNo)) {
            errMsg = gblStrings.accManagement.emptyVCMNoMsg;
            input = 'vcmNo';
        } else
         */

        if (this.isEmpty(childBeneficiary.firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
        } else if (this.isEmpty(childBeneficiary.lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
        } else if (this.isEmpty(childBeneficiary.dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
        } else if (this.isEmpty(childBeneficiary.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = 'socialSecurityNo';
        } else if (childBeneficiary.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
        } else if (this.isEmpty(childBeneficiary.relationshipToAcc)) {
            errMsg = gblStrings.accManagement.emptyRelationShipMsg;
            input = 'empStatus';
        } else if (this.isEmpty(childBeneficiary.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (childBeneficiary.isSeniorPoliticalFigure === "Yes" && this.isEmpty(childBeneficiary.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            AppUtils.debugLog(`childBeneficiary Info errMsg:: ${errMsg}`);

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
            //  alert(errMsg);
        }

        return isValidationSuccess;
    }

    validateIRABeneficiaryInfoFields = () => {
        const { retirementBeneficiaryData } = this.state;

        let errMsg = "";
        let isValidationSuccess = false;
        let errMsgCount = 0;
        const input = "";

        if (retirementBeneficiaryData.length > 0) {
            let inputField = "";

            for (let i = 0; i < retirementBeneficiaryData.length; i += 1) {
                let tempErrMsg = "";
                const tempObj = retirementBeneficiaryData[i];
                AppUtils.debugLog(`tempObj::${JSON.stringify(tempObj)}`);


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

                AppUtils.debugLog(`tempErrMsg: ${tempErrMsg}`);

                if (!tempValidation) {
                    errMsg = tempErrMsg;
                    errMsgCount += 1;
                    const newItems = [...retirementBeneficiaryData];
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
            //  alert(errMsg);
        }



        return isValidationSuccess;

    }

    validateEstateTrustInfoFields = () => {
        AppUtils.debugLog(`validateEstateTrustInfoFields:::`);
        const { navigation} = this.props;
        const { getParam } = navigation; 
        const accType = `${getParam('accType', '')}`;

        const { estate } = this.state;
        
     
        let errMsg = "";
        let isValidationSuccess = false;
        let errMsgCount = 0;
        let input = "";

        if (this.isEmpty(estate.name)) {
            errMsg = accType === "Trust Account" ? gblStrings.accManagement.emptyEstateNameMsg :gblStrings.accManagement.emptyTrustNameMsg ;
            input = "name";
            errMsgCount +=1;

        } else if (this.isEmpty(estate.creationDate)) {
            errMsg = gblStrings.accManagement.emptyCreationDateMsg;
            input = "creationDate";
            errMsgCount +=1;

        } else if (this.isEmpty(estate.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = "socialSecurityNo";
            errMsgCount +=1;

        }else if (this.isEmpty(estate.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
            errMsgCount +=1;

        } else if (this.isEmpty(estate.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
            errMsgCount +=1;

        } else if (this.isEmpty(estate.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
            errMsgCount +=1;

        } else if (estate.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
            errMsgCount +=1;

        } else if (this.isEmpty(estate.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
            errMsgCount +=1;

        } else if (this.isEmpty(estate.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
            errMsgCount +=1;

        } else if (this.isEmpty(estate.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
            input = 'isYourPhysicalAddresSame';
            errMsgCount +=1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
            errMsgCount +=1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
            errMsgCount +=1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
            errMsgCount +=1;

        } else if (estate.isYourPhysicalAddresSame === "No" && estate.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
            errMsgCount +=1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
            errMsgCount +=1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity_Phy';
            errMsgCount +=1;

        }else if(accType === "Trust Account" && this.isEmpty(estate.specifyState)){
            errMsg = gblStrings.accManagement.emptySpecifyStateMsg;
            input = "specifyState";
            errMsgCount +=1;
        } else if (this.isEmpty(estate.orgCountry)) {
            errMsg = gblStrings.accManagement.emptyOrganisationCountryMsg;
            input = 'orgCountry';
            errMsgCount +=1;

        } else if(accType === "Trust Account" && this.isEmpty(estate.isBusinessTrust)){
            errMsg = gblStrings.accManagement.emptyBusinessTrustCondMsg;
            input = "isBusinessTrust";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isBrokerOrDealerTrust)){
            errMsg = gblStrings.accManagement.emptyBrokerOrDealerTrustMsg;
            input = "isBrokerOrDealerTrust";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.brokerOrDealer)){
            errMsg = gblStrings.accManagement.emptyBrokerOrDealerMsg;
            input = "brokerOrDealer";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isBankTrust)){
            errMsg = gblStrings.accManagement.emptyBankTrustMsg;
            input = "isBankTrust";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.bankTrustType)){
            errMsg = gblStrings.accManagement.emptyBankTrustTypeMsg;
            input = "bankTrustType";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isForeignUSBranchTrust)){
            errMsg = gblStrings.accManagement.emptyForeignUSBranchTrustMsg;
            input = "isForeignUSBranchTrust";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.businessTrust)){
            errMsg = gblStrings.accManagement.emptyBusinessTrustMsg;
            input = "businessTrust";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isMoneyTranOrCurrencyExchangeOrgnaised)){
            errMsg = gblStrings.accManagement.emptyMoneyTranOrCurrencyExchangeOrgnaisedMsg;
            input = "isMoneyTranOrCurrencyExchangeOrgnaised";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isCorrespondentAccountsOffersProvided)){
            errMsg = gblStrings.accManagement.emptyCorrespondentAccountsOffersProvidedMsg;
            input = "isCorrespondentAccountsOffersProvided";
            errMsgCount +=1;
        }else if(accType === "Trust Account" && this.isEmpty(estate.typeOfFiniancialInstitution)){
            errMsg = gblStrings.accManagement.emptyTypeOfFiniancialInstitutionMsg;
            input = "typeOfFiniancialInstitution";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isCorrespondentAccountsForeignOffersProvided)){
            errMsg = gblStrings.accManagement.emptyCorrespondentAccountsForeignOffersProvidedMsg;
            input = "isCorrespondentAccountsForeignOffersProvided";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.VCMFundAccountNumbers)){
            errMsg = gblStrings.accManagement.emptyVCMFundAccountNumbersMsg;
            input = "VCMFundAccountNumbers";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isFinanacialInstitutionDescribed)){
            errMsg = gblStrings.accManagement.emptyFinanacialInstitutionDescribedMsg;
            input = "isFinanacialInstitutionDescribed";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.finanacialInstitutionDesc)){
            errMsg = gblStrings.accManagement.emptyFinanacialInstitutionDescMsg;
            input = "finanacialInstitutionDesc";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isPhysicalPresenceMaintained)){
            errMsg = gblStrings.accManagement.emptyPhysicalPresenceMaintainedMsg;
            input = "isPhysicalPresenceMaintained";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isIndividualEmploymentThere)){
            errMsg = gblStrings.accManagement.emptyIndividualEmploymentThereMsg;
            input = "isIndividualEmploymentThere";
            errMsgCount +=1;
        } else if(accType === "Trust Account" && this.isEmpty(estate.isTrustMaintainRecords)){
            errMsg = gblStrings.accManagement.emptyTrustMaintainRecordsMsg;
            input = "isTrustMaintainRecords";
            errMsgCount +=1;
        } else if (estate.trusteeData.length > 0) {
            let inputField = "";
            

            for (let i = 0; i < estate.trusteeData.length; i+=1) {
                let tempErrMsg = "";
                const tempObj = estate.trusteeData[i];
                AppUtils.debugLog(`tempObj::${ JSON.stringify(tempObj)}`);
                

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
                } else {
                    tempValidation = true;
                }

                AppUtils.debugLog(`tempErrMsg: ${ tempErrMsg}`);

                if (!tempValidation) {
                    errMsg = tempErrMsg;
                    errMsgCount +=1;
                    const newItems = [...estate.trusteeData];
                    newItems[i][`${inputField }Validation`] = false;
               
                    this.setState(prevState => ({
                        estate: {
                            ...prevState.estate,
                            trusteeData:newItems
                        },
                        isValidationSuccess,
                        errMsg: isValidationSuccess === false ? errMsg : ""
                    }));

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



        AppUtils.debugLog(`errMsg:::${errMsg}`);
        if (!isValidationSuccess) {


            this.setState(prevState => ({
                estate: {
                    ...prevState.estate,
                    [`${input }Validation`]: false
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
           alert(errMsg);
        }



        return isValidationSuccess;

    }



    validateFields = () => {
       //  return this.props.navigation.navigate({ routeName: 'openAccPageThree', key: 'openAccPageThree' });
        let isValidationSuccess = false;
        const { navigation} = this.props;
        const { getParam } = navigation; 
        const accType = `${getParam('accType', '')}`;

        try {


            AppUtils.debugLog(`validateFields::: ${accType}`);
         
            if ((accType === "Estate Account" || accType === "Trust Account") && !this.validateEstateTrustInfoFields()) {
                isValidationSuccess = false;
            }else if(accType !== "Estate Account" && accType !== "Trust Account"){
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
            AppUtils.debugLog(`Error:::${JSON.stringify(err)}`);
        }
        return isValidationSuccess;


    }

    /* ------- Custom render methods --------*/

    generateKeyExtractor = (item) => item.key;


    renderRadio = (sectionName, radioName, radioSize, componentStyle, layoutStyle) => {
        AppUtils.debugLog(`renderRadio::: ${radioName}`);
        let tempkey = "";//  "title";
        let radioData = dummyData;
        const { masterLookupStateData} = this.props;

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

        AppUtils.debugLog(`tempkey::${tempkey}`);

        if (this.props && masterLookupStateData && masterLookupStateData[tempkey] && masterLookupStateData[tempkey].value) {
            AppUtils.debugLog(`tempkey inside::${tempkey}`);
            radioData = masterLookupStateData[tempkey].value;
        } else {
            AppUtils.debugLog(`tempkey not there::${tempkey}`);

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

    renderYesNoRadio = (sectionName, radioName) => {
        AppUtils.debugLog(`renderYesNoRadio::: ${radioName}`);
        const { errMsg } = this.state;
        return (
            <>
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
                        selected={!!((this.state[sectionName][radioName] !== null && this.state[sectionName][radioName] === "Yes"))}
                        onPress={this.onPressRadio(sectionName, radioName, "Yes")}
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
                        selected={!!((this.state[sectionName][radioName] !== null && this.state[sectionName][radioName] === "No"))}
                        onPress={this.onPressRadio(sectionName, radioName, "No")}

                    />
                </View>
                {!this.state[sectionName][`${radioName}Validation`] && (
                    <Text style={styles.errMsg}>
                        {errMsg}
                    </Text>
                  )}
            </>
        );


    }

    renderRadioForEstateTrust = (radioName, radioSize, componentStyle, layoutStyle, objIndex) => {
        AppUtils.debugLog(`renderRadioForEstateTrust::: ${radioName}`);
        const { estate } = this.state;
        const { masterLookupStateData } = this.props;

        const newItems = [...estate.trusteeData];

        let tempkey = "";//  "title";
        let radioData = dummyData;
        switch (radioName) {
            case "citizenship":
                tempkey = "citizenship";
                break;
            default:
                break;

        }

        AppUtils.debugLog(`tempkey::${tempkey}`);

        if (this.props && masterLookupStateData && masterLookupStateData[tempkey] && masterLookupStateData[tempkey].value) {
            AppUtils.debugLog(`tempkey inside::${tempkey}`);
            radioData = masterLookupStateData[tempkey].value;
        } else {
            AppUtils.debugLog(`tempkey not there::${tempkey}`);

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
                    onPress={this.onPressRadioForEstateTrust(radioName, objIndex, radioData[i].value)}

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
        AppUtils.debugLog(`renderCalender::: ${calendarName}`);
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
        AppUtils.debugLog(`renderSplitCalender::: ${ calendarName}`);

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
        const { masterLookupStateData} = this.props;
        const { errMsg} = this.state;

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
                break;

            case "rankDropDown_IRA":
            case "rankDropDown_childben":
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
            case "countryOfCitizenshipDropDown":
                tempkey = "";
                break;
            default:
                break;

        }

        if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[tempkey] && masterLookupStateData[tempkey].value) {
            dropDownData = masterLookupStateData[tempkey].value;
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
                //  pickerStyle={styles.textInputStyle}
                dropDownName={lblDropdownName}
                data={dropDownData}
                dropDownValue={this.state[section][stateKey]}
                //  showDropDown={this.state[section][dropDownName]}
                //  changeState={(stateKey !== "taxBracket") ? this.onPressDropDown(section, dropDownName) : null}
                selectedDropDownValue={this.onSelectedDropDownValue(section, stateKey, dropDownName)}
                //  itemToDisplay="value"
                dropDownPostition={styles.dropDownPostition}
                errorFlag={isOptional ? false : validationKeyValue}
                errorText={errMsg}
                isOptional={isOptional}
                disabled={stateKey === "taxBracket"}
            />
        );

    }

    onSelectedDropDownValue = (section, stateKey, dropDownName) => (value, index, data) => {
        AppUtils.debugLog("onSelectedDropDownValue:");
        const { masterLookupStateData,getRankData} = this.props;
        const item = data[index];
        const tempRankKey = `mil_rank_${item.key}`;
        let payload = "";

        if (dropDownName === "branchOfServiceDropDown") {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[section],
                    [stateKey]: item.value,
                    [dropDownName]: false,
                    rankKey: tempRankKey,
                    [`${stateKey}Validation`]: true,

                }
            }));

            if (this.props && masterLookupStateData && !masterLookupStateData[tempRankKey]) {
                payload = tempRankKey;
                getRankData(payload);
            }

        } else if (dropDownName === "annualIncomeDropDown") {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[section],
                    [stateKey]: item.value,
                    [dropDownName]: false,
                    taxBracket: item.taxbracket,
                    [`${stateKey}Validation`]: true,

                }
            }));

        } else {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[section],
                    [stateKey]: item.value,
                    [dropDownName]: false,
                    [`${stateKey}Validation`]: true,

                }
            }));
        }

    }

    onSelectedIRABeneficiaryDropDownValue = (dropDownName, objIndex) => (value, index, data) => {
        AppUtils.debugLog(`onSelectedIRABeneficiaryDropDownValue:: ${dropDownName}`);
        const {retirementBeneficiaryData} = this.state;
        const newItems = [...retirementBeneficiaryData];
        const item = data[index];

        switch (dropDownName) {

            case "beneficiaryTypeDropDown":
                newItems[objIndex].beneficiaryTypeDropDown = false;
                newItems[objIndex].beneficiaryType = item.value;
                newItems[objIndex][`${dropDownName}Validation`] = true;
                break;
            case "relationshipToAccDropDown":
                newItems[objIndex].relationshipToAccDropDown = false;
                newItems[objIndex].relationshipToAcc = item.value;
                newItems[objIndex][`${dropDownName}Validation`] = true;
                break;

            default:
                break;

        }

        this.setState({
            selectedFundInvestmentsData: newItems
        });


    }

  

    onChangeTextForIRABeneficiary = (keyName, index) => text => {
        AppUtils.debugLog("onChangeTextForIRABeneficiary:::>");
        const {retirementBeneficiaryData} = this.state;
        const newItems = [...retirementBeneficiaryData];
        newItems[index][keyName] = text;
        newItems[index][`${keyName}Validation`] = true;

      /*
        newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
        newItems[index].beneficiaryTypeValidation = true;
        newItems[index].relationshipToAccValidation = true;
        newItems[index].beneficiaryDistPercentValidation = true;
*/  

        this.setState({
            retirementBeneficiaryData: newItems,
        });


    }

    onChangeDateForIRABeneficiary = (keyName, index) => dateStr => {
        AppUtils.debugLog("onChangeDateForIRABeneficiary:::>");
        const {retirementBeneficiaryData} = this.state;
        const newItems = [...retirementBeneficiaryData];
        newItems[index][keyName] = dateStr;
        newItems[index][`${keyName}Validation`] = true;


     /*   newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
        newItems[index].beneficiaryTypeValidation = true;
        newItems[index].relationshipToAccValidation = true;
        newItems[index].beneficiaryDistPercentValidation = true;
        */
        this.setState({
            retirementBeneficiaryData: newItems,
        });
    }

    onPressRemoveIRABeneficiary = (index) => () => {
        AppUtils.debugLog(`onPressRemoveIRABeneficiary::: ${index}`);
        const {retirementBeneficiaryData} = this.state;
        const newItems = [...retirementBeneficiaryData];  
        newItems.splice(index, 1);
        this.setState({
            retirementBeneficiaryData: newItems
        });
    }

    onPressAddIRABeneficiary = () => {
        AppUtils.debugLog("onPressAddIRABeneficiary::: ");

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
        const {retirementBeneficiaryData} = this.state;


        if (retirementBeneficiaryData.length < 3) {
            const newItems = [...retirementBeneficiaryData, tempBeneficiaryObj];
            this.setState({
                retirementBeneficiaryData: newItems
            });
        }
    }

    onSelectedEstateTrustDropDownValue = (dropDownName, objIndex) => (value, index, data) => {
        AppUtils.debugLog(`onSelectedEstateTrustDropDownValue:: ${dropDownName}`);
        const {estate} = this.state;
        const newItems = [...estate.trusteeData];
        newItems[objIndex][`${dropDownName}Validation`] = true;

       /* newItems[objIndex].firstNameValidation = true;
        newItems[objIndex].lastNameValidation = true;
        newItems[objIndex].dobValidation = true;
        newItems[objIndex].emailAddressValidation = true;
        newItems[objIndex].socialSecurityNoValidation = true;
        */
      


     
        const item = data[index];
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
        AppUtils.debugLog("onChangeTextForEstateTrust:::>");

        const {estate} = this.state;
        const newItems = [...estate.trusteeData];
        newItems[index][keyName] = text;
        newItems[index][`${keyName}Validation`] = true;

/*
        newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
   */   


        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems

            }
        })));
        


    }

    onChangeDateForEstateTrust = (keyName, index) => dateStr => {
        AppUtils.debugLog("onChangeDateForEstateTrust:::>");
        const {estate} = this.state;
        const newItems = [...estate.trusteeData];
        newItems[index][keyName] = dateStr;
        newItems[index][`${keyName}Validation`] = true;

        /*
        newItems[index].firstNameValidation = true;
        newItems[index].lastNameValidation = true;
        newItems[index].dobValidation = true;
        newItems[index].emailAddressValidation = true;
        newItems[index].socialSecurityNoValidation = true;
      */


        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems

            }
        })));
    }

    onPressRadioForEstateTrust = (keyName,index,text) => () => {
        AppUtils.debugLog(`onPressRadioForEstateTrust:: ${keyName}`);
        const {estate} = this.state;
        const newItems = [...estate.trusteeData];
        newItems[index][keyName] = text;
        newItems[index][`${keyName}Validation`] = true;


        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems
            }
        })));
    }

    onPressRemoveEstateTrust = (index) => () => {
        AppUtils.debugLog(`onPressRemoveEstateTrust::: ${index}`);
        const {estate} = this.state;
        const newItems = [...estate.trusteeData];
        newItems.splice(index, 1);
        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData:newItems

            }
        })));
    }

    onPressAddIEstateTrust = () => {
        AppUtils.debugLog("onPressAddIEstateTrust::: ");


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
        const {estate} = this.state;
         if(estate.trusteeData.length < 3){
            this.setState(prevState => ({
                estate: {
                    ...prevState.estate,
                    trusteeData:[...prevState.estate.trusteeData,tempTrusteeObj]
                }
            }));
         }
           

        
    }


    onClickExpandCollpaseEvent = (stateKey, keyName) => () => {
        AppUtils.debugLog("onClickExpandCollpaseEvent:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: !prevState[stateKey][keyName]
            }
        }));
    }


    renderIndividualSection = () => {
        const {personal} = this.state;

        return (
            <View>
                <this.renderPersonalInfo />
                <this.renderEmploymentInfo />
                <this.renderFinancialInfo />
                <this.renderMilitaryInfo />
                {
                    (personal.empStatus !== "Not Employed" && personal.empStatus !== "") && <this.renderRegulatoryInfo />
                }
            </View>
        );
    }

    renderPersonalInfo = () => {
        const {personal,errMsg} = this.state;
        const {initialState} = this.props;

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
                            {personal.isPersonalInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />

                {
                    personal.isPersonalInfoExpanded && (
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
                            //  inputref={(ref)=> this.firstName = ref}
                            inputref={this.setInputRef("firstName")}
                            value={personal.firstName}
                            editable={personal.firstName === ""}
                            propInputStyle={personal.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.firstName}
                            onChangeText={this.onChangeText("personal", "firstName")}
                            onSubmitEditing={this.onSubmitEditing(this.middleInitial)}
                            errorFlag={!personal.firstNameValidation}
                            errorText={errMsg}
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
                            //  inputref={(ref)=> this.middleInitial = ref}
                            inputref={this.setInputRef("middleInitial")}
                            value={personal.middleInitial}
                            editable={initialState.middleInitial === ""}
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
                            //  inputref={ref => this.lastName = ref}
                            inputref={this.setInputRef("lastName")}
                            value={personal.lastName}
                            editable={personal.lastName === ""}
                            propInputStyle={personal.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.lastName}
                            returnKeyType="done"
                            onChangeText={this.onChangeText("personal", "lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.suffix)}
                            errorFlag={!personal.lastNameValidation}
                            errorText={errMsg}

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
                            date={personal.dob}
                            placeholder="Select Date"
                            errorFlag={!personal.dobValidation}
                            errorMsg={errMsg}
                            maxDate={prevDate}
                            onDateChange={this.onChangeDate("personal", "dob")}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.gender}
                        </Text>
                        {this.renderRadio("personal", "gender", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                        {!personal.genderValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}


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
                            /*
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
                            */
                            personal.citizenship !== "U.S" &&
                           (
                            <View style={styles.nonUSView}>

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.residenceStatus}
                                </Text>
                                <View style={styles.radioBtnColGrp}>
                                    <CustomRadio
                                        //  componentStyle={styles.radioCol1}
                                        size={30}
                                        outerCicleColor="#DEDEDF"
                                        innerCicleColor="#61285F"
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label="Resident Alien"
                                        descLabelStyle={styles.lblRadioDescTxt}
                                        descLabel=""
                                        selected={!!((personal.residenceStatus !== null && personal.residenceStatus === "Resident Alien"))}
                                        onPress={this.onPressRadio("personal", "residenceStatus", "Resident Alien")}
                                    />
                                    <CustomRadio
                                       //  componentStyle={styles.radioCol2}
                                        size={30}
                                        outerCicleColor="#DEDEDF"
                                        innerCicleColor="#61285F"
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label="Non-resident Alien"
                                        descLabelStyle={styles.lblRadioDescTxt}
                                        descLabel="Please call 800-235-8396."
                                        selected={!!((personal.residenceStatus !== null && personal.residenceStatus === "Non-resident Alien"))}
                                        onPress={this.onPressRadio("personal", "residenceStatus", "Non-resident Alien")}

                                    />
                                </View>
                                {!personal.residenceStatusValidation && (
                                    <Text style={styles.errMsg}>
                                        {errMsg}
                                    </Text>
                                  )}

                                {this.renderCustomDropDown({
                                    section: "personal",
                                    stateKey: "countryOfCitizenship",
                                    dropDownName: "countryOfCitizenshipDropDown",
                                    lblDropdownName: gblStrings.accManagement.countryOfCitizenship,
                                    isOptional: false
                                })
                                }

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.USResidentCardNo}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("USResidentCardNo")}
                                    propInputStyle={personal.USResidentCardNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.ssnNoFormat}
                                    value={personal.USResidentCardNo}
                                    keyboardType="number-pad"
                                    maxLength={gblStrings.maxLength.ssnNo}
                                    onChangeText={this.onChangeText("personal", "USResidentCardNo")}
                                    errorFlag={!personal.USResidentCardNoValidation}
                                    errorText={errMsg}
                                    secureTextEntry

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.USResidentCardNoExpiryDate}
                                </Text>
                                <GDateComponent
                                    inputref={this.setInputRef("USResidentCardNoExpiryDate")}
                                    date={personal.USResidentCardNoExpiryDate}
                                    placeholder="Select Date"
                                    errorFlag={!personal.USResidentCardNoExpiryDateValidation}
                                    errorMsg={errMsg}
                                    minDate={prevDate}
                                    onDateChange={this.onChangeDate("personal", "USResidentCardNoExpiryDate")}
                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.passportNumber}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("passportNumber")}
                                    propInputStyle={personal.passportNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.ssnNoFormat}
                                    value={personal.passportNumber}
                                    keyboardType="number-pad"
                                    maxLength={gblStrings.maxLength.ssnNo}
                                    onChangeText={this.onChangeText("personal", "passportNumber")}
                                    errorFlag={!personal.passportNumberValidation}
                                    errorText={errMsg}
                                    secureTextEntry

                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.passportNoExpiryDate}
                                </Text>
                                <GDateComponent
                                    inputref={this.setInputRef("passportNoExpiryDate")}
                                    date={personal.passportNoExpiryDate}
                                    placeholder="Select Date"
                                    errorFlag={!personal.passportNoExpiryDateValidation}
                                    errorMsg={errMsg}
                                    minDate={prevDate}
                                    onDateChange={this.onChangeDate("personal", "passportNoExpiryDate")}
                                />


                            </View>
                          )}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.addressType}
                        </Text>
                        {this.renderRadio("personal", "mailingAddressType", 30, { marginBottom: scaledHeight(13) }, styles.radioBtnColGrp)}
                        {!personal.mailingAddressTypeValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.address}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("addrLine1")}
                            propInputStyle={personal.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine1}
                            maxLength={gblStrings.maxLength.emplAddress1}
                            value={personal.addrLine1}
                            onChangeText={this.onChangeText("personal", "addrLine1")}
                            onSubmitEditing={this.onSubmitEditing(this.addrLine2)}
                            errorFlag={!personal.addrLine1Validation}
                            errorText={errMsg}
                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2")}
                            propInputStyle={personal.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            value={personal.addrLine2}
                            onChangeText={this.onChangeText("personal", "addrLine2")}
                            onSubmitEditing={this.onSubmitEditing(this.zipcode)}
                            errorFlag={!personal.addrLine2Validation}
                            errorText={errMsg}


                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.zipcode}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("zipcode")}
                            propInputStyle={personal.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterZip}
                            value={personal.zipcode}
                            maxLength={gblStrings.maxLength.zipCode}
                            returnKeyType="done"
                            onChangeText={this.onChangeText("personal", "zipcode")}
                            keyboardType="number-pad"
                            onSubmitEditing={this.onSubmitZipEditing("personal", "zipcode", this.city)}
                            errorFlag={!personal.zipcodeValidation}
                            errorText={errMsg}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.cityAndState}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("city")}
                            propInputStyle={personal.cityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterCity}
                            maxLength={gblStrings.maxLength.city}
                            value={personal.city}
                            onChangeText={this.onChangeText("personal", "city")}
                            onSubmitEditing={this.onSubmitEditing(this.stateCity)}
                            errorFlag={!personal.cityValidation}
                            errorText={errMsg}
                            editable={personal.citizenship !== "U.S"}

                        />
                        <GInputComponent
                            inputref={this.setInputRef("stateCity")}
                            propInputStyle={personal.stateCityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterState}
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.state}
                            value={personal.stateCity}
                            onChangeText={this.onChangeText("personal", "stateCity")}
                            onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                            errorFlag={!personal.stateCityValidation}
                            errorText={errMsg}
                            editable={personal.citizenship !== "U.S"}

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
                                selected={!!((personal.isYourPhysicalAddresSame !== null && personal.isYourPhysicalAddresSame === "Yes"))}
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
                                selected={!!((personal.isYourPhysicalAddresSame !== null && personal.isYourPhysicalAddresSame === "No"))}
                                onPress={this.onPressRadio("personal", "isYourPhysicalAddresSame", "No")}

                            />
                        </View>
                        {!personal.isYourPhysicalAddresSameValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}

                        {
                            personal.isYourPhysicalAddresSame === "No" && (
                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.address}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine1_Phy")}
                                    propInputStyle={personal.addrLine1_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine1}
                                    maxLength={gblStrings.maxLength.emplAddress1}
                                    value={personal.addrLine1_Phy}
                                    onChangeText={this.onChangeText("personal", "addrLine1_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.addrLine2_Phy)}
                                    errorFlag={!personal.addrLine1_PhyValidation}
                                    errorText={errMsg}
                                />
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine2_Phy")}
                                    propInputStyle={personal.addrLine2_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.addressLine2}
                                    value={personal.addrLine2_Phy}
                                    onChangeText={this.onChangeText("personal", "addrLine2_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.zipcode_Phy)}
                                    errorFlag={!personal.addrLine2_PhyValidation}
                                    errorText={errMsg}


                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.zipcode}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("zipcode_Phy")}
                                    propInputStyle={personal.zipcode_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterZip}
                                    value={personal.zipcode_Phy}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    returnKeyType="done"
                                    onChangeText={this.onChangeText("personal", "zipcode_Phy")}
                                    keyboardType="number-pad"
                                    onSubmitEditing={this.onSubmitZipEditing("personal", "zipcode_Phy", this.city_Phy)}
                                    errorFlag={!personal.zipcode_PhyValidation}
                                    errorText={errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("city_Phy")}
                                    propInputStyle={personal.city_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    maxLength={gblStrings.maxLength.city}
                                    value={personal.city_Phy}
                                    onChangeText={this.onChangeText("personal", "city_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.stateCity_Phy)}
                                    errorFlag={!personal.city_PhyValidation}
                                    errorText={errMsg}
                                    editable={personal.citizenship !== "U.S"}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("stateCity_Phy")}
                                    propInputStyle={personal.stateCity_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.state}
                                    value={personal.stateCity_Phy}
                                    onChangeText={this.onChangeText("personal", "stateCity_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                    errorFlag={!personal.stateCity_PhyValidation}
                                    errorText={errMsg}
                                    editable={personal.citizenship !== "U.S"}

                                />

                            </View>
                          )}

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
                            propInputStyle={personal.mobileNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.mobileNo}
                            keyboardType="phone-pad"
                           //  value={personal.mobileNo.replace(/\d(?=\d{4})/g, "*")}
                            value={personal.mobileNo}
                            onChangeText={this.onChangeText("personal", "mobileNo")}
                            onSubmitEditing={this.onSubmitEditing(this.contactDuringMobNo)}
                            errorFlag={!personal.mobileNoValidation}
                            errorText={errMsg}
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
                            value={personal.telePhoneNo2}
                            maxLength={gblStrings.maxLength.phoneNo}
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
                            value={personal.telePhoneNo3}
                            maxLength={gblStrings.maxLength.phoneNo}
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
                            propInputStyle={personal.emailAddressValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.emailformat}
                            keyboardType="email-address"
                            maxLength={gblStrings.maxLength.emailID}
                            onChangeText={this.onChangeText("personal", "emailAddress")}
                            onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo)}
                            errorFlag={!personal.emailAddressValidation}
                            errorText={errMsg}
                            value={personal.emailAddress}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo")}
                            propInputStyle={personal.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            value={personal.socialSecurityNo}
                            keyboardType="number-pad"
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.ssnNo}
                            onChangeText={this.onChangeText("personal", "socialSecurityNo")}
                            errorFlag={!personal.socialSecurityNoValidation}
                            errorText={errMsg}
                            secureTextEntry

                        />
                    </View>
                  )}
            </View>

        );
    }

    renderEmploymentInfo = () => {
        const {personal,errMsg} = this.state;
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
                            {personal.isEmploymentInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    personal.isEmploymentInfoExpanded && (
                    <View style={styles.childSectionGrp}>

                        {this.renderCustomDropDown({
                            section: "personal",
                            stateKey: "empStatus",
                            dropDownName: "empStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.empStatus,
                            isOptional: false
                        })
                        }
                        {personal.empStatus === "Others" && (
                            <GInputComponent
                                inputref={this.setInputRef("empStatusForOther")}
                                propInputStyle={styles.customTxtBox}
                                placeholder="Enter Employment status"
                                value={personal.empStatusForOther}
                                maxLength={gblStrings.maxLength.common}
                                onChangeText={this.onChangeText("personal", "empStatusForOther")}
                                onSubmitEditing={this.onSubmitEditing(this.empIndustry)}
                                errorFlag={!personal.empStatusForOtherValidation}
                                errorText={errMsg}
                            />
                          )}


                        {
                            //  Render employment fields if user have employment history
                            (personal.empStatus !== "" && personal.empStatus !== "Unemployed" && personal.empStatus !== "Homemaker" && personal.empStatus !== "Student" && personal.empStatus !== "Retired") && (
                            <View style={styles.childSectionGrp}>

                                {this.renderCustomDropDown({
                                    section: "personal",
                                    stateKey: "empIndustry",
                                    dropDownName: "empIndustryDropDown",
                                    lblDropdownName: gblStrings.accManagement.industry,
                                    isOptional: false
                                })
                                }
                                {personal.empIndustry === "Other Industry" && (
                                    <GInputComponent
                                        inputref={this.setInputRef("empIndustryForOther")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder="Enter Industry"
                                        value={personal.empIndustryForOther}
                                        maxLength={gblStrings.maxLength.common}
                                        onChangeText={this.onChangeText("personal", "empIndustryForOther")}
                                        onSubmitEditing={this.onSubmitEditing(this.empOccupation)}
                                        errorFlag={!personal.empIndustryForOtherValidation}
                                        errorText={errMsg}
                                    />
                                  )}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.occupation}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empOccupation")}
                                    propInputStyle={styles.customTxtBox}
                                    value={personal.occupation}

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
                                    value={personal.empAddrLine1}
                                    onChangeText={this.onChangeText("personal", "empAddrLine1")}
                                    onSubmitEditing={this.onSubmitEditing(this.empAddrLine2)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empAddrLine2")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.address}
                                    value={personal.empAddrLine2}
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
                                    value={personal.empZipcode}
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
                                    value={personal.empCity}
                                    onChangeText={this.onChangeText("personal", "empCity")}
                                    onSubmitEditing={this.onSubmitEditing(this.empStateCity)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empStateCity")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.state}
                                    value={personal.empStateCity}
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
                                    value={personal.empWorkPhoneNo}
                                    keyboardType="phone-pad"
                                    onChangeText={this.onChangeText("personal", "empWorkPhoneNo")}

                                />


                            </View>
                          )}
                        {
                            //  Render employment fields if user not have employment history
                            (personal.empStatus === "Unemployed" || personal.empStatus === "Homemaker" || personal.empStatus === "Student" || personal.empStatus === "Retired") && (
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
                          )}
                    </View>
                  )}
            </View>
        );
    }

    renderMilitaryInfo = () => {
        const {personal,errMsg} = this.state;
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
                            {personal.isMilitaryInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    personal.isMilitaryInfoExpanded && (
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
                                selected={!!((personal.isMilitaryHistory !== null && personal.isMilitaryHistory === "Yes"))}
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
                                selected={!!((personal.isMilitaryHistory !== null && personal.isMilitaryHistory === "No"))}
                                onPress={this.onPressRadio("personal", "isMilitaryHistory", "No")}
                            />
                        </View>
                        {!personal.isMilitaryHistoryValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}


                        {
                            personal.isMilitaryHistory === "Yes" && (
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
                                            date={personal.fromDateMilitary}
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
                                            date={personal.toDateMilitary}
                                            placeholder="Select Date"
                                            minDate={personal.fromDateMilitary}
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
                                    value={personal.commissionSource}
                                    maxLength={60}
                                    onChangeText={this.onChangeText("personal", "commissionSource")}
                                />

                            </View>
                          )}

                    </View>
                  )}
            </View>
        );

    }

    renderFinancialInfo = () => {
        const {personal} = this.state;

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
                            {personal.isFinancialInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    personal.isFinancialInfoExpanded && (
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
                  )}
            </View>
        );
    }

    renderRegulatoryInfo = () => {
        const {personal,errMsg} = this.state;

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
                            {personal.isRegulatoryInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.lblLine} />
                {
                    personal.isRegulatoryInfoExpanded && (
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
                                selected={!!((personal.isSeniorPoliticalFigure !== null && personal.isSeniorPoliticalFigure === "Yes"))}
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
                                selected={!!((personal.isSeniorPoliticalFigure !== null && personal.isSeniorPoliticalFigure === "No"))}
                                onPress={this.onPressRadio("personal", "isSeniorPoliticalFigure", "No")}

                            />
                        </View>
                        {!personal.isSeniorPoliticalFigureValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}
                        {personal.isSeniorPoliticalFigure === "Yes" && (
                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.seniorPoliticalName}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("seniorPoliticalName")}
                                    propInputStyle={personal.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterSeniorName}
                                    value={personal.seniorPoliticalName}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.seniorPoliticalMaxLength}
                                    onChangeText={this.onChangeText("personal", "seniorPoliticalName")}
                                    errorFlag={!personal.seniorPoliticalNameValidation}
                                    errorText={errMsg}
                                />
                            </View>
                          )}



                    </View>
                  )}
            </View>
        );
    }

    renderJointOwnerSection = () => {
        const {jointOwner} = this.state;

        return (
            <View>
                <this.renderPersonalInfoJointOwner />
                <this.renderEmploymentInfoJointOwner />
                <this.renderFinancialInfoJointOwner />
                <this.renderMilitaryInfoJointOwner />
                {
                    (jointOwner.empStatus !== "Not Employed" && jointOwner.empStatus !== "") && <this.renderRegulatoryInfoJointOwner />
                }
            </View>
        );


    }

    renderPersonalInfoJointOwner = () => {
        const {jointOwner,errMsg} = this.state;

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
                            {jointOwner.isPersonalInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />
                {
                    jointOwner.isPersonalInfoExpanded && (
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
                            propInputStyle={jointOwner.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            value={jointOwner.firstName}
                            maxLength={gblStrings.maxLength.firstName}
                            onChangeText={this.onChangeText("jointOwner", "firstName")}
                            onSubmitEditing={this.onSubmitEditing(this.middleInitial_joint)}
                            errorFlag={!jointOwner.firstNameValidation}
                            errorText={errMsg}
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
                            value={jointOwner.middleInitial}
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
                            propInputStyle={jointOwner.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            value={jointOwner.lastName}
                            maxLength={gblStrings.maxLength.lastName}
                            returnKeyType="done"
                            onChangeText={this.onChangeText("jointOwner", "lastName")}
                            onSubmitEditing={this.onSubmitEditing(this.suffix_joint)}
                            errorFlag={!jointOwner.lastNameValidation}
                            errorText={errMsg}
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
                            date={jointOwner.dob}
                            placeholder="Select Date"
                            errorFlag={!jointOwner.dobValidation}
                            errorMsg={errMsg}
                            maxDate={prevDate}
                            onDateChange={this.onChangeDate("jointOwner", "dob")}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.gender}
                        </Text>
                        {this.renderRadio("jointOwner", "gender", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                        {!jointOwner.genderValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}

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
                           /* <View style={styles.uploadW8View}>
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
                        */
                            jointOwner.citizenship !== "U.S" &&
                                 (
                                <View style={styles.nonUSView}>

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.residenceStatus}
                                    </Text>
                                    <View style={styles.radioBtnColGrp}>
                                        <CustomRadio
                                            //  componentStyle={styles.radioCol1}
                                            size={30}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="Resident Alien"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={!!((jointOwner.residenceStatus !== null && jointOwner.residenceStatus === "Resident Alien"))}
                                            onPress={this.onPressRadio("jointOwner", "residenceStatus", "Resident Alien")}
                                        />
                                        <CustomRadio
                                            //  componentStyle={styles.radioCol2}
                                            size={30}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="Non-resident Alien"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel="Please call 800-235-8396."
                                            selected={!!((jointOwner.residenceStatus !== null && jointOwner.residenceStatus === "Non-resident Alien"))}
                                            onPress={this.onPressRadio("jointOwner", "residenceStatus", "Non-resident Alien")}

                                        />
                                    </View>
                                    {!jointOwner.residenceStatusValidation && (
                                        <Text style={styles.errMsg}>
                                            {errMsg}
                                        </Text>
                                    )}


                           {this.renderCustomDropDown({
                               section: "jointOwner",
                               stateKey: "countryOfCitizenship",
                               dropDownName: "countryOfCitizenshipDropDown",
                               lblDropdownName: gblStrings.accManagement.countryOfCitizenship,
                               isOptional: false
                           })
                           }

                           <Text style={styles.lblTxt}>
                               {gblStrings.accManagement.USResidentCardNo}
                           </Text>
                           <GInputComponent
                               inputref={this.setInputRef("USResidentCardNo")}
                               propInputStyle={jointOwner.USResidentCardNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                               placeholder={gblStrings.accManagement.ssnNoFormat}
                               value={jointOwner.USResidentCardNo}
                               keyboardType="number-pad"
                               maxLength={gblStrings.maxLength.ssnNo}
                               onChangeText={this.onChangeText("jointOwner", "USResidentCardNo")}
                               errorFlag={!jointOwner.USResidentCardNoValidation}
                               errorText={errMsg}
                               secureTextEntry

                           />

                           <Text style={styles.lblTxt}>
                               {gblStrings.accManagement.USResidentCardNoExpiryDate}
                           </Text>
                           <GDateComponent
                               inputref={this.setInputRef("USResidentCardNoExpiryDate")}
                               date={jointOwner.USResidentCardNoExpiryDate}
                               placeholder="Select Date"
                               errorFlag={!jointOwner.USResidentCardNoExpiryDateValidation}
                               errorMsg={errMsg}
                               minDate={prevDate}
                               onDateChange={this.onChangeDate("jointOwner", "USResidentCardNoExpiryDate")}
                           />


                           <Text style={styles.lblTxt}>
                               {gblStrings.accManagement.passportNumber}
                           </Text>
                           <GInputComponent
                               inputref={this.setInputRef("passportNumber")}
                               propInputStyle={jointOwner.passportNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                               placeholder={gblStrings.accManagement.ssnNoFormat}
                               value={jointOwner.passportNumber}
                               keyboardType="number-pad"
                               maxLength={gblStrings.maxLength.ssnNo}
                               onChangeText={this.onChangeText("jointOwner", "passportNumber")}
                               errorFlag={!jointOwner.passportNumberValidation}
                               errorText={errMsg}
                               secureTextEntry

                           />

                           <Text style={styles.lblTxt}>
                               {gblStrings.accManagement.passportNoExpiryDate}
                           </Text>
                           <GDateComponent
                               inputref={this.setInputRef("passportNoExpiryDate")}
                               date={jointOwner.passportNoExpiryDate}
                               placeholder="Select Date"
                               errorFlag={!jointOwner.passportNoExpiryDateValidation}
                               errorMsg={errMsg}
                               minDate={prevDate}
                               onDateChange={this.onChangeDate("jointOwner", "passportNoExpiryDate")}
                           />
                                </View>
                              )}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.mailingAddressType}
                        </Text>
                        {this.renderRadio("jointOwner", "mailingAddressType", 30, { marginBottom: scaledHeight(13) }, styles.radioBtnColGrp)}
                        {!jointOwner.mailingAddressTypeValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.address}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("addrLine1_joint")}
                            propInputStyle={jointOwner.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine1}
                            value={jointOwner.addrLine1}
                            maxLength={gblStrings.maxLength.emplAddress1}
                            onChangeText={this.onChangeText("jointOwner", "addrLine1")}
                            onSubmitEditing={this.onSubmitEditing(this.addrLine2_joint)}
                            errorFlag={!jointOwner.addrLine1Validation}
                            errorText={errMsg}

                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2_joint")}
                            propInputStyle={jointOwner.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            value={jointOwner.addrLine2}
                            onChangeText={this.onChangeText("jointOwner", "addrLine2")}
                            onSubmitEditing={this.onSubmitEditing(this.zipcode_joint)}
                            errorFlag={!jointOwner.addrLine2Validation}
                            errorText={errMsg}
                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.zipcode}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("zipcode_joint")}
                            propInputStyle={jointOwner.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterZip}
                            maxLength={gblStrings.maxLength.zipCode}
                            value={jointOwner.zipCode}
                            keyboardType="number-pad"
                            returnKeyType="done"
                            onChangeText={this.onChangeText("jointOwner", "zipcode")}
                            onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode", this.city_joint)}
                            errorFlag={!jointOwner.zipcodeValidation}
                            errorText={errMsg}


                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.cityAndState}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("city_joint")}
                            propInputStyle={jointOwner.cityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterCity}
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.city}
                            value={jointOwner.city}
                            onChangeText={this.onChangeText("jointOwner", "city")}
                            onSubmitEditing={this.onSubmitEditing(this.stateCity_joint)}
                            errorFlag={!jointOwner.cityValidation}
                            errorText={errMsg}
                            editable={jointOwner.citizenship !== "U.S"}



                        />
                        <GInputComponent
                            inputref={this.setInputRef("stateCity")}
                            propInputStyle={jointOwner.stateCityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterState}
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.state}
                            value={jointOwner.stateCity}
                            onChangeText={this.onChangeText("jointOwner", "stateCity")}
                            onSubmitEditing={this.onSubmitEditing(this.mobileNo_joint)}
                            errorFlag={!jointOwner.stateCityValidation}
                            errorText={errMsg}
                            editable={jointOwner.citizenship !== "U.S"}

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
                                selected={!!((jointOwner.isYourPhysicalAddresSame !== null && jointOwner.isYourPhysicalAddresSame === "Yes"))}
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
                                selected={!!((jointOwner.isYourPhysicalAddresSame !== null && jointOwner.isYourPhysicalAddresSame === "No"))}
                                onPress={this.onPressRadio("jointOwner", "isYourPhysicalAddresSame", "No")}
                            />
                        </View>
                        {!jointOwner.isYourPhysicalAddresSameValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}

                        {
                            jointOwner.isYourPhysicalAddresSame === "No" && (
                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.address}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine1_Phy_joint")}
                                    propInputStyle={jointOwner.addrLine1_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine1}
                                    maxLength={gblStrings.maxLength.emplAddress1}
                                    value={jointOwner.addrLine1_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "addrLine1_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.addrLine2_Phy)}
                                    errorFlag={!jointOwner.addrLine1_PhyValidation}
                                    errorText={errMsg}
                                />
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine2_Phy_joint")}
                                    propInputStyle={jointOwner.addrLine2_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.addressLine2}
                                    value={jointOwner.addrLine2_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "addrLine2_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.zipcode_Phy_joint)}
                                    errorFlag={!jointOwner.addrLine2_PhyValidation}
                                    errorText={errMsg}


                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.zipcode}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("zipcode_Phy_joint")}
                                    propInputStyle={jointOwner.zipcode_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterZip}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    value={jointOwner.zipcode_Phy}
                                    returnKeyType="done"
                                    onChangeText={this.onChangeText("jointOwner", "zipcode_Phy")}
                                    keyboardType="number-pad"
                                    onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode_Phy", this.city_Phy_joint)}
                                    errorFlag={!jointOwner.zipcode_PhyValidation}
                                    errorText={errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("city_Phy_joint")}
                                    propInputStyle={jointOwner.city_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    maxLength={gblStrings.maxLength.city}
                                    value={jointOwner.city_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "city_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.stateCity_Phy_joint)}
                                    errorFlag={!jointOwner.city_PhyValidation}
                                    errorText={errMsg}
                                    editable={jointOwner.citizenship !== "U.S"}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("stateCity_Phy_joint")}
                                    propInputStyle={jointOwner.stateCity_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.state}
                                    value={jointOwner.stateCity_Phy}
                                    onChangeText={this.onChangeText("jointOwner", "stateCity_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo_joint)}
                                    errorFlag={!jointOwner.stateCity_PhyValidation}
                                    errorText={errMsg}
                                    editable={jointOwner.citizenship !== "U.S"}

                                />

                            </View>
                          )}




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
                            propInputStyle={jointOwner.mobileNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.phoneNoFormat}
                            maxLength={gblStrings.maxLength.mobileNo}
                            keyboardType="phone-pad"
                            onChangeText={this.onChangeText("jointOwner", "mobileNo")}
                            value={jointOwner.mobileNo}

                            onSubmitEditing={this.onSubmitEditing(this.telePhoneNo2_joint)}
                            errorFlag={!jointOwner.mobileNoValidation}
                            errorText={errMsg}

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
                            maxLength={gblStrings.maxLength.phoneNo}
                            keyboardType="phone-pad"
                            value={jointOwner.telePhoneNo2}
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
                            value={jointOwner.telePhoneNo3}
                            maxLength={gblStrings.maxLength.phoneNo}
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
                            propInputStyle={jointOwner.emailAddressValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.emailformat}
                            keyboardType="email-address"
                            maxLength={gblStrings.maxLength.emailID}
                            value={jointOwner.emailAddress}
                            onChangeText={this.onChangeText("jointOwner", "emailAddress")}
                            onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo_joint)}
                            errorFlag={!jointOwner.emailAddressValidation}
                            errorText={errMsg}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo_joint")}
                            propInputStyle={jointOwner.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            value={jointOwner.socialSecurityNo}
                            keyboardType="number-pad"
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.ssnNo}
                            onChangeText={this.onChangeText("jointOwner", "socialSecurityNo")}
                            errorFlag={!jointOwner.socialSecurityNoValidation}
                            errorText={errMsg}
                            secureTextEntry

                        />
                    </View>
                  )}
            </View>

        );
    }

    renderEmploymentInfoJointOwner = () => {
        const {jointOwner,errMsg} = this.state;

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
                            {jointOwner.isEmploymentInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.lblLine} />
                {
                    jointOwner.isEmploymentInfoExpanded && (
                    <View style={styles.childSectionGrp}>

                        {this.renderCustomDropDown({
                            section: "jointOwner",
                            stateKey: "empStatus",
                            dropDownName: "empStatusDropDown",
                            lblDropdownName: gblStrings.accManagement.empStatus,
                            isOptional: false
                        })
                        }

                        {jointOwner.empStatus === "Others" && (
                            <GInputComponent
                                inputref={this.setInputRef("empStatusForOther_joint")}
                                propInputStyle={styles.customTxtBox}
                                placeholder="Enter Employment status"
                                value={jointOwner.empStatusForOther}
                                maxLength={gblStrings.maxLength.common}
                                onChangeText={this.onChangeText("jointOwner", "empStatusForOther")}
                                onSubmitEditing={this.onSubmitEditing(this.empIndustry)}
                                errorFlag={!jointOwner.empStatusForOtherValidation}
                                errorText={errMsg}
                            />
                          )}



                        {
                            //  Render employment fields if user have employment history
                            (jointOwner.empStatus !== "" && jointOwner.empStatus !== "Unemployed" && jointOwner.empStatus !== "Homemaker" && jointOwner.empStatus !== "Student" && jointOwner.empStatus !== "Retired") && (
                            <View style={styles.childSectionGrp}>

                                {this.renderCustomDropDown({
                                    section: "jointOwner",
                                    stateKey: "empIndustry",
                                    dropDownName: "empIndustryDropDown",
                                    lblDropdownName: gblStrings.accManagement.industry,
                                    isOptional: false
                                })
                                }
                                {jointOwner.empIndustry === "Other Industry" && (
                                    <GInputComponent
                                        inputref={this.setInputRef("empIndustryForOther_joint")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder="Enter Industry"
                                        maxLength={gblStrings.maxLength.common}
                                        value={jointOwner.empIndustryForOther}

                                        onChangeText={this.onChangeText("jointOwner", "empIndustryForOther")}
                                        onSubmitEditing={this.onSubmitEditing(this.empOccupation)}
                                        errorFlag={!jointOwner.empIndustryForOtherValidation}
                                        errorText={errMsg}
                                    />
                                  )}
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.occupation}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("empOccupation_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder=""
                                    value={jointOwner.empOccupation}
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
                                    value={jointOwner.empName}
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
                                    value={jointOwner.empAddrLine1}
                                    onChangeText={this.onChangeText("jointOwner", "empAddrLine1")}
                                    onSubmitEditing={this.onSubmitEditing(this.empAddrLine2_joint)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empAddrLine2_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.address}
                                    value={jointOwner.empAddrLine2}
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
                                    value={jointOwner.empZipcode}
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
                                    value={jointOwner.empCity}
                                    onChangeText={this.onChangeText("jointOwner", "empCity")}
                                    onSubmitEditing={this.onSubmitEditing(this.empStateCity_joint)}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("empStateCity_joint")}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.city}
                                    value={jointOwner.empStateCity}
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
                                    value={jointOwner.empWorkPhoneNo}
                                    maxLength={gblStrings.maxLength.workPhone}
                                    keyboardType="phone-pad"
                                    onChangeText={this.onChangeText("jointOwner", "empWorkPhoneNo")}

                                />


                            </View>
                          )}
                        {
                            //  Render employment fields if user not have employment history
                            (jointOwner.empStatus === "Unemployed" || jointOwner.empStatus === "Homemaker" || jointOwner.empStatus === "Student" || jointOwner.empStatus === "Retired") && (
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
                          )}
                    </View>
                  )}
            </View>
        );
    }

    renderMilitaryInfoJointOwner = () => {
        const {jointOwner,errMsg} = this.state;

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
                    jointOwner.isMilitaryInfoExpanded && (
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
                                selected={!!((jointOwner.isMilitaryHistory !== null && jointOwner.isMilitaryHistory === "Yes"))}
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
                                selected={!!((jointOwner.isMilitaryHistory !== null && jointOwner.isMilitaryHistory === "No"))}
                                onPress={this.onPressRadio("jointOwner", "isMilitaryHistory", "No")}
                            />
                        </View>
                        {!jointOwner.isMilitaryHistoryValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}


                        {
                            jointOwner.isMilitaryHistory === "Yes" && (
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
                                            date={jointOwner.fromDateMilitary}
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
                                            date={jointOwner.toDateMilitary}
                                            placeholder="Select Date"
                                            minDate={jointOwner.fromDateMilitary}
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
                                    value={jointOwner.commissionSource}
                                    placeholder=""
                                    maxLength={60}
                                    onChangeText={this.onChangeText("personal", "commissionSource")}
                                />

                            </View>
                          )}

                    </View>
                  )}
            </View>
        );

    }

    renderFinancialInfoJointOwner = () => {
        const {jointOwner} = this.state;

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
                    jointOwner.isFinancialInfoExpanded && (
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
                  )}
            </View>
        );
    }

    renderRegulatoryInfoJointOwner = () => {
        const {jointOwner,errMsg} = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.regulatoryQuestionJoint}
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
                            selected={!!((jointOwner.isSeniorPoliticalFigure !== null && jointOwner.isSeniorPoliticalFigure === 'Yes'))}
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
                            selected={!!((jointOwner.isSeniorPoliticalFigure !== null && jointOwner.isSeniorPoliticalFigure === "No"))}
                            onPress={this.onPressRadio("jointOwner", "isSeniorPoliticalFigure", "No")}

                        />
                    </View>
                    {!jointOwner.isSeniorPoliticalFigureValidation && (
                        <Text style={styles.errMsg}>
                            {errMsg}
                        </Text>
                      )}
                    {jointOwner.isSeniorPoliticalFigure === "Yes" && (
                        <View>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.seniorPoliticalName}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("seniorPoliticalName_joint")}
                                propInputStyle={jointOwner.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.enterSeniorName}
                                value={jointOwner.seniorPoliticalName}
                                returnKeyType="done"
                                maxLength={gblStrings.maxLength.seniorPoliticalMaxLength}
                                onChangeText={this.onChangeText("jointOwner", "seniorPoliticalName")}
                                errorFlag={!jointOwner.seniorPoliticalNameValidation}
                                errorText={errMsg}
                            />
                        </View>
                      )}

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
        const {childBeneficiary,errMsg} = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.personalInformationChild}
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

                    <Text style={styles.regulatoryQuestTxt}>
                        {gblStrings.accManagement.childBeneficiaryNote}
                    </Text>


                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.firstName}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("firstName_childben")}
                        propInputStyle={childBeneficiary.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder=""
                        maxLength={gblStrings.maxLength.firstName}
                        value={childBeneficiary.firstName}
                        onChangeText={this.onChangeText("childBeneficiary", "firstName")}
                        onSubmitEditing={this.onSubmitEditing(this.middleInitial_childben)}
                        errorFlag={!childBeneficiary.firstNameValidation}
                        errorText={errMsg}
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
                        value={childBeneficiary.middleInitial}
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
                        propInputStyle={childBeneficiary.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder=""
                        value={childBeneficiary.lastName}
                        maxLength={gblStrings.maxLength.lastName}
                        returnKeyType="done"
                        onChangeText={this.onChangeText("childBeneficiary", "lastName")}
                        onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo_childben)}
                        errorFlag={!childBeneficiary.lastNameValidation}
                        errorText={errMsg}
                    />



                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.socialSecurityNo}
                    </Text>
                    <GInputComponent
                        inputref={this.setInputRef("socialSecurityNo_childben")}
                        propInputStyle={childBeneficiary.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                        placeholder={gblStrings.accManagement.ssnNoFormat}
                        value={childBeneficiary.socialSecurityNo}
                        keyboardType="number-pad"
                        returnKeyType="done"
                        maxLength={gblStrings.maxLength.ssnNo}
                        onChangeText={this.onChangeText("childBeneficiary", "socialSecurityNo")}
                        onSubmitEditing={this.onSubmitEditing(this.dob_childben)}
                        errorFlag={!childBeneficiary.socialSecurityNoValidation}
                        errorText={errMsg}

                    />

                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.dob}
                    </Text>
                    <GDateComponent
                        inputref={this.setInputRef("dob_childben")}
                        date={childBeneficiary.dob}
                        placeholder="Select Date"
                        errorFlag={!childBeneficiary.dobValidation}
                        errorMsg={errMsg}
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
        const {childBeneficiary,errMsg} = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.regulatoryQuestionChild}
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
                            selected={!!((childBeneficiary.isSeniorPoliticalFigure !== null && childBeneficiary.isSeniorPoliticalFigure === "Yes"))}
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
                            selected={!!((childBeneficiary.isSeniorPoliticalFigure !== null && childBeneficiary.isSeniorPoliticalFigure === "No"))}
                            onPress={this.onPressRadio("childBeneficiary", "isSeniorPoliticalFigure", "No")}

                        />
                    </View>
                    {!childBeneficiary.isSeniorPoliticalFigureValidation && (
                        <Text style={styles.errMsg}>
                            {errMsg}
                        </Text>
                      )}
                    {childBeneficiary.isSeniorPoliticalFigure === "Yes" && (
                        <View>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.seniorPoliticalName}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("seniorPoliticalName_childben")}
                                propInputStyle={childBeneficiary.seniorPoliticalNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.enterSeniorName}
                                value={childBeneficiary.seniorPoliticalName}
                                returnKeyType="done"
                                maxLength={gblStrings.maxLength.seniorPoliticalMaxLength}
                                onChangeText={this.onChangeText("childBeneficiary", "seniorPoliticalName")}
                                errorFlag={!childBeneficiary.seniorPoliticalNameValidation}
                                errorText={errMsg}

                            />
                        </View>
                      )}

                </View>
            </View>

        );
    }

    renderBeneficiaryRetirement = () => {
        const { masterLookupStateData} = this.props;
        const {retirementBeneficiaryData,errMsg} = this.state;
        let tempBeneficiaryData = dummyData;
        let tempRelationShipData = dummyData;


        let tempkey = "relationship";


        if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[tempkey] && masterLookupStateData[tempkey].value) {
            tempRelationShipData = masterLookupStateData[tempkey].value;
        }

        tempkey = "ben_type";
        if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[tempkey] && masterLookupStateData[tempkey].value) {
            tempBeneficiaryData = masterLookupStateData[tempkey].value;
        }

        return (

            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {gblStrings.accManagement.beneficiariesOpt}
                    </Text>
                    <TouchableOpacity
                        //   onPress={() => { alert("Expand/Cllapse") }}
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
                    {retirementBeneficiaryData.map((item, index) => {
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
                                   //  changeState={this.onPressDropDownForIRABeneficiary("beneficiaryTypeDropDown", index)}
                                    showDropDown={retirementBeneficiaryData[index].beneficiaryTypeDropDown}
                                    dropDownValue={retirementBeneficiaryData[index].beneficiaryType}
                                    selectedDropDownValue={this.onSelectedIRABeneficiaryDropDownValue("beneficiaryTypeDropDown", index)}
                                    itemToDisplay="value"
                                    dropDownPostition={styles.dropDownPostition}
                                    errorFlag={!retirementBeneficiaryData[index].beneficiaryTypeValidation}
                                    errorText={gblStrings.accManagement.emptyBeneficiaryType}
                                />




                                <GDropDownComponent
                                    inputref={this.setInputRef(`relationshipToAcc${index}`)}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownTextName={styles.dropDownTextName}
                                    textInputStyle={styles.textInputStyle}
                                    dropDownName={gblStrings.accManagement.relationshipToAccHolder}
                                    data={tempRelationShipData}
                                   //  changeState={this.onPressDropDownForIRABeneficiary("relationshipToAccDropDown", index)}
                                    showDropDown={retirementBeneficiaryData[index].relationshipToAccDropDown}
                                    dropDownValue={retirementBeneficiaryData[index].relationshipToAcc}
                                    selectedDropDownValue={this.onSelectedIRABeneficiaryDropDownValue("relationshipToAccDropDown", index)}
                                    itemToDisplay="value"
                                    dropDownPostition={styles.dropDownPostition}
                                    errorFlag={!retirementBeneficiaryData[index].relationshipToAccValidation}
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
                                            value={retirementBeneficiaryData[index].beneficiaryDistPercent}
                                            maxLength={gblStrings.maxLength.distributionPercentage}
                                            keyboardType="decimal-pad"
                                            onChangeText={this.onChangeTextForIRABeneficiary("beneficiaryDistPercent", index)}
                                            onSubmitEditing={this.onSubmitEditing(this[`beneficiaryDistPercent${index}`])}
                                            errorFlag={!retirementBeneficiaryData[index].beneficiaryDistPercentValidation}
                                            errorText={errMsg}

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
                                    value={retirementBeneficiaryData[index].socialSecurityNo}
                                    keyboardType="number-pad"
                                    maxLength={gblStrings.maxLength.ssnNo}
                                    onChangeText={this.onChangeTextForIRABeneficiary("socialSecurityNo", index)}
                                    onSubmitEditing={this.onSubmitEditing(this[`firstName${index}`])}
                                    errorFlag={!retirementBeneficiaryData[index].socialSecurityNoValidation}
                                    errorText={errMsg}
                                    secureTextEntry
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.firstName}
                                </Text>

                                <GInputComponent
                                    inputref={this.setInputRef(`firstName${index}`)}
                                    propInputStyle={styles.customTxtBox}
                                    value={retirementBeneficiaryData[index].firstName}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.firstName}
                                    onChangeText={this.onChangeTextForIRABeneficiary("firstName", index)}
                                    onSubmitEditing={this.onSubmitEditing(this[`middleInitial${index}`])}
                                    errorFlag={!retirementBeneficiaryData[index].firstNameValidation}
                                    errorText={errMsg}

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
                                    value={retirementBeneficiaryData[index].middleInitial}
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
                                    value={retirementBeneficiaryData[index].lastName}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.lastName}
                                    onChangeText={this.onChangeTextForIRABeneficiary("lastName", index)}
                                    onSubmitEditing={this.onSubmitEditing(this[`dob${index}`])}
                                    errorFlag={!retirementBeneficiaryData[index].lastNameValidation}
                                    errorText={errMsg}

                                />



                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.dob}
                                </Text>
                                <GDateComponent
                                    inputref={this.setInputRef(`dob${index}`)}
                                    date={retirementBeneficiaryData[index].dob}
                                    value={retirementBeneficiaryData[index].dob}
                                    placeholder="Select Date"
                                    errorFlag={!retirementBeneficiaryData[index].dobValidation}
                                    errorMsg={errMsg}
                                    maxDate={prevDate}
                                    onDateChange={this.onChangeDateForIRABeneficiary("dob", index)}

                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.emailAddress}
                                </Text>


                                <GInputComponent
                                    inputref={this.setInputRef(`emailAddress${index}`)}
                                    propInputStyle={styles.customTxtBox}
                                    value={retirementBeneficiaryData[index].emailAddress}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.emailID}
                                    onChangeText={this.onChangeTextForIRABeneficiary("emailAddress", index)}
                                    errorFlag={!retirementBeneficiaryData[index].emailAddressValidation}
                                    errorText={errMsg}

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
        const { navigation} = this.props;
        const { getParam } = navigation; 
        const accType = `${getParam('accType', '')}`;

        const {estate,errMsg} = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {accType === "Trust Account"? gblStrings.accManagement.trustInfo :gblStrings.accManagement.estateInfo}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        onPress={this.onClickExpandCollpaseEvent("estate", "isTrustInfoExpanded")}
                    >
                        <Text style={styles.expandCollpaseTxt}>
                            {estate.isTrustInfoExpanded ? "[ - ]" : "[ + ]"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />

                {
                    estate.isTrustInfoExpanded && (
                    <View style={styles.childSectionGrp}>

                        <Text style={styles.lblTxt}>
                            {accType === "Trust Account"?gblStrings.accManagement.trustName :gblStrings.accManagement.estateName}
                        </Text>
                        <GInputComponent
                            //  inputref={(ref)=> this.firstName = ref}
                            inputref={this.setInputRef("name")}
                            value={estate.name}
                            propInputStyle={estate.nameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.name}
                            onChangeText={this.onChangeText("estate", "name")}
                            onSubmitEditing={this.onSubmitEditing(this.creationDate)}
                            errorFlag={!estate.nameValidation}
                            errorText={errMsg}
                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.creationDate}
                        </Text>
                        <GDateComponent
                            inputref={this.setInputRef("creationDate")}
                            date={estate.creationDate}
                            placeholder="Select Date"
                            errorFlag={!estate.creationDateValidation}
                            errorMsg={errMsg}
                            maxDate={prevDate}
                            onDateChange={this.onChangeDate("estate", "creationDate")}
                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("socialSecurityNo")}
                            propInputStyle={estate.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.ssnNoFormat}
                            value={estate.socialSecurityNo}
                            keyboardType="number-pad"
                            maxLength={gblStrings.maxLength.ssnNo}
                            onChangeText={this.onChangeText("estate", "socialSecurityNo")}
                            onSubmitEditing={this.onSubmitEditing(this.addrLine1)}
                            errorFlag={!estate.socialSecurityNoValidation}
                            errorText={errMsg}
                            secureTextEntry

                        />



                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.address}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("addrLine1")}
                            propInputStyle={estate.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine1}
                            maxLength={gblStrings.maxLength.emplAddress1}
                            value={estate.addrLine1}
                            onChangeText={this.onChangeText("estate", "addrLine1")}
                            onSubmitEditing={this.onSubmitEditing(this.addrLine2)}
                            errorFlag={!estate.addrLine1Validation}
                            errorText={errMsg}
                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2")}
                            propInputStyle={estate.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            value={estate.addrLine2}
                            onChangeText={this.onChangeText("estate", "addrLine2")}
                            onSubmitEditing={this.onSubmitEditing(this.zipcode)}
                            errorFlag={!estate.addrLine2Validation}
                            errorText={errMsg}


                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.zipcode}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("zipcode")}
                            propInputStyle={estate.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterZip}
                            value={estate.zipcode}
                            maxLength={gblStrings.maxLength.zipCode}
                            returnKeyType="done"
                            onChangeText={this.onChangeText("estate", "zipcode")}
                            keyboardType="number-pad"
                            onSubmitEditing={this.onSubmitZipEditing("estate", "zipcode", this.city)}
                            errorFlag={!estate.zipcodeValidation}
                            errorText={errMsg}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.cityAndState}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("city")}
                            propInputStyle={estate.cityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterCity}
                            maxLength={gblStrings.maxLength.city}
                            value={estate.city}
                            onChangeText={this.onChangeText("estate", "city")}
                            onSubmitEditing={this.onSubmitEditing(this.stateCity)}
                            errorFlag={!estate.cityValidation}
                            errorText={errMsg}
                            editable={false}

                        />
                        <GInputComponent
                            inputref={this.setInputRef("stateCity")}
                            propInputStyle={estate.stateCityValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder={gblStrings.accManagement.enterState}
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.state}
                            value={estate.stateCity}
                            onChangeText={this.onChangeText("estate", "stateCity")}
                            onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                            errorFlag={!estate.stateCityValidation}
                            errorText={errMsg}
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
                                selected={!!((estate.isYourPhysicalAddresSame !== null && estate.isYourPhysicalAddresSame === "Yes"))}
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
                                selected={!!((estate.isYourPhysicalAddresSame !== null && estate.isYourPhysicalAddresSame === "No"))}
                                onPress={this.onPressRadio("estate", "isYourPhysicalAddresSame", "No")}

                            />
                        </View>
                        {!estate.isYourPhysicalAddresSameValidation && (
                            <Text style={styles.errMsg}>
                                {errMsg}
                            </Text>
                          )}

                        {
                            estate.isYourPhysicalAddresSame === "No" && (
                            <View>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.address}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine1_Phy")}
                                    propInputStyle={estate.addrLine1_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine1}
                                    maxLength={gblStrings.maxLength.emplAddress1}
                                    value={estate.addrLine1_Phy}
                                    onChangeText={this.onChangeText("estate", "addrLine1_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.addrLine2_Phy)}
                                    errorFlag={!estate.addrLine1_PhyValidation}
                                    errorText={errMsg}
                                />
                                <GInputComponent
                                    inputref={this.setInputRef("addrLine2_Phy")}
                                    propInputStyle={estate.addrLine2_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.empAddrLine2}
                                    maxLength={gblStrings.maxLength.addressLine2}
                                    value={estate.addrLine2_Phy}
                                    onChangeText={this.onChangeText("estate", "addrLine2_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.zipcode_Phy)}
                                    errorFlag={!estate.addrLine2_PhyValidation}
                                    errorText={errMsg}


                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.zipcode}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("zipcode_Phy")}
                                    propInputStyle={estate.zipcode_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterZip}
                                    value={estate.zipcode_Phy}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    returnKeyType="done"
                                    onChangeText={this.onChangeText("estate", "zipcode_Phy")}
                                    keyboardType="number-pad"
                                    onSubmitEditing={this.onSubmitZipEditing("estate", "zipcode_Phy", this.city_Phy)}
                                    errorFlag={!estate.zipcode_PhyValidation}
                                    errorText={errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.cityAndState}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("city_Phy")}
                                    propInputStyle={estate.city_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    maxLength={gblStrings.maxLength.city}
                                    value={estate.city_Phy}
                                    onChangeText={this.onChangeText("estate", "city_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.stateCity_Phy)}
                                    errorFlag={!estate.city_PhyValidation}
                                    errorText={errMsg}
                                    editable={false}


                                />
                                <GInputComponent
                                    inputref={this.setInputRef("stateCity_Phy")}
                                    propInputStyle={estate.stateCity_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder={gblStrings.accManagement.enterState}
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.state}
                                    value={estate.stateCity_Phy}
                                    onChangeText={this.onChangeText("estate", "stateCity_Phy")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                    errorFlag={!estate.stateCity_PhyValidation}
                                    errorText={errMsg}
                                    editable={false}

                                />

                            </View>
                          )}


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
                                selected={!!((estate.isFederalLawApplicable !== null && estate.isFederalLawApplicable === "Yes"))}
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
                                selected={!!((estate.isFederalLawApplicable !== null && estate.isFederalLawApplicable === "No"))}
                                onPress={this.onPressRadio("estate", "isFederalLawApplicable", "No")}

                            />
                        </View>

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.specifyState}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("specifyState")}
                            value={estate.specifyState}
                            propInputStyle={estate.specifyStateValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.country}
                            onChangeText={this.onChangeText("estate", "specifyState")}
                            onSubmitEditing={this.onSubmitEditing(this.orgCountry)}
                            errorFlag={!estate.specifyStateValidation}
                            errorText={errMsg}
                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.orgCountry}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("orgCountry")}
                            value={estate.orgCountry}
                            propInputStyle={estate.orgCountryValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            returnKeyType="done"
                            maxLength={gblStrings.maxLength.country}
                            onChangeText={this.onChangeText("estate", "orgCountry")}
                            errorFlag={!estate.orgCountryValidation}
                            errorText={errMsg}
                        />

                       {
                            accType === "Trust Account" && (
                            <View style={styles.commonColView}>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isBusinessTrust}
                                </Text>
                                {this.renderYesNoRadio("estate","isBusinessTrust")}
                                

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isBrokerDealerTrust}
                                </Text>
                                {this.renderYesNoRadio("estate","isBrokerOrDealerTrust")}

                                {this.renderCustomDropDown({
                                    section: "estate",
                                    stateKey: "brokerOrDealer",
                                    dropDownName: "brokerOrDealerDropDown",
                                    lblDropdownName: gblStrings.accManagement.isBrokerOrDealer,
                                    isOptional: true
                                })
                                }

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isBankTrust}
                                </Text>
                                {this.renderYesNoRadio("estate", "isBankTrust")}

                                {this.renderCustomDropDown({
                                    section: "estate",
                                    stateKey: "bankTrustType",
                                    dropDownName: "bankTrustTypeDropDown",
                                    lblDropdownName: gblStrings.accManagement.bankTrustType,
                                    isOptional: true
                                })
                                }

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isForeignUSBranchTrust}
                                </Text>
                                {this.renderYesNoRadio("estate", "isForeignUSBranchTrust")}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.businessTrust}
                                </Text>
                                {this.renderYesNoRadio("estate", "businessTrust")}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isMoneyTransmitterOrCurrencyExchangeOrgnaised}
                                </Text>
                                {this.renderYesNoRadio("estate", "isMoneyTranOrCurrencyExchangeOrgnaised")}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isCorrespondentAccountsOffersProvided}
                                </Text>
                                {this.renderYesNoRadio("estate", "isCorrespondentAccountsOffersProvided")}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.typeOfFiniancialInstitution}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("typeOfFiniancialInstitution")}
                                    value={estate.typeOfFiniancialInstitution}
                                    propInputStyle={estate.typeOfFiniancialInstitutionValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.country}
                                    onChangeText={this.onChangeText("estate", "typeOfFiniancialInstitution")}
                                    errorFlag={!estate.typeOfFiniancialInstitutionValidation}
                                    errorText={errMsg}
                                />
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isCorrespondentAccountsForeignOffersProvided}
                                </Text>
                                {this.renderYesNoRadio("estate", "isCorrespondentAccountsForeignOffersProvided")}
                                
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.VCMFundAccountNumbers}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("VCMFundAccountNumbers")}
                                    value={estate.VCMFundAccountNumbers}
                                    propInputStyle={estate.VCMFundAccountNumbersValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.country}
                                    onChangeText={this.onChangeText("estate", "VCMFundAccountNumbers")}
                                    errorFlag={!estate.VCMFundAccountNumbersValidation}
                                    errorText={errMsg}
                                />


                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isFinanacialInstitutionDescribed}
                                </Text>
                                {this.renderYesNoRadio("estate", "isFinanacialInstitutionDescribed")}
    
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.describeFinanacialInstitution}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("finanacialInstitutionDesc")}
                                    value={estate.finanacialInstitutionDesc}
                                    propInputStyle={estate.finanacialInstitutionDescValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder=""
                                    multiline
                                    numberOfLines = {8}
                                    maxLength={gblStrings.maxLength.country}
                                    onChangeText={this.onChangeText("estate", "finanacialInstitutionDesc")}
                                    errorFlag={!estate.finanacialInstitutionDescValidation}
                                    errorText={errMsg}
                                />

                                      
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isPhysicalPresenceMaintained}
                                </Text>
                                {this.renderYesNoRadio("estate", "isPhysicalPresenceMaintained")}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isIndividualEmploymentThere}
                                </Text>
                                {this.renderYesNoRadio("estate", "isIndividualEmploymentThere")}

                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.isTrustMaintainRecords}
                                </Text>
                                {this.renderYesNoRadio("estate", "isTrustMaintainRecords")}
    

                            </View>
                          )}
                        

                    </View>
                  )}
            </View>

        );
    }

    renderTrusteeInfo = () => {
        const { masterLookupStateData} = this.props;
        const {estate,errMsg} = this.state;

       let dropDownData = [];
       const tempkey ="suffix";
       if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[tempkey] && masterLookupStateData[tempkey].value) {
        dropDownData = masterLookupStateData[tempkey].value;
       }
       const tempSuffixData =dropDownData;
       AppUtils.debugLog(`estate.trusteeData.length::: ${estate.trusteeData.length}`);

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
                            {estate.isTrusteeInfoExpanded ? "[ - ]" : "[ + ]"}
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
                    estate.isTrusteeInfoExpanded && (
                    <View style={styles.childSectionGrp}>
                        {estate.trusteeData.map((item, index) => {
                            const key = `trustee${index}`;
                            return (
                                <View style={styles.commonColView}
                                    key={key}
                                >
                                   { index === 1 && (
                                   <>
                                        <View style={styles.accTypeSelectSection}>

                                            <Text style={styles.headings}>
                                                {gblStrings.accManagement.coTrusteeOrExector}
                                            </Text>
                                           
                                        </View>
                                        
                                        <Text style={styles.lblLine} />
                                   </>
                                 )}


                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.firstName}
                                    </Text>

                                    <GInputComponent
                                        inputref={this.setInputRef(`firstName${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        value={item.firstName}
                                        placeholder=""
                                        maxLength={gblStrings.maxLength.firstName}
                                        onChangeText={this.onChangeTextForEstateTrust("firstName", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`middleInitial${index}`])}
                                        errorFlag={!item.firstNameValidation}
                                        errorText={errMsg}

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
                                        value={item.middleInitial}
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
                                        value={item.lastName}
                                        placeholder=""
                                        maxLength={gblStrings.maxLength.lastName}
                                        onChangeText={this.onChangeTextForEstateTrust("lastName", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`suffix${index}`])}
                                        errorFlag={!item.lastNameValidation}
                                        errorText={errMsg}

                                    />

                                    <View style={styles.dropDownViewPrefix}>
                                        <GDropDownComponent
                                            inputref={this.setInputRef(`suffix${index}`)}
                                            dropDownLayout={styles.dropDownLayout}
                                            dropDownTextName={styles.dropDownTextName}
                                            textInputStyle={styles.textInputStyle}
                                            dropDownName={gblStrings.accManagement.suffix}
                                            data={tempSuffixData}
                                            dropDownValue={item.suffix}
                                            selectedDropDownValue={this.onSelectedEstateTrustDropDownValue("suffixDropDown", index)}
                                            //  itemToDisplay="value"
                                            //  dropDownPostition={{ ...styles.dropDownPostition, top: scaledHeight(160) }}
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
                                        value={item.memberNumber}
                                        keyboardType="number-pad"
                                        maxLength={gblStrings.maxLength.ssnNo}
                                        onChangeText={this.onChangeTextForEstateTrust("memberNumber", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`socialSecurityNo${index}`])}
                                        errorFlag={!item.memberNumberValidation}
                                        errorText={errMsg}
                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.socialSecurityNo}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef(`socialSecurityNo${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.ssnNoFormat}
                                        value={item.socialSecurityNo}
                                        keyboardType="number-pad"
                                        maxLength={gblStrings.maxLength.ssnNo}
                                        onChangeText={this.onChangeTextForEstateTrust("socialSecurityNo", index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`dob${index}`])}
                                        errorFlag={!item.socialSecurityNoValidation}
                                        errorText={errMsg}
                                        secureTextEntry
                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.dob}
                                    </Text>
                                    <GDateComponent
                                        inputref={this.setInputRef(`dob${index}`)}
                                        date={item.dob}
                                        value={item.dob}
                                        placeholder="Select Date"
                                        errorFlag={!item.dobValidation}
                                        errorMsg={errMsg}
                                        maxDate={prevDate}
                                        onDateChange={this.onChangeDateForEstateTrust("dob", index)}

                                    />



                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.citizenship}
                                    </Text>
                                    {this.renderRadioForEstateTrust("citizenship", 30, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp,index)}

                                    {
                                        item.citizenship !== "U.S" && (
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
                                      )}


                                    
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
                                        value={item.addrLine1}
                                        onChangeText={this.onChangeTextForEstateTrust("addrLine1",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`addrLine2${index}`])}
                                        errorFlag={!item.addrLine1Validation}
                                        errorText={errMsg}
                                    />
                                    <GInputComponent
                                        inputref={this.setInputRef("addrLine2")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.empAddrLine2}
                                        maxLength={gblStrings.maxLength.addressLine2}
                                        value={item.addrLine2}
                                        onChangeText={this.onChangeTextForEstateTrust("addrLine2",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`zipcode${index}`])}
                                        errorFlag={!item.addrLine2Validation}
                                        errorText={errMsg}


                                    />


                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.zipcode}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef("zipcode")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.enterZip}
                                        value={item.zipcode}
                                        maxLength={gblStrings.maxLength.zipCode}
                                        returnKeyType="done"
                                        onChangeText={this.onChangeTextForEstateTrust("zipcode",index)}
                                        keyboardType="number-pad"
                                        onSubmitEditing={this.onSubmitZipTrusteeEditing("estate", "zipcode", this[`city${index}`],index)}
                                        errorFlag={!item.zipcodeValidation}
                                        errorText={errMsg}
                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.cityAndState}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef("city")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.enterCity}
                                        maxLength={gblStrings.maxLength.city}
                                        value={item.city}
                                        onChangeText={this.onChangeTextForEstateTrust("city",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`stateCity${index}`])}
                                        errorFlag={!item.cityValidation}
                                        errorText={errMsg}
                                        editable={item.citizenship !== "U.S"}

                                    />
                                    <GInputComponent
                                        inputref={this.setInputRef("stateCity")}
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.enterState}
                                        returnKeyType="done"
                                        maxLength={gblStrings.maxLength.state}
                                        value={item.stateCity}
                                        onChangeText={this.onChangeTextForEstateTrust("stateCity",index)}
                                        //  onSubmitEditing={this.onSubmitEditing(this[`stateCity${index}`])}
                                        errorFlag={!estate.stateCityValidation}
                                        errorText={errMsg}
                                        editable={item.citizenship !== "U.S"}

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
                                            selected={!!((item.isYourPhysicalAddresSame !== null && item.isYourPhysicalAddresSame === "Yes"))}
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
                                            selected={!!((item.isYourPhysicalAddresSame !== null && item.isYourPhysicalAddresSame === "No"))}
                                            onPress={this.onPressRadioForEstateTrust("isYourPhysicalAddresSame", index,"No")}

                                        />
                                    </View>
                                    {!item.isYourPhysicalAddresSameValidation && (
                                        <Text style={styles.errMsg}>
                                            {errMsg}
                                        </Text>
                                      )}

                                    {
                                        item.isYourPhysicalAddresSame === "No" && (
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
                                                value={item.addrLine1_Phy}
                                                onChangeText={this.onChangeTextForEstateTrust( "addrLine1_Phy",index)}
                                                onSubmitEditing={this.onSubmitEditing(this[`addrLine2_Phy${index}`])}
                                                errorFlag={!item.addrLine1_PhyValidation}
                                                errorText={errMsg}
                                            />
                                            <GInputComponent
                                                inputref={this.setInputRef("addrLine2_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.empAddrLine2}
                                                maxLength={gblStrings.maxLength.addressLine2}
                                                value={item.addrLine2_Phy}
                                                onChangeText={this.onChangeTextForEstateTrust("addrLine2_Phy",index)}
                                                onSubmitEditing={this.onSubmitEditing(this[`zipcode_Phy${index}`])}
                                                errorFlag={!item.addrLine2_PhyValidation}
                                                errorText={errMsg}


                                            />


                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.zipcode}
                                            </Text>
                                            <GInputComponent
                                                inputref={this.setInputRef("zipcode_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.enterZip}
                                                value={item.zipcode_Phy}
                                                maxLength={gblStrings.maxLength.zipCode}
                                                returnKeyType="done"
                                                onChangeText={this.onChangeTextForEstateTrust("zipcode_Phy",index)}
                                                keyboardType="number-pad"
                                                onSubmitEditing={this.onSubmitZipTrusteeEditing("estate", "zipcode_Phy", this[`city_Phy${index}`],index)}
                                                errorFlag={!item.zipcode_PhyValidation}
                                                errorText={errMsg}
                                            />

                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.cityAndState}
                                            </Text>
                                            <GInputComponent
                                                inputref={this.setInputRef("city_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.enterCity}
                                                maxLength={gblStrings.maxLength.city}
                                                value={item.city_Phy}
                                                onChangeText={this.onChangeTextForEstateTrust( "city_Phy",index)}
                                                onSubmitEditing={this.onSubmitEditing(this[`stateCity_Phy${index}`])}
                                                errorFlag={!item.city_PhyValidation}
                                                errorText={errMsg}
                                                editable={item.citizenship !== "U.S"}


                                            />
                                            <GInputComponent
                                                inputref={this.setInputRef("stateCity_Phy")}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder={gblStrings.accManagement.enterState}
                                                returnKeyType="done"
                                                maxLength={gblStrings.maxLength.state}
                                                value={item.stateCity_Phy}
                                                onChangeText={this.onChangeTextForEstateTrust("stateCity_Phy",index)}
                                               //  onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                                errorFlag={!item.stateCity_PhyValidation}
                                                errorText={errMsg}
                                                editable={item.citizenship !== "U.S"}

                                            />

                                        </View>
                                      )}

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
                                        value={item.residencePhoneNo}
                                        maxLength={gblStrings.maxLength.phoneNo}
                                         keyboardType="phone-pad"
                                        onChangeText={this.onChangeTextForEstateTrust("residencePhoneNo",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`residencePhoneNo${index}`])}
                                        errorFlag={!item.residencePhoneNoValidation}
                                        errorText={errMsg}
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
                                        value={item.busniessPhoneNo}
                                        maxLength={gblStrings.maxLength.phoneNo}
                                        keyboardType="phone-pad"
                                        onChangeText={this.onChangeTextForEstateTrust("busniessPhoneNo",index)}
                                        onSubmitEditing={this.onSubmitEditing(this[`emailAddress${index}`])}
                                        errorFlag={!item.busniessPhoneNoValidation}
                                        errorText={errMsg}
                                    />

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.emailAddress}
                                    </Text>
                                    <GInputComponent
                                        inputref={this.setInputRef(`emailAddress${index}`)}
                                        propInputStyle={styles.customTxtBox}
                                        value={item.emailAddress}
                                        placeholder=""
                                        returnKeyType="done"
                                        maxLength={gblStrings.maxLength.emailID}
                                        onChangeText={this.onChangeTextForEstateTrust("emailAddress", index)}
                                        errorFlag={!item.emailAddressValidation}
                                        errorText={errMsg}

                                    />
                                </View>
                            );
                        }
                        )}
                    </View>
                  )}
            </View>

        );
    }

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };
    /*
    scrollToItem = (itemRef) => {
        AppUtils.debugLog("itemRef--------------:::" + JSON.stringify(itemRef));

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
        AppUtils.debugLog(`RENDER::: OpenAccPageTwo ::>>>  ::::${JSON.stringify(this.props)}`);

        const { navigation,accOpeningData,masterLookupStateData} = this.props;
        const { getParam } = navigation; 
        const accType = `${getParam('accType', '')}`;
        const tempAccTypeCAPS = accType.toUpperCase();
        AppUtils.debugLog(`render accType::::>${accType}`);
        const {enableScrollViewScroll,userAvatar} = this.state;


        const currentPage = 2;
        return (

            <KeyboardAvoidingView
                style={styles.container}
                //  keyboardVerticalOffset = { Header.HEIGHT + 20 }  
                //  behavior="padding"
                behavior={(Platform.OS === 'ios') ? "padding" : null}
                keyboardVerticalOffset={Platform.select({ ios: 20, android: 500 })}
            >
                {
                    (accOpeningData.isLoading || masterLookupStateData.isLoading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}
                    scrollEnabled={enableScrollViewScroll}
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
                                userAvatar !== "" && <Image source={userAvatar} style={styles.userAvatar} />
                            }
                        </View>
                    </View>

                    {
                        (accType === "Estate Account" || accType === "Trust Account") ?
                        <this.renderEstateInfoSection /> : <this.renderIndividualSection />

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
    uploadAavatarImg: null,
    getStateCity: null,
    saveAccountOpening: null,
    getRankData: null,
    getAddressFormat: null

};

export default OpenAccPageTwoComponent;

