import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

const accountsOpened = [
    {       
        "accountType": "Traditional IRA",       
        "totalShares":"2560",
        "availableShares":"2000",
        "accounts":[ 
            { 
               "fundName":"USAA Aggressive Growth fund",
               "fundSymbol":"USAUX",
               "navValue":"$42.20",
               "navDate":"10/31/2019",
               "currentValue": "$108,851.70",
               "totalCost":"$107,766",
               "totalShares":"2560",
               "availableShares":"2000",
               "performance":[
                   {
                    "performanceCategory":"1-Day",
                    "performanceValue":"$0.66",
                    "performancePercent":"$0.06",
                    "performanceRise":"0"
                   },
                   {
                    "performanceCategory":"MTD",
                    "performanceValue":"$1.45",
                    "performancePercent":"$0.45",
                    "performanceRise":"1"
                   },
                   {
                    "performanceCategory":"QTD",
                    "performanceValue":"$2.66",
                    "performancePercent":"$0.24",
                    "performanceRise":"1"
                   },
                   {
                    "performanceCategory":"1 Year",
                    "performanceValue":"$0.75",
                    "performancePercent":"$0.03",
                    "performanceRise":"0"
                   },
                   {
                    "performanceCategory":"5 Year",
                    "performanceValue":"$3.66",
                    "performancePercent":"$1.01",
                    "performanceRise":"1"
                   },
                   {
                    "performanceCategory":"10 Year",
                    "performanceValue":"$2.78",
                    "performancePercent":"$1.98",
                    "performanceRise":"1"
                   }
               ],
               "overallGainLoss":"$1085.00",
               "costBasis":"ACB"            
            },
            { 
                "fundName":"USAA Science & Technology Adviser",
               "fundSymbol":"USTCX",
               "navValue":"$40",
               "navDate":"10/31/2019",
               "currentValue": "$108,851.70",
               "totalCost":"$107,766",
               "totalShares":"2560",
               "availableShares":"2000",
               "performance":[
                {
                 "performanceCategory":"1-Day",
                 "performanceValue":"$1.66",
                 "performancePercent":"$0.88",
                 "performanceRise":"1"
                },
                {
                 "performanceCategory":"MTD",
                 "performanceValue":"$0.66",
                 "performancePercent":"$0.02",
                 "performanceRise":"0"
                },
                {
                 "performanceCategory":"QTD",
                 "performanceValue":"$0.44",
                 "performancePercent":"$0.01",
                 "performanceRise":"0"
                },
                {
                 "performanceCategory":"1 Yr",
                 "performanceValue":"$2.33",
                 "performancePercent":"$0.14",
                 "performanceRise":"1"
                },
                {
                 "performanceCategory":"5 Yr",
                 "performanceValue":"$1.66",
                 "performancePercent":"$0.99",
                 "performanceRise":"1"
                },
                {
                 "performanceCategory":"10 Yr",
                 "performanceValue":"$3.66",
                 "performancePercent":"$1.32",
                 "performanceRise":"1"
                }

            ] ,
               "overallGainLoss":"$1085.00",
               "costBasis":"ACB"            
               
             }
        ]
    },
    {     
        "accountType": "Roth IRA",    
        "totalShares":"3000",
        "availableShares":"2800",    
        "accounts":[ 
            { 
                "fundName":"USAA Growth & Income Adviser",
                "fundSymbol":"USGIX",
                "navValue":"$20",
                "navDate":"10/31/2019",
                "currentValue": "$108,851.70",
                "totalCost":"$107,766",
                "totalShares":"2560",
                "availableShares":"2000",
                "performance":[
                    {
                     "performanceCategory":"1-Day",
                     "performanceValue":"$1.66",
                     "performancePercent":"$0.88",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"MTD",
                     "performanceValue":"$0.66",
                     "performancePercent":"$0.02",
                     "performanceRise":"0"
                    },
                    {
                     "performanceCategory":"QTD",
                     "performanceValue":"$0.44",
                     "performancePercent":"$0.01",
                     "performanceRise":"0"
                    },
                    {
                     "performanceCategory":"1 Yr",
                     "performanceValue":"$2.33",
                     "performancePercent":"$0.14",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"5 Yr",
                     "performanceValue":"$1.66",
                     "performancePercent":"$0.99",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"10 Yr",
                     "performanceValue":"$3.66",
                     "performancePercent":"$1.32",
                     "performanceRise":"1"
                    }
 
                ] ,
                "overallGainLoss":"$1011.00",
                "costBasis":"ACB"            
                 
            },            
            { 
                "fundName":"USAA Intermediate-Term Bond Adviser",
                "fundSymbol":"UITBX",
                "navValue":"$70",
                "navDate":"10/31/2019",
                "currentValue": "$108,851.70",
                "totalCost":"$107,766",
                "totalShares":"2560",
                "availableShares":"2000",
                "performance":[
                    {
                     "performanceCategory":"1-Day",
                     "performanceValue":"$0.66",
                     "performancePercent":"$0.06",
                     "performanceRise":"0"
                    },
                    {
                     "performanceCategory":"MTD",
                     "performanceValue":"$1.45",
                     "performancePercent":"$0.45",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"QTD",
                     "performanceValue":"$2.66",
                     "performancePercent":"$0.24",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"1 Year",
                     "performanceValue":"$0.75",
                     "performancePercent":"$0.03",
                     "performanceRise":"0"
                    },
                    {
                     "performanceCategory":"5 Year",
                     "performanceValue":"$3.66",
                     "performancePercent":"$1.01",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"10 Year",
                     "performanceValue":"$2.78",
                     "performancePercent":"$1.98",
                     "performanceRise":"1"
                    }
                ],
                "overallGainLoss":"$1085.00",
                "costBasis":"ACB"             
                 
             },
            { 
                "fundName":"USAA Short-Term Bond Adviser",
                "fundSymbol":"UASBX",
                "navValue":"$55",
                "navDate":"10/31/2019",
                "currentValue": "$108,851.70",
                "totalCost":"$107,766",
                "totalShares":"2560",
                "availableShares":"2000",
                "performance":[
                    {
                     "performanceCategory":"1-Day",
                     "performanceValue":"$1.66",
                     "performancePercent":"$0.88",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"MTD",
                     "performanceValue":"$0.66",
                     "performancePercent":"$0.02",
                     "performanceRise":"0"
                    },
                    {
                     "performanceCategory":"QTD",
                     "performanceValue":"$0.44",
                     "performancePercent":"$0.01",
                     "performanceRise":"0"
                    },
                    {
                     "performanceCategory":"1 Yr",
                     "performanceValue":"$2.33",
                     "performancePercent":"$0.14",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"5 Yr",
                     "performanceValue":"$1.66",
                     "performancePercent":"$0.99",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"10 Yr",
                     "performanceValue":"$3.66",
                     "performancePercent":"$1.32",
                     "performanceRise":"1"
                    }
 
                ] ,
                "overallGainLoss":"$1085.00",
                "costBasis":"ACB"             
                   
             }
        ]      
    },
    {     
        "accountType": "Individual Mutual Fund Account",     
        "accountDesc":"Transfer on Death Beneficiaries",
        "totalShares":"4500",
        "availableShares":"3500",
        "accounts":[ 
            { 
                "fundName":"USAA Science & Technology Adviser",
                "fundSymbol":"USTCX",
                "navValue":"$60",
                "navDate":"10/31/2019",
                "currentValue": "$108,851.70",
                "totalCost":"$107,766",
                "totalShares":"2560",
                "availableShares":"2000",
                "performance":[
                    {
                     "performanceCategory":"1-Day",
                     "performanceValue":"$0.66",
                     "performancePercent":"$0.06",
                     "performanceRise":"0"
                    },
                    {
                     "performanceCategory":"MTD",
                     "performanceValue":"$1.45",
                     "performancePercent":"$0.45",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"QTD",
                     "performanceValue":"$2.66",
                     "performancePercent":"$0.24",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"1 Year",
                     "performanceValue":"$0.75",
                     "performancePercent":"$0.03",
                     "performanceRise":"0"
                    },
                    {
                     "performanceCategory":"5 Year",
                     "performanceValue":"$3.66",
                     "performancePercent":"$1.01",
                     "performanceRise":"1"
                    },
                    {
                     "performanceCategory":"10 Year",
                     "performanceValue":"$2.78",
                     "performancePercent":"$1.98",
                     "performanceRise":"1"
                    }
                ],
                "overallGainLoss":"$1085.00",
                "costBasis":"ACB"             
                
            }
        ]
    }
];

class AccountPositionsComponent extends Component {
    constructor(props) {
        super(props);       
        this.state = {
           // isLoading: false,     
           openedAccounts: [...accountsOpened.map(v => ({ ...v, isExpand: true }))]                         
                          
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
                            <View key={accountOpen.accountType}>
                            <View style={styles.accountIndvContainer}>   
                                <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setExpandVisible(index)}>
                                
                                    <View style={styles.flexDirectionRow}>
                                        <View style={styles.accMainContainer}>                                    
                                            {
                                                (accountOpen.isExpand)?(
                                                    <GIcon
                                                        name="minus"
                                                        type="antdesign"
                                                        size={18}
                                                        color="#56565A"
                                                    />
                                                ):(
                                                    <GIcon
                                                        name="plus"
                                                        type="antdesign"
                                                        size={18}
                                                        color="#56565A"
                                                    />
                                                )
                                            }                                                                            
                                        </View>
                                    
                                        <View style={styles.accountSharesContainer}>
                                            <Text style={styles.accountTypeTitle}>
                                                {accountOpen.accountType}
                                            </Text>  

                                            <View style={styles.flexDirectionRow}>
                                                <Text style={styles.accountSharesTitle}>
                                                    Shares 
                                                </Text>
                                                <Text style={styles.accountSharesTotal}>
                                                    Total - {accountOpen.totalShares}
                                                </Text>
                                                <Text style={styles.accountSharesAvailable}>
                                                    Available - {accountOpen.availableShares}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>            

                                </TouchableOpacity>

                            </View>

                            {
                                (accountOpen.isExpand)?(                           
                                        accountOpen.accounts.map((accountDetail) => {
                                            return (                                     
                                                <View style={styles.accountInfoContainer} key={accountDetail.fundSymbol}>                           
                                                    <View style={styles.accountDetailContainer}>
                                                        <Text style={styles.fundSymbolText}>
                                                                {accountDetail.fundSymbol}
                                                        </Text>
                                                       
                                                        <Text style={styles.fundNameText}>
                                                            {accountDetail.fundName}
                                                        </Text>                                                            
                                                                    
                                                        <View style={styles.lineBorder} />   

                                                        <View style={styles.accountCostContainer}>                                                          
                                                            <Text style={styles.accountSharesCurrent}>
                                                                Current Value  {accountDetail.currentValue}
                                                            </Text>
                                                            <Text style={styles.accountSharesCurrent}>
                                                                Total Cost  {accountDetail.totalCost}
                                                            </Text>
                                                        </View>       

                                                        <View style={styles.flexDirectionRow}>
                                                            <Text style={styles.accountSharesTitle}>
                                                                Shares 
                                                            </Text>
                                                            <Text style={styles.accountSharesTotal}>
                                                                Total  {accountOpen.totalShares}
                                                            </Text>
                                                            <Text style={styles.accountSharesAvailable}>
                                                                Available  {accountOpen.availableShares}
                                                            </Text>
                                                        </View>    
                                                        
                                                        <View style={styles.lineBorder} />

                                                        <Text style={styles.performanceNameText}>
                                                            Performance
                                                        </Text>   

                                                        <Text style={styles.accountNetAssetValue}>
                                                            NAV as of {accountDetail.navDate} {accountDetail.navValue}
                                                        </Text>  

                                                        <View style={styles.lineBorder} />
                                                        {
                                                            accountDetail.performance.map((performance) => {
                                                                return (                                                 

                                                                    <View style={styles.performanceContainer} key={performance.performanceCategory}>                                                              
                                                                        <View style={styles.performanceYearContainer}>                                                                
                                                                            <Text style={styles.performanceYearText}>  
                                                                              {performance.performanceCategory}
                                                                            </Text>                                                             
                                                                        </View>
                                                                        <View style={styles.performanceValueContainer}>                                                                                                                             
                                                                            <Text style={performance.performanceRise==="1" ? styles.performanceValueUpText:styles.performanceValueDownText}>  
                                                                                {performance.performanceValue}
                                                                            </Text>                                                                    
                                                                        </View>   
                                                                        <View style={styles.performanceValueContainer}>                                                                                                                           
                                                                            <Text style={performance.performanceRise==="1" ? styles.performanceValueUpText:styles.performanceValueDownText}>  
                                                                                {performance.performancePercent}
                                                                            </Text>                                                                    
                                                                        </View>   
                                                                        <View style={styles.performanceArrowContainer}>    
                                                                             {
                                                                                  (performance.performanceRise==="1")? (
                                                                                        <GIcon
                                                                                            name="arrowup"
                                                                                            type="antdesign"
                                                                                            size={10}
                                                                                            color="#159638"
                                                                                        />
                                                                                      )  
                                                                                 : (
                                                                                    <GIcon
                                                                                        name="arrowdown"
                                                                                        type="antdesign"
                                                                                        size={10}
                                                                                        color="#ab3120"
                                                                                    />
                                                                                    )
                                                                             }                                                                                                                    
                                                                                                                                             
                                                                        </View>  
                                                                                                                                                                                                                                                                                   
                                                                    </View>
                                                                    );
                                                                })
                                                        }
                                                        <View style={styles.lineBorder} />

                                                        <View style={styles.gainContainer}>                                                          
                                                            <Text style={styles.gainText}>
                                                                G / L  {accountDetail.overallGainLoss}
                                                            </Text>
                                                            <Text style={styles.gainText}>
                                                                Cost Basis  {accountDetail.costBasis}
                                                            </Text>
                                                        </View>   

                                                        <View style={styles.buttonContainer}>
                                                            <View style={styles.exchangeButtoncontainer}>
                                                                <GButtonComponent
                                                                    buttonStyle={styles.saveButton}
                                                                    buttonText="Exchange In"
                                                                    textStyle={styles.saveButtonText}
                                                                    onPress={this.submitButtonAction}
                                                                /> 
                                                            </View>
                                                            <View style={styles.exchangeButtoncontainer}>
                                                                <GButtonComponent
                                                                    buttonStyle={styles.saveButton}
                                                                    buttonText="Exchange Out"
                                                                    textStyle={styles.saveButtonText}
                                                                    onPress={this.submitButtonAction}
                                                                /> 
                                                            </View>
                                                        </View>                                                                                                                                                      
                                                    </View>   
                                                </View>                                           
                                            );                    
                                        })                                       
                                ):null
                            }
                            
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