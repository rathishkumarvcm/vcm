import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";
import { styles } from './styles';
import { GButtonComponent, GInputComponent, GFooterSettingsComponent, GHeaderComponent } from '../../CommonComponents';
import globalStrings from '../../Constants/GlobalStrings';
import { ValidatePassword } from '../../Utils/ValidatePassword';

//  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

class RegisterPasswordComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,           
            validationOnlineId: true,
            validationPassword: true,
            validationConfirmPassword: true,
            password: '',
            confirmPassword: '',          
            email: '',    
        };
    }

    componentDidMount() {       
        const registerSelfData = this.props.navigation.getParam('selfData', '');
        if (!this.isEmpty(registerSelfData) && !this.isEmpty(registerSelfData.emailID)) {
            this.setState({ email: registerSelfData.emailID });
        }
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigateLogin = () => {
        const specialMFAUserType = (this.props && this.props.navigation.getParam('SpecialMFA',''));  
        this.props.navigation.push('login',{emailVerified:'',emailVerifiedData:'',SpecialMFA:specialMFAUserType});    
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        }            
        return false;
        
    }

    navigateSelf = () => {
        const registerSelfData = this.props.navigation.getParam('selfData');
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
            console.log("Data", data);
            alert("Signed Up Successfully. OTP received.");
            this.props.navigation.navigate('emailVerify', { passwordData: registerSelfData });
        });
        //  this.props.navigation.navigate('emailVerify');   
    }

    validatePassword = () => {
        //  const validate = passwordRegex.test(this.state.password);
        const validate = (ValidatePassword(this.state.password) === globalStrings.userManagement.strong);
        this.setState({
            validationPassword: validate
        });
    }

    validateConfirmPassword = () => {
        if (this.state.password === this.state.confirmPassword) {
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
        if (this.isEmpty(this.state.email)) {
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
        const specialMFAUserType =(this.props && this.props.navigation.getParam('SpecialMFA',''));   
        return (
            <View style={styles.container}>

                <GHeaderComponent
                    navigation={this.props.navigation}
                    register
                />

                <ScrollView style={styles.scrollViewFlex}>
                    {
                        (specialMFAUserType!=="" && !(specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm"))?
                            <View style={styles.stepsOuter}>
                                <View style={styles.stepsInner} />
                                <View style={styles.stepsInner} />
                            </View>
                            : null
                    }
                    {/* Special MFA Requirements Scenario */}
                    {
                        (specialMFAUserType!=="" && (specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser") && specialMFAUserType!=="UserForm")?
                            <View style={styles.pagerContainer}>
                                <View style={styles.pagerOne} />
                                <View style={styles.pagerOne} />
                                <View style={styles.pagerOne} />
                                <View style={styles.pagerOne} />
                            </View>
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
                        value={this.state.email}
                        onChangeText={this.setOnlineId}
                        onBlur={this.validateOnlineId}
                        errorFlag={!this.state.validationOnlineId}
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
                        value={this.state.password}
                        errorFlag={!this.state.validationPassword}
                        errorText={globalStrings.recoverPassword.validPassword}
                    />
                    
                    <View style={styles.passwordStrengthFlex}>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(this.state.password) === globalStrings.userManagement.strong) ? styles.strong : styles.default} />
                            <Text style={styles.strongText}>
                                {globalStrings.userManagement.strong}
                            </Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(ValidatePassword(this.state.password) === globalStrings.userManagement.good) ? styles.good : styles.default} />
                            <Text style={styles.strongText}>
                                {globalStrings.userManagement.good}
                            </Text>
                        </View>
                        <View style={styles.passwordStrongFlex}>
                            <View style={(this.state.password.length > 0) && (ValidatePassword(this.state.password) === globalStrings.userManagement.weak) ? styles.weak : styles.default} />
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
                        value={this.state.confirmPassword}
                        errorFlag={!this.state.validationConfirmPassword}
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
                        onPress={this.goBack}
                    />

                    <GButtonComponent
                        buttonStyle={styles.signInButton}
                        buttonText={globalStrings.common.submit}
                        textStyle={styles.signInButtonText}
                        onPress={(specialMFAUserType!=="" && (specialMFAUserType==="JointAcc" || specialMFAUserType==="NewUser" || specialMFAUserType==="UserForm")) ? this.navigateLogin : this.navigateSelf}
                        disabled={this.state.password === '' || this.state.confirmPassword === '' || !this.state.validationPassword || !this.state.validationConfirmPassword || !this.state.validationOnlineId}
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