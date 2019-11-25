import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent,GIcon} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import { scaledHeight} from '../../Utils/Resolution';
import PropTypes from 'prop-types';

class OtpConfirmComponent extends Component {
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

    navigatePassword = ()=> this.props.navigation.navigate('registerPassword');
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={this.props.navigation}
             register
             />
        
            <ScrollView style={{flex:0.85}}>
                <TouchableOpacity onPress={this.goBack} style={styles.goBack}>
                        <GIcon 
                            name="left"
                            type="antdesign"
                            size={25}
                            color="black"
                        />
                </TouchableOpacity>

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
                    onBlur={this.validateEmail}
                    //value={this.state.email}
                />

                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#0000FF',textDecorationLine:'underline',fontSize:scaledHeight(16)}}>
                        {"Resend OTP"}
                    </Text>
                </View>
                
             
                
                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Back"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigatePassword}
                />
                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigatePassword}
                />

            <GButtonComponent 
                    buttonStyle={styles.sendOTPButton}
                    buttonText="Confirm"
                    textStyle={styles.signInButtonText}
                    oonPress={this.navigatePassword}
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