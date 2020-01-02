import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
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

import * as regEx from '../../Constants/RegexConstants';

const myInstance = GSingletonClass.getInstance();
const url = 'https://content.usaa.com/mcontent/static_assets/Mstar/Morningstar_FundProfiles_USSPX.pdf';
class SystematicWithdrawalPlanEsignComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acceptPolicy: false,
            accountType:`${this.props.navigation.getParam('accountType')}`,
            itemToEdit: `${this.props.navigation.getParam('indexSelected')}`,
            errorTextMsg:''
        };
    }
    componentDidUpdate(){

        if(this.props.systematicWithdrawalState.savedAccData){
            console.log('#####################',this.props.systematicWithdrawalState.savedAccData)
            this.props.navigation.navigate({routeName:'systematicWithdrawal',key:'systematicWithdrawal'});
        }

    }
    onCheckBoxCheck = () => {
        this.setState({ acceptPolicy: !this.state.acceptPolicy });
    }
    getPayload = () => {
        let payload = {};
        const item=myInstance.getSavedSystematicData();
        if (this.props && this.props.systematicWithdrawalState && item)
        {
            let planJson=[];
             let selected={id:this.state.itemToEdit==='-1'?'3':this.state.itemToEdit,//this.state.itemToEdit
                account:item.acc_name+"|"+item.acc_no ,
                totalAmount:item.totalFund,
                            fundTo:item.fundTo,
                            investedIn:item.investedIn,
                            invest:item.valueTypeDropDown,
                            dateToInvest:item.valueDateBeginDropDown,
                            //dateAdded:item.dateAdded,
                            //endDate:item.endDate,
                            nextWithdrawalDate:'',//item.nextWithdrawalDate
                        }
                        switch ((this.state.accountType)) {
                            case "general":
                                if(this.props.systematicWithdrawalState.general){
                                        
                                        planJson=[...this.props.systematicWithdrawalState.general];
                                        if(this.state.itemToEdit==='-1')
                                        {
                                            planJson.push(selected);
                                        }
                                        else{
                                            planJson[this.state.itemToEdit]=selected
                                            
                                        }
                                        payload = {
                                            ...this.props.systematicWithdrawalState,
                                            general:planJson
                                        };
                                        
                                    }
                                    else{
                                        let newObj = { "general" : selected}
                                        Object.assign(this.props.systematicWithdrawalState,newObj)
                                        payload = {
                                            ...this.props.systematicWithdrawalState,
                                        };
                                    }
                                
                                break;
                            case "ira":
                                if(this.props.systematicWithdrawalState.ira){
                                    planJson=[...this.props.systematicWithdrawalState.ira];
                                        if(this.state.itemToEdit==='-1')
                                        {
                                            planJson.push(selected);
                                        }
                                        else{
                                            planJson[this.state.itemToEdit]=selected
                                            
                                        }
                                    
                                }
                                else{
                                    let newObj = { "ira" : selected}
                                    Object.assign(this.props.systematicWithdrawalState,newObj)
                                    payload = {
                                        ...this.props.systematicWithdrawalState,
                                    };
                                }
                                break;
                            case "utma":
                                if(this.props.systematicWithdrawalState.utma){
                                    planJson=[...this.props.systematicWithdrawalState.utma];
                                    if(this.state.itemToEdit==='-1')
                                    {
                                        planJson.push(selected);
                                    }
                                    else{
                                        planJson[this.state.itemToEdit]=selected
                                        
                                    }
                                    
                                }
                                else{
                                    let newObj = { "utma" : [selected]}
                                    Object.assign(this.props.systematicWithdrawalState,newObj)
                                    payload = {
                                        ...this.props.systematicWithdrawalState,
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
        this.props.saveData("systematicWithdrawalEsign", payload); 
        myInstance.setSystematicWithdrawalEditMode(false);
        
    }
    else
    this.setState({errorTextMsg:'Please select the above checkbox'})
}
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate({routeName:'systematicWithdrawal',key:'systematicWithdrawal'});
    // this.props.navigation.navigate('systematicWithdrawal');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <Text style={styles.autoInvestHead}>{'Create Systematic Withdrawal Plan'}</Text>
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
                        <Text style={styles.autoInvest_title_text}>{'5 - E-Consent'}</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>{'- E-Consent'}</Text>

                        </View>
                        <View style={styles.seperator_line} />
                        <View style={styles.esignBody}>
                            <View style={styles.esignBody1}>
                                <Text style={styles.esignTitle}>{'Documents to Sign'}</Text>
                                <View style={styles.seperator_line} />
                                <Text style={styles.esignHeading}>{'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES'}</Text>
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

    navigation: PropTypes.instanceOf(Object)
};

SystematicWithdrawalPlanEsignComponent.defaultProps = {

};

export default SystematicWithdrawalPlanEsignComponent;