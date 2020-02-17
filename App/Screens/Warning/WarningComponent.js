import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GTitleBarComponent, GButtonComponent } from '../../CommonComponents';

const sessionTimeOut = require("../../Images/warning.png");

class WarningComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    navigationGoBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

  setSecurePIN = () => {
    this.setState({
    });
  }

    render() {
        // const { navigation } = this.props;        
        return (
            <View style={styles.container}>
              
                <GTitleBarComponent
                    toolbarTiltle="Warning"
                    backPress={this.navigationGoBack}
                />

                <View style={styles.layoutContainer}>
                    <View style={styles.cornerTriangle} />
                    <View style={styles.roundSection}>
                    <View style={styles.outerCircle}>
                        
                        <Image 
                                resizeMode="contain"
                                source={sessionTimeOut}
                        />

                       

                    </View>

                    <Text style={styles.attemptsLeft}>
                    Incorrect credentials. You have 4 attempt(s) left
                    </Text>

                   


                    </View>

                    <GButtonComponent 
                        buttonStyle={styles.continueButton}
                        textStyle={styles.continueText}
                        buttonText="Continue"
                    />

                   
                    
                    
                </View>

                {/* <View style={styles.bottomView}>

                    <TouchableOpacity onPress={this.navigationResetOpt} style={styles.touchableStyle}>
                        <Text style={styles.submitButtonStyle} onPress={this.navigationResetOpt}>
                            {globalString.common.next}
                        </Text>
                    </TouchableOpacity>

        </View> */}
            </View>
        );
    }
}

WarningComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

WarningComponent.defaultProps = {
    navigation: {}
};

export default WarningComponent;