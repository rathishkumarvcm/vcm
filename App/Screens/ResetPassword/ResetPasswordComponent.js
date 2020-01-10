import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import {ValidatePassword} from '../../Utils/ValidatePassword';


class ResetPasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            confirmNewPassword: '',
            passwordStrengthStrong: true,
            comparePasswords: true,
        };
        this.disableSubmitButton = true;
    }

    setNewPassword = text => {
        const { newPassword } = this.state;
         this.setState({
             newPassword: text
         });
        this.disableSubmitButton = !((newPassword)===gblStrings.userManagement.strong);
    }

    validateNewPassword = () => {
        const { newPassword } = this.state;
        const validate = (ValidatePassword(newPassword)===gblStrings.userManagement.strong);
        this.setState({ passwordStrengthStrong: validate });
    }

    setConfirmNewPassword = text => {
        this.setState({
            confirmNewPassword: text
        });
    }

    confirmNewlyEnteredPasswords = () => {
        const { confirmNewPassword,newPassword,passwordStrengthStrong } = this.state;
        this.setState({
            comparePasswords: (confirmNewPassword === newPassword)
        });
        if((confirmNewPassword === newPassword)&& (passwordStrengthStrong)){
            this.disableSubmitButton = false;
        }else{
            this.disableSubmitButton = true;
        }
    }

    onClickSubmit = () => {        
        // console.log('Submit Button Clicked...');     
        const { confirmNewPassword } = this.state;  
        const { navigation,saveNewPassword } = this.props;   
        const { navigate } = navigation;  
        const payloadData = {
            newPassword: confirmNewPassword
        };
        saveNewPassword(payloadData);
        navigate('changeLogonCredentials',{message:gblStrings.userManagement.changedPasswordSuccessfully, newPassword:confirmNewPassword});               
    }

    navigateChangeLogonCredentials = () => {
        const { navigation } = this.props;   
        const { navigate } = navigation;  
        navigate('changeLogonCredentials');
    }


    render() { 
        console.log("render--->this.props",JSON.stringify(this.props));
        const { navigation } = this.props;
        const { passwordStrengthStrong,newPassword,comparePasswords,confirmNewPassword } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
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

                    <View style={styles.enterNewPasswordFlex}>
                        <Text style={styles.enterPasswordText}>{gblStrings.userManagement.enterNewPassword}</Text>
                        <Text style={styles.explainStyle}>{gblStrings.userManagement.explain}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={passwordStrengthStrong ? styles.passwordTextBox : styles.passwordTextBoxError}
                        placeholder={gblStrings.userManagement.newPassword}
                        value={newPassword}
                        onChangeText={this.setNewPassword}
                        onBlur={this.validateNewPassword}
                        onSubmitEditing={this.validateNewPassword}
                        validateError={passwordStrengthStrong}
                        secureTextEntry
                    />
                    <View style={styles.passwordStrengthFlex}>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(newPassword)===gblStrings.userManagement.strong)?styles.strong:styles.default} />
                            <Text style={styles.strongText}>{gblStrings.userManagement.strong}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(newPassword)===gblStrings.userManagement.good)?styles.good:styles.default} />
                            <Text style={styles.strongText}>{gblStrings.userManagement.good}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(newPassword.length>0)&&(ValidatePassword(newPassword)===gblStrings.userManagement.weak)?styles.weak:styles.default} />
                            <Text style={styles.strongText}>{gblStrings.userManagement.weak}</Text>
                        </View>
                    </View>

                    <View style={styles.enterPasswordFlex}>
                        <Text style={styles.enterPasswordText}>{gblStrings.userManagement.confirmNewPassword}</Text>
                    </View>

                    <GInputComponent
                        propInputStyle={comparePasswords ? styles.passwordTextBox : styles.passwordTextBoxError}
                        inputStyle={comparePasswords ? null : styles.passwordTextBoxError}
                        placeholder={gblStrings.userManagement.confirmNewPassword}
                        value={confirmNewPassword}
                        onChangeText={this.setConfirmNewPassword}
                        onSubmitEditing={this.confirmNewlyEnteredPasswords}
                        onBlur={this.confirmNewlyEnteredPasswords}
                        errorFlag={!comparePasswords}
                        errorText={gblStrings.userManagement.passwordDoesnotMatch}
                        secureTextEntry
                    />

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateChangeLogonCredentials}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.disableSubmitButton?styles.submitFlexDisabled:styles.submitFlex} disabled={this.disableSubmitButton} onPress={this.onClickSubmit}>
                            <Text style={styles.submitText}>{gblStrings.common.submit}</Text>
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
    navigation : PropTypes.instanceOf(Object),
    saveNewPassword : PropTypes.func,
};

ResetPasswordComponent.defaultProps = {
    navigation:{},
    saveNewPassword:()=>{}
};
export default ResetPasswordComponent;