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




class RecoverTempComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      boo_temp: false,
      str_temp: '',
      err_temp: '',
      email:''
    };
    // set true to isLoading if data for this screen yet to be received and wanted to show loader.
  }

  setTemp = (text) => {
    this.setState({
      str_temp: text
    });
  }

protect_email(user_email) {
    let splitted; let part1; let part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    // avg = part1.length / 2;
    // part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return `${part1.substring(0, 3) }*****${part1.substring(part1.length-2,part1.length )}@${ part2}`;
}
  
  componentDidMount()
  {
    
    if(this.props && this.props.initialState && this.props.initialState.email){
      
      this.setState({
          email : this.protect_email(this.props.initialState.email)
        // email:reGex.protect_email(this.props.initialState.verifiedEmail)
      });
    }
  }

  navigationLogin = () => this.props.navigation.navigate('login');
  
  navigationPasswordTemp = () => 
  {
      const valid_temp=this.state.str_temp === "";
     this.setState({
       boo_temp: valid_temp,
       err_temp: valid_temp ? globalString.recoverPassword.validPassword : '',
      
   });
      
      if(this.state.str_temp !== "")        
         this.props.navigation.navigate('passwordReset');
  }

  navigationPasswordOtp = () => this.props.navigation.goBack();

  render() {
    return (
      <View style={styles.container}>
        <GHeaderComponent register
          navigation={this.props.navigation}
        />
        <ScrollView style={{ flex: 0.85 }}>
          <View style={styles.notifOuter}>
            <View style={styles.notifInner}>
  <Text style={styles.notifInnerText}>{globalString.recoverPassword.guestTempPasswordNotify}{this.state.email}</Text>
            </View>
            <View style={styles.notifClose}>
            <Text>X</Text>
            </View>
          </View>
          <View style={styles.signInView}>
           
              <Text style={styles.retrievePasswordText}>{globalString.recoverPassword.guestTempPasswordTitle}</Text>
            
          </View>
         
          <View style={styles.passwordView}>
            
              <Text style={styles.enterOpt}>{globalString.recoverPassword.guestTempPasswordLabel}</Text>
            
          </View>

          <GInputComponent propInputStyle={this.state.boo_temp ? styles.userIDTextBoxError : styles.userIDTextBox}
            placeholder={globalString.recoverPassword.passwordPlaceHolder} onChangeText={this.setTemp}
            value={this.state.str_otp} secureTextEntry
          />
          <Text style={styles.errorMessage}>{this.state.err_temp}</Text>
          
          <GButtonComponent
            buttonStyle={styles.cancelButton}
            buttonText={globalString.common.back}
            textStyle={styles.cancelButtonText}
            onPress={this.navigationPasswordOtp}
          />
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
            onPress={this.navigationPasswordTemp}
          />
          <GFooterSettingsComponent />
        </ScrollView>
      </View>
    );
  }
}
RecoverTempComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  initialState: PropTypes.instanceOf(Object).isRequired,
};

RecoverTempComponent.defaultProps = {
  navigation:{},
};

export default RecoverTempComponent;
