import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GInputComponent, GDateComponent, GDropDownComponent, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
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
        this.setData();
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     const { manageInterestedPartiesData } = nextProps;
    //     if (manageInterestedPartiesData && manageInterestedPartiesData.savedInterestedPartyData) {
    //         if (manageInterestedPartiesData.savedInterestedPartyData && manageInterestedPartiesData.savedInterestedPartyData.data)
    //             return {
    //                 initialData: manageInterestedPartiesData.savedInterestedPartyData.data
    //             };
    //         if (manageInterestedPartiesData.savedInterestedPartyData && manageInterestedPartiesData.savedInterestedPartyData.key)
    //             return {
    //                 parentKey: manageInterestedPartiesData.savedInterestedPartyData.parentKey
    //             };
    //     }
    //     return prevState;
    // }

    setData = () => {
        const { manageInterestedPartiesData } = this.props;
        if (manageInterestedPartiesData && manageInterestedPartiesData.savedInterestedPartyData) {
            if (manageInterestedPartiesData.savedInterestedPartyData && manageInterestedPartiesData.savedInterestedPartyData.data)
                this.setState({ initialData: manageInterestedPartiesData.savedInterestedPartyData.data });

            if (manageInterestedPartiesData.savedInterestedPartyData && manageInterestedPartiesData.savedInterestedPartyData.key)
                this.setState({ parentKey: manageInterestedPartiesData.savedInterestedPartyData.parentKey });
        }
    }

    addTaggedAccount = () => {
        const { accountList, initialData } = this.state;
        const accList = accountList;
        const key = initialData.interestedParties.length + 1;
        const accountDetails = {
            key: key.toString(),
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
        this.setState(prevState => ({
            accountList: accList,
            tagAccountTextCount: prevState.tagAccountTextCount,
            taggedAccountText: "Tag Another Account"
        }));
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
            if (!this.validateEachFields()) {
                isValidationSuccess = false;
            } else {
                isValidationSuccess = true;
            }
            if (isValidationSuccess) {
                this.onClickSave();
            }
        } catch (err) {
            AppUtils.debugLog(`Error ::: :: ${err}`);
        }
    }

    validateEachFields = () => {
        let isErrMsg = false;
        let isValidationSuccess = false;
        const { accountList } = this.state;

        for (let i = 0; i < accountList.length; i += 1) {
            const obj = accountList[parseInt(i, 10)];

            if (obj.accountType === '') {
                this.onChangeValidationText(i, "accountTypeFlag", true);
                this.onChangeValidationText(i, "accountTypeMsg", "Please select valid value");
            }
            if (obj.accountName === '') {
                this.onChangeValidationText(i, "accountNameFlag", true);
                this.onChangeValidationText(i, "accountNameMsg", "Please select valid value");
            }
            if (this.isEmpty(obj.accountNumber)) {
                this.onChangeValidationText(i, "accountNumberFlag", false);
                this.onChangeValidationText(i, "accountNumberMsg", "Please Enter Value");
                isErrMsg = true;
            }
            if (!this.isEmpty(obj.startDate) && !this.isEmpty(obj.endDate)) {
                if (new Date(obj.startDate) > new Date(obj.endDate)) {
                    this.onChangeValidationText(i, "startDateFlag", false);
                    this.onChangeValidationText(i, "endDateFlag", false);
                    isErrMsg = true;
                }
            }
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
        this[`${inputComp}`] = ref;
    }

    onChangeText = (index, keyName) => text => {
        const { accountList } = this.state;
        const value = text;
        const newItems = [...accountList];
        newItems[parseInt(index, 10)][`${keyName}`] = value;
        this.setState({ accountList: newItems });
    }

    selectedDropDownValue = (index, keyName) => text => {
        const { accountList } = this.state;
        const newItems = [...accountList];
        newItems[parseInt(index, 10)][`${keyName}`] = text;
        this.setState({ accountList: newItems });
    }

    onChangeValidationText = (index, keyName, val) => {
        const { accountList } = this.state;
        const value = val;
        const newItems = [...accountList];
        newItems[parseInt(index, 10)][`${keyName}`] = value;
        this.setState({ accountList: newItems });
    }

    /* -------------------------- Button Events --------------------------------- */

    onCancelClick = () => {
        const { navigation, saveInterestedParties } = this.props;
        const payload = {
            savedInterestedPartyData: {}
        };
        saveInterestedParties(payload);
        navigation.goBack();
    }

    getPayloadData = () => {
        const { initialData, accountList } = this.state;
        const arr = initialData.interestedParties;
        let len = initialData.interestedParties.length + 1;
        for (let i = 0; i < accountList.length; i += 1) {
            const data = accountList[parseInt(i, 10)];
            const obj = {
                "key": len.toString(),
                "accountType": data.accountType,
                "accountName": data.accountName,
                "accountNumber": data.accountNumber,
                "startDate": data.startDate,
                "endDate": data.endDate
            };
            len += 1;
            arr.push(obj);
        };
        const updatedObj = initialData;
        updatedObj.interestedParties.concat(arr);
        return updatedObj;
    }

    onClickSave = () => {
        const { navigation, saveInterestedParties } = this.props;
        const { parentKey } = this.state;
        const getData = this.getPayloadData();
        const payloadData = {
            savedInterestedPartyData: {
                getData,
                parentKey,
            },
            isEdit: true,
            isNew: false
        };
        saveInterestedParties(payloadData);
        navigation.navigate("verifyIntrestedParties");

    }

    generateKeyExtractor = (item) => item.key;

    render() {
        const { navigation } = this.props;
        const { accountList, taggedAccountText, initialData } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                    <View style={styles.mainHeadingView}>
                        <Text style={styles.mainHeadlineText}>Add Account</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.blockMarginTop}>

                        {/* -------------------------- Interested Parties Details --------------------------------- */}

                        <View style={styles.commonContentView}>
                            <View style={styles.contentViewBlock}>
                                <Text style={styles.shortContentText}>Account Holder</Text>
                                <Text style={styles.shortContentValueText}>{`${initialData.fname} ${initialData.lname}`}</Text>
                            </View>
                            <View style={styles.contentViewBlock}>
                                <Text style={styles.shortContentText}>Registration Owner</Text>
                                <Text style={styles.shortContentValueText}>Lorem Ispum</Text>
                            </View>
                            <View style={styles.contentViewBlock}>
                                <Text style={styles.shortContentText}>Account Number</Text>
                                <Text style={styles.shortContentValueText}>Traditional,Roth,IRA</Text>
                            </View>
                        </View>
                    </View>

                    {/* -------------------------- Add Tagged Accounts --------------------------------- */}

                    <View style={styles.marginBottomStyle}>
                        {accountList && accountList.map((item, index) => {
                            return (
                                <View style={styles.blockMarginTop}>
                                    <View style={styles.tagAccHeadingView}>
                                        <Text style={styles.titleHeaderText}>{`Add New Account # ${index + 1} `}</Text>
                                    </View>
                                    <View style={styles.line} />
                                    <View style={styles.paddingHorizontalStyle}>
                                        <GDropDownComponent
                                            dropDownName="Account Type"
                                            dropDownTextName={styles.lblTxt}
                                            data={accountTypeData}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            dropDownValue={item.account_Type}
                                            selectedDropDownValue={this.selectedDropDownValue(index, "accountType")}
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
                                            selectedDropDownValue={this.selectedDropDownValue(index, "accountName")}
                                            errorFlag={item.accountNameFlag}
                                            errorText={item.accountNameMsg}
                                        />
                                        <Text style={styles.lblTxt}>Account Number</Text>
                                        <GInputComponent
                                            inputref={this.setInputRef("accountNumber")}
                                            propInputStyle={styles.customTxtBox}
                                            value={item.account_Number}
                                            onChangeText={this.onChangeText(index, "accountNumber")}
                                            errorFlag={!item.accountNumberFlag}
                                            errorText={item.accountNumberMsg}
                                        />
                                        <View style={styles.blockMarginTop}>
                                            <Text style={styles.effectiveDateText}>Effective Start & End Date</Text>
                                            <Text style={styles.lblTxt}>{gblStrings.accManagement.from}</Text>
                                            <GDateComponent
                                                inputref={this.setInputRef("startDate")}
                                                date={item.startDate}
                                                placeholder="MM-DD-YYYY"
                                                dateTextLayout={styles.dateTextLayout}
                                                componentStyle={styles.dateStyle}
                                                maxDate={item.endDate ? item.endDate : ""}
                                                errorFlag={!item.startDateFlag}
                                                onDateChange={this.onChangeText(index, "startDate")}
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
                                                onDateChange={this.onChangeText(index, "endDate")}
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
    manageInterestedPartiesData: PropTypes.instanceOf(Object),
    saveInterestedParties: PropTypes.func
};

AddAccToInterestedPartyComponent.defaultProps = {
    navigation: {},
    manageInterestedPartiesData: {},
    saveInterestedParties: () => { }
};
export default AddAccToInterestedPartyComponent;