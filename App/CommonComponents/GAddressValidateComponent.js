import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from "prop-types";
import globalString from '../Constants/GlobalStrings';
import {GInputComponent} from './GInputComponent';
import {GButtonComponent} from './GButtonComponent';
import { scaledHeight } from '../Utils/Resolution';

export const styles = StyleSheet.create({
    editAddressCityLabel: {
        color: '#333333DE',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        margin: '2%'
    },
    editAddressCityValue: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        margin: '2%'
    },
    editAddressInput: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '2%',
        paddingLeft: '2%',
        paddingRight: '2%',
        width: '100%'
    },
    editAddressTypeLabel: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: '4%'
    },
    editFlexDirectionColumn: {
        flexDirection: 'column',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%'
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
    settingsView1: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
});

export const GAddressValidateComponent = (props) => {
    const {setAddressOne,addressOne,validationAddressOne,addressTwo,setAddressTwo,validationAddressTwo,
        validateZipCodeValue,setZipcodeValue,zipCodeValue,isZipCodeValid,userCity,userState,isValidateAddress,validateAddressValue} = props;
return(
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
                onChangeText={setAddressOne}
                value={addressOne}
                maxLength={50}
                errorFlag={!validationAddressOne}
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
                value={addressTwo}
                maxLength={50}
                onChangeText={setAddressTwo}
                errorFlag={!validationAddressTwo}
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
                onBlur={validateZipCodeValue}
                onChangeText={setZipcodeValue}
                value={zipCodeValue}
                keyboardType="number-pad"
                maxLength={5}
                errorFlag={!isZipCodeValid}
                errorText={globalString.profileValidationMessages.validateZipcode}
            />
        </View>

        <View style={styles.editFlexDirectionColumn}>
            <Text style={styles.editAddressCityLabel}>
                {globalString.addAddressInfo.cityLabel}
            </Text>
            <Text style={styles.editAddressCityValue}>
                {userCity}
            </Text>
        </View>

        <View style={styles.editFlexDirectionColumn}>
            <Text style={styles.editAddressCityLabel}>
                {globalString.addAddressInfo.stateLabel}
            </Text>
            <Text style={styles.editAddressCityValue}>
                {userState}
            </Text>
        </View>

        {!isValidateAddress && (
            <GButtonComponent
                buttonStyle={styles.saveButtonStyle}
                buttonText={globalString.common.validate}
                textStyle={styles.saveButtonText}
                onPress={validateAddressValue}
            />
        )}
    </View>
);
};

GAddressValidateComponent.propTypes = {
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