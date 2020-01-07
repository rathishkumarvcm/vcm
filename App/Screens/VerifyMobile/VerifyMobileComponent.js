import React, { Component } from 'react';
import { Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { GInputComponent,GButtonComponent, GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class VerifyMobileComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            validateMobile : false,
            mobileNumber : '',
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigateVerifyOTP = () =>{
        //  Joint Account , New User
        const specialMFAUserType = (this.props && this.props.navigation && this.props.navigation.getParam('SpecialMFA',''));   
        this.props.navigation.navigate('passwordRecoveryOtp',{fromPage:'SpecialMFA',SpecialMFA:specialMFAUserType});   
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        } 
        return false;        
    }

    setMobileNumber = text => {
        this.setState({ mobileNumber : text });
    }

    onClickNext = () =>{        
       if(this.isEmpty(this.state.mobileNumber) || this.state.mobileNumber.length<gblStrings.maxLength.mobileNo){
            this.setState({ validateMobile : true });
       }else{
            this.setState({ validateMobile : false });
            this.navigateVerifyOTP();
       }
    }
    
    render(){
        const specialMFAUserType = (this.props && this.props.navigation && this.props.navigation.getParam('SpecialMFA',''));         
        return(
            <View style={styles.container}>
            {/* {
                this.props.stateCityData.isLoading && <GLoadingSpinner />
            } */}
                <GHeaderComponent navigation={this.props.navigation} />                    
                <ScrollView style={styles.scrollViewFlex}>
                    <View style={styles.headContainer}>        
                    {
                        (specialMFAUserType!=="" && specialMFAUserType!=="UserForm")?
                        <View style={styles.pagerContainer}>
                            <View style={styles.pagerOne} />    
                            <View style={styles.pagerOne} />    
                            <View style={styles.pagerTwo} />    
                            <View style={styles.pagerTwo} />                                
                        </View>
                        :null
                    }

                        <Text style={styles.headTitle}>
                            {gblStrings.userManagement.verification} 
                        </Text>
                        <Text style={styles.headDescTitle}>
                            {gblStrings.userManagement.userDetails} 
                        </Text>
                        <Text style={styles.mobileNumberLabel}>
                            {gblStrings.accManagement.mobileNo} 
                        </Text>

                        <GInputComponent 
                            propInputStyle={styles.mobileNumberInputText} 
                            placeholder=""
                            keyboardType="numeric"
                            maxLength={gblStrings.maxLength.mobileNo}                            
                            onChangeText={this.setMobileNumber}                         
                            value={this.state.mobileNumber}
                            errorFlag={this.state.validateMobile}
                            errorText={gblStrings.accManagement.invalidMobileNoMsg}
                        />

                        <View style={styles.btnGroup}>   
                            <GButtonComponent
                                    buttonStyle={styles.normalWhiteBtn}
                                    buttonText={gblStrings.common.back}
                                    textStyle={styles.normalWhiteBtnTxt}
                                    onPress={this.goBack}
                            />
                            <GButtonComponent
                                buttonStyle={styles.normalWhiteBtn}
                                buttonText={gblStrings.common.cancel}
                                textStyle={styles.normalWhiteBtnTxt}
                                onPress={this.goBack}
                            />
                            <GButtonComponent
                                buttonStyle={styles.normalBlackBtn}
                                buttonText={gblStrings.common.next}
                                textStyle={styles.normalBlackBtnTxt}
                                onPress={this.onClickNext}                           
                            />
                        </View>

                    </View>                
                    <GFooterSettingsComponent />
                </ScrollView>            
            </View>
        );
    }
}

VerifyMobileComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),    
};

VerifyMobileComponent.defaultProps = {};

export default VerifyMobileComponent;