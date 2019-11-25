import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';
import { GIcon } from './GIcon';

export const styles = StyleSheet.create({
    privacyAgreement: {
        marginTop: scaledHeight(10),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: scaledHeight(50),
        flexDirection: 'row'
    },
    privacyText: {
        width: '50%',
        paddingLeft: '4%',
        color: '#5D83AE',
        fontWeight: 'bold',
        fontSize: scaledHeight(16)
    },
    copyRightSection: {
        height: scaledHeight(50),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    copyRightText: {
        color: '#FFFFFF'
    },
    connectWithUsText: {
        marginLeft: scaledHeight(15),
        color: '#56565A',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(15),
    },
    socialIcons:{
        flexDirection:'row',
    }
});

export const GFooterComponent = props => (

    <View>
        <Image style={{ width: scaledHeight(194), height: scaledHeight(100), alignItems: 'flex-start', marginLeft: scaledHeight(15),  marginTop: scaledHeight(30),}}
            resizeMode="contain"
            source={require("../Images/logo.png")}
        />
        <Text style={styles.connectWithUsText}>Connect with Us</Text>
        <View style={styles.socialIcons}>
                        <TouchableOpacity>
                            <Image style={{ width: scaledHeight(40), height: scaledHeight(33), alignItems: 'flex-start', marginLeft: scaledHeight(15), marginTop: scaledHeight(30), }}
                                resizeMode="contain"
                                source={require("../Images/twitter.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: scaledHeight(40), height: scaledHeight(33), alignItems: 'flex-start', marginLeft: scaledHeight(30), marginTop: scaledHeight(30), }}
                                resizeMode="contain"
                                source={require("../Images/linkedin.png")} />
                        </TouchableOpacity>
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
);

GFooterComponent.propTypes = {
    onPress: PropTypes.func
};

GFooterComponent.defaultProps = {

};


export default GFooterComponent;

