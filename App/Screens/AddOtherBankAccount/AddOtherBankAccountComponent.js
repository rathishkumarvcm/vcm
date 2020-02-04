import React, { Component } from 'react';
import PropTypes from "prop-types";
import { View, ScrollView, Text, Image } from 'react-native';
import { GHeaderComponent, GInputComponent, GFooterComponent, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import { CustomRadio } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import styles from './styles';

class AddOtherBankAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountType: "",
            financialInstitutionName: "",
            accountOwner: "",
            transitRoutingNumber: "",
            accountNumber: "",

            accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true,
        };
    }

    componentDidUpdate(prevProps) {
        const addBankAccKey = ActionTypes.ADD_BANK_ACCOUNT;
        if (this.props.addBankAccount[addBankAccKey]) {
            if (this.props.addBankAccount[addBankAccKey] !== prevProps.addBankAccount[addBankAccKey]) {
                const tempResponse = this.props.addBankAccount[addBankAccKey];
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

    navigateBankAccount = (isSuccess) => this.props.navigation.navigate('bankAccount', { isSuccess,
        accountType : this.state.accountType || "-",
        financialInstitutionName: this.state.financialInstitutionName || "-",
        accountOwnerNames: this.state.accountOwner || "-",
        transitRoutingNumber: this.state.transitRoutingNumber || "-",
        accountNumber: this.state.accountNumber || "-"})
    
    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text,
        accountTypeValidation: true,
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
        this[inputComp] = ref;
    }

    onSubmitEditing = (input) => text => {
        input.focus();
    }

    onChangeText = (keyName) => text => {
        this.setState({
            [keyName]: text,
            accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true
        });
    }    

    validateBankAccount = () => {

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

        if (this.isEmpty(this.state.accountType)) {
            errMsg = gblStrings.accManagement.emptyTypeOfAccount;
            input = "accountType";
        } else if (this.isEmpty(this.state.financialInstitutionName)) {
            errMsg = gblStrings.accManagement.emptyFinancialInstitution;
            input = "financialInstitutionName";
        } else if (this.isEmpty(this.state.accountOwner)) {
            errMsg = gblStrings.accManagement.emptyAccountOwnerName;
            input = "accountOwner";
        } else if (this.isEmpty(this.state.transitRoutingNumber)) {
            errMsg = gblStrings.accManagement.emptyTransitRoutingNo;
            input = "transitRoutingNumber";
        } else if (this.isEmpty(this.state.accountNumber)) {
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
                if (this[input] !== null && this[input] !== undefined) {
                    if (typeof this[input].focus === 'function') {
                        this[input].focus();
                    }
                }
            }

            alert(errMsg);
        } else {
            return this.callValidateBankAccount();
        }

    }

    callValidateBankAccount = () => {
        const validateBankAccountPayload = {
            "accountType": this.state.accountType || "-",
            "financialInstitutionName": this.state.financialInstitutionName || "-",
            "accountOwnerNames": this.state.accountOwner || "-",
            "transitRoutingNumber": this.state.transitRoutingNumber || "-",
            "accountNumber": this.state.accountNumber || "-"

        };

        this.props.addBankAccountAction(validateBankAccountPayload);
    }

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
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
                                componentStyle={{ width: "50%", marginBottom: scaledHeight(15) }}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Savings"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.accountType !== null && this.state.accountType === "Savings"))}
                                onPress={this.onPressRadio("accountType", "Savings")}
                            />
                            <CustomRadio
                                componentStyle={{ width: "50%", marginBottom: scaledHeight(0) }}
                                size={30}
                                outerCicleColor="#DEDEDF"
                                innerCicleColor="#61285F"
                                labelStyle={styles.lblRadioBtnTxt}
                                label="Checking"
                                descLabelStyle={styles.lblRadioDescTxt}
                                descLabel=""
                                selected={!!((this.state.accountType !== null && this.state.accountType === "Checking"))}
                                onPress={this.onPressRadio("accountType", "Checking")}
                            />

                        </View>
                        {!this.state.accountTypeValidation && (
                            <Text style={styles.errMsg}>
                                {gblStrings.accManagement.emptyTypeOfAccount}
                            </Text>
                          )}

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.financialInstitution}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("financialInstitutionName")}
                            propInputStyle={this.state.financialInstitutionNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.common}
                            value={this.state.financialInstitutionName}
                            errorFlag={!this.state.financialInstitutionNameValidation}
                            errorText={gblStrings.accManagement.emptyFinancialInstitution}
                            onChangeText={this.onChangeText("financialInstitutionName")}
                            onSubmitEditing={this.onSubmitEditing(this.accountOwner)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.accountOwner}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("accountOwner")}
                            propInputStyle={this.state.accountOwnerValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.common}
                            value={this.state.accountOwner}
                            errorFlag={!this.state.accountOwnerValidation}
                            errorText={gblStrings.accManagement.emptyAccountOwnerName}
                            onChangeText={this.onChangeText("accountOwner")}
                            onSubmitEditing={this.onSubmitEditing(this.transitRoutingNumber)}

                        />


                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.transitRoutingNo}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("transitRoutingNumber")}
                            propInputStyle={this.state.transitRoutingNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.transitRoutingNumber}
                            value={this.state.transitRoutingNumber}
                            errorFlag={!this.state.transitRoutingNumberValidation}
                            errorText={gblStrings.accManagement.emptyTransitRoutingNo}
                            onChangeText={this.onChangeText("transitRoutingNumber")}
                            onSubmitEditing={this.onSubmitEditing(this.accountNumber)}

                        />

                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.accountNumber}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("accountNumber")}
                            propInputStyle={this.state.accountNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                            placeholder=""
                            maxLength={gblStrings.maxLength.accountNumber}
                            value={this.state.accountNumber}
                            errorFlag={!this.state.accountNumberValidation}
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
                            source={require("../../Images/specimen.png")}
                        />

                        {!this.state.isValidBankAccount && (
                            <Text style={styles.errMsg}>
                                {this.state.validBankAccountMsg}
                            </Text>
                          )}

                        <GButtonComponent
                            buttonStyle={styles.backBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.backButtonText}
                            onPress={() => this.navigateBankAccount(false)}
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
    navigation: PropTypes.instanceOf(Object)
};
AddOtherBankAccountComponent.defaultProps = {
    navigation: {}
};

export default AddOtherBankAccountComponent;