import React, { Component } from 'react';
import { View, ScrollView, Text,Linking } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GSingletonClass
} from '../../CommonComponents';
import { CustomCheckBox } from '../../AppComponents';
import globalString from '../../Constants/GlobalStrings';
import { NavigationActions } from 'react-navigation';

const myInstance = GSingletonClass.getInstance();
const url = 'https://content.usaa.com/mcontent/static_assets/Mstar/Morningstar_FundProfiles_USSPX.pdf';
class SystematicWithdrawalPlanEsignComponent extends Component {
    constructor(props) {
        super(props);
        const{navigation}=this.props;
        this.state = {
            acceptPolicy: false,
            accountType:`${navigation.getParam('accountType')}`,
            itemToEdit: `${navigation.getParam('indexSelected')}`,
            errorTextMsg:''
        };
    }

    componentDidUpdate(){
        const{navigation,systematicWithdrawalState}=this.props;
        const{itemToEdit}=this.state;
        if(systematicWithdrawalState.savedAccData){
            // navigation.navigate({routeName:'systematicWithdrawal',key:'systematicWithdrawal'});
            // if(itemToEdit==-1)
            //     navigation.goBack('systematicWithdrawalAccount');
            // else
            //     navigation.goBack('systematicWithdrawalAdd');
            navigation.reset([
                NavigationActions.navigate({ routeName: 'dashboard' }),
                NavigationActions.navigate({ routeName: 'accountService' }),
                NavigationActions.navigate({ routeName: 'systematicWithdrawal' })
              ],2);
        }

    }

    onCheckBoxCheck = () => {
        const{acceptPolicy}=this.state;
        this.setState({ acceptPolicy: !acceptPolicy });
    }

    getPayload = () => {
        const{systematicWithdrawalState}=this.props;
        const{itemToEdit,accountType}=this.state;
        let payload = {};
        const item=myInstance.getSavedSystematicData();
        if (this.props && systematicWithdrawalState && item)
        {
            let planJson=[];
             const selected={id:itemToEdit==='-1'?'3':itemToEdit,// itemToEdit
                account:`${item.accName}|${item.accNumber}` ,
                totalAmount:item.totalFund,
                            fundTo:item.fundTo,
                            investedIn:item.investedIn,
                            invest:item.valueTypeDropDown,
                            dateFromInvest:item.valueDateBeginDropDown,
                            dateToInvest:item.valueDateDropDown!=='null'?item.valueDateDropDown:'null',
                             dateAdded:item.dateAdded,
                            // endDate:item.endDate,
                            nextWithdrawalDate:item.nextWithdrawalDate,// item.nextWithdrawalDate
                        };
                        switch ((accountType.toLowerCase())) {
                            case "general":
                                if(systematicWithdrawalState.general){
                                        
                                        planJson=[...systematicWithdrawalState.general];
                                        if(itemToEdit==='-1')
                                        {
                                            planJson.push(selected);
                                        }
                                        else{
                                            planJson[Number(itemToEdit)]=selected;
                                            
                                        }
                                        payload = {
                                            ...systematicWithdrawalState,
                                            general:planJson
                                        };
                                        
                                    }
                                    else{
                                        const newObj = { "general" : selected};
                                        Object.assign(systematicWithdrawalState,newObj);
                                        payload = {
                                            ...systematicWithdrawalState,
                                        };
                                    }
                                
                                break;
                            case "ira":
                                if(systematicWithdrawalState.ira){
                                    planJson=[...systematicWithdrawalState.ira];
                                        if(itemToEdit==='-1')
                                        {
                                            planJson.push(selected);
                                        }
                                        else{
                                            planJson[Number(itemToEdit)]=selected;
                                            
                                        }
                                    
                                }
                                else{
                                    const newObj = { "ira" : selected};
                                    Object.assign(systematicWithdrawalState,newObj);
                                    payload = {
                                        ...systematicWithdrawalState,
                                    };
                                }
                                break;
                            case "utma":
                                if(systematicWithdrawalState.utma){
                                    planJson=[...systematicWithdrawalState.utma];
                                    if(itemToEdit==='-1')
                                    {
                                        planJson.push(selected);
                                    }
                                    else{
                                        planJson[Number(itemToEdit)]=selected;
                                        
                                    }
                                    
                                }
                                else{
                                    const newObj = { "utma" : [selected]};
                                    Object.assign(systematicWithdrawalState,newObj);
                                    payload = {
                                        ...systematicWithdrawalState,
                                    };
                                }
                                break;
                                default:
                                    break;
                    }
                    
            
                }
                return payload;
}

navigationSubmit = () => {
    const{saveData}=this.props;
    const{acceptPolicy}=this.state;
    if(acceptPolicy){
        this.setState({errorTextMsg:''});
        const payload = this.getPayload();
        saveData("systematicWithdrawalEsign", payload); 
        myInstance.setSystematicWithdrawalEditMode(false);
        
    }
    else{
    this.setState({errorTextMsg:'Please select the above checkbox'});
    }
}

    navigationBack = () => {
        const{navigation}=this.props;
        navigation.goBack();
    }

    navigationCancel = () => 
    {
        const{navigation}=this.props;
        const{itemToEdit}=this.state;
        if(itemToEdit>-1)
            navigation.goBack('systematicWithdrawalAdd');
        else
            navigation.goBack('systematicWithdrawalAccount');
    }

    openPdf = () =>
    {
        Linking.openURL(url);
    }
    // navigation.navigate('systematicWithdrawal');

    render() {
        const{navigation}=this.props;
        const{acceptPolicy,errorTextMsg}=this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollStyle}>
                    <Text style={styles.autoInvestHead}>Create Systematic Withdrawal Plan</Text>
                    <View style={styles.seperator_line} />
                    <View style={styles.circle_view}>
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>1</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>2</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>3</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleText}>4</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Inprogress}>
                            <Text style={styles.circleText}>5</Text>
                        </View>
                    </View>

                    <View style={styles.autoInvest_title_view}>
                        <Text style={styles.autoInvest_title_text}>5 - E-Consent</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>- E-Consent</Text>

                        </View>
                        <View style={styles.seperator_line} />
                        <View style={styles.esignBody}>
                            <View style={styles.esignBody1}>
                                <Text style={styles.esignTitle}>Documents to Sign</Text>
                                <View style={styles.seperator_line} />
                                <Text style={styles.esignHeading} onPress={this.openPdf}>USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES</Text>
                                <Text style={styles.esignContent1}>This document contains the information provided by you as part of your automatic investment plan, including Terms and Conditions.</Text>
                                <Text style={styles.esignContent2}>By selecting &quot;Submit&quot;, I agree to the documents and terms above and certify that any information I provided is accurate, up-to-date and complete.</Text>
                            </View>

                            <View style={styles.esignBottomView}>
                                <CustomCheckBox
                                    size={24}
                                    itemBottom={0}
                                    itemTop={0}
                                    outerCicleColor="#707070"
                                    innerCicleColor="#2C8DBF"
                                    labelStyle={styles.agreeTermsTxt}
                                    label="I, Agree that i have received, read, understood, and agree to the documents linked above."
                                    selected={acceptPolicy}
                                    onPress={this.onCheckBoxCheck}
                                />
                                <Text style={styles.errorText}>{errorTextMsg}</Text>
                            </View>
                        </View>
                       
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationBack}
                        />
                        <GButtonComponent
                            buttonStyle={styles.continueButton}
                            buttonText={globalString.common.submit}
                            textStyle={styles.continueButtonText}
                            onPress={this.navigationSubmit}
                        />
                        <GFooterComponent />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalPlanEsignComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    systematicWithdrawalState:PropTypes.instanceOf(Object),
    saveData:PropTypes.func
};

SystematicWithdrawalPlanEsignComponent.defaultProps = {
    navigation:{},
    systematicWithdrawalState:{},
    saveData:null
};

export default SystematicWithdrawalPlanEsignComponent;