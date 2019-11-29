import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GHeaderComponent,GInputComponent} from '../../CommonComponents';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";

class EmailVerificationComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            code:'',
            validationEmail: true,
            name : 'rathish.kumar2@cognizant.com',
            confirmCode : false
        };
    }

    componentDidMount(){
       
    }

    setCode = text => {
        this.setState({
            code : text
        });
    }

    verifyOTP = () => {
        let username = this.state.name;
        let code = this.state.code; 
        let registerSelfData = this.props.navigation.getParam('passwordData');


        Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true    
        }).then(data => { alert("verified OTP");
        
        
                          console.log(data);
                          this.props.navigation.navigate('login',{emailVerified : true,emailVerifiedData:registerSelfData})
        })
          .catch(err => console.log(err));
    }

    resendOTP = () => {
        let username = this.state.name;

        Auth.resendSignUp(username).then(() => {
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });
    }


    navigatePassword = ()=>this.props.navigation.navigate('login');
    
    goBack = () =>{this.props.navigation.goBack()}

    validCode = () => {
        if(this.state.code.length === 6){
            this.setState({
                confirmCode : true
            })
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

           

           
            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"Check your Inbox - Email Verification required"}
                </Text>
            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        {"You entered John.murphy@gmail.com as the email address that you will use to sign in to your account."}
                </Text> 
                <Text style={styles.openInvestment1}>
                        {"To complete your registration, we need to verify that this email address belongs to you."}
                </Text> 

                <Text style={styles.openInvestment1}>
                        {"If you do not see the validation email in your inbox, Click Resend Verification."}
                </Text> 
            </View>

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Enter the OTP"}       
                </Text>
            </View>

            <GInputComponent 
            propInputStyle={{marginLeft:'4%',marginRight:'4%'}}
            onChangeText={this.setCode}
            onBlur={this.validCode}
            value={this.state.code}
            />

             
           
           {!this.state.confirmCode ? 
           <GButtonComponent 
           buttonStyle={styles.backButton}
           buttonText="Resend"
           textStyle={styles.cancelButtonText}
           onPress={this.resendOTP}
          // disabled={this.state.email === '' || !this.state.validationEmail}
   />
:
null} 

           {this.state.confirmCode ? 
           <GButtonComponent 
           buttonStyle={styles.signInButton}
           buttonText="Confirm"
           textStyle={styles.signInButtonText}
           onPress={this.verifyOTP}
          // disabled={this.state.email === '' || !this.state.validationEmail}
   />
 : 
 null} 


            <View style={styles.termsofuse}>
                <Text style={styles.termsofuseText}>
                    {"Need Assistance?  "}
                   
                <Text style={styles.forgotLineTextColor}>
                {"Get Help"}
                </Text>
                </Text>
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',marginTop:20}}>
                 <View style={{borderBottomWidth:1,borderBottomColor:'#56565A'}} />  
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


EmailVerificationComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  EmailVerificationComponent.defaultProps = {
 
  };
export default EmailVerificationComponent;