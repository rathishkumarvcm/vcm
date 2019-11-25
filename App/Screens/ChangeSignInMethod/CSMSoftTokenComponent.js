import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GInputComponent,GIcon } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
//import { CustomCheckBox } from '../../AppComponents';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class CSMSoftTokenComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
          firstToken:"",
          secondToken:"",
          additionaProtection:false,
          isValidationSuccess:false,
          errMsg:""
        };
    }

    onChangeText = (stateKey) => text => {
        console.log("onChangeText:::>");
        this.setState({
            [stateKey]: text

        });
    }
    onCheckBoxCheck = () =>
    {
        this.setState({additionaProtection: !this.state.additionaProtection});
    }
    
    onClickCancel = () => {
        this.props.navigation.navigate('ChangeSignInMethod');
    }
    onClickSave = () => {
        this.props.navigation.navigate('ChangeSignInMethod',{showAlert:true,message:gblStrings.userManagement.softToken});
    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    validateFields = () => {
        
        var errMsg = "";
        var isValidationSuccess = false;
        if (this.isEmpty(this.state.firstToken)) {
            errMsg = "Please Answer All questions";
        } else if (this.isEmpty(this.state.secondToken)) {
            errMsg = "Please Answer All questions";
        }
         else {
            isValidationSuccess = true;
        }

        if (isValidationSuccess) {
            //this.props.navigation.navigate({ routeName: 'openAccPageFive', key: 'openAccPageFive' });
        }else {
            alert(errMsg);
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
                {gblStrings.userManagement.changeSignInHeadingSoftToken}
                </Text>
                <Text style={styles.lblLine} />
                <View style={{ width: "100%" }}>
                <Text style={styles.lblTxt} >
                {gblStrings.userManagement.downloadTokengen}
                </Text>
                </View>
                <TouchableOpacity style={styles.touchableOpacityStyle} >
                <Text style={styles.txtUnderline}>Download Token Generating Application </Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.lblTxtToken}>{gblStrings.userManagement.firstToken}</Text>
                <GInputComponent
                //propInputStyle={!this.state.validationEmail ? styles.userIDTextBoxError : styles.userIDTextBox} 
                propInputStyle={{ marginTop: "4%", width: "50%", }}
                value={this.state.firstToken}
                onChangeText={this.onChangeText("firstToken")}
                maxLength={6}
                //validateError={this.state.validateEmail}
                />
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.lblTxtToken}>{gblStrings.userManagement.secondToken}</Text>
                <GInputComponent
                //propInputStyle={!this.state.validationEmail ? styles.userIDTextBoxError : styles.userIDTextBox} 
                propInputStyle={{ marginTop: "4%", width: "50%", }}
                value={this.state.secondToken}
                onChangeText={this.onChangeText("secondToken")}
                maxLength={6}
                //validateError={this.state.validateEmail}
                />
                </View>
                {/*<View style={styles.agreeSectionGrp} >
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

        </View>*/}
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
CSMSoftTokenComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

CSMSoftTokenComponent.defaultProps = {

};
export default CSMSoftTokenComponent;