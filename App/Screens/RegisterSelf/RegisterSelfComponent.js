import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {GButtonComponent,GInputComponent,GIcon,GHeaderComponent,GFooterSettingsComponent} from '../../CommonComponents';

class RegisterSelfComponent extends Component {
    constructor(props){
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            lastName : '',
            firstName : '',
            middleName : '',
            phone : '',
            firstNameFlag :false,
            lastNameFlag : false,
            phoneFlag : false
        };
    }

    componentDidMount(){
       
    }

    goBack = () =>{
        const {navigation} = this.props;
        navigation.goBack();
    }

    setFirstName = text => {
        this.setState({
            firstName : text
        });
    }

    setMiddleName = text => {
        this.setState({
            middleName : text
        });
    }

    setLastName = text => {
        this.setState({
            lastName : text
        });
    }

    setPhone = text => {
        this.setState({
            phone : text
        });
    }


    navigateAddress = ()=>{
        const {navigation,updatePhoneNumber} = this.props;
        const {newState} = this.state;
        const passingData = {
            emailID : navigation.getParam('emailID'),
            lastName : newState.lastName,
            firstName : newState.firstName,
            middleName : newState.middleName,
            phone : newState.phone
        };
        
        updatePhoneNumber(newState.phone);
        navigation.navigate('registerPassword',{selfData:passingData});
    }

    checkFirstName = () =>{
        const {firstName} = this.state;
        if(firstName !== ""){
            this.setState({
                firstNameFlag : false
            });
        }
        else{
            this.setState({
                firstNameFlag : true
            });
        }
    }

    checkLastName = () =>{
        const { lastNameData } = this.state;
        if(lastNameData.lastName !== ""){
            this.setState({
                lastNameFlag : false
            });
        }
        else{
            this.setState({
                lastNameFlag : true
            });
        }
    }

    checkPhone = () => {
        const { getPhoneData } = this.state;
        if(getPhoneData.phone !== ""){
            this.setState({
                phoneFlag : false
            });
        }
        else{
            this.setState({
                phoneFlag : true
            });
        }
    }



 
    render(){
        const{ navigation }=this.props;
        const {phone,firstName,middleName,firstNameFlag,lastName,lastNameFlag,phoneFlag} = this.state;
        return (
            <View style={styles.container}>
             <GHeaderComponent 
             navigation={navigation}
             register
             />
            <ScrollView style={styles.flexContainer}>

            <View style={styles.stepsOuter}>
                <View style={styles.stepsInner} />
            </View>

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    Enter your Personal details.
                </Text>
            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </Text>  
            </View>


            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    First name       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                // placeholder={"First name"}
                onChangeText={this.setFirstName}
                onBlur={this.checkFirstName}
                value={firstName}
                errorFlag={firstNameFlag}
                errorText="Enter a Valid First Name"
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Middle Name(Optional)       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                // placeholder={"Middle Name"}
                onChangeText={this.setMiddleName}
                value={middleName}
                onBlur={this.checkMiddleName}
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Last name       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                // placeholder={"Last name"}
                onChangeText={this.setLastName}
                value={lastName}
                onBlur={this.checkLastName}
                errorFlag={lastNameFlag}
                errorText="Enter a Valid Last Name"
            />




           <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    Prefix (Optional)       
                </Text>
           </View>

            <View style={styles.flexRow}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    secureTextEntry
                />

                <View style={styles.flexAbsol}>
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
                    Suffix (Optional)       
                </Text>
            </View>

            <View style={styles.flexRow}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox} 
                    placeholder=""
                    secureTextEntry
                />

                <View style={styles.arrowDrop}>
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
                    Mobile Number (Optional)       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                // placeholder={"Phone"}
                onChangeText={this.setPhone}
                value={phone}
                onBlur={this.checkPhone}
                errorFlag={phoneFlag}
                errorText="Enter a Valid Phone Number"
                keyboardType="phone-pad"
                maxLength={13}
            />

           {/* <View style={{flexDirection:'row',marginLeft:'4%',marginRight:'4%',alignItems:'center',justifyContent:'center'}}>
                    <GIcon 
                        name="ios-checkbox-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                <Text style={styles.militaryTextColor}>
                    {"I serve or have served in U.S. Military Service."}
                </Text>
    </View> */}


            <GButtonComponent 
                    buttonStyle={styles.cancelButton}
                    buttonText="Cancel"
                    textStyle={styles.cancelButtonText}
                    onPress={this.goBack}
                    
            />

            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Next"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigateAddress}
                    // disabled={!this.state.phoneFlag || !this.state.firstNameFlag || !this.state.middleNameFlag || !this.state.lastNameFlag}
            />
            
            
           {/* <TouchableOpacity onPress={this.goBack} style={styles.goBack}>
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
        </View> */}

        <GFooterSettingsComponent />
            

            </ScrollView>
            </View>
    
        );
    }
}

RegisterSelfComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object),
    updatePhoneNumber : PropTypes.func
  };
  
  RegisterSelfComponent.defaultProps = {
    navigation : {},
    updatePhoneNumber : () => { },
 
  };
export default RegisterSelfComponent;