import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent,GIcon} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import { scaledHeight} from '../../Utils/Resolution';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";

class OtpConfirmComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            code:'',
            validationEmail: true
        };
    }

    componentDidMount(){
       
    }

    verifyOTP = () => {
        Auth.verifyCurrentUserAttributeSubmit('email', this.state.code)
        .then(() => {
            console.log("email verified");
            this.props.navigation.navigate('modifySecurityQues');
        }).catch(e => {
            console.log('failed with error', e);
        });
    }

    setEmail = text => {
        this.setState({
            code : text
        });
    }

    

    navigateLogin = ()=> this.props.navigation.navigate('login');

    goBack = ()=>this.props.navigation.goBack();

    navigatePassword = ()=> this.props.navigation.navigate('modifySecurityQues');
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={this.props.navigation}
             register
             />
        
            <ScrollView style={{flex:0.85}}>
            

                <CustomPageWizard 
                    currentPage={2}
                    lastPage
                />

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"2 Confirm OTP"}
                </Text>
            </View>

            <View style={styles.otpHeaderSection}>
                <Text style={styles.otpAuthHeader}>
                        {'Confirm OTP'}
                </Text> 
            </View>

            <View style={{marginLeft:'4%',marginRight:'4%',marginBottom:'2%',height:scaledHeight(30)}}>
                <Text style={{color:'#333333DE',fontSize:scaledHeight(16),opacity:100}}>
                    {"Enter OTP"}
                </Text>
            </View>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox}
                    placeholder={""}
                    onChangeText={this.setEmail}
                    //onBlur={this.validateEmail}
                    value={this.state.code}
                />

                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#2C8DBF',textDecorationLine:'underline',fontSize:scaledHeight(16)}}>
                        {"Resend OTP"}
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

OtpConfirmComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  OtpConfirmComponent.defaultProps = {
 
  };

export default OtpConfirmComponent;