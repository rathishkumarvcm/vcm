import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  GHeaderComponent,
  GFooterSettingsComponent,
  GButtonComponent,
  GInputComponent,
} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import * as regexConst from '../../Constants/RegexConstants';
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
import {ValidatePassword} from '../../Utils/ValidatePassword';

class NewPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReset: true,
      //  validationPassword: false,
      password: '',
      boo_new: false,
      str_new: '',     
      err_new: '',
      boo_cfm: false,
      str_cfm: '',
      style_cfm: styles.userIDTextBox,
      err_cfm: '',
      validationPassword: true,
    };
    // set true to isLoading if data for this screen yet to be received and wanted to show loader.
  }

  setNew = (text) => {
    this.setState({
      str_new: text
    });
  }

  setConfirm = (text) => {
    this.setState({
      str_cfm: text
    });
  }

  //  validatePassword = () => {
  //    // ßconst validate = passwordRegex.test(this.state.password);
  //    this.setState({
  //      // validationPassword : validate
  //    });
  //  }

  //  setPassword = text => {
  //    this.setState({
  //      password: text
  //    });
  //  }
  validateNewPassword = () => {
    const validate = (ValidatePassword(this.state.str_new)===globalString.userManagement.strong);
    this.setState({ validationPassword: validate });
}

  navigationLogin = () => this.props.navigation.navigate('login');

  navigationSuccess = () => 
  {
    
    const validate_new=regexConst.passwordRegex.test(this.state.str_new);
    const validate_cfm=regexConst.passwordRegex.test(this.state.str_cfm);
    
    // const validPass=regexConst.passwordRegex.test(this.state.str_new);
    this.setState({
      boo_new: !validate_new,// == "" ? true : false,
      err_new: !validate_new ? globalString.recoverPassword.validPassword : '',
      boo_cfm: !validate_cfm,
      err_cfm: !validate_cfm ? globalString.recoverPassword.validPassword : '',
      
  });
     
     if(validate_new && validate_cfm)
        if(this.state.str_new == this.state.str_cfm)
        {
          const recoveryJson={
            newPassword:this.state.str_new,
          };
          console.log(recoveryJson);
          this.props.navigation.navigate('passwordSuccess');
        }
        else
        {
          this.setState({
              err_cfm:globalString.recoverPassword.password_mismatch
          });
        }
}

  navigationBack = () => this.props.navigation.goBack();

  render() {
    return (
      <View style={styles.container}>
        <GHeaderComponent register
          navigation={this.props.navigation}
        />
        <ScrollView style={{ flex: 0.85 }}>
          <View style={styles.signInView}>
            <Text style={styles.retrievePasswordText}>
              {globalString.recoverPassword.password_new_title}
            </Text>
          </View>
          {/* {
          this.state.isReset ? <></> :
          <View>
            <View style={styles.passwordView}>
              <Text style={styles.enterOpt}>{globalString.recoverPassword.password_current}</Text>
            </View>

            <GInputComponent
              propInputStyle={
                !this.state.validationPassword
                  ? styles.passwordTextBoxError
                  : styles.passwordTextBox
              }
              placeholder={'******'}
              onChangeText={this.setPassword}
              onBlur={this.validatePassword}
              validateError={this.state.validatePassword}
              value={this.state.password}
              secureTextEntry
            />
          </View>
          } */}

          <View style={styles.hintView}>
            <Text style={[{ flex: 2 }, styles.enterOpt]}>
              {globalString.recoverPassword.password_new}
            </Text>
            <View style={styles.hintText}>
              <Text style={styles.refreshOtp}>{globalString.recoverPassword.password_hint}</Text>
            </View>
          </View>

          <GInputComponent
           propInputStyle={this.state.boo_new ? styles.userIDTextBoxError : styles.userIDTextBox}
           placeholder={globalString.recoverPassword.passwordPlaceHolder} 
           onChangeText={this.setNew}
           value={this.state.str_new}
           onBlur={this.validateNewPassword}
            onSubmitEditing={this.validateNewPassword}
           secureTextEntry
          />
          <Text style={styles.errorMessage}>{this.state.err_new}</Text>

          <View style={styles.passwordStrengthFlex}>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(this.state.str_new)==globalString.userManagement.strong)?styles.strong:styles.default} />
                            <Text style={styles.strongText}>{globalString.userManagement.strong}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(this.state.str_new)==globalString.userManagement.good)?styles.good:styles.default} />
                            <Text style={styles.strongText}>{globalString.userManagement.good}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(this.state.str_new.length>0)&&(ValidatePassword(this.state.str_new)==globalString.userManagement.weak)?styles.weak:styles.default} />
                            <Text style={styles.strongText}>{globalString.userManagement.weak}</Text>
                        </View>
          </View>
          <View style={styles.passwordView}>
            <Text style={styles.enterOpt}>{globalString.recoverPassword.password_confirm}</Text>
          </View>

          <GInputComponent
            propInputStyle={this.state.boo_cfm ? styles.userIDTextBoxError : styles.userIDTextBox}
            placeholder={globalString.recoverPassword.passwordPlaceHolder} onChangeText={this.setConfirm}
            value={this.state.str_cfm} secureTextEntry
          />
          <Text style={styles.errorMessage}>{this.state.err_cfm}</Text>

          <GButtonComponent
            buttonStyle={styles.cancelButton}
            buttonText={globalString.common.back}
            textStyle={styles.cancelButtonText}
            onPress={this.navigationBack}
          />
          <GButtonComponent
            buttonStyle={styles.cancelButton}
            buttonText={globalString.common.cancel}
            textStyle={styles.cancelButtonText}
            onPress={this.navigationLogin}
          />
          <GButtonComponent
            buttonStyle={styles.continueButton}
            buttonText={globalString.recoverPassword.btnChangePassword}
            textStyle={styles.continueButtonText}
            onPress={this.navigationSuccess}
          />
          <GFooterSettingsComponent />
        </ScrollView>
      </View>
    );
  }
}
NewPasswordComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
};

NewPasswordComponent.defaultProps = {
  navigation:{}
};

export default NewPasswordComponent;
