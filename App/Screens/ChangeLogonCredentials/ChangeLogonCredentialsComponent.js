import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import styles from './styles';

class ChangeLogonCredentialsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderMessage = () => {
        const { navigation } = this.props;
        const message = navigation.getParam('message');
        if (message) {
                return (
                <View style={styles.messageFlex}>
                    <Text style={styles.messageText}>{message}</Text>
                </View>
                );
        }
        return null;
    }

    navigateCurrentPassword = () => {
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate('currentPassword');
    }

    navigateCurrentPIN = () => {
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate('currentPIN');
    }

    navigateToSecurityPref = () =>{
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate('securityPreference');
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>

                    {this.renderMessage()}
                    <Text style={styles.changeLogonCredentialsText}>{gblStrings.userManagement.changeLogonCredentials}</Text>

                    <View style={styles.line} />

                    <Text style={styles.changeLogonCredentialsText}>{gblStrings.userManagement.changeLogonSelection}</Text>

                    <View style={styles.resetPasswordFlex} onTouchStart={this.navigateCurrentPassword}>
                        <View style={styles.resetPasswordFlex1}>
                            <View style={styles.horizontalFlex}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />
                                <Text style={styles.resetpasswordText}>{gblStrings.userManagement.resetPassword}</Text>
                            </View>
                            <Text style={styles.selectToChangeUrPswd}>{gblStrings.userManagement.selectToChangePswd}</Text>
                            <Text style={styles.selectToChangeUrPswd}>{gblStrings.userManagement.lastUpdate}</Text>
                        </View>
                    </View>

                    <View style={styles.resetPasswordFlex} onTouchStart={this.navigateCurrentPIN}>
                        <View style={styles.resetPasswordFlex1}>
                            <View style={styles.horizontalFlex}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />
                                <Text style={styles.resetpasswordText}>{gblStrings.userManagement.resetPIN}</Text>
                            </View>
                            <Text style={styles.selectToChangeUrPswd}>{gblStrings.userManagement.selectToChangePIN}</Text>
                            <Text style={styles.selectToChangeUrPswd}>{gblStrings.userManagement.lastUpdate}</Text>
                        </View>
                    </View>

                    <View style={styles.backButtonFlex} onTouchStart={this.navigateToSecurityPref}>
                        <Text style={styles.backButtonText}>{gblStrings.userManagement.back}</Text>
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


ChangeLogonCredentialsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ChangeLogonCredentialsComponent.defaultProps = {
    navigation :{}
};
export default ChangeLogonCredentialsComponent;