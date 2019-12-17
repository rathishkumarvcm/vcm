import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GInputComponent, GFooterSettingsComponent, GHeaderComponent } from '../../CommonComponents';

import PropTypes from 'prop-types';
import { Auth } from "aws-amplify";
import globalStrings from '../../Constants/GlobalStrings';
import { ValidatePassword } from '../../Utils/ValidatePassword';

//const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

class RegisterPasswordComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            validationOnlineId: true,
            validationPassword: true,
            validationConfirmPassword: true,
            password: '',
            confirmPassword: '',
            name: '',
            phone: '',
            email: '',
            pageSpecialMFA: false,
        };
    }

    componentDidMount() {
        // Special MFA Requirements Scenario       
        let fromPage = this.props.navigation.getParam('fromPage', '');
        console.log('FromPage : ' + fromPage);
        if (!this.isEmpty(fromPage) && fromPage == 'SpecialMFA') {
            this.setState({ pageSpecialMFA: true });
        }

        let registerSelfData = this.props.navigation.getParam('selfData', '');
        if (!this.isEmpty(registerSelfData) && !this.isEmpty(registerSelfData.emailID)) {
            this.setState({ email: registerSelfData.emailID });
        }

    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigateLogin = () => this.props.navigation.push('login',{emailVerified:'',emailVerifiedData:''});    

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    navigateSelf = () => {
        let registerSelfData = this.props.navigation.getParam('selfData');
        let username = registerSelfData.emailID;
        let password = this.state.password;
        let email = registerSelfData.emailID;
        let phone_number = registerSelfData.phone;
        let firstName = registerSelfData.firstName;
        let lastName = registerSelfData.lastName;
        let middleName = registerSelfData.middleName;
        Auth.signUp({
            username,
            password,
            //phone_number,
            attributes: {
                email: email,
                given_name: firstName,
                family_name: lastName,
                middle_name: middleName,
                phone_number: phone_number,
                'custom:prefix': 'Mr',
                'custom:suffix': 'Jr'
            },

        }).then(data => {
            console.log("Data", data);
            alert("Signed Up Successfully. OTP received.");
            this.props.navigation.navigate('emailVerify', { passwordData: registerSelfData });
        });
        //this.props.navigation.navigate('emailVerify');   
    }

    validatePassword = () => {
        // const validate = passwordRegex.test(this.state.password);
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

        return (
            <View style={styles.container}>

                <GHeaderComponent
                    navigation={this.props.navigation}
                    register
                />

                <ScrollView style={{ flex: 0.85 }}>
                    {
                        (!this.state.pageSpecialMFA) ?
                            <View style={styles.stepsOuter}>
                                <View style={styles.stepsInner} />
                                <View style={styles.stepsInner} />
                            </View>
                            : null
                    }
                    {/* Special MFA Requirements Scenario */}
                    {
                        (this.state.pageSpecialMFA) ?
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
                            {'Explain'}
                        </Text>
                    </View>

                    <GInputComponent
                        propInputStyle={styles.userIDTextBox}
                        //placeholder={"Online ID"}
                        value={this.state.email}
                        onChangeText={this.setOnlineId}
                        onBlur={this.validateOnlineId}
                        errorFlag={!this.state.validationOnlineId}
                        errorText={"Enter a valid Online ID"}
                    />

                    <View style={styles.signInView}>
                        <Text style={styles.userIDText}>
                            {globalStrings.userManagement.password}
                        </Text>
                        <Text style={styles.explainText}>
                            {'Explain'}
                        </Text>
                    </View>

                    <GInputComponent
                        propInputStyle={styles.userIDTextBox}
                        //placeholder={"Password"}
                        onChangeText={this.setPassword}
                        secureTextEntry
                        onBlur={this.validatePassword}
                        value={this.state.password}
                        errorFlag={!this.state.validationPassword}
                        errorText={globalStrings.recoverPassword.validPassword}
                    />

                    {
                        this.state.pageSpecialMFA ?
                            <View style={styles.passwordStrengthFlex}>
                                <View style={styles.passwordStrongFlex}>
                                    <View style={(ValidatePassword(this.state.password) == globalStrings.userManagement.strong) ? styles.strong : styles.default} />
                                    <Text style={styles.strongText}>
                                        {globalStrings.userManagement.strong}
                                    </Text>
                                </View>
                                <View style={styles.passwordStrongFlex}>
                                    <View style={(ValidatePassword(this.state.password) == globalStrings.userManagement.good) ? styles.good : styles.default} />
                                    <Text style={styles.strongText}>
                                        {globalStrings.userManagement.good}
                                    </Text>
                                </View>
                                <View style={styles.passwordStrongFlex}>
                                    <View style={(this.state.password.length > 0) && (ValidatePassword(this.state.password) == globalStrings.userManagement.weak) ? styles.weak : styles.default} />
                                    <Text style={styles.strongText}>
                                        {globalStrings.userManagement.weak}
                                    </Text>
                                </View>
                            </View>
                        : null
                    }

                    <View style={styles.signInView}>
                        <Text style={styles.userIDText}>
                            {globalStrings.userManagement.confirmPassword}
                        </Text>
                    </View>

                    <GInputComponent
                        propInputStyle={styles.userIDTextBox}
                        //placeholder={"Confirm Password"}
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
                        onPress={this.state.pageSpecialMFA ? this.navigateLogin : this.navigateSelf}
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

};

export default RegisterPasswordComponent;