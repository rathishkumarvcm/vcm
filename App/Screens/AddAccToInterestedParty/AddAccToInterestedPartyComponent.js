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

class AddAccToInterestedPartyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tagAccountTextCount: 0,
            taggedAccountText: "Tag Account",
            accountList: [],
            initialData: {},
            parentKey: ""
        };
    }

    componentDidMount() {
        this.updateValue();
    }

    componentDidUpdate(prevProps) {

    }

    updateValue = () => {
        const { navigation } = this.state;
        this.setState({ initialData: navigation.getParam('initialData'), parentKey: navigation.getParam('index') });
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

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
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
        console.log("navigationData:::::",this.state.initialData)
        const { navigation } = this.props;
        const {accountList, taggedAccountText } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                    <View style={styles.mainHeadingView}>
                        <Text style={styles.mainHeadlineText}>Add Account</Text>
                    </View>
                    <View style={styles.blockMarginTop}>

                        {/* -------------------------- Interested Parties Details --------------------------------- */}

                        <View style={styles.paddingHorizontalStyle}>

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
                            buttonText={gblStrings.common.save}
                            textStyle={styles.normalWhiteBtnTxt}
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
                            onPress={this.onClickCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={gblStrings.common.submit}
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

AddAccToInterestedPartyComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    stateCityData: PropTypes.instanceOf(Object),
    getAddressFormat: PropTypes.func,
    getStateCity: PropTypes.func
};

AddAccToInterestedPartyComponent.defaultProps = {
    navigation: {},
    stateCityData: {},
    getAddressFormat: () => { },
    getStateCity: () => { }
};
export default AddAccToInterestedPartyComponent;