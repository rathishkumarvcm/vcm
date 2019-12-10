import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import PropTypes from 'prop-types';
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

    isEmpty = (str) => {
        if (str.trim() == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }
    onClickNext=()=>{
        if(this.isEmpty(this.state.userEnteredPIN)){
            this.setState({errMsg : gblStrings.userManagement.pleaseEnterCurrentPIN});  
        }else if(this.state.userEnteredPIN!==this.state.currentPIN){
            this.setState({errMsg : gblStrings.userManagement.enteredIncorrectPIN});  
        }else{
            this.setState({errMsg : ''});
            this.props.navigation.navigate('resetPIN');
        }
    }

    validateCurrentPIN=(pin)=>{
        this.setState({userEnteredPIN:pin});
    }

    navigateChangeLogonCredentials = () => this.props.navigation.navigate('changeLogonCredentials');
  
    componentDidMount() {
        console.log("this.props.initialState--->"+JSON.stringify(this.props.initialState.currentPIN));
         if (this.props && this.props.initialState && this.props.initialState.currentPIN) {
            this.setState({
                currentPIN:this.props.initialState.currentPIN
            });
         }
    }

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

                    <Text style={styles.resetYourPINText}>{gblStrings.userManagement.restYourPIN}</Text>

                    <View style={styles.line} />

                    <View style={styles.enterPINFlex}>
                        <Text style={styles.enterPINText}>{gblStrings.userManagement.enterCurrentPIN}</Text>
                    </View>
                    <GInputComponent
                        propInputStyle={styles.pinTextBox}
                        placeholder={gblStrings.userManagement.currentPIN}
                        value={this.state.userEnteredPIN}
                        onChangeText={this.validateCurrentPIN}
                        onBlur={this.onClickNext}
                        errorFlag={!this.isEmpty(this.state.errMsg)}
                        errorText={this.state.errMsg}
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
};
export default CurrentPINComponent;