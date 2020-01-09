import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GDateComponent, GIcon, GDropDownComponent, GInputComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { zipCodeRegex, emailRegex } from '../../Constants/RegexConstants';

import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

let relationData = [
    { "key": "child", "value": "Child" },
    { "key": "fiance", "value": "Fiancé" },
    { "key": "spouse", "value": "Spouse" }
];
let newInterestedParties = [];

class editManageIntrestedPartiesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account_Data: {},
            interestedPartyObj: {},
            account_Key: '',
            personal: {
                fname: "",
                mname: "",
                lname: "",
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
                endDateValiMsg: ""
            }
        };
    }

    componentDidMount() {
        this.updateState();
        this.setMasterData();
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

    setMasterData = () => {
        const { masterLookupStateData, getCompositeLookUpData } = this.props;
        const payload = [];
        const compositePayloadData = [
            "relationship"
        ];
        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[i];
            if (this.props && masterLookupStateData && !masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        getCompositeLookUpData(payload);
    }


    updateState = () => {
        const { navigation } = this.props;
        const data = navigation.getParam('acc_Data');
        const pData = navigation.getParam('parent_Obj');
        const pKey = navigation.getParam('parent_Key');
        this.setState(prevState => ({
            account_Data: pData,
            account_Key: pKey,
            interestedPartyObj: data,
            personal: {
                ...prevState.personal,
                fname: data.fname ? data.fname : "",
                mname: data.mname ? data.mname : "",
                lname: data.lname ? data.lname : "",
                relation: data.relationship_To_Account_holder ? data.relationship_To_Account_holder : "",
                email: data.email ? data.email : "",
                addressLine1: data.addressLine1 ? data.addressLine1 : "",
                addressLine2: data.addressLine2 ? data.addressLine2 : "",
                company: data.company ? data.company : "",
                zipCode: data.zipCode ? data.zipCode : "",
                city: data.city ? data.city : "",
                stateValue: data.state ? data.state : "",
                startDate: data.startDate ? data.startDate : "",
                endDate: data.endDate ? data.endDate : "",
            }
        }));
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

    selectedRelationDropDownValue = (value) => {
        this.onUpdateField("personal", "relation", value);
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

    getPayloadData = () => {
        const { personal, interestedPartyObj, account_Data } = this.state;
        const data = personal;
        const updatedObj = interestedPartyObj;
        updatedObj.relationship_To_Account_holder = data.relation;
        updatedObj.email = data.email;
        updatedObj.company = data.company;
        updatedObj.addressLine1 = data.addressLine1;
        updatedObj.addressLine2 = data.addressLine2;
        updatedObj.zipCode = data.zipCode;
        updatedObj.city = data.city;
        updatedObj.state = data.stateValue;
        updatedObj.startDate = data.startDate;
        updatedObj.endDate = data.endDate;

        const modObj = account_Data;

        const pIndex = newInterestedParties.findIndex((item) => item.key === account_Data.key);
        const cIndex = account_Data.interestedParty.findIndex((item) => item.key === interestedPartyObj.key);

        const arr = [...newInterestedParties[pIndex].interestedParty];
        arr.splice(cIndex, 1, updatedObj);

        modObj.interestedParty = arr;

        const newArr = [...newInterestedParties];
        newArr.splice(pIndex, 1, modObj);

        return newArr;
    }

    onClickSave = () => {
        const { editInterestedParties, navigation } = this.props;
        const { personal, isAddressApiCalling, interestedPartyObj } = this.state;
        const payloadData = this.getPayloadData();
        editInterestedParties(payloadData);
        const notificationMsg = `${interestedPartyObj.fname} ${interestedPartyObj.lname} 's data has been Updated Successfully`;
        if (personal.addValidation && personal.addressLine1 && personal.addressLine2 && isAddressApiCalling) {
            navigation.navigate("manageIntrestedParties", { showMsg: true, successMsg: notificationMsg });
        }
    }


    generateKeyExtractor = (item) => item.key;

    render() {
        const { masterLookupStateData, navigation, manageInterestedPartiesData, stateCityData } = this.props;
        const { personal, account_Data } = this.state;
        if (this.props && masterLookupStateData && masterLookupStateData.relationship && masterLookupStateData.relationship.value) {
            relationData = masterLookupStateData.relationship.value;
        }
        if (manageInterestedPartiesData && manageInterestedPartiesData.list_manage_interested_parties) {
            newInterestedParties = manageInterestedPartiesData.list_manage_interested_parties;
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
                            <Text style={styles.containerHeaderText}>{` Acc Name - ${account_Data.account_Name} | Acc Number - ${account_Data.account_Number}`}</Text>
                        </View>
                        <View style={styles.blockMarginTop} />
                        <View style={styles.titleHeadingView}>
                            <Text style={styles.titleHeaderText}>{`${gblStrings.accManagement.editIntrestedParty} ${account_Data.account_Type}`}</Text>
                        </View>
                        <View style={styles.line} />


                        {/* -------------------------- Edit Intrested Parties --------------------------------- */}

                        <View style={styles.paddingHorizontalStyle}>
                            <View style={styles.flexDirectionStyle}>
                                <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                                <Text style={styles.shortContentValueText}>{`${personal.fname} ${personal.mname} ${personal.lname}`}</Text>
                            </View>
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
                                value={personal.email}
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
                                    value={personal.company}
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
                                    dateTextLayout={styles.dateTextLayout}
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
                                    dateTextLayout={styles.dateTextLayout}
                                    componentStyle={styles.dateStyle}
                                    minDate={personal.startDate ? personal.startDate : ""}
                                    errorFlag={!personal.endDateValidation}
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

editManageIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    stateCityData: PropTypes.instanceOf(Object),
    getStateCity: PropTypes.func,
    getAddressFormat: PropTypes.func,
    getCompositeLookUpData: PropTypes.func,
    editInterestedParties: PropTypes.func,
    manageInterestedPartiesData: PropTypes.instanceOf(Object)

};

editManageIntrestedPartiesComponent.defaultProps = {
    navigation: {},
    masterLookupStateData: {},
    stateCityData: {},
    getStateCity: () => { },
    getAddressFormat: () => { },
    getCompositeLookUpData: () => { },
    editInterestedParties: () => { },
    manageInterestedPartiesData: {}

};
export default editManageIntrestedPartiesComponent;