import React, { Component } from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import {styles} from './styles';
import { GHeaderComponent, GIcon, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

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

        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.contentStyle}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.userManagement.securityPref}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <TouchableOpacity onPress={this.navigateChangeLogon}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.changeSigninCredentials}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateAccountRecovery}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.setAccountRecoveryPreferences}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.navigateModifySecurity}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.modifySecurityQuestions}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateChooseSignIn}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.chooseSigninMethods}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateQuickSignIn}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.mobileQuickSignIn}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateBack}>
                        <Text style={styles.backButtonText}>{gblStrings.userManagement.back}</Text>
                    </TouchableOpacity>

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

SecurityPreferences.propTypes = {
    navigation : PropTypes.instanceOf(Object)
};

SecurityPreferences.defaultProps = {
    navigation: {}
};

export default SecurityPreferences;
