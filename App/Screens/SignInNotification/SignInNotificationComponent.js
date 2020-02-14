import React, { Component } from 'react';
import { View, ScrollView, Text,TouchableOpacity,Image,StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';
import logo from '../../Images/logoVCM.png';

class SignInNotificationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isCustomer: true,     
        };
    }

    navigationGoBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    } 

    render() {       
        return (
            <View style={styles.container}>                    
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />              
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>
                    <View style={styles.contentContainer}>
                        <Image style={styles.logoStyle} source={logo} />   

                        <View style={styles.signInNotificationDesc}>
                            <Text style={styles.welcomeText}>
                                Welcome
                            </Text>
                            <Text style={styles.userNameText}>
                                John Doe
                            </Text>
                            <Text style={styles.notificationDescText}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            </Text>                            
                        </View> 

                    </View>
                </ScrollView>          
                <View style={styles.signInPushNotificationContainer}>                  
                    <Text style={styles.signInPushNotificationText}>
                        Sign in through push notification.
                    </Text>                    
                </View>                                

                <View style={styles.bottomView}>                    
                    <TouchableOpacity onPress={this.navigationResetOpt} style={styles.touchableStyle}>
                        <Text style={styles.submitButtonStyle} onPress={this.navigationResetOpt}>
                            {globalString.common.send}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

SignInNotificationComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

SignInNotificationComponent.defaultProps = {
    navigation: {}
};

export default SignInNotificationComponent;