import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GIcon, GHeaderComponent, GLoadingSpinner, GFooterSettingsComponent, GInputComponent, GDateComponent, GDropDownComponent, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

import { nameRegex, emailRegex, zipCodeRegex } from '../../Constants/RegexConstants';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

let relationData = [
    { "key": "child", "value": "Child" },
    { "key": "fiance", "value": "Fiancé" },
    { "key": "spouse", "value": "Spouse" }
];

class addNewIntrestedPartiesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSavedSuccess: false,
            isCollapsable: false,
            collapseIcon: "-",
            account_Data: {},
            isZipApiCalling: false,
            isAddressApiCalling: false,
            personal: {
                firstName: "",
                middleName: "",
                lastName: "",
                relation: "",
                email: "",
                company: "",
                addressLine1: "",
                addressLine2: "",
                zipCode: "",
                city: "",
                stateValue: "",
                startDate: "",
                endDate: "",
                fnameValidation: true,
                fnameValiMsg: "",
                lnameValidation: true,
                lnameValiMsg: "",
                relationValidation: false,
                relationDropDown: false,
                relationValiMsg: '',
                emailValidation: true,
                companyValidation: true,
                addressLine1Validation: true,
                addressLine2Validation: true,
                addValidation: true,
                addressValiMsg: "",
                zipCodeValidation: true,
                zipCodeValiMsg: "",
                startDateValidation: true,
                startDateValiMsg: "",
                endDateValidation: true,
                endDateValiMsg: "",
            }
        };
    }

    componentDidMount() {
        const { masterLookupStateData, getCompositeLookUpData } = this.props;
        const payload = [];
        const compositePayloadData = [
            "relationship"
        ];
        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempKey = compositePayloadData[i];
            if (this.props && masterLookupStateData && !masterLookupStateData[tempKey]) {
                payload.push(tempKey);
            }
        }
        getCompositeLookUpData(payload);
        this.updateState();
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

    updateState = () => {
        const { navigation } = this.props;
        const data = navigation.getParam('acc_Data');
        this.setState({ account_Data: data });
    }

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
        const { personal } = this.props;
        const { getAddressFormat } = this.state;
        if (personal.addressLine1 !== "" && personal.addressLine2 !== "") {
            if (this.state.personal.zipCode !== '') {
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

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
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

    selectedRelationDropDownValue = (value) => {
        this.onUpdateField("personal", "relation", value);
    }

    onCancelClick = () => {
        const { navigation } = this.props;
        this.setState({
            personal: {
                firstName: "",
                middleName: "",
                lastName: "",
                relation: "",
                email: "",
                company: "",
                addressLine1: "",
                addressLine2: "",
                zipCode: "",
                city: "",
                stateValue: "",
                startDate: "",
                endDate: ""
            }
        });
        navigation.goBack();
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

    onClickSave = () => {
        const { personal, account_Data } = this.state;
        const { navigation } = this.props;
        const data = personal;
        const key = parseInt(account_Data.interestedParty.length) + 1;
        const obj = {
            "key": key,
            "fname": data.firstName,
            "mname": data.middleName,
            "lname": data.lastName,
            "contract_Number": "123456789",
            "relationship_To_Account_holder": data.relation,
            "email": data.email,
            "addressLine1": data.addressLine1,
            "addressLine2": data.addressLine2,
            "company": data.company,
            "zipCode": data.zipCode,
            "city": data.city,
            "state": data.stateValue,
            "startDate": data.startDate,
            "endDate": data.endDate,
            "accounts_Tagged": '1'
        };
        //  removed isAPi calling from if
        if (personal.addValidation && personal.addressLine1 && personal.addressLine2) {
            navigation.navigate("verifyIntrestedParties", { acc_Data: account_Data, added_obj: obj });
        }

    }

    generateKeyExtractor = (item) => item.key;

    render() {
        const { masterLookupStateData, stateCityData, navigation } = this.props;
        const { account_Data, personal } = this.state;
        if (this.props && masterLookupStateData && this.props.masterLookupStateData.relationship && masterLookupStateData.relationship.value) {
            relationData = masterLookupStateData.relationship.value;
        }

        return (
            <View style={styles.container}>
                {
                    stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                    <View style={styles.mainHeadingView}>
                        <Text style={styles.mainHeadlineText}>
                            {gblStrings.accManagement.manageIntrestedParties}
                        </Text>
                    </View>
                    <View style={styles.blockMarginTop}>
                        <View style={styles.titleHeadingView}>
                            <Text style={styles.titleHeaderText}>{account_Data.account_Type}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.containerView}>
                            <Text style={styles.containerHeaderText}>{`Acc Name - ${account_Data.account_Name} | Acc Number - ${account_Data.account_Number}`}</Text>
                        </View>
                        <View style={styles.blockMarginTop} />
                        <View style={styles.titleHeadingView}>
                            <Text style={styles.titleHeaderText}>{gblStrings.accManagement.addNewIntParty}</Text>
                            <Text style={styles.titleHeaderText}>{gblStrings.accManagement.personalInformation}</Text>
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
                            <GDropDownComponent
                                dropDownName={gblStrings.accManagement.relationToAccountHolder}
                                dropDownTextName={styles.lblTxt}
                                data={relationData}
                                textInputStyle={styles.dropdownTextInput}
                                dropDownLayout={styles.dropDownLayout}
                                errorFlag={personal.relationValidation}
                                errorText={personal.relationValiMsg}
                                dropDownValue={personal.relation}
                                selectedDropDownValue={this.selectedRelationDropDownValue}
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
                                {gblStrings.accManagement.company}
                            </Text>
                            <View style={styles.flexDirectionStyle}>
                                <GInputComponent
                                    inputref={this.setInputRef("company")}
                                    propInputStyle={styles.customCompTxtBox}
                                    placeholder=""
                                    maxLength={gblStrings.maxLength.company}
                                    onChangeText={this.onChangeText("personal", "company")}
                                />
                                <View style={styles.circleView}>
                                    <GIcon name="question" type="antdesign" size={16} color="#333333DE" />
                                </View>
                            </View>
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
                                {gblStrings.accManagement.cityAndState}
                            </Text>
                            <View style={styles.stateCityView}>
                                <View style={styles.customCityView}>
                                    <GInputComponent
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.enterCity}
                                        value={personal.city}
                                        editable={false}
                                    />
                                </View>
                                <View style={styles.customStateView}>
                                    <GInputComponent
                                        propInputStyle={styles.customTxtBox}
                                        placeholder={gblStrings.accManagement.enterState}
                                        value={personal.stateValue}
                                        editable={false}
                                    />
                                </View>
                            </View>
                            <View style={styles.blockMarginTop}>
                                <Text style={styles.preferdTimeTxt}>{gblStrings.accManagement.preferredTimePeriod}</Text>
                                <Text style={styles.lblTxt}>{gblStrings.accManagement.from}</Text>
                                <GDateComponent
                                    inputref={this.setInputRef("startDate")}
                                    date={personal.startDate}
                                    placeholder="MM-DD-YYYY"
                                    dateTextLayout={styles.dateTextStyle}
                                    componentStyle={styles.dateStyle}
                                    maxDate={personal.endDate ? personal.endDate : ""}
                                    errorFlag={!personal.startDateValidation}
                                    onDateChange={this.onChangeText("personal", "startDate")}
                                />
                                <Text style={styles.lblTxt}>{gblStrings.accManagement.to}</Text>
                                <GDateComponent
                                    inputref={this.setInputRef("endDate")}
                                    date={personal.endDate}
                                    placeholder="MM-DD-YYYY"
                                    dateTextLayout={styles.dateTextStyle}
                                    componentStyle={styles.dateStyle}
                                    minDate={personal.startDate ? personal.startDate : ""}
                                    errorFlag={!this.state.personal.endDateValidation}
                                    onDateChange={this.onChangeText("personal", "endDate")}
                                />
                                {!personal.startDateValidation && <Text style={styles.errMsg}>{gblStrings.accManagement.validDateSelect}</Text>}
                            </View>
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
    masterLookupStateData: PropTypes.instanceOf(Object),
    stateCityData: PropTypes.instanceOf(Object),
    getCompositeLookUpData: PropTypes.func,
    getAddressFormat: PropTypes.func,
    getStateCity: PropTypes.func
};

addNewIntrestedPartiesComponent.defaultProps = {
    navigation: {},
    masterLookupStateData: {},
    stateCityData: {},
    getCompositeLookUpData: () => { },
    getAddressFormat: () => { },
    getStateCity: () => { }
};
export default addNewIntrestedPartiesComponent;