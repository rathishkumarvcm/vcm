import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GRadioButtonComponent } from '../../CommonComponents';
import { styles } from '../ChangeSignInMethod/styles';
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
            saveCurrentDevice:false,
        };
    }

    componentDidMount() {
        if(this.props && this.props.initialState && this.props.initialState.email&& this.props.initialState.phone){
              this.renderMaskedInput();       
        }
        console.log("------>mobbbbb",this.state.email,this.state.mobileNo);
        if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.saveCurrentDevice)
        {
           this.setState({saveCurrentDevice:this.props.signInMethodsData.saveCurrentDevice});
        }

        if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.otpMethodType &&
            this.props.signInMethodsData.otpMethodType == "Email")
        {
            this.setState({radioButtonIndex:0});
        }
        else if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.otpMethodType &&
            this.props.signInMethodsData.otpMethodType == "Mobile")
        {
            this.setState({radioButtonIndex:1});
        }
        else if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.otpMethodType &&
            this.props.signInMethodsData.otpMethodType == "Security")
        {
            this.setState({radioButtonIndex:2});
        }
        
    }

    componentDidUpdate(prevProps, prevState) 
     {
        console.log("componentDidUpdate::::> "+prevState);
        if (this.props !== prevProps) {
            if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.saveCurrentDevice)
        {
           this.setState({saveCurrentDevice:this.props.signInMethodsData.saveCurrentDevice});
        }
        if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.otpMethodType &&
            this.props.signInMethodsData.otpMethodType == "Email")
        {
            this.setState({radioButtonIndex:0});
        }
        else if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.otpMethodType &&
            this.props.signInMethodsData.otpMethodType == "Mobile")
        {
            this.setState({radioButtonIndex:1});
        }
        else if(this.props && this.props.signInMethodsData && this.props.signInMethodsData.otpMethodType &&
            this.props.signInMethodsData.otpMethodType == "Security")
        {
            this.setState({radioButtonIndex:2});
        }
        }
    }
    
    
    
    renderMaskedInput = () => {
        this.setState({
            email : this.props.initialState.email,
            mobileNo : this.props.initialState.phone,
          });
        var strmobile = this.props.initialState.phone;
        console.log("------>mobbbbbnext",strmobile);
        //var maskmobile = strmobile.substring(0,2)+strmobile.substring(2,8).replace(/\d/g,"*")+strmobile.substring(8,10)
        var maskmobile = strmobile.substring(4,6)+strmobile.substring(6,12).replace(/\d/g,"*")+strmobile.substring(12,14);
        var myemailId = this.props.initialState.email;
        
        var maskedid = "";
        var index = myemailId.lastIndexOf("@");
        var prefix = myemailId.substring(0, index);
        var postfix = myemailId.substring(index);
        var mask = prefix.split('').map(function(o, i) {
        if (i == 0 || i == (index - 1)) {
            return o;
        } else {
            return '*';
        }
        }).join('');
        maskedid = mask + postfix;
        this.setState({ signInMethods :[{ index1 : 0, question:"One Time Password to EmailID",additionalText:maskedid},
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
        let payloadData = {};
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        var otpType = '';
          let updatedDate=date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
          if(this.state.radioButtonIndex == 0)
        {
            otpType = 'Email';
        }
        if(this.state.radioButtonIndex == 1)
        {
            otpType = 'Mobile';
        }
        if(this.state.radioButtonIndex == 2)
        {
            otpType = 'Security';
        }
        payloadData = {
            selectedMethod:'OTP',
            lastUpdatedTime:updatedDate,
            saveCurrentDevice:this.state.saveCurrentDevice,
            otpMethodType:otpType
        };
        this.props.signInMethods("signInMethodsData", payloadData);
        //console.log("----signInMethods",payloadData);
        this.props.navigation.navigate('ChangeSignInMethod',{showAlert:true,message:gblStrings.userManagement.otp,index:0});
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
CSMOtp.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState : PropTypes.instanceOf(Object),
    signInMethodsData : PropTypes.instanceOf(Object),
    signInMethods : PropTypes.func
};

export default CSMOtp;
