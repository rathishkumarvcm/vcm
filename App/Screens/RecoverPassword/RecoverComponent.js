import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
  GHeaderComponent,
  GFooterSettingsComponent,
  GButtonComponent,
  GInputComponent,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';


class RecoveryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCustomer: true,
      boo_OnlineId: false,
      onlineId: '',
      err_onlineId: '',
      boo_ssn: false,
      ssn: '',
      style_ssn: styles.userIDTextBox,
      err_ssn: '',
      str_security:'',
      err_security:'',
      boo_security:false
    };
    // set true to isLoading if data for this screen yet to be received and wanted to show loader.
  }



  setOnlineId = (text) => {
    this.setState({
      onlineId: text
    });
  }

  setSNN = (text) => {
    this.setState({
      ssn: text
    });
  }

  setSecurity = (text) => {
    this.setState({
      str_security: text
    });
  }
  navigationResetOpt = () => {

    let validSSn=regEx.allow_Nine_Numeric.test(this.state.ssn);
    this.setState({
      boo_OnlineId: this.state.onlineId == "" ? true : false,
      err_onlineId: this.state.onlineId == "" ? globalString.recoverPassword.err_onlineId: '',
      boo_ssn: !validSSn,
      err_ssn: !validSSn ? globalString.recoverPassword.err_ssn : '',
      boo_security:this.state.str_security==''?true:false,
      err_security:this.state.str_security==''? globalString.recoverPassword.err_security:''
    });

    if (this.state.isCustomer)
    {
      if (!this.state.onlineId == "" && validSSn && !this.state.str_security=='')
      {
        let recoveryJson={
          onlineId:this.state.onlineId,
          ssn:this.state.ssn,
          security:this.state.str_security
        };
        console.log(recoveryJson);
        this.props.navigation.navigate('passwordRecoveryOtp');
      }
    }
    else
    {
        if (!this.state.onlineId == "")
        {
          let recoveryJson={
            onlineId:this.state.onlineId,
          };
          console.log(recoveryJson);
          this.props.navigation.navigate('passwordRecoverTemp');
        }
    }

    
  }
  navigationLogin = () => this.props.navigation.goBack();
  render() {
    return (
      <View style={styles.container}>
        <GHeaderComponent register
          navigation={this.props.navigation}
        />
        <ScrollView style={{ flex: 0.85 }}>

        <View style={styles.notifOuter}>
            <View style={styles.notifInner}>
              <Text style={styles.notifInnerText}>{globalString.recoverPassword.retrive_password}</Text>
            </View>
            <View style={styles.notifClose}>
            <Text>{'X'}</Text>
            </View>
        </View>
          
          <View style={styles.signInView}>
            <Text style={styles.retrievePasswordText}>{globalString.recoverPassword.title_onlineId}</Text>
          </View>
          <View style={styles.signInUser}>
            <Text style={styles.userIDText}>{globalString.recoverPassword.lable_onlineId}</Text>
          </View>
          {/* <GInputComponent placeholder={'Online ID'} /> */}

          <GInputComponent
            propInputStyle={this.state.boo_OnlineId ? styles.userIDTextBoxError : styles.userIDTextBox}
            placeholder={globalString.recoverPassword.lable_onlineId}
            onChangeText={this.setOnlineId}
            value={this.state.onlineId}

          />
          <Text style={styles.errorMessage}>{this.state.err_onlineId}</Text>
          {this.state.isCustomer ?
            <View>
              <View style={styles.passwordView}>
                <Text style={styles.userIDText}>{globalString.recoverPassword.lable_ssn}</Text>
              </View>

              <GInputComponent propInputStyle={this.state.boo_ssn ? styles.userIDTextBoxError : styles.userIDTextBox}
                placeholder={globalString.recoverPassword.placeholder_ssn}
                onChangeText={this.setSNN}
                value={this.state.ssn}

              />
              <Text style={styles.errorMessage}>{this.state.err_ssn}</Text>
              <View style={styles.passwordView}>
                <Text style={styles.userIDText}>{globalString.recoverPassword.lable_security}</Text>
              </View>
              <View style={styles.securityCheck} />

            <View style={styles.refreshSecurityView}>
              <Text style={styles.refreshSecurity}>{globalString.recoverPassword.refresh_security}</Text>
            </View>
              
              <View style={styles.passwordView}>
                <Text style={styles.userIDText}>{globalString.recoverPassword.enter_security}</Text>
              </View>

              <GInputComponent propInputStyle={this.state.boo_security ? styles.userIDTextBoxError : styles.userIDTextBox}
              placeholder={globalString.recoverPassword.lable_security} 
              onChangeText={this.setSecurity} 
              value={this.state.str_security} 
              />
              <Text style={styles.errorMessage}>{this.state.err_security}</Text>
            </View>
            : <></>}
          <GButtonComponent
            buttonStyle={styles.cancelButton}
            buttonText={globalString.common.cancel}
            textStyle={styles.cancelButtonText}
            onPress={this.navigationLogin}
          />
          <GButtonComponent
            buttonStyle={styles.continueButton}
            buttonText={globalString.common.submit}
            textStyle={styles.continueButtonText}
            onPress={this.navigationResetOpt}
          />
          <GFooterSettingsComponent />
        </ScrollView>
      </View>
    );
  }
}
RecoveryComponent.propTypes = {

  navigation: PropTypes.instanceOf(Object)
};

RecoveryComponent.defaultProps = {

};

export default RecoveryComponent;