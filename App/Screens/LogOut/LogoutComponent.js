import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GTitleBarComponent, GButtonComponent } from '../../CommonComponents';

const sessionTimeOut = require("../../Images/logOut.png");

class LogoutComponent extends Component {
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
                    toolbarTiltle="Log Out"
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

                    <Text style={styles.logOutApplication}>
                    Do you really want to log out of the application ?
                    </Text>



                    </View>

                    <GButtonComponent 
                        buttonStyle={styles.logoutButton}
                        textStyle={styles.logOut}
                        buttonText="Log Out"
                    />

                    <Text style={styles.canelButton}>
                        Cancel
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

LogoutComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

LogoutComponent.defaultProps = {
    navigation: {}
};

export default LogoutComponent;