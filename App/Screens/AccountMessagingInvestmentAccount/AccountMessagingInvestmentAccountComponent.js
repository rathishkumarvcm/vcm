import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

const accountsOpened = [
    {       
        "accountType": "Traditional IRA",
        "accounts":[ 
            { 
               "accName":"Lorem Ipsum",
               "accNumber":"7667-3345-1111"
            }
        ]

    },
    {     
        "accountType": "Roth IRA", 
        "accounts":[ 
            { 
                "accName":"Lorem Ipsum",
               "accNumber":"7667-3345-2222"
            }
        ]      
    },
    {     
        "accountType": "Individual Mutual Fund Account",
        "accountDesc":"Transfer on Death Beneficiaries",
        "accounts":[ 
            { 
                "accName":"Lorem Ipsum",
               "accNumber":"7667-3345-3333"
            }
        ]
    }
];


class AccountMessagingInvestmentAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
           // isLoading: false,                                
        };
    }  

    goBack = () => {
        const{ navigation }=this.props;
        navigation.goBack();
    }

    navigategeneralSettings = () =>{
        const{ navigation }=this.props;
        navigation.navigate('generalSettings');
    } 

    render() {
        const{ navigation }=this.props;       
        
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
                            accountsOpened.map((accountOpen) => {
                                return (         

                                 <View style={styles.accountIndvContainer} key={accountOpen.accountType}>   
                                    <Text style={styles.accountTypeTitle}>
                                        - {accountOpen.accountType}
                                    </Text> 

                                    {(accountOpen.accountDesc)? (
                                        <Text style={styles.accountTypeTitleDesc}>
                                            {accountOpen.accountDesc}
                                        </Text>
                                      )
                                    :null
                                    }

                                    <View style={styles.lineBorder} />

                                    <View>
                                    {
                                    accountOpen.accounts.map((accountDetail) => {
                                    return ( 
                                        <View style={styles.accountDetailContainer} key={accountDetail.accNumber}>
                                       
                                        <View style={styles.accountInfoContainer}>
                                            <View style={styles.accountNamecontainer}>
                                                <Text style={styles.accountNameText}>
                                                    Account Name
                                                </Text>
                                                <Text>
                                                    {accountDetail.accName}
                                                </Text>
                                            </View>
                                            <View style={styles.accountNumberContainer}>
                                                <Text style={styles.accountNameText}>
                                                    Account Number
                                                </Text>
                                                <Text>
                                                    {accountDetail.accNumber}
                                                </Text>
                                            </View>
                                                
                                        </View>

                                        </View>   
                                        
                                        );                    
                                    })       
                                     }
                                        
                                    </View>
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
};

AccountMessagingInvestmentAccountComponent.defaultProps = {
    navigation : {},   
};

export default AccountMessagingInvestmentAccountComponent;