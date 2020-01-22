import React, { Component } from 'react';
import { Linking,View, ScrollView, Text } from 'react-native';
// import { NavigationActions } from 'react-navigation';
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

const myInstance = GSingletonClass.getInstance();
const url = 'https://content.usaa.com/mcontent/static_assets/Mstar/Morningstar_FundProfiles_USSPX.pdf';
class AutomaticInvestmentPlanEsignComponent extends Component {
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
        const{automaticInvestmentState,navigation}=this.props;
        const{itemToEdit}=this.state;
        if(automaticInvestmentState.savedAccData){
            myInstance.setAutomaticInvestmentEditMode(false);
            myInstance.setSavedAutomaticData('');
            // navigation.reset([
            //     NavigationActions.navigate({ routeName: 'dashboard' }),
            //     NavigationActions.navigate({ routeName: 'accountService' }),
            //     NavigationActions.navigate({ routeName: 'automaticInvestment' })
            //   ],2);
            if(itemToEdit == -1)
                navigation.goBack('automaticInvestmentAccount');
            else
                navigation.goBack('automaticInvestmentAdd');
        }

    }

    onCheckBoxCheck = () => {
        const{acceptPolicy}=this.state;
        this.setState({ acceptPolicy: !acceptPolicy });
    }

   

    getPayload = () => {
        const{automaticInvestmentState}=this.props;
        const{itemToEdit,accountType}=this.state;
        let payload = {};
        const item=myInstance.getSavedAutomaticData();
        if (this.props && automaticInvestmentState && item)
        {
            let planJson=[];
             const selected={id:itemToEdit==='-1'?'3':itemToEdit,
                account:`${item.accName}|${item.accNumber}` ,
                totalAmount:item.totalFund,
                            fundFrom:item.fundFrom,investedIn:item.investedIn,
                            invest:item.valueTypeDropDown,dateToInvest:item.valueDateDropDown,
                            dateAdded:item.dateAdded,endDate:item.endDate,
                            nextInvestementDate:item.nextInvestementDate,
                            accountType
                        };
            
            switch ((accountType.toLowerCase())) {
                case "general":
                    if(automaticInvestmentState.general){
                            
                            planJson=[...automaticInvestmentState.general];
                            if(itemToEdit==='-1')
                            {
                                
                                planJson.push(selected);
                            }
                            else{
                                planJson[Number(itemToEdit)]=selected;
                            }
                            payload = {
                                ...automaticInvestmentState,
                                general:planJson
                            };
                            
                        }
                        else{
                            const newObj = { "general" : selected};
                            Object.assign(automaticInvestmentState,newObj);
                            payload = {
                                ...automaticInvestmentState,
                            };
                        }
                    
                    break;
                case "ira":
                    if(automaticInvestmentState.ira){
                        planJson=[...automaticInvestmentState.ira];
                            if(itemToEdit==='-1')
                            {
                                planJson.push(selected);
                            }
                            else{
                                planJson[Number(itemToEdit)]=selected;
                                
                            }
                            payload = {
                                ...automaticInvestmentState,
                                ira:planJson
                            };
                        
                    }
                    else{
                        const newObj = { "ira" : selected};
                        Object.assign(automaticInvestmentState,newObj);
                        payload = {
                            ...automaticInvestmentState,
                        };
                    }
                    break;
                case "utma":
                    if(automaticInvestmentState.utma){
                        planJson=[...automaticInvestmentState.utma];
                        if(itemToEdit==='-1')
                        {
                            planJson.push(selected);
                        }
                        else{
                            planJson[Number(itemToEdit)]=selected;
                            
                        }
                        payload = {
                            ...automaticInvestmentState,
                            utma:planJson
                        };
                        
                    }
                    else{
                        const newObj = { "utma" : [selected]};
                        Object.assign(automaticInvestmentState,newObj);
                        payload = {
                            ...automaticInvestmentState,
                        };
                    }
                    break;
                default:
                    break;
        }
        // return payload;

    }
    return payload;
}

    navigationSubmit = () => {
        const{saveData}=this.props;
        const{acceptPolicy}=this.state;
        if(acceptPolicy){
            this.setState({errorTextMsg:''});
            const payload = this.getPayload();
            saveData("automaticInvestmentEsign", payload); 
        }
        else
            this.setState({errorTextMsg:'Please select the above checkbox'});
    }

    navigationCancel=()=>{
        const{navigation}=this.props;
        navigation.goBack('automaticInvestment');
    }

    navigationBack = () => {
        const{navigation}=this.props;
        navigation.goBack();
    }

    navigatePdf = () => {
        Linking.openURL(url);
    }

    render() {
        const{navigation}=this.props;
        const{acceptPolicy,errorTextMsg}=this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollViewStyle}>
                    <Text style={styles.autoInvestHead}>Create Automatic Investment Plan</Text>
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
                        <Text style={styles.autoInvest_title_text}>5 - E-sign</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>- E-Signature</Text>

                        </View>
                        <View style={styles.seperator_line} />
                        <View style={styles.esignBody}>
                            <View style={styles.esignBody1}>
                                <Text style={styles.esignTitle}>Documents to Sign</Text>
                                <View style={styles.seperator_line} />
                                <Text style={styles.esignHeading} onPress={this.navigatePdf}>USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES</Text>
                                {/* <Text style={styles.esignHeading}>USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES</Text> */}
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
AutomaticInvestmentPlanEsignComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    automaticInvestmentState:PropTypes.instanceOf(Object),
    saveData:PropTypes.func
};

AutomaticInvestmentPlanEsignComponent.defaultProps = {
    navigation:{},
    automaticInvestmentState:{},
    saveData:null
};

export default AutomaticInvestmentPlanEsignComponent;