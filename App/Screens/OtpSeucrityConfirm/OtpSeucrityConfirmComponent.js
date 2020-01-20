import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GHeaderComponent,GIcon, GFooterComponent} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import PropTypes from 'prop-types';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

class OtpSeucrityConfirmComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            email:'',
            validationEmail: true
        };
    }

    componentDidMount(){
       
    }

    navigateLogin = ()=>this.props.navigation.navigate('login');

    navigatePassword = ()=>{

        RNSecureKeyStore.set("authProcessCompleted","true", {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
      .then((res) => {
          console.log("stored",res);
      }, (err) => {
          console.log(err);
      });

        
        this.props.navigation.navigate('dashboard');
    }

    goBack = ()=>this.props.navigation.goBack();
 
    render(){
        console.log("security",this.props.saveQuestionsData);
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={this.props.navigation}
             register
             />
        
            <ScrollView style={{flex:0.85}}>

                <CustomPageWizard 
                    currentPage={4}
                    lastPage
                />
            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"3 Setup Security Questions"}
                </Text>
            </View>

            <View style={styles.otpHeaderSection}>
                <Text style={styles.otpAuthHeader}>
                        {'Confirm Security Answers'}
                </Text> 
            </View>

            <View style={styles.securityList}>
                <View style={styles.securityListItem}>
                    <Text style={styles.securityListTitle}>
                    {"Security Question1"}
                    </Text>
                    <Text style={styles.securityListQuestion}>
                    {this.props.saveQuestionsData.list_security_questions[0].question1}   
                    </Text>
                    <Text style={styles.securityListAnswer}>
                    {this.props.saveQuestionsData.list_security_questions[0].answer1}
                    </Text>
                </View>

                <View style={styles.securityListItem}>
                    <Text style={styles.securityListTitle}>
                        {"Security Question2"}
                    </Text>
                    <Text style={styles.securityListQuestion}>
                    {this.props.saveQuestionsData.list_security_questions[1].question2}  
                    </Text>
                    <Text style={styles.securityListAnswer}>
                    {this.props.saveQuestionsData.list_security_questions[1].answer2}
                    </Text>
                </View>


                <View style={styles.securityListItem}>
                    <Text style={styles.securityListTitle}>
                        {"Security Question3"}
                    </Text>
                    <Text style={styles.securityListQuestion}>
                    {this.props.saveQuestionsData.list_security_questions[2].question3}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                    {this.props.saveQuestionsData.list_security_questions[2].answer3}
                    </Text>
                </View>

                <View style={styles.securityListItem2}>
                    <Text style={styles.securityListQuestion}>
                        {"Primary Email"}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                        {this.props.saveQuestionsData.primaryEmail}
                    </Text>
                </View>

               {/* <View style={styles.securityListItem2}>
                    <Text style={styles.securityListQuestion}>
                        {"Additional Email"}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                        {this.props.saveQuestionsData.additionalEmail}
                    </Text>
                </View>*/}


                <View style={styles.securityListItem1}>
                    <Text style={styles.securityListQuestion}>
                        {"Document Delivery preferences"}
                    </Text>
                    <Text style={styles.securityListAnswer}>
                        {this.props.saveQuestionsData.documentDeliveryPreference}
                    </Text>
                </View>

            </View>
        
             


                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Back"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigateLogin}
                />

                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.goBack}
                />

            <GButtonComponent 
                    buttonStyle={styles.sendOTPButton}
                    buttonText="Continue"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigatePassword}
            />

           
            
            <GFooterComponent/>
            </ScrollView>
            </View>
    
        );
    }
}

OtpSeucrityConfirmComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  OtpSeucrityConfirmComponent.defaultProps = {
 
  };

export default OtpSeucrityConfirmComponent;