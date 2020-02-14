import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GTitleBarComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import changecredentials from '../../Images/changecredentials.png';
import accountrecovery from '../../Images/accountrecovery.png';
import modifysecurity from '../../Images/modifysecurity.png';
import changesignin from '../../Images/changesignin.png';
import iconnext from '../../Images/iconnext.png';

class SecurityPreferences extends Component {

    componentDidMount() { }

    navigateBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    navigateChangeLogon = () => {
        const { navigation } = this.props;
        navigation.navigate('changeLogonCredentials');
    }

    navigateAccountRecovery = () => {
        const { navigation } = this.props;
        navigation.navigate('accountRecoveryPref');
    }

    navigateModifySecurity = () => {
        const { navigation } = this.props;
        navigation.navigate('modifySecurityQues');
    }

    navigateChooseSignIn = () => {
        const { navigation } = this.props;
        navigation.navigate('ChangeSignInMethod');
    }

    navigateQuickSignIn = () => {
        const { navigation } = this.props;
        navigation.navigate('QuickSigninComponent');
    }

    render() {
        // const { navigation } = this.props;
        return (
            <View style={styles.container}>

                <GTitleBarComponent
                    toolbarTiltle={globalString.userManagement.securityPref}
                    backPress={this.goBack}
                />

                <View style={styles.layoutContainer}>

                    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>

                        <View style={styles.contentContainer}>

                            <TouchableOpacity onPress={this.navigateChangeLogon}>
                                <View style={styles.prefernceContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image style={styles.logoStyle} source={changecredentials} />
                                    </View>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.titleText}>
                                            Change Credentials
                                        </Text>
                                        <Text style={styles.descText}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        </Text>
                                    </View>
                                    <View style={styles.nextLogoContainer}>
                                        <Image style={styles.logoStyle} source={iconnext} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.lineBorderItems} />

                            <TouchableOpacity onPress={this.navigateAccountRecovery}>
                                <View style={styles.prefernceContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image style={styles.logoStyle} source={accountrecovery} />
                                    </View>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.titleText}>
                                            Set Account Recovery Preferences
                                        </Text>
                                        <Text style={styles.descText}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        </Text>
                                    </View>
                                    <View style={styles.nextLogoContainer}>
                                        <Image style={styles.logoStyle} source={iconnext} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.lineBorderItems} />

                            <TouchableOpacity onPress={this.navigateModifySecurity}>
                                <View style={styles.prefernceContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image style={styles.logoStyle} source={modifysecurity} />
                                    </View>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.titleText}>
                                            Modify Security Questions
                                        </Text>
                                        <Text style={styles.descText}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        </Text>
                                    </View>
                                    <View style={styles.nextLogoContainer}>
                                        <Image style={styles.logoStyle} source={iconnext} />
                                    </View>
                                </View>
                                <View style={styles.lineBorderItems} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.navigateChooseSignIn}>
                                <View style={styles.prefernceContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image style={styles.logoStyle} source={changesignin} />
                                    </View>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.titleText}>
                                            Change Sign In Method
                                        </Text>
                                        <Text style={styles.descText}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        </Text>
                                    </View>
                                    <View style={styles.nextLogoContainer}>
                                        <Image style={styles.logoStyle} source={iconnext} />
                                    </View>
                                </View>
                                <View style={styles.lineBorderItems} />
                            </TouchableOpacity>

                            {/* <View style={styles.cornerTriangle} />          */}
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

SecurityPreferences.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

SecurityPreferences.defaultProps = {
    navigation: {}
};

export default SecurityPreferences;
