import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GHeaderComponent,GIcon} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import PropTypes from 'prop-types';


class OtpSeucrityConfirmComponent extends Component {
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
                    currentPage={4}
                    lastPage
                />

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"3 Setup Security Questions"}
                </Text>
            </View>

            <View style={styles.otpHeaderSection}>
                <Text style={styles.otpAuthHeader}>
                        {'Confirm Security Answers'}
                </Text> 
            </View>

            <View style={styles.securityList}>
                <View style={styles.securityListItem}>
                    <Text style={styles.securityListTitle}>
                        {"Security Question1"}
                    </Text>
                    <Text style={styles.securityListQuestion}>
                        {"Which city you were born?"}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                        {"CA"}
                    </Text>
                </View>

                <View style={styles.securityListItem}>
                    <Text style={styles.securityListTitle}>
                        {"Security Question2"}
                    </Text>
                    <Text style={styles.securityListQuestion}>
                        {"What is the name of the school?"}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                        {"AEM"}
                    </Text>
                </View>


                <View style={styles.securityListItem}>
                    <Text style={styles.securityListTitle}>
                        {"Security Question3"}
                    </Text>
                    <Text style={styles.securityListQuestion}>
                        {"Which city you were born?"}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                        {"CA"}
                    </Text>
                </View>

                <View style={styles.securityListItem2}>
                    <Text style={styles.securityListQuestion}>
                        {"Primary Email"}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                        {"CA@gmail.com"}
                    </Text>
                </View>


                <View style={styles.securityListItem1}>
                    <Text style={styles.securityListQuestion}>
                        {"Document Delivery preferences"}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                        {"Deliver all my documents online at vcm.com"}
                    </Text>
                </View>

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
                    buttonText="Continue"
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

OtpSeucrityConfirmComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  OtpSeucrityConfirmComponent.defaultProps = {
 
  };

export default OtpSeucrityConfirmComponent;