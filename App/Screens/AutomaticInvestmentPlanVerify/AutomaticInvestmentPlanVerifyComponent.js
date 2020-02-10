import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GDateComponent,
    GSingletonClass
} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
// import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

const myInstance = GSingletonClass.getInstance();
class AutomaticInvestmentPlanVerifyComponent extends Component {
    constructor(props) {
        super(props);
        const{navigation}=this.props;

        this.state = {
            skip: navigation.getParam('skip', false),
            indexSelected: `${navigation.getParam('indexSelected')}`,
            autoInvestmentJson: {},
            dateFromValue: '',
            dateToValue: '',
            accountType: `${navigation.getParam('accountType')}`,
        };
    }

    static getDerivedStateFromProps(nextProps,preState) {
        const{automaticInvestmentProps}=nextProps;
        const{skip,accountType,indexSelected}=preState;
        let payload = {};
        if (skip) {
            if (automaticInvestmentProps) {
                switch(accountType.toLowerCase())
                {
                    case 'general':
                        payload = {
                            ...automaticInvestmentProps.general
                        };
                        break;
                    case 'ira':
                        payload = {
                            ...automaticInvestmentProps.ira
                        };
                        break;
                    case 'utma':
                        payload = {
                            ...automaticInvestmentProps.utma
                        };
                        break;
                        default:
                            break;
                }
                return({
                    autoInvestmentJson: payload[Number(indexSelected)],
                });
            }
        }
        else {
            return({ autoInvestmentJson: myInstance.getSavedAutomaticData() });
            
        }
        return null;
    }

    // componentDidMount() {
    //     const{automaticInvestmentProps}=this.props;
    //     const{skip,accountType,indexSelected}=this.state;
    //     let payload = {};
    //     if (skip) {
    //         if (this.props && automaticInvestmentProps) {
    //             switch(accountType.toLowerCase())
    //             {
    //                 case 'general':
    //                     payload = {
    //                         ...automaticInvestmentProps.general
    //                     };
    //                     break;
    //                 case 'ira':
    //                     payload = {
    //                         ...automaticInvestmentProps.ira
    //                     };
    //                     break;
    //                 case 'utma':
    //                     payload = {
    //                         ...automaticInvestmentProps.utma
    //                     };
    //                     break;
    //                     default:
    //                         break;
    //             }
    //             this.setState({
    //                 autoInvestmentJson: payload[Number(indexSelected)],
    //             });
    //         }
    //     }
    //     else {
    //         this.setState({ autoInvestmentJson: myInstance.getSavedAutomaticData() });
            
    //     }

    // }

    componentDidUpdate(){
        const{navigation,automaticInvestmentProps} = this.props;
        // const{dateFromValue,dateToValue} =this.state;
        // const skipRespKey = ActionTypes.SKIP_INVEST_WITHDRAW_PLAN;

        if(automaticInvestmentProps.isSuccess)
        {
            navigation.goBack();
            // navigation.goBack('automaticInvestmentPlan',{'dateFromValue':dateFromValue,'dateToValue':dateToValue});
        }
        else if(automaticInvestmentProps.isError)
        {
            // console.log(automaticInvestmentProps[`${skipRespKey}`]);
        }

            // if (automaticInvestmentProps[skipRespKey]) {
            //     //if (automaticInvestmentProps[skipRespKey] !== prevProps.automaticInvestmentProps[skipRespKey]) {
            //         const tempResponse = automaticInvestmentProps[skipRespKey];
            //         if (tempResponse.statusCode === 200 || tempResponse.statusCode === '200') {
            //             const msg = `${tempResponse.message}`;
            //             AppUtils.debugLog(`Account Skipped ::: :: ${msg}`);
            //             showAlert(gblStrings.common.appName, msg, gblStrings.common.ok);

            //             navigation.goBack();
            //         } else {
            //             AppUtils.debugLog(`Account Skipped failed::: :: ${tempResponse.message}`);
            //             showAlert(gblStrings.common.appName, tempResponse.message, gblStrings.common.ok);
                       
            //         }
            //     }
            // }
    }


    generateKeyExtractor = (item) => item.id;

    renderInvestment = () => ({ item }) =>
        (

            <View style={styles.verifyContentView}>
                <Text style={styles.verifyConent1}>{item.title}</Text>
                <Text style={styles.verifyConent2}>{item.content}</Text>
            </View>



        )

    getPayload = () => {

        const{automaticInvestmentProps}=this.props;
        let payload = {};
        if (this.props && automaticInvestmentProps && automaticInvestmentProps.savedAccData) {
            payload = {
                ...automaticInvestmentProps.savedAccData
            };
        }
        return payload;

    }

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

    getNumberWithOrdinal = (n) => {
        const s=["th","st","nd","rd"];
        const v=n%100;
        return n+(s[(v-20)%10]||s[+v]||s[0]);
 }

  getAmountWithSymbol= (n) =>{
        const s=["$"];
        return s+n;
    }

    navigationNext = () => {
        const{navigation}=this.props;
        const{accountType,indexSelected}=this.state;
        navigation.navigate({routeName:'automaticInvestmentEsign',key:'automaticInvestmentEsign',params:{accountType,indexSelected}});
    }

    navigationSubmit = () => 
    {
        const{skipAutoInvestPlan}=this.props;
        const{dateFromValue,dateToValue}=this.state;
        const payload={
            "customerId":"123",
             "PADId":"001",
             "investTo":{
                "fundNumber": "30"
               },
             "accountSelection":{
                "companyNumber": "591",
                "accountNumber":"430"
                },
             "skip":{
                "dateSuspendedFrom":dateFromValue,
                "dateSuspendedTo":dateToValue
              }
            };
        skipAutoInvestPlan(payload);
        
    }

    navigationBack = () => {
        const{navigation}=this.props;
        navigation.goBack();
        // 'automaticInvestment',{skipFrom:dateFromValue,skipTo:dateToValue,index:}
    }

    navigationCancel = () => {
        const{navigation}=this.props;
        navigation.goBack('automaticInvestment');
    }

    editAddedAccount=()=>
    {
        const{navigation}=this.props;
        myInstance.setAutomaticInvestmentEditMode(true);
        navigation.goBack('automaticInvestmentSchedule');
    }

    render() {
        const{navigation}=this.props;
        const{autoInvestmentJson,skip,dateToValue,dateFromValue}=this.state;
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month }-${ date }-${ year}`;
        const item = autoInvestmentJson;
        
        let fundlist="";
       
        if(item.account || item.accName)
        {
            item.investedIn.forEach(fund=>{
                fundlist=`${fund.fundName}\n${fundlist}`;
            });
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={navigation} />
                <ScrollView style={styles.scrollStyle}>
                    {skip ? null : (
                        <View>
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
                                <View style={styles.circle_Inprogress}>
                                    <Text style={styles.circleText}>4</Text>
                                </View>
                                <View style={styles.circle_connect} />
                                <View style={styles.circle_NotStarted}>
                                    <Text style={styles.circleText}>5</Text>
                                </View>
                            </View>

                            <View style={styles.autoInvest_title_view}>
                                <Text style={styles.autoInvest_title_text}>4 - Verify</Text>
                            </View>
                        </View>
                      )}
                    <View style={styles.body}>
                        <View style={styles.autoInvestTitleBody}>
                            {
                                skip ?
                                    <Text style={styles.autoInvest_sub_title_text}>Skip the Investment Plan</Text>
                                    : (
                                    <View style={styles.autoInvest_sub_title_view}>
                                        <Text style={styles.autoInvest_sub_title_text}>Verify the Investment Plan</Text>
                                        <Text style={styles.autoInvest_sub_edit} onPress={this.editAddedAccount}>Edit</Text>
                                    </View>
                                  )}


                        </View>
                        <View style={styles.seperator_line} />

                        <View style={styles.verifyContentMain}>

                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>Account</Text>
                                <Text style={styles.verifyConent2}>{item.account?item.account:`${item.accName}|${item.accNumber}`}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>Invested In</Text>
                            
                                <Text style={styles.verifyConent2}>{fundlist.trim()}</Text>
                                
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>Total Amount</Text>
                                <Text style={styles.verifyConent2}>{item.totalFund?this.getAmountWithSymbol(item.totalFund):this.getAmountWithSymbol(item.totalAmount)}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>Fund From</Text>
                                <Text style={styles.verifyConent2}>{item.fundFrom}</Text>
                            </View>

                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>Invest</Text>
                                <Text style={styles.verifyConent2}>{item.valueTypeDropDown?item.valueTypeDropDown:item.invest}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>Date to Invest</Text>
                                <Text style={styles.verifyConent2}>{item.valueDateDropDown?this.getNumberWithOrdinal(item.valueDateDropDown):this.getNumberWithOrdinal(item.dateToInvest)}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>End Date</Text>
                                <Text style={styles.verifyConent2}>{item.endDate}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>Next Investement Date</Text>
                                <Text style={styles.verifyConent2}>{item.nextInvestementDate}</Text>
                            </View>
                        </View>

                        <View style={styles.verifyBottomView}>
                            <Text style={styles.verifyBottomText}>
                                Note : If the day you selected falls on a weekend or holiday, your draft will occur the next business day
                            </Text>
                        </View>
                        {skip ? (
                            <View>
                                <Text style={styles.autoInvest_sub_title_skip}>Skip the Investment</Text>
                                <View style={styles.seperator_line} />

                                <GDateComponent
                                    dateTitleName={styles.financialTextLabel}
                                    dateTextName="Skip from date"
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={dateFromValue}
                                    onDateChange={this.onChangeFromDateValue}
                                />

                                <GDateComponent
                                    dateTitleName={styles.financialTextLabel}
                                    dateTextName="Skip to date"
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={dateToValue}
                                    onDateChange={this.onChangeToDateValue}
                                />


                            </View>
                          )
                            : null
                        }
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationCancel}
                        />
                        {!skip ? (
                            <GButtonComponent
                                buttonStyle={styles.cancelButton}
                                buttonText={globalString.common.back}
                                textStyle={styles.cancelButtonText}
                                onPress={this.navigationBack}
                            />
                          ) : null}
                        {!skip ? (
                            <GButtonComponent
                                buttonStyle={styles.continueButtonSelected}
                                buttonText={globalString.common.next}
                                textStyle={styles.continueButtonText}
                                onPress={this.navigationNext}
                            />
                          )
                            : (
                            <GButtonComponent
                                buttonStyle={dateFromValue!=='' && dateToValue!==''?styles.continueButtonSelected:styles.continueButton}
                                buttonText={globalString.common.submit}
                                textStyle={styles.continueButtonText}
                                onPress={dateFromValue!=='' && dateToValue!==''?this.navigationSubmit:null}
                            />
)}
                        <GFooterComponent />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentPlanVerifyComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    automaticInvestmentProps: PropTypes.instanceOf(Object),
    skipAutoInvestPlan:PropTypes.func,
};

AutomaticInvestmentPlanVerifyComponent.defaultProps = {
    navigation:{},
    automaticInvestmentProps:{},
    skipAutoInvestPlan:{},
};

export default AutomaticInvestmentPlanVerifyComponent;