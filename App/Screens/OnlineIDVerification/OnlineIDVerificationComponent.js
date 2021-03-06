import React, { Component } from 'react';
import { Text,View,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {GButtonComponent,GHeaderComponent,GInputComponent,GFooterSettingsComponent} from '../../CommonComponents';

class OnlineIDVerificationComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            code:''
        };
    }

    componentDidMount(){
       
    }

    setCode = text => {
        this.setState({
            code : text
        });
    }




    navigatePassword = ()=>{
        const {navigation} = this.props;
        navigation.navigate('login');
    }

    goBack = () =>{
        const {navigation} = this.props;
        navigation.goBack();
    }


 
    render(){
        const {navigation} = this.props;
        const {code} = this.state;
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={navigation}
             register
             />
        
            <ScrollView style={styles.flexCont}>

           

           
            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    Check your Inbox
                </Text>
            </View>

            <View style={styles.newVictorySection2}>
                <Text style={styles.openInvestment1}>
                        You can now access your Online ID sent to your email id
                </Text>

            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        {"If you do not see the validation email in your inbox, Click "}
                <Text style={styles.openInvestmentlink}>
                    Resend
                </Text>
                <Text style={styles.openInvestment}>
                    {" Verification."}
                </Text>
                </Text>
            </View>

           {} 
            

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Enter the OTP       
                </Text>
            </View>

            
            <GInputComponent 
            propInputStyle={styles.optContainer}
            onChangeText={this.setCode}
            value={code}
            keyboardType="number-pad"
            maxLength={6}
            />

             
           
          
           <GButtonComponent 
           buttonStyle={styles.backButton}
           buttonText="Back"
           textStyle={styles.cancelButtonText}
           onPress={this.goBack}
           />


            <GFooterSettingsComponent />

            {/* <View style={styles.termsofuse}>
                <Text style={styles.termsofuseText}>
                    {"Need Assistance?  "}
                   
                <Text style={styles.forgotLineTextColor}>
                {"Get Help"}
                </Text>
                </Text>
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',marginTop:20}}>
                 <View style={{borderBottomWidth:1,borderBottomColor:'#56565A'}} />  
            </View>
            
           
            
            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText1}>
                    {"Investments for USAA Members"}
                </Text>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account."}
                </Text> 
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    {"Privacy Policy"}
                </Text>

                <Text style={styles.privacyText}>
                    {"User Agreement"}
                </Text>
            </View>

            <View style={styles.copyRightSection}>
                <Text style={styles.copyRightText}>
                    {"Copyright Victory Capital Management Inc. ©2020"}
                </Text>
           </View> */}

            </ScrollView>
            </View>
    
        );
    }
}


OnlineIDVerificationComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  OnlineIDVerificationComponent.defaultProps = {
    navigation : {}
  };
export default OnlineIDVerificationComponent;