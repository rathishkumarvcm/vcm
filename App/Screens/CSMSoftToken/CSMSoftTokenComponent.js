import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GTitleBarComponent, GInputComponent } from '../../CommonComponents';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';
//  import { CustomCheckBox } from '../../AppComponents';



//  eslint-disable-next-line react/prefer-stateless-function
class CSMSoftTokenComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
          firstToken:"",
          // token1Val:true,
          secondToken:"",
          // token2Val:true,
          additionaProtection:false,
          //  isValidationSuccess:false,
          //  errMsg:"",
        };
    }

    /* onChangeText = (stateKey) => text => {
        console.log("onChangeText:::>");
        this.setState({
            [stateKey]: text

        });
    } */

    onChangeText = (stateKey, val) => text => {
        //  console.log("onChangeText:::>");
        this.setState({
            [stateKey]: text,
            [val]: (!this.isEmpty(text)),
        });
    }

    onCheckBoxCheck = () =>
    {
        this.setState(prevState =>({additionaProtection: !prevState.additionaProtection}));
    }
    
    onClickCancel = () => 
    {
        const{navigation}=this.props;
        navigation.navigate('ChangeSignInMethod');
    }
  
    
    onClickSave = () => {
        const{navigation,signInMethods}=this.props;
        let payloadData = {} ;
        const date = new Date().getDate(); 
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear(); 
        const hours = new Date().getHours(); 
        const min = new Date().getMinutes(); 
        const sec = new Date().getSeconds(); 
        const updatedDate=`${date} / ${month} / ${year} ${hours} : ${min} : ${sec}`;
        payloadData = {
            selectedMethod:'SOFTTOKEN',
            lastUpdatedTime:updatedDate
        };
        signInMethods("signInMethodsData", payloadData);
        //  console.log("----signInMethods",payloadData);
        
        navigation.navigate('ChangeSignInMethod',{showAlert:true,message:globalString.userManagement.softToken,index:1});
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        } 
            return false;
       
    }

    validateFields = () => {
        const{firstToken,secondToken}=this.state;
        let errMsg = "";
        let isValidationSuccess = false;
        if (this.isEmpty(firstToken)) {
            errMsg="error";
            // this.setState({ token1Val: false });
        } 
        else{
            // this.setState({ token1Val: true });
        }
         if (this.isEmpty(secondToken)) {
            errMsg="error";
            // this.setState({ token2Val: false });
        }
        else{
            // this.setState({ token2Val: true });
        }
         
        if (errMsg !== "error") {
            isValidationSuccess = true;
        if (isValidationSuccess) {
            this.onClickSave();
        }
    }
    }

    render() {
        const {booSecurePin,errSecurePin,securePin} = this.state;
        return(
            <View style={styles.container}>
              
            <GTitleBarComponent
                toolbarTiltle="Change Sign In Method"
                backPress={this.navigationGoBack}
            />

            <View style={styles.layoutContainer}>
                <View style={styles.cornerTriangle} />
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>

                    <View style={styles.contentContainer}>

                        <View style={styles.securePINDetailsContainer}>

                            <Text style={styles.currentPINText}>
                            Download the Token Generation
                            </Text>
                            <Text style={styles.mandatoryText}>
                            Application from the below link and enter the Token Details
                            </Text>

                            <Text style={styles.mandatoryText}>
                            * All fields are mandatory except mentioned optional.
                            </Text>

                            <Text style={styles.securePINText}>
                                {globalString.userManagement.firstToken}
                            </Text>

                            <GInputComponent
                                propInputStyle={booSecurePin ? styles.securePINTextBoxError : styles.securePINTextBox}
                                // placeholder={globalString.recoverPassword.placeholder_ssn}
                                onChangeText={this.setSecurePIN}    
                                value={securePin}                            
                            />   
                            <Text style={styles.errorMessage}>{errSecurePin}</Text>

                            <Text style={styles.securePINText}>
                                {globalString.userManagement.secondToken}
                            </Text>

                            <GInputComponent
                                propInputStyle={booSecurePin ? styles.securePINTextBoxError : styles.securePINTextBox}
                                // placeholder={globalString.recoverPassword.placeholder_ssn}
                                onChangeText={this.setSecurePIN}    
                                value={securePin}                            
                            />   
                            <Text style={styles.errorMessage}>{errSecurePin}</Text>

                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.bottomView}>

                <TouchableOpacity onPress={this.navigationResetOpt} style={styles.touchableStyle}>
                    <Text style={styles.submitButtonStyle} onPress={this.navigationResetOpt}>
                        {globalString.common.save}
                    </Text>
                </TouchableOpacity>

            </View>
            </View>
            /* View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollViewFlex}>
                <TouchableOpacity>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />

                </TouchableOpacity>
                <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                {gblStrings.userManagement.changeSignInHeadingSoftToken}
                </Text>
                <Text style={styles.lblLine} />
                <View style={styles.widthView}>
                <Text style={styles.lblTxt}>
                {gblStrings.userManagement.downloadTokengen}
                </Text>
                </View>
                <TouchableOpacity style={styles.touchableOpacityStyle}>
                <Text style={styles.txtUnderline}>Download Token Generating Application </Text>
                </TouchableOpacity>
                <View style={styles.rowFlex}>
                <Text style={styles.lblTxtToken}>{gblStrings.userManagement.firstToken}</Text>
                <View style={styles.widthView}>
                <GInputComponent
                //  propInputStyle={!this.state.validationEmail ? styles.userIDTextBoxError : styles.userIDTextBox} 
                propInputStyle={styles.userIDTextBox}
                value={firstToken}
                onChangeText={this.onChangeText("firstToken","token1Val")}
                maxLength={6}
                //  validateError={this.state.validateEmail}
                errorFlag={!token1Val}
                errorText="Please Enter First Token"
                />
                </View>
                </View>
                <View style={styles.rowFlex}>
                <Text style={styles.lblTxtToken}>{gblStrings.userManagement.secondToken}</Text>
                <View style={styles.widthView}>
                <GInputComponent
                //  propInputStyle={!this.state.validationEmail ? styles.userIDTextBoxError : styles.userIDTextBox} 
                propInputStyle={styles.userIDTextBox}
                value={secondToken}
                onChangeText={this.onChangeText("secondToken","token2Val")}
                maxLength={6}
                errorFlag={!token2Val}
                errorText="Please Enter Second Token"
                //  validateError={this.state.validateEmail}
                />
                </View>
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
                onPress={this.validateFields}
                />
                
                </View>
                <GFooterComponent />
                </ScrollView>
                
        </View> */ 
        );
}
}
CSMSoftTokenComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    //  signInMethodsData : PropTypes.instanceOf(Object),
    signInMethods : PropTypes.func
};

CSMSoftTokenComponent.defaultProps = {
    navigation:{},
    //  signInMethodsData:{},
    signInMethods:() => {}

};
export default CSMSoftTokenComponent;