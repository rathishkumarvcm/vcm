import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GDropDownComponent, GLoadingSpinner } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

const tempEmploymentClass = [
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

const tempDataDropDown = [
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

class editOccupationInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            isOccupationRetired: true,
            isOccupationNotRetired: false,

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

            isZipApiCalling: false,
            isAddressApiCalling: false
        };
    }

    componentDidMount() {
        if (this.props && this.props.profileState && this.props.profileState.employmentInformations
            && this.props.profileState.employmentInformations.profileEmploymentStatus) {
            this.setState({
                dropDownEmployeeValue: this.props.profileState.employmentInformations.profileEmploymentStatus
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.employmentInformations
            && this.props.profileState.employmentInformations.profileEmpIndustry) {
            this.setState({
                dropDownIndustryValue: this.props.profileState.employmentInformations.profileEmpIndustry
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.employmentInformations
            && this.props.profileState.employmentInformations.profileEmpOccupation) {
            this.setState({
                employeeOccupationValue: this.props.profileState.employmentInformations.profileEmpOccupation
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.employmentInformations
            && this.props.profileState.employmentInformations.profileEmpEmployer) {
            this.setState({
                employeeNameValue: this.props.profileState.employmentInformations.profileEmpEmployer
            });
        }

        // Employee City and State

        if (this.props && this.props.profileState && this.props.profileState.profileUserCity) {
            this.setState({
                employeeCityValue: this.props.profileState.profileUserCity
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileUserState) {
            this.setState({
                employeeStateValue: this.props.profileState.profileUserState
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;

        if (this.state.isZipApiCalling) {
            if (this.props != prevProps) {
                if (this.props && this.props.stateCityData[stateCityResponseData]) {
                    const tempResponse = this.props.stateCityData[stateCityResponseData];
                    if (tempResponse && tempResponse.City) {
                        this.setState({
                            employeeCityValue: tempResponse.City,
                            employeeStateValue: tempResponse.State,
                            isValidZipCode: true
                        });
                    } else {
                        this.setState({
                            employeeCityValue: ' - ',
                            employeeStateValue: ' - ',
                            isValidZipCode: false
                        });
                    }
                }
            }
        }

        if (this.state.isAddressApiCalling) {
            if (this.props != prevProps) {
                if (this.props && this.props.stateCityData[addressResponseData]) {
                    const tempAddressResponse = this.props.stateCityData[addressResponseData];
                    if (tempAddressResponse && tempAddressResponse.Address2) {
                        this.setState({
                            employeeLineOneValue: tempAddressResponse.Address1 || "",
                            employeeLineTwoValue: tempAddressResponse.Address2 || "",
                            isValidLineOne: true
                        });
                    } else {
                        this.setState({
                            addressOne: '',
                            addressTwo: '',
                            isValidLineOne: false
                        });
                    }
                }
            }
        }
    }

    editOccupationOnCancel = () => this.props.navigation.navigate('profileSettings');

    dropDownOccupationClick = () => {
        this.setState({
            dropDownEmployeeState: !this.state.dropDownEmployeeState
        });
    }

    dropDownOccupationSelect = (valueOccupation) => {
        if (valueOccupation.value === 'Retired') {
            this.setState({
                isOccupationNotRetired: true,
                isOccupationRetired: false
            });
        } else {
            this.setState({
                isOccupationNotRetired: false,
                isOccupationRetired: true
            });
        }

        this.setState({
            dropDownEmployeeValue: valueOccupation.value,
            dropDownEmployeeState: false,
            dropDownEmployeeFlag: false
        });
    }

    dropDownSourceClick = () => {
        this.setState({
            dropDownPrimarySourceState: !this.state.dropDownPrimarySourceState
        });
    }

    dropDownSourceSelect = (valuePrimarySource) => {
        this.setState({
            dropDownPrimarySourceValue: valuePrimarySource.value,
            dropDownPrimarySourceState: false,
            dropDownPrimarySourceFlag: false
        });
    }

    dropDownIndustryClick = () => {
        this.setState({
            dropDownIndustryState: !this.state.dropDownIndustryState
        });
    }

    dropDownIndustrySelect = (valueIndustry) => {
        this.setState({
            dropDownIndustryValue: valueIndustry.value,
            dropDownIndustryState: false,
        });
    }

    setValidOccupation = (text) => {
        this.setState({
            employeeOccupationValue: text,
            isValidOccupation: true
        });
    }

    setValidEmpName = (text) => {
        this.setState({
            employeeNameValue: text,
            isValidName: true
        });
    }

    setValidEmpLineOne = (text) => {
        this.setState({
            employeeLineOneValue: text,
            isValidLineOne: true
        });
    }

    setValidEmpLineTwo = (text) => {
        this.setState({
            employeeLineTwoValue: text
        });
    }

    setValidEmpZipcode = (text) => {
        this.setState({
            employeeZipCodeValue: text,
            isValidZipCode: true
        });
    }

    validateZipCodeValue = () => {
        if (this.state.employeeZipCodeValue != '') {
            const payload = {
                'Zip': this.state.employeeZipCodeValue
            };

            this.setState({
                isZipCodeValid: true,
                isZipApiCalling: true
            });
            this.props.getStateCity(payload);
        } else {
            this.setState({
                isValidZipCode: false
            });
        }
    }

    validateZipAddress = () => {
        if (this.state.employeeZipCodeValue != '') {
            this.addNewAddress();
        } else {
            this.setState({
                isValidZipCode: false
            });
        }
    }

    addNewAddress = () => {
        var addNewAddressPayload = {
            "Address1": this.state.employeeLineOneValue,
            "Address2": this.state.employeeLineTwoValue,
            "City": this.state.employeeCityValue,
            "State": this.state.employeeStateValue,
            "Zip": this.state.employeeZipCodeValue
        };
        this.setState({
            isAddressApiCalling: true
        });
        this.props.getAddressFormat(addNewAddressPayload);
    }

    validateEmploymentValues = () => {
        if (this.state.dropDownEmployeeValue === '') {
            this.setState({
                dropDownEmployeeFlag: true,
                dropDownEmployeeMsg: globalStrings.profileValidationMessages.validateNetWorth
            });
        }

        if (this.state.dropDownIndustryValue === '') {
            this.setState({
                dropDownIndustryFlag: true,
                dropDownIndustryMsg: globalStrings.profileValidationMessages.validateNetWorth
            });
        }

        if (this.state.employeeOccupationValue === '') {
            this.setState({
                isValidOccupation: false
            });
        }

        if (this.state.employeeNameValue === '') {
            this.setState({
                isValidName: false
            });
        }

        if (this.state.employeeLineOneValue === '') {
            this.setState({
                isValidLineOne: false
            });
        }

        if (this.state.employeeZipCodeValue === '') {
            this.setState({
                isValidZipCode: false
            });
        }

        if (this.state.dropDownEmployeeValue != '' &&
            this.state.dropDownIndustryValue != '' &&
            this.state.employeeOccupationValue != '' &&
            this.state.employeeNameValue != '' &&
            this.state.employeeLineOneValue &&
            this.state.employeeZipCodeValue != '') {
            this.manageEmployeeInformations();
        }
    }

    manageEmployeeInformations = () => {
        const payloadData = this.getProfilePayloadData();
        console.log("&&&&&&&&&&&&&&&&&&&& Employment Manage ::: ", payloadData);
        this.props.saveProfileData("editEmploymentInformations", payloadData);
        this.props.navigation.navigate('profileSettings');
    }

    getProfilePayloadData = () => {
        let profilePayload = {};
        if (this.props && this.props.profileState) {
            profilePayload = {
                ...this.props.profileState,
                "employmentInformations": {
                    profileEmploymentStatus: this.state.dropDownEmployeeValue,
                    profileEmpIndustry: this.state.dropDownIndustryValue,
                    profileEmpOccupation: this.state.employeeOccupationValue,
                    profileEmpEmployer: this.state.employeeNameValue,
                    profileEmpLineOne: this.state.employeeLineOneValue,
                    profileEmpLineTwo: this.state.employeeLineTwoValue,
                    profileEmpZipCode: this.state.employeeZipCodeValue,
                    profileEmpCityValue: this.state.employeeCityValue,
                    profileEmpStateValue: this.state.employeeStateValue
                }
            };
        }
        return profilePayload;
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editOccupationInfo.occupationTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.editTitleBold, styles.editTitleBold]}>
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
                        showDropDown={this.state.dropDownEmployeeState}
                        dropDownValue={this.state.dropDownEmployeeValue}
                        selectedDropDownValue={this.dropDownOccupationSelect}
                        itemToDisplay={"value"}
                        errorFlag={this.state.dropDownEmployeeFlag}
                        errorText={this.dropDownEmployeeMsg}
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(290) }} />

                    {this.state.isOccupationRetired ? (
                        <View>
                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editOccupationInfo.occupationIndustry}
                                data={tempDataDropDown}
                                changeState={this.dropDownIndustryClick}
                                showDropDown={this.state.dropDownIndustryState}
                                dropDownValue={this.state.dropDownIndustryValue}
                                selectedDropDownValue={this.dropDownIndustrySelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownIndustryFlag}
                                errorText={this.dropDownIndustryMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(390) }} />

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationLabel}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder={""}
                                        onChangeText={this.setValidOccupation}
                                        value={this.state.employeeOccupationValue}
                                        errorFlag={!this.state.isValidOccupation}
                                        errorText={globalString.profileValidationMessages.validateEmpOccupation} />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationEmployerName}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder={""}
                                        onChangeText={this.setValidEmpName}
                                        value={this.state.employeeNameValue}
                                        errorFlag={!this.state.isValidName}
                                        errorText={globalString.profileValidationMessages.validateEmpName} />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationEmployerOne}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder={""}
                                        onChangeText={this.setValidEmpLineOne}
                                        value={this.state.employeeLineOneValue}
                                        errorFlag={!this.state.isValidLineOne}
                                        errorText={globalString.profileValidationMessages.validateEmpLineOne} />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationEmployerTwo}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder={""}
                                        onChangeText={this.setValidEmpLineTwo}
                                        value={this.state.employeeLineTwoValue} />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationZipcode}
                                </Text>

                                <View style={styles.occupationMarginTop}>
                                    <GInputComponent
                                        propInputStyle={styles.editAddressInput}
                                        placeholder={""}
                                        onChangeText={this.setValidEmpZipcode}
                                        value={this.state.employeeZipCodeValue}
                                        onBlur={this.validateZipCodeValue}
                                        errorFlag={!this.state.isValidZipCode}
                                        errorText={globalString.profileValidationMessages.validateZipcode} />
                                </View>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationCity}
                                </Text>

                                <Text style={styles.occupationCityStateLabel}>
                                    {this.state.employeeCityValue}
                                </Text>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.occupationIndustryLabel}>
                                    {globalString.editOccupationInfo.occupationState}
                                </Text>

                                <Text style={styles.occupationCityStateLabel}>
                                    {this.state.employeeStateValue}
                                </Text>
                            </View>

                        </View>
                    ) : null}

                    {this.state.isOccupationNotRetired ? (
                        <View>
                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editOccupationInfo.occupationPrimarySource}
                                data={tempDataDropDown}
                                changeState={this.dropDownSourceClick}
                                showDropDown={this.state.dropDownPrimarySourceState}
                                dropDownValue={this.state.dropDownPrimarySourceValue}
                                selectedDropDownValue={this.dropDownSourceSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownPrimarySourceFlag}
                                errorText={this.dropDownPrimarySourceMsg} />
                        </View>
                        ) : null}

                    <Text style={[styles.occupationHint, styles.editFlexDirectionColumn]}>
                        {globalString.editOccupationInfo.occupationHint}
                    </Text>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.validateEmploymentValues} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                            onPress={this.validateZipAddress} />
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
                            source={require("../../Images/logo.png")}
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

export default editOccupationInfoComponent;