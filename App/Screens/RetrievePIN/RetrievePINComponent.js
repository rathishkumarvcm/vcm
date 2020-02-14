import React, { Component } from 'react';
import { View, ScrollView, Text,TouchableOpacity,Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GInputComponent,GTitleBarComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import icontooltip from '../../Images/icontooltip.png';

class RetrievePINInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isCustomer: true,    
            booEnterSecurePin: false,
            errEnterSecurePin: '',
            enterSecurePin: '',      
            
            booConfirmSecurePin: false,
            erronfirmSecurePin: '',
            confirmSecurePin: '',
        };
    }

    navigationGoBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    navigateRetrievePINInfo = () => {
        const { navigation } = this.props;      
        navigation.navigate('retrievePINInfo');
    }

    setEnterSecurePIN = (text) => {
        this.setState({
            enterSecurePin: text
        });
      }

    setConfirmSecurePIN = (text) => {
        this.setState({
            confirmSecurePin: text
        });
    }

    render() {
        const {booEnterSecurePin,errEnterSecurePin,enterSecurePin,booConfirmSecurePin,erronfirmSecurePin,confirmSecurePin} = this.state;
        return (
            <View style={styles.container}>
                <GTitleBarComponent
                    toolbarTiltle={globalString.retrievePINInfo.titlePIN}
                    backPress={this.navigationGoBack}
                />
                <View style={styles.layoutContainer}>
                    <View style={styles.cornerTriangle} />
                    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>

                        <View style={styles.contentContainer}>
                            <View style={styles.retrievePINDetailsContainer}>
                                <View style={styles.flexContainer}>
                                    <Text style={styles.createNewPINText}>
                                        {globalString.retrievePINInfo.createNewPIN}
                                    </Text>

                                    <View style={styles.iconFlexContainer}>
                                        <TouchableOpacity onPress={this.navigateRetrievePINInfo}>   
                                            <Image style={styles.infoIconStyle} source={icontooltip} />
                                        </TouchableOpacity> 
                                    </View>                                                                      
                                </View>
                                

                                <Text style={styles.mandatoryText}>
                                    {globalString.recoverPassword.mandatory}
                                </Text>

                                <Text style={styles.securePINText}>
                                    {globalString.changePIN.enterSecurityPin}
                                </Text>
                                <GInputComponent
                                    propInputStyle={booEnterSecurePin ? styles.securePINTextBoxError : styles.securePINTextBox}
                                    placeholder={globalString.recoverPassword.placeholder_ssn}
                                    onChangeText={this.setEnterSecurePIN}    
                                    value={enterSecurePin}                            
                                />   
                                <Text style={styles.errorMessage}>{errEnterSecurePin}</Text>

                                <Text style={styles.securePINText}>
                                    {globalString.retrievePINInfo.confirmSecurityPIN}
                                </Text>
                                <GInputComponent
                                    propInputStyle={booConfirmSecurePin ? styles.securePINTextBoxError : styles.securePINTextBox}
                                    placeholder={globalString.recoverPassword.placeholder_ssn}
                                    onChangeText={this.setConfirmSecurePIN}    
                                    value={confirmSecurePin}                            
                                />   
                                <Text style={styles.errorMessage}>{erronfirmSecurePin}</Text>
                                
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

RetrievePINInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

RetrievePINInfoComponent.defaultProps = {
    navigation: {}
};

export default RetrievePINInfoComponent;