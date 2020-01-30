import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

const accountsOpened = [
    {       
        "accountType": "Traditional IRA",       
        "accounts":[ 
            { 
               "accName":"Lorem Ipsum",
               "accNumber":"7667-3345-1111",
               "deliveryPreference":"Paper & Online",
               "SeasonalAddress": "No"
            },
            { 
                "accName":"Lorem Ipsum",
                "accNumber":"7667-3345-1112",
                "deliveryPreference":"Online",
                "SeasonalAddress": "Yes"
             }
        ]
    },
    {     
        "accountType": "Roth IRA",        
        "accounts":[ 
            { 
               "accName":"Lorem Ipsum",
               "accNumber":"7667-3345-2222",
               "deliveryPreference":"Online",
               "SeasonalAddress": "No"
            },            
            { 
                "accName":"Lorem Ipsum",
                "accNumber":"7667-3345-2223",
                "deliveryPreference":"Online & Paper",
                "SeasonalAddress": "Yes"
             },
            { 
                "accName":"Lorem Ipsum",
                "accNumber":"7667-3345-2224",
                "deliveryPreference":"Online",
                "SeasonalAddress": "No"
             }
        ]      
    },
    {     
        "accountType": "Individual Mutual Fund Account",     
        "accountDesc":"Transfer on Death Beneficiaries",
        "accounts":[ 
            { 
               "accName":"Lorem Ipsum",
               "accNumber":"7667-3345-3333",
               "deliveryPreference":"Paper",
               "SeasonalAddress": "No"
            }
        ]
    }
];

class AccountPositionsComponent extends Component {
    constructor(props) {
        super(props);       
        this.state = {
           // isLoading: false,     
           openedAccounts: [...accountsOpened.map(v => ({ ...v, isExpand: false }))]                         
                          
        };
    }  

    goBack = () => {
        const{ navigation }=this.props;
        navigation.goBack();
    }

    setExpandVisible = (index) => () => {       
        let newItm = [];        
        const { openedAccounts } = this.state;
        newItm = [...openedAccounts];        

        newItm[index].isExpand = !newItm[index].isExpand;
        this.setState({ openedAccounts: newItm }); 
    }

    render() {
        const{ navigation }=this.props;             
        const{ openedAccounts }=this.state;  

        return(

            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />
                <ScrollView style={styles.scrollViewFlex}>

                <View style={styles.pageInfoHeadContainer}>
                    <Text style={styles.pageInfoHeadTilte}>
                        Positions
                    </Text>
                    <Text style={styles.pageInfoHeadDesc}>
                        {gblStrings.settingAccountMessaging.accountMessagingGeneralTitleDesc}
                    </Text>
                </View>     

                <View style={styles.accountsContainer}>
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
                                <View style={styles.accountSharesContainer}>
                                    <Text style={styles.accountSharesTitle}>
                                        Shares 
                                    </Text>
                                    <Text style={styles.accountSharesTotal}>
                                        Total - 2560
                                    </Text>
                                    <Text style={styles.accountSharesAvailable}>
                                        Available - 2000
                                    </Text>

                                </View>
                                
                                </TouchableOpacity>
                            </View>
                        );
                    })
                    }
                  
                </View>                    

                <GFooterSettingsComponent />

                </ScrollView>
            </View>

        );

    }

}
AccountPositionsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),     
};

AccountPositionsComponent.defaultProps = {
    navigation : {},   
};


export default AccountPositionsComponent;