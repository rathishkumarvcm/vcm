import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';
import gblStrings from '../Constants/GlobalStrings';
import CustomRadio from '../AppComponents/CustomRadio';
import GInputComponent from "./GInputComponent";
import GButtonComponent from "./GButtonComponent";
import ImagesLoad from '../Images/ImageIndex';

export const styles = StyleSheet.create({
    accTypeSelectSection: {
        alignItems: "center",
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: scaledHeight(20)
    },
    childSectionGrp: {
        flexGrow: 1
    },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
    },
    customTxtBoxError: {
        borderColor: 'red',
        marginTop: scaledHeight(9),
        width: '100%'
    },
    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),
    },
    headings: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '80%'
    },
    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: 0.5
    },
    lblRadioBtnTxt: {
        color: '#333333DE',
        flexWrap: 'wrap',
        fontSize: scaledHeight(16),
        lineHeight: 28
    },
    lblRadioDescTxt: {
        color: '#333333DE',
        flexWrap: 'wrap',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginTop: scaledHeight(14),
        opacity: .75
    },
    lblSpecimen: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(58),
        textAlign: 'center',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    lblSpecimenDesc: {
        color: '#333333DE',
        fontSize: scaledHeight(11),
        marginTop: scaledHeight(58),
        textAlign: 'left'
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)
    },
    radioBtnGrp: {
        flexDirection: 'row',
        flexGrow: 1,
        marginTop: scaledHeight(19)
    },
    radioCol1: {
        marginBottom: scaledHeight(0),
        width: "50%"
    },
    radioCol2: {
        marginBottom: scaledHeight(0),
        width: "50%"
    },
    saveButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(12),
        width: '92%'
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16)
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    specimenImg: {
        height: scaledHeight(176)
    }
});

export const GBankAccValidateComponent = (props) => (
 
    <View style={styles.sectionGrp}>
        <View style={styles.accTypeSelectSection}>
            <Text style={styles.headings}>
                {gblStrings.accManagement.addBankAccount}
            </Text>
        </View>

        <Text style={styles.lblLine} />

        <View style={styles.childSectionGrp}>
            <Text style={styles.lblTxt}>
                {gblStrings.accManagement.typeOfAccount}
            </Text>

            <View style={styles.radioBtnGrp}>
                <CustomRadio
                    componentStyle={styles.radioCol1}
                    size={30}
                    outerCicleColor="#DEDEDF"
                    innerCicleColor="#61285F"
                    labelStyle={styles.lblRadioBtnTxt}
                    label="Savings"
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel=""
                    selected={!!((props.accountType !== null && props.accountType === "Savings"))}
                    onPress={props.onSavingsPressed}
                />

                <CustomRadio
                    componentStyle={styles.radioCol2}
                    size={30}
                    outerCicleColor="#DEDEDF"
                    innerCicleColor="#61285F"
                    labelStyle={styles.lblRadioBtnTxt}
                    label="Checking"
                    descLabelStyle={styles.lblRadioDescTxt}
                    descLabel=""
                    selected={!!((props.accountType !== null && props.accountType === "Checking"))}
                    onPress={props.onCheckingPressed}
                />
            </View>

            {!props.accountTypeValidation && (
                <Text style={styles.errMsg}>
                    {gblStrings.accManagement.emptyTypeOfAccount}
                </Text>
            )}

            <Text style={styles.lblTxt}>
                {gblStrings.accManagement.financialInstitution}
            </Text>

            <GInputComponent
                propInputStyle={props.financialInstitutionNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                placeholder=""
                maxLength={gblStrings.maxLength.common}
                value={props.financialInstitutionName}
                errorFlag={!props.financialInstitutionNameValidation}
                errorText={gblStrings.accManagement.emptyFinancialInstitution}
                onChangeText={props.onFinanceTextChange}
            />

            <Text style={styles.lblTxt}>
                {gblStrings.accManagement.accountOwner}
            </Text>

            <GInputComponent
                propInputStyle={props.accountOwnerValidation ? styles.customTxtBox : styles.customTxtBoxError}
                placeholder=""
                maxLength={gblStrings.maxLength.common}
                value={props.accountOwner}
                errorFlag={!props.accountOwnerValidation}
                errorText={gblStrings.accManagement.emptyAccountOwnerName}
                onChangeText={props.onAccountOwnerTextChange}
            />

            <Text style={styles.lblTxt}>
                {gblStrings.accManagement.transitRoutingNo}
            </Text>

            <GInputComponent
                propInputStyle={props.transitRoutingNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                placeholder=""
                maxLength={gblStrings.maxLength.transitRoutingNumber}
                value={props.transitRoutingNumber}
                errorFlag={!props.transitRoutingNumberValidation}
                errorText={gblStrings.accManagement.emptyTransitRoutingNo}
                onChangeText={props.onTransitRoutingTextChange}
            />

            <Text style={styles.lblTxt}>
                {gblStrings.accManagement.accountNumber}
            </Text>

            <GInputComponent
                propInputStyle={props.accountNumberValidation ? styles.customTxtBox : styles.customTxtBoxError}
                placeholder=""
                maxLength={gblStrings.maxLength.accountNumber}
                value={props.accountNumber}
                errorFlag={!props.accountNumberValidation}
                errorText={gblStrings.accManagement.emptyAccountNumber}
                onChangeText={props.onAccountNumberTextChange}
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
                source={ImagesLoad.specimen}
            />

            {!props.isValidBankAccount && (
                <Text style={styles.errMsg}>
                    {props.validBankAccountMsg}
                </Text>
            )}

            <GButtonComponent
                buttonStyle={styles.saveButtonStyle}
                buttonText={gblStrings.common.validate}
                textStyle={styles.saveButtonText}
                onPress={props.validateBankAccount}
            />
        </View>
    </View>
);

GBankAccValidateComponent.propType = {
    accountType: PropTypes.string,
    financialInstitutionName: PropTypes.string,
    accountOwner: PropTypes.string,
    transitRoutingNumber: PropTypes.string,
    accountNumber: PropTypes.string,
    validBankAccountMsg: PropTypes.string,

    accountTypeValidation: PropTypes.bool,
    financialInstitutionNameValidation: PropTypes.bool,
    accountOwnerValidation: PropTypes.bool,
    transitRoutingNumberValidation: PropTypes.bool,
    accountNumberValidation: PropTypes.bool,
    isValidBankAccount: PropTypes.bool,

    validateBankAccount: PropTypes.func,  
    onFinanceTextChange: PropTypes.func,
    onAccountOwnerTextChange: PropTypes.func,
    onTransitRoutingTextChange: PropTypes.func,
    onAccountNumberTextChange: PropTypes.func,
    onSavingsPressed: PropTypes.func,
    onCheckingPressed: PropTypes.func
};

GBankAccValidateComponent.defaultProps = {
    accountType: '',
    financialInstitutionName: '',
    accountOwner: '',
    transitRoutingNumber: '',
    accountNumber: '',
    validBankAccountMsg: '',

    accountTypeValidation: true,
    financialInstitutionNameValidation: true,
    accountOwnerValidation: true,
    transitRoutingNumberValidation: true,
    accountNumberValidation: true,
    isValidBankAccount: true,

    validateBankAccount: null,
    onFinanceTextChange: null,
    onAccountOwnerTextChange: null,
    onTransitRoutingTextChange: null,
    onAccountNumberTextChange: null,
    onSavingsPressed: null,
    onCheckingPressed: null
};

export default GBankAccValidateComponent;