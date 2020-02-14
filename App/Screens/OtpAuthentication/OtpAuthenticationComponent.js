import React, { Component } from 'react';
import { Text, View, ScrollView,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";
import styles from './styles';
import { GTitleBarComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import { CustomRadio } from '../../AppComponents';

class OtpAuthenticationComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
           // email: ''
        };
    }

    navigateLogin = () => {
        const { navigation } = this.props;
        navigation.navigate('login');
    }

    navigatePassword = () => {
        const { navigation } = this.props;

        Auth.verifyCurrentUserAttribute('email')
            .then(() => {
            }).catch(() => {
            });


        navigation.navigate('otpConfirm');

    }

    protectPhone = (userPhone) => {
        const x = userPhone.replace(/\D/g, '').match(/(\d{2})(\d{6})(\d{2})/);
        return `${x[1]}******${x[3]}`;
    }

    radioButtonClicked = (index) => () => {
        if (index === 'email') {
            this.setState({
                radioEnabled: false,
            });
        }
        else {
            this.setState({
                radioEnabled: true,
            });
        }
    }


    render() {

       // const { navigation } = this.props;
        const { radioEnabled,/* email, phoneNo  */ } = this.state;

        return (

            <View style={styles.container}>

                <GTitleBarComponent
                    toolbarTiltle={globalString.loginComponent.signIn}
                    backPress={this.goBack}
                />
                <View style={styles.layoutContainer}>

                    <View style={styles.cornerTriangle} />

                    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>

                        <View style={styles.contentContainer}>

                            <View style={styles.confirmPasswordContainer}>

                                <Text style={styles.confirmPasswordText}>
                                    {globalString.signIn.sendOTP}
                                </Text>            
                                <View style={styles.lineBorder} />   

                                <View style={styles.radioButtonStyle}>                                  
                                    <CustomRadio                                   
                                        size={30}
                                        itemBottom={10}
                                        itemTop={10}
                                        outerCicleColor="#DEDEDF"
                                        innerCicleColor="#49494A"
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label="Email ID ke******@gmail.com"
                                        selected={!radioEnabled}
                                        onPress={this.radioButtonClicked("email")}
                                    />      
                                </View> 
                                <View style={styles.lineBorderItems} />

                                <View style={styles.radioButtonStyle}>             
                                    <CustomRadio                                   
                                        size={30}
                                        itemBottom={10}
                                        itemTop={10}
                                        outerCicleColor="#DEDEDF"
                                        innerCicleColor="#49494A"
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label="Mobile number 53****367"                       
                                        selected={radioEnabled}
                                        onPress={this.radioButtonClicked("mobile")}
                                    />     
                                </View>                                                                           
                                 <View style={styles.lineBorderItems} />                                                            

                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={this.navigatePassword} style={styles.touchableStyle}>
                        <Text style={styles.submitButtonStyle}>
                            {globalString.common.next}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* <ScrollView style={styles.flexContainer}>            
           
                    <View style={styles.defaultPadding}>
                        <GRadioButtonComponent selected={radioEnabled} onPress={this.radioButtonClicked('email')}// questionsStyle={{width:'40%',flexWrap:'wrap'}} 
                        questions={`${"Send OTP to email "} ${email}`}
                        />

                        <GRadioButtonComponent selected={!radioEnabled} onPress={this.radioButtonClicked('mobile')} questions={`${"Send OTP to mobile "} ${phoneNo}`} />
                </View>           
              
                <GButtonComponent 
                        buttonStyle={styles.sendOTPButton}
                        buttonText="Send OTP"
                        textStyle={styles.signInButtonText}
                        onPress={this.navigatePassword}
                />
            
                </ScrollView> */}

            </View>
        );
    }
}

OtpAuthenticationComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    // initialState : PropTypes.instanceOf(Object)
};

OtpAuthenticationComponent.defaultProps = {
    navigation: {},
    // initialState : {}
};

export default OtpAuthenticationComponent;