import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GRadioButtonComponent,GIcon } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { CustomCheckBox } from '../../AppComponents';
import PropTypes from 'prop-types';
//import { MaskService } from 'react-native-masked-text';


class CSMOtp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            additionaProtection:true,
            radioButton: false,
            radioButtonIndex: 0,
            mobileNo:"",
            email:"",
            signInMethods : [         
            ],
            saveCurrentDevice:false
        };
    }

    componentDidMount() {
        if(this.props && this.props.initialState && this.props.initialState.verifiedEmail&& this.props.initialState.phone){
             
              this.setState({
                email : this.props.initialState.verifiedEmail,
                mobileNo : this.props.initialState.phone,
              });
              this.renderMaskedInput();
                
        }
        console.log("------>mobbbbb",this.state.email,this.state.mobileNo);
             
    }

    
    renderMaskedInput = () => {
        
        var strmobile = this.props.initialState.phone;
        console.log("------>mobbbbbnext",strmobile);
        //var maskmobile = strmobile.substring(0,2)+strmobile.substring(2,8).replace(/\d/g,"*")+strmobile.substring(8,10)
        var maskmobile = strmobile.substring(4,6)+strmobile.substring(6,12).replace(/\d/g,"*")+strmobile.substring(12,14)
        var stremail = this.props.initialState.verifiedEmail;
        var maskemail = "";
        this.setState({ signInMethods :[{ index1 : 0, question:"One Time Password to EmailID",additionalText:stremail},
        { index1 : 1, question:"One Time Password to Mobile",additionalText:maskmobile},
        { index1 : 2, question:"Answer Security Questions"}]});
      }

    onCheckBoxCheck = () =>
    {
        this.setState({saveCurrentDevice: !this.state.saveCurrentDevice});
    }

    onClickCancel = () => {
        this.props.navigation.navigate('ChangeSignInMethod');
    }
    onClickSave = () => {
        this.props.navigation.navigate('ChangeSignInMethod',{showAlert:true,message:gblStrings.userManagement.otp});
    }

    radioButtonClicked = (index) => {
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });
        //     if(index == 0)
        //     {
        //         //alert("OTP Selected");
        //         this.setState({alertString:gblStrings.userManagement.otp});
        //     }
        //     else if(index == 1)
        //     {
        //         //alert("Soft Token Selected");
        //         this.setState({alertString:gblStrings.userManagement.softToken,initialSelection:true});
        //     }
        //     else if(index == 2)
        //     {
        //         //alert("Push Notification");
        //         this.setState({alertString:gblStrings.userManagement.pushNotification,initialSelection:true});
        //     }   
        // }
        // else {
        //     this.setState({
        //         radioButton: false
        //     });
         }
    }

    render() {
        return(
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                <View style={styles.signInView} >
                <Text style={styles.signIntext}>
                {gblStrings.userManagement.changeSignInHeadingOTP}
                </Text>
                <Text style={styles.lblLine} />
                <View style={{ width: "100%" }}>
                <Text style={styles.lblTxt} >
                {gblStrings.userManagement.otpSignon}
                </Text>
                </View>
                {this.state.signInMethods.map((item,index) => 
                index == this.state.radioButtonIndex ? 
                <GRadioButtonComponent 
                onPress={()=>this.radioButtonClicked(index)}
                selected 
                questions = {item.question}
                additionalText = {item.additionalText}
                />
                :
                <GRadioButtonComponent 
                onPress={()=>this.radioButtonClicked(index)}
                selected = {false}
                questions = {item.question}
                additionalText = {item.additionalText}
                />   
                )}
                <Text style={styles.lblTxtSmall} >
                {gblStrings.userManagement.checkTheOption}
                </Text>
                <View style={styles.agreeSectionGrp} >
                            <CustomCheckBox
                                size={24}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor={"#707070"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.agreeTermsTxt}
                                label={gblStrings.userManagement.saveCurrentDevice}
                                selected={this.state.saveCurrentDevice}
                                onPress={this.onCheckBoxCheck}
                            />

                </View>
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.back}
                textStyle={styles.cancelButtonText}
                onPress={this.onClickCancel}
                />
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.cancel}
                textStyle={styles.cancelButtonText}
                onPress={this.onClickCancel}
                />
                <GButtonComponent
                buttonStyle={styles.saveButton}
                buttonText={gblStrings.common.save}
                textStyle={styles.saveButtonText}
                onPress={this.onClickSave}
                />
                </View>
                
                <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
} 
export default CSMOtp;
