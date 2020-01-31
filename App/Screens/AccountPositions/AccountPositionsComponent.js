import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class AccountPositionsComponent extends Component {
    constructor(props) {
        super(props);       
        this.state = {
           // isLoading: false,              
           openedAccounts: [],
        };
    }  
   
    componentDidMount(){
        // const {accountPositionsinitialState} = this.props;       

        // let newItm = [];             
        // if (accountPositionsinitialState){
        //     if(accountPositionsinitialState.accountPositions){               
        //         newItm = [...accountPositionsinitialState.accountPositions.map(v => ({ ...v, isExpand: false }))]; 

        //         console.log(`getDerivedStateFromProps ::::> ${JSON.stringify(newItm)}`);

        //         this.setState({ openedAccounts: newItm });                 
                                                                    
        //     }               
        // }                   
    }

    static getDerivedStateFromProps(props, prevState){
        // initialize state variable and return. If no changes required for state
        // variable then return empty object. return {}

        const {accountPositionsinitialState} = props;      
        const {openedAccounts} = prevState;    

        let newItm = [];             
        if (accountPositionsinitialState && openedAccounts.length === 0 ){
            if(accountPositionsinitialState.accountPositions){               
                newItm = [...accountPositionsinitialState.accountPositions.map(v => ({ ...v, isExpand: true }))]; 
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
                    (openedAccounts.length>0) ?(
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
                    ):null                    
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
    accountPositionsinitialState : PropTypes.instanceOf(Object)
};

AccountPositionsComponent.defaultProps = {
    navigation : {},   
    accountPositionsinitialState:{}
};

export default AccountPositionsComponent;