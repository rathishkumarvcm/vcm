import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GSingletonClass,
    GDateComponent
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';
import { FlatList } from 'react-native-gesture-handler';
import { scaledHeight } from '../../Utils/Resolution';


const myInstance = GSingletonClass.getInstance();
class SystematicWithdrawalPlanVerifyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skip: this.props.navigation.getParam('skip', false),
            indexSelected: `${this.props.navigation.getParam('indexSelected')}`,
            systematicWithdrawalJson: {},
            dateFromValue: '',
            dateToValue: '',
            accountType: `${this.props.navigation.getParam('accountType')}`,
        };
    }

    componentDidMount() {

        let payload = {};
        if (this.state.skip) {
            if (this.props && this.props.systematicWithdrawalState) {
                payload = {
                    ...this.props.systematicWithdrawalState.general
                };
                this.setState({
                    systematicWithdrawalJson: payload[this.state.indexSelected],
                });
            }
        }
        else {
             this.setState({ systematicWithdrawalJson: myInstance.getSavedSystematicData() })
            
        }

    }

    generateKeyExtractor = (item) => item.id;
    renderInvestment = () => ({ item }) =>
        (

            <View style={styles.verifyContentView}>
                <Text style={styles.verifyConentTitle1}>{item.title}</Text>
                <Text style={styles.verifyConentTitle2}>{item.content}</Text>
            </View>

        )
        onChangeFromDateValue = (date) => {
            this.setState({
                dateFromValue: date
            });
        }
    
        onChangeToDateValue = (date) => {
            this.setState({
                dateToValue: date
            });
        }
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate({routeName:'systematicWithdrawal',key:'systematicWithdrawal'});
    navigationNext = () => this.props.navigation.navigate({routeName:'systematicWithdrawalEsign',key:'systematicWithdrawalEsign',params:{accountType:this.state.accountType,indexSelected:this.state.indexSelected}});
    navigationSubmit = () => this.props.navigation.navigate({routeName:'systematicWithdrawal',key:'systematicWithdrawal'});
    
    editAddedAccount=()=>
    {
        myInstance.setSystematicWithdrawalEditMode(true);
        this.props.navigation.goBack('systematicWithdrawalAdd')
    }

    render() {
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const currentdate = month + "-" + date + "-" + year;
        const item = this.state.systematicWithdrawalJson;
        console.log('************************',item)
        let fundlist="";
        if(item.account || item.acc_name)//if(this.state.autoInvestmentJson.account)
        {
            item.investedIn.map((fund)=>{
                fundlist=fund.name+','+fundlist;
            })
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                {this.state.skip ? null :
                        <View>
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
                        <View style={styles.circle_Inprogress}>
                            <Text style={styles.circleText}>{'4'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_NotStarted}>
                            <Text style={styles.circleText}>{'5'}</Text>
                        </View>
                    </View>

                    <View style={styles.autoInvest_title_view}>
                        <Text style={styles.autoInvest_title_text}>{'4 - Verify'}</Text>
                    </View>
                    </View>
                    }
                    <View style={styles.body}>
                        <View style={styles.autoInvestTitleBody}>
                            {
                                this.state.skip ?
                                    <Text style={styles.autoInvest_sub_title_text}>{'Skip the Investment Plan'}</Text>
                                    :
                                    <View style={styles.autoInvest_sub_title_view}>
                                        <Text style={styles.autoInvest_sub_title_text}>{'Verify the Investment Plan'}</Text>
                                        <Text style={styles.autoInvest_sub_edit} onPress={this.editAddedAccount}>{'Edit'}</Text>
                                    </View>
                            }


                        </View>
                        <View style={styles.seperator_line} />
                         <View style={styles.verifyContentMain}>

                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>{"Account"}</Text>
                            <Text style={styles.verifyConent2}>{item.account?item.account:item.acc_name+'|'+item.acc_no}</Text>
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>{"Withdrawal From"}</Text>

                            <Text style={styles.verifyConent2}>{fundlist.replace(/,$/," ").trim()}</Text>
                            
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>{"Total Amount"}</Text>
                            <Text style={styles.verifyConent2}>{item.totalFund?item.totalFund:item.totalAmount}</Text>
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>{"Fund To"}</Text>
                            <Text style={styles.verifyConent2}>{item.fundTo}</Text>
                        </View>

                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>{"Frequency"}</Text>
                            <Text style={styles.verifyConent2}>{item.valueTypeDropDown?item.valueTypeDropDown:item.invest}</Text>
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>{"Date"}</Text>
                            <Text style={styles.verifyConent2}>{item.valueDateBeginDropDown?item.valueDateBeginDropDown:item.dateToInvest}</Text>
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>{"Beginning on"}</Text>
                            <Text style={styles.verifyConent2}>{item.valueStartDateDropDown+'/'+item.valueStartYearDropDown}</Text>
                        </View>
                        </View>
                        <View style={styles.verifyBottomView}>
                            <Text style={styles.verifyBottomText}>
                                {'Note : If the day you selected falls on a weekend or holiday, your Fund Transfer on next business day'}
                            </Text>
                        </View>
                        {this.state.skip ?
                            <View>
                                <Text style={styles.autoInvest_sub_title_skip}>{'Skip the Investment'}</Text>
                                <View style={styles.seperator_line} />
                                <GDateComponent
                                    dateTitleName={styles.financialTextLabel}
                                    dateTextName="Skip from date"
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={this.state.dateFromValue}
                                    onDateChange={this.onChangeFromDateValue} />

                                <GDateComponent
                                    dateTitleName={styles.financialTextLabel}
                                    dateTextName="Skip to date"
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={this.state.dateToValue}
                                    onDateChange={this.onChangeToDateValue} />


                            </View>
                            : null
                        }
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationCancel}
                        />
                         {!this.state.skip ?
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationBack}
                        />: null}
                         {!this.state.skip ?
                        <GButtonComponent
                            buttonStyle={styles.continueButton}
                            buttonText={globalString.common.next}
                            textStyle={styles.continueButtonText}
                            onPress={this.navigationNext}
                        />
                        : <GButtonComponent
                        buttonStyle={styles.continueButton}
                        buttonText={globalString.common.submit}
                        textStyle={styles.continueButtonText}
                        onPress={this.navigationSubmit}
                    />}
                        <GFooterComponent />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalPlanVerifyComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

SystematicWithdrawalPlanVerifyComponent.defaultProps = {

};

export default SystematicWithdrawalPlanVerifyComponent;