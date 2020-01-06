import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';


let savedData = {};

class ExchangeScreenTwoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseExchangeFundIcon: "-  ",
            collapseExchangeFund: false,
            selectedFundIndex: null,
            disableNextButton: true,
            fundListData: [],
        };
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
            return false;
    }

    onClickExpandExchangeFund = () => {
        this.setState(prevState => ({
            collapseExchangeFund: !prevState.collapseExchangeFund,
        }));
        (this.state.collapseExchangeFund ? this.setState({ collapseExchangeFundIcon: "-   " }) : this.setState({ collapseExchangeFundIcon: "+  " }));
    };

    onClickSelectFund = (item, index) => {
        const funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i+= 1) {
            if (i !== index) {
                funds[i].allSharesSelected = false;
                funds[i].percentageSelected = false;
                funds[i].percentageValue = '';
                funds[i].dollarSelected = false;
                funds[i].dollarValue = '';
            }
        }
        this.setState({
            selectedFundIndex: index,
        });
    }


    onClickAllShares = (item, index) => {
        const funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i+= 1) {
            if (i === index) {
                funds[i].allSharesSelected = !funds[i].allSharesSelected;

            } else {
                funds[i].allSharesSelected = false;
            }
            funds[i].percentageSelected = false;
            funds[i].percentageValue = '';
            funds[i].dollarSelected = false;
            funds[i].dollarValue = '';

        }
        this.setState({
            fundListData: funds,
            disableNextButton: !funds[index].allSharesSelected,
        });
    }

    onClickAmountinDollar = (item, index) => {
        const funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i+= 1) {
            if (i === index) {
                funds[i].dollarSelected = !funds[i].dollarSelected;
            } else {
                funds[i].dollarSelected = false;
            }
            funds[i].allSharesSelected = false;
            funds[i].percentageSelected = false;
            funds[i].percentageValue = '';
            funds[i].dollarValue = '';

        }
        this.setState({
            fundListData: funds,
            disableNextButton: true
        });
    }

    onClickAmountInPerc = (item, index) => {
        const funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i+= 1) {
            if (i === index) {
                funds[i].percentageSelected = !funds[i].percentageSelected;
            } else {
                funds[i].percentageSelected = false;
            }
            funds[i].allSharesSelected = false;
            funds[i].dollarSelected = false;
            funds[i].percentageValue = '';
            funds[i].dollarValue = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: true
        });
    }

    onChangeDollarVal = (text) => {
        const funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i+= 1) {
            if (i === this.state.selectedFundIndex) {
                funds[i].dollarValue = text;
                funds[i].dollarSelected = true;
            } else {
                funds[i].dollarValue = '';
                funds[i].dollarSelected = false;
            }
            funds[i].percentageSelected = false;
            funds[i].allSharesSelected = false;
            funds[i].percentageValue = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: this.isEmpty(text),
        });

    }

    onChangePercentageVal = (text) => {
        const funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i+= 1) {
            if (i === this.state.selectedFundIndex) {
                funds[i].percentageValue = text;
                funds[i].percentageSelected = true;
            } else {
                funds[i].percentageValue = '';
                funds[i].percentageSelected = false;
            }
            funds[i].dollarSelected = false;
            funds[i].allSharesSelected = false;
            funds[i].dollarValue = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: this.isEmpty(text),
        });
    }

    navigateExchangeScreenOne = () => {
            this.props.navigation.navigate('exchangeScreenOne');
    }

    nextButtonAction = () => {
        const i = this.state.selectedFundIndex;
            const payloadData = {
                saveExchangeSelectedData: {
                    ...savedData,
                    "selectedFundData": {
                        "fundName": this.state.fundListData[i].fundName,
                        "fundNumber": "",
                        "fundingOption": "",
                        "initialInvestment": "",
                        "monthlyInvestment": "",
                        "startDate": "",
                        "count": "",
                        "total": "",
                        "totalShares": this.state.fundListData[i].totalShares,
                        "worthAmount": this.state.fundListData[i].worthAmount,
                        "allSharesSelected": this.state.fundListData[i].allSharesSelected,
                        "dollarSelected": this.state.fundListData[i].dollarSelected,
                        "percentageSelected": this.state.fundListData[i].percentageSelected,
                        "dollarValue": this.state.fundListData[i].dollarValue,
                        "percentageValue": this.state.fundListData[i].percentageValue,
                        "funds": this.state.fundListData
                    },
                },
            };
            this.props.saveData(payloadData);
           // this.props.navigation.navigate('exchangeScreenThree');
    }

    formatAmount = (amount) => {
        const amt = parseInt(amount).toLocaleString();
        return amt;
    }

    navigateBack = () => this.props.navigation.goBack();


    componentDidMount() {
        if (this.props.exchangeData && this.props.exchangeData.saveExchangeSelectedData) {
            savedData = this.props.exchangeData.saveExchangeSelectedData;
        }
        this.getFundList();

    }

    getFundList = () => {
        let selectedIndex = 0;
        let selectedAccountType = "";
        let selectedAccountNumber = "";
        let fundList = [];
        let accType = '';
        accType = savedData.selectedAccountData.accountType;
        selectedAccountNumber = savedData.selectedAccountData.accountNumber;
        
        if (accType === "General") {
            selectedAccountType = "General_Account";
        } else if (accType === "IRA") {
            selectedAccountType = "IRA_Account";
        } else {
            selectedAccountType = "UTMA_Account";
        }

        for (let i = 0; i < this.props.exchangeData.accSelectionData[selectedAccountType].length; i+= 1) {
            if (selectedAccountNumber === this.props.exchangeData.accSelectionData[selectedAccountType][i].accNumber) {
                selectedIndex = i;
            }
        }
        fundList = this.props.exchangeData.accSelectionData[selectedAccountType][selectedIndex].funds;
        
            this.setState({
                fundListData: fundList,
            });
    }

    render() {
        const currentPage = 2;
        const totalCount = 4;
        const pageName = gblStrings.liquidation.fundSelectionScreenName;
        if (this.props.exchangeData && this.props.exchangeData) {
            savedData = this.props.exchangeData.saveExchangeSelectedData;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity onPress={this.goBack}>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>

                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.flexHead}>
                        <View style={styles.accountFlex}>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountName}{ savedData.selectedAccountData.accountName}</Text>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountNumber}{savedData.selectedAccountData.accountNumber}</Text>
                        </View>

                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandExchangeFund}>
                            <Text style={styles.headerText}>{this.state.collapseExchangeFundIcon}</Text>
                            <Text style={styles.headerText}>{gblStrings.exchange.exchangeYourFund}</Text>
                        </View>

                        <View style={styles.line} />
                    </View>
                    <Collapsible collapsed={this.state.collapseExchangeFund} align="center">
                        <Text style={styles.fundSourceContent}>{gblStrings.liquidation.fundSourceContext}</Text>
                        <FlatList
                            data={this.state.fundListData}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={(this.state.selectedFundIndex === index) ? styles.fundsFlexSelected : styles.fundsFlex} onTouchStart={() => this.onClickSelectFund(item, index)}>
                                        <View style={styles.sharesFlex}>

                                            <View style={styles.flex1}>
                                                <Text style={styles.blackTextBold13px}>{item.fundName}</Text>
                                            </View>

                                            <View style={styles.flex2}>
                                                <View style={styles.totalSharesFlex}>
                                                    <Text style={styles.totalSharesText}>{gblStrings.liquidation.totalShares}</Text>
                                                    <Text style={styles.totalSharesValue}>{item.totalShares}</Text>
                                                </View>
                                                <View style={styles.totalSharesFlex}>
                                                    <Text style={styles.totalSharesText}>{gblStrings.liquidation.worth}</Text>
                                                    <Text style={styles.totalSharesValue}>$ {this.formatAmount(item.worthAmount)}{gblStrings.liquidation.approx}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.flex3}>

                                                <View style={styles.allShares}>
                                                    <TouchableOpacity onPress={() => this.onClickAllShares(item, index)} disabled={!(this.state.selectedFundIndex === index)}>
                                                        <View style={styles.radioButtonFlexOff}>
                                                            {(item.allSharesSelected) ? <View style={styles.radioButtonFlexOn} /> : null}
                                                        </View>
                                                    </TouchableOpacity>
                                                    <Text style={styles.allSharesText}>{gblStrings.liquidation.allShares}</Text>
                                                </View>

                                                <View style={styles.allShares}>
                                                    <TouchableOpacity onPress={() => this.onClickAmountinDollar(item, index)} disabled={!(this.state.selectedFundIndex === index)}>
                                                        <View style={styles.radioButtonFlexOff}>
                                                            {(item.dollarSelected) ? <View style={styles.radioButtonFlexOn} /> : null}
                                                        </View>
                                                    </TouchableOpacity>
                                                    <Text style={styles.dollarText}>$</Text>
                                                    <GInputComponent
                                                        propInputStyle={styles.amountTextBox}
                                                        inputStyle={styles.inputStyle}
                                                        value={item.dollarValue}
                                                        onChangeText={this.onChangeDollarVal}
                                                        editable={(item.dollarSelected)}
                                                        keyboardType="decimal-pad"
                                                        maxLength={13}
                                                        errorFlag={item.dollarValue > 0.95 * item.worthAmount}
                                                        errorText="Due to market fluctuations, this trade may fail. We suggest you do an ‘All’ shares liquidations"
                                                    />
                                                </View>


                                                <View style={styles.allShares}>
                                                    <TouchableOpacity onPress={() => this.onClickAmountInPerc(item, index)} disabled={!(this.state.selectedFundIndex === index)}>
                                                        <View style={styles.radioButtonFlexOff}>
                                                            {(item.percentageSelected) ? <View style={styles.radioButtonFlexOn} /> : null}
                                                        </View>
                                                    </TouchableOpacity>
                                                    <Text style={styles.dollarText}>%</Text>
                                                    <GInputComponent
                                                        propInputStyle={styles.amountTextBox}
                                                        inputStyle={styles.inputStyle}
                                                        value={item.percentageValue}
                                                        onChangeText={this.onChangePercentageVal}
                                                        editable={(item.percentageSelected)}
                                                        keyboardType="decimal-pad"
                                                        maxLength={3}
                                                    />
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                );
                            }}
                            keyExtractor={x => x.fundName}
                            extraData={this.state}
                        />

                    </Collapsible>

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateBack}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateExchangeScreenOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.disableNextButton ? styles.submitFlexDisabled : styles.submitFlex} onPress={this.nextButtonAction} disabled={this.state.disableNextButton}>
                            <Text style={styles.submitText}>{gblStrings.common.next}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.fullLine} />
                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>
                    <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}


ExchangeScreenTwoComponent.propTypes = {
    exchangeData: PropTypes.instanceOf(Object),
    navigation: PropTypes.instanceOf(Object),
    saveData: PropTypes.func
};

ExchangeScreenTwoComponent.defaultProps = {
    exchangeData: {},
    navigation: {},
    saveData: () => { }
};
export default ExchangeScreenTwoComponent;