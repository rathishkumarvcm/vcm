import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from 'prop-types';
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
         this.setState({
             newPassword: text
         });
        this.disableSubmitButton = !((this.state.newPassword)===gblStrings.userManagement.strong);
    }

    validateNewPassword = () => {
        const validate = (ValidatePassword(this.state.newPassword)===gblStrings.userManagement.strong);
        this.setState({ passwordStrengthStrong: validate });
    }

    setConfirmNewPassword = text => {
        this.setState({
            confirmNewPassword: text
        });
    }

    confirmNewlyEnteredPasswords = () => {
        this.setState({
            comparePasswords: (this.state.confirmNewPassword === this.state.newPassword)
        });
        if((this.state.confirmNewPassword === this.state.newPassword)&& (this.state.passwordStrengthStrong)){
            this.disableSubmitButton = false;
        }else{
            this.disableSubmitButton = true;
        }
    }

    onClickSubmit = () => {        
        console.log('Submit Button Clicked...');       
        const payloadData = {
            newPassword: this.state.confirmNewPassword
        };
        this.props.saveNewPassword(payloadData);
        this.props.navigation.navigate('changeLogonCredentials',{message:gblStrings.userManagement.changedPasswordSuccessfully, newPassword:this.state.confirmNewPassword});               
    }

    componentDidMount(){
        
    }

    navigateChangeLogonCredentials = () => this.props.navigation.navigate('changeLogonCredentials');


    render() { 
        console.log("render--->this.props"+JSON.stringify(this.props));
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

                    <View style={styles.enterNewPasswordFlex}>
                        <Text style={styles.enterPasswordText}>{gblStrings.userManagement.enterNewPassword}</Text>
                        <Text style={styles.explainStyle}>{gblStrings.userManagement.explain}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={this.state.passwordStrengthStrong ? styles.passwordTextBox : styles.passwordTextBoxError}
                        placeholder={gblStrings.userManagement.newPassword}
                        value={this.state.newPassword}
                        onChangeText={this.setNewPassword}
                        onBlur={this.validateNewPassword}
                        onSubmitEditing={this.validateNewPassword}
                        validateError={this.state.passwordStrengthStrong}
                        secureTextEntry
                    />
                    <View style={styles.passwordStrengthFlex}>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(this.state.newPassword)==gblStrings.userManagement.strong)?styles.strong:styles.default} />
                            <Text style={styles.strongText}>{gblStrings.userManagement.strong}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(this.state.newPassword)==gblStrings.userManagement.good)?styles.good:styles.default} />
                            <Text style={styles.strongText}>{gblStrings.userManagement.good}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(this.state.newPassword.length>0)&&(ValidatePassword(this.state.newPassword)==gblStrings.userManagement.weak)?styles.weak:styles.default} />
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
                        onChangeText={this.setConfirmNewPassword}
                        onSubmitEditing={this.confirmNewlyEnteredPasswords}
                        onBlur={this.confirmNewlyEnteredPasswords}
                        errorFlag={!this.state.comparePasswords}
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
    loginState : PropTypes.instanceOf(Object),
    initialState : PropTypes.instanceOf(Object),
    saveNewPassword : PropTypes.func,
};

ResetPasswordComponent.defaultProps = {

};
export default ResetPasswordComponent;