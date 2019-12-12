import React, { Component } from 'react';
import { Text, View, ScrollView} from 'react-native';
import { styles } from './styles';
import { GInputComponent,GButtonComponent, GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import PropTypes from 'prop-types';
import gblStrings from '../../Constants/GlobalStrings';

class VerifyMobileComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            validateMobile : false,
            mobileNumber : '',
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigateVerifyOTP = () => this.props.navigation.navigate('passwordRecoveryOtp',{fromPage:'SpecialMFA'});   

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    setMobileNumber = text => {
        this.setState({ mobileNumber : text });
    }

    onClickNext = () =>{        
       if(this.isEmpty(this.state.mobileNumber) || this.state.mobileNumber.length<10){
            this.setState({ validateMobile : true });
       }else{
            this.setState({ validateMobile : false });
            this.navigateVerifyOTP();
       }
    }
    
    render(){
        return(
            <View style={styles.container}>
            {/* {
                this.props.stateCityData.isLoading && <GLoadingSpinner />
            } */}
                <GHeaderComponent navigation={this.props.navigation} />                    
                <ScrollView style={{ flex: 0.85 }}>
                    <View style={styles.headContainer}>        
                                
                        <View style={styles.pagerContainer}>
                            <View style={styles.pagerOne} />    
                            <View style={styles.pagerOne} />    
                            <View style={styles.pagerTwo} />    
                            <View style={styles.pagerTwo} />                                
                        </View>

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
                            placeholder={""}
                            keyboardType={'numeric'}
                            maxLength={gblStrings.maxLength.mobile}                            
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