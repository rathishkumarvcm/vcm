import React, { Component } from 'react';
import { View, ScrollView, Text,TouchableOpacity,Image,StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';
import logo from '../../Images/logoVCM.png';
import fingerunlock from '../../Images/fingerunlock.png';

class SignInComponent extends Component {
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

                             <Image style={styles.unlockLogoStyle} source={fingerunlock} />      

                            <TouchableOpacity onPress={this.navigationGoBack}>
                                <Text style={styles.signInWithText}>
                                    {globalString.signIn.signInWithPIN}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.navigationGoBack}>
                                <Text style={styles.signInWithOnlineText}>
                                    {globalString.signIn.signInWithOnline}
                                </Text>
                            </TouchableOpacity>

                        </View> 

                    </View>
                </ScrollView>         
            </View>
        );
    }
}

SignInComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

SignInComponent.defaultProps = {
    navigation: {}
};

export default SignInComponent;