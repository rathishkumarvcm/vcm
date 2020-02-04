import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';


class CurrentPINComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPIN : "",
            userEnteredPIN:'',
            errMsg:''
        };
    }

    componentDidMount() {
        this.setCurrentPIN();
    }

    setCurrentPIN = () =>{
        const { initialState } = this.props;
        // console.log("initialState--->",JSON.stringify(initialState.currentPIN));
         if (this.props && initialState && initialState.currentPIN) {
            this.setState({
                currentPIN:initialState.currentPIN
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
        const { userEnteredPIN,currentPIN } = this.state;
        const { navigation } = this.props;   
        const { navigate } = navigation;  
        if(this.isEmpty(userEnteredPIN)){
            this.setState({errMsg : gblStrings.userManagement.pleaseEnterCurrentPIN});  
        }else if(userEnteredPIN!==currentPIN){
            this.setState({errMsg : gblStrings.userManagement.enteredIncorrectPIN});  
        }else{
            this.setState({errMsg : ''});
            navigate('resetPIN');
        }
    }

    validateCurrentPIN=(pin)=>{
        this.setState({userEnteredPIN:pin});
    }

    navigateChangeLogonCredentials = () => {
        const { navigation } = this.props;   
        const { navigate } = navigation;  
        navigate('changeLogonCredentials');
    }
  
   
    render() {
        const {errMsg,userEnteredPIN} = this.state;
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

                    <Text style={styles.resetYourPINText}>{gblStrings.userManagement.restYourPIN}</Text>

                    <View style={styles.line} />

                    <View style={styles.enterPINFlex}>
                        <Text style={styles.enterPINText}>{gblStrings.userManagement.enterCurrentPIN}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={styles.pinTextBox}
                        placeholder={gblStrings.userManagement.currentPIN}
                        value={userEnteredPIN}
                        onChangeText={this.validateCurrentPIN}
                        onBlur={this.onClickNext}
                        errorFlag={!this.isEmpty(errMsg)}
                        errorText={errMsg}
                        keyboardType="number-pad"
                        maxLength={4}
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


CurrentPINComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState : PropTypes.instanceOf(Object)
};

CurrentPINComponent.defaultProps = {
    navigation:{},
    initialState:{},
};
export default CurrentPINComponent;