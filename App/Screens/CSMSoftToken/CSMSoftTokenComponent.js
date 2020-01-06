import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GInputComponent,GIcon } from '../../CommonComponents';
import styles from '../ChangeSignInMethod/styles';
import gblStrings from '../../Constants/GlobalStrings';
// import { CustomCheckBox } from '../../AppComponents';



// eslint-disable-next-line react/prefer-stateless-function
class CSMSoftTokenComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
          firstToken:"",
          token1Val:true,
          secondToken:"",
          token2Val:true,
          additionaProtection:false,
          // isValidationSuccess:false,
          // errMsg:"",
        };
    }

    /* onChangeText = (stateKey) => text => {
        console.log("onChangeText:::>");
        this.setState({
            [stateKey]: text

        });
    } */

    onChangeText = (stateKey, val) => text => {
        // console.log("onChangeText:::>");
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
        this.props.navigation.navigate('ChangeSignInMethod');
    }
  
    
    onClickSave = () => {
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
        this.props.signInMethods("signInMethodsData", payloadData);
        // console.log("----signInMethods",payloadData);
        
        this.props.navigation.navigate('ChangeSignInMethod',{showAlert:true,message:gblStrings.userManagement.softToken,index:1});
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        } 
            return false;
       
    }

    validateFields = () => {
        
        let errMsg = "";
        let isValidationSuccess = false;
        if (this.isEmpty(this.state.firstToken)) {
            errMsg="error";
            this.setState({ token1Val: false });
        } 
        else{
            this.setState({ token1Val: true });
        }
         if (this.isEmpty(this.state.secondToken)) {
            errMsg="error";
            this.setState({ token2Val: false });
        }
        else{
            this.setState({ token2Val: true });
        }
         
        if (errMsg !== "error") {
            isValidationSuccess = true;
        if (isValidationSuccess) {
            this.onClickSave();
        }
    }
    }

    render() {
        return(
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
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
                // propInputStyle={!this.state.validationEmail ? styles.userIDTextBoxError : styles.userIDTextBox} 
                propInputStyle={styles.userIDTextBox}
                value={this.state.firstToken}
                onChangeText={this.onChangeText("firstToken","token1Val")}
                maxLength={6}
                // validateError={this.state.validateEmail}
                errorFlag={!this.state.token1Val}
                errorText="Please Enter First Token"
                />
                </View>
                </View>
                <View style={styles.rowFlex}>
                <Text style={styles.lblTxtToken}>{gblStrings.userManagement.secondToken}</Text>
                <View style={styles.widthView}>
                <GInputComponent
                // propInputStyle={!this.state.validationEmail ? styles.userIDTextBoxError : styles.userIDTextBox} 
                propInputStyle={styles.userIDTextBox}
                value={this.state.secondToken}
                onChangeText={this.onChangeText("secondToken","token2Val")}
                maxLength={6}
                errorFlag={!this.state.token2Val}
                errorText="Please Enter Second Token"
                // validateError={this.state.validateEmail}
                />
                </View>
                </View>
                {/* <View style={styles.agreeSectionGrp} >
                            <CustomCheckBox
                                size={24}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor={"#707070"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.agreeTermsTxt}
                                label={gblStrings.userManagement.additionaProtection}
                                selected={this.state.additionaProtection}
                                onPress={this.onCheckBoxCheck}
                            />

        </View> */}
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
                
            </View>
        );
}
}
CSMSoftTokenComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    // signInMethodsData : PropTypes.instanceOf(Object),
    signInMethods : PropTypes.func
};

CSMSoftTokenComponent.defaultProps = {
    navigation:{},
    // signInMethodsData:{},
    signInMethods:() => {}

};
export default CSMSoftTokenComponent;