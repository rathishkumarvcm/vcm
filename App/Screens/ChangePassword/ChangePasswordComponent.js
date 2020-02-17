import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity,Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GInputComponent, GTitleBarComponent } from '../../CommonComponents';
import ValidatePassword from '../../Utils/ValidatePassword';
import globalString from '../../Constants/GlobalStrings';
import selected from '../../Images/selected.png';
import nonselected from '../../Images/nonselected.png';

class ChangePasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {             
            newPassword: '',
            confirmPassword:'',
        };
    }

    navigationGoBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

  setNewPassword = (text) => {
    this.setState({
        newPassword: text
    });
  }

  setConfirmPassword = (text) => {
    this.setState({
        confirmPassword: text
    });
  }

    render() {
        // const { navigation } = this.props;        
        const {newPassword,confirmPassword} = this.state;
        return (
            <View style={styles.container}>
              
                <GTitleBarComponent
                    toolbarTiltle={globalString.recoverPassword.btnChangePassword}
                    backPress={this.navigationGoBack}
                />

                <View style={styles.layoutContainer}>
                    <View style={styles.cornerTriangle} />
                    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>

                        <View style={styles.contentContainer}>

                            <View style={styles.securePINDetailsContainer}>

                                <Text style={styles.currentPINText}>
                                    {globalString.recoverPassword.password_new_title}
                                </Text>
                                <Text style={styles.mandatoryText}>
                                    {globalString.recoverPassword.mandatory}
                                </Text>

                                <Text style={styles.passwordText}>
                                    {globalString.userManagement.newPassword}
                                </Text>
                                <GInputComponent
                                    propInputStyle={styles.passwordInputText} 
                                   // placeholder={globalString.recoverPassword.placeholder_ssn}
                                    secureTextEntry
                                    onChangeText={this.setNewPassword}    
                                    value={newPassword}                            
                                />     

                                <View style={styles.passwordStrengthFlex}>                                   
                                    <View style={styles.passwordStrongFlex}>
                                        <View style={(newPassword.length > 0) && (ValidatePassword(newPassword) === globalString.userManagement.weak) ? styles.weak : styles.default} />
                                        <Text style={styles.strongText}>
                                            {globalString.userManagement.weak}
                                        </Text>
                                    </View>
                                    <View style={styles.passwordStrongFlex}>
                                        <View style={(ValidatePassword(newPassword) === globalString.userManagement.good) ? styles.good : styles.default} />
                                        <Text style={styles.strongText}>
                                            {globalString.userManagement.good}
                                        </Text>
                                    </View>
                                    <View style={styles.passwordWeakFlex}>
                                        <View style={(ValidatePassword(newPassword) === globalString.userManagement.strong) ? styles.strong : styles.default} />
                                        <Text style={styles.strongText}>
                                            {globalString.userManagement.strong}
                                        </Text>
                                    </View>
                                </View>

                                <Text style={styles.passwordText}>
                                    {globalString.userManagement.confirmNewPassword}
                                </Text>
                                <GInputComponent
                                   propInputStyle={styles.passwordInputText} 
                                   // placeholder={globalString.recoverPassword.placeholder_ssn}
                                    secureTextEntry
                                    onChangeText={this.setConfirmPassword}    
                                    value={confirmPassword}                            
                                />   
                                <View style={styles.passwordRuleContainer}>
                                    <Image style={styles.logoStyle} source={selected} />
                                    <Text style={styles.passwordRuleItems}>
                                        {globalString.changePassword.lowerCase}
                                    </Text>    
                                </View>      

                                <View style={styles.passwordRuleContainer}>
                                    <Image style={styles.logoStyle} source={selected} />
                                    <Text style={styles.passwordRuleItems}>
                                        {globalString.changePassword.upperCase}
                                    </Text>    
                                </View>      

                                <View style={styles.passwordRuleContainer}>
                                <Image style={styles.logoStyle} source={nonselected} />
                                    <Text style={styles.passwordRuleItems}>
                                        {globalString.changePassword.numerals}
                                    </Text>    
                                </View>    

                                <View style={styles.passwordRuleContainer}>
                                    <Image style={styles.logoStyle} source={selected} />
                                    <Text style={styles.passwordRuleItems}>
                                        {globalString.changePassword.symbol}
                                    </Text>    
                                </View>    

                                <View style={styles.passwordRuleContainer}>                               
                                    <Image style={styles.logoStyle} source={nonselected} />
                                    <Text style={styles.passwordRuleItems}>
                                        {globalString.changePassword.minimumCharacter}
                                    </Text>    
                                </View>                              

                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={this.navigationResetOpt} style={styles.touchableStyle}>
                        <Text style={styles.submitButtonStyle} onPress={this.navigationResetOpt}>
                            {globalString.common.submit}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

ChangePasswordComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ChangePasswordComponent.defaultProps = {
    navigation: {}
};

export default ChangePasswordComponent;