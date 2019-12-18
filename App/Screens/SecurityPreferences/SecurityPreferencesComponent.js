import React, { Component } from 'react';
import {styles} from './styles';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { GHeaderComponent, GIcon, GFooterComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class SecurityPreferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount() { }

    navigateBack = () => this.props.navigation.goBack();

    navigateChangeLogon = () => this.props.navigation.navigate('changeLogonCredentials');

    navigateAccountRecovery = () => this.props.navigation.navigate('accountRecoveryPref');

    navigateModifySecurity = () => this.props.navigation.navigate('modifySecurityQues');

    navigateChooseSignIn = () => this.props.navigation.navigate('ChangeSignInMethod');

    navigateQuickSignIn = () => this.props.navigation.navigate('QuickSigninComponent');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
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

export default SecurityPreferences;
