import React, { Component } from 'react';
import { Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import TouchID from 'react-native-touch-id';
import PropTypes from 'prop-types';
import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import Amplify, { Auth } from 'aws-amplify';
import styles from './styles';
import { GButtonComponent, GInputComponent, GBiometricAuthentication, GHeaderComponent, GFooterSettingsComponent, GLoadingSpinner, showAlert, showAlertWithCancelButton } from '../../CommonComponents';
import * as reGex from '../../Constants/RegexConstants';
import faceIdImg from '../../Images/FaceID.png';
import touchImg from '../../Images/TouchID.png';
// const awsmobile = {
//     "aws_project_region": "us-east-2",
//     "aws_cognito_identity_pool_id": "us-east-2:47948e7d-eb40-4622-918a-a5682bb6796f",
//     "aws_cognito_region": "us-east-2",
//     "aws_user_pools_id": "us-east-2_AFKupYHWn",
//     "aws_user_pools_web_client_id": "2vl5oiufeh9c1dpfcm8qmj7v1i",
//     "oauth": {}
// };

// Amplify.configure(awsmobile);

const testawsMobile = {
    "aws_project_region": "us-east-2",
    //  "aws_cognito_identity_pool_id": "us-east-2:47948e7d-eb40-4622-918a-a5682bb6796f",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_TOS87x5Rt",
    "aws_user_pools_web_client_id": "3a3rpdjb4gi1iqu1g6i2blk37c",
    "oauth": {}
};


Amplify.configure(testawsMobile);

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            enableBiometric: false,
            registeredBioMetric: false,
            faceIdEnrolled: false,
            validationEmail: true,
            validationPassword: true,
            //  password: '',
            email: '',
            registeredSuccess: false,
            password: '',
            inActivityAccount: false
        };
    }





    componentDidMount() {

       // const {initialState} = this.props;

        RNSecureKeyStore.get("enableBioMetric")
            .then(() => {
                this.setState({
                    registeredBioMetric: true
                });
            }).catch(() => {
                this.setState({
                    registeredBioMetric: false
                });
            });

        RNSecureKeyStore.get("bioMetricUserName")
            .then((value) => {
                this.setState({
                    registeredBioMetricUsername: value
                });
            }).catch(() => {
                this.setState({
                    registeredBioMetricUsername: ''
                });
            });


        RNSecureKeyStore.get("bioMetricPassword")
            .then((value) => {
                this.setState({
                    registeredBioMeticPassword: value
                });
            }).catch(() => {
                this.setState({
                    registeredBioMeticPassword: false
                });
            });

       
        TouchID.isSupported()
            .then(biometryType => {
                if (biometryType === 'TouchID') {
                    this.setState({
                      
                        faceIdEnrolled: false
                    });
                    //  Touch ID is supported on iOS
                }
                else if (biometryType === 'FaceID') {
                    this.setState({
                        faceIdEnrolled: true,
                    
                    });
                    //  Face ID is supported on iOS
                }
                else if (biometryType === true) {
                    this.setState({
                     
                        faceIdEnrolled: false
                    });
                    //  Touch ID is supported on Android
                }
            }).catch(() => {
                this.setState({
                    
                    faceIdEnrolled: false
                });
            });

        /* if (initialState && initialState.verifiedEmail) {
            this.setState({
                email: initialState.verifiedEmail
            });
        } */
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {navigation,loginState} = nextProps;
        const {registeredSuccess,email,password} = prevState;
        const emailVerify = navigation.getParam('emailVerified');
        if (emailVerify !== undefined && !registeredSuccess) {
            return({
                registeredSuccess: true
            });
        }

        //  Special MFA Requirements
        const onlineIdVerify = navigation.getParam('onlineIdCreated');
        if (onlineIdVerify !== undefined) {
            return({
                registeredSuccess: true
            });
        }

        const validEmail = 'vcm.com';
        const validPassword = 'Vcm123';
        const test = validEmail.localeCompare(email);
        const test1 = validPassword.localeCompare(password);

        if (!test && !test1) {
            RNSecureKeyStore.set("EmailAddress", validEmail, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
                .then(() => {
                }, () => {
                });

            if (loginState && loginState.emailCheck && loginState.data && loginState.data.response && loginState.data.response.status === 200) {
                this.navigateDashboard();
            }
        }
        return null;
    }

    enableBiometricMethod = () => {
        this.setState({
            enableBiometric: true
        });
    }

    registerFaceTouchID = () => {
        Linking.openURL('app-settings:');
    }

    onAuthenticate = result => {
        const {navigation} = this.props;
        const {registeredBioMetricUsername,registeredBioMeticPassword} = this.state;

        if (result) {
            showAlert("Authentication Successfull");

            const username = registeredBioMetricUsername;
            const password = registeredBioMeticPassword;
            const email = registeredBioMetricUsername;
            const phoneNumber = "+918754499334";
            Auth.signIn({
                username,
                password,
                email,
                phoneNumber
            }).then(data => {
                
                // console.log("Data", JSON.stringify(data.signInUserSession.idToken.jwtToken));

                RNSecureKeyStore.set("jwtToken", data.signInUserSession.idToken.jwtToken, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY }).then(() => {
                    // console.log("token saved suuccessfully", res);
                }, () => {
                });

                const currentSessionTime = new Date();

                RNSecureKeyStore.set("currentSession", currentSessionTime.getTime().toString(), { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
                    .then(() => {
                    }, () => {
                    });


                    showAlert("Signed In Successfully.");
                RNSecureKeyStore.set("EmailAddress", username, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
                    .then(() => {
                    }, () => {
                    });
                navigation.navigate('dashboard');
            });

            this.setState({
                enableBiometric: false
            });
        }
        else {     
            showAlert("Aunthentication Failed");
            this.setState({
                enableBiometric: false
            });
        }
        // this.setState({isLoading:result,enableBiometric:false});
    }

    validateEmail = () => {
        const {email} = this.state;
        const validate = reGex.emailRegex.test(email);
        this.setState({
            validationEmail: validate
        });
    }

    setEmail = text => {
        this.setState({
            email: text
        });
    }

    validatePassword = () => {
        const {password} = this.state;
        const validate = reGex.passwordRegex.test(password);
        this.setState({
            validationPassword: validate
        });
    }

    setPassword = text => {
        this.setState({
            password: text
        });
    }

    enableBioMetric = () => {
        const {email, password} = this.state;
        RNSecureKeyStore.set("enableBioMetric", "true", { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
            .then(() => {
                showAlert("Registered Bio Metric Successfully.");
            }, () => {
            });


        RNSecureKeyStore.set("bioMetricUserName", email, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
            .then(() => {
            }, () => {
            });

        RNSecureKeyStore.set("bioMetricPassword", password, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
            .then(() => {
            }, () => {
            });
    }

    signIn = () => {
        const {setJWTToken,setEnvironment,navigation,updateEmail} = this.props;
        const {email, registeredBioMetric} = this.state;
        const username = email;
        const {password} = this.state;;
        const phoneNumber = "+918754499334";
        Auth.signIn({
            username,
            password,
            email,
            phoneNumber
        }).then(data => {
            // console.log("ACCESS Token-----", JSON.stringify(data.signInUserSession.accessToken.jwtToken));
            // console.log("ID Token-----", JSON.stringify(data.signInUserSession.idToken.jwtToken));

            setJWTToken(data.signInUserSession.idToken.jwtToken);
            setEnvironment("LIVE");

            RNSecureKeyStore.set("jwtToken", data.signInUserSession.idToken.jwtToken, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY }).then(() => {
            }, () => {
            });

            RNSecureKeyStore.set("accessToken", data.signInUserSession.accessToken.jwtToken, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY }).then(() => {
            }, () => {
            });

            RNSecureKeyStore.set("refreshToken", data.signInUserSession.refreshToken.token, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY }).then(() => {
            }, () => {
            });

            const currentSessionTime = new Date();
            

            RNSecureKeyStore.set("currentSession", currentSessionTime.getTime().toString(), { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
                .then(() => {
                }, () => {
                });

            if (!registeredBioMetric) {
                showAlertWithCancelButton(
                    "Enable Bio Metric",
                    "Do you want to enable Bio Metric authentication?.",
                    "Cancel",
                    "Enable",
                    null,
                    () => this.enableBioMetric()
                );
            }


            showAlert("Signed In Successfully.");
            RNSecureKeyStore.set("EmailAddress", username, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
                .then(() => {
                }, () => {
                });
                updateEmail(username);

            /* If it is a first time user use OTP auth */
            RNSecureKeyStore.get("authProcessCompleted")
                .then(() => {
                    navigation.navigate('dashboard');
                }).catch(() => {
                    navigation.navigate('otpAuth');
                });



            // this.props.navigation.navigate('otpAuth');
            // this.props.navigation.navigate('dashboard');
        }).catch(() => {
            showAlert("Username and Password Incorrect.");
        });
    }


    callSignIn = () => {
        const {signInAction} = this.props;
        const {email,password} = this.state;
        const payload = {
            "companyNumber": 591,
            "fundNumber": 30,
            "accountNumber": 30900780183,
            email,
            password
        };
        signInAction(payload);
    }


    navigateEmail = () => {
        const {navigation} = this.props;
        navigation.navigate('registerEmail');
    }

    navigateDashboard = () => {
        const {navigation} = this.props;
        navigation.navigate('dashboard');
    }

    navigateToDashBoard = () => {
        const {navigation} = this.props;
        navigation.navigate('dashboardScreen');
    }

    navigateToGuestUserDashBoard = () => {
        const {navigation} = this.props;
        navigation.navigate('guestUserDashboard');
    }

    navigateCommonUI = () => {

        RNSecureKeyStore.remove("enableBioMetric")
            .then(() => {
            }, () => {
            });

        RNSecureKeyStore.remove("authProcessCompleted")
            .then(() => {
            }, () => {
            });
        // this.props.navigation.navigate('Common');

    }

    // Recover password navigation
    navigationResetPassword = () => {
        const {navigation} = this.props;
        navigation.navigate('passwordRecovery');
    }

    navigationRetrieveOnlineID = () => {
        const {navigation} = this.props;
        navigation.navigate("retrieveOnlineId");
    }



    render() {
        const {inActivityAccount,enableBiometric,loginState,registeredSuccess,email,validationEmail,validationPassword,validatePassword,password,faceIdEnrolled} = this.state;


        return (

            <>
                {enableBiometric &&
                    <GBiometricAuthentication onAuthenticate={this.onAuthenticate} enableBiometric={enableBiometric} />
                }
                <View style={styles.container}>

                    {
                        loginState && loginState.isloading && <GLoadingSpinner />
                    }

                    <GHeaderComponent registerShow
                        onPress={this.navigateEmail}

                    />


                    <ScrollView style={styles.flexContainer}>
                        {registeredSuccess ? (
                            <View style={styles.onlineIDSuccess}>
                                <Text> Your Online ID successfully created.</Text>
                            </View>
                          )
                            :
                            null
                        }

                        <View style={styles.signInView}>
                            <Text style={styles.signIntext}>
                                Sign In
                            </Text>
                        </View>

                        {inActivityAccount ? (
<View style={styles.inActivityView}>
                            <Text style={styles.inActivitytext}>
                                Your online account has been locked for 90 days of inactivity. Please contact Victory Capital Management service Rep at +1 (000) 000-0000
                            </Text>
</View>
)
                            :
                            null}


                        <View style={styles.signInUser}>
                            <Text style={styles.userIDText}>
                                Online ID
                            </Text>
                        </View>
                        <GInputComponent
                            propInputStyle={styles.userIDTextBox}
                            // placeholder={"E-mail"}
                            onChangeText={this.setEmail}
                            // onBlur={this.validateEmail}
                            value={email}
                            // validateError={this.state.validateEmail}
                            errorFlag={!validationEmail}
                            errorText="Enter a valid email."
                            maxLength={30}
                        />

                        <View style={styles.passwordView}>
                            <Text style={styles.userIDText}>
                                Password
                            </Text>
                        </View>

                        <GInputComponent
                            propInputStyle={!validationPassword ? styles.userIDTextBoxError : styles.userIDTextBox}
                            // placeholder={"Password"}
                            onChangeText={this.setPassword}
                            // onBlur={this.validatePassword}
                            validateError={validatePassword}
                            value={password}
                            secureTextEntry
                            errorFlag={!validationPassword}
                            errorText="Enter a valid password."
                            maxLength={30}
                        />


                        <View style={styles.forgotLineText}>
                            <Text style={styles.termsofuseText}>
                                {"I forgot my "}
                            </Text>
                            <Text style={styles.forgotLineTextColor} onPress={this.navigationRetrieveOnlineID}>
                                Online ID
                            </Text>
                            <Text style={styles.termsofuseText}>
                                {" or "}
                            </Text>
                            <Text style={styles.forgotLineTextColor} onPress={this.navigationResetPassword}>
                                Password.
                            </Text>
                        </View>

                        <View style={styles.termsofuse}>
                            <Text style={styles.termsofuseText}>
                                {"By clicking “Sign In” I agree to the Victory Capital "}

                                <Text style={styles.forgotLineTextColor}>
                                    Terms of Use.
                                </Text>
                            </Text>
                        </View>

                        <GButtonComponent
                            buttonStyle={styles.signInButton}
                            buttonText="Sign In"
                            textStyle={styles.signInButtonText}
                            onPress={this.navigateDashboard}
                        />
                        <View>
                            {
                                  faceIdEnrolled ? (
                                        <TouchableOpacity>
                                            <Image
                                                resizeMode="contain"
                                                source={faceIdImg}
                                                style={styles.faceIDlogo}
                                                // onPress={this.enableBiometricMethod}
                                            />

                                            <TouchableOpacity style={styles.faceIDtextStyle}>
                                                <Text>
                                                    Sign In with Face ID
                                                </Text>
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                      )
                                        : (
                                        <TouchableOpacity>
                                            <Image
                                                resizeMode="contain"
                                                source={touchImg}
                                                style={styles.faceIDlogo}
                                                // onPress={this.enableBiometricMethod}
                                            />

                                            <TouchableOpacity style={styles.faceIDtextStyle}>
                                                <Text>
                                                    Sign In with Touch ID
                                                </Text>
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                      )}
                        </View>

                        <GButtonComponent
                            buttonStyle={styles.signInButton}
                            buttonText="Cognito Sign In"
                            textStyle={styles.signInButtonText}
                            onPress={this.signIn}
                        // onPress={this.navigateDashboard}
                        />


                        <View style={styles.newVictorySection}>
                            <Text style={styles.newVictory}>
                               New to Victory Capital?
                            </Text>

                            <Text style={styles.openInvestment}>
                                It’s easy to open your investment
                            </Text>

                            <GButtonComponent
                                buttonStyle={styles.newVictoryButton}
                                buttonText="Sign Up"
                                textStyle={styles.newVictoryButtonText}
                                onPress={this.navigateEmail}
                            />

                            {/* }  <View style={styles.lineBorder} />

                <View style={styles.usaaMemberSection}>
                    <Text style={styles.newVictory}>
                        {"For USAA Members"}
                    </Text>
                    <Image />
                </View>

                <Text style={styles.openInvestment}>
                    {"USAA Members has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account."}
        </Text> */}

                        </View>

                        <View style={styles.marginForOther}>
                            <GButtonComponent
                                buttonStyle={styles.newVictoryButton}
                                buttonText="Other Settings"
                                textStyle={styles.newVictoryButtonText}
                                onPress={this.navigateCommonUI}
                            />
                            <GButtonComponent
                                buttonStyle={styles.newVictoryButton}
                                buttonText="Native Menu"
                                textStyle={styles.newVictoryButtonText}
                                // Menu
                                onPress={this.navigateToDashBoard}
                            />

                            <GButtonComponent
                                buttonStyle={styles.newVictoryButton}
                                buttonText="GuestUser DashBoard"
                                textStyle={styles.newVictoryButtonText}
                                // Menu
                                onPress={this.navigateToGuestUserDashBoard}
                            />
                        </View>

                        <GFooterSettingsComponent />

                    </ScrollView>
                </View>
            </>
        );
    }
}

LoginComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    loginState: PropTypes.instanceOf(Object),
    // initialState: PropTypes.instanceOf(Object),
    signInAction: PropTypes.func,
    setEnvironment : PropTypes.func,
    updateEmail : PropTypes.func,
    setJWTToken : PropTypes.func
};

LoginComponent.defaultProps = {
    navigation : {},
    loginState : {},
    // initialState : {},
    signInAction : () => {},
    setEnvironment : () => {},
    updateEmail : () => {},
    setJWTToken : () => {}
};

export default LoginComponent;