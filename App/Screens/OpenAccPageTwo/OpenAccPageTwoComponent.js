import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Switch } from 'react-native';
import PropTypes from "prop-types";
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import { GButtonComponent, GInputComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner, GDateComponent, GDropDownComponent, GSingletonClass, showAlert } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';
import { emailRegex } from '../../Constants/RegexConstants';

const isEmpty = value => typeof value === 'undefined' || value === null || value === false;
const isNumeric = value => !isEmpty(value) && !Number.isNaN(Number(value));
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

const date = new Date().getDate(); //  Current Date
const month = new Date().getMonth() + 1; //  Current Month
const year = new Date().getFullYear(); //  Current Year
const currentdate = `${month}-${date}-${year}`;
const switchStyle = { flase: '#DBDBDB', true: '#444444' };
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
        const { initialState } = this.props;
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
                genderKeyValue: "",
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
                isYourPhysicalAddresSame: "",
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
                phoneType4: "",
                phoneType4DropDown: false,
                telePhoneNo4: "",
                contactDuringTelePhone4: "",
                contactDuringTelePhone4DropDown: false,

                mobile: {
                    contactDetails: [
                        {
                            phoneNumber: "",
                            phoneType: "Mobile",
                            callTimePreference: "",  
                            isPrimary: true,
                            phoneNumberValidation: true,
                            phoneTypeValidation: true,
                            contactDuring:"",
                            contactDuringValidation: true,

                        }
                    ],
                },
                home: {
                    contactDetails: [
                        {
                            phoneNumber: "",
                            phoneType: "Home",
                            callTimePreference: "",
                            isPrimary: true,
                            phoneNumberValidation: true,
                            phoneTypeValidation: true,
                            contactDuring:"",
                            contactDuringValidation: true,
                        }
                    ],
                },
                work: {
                    contactDetails: [
                        {
                            phoneNumber: "",
                            phoneType: "Work",
                            callTimePreference: "",
                            isPrimary: true,
                            phoneNumberValidation: true,
                            phoneTypeValidation: true,
                            contactDuring:"",
                            contactDuringValidation: true,
                        }
                    ],
                },
                fax: {
                    contactDetails: [
                        {
                            phoneNumber: "",
                            phoneType: "Fax",
                            callTimePreference: "",
                            isPrimary: true,
                            phoneNumberValidation: true,
                            phoneTypeValidation: true,
                            contactDuring:"",
                            contactDuringValidation: true,
                        }
                    ],
                },
                emailInfo: [
                    {
                        emailAddress: initialState.email || "",
                        isPrimary: true,
                        emailAddressValidation: true

                    }
                ],




                phoneType4Validation: true,
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

                empAddrLine1Validation: true,
                empAddrLine2Validation: true,
                empZipcodeValidation: true,
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
                isContactInfoExpanded: false,
                isPhoneInfoExpanded: false,
                isEmailInfoExpanded: false



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
                isYourPhysicalAddresSame: "",
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
                phoneType4: "",
                phoneType4DropDown: false,
                telePhoneNo4: "",
                contactDuringTelePhone4: "",
                contactDuringTelePhone4DropDown: false,


                mobile: {
                    contactDetails: [
                        {
                            phoneNumber: "",
                            phoneType: "Mobile",
                            contactDuring: "",
                            isPrimary: true,
                            phoneNumberValidation: true,
                            phoneTypeValidation: true,
                            contactDuringValidation: true,

                        }
                    ],
                },
                home: {
                    contactDetails: [
                        {
                            phoneNumber: "",
                            phoneType: "Home",
                            contactDuring: "",
                            isPrimary: true,
                            phoneNumberValidation: true,
                            phoneTypeValidation: true,
                            contactDuringValidation: true,

                        }
                    ],
                },
                work: {
                    contactDetails: [
                        {
                            phoneNumber: "",
                            phoneType: "Work",
                            contactDuring: "",
                            isPrimary: true,
                            phoneNumberValidation: true,
                            phoneTypeValidation: true,
                            contactDuringValidation: true,

                        }
                    ],
                },
                fax: {
                    contactDetails: [
                        {
                            phoneNumber: "",
                            phoneType: "Fax",
                            contactDuring: "",
                            isPrimary: true,
                            phoneNumberValidation: true,
                            phoneTypeValidation: true,
                            contactDuringValidation: true,

                        }
                    ],
                },
                emailInfo: [
                    {
                        emailAddress: "",
                        isPrimary: true,
                        emailAddressValidation: true

                    }
                ],


                phoneType4Validation: true,
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

                empAddrLine1Validation: true,
                empAddrLine2Validation: true,
                empZipcodeValidation: true,
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

                isPersonalInfoExpanded: false,
                isEmploymentInfoExpanded: false,
                isFinancialInfoExpanded: false,
                isMilitaryInfoExpanded: false,
                isRegulatoryInfoExpanded: false,
                isContactInfoExpanded: false,
                isPhoneInfoExpanded: false,
                isEmailInfoExpanded: false
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
                isContactInfoExpanded: false,
                isPhoneInfoExpanded: false,
                isEmailInfoExpanded: false

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
                isYourPhysicalAddresSame: "",
                orgCountry: "",
                mobileNo: "",
                emailAddress: "",
                socialSecurityNo: "",
                specifyState: "",
                isBusinessTrust: "",
                isBrokerOrDealerTrust: "",
                brokerOrDealer: "",
                isBankTrust: "",
                isForeignUSBranchTrust: "",
                businessTrust: "",
                isMoneyTranOrCurrencyExchangeOrgnaised: "",
                isCorrespondentAccountsOffersProvided: "",
                typeOfFiniancialInstitution: "",
                VCMFundAccountNumbers: "",
                isFinanacialInstitutionDescribed: "",
                finanacialInstitutionDesc: "",
                isPhysicalPresenceMaintained: "",
                isIndividualEmploymentThere: "",
                isTrustMaintainRecords: "",
                isCorrespondentAccountsForeignOffersProvided: "",
                bankTrustType: "",
                USFederalLawCond: "",

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
                isCorrespondentAccountsForeignOffersProvidedValidation: true,
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
                        isYourPhysicalAddresSame: "",
                        mobileNo: "",
                        memberPhoneNo: "",
                        busniessPhoneNo: "",
                        residencePhoneNo: "",
                        emailAddress: "",
                        memberNumber: "",
                        socialSecurityNo: "",

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


                isPersonalInfoExpanded: false,
                isEmploymentInfoExpanded: false,
                isFinancialInfoExpanded: false,
                isMilitaryInfoExpanded: false,
                isRegulatoryInfoExpanded: false,
                isContactInfoExpanded: false,
                isPhoneInfoExpanded: false,
                isEmailInfoExpanded: false


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
                objIndex: ""
            },
            isUSPSStateAPICalled: false,
            isUSPSAddrFormatAPICalled: false,


            //  others
            ...openAccPageTwo


        };
        AppUtils.debugLog(`Constructor 2::${JSON.stringify(this.state)}`);

    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

        AppUtils.debugLog(`componentDidMount::::> ${this.props}`);
        const { masterLookupStateData, getCompositeLookUpData } = this.props;
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
            const tempkey = compositePayloadData[+i];
            if (this.props && masterLookupStateData && !masterLookupStateData[`${tempkey}`]) {
                payload.push(tempkey);
            }
        }

        getCompositeLookUpData(payload);


    }

    componentDidUpdate(prevProps, prevState) {
        AppUtils.debugLog(`componentDidUpdate::::> ${prevState}`);
        const { accOpeningData, addressFormatData, clearReduxKeyData } = this.props;



        if (this.props !== prevProps) {
            const responseKey = ActionTypes.PERSONAL_INFO_SAVE_OPENING_ACCT;
            if (accOpeningData[`${responseKey}`]) {
                if (accOpeningData[`${responseKey}`] !== prevProps.accOpeningData[`${responseKey}`]) {
                    const tempResponse = accOpeningData[`${responseKey}`];
                    if (tempResponse.status) {
                        const msg = tempResponse.status;
                        AppUtils.debugLog(`Account Type Saved ::: :: ${msg}`);
                        showAlert(gblStrings.common.appName, tempResponse.status, gblStrings.common.ok);
                        AppUtils.debugLog(tempResponse.status);
                    } else {
                        showAlert(gblStrings.common.appName, tempResponse.message, gblStrings.common.ok);
                        AppUtils.debugLog(tempResponse.message);
                    }
                }
            }


            const uploadImgKey = ActionTypes.UPLOAD_AVATAR;
            if (accOpeningData[`${uploadImgKey}`]) {
                if (accOpeningData[`${uploadImgKey}`] !== prevProps.accOpeningData[`${uploadImgKey}`]) {
                    const tempResponse = accOpeningData[`${uploadImgKey}`];
                    if (tempResponse && tempResponse.b) {
                        if (tempResponse.b.Location) {
                            AppUtils.debugLog(`Image Uploaded Successfully \n::${tempResponse.b.Location}`);
                            showAlert(gblStrings.common.appName, `Image Uploaded Successfully \n::${tempResponse.b.Location}`, gblStrings.common.ok);

                        }
                    }
                }
            }

        }

        const stateCityKey = ActionTypes.GET_STATECITY;
        if (addressFormatData[`${stateCityKey}`]) {
            clearReduxKeyData(stateCityKey, "");

        }

        const addressKey = ActionTypes.GET_ADDRESSFORMAT;
        if (addressFormatData[`${addressKey}`]) {
            clearReduxKeyData(addressKey, "");

        }



    }

    // #TODO


    static getDerivedStateFromProps(nextProps, prevState) {


        const { addressFormatData } = nextProps;

        const { currentZipCodeRef, estate } = prevState;
        const {
            //  stateKey = "",
            keyName = "",
            objIndex = -1,
        } = currentZipCodeRef;

        AppUtils.debugLog(`getDerivedStateFromProps currentZipCodeRef ::::> ${JSON.stringify(currentZipCodeRef)}`);


        const stateCityKey = ActionTypes.GET_STATECITY;
        if (addressFormatData[`${stateCityKey}`]) {
            const tempResponse = addressFormatData[`${stateCityKey}`];
            if (tempResponse && tempResponse.City) {
                if (keyName === "empZipcode") {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            empCity: tempResponse.City,
                            empStateCity: tempResponse.State,
                            empZipcodeValidation: true

                        }
                    });
                }

                if (keyName === "zipcode_Phy" && objIndex !== -1) {
                    const newItems = [...estate.trusteeData];
                    newItems[+objIndex].city_Phy = tempResponse.City;
                    newItems[+objIndex].stateCity_Phy = tempResponse.State;
                    newItems[+objIndex].zipcode_PhyValidation = true;
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            trusteeData: newItems

                        }
                    });
                }

                if (keyName === "zipcode" && objIndex !== -1) {
                    const newItems = [...estate.trusteeData];
                    newItems[+objIndex].city = tempResponse.City;
                    newItems[+objIndex].stateCity = tempResponse.State;
                    newItems[+objIndex].zipcodeValidation = true;


                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            trusteeData: newItems

                        }
                    });
                }

                if (keyName === "zipcode_Phy" && objIndex === -1) {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            city_Phy: tempResponse.City,
                            stateCity_Phy: tempResponse.State,
                            zipcode_PhyValidation: true

                        }
                    });
                }


                if (keyName === "zipcode" && objIndex === -1) {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            city: tempResponse.City,
                            stateCity: tempResponse.State,
                            zipcodeValidation: true

                        }
                    });
                }
            }

            if (tempResponse && tempResponse.ErrorNumber && tempResponse.Description) {
                if (keyName === "empZipcode") {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            empCity: tempResponse.City,
                            empStateCity: tempResponse.State,
                            empZipcodeValidation: false

                        },
                        errMsg: tempResponse.Description
                    });
                }

                if (keyName === "zipcode_Phy" && objIndex !== -1) {
                    const newItems = [...estate.trusteeData];
                    newItems[+objIndex].city_Phy = tempResponse.City;
                    newItems[+objIndex].stateCity_Phy = tempResponse.State;
                    newItems[+objIndex].zipcode_PhyValidation = false;

                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            trusteeData: newItems

                        },
                        errMsg: "Invalid address"

                    });
                }

                if (keyName === "zipcode" && objIndex !== -1) {
                    const newItems = [...estate.trusteeData];
                    newItems[+objIndex].city = tempResponse.City;
                    newItems[+objIndex].stateCity = tempResponse.State;
                    newItems[+objIndex].zipcodeValidation = false;


                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            trusteeData: newItems

                        },
                        errMsg: tempResponse.Description

                    });
                }

                if (keyName === "zipcode_Phy" && objIndex === -1) {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            city_Phy: tempResponse.City,
                            stateCity_Phy: tempResponse.State,
                            zipcode_PhyValidation: false

                        },
                        errMsg: tempResponse.Description
                    });
                }


                if (keyName === "zipcode" && objIndex === -1) {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            city: tempResponse.City,
                            stateCity: tempResponse.State,
                            zipcodeValidation: false

                        },
                        errMsg: tempResponse.Description

                    });
                }
            }

        }


        const addressKey = ActionTypes.GET_ADDRESSFORMAT;
        if (addressFormatData[`${addressKey}`]) {
            const tempResponse = addressFormatData[`${addressKey}`];
            if (tempResponse && tempResponse.City) {
                if (keyName === "empZipcode") {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            empCity: tempResponse.City,
                            empStateCity: tempResponse.State,
                            empAddrLine1: tempResponse.Address1 || "",
                            empAddrLine2: tempResponse.Address2 || "",
                            empAddrLine1Validation: true,
                            empAddrLine2Validation: true
                        }
                    });
                }
                if (keyName === "zipcode_Phy" && objIndex !== -1) {
                    const newItems = [...estate.trusteeData];
                    newItems[+objIndex].city_Phy = tempResponse.City;
                    newItems[+objIndex].stateCity_Phy = tempResponse.State;
                    newItems[+objIndex].addrLine1_Phy = tempResponse.Address1 || "";
                    newItems[+objIndex].addrLine2_Phy = tempResponse.Address2 || "";
                    newItems[+objIndex].addrLine1_PhyValidation = true;
                    newItems[+objIndex].addrLine2_PhyValidation = true;

                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            trusteeData: newItems

                        }
                    });
                }
                if (keyName === "zipcode" && objIndex !== -1) {
                    const newItems = [...estate.trusteeData];
                    newItems[+objIndex].city = tempResponse.City;
                    newItems[+objIndex].stateCity = tempResponse.State;
                    newItems[+objIndex].addrLine1 = tempResponse.Address1 || "";
                    newItems[+objIndex].addrLine2 = tempResponse.Address2 || "";
                    newItems[+objIndex].addrLine1Validation = true;
                    newItems[+objIndex].addrLine2Validation = true;

                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            trusteeData: newItems

                        }
                    });
                }
                if (keyName === "zipcode_Phy" && objIndex === -1) {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            city_Phy: tempResponse.City,
                            stateCity_Phy: tempResponse.State,
                            addrLine1_Phy: tempResponse.Address1 || "",
                            addrLine2_Phy: tempResponse.Address2 || "",
                            addrLine1_PhyValidation: true,
                            addrLine2_PhyValidation: true
                        }
                    });
                }
                if (keyName === "zipcode" && objIndex === -1) {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            city: tempResponse.City,
                            stateCity: tempResponse.State,
                            addrLine1: tempResponse.Address1 || "",
                            addrLine2: tempResponse.Address2 || "",
                            addrLine1Validation: true,
                            addrLine2Validation: true
                        }
                    });
                }

            }

            if (tempResponse && tempResponse.ErrorNumber && tempResponse.Description) {
                if (currentZipCodeRef.keyName === "empZipcode") {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            // empAddrLine1: "",
                            // empAddrLine2: ""
                            empAddrLine1Validation: false,
                            empAddrLine2Validation: false
                        },
                        errMsg: tempResponse.Description

                    });
                }

                if (currentZipCodeRef.keyName === "zipcode_Phy" && objIndex !== -1) {
                    const newItems = [...estate.trusteeData];
                    newItems[+objIndex].addrLine1_Phy = "";
                    newItems[+objIndex].addrLine2_Phy = "";
                    newItems[+objIndex].addrLine1_PhyValidation = false;
                    newItems[+objIndex].addrLine2_PhyValidation = false;

                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            trusteeData: newItems

                        },
                        errMsg: tempResponse.Description

                    });
                }

                if (currentZipCodeRef.keyName === "zipcode" && objIndex !== -1) {
                    const newItems = [...estate.trusteeData];
                    newItems[+objIndex].addrLine1 = "";
                    newItems[+objIndex].addrLine2 = "";
                    newItems[+objIndex].addrLine1Validation = false;
                    newItems[+objIndex].addrLine2Validation = false;

                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            trusteeData: newItems

                        },
                        errMsg: tempResponse.Description

                    });
                }
                if (currentZipCodeRef.keyName === "zipcode_Phy" && objIndex === -1) {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],
                            // addrLine1_Phy: "",
                            // addrLine2_Phy: "",
                            addrLine1_PhyValidation: false,
                            addrLine2_PhyValidation: false
                        },
                        errMsg: tempResponse.Description
                    });
                }
                if (currentZipCodeRef.keyName === "zipcode" && objIndex === -1) {
                    return ({
                        [prevState.currentZipCodeRef.stateKey]: {
                            ...prevState[prevState.currentZipCodeRef.stateKey],

                            // addrLine1: "",
                            // addrLine2: "",
                            addrLine1Validation: false,
                            addrLine2Validation: false
                        },
                        errMsg: tempResponse.Description
                    });
                }
            }

        }






        return prevState;


    }










    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    /* ------- Page Navigation methods --------*/

    onClickHeader = () => {
        AppUtils.debugLog("#TODO : onClickHeader");
    }

    goBack = () => {
        const { navigation } = this.props;
        const { goBack } = navigation;
        goBack();
    }

    onClickCancel = () => {
        myInstance.setAccOpeningEditMode(false);
        const { navigation } = this.props;
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

        const { navigation } = this.props;
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


    generatePersonalInfoPayload = (sectionKey) =>{
        const { [sectionKey]: sectionName } = this.state;
        const personalizePayload = {
            "personalInfo": {
                "prefix": sectionName.prefix.value || "",
                "firstName": sectionName.firstName || "",
                "lastName": sectionName.lastName || "",
                "suffix": sectionName.suffix || "",
                "dateOfBirth": sectionName.dob || "",
                "gender": sectionName.gender.key || "",
                "maritalStatus": sectionName.maritalStatus.key || "",
                "citizenship": sectionName.citizenship.key || "",
                "ssnTin": sectionName.socialSecurityNo || "",
                "mailingAddress": {
                    "addressType": sectionName.mailingAddressType.value || "",
                    "streetNbr": sectionName.addrLine1 || "",
                    "streetName": sectionName.addrLine2 || "",
                    "zip": sectionName.zipcode || "",
                    "city": sectionName.city || "",
                    "state": sectionName.stateCity || ""
                },
                "isPhysAddrSameAsMailAddr": sectionName.isYourPhysicalAddresSame || "",
                "physicalAddress": {
                    "addressType": sectionName.isYourPhysicalAddresSame ? sectionName.mailingAddressType.value || "" : sectionName.mailingAddressType,
                    "streetNbr": sectionName.isYourPhysicalAddresSame ? sectionName.addrLine1 || "" : sectionName.addrLine1_Phy,
                    "streetName": sectionName.isYourPhysicalAddresSame ? sectionName.addrLine2 || "" : sectionName.addrLine2_Phy,
                    "zip": sectionName.isYourPhysicalAddresSame ? sectionName.zipcode || "" : sectionName.zipcode_Phy,
                    "city": sectionName.isYourPhysicalAddresSame ? sectionName.city || "" : sectionName.city_Phy,
                    "state": sectionName.isYourPhysicalAddresSame ? sectionName.stateCity || "" : sectionName.stateCity_Phy,
                },
                "contactDetails": {
                    "mobile": sectionName.mobile.contactDetails,
                    "home": sectionName.home.contactDetails,
                    "work": sectionName.work.contactDetails,
                    "fax": sectionName.fax.contactDetails
                },
                "emailAddresses":sectionName.emailInfo
            },
            "employementInfo": {
                "employmentStatus": sectionName.empStatus.key || "",
                "industry": sectionName.empIndustry.key || "",
                "occupation": sectionName.empOccupation || "",
                "employerName": sectionName.empName || "",
                "employerAddress": {
                    "addressLine1": sectionName.empAddrLine1 || "",
                    "addressLine2": sectionName.empAddrLine2 || "",
                    "city": sectionName.empCity || "",
                    "state": sectionName.empStateCity || "",
                    "zip": sectionName.empZipcode || "",
                }
            },
            "financialInfo": {
                "annualIncome": sectionName.annualIncome.value || "",
                "taxBracket": sectionName.taxBracket.taxbracket || "",
                "netWorth": sectionName.networth.value || "",
                "taxFilingStatus": sectionName.taxFilingStatus.value || "",
            },
            "militaryInfo": {
                "servingStatus": sectionName.isMilitaryHistory || "",
                "militaryStatus": sectionName.militaryStatus.key || "",
                "branchOfService": sectionName.branchOfService.key || "",
                "rank": sectionName.rank.key || "",
                "serviceStartDate": sectionName.fromDateMilitary || "",
                "serviceToDate": sectionName.toDateMilitary || "",
                "commissionSource": sectionName.commissionSource || "",
            }
        };

        return personalizePayload;
    }

    getPayload = () => {
        const { navigation } = this.props;
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
                "prefix": personal.prefix.value || "",
                "firstName": personal.firstName || "",
                "lastName": personal.lastName || "",
                "suffix": personal.suffix || "",
                "dateOfBirth": personal.dob || "",
                "gender": personal.gender.key || "",
                "maritalStatus": personal.maritalStatus.key || "",
                "citizenship": personal.citizenship.key || "",
                "ssnTin": personal.socialSecurityNo || "",
                "mailingAddress": {
                    "addressType": personal.mailingAddressType.value || "",
                    "streetNbr": personal.addrLine1 || "",
                    "streetName": personal.addrLine2 || "",
                    "zip": personal.zipcode || "",
                    "city": personal.city || "",
                    "state": personal.stateCity || ""
                },
                "isPhysAddrSameAsMailAddr": personal.isYourPhysicalAddresSame || "",
                "physicalAddress": {
                    "addressType": personal.isYourPhysicalAddresSame ? personal.mailingAddressType.value || "" : personal.mailingAddressType,
                    "streetNbr": personal.isYourPhysicalAddresSame ? personal.addrLine1 || "" : personal.addrLine1_Phy,
                    "streetName": personal.isYourPhysicalAddresSame ? personal.addrLine2 || "" : personal.addrLine2_Phy,
                    "zip": personal.isYourPhysicalAddresSame ? personal.zipcode || "" : personal.zipcode_Phy,
                    "city": personal.isYourPhysicalAddresSame ? personal.city || "" : personal.city_Phy,
                    "state": personal.isYourPhysicalAddresSame ? personal.stateCity || "" : personal.stateCity_Phy,
                },
                "contactDetails": {
                    "mobile": personal.mobile.contactDetails,
                    "home": personal.home.contactDetails,
                    "work": personal.work.contactDetails,
                    "fax": personal.fax.contactDetails
                },
                "emailAddresses":personal.emailInfo
            },
            "employementInfo": {
                "employmentStatus": personal.empStatus.key || "",
                "industry": personal.empIndustry.key || "",
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
                "annualIncome": personal.annualIncome.value || "",
                "taxBracket": personal.taxBracket.taxbracket || "",
                "netWorth": personal.networth.value || "",
                "taxFilingStatus": personal.taxFilingStatus.value || "",
            },
            "militaryInfo": {
                "servingStatus": personal.isMilitaryHistory || "",
                "militaryStatus": personal.militaryStatus.key || "",
                "branchOfService": personal.branchOfService.key || "",
                "rank": personal.rank.key || "",
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
                            "phoneType": jointOwner.phoneType || "",
                            "contactDuring": jointOwner.contactDuringMobNo || "Anytime"
                        },
                        "phoneNumber2": {
                            "phoneNumber": jointOwner.telePhoneNo2 || "",
                            "phoneType": jointOwner.phoneType2 || "",
                            "contactDuring": jointOwner.contactDuringTelePhone2 || ""
                        },
                        "phoneNumber3": {
                            "phoneNumber": jointOwner.telePhoneNo3 || "",
                            "phoneType": jointOwner.phoneType3 || "",
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
                "type": retirementBeneficiaryData[+i].beneficiaryType || "",
                "relation": retirementBeneficiaryData[+i].relationshipToAcc || "",
                "distributionPercentage": retirementBeneficiaryData[+i].beneficiaryDistPercent || "",
                "firstName": retirementBeneficiaryData[+i].firstName || "",
                "middleInitial": retirementBeneficiaryData[+i].middleInitial || "",
                "lastName": retirementBeneficiaryData[+i].lastName || "",
                "ssnTin": retirementBeneficiaryData[+i].socialSecurityNo || "",
                "dateOfBirth": retirementBeneficiaryData[+i].dob || "",
                "emailAddress": retirementBeneficiaryData[+i].emailAddress || "",
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
                "isFederalLawApplicable": estate.isFederalLawApplicable || "",
                "specifyState": estate.specifyState || "",
                "orgCountry": estate.orgCountry || "",
                "isBusinessTrust": estate.isBusinessTrust || "",
                "isBrokerOrDealerTrust": estate.isBrokerOrDealerTrust || "",
                "brokerOrDealer": estate.brokerOrDealer || "",
                "isBankTrust": estate.isBankTrust || "",
                "isForeignUSBranchTrust": estate.isForeignUSBranchTrust || "",
                "businessTrust": estate.businessTrust || "",
                "isMoneyTranOrCurrencyExchangeOrgnaised": estate.isMoneyTranOrCurrencyExchangeOrgnaised || "",
                "isCorrespondentAccountsOffersProvided": estate.isCorrespondentAccountsOffersProvided || "",
                "typeOfFiniancialInstitution": estate.typeOfFiniancialInstitution || "",
                "VCMFundAccountNumbers": estate.VCMFundAccountNumbers || "",
                "isFinanacialInstitutionDescribed": estate.isFinanacialInstitutionDescribed || "",
                "finanacialInstitutionDesc": estate.finanacialInstitutionDesc || "",
                "isPhysicalPresenceMaintained": estate.isPhysicalPresenceMaintained || "",
                "isIndividualEmploymentThere": estate.isIndividualEmploymentThere || "",
                "isTrustMaintainRecords": estate.isTrustMaintainRecords || "",
                "isCorrespondentAccountsForeignOffersProvided": estate.isCorrespondentAccountsForeignOffersProvided || "",
                "bankTrustType": estate.bankTrustType || "",
            },
            "trusteeInfo": {
                "firstName": estate.trusteeData[0].firstName || "",
                "middleInitial": estate.trusteeData[0].middleInitial || "",
                "lastName": estate.trusteeData[0].lastName || "",
                "suffix": estate.trusteeData[0].suffix || "",
                "dateOfBirth": estate.trusteeData[0].dob || "",
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
                "residencePhoneNo": estate.trusteeData[0].residencePhoneNo || "",
                "emailAddress": estate.trusteeData[0].emailAddress || "",
                "memberNumber": estate.trusteeData[0].memberNumber || "",
                "ssnTin": estate.trusteeData[0].socialSecurityNo || ""
            },
        };






        let trustAccPayload = {};
        if (estate.trusteeData.length > 1) {
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

            trustAccPayload = { ...tempTrustAccPayload, coTrusteePayload };
        } else {
            trustAccPayload = { ...tempTrustAccPayload };
        }

        let payload = {};
        const savedAccData = myInstance.getSavedAccData();
        payload = {
            ...savedAccData,
            "accountNickName": nickname || "",
            "regType": accType || ""
        };

        let tempJointPersonalInfo = {};

        switch (accType) {
            case "Individual Account":
                payload = {
                    ...payload,
                    ...this.generatePersonalInfoPayload("personal")
                };
                break;
            case "Joint Account":
                tempJointPersonalInfo = this.generatePersonalInfoPayload("jointOwner");
              //  tempJointPersonalInfo.personalInfo.suffix = jointOwner.suffix.value;
                payload = {
                    ...payload,
                    ...this.generatePersonalInfoPayload("personal"),
                    "jointOwner": {
                        "relation": jointOwner.relationshipToAcc.value || "",
                         ...tempJointPersonalInfo,
                    }
                };
                break;
            case "Retirement Account":
                payload = {
                    ...payload,
                    ...this.generatePersonalInfoPayload("personal"),
                    ...retirementAccPayload
                };
                break;
            case "UGMA/UTMA Account":
                payload = {
                    ...payload,
                    ...this.generatePersonalInfoPayload("personal"),
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

        const { saveAccountOpening } = this.props;
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
            const { uploadAavatarImg } = this.props;

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
                showAlert(gblStrings.common.appName, response.error, "OK");
                AppUtils.debugLog(response.error);

            } else if (response.customButton) {
                AppUtils.debugLog('User tapped custom button: ', response.customButton);
                showAlert(gblStrings.common.appName, response.error, "OK");
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

        const { [stateKey]: stateKeyName } = this.state;
        const { getStateCity, getAddressFormat } = this.props;
        const { currentZipCodeRef } = this.state;
        const newItems = { ...currentZipCodeRef };

        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = -1;
        newItems.apiName = ActionTypes.GET_STATECITY;

        this.setState({
            currentZipCodeRef: newItems,
            isUSPSAddrFormatAPICalled: true,
            isUSPSStateAPICalled: true

        });

        let payload = {};
        let addressPayload = {};
        // if (this.state[stateKey].citizenship === "U.S" || this.state[stateKey].citizenship === undefined ) {    
        if (keyName === "zipcode_Phy") {
            payload = {
                "Zip": stateKeyName[`${keyName}`]
            };
            addressPayload = {
                ...payload,
                "Address1": stateKeyName.addrLine1_Phy,
                "Address2": stateKeyName.addrLine2_Phy,
                "City": stateKeyName.city_Phy,
                "State": stateKeyName.stateCity_Phy,
                "Zip": stateKeyName[`${keyName}`]

            };
        } else {

            payload = {
                "Zip": stateKeyName[`${keyName}`]
            };
            addressPayload = {
                ...payload,
                "Address1": stateKeyName.addrLine1,
                "Address2": stateKeyName.addrLine2,
                "City": stateKeyName.city,
                "State": stateKeyName.stateCity,
                "Zip": stateKeyName[`${keyName}`]

            };
        }


        getStateCity(payload);
        getAddressFormat(addressPayload);
    }

    /*
    onSubmitZipEditing1 = (stateKey, keyName, nextInputFocus) => text => {
        AppUtils.debugLog(`onSubmitZipEditing:::>${nextInputFocus} ${text}`);

        const { getStateCity, getAddressFormat, addressFormatData = {} } = this.props;
        const { GET_STATECITY } = addressFormatData || {};
        const { Zip = '', City = '', State = '' } = GET_STATECITY || {};
        const { currentZipCodeRef } = this.state;
        const { addrLine1, addrLine2, } = this.state[stateKey];



        const newItems = { ...currentZipCodeRef };
        //   const newItems = { ...this.state.currentZipCodeRef };

        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = -1;
        newItems.apiName = ActionTypes.GET_STATECITY;





        let payload = {};
        let addressPayload = {};
        let isUSPSStateAPICalled = false;
        let isUSPSAddrFormatAPICalled = false;


        if (this.state[stateKey][keyName] && !this.state[stateKey].addrLine1 && !this.state[stateKey].addrLine2) {

            isUSPSStateAPICalled = true;
            payload = {
                "Zip": this.state[stateKey][keyName]
            };
            getStateCity(payload);

        } else if (keyName === "zipcode_Phy" && this.state[stateKey].addrLine1 && this.state[stateKey].addrLine2 && this.state[stateKey].city && this.state[stateKey].stateCity && this.state[stateKey][keyName]) {

            isUSPSAddrFormatAPICalled = true;

            addressPayload = {
                ...payload,
                "Address1": this.state[stateKey].addrLine1_Phy,
                "Address2": this.state[stateKey].addrLine2_Phy,
                "City": this.state[stateKey].city_Phy,
                "State": this.state[stateKey].stateCity_Phy,
                "Zip": this.state[stateKey][keyName]

            };
            getAddressFormat(addressPayload);

        } else if (keyName === "zipcode" && this.state[stateKey].addrLine1 && this.state[stateKey].addrLine2 && this.state[stateKey].city && this.state[stateKey].stateCity && this.state[stateKey][keyName]) {
            isUSPSAddrFormatAPICalled = true;

            addressPayload = {
                ...payload,
                "Address1": this.state[stateKey].addrLine1,
                "Address2": this.state[stateKey].addrLine2,
                "City": this.state[stateKey].city,
                "State": this.state[stateKey].stateCity,
                "Zip": this.state[stateKey][keyName]

            };
            getAddressFormat(addressPayload);

        }

        this.setState({
            currentZipCodeRef: newItems,
            isUSPSAddrFormatAPICalled,
            isUSPSStateAPICalled

        });



        
        if (keyName === "zipcode_Phy") {
            
            payload = {
                 "Zip": this.state[stateKey][keyName]
             };
             
            addressPayload = {
                ...payload,
                "Address1": this.state[stateKey].addrLine1_Phy,
                "Address2": this.state[stateKey].addrLine2_Phy,
                "City": this.state[stateKey].city_Phy,
                "State": this.state[stateKey].stateCity_Phy,
                "Zip": this.state[stateKey][keyName]

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
                "State": this.state[stateKey].stateCity,
                "Zip": this.state[stateKey][keyName]

            };
        }


        // getStateCity(payload);
        getAddressFormat(addressPayload);

        




    }

    */

    onSubmitEmpZipEditing = (stateKey, keyName, nextInputFocus) => text => {
        AppUtils.debugLog(`onSubmitEmpZipEditing:::>${nextInputFocus} ${text}`);
        const { getStateCity, getAddressFormat } = this.props;
        const { [stateKey]: stateKeyName } = this.state;
        const { currentZipCodeRef } = this.state;
        const newItems = { ...currentZipCodeRef };
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = -1;
        //  newItems.apiName = ActionTypes.GET_STATECITY;

        //  alert("onSubmitEmpZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });
        let payload = {};
        let addressPayload = {};


        payload = {
            "Zip": stateKeyName[`${keyName}`]
        };
        addressPayload = {
            ...payload,
            "Address1": stateKeyName.empAddrLine1,
            "Address2": stateKeyName.empAddrLine2,
            "City": stateKeyName.empCity,
            "State": stateKeyName.empStateCity,
            "Zip": stateKeyName[`${keyName}`]

        };



        getStateCity(payload);
        getAddressFormat(addressPayload);

    }

    /*
    onSubmitEmpAddressEditing = (stateKey, keyName, nextInputFocus) => text => {
        AppUtils.debugLog(`onSubmitEmpAddressEditing:::>${nextInputFocus} ${text}`);
        const { getStateCity, getAddressFormat } = this.props;

        const { currentZipCodeRef, personal } = this.state;
        const newItems = { ...currentZipCodeRef };
        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = -1;
        newItems.apiName = ActionTypes.GET_ADDRESSFORMAT;

        let errMsg = "";
        let input = "";
        if (this.isEmpty(personal.addrLine1)) {
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
        }

        //  alert("onSubmitEmpZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });
        let payload = {};
        let addressPayload = {};

        if (personal.zipcode)

            payload = {
                "Zip": this.state[stateKey][keyName]
            };
        addressPayload = {
            ...payload,
            "Address1": this.state[stateKey].empAddrLine1,
            "Address2": this.state[stateKey].empAddrLine2,
            "City": this.state[stateKey].empCity,
            "State": this.state[stateKey].empStateCity
        };



        // getStateCity(payload);
        getAddressFormat(addressPayload);
    }
    */

    onSubmitZipTrusteeEditing = (stateKey, keyName, nextInputFocus, objIndex) => text => {
        AppUtils.debugLog(`onSubmitZipTrusteeEditing:::>${nextInputFocus} ${text}`);

        const { currentZipCodeRef, estate } = this.state;
        const { getStateCity, getAddressFormat } = this.props;

        const newItems = { ...currentZipCodeRef };
        //   const newItems = { ...this.state.currentZipCodeRef };

        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = objIndex;
        newItems.apiName = ActionTypes.GET_STATECITY;

        //  alert("onSubmitZipEditing::"+JSON.stringify(newItems));
        this.setState({ currentZipCodeRef: newItems });

        const newTrusteeItmes = [...estate.trusteeData];
        const tempObj = newTrusteeItmes[+objIndex];

        let payload = {};
        let addressPayload = {};
        if (tempObj.citizenship === "U.S" || tempObj.citizenship === undefined) {

            if (keyName === "zipcode_Phy") {
                payload = {
                    "Zip": tempObj[`${keyName}`]
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
                    "Zip": tempObj[`${keyName}`]
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
                ...prevState[`${stateKey}`],
                [keyName]: dateStr,
                [`${keyName}Validation`]: true,

            }
        }));
    }

    /*
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

    */

    onChangeText = (stateKey, keyName) => text => {
        AppUtils.debugLog("onChangeText:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [keyName]: text,
                [`${keyName}Validation`]: true,
            }
        }));

    }

    onBlurText = (stateKey, keyName) => text => {
        AppUtils.debugLog("onBlurText:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
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
                ...prevState[`${stateKey}`],
                [keyName]: text,
                [`${keyName}Validation`]: true,
            }
        }));
    }

    setInputRef = (inputComp) => (ref) => {
        this[`${inputComp}`] = ref;
    }


    /* ------- Validations methods --------*/

    validatePhoneInfo = (stateKey, phoneType) => {
        AppUtils.debugLog(`validatePhoneInfo:`);

        const { [stateKey]: sectionName } = this.state;
        const { [phoneType]: phoneInfo } = sectionName;
        const contactDetails = phoneInfo.contactDetails ? phoneInfo.contactDetails : [];

        let validateObj = {};
        let isValidationSuccess = false;

        if (contactDetails.length > 0) {
            let inputField = "";
            for (let i = 0; i < contactDetails.length; i += 1) {
                let tempErrMsg = "";
                const tempObj = contactDetails[+i];
                AppUtils.debugLog(`tempObj::${JSON.stringify(tempObj)}`);


                let tempValidation = false;

                if (this.isEmpty(tempObj.phoneNumber) && tempObj.isPrimary) {
                    tempErrMsg = gblStrings.accManagement.emptyMobileNoMsg;
                    inputField = "phoneNumber";
                    //  errMsgCount += 1;

                } else if (tempObj.phoneNumber.length < gblStrings.maxLength.mobileNo && tempObj.isPrimary) {
                    tempErrMsg = gblStrings.accManagement.invalidMobileNoMsg;
                    inputField = "phoneNumber";
                    //  errMsgCount += 1;

                } else if (this.isEmpty(tempObj.contactDuring.value) && tempObj.isPrimary) {
                    tempErrMsg = gblStrings.accManagement.emptyCallTimePreference;
                    inputField = "contactDuring";
                    //  errMsgCount += 1;

                } else {
                    tempValidation = true;
                }


                AppUtils.debugLog(`tempErrMsg: ${tempErrMsg}`);

                if (!tempValidation) {

                    validateObj = {
                        errMsg: tempErrMsg,
                        input: inputField,
                        isPhoneInfoValidation: i,
                        isValidationSuccess: tempValidation,

                    };

                    inputField = `${stateKey}${phoneType}${inputField}`;

                    if (inputField !== "" && inputField !== null && inputField !== undefined) {
                        if (this[inputField + i] !== null && this[inputField + i] !== undefined) {
                            if (typeof this[inputField + i].focus === 'function') {
                                this[inputField + i].focus();
                            }
                        }
                    }
                    isValidationSuccess = false;

                    break;
                } else {
                    isValidationSuccess = true;

                }
            }

        } else {
            isValidationSuccess = true;
        }

        if (isValidationSuccess) {
            validateObj = {
                isValidationSuccess: true,
                isPhoneInfoValidation: -1
            };
        }

        AppUtils.debugLog(`validateObj: ${JSON.stringify(validateObj)}`);

        return validateObj;
    }

    validateEmailInfo = (stateKey) => {
        AppUtils.debugLog(`validateEmailInfo:`);

        const { [stateKey]: sectionName } = this.state;
        const emailInfo = sectionName.emailInfo ? sectionName.emailInfo : [];

        let validateObj = {};
        let isValidationSuccess = false;

        if (emailInfo.length > 0) {
            let inputField = "";
            for (let i = 0; i < emailInfo.length; i += 1) {
                let tempErrMsg = "";
                const tempObj = emailInfo[+i];
                AppUtils.debugLog(`tempObj::${JSON.stringify(tempObj)}`);


                let tempValidation = false;

                if (this.isEmpty(tempObj.emailAddress)) {
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

                    validateObj = {
                        errMsg: tempErrMsg,
                        input: inputField,
                        isEmailInfoValidation: i,
                        isValidationSuccess: tempValidation,

                    };

                    inputField = `${stateKey}${inputField}`;
                    if (inputField !== "" && inputField !== null && inputField !== undefined) {
                        if (this[inputField + i] !== null && this[inputField + i] !== undefined) {
                            if (typeof this[inputField + i].focus === 'function') {
                                this[inputField + i].focus();
                            }
                        }
                    }
                    isValidationSuccess = false;

                    break;
                } else {
                    isValidationSuccess = true;

                }
            }

        } else {
            isValidationSuccess = true;
        }

        if (isValidationSuccess) {
            validateObj = {
                isValidationSuccess: true,
                isEmailInfoValidation: -1
            };
        }

        AppUtils.debugLog(`validateObj: ${JSON.stringify(validateObj)}`);

        return validateObj;
    }

    validateIndividualAccInfoFields = (stateKey) => {

        const { [stateKey]: sectionName } = this.state;

        //  const { personal } = this.state;

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";
        let errMsgCount = 0;
        let isPhoneInfoValidation = -1;
        let isEmailInfoValidation = -1;
        let inputRefKey = "";
        if (stateKey === "jointOwner") {
            inputRefKey = "_joint";
        } else if (stateKey === "retirement") {
            inputRefKey = "_IRA";
        } else if (stateKey === "childBeneficiary") {
            inputRefKey = "_childben";
        }
        if (sectionName.relationshipToAcc && this.isEmpty(sectionName.relationshipToAcc.value) && stateKey === "jointOwner") {
            errMsg = gblStrings.accManagement.emptyRelationToAccMsg;
            input = 'relationshipToAcc';
            errMsgCount += 1;
        } else if (this.isEmpty(sectionName.firstName)) {
            errMsg = gblStrings.accManagement.emptyFirstNameMsg;
            input = 'firstName';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.lastName)) {
            errMsg = gblStrings.accManagement.emptyLastNameMsg;
            input = 'lastName';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.dob)) {
            errMsg = gblStrings.accManagement.emptyDOBMsg;
            input = 'dob';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.gender.value)) {
            errMsg = gblStrings.accManagement.emptyGenderMsg;
            input = 'gender';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.maritalStatus.value)) {
            errMsg = gblStrings.accManagement.emptyMaritalMsg;
            input = 'maritalStatus';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.citizenship.value)) {
            errMsg = gblStrings.accManagement.emptyCitizenshipMsg;
            input = 'citizenship';
            errMsgCount += 1;

        }
        /*
        else if (personal.citizenship !== "U.S" && this.isEmpty(personal.residenceStatus)) {
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
          
        }   
        */
        else if (this.isEmpty(sectionName.mailingAddressType.value)) {
            errMsg = gblStrings.accManagement.emptyAddressTypeMsg;
            input = 'mailingAddressType';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
            errMsgCount += 1;

        } else if (sectionName.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
            input = 'isYourPhysicalAddresSame';
            errMsgCount += 1;

        } else if (sectionName.isYourPhysicalAddresSame === "No" && this.isEmpty(sectionName.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
            errMsgCount += 1;

        } else if (sectionName.isYourPhysicalAddresSame === "No" && this.isEmpty(sectionName.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
            errMsgCount += 1;

        } else if (sectionName.isYourPhysicalAddresSame === "No" && this.isEmpty(sectionName.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
            errMsgCount += 1;

        } else if (sectionName.isYourPhysicalAddresSame === "No" && sectionName.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
            errMsgCount += 1;

        } else if (sectionName.isYourPhysicalAddresSame === "No" && this.isEmpty(sectionName.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
            errMsgCount += 1;

        } else if (sectionName.isYourPhysicalAddresSame === "No" && this.isEmpty(sectionName.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity_Phy';
            errMsgCount += 1;

        } else if (!this.validatePhoneInfo(stateKey, "mobile").isValidationSuccess) {
            const validateObj = this.validatePhoneInfo(stateKey, "mobile");
            isValidationSuccess = false;
            errMsg = validateObj.errMsg;
            input = validateObj.input;
            isPhoneInfoValidation = validateObj.isPhoneInfoValidation;
            errMsgCount += 1;
        } else if (!this.validateEmailInfo(stateKey).isValidationSuccess) {
            const validateObj = this.validateEmailInfo(stateKey);
            isValidationSuccess = false;
            errMsg = validateObj.errMsg;
            input = validateObj.input;
            isEmailInfoValidation = validateObj.isEmailInfoValidation;
            errMsgCount += 1;
        }
        /*
        else if (this.isEmpty(personal.phoneType)) {
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
        } else if (this.isEmpty(personal.contactDuringMobNo)) {
            errMsg = gblStrings.accManagement.emptyCallTimePreference;
            input = 'contactDuringMobNo';
        } else if (this.isEmpty(sectionName.emailAddress)) {
            errMsg = gblStrings.accManagement.emptyEmailAddressMsg;
            input = 'emailAddress';
            errMsgCount += 1;

        } else if (!emailRegex.test(sectionName.emailAddress)) {
            errMsg = gblStrings.accManagement.invalidEmailMasg;
            input = 'emailAddress';
            errMsgCount += 1;

        } 
        */
        else if (this.isEmpty(sectionName.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = 'socialSecurityNo';
            errMsgCount += 1;

        } else if (sectionName.socialSecurityNo.length < gblStrings.maxLength.ssnNo) {
            errMsg = gblStrings.accManagement.invalidSSNMsg;
            input = 'socialSecurityNo';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.empStatus.value)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusMsg;
            input = 'empStatus';
            errMsgCount += 1;

        } else if (sectionName.empStatus.value === "Others" && this.isEmpty(sectionName.empStatusForOther)) {
            errMsg = gblStrings.accManagement.emptyEmploymentStatusOthersMsg;
            input = 'empStatusForOther';
            errMsgCount += 1;

        } else if (this.isEmpty(sectionName.isMilitaryHistory)) {
            errMsg = gblStrings.accManagement.emptymilitaryServingStatus;
            input = 'isMilitaryHistory';
            errMsgCount += 1;

        }
        /*
        else if (this.isEmpty(personal.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (personal.isSeniorPoliticalFigure === "Yes" && this.isEmpty(personal.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } */
        else if (errMsgCount === 0) {
            isValidationSuccess = true;

        } else {
            isValidationSuccess = true;

        }



        if (!isValidationSuccess) {
            AppUtils.debugLog(`Personal Info final errMsg:: ${errMsg}`);

            if (isPhoneInfoValidation !== -1) {
                const newItems = [...sectionName.mobile.contactDetails];
                newItems[+isPhoneInfoValidation][`${input}Validation`] = false;
                this.setState(prevState => ({
                    [stateKey]: {
                        ...prevState[`${stateKey}`],
                        mobile: {
                            contactDetails: newItems
                        },
                        isPersonalInfoExpanded: true,
                        isEmploymentInfoExpanded: true,
                        isFinancialInfoExpanded: true,
                        isMilitaryInfoExpanded: true,
                        isRegulatoryInfoExpanded: true,
                        isContactInfoExpanded: true,
                        isPhoneInfoExpanded: true,
                        isEmailInfoExpanded: true,



                    },
                    isValidationSuccess,
                    errMsg: isValidationSuccess === false ? errMsg : ""
                }));

            } else if (isEmailInfoValidation !== -1) {
                const newItems = [...sectionName.emailInfo];
                newItems[+isEmailInfoValidation][`${input}Validation`] = false;
                this.setState(prevState => ({
                    [stateKey]: {
                        ...prevState[`${stateKey}`],
                        emailInfo: newItems,
                        isPersonalInfoExpanded: true,
                        isEmploymentInfoExpanded: true,
                        isFinancialInfoExpanded: true,
                        isMilitaryInfoExpanded: true,
                        isRegulatoryInfoExpanded: true,
                        isContactInfoExpanded: true,
                        isPhoneInfoExpanded: true,
                        isEmailInfoExpanded: true,



                    },
                    isValidationSuccess,
                    errMsg: isValidationSuccess === false ? errMsg : ""
                }));

            } else {
                const inputKey = `${input}Validation`;
                this.setState(prevState => ({
                    [stateKey]: {
                        ...prevState[`${stateKey}`],
                        [`${inputKey}`]: false,
                        isPersonalInfoExpanded: true,
                        isEmploymentInfoExpanded: true,
                        isFinancialInfoExpanded: true,
                        isMilitaryInfoExpanded: true,
                        isRegulatoryInfoExpanded: true,
                        isContactInfoExpanded: true,
                        isPhoneInfoExpanded: true,
                        isEmailInfoExpanded: true,



                    },
                    isValidationSuccess,
                    errMsg: isValidationSuccess === false ? errMsg : ""
                }));

            }


            input = `${input}${inputRefKey}`;
            if (input !== "" && input !== null && input !== undefined) {
                if (this[`${input}`] !== null && this[`${input}`] !== undefined) {
                    if (typeof this[`${input}`].focus === 'function') {
                        this[`${input}`].focus();
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
        }
        /*
        else if (jointOwner.citizenship !== "U.S" && this.isEmpty(jointOwner.residenceStatus)) {
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
        }
        */ else if (this.isEmpty(jointOwner.mailingAddressType)) {
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
        } else if (this.isEmpty(jointOwner.contactDuringMobNo)) {
            errMsg = gblStrings.accManagement.emptyCallTimePreference;
            input = 'contactDuringMobNo';
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
        }
        /* else if (this.isEmpty(jointOwner.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (jointOwner.isSeniorPoliticalFigure === "Yes" && this.isEmpty(jointOwner.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        }
        */
        else {
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
                    isContactInfoExpanded: true,
                    isPhoneInfoExpanded: true,
                    isEmailInfoExpanded: true
                },
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[`${input}`] !== null && this[`${input}`] !== undefined) {
                    if (typeof this[`${input}`].focus === 'function') {
                        this[`${input}`].focus();
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
        }
        /*
        else if (this.isEmpty(childBeneficiary.isSeniorPoliticalFigure)) {
            errMsg = gblStrings.accManagement.emptyIsSeniorPoliticalFigureMsg;
            input = 'isSeniorPoliticalFigure';
        } else if (childBeneficiary.isSeniorPoliticalFigure === "Yes" && this.isEmpty(childBeneficiary.seniorPoliticalName)) {
            errMsg = gblStrings.accManagement.emptySeniorPoliticalNameMsg;
            input = 'seniorPoliticalName';
        } */
        else {
            isValidationSuccess = true;
        }



        if (!isValidationSuccess) {
            AppUtils.debugLog(`childBeneficiary Info errMsg:: ${errMsg}`);

            this.setState(prevState => ({
                childBeneficiary: {
                    ...prevState.childBeneficiary,
                    [`${input}Validation`]: false

                },
                isPersonalInfoExpanded: true,
                isEmploymentInfoExpanded: true,
                isFinancialInfoExpanded: true,
                isMilitaryInfoExpanded: true,
                isRegulatoryInfoExpanded: true,
                isContactInfoExpanded: true,
                isPhoneInfoExpanded: true,
                isEmailInfoExpanded: true,
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[`${input}`] !== null && this[`${input}`] !== undefined) {
                    if (typeof this[`${input}`].focus === 'function') {
                        this[`${input}`].focus();
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
                const tempObj = retirementBeneficiaryData[+i];
                AppUtils.debugLog(`tempObj::${JSON.stringify(tempObj)}`);

                /*
                    let beneficiaryTotal = 0;
                    if (!isNaN(tempObj.beneficiaryDistPercent) && tempObj.beneficiaryDistPercent !== "") {
                        beneficiaryTotal += parseFloat(tempObj.beneficiaryDistPercent);
                    }
                */





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
                    newItems[+i][`${inputField}Validation`] = false;
                    this.setState({
                        retirementBeneficiaryData: newItems,
                        isValidationSuccess,
                        errMsg: isValidationSuccess === false ? errMsg : "",
                        isPersonalInfoExpanded: true,
                        isEmploymentInfoExpanded: true,
                        isFinancialInfoExpanded: true,
                        isMilitaryInfoExpanded: true,
                        isRegulatoryInfoExpanded: true,
                        isContactInfoExpanded: true,
                        isPhoneInfoExpanded: true,
                        isEmailInfoExpanded: true
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
        const { navigation } = this.props;
        const { getParam } = navigation;
        const accType = `${getParam('accType', '')}`;

        const { estate } = this.state;


        let errMsg = "";
        let isValidationSuccess = false;
        let errMsgCount = 0;
        let input = "";

        if (this.isEmpty(estate.name)) {
            errMsg = accType === "Trust Account" ? gblStrings.accManagement.emptyEstateNameMsg : gblStrings.accManagement.emptyTrustNameMsg;
            input = "name";
            errMsgCount += 1;

        } else if (this.isEmpty(estate.creationDate)) {
            errMsg = gblStrings.accManagement.emptyCreationDateMsg;
            input = "creationDate";
            errMsgCount += 1;

        } else if (this.isEmpty(estate.socialSecurityNo)) {
            errMsg = gblStrings.accManagement.emptySSNMsg;
            input = "socialSecurityNo";
            errMsgCount += 1;

        } else if (this.isEmpty(estate.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
            errMsgCount += 1;

        } else if (this.isEmpty(estate.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
            errMsgCount += 1;

        } else if (this.isEmpty(estate.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
            errMsgCount += 1;

        } else if (estate.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
            errMsgCount += 1;

        } else if (this.isEmpty(estate.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
            errMsgCount += 1;

        } else if (this.isEmpty(estate.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
            errMsgCount += 1;

        } else if (this.isEmpty(estate.isYourPhysicalAddresSame)) {
            errMsg = gblStrings.accManagement.confirmPhysicalAddressSame;
            input = 'isYourPhysicalAddresSame';
            errMsgCount += 1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.addrLine1_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1_Phy';
            errMsgCount += 1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.addrLine2_Phy)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2_Phy';
            errMsgCount += 1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.zipcode_Phy)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode_Phy';
            errMsgCount += 1;

        } else if (estate.isYourPhysicalAddresSame === "No" && estate.zipcode_Phy.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode_Phy';
            errMsgCount += 1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.city_Phy)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city_Phy';
            errMsgCount += 1;

        } else if (estate.isYourPhysicalAddresSame === "No" && this.isEmpty(estate.stateCity_Phy)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity_Phy';
            errMsgCount += 1;

        } else if (accType === "Trust Account" && this.isEmpty(estate.specifyState)) {
            errMsg = gblStrings.accManagement.emptySpecifyStateMsg;
            input = "specifyState";
            errMsgCount += 1;
        } else if (this.isEmpty(estate.orgCountry)) {
            errMsg = gblStrings.accManagement.emptyOrganisationCountryMsg;
            input = 'orgCountry';
            errMsgCount += 1;

        } else if (accType === "Trust Account" && this.isEmpty(estate.isBusinessTrust)) {
            errMsg = gblStrings.accManagement.emptyBusinessTrustCondMsg;
            input = "isBusinessTrust";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isBrokerOrDealerTrust)) {
            errMsg = gblStrings.accManagement.emptyBrokerOrDealerTrustMsg;
            input = "isBrokerOrDealerTrust";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.brokerOrDealer)) {
            errMsg = gblStrings.accManagement.emptyBrokerOrDealerMsg;
            input = "brokerOrDealer";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isBankTrust)) {
            errMsg = gblStrings.accManagement.emptyBankTrustMsg;
            input = "isBankTrust";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.bankTrustType)) {
            errMsg = gblStrings.accManagement.emptyBankTrustTypeMsg;
            input = "bankTrustType";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isForeignUSBranchTrust)) {
            errMsg = gblStrings.accManagement.emptyForeignUSBranchTrustMsg;
            input = "isForeignUSBranchTrust";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.businessTrust)) {
            errMsg = gblStrings.accManagement.emptyBusinessTrustMsg;
            input = "businessTrust";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isMoneyTranOrCurrencyExchangeOrgnaised)) {
            errMsg = gblStrings.accManagement.emptyMoneyTranOrCurrencyExchangeOrgnaisedMsg;
            input = "isMoneyTranOrCurrencyExchangeOrgnaised";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isCorrespondentAccountsOffersProvided)) {
            errMsg = gblStrings.accManagement.emptyCorrespondentAccountsOffersProvidedMsg;
            input = "isCorrespondentAccountsOffersProvided";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.typeOfFiniancialInstitution)) {
            errMsg = gblStrings.accManagement.emptyTypeOfFiniancialInstitutionMsg;
            input = "typeOfFiniancialInstitution";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isCorrespondentAccountsForeignOffersProvided)) {
            errMsg = gblStrings.accManagement.emptyCorrespondentAccountsForeignOffersProvidedMsg;
            input = "isCorrespondentAccountsForeignOffersProvided";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.VCMFundAccountNumbers)) {
            errMsg = gblStrings.accManagement.emptyVCMFundAccountNumbersMsg;
            input = "VCMFundAccountNumbers";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isFinanacialInstitutionDescribed)) {
            errMsg = gblStrings.accManagement.emptyFinanacialInstitutionDescribedMsg;
            input = "isFinanacialInstitutionDescribed";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.finanacialInstitutionDesc)) {
            errMsg = gblStrings.accManagement.emptyFinanacialInstitutionDescMsg;
            input = "finanacialInstitutionDesc";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isPhysicalPresenceMaintained)) {
            errMsg = gblStrings.accManagement.emptyPhysicalPresenceMaintainedMsg;
            input = "isPhysicalPresenceMaintained";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isIndividualEmploymentThere)) {
            errMsg = gblStrings.accManagement.emptyIndividualEmploymentThereMsg;
            input = "isIndividualEmploymentThere";
            errMsgCount += 1;
        } else if (accType === "Trust Account" && this.isEmpty(estate.isTrustMaintainRecords)) {
            errMsg = gblStrings.accManagement.emptyTrustMaintainRecordsMsg;
            input = "isTrustMaintainRecords";
            errMsgCount += 1;
        } else if (estate.trusteeData.length > 0) {
            let inputField = "";


            for (let i = 0; i < estate.trusteeData.length; i += 1) {
                let tempErrMsg = "";
                const tempObj = estate.trusteeData[+i];
                AppUtils.debugLog(`tempObj::${JSON.stringify(tempObj)}`);


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

                AppUtils.debugLog(`tempErrMsg: ${tempErrMsg}`);

                if (!tempValidation) {
                    errMsg = tempErrMsg;
                    errMsgCount += 1;
                    const newItems = [...estate.trusteeData];
                    newItems[+i][`${inputField}Validation`] = false;

                    /* 
                     #TODO
                    this.setState(prevState => ({
                        estate: {
                            ...prevState.estate,
                            trusteeData: newItems
                        },
                        isValidationSuccess,
                        errMsg: isValidationSuccess === false ? errMsg : ""
                    }));
                    
                    */

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
                    [`${input}Validation`]: false
                },
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            }));


            if (input !== "" && input !== null && input !== undefined) {
                if (this[`${input}`] !== null && this[`${input}`] !== undefined) {
                    if (typeof this[`${input}`].focus === 'function') {
                        this[`${input}`].focus();
                    }
                }
            }
            showAlert(errMsg);
        }



        return isValidationSuccess;

    }



    validateFields = () => {
        //  return this.props.navigation.navigate({ routeName: 'openAccPageThree', key: 'openAccPageThree' });
        let isValidationSuccess = false;
        const { navigation } = this.props;
        const { getParam } = navigation;
        const accType = `${getParam('accType', '')}`;

        try {


            AppUtils.debugLog(`validateFields::: ${accType}`);

            if ((accType === "Estate Account" || accType === "Trust Account") && !this.validateEstateTrustInfoFields()) {
                isValidationSuccess = false;
            } else if (accType !== "Estate Account" && accType !== "Trust Account") {
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

                if (!this.validateIndividualAccInfoFields("personal")) {
                    isValidationSuccess = false;
                } else if (accType === "Joint Account" && !this.validateIndividualAccInfoFields("jointOwner")) {
                    isValidationSuccess = false;
                } else if (accType === "UGMA/UTMA Account" && !this.validateChildBeneficiaryInfoFields()) {
                    isValidationSuccess = false;
                } else if (accType === "Retirement Account" && !this.validateIRABeneficiaryInfoFields()) {
                    isValidationSuccess = false;
                } else {
                    isValidationSuccess = true;
                }
            } else {
                isValidationSuccess = true;
            }




        } catch (err) {
            AppUtils.debugLog(`Error:::${JSON.stringify(err)}`);
        }
        return isValidationSuccess;


    }

    /* ------- Custom render methods --------*/

    generateKeyExtractor = (item) => item.key;


    renderRadio = (sectionKey, radioName, radioSize, componentStyle, layoutStyle) => {
        AppUtils.debugLog(`renderRadio::: ${radioName}`);
        const { [sectionKey]: sectionName } = this.state;

        let tempkey = "";//  "title";
        let radioData = dummyData;
        const { masterLookupStateData } = this.props;

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


        if (this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
            AppUtils.debugLog(`tempkey inside::${tempkey}`);
            radioData = masterLookupStateData[`${tempkey}`].value;
        } else {
            AppUtils.debugLog(`tempkey not there::${tempkey}`);

        }

        const radioCoponents = [];


        for (let i = 0; i < radioData.length; i += 1) {
            radioCoponents.push(
                <CustomRadio
                    key={radioData[+i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor="#DEDEDF"
                    innerCicleColor="#61285F"
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[+i].value}
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel=""
                    selected={!!((sectionName[`${radioName}`].value !== null && sectionName[`${radioName}`].value === radioData[+i].value))}
                    onPress={this.onPressRadio(sectionKey, radioName, radioData[+i])}

                />
            );
        }
        return (
            <View style={layoutStyle}>
                {radioCoponents}
            </View>
        );




    }

    renderYesNoRadio = (sectionKey, radioName) => {
        AppUtils.debugLog(`renderYesNoRadio::: ${radioName}`);
        const { [sectionKey]: sectionName } = this.state;

        const { errMsg } = this.state;
        return (
            <>
                <View style={styles.radioBtnGrp}>
                    <CustomRadio
                        componentStyle={styles.radioCol1}
                        size={28}
                        outerCicleColor="#DEDEDF"
                        innerCicleColor="#61285F"
                        labelStyle={styles.lblRadioBtnTxt}
                        label="Yes"
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel=""
                        selected={!!((sectionName[`${radioName}`] !== null && sectionName[`${radioName}`] === "Yes"))}
                        onPress={this.onPressRadio(sectionKey, radioName, "Yes")}
                    />
                    <CustomRadio
                        componentStyle={styles.radioCol2}
                        size={28}
                        outerCicleColor="#DEDEDF"
                        innerCicleColor="#61285F"
                        labelStyle={styles.lblRadioBtnTxt}
                        label="No"
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel=""
                        selected={!!((sectionName[`${radioName}`] !== null && sectionName[`${radioName}`] === "No"))}
                        onPress={this.onPressRadio(sectionKey, radioName, "No")}

                    />
                </View>
                {!sectionName[`${radioName}Validation`] && (
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

        if (this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
            AppUtils.debugLog(`tempkey inside::${tempkey}`);
            radioData = masterLookupStateData[`${tempkey}`].value;
        } else {
            AppUtils.debugLog(`tempkey not there::${tempkey}`);

        }

        const radioCoponents = [];


        for (let i = 0; i < radioData.length; i += 1) {
            radioCoponents.push(
                <CustomRadio
                    key={radioData[+i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor="#DEDEDF"
                    innerCicleColor="#61285F"
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[+i].value}
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel=""
                    selected={!!((newItems[+objIndex][`${radioName}`] !== null && newItems[+objIndex][`${radioName}`] === radioData[+i].value))}
                    onPress={this.onPressRadioForEstateTrust(radioName, objIndex, radioData[+i].value)}

                />
            );
        }
        return (
            <View style={layoutStyle}>
                {radioCoponents}
            </View>
        );




    }

    renderCalender = (sectionKey, calendarName) => {
        AppUtils.debugLog(`renderCalender::: ${calendarName}`);
        const { [sectionKey]: sectionName } = this.state;

        return (
            <GDateComponent
                date={sectionName[`${calendarName}`]}
                placeholder="Select Date"
                errorFlag={sectionName[`${calendarName}Validation`] !== undefined ? !sectionName[`${calendarName}Validation`] : false}
                errMsg="Please selectDate"
                onDateChange={this.onChangeDate(sectionKey, calendarName)}

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
        const { masterLookupStateData } = this.props;
        const { errMsg } = this.state;
        const { [section]: sectionName } = this.state;

        const validationKeyValue = sectionName[`${validationKey}`] !== undefined ? !sectionName[`${validationKey}`] : false;

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
            case "contactDuringTelePhone4DropDown":


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
                tempkey = sectionName.rankKey;
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
            case "phoneType4DropDown":

                tempkey = "phone_type";
                break;
            case "countryOfCitizenshipDropDown":
                tempkey = "";
                break;
            default:
                break;

        }

        if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
            dropDownData = masterLookupStateData[`${tempkey}`].value;
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
                dropDownName={lblDropdownName}
                data={dropDownData}
                dropDownValue={dropDownName === "taxBracketDropDown" ? sectionName[`${stateKey}`].taxbracket :sectionName[`${stateKey}`].value}
                selectedDropDownValue={this.onSelectedDropDownValue(section, stateKey, dropDownName)}
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
        const { masterLookupStateData, getRankData } = this.props;
        const item = data[+index];
        const tempRankKey = `mil_rank_${item.key}`;
        let payload = "";

        if (dropDownName === "branchOfServiceDropDown") {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[`${section}`],
                    [stateKey]: item,
                    // [dropDownName]: false,
                    rankKey: tempRankKey,
                    [`${stateKey}Validation`]: true,

                }
            }));

            if (this.props && masterLookupStateData && !masterLookupStateData[`${tempRankKey}`]) {
                payload = tempRankKey;
                getRankData(payload);
            }

        } else if (dropDownName === "annualIncomeDropDown") {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[`${section}`],
                    [stateKey]: item,
                    //  [dropDownName]: false,
                    taxBracket: item,
                    [`${stateKey}Validation`]: true,

                }
            }));

        } else {
            this.setState(prevState => ({
                [section]: {
                    ...prevState[`${section}`],
                    [stateKey]: item,
                    // [dropDownName]: false,
                    [`${stateKey}Validation`]: true,

                }
            }));
        }

    }



    onChangeTextPhoneInfo = (stateKey, phoneType, keyName, objIndex) => text => {
        AppUtils.debugLog("onChangeTextPhoneInfo:::>");
        const { [stateKey]: sectionName } = this.state;
        const { [phoneType]: phoneInfo } = sectionName;
        const contactDetails = phoneInfo.contactDetails ? phoneInfo.contactDetails : [];

        const newItems = [...contactDetails];
        newItems[+objIndex][`${keyName}`] = text;
        newItems[+objIndex][`${keyName}Validation`] = true;

        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [phoneType]: {
                    contactDetails: newItems,
                }
            }
        }));
    }

    onSelectedPhoneInfoDropDownValue = (stateKey, phoneType, keyName, objIndex) => (value, index, data) => {
        AppUtils.debugLog(`onSelectedPhoneInfoDropDownValue:: ${keyName}`);
        const item = data[+index];
        const { [stateKey]: sectionName } = this.state;
        const { [phoneType]: phoneInfo } = sectionName;
        const contactDetails = phoneInfo.contactDetails ? phoneInfo.contactDetails : [];

        const newItems = [...contactDetails];
        newItems[+objIndex][`${keyName}`] = item;
        newItems[+objIndex].callTimePreference = item.value;
        newItems[+objIndex][`${keyName}Validation`] = true;

        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [phoneType]: {
                    contactDetails: newItems,
                }
            }
        }));
    }

    onSwitchPhoneInfo = (stateKey, phoneType, objIndex) => () => {
        AppUtils.debugLog(`onSwitchPhoneInfo:: ${objIndex}`);

        const { [stateKey]: sectionName } = this.state;
        const { [phoneType]: phoneInfo } = sectionName;
        const contactDetails = phoneInfo.contactDetails ? phoneInfo.contactDetails : [];

        const newItems = [...contactDetails];

        for (let i = 0; i < newItems.length; i += 1) {
            if (objIndex === i) {
                newItems[+i].isPrimary = !newItems[+i].isPrimary;
            } else {
                newItems[+i].isPrimary = false;
            }
        }

        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [phoneType]: {
                    contactDetails: newItems,
                }
            }
        }));


    }

    onPressAddPhoneNumber = (stateKey, phoneType) => () => {
        AppUtils.debugLog("onPressAddPhoneNumber::: ");
        const { [stateKey]: sectionName } = this.state;
        const { [phoneType]: phoneInfo } = sectionName;
        const contactDetails = phoneInfo.contactDetails ? phoneInfo.contactDetails : [];
        let tempPhoneType = "Mobile";

        switch (phoneType) {
            case "mobile":
                tempPhoneType = "Mobile";
                break;
            case "home":
                tempPhoneType = "Home";
                break;
            case "work":
                tempPhoneType = "Work";
                break;
            case "fax":
                tempPhoneType = "Fax";
                break;
            default:
                break;
        }
        const obj = {
            phoneNumber: "",
            phoneType: tempPhoneType,
            contactDuring: "",
            isPrimary: false,
            phoneNumberValidation: true,
            phoneTypeValidation: true,
            contactDuringValidation: true,

        };

        const newItems = [...contactDetails, obj];

        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [phoneType]: {
                    contactDetails: newItems,
                }
            }
        }));

    }

    getIndex = (value, arr, prop) => {
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[+i][`${prop}`] === value) {
                return i;
            }
        }
        return -1; // to handle the case where the value doesn't exist
    }

    onDeletePhoneInfo = (stateKey, phoneType, index) => () => {
        AppUtils.debugLog(`onDeletePhoneInfo::: ${phoneType}`);
        const { [stateKey]: sectionName } = this.state;
        const { [phoneType]: phoneInfo } = sectionName;
        const contactDetails = phoneInfo.contactDetails ? phoneInfo.contactDetails : [];


        const newItems = [...contactDetails];
        newItems.splice(index, 1);


        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [phoneType]: {
                    contactDetails: newItems,
                }
            }
        }));




    }

    //

    onChangeTextEmailInfo = (stateKey, keyName, objIndex) => text => {
        AppUtils.debugLog("onChangeTextEmailInfo:::>");
        const { [stateKey]: sectionName } = this.state;
        const emailInfo = sectionName.emailInfo ? sectionName.emailInfo : [];

        const newItems = [...emailInfo];
        newItems[+objIndex][`${keyName}`] = text;
        newItems[+objIndex][`${keyName}Validation`] = true;

        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                emailInfo: newItems

            }
        }));
    }

    onSwitchEmailInfo = (stateKey, objIndex) => () => {
        AppUtils.debugLog(`onSwitchEmailInfo:: ${objIndex}`);

        const { [stateKey]: sectionName } = this.state;
        const emailInfo = sectionName.emailInfo ? sectionName.emailInfo : [];

        const newItems = [...emailInfo];

        for (let i = 0; i < newItems.length; i += 1) {
            if (objIndex === i) {
                newItems[+i].isPrimary = !newItems[+i].isPrimary;
            } else {
                newItems[+i].isPrimary = false;
            }
        }

        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                emailInfo: newItems
            }
        }));


    }

    onPressAddEmailAddress = (stateKey) => () => {
        AppUtils.debugLog("onPressAddPhoneNumber::: ");
        const { [stateKey]: sectionName } = this.state;
        const emailInfo = sectionName.emailInfo ? sectionName.emailInfo : [];

        const obj = {
            emailAddress: "",
            isPrimary: false,
            emailAddressValidation: true

        };

        const newItems = [...emailInfo, obj];

        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                emailInfo: newItems
            }
        }));

    }



    onDeleteEmailInfo = (stateKey, index) => () => {
        AppUtils.debugLog(`onDeleteEmailInfo::: ${stateKey}`);
        const { [stateKey]: sectionName } = this.state;
        const emailInfo = sectionName.emailInfo ? sectionName.emailInfo : [];

        const newItems = [...emailInfo];
        newItems.splice(index, 1);


        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                emailInfo: newItems
            }
        }));




    }



    onSelectedIRABeneficiaryDropDownValue = (dropDownName, objIndex) => (value, index, data) => {
        AppUtils.debugLog(`onSelectedIRABeneficiaryDropDownValue:: ${dropDownName}`);
        const { retirementBeneficiaryData } = this.state;
        const newItems = [...retirementBeneficiaryData];
        const item = data[+index];

        switch (dropDownName) {

            case "beneficiaryTypeDropDown":
                newItems[+objIndex].beneficiaryTypeDropDown = false;
                newItems[+objIndex].beneficiaryType = item.value;
                newItems[+objIndex].beneficiaryTypeValidation = true;
                break;
            case "relationshipToAccDropDown":
                newItems[+objIndex].relationshipToAccDropDown = false;
                newItems[+objIndex].relationshipToAcc = item.value;
                newItems[+objIndex].relationshipToAccValidation = true;
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
        const { retirementBeneficiaryData } = this.state;
        const newItems = [...retirementBeneficiaryData];
        newItems[+index][`${keyName}`] = text;
        newItems[+index][`${keyName}Validation`] = true;
        this.setState({
            retirementBeneficiaryData: newItems,
        });


    }

    onBlurDistPercentageForIRABeneficiary = (keyName, index, input) => text => {
        AppUtils.debugLog(`onBlurDistPercentageForIRABeneficiary:::>${text}`);
        const { retirementBeneficiaryData } = this.state;
        const newItems = [...retirementBeneficiaryData];
        // newItems[index].beneficiaryDistPercent = text;



        newItems[+index].firstNameValidation = true;
        newItems[+index].lastNameValidation = true;
        newItems[+index].dobValidation = true;
        newItems[+index].emailAddressValidation = true;
        newItems[+index].socialSecurityNoValidation = true;
        newItems[+index].beneficiaryTypeValidation = true;
        newItems[+index].relationshipToAccValidation = true;
        // newItems[index].beneficiaryDistPercentValidation = true;


        let total = 0;
        let errMsg = "";
        for (let i = 0; i < newItems.length; i += 1) {
            if (isNumeric(newItems[+i].beneficiaryDistPercent) && newItems[+i].beneficiaryDistPercent !== "") {
                total += parseFloat(newItems[+i].beneficiaryDistPercent);
            }
        }

        AppUtils.debugLog(`beneficiaryDistPercent total:::>${total}`);

        if (total > 100 || total < 100) {
            errMsg = gblStrings.accManagement.beneficiariesCond;
            newItems[+index].beneficiaryDistPercentValidation = false;
        } else {
            newItems[+index].beneficiaryDistPercentValidation = true;

        }

        this.setState({
            retirementBeneficiaryData: newItems,
            errMsg
        });


        input.focus();


    }

    onChangeDateForIRABeneficiary = (keyName, index) => dateStr => {
        AppUtils.debugLog("onChangeDateForIRABeneficiary:::>");
        const { retirementBeneficiaryData } = this.state;
        const newItems = [...retirementBeneficiaryData];
        newItems[+index][`${keyName}`] = dateStr;
        newItems[+index][`${keyName}Validation`] = true;


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
        const { retirementBeneficiaryData } = this.state;
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
        const { retirementBeneficiaryData } = this.state;


        if (retirementBeneficiaryData.length < 3) {
            const newItems = [...retirementBeneficiaryData, tempBeneficiaryObj];
            this.setState({
                retirementBeneficiaryData: newItems
            });
        }
    }


    onSelectedEstateTrustDropDownValue = (dropDownName, objIndex) => (value, index, data) => {
        AppUtils.debugLog(`onSelectedEstateTrustDropDownValue:: ${dropDownName}`);
        const { estate } = this.state;
        const newItems = [...estate.trusteeData];
        newItems[+objIndex][`${dropDownName}Validation`] = true;

        /* newItems[objIndex].firstNameValidation = true;
         newItems[objIndex].lastNameValidation = true;
         newItems[objIndex].dobValidation = true;
         newItems[objIndex].emailAddressValidation = true;
         newItems[objIndex].socialSecurityNoValidation = true;
         */




        const item = data[+index];
        switch (dropDownName) {
            case "suffixDropDown":
                newItems[+objIndex].suffixDropDown = false;
                newItems[+objIndex].suffix = item.value;
                break;
            default:
                break;

        }

        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData: newItems
            }
        })));


    }

    onChangeTextForEstateTrust = (keyName, index) => text => {
        AppUtils.debugLog("onChangeTextForEstateTrust:::>");

        const { estate } = this.state;
        const newItems = [...estate.trusteeData];
        newItems[+index][`${keyName}`] = text;
        newItems[+index][`${keyName}Validation`] = true;

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
                trusteeData: newItems

            }
        })));



    }

    onChangeDateForEstateTrust = (keyName, index) => dateStr => {
        AppUtils.debugLog("onChangeDateForEstateTrust:::>");
        const { estate } = this.state;
        const newItems = [...estate.trusteeData];
        newItems[+index][`${keyName}`] = dateStr;
        newItems[+index][`${keyName}Validation`] = true;

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
                trusteeData: newItems

            }
        })));
    }

    onPressRadioForEstateTrust = (keyName, index, text) => () => {
        AppUtils.debugLog(`onPressRadioForEstateTrust:: ${keyName}`);
        const { estate } = this.state;
        const newItems = [...estate.trusteeData];
        newItems[+index][`${keyName}`] = text;
        newItems[+index][`${keyName}Validation`] = true;


        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData: newItems
            }
        })));
    }

    onPressRemoveEstateTrust = (index) => () => {
        AppUtils.debugLog(`onPressRemoveEstateTrust::: ${index}`);
        const { estate } = this.state;
        const newItems = [...estate.trusteeData];
        newItems.splice(index, 1);
        this.setState(() => (prevState => ({
            estate: {
                ...prevState.estate,
                trusteeData: newItems

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
            residencePhoneNo: "",
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
        const { estate } = this.state;
        if (estate.trusteeData.length < 3) {
            this.setState(prevState => ({
                estate: {
                    ...prevState.estate,
                    trusteeData: [...prevState.estate.trusteeData, tempTrusteeObj]
                }
            }));
        }



    }


    onClickExpandCollpaseEvent = (stateKey, keyName) => () => {
        AppUtils.debugLog("onClickExpandCollpaseEvent:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [keyName]: !prevState[`${stateKey}`][`${keyName}`]
            }
        }));
    }


    renderIndividualSection = () => {
        // const { personal } = this.state;

        return (
            <View>
                {this.renderPersonalInfo("personal")}
                {this.renderContactInfo("personal")}
                {this.renderPhoneInfo("personal")}
                {this.renderEmailInfo("personal")}
                {this.renderEmploymentInfo("personal")}
                {this.renderFinancialInfo("personal")}
                {this.renderMilitaryInfo("personal")}

                {
                    /* (personal.empStatus !== "Not Employed" && personal.empStatus !== "") && <this.renderRegulatoryInfo /> */
                }

            </View>
        );
    }

    renderPersonalInfo = (sectionKey) => {
        const { [sectionKey]: sectionName, errMsg } = this.state;
        let inputRefKey = "";
        let headings = gblStrings.accManagement.personalInformation;
        if (sectionKey === "jointOwner") {
            inputRefKey = "_joint";
            headings = gblStrings.accManagement.personalInformationJoint;
        }
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        onPress={this.onClickExpandCollpaseEvent(sectionKey, "isPersonalInfoExpanded")}
                    >
                        <Text>
                            <Text style={styles.headings}>
                                {sectionName.isPersonalInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {headings}
                            </Text>
                        </Text>

                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />

                {
                    sectionName.isPersonalInfoExpanded && (
                        <View style={styles.childSectionGrp}>
                            {sectionKey === "jointOwner" && this.renderCustomDropDown({
                                section: sectionKey,
                                stateKey: "relationshipToAcc",
                                dropDownName: "relationshipToAccDropDown",
                                lblDropdownName: gblStrings.accManagement.relationshipToAccHolder,
                                isOptional: false
                            })
                            }

                            <View style={styles.dropDownViewPrefix}>
                                {this.renderCustomDropDown({
                                    section: sectionKey,
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
                            {sectionKey !== "jointOwner" && (
                                <Text style={styles.lblValueTxt}>{sectionName.firstName}</Text>
                            )}
                            {sectionKey === "jointOwner" && (
                                <GInputComponent
                                    inputref={this.setInputRef(`firstName${inputRefKey}`)}
                                    propInputStyle={sectionName.firstNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder=""
                                    value={sectionName.firstName}
                                    maxLength={gblStrings.maxLength.firstName}
                                    onChangeText={this.onChangeText(sectionKey, "firstName")}
                                    onSubmitEditing={this.onSubmitEditing(this.middleInitial_joint)}
                                    errorFlag={!sectionName.firstNameValidation}
                                    errorText={errMsg}
                                />
                            )}

                            <Text style={styles.lblTxt}>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.middleInitial}
                                </Text>
                                <Text style={styles.optionalTxt}>
                                    {` ${gblStrings.accManagement.optional}`}
                                </Text>
                            </Text>

                            {sectionKey !== "jointOwner" && (
                            <Text style={styles.lblValueTxt}>{sectionName.middleInitial || "-"}</Text>
                            )}
                            {sectionKey === "jointOwner" && (
                                 <GInputComponent
                                 inputref={this.setInputRef(`middleInitial${inputRefKey}`)}
                                 propInputStyle={styles.customTxtBox}
                                 value={sectionName.middleInitial}
                                 placeholder=""
                                 maxLength={gblStrings.maxLength.middleInitial}
                                 onChangeText={this.onChangeText(sectionKey, "middleInitial")}
                                 onSubmitEditing={this.onSubmitEditing(this.lastName_joint)}
                                 />
                            )}


                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.lastName}
                            </Text>
                           
                            {sectionKey !== "jointOwner" && (
                                <Text style={styles.lblValueTxt}>{sectionName.lastName}</Text>
                            )}
                            {sectionKey === "jointOwner" && (
                                  <GInputComponent
                                  inputref={this.setInputRef(`lastName${inputRefKey}`)}
                                  propInputStyle={sectionName.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                  placeholder=""
                                  value={sectionName.lastName}
                                  maxLength={gblStrings.maxLength.lastName}
                                  returnKeyType="done"
                                  onChangeText={this.onChangeText(sectionKey, "lastName")}
                                  onSubmitEditing={this.onSubmitEditing(this.suffix_joint)}
                                  errorFlag={!sectionName.lastNameValidation}
                                  errorText={errMsg}
                                  />
                            )}

                          
                           
                            {sectionKey !== "jointOwner" && (
                                <View>
                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.suffix}
                                    </Text>
                                    <Text style={styles.lblValueTxt}>
                                        {sectionName.suffix || "-"}
                                    </Text>
                                </View>
                            )}
                             {sectionKey === "jointOwner" && (
                            <View style={styles.dropDownViewPrefix}>
                                {this.renderCustomDropDown({
                                    section: sectionKey,
                                    stateKey: "suffix",
                                    dropDownName: "suffixDropDown",
                                    lblDropdownName: gblStrings.accManagement.suffix,
                                    isOptional: true
                                })
                                }
                            </View>
                             )}


                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.dob}
                            </Text>
                            <GDateComponent
                                inputref={this.setInputRef(`dob${inputRefKey}`)}
                                date={sectionName.dob}
                                placeholder="Select Date"
                                errorFlag={!sectionName.dobValidation}
                                errorMsg={errMsg}
                                maxDate={prevDate}
                                onDateChange={this.onChangeDate(sectionKey, "dob")}
                            />

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.gender}
                            </Text>
                            {this.renderRadio(sectionKey, "gender", 28, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                            {!sectionName.genderValidation && (
                                <Text style={styles.errMsg}>
                                    {errMsg}
                                </Text>
                            )}


                            {this.renderCustomDropDown({
                                section: sectionKey,
                                stateKey: "maritalStatus",
                                dropDownName: "maritalStatusDropDown",
                                lblDropdownName: gblStrings.accManagement.maritalStatus,
                                isOptional: false
                            })
                            }

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.citizenship}
                            </Text>
                            {this.renderRadio(sectionKey, "citizenship", 28, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}

                            {

                                sectionName.citizenship.value !== "U.S" &&
                                (
                                    <View style={styles.nonUSView}>

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

                                        <Text style={styles.lblTxt}>
                                            (or)
                                        </Text>

                                        <View style={styles.mailToCSRGrp}>
                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.mailToCSR}
                                            </Text>
                                            <Text style={styles.headings}>
                                                {gblStrings.common.victoryCapital}
                                            </Text>
                                            <Text style={styles.lblValueTxt}>
                                                {gblStrings.common.victoryCapitalAddress}
                                            </Text>
                                        </View>


                                        {/* <View>

                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.residenceStatus}
                                            </Text>
                                            <View style={styles.radioBtnColGrp}>
                                                <CustomRadio
                                                    //  componentStyle={styles.radioCol1}
                                                    size={28}
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
                                                    size={28}
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
                                        </View> */}


                                    </View>
                                )}


                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.socialSecurityNo}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef(`socialSecurityNo${inputRefKey}`)}
                                propInputStyle={sectionName.socialSecurityNoValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.ssnNoFormat}
                                value={sectionName.socialSecurityNo}
                                keyboardType="number-pad"
                                returnKeyType="done"
                                maxLength={gblStrings.maxLength.ssnNo}
                                onChangeText={this.onChangeText(sectionKey, "socialSecurityNo")}
                                errorFlag={!sectionName.socialSecurityNoValidation}
                                errorText={errMsg}
                                secureTextEntry

                            />

                        </View>
                    )}
            </View>

        );
    }

    renderContactInfo = (sectionKey) => {
        const { [sectionKey]: sectionName, errMsg } = this.state;
        let inputRefKey = "";
        let headings = gblStrings.accManagement.contactInfo;
        if (sectionKey === "jointOwner") {
            inputRefKey = "_joint";
            headings = gblStrings.accManagement.contactInfoJoint;
        }
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        onPress={this.onClickExpandCollpaseEvent(sectionKey, "isContactInfoExpanded")}
                    >
                        <Text>
                            <Text style={styles.headings}>
                                {sectionName.isContactInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {headings}
                            </Text>
                        </Text>

                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />

                {
                    sectionName.isContactInfoExpanded && (
                        <View style={styles.childSectionGrp}>

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.addressType}
                            </Text>
                            {this.renderRadio(sectionKey, "mailingAddressType", 28, { marginBottom: scaledHeight(13) }, styles.radioBtnColGrp)}
                            {!sectionName.mailingAddressTypeValidation && (
                                <Text style={styles.errMsg}>
                                    {errMsg}
                                </Text>
                            )}

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.address}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef(`addrLine1${inputRefKey}`)}
                                propInputStyle={sectionName.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.empAddrLine1}
                                maxLength={gblStrings.maxLength.emplAddress1}
                                value={sectionName.addrLine1}
                                onChangeText={this.onChangeText(sectionKey, "addrLine1")}
                                // onBlur = {this.onChangeText("personal", "addrLine1")}
                                // onSubmitEditing={this.onSubmitEditing(this.addrLine2)}
                                onSubmitEditing={this.onSubmitZipEditing(sectionKey, "zipcode", this.addrLine2)}

                                errorFlag={!sectionName.addrLine1Validation}
                                errorText={errMsg}
                            />
                            <GInputComponent
                                inputref={this.setInputRef(`addrLine2${inputRefKey}`)}
                                propInputStyle={sectionName.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.empAddrLine2}
                                maxLength={gblStrings.maxLength.addressLine2}
                                value={sectionName.addrLine2}
                                onChangeText={this.onChangeText(sectionKey, "addrLine2")}
                                // onBlur = {this.onChangeText("personal", "addrLine2")}

                                onSubmitEditing={this.onSubmitZipEditing(sectionKey, "zipcode", this.zipcode)}
                                // onSubmitEditing={this.onSubmitEditing(this.zipcode)}
                                errorFlag={!sectionName.addrLine2Validation}
                                errorText={errMsg}


                            />


                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.zipcode}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef(`zipcode${inputRefKey}`)}
                                propInputStyle={sectionName.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.enterZip}
                                value={sectionName.zipcode}
                                maxLength={gblStrings.maxLength.zipCode}
                                returnKeyType="done"
                                onChangeText={this.onChangeText(sectionKey, "zipcode")}
                                keyboardType="number-pad"
                                onSubmitEditing={this.onSubmitZipEditing(sectionKey, "zipcode", this.city)}
                                errorFlag={!sectionName.zipcodeValidation}
                                errorText={errMsg}
                            />

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.city}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef(`city${inputRefKey}`)}
                                propInputStyle={sectionName.cityValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}
                                // placeholder={gblStrings.accManagement.enterCity}
                                maxLength={gblStrings.maxLength.city}
                                value={sectionName.city}
                                onChangeText={this.onChangeText(sectionKey, "city")}
                                onSubmitEditing={this.onSubmitEditing(this.stateCity)}
                                errorFlag={!sectionName.cityValidation}
                                errorText={errMsg}
                                //  editable={personal.citizenship !== "U.S"}
                                editable={false}

                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.stateTerritory}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef(`stateCity${inputRefKey}`)}
                                propInputStyle={sectionName.stateCityValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}
                                // placeholder={gblStrings.accManagement.enterState}
                                returnKeyType="done"
                                maxLength={gblStrings.maxLength.state}
                                value={sectionName.stateCity}
                                onChangeText={this.onChangeText(sectionKey, "stateCity")}
                                onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                errorFlag={!sectionName.stateCityValidation}
                                errorText={errMsg}
                                // editable={personal.citizenship !== "U.S"}
                                editable={false}

                            />

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.isYourPhysicalAddressSame}
                            </Text>
                            <View style={styles.radioBtnGrp}>
                                <CustomRadio
                                    componentStyle={styles.radioCol1}
                                    size={28}
                                    outerCicleColor="#DEDEDF"
                                    innerCicleColor="#61285F"
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label="Yes"
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel=""
                                    selected={!!((sectionName.isYourPhysicalAddresSame !== null && sectionName.isYourPhysicalAddresSame === "Yes"))}
                                    onPress={this.onPressRadio(sectionKey, "isYourPhysicalAddresSame", "Yes")}
                                />
                                <CustomRadio
                                    componentStyle={styles.radioCol2}
                                    size={28}
                                    outerCicleColor="#DEDEDF"
                                    innerCicleColor="#61285F"
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label="No"
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel=""
                                    selected={!!((sectionName.isYourPhysicalAddresSame !== null && sectionName.isYourPhysicalAddresSame === "No"))}
                                    onPress={this.onPressRadio(sectionKey, "isYourPhysicalAddresSame", "No")}

                                />
                            </View>
                            {!sectionName.isYourPhysicalAddresSameValidation && (
                                <Text style={styles.errMsg}>
                                    {errMsg}
                                </Text>
                            )}

                            {
                                sectionName.isYourPhysicalAddresSame === "No" && (
                                    <View>
                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.address}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`addrLine1_Phy${inputRefKey}`)}
                                            propInputStyle={sectionName.addrLine1_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                            placeholder={gblStrings.accManagement.empAddrLine1}
                                            maxLength={gblStrings.maxLength.emplAddress1}
                                            value={sectionName.addrLine1_Phy}
                                            onChangeText={this.onChangeText(sectionKey, "addrLine1_Phy")}
                                            // onSubmitEditing={this.onSubmitEditing(this.addrLine2_Phy)}
                                            onSubmitEditing={this.onSubmitZipEditing(sectionKey, "zipcode_Phy", this.addrLine2_Phy)}

                                            errorFlag={!sectionName.addrLine1_PhyValidation}
                                            errorText={errMsg}
                                        />
                                        <GInputComponent
                                            inputref={this.setInputRef(`addrLine2_Phy${inputRefKey}`)}
                                            propInputStyle={sectionName.addrLine2_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                            placeholder={gblStrings.accManagement.empAddrLine2}
                                            maxLength={gblStrings.maxLength.addressLine2}
                                            value={sectionName.addrLine2_Phy}
                                            onChangeText={this.onChangeText(sectionKey, "addrLine2_Phy")}
                                            // onSubmitEditing={this.onSubmitEditing(this.zipcode_Phy)}
                                            onSubmitEditing={this.onSubmitZipEditing(sectionKey, "zipcode_Phy", this.zipcode_Phy)}

                                            errorFlag={!sectionName.addrLine2_PhyValidation}
                                            errorText={errMsg}


                                        />


                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.zipcode}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`zipcode_Phy${inputRefKey}`)}
                                            propInputStyle={sectionName.zipcode_PhyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                            placeholder={gblStrings.accManagement.enterZip}
                                            value={sectionName.zipcode_Phy}
                                            maxLength={gblStrings.maxLength.zipCode}
                                            returnKeyType="done"
                                            onChangeText={this.onChangeText(sectionKey, "zipcode_Phy")}
                                            keyboardType="number-pad"
                                            onSubmitEditing={this.onSubmitZipEditing(sectionKey, "zipcode_Phy", this.city_Phy)}
                                            errorFlag={!sectionName.zipcode_PhyValidation}
                                            errorText={errMsg}
                                        />

                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.city}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`city_Phy${inputRefKey}`)}
                                            propInputStyle={sectionName.city_PhyValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}
                                            //  placeholder={gblStrings.accManagement.enterCity}
                                            maxLength={gblStrings.maxLength.city}
                                            value={sectionName.city_Phy}
                                            onChangeText={this.onChangeText(sectionKey, "city_Phy")}
                                            onSubmitEditing={this.onSubmitEditing(this.stateCity_Phy)}
                                            errorFlag={!sectionName.city_PhyValidation}
                                            errorText={errMsg}
                                            editable={false}


                                        />
                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.stateTerritory}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`stateCity_Phy${inputRefKey}`)}
                                            propInputStyle={sectionName.stateCity_PhyValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}
                                            // placeholder={gblStrings.accManagement.enterState}
                                            returnKeyType="done"
                                            maxLength={gblStrings.maxLength.state}
                                            value={sectionName.stateCity_Phy}
                                            onChangeText={this.onChangeText(sectionKey, "stateCity_Phy")}
                                            onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                            errorFlag={!sectionName.stateCity_PhyValidation}
                                            errorText={errMsg}
                                            editable={false}

                                        />

                                    </View>
                                )}
                        </View>
                    )}
            </View>

        );

    }

    renderPhoneCardInfo = (sectionKey, keyName) => {
        const { [sectionKey]: sectionName, errMsg } = this.state;
        const { [keyName]: phoneInfo } = sectionName;

        //  const { personal, errMsg } = this.state;
        const contactDetails = phoneInfo.contactDetails ? phoneInfo.contactDetails : [];
        const { masterLookupStateData } = this.props;
        let tempkey = "phone_type";
        /* let phoneTypeData = [];
         if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
             phoneTypeData = masterLookupStateData[`${tempkey}`].value;
         }
 
         */

        tempkey = "contact_time";
        let contactDuringData = [];

        if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
            contactDuringData = masterLookupStateData[`${tempkey}`].value;
        }
        //  const validationKeyValue = item[`${validationKey}`] !== undefined ? !item[`${validationKey}`] : false;

        /* let inputRefKey = "";
         if (section === "jointOwner") {
             inputRefKey = "_joint";
         } else if (section === "retirement") {
             inputRefKey = "_IRA";
         } else if (section === "childBeneficiary") {
             inputRefKey = "_childben";
         }
         */

        AppUtils.debugLog(`renderPhoneCardInfo::: ${contactDetails.length}`);

        return (
            <View>
                {contactDetails.map((item, index) => {
                    return (
                        <View style={styles.phoneCardView}>

                            {!item.isPrimary && (
                                <TouchableOpacity
                                    onPress={this.onDeletePhoneInfo(sectionKey, keyName, index)}
                                    activeOpacity={0.8}
                                    accessibilityRole="button"
                                    style={styles.removeTxtBtn}
                                >
                                    <Text style={styles.removeTxt}>
                                        {gblStrings.common.remove}
                                    </Text>
                                </TouchableOpacity>
                            )}

                            {
                                /*
                                    <View style={styles.dropDownViewPrefix}>
                                    
                                     <GDropDownComponent
                                         inputref={this.setInputRef(`${sectionKey}phoneType${index}`)}
                                         dropDownLayout={styles.dropDownLayout}
                                         dropDownTextName={styles.dropDownTextName}
                                         dropDownName={gblStrings.accManagement.mobile}
                                         data={phoneTypeData}
                                         dropDownValue={item.phoneType}
                                         selectedDropDownValue={this.onSelectedPhoneInfoDropDownValue(sectionKey,"phoneType", index)}
                                         dropDownPostition={styles.dropDownPostition}
                                         errorFlag={false}
                                         errorText={errMsg}
                                         isOptional={false}
                                     />
                                 </View>
                                */
                            }
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement[`${keyName}`]}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef(`${sectionKey}${keyName}phoneNumber${index}`)}
                                propInputStyle={item.phoneNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                placeholder={gblStrings.accManagement.phoneNoFormat}
                                maxLength={gblStrings.maxLength.mobileNo}
                                keyboardType="phone-pad"
                                //  value={personal.mobileNo.replace(/\d(?=\d{4})/g, "*")}
                                value={item.phoneNumber}
                                onChangeText={this.onChangeTextPhoneInfo(sectionKey, keyName, "phoneNumber", index)}
                                onSubmitEditing={this.onSubmitEditing(this[`${sectionKey}${keyName}callTimePreference${index}`])}
                                errorFlag={!item.phoneNumberValidation}
                                errorText={errMsg}
                            />

                            <GDropDownComponent
                                inputref={this.setInputRef(`${sectionKey}${keyName}contactDuring${index}`)}
                                dropDownLayout={styles.dropDownLayout}
                                dropDownTextName={styles.dropDownTextName}
                                dropDownName={gblStrings.accManagement.contactMeDuring}
                                data={contactDuringData}
                                dropDownValue={item.contactDuring.value}
                                selectedDropDownValue={this.onSelectedPhoneInfoDropDownValue(sectionKey, keyName, "contactDuring", index)}
                                dropDownPostition={styles.dropDownPostition}
                                errorFlag={!item.contactDuringValidation}
                                errorText={errMsg}
                            />
                            <View style={styles.setPrimaryView}>
                                <View style={styles.setPrimaryViewHeader}>
                                    <Text style={styles.setPrimarylbl}>{gblStrings.accManagement.setAsPrimary}</Text>
                                </View>
                                <View style={styles.phoneInfoSwitch}>
                                    <Switch trackColor={switchStyle}
                                        onValueChange={this.onSwitchPhoneInfo(sectionKey, keyName, index)}
                                        value={item.isPrimary}
                                    />
                                </View>
                            </View>

                        </View>

                    );
                })}

            </View>



        );

    }

    renderPhoneInfo = (sectionKey) => {
        // const { personal } = this.state;
        // const contactDetails = personal.contactDetails ? personal.contactDetails:[];
        const { [sectionKey]: sectionName } = this.state;
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        onPress={this.onClickExpandCollpaseEvent(sectionKey, "isPhoneInfoExpanded")}
                    >
                        <Text>
                            <Text style={styles.headings}>
                                {sectionName.isPhoneInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {sectionKey === "personal" ? gblStrings.accManagement.phoneInfo : gblStrings.accManagement.phoneInfoJoint}
                            </Text>
                        </Text>

                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />

                {
                    sectionName.isPhoneInfoExpanded && (
                        <View style={styles.childSectionGrp}>

                            <View style={styles.phoneInfoView}>
                                <View style={styles.lblHeader}>
                                    <Text style={styles.lblHeaderTxt}>
                                        <Text style={styles.lblHeaderTxt}>
                                            {gblStrings.accManagement.mobile}
                                        </Text>

                                    </Text>
                                </View>

                                {this.renderPhoneCardInfo(sectionKey, "mobile")}
                                <GButtonComponent
                                    onPress={this.onPressAddPhoneNumber(sectionKey, "mobile")}
                                    buttonStyle={styles.addPhoneEmailBtn}
                                    buttonText={gblStrings.accManagement.addAnotherNumber}
                                    textStyle={styles.addPhoneEmailBtnTxt}
                                />

                            </View>

                            <View style={styles.phoneInfoView}>
                                <View style={styles.lblHeader}>
                                    <Text style={styles.lblHeaderTxt}>
                                        <Text style={styles.lblHeaderTxt}>
                                            {gblStrings.accManagement.home}
                                        </Text>
                                        <Text style={styles.optionalTxt}>
                                            {` ${gblStrings.accManagement.optional}`}
                                        </Text>
                                    </Text>
                                </View>
                                {
                                    this.renderPhoneCardInfo(sectionKey, "home")
                                }
                                <GButtonComponent
                                    onPress={this.onPressAddPhoneNumber(sectionKey, "home")}
                                    buttonStyle={styles.addPhoneEmailBtn}
                                    buttonText={gblStrings.accManagement.addAnotherNumber}
                                    textStyle={styles.addPhoneEmailBtnTxt}
                                />

                            </View>


                            <View style={styles.phoneInfoView}>
                                <View style={styles.lblHeader}>
                                    <Text style={styles.lblHeaderTxt}>
                                        <Text style={styles.lblHeaderTxt}>
                                            {gblStrings.accManagement.work}
                                        </Text>
                                        <Text style={styles.optionalTxt}>
                                            {` ${gblStrings.accManagement.optional}`}
                                        </Text>
                                    </Text>
                                </View>
                                <View style={styles.phoneCardView}>
                                    {
                                        this.renderPhoneCardInfo(sectionKey, "work")
                                    }
                                    <GButtonComponent
                                        onPress={this.onPressAddPhoneNumber(sectionKey, "work")}
                                        buttonStyle={styles.addPhoneEmailBtn}
                                        buttonText={gblStrings.accManagement.addAnotherNumber}
                                        textStyle={styles.addPhoneEmailBtnTxt}
                                    />
                                </View>

                            </View>


                            <View style={styles.phoneInfoView}>
                                <View style={styles.lblHeader}>
                                    <Text style={styles.lblHeaderTxt}>
                                        <Text style={styles.lblHeaderTxt}>
                                            {gblStrings.accManagement.fax}
                                        </Text>
                                        <Text style={styles.optionalTxt}>
                                            {` ${gblStrings.accManagement.optional}`}
                                        </Text>
                                    </Text>
                                </View>
                                <View style={styles.phoneCardView}>
                                    {
                                        this.renderPhoneCardInfo(sectionKey, "fax")
                                    }
                                    <GButtonComponent
                                        onPress={this.onPressAddPhoneNumber(sectionKey, "fax")}
                                        buttonStyle={styles.addPhoneEmailBtn}
                                        buttonText={gblStrings.accManagement.addAnotherNumber}
                                        textStyle={styles.addPhoneEmailBtnTxt}
                                    />
                                </View>

                            </View>



                        </View>

                    )}
            </View>

        );
    }

    renderEmailInfo = (sectionKey) => {
        const { [sectionKey]: sectionName, errMsg } = this.state;

        const emailInfo = sectionName.emailInfo ? sectionName.emailInfo : [];
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        onPress={this.onClickExpandCollpaseEvent(sectionKey, "isEmailInfoExpanded")}
                    >
                        <Text>
                            <Text style={styles.headings}>
                                {sectionName.isEmailInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {sectionKey === "personal" ? gblStrings.accManagement.emailInfo : gblStrings.accManagement.emailInfoJoint}
                            </Text>
                        </Text>

                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />

                {
                    sectionName.isEmailInfoExpanded && (
                        <View style={styles.childSectionGrp}>

                            <View style={styles.phoneInfoView}>
                                <View style={styles.lblHeader}>
                                    <Text style={styles.lblHeaderTxt}>
                                        <Text style={styles.lblHeaderTxt}>
                                            {gblStrings.accManagement.emailAddress}
                                        </Text>

                                    </Text>
                                </View>



                                <View>
                                    {emailInfo.map((item, index) => {
                                        return (
                                            <View style={styles.phoneCardView}>

                                                {!item.isPrimary && (
                                                    <TouchableOpacity
                                                        onPress={this.onDeleteEmailInfo(sectionKey, index)}
                                                        activeOpacity={0.8}
                                                        accessibilityRole="button"
                                                        style={styles.removeTxtBtn}
                                                    >
                                                        <Text style={styles.removeTxt}>
                                                            {gblStrings.common.remove}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )}


                                                <Text style={styles.lblTxt}>
                                                    {`${gblStrings.accManagement.emailAddress} ${index + 1}`}
                                                </Text>
                                                <GInputComponent
                                                    inputref={this.setInputRef(`${sectionKey}emailAddress${index}`)}
                                                    propInputStyle={item.emailAddressValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                                    placeholder={gblStrings.accManagement.emailformat}
                                                    keyboardType="email-address"
                                                    maxLength={gblStrings.maxLength.emailID}
                                                    onChangeText={this.onChangeTextEmailInfo(sectionKey, "emailAddress", index)}
                                                    //   onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo)}
                                                    errorFlag={!item.emailAddressValidation}
                                                    errorText={errMsg}
                                                    value={item.emailAddress}

                                                />


                                                <View style={styles.setPrimaryView}>
                                                    <View style={styles.setPrimaryViewHeader}>
                                                        <Text style={styles.setPrimarylbl}>{gblStrings.accManagement.setAsPrimary}</Text>
                                                    </View>
                                                    <View style={styles.phoneInfoSwitch}>
                                                        <Switch trackColor={switchStyle}
                                                            onValueChange={this.onSwitchEmailInfo(sectionKey, index)}
                                                            value={item.isPrimary}
                                                        />
                                                    </View>
                                                </View>

                                            </View>

                                        );
                                    })}

                                </View>


                                <GButtonComponent
                                    onPress={this.onPressAddEmailAddress(sectionKey)}
                                    buttonStyle={styles.addPhoneEmailBtn}
                                    buttonText={gblStrings.accManagement.addAnotherEmail}
                                    textStyle={styles.addPhoneEmailBtnTxt}
                                />

                            </View>


                        </View>
                    )}
            </View>

        );
    }

    renderEmploymentInfo = (sectionKey) => {
        const { [sectionKey]: sectionName, errMsg } = this.state;
        let inputRefKey = "";
        let headings = gblStrings.accManagement.employmentInformation;
        if (sectionKey === "jointOwner") {
            inputRefKey = "_joint";
            headings = gblStrings.accManagement.employmentInformationJoint;
        }
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>

                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent(sectionKey, "isEmploymentInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >

                        <Text>
                            <Text style={styles.headings}>
                                {sectionName.isEmploymentInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {headings}
                            </Text>
                        </Text>
                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    sectionName.isEmploymentInfoExpanded && (
                        <View style={styles.childSectionGrp}>

                            {this.renderCustomDropDown({
                                section: sectionKey,
                                stateKey: "empStatus",
                                dropDownName: "empStatusDropDown",
                                lblDropdownName: gblStrings.accManagement.empStatus,
                                isOptional: false
                            })
                            }
                            {sectionName.empStatus.value === "Others" && (
                                <GInputComponent
                                    inputref={this.setInputRef(`empStatusForOther${inputRefKey}`)}
                                    propInputStyle={styles.customTxtBox}
                                    placeholder="Enter Employment status"
                                    value={sectionName.empStatusForOther}
                                    maxLength={gblStrings.maxLength.common}
                                    onChangeText={this.onChangeText(sectionKey, "empStatusForOther")}
                                    onSubmitEditing={this.onSubmitEditing(this.empIndustry)}
                                    errorFlag={!sectionName.empStatusForOtherValidation}
                                    errorText={errMsg}
                                />
                            )}


                            {
                                //  Render employment fields if user have employment history
                                (sectionName.empStatus.value && sectionName.empStatus.value !== "" && sectionName.empStatus.value !== "Unemployed" && sectionName.empStatus.value !== "Homemaker" && sectionName.empStatus.value !== "Student" && sectionName.empStatus.value !== "Retired") && (
                                    <View style={styles.childSectionGrp}>

                                        {this.renderCustomDropDown({
                                            section: sectionKey,
                                            stateKey: "empIndustry",
                                            dropDownName: "empIndustryDropDown",
                                            lblDropdownName: gblStrings.accManagement.industry,
                                            isOptional: false
                                        })
                                        }
                                        {sectionName.empIndustry.value && sectionName.empIndustry.value === "Other Industry" && (
                                            <GInputComponent
                                                inputref={this.setInputRef(`empIndustryForOther${inputRefKey}`)}
                                                propInputStyle={styles.customTxtBox}
                                                placeholder="Enter Industry"
                                                value={sectionName.empIndustryForOther}
                                                maxLength={gblStrings.maxLength.common}
                                                onChangeText={this.onChangeText(sectionKey, "empIndustryForOther")}
                                                onSubmitEditing={this.onSubmitEditing(this.empOccupation)}
                                                errorFlag={!sectionName.empIndustryForOtherValidation}
                                                errorText={errMsg}
                                            />
                                        )}

                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.occupation}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`empOccupation${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            value={sectionName.occupation}

                                            placeholder=""
                                            maxLength={gblStrings.maxLength.occupation}
                                            onChangeText={this.onChangeText(sectionKey, "empOccupation")}
                                            onSubmitEditing={this.onSubmitEditing(this.empName)}



                                        />

                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.empName}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`empName${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.name}
                                            maxLength={gblStrings.maxLength.employerName}
                                            onChangeText={this.onChangeText(sectionKey, "empName")}
                                            onSubmitEditing={this.onSubmitEditing(this.empAddrLine1)}

                                        />

                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.empAddress}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`empAddrLine1${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.empAddrLine1}
                                            maxLength={gblStrings.maxLength.address}
                                            value={sectionName.empAddrLine1}
                                            onChangeText={this.onChangeText(sectionKey, "empAddrLine1")}
                                            // onSubmitEditing={this.onSubmitEditing(this.empAddrLine2)}
                                            onSubmitEditing={this.onSubmitEmpZipEditing(sectionKey, "empZipcode", this.empAddrLine2)}
                                            errorFlag={!sectionName.empAddrLine1Validation}
                                            errorText={errMsg}

                                        />
                                        <GInputComponent
                                            inputref={this.setInputRef(`empAddrLine2${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.empAddrLine2}
                                            maxLength={gblStrings.maxLength.address}
                                            value={sectionName.empAddrLine2}
                                            onChangeText={this.onChangeText(sectionKey, "empAddrLine2")}
                                            // onSubmitEditing={this.onSubmitEditing(this.empZipcode)}
                                            onSubmitEditing={this.onSubmitEmpZipEditing(sectionKey, "empZipcode", this.empZipcode)}

                                            errorFlag={!sectionName.empAddrLine2Validation}
                                            errorText={errMsg}
                                        />

                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.zipcode}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`empZipcode${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.enterZip}
                                            maxLength={gblStrings.maxLength.zipCode}
                                            value={sectionName.empZipcode}
                                            keyboardType="number-pad"
                                            returnKeyType="done"
                                            onChangeText={this.onChangeText(sectionKey, "empZipcode")}
                                            onSubmitEditing={this.onSubmitEmpZipEditing(sectionKey, "empZipcode", this.empCity)}
                                            errorFlag={!sectionName.empZipcodeValidation}
                                            errorText={errMsg}
                                        />

                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.cityAndState}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`empCity${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.enterCity}
                                            maxLength={gblStrings.maxLength.city}
                                            value={sectionName.empCity}
                                            onChangeText={this.onChangeText(sectionKey, "empCity")}
                                            onSubmitEditing={this.onSubmitEditing(this.empStateCity)}


                                        />
                                        <GInputComponent
                                            inputref={this.setInputRef(`empStateCity${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.enterState}
                                            returnKeyType="done"
                                            maxLength={gblStrings.maxLength.state}
                                            value={sectionName.empStateCity}
                                            onChangeText={this.onChangeText(sectionKey, "empStateCity")}
                                            onSubmitEditing={this.onSubmitEditing(this.empWorkPhoneNo)}


                                        />
                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.workPhoneNo}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`empWorkPhoneNo${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.phoneNoFormat}
                                            maxLength={gblStrings.maxLength.workPhone}
                                            value={sectionName.empWorkPhoneNo}
                                            keyboardType="phone-pad"
                                            onChangeText={this.onChangeText(sectionKey, "empWorkPhoneNo")}

                                        />


                                    </View>
                                )}
                            {
                                //  Render employment fields if user not have employment history
                                (sectionName.empStatus === "Unemployed" || sectionName.empStatus === "Homemaker" || sectionName.empStatus === "Student" || sectionName.empStatus === "Retired") && (
                                    <View style={styles.childSectionGrp}>
                                        {this.renderCustomDropDown({
                                            section: sectionKey,
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

    renderMilitaryInfo = (sectionKey) => {
        const { [sectionKey]: sectionName, errMsg } = this.state;
        let inputRefKey = "";
        let headings = gblStrings.accManagement.militaryInformation;
        if (sectionKey === "jointOwner") {
            inputRefKey = "_joint";
            headings = gblStrings.accManagement.militaryInformationJoint;
        }
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent(sectionKey, "isMilitaryInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >
                        <Text>
                            <Text style={styles.headings}>
                                {sectionName.isMilitaryInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {headings}
                            </Text>
                        </Text>

                    </TouchableOpacity>



                </View>
                <Text style={styles.lblLine} />
                {
                    sectionName.isMilitaryInfoExpanded && (
                        <View style={styles.childSectionGrp}>

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.servingStatus}
                            </Text>
                            <View style={styles.radioBtnGrp}>
                                <CustomRadio
                                    componentStyle={styles.radioCol1}
                                    size={28}
                                    outerCicleColor="#DEDEDF"
                                    innerCicleColor="#61285F"
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label="Yes"
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel=""
                                    selected={!!((sectionName.isMilitaryHistory !== null && sectionName.isMilitaryHistory === "Yes"))}
                                    onPress={this.onPressRadio(sectionKey, "isMilitaryHistory", "Yes")}

                                />
                                <CustomRadio
                                    componentStyle={styles.radioCol2}
                                    size={28}
                                    outerCicleColor="#DEDEDF"
                                    innerCicleColor="#61285F"
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label="No"
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel=""
                                    selected={!!((sectionName.isMilitaryHistory !== null && sectionName.isMilitaryHistory === "No"))}
                                    onPress={this.onPressRadio(sectionKey, "isMilitaryHistory", "No")}
                                />
                            </View>
                            {!sectionName.isMilitaryHistoryValidation && (
                                <Text style={styles.errMsg}>
                                    {errMsg}
                                </Text>
                            )}


                            {
                                sectionName.isMilitaryHistory === "Yes" && (
                                    <View>

                                        {this.renderCustomDropDown({
                                            section: sectionKey,
                                            stateKey: "militaryStatus",
                                            dropDownName: "militaryStatusDropDown",
                                            lblDropdownName: gblStrings.accManagement.militaryStatus,
                                            isOptional: false
                                        })
                                        }

                                        {this.renderCustomDropDown({
                                            section: sectionKey,
                                            stateKey: "branchOfService",
                                            dropDownName: "branchOfServiceDropDown",
                                            lblDropdownName: gblStrings.accManagement.branchOfService,
                                            isOptional: false
                                        })
                                        }


                                        {this.renderCustomDropDown({
                                            section: sectionKey,
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
                                                    date={sectionName.fromDateMilitary}
                                                    placeholder="Select Date"
                                                    maxDate={currentdate}
                                                    onDateChange={this.onChangeDate(sectionKey, "fromDateMilitary")}

                                                />
                                            </View>
                                        </View>
                                        <View style={styles.militaryServiceView}>
                                            <Text style={styles.militaryLblDate1}>
                                                {gblStrings.accManagement.to}
                                            </Text>
                                            <View style={styles.militaryLblDate2}>
                                                <GDateComponent
                                                    date={sectionName.toDateMilitary}
                                                    placeholder="Select Date"
                                                    minDate={sectionName.fromDateMilitary}
                                                    maxDate={currentdate}
                                                    onDateChange={this.onChangeDate(sectionKey, "toDateMilitary")}

                                                />

                                            </View>
                                        </View>


                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.commissionSource}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef(`commissionSource${inputRefKey}`)}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder=""
                                            value={sectionName.commissionSource}
                                            maxLength={60}
                                            onChangeText={this.onChangeText(sectionKey, "commissionSource")}
                                        />

                                    </View>
                                )}

                        </View>
                    )}
            </View>
        );

    }

    renderFinancialInfo = (sectionKey) => {
        const { [sectionKey]: sectionName } = this.state;
        // let inputRefKey = "";
        let headings = gblStrings.accManagement.financialInformation;
        if (sectionKey === "jointOwner") {
            // inputRefKey = "_joint";
            headings = gblStrings.accManagement.financialInformationJoint;
        }

        return (


            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent(sectionKey, "isFinancialInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >
                        <Text>
                            <Text style={styles.headings}>
                                {sectionName.isFinancialInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {headings}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />
                {
                    sectionName.isFinancialInfoExpanded && (
                        <View style={styles.childSectionGrp}>

                            {this.renderCustomDropDown({
                                section: sectionKey,
                                stateKey: "annualIncome",
                                dropDownName: "annualIncomeDropDown",
                                lblDropdownName: gblStrings.accManagement.annualIncome,
                                isOptional: false
                            })
                            }

                            {this.renderCustomDropDown({
                                section: sectionKey,
                                stateKey: "taxBracket",
                                dropDownName: "taxBracketDropDown",
                                lblDropdownName: gblStrings.accManagement.taxBracket,
                                isOptional: false
                            })
                            }


                            {this.renderCustomDropDown({
                                section: sectionKey,
                                stateKey: "networth",
                                dropDownName: "networthDropDown",
                                lblDropdownName: gblStrings.accManagement.networth,
                                isOptional: false
                            })
                            }

                            {this.renderCustomDropDown({
                                section: sectionKey,
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
        const { personal, errMsg } = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("personal", "isRegulatoryInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >
                        <Text>
                            <Text style={styles.headings}>
                                {personal.isRegulatoryInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.regulatoryQuestion}
                            </Text>
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
                                    size={28}
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
                                    size={28}
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
        // const { jointOwner } = this.state;

        return (
            <View>
                {this.renderPersonalInfo("jointOwner")}
                {this.renderContactInfo("jointOwner")}
                {this.renderPhoneInfo("jointOwner")}
                {this.renderEmailInfo("jointOwner")}
                {this.renderEmploymentInfo("jointOwner")}
                {this.renderFinancialInfo("jointOwner")}
                {this.renderMilitaryInfo("jointOwner")}
                {
                    /*  (jointOwner.empStatus !== "Not Employed" && jointOwner.empStatus !== "") && <this.renderRegulatoryInfoJointOwner /> */
                }
            </View>
        );


    }


    renderPersonalInfoJointOwner = () => {
        const { jointOwner, errMsg } = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isPersonalInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >

                        <Text>
                            <Text style={styles.headings}>
                                {jointOwner.isPersonalInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.personalInformationJoint}
                            </Text>
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
                            {this.renderRadio("jointOwner", "gender", 28, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
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
                            {this.renderRadio("jointOwner", "citizenship", 28, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp)}
                            {

                                jointOwner.citizenship !== "U.S" &&
                                (
                                    <View style={styles.nonUSView}>
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

                                        <Text style={styles.lblTxt}>
                                            (or)
                                        </Text>

                                        <View style={styles.mailToCSRGrp}>
                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.mailToCSR}
                                            </Text>
                                            <Text style={styles.headings}>
                                                {gblStrings.common.victoryCapital}
                                            </Text>
                                            <Text style={styles.lblValueTxt}>
                                                {gblStrings.common.victoryCapitalAddress}
                                            </Text>
                                        </View>
                                        {
                                    /* 
                                        <View>
                                            <Text style={styles.lblTxt}>
                                                {gblStrings.accManagement.residenceStatus}
                                            </Text>
                                            <View style={styles.radioBtnColGrp}>
                                                <CustomRadio
                                                    //  componentStyle={styles.radioCol1}
                                                    size={28}
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
                                                    size={28}
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
                                        </View> */}

                                    </View>
                                )}

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



    renderContactInfoJointOwner = () => {
        const { jointOwner, errMsg } = this.state;
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isContactInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >

                        <Text>
                            <Text style={styles.headings}>
                                {jointOwner.isContactInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.contactInfoJoint}
                            </Text>
                        </Text>

                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />
                {
                    jointOwner.isContactInfoExpanded && (
                        <View style={styles.childSectionGrp}>
                            {this.renderRadio("jointOwner", "mailingAddressType", 28, { marginBottom: scaledHeight(13) }, styles.radioBtnColGrp)}
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
                                // onSubmitEditing={this.onSubmitEditing(this.addrLine2_joint)}
                                onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode", this.addrLine2_joint)}
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
                                // onSubmitEditing={this.onSubmitEditing(this.zipcode_joint)}
                                onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode", this.city_joint)}

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
                                value={jointOwner.zipcode}
                                keyboardType="number-pad"
                                returnKeyType="done"
                                onChangeText={this.onChangeText("jointOwner", "zipcode")}
                                onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode", this.city_joint)}
                                errorFlag={!jointOwner.zipcodeValidation}
                                errorText={errMsg}


                            />

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.city}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("city_joint")}
                                propInputStyle={jointOwner.cityValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}
                                // placeholder={gblStrings.accManagement.enterCity}
                                returnKeyType="done"
                                maxLength={gblStrings.maxLength.city}
                                value={jointOwner.city}
                                onChangeText={this.onChangeText("jointOwner", "city")}
                                onSubmitEditing={this.onSubmitEditing(this.stateCity_joint)}
                                errorFlag={!jointOwner.cityValidation}
                                errorText={errMsg}
                                editable={false}



                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.stateTerritory}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("stateCity")}
                                propInputStyle={jointOwner.stateCityValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}
                                // placeholder={gblStrings.accManagement.enterState}
                                returnKeyType="done"
                                maxLength={gblStrings.maxLength.state}
                                value={jointOwner.stateCity}
                                onChangeText={this.onChangeText("jointOwner", "stateCity")}
                                onSubmitEditing={this.onSubmitEditing(this.mobileNo_joint)}
                                errorFlag={!jointOwner.stateCityValidation}
                                errorText={errMsg}
                                editable={false}

                            />

                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.isYourPhysicalAddressSame}
                            </Text>
                            <View style={styles.radioBtnGrp}>
                                <CustomRadio
                                    componentStyle={styles.radioCol1}
                                    size={28}
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
                                    size={28}
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
                                            // onSubmitEditing={this.onSubmitEditing(this.addrLine2_Phy)}
                                            onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode_Phy", this.addrLine2_Phy)}
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
                                            // onSubmitEditing={this.onSubmitEditing(this.zipcode_Phy_joint)}
                                            onSubmitEditing={this.onSubmitZipEditing("jointOwner", "zipcode_Phy", this.zipcode_Phy_joint)}
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
                                            {gblStrings.accManagement.city}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef("city_Phy_joint")}
                                            propInputStyle={jointOwner.city_PhyValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}
                                            // placeholder={gblStrings.accManagement.enterCity}
                                            maxLength={gblStrings.maxLength.city}
                                            value={jointOwner.city_Phy}
                                            onChangeText={this.onChangeText("jointOwner", "city_Phy")}
                                            onSubmitEditing={this.onSubmitEditing(this.stateCity_Phy_joint)}
                                            errorFlag={!jointOwner.city_PhyValidation}
                                            errorText={errMsg}
                                            editable={false}


                                        />
                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.stateTerritory}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef("stateCity_Phy_joint")}
                                            propInputStyle={jointOwner.stateCity_PhyValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}
                                            //  placeholder={gblStrings.accManagement.enterState}
                                            returnKeyType="done"
                                            maxLength={gblStrings.maxLength.state}
                                            value={jointOwner.stateCity_Phy}
                                            onChangeText={this.onChangeText("jointOwner", "stateCity_Phy")}
                                            onSubmitEditing={this.onSubmitEditing(this.mobileNo_joint)}
                                            errorFlag={!jointOwner.stateCity_PhyValidation}
                                            errorText={errMsg}
                                            editable={false}

                                        />

                                    </View>
                                )}




                        </View>
                    )}
            </View>

        );

    }

    renderPhoneInfoJointOwner = () => {
        const { jointOwner, errMsg } = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isPhoneInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >

                        <Text>
                            <Text style={styles.headings}>
                                {jointOwner.isPhoneInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.phoneInfoJoint}
                            </Text>
                        </Text>

                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />
                {
                    jointOwner.isPhoneInfoExpanded && (
                        <View style={styles.childSectionGrp}>
                            <View style={styles.lblHeader}>
                                <Text style={styles.lblHeaderTxt}>
                                    {gblStrings.accManagement.mobile}
                                </Text>
                            </View>
                            {this.renderCustomDropDown({
                                section: "jointOwner",
                                stateKey: "phoneType",
                                dropDownName: "phoneTypeDropDown",
                                lblDropdownName: gblStrings.accManagement.mobile,
                                isOptional: false
                            })
                            }
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
                                isOptional: false
                            })
                            }


                            <View style={styles.lblHeader}>
                                <Text style={styles.lblHeaderTxt}>
                                    {gblStrings.accManagement.home}
                                </Text>
                            </View>
                            {this.renderCustomDropDown({
                                section: "jointOwner",
                                stateKey: "phoneType2",
                                dropDownName: "phoneType2DropDown",
                                lblDropdownName: gblStrings.accManagement.home,
                                isOptional: false
                            })
                            }
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
                                isOptional: false
                            })
                            }

                            <View style={styles.lblHeader}>
                                <Text style={styles.lblHeaderTxt}>
                                    {gblStrings.accManagement.work}
                                </Text>
                            </View>

                            {this.renderCustomDropDown({
                                section: "jointOwner",
                                stateKey: "phoneType3",
                                dropDownName: "phoneType3DropDown",
                                lblDropdownName: gblStrings.accManagement.work,
                                isOptional: false
                            })
                            }

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
                                isOptional: false
                            })
                            }

                            <View style={styles.lblHeader}>
                                <Text style={styles.lblHeaderTxt}>
                                    {gblStrings.accManagement.fax}
                                </Text>
                            </View>

                            {this.renderCustomDropDown({
                                section: "jointOwner",
                                stateKey: "phoneType4",
                                dropDownName: "phoneType4DropDown",
                                lblDropdownName: gblStrings.accManagement.fax,
                                isOptional: false
                            })
                            }

                            <GInputComponent
                                inputref={this.setInputRef("telePhoneNo4")}
                                propInputStyle={styles.customTxtBox}
                                placeholder=""
                                value={jointOwner.telePhoneNo4}
                                maxLength={gblStrings.maxLength.phoneNo}
                                keyboardType="phone-pad"
                                onChangeText={this.onChangeText("jointOwner", "telePhoneNo4")}
                                onSubmitEditing={this.onSubmitEditing(this.emailAddress_joint)}

                            />
                            {this.renderCustomDropDown({
                                section: "jointOwner",
                                stateKey: "contactDuringTelePhone4",
                                dropDownName: "contactDuringTelePhone4DropDown",
                                lblDropdownName: gblStrings.accManagement.contactMeDuring,
                                isOptional: false
                            })
                            }


                        </View>
                    )}
            </View>

        );
    }

    renderEmailInfoJointOwner = () => {
        const { jointOwner, errMsg } = this.state;
        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isEmailInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >

                        <Text>
                            <Text style={styles.headings}>
                                {jointOwner.isEmailInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.emailInfoJoint}
                            </Text>
                        </Text>

                    </TouchableOpacity>
                </View>
                <Text style={styles.lblLine} />
                {
                    jointOwner.isEmailInfoExpanded && (
                        <View style={styles.childSectionGrp}>

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
                        </View>
                    )}
            </View>

        );
    }

    renderEmploymentInfoJointOwner = () => {
        const { jointOwner, errMsg } = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isEmploymentInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >
                        <Text>
                            <Text style={styles.headings}>
                                {jointOwner.isEmploymentInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.employmentInformationJoint}
                            </Text>
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
                                            // onSubmitEditing={this.onSubmitEditing(this.empAddrLine2_joint)}
                                            onSubmitEditing={this.onSubmitEmpZipEditing("jointOwner", "empZipcode", this.empAddrLine2_joint)}
                                            errorFlag={!jointOwner.empAddrLine1Validation}
                                            errorText={errMsg}

                                        />
                                        <GInputComponent
                                            inputref={this.setInputRef("empAddrLine2_joint")}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.empAddrLine2}
                                            maxLength={gblStrings.maxLength.address}
                                            value={jointOwner.empAddrLine2}
                                            onChangeText={this.onChangeText("jointOwner", "empAddrLine2")}
                                            // onSubmitEditing={this.onSubmitEditing(this.empZipcode_joint)}
                                            onSubmitEditing={this.onSubmitEmpZipEditing("jointOwner", "empZipcode", this.empZipcode_joint)}
                                            errorFlag={!jointOwner.empAddrLine2Validation}
                                            errorText={errMsg}

                                        />

                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.zipcode}
                                        </Text>
                                        <GInputComponent
                                            inputref={this.setInputRef("empZipcode_joint")}
                                            propInputStyle={styles.customTxtBox}
                                            placeholder={gblStrings.accManagement.enterZip}
                                            maxLength={gblStrings.maxLength.zipCode}
                                            returnKeyType="done"
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
        const { jointOwner, errMsg } = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isMilitaryInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"

                    >

                        <Text>
                            <Text style={styles.headings}>
                                {jointOwner.isMilitaryInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.militaryInformationJoint}
                            </Text>
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
                                    size={28}
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
                                    size={28}
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
        const { jointOwner } = this.state;

        return (


            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>

                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("jointOwner", "isFinancialInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >

                        <Text>
                            <Text style={styles.headings}>
                                {jointOwner.isFinancialInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.financialInformationJoint}
                            </Text>
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
        const { jointOwner, errMsg } = this.state;

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
                            size={28}
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
                            size={28}
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
                { /* <this.renderRegulatoryInfoChild /> */}
            </View>
        );


    }


    renderPersonalInfoChild = () => {
        const { childBeneficiary, errMsg } = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>

                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("childBeneficiary", "isPersonalInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >

                        <Text>
                            <Text style={styles.headings}>
                                {childBeneficiary.isPersonalInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.personalInformationChild}
                            </Text>
                        </Text>

                    </TouchableOpacity>
                </View>

                <Text style={styles.lblLine} />
                {
                    childBeneficiary.isPersonalInfoExpanded && (
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

                    )}

            </View>
        );


    }

    renderRegulatoryInfoChild = () => {
        const { childBeneficiary, errMsg } = this.state;

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
                            size={28}
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

                            size={28}
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
        const { masterLookupStateData } = this.props;
        const { retirementBeneficiaryData, errMsg, retirement } = this.state;
        let tempBeneficiaryData = dummyData;
        let tempRelationShipData = dummyData;


        let tempkey = "relationship";
        if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
            tempRelationShipData = masterLookupStateData[`${tempkey}`].value;
        }

        tempkey = "ben_type";
        if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
            tempBeneficiaryData = masterLookupStateData[`${tempkey}`].value;
        }

        return (

            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>

                    <TouchableOpacity
                        onPress={this.onClickExpandCollpaseEvent("retirement", "isPersonalInfoExpanded")}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                    >


                        <Text>
                            <Text style={styles.headings}>
                                {retirement.isPersonalInfoExpanded ? "- " : "+ "}
                            </Text>
                            <Text style={styles.headings}>
                                {gblStrings.accManagement.beneficiariesOpt}
                            </Text>
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.lblLine} />

                {
                    retirement.isPersonalInfoExpanded && (
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
                                        {index !== 0 && <Text style={styles.lblLine} />}


                                        <GDropDownComponent
                                            inputref={this.setInputRef(`beneficiaryType${index}`)}
                                            dropDownLayout={styles.dropDownLayout}
                                            dropDownTextName={styles.dropDownTextName}
                                            textInputStyle={styles.textInputStyle}
                                            dropDownName={gblStrings.accManagement.beneficiary}
                                            data={tempBeneficiaryData}
                                            showDropDown={item.beneficiaryTypeDropDown}
                                            dropDownValue={item.beneficiaryType}
                                            selectedDropDownValue={this.onSelectedIRABeneficiaryDropDownValue("beneficiaryTypeDropDown", index)}
                                            itemToDisplay="value"
                                            dropDownPostition={styles.dropDownPostition}
                                            errorFlag={!item.beneficiaryTypeValidation}
                                            errorText={gblStrings.accManagement.emptyBeneficiaryType}
                                        />




                                        <GDropDownComponent
                                            inputref={this.setInputRef(`relationshipToAcc${index}`)}
                                            dropDownLayout={styles.dropDownLayout}
                                            dropDownTextName={styles.dropDownTextName}
                                            textInputStyle={styles.textInputStyle}
                                            dropDownName={gblStrings.accManagement.relationshipToAccHolder}
                                            data={tempRelationShipData}
                                            showDropDown={item.relationshipToAccDropDown}
                                            dropDownValue={item.relationshipToAcc}
                                            selectedDropDownValue={this.onSelectedIRABeneficiaryDropDownValue("relationshipToAccDropDown", index)}
                                            itemToDisplay="value"
                                            dropDownPostition={styles.dropDownPostition}
                                            errorFlag={!item.relationshipToAccValidation}
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
                                                    returnKeyType="done"
                                                    value={item.beneficiaryDistPercent}
                                                    maxLength={gblStrings.maxLength.distributionPercentage}
                                                    keyboardType="decimal-pad"
                                                    onChangeText={this.onChangeTextForIRABeneficiary("beneficiaryDistPercent", index)}
                                                    onSubmitEditing={this.onBlurDistPercentageForIRABeneficiary("beneficiaryDistPercent", index, this[`beneficiaryDistPercent${index}`])}
                                                    errorFlag={!item.beneficiaryDistPercentValidation}
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
                                            value={item.socialSecurityNo}
                                            keyboardType="number-pad"
                                            returnKeyType="done"
                                            maxLength={gblStrings.maxLength.ssnNo}
                                            onChangeText={this.onChangeTextForIRABeneficiary("socialSecurityNo", index)}
                                            onSubmitEditing={this.onSubmitEditing(this[`firstName${index}`])}
                                            errorFlag={!item.socialSecurityNoValidation}
                                            errorText={errMsg}
                                            secureTextEntry
                                        />

                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.firstName}
                                        </Text>

                                        <GInputComponent
                                            inputref={this.setInputRef(`firstName${index}`)}
                                            propInputStyle={styles.customTxtBox}
                                            value={item.firstName}
                                            placeholder=""
                                            maxLength={gblStrings.maxLength.firstName}
                                            onChangeText={this.onChangeTextForIRABeneficiary("firstName", index)}
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
                                            onChangeText={this.onChangeTextForIRABeneficiary("middleInitial", index)}
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
                                            onChangeText={this.onChangeTextForIRABeneficiary("lastName", index)}
                                            onSubmitEditing={this.onSubmitEditing(this[`dob${index}`])}
                                            errorFlag={!item.lastNameValidation}
                                            errorText={errMsg}

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
                                            onDateChange={this.onChangeDateForIRABeneficiary("dob", index)}

                                        />


                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.emailAddress}
                                        </Text>


                                        <GInputComponent
                                            inputref={this.setInputRef(`emailAddress${index}`)}
                                            propInputStyle={styles.customTxtBox}
                                            value={item.emailAddress}
                                            placeholder=""
                                            maxLength={gblStrings.maxLength.emailID}
                                            onChangeText={this.onChangeTextForIRABeneficiary("emailAddress", index)}
                                            errorFlag={!item.emailAddressValidation}
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
                            <View>

                                {retirementBeneficiaryData.length < 3 && (
                                    <GButtonComponent
                                        onPress={this.onPressAddIRABeneficiary}
                                        buttonStyle={styles.addBeneficiaryBtn}
                                        buttonText={gblStrings.accManagement.addAnotherBeneficiary}
                                        textStyle={styles.addBeneficiaryBtnTxt}
                                    />
                                )}
                            </View>
                        </View>

                    )}



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
        const { navigation } = this.props;
        const { getParam } = navigation;
        const accType = `${getParam('accType', '')}`;

        const { estate, errMsg } = this.state;

        return (
            <View style={styles.sectionGrp}>
                <View style={styles.accTypeSelectSection}>
                    <Text style={styles.headings}>
                        {accType === "Trust Account" ? gblStrings.accManagement.trustInfo : gblStrings.accManagement.estateInfo}
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
                                {accType === "Trust Account" ? gblStrings.accManagement.trustName : gblStrings.accManagement.estateName}
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
                                    size={28}
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
                                    size={28}
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
                                    size={28}
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
                                    size={28}
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
                                        {this.renderYesNoRadio("estate", "isBusinessTrust")}


                                        <Text style={styles.lblTxt}>
                                            {gblStrings.accManagement.isBrokerDealerTrust}
                                        </Text>
                                        {this.renderYesNoRadio("estate", "isBrokerOrDealerTrust")}

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
                                            numberOfLines={8}
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
        const { masterLookupStateData } = this.props;
        const { estate, errMsg } = this.state;

        let dropDownData = [];
        const tempkey = "suffix";
        if (tempkey !== "" && this.props && masterLookupStateData && masterLookupStateData[`${tempkey}`] && masterLookupStateData[`${tempkey}`].value) {
            dropDownData = masterLookupStateData[`${tempkey}`].value;
        }
        const tempSuffixData = dropDownData;
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
                                        {index === 1 && (
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
                                        {this.renderRadioForEstateTrust("citizenship", 28, { width: "30%", marginBottom: scaledHeight(0) }, styles.radioBtnGrp, index)}

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
                                            onChangeText={this.onChangeTextForEstateTrust("addrLine1", index)}
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
                                            onChangeText={this.onChangeTextForEstateTrust("addrLine2", index)}
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
                                            onChangeText={this.onChangeTextForEstateTrust("zipcode", index)}
                                            keyboardType="number-pad"
                                            onSubmitEditing={this.onSubmitZipTrusteeEditing("estate", "zipcode", this[`city${index}`], index)}
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
                                            onChangeText={this.onChangeTextForEstateTrust("city", index)}
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
                                            onChangeText={this.onChangeTextForEstateTrust("stateCity", index)}
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
                                                size={28}
                                                outerCicleColor="#DEDEDF"
                                                innerCicleColor="#61285F"
                                                labelStyle={styles.lblRadioBtnTxt}
                                                label="Yes"
                                                descLabelStyle={styles.lblRadioDescTxt}
                                                descLabel=""
                                                selected={!!((item.isYourPhysicalAddresSame !== null && item.isYourPhysicalAddresSame === "Yes"))}
                                                onPress={this.onPressRadioForEstateTrust("isYourPhysicalAddresSame", index, "Yes")}

                                            />
                                            <CustomRadio
                                                componentStyle={styles.radioCol2}
                                                size={28}
                                                outerCicleColor="#DEDEDF"
                                                innerCicleColor="#61285F"
                                                labelStyle={styles.lblRadioBtnTxt}
                                                label="No"
                                                descLabelStyle={styles.lblRadioDescTxt}
                                                descLabel=""
                                                selected={!!((item.isYourPhysicalAddresSame !== null && item.isYourPhysicalAddresSame === "No"))}
                                                onPress={this.onPressRadioForEstateTrust("isYourPhysicalAddresSame", index, "No")}

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
                                                        onChangeText={this.onChangeTextForEstateTrust("addrLine1_Phy", index)}
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
                                                        onChangeText={this.onChangeTextForEstateTrust("addrLine2_Phy", index)}
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
                                                        onChangeText={this.onChangeTextForEstateTrust("zipcode_Phy", index)}
                                                        keyboardType="number-pad"
                                                        onSubmitEditing={this.onSubmitZipTrusteeEditing("estate", "zipcode_Phy", this[`city_Phy${index}`], index)}
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
                                                        onChangeText={this.onChangeTextForEstateTrust("city_Phy", index)}
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
                                                        onChangeText={this.onChangeTextForEstateTrust("stateCity_Phy", index)}
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
                                            onChangeText={this.onChangeTextForEstateTrust("residencePhoneNo", index)}
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
                                            onChangeText={this.onChangeTextForEstateTrust("busniessPhoneNo", index)}
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

        const { navigation, accOpeningData, masterLookupStateData } = this.props;
        const { getParam } = navigation;
        const accType = `${getParam('accType', '')}`;
        const tempAccTypeCAPS = accType.toUpperCase();
        AppUtils.debugLog(`render accType::::>${accType}`);
        const { enableScrollViewScroll, userAvatar } = this.state;


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


                    <View style={styles.allFieldsMandatoryView}>
                        <Text style={styles.allFieldsMandatoryTxt}>
                            {gblStrings.accManagement.allFieldsMandatory}
                        </Text>
                    </View>



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
                                <Text style={styles.uploadImgViewlbl}>
                                    {gblStrings.accManagement.uploadImage}
                                </Text>
                                <Text style={styles.optionalTxt}>
                                    {gblStrings.accManagement.optional}
                                </Text>


                            </View>
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
    addressFormatData: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    uploadAavatarImg: PropTypes.func,
    getStateCity: PropTypes.func,
    saveAccountOpening: PropTypes.func,
    getRankData: PropTypes.func,
    getAddressFormat: PropTypes.func,
    getCompositeLookUpData: PropTypes.func,
    clearReduxKeyData: PropTypes.func

};
OpenAccPageTwoComponent.defaultProps = {
    navigation: {},
    addressFormatData: {},
    accOpeningData: {},
    initialState: {},
    masterLookupStateData: {},
    uploadAavatarImg: null,
    getStateCity: null,
    saveAccountOpening: null,
    getRankData: null,
    getAddressFormat: null,
    getCompositeLookUpData: null,
    clearReduxKeyData: null



};

export default OpenAccPageTwoComponent;

