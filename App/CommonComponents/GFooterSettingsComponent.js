import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';
import gblStrings from '../Constants/GlobalStrings';
import { GIcon } from "./GIcon";

export const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor:'#FFFFFF'
    },
    connectWithUs: {
        marginLeft: '4%',
        marginTop: scaledHeight(20)
    },
    copyRightSection: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        height: scaledHeight(60),
        justifyContent: 'center',
        marginTop: scaledHeight(20)
    },
    copyRightText: {
        color: '#FFFFFF'
    },
    disclaimerView: {
        marginBottom: scaledHeight(25),
        marginTop: scaledHeight(25),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    disclaimerViewTitle: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold'
    },
    disclaimerViewTitleContent: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(20),
        marginTop: scaledHeight(15),
    },
    lineBorder: {
        borderColor: '#DEDEDF',
        borderTopWidth: 1,
        marginTop: scaledHeight(40)
    },
    logoImageView: {
        marginBottom: scaledHeight(25),
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    privacyAgreement: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: scaledHeight(40),
        justifyContent: 'center',
        marginLeft: '2%',
        marginTop: scaledHeight(15),
        width: '100%'
    },
    privacyText: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        paddingLeft: '2%',
        width: '50%',
    },
    settingsSocial: {
        flexDirection: 'row',
        marginBottom: scaledHeight(20),
        marginLeft: '2%',
        marginTop: scaledHeight(10)
    },
});

export const GFooterSettingsComponent = props => (

    <View>
        <View style={styles.lineBorder} />
        <View style={styles.backgroundColor}>
            <View style={styles.disclaimerView}>
                <Text style={styles.disclaimerViewTitle}>
                    {gblStrings.accManagement.VCDiscalimerTitle}
                </Text>

                <Text style={styles.disclaimerViewTitleContent}>
                    {gblStrings.accManagement.VCDiscalimerDescContent}
                </Text>
            </View>
           
            <View style={styles.logoImageView}>
                <Image
                    resizeMode="contain"
                    source={require("../Images/logo.png")}
                />
            </View>

            <View style={styles.connectWithUs}>
                <Text style={styles.disclaimerViewTitleContent}>
                    Connect with Us
                </Text>
            </View>

            <View style={styles.settingsSocial}>
                <GIcon
                    name="twitter"
                    type="antdesign"
                    size={35}
                    color="#56565A"
                />
                <GIcon
                    name="linkedin-square"
                    type="antdesign"
                    size={35}
                    color="#56565A"
                />
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    Privacy Policy
                </Text>
                <Text style={styles.privacyText}>
                    Fund Documents
                </Text>
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    User Agreements
                </Text>
                <Text style={styles.privacyText}>
                    Support
                </Text>
            </View>

            <View style={styles.copyRightSection}>
                <Text style={styles.copyRightText}>
                    Copyright Victory Capital Management Inc. ©2020
                </Text>
            </View>
        </View>
    </View>
);

GFooterSettingsComponent.propTypes = {
    onPress: PropTypes.func
};

GFooterSettingsComponent.defaultProps = {
};

export default GFooterSettingsComponent;

