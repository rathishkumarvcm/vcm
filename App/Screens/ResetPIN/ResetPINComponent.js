import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import globalStrings from '../../Constants/GlobalStrings';


class ResetPINComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPIN: '',
            confirmNewPIN: '',
            comparePINS: true,
            pinlength:true,
        };
        this.disableSubmitButton = true;
    }

    setNewPIN = pin => {
        this.setState({
            newPIN: pin
        });
        if(pin.length!==4){
            this.disableSubmitButton=true;
        }
    }

    validateNewPIN = () => {
        const {newPIN} = this.state;
            this.setState({
                pinlength:(newPIN.length===4)
            });
    }

    setConfirmNewPIN = text => {
        this.setState({
            confirmNewPIN: text
        });
    }

    comparePINS = () => {
        const { confirmNewPIN,newPIN,pinlength } = this.state;
        this.setState({
            comparePINS: (confirmNewPIN === newPIN)
        });
        if((confirmNewPIN === newPIN)&&(pinlength===true)){
            this.disableSubmitButton = false;
        }else{
            this.disableSubmitButton = true;
        }
    }

    /* onClickSubmit = () => {
        console.log("------- onClick submit reset PIN -------");
        this.resetPINJSON.newPIN = this.state.confirmNewPIN;
        console.log("resetPINJSON ------- "+JSON.stringify(this.resetPINJSON));
        this.props.navigation.navigate('changeLogonCredentials',{message:globalStrings.userManagement.changedPINSuccessfully,newPIN:this.state.confirmNewPIN});
    } */

    onClickSubmit = () => {        
        // console.log('Submit Button Clicked...');  
        const { confirmNewPIN } = this.state;  
        const { navigation,saveNewPIN } = this.props;   
        const { navigate } = navigation;
        const payloadData = {
            newPIN: confirmNewPIN
        };
        saveNewPIN(payloadData);
        navigate('changeLogonCredentials',{message:globalStrings.userManagement.changedPINSuccessfully, newPIN:confirmNewPIN});               
    }

    navigateChangeLogonCredentials = () => {
        const { navigation } = this.props;   
        const { navigate } = navigation;
        navigate('changeLogonCredentials');
    }
    
    render() {
        // console.log("render--->this.props",JSON.stringify(this.props));
        const { confirmNewPIN,newPIN,pinlength,comparePINS } = this.state;
        const { navigation } = this.props; 
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

                    <Text style={styles.resetYourPINText}>{globalStrings.userManagement.restYourPIN}</Text>

                    <View style={styles.line} />


                    <View style={styles.enterNewPINFlex}>
                        <Text style={styles.enterPINText}>{globalStrings.userManagement.enterNewPIN}</Text>
                    </View>
                    
                    <GInputComponent
                        propInputStyle={pinlength ? styles.pinTextBox : styles.pinTextBoxError}
                        inputStyle={pinlength ? null : styles.pinTextBoxError}
                        placeholder={globalStrings.userManagement.newPIN}
                        value={newPIN}
                        onChangeText={this.setNewPIN}
                        onSubmitEditing={this.validateNewPIN}
                        onBlur={this.validateNewPIN}
                        errorFlag={!pinlength}
                        errorText={globalStrings.userManagement.pinLengthLessThanFour}
                        secureTextEntry
                        keyboardType="numeric"
                        maxLength={4}
                    />

                    <View style={styles.enterPINFlex}>
                        <Text style={styles.enterPINText}>{globalStrings.userManagement.confirmNewPIN}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={comparePINS ? styles.pinTextBox : styles.pinTextBoxError}
                        inputStyle={comparePINS ? null : styles.pinTextBoxError}
                        placeholder={globalStrings.userManagement.confirmNewPIN}
                        value={confirmNewPIN}
                        onChangeText={this.setConfirmNewPIN}
                        onBlur={this.comparePINS}
                        keyboardType="numeric"
                        maxLength={4}
                        errorFlag={!comparePINS}
                        errorText={globalStrings.userManagement.pinDoesntMatch}
                        secureTextEntry
                    />

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateChangeLogonCredentials}>
                            <Text style={styles.backButtonText}>{globalStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.disableSubmitButton?styles.submitFlexDisabled:styles.submitFlex} disabled={this.disableSubmitButton} onPress={this.onClickSubmit}>
                            <Text style={styles.submitText}>{globalStrings.common.submit}</Text>
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
    navigation : PropTypes.instanceOf(Object),
    saveNewPIN : PropTypes.func,
};

ResetPINComponent.defaultProps = {
    navigation:{},
    saveNewPIN:()=>{}
};
export default ResetPINComponent;