import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';

class CurrentPasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword : "",
            userEnteredPassword:'',
            errMsg:''
        };
    }

    componentDidMount() {
        this.setCurrentPassword();
    }

    setCurrentPassword = () =>{
        const { initialState } = this.props;
        // console.log("initialState--->",JSON.stringify(initialState.currentPassword));
         if (this.props && initialState && initialState.currentPassword) {
            this.setState({
                currentPassword:initialState.currentPassword
            });
         }
    }


    isEmpty = (str) => {
        if (str.trim() === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
    }

    onClickNext=()=>{
        const { navigation } = this.props;   
        const { navigate } = navigation; 
        const { userEnteredPassword,currentPassword } = this.state;
        if(this.isEmpty(userEnteredPassword)){
            this.setState({errMsg : gblStrings.userManagement.pleaseEnterCurrentPswd});  
        }else if(userEnteredPassword!==currentPassword){
            this.setState({errMsg :gblStrings.userManagement.enteredIncorrectPswd});  
        }else{
            this.setState({errMsg : ''});
            navigate('resetPassword');
        }
    }

    validateCurrentPassword=(pswd)=>{
        this.setState({userEnteredPassword:pswd});
    }


    navigateChangeLogonCredentials = () => {
        const { navigation } = this.props;   
        const { navigate } = navigation; 
        navigate('changeLogonCredentials');
    }


    navigateResetPassword = () => {
        const { navigation } = this.props;   
        const { navigate } = navigation; 
        navigate('resetPassword');
    }

    render() {
        const { navigation } = this.props;   
        const { userEnteredPassword,errMsg } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity onPress={this.goBack}>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>

                    <Text style={styles.resetYourPasswordText}>{gblStrings.userManagement.restYourPassword}</Text>

                    <View style={styles.line} />

                    <View style={styles.enterPasswordFlex}>
                        <Text style={styles.enterPasswordText}>{gblStrings.userManagement.enterCurrentPassword}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={styles.passwordTextBox}
                        placeholder={gblStrings.userManagement.currentPassword}
                        value={userEnteredPassword}
                        onChangeText={this.validateCurrentPassword}
                        onBlur={this.onClickNext}
                        errorFlag={!this.isEmpty(errMsg)}
                        errorText={errMsg}
                        secureTextEntry
                    />

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateChangeLogonCredentials}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitFlex} onPress={this.onClickNext}>
                            <Text style={styles.submitText}>{gblStrings.common.next}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.fullLine} />
                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>
                    <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}


CurrentPasswordComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState : PropTypes.instanceOf(Object),
};

CurrentPasswordComponent.defaultProps = {
    navigation:{},
    initialState:{},
};
export default CurrentPasswordComponent;