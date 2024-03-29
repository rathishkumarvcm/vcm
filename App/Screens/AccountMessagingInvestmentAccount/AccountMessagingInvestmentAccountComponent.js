import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class AccountMessagingInvestmentAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
           // isLoading: false,            
           openedAccounts: [],                    
        };
    }  

    static getDerivedStateFromProps(props, prevState){
        // initialize state variable and return. If no changes required for state
        // variable then return empty object. return {}

        const {accountPreferenceinitialState} = props;      
        const {openedAccounts} = prevState;    

        let newItm = [];             
        if (accountPreferenceinitialState && openedAccounts.length === 0 ){
            if(accountPreferenceinitialState.accountsOpened){               
                newItm = [...accountPreferenceinitialState.accountsOpened.map(v => ({ ...v, isExpand: true }))]; 
                return {
                    openedAccounts: newItm
                };                                                                    
            }       
        }else {
            return {
                openedAccounts: prevState.openedAccounts
            };
        }   
        return {};     
    }    
    
    goBack = () => {
        const{ navigation }=this.props;
        navigation.goBack();
    }

    navigategeneralSettings = () =>{
        const{ navigation }=this.props;
        navigation.navigate('generalSettings');
    } 
     
     setExpandVisible = (index) => () => {       
        let newItm = [];        
        const { openedAccounts } = this.state;
        newItm = [...openedAccounts];        

        newItm[parseInt(index,10)].isExpand = !newItm[parseInt(index,10)].isExpand;
        this.setState({ openedAccounts: newItm }); 
    }

    navigateAccountPreferenceEdit = () =>{
        const{ navigation }=this.props;
        navigation.navigate('accountMessagingGeneralDocuments');
    }

    render() {
        const{ navigation }=this.props;       
        const{ openedAccounts }=this.state;       
        
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />
                <ScrollView style={styles.scrollViewFlex} ref={this.scrollRef}>
                    <View style={styles.settingsView}>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.navigategeneralSettings}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.settingAccountMessaging.setting}
                            </Text>
                        </TouchableOpacity>                       
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.settingAccountMessaging.accountMessagingArrow}
                            </Text>
                        </TouchableOpacity>                      
                        <Text style={styles.settingsInfoCurrent}>
                            {gblStrings.settingAccountMessaging.accountMessagingInvestmentArrow}
                        </Text>
                    </View>

                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.settingAccountMessaging.generalDocumentsHeadTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralTitleDesc}
                        </Text>
                    </View>                                     
                    <View style={styles.accountContainer}>  
                        {
                            openedAccounts.map((accountOpen,index) => {
                                return (      
                                 <View style={styles.accountIndvContainer} key={accountOpen.accountType}>   
                                    <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setExpandVisible(index)}>
                                    <View style={styles.accMainContainer}>                                    
                                        {
                                            (accountOpen.isExpand)?(
                                                <GIcon
                                                    name="minus"
                                                    type="antdesign"
                                                    size={15}
                                                    color="#56565A"
                                                />
                                            ):(
                                                <GIcon
                                                    name="plus"
                                                    type="antdesign"
                                                    size={15}
                                                    color="#56565A"
                                                />
                                            )
                                        }                                                                       
                                        <Text style={styles.accountTypeTitle}>
                                            {accountOpen.accountType}
                                        </Text> 
                                         
                                    </View>
                                   
                                    {
                                    (accountOpen.accountDesc)? (
                                        <Text style={styles.accountTypeTitleDesc}>
                                            {accountOpen.accountDesc}
                                        </Text>
                                    )
                                    :null
                                    }
                                    </TouchableOpacity>   
                                    <View style={styles.lineBorder} />

                                    {                                                                                                                 
                                        accountOpen.accounts.map((accountDetail) => {
                                            return ( 
                                                (accountOpen.isExpand)?(
                                                    <View style={styles.accountDetailContainer} key={accountDetail.accNumber}>
                                            
                                                    <View style={styles.accountDetailContainerDesc}>
                                                        <View style={styles.accountInfoContainer}>
                                                            <View style={styles.accountNamecontainer}>
                                                                <Text style={styles.accountNameText}>
                                                                    {gblStrings.liquidation.accountName}
                                                                </Text>
                                                                <Text style={styles.accountNameValueText}>
                                                                    {accountDetail.accName}
                                                                </Text>
                                                            </View>
                                                            <View style={styles.accountNumberContainer}>
                                                                <Text style={styles.accountNameText}>
                                                                    {gblStrings.accManagement.accountNumber}
                                                                </Text>
                                                                <Text style={styles.accountNameValueText}>
                                                                    {accountDetail.accNumber}
                                                                </Text>
                                                            </View>
                                                        </View>        
                                                    
                                                        <View style={styles.editContainer}>
                                                            <Text style={styles.editText} onPress={this.navigateAccountPreferenceEdit}>
                                                                {gblStrings.common.edit}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.prefernceContainer}>                                                
                                                        <Text style={styles.deliveryPreferenceText}>
                                                            Delivery Preference
                                                        </Text>
                                                        <Text style={styles.deliveryPreferenceValueText}>
                                                            {accountDetail.deliveryPreference}
                                                        </Text>
                                                        <Text style={styles.SeasonalAddressText}>
                                                            Seasonal Address
                                                        </Text>
                                                        <Text style={styles.SeasonalAddressValueText}>
                                                            {accountDetail.SeasonalAddress}
                                                        </Text>
                                                    </View>

                                                    </View>   
                                                ):null
                                            );                    
                                        })       
                                    }                                       
                                 </View>

                                );                    
                            })
                        }      
                    </View>              

                    {/* {                    
                    (saveSuccess) ? (
                        <View style={styles.saveSuccessContainer}>
                            <GIcon
                                name="check"
                                type="antdesign"
                                size={30}
                                color="#707070"
                            />
                            <Text style={styles.saveSuccessText}>
                                Delivery Preference for Tax Documents has been updated successfully
                            </Text>
                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                                <GIcon
                                    name="close"
                                    type="evilicon"
                                    size={40}
                                    color="#707070"
                                />
                            </TouchableOpacity>
                        </View>
                     )     
                     : null
                     }   */}


                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

AccountMessagingInvestmentAccountComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),     
    accountPreferenceinitialState : PropTypes.instanceOf(Object)

};

AccountMessagingInvestmentAccountComponent.defaultProps = {
    navigation : {},   
    accountPreferenceinitialState:{}

};

export default AccountMessagingInvestmentAccountComponent;