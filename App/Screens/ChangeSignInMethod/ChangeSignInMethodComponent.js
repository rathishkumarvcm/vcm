/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView,TouchableOpacity } from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GRadioButtonComponent,GIcon} from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { scaledHeight } from '../../Utils/Resolution';
import PropTypes from 'prop-types';


const signInMethods = [
    { index1 : 0, question:"One Time Password",additionalText:"You will receive OTP during Sign In"},
    { index1 : 1, question:"Soft Token",additionalText:"Lorem Ipsum Lorem Ipsum"},
    { index1 : 2, question:"Push Notification",additionalText:"Lorem Ipsum Lorem Ipsum"}
];

class ChangeSignInMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
              radioButton: false,
              radioButtonIndex: 0,
              alertString:"",
              initialSelection:false,
            };
    }
    
    onClickContinue = () => 
    { 
        if(this.state.radioButtonIndex == 0)
        {
        this.props.navigation.navigate('CSMOtp');
        }
        if(this.state.radioButtonIndex == 1)
        {
        this.props.navigation.navigate('CSMSoftTokenComponent');
        }
        if(this.state.radioButtonIndex == 2)
        {
        this.props.navigation.navigate('CSMPushNotificationComponent');  
        }
    }
    radioButtonClicked = (index) => {
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });
            if(index == 0)
            {
                //alert("OTP Selected");
                //this.setState({alertString:gblStrings.userManagement.otp});
            }
            else if(index == 1)
            {
                //alert("Soft Token Selected");
                //this.setState({alertString:gblStrings.userManagement.softToken,initialSelection:true});
            }
            else if(index == 2)
            {
                //alert("Push Notification");
                //this.setState({alertString:gblStrings.userManagement.pushNotification,initialSelection:true});
            }   
        }
        else {
            this.setState({
                radioButton: false
            });
        }
    }
    render() {
        return(
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                <TouchableOpacity >
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />

                </TouchableOpacity>
                <View style={styles.signInView} >
                <Text style={styles.signIntext}>
                {gblStrings.userManagement.changeSignInHeading}
                </Text>
                
                <Text style={styles.lblLine} />
                {this.props.navigation.getParam('showAlert')?
                (<View style={{backgroundColor:"#EEEEEE",marginTop:scaledHeight(20),}} >
                <Text style={{marginTop:"5%",marginBottom:"5%",width:"80%",marginLeft:"5%",}}>{this.props.navigation.getParam('message')}</Text>
                 </View>):null 
                }
                <View style={{ width: "100%" }}>
                <Text style={styles.lblTxt} >
                {gblStrings.userManagement.changeSignInSelection}
                </Text>
                <Text style={styles.lblTxtSmall} >
                Last Update : 21/05/2018 5:22 PM
                </Text>
                </View> 
                {signInMethods.map((item,index) => 
                index == this.state.radioButtonIndex ? 
                <GRadioButtonComponent 
                onPress={()=>this.radioButtonClicked(index)}
                selected 
                questions = {item.question}
                additionalText ={item.additionalText}
                />
                :
                <GRadioButtonComponent 
                onPress={()=>this.radioButtonClicked(index)}
                selected = {false}
                questions = {item.question}
                additionalText ={item.additionalText}
                />   
                )}
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.back}
                textStyle={styles.cancelButtonText}
                //onPress={()=>this.props.navigation.navigate('registerPassword')}
                />
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.cancel}
                textStyle={styles.cancelButtonText}
                //onPress={()=>this.props.navigation.navigate('registerPassword')}
                />
                <GButtonComponent
                buttonStyle={styles.saveButton}
                buttonText={gblStrings.common.continue}
                textStyle={styles.saveButtonText}
                onPress={this.onClickContinue}
                />
                {/* <View style={styles.bottomView}>
                <Text style={styles.lblTxtBottom}>{gblStrings.userManagement.quickSigninEnabledText}</Text>
                <Text style={styles.lblTxtBottom}>{gblStrings.userManagement.toEnable}</Text>
                <Text style={styles.lblTxtBottomTxt}>{gblStrings.userManagement.toDisable}</Text>
                </View>*/}
                </View> 
                <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
ChangeSignInMethod.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ChangeSignInMethod.defaultProps = {

};
export default ChangeSignInMethod;