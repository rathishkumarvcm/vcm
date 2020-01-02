import React, { Component } from 'react';
import { View, ScrollView, Text, InteractionManager } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GDateComponent,
    GSingletonClass
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';



const myInstance = GSingletonClass.getInstance();
class AutomaticInvestmentPlanVerifyComponent extends Component {
    constructor(props) {
        super(props);


        this.state = {
            skip: this.props.navigation.getParam('skip', false),
            //edit:this.props.navigation.getParam('edit', false),
            indexSelected: `${this.props.navigation.getParam('indexSelected')}`,
            autoInvestmentJson: {},
            dateFromValue: '',
            dateToValue: '',
            accountType: `${this.props.navigation.getParam('accountType')}`,
            //this.props.navigation.getParam('skip', false),
        };
    }
    componentDidMount() {

        let payload = {};
        if (this.state.skip) {
            if (this.props && this.props.automaticInvestmentState) {
                payload = {
                    //...payload,
                    ...this.props.automaticInvestmentState.general
                };
                
                this.setState({
                    autoInvestmentJson: payload[this.state.indexSelected],
                });
            }
        }
        else {

            // if (this.props && this.props.automaticInvestmentState && this.props.automaticInvestmentState.savedAccData) {
            //     payload = {
            //         //...payload,
            //         ...this.props.automaticInvestmentState.savedAccData
            //     };
            //     this.setState({ autoInvestmentJson: payload })
            // }
            this.setState({ autoInvestmentJson: myInstance.getSavedAutomaticData() })
            
        }

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


        let payload = {
            // totalAmount: '$500',  
            // fundFrom: 'Bank 1',
            // investedIn: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
            // invest: 'Quarterly',
            // dateToInvest: '15th',
            // dateAdded: '09/02/2019',
            // endDate: '15/12/2025',
            // nextInvestementDate: '15/11/2019',
        };
        if (this.props && this.props.automaticInvestmentState && this.props.automaticInvestmentState.savedAccData) {
            payload = {
                //...payload,
                ...this.props.automaticInvestmentState.savedAccData
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

    navigationNext = () => {
        //const payload = this.getPayload();
        //this.props.saveData("automaticInvestmentVerify", payload);
        this.props.navigation.navigate({routeName:'automaticInvestmentEsign',key:'automaticInvestmentEsign',params:{accountType:this.state.accountType,indexSelected:this.state.indexSelected}});
    }
    //navigationNext = () => this.props.navigation.navigate('automaticInvestmentEsign');

    navigationSubmit = () => this.props.navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});
    editAddedAccount=()=>
    {
        myInstance.setAutomaticInvestmentEditMode(true);
        this.props.navigation.goBack('automaticInvestmentAdd')
    }

    // parsingInvestIn = (item) =>
    // {
    //     console.log('item--------))))))))---------',item)
    //     let fundlist="";
    //     let array=item.investedIn;
    //     {array.map((fund) => {
    //         fundlist=fund.name+","+fundlist;
    //     })}
    //     return(<Text style={styles.verifyConent2}>{fundlist.replace(',','').trim()}</Text>)
    // }

    render() {

        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const currentdate = month + "-" + date + "-" + year;
        const item = this.state.autoInvestmentJson;
        //const item=myInstance.getSavedAutomaticData();
        
        let fundlist="";
        // if(this.state.autoInvestmentJson)
        // {
        //     console.log('=======================',this.state.autoInvestmentJson)
        //     item = this.state.autoInvestmentJson;
            
        // }
       
        if(item.account || item.acc_name)//if(this.state.autoInvestmentJson.account)
        {
            console.log('item=======================',item)
            item.investedIn.map((fund)=>{
                fundlist=fund.name+','+fundlist;
            })
        }
        return (
            <View style={styles.container}>
                {/* {this.parsingInvestIn(this.state.autoInvestmentJson)} */}
                <GHeaderComponent register navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    {this.state.skip ? null :
                        <View>
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

                        {/* <FlatList style={{ marginTop: scaledHeight(20) }}
                            data={this.state.autoInvestmentJson}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                        /> */}

                        <View style={styles.verifyContentMain}>

                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Account"}</Text>
                                <Text style={styles.verifyConent2}>{item.account?item.account:item.acc_name+'|'+item.acc_no}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Invested In"}</Text>
                            
                                <Text style={styles.verifyConent2}>{fundlist.replace(/,$/," ").trim()}</Text>
                                
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Total Amount"}</Text>
                                <Text style={styles.verifyConent2}>{item.totalFund?item.totalFund:item.totalAmount}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Fund From"}</Text>
                                <Text style={styles.verifyConent2}>{item.fundFrom}</Text>
                            </View>

                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Invest"}</Text>
                                <Text style={styles.verifyConent2}>{item.valueTypeDropDown?item.valueTypeDropDown:item.invest}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Date to Invest"}</Text>
                                <Text style={styles.verifyConent2}>{item.valueDateDropDown?item.valueDateDropDown:item.dateToInvest}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"End Date"}</Text>
                                <Text style={styles.verifyConent2}>{item.endDate}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Next Investement Date"}</Text>
                                <Text style={styles.verifyConent2}>{item.nextInvestementDate}</Text>
                            </View>
                        </View>

                        <View style={styles.verifyBottomView}>
                            <Text style={styles.verifyBottomText}>
                                {'Note : If the day you selected falls on a weekend or holiday, your draft will occur the next business day'}
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
                            /> : null}
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
AutomaticInvestmentPlanVerifyComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentPlanVerifyComponent.defaultProps = {

};

export default AutomaticInvestmentPlanVerifyComponent;