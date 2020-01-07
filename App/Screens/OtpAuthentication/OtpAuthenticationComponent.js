import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GHeaderComponent,GIcon,GRadioButtonComponent} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";

class OtpAuthenticationComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            email:'',
            validationEmail: true
        };
    }

    
       
    componentDidMount(){ 
        if(this.props && this.props.initialState && this.props.initialState.phone){
          this.setState({
            phoneNo : this.protectPhone(this.props.initialState.phone)
          });
        }
        
        if(this.props && this.props.initialState && this.props.initialState.email){
            this.setState({
              email : this.props.initialState.email
            });
          }
    }

    navigateLogin = ()=>this.props.navigation.navigate('login');

    navigatePassword = ()=>{
        console.log("this.state.email",this.state.email);

        Auth.verifyCurrentUserAttribute('email')
        .then(() => {
             console.log('a verification code is sent');
        }).catch((e) => {
             console.log('failed with error', e);
        });
        
        
        this.props.navigation.navigate('otpConfirm');

    }

    protectPhone=(userPhone)=> {
        const x = userPhone.replace(/\D/g, '').match(/(\d{2})(\d{6})(\d{2})/);
        return `${x[1] }******${ x[3]}`;
    }
    
    radioButtonClicked = (index) =>() =>{
        if (index === 'email') {
            this.setState({
                radioEnabled: true,
                selectedOption : 'email'
            });
        }
        else {
            this.setState({
                radioEnabled:false,
                selectedOption : 'phone_number'
            });
        }
    }
    
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={this.props.navigation}
             register
             />
        
            <ScrollView style={{flex:0.85}}>

                <CustomPageWizard 
                    currentPage={1}
                    lastPage
                />

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"1 OTP authentication"}
                </Text>
            </View>

            <View style={styles.otpHeaderSection}>
                <Text style={styles.otpAuthHeader}>
                        {'OTP authentication'}
                </Text> 
            </View>


                <View style={{marginLeft:'4%',marginRight:'4%'}}>
                        <GRadioButtonComponent selected={this.state.radioEnabled} onPress={this.radioButtonClicked('email')}// questionsStyle={{width:'40%',flexWrap:'wrap'}} 
                        questions={`${"Send OTP to email "} ${this.state.email}`}
                        />

                        <GRadioButtonComponent selected={!this.state.radioEnabled} onPress={this.radioButtonClicked('mobile')} questions={`${"Send OTP to mobile "} ${this.state.phoneNo}`} />
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

            <View style={{marginTop:20}}>
                 <View style={{borderBottomWidth:1,borderBottomColor:'#535353'}} />  
            </View>
            
            
            
            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText1}>
                    {"Investments for USAA Members"}
                </Text>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account."}
                </Text> 
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    {"Privacy Policy"}
                </Text>

                <Text style={styles.privacyText}>
                    {"User Agreement"}
                </Text>
            </View>

            <View style={styles.copyRightSection}>
                <Text style={styles.copyRightText}>
                    {"Copyright Victory Capital Management Inc. ©2020"}
                </Text>
            </View>

            </ScrollView>
            </View>
    
        );
    }
}

OtpAuthenticationComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  OtpAuthenticationComponent.defaultProps = {
 
  };

export default OtpAuthenticationComponent;