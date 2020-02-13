import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent,GFooterSettingsComponent} from '../../CommonComponents';
import { emailRegex } from '../../Constants/RegexConstants';

class RegisterEmailComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            email:'',
            validationEmail: true
        };
    }

    componentDidMount(){
       
    }

    validateEmail = () => {
        const {email} = this.state;
        const validate = emailRegex.test(email);
        this.setState({
            validationEmail : validate
        });
    }

    setEmail = text => {
        this.setState({
            email : text
        });
    }
    
    goBack = () =>{
        const {navigation} = this.props;
        navigation.goBack();
    }

    navigatePassword = ()=>{
        const {email} = this.state;
        const {navigation} = this.props;
        navigation.navigate('registerSelf',{emailID:email});
    }
    
 
    render(){
        const {navigation} = this.props;
        const {email,validationEmail} = this.state;
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={navigation}
             register
             />
        
            <ScrollView style={styles.flexContainer}>

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    Great, let start with your email address.
                </Text>
            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </Text> 
            </View>
             
            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    E-mail       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox}
                // placeholder={"Email"}
                onChangeText={this.setEmail}
                onBlur={this.validateEmail}
                value={email}
                errorFlag={!validationEmail}
                errorText="Enter a valid email."
                maxLength={30}
            />

            <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.goBack}
                    
            />


            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Next"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigatePassword}
                    disabled={email === '' || !validationEmail}
            />

           


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
    </View> */}
            
            <GFooterSettingsComponent />
            
           {/*  <View style={styles.newVictorySection}>
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


RegisterEmailComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  RegisterEmailComponent.defaultProps = {
    navigation :{}
 
  };
export default RegisterEmailComponent;