import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GDropDownComponent,
    GButtonComponent,
    GInputComponent,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


const dummyTypeJson = [
    {
        'id': '1',
        'title': 'Twice a Month',
    },
    {
        'id': '2',
        'title': 'Monthly',
    },
    {
        'id': '3',
        'title': 'Quaterly',
    },
    {
        'id': '4',
        'title': 'Semi-Annually',
    },
    {
        'id': '5',
        'title': 'Annually',
    },
];

const dummyDateJson = [
    {
        'id': '1',
        'title': '1',
    },
    {
        'id': '2',
        'title': '2',
    },
    {
        'id': '3',
        'title': '3',
    },
    {
        'id': '4',
        'title': '4',
    },
    {
        'id': '5',
        'title': '5',
    },
];

const dummyBeginJson = [
    {
        'id': '1',
        'title': '1',
    },
    {
        'id': '2',
        'title': '2',
    },
    {
        'id': '3',
        'title': '3',
    },
    {
        'id': '4',
        'title': '4',
    },
    {
        'id': '5',
        'title': '5',
    },
];
const dummyYearJson = [
    {
        'id': '1',
        'title': '2019'
    },
    {
        'id': '2',
        'title': '2018'
    },
    {
        'id': '3',
        'title': '2017'
    },
    {
        'id': '4',
        'title': '2016'
    },
    {
        'id': '5',
        'title': '2015'
    },
];
class SystematicWithdrawalPlanScheduleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeDropDown: false,
            valueTypeDropDown: '',
            dateDropDown: false,
            valueDateDropDown: '',
            dateBeginDropDown: false,
            valueDateBeginDropDown: '',
            yearDropDown: false,
            valueYearDropDown: '',
            selectedFrequency:-1,
        };
    }

    selectTheType = () => {
       
        this.setState({
            typeDropDown: !this.state.typeDropDown
        });
    }

    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate('systematicWithdrawal');

    selectedDropDownTypeValue = (valueType) => {
        //console.log('.................................',index);
        let selectedValue=valueType.title;
        let index=selectedValue.toLowerCase()==='twice a month'?0:1;
        this.setState({
            
            selectedFrequency:index,
            valueTypeDropDown: selectedValue,
            typeDropDown: false
        });
    }

    selectTheDate = () => {
        this.setState({
            dateDropDown: !this.state.dateDropDown
        });
    }

    selectedDropDownDateValue = (valueDate) => {
        this.setState({
            valueDateDropDown: valueDate.title,
            dateDropDown: false
        });
    }

    selectTheBeginDate = () => {
        this.setState({
            dateBeginDropDown: !this.state.dateBeginDropDown
        });
    }

    selectedDropDownBeginDateValue = (valueBegin) => {
        this.setState({
            valueDateBeginDropDown: valueBegin.title,
            dateBeginDropDown: false
        });
    }

    selectTheYear = () => {
        this.setState({
            yearDropDown: !this.state.yearDropDown
        });
    }

    selectedDropDownYearValue = (valueYear) => {
        this.setState({
            valueYearDropDown: valueYear.title,
            yearDropDown: false
        });
    }

    navigationNext = () => this.props.navigation.navigate('systematicWithdrawalVerify');

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
                            <Text style={styles.autoInvest_sub_title_text}>{'- Withdrawal Frequency'}</Text>
                        </View>
                        <View style={styles.seperator_line} />
                        
                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Withdrawal Frequency"
                            data={dummyTypeJson}
                            textInputStyle={styles.dropdownTextInput}
                            dropDownLayout={styles.dropDownLayout}
                            changeState={this.selectTheType}
                            showDropDown={this.state.typeDropDown}
                            dropDownValue={this.state.valueTypeDropDown}
                            selectedDropDownValue={this.selectedDropDownTypeValue}
                            itemToDisplay={"title"}
                            
                        />

                        {this.state.selectedFrequency===-1?null:
                        <View>
                            <View style={{flexDirection:'row',flex:1}}>
                                <View style={this.state.selectedFrequency===0?{flex:0.5,width:'100%',marginRight:scaledWidth(20)}:{width:'100%'}}>
                                {/* <View style={{flex:0.5,width:'100%'}}> */}
                                <GDropDownComponent
                                    dropDownTextName={styles.financialTextLabel}
                                    dropDownName="Date"
                                    data={dummyDateJson}
                                    changeState={this.selectTheDate}
                                    textInputStyle={styles.dropdownTextInput}
                                    dropDownLayout={styles.dropDownLayout}
                                    showDropDown={this.state.dateDropDown}
                                    dropDownValue={this.state.valueDateDropDown}
                                    selectedDropDownValue={this.selectedDropDownDateValue}
                                    itemToDisplay={"title"}
                                    
                                />
                                </View>
                                {this.state.selectedFrequency===0?
                                <View style={{flex:0.5,width:'100%'}}>
                                <GDropDownComponent
                                    dropDownTextName={styles.financialTextLabel}
                                    dropDownName=" "
                                    data={dummyDateJson}
                                    changeState={this.selectTheDate}
                                    showDropDown={this.state.dateDropDown}
                                    textInputStyle={styles.dropdownTextInput}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownValue={this.state.valueDateDropDown}
                                    selectedDropDownValue={this.selectedDropDownDateValue}
                                    itemToDisplay={"title"}
                                    
                                />
                                </View>
                                :null}
                                </View>

                                <View style={styles.view_row}>
                                    <View style={{ width: scaledWidth(130),marginRight:scaledWidth(20) }}>
                                        <GDropDownComponent
                                            dropDownTextName={styles.financialTextLabel}
                                            dropDownName="Beginning On"
                                            data={dummyBeginJson}
                                            changeState={this.selectTheBeginDate}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
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
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            //showDropDownSectionStyle={styles.showDropDownSectionStyle}
                                            //dropDownPostition={styles.showDropDownSectionStyle}
                                            changeState={this.selectTheYear}
                                            showDropDown={this.state.yearDropDown}
                                            dropDownValue={this.state.valueYearDropDown}
                                            selectedDropDownValue={this.selectedDropDownYearValue}
                                            itemToDisplay={"title"}
                                        />
                                    </View>
                                </View>
                            </View>
                            }
                        
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
SystematicWithdrawalPlanScheduleComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

SystematicWithdrawalPlanScheduleComponent.defaultProps = {

};

export default SystematicWithdrawalPlanScheduleComponent;