import React, { Component } from 'react';
import { Text,View,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";
import styles from './styles';
import {GButtonComponent,GHeaderComponent,GInputComponent,GFooterSettingsComponent} from '../../CommonComponents';

class EmailVerificationComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            code:'',
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
        const {navigation} = this.props;
        const {code} = this.state;
        const registerSelfData = navigation.getParam('passwordData');


        Auth.confirmSignUp(registerSelfData.emailID, code, {
            //  Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true    
        }).then(data => { alert("verified OTP");
                          console.log(data);
                          navigation.navigate('login',{emailVerified : true,emailVerifiedData:registerSelfData});
        })
          .catch(err => console.log(err));
    }

    resendOTP = () => {
        const {navigation} = this.props;
        const registerSelfData = navigation.getParam('passwordData');
        
        Auth.resendSignUp(registerSelfData.emailID).then(() => {
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });
    }


    navigatePassword = ()=>{
        const {navigation} = this.props;
        navigation.navigate('login');
    }
    
    goBack = () =>{
        const {navigation} = this.props;
        navigation.goBack();
    }

    validCode = () => {
        const {code} = this.state;
        if(code.length === 6){
            this.setState({
                confirmCode : true
            });
        }
    }
 
    render(){
        const {navigation} = this.props;
        const {code,confirmCode} = this.state;
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={navigation}
             register
             />
        
            <ScrollView style={styles.flexCont}>

           

           
            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    Check your Inbox - Email Verification required
                </Text>
            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        You entered
                <Text style={styles.openInvestmentBold}>
                    {" John.murphy@gmail.com "}
                </Text>
                <Text style={styles.openInvestment}>
                    as the email address that you will use to sign in to your account.
                </Text>
                </Text> 

            </View>

            <View style={styles.newVictorySection2}>
                <Text style={styles.openInvestment1}>
                        To complete your registration, we need to verify that this email address belongs to you.
                </Text>

            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        {"If you do not see the validation email in your inbox, Click "}
                <Text style={styles.openInvestmentlink}>
                    Resend
                </Text>
                <Text style={styles.openInvestment}>
                    {" Verification."}
                </Text>
                </Text>
            </View>

           {} 
            

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Enter the OTP       
                </Text>
            </View>

            <GInputComponent 
            propInputStyle={styles.marginPadd}
            onChangeText={this.setCode}
            onBlur={this.validCode}
            value={code}
            keyboardType="number-pad"
            maxLength={6}
            />

             
           
           {!confirmCode ? (
           <GButtonComponent 
           buttonStyle={styles.backButton}
           buttonText="Resend"
           textStyle={styles.cancelButtonText}
           onPress={this.resendOTP}
           />
         )
:
null} 

           {confirmCode ? (
           <GButtonComponent 
           buttonStyle={styles.signInButton}
           buttonText="Confirm"
           textStyle={styles.signInButtonText}
           onPress={this.verifyOTP}
           />
         )
 : 
 null} 

            <GFooterSettingsComponent />

            {/* <View style={styles.termsofuse}>
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
           </View> */}

            </ScrollView>
            </View>
    
        );
    }
}


EmailVerificationComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  EmailVerificationComponent.defaultProps = {
    navigation:{}
  };
export default EmailVerificationComponent;