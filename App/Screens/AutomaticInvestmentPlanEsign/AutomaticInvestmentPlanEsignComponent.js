import React, { Component } from 'react';
import { Linking,View, ScrollView, Text } from 'react-native';
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

    onCheckBoxCheck = () => {
        
        this.setState({ acceptPolicy: !this.state.acceptPolicy });
    }

    componentDidUpdate(){
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%',this.state.itemToEdit)
        if(this.props.automaticInvestmentState.savedAccData){
            console.log('Esign$$$$$$$$$$$$$$$$$$$$',this.props.automaticInvestmentState.savedAccData)
            this.props.navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});
        }

    }

    getPayload = () => {
        
        // let planJson=[];
        let payload = {};
        
        // switch ((this.state.accountType)) {
        //     case "general":
        //         planJson=this.props.automaticInvestmentState.general?this.props.automaticInvestmentState.general:[];
        //         break;
        //     case "ira":
        //         planJson=this.props.automaticInvestmentState.ira?this.props.automaticInvestmentState.ira:[];
        //         break;
        //     case "utma":
        //         planJson=this.props.automaticInvestmentState.utma?this.props.automaticInvestmentState.utma:[];
        //         break;
        //     default:
        //         break;
        // }
        
        // if (this.props && this.props.automaticInvestmentState && this.props.automaticInvestmentState.savedAccData) {
            
        //     //planJson.push(this.props.automaticInvestmentState.savedAccData)
        //     let planJson={};
        //     switch ((this.state.accountType)) {
        //         case "general":
        //             if(this.props.automaticInvestmentState.general){
        //                 //Add
        //                 // planJson=this.props.automaticInvestmentState.general;
        //                 // planJson.push(this.props.automaticInvestmentState.savedAccData);
        //                 //Edit
        //                 var array = this.props.automaticInvestmentState.general; // make a separate copy of the array
        //                 var indexDelete = 0
        //                 if (indexDelete !== -1) {
        //                     array[0]=this.props.automaticInvestmentState.savedAccData
        //                     //planJson=array
        //                 }
                        
        //                 payload = {
        //                     ...this.props.automaticInvestmentState,
        //                     general: array,
        //                 };
        //             }
        //             else{
        //                 let newObj = { "general" : [this.props.automaticInvestmentState.savedAccData]}
        //                 Object.assign(this.props.automaticInvestmentState,newObj)
        //             }
        //             break;
        //         case "ira":
        //             if(this.props.automaticInvestmentState.ira){
        //                 planJson.push(this.props.automaticInvestmentState.savedAccData);//=this.props.automaticInvestmentState.ira
        //                 payload = {
        //                     ...this.props.automaticInvestmentState,
        //                     ira: planJson,
        //                 };
        //             }
        //             else{
        //                 let newObj = { "ira" : [this.props.automaticInvestmentState.savedAccData]}
        //                 Object.assign(this.props.automaticInvestmentState,newObj)
        //             }
        //             break;
        //         case "utma":
        //             if(this.props.automaticInvestmentState.utma){
        //                 planJson.push(this.props.automaticInvestmentState.savedAccData);//=this.props.automaticInvestmentState.utma
        //                 payload = {
        //                     ...this.props.automaticInvestmentState,
        //                     utma: planJson,
        //                 };
        //             }
        //             else{
        //                 let newObj = { "utma" : [this.props.automaticInvestmentState.savedAccData]}
        //                 Object.assign(this.props.automaticInvestmentState,newObj)
        //                 // payload = {
        //                 //     ...this.props.automaticInvestmentState,
        //                 //     utma:[this.props.automaticInvestmentState.savedAccData],
        //                 // };
        //             }
        //             break;
        //         default:
        //             break;
        //     }
        // }

        const item=myInstance.getSavedAutomaticData();
        if (this.props && this.props.automaticInvestmentState && item)
        {
            let planJson=[];//this.state.itemToEdit
             let selected={id:this.state.itemToEdit==='-1'?'3':this.state.itemToEdit,
                account:item.acc_name+"|"+item.acc_no ,
                totalAmount:item.totalFund,
                            fundFrom:item.fundFrom,investedIn:item.investedIn,
                            invest:item.valueTypeDropDown,dateToInvest:item.valueDateDropDown,
                            dateAdded:item.dateAdded,endDate:item.endDate,
                            nextInvestementDate:item.nextInvestementDate
                        }
            switch ((this.state.accountType)) {
                case "general":
                    if(this.props.automaticInvestmentState.general){
                            
                            planJson=[...this.props.automaticInvestmentState.general];
                            if(this.state.itemToEdit==='-1')
                            {
                                
                                planJson.push(selected);
                            }
                            else{
                                planJson[this.state.itemToEdit]=selected
                                
                            }
                            payload = {
                                ...this.props.automaticInvestmentState,
                                general:planJson
                            };
                            
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
            myInstance.setAutomaticInvestmentEditMode(false);
            //this.props.navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});
        }
        else
        this.setState({errorTextMsg:'Please select the above checkbox'})
    }

    //navigationSubmit = () => this.props.navigation.navigate('automaticInvestment');
    navigationCancel=()=>this.props.navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});
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

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentPlanEsignComponent.defaultProps = {

};

export default AutomaticInvestmentPlanEsignComponent;