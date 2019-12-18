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
import globalStrings from '../../Constants/GlobalStrings';
import * as regEx from '../../Constants/RegexConstants';


class RecoveryOtpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      boo_otp: false,
      str_otp: '',
      style_otp: styles.userIDTextBox,
      err_otp: '',
      phoneNo:'',     
    };
    //set true to isLoading if data for this screen yet to be received and wanted to show loader.    
  }

  protect_phone(user_phone) {
         var x = user_phone.replace(/\D/g, '').match(/(\d{2})(\d{6})(\d{2})/);
         return x[1] + "******" + x[3];
  }

//   static getDerivedStateFromProps(props){
//     //if(props.initialState)
//     if(this.props && this.props.initialState && this.props.initialState.phone){
//       this.setState({
//         phoneNo : this.protect_phone(this.props.initialState.phone)
//       });
//     }
//     else 
//       return null;
//  }
   
isEmpty = (str) => {
  if (str == "" || str == undefined || str == "null" || str == "undefined") {
      return true;
  } else {
      return false;
  }
}

componentDidMount(){ 
  if(this.props && this.props.initialState && this.props.initialState.phone){
    this.setState({
      phoneNo : this.protect_phone(this.props.initialState.phone)
    });
  }
  else 
    return null;
}

  setOtp = (text) => {
    this.setState({
      str_otp: text
    });
  }

  navigationLogin = () => this.props.navigation.navigate('login');

  navigationPasswordNew = () => {
     let validOtp=regEx.allow_Four_Numeric.test(this.state.str_otp);
    this.setState({
      boo_otp: !validOtp,
      err_otp: !validOtp ? globalStrings.recoverPassword.otp_err : '',

    }); 

    if (validOtp)
    {
      let recoveryJson={
        otp:this.state.str_otp,
      };
      console.log(recoveryJson);
      const specialMFAUserType = "" + (this.props && this.props.navigation.getParam('SpecialMFA',''));   
      if(specialMFAUserType=="JointAcc" || specialMFAUserType=="NewUser"){
        this.props.navigation.navigate('registerPassword',{SpecialMFA:specialMFAUserType}); 
      }else if(specialMFAUserType=="UserForm"){
        this.props.navigation.navigate('dashboard',{SpecialMFA:specialMFAUserType});
      }
      else{
        this.props.navigation.navigate('passwordReset');
      }
    }
  }
  navigationPasswordOtp = () => this.props.navigation.goBack();
  resendOtp = ()=>{
    console.log('Resend Otp');    
  }

  render() {

    const specialMFAUserType = "" + (this.props && this.props.navigation.getParam('SpecialMFA',''));   

    return (
      <View style={styles.container}>
        <GHeaderComponent register
          navigation={this.props.navigation}
        />
        <ScrollView style={{ flex: 0.85 }}>
        {
           (specialMFAUserType!="" && !(specialMFAUserType=="JointAcc" || specialMFAUserType=="NewUser" || specialMFAUserType=="UserForm"))?
              <View style={styles.notifOuter}>         
                <View style={styles.notifInner}>
                  <Text style={styles.notifInnerText}>{globalStrings.recoverPassword.otp_notify}</Text>
                </View>
                <View style={styles.notifClose}>
                <Text>{'X'}</Text>
                </View>            
              </View>
          :null
        }
        {
          (specialMFAUserType!="" && (specialMFAUserType=="JointAcc" || specialMFAUserType=="NewUser") && specialMFAUserType!="UserForm")?
          <View style={styles.pagerContainer}>
            <View style={styles.pagerOne}/>    
            <View style={styles.pagerOne}/>    
            <View style={styles.pagerOne}/>    
            <View style={styles.pagerTwo}/>                                
          </View>
          :null
        }
          <View style={styles.signInView}>

            <Text style={styles.retrievePasswordText}>{globalStrings.recoverPassword.otp_label}</Text>

          </View>

          <View style={styles.passwordView}>
            <Text style={styles.optTextMsg}>{globalStrings.recoverPassword.otp_textMsg}{this.state.phoneNo}</Text>
            
          </View>

          <View style={styles.passwordView}>

            <Text style={styles.enterOpt}>{globalStrings.recoverPassword.otp_label}</Text>

          </View>

          <GInputComponent propInputStyle={this.state.boo_otp ? styles.userIDTextBoxError : styles.userIDTextBox}
            onChangeText={this.setOtp}
            value={this.state.str_otp} maxLength={globalStrings.maxLength.otp} secureTextEntry keyboardType={'numeric'}
          />
          <Text style={styles.errorMessage}>{this.state.err_otp}</Text>

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
            buttonText={(specialMFAUserType=="JointAcc" || specialMFAUserType=="NewUser" || specialMFAUserType=="UserForm")  ? globalStrings.common.next : globalStrings.common.submit}
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

};

export default RecoveryOtpComponent;
