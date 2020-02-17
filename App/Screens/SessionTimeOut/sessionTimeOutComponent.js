import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GTitleBarComponent, GButtonComponent } from '../../CommonComponents';

const sessionTimeOut = require("../../Images/sessionTimeout.png");

class sessionTimeOutComponent extends Component {
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
                    toolbarTiltle="Session Timeout"
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

                    <Text style={styles.sessionExpire}>
                    Your session is about to expire. Please click Cancel to avoid being Sign out.
                    </Text>
                    </View>

                    <GButtonComponent 
                        buttonStyle={styles.stayLogged}
                        textStyle={styles.stayLoggedButton}
                        buttonText="Stay Logged in (3)"
                    />

                    <Text style={styles.signOut}>
                        Sign Out
                    </Text>
                    
                    
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

sessionTimeOutComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

sessionTimeOutComponent.defaultProps = {
    navigation: {}
};

export default sessionTimeOutComponent;