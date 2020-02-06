import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterComponent, GIcon, GButtonComponent, GDateComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import { CustomCheckBox, CustomRadio } from '../../AppComponents';

const accountData = [
    {
        key: '1',
        value: 'Individual',
        isActive: false
    },
    {
        key: '2',
        value: 'IRA',
        isActive: false
    },
    {
        key: '3',
        value: 'Joint',
        isActive: false
    },

];

const fundData = [
    {
        key: '1',
        value: 'USIFX',
        isActive: false
    },
    {
        key: '2',
        value: 'USSPX',
        isActive: false
    },
    {
        key: '3',
        value: 'USAGX',
        isActive: false
    },
];

const amountData = [
    {
        key: '1',
        value: 'Less than $1000',
        min:0,
        max:1000,
        isActive: false
    },
    {
        key: '2',
        value: 'greater than $1000',
        min:1000,
        max:null,
        isActive: false
    },
    {
        key: '3',
        value: 'between $ 100- $1000',
        min:100,
        max:1000,
        isActive: false
    },
];

const movementData = [
    {
        key: '1',
        value: 'Automatic Investment',
        isActive: false
    },
    {
        key: '2',
        value: 'Automatic Withdrawal',
        isActive: false
    },
    {
        key: '3',
        value: 'Automatic RMD withdrawal',
        isActive: false
    },
    {
        key: '4',
        value: 'Dividend Re-invest',
        isActive: false
    },
];

class MoneyAndAssestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applyFilterState: false,
            modalVisible: false,
            fromDateValue: '',
            toDateValue: '',
            errorDate: false,
            fliterByAccount: '',
            fliterByFund: '',
            fliterByAmount: '',
            fliterByMovement: '',
            data:[
                {
                    key: '1',
                    movementType: 'Automatic Withdrawal',
                    account: 'Individual',
                    fund: 'USIFX',
                    fromTo: 'Bank1',
                    amount: '100',
                    frequency: 'Semi Annually',
                    onTheDate: '21',
                    lastActivity: '21/06/19',
                    nextActivity: '21/01/20'
                },
                {
                    key: '2',
                    movementType: 'Automatic Investment',
                    account: 'Joint',
                    fund: 'USSPX',
                    fromTo: 'Bank2',
                    amount: '50',
                    frequency: 'Monthly',
                    onTheDate: '15',
                    lastActivity: '15/11/19',
                    nextActivity: '15/12/20'
                },
                {
                    key: '3',
                    movementType: 'Automatic RMD',
                    account: 'IRA',
                    fund: 'USAGX',
                    fromTo: 'Bank1',
                    amount: '2000',
                    frequency: 'Quarterly',
                    onTheDate: '1',
                    lastActivity: '01/10/19',
                    nextActivity: '01/01/20'
                }
            ],
            filterData:[
                {
                    key: '1',
                    movementType: 'Automatic Withdrawal',
                    account: 'Individual',
                    fund: 'USIFX',
                    fromTo: 'Bank1',
                    amount: '100',
                    frequency: 'Semi Annually',
                    onTheDate: '21',
                    lastActivity: '21/06/19',
                    nextActivity: '21/01/20'
                },
                {
                    key: '2',
                    movementType: 'Automatic Investment',
                    account: 'Joint',
                    fund: 'USSPX',
                    fromTo: 'Bank2',
                    amount: '50',
                    frequency: 'Monthly',
                    onTheDate: '15',
                    lastActivity: '15/11/19',
                    nextActivity: '15/12/20'
                },
                {
                    key: '3',
                    movementType: 'Automatic RMD',
                    account: 'IRA',
                    fund: 'USAGX',
                    fromTo: 'Bank1',
                    amount: '2000',
                    frequency: 'Quarterly',
                    onTheDate: '1',
                    lastActivity: '01/10/19',
                    nextActivity: '01/01/20'
                }
            ],
        };
    }

    setModalVisible = (visible) => () => {
        this.setState({ modalVisible: visible });
    }

    buildFilter = (filter) => {
        let query = {};
        for (let keys in filter) {
            if ( (filter[keys].constructor === Object) || (filter[keys].constructor === Array && filter[keys].length > 0)) {
                query[keys] = filter[keys];
            }
        }
        return query;
    }

    filterData = (data, query) => {
        const keysWithMinMax = [
            'amount',
        ];
        const filteredData = data.filter( (item) => {
            for (let key in query) {
                if (item[key] === undefined) {
                    return false;
                }
                else if (keysWithMinMax.includes(key)) {
                    if (query[key]['min'] !== null && item[key] < query[key]['min']) {
                        return false;
                    }
                    if (query[key]['max'] !== null && item[key] > query[key]['max']) {
                        return false;
                    }
                }
                else if (!query[key].includes(item[key])) {
                    return false;
                }
            }
            return true;
        });
        return filteredData;
    };

    applyFilterAction = (visible,applyFilter) => () => {
        const{fliterByAccount,fliterByFund,fliterByAmount,fliterByMovement,data}=this.state;
    

        if(!applyFilter){
            this.setState({
                modalVisible: visible,
                applyFilterState: applyFilter,
                filterData:data,
                fliterByAccount:'',

                
            });
        }
        let filter = {
            account: [],
            fund:[],
            amount:{},
            movementType:[],
        };
        
        if(fliterByAccount !='')
        {
            fliterByAccount.forEach(item => {
                if (item.isActive) {
                    filter.account.push(`${item.value}`); 
                }
            });
        }

        if(fliterByFund !='')
        {
            fliterByFund.forEach(item => {
                if (item.isActive) {
                    filter.fund.push(`${item.value}`); 
                }
            });
        }

        if(fliterByAmount !='')
        {
            fliterByAmount.forEach(item => {
                if (item.isActive) {
                    filter.amount={min:item.min,max:item.max}
                }
            });
        }

        if(fliterByMovement!='')
        {
            fliterByMovement.forEach(item => {
                if (item.isActive) {
                    filter.movementType.push(`${item.value}`); 
                }
            });
        }
        
        const query = this.buildFilter(filter);
        const result = this.filterData(data, query);
        if(applyFilter)
        {
            this.setState({
                modalVisible: visible,
                applyFilterState: applyFilter,
                filterData:result
            });
        } 
    }

    // Checkbox selection on Clicking Filters 
    onCheckboxSelect = (keyName, item, index) => () => {
        let newItm = [];
        switch (keyName) {
            case 'Account':
                newItm = [...accountData];
                break;
            case 'Fund':
                newItm = [...fundData];
                break;
            case 'Amount':
                newItm = [...amountData];
                break;
            case 'Movement':
                newItm = [...movementData];
                break;
            default:
                break;
        }
        newItm[Number(index)].isActive = !newItm[Number(index)].isActive;
        this.setState({ [`fliterBy${keyName}`]: newItm });
    }

    onRadioSelect = (keyName, item, index) => () => {
        amountData.map((i)=>{
            i.isActive=false;
        });
        amountData[Number(index)].isActive = !amountData[Number(index)].isActive;
        this.setState({ [`fliterBy${keyName}`]: amountData });
    }

    onChangeDateValue = (keyName, date) => {
        this.setState({
            [keyName]: date,
            errorDate: false
        });
    }

    render() {
        const { navigation } = this.props;
        const { modalVisible, fromDateValue, toDateValue, errorDate,filterData } = this.state;
        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month}/${date}/${year}`;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollViewFlex}>
                    <View style={styles.moneyTitleView}>
                        <Text style={styles.moneyTitleText}>Money and Assest Movement</Text>
                        <TouchableOpacity onPress={this.setModalVisible(true)}>
                            <GIcon
                                name="filter"
                                type="material-community"
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerView}>
                        {
                            filterData.map((item, index) => {
                                return (
                                    <View style={styles.fundItemStyle}>

                                        <View style={styles.fundItemTopView}>
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundItemValueHeading}>Account</Text>
                                                <Text style={styles.fundItemValueTxt}>{item.account}</Text>
                                            </View>
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundItemValueHeading}>Type</Text>
                                                <Text style={styles.fundItemValueTxt}>{item.movementType}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.fundItemTopView}>
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundItemValueHeading}>Fund</Text>
                                                <Text style={styles.fundItemValueTxt}>{item.fund}</Text>
                                            </View>
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundItemValueHeading}>Amount</Text>
                                                <Text style={styles.fundItemValueTxt}>{item.amount}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.fundItemTopView}>
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundItemValueHeading}>From/To</Text>
                                                <Text style={styles.fundItemValueTxt}>{item.fromTo}</Text>
                                            </View>
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundItemValueHeading}>Frequency</Text>
                                                <Text style={styles.fundItemValueTxt}>{item.frequency}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.fundItemTopView}>
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundItemValueHeading}>Last Activity</Text>
                                                <Text style={styles.fundItemValueTxt}>{item.lastActivity}</Text>
                                            </View>
                                            <View style={styles.marginBottomStyle}>
                                                <Text style={styles.fundItemValueHeading}>Next Activity</Text>
                                                <Text style={styles.fundItemValueTxt}>{item.nextActivity}</Text>
                                            </View>
                                        </View>

                                    </View>
                                );
                            })
                        }

                    </View>
                    <GFooterComponent />
                    <Modal
                        transparent
                        visible={modalVisible}
                        onRequestClose={this.setModalVisible(!modalVisible)}>
                        <View style={styles.modalBackgroundView}>
                            <View style={styles.modalContainer}>
                                <ScrollView>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitleText}>
                                            {globalString.accManagement.filterFunds}
                                        </Text>
                                        <TouchableOpacity onPress={this.setModalVisible(!modalVisible)}>
                                            <GIcon
                                                name="close"
                                                type="antdesign"
                                                size={30}
                                                color="black"
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>Account</Text>
                                        {
                                            accountData.map((item, index) => {
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor="#DEDEDF"
                                                        innerCicleColor="#61285F"
                                                        labelStyle={styles.modalCheckBoxLabel}
                                                        label={item.value}
                                                        selected={item.isActive}
                                                        onPress={this.onCheckboxSelect("Account", item, index)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>Fund</Text>
                                        {
                                            fundData.map((item, index) => {
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor="#DEDEDF"
                                                        innerCicleColor="#61285F"
                                                        labelStyle={styles.modalCheckBoxLabel}
                                                        label={item.value}
                                                        selected={item.isActive}
                                                        onPress={this.onCheckboxSelect("Fund", item, index)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>Amount</Text>
                                        {
                                            amountData.map((item, index) => {
                                                return (
                                                    <CustomRadio
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor="#DEDEDF"
                                                        innerCicleColor="#61285F"
                                                        labelStyle={styles.modalCheckBoxLabel}
                                                        label={item.value}
                                                        selected={item.isActive}
                                                        onPress={this.onRadioSelect("Amount", item, index)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>Movement Type</Text>
                                        {
                                            movementData.map((item, index) => {
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor="#DEDEDF"
                                                        innerCicleColor="#61285F"
                                                        labelStyle={styles.modalCheckBoxLabel}
                                                        label={item.value}
                                                        selected={item.isActive}
                                                        onPress={this.onCheckboxSelect("Movement", item, index)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>
                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <GDateComponent
                                            dateTitleName={styles.financialTextLabel}
                                            dateTextName="From Date"
                                            minDate={currentdate}
                                            placeholder="MM/DD/YYYY"
                                            date={fromDateValue}
                                            onDateChange={(date) => this.onChangeDateValue('fromDateValue', date)}
                                            errorFlag={errorDate}
                                            errorMsg="Please select a valid date"
                                        />
                                    </View>
                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <GDateComponent
                                            dateTitleName={styles.financialTextLabel}
                                            dateTextName="To Date"
                                            minDate={currentdate}
                                            placeholder="MM/DD/YYYY"
                                            date={toDateValue}
                                            onDateChange={(date) => this.onChangeDateValue('toDateValue', date)}
                                            errorFlag={errorDate}
                                            errorMsg="Please select a valid date"
                                        />
                                    </View>
                                    <View style={styles.modalActionContainer}>
                                        <GButtonComponent
                                            buttonStyle={styles.modalClearFilterBtn}
                                            buttonText={globalString.accManagement.clearFilter}
                                            textStyle={styles.modalCancelBtnTxt}
                                        // onPress={this.clearFilterAction}
                                        />
                                        <GButtonComponent
                                            buttonStyle={styles.modalApplyFilterBtn}
                                            buttonText={globalString.accManagement.applyFilter}
                                            textStyle={styles.modalApplyBtnTxt}
                                            onPress={this.applyFilterAction(false,true)}
                                        />
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </View>
        );
    }
}
MoneyAndAssestComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
};

MoneyAndAssestComponent.defaultProps = {
    navigation: {},
};


export default MoneyAndAssestComponent;