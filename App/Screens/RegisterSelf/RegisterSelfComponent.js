import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GIcon,GHeaderComponent} from '../../CommonComponents';
import PropTypes from 'prop-types';

class RegisterSelfComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            enableBiometric:false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            language :'java',
            lastName : '',
            firstName : '',
            middleName : '',
            phone : '',
            firstNameFlag :false,
            middleNameFlag : false,
            lastNameFlag : false,
            phoneFlag : false
        };
    }

    componentDidMount(){
       
    }

    goBack = () =>{
        this.props.navigation.goBack();
    }

    setFirstName = text => {
        this.setState({
            firstName : text,
            firstNameFlag : true
        });
    }

    setMiddleName = text => {
        this.setState({
            middleName : text,
            middleNameFlag : true
        });
    }

    setLastName = text => {
        this.setState({
            lastName : text,
            lastNameFlag : true
        });
    }

    setPhone = text => {
        this.setState({
            phone : text, 
            phoneFlag : true
        });
    }


    navigateAddress = ()=>{
        
        const passingData = {
            emailID : this.props.navigation.getParam('emailID'),
            lastName : this.state.lastName,
            firstName : this.state.firstName,
            middleName : this.state.middleName,
            phone : this.state.phone
        }
        
        
        this.props.navigation.navigate('registerPassword',{selfData:passingData});
    }

    checkFirstName = () =>{
        if(this.state.firstName != ""){
            this.setState({
                firstNameFlag : true
            })
        }
        else{
            this.setState({
                firstNameFlag : false
            })
        }
    }

    checkMiddleName = () =>{
        if(this.state.middleName != ""){
            this.setState({
                middleNameFlag : true
            })
        }
        else{
            this.setState({
                middleNameFlag : false
            })
        }
    }


    checkLastName = () =>{
        if(this.state.lastName != ""){
            this.setState({
                lastNameFlag : true
            })
        }
        else{
            this.setState({
                lastNameFlag : false
            })
        }
    }

    checkPhone = () => {
        if(this.state.phone != ""){
            this.setState({
                phoneFlag : true
            })
        }
        else{
            this.setState({
                phoneFlag : false
            })
        }
    }



 
    render(){
        
        return (
           
           
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={this.props.navigation}
             register
             />
            <ScrollView style={{flex:0.85}}>

            {/*<View style={styles.stepsOuter}>
                <View style={styles.stepsInner} />
        </View>*/}

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"Enter Your Personal Details."}
                </Text>
            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019."}
                </Text>  
            </View>


            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"First name"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={"First name"}
                onChangeText={this.setFirstName}
                onBlur={this.checkFirstName}
                value={this.state.firstName}
                errorFlag={!this.state.firstNameFlag && this.state.firstName!=""}
                errorText={"Enter a Valid First Name"}
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Middle Name(Optional)"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={"Middle Name"}
                onChangeText={this.setMiddleName}
                value={this.state.middleName}
                onBlur={this.checkMiddleName}
                errorFlag={!this.state.middleNameFlag && this.state.middleName!=""}
                errorText={"Enter a Valid Middle Name"}
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Last name"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={"Last name"}
                onChangeText={this.setLastName}
                value={this.state.lastName}
                onBlur={this.checkLastName}
                errorFlag={!this.state.lastNameFlag && this.state.lastName!=""}
                errorText={"Enter a Valid Last Name"}
            />


            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Phone"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={"Phone"}
                onChangeText={this.setPhone}
                value={this.state.phone}
                onBlur={this.checkPhone}
                errorFlag={!this.state.phoneFlag && this.state.phone!=""}
                errorText={"Enter a Valid Phone Number"}
            />




           <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Prefix (Optional)"}       
                </Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder={""}
                    secureTextEntry
                />

                <View style={{position:'absolute',right:0,left:365,top:14}}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </View>
            </View>

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Suffix (Optional)"}       
                </Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder={""}
                    secureTextEntry
                />

                <View style={{position:'absolute',right:0,left:365,top:14}}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </View>
            </View>

            <View style={{flexDirection:'row',marginLeft:'4%',marginRight:'4%',alignItems:'center',justifyContent:'center'}}>
                    <GIcon 
                        name="ios-checkbox-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                <Text style={styles.militaryTextColor}>
                    {"I serve or have served in U.S. Military Service."}
                </Text>
            </View>
           

            

           {/* <Picker
                style={{marginLeft:'4%',marginRight:'4%',width: '92%'}}
                selectedValue='java'
                onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
           </Picker>*/}




            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Continue"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigateAddress}
                    disabled={!this.state.phoneFlag || !this.state.firstNameFlag || !this.state.middleNameFlag || !this.state.lastNameFlag}
            />
            
            <TouchableOpacity onPress={this.goBack} style={styles.goBack}>
            <GIcon 
                        name="left"
                        type="antdesign"
                        size={25}
                        color="black"
            />
                <Text style={styles.forgotLineTextColor}>
                    {"Back"}
                </Text>
            </TouchableOpacity>

            <View style={styles.termsofuse}>
                <Text style={styles.termsofuseText}>
                    {"Need Assistance?  "}
                   
                <Text style={styles.forgotLineTextColor}>
                {"Get Help"}
                </Text>
                </Text>
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',marginTop:20}}>
                 <View style={{borderBottomWidth:1,borderBottomColor:'#56565A'}} />  
            </View>
            

            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText}>
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

RegisterSelfComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  RegisterSelfComponent.defaultProps = {
 
  };
export default RegisterSelfComponent;