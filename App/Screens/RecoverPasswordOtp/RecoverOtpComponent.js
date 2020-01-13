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
import globalStrings from '../../Constants/GlobalStrings';
import * as regEx from '../../Constants/RegexConstants';
import AppUtils from '../../Utils/AppUtils';


class RecoveryOtpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      boolOtp: false,
      otpString: '',      
      errorOtp: '',
      phoneNo:'',     
    };
    //  set true to isLoading if data for this screen yet to be received and wanted to show loader.    
  }

  

//    static getDerivedStateFromProps(props){
//      // if(props.initialState)
//      if(this.props && this.props.initialState && this.props.initialState.phone){
//        this.setState({
//          phoneNo : this.protectPhone(this.props.initialState.phone)
//        });
//      }
//      else 
//        return null;
//   } 

componentDidMount(){ 
  const {initialState} = this.props;
  if(initialState &&initialState.phone){
    this.setState({
      phoneNo : this.protectPhone(initialState.phone)
    });
  }  
} 

isEmpty = (str) => {
  if (str === "" || str === undefined || str === "null" || str === "undefined") {
      return true;
  }
  return false;  
}

navigationLogin = () =>{ 
  const { navigation } = this.props;
  
  const specialMFAUserType = (navigation.getParam('SpecialMFA',''));   
  if(specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm"){
      navigation.push('verifySSN',{SpecialMFA:specialMFAUserType}); 
  }else 
    navigation.navigate('login');
}

  navigationPasswordNew = () => {
    const { otpString } = this.state;
    const validOtp=regEx.allow_Four_Numeric.test(otpString);
    this.setState({
      boolOtp: !validOtp,
      errorOtp: !validOtp ? globalStrings.recoverPassword.otp_err : '',

    }); 

    if (validOtp)
    {      
      const recoveryJson={
        otp:otpString,
      };
      AppUtils.debugLog(recoveryJson);
      const { navigation } = this.props;
      const specialMFAUserType = (navigation.getParam('SpecialMFA',''));   
      if(specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser"){
          navigation.push('registerPassword',{SpecialMFA:specialMFAUserType}); 
      }else if(specialMFAUserType==="UserForm"){
          navigation.push('dashboard',{SpecialMFA:specialMFAUserType});
      }
      else{
        navigation.navigate('passwordReset');
      }
    }
  }

  navigationPasswordOtp = () =>{ 
    const { navigation } = this.props;
    navigation.goBack();
  }

  resendOtp = ()=>{
    AppUtils.debugLog('Resend Otp');    
  }

  setOtp = (text) => {
    this.setState({
      otpString: text
    });
  }

  protectPhone=(userPhone)=> {
    const x = userPhone.replace(/\D/g, '').match(/(\d{2})(\d{6})(\d{2})/);
    return `${x[1] }******${ x[3]}`;
  }  

  render() {
    const { navigation } = this.props;
    const { boolOtp,otpString,errorOtp,phoneNo } = this.state;
    const specialMFAUserType = (navigation.getParam('SpecialMFA',''));   

    return (
      <View style={styles.container}>
        <GHeaderComponent register
          navigation={navigation}
        />
        <ScrollView style={styles.scrollViewFlex}>
        {
           (specialMFAUserType!=="" && !(specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm"))? (
              <View style={styles.notifOuter}>         
                <View style={styles.notifInner}>
                  <Text style={styles.notifInnerText}>{globalStrings.recoverPassword.otp_notify}</Text>
                </View>
                <View style={styles.notifClose}>
                <Text>X</Text>
                </View>            
              </View>
            )
          :null
        }
        {
          (specialMFAUserType!=="" && (specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser") && specialMFAUserType!=="UserForm")? (
          <View style={styles.pagerContainer}>
            <View style={styles.pagerOne} />    
            <View style={styles.pagerOne} />    
            <View style={styles.pagerOne} />    
            <View style={styles.pagerTwo} />                                
          </View>
        )
          :null
        }
          <View style={styles.signInView}>

            <Text style={styles.retrievePasswordText}>{globalStrings.recoverPassword.otp_label}</Text>

          </View>

          <View style={styles.passwordView}>
            <Text style={styles.optTextMsg}>{globalStrings.recoverPassword.otp_textMsg}{phoneNo}</Text>
            
          </View>

          <View style={styles.passwordView}>

            <Text style={styles.enterOpt}>{globalStrings.recoverPassword.otp_label}</Text>

          </View>

          <GInputComponent propInputStyle={boolOtp ? styles.userIDTextBoxError : styles.userIDTextBox}
            onChangeText={this.setOtp}
            value={otpString} maxLength={globalStrings.maxLength.otp} secureTextEntry keyboardType="numeric"
          />
          <Text style={styles.errorMessage}>{errorOtp}</Text>

          <View style={styles.refreshOtpView}>
            <Text style={styles.refreshOtp} onPress={this.resendOtp}>{globalStrings.recoverPassword.otp_reset}</Text>
          </View>

          <GButtonComponent
            buttonStyle={styles.cancelButton}
            buttonText={globalStrings.common.back}
            textStyle={styles.cancelButtonText}
            onPress={this.navigationPasswordOtp}
          />
          <GButtonComponent
            buttonStyle={styles.cancelButton}
            buttonText={globalStrings.common.cancel}
            textStyle={styles.cancelButtonText}
            onPress={this.navigationLogin}
          />
          <GButtonComponent
            buttonStyle={styles.continueButton}
            buttonText={(specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm") ? globalStrings.common.next : globalStrings.common.submit}
            textStyle={styles.continueButtonText}
            onPress={this.navigationPasswordNew}
          />
          <GFooterSettingsComponent />
        </ScrollView>
      </View>
    );
  }
}
RecoveryOtpComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  initialState: PropTypes.instanceOf(Object).isRequired,
};

RecoveryOtpComponent.defaultProps = {
  navigation:{}
};

export default RecoveryOtpComponent;
