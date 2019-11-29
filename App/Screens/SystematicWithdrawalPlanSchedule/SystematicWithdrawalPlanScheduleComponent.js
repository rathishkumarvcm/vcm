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
        id: '1',
        title: 'Twice a Month',
    },
    {
        id: '2',
        title: 'Monthly',
    },
    {
        id: '3',
        title: 'Quaterly',
    },
    {
        id: '4',
        title: 'Semi-Annually',
    },
    {
        id: '5',
        title: 'Annually',
    },
];

const dummyDateJson = [
    {
        id: '1',
        title: '1',
    },
    {
        id: '2',
        title: '2',
    },
    {
        id: '3',
        title: '3',
    },
    {
        id: '4',
        title: '4',
    },
    {
        id: '5',
        title: '5',
    },
];

const dummyBeginJson = [
    {
        id: '1',
        title: '1',
    },
    {
        id: '2',
        title: '2',
    },
    {
        id: '3',
        title: '3',
    },
    {
        id: '4',
        title: '4',
    },
    {
        id: '5',
        title: '5',
    },
];
const dummyYearJson = [
    {
        id: '1',
        title: '2019'
    },
    {
        id: '2',
        title: '2018'
    },
    {
        id: '3',
        title: '2017'
    },
    {
        id: '4',
        title: '2016'
    },
    {
        id: '5',
        title: '2015'
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
        };
    }

    selectTheType = () => {
        this.setState({
            typeDropDown: !this.state.typeDropDown
        });
    }

    selectedDropDownTypeValue = (value) => {
        this.setState({
            valueTypeDropDown: value,
            typeDropDown: false
        });
    }

    selectTheDate = () => {
        this.setState({
            dateDropDown: !this.state.dateDropDown
        });
    }

    selectedDropDownDateValue = (value) => {
        this.setState({
            valueDateDropDown: value,
            dateDropDown: false
        });
    }

    selectTheBeginDate = () => {
        this.setState({
            dateBeginDropDown: !this.state.dateBeginDropDown
        });
    }

    selectedDropDownBeginDateValue = (value) => {
        this.setState({
            valueDateBeginDropDown: value,
            dateBeginDropDown: false
        });
    }

    selectTheYear = () => {
        this.setState({
            yearDropDown: !this.state.yearDropDown
        });
    }

    selectedDropDownYearValue = (value) => {
        this.setState({
            valueYearDropDown: value,
            yearDropDown: false
        });
    }

    navigationNext = () => this.props.navigation.navigate('systematicWithdrawalVerify');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <Text style={styles.autoInvestHead}>{'Create Systematic Withdrawal Plan'}</Text>
                    <View style={styles.seperator_line} />
                    <View style={styles.circle_view}>
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>{'1'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Inprogress}>
                            <Text style={styles.circleTextNew}>{'2'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_NotStarted}>
                            <Text style={styles.circleText}>{'3'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_NotStarted}>
                            <Text style={styles.circleText}>{'4'}</Text>
                        </View>
                    </View>

                    <View style={styles.autoInvest_title_view}>
                        <Text style={styles.autoInvest_title_text}>{'2 - Schedule'}</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>{'- Withdrawal Frequency'}</Text>
                        </View>
                        <View style={styles.seperator_line} />
                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Withdrawal Frequency"
                            data={dummyTypeJson}
                            changeState={this.selectTheType}
                            showDropDown={this.state.typeDropDown}
                            dropDownValue={this.state.valueTypeDropDown}
                            selectedDropDownValue={this.selectedDropDownTypeValue}
                            itemToDisplay={"title"}
                        />
                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Date"
                            data={dummyDateJson}
                            changeState={this.selectTheDate}
                            showDropDown={this.state.dateDropDown}
                            dropDownValue={this.state.valueDateDropDown}
                            selectedDropDownValue={this.selectedDropDownDateValue}
                            itemToDisplay={"title"}
                        />

                        <View style={styles.view_row}>
                            <View style={{ width: scaledWidth(130) }}>
                                <GDropDownComponent
                                    dropDownTextName={styles.financialTextLabel}
                                    dropDownName="Beginning On"
                                    data={dummyBeginJson}
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
                        </View>
                        <Text style={styles.scheduleContent}>
                            {'NOTE: If draft day is not specified (1st-31st), the account will be debited on the 15th of each month. Draft date will be the prior business day depending on market availability (when stock market is open).'}
                        </Text>
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.save}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationLogin}
                        />
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationLogin}
                        />
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationLogin}
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