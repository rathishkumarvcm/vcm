import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GLoadingSpinner, GFooterSettingsComponent, GInputComponent, GDateComponent, GDropDownComponent, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

import { nameRegex, emailRegex, zipCodeRegex } from '../../Constants/RegexConstants';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

const accountTypeData = [
    { "key": "1", "value": "Traditional" },
    { "key": "2", "value": "Roth" },
    { "key": "3", "value": "Individual" },
    { "key": "4", "value": "UTMA" }
];

const accountNameData = [
    { "key": "1", "value": "Lorem Ispum" },
    { "key": "2", "value": "Lorem Ispum" }
];

class addNewIntrestedPartiesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isZipApiCalling: false,
            isAddressApiCalling: false,
            personal: {
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                company: "",
                addressLine1: "",
                addressLine2: "",
                zipCode: "",
                city: "",
                stateValue: "",
                fnameValidation: true,
                fnameValiMsg: "",
                lnameValidation: true,
                lnameValiMsg: "",
                emailValidation: true,
                companyValidation: true,
                addressLine1Validation: true,
                addressLine2Validation: true,
                addValidation: true,
                addressValiMsg: "",
                zipCodeValidation: true,
                zipCodeValiMsg: "",
                accounts: []
            },
            addedAccount: {
                accountType: "",
                accountName: "",
                accountNumber: "",
                startDate: "",
                endDate: ""
            },
            tagAccountTextCount: 0,
            taggedAccountText: "Tag Account",
            accountList: []
        };
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;
        const { isZipApiCalling, isAddressApiCalling } = this.state;
        const { stateCityData } = this.props;
        if (isZipApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[stateCityResponseData]) {
                    const tempResponse = stateCityData[stateCityResponseData];
                    if (tempResponse && tempResponse.City) {
                        this.onUpdateField("personal", "city", tempResponse.City);
                        this.onUpdateField("personal", "stateValue", tempResponse.State);
                        this.onUpdateField("personal", "zipCodeValidation", true);
                    } else {
                        this.onUpdateField("personal", "city", ' - ');
                        this.onUpdateField("personal", "stateValue", ' - ');
                        this.onUpdateField("personal", "zipCodeValidation", false);
                        this.onUpdateField("personal", "zipCodeValiMsg", "Please enter valid ZipCode");
                    }
                }
            }
        }

        if (isAddressApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[addressResponseData]) {
                    const tempAddressResponse = stateCityData[addressResponseData];
                    if (tempAddressResponse && tempAddressResponse.Address2) {
                        this.onUpdateField("personal", "addressLine1", tempAddressResponse.Address1 || "");
                        this.onUpdateField("personal", "addressLine2", tempAddressResponse.Address2 || "");
                        this.onUpdateField("personal", "addValidation", true);
                    } else {
                        this.onUpdateField("personal", "addressLine1", '');
                        this.onUpdateField("personal", "addressLine2", '');
                        this.onUpdateField("personal", "addValidation", false);
                        this.onUpdateField("personal", "addressValiMsg", "Invalid Address");
                    }
                }
            }
        }
    }

    addTaggedAccount = () => {
        const { accountList } = this.state;
        const accList = accountList;
        const accountDetails = {
            accountType: "",
            accountTypeFlag: false,
            accountTypeMsg: "",
            accountName: "",
            accountNameFlag: false,
            accountNameMsg: "",
            accountNumber: "",
            accountNumberFlag: true,
            accountNumberMsg: "",
            startDate: "",
            startDateFlag: true,
            startDateMsg: "",
            endDate: "",
            endDateFlag: true,
            endDateMsg: ""
        };
        accList.push(accountDetails);
        this.setState(prevState => ({ accountList: accList, tagAccountTextCount: prevState.tagAccountTextCount, taggedAccountText: "Tag Another Account" }));
    }

    /* -------------------------- Validation Events--------------------------------- */

    getZipCodeValue = () => {
        const { getStateCity } = this.props;
        const { personal } = this.state;
        if (personal.zipCode !== '') {
            const payload = {
                'Zip': personal.zipCode
            };
            this.setState({ isZipApiCalling: true });
            getStateCity(payload);
        }
    }

    getAddressValid = () => {
        let addAddressPayload = {};
        const { personal } = this.state;
        const { getAddressFormat } = this.props;
        if (personal.addressLine1 !== "" && personal.addressLine2 !== "") {
            if (personal.zipCode !== '') {
                addAddressPayload = {
                    "Address1": personal.addressLine1,
                    "Address2": personal.addressLine2,
                    "City": personal.city,
                    "State": personal.stateValue,
                    "Zip": personal.zipCode
                };
            } else {
                addAddressPayload = {
                    "Address1": personal.addressLine1,
                    "Address2": personal.addressLine2,
                    "City": personal.city,
                    "State": personal.stateValue
                };
            }
            this.setState({ isAddressApiCalling: true });
            getAddressFormat(addAddressPayload);
        }

    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
    }

    validateZipCode = () => {
        const { personal } = this.state;
        if (!this.isEmpty(personal.zipCode)) {
            const validate = zipCodeRegex.test(personal.zipCode);
            this.onUpdateField("personal", "zipCodeValidation", validate);
            this.onUpdateField("personal", "zipCodeValiMsg", "Please enter valid ZipCode");
            if (validate) {
                this.getZipCodeValue();
            }
        }
    }

    validateAddress = () => {
        const { personal } = this.state;
        if (this.isEmpty(personal.addressLine1)) {
            this.onUpdateField("personal", "addressLine1Validation", false);
        } else {
            this.onUpdateField("personal", "addressLine1Validation", true);
        }

        if (this.isEmpty(personal.addressLine2)) {
            this.onUpdateField("personal", "addressLine2Validation", false);
        } else {
            this.onUpdateField("personal", "addressLine2Validation", true);
        }
        this.getAddressValid();
    }

    validateFields = () => {
        try {
            let isValidationSuccess = false;
            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    fnameValidation: true,
                    lnameValidation: true,
                    emailValidation: true,
                    addressLine1Validation: true,
                    addressLine2Validation: true,
                    zipCodeValidation: true,
                    relationValidation: false,
                    startDateValidation: true,
                    endDateValidation: true,
                    addValidation: true
                }
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
            // console.log(`Error::: ${err}`);
        }
    }

    validateEachFields = () => {
        let isErrMsg = false;
        let isValidationSuccess = false;
        const { personal } = this.state;
        if (this.isEmpty(personal.firstName)) {
            this.onUpdateField("personal", "fnameValidation", false);
            this.onUpdateField("personal", "fnameValiMsg", gblStrings.accManagement.emptyFirstNameMsg);
            isErrMsg = true;
        } else {
            const validate = nameRegex.test(personal.firstName);
            this.onUpdateField("personal", "fnameValidation", validate);
            this.onUpdateField("personal", "fnameValiMsg", gblStrings.accManagement.firstNameFormat);
            isErrMsg = !validate;
        }

        if (this.isEmpty(personal.lastName)) {
            this.onUpdateField("personal", "lnameValidation", false);
            this.onUpdateField("personal", "lnameValiMsg", gblStrings.accManagement.emptyLastNameMsg);
            isErrMsg = true;
        } else {
            const validate = nameRegex.test(personal.lastName);
            this.onUpdateField("personal", "lnameValidation", validate);
            this.onUpdateField("personal", "lnameValiMsg", gblStrings.accManagement.lastNameFormat);
            isErrMsg = !validate;
        }

        if (!this.isEmpty(personal.email)) {
            const validate = emailRegex.test(personal.email);
            this.onUpdateField("personal", "emailValidation", validate);
            isErrMsg = !validate;
        } else {
            this.onUpdateField("personal", "emailValidation", true);
        }

        if (this.isEmpty(personal.addressLine1)) {
            this.onUpdateField("personal", "addressLine1Validation", false);
            isErrMsg = true;
        } else {
            this.onUpdateField("personal", "addressLine1Validation", true);
        }

        if (this.isEmpty(personal.addressLine2)) {
            this.onUpdateField("personal", "addressLine2Validation", false);
            isErrMsg = true;
        } else {
            this.onUpdateField("personal", "addressLine2Validation", true);
        }

        if (!this.isEmpty(personal.addressLine1) && !this.isEmpty(personal.addressLine2)) {
            this.getAddressValid();
        }

        if (this.isEmpty(personal.zipCode)) {
            this.onUpdateField("personal", "zipCodeValidation", false);
            this.onUpdateField("personal", "zipCodeValiMsg", gblStrings.accManagement.emptyZipCodeMsg);
            isErrMsg = true;
        } else {
            const validate = zipCodeRegex.test(personal.zipCode);
            this.onUpdateField("personal", "zipCodeValidation", validate);
            this.onUpdateField("personal", "zipCodeValiMsg", "Please enter valid ZipCode");
            this.getZipCodeValue();
            isErrMsg = !validate;
        }

        if (!this.isEmpty(personal.startDate) && !this.isEmpty(personal.endDate)) {
            if (new Date(personal.startDate) > new Date(personal.endDate)) {
                this.onUpdateField("personal", "startDateValidation", false);
                this.onUpdateField("personal", "endDateValidation", false);
                isErrMsg = true;
            }
        }

        if (personal.relation === '') {
            this.onUpdateField("personal", "relationValidation", true);
            this.onUpdateField("personal", "relationValiMsg", gblStrings.accManagement.emptyRelationShipMsg);
        }

        if (!isErrMsg) {
            isValidationSuccess = true;
        }

        return isValidationSuccess;
    }

    /* -------------------------- Update Events --------------------------------- */

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onChangeText = (stateKey, keyName) => text => {
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: text
            }
        }));
    }

    onUpdateField = (stateKey, keyName, val) => {
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: val
            }
        }));
    }

    selectedDropDownValue = (value) => {
        this.onUpdateField("personal", "relation", value);
    }

    /* -------------------------- Button Events --------------------------------- */
    onCancelClick = () => {
        const { navigation } = this.props;
        this.setState({
            personal: {
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                company: "",
                addressLine1: "",
                addressLine2: "",
                zipCode: "",
                city: "",
                stateValue: ""
            },
            accountList: []
        });
        navigation.goBack();
    }

    onClickSave = () => {
        const { personal, accountList } = this.state;
        const { navigation } = this.props;
        const obj = {
            "fname": personal.firstName,
            "mname": personal.middleName,
            "lname": personal.lastName,
            "email": personal.email,
            "addressLine1": personal.addressLine1,
            "addressLine2": personal.addressLine2,
            "company": personal.company,
            "zipCode": personal.zipCode,
            "city": personal.city,
            "state": personal.stateValue,
            "accountTagged": accountList
        };
        if (personal.addValidation && personal.addressLine1 && personal.addressLine2) {
            navigation.navigate("verifyIntrestedParties", { addedData: obj, add: true });
        }
    }

    generateKeyExtractor = (item) => item.key;

    render() {
        const { stateCityData, navigation } = this.props;
        const { personal, accountList, taggedAccountText } = this.state;
        return (
            <View style={styles.container}>
                {
                    stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                    <View style={styles.mainHeadingView}>
                        <Text style={styles.mainHeadlineText}>
                            {gblStrings.accManagement.addInterestedParty}
                        </Text>
                    </View>
                    <View style={styles.blockMarginTop}>
                        <View style={styles.titleHeadingView}>
                            <Text style={styles.titleHeaderText}>Add - New Interested Party</Text>
                        </View>
                        <View style={styles.line} />

                        {/* -------------------------- Add Interested Parties --------------------------------- */}

                        <View style={styles.paddingHorizontalStyle}>
                            <Text style={styles.lblTxt}>{gblStrings.accManagement.firstName}</Text>
                            <GInputComponent
                                inputref={this.setInputRef("firstName")}
                                propInputStyle={styles.customTxtBox}
                                placeholder=""
                                maxLength={gblStrings.maxLength.firstName}
                                onChangeText={this.onChangeText("personal", "firstName")}
                                errorFlag={!personal.fnameValidation}
                                errorText={personal.fnameValiMsg}
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
                                inputref={this.setInputRef("middleInitial")}
                                propInputStyle={styles.customTxtBox}
                                placeholder=""
                                maxLength={gblStrings.maxLength.middleInitial}
                                onChangeText={this.onChangeText("personal", "middleName")}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.lastName}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("lastName")}
                                propInputStyle={styles.customTxtBox}
                                placeholder=""
                                maxLength={gblStrings.maxLength.lastName}
                                onChangeText={this.onChangeText("personal", "lastName")}
                                errorFlag={!personal.lnameValidation}
                                errorText={personal.lnameValiMsg}
                            />
                            <Text style={styles.lblTxt}>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.emailAddress}
                                </Text>
                                <Text style={styles.optionalTxt}>
                                    {` ${gblStrings.accManagement.optional}`}
                                </Text>
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("emailAddress")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={gblStrings.accManagement.emailformat}
                                keyboardType="email-address"
                                maxLength={gblStrings.maxLength.emailID}
                                onChangeText={this.onChangeText("personal", "email")}
                                errorFlag={!personal.emailValidation}
                                errorText={gblStrings.accManagement.emailformat}
                            />
                            <Text style={styles.lblTxt}>
                                <Text style={styles.lblTxt}>
                                    {gblStrings.accManagement.company}
                                </Text>
                                <Text style={styles.optionalTxt}>
                                    {` ${gblStrings.accManagement.optional}`}
                                </Text>
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("company")}
                                propInputStyle={styles.customTxtBox}
                                placeholder=""
                                maxLength={gblStrings.maxLength.company}
                                onChangeText={this.onChangeText("personal", "company")}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.address}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("addrLine1")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={gblStrings.accManagement.empAddrLine1}
                                maxLength={gblStrings.maxLength.emplAddress1}
                                value={personal.addressLine1}
                                onChangeText={this.onChangeText("personal", "addressLine1")}
                                errorFlag={!personal.addressLine1Validation}
                                errorText={personal.addValidation ? gblStrings.accManagement.emptyAddressLine1Msg : ""}
                            />
                            <GInputComponent
                                inputref={this.setInputRef("addrLine2")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={gblStrings.accManagement.empAddrLine2}
                                maxLength={gblStrings.maxLength.addressLine2}
                                value={personal.addressLine2}
                                onChangeText={this.onChangeText("personal", "addressLine2")}
                                errorFlag={!personal.addressLine2Validation}
                                errorText={personal.addValidation ? gblStrings.accManagement.emptyAddressLine2Msg : ""}
                            />
                            {!personal.addValidation && <Text style={styles.errMsg}>{personal.addressValiMsg}</Text>}
                            <GButtonComponent
                                buttonStyle={styles.validateBtn}
                                buttonText="Verify"
                                textStyle={styles.validateBtnTxt}
                                onPress={this.validateAddress}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.zipcode}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("zipCode")}
                                propInputStyle={styles.customTxtBox}
                                placeholder=""
                                maxLength={gblStrings.maxLength.zipCode}
                                onBlur={this.validateZipCode}
                                keyboardType="number-pad"
                                returnKeyType="done"
                                onSubmitEditing={this.validateZipCode}
                                onChangeText={this.onChangeText("personal", "zipCode")}
                                errorFlag={!personal.zipCodeValidation}
                                errorText={personal.zipCodeValiMsg}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.city}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("city")}
                                propInputStyle={styles.customTxtBox}
                                placeholder=""
                                value={personal.city}
                                maxLength={gblStrings.maxLength.city}
                                onChangeText={this.onChangeText("personal", "city")}
                                errorFlag={!personal.zipCodeValidation}
                                errorText={personal.zipCodeValiMsg}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.stateTerritory}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("stateTerritory")}
                                propInputStyle={styles.customTxtBox}
                                placeholder=""
                                value={personal.stateValue}
                                maxLength={gblStrings.maxLength.state}
                                onChangeText={this.onChangeText("personal", "stateValue")}
                                errorFlag={!personal.zipCodeValidation}
                                errorText={personal.zipCodeValiMsg}
                            />
                        </View>
                    </View>

                    {/* -------------------------- Add Tagged Accounts --------------------------------- */}

                    <View style={styles.blockMarginTop}>
                        {accountList && accountList.map((item, index) => {
                            return (
                                <View style={styles.paddingHorizontalStyle}>
                                    <View style={styles.tagAccHeadingView}>
                                        <Text style={styles.titleHeaderText}>{`Tagged Account # ${index + 1} `}</Text>
                                        <View style={styles.addBtn}>
                                            <TouchableOpacity>
                                                <Text style={styles.editBtnText}>{gblStrings.common.delete}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.marginTopStyle}>
                                        <GDropDownComponent
                                            dropDownName="Account Type"
                                            dropDownTextName={styles.lblTxt}
                                            data={accountTypeData}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            dropDownValue={item.account_Type}
                                            selectedDropDownValue={this.selectedDropDownValue(index, "account_Type")}
                                            errorFlag={item.accountTypeFlag}
                                            errorText={item.accountTypeMsg}
                                        />
                                        <GDropDownComponent
                                            dropDownName="Account Name"
                                            dropDownTextName={styles.lblTxt}
                                            data={accountNameData}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            dropDownValue={item.account_Name}
                                            selectedDropDownValue={this.selectedDropDownValue(index, "account_Name")}
                                            errorFlag={item.accountNameFlag}
                                            errorText={item.accountNameMsg}
                                        />
                                        <Text style={styles.lblTxt}>Account Number</Text>
                                        <GInputComponent
                                            inputref={this.setInputRef("accountNumber")}
                                            propInputStyle={styles.customTxtBox}
                                            value={item.account_Number}
                                            maxLength={gblStrings.maxLength.company}
                                            onChangeText={this.onChangeText("personal", "company")}
                                            errorFlag={item.accountNumberFlag}
                                            errorText={item.accountNumberMsg}
                                        />
                                        <View style={styles.blockMarginTop}>
                                            <Text style={styles.preferdTimeTxt}>Effective Start & End Date</Text>
                                            <Text style={styles.lblTxt}>{gblStrings.accManagement.from}</Text>
                                            <GDateComponent
                                                inputref={this.setInputRef("startDate")}
                                                date={item.startDate}
                                                placeholder="MM-DD-YYYY"
                                                dateTextLayout={styles.dateTextLayout}
                                                componentStyle={styles.dateStyle}
                                                maxDate={item.endDate ? item.endDate : ""}
                                                errorFlag={!item.startDateFlag}
                                                onDateChange={this.onChangeText("personal", "startDate")}
                                            />
                                            <Text style={styles.lblTxt}>{gblStrings.accManagement.to}</Text>
                                            <GDateComponent
                                                inputref={this.setInputRef("endDate")}
                                                date={item.endDate}
                                                placeholder="MM-DD-YYYY"
                                                dateTextLayout={styles.dateTextLayout}
                                                componentStyle={styles.dateStyle}
                                                minDate={item.startDate ? item.startDate : ""}
                                                errorFlag={!item.endDateFlag}
                                                onDateChange={this.onChangeText("personal", "endDate")}
                                            />
                                            {!item.startDateFlag && <Text style={styles.errMsg}>{gblStrings.accManagement.validDateSelect}</Text>}
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                        <View style={styles.addAccountView}>
                            <TouchableOpacity onPress={this.addTaggedAccount}>
                                <Text style={styles.editBtnText}>{`+ ${taggedAccountText}`}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* ----------------- Button Group -------------------- */}

                    <View style={styles.btnGrp}>
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onCancelClick}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={gblStrings.common.save}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.validateFields}
                        />
                    </View>

                    {/* ---------------------- Footer View -------------------- */}

                    <GFooterSettingsComponent />
                </ScrollView>
            </View>

        );
    }
}

addNewIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    stateCityData: PropTypes.instanceOf(Object),
    getAddressFormat: PropTypes.func,
    getStateCity: PropTypes.func
};

addNewIntrestedPartiesComponent.defaultProps = {
    navigation: {},
    stateCityData: {},
    getAddressFormat: () => { },
    getStateCity: () => { }
};
export default addNewIntrestedPartiesComponent;