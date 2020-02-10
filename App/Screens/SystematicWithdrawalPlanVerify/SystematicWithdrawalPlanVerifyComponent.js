import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GSingletonClass,
    GDateComponent
} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';



const myInstance = GSingletonClass.getInstance();
class SystematicWithdrawalPlanVerifyComponent extends Component {
    constructor(props) {
        super(props);
        const{navigation}=this.props;
        this.state = {
            skip: navigation.getParam('skip', false),
            indexSelected: `${navigation.getParam('indexSelected')}`,
            systematicWithdrawalJson: {},
            dateFromValue: '',
            dateToValue: '',
            accountType: `${navigation.getParam('accountType')}`,
        };
    }

    static getDerivedStateFromProps(nextProps,preState) {
        const{systematicWithdrawalProps}=nextProps;
        const{skip,accountType,indexSelected}=preState;
        let payload = {};
        if (skip) {
            if (systematicWithdrawalProps) {
                switch(accountType.toLowerCase())
                {
                    case 'general':
                        payload = {
                            ...systematicWithdrawalProps.general
                        };
                        break;
                    case 'ira':
                        payload = {
                            ...systematicWithdrawalProps.ira
                        };
                        break;
                    case 'utma':
                        payload = {
                            ...systematicWithdrawalProps.utma
                        };
                        break;
                    default:
                        break;
                }
                return({
                    systematicWithdrawalJson: payload[Number(indexSelected)],
                });
            }
        }
        else {
             return({ systematicWithdrawalJson: myInstance.getSavedSystematicData() });
        }
        return null;
    }

    // componentDidMount() {
    //     const{systematicWithdrawalProps}=this.props;
    //     const{skip,accountType,indexSelected}=this.state;
    //     let payload = {};
    //     if (skip) {
    //         if (this.props && systematicWithdrawalProps) {
    //             switch(accountType.toLowerCase())
    //             {
    //                 case 'general':
    //                     payload = {
    //                         ...systematicWithdrawalProps.general
    //                     };
    //                     break;
    //                 case 'ira':
    //                     payload = {
    //                         ...systematicWithdrawalProps.ira
    //                     };
    //                     break;
    //                 case 'utma':
    //                     payload = {
    //                         ...systematicWithdrawalProps.utma
    //                     };
    //                     break;
    //                 default:
    //                     break;
    //             }
    //             this.setState({
    //                 systematicWithdrawalJson: payload[Number(indexSelected)],
    //             });
    //             // ,() => {
    //             //     this.afterSetStateFinished();
    //             // }
    //         }
    //     }
    //     else {
    //          this.setState({ systematicWithdrawalJson: myInstance.getSavedSystematicData() });
            
    //     }

    // }

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

    navigationBack = () => {
        const{navigation}=this.props;
        navigation.goBack();
    }

    navigationCancel = () => {
        const{navigation}=this.props;
        const{skip,indexSelected}=this.state;
        if(skip)
            navigation.goBack(); 
        else if(indexSelected>-1)
            navigation.goBack('systematicWithdrawalAdd');
        else
            navigation.goBack('systematicWithdrawalAccount');
    }

    // navigation.navigate({routeName:'systematicWithdrawal',key:'systematicWithdrawal'});
    navigationNext = () => {
        const{navigation}=this.props;
        const{accountType,indexSelected}=this.state;
    navigation.navigate({routeName:'systematicWithdrawalEsign',key:'systematicWithdrawalEsign',params:{accountType,indexSelected}});
    }

    navigationSubmit = () => 
    {
        const{navigation}=this.props;
        navigation.goBack();
    }
    // navigation.navigate({routeName:'systematicWithdrawal',key:'systematicWithdrawal'});
    
    editAddedAccount=()=>
    {
        const{navigation}=this.props;
        myInstance.setSystematicWithdrawalEditMode(true);
        navigation.goBack('systematicWithdrawalAdd');
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

    render() {
        const{systematicWithdrawalJson,skip,dateFromValue,dateToValue}=this.state;
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month }-${ date }-${ year}`;
        const item = systematicWithdrawalJson;
        let fundlist=" ";
        let twiceMonth='null';
        let ordinalDate='';
        if(item.dateToInvest)
        {
            
            twiceMonth=` & ${item.dateToInvest}`;
            
        }
        else if(item.valueDateDropDown!=='null')
        {
            twiceMonth=` & ${item.valueDateDropDown}`;
        }
        if(item.valueDateBeginDropDown)
        {
            ordinalDate=this.getNumberWithOrdinal(item.valueDateBeginDropDown);
            if(twiceMonth !== 'null')
            {
                ordinalDate+=this.getNumberWithOrdinal(twiceMonth);
            }
        }
        else
        {
            ordinalDate=this.getNumberWithOrdinal(item.dateFromInvest);
            if(twiceMonth !== 'null')
                ordinalDate+=this.getNumberWithOrdinal(twiceMonth);
        }
        // item.valueDateBeginDropDown?(this.getNumberWithOrdinal(item.valueDateBeginDropDown)+this.getNumberWithOrdinal(twiceMonth)):this.getNumberWithOrdinal(item.dateFromInvest)+this.getNumberWithOrdinal(twiceMonth)

        
        if(item.account || item.accName)// if(autoInvestmentJson.account)
        {
            item.investedIn.forEach(fund=>{
                fundlist=`${fund.fundName}\n${fundlist}`;
            });
        }
        const{navigation}=this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollStyle}>
                {skip ? null : (
                        <View>
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
                            <Text style={styles.verifyConent1}>Withdrawal From</Text>

                            <Text style={styles.verifyConent2}>{fundlist.trim()}</Text>
                            
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>Total Amount</Text>
                            <Text style={styles.verifyConent2}>{item.totalFund?this.getAmountWithSymbol(item.totalFund):this.getAmountWithSymbol(item.totalAmount)}</Text>
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>Fund To</Text>
                            <Text style={styles.verifyConent2}>{item.fundTo}</Text>
                        </View>

                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>Frequency</Text>
                            <Text style={styles.verifyConent2}>{item.valueTypeDropDown?item.valueTypeDropDown:item.invest}</Text>
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>Date</Text>
                            <Text style={styles.verifyConent2}>{ordinalDate}</Text>
                        </View>
                        <View style={styles.verifyContentView}>
                            <Text style={styles.verifyConent1}>Beginning on</Text>
                            <Text style={styles.verifyConent2}>{item.valueStartMonthDropDown?`${item.valueStartMonthDropDown}/${item.valueStartYearDropDown}`:`${item.startDate}/${item.startYear}`}</Text>
                        </View>
                         </View>
                        <View style={styles.verifyBottomView}>
                            <Text style={styles.verifyBottomText}>
                                Note : If the day you selected falls on a weekend or holiday, your Fund Transfer on next business day
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
                      ): null}
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
                        buttonStyle={dateFromValue!=='' && dateToValue!==''? styles.continueButtonSelected:styles.continueButton}
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
SystematicWithdrawalPlanVerifyComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    systematicWithdrawalProps: PropTypes.instanceOf(Object),
};

SystematicWithdrawalPlanVerifyComponent.defaultProps = {
    navigation:{},
    systematicWithdrawalProps:{}
};

export default SystematicWithdrawalPlanVerifyComponent;