import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GDropDownComponent,
    GButtonComponent,
    GDateComponent,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


const dummyTypeJson = [
    {
        "id": '1',
        "title": 'Monthly',
    },
    {
        "id": '2',
        "title": 'Quaterly',
    },
];

const dummyEndingJson = [
    {
        "id": '1',
        "title": 'Never',
    },
    {
        "id": '2',
        "title": 'Custom',
    },
];

const dummyDateJson = [
    {
        "id": '1',
        "title": '1',
    },
    {
        "id": '2',
        "title": '2',
    },
    {
        "id": '3',
        "title": '3',
    },
    {
        "id": '4',
        "title": '4',
    },
    {
        "id": '5',
        "title": '5',
    },
];

// const dummyMonthJson = [
//     {
//         id: '1',
//         title: 'Jan',
//     },
//     {
//         id: '2',
//         title: 'Feb',
//     },
//     {
//         id: '3',
//         title: 'Mar',
//     },
//     {
//         id: '4',
//         title: 'Apr',
//     },
//     {
//         id: '5',
//         title: 'May',
//     },
// ];
// const dummyYearJson = [
//     {
//         id: '1',
//         title: '2019'
//     },
//     {
//         id: '2',
//         title: '2020'
//     },

// ];
class AutomaticInvestmentPlanScheduleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeDropDown: false,
            valueTypeDropDown: '',
            dateDropDown: false,
            valueDateDropDown: '',
            endDropDown: false,
            valueEndDropDown: '',
            
            // dateBeginDropDown: false,
            // valueDateBeginDropDown: '',
            // yearDropDown: false,
            // valueYearDropDown: '',
            autoInvestmentAddAmountJson: {},
            itemToEdit: this.props.navigation.getParam('ItemToEdit', -1),
        };
    }

    componentDidMount() {

        let itemToEdit = this.state.itemToEdit;
        if (itemToEdit > -1) {
            if (this.props && this.props.automaticInvestmentState) {

                this.setState({
                    autoInvestmentAddAmountJson: this.props.automaticInvestmentState[itemToEdit],
                    valueTypeDropDown: this.props.automaticInvestmentState[itemToEdit].schedule,
                    valueDateDropDown: this.props.automaticInvestmentState[itemToEdit].onTheDate.replace('th', '').trim(),
                    //valueEndDropDown: this.props.automaticInvestmentState[itemToEdit].ending,
                });
            }
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

    selectTheType = () => {
        this.setState({
            typeDropDown: !this.state.typeDropDown
        });
    }

    selectedDropDownTypeValue = (valueType) => {
        this.setState({
            valueTypeDropDown: valueType.title,
            typeDropDown: false
        });
    }

    selectTheDate = () => {
        this.setState({
            dateDropDown: !this.state.dateDropDown
        });
    }

    selectEnding = () => {
        this.setState({
            endDropDown: !this.state.endDropDown,
            
        });
    }

    selectedDropDownDateValue = (valueDate) => {
        this.setState({
            valueDateDropDown: valueDate.title,
            dateDropDown: false
        });
    }

    selectedDropDownEndValue = (valueEnd) => {
        this.setState({
            valueEndDropDown: valueEnd.title,
            endDropDown: false,
            
        });
    }

    // selectTheBeginDate = () => {
    //     this.setState({
    //         dateBeginDropDown: !this.state.dateBeginDropDown
    //     });
    // }

    // selectedDropDownBeginDateValue = (valueDate) => {
    //     this.setState({
    //         valueDateBeginDropDown: valueDate.title,
    //         dateBeginDropDown: false
    //     });
    // }

    // selectTheYear = () => {
    //     this.setState({
    //         yearDropDown: !this.state.yearDropDown
    //     });
    // }

    // selectedDropDownYearValue = (value) => {
    //     this.setState({
    //         valueYearDropDown: value,
    //         yearDropDown: false
    //     });
    // }

    navigationNext = () => this.props.navigation.navigate('automaticInvestmentVerify', { skip: false });
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate('automaticInvestment');
    
    render() {
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const currentdate = month + "-" + date + "-" + year;
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation} />
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
                        <View style={styles.circle_Inprogress}>
                            <Text style={styles.circleText}>{'3'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_NotStarted}>
                            <Text style={styles.circleText}>{'4'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_NotStarted}>
                            <Text style={styles.circleText}>{'5'}</Text>
                        </View>
                    </View>

                    <View style={styles.autoInvest_title_view}>
                        <Text style={styles.autoInvest_title_text}>{'3 - Schedule'}</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={{ flexDirection: 'column', justifyContent: "center", borderColor: '#9DB4CE', borderWidth: 1, padding: scaledHeight(20), marginTop: scaledHeight(20) }}>

                            <Text style={{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{'Account Name 1'}</Text>
                            <Text style={{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{'Account Number xxxx-xxxx-xxxx'}</Text>


                        </View>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>{'Schedule'}</Text>
                        </View>
                        <View style={styles.seperator_line} />

                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Invest"
                            data={dummyTypeJson}
                            changeState={this.selectTheType}
                            showDropDown={this.state.typeDropDown}
                            dropDownValue={this.state.valueTypeDropDown}
                            selectedDropDownValue={this.selectedDropDownTypeValue}
                            itemToDisplay={"title"}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(263) }}
                        />
                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="On the Day"
                            data={dummyDateJson}
                            changeState={this.selectTheDate}
                            showDropDown={this.state.dateDropDown}
                            dropDownValue={this.state.valueDateDropDown}
                            selectedDropDownValue={this.selectedDropDownDateValue}
                            itemToDisplay={"title"}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(364) }}
                        />

                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Ending"
                            data={dummyEndingJson}
                            changeState={this.selectEnding}
                            showDropDown={this.state.endDropDown}
                            dropDownValue={this.state.valueEndDropDown}
                            selectedDropDownValue={this.selectedDropDownEndValue}
                            itemToDisplay={"title"}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(464) }}
                        />

                        {/* <View style={styles.view_row}>
                            <View style={{ width: scaledWidth(130) }}>
                                <GDropDownComponent
                                    dropDownTextName={styles.financialTextLabel}
                                    dropDownName="Beginning On"
                                    data={dummyMonthJson}
                                    changeState={this.selectTheBeginDate}
                                    showDropDown={this.state.dateBeginDropDown}
                                    dropDownValue={this.state.valueDateBeginDropDown}
                                    selectedDropDownValue={this.selectedDropDownBeginDateValue}
                                    itemToDisplay={"title"}
                                />
                            </View>
                            <View style={{ width: scaledWidth(150) }}>
                                <GDropDownComponent
                                    dropDownTextName={styles.financialTextLabel}
                                    dropDownName="    "
                                    data={dummyYearJson}
                                    changeState={this.selectTheYear}
                                    showDropDown={this.state.yearDropDown}
                                    dropDownValue={this.state.valueYearDropDown}
                                    selectedDropDownValue={this.selectedDropDownYearValue}
                                    itemToDisplay={"title"}

                                />
                            </View>
                        </View> */}
                        {this.state.valueEndDropDown.toLowerCase()==="custom"?
                        <GDateComponent
                                    
                                    //inputref={this.setInputRef("startDate" + index)}
                                    //date={this.state.selectedFundInvestmentsData[index].startDate}
                                    dateTitleName={styles.financialTextLabel}
                                    dateTextName="End Date"
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    //errorFlag={!this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    //errMsg={this.state.selectedFundInvestmentsData[index].startDateValidation}
                                    onDateChange={this.onChangeDateForInvestment("startDate", 0)}
                                />
                                :null}
                        <Text style={styles.scheduleContent}>
                            {'NOTE: If draft day is not specified (1st-31st), the account will be debited on the 15th of each month. Draft date will be the prior business day depending on market availability (when stock market is open).'}
                        </Text>
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
                            buttonText={globalString.common.next}
                            textStyle={styles.continueButtonText}
                            onPress={this.navigationNext}
                        />
                    </View>
                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentPlanScheduleComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentPlanScheduleComponent.defaultProps = {

};

export default AutomaticInvestmentPlanScheduleComponent;