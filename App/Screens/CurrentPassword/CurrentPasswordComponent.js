import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from 'prop-types';

class CurrentPasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword : "Password",
            userEnteredPassword:'',
            errMsg:''
        };
    }
    isEmpty = (str) => {
        if (str.trim() == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }
    onClickNext=()=>{
        if(this.isEmpty(this.state.userEnteredPassword)){
            this.setState({errMsg : gblStrings.userManagement.pleaseEnterCurrentPswd});  
        }else if(this.state.userEnteredPassword!==this.state.currentPassword){
            this.setState({errMsg :gblStrings.userManagement.enteredIncorrectPswd});  
        }else{
            this.setState({errMsg : ''});
            this.props.navigation.navigate('resetPassword');
        }
    }

    validateCurrentPassword=(pswd)=>{
        this.setState({userEnteredPassword:pswd});
    }


    navigateChangeLogonCredentials = () => this.props.navigation.navigate('changeLogonCredentials');
    navigateResetPassword = () => this.props.navigation.navigate('resetPassword');

    render() {
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
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
                        value={this.state.userEnteredPassword}
                        onChangeText={this.validateCurrentPassword}
                        onBlur={this.onClickNext}
                        errorFlag={!this.isEmpty(this.state.errMsg)}
                        errorText={this.state.errMsg}
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
    navigation: PropTypes.instanceOf(Object)
};

CurrentPasswordComponent.defaultProps = {

};
export default CurrentPasswordComponent;