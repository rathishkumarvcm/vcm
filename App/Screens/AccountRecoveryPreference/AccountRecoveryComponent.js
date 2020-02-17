import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity,StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GTitleBarComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import { CustomRadio } from '../../AppComponents';

class AccountRecoveryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioEnabled : false
     
    };
    // set true to isLoading if data for this screen yet to be received and wanted to show loader.
  }





  navigationLogin = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  radioButtonClicked = (index) => () => {
    if (index === 'email') {
        this.setState({
            radioEnabled: false,
        });
    }
    else {
        this.setState({
            radioEnabled: true,
        });
    }
}

  render() {
    const { radioEnabled,/* email, phoneNo  */ } = this.state;
 
    return (
      <View style={styles.container}>

          <StatusBar backgroundColor="#194C7D" barStyle="light-content" translucent />

            <GTitleBarComponent
              toolbarTiltle="Account Recovery"
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
                Last update - 21/05/2018 1:22 PM
              </Text>


              <Text style={styles.vcmIdText}>
              Set your account recovery preference from the below options
              </Text>

              {/* <GInputComponent
                propInputStyle={booOnlineId ? styles.userIDTextBoxError : styles.userIDTextBox}
                placeholder={globalString.recoverPassword.lable_onlineId}
                onChangeText={this.setOnlineId}
                value={onlineId}
              />
              <Text style={styles.errorMessage}>{errOnlineId}</Text>
             */}

             
              </View>

              <View style={styles.lineBorder} />   

<View style={styles.radioButtonStyle}>                                  
    <CustomRadio                                   
        size={30}
        itemBottom={10}
        itemTop={10}
        outerCicleColor="#DEDEDF"
        innerCicleColor="#49494A"
        labelStyle={styles.lblRadioBtnTxt}
        label="Email ID ke******@gmail.com"
        selected={!radioEnabled}
        onPress={this.radioButtonClicked("email")}
    />      
</View> 
<View style={styles.lineBorderItems} />

<View style={styles.radioButtonStyle}>             
    <CustomRadio                                   
        size={30}
        itemBottom={10}
        itemTop={10}
        outerCicleColor="#DEDEDF"
        innerCicleColor="#49494A"
        labelStyle={styles.lblRadioBtnTxt}
        label="Mobile number 53****367"                       
        selected={radioEnabled}
        onPress={this.radioButtonClicked("mobile")}
    />     
</View>                                                                           
 <View style={styles.lineBorderItems} />
            </View>

          </ScrollView>        

        </View>
        
        <View style={styles.bottomView}>

          <TouchableOpacity onPress={this.navigationResetOpt} style={styles.touchableStyle}> 
            <Text style={styles.submitButtonStyle} onPress={this.navigationResetOpt}>
              {globalString.common.submit}
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
AccountRecoveryComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object)
};

AccountRecoveryComponent.defaultProps = {
  navigation: {}
};

export default AccountRecoveryComponent;