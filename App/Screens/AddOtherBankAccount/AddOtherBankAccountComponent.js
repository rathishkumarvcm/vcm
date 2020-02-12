import React, { Component } from 'react';
import PropTypes, { array } from "prop-types";
import { View, ScrollView, Text, Image } from 'react-native';
import { GHeaderComponent, GInputComponent, GFooterComponent, GButtonComponent, showAlert } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import { CustomRadio } from '../../AppComponents';
// import { scaledHeight } from '../../Utils/Resolution';
import styles from './styles';

const specimen=require("../../Images/specimen.png");

class AddOtherBankAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountType: "",
            financialInstitutionName: "",
            accountOwner: "",
            transitRoutingNumber: "",
            accountNumber: "",
            // accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true,
        };
    }

    componentDidUpdate(prevProps) {
        const addBankAccKey = ActionTypes.ADD_BANK_ACCOUNT;
        const { addBankAccount } = this.props;
        if (addBankAccount[`${addBankAccKey}`]) {
            if (addBankAccount[`${addBankAccKey}`] !== prevProps.addBankAccount[`${addBankAccKey}`]) {
                const tempResponse = addBankAccount[`${addBankAccKey}`];
                if (tempResponse.statusCode === 200 && tempResponse.statusType === "S") {
                    this.navigateBankAccount(true);
                } else {
                    this.navigateBankAccount(false);
                }
            }
        }
    }

    navigateBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    navigateBankAccount = (isSuccess) => {
        const { navigation } = this.props;
        const { accountType, financialInstitutionName, accountOwner, transitRoutingNumber, accountNumber } = this.state;
        navigation.navigate('bankAccount', { isSuccess,
        accountType : accountType || "-",
        financialInstitutionName: financialInstitutionName || "-",
        accountOwnerNames: accountOwner || "-",
        transitRoutingNumber: transitRoutingNumber || "-",
        accountNumber: accountNumber || "-"});
    }
    
    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text,
        // accountTypeValidation: true,
        financialInstitutionNameValidation: true,
        accountOwnerValidation: true,
        transitRoutingNumberValidation: true,
        accountNumberValidation: true

    });

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        } 
            return false;
        
    }
    
    setInputRef = (inputComp) => (ref) => {
        this[`${inputComp}`] = ref;
    }

    onSubmitEditing = (input) => () => {
        input.focus();
    }

    onChangeText = (keyName) => text => {
        this.setState({
            [keyName]: text,
            // accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true
        });
    }    

    validateBankAccount = () => {
        const { accountType, financialInstitutionName, accountOwner, transitRoutingNumber, accountNumber } = this.state;
        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

        if (this.isEmpty(accountType)) {
            errMsg = gblStrings.accManagement.emptyTypeOfAccount;
            input = "accountType";
        } else if (this.isEmpty(financialInstitutionName)) {
            errMsg = gblStrings.accManagement.emptyFinancialInstitution;
            input = "financialInstitutionName";
        } else if (this.isEmpty(accountOwner)) {
            errMsg = gblStrings.accManagement.emptyAccountOwnerName;
            input = "accountOwner";
        } else if (this.isEmpty(transitRoutingNumber)) {
            errMsg = gblStrings.accManagement.emptyTransitRoutingNo;
            input = "transitRoutingNumber";
        } else if (this.isEmpty(accountNumber)) {
            errMsg = gblStrings.accManagement.emptyAccountNumber;
            input = "accountNumber";
        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            this.setState({
                [`${input }Validation`]: false,
            });

            if (input !== "" && input !== null && input !== undefined) {
                if (this[`${input}`] !== null && this[`${input}`] !== undefined) {
                    if (typeof this[`${input}`].focus === 'function') {
                        this[`${input}`].focus();
                    }
                }
            }
            showAlert(gblStrings.common.appName, errMsg, gblStrings.common.ok);
            // alert(errMsg);
        } else {
            return this.callValidateBankAccount();
        }
        return false;
    }

    callValidateBankAccount = () => {
        const { addBankAccountAction } =this.props;
        const { accountType, financialInstitutionName, accountOwner, transitRoutingNumber, accountNumber } = this.state;
        const validateBankAccountPayload = {
            "accountType": accountType || "-",
            "financialInstitutionName": financialInstitutionName || "-",
            "accountOwnerNames": accountOwner || "-",
            "transitRoutingNumber": transitRoutingNumber || "-",
            "accountNumber": accountNumber || "-"

        };

        addBankAccountAction(validateBankAccountPayload);
    }

    render() {
        const { navigation } = this.props;
        const { isValidBankAccount, validBankAccountMsg, accountNumberValidation, accountNumber, transitRoutingNumber, transitRoutingNumberValidation,
            accountOwnerValidation, accountOwner, financialInstitutionNameValidation, financialInstitutionName, accountType } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.contentcontainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.addPopularBankAccount.add_bank_account}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <View style={styles.childSectionGrp}>
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.typeOfAccount}
                        </Text>
                        <View style={styles.radioBtnGrp}>
                            <CustomRadio
                                componentStyle={styles.customcomponentstyle}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Savings"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((accountType !== null && accountType === "Savings"))}
                                onPress={this.onPressRadio("accountType", "Savings")}
                            />
                            <CustomRadio
                                componentStyle={styles.customcomponentstyle}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Checking"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((accountType !== null && accountType === "Checking"))}
                                onPress={this.onPressRadio("accountType", "Checking")}
                            />

                        </View>
                        {!isValidBankAccount && (
                            <Text style={styles.errMsg}>
                                {gblStrings.accManagement.emptyTypeOfAccount}
                            </Text>
                          )}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.financialInstitution}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("financialInstitutionName")}
                            propInputStyle={financialInstitutionNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.common}
                            value={financialInstitutionName}
                            errorFlag={!financialInstitutionNameValidation}
                            errorText={gblStrings.accManagement.emptyFinancialInstitution}
                            onChangeText={this.onChangeText("financialInstitutionName")}
                            onSubmitEditing={this.onSubmitEditing(this.accountOwner)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.accountOwner}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("accountOwner")}
                            propInputStyle={accountOwnerValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.common}
                            value={accountOwner}
                            errorFlag={!accountOwnerValidation}
                            errorText={gblStrings.accManagement.emptyAccountOwnerName}
                            onChangeText={this.onChangeText("accountOwner")}
                            onSubmitEditing={this.onSubmitEditing(this.transitRoutingNumber)}

                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.transitRoutingNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("transitRoutingNumber")}
                            propInputStyle={transitRoutingNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.transitRoutingNumber}
                            value={transitRoutingNumber}
                            errorFlag={!transitRoutingNumberValidation}
                            errorText={gblStrings.accManagement.emptyTransitRoutingNo}
                            onChangeText={this.onChangeText("transitRoutingNumber")}
                            onSubmitEditing={this.onSubmitEditing(this.accountNumber)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.accountNumber}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("accountNumber")}
                            propInputStyle={accountNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.accountNumber}
                            value={accountNumber}
                            errorFlag={!accountNumberValidation}
                            errorText={gblStrings.accManagement.emptyAccountNumber}
                            onChangeText={this.onChangeText("accountNumber")}
                            keyboardType="number-pad"
                            returnKeyType="done"

                        />

                        <Text style={styles.lblSpecimen}>
                            {gblStrings.accManagement.specimen}
                        </Text>
                        <Text style={styles.lblSpecimenDesc}>
                            {gblStrings.accManagement.accNumberOwnerDesc}
                        </Text>
                        <Image style={styles.specimenImg}
                            resizeMode="contain"
                            source={specimen}
                        />

                        {!isValidBankAccount && (
                            <Text style={styles.errMsg}>
                                {validBankAccountMsg}
                            </Text>
                          )}

                        <GButtonComponent
                            buttonStyle={styles.backBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.backButtonText}
                            onPress={this.navigateBankAccount(false)}
                        />

                        <GButtonComponent
                            buttonStyle={styles.backBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.backButtonText}
                            onPress={this.navigateBack}
                        />                        

                        <GButtonComponent
                            buttonStyle={styles.submitBtn}
                            buttonText={gblStrings.common.submit}
                            textStyle={styles.submitButtonText}
                            onPress={this.validateBankAccount}
                        />


                    </View>


                    <View style={styles.fullLine} />

                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>

                    <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}

AddOtherBankAccountComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    addBankAccount: PropTypes.instanceOf(array),
    addBankAccountAction: PropTypes.func
};
AddOtherBankAccountComponent.defaultProps = {
    navigation: {},
    addBankAccount: [],
    addBankAccountAction: {}
};

export default AddOtherBankAccountComponent;