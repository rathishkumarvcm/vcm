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
import {ValidatePassword} from '../../Utils/ValidatePassword';

class NewPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booNew: false,
      strNew: '',     
      errNew: '',
      booCfm: false,
      strCfm: '',
      errCfm: '',
      validationPassword:false,
    };
    // set true to isLoading if data for this screen yet to be received and wanted to show loader.
  }

  setNew = (text) => {
    this.setState({
      strNew: text
    });
  }

  setConfirm = (text) => {
    this.setState({
      strCfm: text
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
    const{strNew} =this.state;
   
    const validate = (ValidatePassword(strNew)===globalString.userManagement.strong);
    this.setState({ validationPassword: validate });
}

  navigationLogin = () => {
    const{navigation}=this.props;
    navigation.navigate('login');
  }

  navigationSuccess = () => 
  {
    const{strNew,strCfm} =this.state;
    const{navigation}=this.props;
    const validateNew=regexConst.passwordRegex.test(strNew);
    const validateCfm=regexConst.passwordRegex.test(strCfm);
    
    // const validPass=regexConst.passwordRegex.test(this.state.strNew);
    this.setState({
      booNew: !validateNew,
      errNew: !validateNew ? globalString.recoverPassword.validPassword : '',
      booCfm: !validateCfm,
      errCfm: !validateCfm ? globalString.recoverPassword.validPassword : '',
      
  });
     
     if(validateNew && validateCfm)
        if(strNew === strCfm)
        {
          const recoveryJson={
            newPassword:strNew,
          };
         
          navigation.navigate('passwordSuccess',{key:recoveryJson});
        }
        else
        {
          this.setState({
              errCfm:globalString.recoverPassword.password_mismatch
          });
        }
}

  navigationBack = () => 
  {
    const{navigation}=this.props;
    navigation.goBack();
  }

  render() {
    const{navigation}=this.props;
    const{strNew,strCfm,booCfm,booNew,errCfm,errNew} =this.state;
    return (
      <View style={styles.container}>
        <GHeaderComponent register
          navigation={navigation}
        />
        <ScrollView style={styles.scrollStyle}>
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
            <Text style={styles.passNewStyle}>
              {globalString.recoverPassword.password_new}
            </Text>
            <View style={styles.hintText}>
              <Text style={styles.refreshOtp}>{globalString.recoverPassword.password_hint}</Text>
            </View>
          </View>

          <GInputComponent
           propInputStyle={booNew ? styles.userIDTextBoxError : styles.userIDTextBox}
           placeholder={globalString.recoverPassword.passwordPlaceHolder} 
           onChangeText={this.setNew}
           value={strNew}
           onBlur={this.validateNewPassword}
          onSubmitEditing={this.validateNewPassword}
           secureTextEntry
          />
          <Text style={styles.errorMessage}>{errNew}</Text>

          <View style={styles.passwordStrengthFlex}>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(strNew)===globalString.userManagement.strong)?styles.strong:styles.default} />
                            <Text style={styles.strongText}>{globalString.userManagement.strong}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(strNew)===globalString.userManagement.good)?styles.good:styles.default} />
                            <Text style={styles.strongText}>{globalString.userManagement.good}</Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(strNew.length>0)&&(ValidatePassword(strNew)===globalString.userManagement.weak)?styles.weak:styles.default} />
                            <Text style={styles.strongText}>{globalString.userManagement.weak}</Text>
                        </View>
          </View>
          <View style={styles.passwordView}>
            <Text style={styles.enterOpt}>{globalString.recoverPassword.password_confirm}</Text>
          </View>

          <GInputComponent
            propInputStyle={booCfm ? styles.userIDTextBoxError : styles.userIDTextBox}
            placeholder={globalString.recoverPassword.passwordPlaceHolder} onChangeText={this.setConfirm}
            value={strCfm} secureTextEntry
          />
          <Text style={styles.errorMessage}>{errCfm}</Text>

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
