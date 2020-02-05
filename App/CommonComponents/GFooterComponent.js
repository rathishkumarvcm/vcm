import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
// import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';

const twitter = require("../Images/twitter.png");
const linkedin = require("../Images/linkedin.png");
const youtube = require("../Images/youtube.png");
const facebook = require("../Images/facebook.png");
const insta = require("../Images/insta.png");

export const styles = StyleSheet.create({
    connectWithUsText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        marginLeft: scaledHeight(15),
        marginTop: scaledHeight(15),
    },
    copyRightSection: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        height: scaledHeight(50),
        justifyContent: 'center'
    },
    copyRightText: {
        color: '#FFFFFF'
    },
    imageSize:{
        alignItems: 'flex-start',
         height: scaledHeight(33),
          marginLeft: scaledHeight(15),
           marginTop: scaledHeight(30), 
           width: scaledHeight(40),
    },
    logoSize:{
        alignItems: 'flex-start',
        height: scaledHeight(100),
        marginLeft: scaledHeight(15),
        marginTop: scaledHeight(30),
        width: scaledHeight(194)
    },
    privacyAgreement: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(10),
        width: '100%'
    },
    privacyText: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        paddingLeft: '4%',
        width: '50%'
    },
    socialIcons:{
        flexDirection:'row',
    }
});

export const GFooterComponent = () => (

    <View>
        <Image style={styles.logoSize}
            resizeMode="contain"
            source="../Images/logo.png"
        />
        <Text style={styles.connectWithUsText}>Connect with Us</Text>
        <View style={styles.socialIcons}>
                        <TouchableOpacity>
                            <Image style={styles.imageSize}
                                resizeMode="contain"
                                source={twitter}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={styles.imageSize}
                                resizeMode="contain"
                                source={linkedin}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={styles.imageSize}
                                resizeMode="contain"
                                source={youtube}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={styles.imageSize}
                                resizeMode="contain"
                                source={facebook}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={styles.imageSize}
                                resizeMode="contain"
                                source={insta}
                        />
                        </TouchableOpacity>
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
);

GFooterComponent.propTypes = {
    // onPress: PropTypes.func
};

GFooterComponent.defaultProps = {

};


export default GFooterComponent;

