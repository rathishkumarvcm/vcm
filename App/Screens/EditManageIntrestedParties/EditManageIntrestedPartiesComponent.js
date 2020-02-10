import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GDateComponent, GDropDownComponent, GInputComponent, GHeaderComponent, GFooterSettingsComponent, GLoadingSpinner } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { zipCodeRegex, emailRegex } from '../../Constants/RegexConstants';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';

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

class editManageIntrestedPartiesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reducerData: [],
            interestedPartyData: {},
            taggedAccData: [],
            parentKey: '',
            accountData: {},
            interestedPartyObj: {},
            account_Key: '',
            personal: {
                fname: "",
                mname: "",
                lname: "",
                email: "",
                company: "",
                addressLine1: "",
                addressLine2: "",
                zipCode: "",
                city: "",
                stateValue: "",
                taggedAccounts: [],
                emailValidation: true,
                companyValidation: true,
                addressLine1Validation: true,
                addressLine2Validation: true,
                addValidation: true,
                addressValiMsg: "",
                zipCodeValidation: true,
                zipCodeValiMsg: ""
            },
        };
    }

    componentDidMount() {
        this.updateState();
    }

    componentDidUpdate(prevProps) {
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;
        const { isZipApiCalling, isAddressApiCalling } = this.state;
        const { stateCityData } = this.props;
        if (isZipApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[`${stateCityResponseData}`]) {
                    const tempResponse = stateCityData[`${stateCityResponseData}`];
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
                if (this.props && stateCityData[`${addressResponseData}`]) {
                    const tempAddressResponse = stateCityData[`${addressResponseData}`];
                    if (tempAddressResponse && tempAddressResponse.Address2) {
                        this.onUpdateField("personal", "addressLine1", tempAddressResponse.Address1 || "");
                        this.onUpdateField("personal", "addressLine2", tempAddressResponse.Address2 || "");
                        this.onUpdateField("personal", "addValidation", true);
                    } else {
                        this.onUpdateField("personal", "addValidation", false);
                        this.onUpdateField("personal", "addressValiMsg", "Invalid Address");
                    }
                }
            }
        }
    }

    updateState = () => {
        const { manageInterestedPartiesData } = this.props;
        let accountArray = [];
        const tagAccounts = [];
        let mainObj = {};
        let pKey = "";
        if (manageInterestedPartiesData && manageInterestedPartiesData.savedInterestedPartyData) {
            mainObj = manageInterestedPartiesData.savedInterestedPartyData.data;
            pKey = manageInterestedPartiesData.savedInterestedPartyData.index;
        }
        accountArray = mainObj.interestedParties;
        if (accountArray) {
            accountArray.map((item) => {
                const accountItem = {
                    key: item.key,
                    accountType: item.accountType,
                    accountName: item.accountName,
                    accountNumber: item.accountNumber,
                    startDate: item.startDate,
                    endDate: item.endDate,
                    accountTypeValidation: false,
                    accountTypeValidationMsg: "",
                    accountNameValidation: false,
                    accountNameValidationMsg: "",
                    accountNumberValidation: true,
                    accountNumberValidationMsg: "",
                    startDateValidation: true,
                    startDateValidationMsg: "",
                    endDateValidation: true,
                    endDateValidationMsg: ""
                };
                tagAccounts.push(accountItem);
                this.setState({ taggedAccData: tagAccounts });
                return 0;
            });
        }

        this.setState(prevState => ({
            interestedPartyData: mainObj,
            parentKey: pKey,
            personal: {
                ...prevState.personal,
                fname: mainObj.fname ? mainObj.fname : "",
                mname: mainObj.mname ? mainObj.mname : "",
                lname: mainObj.lname ? mainObj.lname : "",
                email: mainObj.email ? mainObj.email : "",
                addressLine1: mainObj.addressLine1 ? mainObj.addressLine1 : "",
                addressLine2: mainObj.addressLine2 ? mainObj.addressLine2 : "",
                company: mainObj.company ? mainObj.company : "",
                zipCode: mainObj.zipCode ? mainObj.zipCode : "",
                city: mainObj.city ? mainObj.city : "",
                stateValue: mainObj.state ? mainObj.state : ""
            }
        }));
        if (manageInterestedPartiesData && manageInterestedPartiesData.list_manage_interested_parties) {
            this.setState({ reducerData: manageInterestedPartiesData.data });
        }
    }

    onAddAccount = () => {
        const { taggedAccData } = this.state;
        const prevArr = taggedAccData;
        const key = taggedAccData.length + 1;
        const newAccObj = {
            key: key.toString(),
            accountType: "",
            accountName: "",
            accountNumber: "",
            startDate: "",
            endDate: "",
            accountTypeValidation: false,
            accountTypeValidationMsg: "",
            accountNameValidation: false,
            accountNameValidationMsg: "",
            accountNumberValidation: true,
            accountNumberValidationMsg: "",
            startDateValidation: true,
            startDateValidationMsg: "",
            endDateValidation: true,
            endDateValidationMsg: ""
        };
        prevArr.push(newAccObj);
        this.setState({ taggedAccData: prevArr });
    }

    getZipCodeValue = () => {
        const { personal } = this.state;
        const { getStateCity } = this.props;
        if (personal.zipCode !== '') {
            const payload = {
                'Zip': personal.zipCode
            };
            this.setState({ isZipApiCalling: true });
            getStateCity(payload);
        }
    }

    getAddressValid = () => {
        const { personal } = this.state;
        const { getAddressFormat } = this.props;
        let addAddressPayload = {};
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

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };

    setInputRef = (inputComp) => (ref) => {
        this[`${inputComp}`] = ref;
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
                ...prevState[`${stateKey}`],
                [keyName]: text
            }
        }));
    }

    onChangeAccText = (keyName, index) => text => {
        const { taggedAccData } = this.state;
        const newItems = [...taggedAccData];
        newItems[parseInt(index, 10)][`${keyName}`] = text;
        this.setState({ taggedAccData: newItems });
    }

    onUpdateField = (stateKey, keyName, val) => {
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [keyName]: val
            }
        }));
    }

    onUpdateArrField = (index, keyName, val) => {
        const { taggedAccData } = this.state;
        const newItems = [...taggedAccData];
        newItems[parseInt(index, 10)][`${keyName}`] = val;
        this.setState({ taggedAccData: newItems });
    }

    selectedDropDownValue = (index, keyName) => text => {
        const { taggedAccData } = this.state;
        const newItems = [...taggedAccData];
        newItems[parseInt(index, 10)][`${keyName}`] = text;
        this.setState({ taggedAccData: newItems });
    }

    onCancelClick = () => {
        const { navigation } = this.props;
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
        const { taggedAccData } = this.state;
        try {
            let isValidationSuccess = false;
            let isTaggedAccountSuccess = false;
            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    emailValidation: true,
                    addressLine1Validation: true,
                    addressLine2Validation: true,
                    zipCodeValidation: true,
                    addValidation: true
                }
            }));
            if (!this.validateEachFields()) {
                isValidationSuccess = false;
            } else {
                isValidationSuccess = true;
            }

            if (taggedAccData) {
                isTaggedAccountSuccess = false;
                if (!this.validateTaggedAcc()) {
                    isTaggedAccountSuccess = false;
                } else {
                    isTaggedAccountSuccess = true;
                }
            }
            if (isValidationSuccess && isTaggedAccountSuccess) {
                this.onClickSave();
            }
        } catch (err) {
            AppUtils.debugLog(`Error ::: :: ${err}`);
        }
    }

    validateEachFields = () => {
        let isErrMsg = false;
        let isValidationSuccess = false;
        const { personal } = this.state;
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

        if (!isErrMsg) {
            isValidationSuccess = true;
        }

        return isValidationSuccess;
    }

    validateTaggedAcc = () => {
        let isErrMsg = false;
        let isValidationSuccess = false;
        const { taggedAccData } = this.state;
        for (let i = 0; i < taggedAccData.length; i += 1) {
            const obj = taggedAccData[parseInt(i, 10)];
            if (this.isEmpty(obj.accountType)) {
                this.onUpdateArrField(i, "accountTypeValidation", true);
                this.onUpdateArrField(i, "accountTypeValidationMsg", "Please select a value");
                isErrMsg = true;
            }
            if (this.isEmpty(obj.accountName)) {
                this.onUpdateArrField(i, "accountNameValidation", true);
                this.onUpdateArrField(i, "accountNameValidationMsg", "Please select a value");
                isErrMsg = true;
            }
            if (this.isEmpty(obj.accountNumber)) {
                this.onUpdateArrField(i, "accountNumberValidation", false);
                this.onUpdateArrField(i, "accountNumberValidationMsg", "Please enter the Value");
                isErrMsg = true;
            }

        }
        if (!isErrMsg) {
            isValidationSuccess = true;
        }

        return isValidationSuccess;
    }

    getPayloadData = () => {
        const { interestedPartyData, personal, taggedAccData } = this.state;
        const personalData = personal;
        const updatedObj = interestedPartyData;
        updatedObj.email = personalData.email;
        updatedObj.company = personalData.company;
        updatedObj.addressLine1 = personalData.addressLine1;
        updatedObj.addressLine2 = personalData.addressLine2;
        updatedObj.zipCode = personalData.zipCode;
        updatedObj.city = personalData.city;
        updatedObj.state = personalData.stateValue;
        updatedObj.interestedParties = taggedAccData;
        return updatedObj;
    }

    onClickSave = () => {
        const { navigation, saveInterestedParties } = this.props;
        const { personal } = this.state;
        const getData = this.getPayloadData();
        const payloadData = {
            savedInterestedPartyData: {
                getData
            },
            isEdit: true,
            isNew: false
        };
        saveInterestedParties(payloadData);
        if (personal.addressLine1 && personal.addressLine2) {
            navigation.navigate("verifyIntrestedParties");
        }
    }

    onDeleteFunc = (index) => () => {
        const { taggedAccData } = this.state;
        const arr = [...taggedAccData];
        arr.splice(index, 1);
        this.setState({ taggedAccData: arr });
    }

    generateKeyExtractor = (item) => item.key;

    render() {
        const { navigation, stateCityData } = this.props;
        const { personal, taggedAccData } = this.state;
        return (
            <View style={styles.container}>
                {
                    stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                    <View style={styles.mainHeadingView}>
                        <Text style={styles.mainHeadlineText}>Edit Interested Party</Text>
                    </View>
                    <View style={styles.blockMarginTop}>
                        <View style={styles.titleHeadingView}>
                            <Text style={styles.titleHeaderText}>{`Edit - ${personal.fname} ${personal.mname} ${personal.lname}'s Information`}</Text>
                        </View>
                        <View style={styles.line} />

                        {/* -------------------------- Edit Interested Parties --------------------------------- */}

                        <View style={styles.paddingHorizontalStyle}>
                            <View style={styles.flexDirectionStyle}>
                                <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                                <Text style={styles.shortContentValueText}>{`${personal.fname} ${personal.mname} ${personal.lname}`}</Text>
                            </View>
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
                                value={personal.email}
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
                                value={personal.company}
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
                                keyboardType="number-pad"
                                value={personal.zipCode}
                                maxLength={gblStrings.maxLength.zipCode}
                                onBlur={this.validateZipCode}
                                returnKeyType="done"
                                onChangeText={this.onChangeText("personal", "zipCode")}
                                errorFlag={!personal.zipCodeValidation}
                                errorText={personal.zipCodeValiMsg}
                                onSubmitEditing={this.validateZipCode}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.city}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("city")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={gblStrings.accManagement.enterCity}
                                value={personal.city}
                                editable={false}
                            />
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.stateTerritory}
                            </Text>
                            <GInputComponent
                                inputref={this.setInputRef("stateTerritory")}
                                propInputStyle={styles.customTxtBox}
                                placeholder={gblStrings.accManagement.enterState}
                                value={personal.stateValue}
                                editable={false}
                            />
                        </View>

                        {/* -------------------------- Edit Tagged Accounts --------------------------------- */}

                        <View style={styles.paddingHorizontalStyle}>
                            {taggedAccData.map((item, index) => {
                                return (
                                    <View style={styles.blockMarginTop}>
                                        <View style={styles.tagAccHeadingView}>
                                            <Text style={styles.titleHeaderText}>{`Tagged Account # ${index + 1} `}</Text>
                                            <View style={styles.addBtn}>
                                                <TouchableOpacity onPress={this.onDeleteFunc(index)}>
                                                    <Text style={styles.editBtnText}>{gblStrings.common.delete}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.blockMarginTop}>
                                            <GDropDownComponent
                                                dropDownName="Account Type"
                                                dropDownTextName={styles.lblTxt}
                                                data={accountTypeData}
                                                textInputStyle={styles.dropdownTextInput}
                                                dropDownLayout={styles.dropDownLayout}
                                                dropDownValue={item.accountType}
                                                selectedDropDownValue={this.selectedDropDownValue(index, "accountType")}
                                                errorFlag={item.accountTypeValidation}
                                                errorText={item.accountTypeValidationMsg}
                                            />
                                            <GDropDownComponent
                                                dropDownName="Account Name"
                                                dropDownTextName={styles.lblTxt}
                                                data={accountNameData}
                                                textInputStyle={styles.dropdownTextInput}
                                                dropDownLayout={styles.dropDownLayout}
                                                dropDownValue={item.accountName}
                                                selectedDropDownValue={this.selectedDropDownValue(index, "accountName")}
                                                errorFlag={item.accountNameValidation}
                                                errorText={item.accountNameValidationMsg}
                                            />
                                            <Text style={styles.lblTxt}>
                                                Account Number
                                            </Text>
                                            <GInputComponent
                                                inputref={this.setInputRef("accountNumber")}
                                                propInputStyle={styles.customTxtBox}
                                                value={item.accountNumber}
                                                onChangeText={this.onChangeAccText("accountNumber", index)}
                                                errorFlag={!item.accountNumberValidation}
                                                errorText={item.accountNumberValidationMsg}
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
                                                    errorFlag={!item.startDateValidation}
                                                    onDateChange={this.onChangeAccText("startDate", index)}
                                                />
                                                <Text style={styles.lblTxt}>{gblStrings.accManagement.to}</Text>
                                                <GDateComponent
                                                    inputref={this.setInputRef("endDate")}
                                                    date={item.endDate}
                                                    placeholder="MM-DD-YYYY"
                                                    dateTextLayout={styles.dateTextLayout}
                                                    componentStyle={styles.dateStyle}
                                                    minDate={item.startDate ? item.startDate : ""}
                                                    errorFlag={!item.endDateValidation}
                                                    onDateChange={this.onChangeAccText("endDate", index)}
                                                />
                                                {!item.startDateValidation && <Text style={styles.errMsg}>{gblStrings.accManagement.validDateSelect}</Text>}
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                        <View style={styles.addAccountView}>
                            <TouchableOpacity onPress={this.onAddAccount}>
                                <Text style={styles.editBtnText}>+ Tag Another Account</Text>
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

editManageIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    stateCityData: PropTypes.instanceOf(Object),
    getStateCity: PropTypes.func,
    getAddressFormat: PropTypes.func,
    manageInterestedPartiesData: PropTypes.instanceOf(Object),
    saveInterestedParties: PropTypes.func

};

editManageIntrestedPartiesComponent.defaultProps = {
    navigation: {},
    stateCityData: {},
    getStateCity: () => { },
    getAddressFormat: () => { },
    manageInterestedPartiesData: {},
    saveInterestedParties: () => { }
};

export default editManageIntrestedPartiesComponent;