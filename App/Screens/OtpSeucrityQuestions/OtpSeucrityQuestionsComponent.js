import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GHeaderComponent,GIcon,GRadioButtonComponent} from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import PropTypes from 'prop-types';


class OtpSeucrityQuestionsComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            email:'',
            validationEmail: true
        };
    }

    componentDidMount(){
       
    }

    navigatePassword = ()=>this.props.navigation.navigate('registerPassword')
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={this.props.navigation}
             register
             />
        
            <ScrollView style={{flex:0.85}}>
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
                    {"3 Setup Security Questions"}
                </Text>
            </View>

            <View style={styles.otpHeaderSection}>
                <Text style={styles.otpAuthHeader}>
                        {'Setup Security Questions'}
                </Text> 
            </View>

             <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Question1"}       
                </Text>
             </View>

            <TouchableOpacity style={{flexDirection:'row'}} onPress={this.selectTheState}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder={""}
                    editable={false}
                    value={this.state.valueDropDown}
                />

                <TouchableOpacity style={{position:'absolute',right:20,top:14}} onPress={this.selectTheState}>
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
                    placeholder={""}
                    editable={false}
                    value={this.state.valueDropDown}
            />


            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Question2"}       
                </Text>
            </View>

            <TouchableOpacity style={{flexDirection:'row'}} onPress={this.selectTheState}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder={""}
                    editable={false}
                    value={this.state.valueDropDown}
                />

                <TouchableOpacity style={{position:'absolute',right:20,top:14}} onPress={this.selectTheState}>
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
                    placeholder={""}
                    editable={false}
                    value={this.state.valueDropDown}
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Question3"}       
                </Text>
            </View>

            <TouchableOpacity style={{flexDirection:'row'}} onPress={this.selectTheState}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder={""}
                    editable={false}
                    value={this.state.valueDropDown}
                />

                <TouchableOpacity style={{position:'absolute',right:20,top:14}} onPress={this.selectTheState}>
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
                    placeholder={""}
                    editable={false}
                    value={this.state.valueDropDown}
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Confirm Primary Email"}       
                </Text>
            </View>

                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder={""}
                    editable={false}
                    value={this.state.valueDropDown}
                />

            



                <View style={{marginLeft:'4%',marginRight:'4%'}}>
                        <GRadioButtonComponent selected //questionsStyle={{width:'40%',flexWrap:'wrap'}} 
                        questions={"Deliver all my documents at vcm.com"}
                        />

                        <GRadioButtonComponent questions={"Do not change my current document delivery"} />
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

            <View style={{marginTop:20}}>
                 <View style={{borderBottomWidth:1,borderBottomColor:'#535353'}} />  
            </View>
            
            
            
            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText1}>
                    {"Investments for USAA Members"}
                </Text>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account."}
                </Text> 
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    {"Privacy Policy"}
                </Text>

                <Text style={styles.privacyText}>
                    {"User Agreement"}
                </Text>
            </View>

            <View style={styles.copyRightSection}>
                <Text style={styles.copyRightText}>
                    {"Copyright Victory Capital Management Inc. ©2020"}
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
 
  };

export default OtpSeucrityQuestionsComponent;