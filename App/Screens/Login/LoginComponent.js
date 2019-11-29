/* global require */
import React, { Component } from 'react';
import { Text,View,Image,ScrollView,Linking,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GBiometricAuthentication,GHeaderComponent,GFooterComponent, GLoadingSpinner} from '../../CommonComponents';
import TouchID from 'react-native-touch-id';
import PropTypes from 'prop-types';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import * as reGex from '../../Constants/RegexConstants';
import Amplify from 'aws-amplify';
import { Auth } from "aws-amplify";

const awsmobile = {
    "aws_project_region": "us-east-2",
    "aws_cognito_identity_pool_id": "us-east-2:47948e7d-eb40-4622-918a-a5682bb6796f",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_AFKupYHWn",
    "aws_user_pools_web_client_id": "2vl5oiufeh9c1dpfcm8qmj7v1i",
    "oauth": {}
};

//Amplify.configure(awsmobile);

const testawsMobile = {
    "aws_project_region": "us-east-2",
   // "aws_cognito_identity_pool_id": "us-east-2:47948e7d-eb40-4622-918a-a5682bb6796f",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_TOS87x5Rt",
    "aws_user_pools_web_client_id": "3a3rpdjb4gi1iqu1g6i2blk37c",
    "oauth": {}
}


Amplify.configure(testawsMobile);

class LoginComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            enableBiometric:false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            validationEmail : true,
            validationPassword : true,
           // password: '',
            email:'',
            registeredOnlineID: '',
            switchOn : true,
            switchOff : false,
            registeredSuccess : false,
            name : 'rathish.kumar2@cognizant.com',
            password : '',
            phone : '+918754499334',
            //email : 'rathish.kumar2@cognizant.com',
        };
    }





    componentDidMount(){
        console.log("componentDidMount")
        TouchID.isSupported()
        .then(biometryType => {
            if (biometryType === 'TouchID') {
                this.setState({
                    touchIdEnrolled: true,
                    faceIdEnrolled : false
                }); 
                // Touch ID is supported on iOS
              } 
            else if (biometryType === 'FaceID') {
               this.setState({
                    faceIdEnrolled: true,
                    touchIdEnrolled: false
                });
                // Face ID is supported on iOS
              } 
              else if (biometryType === true) {
                this.setState({
                    touchIdEnrolled: true,
                    faceIdEnrolled : false
                }); 
                // Touch ID is supported on Android
              }
        }).catch(error => {
            this.setState({
                touchIdEnrolled: false,
                faceIdEnrolled: false
            }); 
        });

        if(this.props && this.props.initialState && this.props.initialState.verifiedEmail){
            this.setState({
                email : this.props.initialState.verifiedEmail
            })
        }
    }

    componentDidUpdate(){
        let emailVerify = this.props.navigation.getParam('emailVerified')
        let onlineID = this.props.navigation.getParam('emailVerifiedData');
        if(emailVerify !== undefined && !this.state.registeredSuccess){
            this.setState({
                registeredSuccess : true,
                registeredOnlineID : onlineID.emailID
            });
        }
        console.log('componentDidUpdate',emailVerify);
       
        let validEmail = 'vcm.com';
        let validPassword = 'Vcm123';
        let test = validEmail.localeCompare(this.state.email);
        let test1 = validPassword.localeCompare(this.state.password);
      
      if(!test && !test1){
        RNSecureKeyStore.set("EmailAddress",validEmail, {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
      .then((res) => {
          console.log("stored",res);
      }, (err) => {
          console.log(err);
      });

        if(this.props && this.props.loginState && this.props.loginState.emailCheck && this.props.loginState.data && this.props.loginState.data.response && this.props.loginState.data.response.status === 200){
            this.navigateDashboard();
        }       
    }
}

    enableBiometricMethod = () => {
        this.setState({
            enableBiometric : true
        });
    }

    registerFaceTouchID = () => {
        Linking.openURL('app-settings:');
    }

    onAuthenticate = result => {
        console.log(result);
        if(result){
            alert("Authentication Successfull");
            this.setState({
                enableBiometric : false
            });
        }
        else{
            alert("Aunthentication Failed");
            this.setState({
                enableBiometric : false
            });
        }
        //this.setState({isLoading:result,enableBiometric:false});
    }

    validateEmail = () => {
        let validate = reGex.emailRegex.test(this.state.email);
        this.setState({
            validationEmail : validate
        });
    }

    setEmail = text => {
        this.setState({
            email : text
        });
    }

    validatePassword = () => {
        const validate = reGex.passwordRegex.test(this.state.password);
        this.setState({
            validationPassword : validate
        });
    }

    setPassword = text => {
        this.setState({
            password : text
        });
    }

    signIn = () => {
        console.log("test")
        let username = this.state.name;
        let password = this.state.password;
        let email = this.state.email;
        let phone_number = this.state.phone;
        Auth.signIn({
            username,
            password,
            email,
            //phone_number
        }).then(data => {
            console.log("Data",data);
            alert("Signed In Successfully.")
            this.props.navigation.navigate('dashboard');
        }).catch(error => {
            alert("Username and Password Incorrect.")
            console.log(error);
        });
    }


    callSignIn = () => {
        const payload = {
            "companyNumber": 591,
            "fundNumber": 30,
            "accountNumber": 30900780183,
            email: this.state.email,
            password: this.state.password
          };

        this.props.signInAction(payload);
    }


    navigateEmail = ()=>this.props.navigation.navigate('registerEmail');

    navigateDashboard = ()=>this.props.navigation.navigate('dashboard');

    navigateCommonUI = ()=>this.props.navigation.navigate('Common');

    //Recover password navigation
    navigationResetPassword=()=>this.props.navigation.navigate('passwordRecovery')

    navigationRetrieveOnlineID = () =>this.props.navigation.navigate("retrieveOnlineId")

    switchOn = () => {
        this.setState({
            switchOn : true,
            switchOff : false
        });
    }

    switchOff = () => {
        this.setState({
            switchOn : false,
            switchOff : true
        });
    }

  

    render(){
        console.log("this.props----",this.props)


        return (
           
            <>
            {this.state.enableBiometric && 
                <GBiometricAuthentication onAuthenticate={this.onAuthenticate} enableBiometric={this.state.enableBiometric} />
            }
            <View style={styles.container}>

            {
                    this.props.loginState && this.props.loginState.isloading && <GLoadingSpinner />
                }

             <GHeaderComponent register
             onPress={this.navigateEmail}
             
             />
            
            
        <ScrollView style={{flex:0.85}}>
            {this.state.registeredSuccess ? 
            <View style={{marginLeft:'4%',marginRight:'4%'}}>
            <Text> {"Your Online ID successfully created"}</Text>
            </View>
            :
            null
            }
            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"Sign In"}
                </Text>
            </View>
            <View style={styles.signInUser}>
                <Text style={styles.userIDText}>
                    {"Online ID"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={"E-mail"}
                onChangeText={this.setEmail}
                //onBlur={this.validateEmail}
                value={this.state.email}
                //validateError={this.state.validateEmail}
                errorFlag={!this.state.validationEmail}
                errorText={"Enter a valid email."}
            />

            <View style={styles.passwordView}>
                <Text style={styles.userIDText}>
                    {"Password"}       
                </Text>
            </View>
        
            <GInputComponent 
                propInputStyle={!this.state.validationPassword ? styles.userIDTextBoxError : styles.userIDTextBox} 
                placeholder={"Password"}
                onChangeText={this.setPassword}
                //onBlur={this.validatePassword}
                validateError={this.state.validatePassword}
                value={this.state.password}
                secureTextEntry
                errorFlag={!this.state.validationPassword}
                errorText={"Enter a valid password."}
            />

            <View style={styles.forgotLineText}>
                <Text style={styles.termsofuseText}>
                    {"I forgot my "}
                </Text>
                <Text style={styles.forgotLineTextColor} onPress={this.navigationRetrieveOnlineID}>
                    {"Online ID"}
                </Text>
                <Text style={styles.termsofuseText}>
                    {" or "}
                </Text>
                <Text style={styles.forgotLineTextColor} onPress={this.navigationResetPassword}>
                    {"Password"}
                </Text>
            </View>

            <View style={styles.termsofuse}>
                <Text style={styles.termsofuseText}>
                    {"By clicking “Sign In” I agree to the Victory Capital "}
                   
                <Text style={styles.forgotLineTextColor}>
                {"Terms of Use."}
                </Text>
                </Text>
            </View>

            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Sign In"
                    textStyle={styles.signInButtonText}
                    onPress={this.callSignIn}
                    //onPress={this.navigateDashboard}
            />
            <View>
            {
                !this.state.touchIdEnrolled && 
                !this.state.faceIdEnrolled ?
                <GButtonComponent 
                        buttonStyle={styles.registernowButton1}
                        buttonText="Register Touch/Face ID"
                        textStyle={styles.registernowText}
                        onPress={this.registerFaceTouchID}
                /> :

                this.state.faceIdEnrolled? 
                <TouchableOpacity onPress={this.enableBiometricMethod}>
                <Image 
                    resizeMode="contain" 
                    source={require("../../Images/FaceID.png")}
                    style={styles.faceIDlogo}
                    onPress={this.enableBiometricMethod}
                />

                <TouchableOpacity style={styles.faceIDtextStyle}>
                    <Text>
                        {"Sign In with Face ID"}
                    </Text>
                </TouchableOpacity>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={this.enableBiometricMethod}>
                <Image 
                    resizeMode="contain" 
                    source={require("../../Images/TouchID.png")}
                    style={styles.faceIDlogo}
                    onPress={this.enableBiometricMethod}
                />

                <TouchableOpacity style={styles.faceIDtextStyle} >
                    <Text>
                        {"Sign In with Touch ID"}
                    </Text>
                </TouchableOpacity>
                </TouchableOpacity>
            }
            </View>
            

            <View style={styles.newVictorySection}>
                <Text style={styles.newVictory}>
                    {"New to Victory Capital?"}
                </Text>

                <Text style={styles.openInvestment}>
                    {"It’s easy to open your investment"}
                </Text>

                <GButtonComponent 
                buttonStyle={styles.newVictoryButton}
                buttonText="Register now"
                textStyle={styles.newVictoryButtonText}
                onPress={this.navigateEmail}
                />

                <View style={styles.lineBorder} />

                <View style={styles.usaaMemberSection}>
                    <Text style={styles.newVictory}>
                        {"For USAA Members"}
                    </Text>
                    <Image />
                </View>

                <Text style={styles.openInvestment}>
                    {"USAA Members has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account."}
                </Text>
                    
            </View>

            <View style={{marginLeft:'4%',marginRight:'4%',width:'92%'}}>
                    <GButtonComponent 
                        buttonStyle={styles.newVictoryButton}
                        buttonText="Other Settings"
                        textStyle={styles.newVictoryButtonText}
                        onPress={this.navigateCommonUI}
                    />                   
            </View>

           <GFooterComponent />

        </ScrollView>
            </View>
            </>
        );
    }
}

LoginComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object),
    loginState : PropTypes.instanceOf(Object),
    initialState : PropTypes.instanceOf(Object),
    signInAction : PropTypes.func,
  };
  
  LoginComponent.defaultProps = {
 
  };

export default LoginComponent;