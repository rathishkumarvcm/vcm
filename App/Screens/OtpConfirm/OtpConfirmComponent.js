import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";
import styles from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import AppUtils from '../../Utils/AppUtils';

class OtpConfirmComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            code:''
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

    setEmail = text => {
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
        const {navigation} = this.props;
        const {code} = this.state;
      
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={navigation}
             register
             />
        
            <ScrollView style={styles.flexContainer}>
            

                <CustomPageWizard 
                    currentPage={2}
                    lastPage
                />

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    2 Confirm OTP
                </Text>
            </View>

            <View style={styles.otpHeaderSection}>
                <Text style={styles.otpAuthHeader}>
                        Confirm OTP
                </Text> 
            </View>

            <View style={styles.optContainer}>
                <Text style={styles.otpOutLine}>
                    Enter OTP
                </Text>
            </View>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox}
                    placeholder=""
                    onChangeText={this.setEmail}
                    // onBlur={this.validateEmail}
                    value={code}
                />

                <TouchableOpacity style={styles.resendOtp}>
                    <Text style={styles.resendOtpNewLine}>
                        Resend OTP
                    </Text>
                </TouchableOpacity>
                
             
                
                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Back"
                    textStyle={styles.cancelButtonText}
                    onPress={this.goBack}
                />
                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigateLogin}
                />

            <GButtonComponent 
                    buttonStyle={styles.sendOTPButton}
                    buttonText="Confirm"
                    textStyle={styles.signInButtonText}
                    onPress={this.verifyOTP}
            />

            <View style={styles.marginTwenty}>
                 <View style={styles.usaaBorderLine} />  
            </View>
            
            
            
            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText1}>
                    Investments for USAA Members
                </Text>
                <Text style={styles.openInvestment}>
                        For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.
                </Text> 
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    Privacy Policy
                </Text>

                <Text style={styles.privacyText}>
                    User Agreement
                </Text>
            </View>

            <View style={styles.copyRightSection}>
                <Text style={styles.copyRightText}>
                    Copyright Victory Capital Management Inc. ©2020
                </Text>
            </View>

            </ScrollView>
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