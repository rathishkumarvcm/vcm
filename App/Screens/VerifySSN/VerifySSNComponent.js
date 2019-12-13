import React, { Component } from 'react';
import { Text, View, ScrollView} from 'react-native';
import { styles } from './styles';
import { GInputComponent,GButtonComponent, GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import PropTypes from 'prop-types';
import gblStrings from '../../Constants/GlobalStrings';

class VerifySSNComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            validateSSN : false,
            socialSecurityNumber : '',
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigateVerifyMobileNumber = () => this.props.navigation.navigate('verifyMobileNumber');   

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    setSocialSecurityNumber = text => {
        this.setState({ socialSecurityNumber : text });
    }

    onClickNext = () =>{        
       if(this.isEmpty(this.state.socialSecurityNumber) || this.state.socialSecurityNumber.length<9){
            this.setState({ validateSSN : true });
       }else{
            this.setState({ validateSSN : false });
            this.navigateVerifyMobileNumber();
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
                            <View style={styles.pagerTwo} />    
                            <View style={styles.pagerTwo} />    
                            <View style={styles.pagerTwo} />                                
                        </View>

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
                            placeholder={""}
                            keyboardType={'numeric'}
                            maxLength={gblStrings.maxLength.ssnNo}
                            secureTextEntry
                            onChangeText={this.setSocialSecurityNumber}                         
                            value={this.state.socialSecurityNumber}
                            errorFlag={this.state.validateSSN}
                            errorText={"Enter a valid Social Security Number"}
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

VerifySSNComponent.defaultProps = {};

export default VerifySSNComponent;