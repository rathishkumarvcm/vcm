import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GDropDownComponent,
    GButtonComponent,
    GSingletonClass,
} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';


const typeJson = [
    {
        'id': '1',
        'value': 'Twice a Month',
    },
    {
        'id': '2',
        'value': 'Monthly',
    },
    {
        'id': '3',
        'value': 'Quaterly',
    },
    {
        'id': '4',
        'value': 'Semi-Annually',
    },
    {
        'id': '5',
        'value': 'Annually',
    },
];

const dateJson = [];
const yearJson = [];
const monthJson = [];

const myInstance = GSingletonClass.getInstance();
class SystematicWithdrawalPlanScheduleComponent extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const systematicSchedule = myInstance.getSystematicWithdrawalEditMode() ? (myInstance.getScreenStateData().systematicSchedule || {}) : {};
        this.state = {
            typeDropDown: false,
            valueTypeDropDown: '',
            dateDropDown: false,
            valueDateDropDown: 'null',
            dateBeginDropDown: false,
            valueDateBeginDropDown: '',
            startMonthDropDown: false,
            valueStartMonthDropDown: '',
            startYearDropDown: false,
            valueStartYearDropDown: '',
            selectedFrequency: -1,
            systematicWithdrawalJson: {},
            itemToEdit: navigation.getParam('ItemToEdit'),
            accName: `${navigation.getParam('accName')}`,
            accNumber: `${navigation.getParam('accNumber')}`,
            accountType: `${navigation.getParam('accountType')}`,
            ...systematicSchedule
        };
    }


    componentDidMount() {
        const { systematicWithdrawalState } = this.props;
        const{ itemToEdit, accountType }=this.state;
        for (let i = 1; i <= 30; i+=1) {
            dateJson.push({ "id": i.toString(), "value": i.toString() });
        }
        const date = new Date().getFullYear();
        for (let i = date; i <= (date + 30); i+=1) {
            yearJson.push({ "id": i.toString(), "value": i.toString() });

        }
        for (let i = 1; i <= 12; i+=1) {
            monthJson.push({ "id": i.toString(), "value": i.toString() });
        }


        const itemEdit = itemToEdit;
        if (itemEdit > -1) {
            if (this.props && systematicWithdrawalState) {
                switch (accountType) {
                    case 'General':
                        this.setState({
                            systematicWithdrawalJson: systematicWithdrawalState.general[Number(itemEdit)],
                            valueTypeDropDown: systematicWithdrawalState.general[Number(itemEdit)].invest,
                            valueDateDropDown: systematicWithdrawalState.general[Number(itemEdit)].dateToInvest,
                            valueDateBeginDropDown: systematicWithdrawalState.general[Number(itemEdit)].dateFromInvest,
                            valueStartYearDropDown: systematicWithdrawalState.general[Number(itemEdit)].startYear,
                            valueStartMonthDropDown: systematicWithdrawalState.general[Number(itemEdit)].startDate,
                            selectedFrequency: typeJson.findIndex(obj => obj.value === systematicWithdrawalState.general[Number(itemEdit)].invest)
                        });
                        break;
                    case 'Ira':
                        this.setState({
                            systematicWithdrawalJson: systematicWithdrawalState.ira[Number(itemEdit)],
                            valueTypeDropDown: systematicWithdrawalState.ira[Number(itemEdit)].invest,
                            valueDateDropDown: systematicWithdrawalState.ira[Number(itemEdit)].dateToInvest,
                            valueDateBeginDropDown: systematicWithdrawalState.ira[Number(itemEdit)].dateFromInvest,
                            valueStartYearDropDown: systematicWithdrawalState.ira[Number(itemEdit)].startYear,
                            valueStartMonthDropDown: systematicWithdrawalState.ira[Number(itemEdit)].startDate,
                            selectedFrequency: typeJson.findIndex(obj => obj.value === systematicWithdrawalState.ira[Number(itemEdit)].invest)
                        });
                        break;
                    case 'Utma':
                        this.setState({
                            systematicWithdrawalJson: systematicWithdrawalState.utma[Number(itemEdit)],
                            valueTypeDropDown: systematicWithdrawalState.utma[Number(itemEdit)].invest,
                            valueDateDropDown: systematicWithdrawalState.utma[Number(itemEdit)].dateToInvest,
                            valueDateBeginDropDown: systematicWithdrawalState.utma[Number(itemEdit)].dateFromInvest,
                            valueStartYearDropDown: systematicWithdrawalState.utma[Number(itemEdit)].startYear,
                            valueStartMonthDropDown: systematicWithdrawalState.utma[Number(itemEdit)].startDate,
                            selectedFrequency: typeJson.findIndex(obj => obj.value === systematicWithdrawalState.utma[Number(itemEdit)].invest)
                        });
                        break;
                    default:
                        break;
                }
            }
        }
    }

    selectTheType = () => {
        const{typeDropDown} =this.state;
        this.setState({
            typeDropDown: !typeDropDown
        });
    }

    navigationBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    navigationCancel = () => {
        const { itemToEdit } = this.state;
        const{navigation} =this.props;
        if (itemToEdit > -1)
            navigation.goBack('systematicWithdrawalAdd');
        else
            navigation.goBack('systematicWithdrawalAccount');
    }

    selectedDropDownTypeValue = (valueType) => {
        const selectedValue = valueType;
        const index = selectedValue.toLowerCase() === 'twice a month' ? 0 : 1;
        const date2 = selectedValue.toLowerCase() === 'twice a month' ? '' : 'null';
        this.setState({
            valueDateDropDown: date2,
            selectedFrequency: index,
            valueTypeDropDown: selectedValue,
            typeDropDown: false
        });
    }

    selectTheDate = () => {
        const{dateDropDown} = this.state;
        this.setState({
            dateDropDown: !dateDropDown
        });
    }

    selectedDropDownDateValue = (valueDate) => {
        this.setState({
            valueDateDropDown: valueDate,
            dateDropDown: false
        });
    }

    selectTheBeginDate = () => {
        const{dateBeginDropDown} = this.state;
        this.setState({
            dateBeginDropDown: !dateBeginDropDown
        });
    }

    selectedDropDownBeginDateValue = (valueBegin) => {
        this.setState({
            valueDateBeginDropDown: valueBegin,
            dateBeginDropDown: false
        });
    }

    selectStartDate = () => {
        const{startMonthDropDown} = this.state;
        this.setState({
            startMonthDropDown: !startMonthDropDown
        });
    }

    selectedDropDownStartDateValue = (valuedate) => {
        this.setState({
            valueStartMonthDropDown: valuedate,
            startMonthDropDown: false
        });
    }


    selectStartYear = () => {
        const{startYearDropDown} = this.state;
        this.setState({
            startYearDropDown: !startYearDropDown
        });
    }

    selectedDropDownStartYearValue = (valueYear) => {
        this.setState({
            valueStartYearDropDown: valueYear,
            startYearDropDown: false
        });
    }

    getPayload = () => {
        const{typeDropDown,valueTypeDropDown,dateDropDown,dateBeginDropDown,
            valueDateBeginDropDown,startMonthDropDown,valueStartMonthDropDown,
            startYearDropDown,valueStartYearDropDown,selectedFrequency,systematicWithdrawalJson,
            itemToEdit,accName,accNumber,accountType,valueDateDropDown}=this.state;
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month }/${ date }/${ year}`;

        /* Calculate Next Month */
        const nextMonth = new Date();
        let nextMonthDate;
        if(date>=Number(valueDateBeginDropDown))
        {
            if(valueDateDropDown!=='null')
            {
                if(date>=Number(valueDateDropDown))
                {
                    switch(valueTypeDropDown)
                    {
                        case 'Twice a Month':
                            nextMonth.setMonth(nextMonth.getMonth() + 1);
                            break;
                        case 'Monthly':
                            nextMonth.setMonth(nextMonth.getMonth() + 1);
                            break;
                        case 'Quaterly':
                            nextMonth.setMonth(nextMonth.getMonth() + 3);
                            break;
                        case 'Semi-Annually':
                            nextMonth.setMonth(nextMonth.getMonth() + 6);
                            break;
                        case 'Annually':
                            nextMonth.setMonth(nextMonth.getMonth() + 12);
                            break;
                        default:
                            break;
                    }
                    nextMonthDate = `${nextMonth.getMonth()+1 }/${ valueDateBeginDropDown }/${ nextMonth.getFullYear()}`;
                }
                else
                {
                    nextMonthDate = `${nextMonth.getMonth()+1 }/${ valueDateDropDown }/${ nextMonth.getFullYear()}`;
                }
            }
            else{
                    switch(valueTypeDropDown)
                    {
                        case 'Twice a Month':
                            nextMonth.setMonth(nextMonth.getMonth() + 1);
                            break;
                        case 'Monthly':
                            nextMonth.setMonth(nextMonth.getMonth() + 1);
                            break;
                        case 'Quaterly':
                            nextMonth.setMonth(nextMonth.getMonth() + 3);
                            break;
                        case 'Semi-Annually':
                            nextMonth.setMonth(nextMonth.getMonth() + 6);
                            break;
                        case 'Annually':
                            nextMonth.setMonth(nextMonth.getMonth() + 12);
                            break;
                        default:
                            break;
                    }
                    nextMonthDate = `${nextMonth.getMonth()+1 }/${ valueDateBeginDropDown }/${ nextMonth.getFullYear()}`;
            }
            
        }
        else
        {
            nextMonthDate = `${nextMonth.getMonth()+1 }/${ valueDateBeginDropDown }/${ nextMonth.getFullYear()}`;
        }
        // const nextMonthDate = `${nextMonth.getMonth()+1 }/${ nextMonth.getDate() }/${ nextMonth.getFullYear()}`;
        const savedAutoData = myInstance.getSavedSystematicData();
        const payload = {
            ...savedAutoData,
            dateAdded: currentdate,
            typeDropDown,
            valueTypeDropDown,
            dateDropDown,
            valueDateDropDown,
            dateBeginDropDown,
            valueDateBeginDropDown,
            startMonthDropDown,
            valueStartMonthDropDown,
            startYearDropDown,
            valueStartYearDropDown,
            selectedFrequency,
            systematicWithdrawalJson,
            itemToEdit,
            accName,
            accNumber,
            accountType,
            nextWithdrawalDate: nextMonthDate,
        };
        return payload;
    }

    navigationNext = () => {
        const { navigation } = this.props;
        const{accountType,itemToEdit}=this.state;
        const payload = this.getPayload();
        const stateData = myInstance.getScreenStateData();
        myInstance.setSavedSystematicData(payload);
        const screenState = {
            ...stateData,
            "systematicSchedule": { ...this.state }
        };
        myInstance.setScreenStateData(screenState);
        // navigation.navigate('systematicWithdrawalVerify');
        navigation.navigate({ routeName: 'systematicWithdrawalVerify', key: 'systematicWithdrawalVerify', params: { skip: false, accountType, indexSelected: itemToEdit } });
    }

    render() {
        const { navigation } = this.props;
        const{accName,accNumber,typeDropDown,valueTypeDropDown,selectedFrequency,dateBeginDropDown,
        valueDateBeginDropDown,dateDropDown,valueDateDropDown,startMonthDropDown,valueStartMonthDropDown,startYearDropDown,
    valueStartYearDropDown}=this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollStyle}>
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
                        <View style={styles.circle_Inprogress}>
                            <Text style={styles.circleText}>3</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_NotStarted}>
                            <Text style={styles.circleText}>4</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_NotStarted}>
                            <Text style={styles.circleText}>5</Text>
                        </View>
                    </View>

                    <View style={styles.autoInvest_title_view}>
                        <Text style={styles.autoInvest_title_text}>3 - Schedule</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.account_view}>

                            <Text style={styles.account_txt}>{accName}</Text>
                            <Text style={styles.account_txt}>{`Account Number ${accNumber}`}</Text>
                        </View>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>- Withdrawal Frequency</Text>
                        </View>
                        <View style={styles.seperator_line} />

                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Withdrawal Frequency"
                            data={typeJson}
                            textInputStyle={styles.dropdownTextInput}
                            dropDownLayout={styles.dropDownLayout}
                            changeState={this.selectTheType}
                            showDropDown={typeDropDown}
                            dropDownValue={valueTypeDropDown}
                            selectedDropDownValue={this.selectedDropDownTypeValue}
                            itemToDisplay="value"

                        />

                        {selectedFrequency === -1 ? null : (
                            <View>
                                <View style={styles.selectSchedule}>
                                    <View style={selectedFrequency === 0 ? styles.twiceAMonth : styles.monthly}>
                                        {/* <View style={{flex:0.5,width:'100%'}}> */}
                                        <GDropDownComponent
                                            dropDownTextName={styles.financialTextLabel}
                                            dropDownName="Date"
                                            data={dateJson}
                                            changeState={this.selectTheBeginDate}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            showDropDown={dateBeginDropDown}
                                            dropDownValue={valueDateBeginDropDown}
                                            selectedDropDownValue={this.selectedDropDownBeginDateValue}
                                            itemToDisplay="value"

                                        />
                                    </View>
                                    {selectedFrequency === 0 ? (
                                        <View style={styles.selectTwiceMonth}>
                                            <GDropDownComponent
                                                dropDownTextName={styles.financialTextLabel}
                                                dropDownName=" "
                                                data={dateJson}
                                                changeState={this.selectTheDate}
                                                showDropDown={dateDropDown}
                                                textInputStyle={styles.dropdownTextInput}
                                                dropDownLayout={styles.dropDownLayout}
                                                dropDownValue={valueDateDropDown}
                                                selectedDropDownValue={this.selectedDropDownDateValue}
                                                itemToDisplay="value"

                                            />
                                        </View>
                                    )
                                        : null}
                                </View>

                                <View style={styles.view_row}>
                                    <View style={styles.selectBegin}>
                                        <GDropDownComponent
                                            dropDownTextName={styles.financialTextLabel}
                                            dropDownName="Beginning On"
                                            data={monthJson}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            changeState={this.selectStartDate}
                                            showDropDown={startMonthDropDown}
                                            dropDownValue={valueStartMonthDropDown}
                                            selectedDropDownValue={this.selectedDropDownStartDateValue}
                                            itemToDisplay="value"
                                        />
                                    </View>
                                    <View style={styles.selectBeginYear}>
                                        <GDropDownComponent
                                            dropDownTextName={styles.financialTextLabel}
                                            dropDownName="    "
                                            data={yearJson}
                                            changeState={this.selectStartYear}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            showDropDown={startYearDropDown}
                                            dropDownValue={valueStartYearDropDown}
                                            selectedDropDownValue={this.selectedDropDownStartYearValue}
                                            itemToDisplay="value"

                                        />
                                    </View>
                                </View>
                            </View>
                        )}

                        <Text style={styles.scheduleContent}>
                            NOTE: If draft day is not specified (1st-31st), the account will be debited on the 15th of each month. Draft date will be the prior business day depending on market availability (when stock market is open).
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
                            buttonStyle={valueTypeDropDown !== '' && valueDateBeginDropDown !== '' && valueStartMonthDropDown !== '' &&
                                valueStartYearDropDown !== '' && valueDateDropDown !== '' ? styles.continueButtonSelected : styles.continueButton}
                            buttonText={globalString.common.next}
                            textStyle={styles.continueButtonText}
                            onPress={valueTypeDropDown !== '' && valueDateBeginDropDown !== '' && valueStartMonthDropDown !== '' &&
                                valueStartYearDropDown !== '' && valueDateDropDown !== '' ? this.navigationNext : null}
                        />
                    </View>
                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalPlanScheduleComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    systematicWithdrawalState: PropTypes.instanceOf(Object),
};

SystematicWithdrawalPlanScheduleComponent.defaultProps = {
    navigation: {},
    systematicWithdrawalState: {}
};

export default SystematicWithdrawalPlanScheduleComponent;