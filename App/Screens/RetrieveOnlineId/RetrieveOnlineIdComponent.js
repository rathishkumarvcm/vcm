import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent,GFooterSettingsComponent} from '../../CommonComponents';
import PropTypes from 'prop-types';


const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

class RetrieveOnlineIdComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            email:'',
            validationEmail: true
        };
    }

    componentDidMount(){
       
    }

    validateEmail = () => {
        let validate = emailRegex.test(this.state.email);
        this.setState({
            validationEmail : validate
        });
    }

    setEmail = text => {
        this.setState({
            email : text
        });
    }

    navigatePassword = ()=>this.props.navigation.navigate('login');
    
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={this.props.navigation}
             register
             />
        
            <ScrollView style={{flex:0.85}}>

            {/*<View style={styles.stepsOuter}>
                <View style={styles.stepsInner} />
        </View> */}

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"Retrieve your Online ID"}
                </Text>
            </View>
             
            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Registered E-mail"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox}
                placeholder={"Email"}
                onChangeText={this.setEmail}
                onBlur={this.validateEmail}
                value={this.state.email}
                errorFlag={!this.state.validationEmail}
                errorText={"Enter a valid email."}
            />


            <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigatePassword}
                   // disabled={this.state.email === '' || !this.state.validationEmail}
            />

            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Continue"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigatePassword}
                    disabled={this.state.email === '' || !this.state.validationEmail}
            />

            
            
            
            <GFooterSettingsComponent ></GFooterSettingsComponent>
            </ScrollView>
            </View>
    
        );
    }
}


RetrieveOnlineIdComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  RetrieveOnlineIdComponent.defaultProps = {
 
  };
export default RetrieveOnlineIdComponent;