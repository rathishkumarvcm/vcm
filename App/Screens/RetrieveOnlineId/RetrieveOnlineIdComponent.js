import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent,GFooterSettingsComponent} from '../../CommonComponents';
import { emailRegex } from '../../Constants/RegexConstants';


class RetrieveOnlineIdComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            email:'',
            validationEmail: true
        };
    }

    componentDidMount(){
       
    }

    validateEmail = () => {
        const {passEamil} = this.state;
        const validate = emailRegex.test(passEamil.email);
        this.setState({
            validationEmail : validate
        });
    }

    setEmail = text => {
        this.setState({
            email : text
        });
    }

    navigatePassword = ()=>{
        const {navigation} = this.props;
        navigation.navigate('onlineIDVerification');
    }

    goBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }
    
 
    render(){
        const {navigation} = this.props;
        const {email,validationEmail} = this.state;
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={navigation}
             register
             />
        
            <ScrollView style={styles.flexContainer}>

      

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    Retrieve your Online ID
                </Text>
            </View>

            <View style={styles.retrieveSection}>
                <Text style={styles.retrieveText}>
                    Enter your registered Email ID to continue
                </Text>
            </View>
             
            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Registered E-mail       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox}
                // placeholder={"Email"}
                onChangeText={this.setEmail}
                onBlur={this.validateEmail}
                value={email}
                errorFlag={!validationEmail}
                errorText="Enter a valid email."
            />


            <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.goBack}
                   //  disabled={this.state.email === '' || !this.state.validationEmail}
            />

            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Next"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigatePassword}
                    disabled={email === '' || !validationEmail}
            />

            
            
            
            <GFooterSettingsComponent />
            </ScrollView>
            </View>
    
        );
    }
}


RetrieveOnlineIdComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  RetrieveOnlineIdComponent.defaultProps = {
    navigation : {}
 
  };
export default RetrieveOnlineIdComponent;