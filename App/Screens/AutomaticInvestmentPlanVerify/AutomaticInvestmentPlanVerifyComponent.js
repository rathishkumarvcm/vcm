import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GDateComponent,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';
import { FlatList } from 'react-native-gesture-handler';
import { scaledHeight } from '../../Utils/Resolution';


class AutomaticInvestmentPlanVerifyComponent extends Component {
    constructor(props) {
        super(props);


        this.state = {
            skip: this.props.navigation.getParam('skip', false),
            autoInvestmentJson: {},
            //this.props.navigation.getParam('skip', false),
        };
    }
    componentDidMount() {

        if (this.props && this.props.automaticInvestmentState) {
            this.setState({
                autoInvestmentJson: this.props.automaticInvestmentState[0],
            });
        }
    }

    onChangeDateForInvestment = (keyName, index) => date => {
        console.log("onChangeDateForInvestment:::>");
        //     let newItems = [...this.state.selectedFundInvestmentsData];
        //     newItems[index][keyName] = date;
        //    // newItems[index][keyName+"Validation"] = false;
        //    newItems[index].fundingOptionValidation = true;
        //    newItems[index].initialInvestmentValidation = true;
        //    newItems[index].monthlyInvestmentValidation = true;
        //    newItems[index].startDateValidation = true;

        //     this.setState({
        //         selectedFundInvestmentsData: newItems,
        //     });
    }

    generateKeyExtractor = (item) => item.id;
    renderInvestment = () => ({ item }) =>
        (

            <View style={styles.verifyContentView}>
                <Text style={styles.verifyConent1}>{item.title}</Text>
                <Text style={styles.verifyConent2}>{item.content}</Text>
            </View>

            

        )
    navigationNext = () => this.props.navigation.navigate('automaticInvestmentEsign');

    navigationSubmit = () => this.props.navigation.navigate('automaticInvestment');
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate('automaticInvestment');

    
    render() {
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const currentdate = month + "-" + date + "-" + year;
        var item=this.state.autoInvestmentJson;
        { console.log('this.state.skip.........', item) }
        return (
            <View style={styles.container}>
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
                                    <View  style={styles.autoInvest_sub_title_view}>
                                        <Text style={styles.autoInvest_sub_title_text}>{'Verify the Investment Plan'}</Text>
                                        <Text style={styles.autoInvest_sub_edit}>{'Edit'}</Text>
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
                                <Text style={styles.verifyConent2}>{item.account}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Invested In"}</Text>
                                <Text style={styles.verifyConent2}>{item.investedIn}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Total Amount"}</Text>
                                <Text style={styles.verifyConent2}>{item.totalAmount}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Fund From"}</Text>
                                <Text style={styles.verifyConent2}>{item.fundFrom}</Text>
                            </View>
                            
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Invest"}</Text>
                                <Text style={styles.verifyConent2}>{item.invest}</Text>
                            </View>
                            <View style={styles.verifyContentView}>
                                <Text style={styles.verifyConent1}>{"Date to Invest"}</Text>
                                <Text style={styles.verifyConent2}>{item.dateToInvest}</Text>
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
                                {/*<Text style={styles.skipConentTitle}>{'Skip from date'}</Text>
                                 <GDateComponent
                                    //inputref={this.setInputRef("startDate" + index)}
                                    //date={this.state.selectedFundInvestmentsData[index].startDate}
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    //errorFlag={!this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    //errMsg={this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    onDateChange={this.onChangeDateForInvestment("startDate", 0)}
                                />
                                <Text style={styles.skipConentTitle}>{'Skip to date'}</Text>
                                <GDateComponent
                                    //inputref={this.setInputRef("startDate" + index)}
                                    //date={this.state.selectedFundInvestmentsData[index].startDate}
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    //errorFlag={!this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    //errMsg={this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    onDateChange={this.onChangeDateForInvestment("startDate", 0)}
                                /> */}
                            <GDateComponent
                                    
                                    //inputref={this.setInputRef("startDate" + index)}
                                    //date={this.state.selectedFundInvestmentsData[index].startDate}
                                    dateTitleName={styles.financialTextLabel}
                                    dateTextName="Skip from date"
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    //errorFlag={!this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    //errMsg={this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    onDateChange={this.onChangeDateForInvestment("startDate", 0)}
                                />
                                <GDateComponent
                                    
                                    //inputref={this.setInputRef("startDate" + index)}
                                    //date={this.state.selectedFundInvestmentsData[index].startDate}
                                    dateTitleName={styles.financialTextLabel}
                                    dateTextName="Skip to date"
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    //errorFlag={!this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    //errMsg={this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    onDateChange={this.onChangeDateForInvestment("startDate", 0)}
                                />
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