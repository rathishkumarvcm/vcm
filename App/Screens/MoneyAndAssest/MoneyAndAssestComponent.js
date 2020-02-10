import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import { CustomCheckBox, CustomRadio } from '../../AppComponents';


const filterOptions = [
    {
        key: '1',
        value: 'Account',

    },
    {
        key: '2',
        value: 'Fund',

    },
    {
        key: '3',
        value: 'Amount',

    },
    {
        key: '4',
        value: 'Movement',

    },
];

const accountData = [
    {
        key: '1',
        value: 'Individual',
        
    },
    {
        key: '2',
        value: 'IRA',
        
    },
    {
        key: '3',
        value: 'Joint',
        
    },

];

const fundData = [
    {
        key: '1',
        value: 'USIFX',
        
    },
    {
        key: '2',
        value: 'USSPX',
        
    },
    {
        key: '3',
        value: 'USAGX',
        
    },
];

const amountData = [
    {
        key: '1',
        value: 'Less than $1000',
        min: 0,
        max: 1000,
        
    },
    {
        key: '2',
        value: 'greater than $1000',
        min: 1000,
        max: null,
        
    },
    {
        key: '3',
        value: 'between $ 100- $1000',
        min: 100,
        max: 1000,
        
    },
];

const movementData = [
    {
        key: '1',
        value: 'Automatic Investment',
        
    },
    {
        key: '2',
        value: 'Automatic Withdrawal',
        
    },
    {
        key: '3',
        value: 'Automatic RMD withdrawal',
        
    },
    {
        key: '4',
        value: 'Dividend Re-invest',
        
    },
];

class MoneyAndAssestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            // fromDateValue: '',
            // toDateValue: '',
            // errorDate: false,
            optionArray: [],
            option: '',
            accountDataFilter:[],
            amountDataFilter:[],
            movementDataFilter:[],
            fundDataFiler:[],
            firstTime:true,
            data: [
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
            filterData: [
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

    static getDerivedStateFromProps(nextProps,prevState){
        const {firstTime} = prevState;
        if(firstTime)
        {
            return({
                accountDataFilter: [...accountData.map(v => ({ ...v, isActive: false }))],
                amountDataFilter: [...amountData.map(v => ({ ...v, isActive: false }))],
                fundDataFiler:[...fundData.map(v => ({ ...v, isActive: false }))],
                movementDataFilter: [...movementData.map(v => ({ ...v, isActive: false }))],
                optionArray: [...accountData.map(v => ({ ...v, isActive: false }))],
                option: 'Account',
                firstTime:false
            });
        }
        return null;
      }

    setModalVisible = (visible) => () => {
        this.setState({ modalVisible: visible });
    }

    buildFilter = (filter) => {
        const query = {};
        Object.keys(filter).forEach((key)=>{
            if ((filter[key.toString()].constructor === Object) || (filter[key.toString()].constructor === Array && filter[key.toString()].length > 0)) {
                query[key.toString()] = filter[key.toString()];
            }
        });
        return query;
    }

    filterData = (data, query) => {
        const keysWithMinMax = [
            'amount',
        ];
        const min='min';
        const max='max';
    
        const filteredData = data.filter((item) => {
        const keyArray = Object.keys(query);
            for (let x=0;x<keyArray.length;x+=1) {
                if (keysWithMinMax.includes(keyArray[+x])) {
                    if (query[keyArray[+x]][min.toString()] !== null && item[keyArray[+x]] < query[keyArray[+x]][min.toString()]) {
                        return false;
                    }
                    if (query[keyArray[+x]][max.toString()] !== null && item[keyArray[+x]] > query[keyArray[+x]][max.toString()]) {
                        return false;
                    }
                }
                else if (!query[keyArray[+x]].includes(item[keyArray[+x]])) {
                    return false;
                }
            }
            return true;
        });
        return filteredData;
    };

    applyFilterAction = (visible, applyFilter) => () => {
        const { accountDataFilter, fundDataFiler, amountDataFilter, movementDataFilter, data } = this.state;

        const filter = {
            account: [],
            fund: [],
            amount: {},
            movementType: [],
        };
        if (!applyFilter) {

            this.setState({
                accountDataFilter: [...accountData.map(v => ({ ...v, isActive: false }))],
                amountDataFilter: [...amountData.map(v => ({ ...v, isActive: false }))],
                fundDataFiler:[...fundData.map(v => ({ ...v, isActive: false }))],
                movementDataFilter: [...movementData.map(v => ({ ...v, isActive: false }))],
                optionArray: [...accountData.map(v => ({ ...v, isActive: false }))],
                option: 'Account',
                filterData:data
            });
        }
        else{
        

            if (accountDataFilter !== '') {
                accountDataFilter.forEach(item => {
                    if (item.isActive) {
                        filter.account.push(`${item.value}`);
                    }
                });
            }

            if (fundDataFiler !== '') {
                fundDataFiler.forEach(item => {
                    if (item.isActive) {
                        filter.fund.push(`${item.value}`);
                    }
                });
            }

            if (amountDataFilter !== '') {
                amountDataFilter.forEach(item => {
                    if (item.isActive) {
                        filter.amount = { min: item.min, max: item.max };
                    }
                });
            }

            if (movementDataFilter !== '') {
                movementDataFilter.forEach(item => {
                    if (item.isActive) {
                        filter.movementType.push(`${item.value}`);
                    }
                });
            }
            const query = this.buildFilter(filter);
        const result = this.filterData(data, query);
        
        this.setState({
            modalVisible: visible,
            filterData: result,

        });
        }
        
        
    }

    // Checkbox selection on Clicking Filters 
    onCheckboxSelect = (keyName, item, index) => () => {
        const {accountDataFilter,fundDataFiler,movementDataFilter} =this.state;
        let newItm = [];
        switch (keyName.split(" ")[0]) {

            case 'Account':
                newItm = [...accountDataFilter];
                newItm[Number(index)].isActive = !newItm[Number(index)].isActive;
                this.setState({accountDataFilter: newItm,optionArray: newItm });
                break;
            case 'Fund':
                newItm = [...fundDataFiler];
                newItm[Number(index)].isActive = !newItm[Number(index)].isActive;
                this.setState({fundDataFiler: newItm,optionArray: newItm });
                break;
            case 'Movement':
                newItm = [...movementDataFilter];
                newItm[Number(index)].isActive = !newItm[Number(index)].isActive;
                this.setState({movementDataFilter: newItm,optionArray: newItm });
                break;
            default:
                break;
        }
        
    }

    onRadioSelect = (keyName, item, index) => () => {
        const {amountDataFilter} =this.state;
        for (let i = 0; i < amountDataFilter.length; i += 1) {
            if (i === index)
                amountDataFilter[Number(index)].isActive = !amountDataFilter[Number(index)].isActive;
            else
                amountDataFilter[Number(i)].isActive = false;
        }

        this.setState({optionArray: amountDataFilter });
    }

    // onChangeDateValue = (keyName) => (date) => {
    //     this.setState({
    //         [keyName]: date,
    //         errorDate: false
    //     });
    // }

    setNewMovement =() =>() =>
    {
        const { navigation } = this.props;
        navigation.navigate('accountService');
    }

    selectedOption = (value) => () => {
        const {accountDataFilter,fundDataFiler,amountDataFilter,movementDataFilter} =this.state;
        switch (value) {
            case 'Amount':
                this.setState({ optionArray: [...amountDataFilter], option: value });
                break;
            case 'Movement':
                this.setState({ optionArray: [...movementDataFilter], option: value });
                break;
            case 'Account':
                this.setState({ optionArray: [...accountDataFilter], option: value });
                break;
            case 'Fund':
                this.setState({ optionArray: [...fundDataFiler], option: value });
                break;
            default:
                break;
        }

    }

    render() {
        const { navigation } = this.props;
        const { modalVisible ,filterData, optionArray, option } = this.state;// , fromDateValue, toDateValue, errorDate,
        // const date = new Date().getDate(); // Current Date
        // const month = new Date().getMonth() + 1; // Current Month
        // const year = new Date().getFullYear(); // Current Year
        // const currentdate = `${month}/${date}/${year}`;
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
                                size={25}
                                color="#fff"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.setNewMovement()}>
                            <GIcon
                                name="plus"
                                type="material-community"
                                size={25}
                                color="#fff"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerView}>
                        {
                            filterData.map((item) => {
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
                        onRequestClose={this.setModalVisible(!modalVisible)}
                    >
                        <View style={styles.modalBackgroundView}>
                            <TouchableOpacity onPress={this.setModalVisible(!modalVisible)}>
                                <View style={styles.emptyView} />
                            </TouchableOpacity>
                            <View style={styles.modalContainer}>
                                {/* 
                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <GDateComponent
                                            dateTitleName={styles.financialTextLabel}
                                            dateTextName="From Date"
                                            minDate={currentdate}
                                            placeholder="MM/DD/YYYY"
                                            date={fromDateValue}
                                            onDateChange={this.onChangeDateValue('fromDateValue',date)}
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
                                            onDateChange={this.onChangeDateValue('toDateValue',date)}
                                            errorFlag={errorDate}
                                            errorMsg="Please select a valid date"
                                        />
                                    </View>
                                 */}
                                <View style={styles.modalTitleView}>
                                    <Text style={styles.modalTitleText}>{globalString.automaticInvestment.filter}</Text>
                                    <TouchableOpacity onPress={this.setModalVisible(!modalVisible)} style={styles.modalTitleImage}>
                                        <GIcon
                                            name="close"
                                            type="antdesign"
                                            size={25}
                                            color="#486d90"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.seperator_line} />
                                <View style={styles.viewContainer}>
                                    <View style={styles.leftContainer}>
                                        {
                                            filterOptions.map((item) => {
                                                return (
                                                    <View style={item.value === option ?styles.textBorderSelected:styles.textBorder}>
                                                    <Text style={item.value === option ? styles.modalMinInvestTitleSelected : styles.modalMinInvestTitleText} 
                                                        onPress={this.selectedOption(item.value)}
                                                    >{item.value}
                                                    </Text>
                                                    </View>
                                                );
                                            })
                                        }
                                    </View>
                                    <View style={styles.rightContainer}>
                                        {
                                            optionArray.map((item, index) => {
                                                return (
                                                    option === 'Amount' ? (
                                                        <CustomRadio
                                                            key={item.key}
                                                            size={20}
                                                            itemBottom={0}
                                                            itemTop={0}
                                                            outerCicleColor="#DEDEDF"
                                                            innerCicleColor="#486d90"
                                                            labelStyle={styles.modalCheckBoxLabel}
                                                            label={item.value}
                                                            selected={item.isActive}
                                                            onPress={this.onRadioSelect(option, item, index)}
                                                        />
                                                    )
                                                        : (
                                                            <CustomCheckBox
                                                                key={item.key}
                                                                size={20}
                                                                itemBottom={0}
                                                                itemTop={0}
                                                                outerCicleColor="#DEDEDF"
                                                                innerCicleColor="#486d90"
                                                                labelStyle={styles.modalCheckBoxLabel}
                                                                label={item.value}
                                                                selected={item.isActive}
                                                                onPress={this.onCheckboxSelect(option, item, index)}
                                                            />
                                                        )

                                                );
                                            })
                                        }
                                    </View>
                                </View>
                                <View style={styles.modalActionContainer}>
                                    <GButtonComponent
                                        buttonStyle={styles.modalClearFilterBtn}
                                        buttonText={globalString.automaticInvestment.reset}
                                        textStyle={styles.modalCancelBtnTxt}
                                        onPress={this.applyFilterAction(true, false)}
                                    />
                                    <GButtonComponent
                                        buttonStyle={styles.modalApplyFilterBtn}
                                        buttonText={globalString.automaticInvestment.apply}
                                        textStyle={styles.modalApplyBtnTxt}
                                        onPress={this.applyFilterAction(false, true)}
                                    />
                                </View>
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