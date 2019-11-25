import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GHeaderComponent,GIcon,GRadioButtonComponent} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import PropTypes from 'prop-types';

class OtpAuthenticationComponent extends Component {
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

    navigatePassword = ()=>this.props.navigation.navigate('registerPassword');
    
 
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
                        <GRadioButtonComponent selected //questionsStyle={{width:'40%',flexWrap:'wrap'}} 
                        questions={"Send OTP to email ra***@gmail.com"}
                        />

                        <GRadioButtonComponent questions={"Send OTP to mobile  87*****34"} />
                </View>
             

                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigatePassword}
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