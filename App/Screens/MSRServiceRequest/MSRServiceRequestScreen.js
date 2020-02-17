import React from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Linking, Platform } from 'react-native';
import PropTypes from "prop-types";
import styles from './style';
import { navigate } from '../../Navigation/navigationService';
import gblStrings from '../../Constants/GlobalStrings';
import { GIcon, GTitleBarComponent, showAlertWithCancelButton } from '../../CommonComponents';

class MSRServiceRequestScreen extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isShowModal: false
    //     };
    // }

    static getDerivedStateFromProps(props, state) {
        // console.warn("*****", state);
        return state;
    }

    navigateSecureMessage = () => {
        navigate('msrSecureMessage');
      }

    openDialPad = () => {
        const phone = gblStrings.msrServiceRequest.vcmCustomerCareNumber;
        let number;
        if (Platform.OS === 'android') {
            showAlertWithCancelButton(gblStrings.common.appName, 'Are you sure want to make a call ?',
                gblStrings.common.ok, gblStrings.common.cancel,
                () => {
                    number = `tel:${phone}`;
                    Linking.openURL(number);
                },
                () => { this.dismiss(); }
            );

        }
        else {
            number = `telprompt:${phone} `;
        }
        Linking.openURL(number);
    };

    navigationGoBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <GTitleBarComponent
                    toolbarTiltle={gblStrings.msrServiceRequest.needAssistent}
                    backPress={this.navigationGoBack}
                />
                <View style={styles.columnContainer}>
                    <TouchableOpacity onPress={this.openDialPad}>
                        <View style={styles.rowContainer}>
                            <GIcon name="phone" type="material" size={25} color="black" />
                            <Text style={styles.blackText}>{gblStrings.msrServiceRequest.vcmCustomerCareNumber}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.transparentGrayContainer}>
                        <Text style={styles.grayBoldText}>{gblStrings.msrServiceRequest.vcmMemberServices}</Text>
                        <View style={styles.rowContainer}>
                            <GIcon name="alarm" type="material" size={20} color="gray" />
                            <View style={styles.columnContainer}>
                                <Text style={styles.blackText}>{gblStrings.msrServiceRequest.mondayToFriday}</Text>
                                <Text style={styles.grayText}>{gblStrings.msrServiceRequest.mondayToFridayTime}</Text>
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <GIcon name="alarm" type="material" size={20} color="gray" />
                            <View style={styles.columnContainer}>
                                <Text style={styles.blackText}>{gblStrings.msrServiceRequest.saturdays}</Text>
                                <Text style={styles.grayText}>{gblStrings.msrServiceRequest.saturdayTime}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.transparentGrayContainer}>
                        <Text style={styles.grayBoldText}>{gblStrings.msrServiceRequest.t_403BServices}</Text>
                        <View style={styles.rowContainer}>
                            <GIcon name="alarm" type="material" size={20} color="gray" />
                            <View style={styles.columnContainer}>
                                <Text style={styles.blackText}>{gblStrings.msrServiceRequest.weekdays}</Text>
                                <Text style={styles.grayText}>{gblStrings.msrServiceRequest.weekdayTime}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.alignSelf}>
                        <Text style={styles.smallGrayText}>{gblStrings.msrServiceRequest.forReferTo}</Text>
                        <Text style={styles.linkText}>{gblStrings.msrServiceRequest.victoryBusinessCalendar}</Text>
                    </Text>
                    <View style={styles.dividerLine} />
                    <TouchableWithoutFeedback onPress={this.navigateSecureMessage}>
                        <View style={styles.rowContainer}>
                            <GIcon name="mail" type="material" size={25} color="black" />
                            <Text style={styles.blackText}>{gblStrings.msrServiceRequest.sendSecureMsg}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.dividerLine} />
                    <View style={styles.rowContainer}>
                        <GIcon name="chat" type="material" size={25} color="black" />
                        <Text style={styles.blackText}>{gblStrings.msrServiceRequest.liveChatAgent}</Text>
                    </View>
                    <View style={styles.dividerLine} />
                </View>
            </View>

        );
    }
}

MSRServiceRequestScreen.propTypes = {
    // isPageLoading: PropTypes.bool,
    navigation: PropTypes.instanceOf(Object),
};

MSRServiceRequestScreen.defaultProps = {
    // isPageLoading: true,
    navigation: {},
};

export default MSRServiceRequestScreen;