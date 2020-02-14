import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";
import styles from './styles';
import {GButtonComponent,GInputComponent,GTitleBarComponent} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';

import AppUtils from '../../Utils/AppUtils';

class OtpConfirmComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            code:'',           
        };
    }

    componentDidMount(){
       
    }

    verifyOTP = () => {
        const {navigation} = this.props;
        const {code} = this.state;
        Auth.verifyCurrentUserAttributeSubmit('email',code)
        .then(() => {
            AppUtils.debugLog("email verified");
            navigation.navigate('modifySecurityQues');
        }).catch(e => {
            AppUtils.debugLog('failed with error', e);
        });
    }

    setConfirmOTP = text => {
        this.setState({
            code : text
        });
    }    

    navigateLogin = ()=> {
        const {navigation} = this.props;
        navigation.navigate('login');
    }

    goBack = ()=>{
        const {navigation} = this.props;
        navigation.goBack();
    }

    navigatePassword = ()=> {
        const {navigation} = this.props;
        navigation.navigate('modifySecurityQues');
    }
 
    render(){      
        const {code} = this.state;
      
        return (                     
            <View style={styles.container}>      

                <GTitleBarComponent
                    toolbarTiltle={globalString.loginComponent.signIn}
                    backPress={this.goBack}
                />
                <View style={styles.layoutContainer}>          

                    <View style={styles.cornerTriangle} />

                        <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>      

                            <View style={styles.contentContainer}>

                                <View style={styles.confirmPasswordContainer}>

                                    <Text style={styles.confirmPasswordText}>
                                        {globalString.signIn.confirmOTP}
                                    </Text>                                  
                                    
                                    <Text style={styles.sentOTPText}>
                                        We have sent OTP to your registered Mobile Number 95******89
                                    </Text>    

                                    <Text style={styles.mandatoryText}>
                                        {globalString.recoverPassword.mandatory}
                                    </Text>                                                 
                                   
                                    <Text style={styles.otpOutLine}>
                                        Enter OTP
                                    </Text>                                   

                                    <GInputComponent 
                                        propInputStyle={styles.otpTextBox}
                                        placeholder=""
                                        onChangeText={this.setConfirmOTP}                                       
                                        value={code}
                                        keyboardType="number-pad"                                        
                                    />        

                                    <View style={styles.buttonContainer}>
                                        <GButtonComponent
                                            buttonStyle={styles.confirmButtonStyle}
                                            buttonText={globalString.common.resend}
                                            textStyle={styles.confirmButtonTextStyle}
                                            onPress={this.submitButtonAction}
                                        /> 
                                    </View>
                                    
                                </View>
                            </View>
                        </ScrollView>
                </View>

                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={this.verifyOTP} style={styles.touchableStyle}> 
                        <Text style={styles.submitButtonStyle} onPress={this.verifyOTP}>
                        {globalString.common.verify}
                        </Text>
                    </TouchableOpacity>          
                </View>     
            </View>
    
        );
    }
}

OtpConfirmComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  OtpConfirmComponent.defaultProps = {
    navigation : {}
 
  };

export default OtpConfirmComponent;