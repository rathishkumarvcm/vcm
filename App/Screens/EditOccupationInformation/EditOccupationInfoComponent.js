import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GInputComponent, GDropDownComponent, GLoadingSpinner } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import ImagesLoad from '../../Images/ImageIndex';

let primarySourceOfIncome = [];

let tempEmploymentClass = [
    {
        "key": "sing",
        "value": "Full-time Military Service"
    },
    {
        "key": "mar_joi",
        "value": "Government(non- military) Public Sector"
    },
    {
        "key": "mar_sep",
        "value": "Homemaker"
    },
    {
        "key": "mar_sep",
        "value": "Private Sector or non-Government"
    },
    {
        "key": "mar_sep",
        "value": "Retired"
    },
    {
        "key": "mar_sep",
        "value": "Self employed"
    },
    {
        "key": "mar_sep",
        "value": "Student Unemployed"
    }
];

let tempDataDropDown = [
    {
        "key": "sing",
        "value": "Single individual"
    },
    {
        "key": "mar_joi",
        "value": "Married person fillingjointly or surviving spouse"
    },
    {
        "key": "mar_sep",
        "value": "Married person fillingseperately"
    }
];

class EditOccupationInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isOccupationRetired: false,
            isZipApiCalling: false,
            isAddressApiCalling: false,
            occupationData: {

                dropDownEmployeeState: false,
                dropDownEmployeeValue: '',
                dropDownEmployeeFlag: false,
                dropDownEmployeeMsg: '',

                dropDownIndustryState: false,
                dropDownIndustryValue: '',
                dropDownIndustryFlag: false,
                dropDownIndustryMsg: '',

                dropDownPrimarySourceState: false,
                dropDownPrimarySourceValue: '',
                dropDownPrimarySourceFlag: false,
                dropDownPrimarySourceMsg: '',

                employeeOccupationValue: '',
                employeeNameValue: '',
                employeeLineOneValue: '',
                employeeLineTwoValue: '',
                employeeZipCodeValue: '',
                employeeCityValue: '',
                employeeStateValue: '',

                isValidOccupation: true,
                isValidName: true,
                isValidLineOne: true,
                isValidLineTwo: true,
                isValidZipCode: true,

                validOccupationMsg: '',
                validNameMsg: ''
            }
        };
    }

    componentDidMount() {
        this.occupationInfoMount();
    }

    componentDidUpdate(prevProps) {
        this.occupationInfoUpdate(prevProps);
    }

    occupationInfoMount = () => {
        const payload = [];
        const { getProfileCompositeData, profileSettingsLookup, profileState } = this.props;
        const { occupationData } = this.state;

        const compositePayloadData = [
            "employment_status",
            "industry",
            "prim_src_income"
        ];

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[i];
            if (this.props && profileSettingsLookup && !profileSettingsLookup[tempkey]) {
                payload.push(tempkey);
            }
        }

        getProfileCompositeData(payload);

        if (this.props && profileState && profileState.profileIsRetired) {
            this.setState({
                isOccupationRetired: profileState.profileIsRetired
            });
        }

        if (this.props && profileState && profileState.employmentInformations
            && profileState.employmentInformations.profileEmploymentStatus) {
            this.setState({
                occupationData: {
                    ...occupationData,
                    dropDownEmployeeValue: profileState.employmentInformations.profileEmploymentStatus
                }
            });
        }

        if (this.props && profileState && profileState.employmentInformations
            && profileState.employmentInformations.profileEmpIndustry) {
            this.setState({
                occupationData: {
                    ...occupationData,
                    dropDownIndustryValue: profileState.employmentInformations.profileEmpIndustry
                }
            });
        }

        if (this.props && profileState && profileState.employmentInformations
            && profileState.employmentInformations.profileEmpOccupation) {
            this.setState({
                occupationData: {
                    ...occupationData,
                    employeeOccupationValue: profileState.employmentInformations.profileEmpOccupation
                }
            });
        }

        if (this.props && profileState && profileState.employmentInformations
            && profileState.employmentInformations.profileSourceOfIncome) {
            this.setState({
                occupationData: {
                    ...occupationData,
                    dropDownPrimarySourceValue: profileState.employmentInformations.profileSourceOfIncome
                }
            });
        }

        if (this.props && profileState && profileState.employmentInformations
            && profileState.employmentInformations.profileEmpEmployer) {
            this.setState({
                occupationData: {
                    ...occupationData,
                    employeeNameValue: profileState.employmentInformations.profileEmpEmployer
                }
            });
        }

        //  Employee City and State

        if (this.props && profileState && profileState.profileUserCity) {
            this.setState({
                occupationData: {
                    ...occupationData,
                    employeeCityValue: profileState.profileUserCity
                }
            });
        }

        if (this.props && profileState && profileState.profileUserState) {
            this.setState({
                occupationData: {
                    ...occupationData,
                    employeeStateValue: profileState.profileUserState
                }
            });
        }
    }

    occupationInfoUpdate = (prevProps) => {
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;

        const { occupationData, isZipApiCalling, isAddressApiCalling } = this.state;
        const { stateCityData } = this.props;

        if (isZipApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[stateCityResponseData]) {
                    const tempResponse = stateCityData[stateCityResponseData];
                    if (tempResponse && tempResponse.City) {
                        this.setState({
                            occupationData: {
                                ...occupationData,
                                employeeCityValue: tempResponse.City,
                                employeeStateValue: tempResponse.State,
                                isValidZipCode: true
                            }
                        });
                    } else {
                        this.setState({
                            occupationData: {
                                ...occupationData,
                                employeeCityValue: ' - ',
                                employeeStateValue: ' - ',
                                isValidZipCode: false
                            }
                        });
                    }
                }
            }
        }

        if (isAddressApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[addressResponseData]) {
                    const tempAddressResponse = stateCityData[addressResponseData];
                    if (tempAddressResponse && tempAddressResponse.Address2) {
                        this.setState({
                            occupationData: {
                                ...occupationData,
                                employeeLineOneValue: tempAddressResponse.Address1 || "",
                                employeeLineTwoValue: tempAddressResponse.Address2 || "",
                                isValidLineOne: true
                            }
                        });
                    } else {
                        this.setState({
                            occupationData: {
                                ...occupationData,
                                addressOne: '',
                                addressTwo: '',
                                isValidLineOne: false
                            }
                        });
                    }
                }
            }
        }
    }

    editOccupationOnCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    }

    dropDownOccupationClick = () => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                dropDownEmployeeState: !occupationData.dropDownEmployeeState
            }
        });
    }

    dropDownOccupationSelect = (value, index, data) => {
        if (data[index].value === 'Retired' ||
            data[index].value === 'Not employed' ||
            data[index].value === 'Homemaker' ||
            data[index].value === 'Student') {
            this.setState({
                isOccupationRetired: true
            });
        } else {
            this.setState({
                isOccupationRetired: false
            });
        }

        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                dropDownEmployeeValue: data[index].value,
                dropDownEmployeeState: false,
                dropDownEmployeeFlag: false
            }
        });
    }

    dropDownSourceClick = () => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                dropDownPrimarySourceState: !occupationData.dropDownPrimarySourceState
            }
        });
    }

    dropDownSourceSelect = (value, index, data) => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                dropDownPrimarySourceValue: data[index].value,
                dropDownPrimarySourceState: false,
                dropDownPrimarySourceFlag: false
            }
        });
    }

    dropDownIndustryClick = () => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                dropDownIndustryState: !occupationData.dropDownIndustryState
            }
        });
    }

    dropDownIndustrySelect = (value, index, data) => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                dropDownIndustryValue: data[index].value,
                dropDownIndustryState: false,
            }
        });
    }

    setValidOccupation = (text) => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                employeeOccupationValue: text,
                isValidOccupation: true
            }
        });

        if (occupationData.employeeOccupationValue.length.toString() === "29") {
            this.setState({
                occupationData: {
                    ...occupationData,
                    isValidOccupation: false,
                    validOccupationMsg: 'Max. character length exceeded'
                }
            });
        }
    }

    setValidEmpName = (text) => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                employeeNameValue: text,
                isValidName: true
            }
        });

        if (occupationData.employeeNameValue.length.toString() === "29") {
            this.setState({
                occupationData: {
                    occupationData,
                    isValidName: false,
                    validNameMsg: 'Max. character length exceeded'
                }
            });
        }
    }

    setValidEmpLineOne = (text) => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                employeeLineOneValue: text,
                isValidLineOne: true
            }
        });
    }

    setValidEmpLineTwo = (text) => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                employeeLineTwoValue: text
            }
        });
    }

    setValidEmpZipcode = (text) => {
        const { occupationData } = this.state;
        this.setState({
            occupationData: {
                ...occupationData,
                employeeZipCodeValue: text,
                isValidZipCode: true
            }
        });
    }

    validateZipCodeValue = () => {
        const { occupationData } = this.state;
        const { getStateCity } = this.props;
        if (occupationData.employeeZipCodeValue !== '') {
            const payload = {
                'Zip': occupationData.employeeZipCodeValue
            };

            this.setState({
                occupationData: {
                    ...occupationData,
                    isZipCodeValid: true,
                },
                isZipApiCalling: true
            });
            getStateCity(payload);
        } else {
            this.setState({
                occupationData: {
                    ...occupationData,
                    isValidZipCode: false
                }
            });
        }
    }

    validateZipAddress = () => {
        const { occupationData } = this.state;
        if (occupationData.employeeZipCodeValue !== '') {
            this.addNewAddress();
        } else {
            this.setState({
                occupationData: {
                    ...occupationData,
                    isValidZipCode: false
                }
            });
        }
    }

    addNewAddress = () => {
        const { occupationData } = this.state;
        const { getAddressFormat } = this.props;
        const addNewAddressPayload = {
            "Address1": occupationData.employeeLineOneValue,
            "Address2": occupationData.employeeLineTwoValue,
            "City": occupationData.employeeCityValue,
            "State": occupationData.employeeStateValue,
            "Zip": occupationData.employeeZipCodeValue
        };
        this.setState({
            isAddressApiCalling: true
        });
        getAddressFormat(addNewAddressPayload);
    }

    validateEmploymentValues = () => {
        const { isOccupationRetired, occupationData } = this.state;
        if (!isOccupationRetired) {
            if (occupationData.dropDownEmployeeValue === '') {
                this.setState({
                    occupationData: {
                        ...occupationData,
                        dropDownEmployeeFlag: true,
                        dropDownEmployeeMsg: globalString.profileValidationMessages.validateNetWorth
                    }
                });
            }

            if (occupationData.dropDownIndustryValue === '') {
                this.setState({
                    occupationData: {
                        ...occupationData,
                        dropDownIndustryFlag: true,
                        dropDownIndustryMsg: globalString.profileValidationMessages.validateNetWorth
                    }
                });
            }

            if (occupationData.employeeOccupationValue === '') {
                this.setState({
                    occupationData: {
                        ...occupationData,
                        isValidOccupation: false,
                        validOccupationMsg: globalString.profileValidationMessages.validateEmpOccupation
                    }
                });
            }

            if (occupationData.employeeNameValue === '') {
                this.setState({
                    occupationData: {
                        ...occupationData,
                        isValidName: false,
                        validNameMsg: globalString.profileValidationMessages.validateEmpName
                    }
                });
            }

            if (occupationData.employeeLineOneValue === '' || occupationData.employeeLineTwoValue === '') {
                this.setState({
                    occupationData: {
                        ...occupationData,
                        isValidLineOne: false,
                        isValidLineTwo: false
                    }
                });
            }

            if (occupationData.employeeZipCodeValue === '') {
                this.setState({
                    occupationData: {
                        ...occupationData,
                        isValidZipCode: false
                    }
                });
            }

            if (occupationData.dropDownEmployeeValue !== '' &&
                occupationData.dropDownIndustryValue !== '' &&
                occupationData.employeeOccupationValue !== '' &&
                occupationData.employeeNameValue !== '' &&
                occupationData.employeeLineOneValue || occupationData.employeeLineTwoValue !== '' &&
                occupationData.employeeZipCodeValue !== '') {
                this.manageEmployeeInformations();
            }
        } else if (occupationData.dropDownPrimarySourceValue === '') {
            this.setState({
                occupationData: {
                    ...occupationData,
                    dropDownPrimarySourceFlag: true,
                    dropDownPrimarySourceMsg: 'Please select primary source of income'
                }
            });
        } else {
            this.manageEmployeeRetired();
        }
    }

    manageEmployeeInformations = () => {
        const { saveProfileData, navigation } = this.props;
        const payloadData = this.getProfilePayloadData();
        saveProfileData("editEmploymentInformations", payloadData);
        navigation.navigate('profileSettings');
    }

    getProfilePayloadData = () => {
        const { profileState } = this.props;
        const { occupationData } = this.state;
        let profilePayload = {};
        if (this.props && profileState) {
            profilePayload = {
                ...profileState,
                "profileIsRetired": false,
                "employmentInformations": {
                    profileEmploymentStatus: occupationData.dropDownEmployeeValue,
                    profileEmpIndustry: occupationData.dropDownIndustryValue,
                    profileEmpOccupation: occupationData.employeeOccupationValue,
                    profileEmpEmployer: occupationData.employeeNameValue,
                    profileEmpLineOne: occupationData.employeeLineOneValue,
                    profileEmpLineTwo: occupationData.employeeLineTwoValue,
                    profileEmpZipCode: occupationData.employeeZipCodeValue,
                    profileEmpCityValue: occupationData.employeeCityValue,
                    profileEmpStateValue: occupationData.employeeStateValue,
                    profileSourceOfIncome: ''
                }
            };
        }
        return profilePayload;
    }

    manageEmployeeRetired = () => {
        const { saveProfileData, navigation } = this.props;
        const payloadIsRetired = this.getRetiredStatus();
        saveProfileData('addEmploymentStatus', payloadIsRetired);
        navigation.navigate('profileSettings');
    }

    getRetiredStatus = () => {
        const { profileState } = this.props;
        const { occupationData } = this.state;
        let retiredPayload = {};
        if (this.props && profileState) {
            retiredPayload = {
                ...profileState,
                "profileIsRetired": true,
                "employmentInformations": {
                    profileEmploymentStatus: occupationData.dropDownEmployeeValue,
                    profileEmpIndustry: '',
                    profileEmpOccupation: '',
                    profileEmpEmployer: '',
                    profileEmpLineOne: '',
                    profileEmpLineTwo: '',
                    profileEmpZipCode: '',
                    profileEmpCityValue: '',
                    profileEmpStateValue: '',
                    profileSourceOfIncome: occupationData.dropDownPrimarySourceValue
                }
            };
        }
        return retiredPayload;
    }

    render() {

        const { navigation, stateCityData, profileSettingsLookup } = this.props;
        const { occupationData, isOccupationRetired } = this.state;

        const tempEmpStatus = 'employment_status';
        const tempIndustry = 'industry';
        const tempSrcIncome = 'prim_src_income';

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempEmpStatus] &&
            profileSettingsLookup[tempEmpStatus].value) {
            tempEmploymentClass = profileSettingsLookup[tempEmpStatus].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempIndustry] &&
            profileSettingsLookup[tempIndustry].value) {
            tempDataDropDown = profileSettingsLookup[tempIndustry].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempSrcIncome] &&
            profileSettingsLookup[tempSrcIncome].value) {
            primarySourceOfIncome = profileSettingsLookup[tempSrcIncome].value;
        }

        return (
            <View style={styles.container}>
                {
                    stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.occupationFlex}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={styles.occupationTitleLabel}>
                            {globalString.editOccupationInfo.occupationTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.editTitleBold}>
                            {globalString.editOccupationInfo.occupationTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationIndustryChoose}>
                            {globalString.editOccupationInfo.occupationIndustryChoose}
                        </Text>
                    </View>

                    <GDropDownComponent
                        dropDownTextName={styles.occupationEmploymentLabel}
                        dropDownName={globalString.editOccupationInfo.occupationEmployment}
                        data={tempEmploymentClass}
                        changeState={this.dropDownOccupationClick}
                        showDropDown={occupationData.dropDownEmployeeState}
                        dropDownValue={occupationData.dropDownEmployeeValue}
                        selectedDropDownValue={this.dropDownOccupationSelect}
                        itemToDisplay="value"
                        errorFlag={occupationData.dropDownEmployeeFlag}
                        errorText={occupationData.dropDownEmployeeMsg}
                    />

                    {!isOccupationRetired ? (
                        <View>
                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editOccupationInfo.occupationIndustry}
                                data={tempDataDropDown}
                                changeState={this.dropDownIndustryClick}
                                showDropDown={occupationData.dropDownIndustryState}
                                dropDownValue={occupationData.dropDownIndustryValue}
                                selectedDropDownValue={this.dropDownIndustrySelect}
                                itemToDisplay="value"
                                errorFlag={occupationData.dropDownIndustryFlag}
                                errorText={occupationData.dropDownIndustryMsg}
                            />

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationLabel}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder=""
                                        onChangeText={this.setValidOccupation}
                                        value={occupationData.employeeOccupationValue}
                                        maxLength={30}
                                        errorFlag={!occupationData.isValidOccupation}
                                        errorText={occupationData.validOccupationMsg}
                                    />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationEmployerName}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder=""
                                        onChangeText={this.setValidEmpName}
                                        value={occupationData.employeeNameValue}
                                        maxLength={30}
                                        errorFlag={!occupationData.isValidName}
                                        errorText={occupationData.validNameMsg}
                                    />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationEmployerOne}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder=""
                                        onChangeText={this.setValidEmpLineOne}
                                        value={occupationData.employeeLineOneValue}
                                        errorFlag={!occupationData.isValidLineOne}
                                        errorText={globalString.profileValidationMessages.validateEmpLineOne}
                                    />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationEmployerTwo}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder=""
                                        onChangeText={this.setValidEmpLineTwo}
                                        value={occupationData.employeeLineTwoValue}
                                    />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationZipcode}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder=""
                                        onChangeText={this.setValidEmpZipcode}
                                        value={occupationData.employeeZipCodeValue}
                                        onBlur={this.validateZipCodeValue}
                                        errorFlag={!occupationData.isValidZipCode}
                                        errorText={globalString.profileValidationMessages.validateZipcode}
                                    />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationCity}
                                </Text>

                                <Text style={styles.occupationCityStateLabel}>
                                    {occupationData.employeeCityValue}
                                </Text>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationState}
                                </Text>

                                <Text style={styles.occupationCityStateLabel}>
                                    {occupationData.employeeStateValue}
                                </Text>
                            </View>

                        </View>
                    ) : null}

                    {isOccupationRetired ? (
                        <View>
                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editOccupationInfo.occupationPrimarySource}
                                data={primarySourceOfIncome}
                                changeState={this.dropDownSourceClick}
                                showDropDown={occupationData.dropDownPrimarySourceState}
                                dropDownValue={occupationData.dropDownPrimarySourceValue}
                                selectedDropDownValue={this.dropDownSourceSelect}
                                itemToDisplay="value"
                                errorFlag={occupationData.dropDownPrimarySourceFlag}
                                errorText={occupationData.dropDownPrimarySourceMsg}
                            />
                        </View>
                    ) : null}

                    <Text style={styles.occupationHintLabel}>
                        {globalString.editOccupationInfo.occupationHint}
                    </Text>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editOccupationOnCancel}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.validate}
                            textStyle={styles.saveButtonText}
                            onPress={this.validateZipAddress}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                            onPress={this.validateEmploymentValues}
                        />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editEmailInformations.editEmailTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editEmailInformations.editEmailInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={ImagesLoad.applicationLogo}
                        />
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalString.common.privacyPolicy}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalString.common.fundDocuments}
                        </Text>
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalString.common.userAgreement}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalString.common.support}
                        </Text>
                    </View>

                    <View style={styles.copyRightSection}>
                        <Text style={styles.copyRightText}>
                            {globalString.common.copyRights}
                        </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

EditOccupationInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object),
    stateCityData: PropTypes.instanceOf(Object),
    profileSettingsLookup: PropTypes.instanceOf(Object),
    getProfileCompositeData: PropTypes.func,
    saveProfileData: PropTypes.func,
    getStateCity: PropTypes.func,
    getAddressFormat: PropTypes.func
};

EditOccupationInfoComponent.defaultProps = {
    profileState: {},
    stateCityData: {},
    profileSettingsLookup: {},
    getProfileCompositeData: null,
    saveProfileData: null,
    getStateCity: null,
    getAddressFormat: null
};

export default EditOccupationInfoComponent;