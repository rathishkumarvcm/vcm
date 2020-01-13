import React, { Component } from 'react';
import { Linking,View, ScrollView, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GSingletonClass
} from '../../CommonComponents';
import { CustomCheckBox } from '../../AppComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

const myInstance = GSingletonClass.getInstance();
const url = 'https://content.usaa.com/mcontent/static_assets/Mstar/Morningstar_FundProfiles_USSPX.pdf';
class AutomaticInvestmentPlanEsignComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acceptPolicy: false,
            accountType:`${this.props.navigation.getParam('accountType')}`,
            itemToEdit: `${this.props.navigation.getParam('indexSelected')}`,
            errorTextMsg:''
        };
    }

    onCheckBoxCheck = ()  => {
        
        this.setState({ acceptPolicy: !this.state.acceptPolicy });
    }

    componentDidUpdate(){
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%',this.state.itemToEdit)
        if(this.props.automaticInvestmentState.savedAccData){
            console.log('Esign$$$$$$$$$$$$$$$$$$$$',this.props.automaticInvestmentState.savedAccData)
            myInstance.setAutomaticInvestmentEditMode(false);
            myInstance.setSavedAutomaticData('')
            // this.props.navigation.reset([
            //     NavigationActions.navigate({ routeName: 'dashboard' }),
            //     NavigationActions.navigate({ routeName: 'accountService' }),
            //     NavigationActions.navigate({ routeName: 'automaticInvestment' })
            //   ],2);
            
            if(this.state.itemToEdit==-1)
                this.props.navigation.goBack('automaticInvestmentAccount')
            else
                this.props.navigation.goBack('automaticInvestmentAdd')
        }

    }

    getPayload = () => {
        let payload = {};
        const item=myInstance.getSavedAutomaticData();
        if (this.props && this.props.automaticInvestmentState && item)
        {
            let planJson=[];
             let selected={id:this.state.itemToEdit==='-1'?'3':this.state.itemToEdit,
                account:item.acc_name+"|"+item.acc_no ,
                totalAmount:item.totalFund,
                            fundFrom:item.fundFrom,investedIn:item.investedIn,
                            invest:item.valueTypeDropDown,dateToInvest:item.valueDateDropDown,
                            dateAdded:item.dateAdded,endDate:item.endDate,
                            nextInvestementDate:item.nextInvestementDate
                        }
            
            switch ((this.state.accountType.toString())) {
                case "general":
                    if(this.props.automaticInvestmentState.general){
                            
                            planJson=[...this.props.automaticInvestmentState.general];
                            console.log('planJson*********',planJson)
                            if(this.state.itemToEdit==='-1')
                            {
                                
                                planJson.push(selected);
                            }
                            else{
                                planJson[this.state.itemToEdit]=selected
                                console.log('planJson***itemToEdit******',planJson)
                            }
                            payload = {
                                ...this.props.automaticInvestmentState,
                                general:planJson
                            };
                            console.log('payload*********',payload)
                            
                        }
                        else{
                            let newObj = { "general" : selected}
                            Object.assign(this.props.automaticInvestmentState,newObj)
                            payload = {
                                ...this.props.automaticInvestmentState,
                            };
                        }
                    
                    break;
                case "ira":
                    if(this.props.automaticInvestmentState.ira){
                        planJson=[...this.props.automaticInvestmentState.ira];
                            if(this.state.itemToEdit==='-1')
                            {
                                planJson.push(selected);
                            }
                            else{
                                planJson[this.state.itemToEdit]=selected
                                
                            }
                            payload = {
                                ...this.props.automaticInvestmentState,
                                ira:planJson
                            };
                        
                    }
                    else{
                        let newObj = { "ira" : selected}
                        Object.assign(this.props.automaticInvestmentState,newObj)
                        payload = {
                            ...this.props.automaticInvestmentState,
                        };
                    }
                    break;
                case "utma":
                    if(this.props.automaticInvestmentState.utma){
                        planJson=[...this.props.automaticInvestmentState.utma];
                        if(this.state.itemToEdit==='-1')
                        {
                            planJson.push(selected);
                        }
                        else{
                            planJson[this.state.itemToEdit]=selected
                            
                        }
                        payload = {
                            ...this.props.automaticInvestmentState,
                            utma:planJson
                        };
                        
                    }
                    else{
                        let newObj = { "utma" : [selected]}
                        Object.assign(this.props.automaticInvestmentState,newObj)
                        payload = {
                            ...this.props.automaticInvestmentState,
                        };
                    }
                    break;
        }
        return payload;

    }
}

    navigationSubmit = () => {
        if(this.state.acceptPolicy){
            this.setState({errorTextMsg:''})
            const payload = this.getPayload();
            this.props.saveData("automaticInvestmentEsign", payload); 
        }
        else
            this.setState({errorTextMsg:'Please select the above checkbox'})
    }
    navigationCancel=()=>this.props.navigation.goBack('automaticInvestment');
    navigationBack = () => this.props.navigation.goBack();

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <Text style={styles.autoInvestHead}>{'Create Automatic Investment Plan'}</Text>
                    <View style={styles.seperator_line} />
                    <View style={styles.circle_view}>
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>{'1'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>{'2'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>{'3'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleText}>{'4'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Inprogress}>
                            <Text style={styles.circleText}>{'5'}</Text>
                        </View>
                    </View>

                    <View style={styles.autoInvest_title_view}>
                        <Text style={styles.autoInvest_title_text}>{'5 - E-sign'}</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>{'- E-Signature'}</Text>

                        </View>
                        <View style={styles.seperator_line} />
                        <View style={styles.esignBody}>
                            <View style={styles.esignBody1}>
                                <Text style={styles.esignTitle}>{'Documents to Sign'}</Text>
                                <View style={styles.seperator_line} />
                                <Text style={styles.esignHeading} onPress={()=>{Linking.openURL(url);}}>{'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES'}</Text>
                                <Text style={styles.esignContent1}>{'This document contains the information provided by you as part of your automatic investment plan, including Terms and Conditions.'}</Text>
                                <Text style={styles.esignContent2}>{'By selecting "Submit", I agree to the documents and terms above and certify that any information I provided is accurate, up-to-date and complete.'}</Text>
                            </View>
                            
                            <View style={styles.esignBottomView}>
                                <CustomCheckBox
                                    size={24}
                                    itemBottom={0}
                                    itemTop={0}
                                    outerCicleColor={"#707070"}
                                    innerCicleColor={"#2C8DBF"}
                                    labelStyle={styles.agreeTermsTxt}
                                    label={'I, Agree that i have received, read, understood, and agree to the documents linked above.'}
                                    selected={this.state.acceptPolicy}
                                    onPress={this.onCheckBoxCheck}
                                />
                               <Text style={styles.errorText}>{this.state.errorTextMsg}</Text>
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
    saveData:PropTypes.func
};

AutomaticInvestmentPlanEsignComponent.defaultProps = {
    navigation:{},
    saveData:null
};

export default AutomaticInvestmentPlanEsignComponent;