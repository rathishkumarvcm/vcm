import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GIcon,GHeaderComponent} from '../../CommonComponents';
import { scaledHeight} from '../../Utils/Resolution';
import PropTypes from 'prop-types';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

class RegisterPasswordComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            enableBiometric:false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            validationPassword : true,
            password : ''
        };
    }

    componentDidMount(){
       
    }

    goBack = () =>{
        this.props.navigation.goBack();
    }

    navigateSelf = ()=>{this.props.navigation.navigate('emailVerify');}

    validatePassword = () => {
        const validate = passwordRegex.test(this.state.password);
        this.setState({
            validationPassword : validate
        });
    }

    setPassword = text => {
        this.setState({
            password : text
        });
    }
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
            <GHeaderComponent 
            navigation={this.props.navigation}
            register
            />

            <ScrollView style={{flex:0.85}}>

           {/* <View style={styles.stepsOuter}>
                <View style={styles.stepsInner} />
        </View>*/}

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"Now,let's choose a password."}
                </Text>
            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019."}
                </Text> 
            </View>


            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Password"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={"Password"}
                onChangeText={this.setPassword}
                secureTextEntry
                onBlur={this.validatePassword}
                errorFlag={!this.state.validationPassword}
                errorText={"Enter a valid password."}
            />

           {/*} <View style={{flexDirection:'row',marginLeft:'4%',marginRight:'4%',width:'92%',height: scaledHeight(5)}}>
                <View style={{width:'30%',marginRight:'1%',height: scaledHeight(5),backgroundColor: "#DB5A28"}} />

                <View style={{width:'30%',marginRight:'1%',height: scaledHeight(5),backgroundColor: "#E6E6E6"}} />
                <View style={{width:'30%',height: scaledHeight(5),backgroundColor: "#E6E6E6"}} />

            </View>
            <Text style={{paddingLeft:'4%',paddingRight:'4%'}}>
                {"Weak"}
    </Text>*/}


            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Continue"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigateSelf}
                    disabled={this.state.password === '' || !this.state.validationPassword}
            />
            
            <TouchableOpacity onPress={this.goBack} style={styles.goBack}>
            <GIcon 
                        name="left"
                        type="antdesign"
                        size={25}
                        color="black"
            />
                <Text style={styles.forgotLineTextColor}>
                    {"Back"}
                </Text>
            </TouchableOpacity>

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

RegisterPasswordComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  RegisterPasswordComponent.defaultProps = {
 
  };

export default RegisterPasswordComponent;