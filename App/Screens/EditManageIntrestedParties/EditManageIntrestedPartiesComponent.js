import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GDateComponent, GDropDownComponent, GInputComponent, GHeaderComponent, GFooterSettingsComponent, GLoadingSpinner } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { zipCodeRegex, emailRegex } from '../../Constants/RegexConstants';
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
                        this.onUpdateField("personal", "addValidation", false);
                        this.onUpdateField("personal", "addressValiMsg", "Invalid Address");
                    }
                }
            }
        }
    }

    updateState = () => {
        const { navigation, manageInterestedPartiesData } = this.props;
        let accountArray = [];
        let tagAccounts = [];
        const mainObj = navigation.getParam('mainObj');
        const pKey = navigation.getParam('pKey');
        accountArray = mainObj.interestedParties;

        if(accountArray) {
            accountArray.map((item) => {
                const accountItem = {
                    accountType: item.account_Type,
                    accountName: item.account_Name,
                    accountNumber: item.account_Number,
                    startDate: item.startDate,
                    endDate: item.endDate,
                    accountTypeValidation: "",
                    accountTypeValidationMsg: "",
                    accountNameValidation: "",
                    accountNameValidationMsg: "",
                    accountNumberValidation: "",
                    accountNumberValidationMsg: "",
                    startDateValidation: true,
                    startDateValidationMsg: "",
                    endDateValidation: true,
                    endDateValidationMsg: ""
                };
                tagAccounts.push(accountItem);
                this.setState({ taggedAccData: tagAccounts });
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

    selectedDropDownValue = () => {
        // this.onUpdateField("personal", "relation", value);
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
        try {
            let isValidationSuccess = false;
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

    getPayloadData = () => {
        const { reducerData, interestedPartyData, personal } = this.state;
        const personalData = personal;
        const updatedObj = interestedPartyData;
        updatedObj.email = personalData.email;
        updatedObj.company = personalData.company;
        updatedObj.addressLine1 = personalData.addressLine1;
        updatedObj.addressLine2 = personalData.addressLine2;
        updatedObj.zipCode = personalData.zipCode;
        updatedObj.city = personalData.city;
        updatedObj.state = personalData.stateValue;
        updatedObj.interestedParties = personalData.taggedAccounts;

        const pIndex = reducerData.findIndex((item) => item.key === interestedPartyData.key);

        const newArr = [...reducerData];
        newArr.splice(pIndex, 1, updatedObj);

        return newArr;
    }

    onClickSave = () => {
        const { navigation } = this.props;
        const { personal, interestedPartyData } = this.state;
        // const payloadData = this.getPayloadData();
        // editInterestedParties(payloadData);
        // const notificationMsg = `${interestedPartyObj.fname} ${interestedPartyObj.lname} 's data has been Updated Successfully`;
        if (personal.addressLine1 && personal.addressLine2 ) {
            //    navigation.navigate("manageIntrestedParties", { showMsg: true, successMsg: notificationMsg });
            navigation.navigate("verifyIntrestedParties", { addedData: interestedPartyData, edit: true });
        }
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
                                                <TouchableOpacity>
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
                                                dropDownValue={item.account_Type}
                                                selectedDropDownValue={this.selectedDropDownValue(index, "account_Type")}
                                            // errorFlag={item.relationToAccOwnerFlag}
                                            // errorText={item.relationToAccOwnerValidationMsg}
                                            />
                                            <GDropDownComponent
                                                dropDownName="Account Name"
                                                dropDownTextName={styles.lblTxt}
                                                data={accountNameData}
                                                textInputStyle={styles.dropdownTextInput}
                                                dropDownLayout={styles.dropDownLayout}
                                                dropDownValue={item.account_Name}
                                                selectedDropDownValue={this.selectedDropDownValue(index, "account_Name")}
                                            // errorFlag={item.relationToAccOwnerFlag}
                                            // errorText={item.relationToAccOwnerValidationMsg}
                                            />
                                            <Text style={styles.lblTxt}>
                                                Account Number
                                            </Text>
                                            <GInputComponent
                                                inputref={this.setInputRef("accountNumber")}
                                                propInputStyle={styles.customTxtBox}
                                                value={item.account_Number}
                                            // maxLength={gblStrings.maxLength.company}
                                            // onChangeText={this.onChangeText("personal", "company")}
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
                                                // errorFlag={!item.startDateValidation}
                                                // onDateChange={this.onChangeText("personal", "startDate")}
                                                />
                                                <Text style={styles.lblTxt}>{gblStrings.accManagement.to}</Text>
                                                <GDateComponent
                                                    inputref={this.setInputRef("endDate")}
                                                    date={item.endDate}
                                                    placeholder="MM-DD-YYYY"
                                                    dateTextLayout={styles.dateTextLayout}
                                                    componentStyle={styles.dateStyle}
                                                    minDate={item.startDate ? item.startDate : ""}
                                                // errorFlag={!item.endDateValidation}
                                                // onDateChange={this.onChangeText("personal", "endDate")}
                                                />
                                                {/* {!personal.startDateValidation && <Text style={styles.errMsg}>{gblStrings.accManagement.validDateSelect}</Text>} */}
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}
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
    manageInterestedPartiesData: PropTypes.instanceOf(Object)

};

editManageIntrestedPartiesComponent.defaultProps = {
    navigation: {},
    stateCityData: {},
    getStateCity: () => { },
    getAddressFormat: () => { },
    manageInterestedPartiesData: {}
};

export default editManageIntrestedPartiesComponent;