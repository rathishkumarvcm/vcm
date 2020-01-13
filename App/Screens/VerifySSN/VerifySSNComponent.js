import React, { Component } from 'react';
import { Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GInputComponent,GButtonComponent, GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class VerifySSNComponent extends Component {
    constructor(props) {
        super(props);
        //   set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,
            validateSSN : false,
            socialSecurityNumber : '',
        };
    }

    goBack = () => {     
        const { navigation } = this.props;   
        navigation.goBack();
    }

    navigateVerifyMobileNumber = () =>{     
        const { navigation } = this.props;     
        //  Joint Account , New User
        const specialMFAUserType = (navigation.getParam('SpecialMFA',""));   
        navigation.push('verifyMobileNumber',{SpecialMFA:specialMFAUserType});    
    } 

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        }
        return false;        
    }

    setSocialSecurityNumber = text => {
        this.setState({ socialSecurityNumber : text });
    }

    onClickNext = () =>{         
        const { socialSecurityNumber } = this.state;         
       if(this.isEmpty(socialSecurityNumber) || socialSecurityNumber.length<gblStrings.maxLength.ssnNo){
            this.setState({ validateSSN : true });
       }else{
            this.setState({ validateSSN : false });
            this.navigateVerifyMobileNumber();
       }
    }
    
    render(){                        
        const { navigation } = this.props;
        const { socialSecurityNumber,validateSSN } = this.state; 
        const specialMFAUserType =(navigation && navigation.getParam('SpecialMFA',''));      
        //  console.log(`UserType-----${specialMFAUserType}`);
        return(
            <View style={styles.container}>
            {/* {
                this.props.stateCityData.isLoading && <GLoadingSpinner />
            } */}
                <GHeaderComponent navigation={navigation} />                    
                <ScrollView style={styles.scrollViewFlex}>
                    <View style={styles.headContainer}>                                        
                    {
                        (specialMFAUserType!=="" && specialMFAUserType!=="UserForm")? (
                            <View style={styles.pagerContainer}>
                                <View style={styles.pagerOne} />    
                                <View style={styles.pagerTwo} />    
                                <View style={styles.pagerTwo} />    
                                <View style={styles.pagerTwo} />                                
                            </View>
                          )
                        :null
                    }
                        <Text style={styles.headTitle}>
                            {gblStrings.userManagement.verification} 
                        </Text>
                        <Text style={styles.headDescTitle}>
                            {gblStrings.userManagement.userDetails} 
                        </Text>
                        <Text style={styles.socialSecurityLabel}>
                            {gblStrings.accManagement.socialSecurityNo}
                        </Text>

                        <GInputComponent 
                            propInputStyle={styles.socialSecurityInputText} 
                            placeholder=""
                            keyboardType="numeric"
                            maxLength={gblStrings.maxLength.ssnNo}
                            secureTextEntry
                            onChangeText={this.setSocialSecurityNumber}                         
                            value={socialSecurityNumber}
                            errorFlag={validateSSN}
                            errorText="Enter a valid Social Security Number"
                        />

                        <View style={styles.btnGroup}>                    
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

VerifySSNComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),    
};

VerifySSNComponent.defaultProps = {
    navigation : {}
};

export default VerifySSNComponent;