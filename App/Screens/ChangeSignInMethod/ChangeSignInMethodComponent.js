/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GRadioButtonComponent,GIcon} from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';

const signInMethods = [
    { index1 : 0, question:"One Time Password",additionalText:"You will receive OTP during Sign In"},
    { index1 : 1, question:"Soft Token",additionalText:"Lorem Ipsum Lorem Ipsum"},
    { index1 : 2, question:"Push Notification",additionalText:"Lorem Ipsum Lorem Ipsum"}
];

class ChangeSignInMethod extends Component {
    constructor(props) {
        super(props);
        const{navigation}=this.props;
        this.state = {
              //  radioButton: false,
              radioButtonIndex: navigation.getParam('index'),
              lastUpdate:''
            };
    }

    componentDidMount()
    {
        this.getInitialValues();
     }

     componentDidUpdate(prevProps) 
     {
        //  console.log("componentDidUpdate::::> "+prevState);
        if (this.props !== prevProps) {
            this.getUpdatedValues();
        }
     }

     getInitialValues = () => {
         const{signInMethodsData}=this.props;
        if(this.props && signInMethodsData && signInMethodsData.selectedMethod &&
            signInMethodsData.selectedMethod === "OTP")
        {
            this.setState({radioButtonIndex:0});
        }
        else if(this.props && signInMethodsData && signInMethodsData.selectedMethod &&
            signInMethodsData.selectedMethod === "SOFTTOKEN")
        {
            this.setState({radioButtonIndex:1});
        }
        else if(this.props && signInMethodsData && signInMethodsData.selectedMethod &&
            signInMethodsData.selectedMethod === "PUSHNOTIFICATION")
        {
            this.setState({radioButtonIndex:2});
        }
        if(this.props && signInMethodsData && signInMethodsData.lastUpdatedTime)
        {
            this.setState({lastUpdate:signInMethodsData.lastUpdatedTime});
        }
     }

     getUpdatedValues = () =>
     {
        const{signInMethodsData}=this.props;
        if(this.props && signInMethodsData && signInMethodsData.selectedMethod &&
            signInMethodsData.selectedMethod === "OTP")
        {
            this.setState({radioButtonIndex:0});
        }
        else if(this.props && signInMethodsData && signInMethodsData.selectedMethod &&
            signInMethodsData.selectedMethod === "SOFTTOKEN")
        {
            this.setState({radioButtonIndex:1});
        }
        else if(this.props && signInMethodsData && signInMethodsData.selectedMethod &&
            signInMethodsData.selectedMethod === "PUSHNOTIFICATION")
        {
            this.setState({radioButtonIndex:2});
        }
        if(this.props && signInMethodsData && signInMethodsData.lastUpdatedTime)
        {
            this.setState({lastUpdate:signInMethodsData.lastUpdatedTime});
        }
     }

       onClickContinue = () => 
       { 
           const{radioButtonIndex}=this.state;
           const{navigation}=this.props;
        if(radioButtonIndex === 0)
        {
       navigation.navigate('CSMOtp');
        }
        if(radioButtonIndex === 1)
        {
        navigation.navigate('CSMSoftTokenComponent');
        }
        if(radioButtonIndex === 2)
        {
        navigation.navigate('CSMPushNotificationComponent');  
        }
    }

    radioButtonClicked = (index) =>() =>{
        const{radioButtonIndex}=this.state;
        if (index !== radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                //  radioButton:false
            });
            
        }
        else {
            this.setState({
                //  radioButton:false
            });
        }
    }

    goBack = () => {
        const{navigation}=this.props;
        navigation.goBack();
    }
      

    render() { 
        const{navigation}=this.props;
        const{radioButtonIndex,lastUpdate}=this.state;
        return(
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollViewFlex}>
                <TouchableOpacity onPress={(this.goBack)}>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />

                </TouchableOpacity>
                <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                {gblStrings.userManagement.changeSignInHeading}
                </Text>
                
                <Text style={styles.lblLine} />
                {navigation.getParam('showAlert')?
                (<View style={styles.messageFlex}>
                <Text style={styles.messageText}>{navigation.getParam('message')}</Text>
                 </View>):null 
                }
                <View style={styles.widthView}>
                <Text style={styles.lblTxt}>
                {gblStrings.userManagement.changeSignInSelection}
                </Text>
                <Text style={styles.lblTxtSmall}>
                Last Update: {lastUpdate}
                </Text>
                </View> 
                {signInMethods.map((item,index) => 
                index === radioButtonIndex ? 
                <GRadioButtonComponent 
                onPress={this.radioButtonClicked(index)}
                selected 
                questions = {item.question}
                additionalText ={item.additionalText}
                />
                :
                <GRadioButtonComponent 
                onPress={this.radioButtonClicked(index)}
                selected = {false}
                questions = {item.question}
                additionalText ={item.additionalText}
                />   
                )}
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.back}
                textStyle={styles.cancelButtonText}
                onPress={this.goBack}
                />
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.cancel}
                textStyle={styles.cancelButtonText}
                onPress={this.goBack}
                />
                <GButtonComponent
                buttonStyle={styles.saveButton}
                buttonText={gblStrings.common.continue}
                textStyle={styles.saveButtonText}
                onPress={this.onClickContinue}
                />
                { /* <View style={styles.bottomView}>
                <Text style={styles.lblTxtBottom}>{gblStrings.userManagement.quickSigninEnabledText}</Text>
                <Text style={styles.lblTxtBottom}>{gblStrings.userManagement.toEnable}</Text>
                <Text style={styles.lblTxtBottomTxt}>{gblStrings.userManagement.toDisable}</Text>
                </View> */ }
                </View> 
                <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
ChangeSignInMethod.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    signInMethodsData : PropTypes.instanceOf(Object),
    
};

ChangeSignInMethod.defaultProps = {
    navigation: {},
    signInMethodsData:{}

};
export default ChangeSignInMethod;