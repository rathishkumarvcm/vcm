import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';
import gblStrings from '../Constants/GlobalStrings';
import { GIcon } from '../CommonComponents';

export const styles = StyleSheet.create({
    lineBorder: {
        marginTop: scaledHeight(40),
        borderTopWidth: 1,
        borderColor: '#DEDEDF'
    },
    backgroundColor:{
        backgroundColor:'#FFFFFF'
    },
    disclaimerView: {
        marginTop: scaledHeight(25),
        marginBottom: scaledHeight(25),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    disclaimerViewTitle: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold'
    },
    disclaimerViewTitleContent: {
        marginTop: scaledHeight(15),
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(20),
    },
    connectWithUs: {
        marginLeft: '4%',
        marginTop: scaledHeight(20)
    },
    logoImageView: {
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(25),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    settingsSocial: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(20)
    },
    privacyAgreement: {
        marginLeft: '2%',
        marginTop: scaledHeight(15),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: scaledHeight(40),
        flexDirection: 'row'
    },
    privacyText: {
        width: '50%',
        paddingLeft: '2%',
        color: '#5D83AE',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    copyRightSection: {
        marginTop: scaledHeight(20),
        height: scaledHeight(60),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    copyRightText: {
        color: '#FFFFFF'
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
                    {'Connect with Us'}
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
                    {"Privacy Policy"}
                </Text>
                <Text style={styles.privacyText}>
                    {"Fund Documents"}
                </Text>
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    {"User Agreements"}
                </Text>
                <Text style={styles.privacyText}>
                    {"Support"}
                </Text>
            </View>

            <View style={styles.copyRightSection}>
                <Text style={styles.copyRightText}>
                    {"Copyright Victory Capital Management Inc. ©2020"}
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

