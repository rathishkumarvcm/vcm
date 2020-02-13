import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity,StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GInputComponent,GTitleBarComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import * as regEx from '../../Constants/RegexConstants';

class RecoveryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCustomer: true,
     // booOnlineId: false,
      onlineId: '',
     // errOnlineId: '',
      booSsn: false,
      ssn: '',
      // style_ssn: styles.userIDTextBox,
      errSsn: '',
      strSecurity: '',
      errSecurity: '',
      booSecurity: false
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
      strSecurity: text
    });
  }

  navigationResetOpt = () => {
    const { ssn, onlineId, strSecurity, isCustomer } = this.state;
    const { navigation } = this.props;
    const validSSn = regEx.allowNineNumeric.test(ssn);
    this.setState({
      // booOnlineId: onlineId === "",
      // errOnlineId: onlineId === "" ? globalString.recoverPassword.errOnlineId : '',
      booSsn: !validSSn,
      errSsn: !validSSn ? globalString.recoverPassword.err_ssn : '',
      booSecurity: strSecurity === '',
      errSecurity: strSecurity === '' ? globalString.recoverPassword.err_security : ''
    });
    let recoveryJson;
    if (isCustomer) {

      if (onlineId !== "" && validSSn && strSecurity !== '') {
        recoveryJson = {
          onlineId,
          ssn,
          security: strSecurity
        };

        navigation.navigate('passwordRecoveryOtp', { key: recoveryJson });
      }
    }
    else
      if (onlineId !== "") {
        recoveryJson = {
          onlineId,
        };

        navigation.navigate('passwordRecoverTemp', { key: recoveryJson });
      }
  }

  navigationLogin = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    // const { navigation } = this.props;
    const { /* booOnlineId, onlineId, errOnlineId, */ isCustomer, ssn, errSsn, booSecurity, errSecurity
      , strSecurity, booSsn } = this.state;
    return (
      <View style={styles.container}>

          <StatusBar backgroundColor="#194C7D" barStyle="light-content" translucent />

            <GTitleBarComponent
              toolbarTiltle="Retrieve Password"
              backPress={this.navigationLogin}
            />
            

        <View style={styles.layoutContainer}>          
       
            <View style={styles.cornerTriangle} />
          <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>

            {/* <View style={styles.notifOuter}>
              <View style={styles.notifInner}>
                <Text style={styles.notifInnerText}>{globalString.recoverPassword.retrive_password}</Text>
              </View>
              <View style={styles.notifClose}>
              <Text>X</Text>
              </View>
          </View> */}

            <View style={styles.contentContainer}>

              <View style={styles.signInView}>
              <Text style={styles.retrievePasswordText}>
                Enter Details
              </Text>
              <Text style={styles.mandatoryText}>
                * All fields are mandatory except mentioned optional.
              </Text>

              <Text style={styles.userIDText}>
                {globalString.recoverPassword.lable_onlineId}
              </Text>

              <Text style={styles.vcmIdText}>
                VCM0123
              </Text>

              {/* <GInputComponent
                propInputStyle={booOnlineId ? styles.userIDTextBoxError : styles.userIDTextBox}
                placeholder={globalString.recoverPassword.lable_onlineId}
                onChangeText={this.setOnlineId}
                value={onlineId}
              />
              <Text style={styles.errorMessage}>{errOnlineId}</Text>
             */}

              {isCustomer ? (
                <View>
                  <View style={styles.passwordView}>
                    <Text style={styles.ssnText}>
                      {globalString.recoverPassword.lable_ssn}
                    </Text>
                  </View>

                  <GInputComponent
                    propInputStyle={booSsn ? styles.userIDTextBoxError : styles.userIDTextBox}
                    placeholder={globalString.recoverPassword.placeholder_ssn}
                    onChangeText={this.setSNN}
                    value={ssn}
                  />
                  <Text style={styles.errorMessage}>{errSsn}</Text>
                  {/* <View style={styles.passwordView}>
                <Text style={styles.userIDText}>{globalString.recoverPassword.lable_security}</Text>
              </View> */}
                  <View style={styles.securityCheck} />

                  <View style={styles.refreshSecurityView}>
                    <Text style={styles.refreshSecurity}>
                      {globalString.recoverPassword.refresh_security}
                    </Text>
                  </View>

                  <View style={styles.refreshSecurityView}>
                    <Text style={styles.refreshSecurity}>
                      Play Audio
                    </Text>
                  </View>

                  <View style={styles.passwordView}>
                    <Text style={styles.userIDText}>
                      {globalString.recoverPassword.enter_security}
                    </Text>
                  </View>

                  <GInputComponent
                    propInputStyle={booSecurity ? styles.userIDTextBoxError : styles.userIDTextBox}
                    // placeholder={globalString.recoverPassword.lable_security} 
                    onChangeText={this.setSecurity}
                    value={strSecurity}
                  />
                  <Text style={styles.errorMessage}>{errSecurity}</Text>
                </View>
              )
                : <></>}
                {/* <GButtonComponent
              buttonStyle={styles.cancelButton}
              buttonText={globalString.common.cancel}
              textStyle={styles.cancelButtonText}
              onPress={this.navigationLogin}
            /> */}
              </View>
            </View>

          </ScrollView>        

        </View>
        
        <View style={styles.bottomView}>

          <TouchableOpacity onPress={this.navigationResetOpt} style={styles.touchableStyle}> 
            <Text style={styles.submitButtonStyle} onPress={this.navigationResetOpt}>
              {globalString.common.next}
            </Text>
          </TouchableOpacity>

          {/* <GButtonComponent
                buttonStyle={styles.continueButton}
                buttonText={globalString.common.submit}
                textStyle={styles.continueButtonText}
                onPress={this.navigationResetOpt}
          /> */}

        </View>     
      </View>
    );
  }
}
RecoveryComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object)
};

RecoveryComponent.defaultProps = {
  navigation: {}
};

export default RecoveryComponent;