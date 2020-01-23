import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GDropDownComponent,
    GButtonComponent,
    GDateComponent,
    GSingletonClass
} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';

const typeJson = [
    {
        id: '1',
        value: 'Monthly',
    },
    {
        id: '2',
        value: 'Quaterly',
    },
];

const endingJson = [
    {
        id: '1',
        value: 'Never',
    },
    {
        id: '2',
        value: 'Custom',
    },
];

const dateJson = [];
const myInstance = GSingletonClass.getInstance();
class AutomaticInvestmentPlanScheduleComponent extends Component {
    constructor(props) {
        super(props);
        const automaticSchedule = myInstance.getAutomaticInvestmentEditMode()? (myInstance.getScreenStateData().automaticSchedule || {}):{};
        const{navigation}=this.props;
        this.state = {
            typeDropDown: false,
            valueTypeDropDown: '',
            dateDropDown: false,
            valueDateDropDown: '',
            endDropDown: false,
            valueEndDropDown: '',
            customDateValue: '',
            errorDate:false,
            autoInvestmentAddAmountJson: {},
            itemToEdit: `${navigation.getParam('ItemToEdit', -1)}`,
            accName:`${navigation.getParam('accName')}`,
            accNumber:`${navigation.getParam('accNumber')}`,
            accountType:`${navigation.getParam('accountType')}`,
            ...automaticSchedule
        };
    }

    componentDidMount() {
        for(let i=1; i<=30; i += 1) {
            dateJson.push({"id":i.toString(),"value": i.toString()});
         }
         const{automaticInvestmentState}=this.props;
         const{accountType}=this.state;
        const {itemToEdit} = this.state;
        if (itemToEdit > -1) {
            if (this.props && automaticInvestmentState) {
                switch(accountType)
                {
                    case 'General':
                        this.setState({
                            autoInvestmentAddAmountJson: automaticInvestmentState.general[Number(itemToEdit)],
                            valueTypeDropDown: automaticInvestmentState.general[Number(itemToEdit)].invest,
                            valueDateDropDown: automaticInvestmentState.general[Number(itemToEdit)].dateToInvest.replace('th', '').trim(),
                            valueEndDropDown: automaticInvestmentState.general[Number(itemToEdit)].ending,
                            customDateValue:automaticInvestmentState.general[Number(itemToEdit)].ending==='Custom'?
                                            automaticInvestmentState.general[Number(itemToEdit)].endDate:null
                        });
                        break;
                    case 'Ira':
                        this.setState({
                            autoInvestmentAddAmountJson: automaticInvestmentState.ira[Number(itemToEdit)],
                            valueTypeDropDown: automaticInvestmentState.ira[Number(itemToEdit)].invest,
                            valueDateDropDown: automaticInvestmentState.ira[Number(itemToEdit)].dateToInvest.replace('th', '').trim(),
                            valueEndDropDown: automaticInvestmentState.ira[Number(itemToEdit)].ending,
                            customDateValue:automaticInvestmentState.ira[Number(itemToEdit)].ending==='Custom'?
                                            automaticInvestmentState.ira[Number(itemToEdit)].endDate:null
                        });
                        break;
                    case 'Utma':
                        this.setState({
                            autoInvestmentAddAmountJson: automaticInvestmentState.utma[Number(itemToEdit)],
                            valueTypeDropDown: automaticInvestmentState.utma[Number(itemToEdit)].invest,
                            valueDateDropDown: automaticInvestmentState.utma[Number(itemToEdit)].dateToInvest.replace('th', '').trim(),
                            valueEndDropDown: automaticInvestmentState.utma[Number(itemToEdit)].ending,
                            customDateValue:automaticInvestmentState.utma[Number(itemToEdit)].ending==='Custom'?
                                            automaticInvestmentState.utma[Number(itemToEdit)].endDate:null
                        });
                        break;
                    default:
                        break;
                }
                
            }
        }
    }

    getPayload = () => {
        const{valueEndDropDown,customDateValue,typeDropDown,valueTypeDropDown,dateDropDown,
                endDropDown,errorDate,autoInvestmentAddAmountJson,itemToEdit,accName,accNumber,accountType,valueDateDropDown}=this.state;
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month }/${ date }/${ year}`;

        /* Calculate Next Month */
        const nextMonth = new Date();
        if(date>=valueDateDropDown)
        {
            if(valueTypeDropDown === 'Monthly')
                nextMonth.setMonth(nextMonth.getMonth() + 1);
            else
                nextMonth.setMonth(nextMonth.getMonth() + 3);
        }
        // const nextMonthDate = `${nextMonth.getMonth()+1 }/${ nextMonth.getDate() }/${ nextMonth.getFullYear()}`;
        const nextMonthDate = `${nextMonth.getMonth()+1 }/${ valueDateDropDown }/${ nextMonth.getFullYear()}`;


        /* Calculate quarter */
        // const today = new Date();
        // const quarter = Math.floor((today.getMonth() / 3));
       // const startFullQuarter = new Date(today.getFullYear(), quarter * 3 + 3, 1);
        // const endFullQuarter = new Date(startFullQuarter.getFullYear(), startFullQuarter.getMonth() + 3, 0);
        
        const savedAutoData = myInstance.getSavedAutomaticData();
        const payload = {
            ...savedAutoData,
            dateAdded: currentdate,
            endDate: valueEndDropDown.toLowerCase()==="custom"?customDateValue:"Never",
            nextInvestementDate: nextMonthDate,
            typeDropDown,
            valueTypeDropDown,
            dateDropDown,
            valueDateDropDown,
            endDropDown,
            valueEndDropDown,
            customDateValue,
            errorDate,
            autoInvestmentAddAmountJson,
            itemToEdit,
            accName,
            accNumber,
            accountType,
        };
        return payload;

    }

    navigationNext = () => {
        const{navigation}=this.props;
        const{customDateValue,valueEndDropDown,accountType,itemToEdit}=this.state;
        if(customDateValue!=='' || valueEndDropDown==='Never')
        {
            const payload = this.getPayload();
            const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAutomaticData(payload);
            const screenState = {
                ...stateData,
                "automaticSchedule":{...this.state}
            };
            myInstance.setScreenStateData(screenState);
            navigation.navigate({routeName:'automaticInvestmentVerify',key:'automaticInvestmentVerify',params: { skip: false ,accountType,indexSelected:itemToEdit}});
        }
        else
            this.setState({errorDate:true});
    }

    selectTheType = () => {
        const{typeDropDown}=this.state;
        this.setState({
            typeDropDown: !typeDropDown
        });
    }

    selectedDropDownTypeValue = (valueType) => {
        this.setState({
            valueTypeDropDown: valueType,
            typeDropDown: false
        });
    }

    selectTheDate = () => {
        const{dateDropDown}=this.state;
        this.setState({
            dateDropDown: !dateDropDown
        });
    }

    selectEnding = () => {
        const{endDropDown}=this.state;
        this.setState({
            endDropDown: !endDropDown,

        });
    }

    selectedDropDownDateValue = (valueDate) => {
        this.setState({
            valueDateDropDown: valueDate,
            dateDropDown: false
        });
    }

    selectedDropDownEndValue = (valueEnd) => {
        this.setState({
            valueEndDropDown: valueEnd,
            endDropDown: false,

        });
    }

    onChangeDateValue = (date) => {
        this.setState({
            customDateValue: date,
            errorDate:false
        });
    }

    navigationBack = () => {
        const{navigation}=this.props;
        navigation.goBack();
    }

    navigationCancel = () => {
        const{navigation}=this.props;
        navigation.goBack('automaticInvestment');
    }

    render() {
        const{navigation}=this.props;
        const{accName,accNumber,typeDropDown,valueTypeDropDown,dateDropDown,valueDateDropDown,
        endDropDown,valueEndDropDown,customDateValue,errorDate}=this.state;
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month }/${ date }/${ year}`;
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={navigation} />
                <ScrollView style={styles.scrollStyle}>
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
                            <Text style={styles.autoInvest_sub_title_text}>Schedule</Text>
                        </View>
                        <View style={styles.seperator_line} />

                        <GDropDownComponent
                            dropDownName="Invest"
                            dropDownTextName={styles.financialTextLabel}
                            data={typeJson}
                            textInputStyle={styles.dropdownTextInput}
                            itemToDisplay="value"
                            dropDownLayout={styles.dropDownLayout}
                            changeState={this.selectTheType}
                            showDropDown={typeDropDown}
                            dropDownValue={valueTypeDropDown}
                            selectedDropDownValue={this.selectedDropDownTypeValue}
                            dropdownOffset={styles.dropDownLayout}
                        />
                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="On the Day"
                            data={dateJson}
                            textInputStyle={styles.dropdownTextInput}
                            changeState={this.selectTheDate}
                            showDropDown={dateDropDown}
                            dropDownLayout={styles.dropDownLayout}
                            dropDownValue={valueDateDropDown}
                            selectedDropDownValue={this.selectedDropDownDateValue}
                            itemToDisplay="value"
                            dropdownOffset={styles.dropDownLayout}
                            
                        />

                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Ending"
                            data={endingJson}
                            textInputStyle={styles.dropdownTextInput}
                            dropDownLayout={styles.dropDownLayout}
                            changeState={this.selectEnding}
                            showDropDown={endDropDown}
                            dropDownValue={valueEndDropDown}
                            selectedDropDownValue={this.selectedDropDownEndValue}
                            itemToDisplay="value"
                            dropdownOffset={styles.dropDownLayout}
                        />
                        {valueEndDropDown.toLowerCase() === "custom" ? (
                            <GDateComponent
                            dateTitleName={styles.financialTextLabel}
                            dateTextName="End Date"
                            minDate={currentdate}
                            placeholder="MM/DD/YYYY"
                            date={customDateValue}
                            onDateChange={this.onChangeDateValue} 
                            errorFlag={errorDate}
                            errorMsg="Please select a valid date"
                            />
                          )
                            
                            : null}
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
                            buttonStyle={valueTypeDropDown!=='' && valueDateDropDown!=='' && valueEndDropDown!=='' ?styles.continueButtonSelected:styles.continueButton}
                            buttonText={globalString.common.next}
                            textStyle={styles.continueButtonText}
                            onPress={valueTypeDropDown!=='' && valueDateDropDown!=='' && valueEndDropDown!=='' ?this.navigationNext:null}
                        />
                    </View>
                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentPlanScheduleComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    automaticInvestmentState: PropTypes.instanceOf(Object),
};

AutomaticInvestmentPlanScheduleComponent.defaultProps = {
    navigation:{},
    automaticInvestmentState:{}
};

export default AutomaticInvestmentPlanScheduleComponent;