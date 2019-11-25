import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import PropTypes from 'prop-types';
import globalStrings from '../../Constants/GlobalStrings';


class ResetPINComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPIN: '',
            confirmNewPIN: '',
            validationPIN: true,
            comparePINS: true,
            pinlength:true,
            currentPIN:''
        };
        this.disableSubmitButton = true;
        this.resetPINJSON={
            newPIN:'',
            message:globalStrings.userManagement.changedPINSuccessfully
        };
    }
    setNewPIN = text => {
        this.setState({
            newPIN: text
        });
    }

    validateCurrentPIN = text =>{
        this.setState({
            currentPIN: text
        });
    }

    validateNewPIN = () => {
            this.setState({
                pinlength:(this.state.newPIN.length>=4)
            });
    }

    setConfirmNewPIN = text => {
        this.setState({
            confirmNewPIN: text
        });
    }

    comparePINS = () => {
        this.setState({
            comparePINS: (this.state.confirmNewPIN == this.state.newPIN)
        });
        if((this.state.confirmNewPIN === this.state.newPIN)&&(this.state.pinlength==true)){
            this.disableSubmitButton = false;
        }else{
            this.disableSubmitButton = true;
        }
    }

    onClickSubmit = () => {
        console.log("------- onClick submit reset PIN -------");
        this.resetPINJSON.newPIN = this.state.confirmNewPIN;
        console.log("resetPINJSON ------- "+JSON.stringify(this.resetPINJSON));
        this.props.navigation.navigate('changeLogonCredentials',{message:globalStrings.userManagement.changedPINSuccessfully,newPIN:this.state.confirmNewPIN});
    }

    navigateChangeLogonCredentials = () => this.props.navigation.navigate('changeLogonCredentials');

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

                    <Text style={styles.resetYourPINText}>{globalStrings.userManagement.restYourPIN}</Text>

                    <View style={styles.line} />

                    <View style={styles.enterPINFlex}>
                        <Text style={styles.enterPINText}>{globalStrings.userManagement.enterCurrentPIN}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={styles.pinTextBox}
                        placeholder={globalStrings.userManagement.currentPIN}
                        value={this.state.currentPIN}
                        onChangeText={this.validateCurrentPIN}
                        keyboardType="number-pad"
                        maxLength={4}
                        secureTextEntry
                    />

                    <View style={styles.enterNewPINFlex}>
                        <Text style={styles.enterPINText}>{globalStrings.userManagement.enterNewPIN}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={this.state.pinlength ? styles.pinTextBox : styles.pinTextBoxError}
                        inputStyle={this.state.pinlength ? null : styles.pinTextBoxError}
                        placeholder={globalStrings.userManagement.newPIN}
                        value={this.state.newPIN}
                        onChangeText={this.setNewPIN}
                        onBlur={this.validateNewPIN}
                        keyboardType="numeric"
                        maxLength={4}
                        errorFlag={!this.state.pinlength}
                        errorText={globalStrings.userManagement.pinLengthLessThanFour}
                        secureTextEntry
                    />

                    <View style={styles.enterPINFlex}>
                        <Text style={styles.enterPINText}>{globalStrings.userManagement.confirmNewPIN}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={this.state.comparePINS ? styles.pinTextBox : styles.pinTextBoxError}
                        inputStyle={this.state.comparePINS ? null : styles.pinTextBoxError}
                        placeholder={globalStrings.userManagement.confirmNewPIN}
                        value={this.state.confirmNewPIN}
                        onChangeText={this.setConfirmNewPIN}
                        onBlur={this.comparePINS}
                        keyboardType="numeric"
                        maxLength={4}
                        errorFlag={!this.state.comparePINS}
                        errorText={globalStrings.userManagement.pinDoesntMatch}
                        secureTextEntry
                    />

                    <View style={styles.buttonsFlex}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateChangeLogonCredentials}>
                            <Text style={styles.backButtonText}>{globalStrings.userManagement.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateChangeLogonCredentials}>
                            <Text style={styles.backButtonText}>{globalStrings.userManagement.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.disableSubmitButton?styles.submitFlexDisabled:styles.submitFlex} disabled={this.disableSubmitButton} onPress = {this.onClickSubmit}>
                            <Text style={styles.submitText}>{globalStrings.userManagement.submit}</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.fullLine} />


                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{globalStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{globalStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{globalStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>

                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}


ResetPINComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ResetPINComponent.defaultProps = {
};
export default ResetPINComponent;