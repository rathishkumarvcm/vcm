import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { GButtonComponent, GInputComponent, GFooterSettingsComponent, GHeaderComponent, showAlert } from '../../CommonComponents';
import globalStrings from '../../Constants/GlobalStrings';
import { ValidatePassword } from '../../Utils/ValidatePassword';
import AppUtils from '../../Utils/AppUtils';

//  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

class RegisterPasswordComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,           
            validationOnlineId: true,
            validationPassword: true,
            validationConfirmPassword: true,
            password: '',
            confirmPassword: '',          
            email: '',    
        };
    }

    componentDidMount() {    
        const { navigation } = this.props;   
        const registerSelfData = navigation.getParam('selfData', '');
        if (!this.isEmpty(registerSelfData) && !this.isEmpty(registerSelfData.emailID)) {
            this.setState({ email: registerSelfData.emailID });
        }
    }

    goBack = () => {        
        const { navigation } = this.props;
        navigation.goBack();
    }

    navigateBack = () => {
        const { navigation } = this.props;
        const specialMFAUserType = (navigation.getParam('SpecialMFA',''));   
        if(specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm"){
            navigation.push('verifySSN',{SpecialMFA:specialMFAUserType}); 
        }else
            navigation.goBack();
    }

    navigateLogin = () => {
        const { navigation } = this.props;
        const specialMFAUserType = (navigation.getParam('SpecialMFA',''));  
       // navigation.push('login',{emailVerified:'',emailVerifiedData:'',SpecialMFA:specialMFAUserType});   
        navigation.reset([
            NavigationActions.navigate({ routeName: 'login',params : {emailVerified:'',emailVerifiedData:'',SpecialMFA:specialMFAUserType} })         
         ],0);
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        }            
        return false;
        
    }

    navigateSelf = () => {
        const { navigation } = this.props;
        const registerSelfData = navigation.getParam('selfData');
        const username = registerSelfData.emailID;
        const {password} = this.state;
        const email = registerSelfData.emailID;
        const phoneNumber = registerSelfData.phone;
        const {firstName} = registerSelfData;
        const {lastName} = registerSelfData;
        const {middleName} = registerSelfData;
        Auth.signUp({
            username,
            password,
            //  phoneNumber,
            attributes: {
                email,
                given_name: firstName,
                family_name: lastName,
                middle_name: middleName,
                phone_number: phoneNumber,
                'custom:prefix': 'Mr',
                'custom:suffix': 'Jr'
            },

        }).then(data => {
            AppUtils.debugLog(`Data ${data}`);          
            showAlert(globalStrings.common.appName ,"Signed Up Successfully. OTP received.",globalStrings.common.ok);   
            navigation.navigate('emailVerify', { passwordData: registerSelfData });
        }).catch(err => {alert(err.message)
            console.log(err)})
            ;
        //  this.props.navigation.navigate('emailVerify');   
    }

    validatePassword = () => {
        //  const validate = passwordRegex.test(this.state.password);
        const { password } = this.state;
        const validate = (ValidatePassword(password) === globalStrings.userManagement.strong);
        this.setState({
            validationPassword: validate
        });
    }

    validateConfirmPassword = () => {
        const { password,confirmPassword } = this.state;
        if (`${password}` === `${confirmPassword}`) {
            this.setState({
                validationConfirmPassword: true
            });
        }
        else {
            this.setState({
                validationConfirmPassword: false
            });
        }
    }

    validateOnlineId = () => {
        const { email } = this.state;
        if (this.isEmpty(email)) {
            this.setState({ validationOnlineId: false });
        } else {
            this.setState({ validationOnlineId: true });
        }
    }

    setConfirmPassword = text => {
        this.setState({
            confirmPassword: text
        });
    }

    setPassword = text => {
        this.setState({
            password: text
        });
    }

    setOnlineId = text => {
        this.setState({
            email: text
        });
    }

    render() {
        const { navigation } = this.props;
        const { email,validationOnlineId,password,validationPassword,confirmPassword,validationConfirmPassword } = this.state;
        const specialMFAUserType =(navigation.getParam('SpecialMFA',''));   
        return (
            <View style={styles.container}>

                <GHeaderComponent
                    navigation={navigation}
                    register
                />

                <ScrollView style={styles.scrollViewFlex}>
                    {
                        (specialMFAUserType!=="" && !(specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm"))? (
                            <View style={styles.stepsOuter}>
                                <View style={styles.stepsInner} />
                                <View style={styles.stepsInner} />
                            </View>
                          )
                            : null
                    }
                    {/* Special MFA Requirements Scenario */}
                    {
                        (specialMFAUserType!=="" && (specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser") && specialMFAUserType!=="UserForm")? (
                            <View style={styles.pagerContainer}>
                                <View style={styles.pagerOne} />
                                <View style={styles.pagerOne} />
                                <View style={styles.pagerOne} />
                                <View style={styles.pagerOne} />
                            </View>
                          )
                            : null
                    }
                    <View style={styles.signInView}>
                        <Text style={styles.signIntext}>
                            {globalStrings.userManagement.onlineIdPassword}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection1}>
                        <Text style={styles.openInvestment}>
                            {globalStrings.userManagement.chooseonlineIdPassword}
                        </Text>
                    </View>

                    <View style={styles.signInView}>
                        <Text style={styles.userIDText}>
                            {globalStrings.userManagement.preferredOnlineId}
                        </Text>
                        <Text style={styles.explainText}>
                            Explain
                        </Text>
                    </View>

                    <GInputComponent
                        propInputStyle={styles.userIDTextBox}
                        //  placeholder={"Online ID"}
                        value={email}
                        onChangeText={this.setOnlineId}
                        onBlur={this.validateOnlineId}
                        errorFlag={!validationOnlineId}
                        errorText="Enter a valid Online ID"
                    />

                    <View style={styles.signInView}>
                        <Text style={styles.userIDText}>
                            {globalStrings.userManagement.password}
                        </Text>
                        <Text style={styles.explainText}>
                            Explain
                        </Text>
                    </View>

                    <GInputComponent
                        propInputStyle={styles.userIDTextBox}
                        //  placeholder={"Password"}
                        onChangeText={this.setPassword}
                        secureTextEntry
                        onBlur={this.validatePassword}
                        value={password}
                        errorFlag={!validationPassword}
                        errorText={globalStrings.recoverPassword.validPassword}
                    />
                    
                    <View style={styles.passwordStrengthFlex}>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(password) === globalStrings.userManagement.strong) ? styles.strong : styles.default} />
                            <Text style={styles.strongText}>
                                {globalStrings.userManagement.strong}
                            </Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(password) === globalStrings.userManagement.good) ? styles.good : styles.default} />
                            <Text style={styles.strongText}>
                                {globalStrings.userManagement.good}
                            </Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(password.length > 0) && (ValidatePassword(password) === globalStrings.userManagement.weak) ? styles.weak : styles.default} />
                            <Text style={styles.strongText}>
                                {globalStrings.userManagement.weak}
                            </Text>
                        </View>
                    </View>
                       

                    <View style={styles.signInView}>
                        <Text style={styles.userIDText}>
                            {globalStrings.userManagement.confirmPassword}
                        </Text>
                    </View>

                    <GInputComponent
                        propInputStyle={styles.userIDTextBox}
                        //  placeholder={"Confirm Password"}
                        onChangeText={this.setConfirmPassword}
                        secureTextEntry
                        onBlur={this.validateConfirmPassword}
                        value={confirmPassword}
                        errorFlag={!validationConfirmPassword}
                        errorText={globalStrings.recoverPassword.password_mismatch}
                    />

                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalStrings.common.back}
                        textStyle={styles.cancelButtonText}
                        onPress={this.goBack}
                    />

                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalStrings.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={(specialMFAUserType!=="" && (specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm")) ? this.navigateBack : this.goBack}
                    />

                    <GButtonComponent
                        buttonStyle={styles.signInButton}
                        buttonText={globalStrings.common.submit}
                        textStyle={styles.signInButtonText}
                        onPress={(specialMFAUserType!=="" && (specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm")) ? this.navigateLogin : this.navigateSelf}
                        disabled={password === '' || confirmPassword === '' || !validationPassword || !validationConfirmPassword || !validationOnlineId}
                    />

                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

RegisterPasswordComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

RegisterPasswordComponent.defaultProps = {
    navigation:{}
};

export default RegisterPasswordComponent;