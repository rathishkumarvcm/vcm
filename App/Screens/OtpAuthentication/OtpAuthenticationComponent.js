import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";
import styles from './styles';
import {GButtonComponent,GHeaderComponent,GRadioButtonComponent} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';

class OtpAuthenticationComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            email:''
        };
    }

    
       
   /* componentDidMount(){ 
        const {initialState} = this.props;
        if(initialState && initialState.phone){
          this.setState({
            phoneNo : this.protectPhone(initialState.phone)
          });
        }
        
        if(initialState && initialState.email){
            this.setState({
              email : initialState.email
            });
          }
    } */

    navigateLogin = ()=> { 
        const {navigation} = this.props;
        navigation.navigate('login');
    }

    navigatePassword = ()=>{
        const {navigation} = this.props;

        Auth.verifyCurrentUserAttribute('email')
        .then(() => {
        }).catch(() => {
        });
        
        
        navigation.navigate('otpConfirm');

    }

    protectPhone=(userPhone)=> {
        const x = userPhone.replace(/\D/g, '').match(/(\d{2})(\d{6})(\d{2})/);
        return `${x[1] }******${ x[3]}`;
    }
    
    radioButtonClicked = (index) =>() =>{
        if (index === 'email') {
            this.setState({
                radioEnabled: true,
            });
        }
        else {
            this.setState({
                radioEnabled:false,
            });
        }
    }
    
 
    render(){

        const {navigation} = this.props;
        const {radioEnabled,email,phoneNo} = this.state;
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={navigation}
             register
             />
        
            <ScrollView style={styles.flexContainer}>

                <CustomPageWizard 
                    currentPage={1}
                    lastPage
                />

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    1 OTP authentication
                </Text>
            </View>

            <View style={styles.otpHeaderSection}>
                <Text style={styles.otpAuthHeader}>
                        OTP authentication
                </Text> 
            </View>


                <View style={styles.defaultPadding}>
                        <GRadioButtonComponent selected={radioEnabled} onPress={this.radioButtonClicked('email')}// questionsStyle={{width:'40%',flexWrap:'wrap'}} 
                        questions={`${"Send OTP to email "} ${email}`}
                        />

                        <GRadioButtonComponent selected={!radioEnabled} onPress={this.radioButtonClicked('mobile')} questions={`${"Send OTP to mobile "} ${phoneNo}`} />
                </View>
             

                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigateLogin}
                />

            <GButtonComponent 
                    buttonStyle={styles.sendOTPButton}
                    buttonText="Send OTP"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigatePassword}
            />

            <View style={styles.marginTewnty}>
                 <View style={styles.usaabottomBorder} />  
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

OtpAuthenticationComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object),
   // initialState : PropTypes.instanceOf(Object)
  };
  
  OtpAuthenticationComponent.defaultProps = {
    navigation : {},
    // initialState : {}
  };

export default OtpAuthenticationComponent;