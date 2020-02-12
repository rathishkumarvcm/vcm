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
      booTemp: false,
      strTemp: '',
      errTemp: '',
      email:'',
      isFirst:true,
    };
    // set true to isLoading if data for this screen yet to be received and wanted to show loader.
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const{initialState}=nextProps;
    const{isFirst}=prevState;
    if(isFirst){
      
      return({
          email : this.protectEmail(initialState.email),
          isFirst:false
        // email:reGex.protectEmail(this.props.initialState.verifiedEmail)
      });
    }
    return null;
}

  // componentDidMount()
  // {
  //   const{initialState}=this.props;
  //   if(initialState && initialState.email){
      
  //     this.setState({
  //         email : this.protectEmail(initialState.email)
  //       // email:reGex.protectEmail(this.props.initialState.verifiedEmail)
  //     });
  //   }
  // }

  setTemp = (text) => {
    this.setState({
      strTemp: text
    });
  }

protectEmail = (userEmail) =>()=> {
    // let part1; let part2;
    const splitted = userEmail.split("@");
    const[part1,part2]=splitted;
    // part1 = splitted[0];
    // part2 = splitted[1];
    return `${part1.substring(0, 3) }*****${part1.substring(part1.length-2,part1.length )}@${ part2}`;
}
  
  

  navigationLogin = () => {
    const{navigation} =this.props;
    navigation.navigate('login');
  }
  
  navigationPasswordTemp = () => 
  {
    const{strTemp}=this.state;
    const{navigation} =this.props;
      const validTemp=strTemp === "";
     this.setState({
       booTemp: validTemp,
       errTemp: validTemp ? globalString.recoverPassword.validPassword : '',
      
   });
      
      if(strTemp !== "")        
         navigation.navigate('passwordReset');
  }

  navigationPasswordOtp = () => {
    const{navigation} =this.props;
    navigation.goBack();
  }

  render() {
    const{navigation} =this.props;
    const{email,errTemp,strOtp,booTemp}=this.state;
    return (
      <View style={styles.container}>
        <GHeaderComponent register
          navigation={navigation}
        />
        <ScrollView style={styles.scrollStyles}>
          <View style={styles.notifOuter}>
            <View style={styles.notifInner}>
  <Text style={styles.notifInnerText}>{globalString.recoverPassword.guestTempPasswordNotify}{email}</Text>
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

          <GInputComponent propInputStyle={booTemp ? styles.userIDTextBoxError : styles.userIDTextBox}
            placeholder={globalString.recoverPassword.passwordPlaceHolder} onChangeText={this.setTemp}
            value={strOtp} secureTextEntry
          />
          <Text style={styles.errorMessage}>{errTemp}</Text>
          
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
