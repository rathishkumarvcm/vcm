import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from 'prop-types';
import * as reGex from '../../Constants/RegexConstants';


class ResetPasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            confirmNewPassword: '',
            validationPassword: true,
            comparePasswords: true,
            currentPassword:''
        };
        this.disableSubmitButton = true;
        this.resetPasswordJSON={
            newPassword:'',
            message:gblStrings.userManagement.changedPasswordSuccessfully
        };
    }

    setPassword = text => {
        this.setState({
            newPassword: text
        });
    }

    validateCurrentPassword = text =>{
        this.setState({
            currentPassword:text
        });
    }

    validateNewPassword = () => {
        const validate = reGex.passwordRegex.test(this.state.newPassword);
        this.setState({ validationPassword: validate });
    }

    confirmNewPassword = text => {
        this.setState({
            confirmNewPassword: text
        });
    }

    confirmNewlyEnteredPasswords = () => {
        this.setState({
            comparePasswords: (this.state.confirmNewPassword === this.state.newPassword)
        });
        this.disableSubmitButton = !(this.state.confirmNewPassword === this.state.newPassword);
    }

    onClickSubmit = () => {
        console.log("------- onClick submit reset password -------");
        this.resetPasswordJSON.newPassword = this.state.confirmNewPassword;
        console.log("resetPasswordJSON ------- "+JSON.stringify(this.resetPasswordJSON));
        this.props.navigation.navigate('changeLogonCredentials',{message:gblStrings.userManagement.changedPasswordSuccessfully, newPassword:this.state.confirmNewPassword});
    }

    navigateChangeLogonCredentials = () => this.props.navigation.navigate('changeLogonCredentials');

    render() {
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity onPress={this.goBack}>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>

                    <Text style={styles.resetYourPasswordText}>{gblStrings.userManagement.restYourPassword}</Text>

                    <View style={styles.line} />

                    <View style={styles.enterPasswordFlex}>
                        <Text style={styles.enterPasswordText}>{gblStrings.userManagement.enterCurrentPassword}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={styles.passwordTextBox}
                        placeholder={gblStrings.userManagement.currentPassword}
                        value={this.state.currentPassword}
                        onChangeText={this.validateCurrentPassword}
                        secureTextEntry
                    />

                    <View style={styles.enterNewPasswordFlex}>
                        
                        <Text style={styles.enterPasswordText}>{gblStrings.userManagement.enterNewPassword}</Text>
                        <Text style={styles.explainStyle}>{gblStrings.userManagement.explain}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={this.state.validationPassword ? styles.passwordTextBox : styles.passwordTextBoxError}
                        placeholder={gblStrings.userManagement.newPassword}
                        value={this.state.newPassword}
                        onChangeText={this.setPassword}
                        onBlur={this.validateNewPassword}
                        onSubmitEditing={this.validateNewPassword}
                        validateError={this.state.validationPassword}
                        secureTextEntry
                    />
                    <View style={styles.passwordStrengthFlex}>
                        <View style={styles.passwordStrongFlex}>
                            <View style={styles.strong} />
                            <Text style={styles.strongText}>{gblStrings.userManagement.strong}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={styles.medium} />
                            <Text style={styles.strongText}>{gblStrings.userManagement.good}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={styles.poor} />
                            <Text style={styles.strongText}>{gblStrings.userManagement.weak}</Text>
                        </View>
                    </View>

                    <View style={styles.enterPasswordFlex}>
                        <Text style={styles.enterPasswordText}>{gblStrings.userManagement.confirmNewPassword}</Text>
                    </View>

                    <GInputComponent
                        propInputStyle={this.state.comparePasswords ? styles.passwordTextBox : styles.passwordTextBoxError}
                        inputStyle={this.state.comparePasswords ? null : styles.passwordTextBoxError}
                        placeholder={gblStrings.userManagement.confirmNewPassword}
                        value={this.state.confirmNewPassword}
                        onChangeText={this.confirmNewPassword}
                        onSubmitEditing={this.confirmNewlyEnteredPasswords}
                        onBlur={this.confirmNewlyEnteredPasswords}
                        errorFlag={!this.state.comparePasswords}
                        errorText={gblStrings.userManagement.passwordDoesnotMatch}
                        secureTextEntry
                    />
                    <View style={styles.buttonsFlex}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateChangeLogonCredentials}>
                            <Text style={styles.backButtonText}>{gblStrings.userManagement.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateChangeLogonCredentials}>
                            <Text style={styles.backButtonText}>{gblStrings.userManagement.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.disableSubmitButton?styles.submitFlexDisabled:styles.submitFlex} disabled={this.disableSubmitButton} onPress = {this.onClickSubmit}>
                            <Text style={styles.submitText}>{gblStrings.userManagement.submit}</Text>
                        </TouchableOpacity>
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


ResetPasswordComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ResetPasswordComponent.defaultProps = {

};
export default ResetPasswordComponent;