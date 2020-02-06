import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent,GFooterSettingsComponent,GButtonComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import UserPhoneInformation from './UserPhoneInformation';
import UserEmailInformation from './UserEmailInformation';
import UserAddressInformation from './UserAddressInformation';

class MarketingandPrivacyComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,
            // enableBiometric: false,
            // faceIdEnrolled: false,
            // touchIdEnrolled: false,        

            mobileNumberData: [],
            emailData: [],
            addressData: [],       
        };
    }

    componentDidMount() {
    }

    componentDidUpdate( ) {
    }

    static getDerivedStateFromProps(props, prevState){
        // initialize state variable and return. If no changes required for state
        // variable then return empty object. return {}
        const {profileState} = props;      
        const {mobileNumberData,emailData,addressData} = prevState;    
        
        if (profileState && mobileNumberData.length === 0 || emailData.length === 0 || addressData.length === 0 ){         
           return {
                mobileNumberData: profileState.profileUserMobileNumber,
                emailData: profileState.profileUserMailInformation,
                addressData: profileState.profileUserAddressInformation   
           };   
        }      
        return {      
            mobileNumberData: prevState.mobileNumberData,
            emailData: prevState.emailData,
            addressData: prevState.addressData  
        };         
    }    

    //  Mobile Toggle and Information 
    onMobileToggle = (item, index) => () => {
        const {mobileNumberData} = this.state;
        const array = [...mobileNumberData];     
        if (index !== -1) {          
            const switchVal = array[parseInt(index,10)].isMarketingOffersEnabled;          
            array[parseInt(index,10)].isMarketingOffersEnabled = !switchVal;
            this.setState({
                mobileNumberData: array              
            });
        }
    }

    //  Email Toggle and Information
    onEmailToggle = (item, index) => () => {
        const {emailData} = this.state;
        const array = [...emailData];
        if (index !== -1) {
            const switchVal = array[parseInt(index,10)].isMarketingOffersEnabled;
            array[parseInt(index,10)].isMarketingOffersEnabled = !switchVal;
            this.setState({
                emailData: array             
            });
        }
    }

    //  Address Toggle and Information
    onAddressToggle = (item, index) => () => {
        const {addressData} = this.state;
        const array = [...addressData];
        if (index !== -1) {
            const switchVal = array[parseInt(index,10)].isMarketingOffersEnabled;
            array[parseInt(index,10)].isMarketingOffersEnabled = !switchVal;
            this.setState({
                addressData: array                
            });
        }
    }

    goBack = () => {
        const {navigation} = this.props;
       navigation.goBack();
    }

    generateKeyExtractor = (item) => item.id;  

    navigateEditSection = (fromsection) =>()=> {
       const{ navigation }=this.props;     
       switch(fromsection){          
            case 'Phone':                
               navigation.navigate('editPhoneInformation');
            break;
            case 'Email':                
               navigation.navigate('editEmailInformation');
            break;
            case 'Address':                
                navigation.navigate('editAddressSettings');
            break;
            default:
            break;   
       }
    }

    render() {
        const {navigation} = this.props;
        const {mobileNumberData,emailData,
            addressData} = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollContainer}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.marketingPrivacyLabel.marketingHeadingLabel}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsHeadline}>
                            {globalString.marketingPrivacyLabel.marketingPrivacyTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View style={styles.marketingHeadQues}>
                        <Text style={styles.marketingHeadLabel}>
                            {globalString.marketingPrivacyLabel.marketingOfferLabel}
                        </Text>
                    </View>

                    <View style={styles.marketingHeadQues}>
                        <Text style={styles.marketingHeadLabel}>
                            {globalString.marketingPrivacyLabel.marketingMeetLabel}
                        </Text>
                    </View>

                    {/* Mobile Data */}
                    <View style={styles.marketingContentHolder}>                   
                       {                          
                        mobileNumberData.map((item, index) => {                                
                            return (     
                                    (item.isPrimaryMobile)? (
                                        <View key={item}>  
                                            <UserPhoneInformation
                                            mobileNumberType={item.mobileNumberType}
                                            mobileNumber={item.mobileNumber}
                                            mobilePreferredTime={item.mobilePreferredTime}
                                            isMarketingOffersEnabled={item.isMarketingOffersEnabled}
                                            onMobileToggle={this.onMobileToggle(item, index)}
                                            navigateEditSection={this.navigateEditSection('Phone')}
                                            />
                                        </View>    
                                    )
                                    :null   
                                    );                                                  
                            })    
                                   
                        }

                    </View>

                    {/* Email Data */}
                    <View style={styles.marketingContentHolder}>         
                    {                          
                        emailData.map((item, index) => {
                            return (    
                                (item.isPrimaryEmail)? (
                                    <View key={item}>  
                                    <UserEmailInformation
                                        emailType={item.emailType}
                                        emailId={item.emailId}
                                        isMarketingOffersEnabled={item.isMarketingOffersEnabled}
                                        onEmailToggle={this.onEmailToggle(item, index)}
                                        navigateEditSection={this.navigateEditSection('Email')}
                                    />
                                    </View>
                                    )
                                    :null  
                                );                    
                            })    
                    }
                    </View>

                    {/* Address Data */}
                    <View style={styles.marketingContentHolder}>     
                    {                          
                        addressData.map((item, index) => {
                            return (   
                                (item.isMailingAddress)? (
                                    <View key={item}>  
                                    <UserAddressInformation
                                        addressType={item.addressType}
                                        addressLineOne={item.addressLineOne}
                                        addressCity={item.addressCity}
                                        addressState={`${item.addressState } ${ item.addressZipcode}`}
                                        isMarketingOffersEnabled={item.isMarketingOffersEnabled}
                                        onAddressToggle={this.onAddressToggle(item, index)}
                                        navigateEditSection={this.navigateEditSection('Address')}
                                    />
                                    </View>
                                )
                                :null   
                                );  
                            })    
                        }
                    </View>

                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.goBack}
                    />
                    <GButtonComponent
                        buttonStyle={styles.saveButton}
                        buttonText={globalString.common.submit}
                        textStyle={styles.saveButtonText}
                        onPress={this.goBack}                        
                    />

                    <GFooterSettingsComponent />                   
                </ScrollView>
            </View>
        );
    }
}

MarketingandPrivacyComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    profileState : PropTypes.instanceOf(Object)
};

MarketingandPrivacyComponent.defaultProps = {
    navigation:{},
    profileState : {}
};

export default MarketingandPrivacyComponent;