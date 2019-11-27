import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GHeaderComponent,GIcon} from '../../CommonComponents';
import PropTypes from 'prop-types';

class EmailVerificationComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            email:'',
            validationEmail: true
        };
    }

    componentDidMount(){
       
    }

    navigatePassword = ()=>this.props.navigation.navigate('login');
    
    goBack = () =>{this.props.navigation.goBack()}
 
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
             
           
            <GButtonComponent 
                    buttonStyle={styles.backButton}
                    buttonText="Resend"
                    textStyle={styles.cancelButtonText}
                    onPress={this.goBack}
                   // disabled={this.state.email === '' || !this.state.validationEmail}
            />

            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Confirm"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigatePassword}
                   // disabled={this.state.email === '' || !this.state.validationEmail}
            />


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