import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import globalString from '../Constants/GlobalStrings';
import GInputComponent from './GInputComponent';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';

export const styles = StyleSheet.create({
    settingsView1: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    editAddressTypeLabel: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: '4%'
    },
    editAddressInput: {
        flexDirection: 'column',
        width: '100%',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginBottom: '2%',
        justifyContent: 'center'
    },
    editFlexDirectionColumn: {
        flexDirection: 'column',
        width: '100%',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%'
    },
    editAddressCityLabel: {
        color: '#333333DE',
        fontWeight: 'bold',
        margin: '2%',
        fontSize: scaledHeight(18)
    },
    editAddressCityValue: {
        color: '#56565A',
        margin: '2%',
        fontSize: scaledHeight(18)
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
});

export const GAddressValidateComponent = (props) => (
    <View>
        <View style={styles.settingsView1}>
            <Text style={styles.editAddressTypeLabel}>
                {globalString.addAddressInfo.addressLineOne}
            </Text>
        </View>

        <View style={styles.editAddressInput}>
            <GInputComponent
                propInputStyle={styles.editAddressInput}
                placeholder={globalString.addAddressInfo.addressLineOne}
                onChangeText={props.setAddressOne}
                value={props.addressOne}
                maxLength={50}
                errorFlag={!props.validationAddressOne}
                errorText={globalString.profileValidationMessages.validateAddressLineOne}
            />
        </View>

        <View style={styles.settingsView1}>
            <Text style={styles.editAddressTypeLabel}>
                {globalString.addAddressInfo.addressLineTwo}
            </Text>
        </View>

        <View style={styles.editAddressInput}>
            <GInputComponent
                propInputStyle={styles.editAddressInput}
                placeholder={globalString.addAddressInfo.addressLineTwo}
                value={props.addressTwo}
                maxLength={50}
                onChangeText={props.setAddressTwo}
                errorFlag={!props.validationAddressTwo}
                errorText={globalString.profileValidationMessages.validateAddressLineTwo}
            />
        </View>

        <View style={styles.settingsView1}>
            <Text style={styles.editAddressTypeLabel}>
                {globalString.addAddressInfo.zipCode}
            </Text>
        </View>

        <View style={styles.editAddressInput}>
            <GInputComponent
                propInputStyle={styles.editAddressInput}
                placeholder={globalString.addAddressInfo.zipCode}
                onBlur={props.validateZipCodeValue}
                onChangeText={props.setZipcodeValue}
                value={props.zipCodeValue}
                keyboardType="number-pad"
                maxLength={5}
                errorFlag={!props.isZipCodeValid}
                errorText={globalString.profileValidationMessages.validateZipcode}
            />
        </View>

        <View style={styles.editFlexDirectionColumn}>
            <Text style={styles.editAddressCityLabel}>
                {globalString.addAddressInfo.cityLabel}
            </Text>
            <Text style={styles.editAddressCityValue}>
                {props.userCity}
            </Text>
        </View>

        <View style={styles.editFlexDirectionColumn}>
            <Text style={styles.editAddressCityLabel}>
                {globalString.addAddressInfo.stateLabel}
            </Text>
            <Text style={styles.editAddressCityValue}>
                {props.userState}
            </Text>
        </View>

        {!props.isValidateAddress && (
            <GButtonComponent
                buttonStyle={styles.saveButtonStyle}
                buttonText={gblStrings.common.validate}
                textStyle={styles.saveButtonText}
                onPress={props.validateAddressValue} />
        )}
    </View>
);

GAddressValidateComponent.propType = {
    addressOne: PropTypes.string,
    addressTwo: PropTypes.string,
    zipCodeValue: PropTypes.string,
    userCity: PropTypes.string,
    userState: PropTypes.string,

    validationAddressOne: PropTypes.bool,
    validationAddressTwo: PropTypes.bool,
    isZipCodeValid: PropTypes.bool,
    isValidateAddress: PropTypes.bool,

    setAddressOne: PropTypes.func,
    setAddressTwo: PropTypes.func,
    validateZipCodeValue: PropTypes.func,
    setZipcodeValue: PropTypes.func,
    validateAddressValue: PropTypes.func
};

GAddressValidateComponent.defaultProps = {
    addressOne: '',
    addressTwo: '',
    zipCodeValue: '',
    userCity: ' - ',
    userState: ' - ',

    validationAddressOne: true,
    validationAddressTwo: true,
    isZipCodeValid: true,
    isValidateAddress: true,

    setAddressOne: null,
    setAddressTwo: null,
    validateZipCodeValue: null,
    setZipcodeValue: null,
    validateAddressValue: null
};

export default GAddressValidateComponent;