import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GInputComponent, GTitleBarComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';

class ChangePINComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isCustomer: true,
            booSecurePin: false,
            errSecurePin: '',
            securePin: '',
        };
    }

    navigationGoBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

  setSecurePIN = (text) => {
    this.setState({
        securePin: text
    });
  }

    render() {
        // const { navigation } = this.props;        
        const {booSecurePin,errSecurePin,securePin} = this.state;
        return (
            <View style={styles.container}>
              
                <GTitleBarComponent
                    toolbarTiltle={globalString.changePIN.title}
                    backPress={this.navigationGoBack}
                />

                <View style={styles.layoutContainer}>
                    <View style={styles.cornerTriangle} />
                    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>

                        <View style={styles.contentContainer}>

                            <View style={styles.securePINDetailsContainer}>

                                <Text style={styles.currentPINText}>
                                    {globalString.changePIN.enterCurrentPIN}
                                </Text>
                                <Text style={styles.mandatoryText}>
                                    {globalString.recoverPassword.mandatory}
                                </Text>

                                <Text style={styles.securePINText}>
                                    {globalString.changePIN.enterSecurityPin}
                                </Text>

                                <GInputComponent
                                    propInputStyle={booSecurePin ? styles.securePINTextBoxError : styles.securePINTextBox}
                                    placeholder={globalString.recoverPassword.placeholder_ssn}
                                    onChangeText={this.setSecurePIN}    
                                    value={securePin}                            
                                />   
                                <Text style={styles.errorMessage}>{errSecurePin}</Text>

                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.bottomView}>

                    <TouchableOpacity onPress={this.navigationResetOpt} style={styles.touchableStyle}>
                        <Text style={styles.submitButtonStyle} onPress={this.navigationResetOpt}>
                            {globalString.common.next}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

ChangePINComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ChangePINComponent.defaultProps = {
    navigation: {}
};

export default ChangePINComponent;