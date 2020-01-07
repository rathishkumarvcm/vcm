import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GDropDownComponent,
    GButtonComponent,
    GDateComponent,
    GSingletonClass
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight } from '../../Utils/Resolution';


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

//  const dummyYearJson = [
//      {
//          id: '1',
//          title: '2019'
//      },
//      {
//          id: '2',
//          title: '2020'
//      },

//  ];
const myInstance = GSingletonClass.getInstance();
class AutomaticInvestmentPlanScheduleComponent extends Component {
    constructor(props) {
        super(props);
        const automaticSchedule =  myInstance.getAutomaticInvestmentEditMode()? (myInstance.getScreenStateData().automaticSchedule || {}):{};
        this.state = {
            typeDropDown: false,
            valueTypeDropDown: '',
            dateDropDown: false,
            valueDateDropDown: '',
            endDropDown: false,
            valueEndDropDown: '',
            customDateValue: '',
            errorDate:false,
            //  dateBeginDropDown: false,
            //  valueDateBeginDropDown: '',
            //  yearDropDown: false,
            //  valueYearDropDown: '',
            autoInvestmentAddAmountJson: {},
            itemToEdit: `${this.props.navigation.getParam('ItemToEdit', -1)}`,
            acc_name:`${this.props.navigation.getParam('acc_name')}`,
            acc_no:`${this.props.navigation.getParam('acc_no')}`,
            accountType:`${this.props.navigation.getParam('accountType')}`,
            ...automaticSchedule
        };
    }

    componentDidMount() {
        for(var i=1; i<=30; i++) {
            dateJson.push({["id"]:i.toString(),["value"]: i.toString()});
         }
         
        let itemToEdit = this.state.itemToEdit;
        if (itemToEdit > -1) {
            if (this.props && this.props.automaticInvestmentState) {
                this.setState({
                    autoInvestmentAddAmountJson: this.props.automaticInvestmentState.general[itemToEdit],
                    valueTypeDropDown: this.props.automaticInvestmentState.general[itemToEdit].invest,
                    valueDateDropDown: this.props.automaticInvestmentState.general[itemToEdit].dateToInvest.replace('th', '').trim(),
                    valueEndDropDown: this.props.automaticInvestmentState.general[itemToEdit].ending,
                    customDateValue:this.props.automaticInvestmentState.general[itemToEdit].ending==='Custom'?
                                    this.props.automaticInvestmentState.general[itemToEdit].endDate:null
                });
            }
        }
    }

    getPayload = () => {

        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = month + "/" + date + "/" + year;

        /*Calculate Next Month */
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        const nextMonthDate = (nextMonth.getMonth()+1) + "/" + nextMonth.getDate() + "/" + nextMonth.getFullYear();
        
        /* Calculate quarter */
        const today = new Date();
        const quarter = Math.floor((today.getMonth() / 3));
        const startFullQuarter = new Date(today.getFullYear(), quarter * 3 + 3, 1);
        const endFullQuarter = new Date(startFullQuarter.getFullYear(), startFullQuarter.getMonth() + 3, 0);
        // console.log('----------------------------',this.state.valueEndDropDown.toLowerCase())
        const savedAutoData = myInstance.getSavedAutomaticData();
        let payload = {
            ...savedAutoData,
            //  invest: this.state.valueTypeDropDown,
            //  dateToInvest: this.state.valueDateDropDown,
            dateAdded: currentdate,
            endDate: this.state.valueEndDropDown.toLowerCase()==="custom"?this.state.customDateValue:"Never",
            nextInvestementDate: nextMonthDate,
            typeDropDown: this.state.typeDropDown,
            valueTypeDropDown: this.state.valueTypeDropDown,
            dateDropDown: this.state.dateDropDown,
            valueDateDropDown: this.state.valueDateDropDown,
            endDropDown: this.state.endDropDown,
            valueEndDropDown: this.state.valueEndDropDown,
            customDateValue: this.state.customDateValue,
            errorDate:this.state.errorDate,
            autoInvestmentAddAmountJson: this.state.autoInvestmentAddAmountJson,
            itemToEdit: this.state.itemToEdit,
            acc_name:this.state.acc_name,
            acc_no:this.state.acc_no,
            accountType:this.state.accountType,
        };
        //  if (this.props && this.props.automaticInvestmentState && this.props.automaticInvestmentState.savedAccData) {
        //      payload = {
        //          ...payload,
        //          ...this.props.automaticInvestmentState.savedAccData
        //      };
        //  }
        return payload;

    }

    navigationNext = () => {
        if(this.state.customDateValue!='' || this.state.valueEndDropDown==='Never')
        {
            const payload = this.getPayload();
            //  this.props.saveData("automaticInvestmentSchedule", payload);
            const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAutomaticData(payload);
            const screenState = {
                ...stateData,
                "automaticSchedule":{...this.state}
            }
            myInstance.setScreenStateData(screenState);
            this.props.navigation.navigate({routeName:'automaticInvestmentVerify',key:'automaticInvestmentVerify',params: { skip: false ,accountType:this.state.accountType,indexSelected:this.state.itemToEdit}});
        }
        else
            this.setState({errorDate:true})
    }

    selectTheType = () => {
        this.setState({
            typeDropDown: !this.state.typeDropDown
        });
    }

    selectedDropDownTypeValue = (valueType) => {
        this.setState({
            valueTypeDropDown: valueType,
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

    //  selectTheBeginDate = () => {
    //      this.setState({
    //          dateBeginDropDown: !this.state.dateBeginDropDown
    //      });
    //  }

    //  selectedDropDownBeginDateValue = (valueDate) => {
    //      this.setState({
    //          valueDateBeginDropDown: valueDate.title,
    //          dateBeginDropDown: false
    //      });
    //  }

    //  selectTheYear = () => {
    //      this.setState({
    //          yearDropDown: !this.state.yearDropDown
    //      });
    //  }

    //  selectedDropDownYearValue = (value) => {
    //      this.setState({
    //          valueYearDropDown: value,
    //          yearDropDown: false
    //      });
    //  }

   // navigationNext = () => this.props.navigation.navigate('automaticInvestmentVerify', { skip: false });
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});

    render() {
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = month + "/" + date + "/" + year;
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
                        <View style={styles.account_view}>

                            <Text style={styles.account_txt}>{this.state.acc_name}</Text>
                            <Text style={styles.account_txt}>{'Account Number '+this.state.acc_no}</Text>


                        </View>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>{'Schedule'}</Text>
                        </View>
                        <View style={styles.seperator_line} />

                        <GDropDownComponent
                            dropDownName="Invest"
                            dropDownTextName={styles.financialTextLabel}
                            data={typeJson}
                            textInputStyle={styles.dropdownTextInput}
                            itemToDisplay={"value"}
                            dropDownLayout={styles.dropDownLayout}
                            changeState={this.selectTheType}
                            showDropDown={this.state.typeDropDown}
                            dropDownValue={this.state.valueTypeDropDown}
                            selectedDropDownValue={this.selectedDropDownTypeValue}
                            dropdownOffset={{ 'top': 5,'left':0 }}
                        />
                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="On the Day"
                            data={dateJson}
                            textInputStyle={styles.dropdownTextInput}
                            changeState={this.selectTheDate}
                            showDropDown={this.state.dateDropDown}
                            dropDownLayout={styles.dropDownLayout}
                            dropDownValue={this.state.valueDateDropDown}
                            selectedDropDownValue={this.selectedDropDownDateValue}
                            itemToDisplay={"value"}
                            dropdownOffset={{ 'top': 5,'left':0  }}
                            
                        />

                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Ending"
                            data={endingJson}
                            textInputStyle={styles.dropdownTextInput}
                            dropDownLayout={styles.dropDownLayout}
                            changeState={this.selectEnding}
                            showDropDown={this.state.endDropDown}
                            dropDownValue={this.state.valueEndDropDown}
                            selectedDropDownValue={this.selectedDropDownEndValue}
                            itemToDisplay={"value"}
                            dropdownOffset={{ 'top': 5,'left':0  }}
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
                        {this.state.valueEndDropDown.toLowerCase() === "custom" ?

                            <GDateComponent
                            dateTitleName={styles.financialTextLabel}
                            dateTextName="End Date"
                            minDate={currentdate}
                            placeholder="MM/DD/YYYY"
                            date={this.state.customDateValue}
                            onDateChange={this.onChangeDateValue} 
                            errorFlag={this.state.errorDate}
                            errorMsg={'Please select a valid date'}/>
                            
                            : null}
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
                            buttonStyle={this.state.valueTypeDropDown!='' && this.state.valueDateDropDown!='' && this.state.valueEndDropDown!='' ?styles.continueButtonSelected:styles.continueButton}
                            buttonText={globalString.common.next}
                            textStyle={styles.continueButtonText}
                            onPress={this.state.valueTypeDropDown!='' && this.state.valueDateDropDown!='' && this.state.valueEndDropDown!='' ?this.navigationNext:null}
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