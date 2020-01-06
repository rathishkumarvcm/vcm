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
        this.state = {
              // radioButton: false,
              radioButtonIndex: this.props.navigation.getParam('index'),
              lastUpdate:''
            };
    }

    componentDidMount()
    {
        this.getInitialValues();
     }

     componentDidUpdate(prevProps) 
     {
        // console.log("componentDidUpdate::::> "+prevState);
        if (this.props !== prevProps) {
            if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.selectedMethod &&
                this.props.signInMethodsData.selectedMethod === "OTP")
            {
                this.setState({radioButtonIndex:0});
            }
            else if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.selectedMethod &&
                this.props.signInMethodsData.selectedMethod === "SOFTTOKEN")
            {
                this.setState({radioButtonIndex:1});
            }
            else if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.selectedMethod &&
                this.props.signInMethodsData.selectedMethod === "PUSHNOTIFICATION")
            {
                this.setState({radioButtonIndex:2});
            }
            if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.lastUpdatedTime)
            {
                this.setState({lastUpdate:this.props.signInMethodsData.lastUpdatedTime});
            }
        }
     }

     getInitialValues = () => {
        if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.selectedMethod &&
            this.props.signInMethodsData.selectedMethod === "OTP")
        {
            this.setState({radioButtonIndex:0});
        }
        else if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.selectedMethod &&
            this.props.signInMethodsData.selectedMethod === "SOFTTOKEN")
        {
            this.setState({radioButtonIndex:1});
        }
        else if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.selectedMethod &&
            this.props.signInMethodsData.selectedMethod === "PUSHNOTIFICATION")
        {
            this.setState({radioButtonIndex:2});
        }
        if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.lastUpdatedTime)
        {
            this.setState({lastUpdate:this.props.signInMethodsData.lastUpdatedTime});
        }
     }

       onClickContinue = () => 
       { 
        if(this.state.radioButtonIndex === 0)
        {
        this.props.navigation.navigate('CSMOtp');
        }
        if(this.state.radioButtonIndex === 1)
        {
        this.props.navigation.navigate('CSMSoftTokenComponent');
        }
        if(this.state.radioButtonIndex === 2)
        {
        this.props.navigation.navigate('CSMPushNotificationComponent');  
        }
    }

    radioButtonClicked = (index) =>() =>{
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                // radioButton:false
            });
            
        }
        else {
            this.setState({
                // radioButton:false
            });
        }
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
      

    render() { 
        return(
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
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
                {this.props.navigation.getParam('showAlert')?
                (<View style={styles.messageFlex}>
                <Text style={styles.messageText}>{this.props.navigation.getParam('message')}</Text>
                 </View>):null 
                }
                <View style={styles.widthView}>
                <Text style={styles.lblTxt}>
                {gblStrings.userManagement.changeSignInSelection}
                </Text>
                <Text style={styles.lblTxtSmall}>
                Last Update: {this.state.lastUpdate}
                </Text>
                </View> 
                {signInMethods.map((item,index) => 
                index === this.state.radioButtonIndex ? 
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