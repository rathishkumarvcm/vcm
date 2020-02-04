import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent,GIcon,GRadioButtonComponent} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';


class OtpSeucrityQuestionsComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            valueDropDown : false
        };
    }

    componentDidMount(){
       
    }

    navigatePassword = ()=>{
        const {navigation} = this.props;
        navigation.navigate('registerPassword');
    }
 
    render(){
        const {navigation} = this.props;
        const {valueDropDown} = this.state;
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={navigation}
             register
             />
        
            <ScrollView style={styles.flexContainer}>
                <TouchableOpacity onPress={this.goBack} style={styles.goBack}>
                        <GIcon 
                            name="left"
                            type="antdesign"
                            size={25}
                            color="black"
                        />
                </TouchableOpacity>

                <CustomPageWizard 
                    currentPage={3}
                    lastPage
                />

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    3 Setup Security Questions
                </Text>
            </View>

            <View style={styles.otpHeaderSection}>
                <Text style={styles.otpAuthHeader}>
                        Setup Security Questions
                </Text> 
            </View>

             <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Question1       
                </Text>
             </View>

            <TouchableOpacity style={styles.flexRow} onPress={this.selectTheState}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    editable={false}
                    value={valueDropDown}
                />



                <TouchableOpacity style={styles.questionDropDown} onPress={this.selectTheState}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </TouchableOpacity>

            <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    editable={false}
                    value={valueDropDown}
            />


            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Question2       
                </Text>
            </View>

            <TouchableOpacity style={styles.flexRow} onPress={this.selectTheState}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    editable={false}
                    value={valueDropDown}
                />

                <TouchableOpacity style={styles.questionDropDown} onPress={this.selectTheState}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </TouchableOpacity>

            <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    editable={false}
                    value={valueDropDown}
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Question3       
                </Text>
            </View>

            <TouchableOpacity style={styles.flexRow} onPress={this.selectTheState}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    editable={false}
                    value={valueDropDown}
                />

                <TouchableOpacity style={styles.questionDropDown} onPress={this.selectTheState}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </TouchableOpacity>

            <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    editable={false}
                    value={valueDropDown}
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Confirm Primary Email       
                </Text>
            </View>

                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    editable={false}
                    value={valueDropDown}
                />

            



                <View style={styles.deliverView}>
                        <GRadioButtonComponent selected // questionsStyle={{width:'40%',flexWrap:'wrap'}} 
                        questions="Deliver all my documents at vcm.com"
                        />

                        <GRadioButtonComponent questions="Do not change my current document delivery" />
                </View>
             


                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Back"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigatePassword}
                />

                <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.navigatePassword}
                />

            <GButtonComponent 
                    buttonStyle={styles.sendOTPButton}
                    buttonText="Continue"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigatePassword}
            />

            <View style={styles.marginTwenty}>
                 <View style={styles.usaaInvestment} />  
            </View>
            
            
            
            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText1}>
                    Investments for USAA Members
                </Text>
                <Text style={styles.openInvestment}>
                        For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.
                </Text> 
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    Privacy Policy
                </Text>

                <Text style={styles.privacyText}>
                    User Agreement
                </Text>
            </View>

            <View style={styles.copyRightSection}>
                <Text style={styles.copyRightText}>
                    Copyright Victory Capital Management Inc. ©2020
                </Text>
            </View>

            </ScrollView>
            </View>
    
        );
    }
}


OtpSeucrityQuestionsComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  OtpSeucrityQuestionsComponent.defaultProps = {
    navigation:{}
  };

export default OtpSeucrityQuestionsComponent;