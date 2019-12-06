import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent} from '../../CommonComponents';
import PropTypes from 'prop-types';


const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

class RegisterEmailComponent extends Component {
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

    validateEmail = () => {
        let validate = emailRegex.test(this.state.email);
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
        this.props.navigation.goBack();
    }

    navigatePassword = ()=>this.props.navigation.navigate('registerSelf',{emailID:this.state.email});
    
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={this.props.navigation}
             register
             />
        
            <ScrollView style={{flex:0.85}}>

            {/*<View style={styles.stepsOuter}>
                <View style={styles.stepsInner} />
        </View> */}

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"Great, let's start with your email Address."}
                </Text>
            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019."}
                </Text> 
            </View>
             
            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"E-mail"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox}
                placeholder={"Email"}
                onChangeText={this.setEmail}
                onBlur={this.validateEmail}
                value={this.state.email}
                errorFlag={!this.state.validationEmail}
                errorText={"Enter a valid email."}
            />


            {/*<GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Back"
                    textStyle={styles.cancelButtonText}
                    onPress={this.goBack}
                    
            />*/}

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
                    disabled={this.state.email === '' || !this.state.validationEmail}
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


RegisterEmailComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  RegisterEmailComponent.defaultProps = {
 
  };
export default RegisterEmailComponent;