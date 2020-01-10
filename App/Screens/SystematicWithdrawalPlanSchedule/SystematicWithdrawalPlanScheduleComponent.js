import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GDropDownComponent,
    GButtonComponent,
    GSingletonClass,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


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

const myInstance = GSingletonClass.getInstance();
class SystematicWithdrawalPlanScheduleComponent extends Component {
    constructor(props) {
        super(props);
        const systematicSchedule =  myInstance.getSystematicWithdrawalEditMode()? (myInstance.getScreenStateData().systematicSchedule || {}):{};
        this.state = {
            typeDropDown: false,
            valueTypeDropDown: '',
            dateDropDown: false,
            valueDateDropDown: '',
            dateBeginDropDown: false,
            valueDateBeginDropDown: '',
            startDateDropDown: false,
            valueStartDateDropDown: '',
            startYearDropDown: false,
            valueStartYearDropDown:'',
            selectedFrequency:-1,
            systematicWithdrawalJson:{},
            itemToEdit: `${this.props.navigation.getParam('ItemToEdit', -1)}`,
            acc_name:`${this.props.navigation.getParam('acc_name')}`,
            acc_no:`${this.props.navigation.getParam('acc_no')}`,
            accountType:`${this.props.navigation.getParam('accountType')}`,
            ...systematicSchedule
        };
    }


    componentDidMount() {
        for(var i=1; i<=30; i++) {
            dateJson.push({["id"]:i.toString(),["value"]: i.toString()});
         }
         var date=new Date().getFullYear();
         for(var i=date; i<=(date+30); i++) {
            yearJson.push({["id"]:i.toString(),["value"]: i.toString()});
            
         }

         
        let itemToEdit = this.state.itemToEdit;
        if (itemToEdit > -1) {
            if (this.props && this.props.systematicWithdrawalState) {
                this.setState({
                    systematicWithdrawalJson: this.props.systematicWithdrawalState.general[itemToEdit],
                    valueTypeDropDown: this.props.systematicWithdrawalState.general[itemToEdit].invest,
                    valueDateDropDown: this.props.systematicWithdrawalState.general[itemToEdit].dateToInvest.replace('th', '').trim(),
                    valueDateBeginDropDown: this.props.systematicWithdrawalState.general[itemToEdit].dateFromInvest.replace('th', '').trim(),
                    valueStartYearDropDown: this.props.systematicWithdrawalState.general[itemToEdit].startYear,
                    valueStartDateDropDown:this.props.systematicWithdrawalState.general[itemToEdit].startDate,
                });
            }
        }
    }

    selectTheType = () => {
       
        this.setState({
            typeDropDown: !this.state.typeDropDown
        });
    }

    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate('systematicWithdrawal');

    selectedDropDownTypeValue = (valueType) => {
        let selectedValue=valueType;
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
            valueDateDropDown: valueDate,
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
            valueDateBeginDropDown: valueBegin,
            dateBeginDropDown: false
        });
    }

    selectStartDate = () => {
        this.setState({
            startDateDropDown: !this.state.startDateDropDown
        });
    }

    selectedDropDownStartDateValue = (valuedate) => {
        this.setState({
            valueStartDateDropDown: valuedate,
            startDateDropDown: false
        });
    }


    selectStartYear = () => {
        this.setState({
            startYearDropDown: !this.state.startYearDropDown
        });
    }

    selectedDropDownStartYearValue = (valueYear) => {
        this.setState({
            valueStartYearDropDown: valueYear,
            startYearDropDown: false
        });
    }

    getPayload = () => {
        const savedAutoData = myInstance.getSavedSystematicData();
        let payload = {
            ...savedAutoData,
            typeDropDown: this.state.typeDropDown,
            valueTypeDropDown: this.state.valueTypeDropDown,
            dateDropDown: this.state.dateDropDown,
            valueDateDropDown: this.state.valueDateDropDown,
            dateBeginDropDown: this.state.dateBeginDropDown,
            valueDateBeginDropDown: this.state.valueDateBeginDropDown,
            startDateDropDown: this.state.startDateDropDown,
            valueStartDateDropDown: this.state.valueStartDateDropDown,
            startYearDropDown: this.state.startYearDropDown,
            valueStartYearDropDown:this.state.valueStartYearDropDown,
            selectedFrequency:this.state.selectedFrequency,
            systematicWithdrawalJson:this.state.systematicWithdrawalJson,
            itemToEdit:this.state.itemToEdit ,
            acc_name:this.state.acc_name,
            acc_no:this.state.acc_no,
            accountType:this.state.accountType,
        };
        return payload;
    }

    navigationNext = () => {
        const payload = this.getPayload();
        const stateData = myInstance.getScreenStateData();
        myInstance.setSavedSystematicData(payload);
        const screenState = {
            ...stateData,
            "systematicSchedule":{...this.state}
        }
        myInstance.setScreenStateData(screenState);
        // this.props.navigation.navigate('systematicWithdrawalVerify');
        this.props.navigation.navigate({routeName:'systematicWithdrawalVerify',key:'systematicWithdrawalVerify',params: { skip: false ,accountType:this.state.accountType,indexSelected:this.state.itemToEdit}});
    }

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
                    <View style={styles.account_view}>

                        <Text style={styles.account_txt}>{this.state.acc_name}</Text>
                        <Text style={styles.account_txt}>{'Account Number '+this.state.acc_no}</Text>
                        </View>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>{'- Withdrawal Frequency'}</Text>
                        </View>
                        <View style={styles.seperator_line} />
                        
                        <GDropDownComponent
                            dropDownTextName={styles.financialTextLabel}
                            dropDownName="Withdrawal Frequency"
                            data={typeJson}
                            textInputStyle={styles.dropdownTextInput}
                            dropDownLayout={styles.dropDownLayout}
                            changeState={this.selectTheType}
                            showDropDown={this.state.typeDropDown}
                            dropDownValue={this.state.valueTypeDropDown}
                            selectedDropDownValue={this.selectedDropDownTypeValue}
                            itemToDisplay={"value"}
                            
                        />

                        {this.state.selectedFrequency===-1?null:
                        <View>
                            <View style={{flexDirection:'row',flex:1}}>
                                <View style={this.state.selectedFrequency===0?{flex:0.5,width:'100%',marginRight:scaledWidth(20)}:{width:'100%'}}>
                                {/* <View style={{flex:0.5,width:'100%'}}> */}
                                <GDropDownComponent
                                    dropDownTextName={styles.financialTextLabel}
                                    dropDownName="Date"
                                    data={dateJson}
                                    changeState={this.selectTheBeginDate}
                                    textInputStyle={styles.dropdownTextInput}
                                    dropDownLayout={styles.dropDownLayout}
                                    showDropDown={this.state.dateBeginDropDown}
                                    dropDownValue={this.state.valueDateBeginDropDown}
                                    selectedDropDownValue={this.selectedDropDownBeginDateValue}
                                    itemToDisplay={"value"}
                                    
                                />
                                </View>
                                {this.state.selectedFrequency===0?
                                <View style={{flex:0.5,width:'100%'}}>
                                <GDropDownComponent
                                    dropDownTextName={styles.financialTextLabel}
                                    dropDownName=" "
                                    data={dateJson}
                                    changeState={this.selectTheDate}
                                    showDropDown={this.state.dateDropDown}
                                    textInputStyle={styles.dropdownTextInput}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownValue={this.state.valueDateDropDown}
                                    selectedDropDownValue={this.selectedDropDownDateValue}
                                    itemToDisplay={"value"}
                                    
                                />
                                </View>
                                :null}
                                </View>

                                <View style={styles.view_row}>
                                    <View style={{ width: scaledWidth(130),marginRight:scaledWidth(20) }}>
                                        <GDropDownComponent
                                            dropDownTextName={styles.financialTextLabel}
                                            dropDownName="Beginning On"
                                            data={dateJson}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            changeState={this.selectStartDate}
                                            showDropDown={this.state.startDateDropDown}
                                            dropDownValue={this.state.valueStartDateDropDown}
                                            selectedDropDownValue={this.selectedDropDownStartDateValue}
                                            itemToDisplay={"value"}
                                        />
                                    </View>
                                    <View style={{ width: scaledWidth(150) }}>
                                        <GDropDownComponent
                                            dropDownTextName={styles.financialTextLabel}
                                            dropDownName="    "
                                            data={yearJson}
                                            changeState={this.selectStartYear}
                                            textInputStyle={styles.dropdownTextInput}
                                            dropDownLayout={styles.dropDownLayout}
                                            showDropDown={this.state.startYearDropDown}
                                            dropDownValue={this.state.valueStartYearDropDown}
                                            selectedDropDownValue={this.selectedDropDownStartYearValue}
                                            itemToDisplay={"value"}
                                           
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
                             buttonStyle={this.state.valueTypeDropDown!='' && this.state.valueDateBeginDropDown!='' && this.state.valueStartDateDropDown!='' &&
                             this.state.valueStartYearDropDown!='' ?styles.continueButtonSelected:styles.continueButton}
                            buttonText={globalString.common.next}
                            textStyle={styles.continueButtonText}
                            onPress={this.state.valueTypeDropDown!='' && this.state.valueDateBeginDropDown!='' && this.state.valueStartDateDropDown!='' &&
                            this.state.valueStartYearDropDown!='' ?this.navigationNext:null}
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