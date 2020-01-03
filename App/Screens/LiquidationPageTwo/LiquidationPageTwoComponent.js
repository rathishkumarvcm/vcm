import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';


let savedData = {};
let ammendData = {};
let ammendIndex = 0;
let menuList = [];

class LiquidationPageTwoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseLiquidationIcon: "-  ",
            collapseLiquidation: false,
            selectedFundIndex: null,
            dollarValue: [],
            percentageValue: [],
            disableNextButton: true,
            ammend: false,
            fundListData: [],
            selectedAccountType: '',
            selectedIndex: 0,
        };
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        } else {
            return false;
        }
    }

    onClickExpandLiquidation = () => {
        this.setState({ collapseLiquidation: !this.state.collapseLiquidation });
        (this.state.collapseLiquidation ? this.setState({ collapseLiquidationIcon: "-   " }) : this.setState({ collapseLiquidationIcon: "+  " }));
    };

    onClickSelectFund = (item, index) => {
        let funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i++) {
            if (i !== index) {
                funds[i]["allSharesSelected"] = false;
                funds[i]["percentageSelected"] = false;
                funds[i]["percentageValue"] = '';
                funds[i]["dollarSelected"] = false;
                funds[i]["dollarValue"] = '';
            }
        }
        this.setState({
            selectedFundIndex: index,
        });
    }


    onClickAllShares = (item, index) => {
        let funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i++) {
            if (i === index) {
                funds[i]["allSharesSelected"] = !funds[i]["allSharesSelected"];

            } else {
                funds[i]["allSharesSelected"] = false;
            }
            funds[i]["percentageSelected"] = false;
            funds[i]["percentageValue"] = '';
            funds[i]["dollarSelected"] = false;
            funds[i]["dollarValue"] = '';

        }
        this.setState({
            fundListData: funds,
            disableNextButton: !funds[index]["allSharesSelected"],
        });
    }

    onClickAmountinDollar = (item, index) => {
        let funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i++) {
            if (i === index) {
                funds[i]["dollarSelected"] = !funds[i]["dollarSelected"];
            } else {
                funds[i]["dollarSelected"] = false;
            }
            funds[i]["allSharesSelected"] = false;
            funds[i]["percentageSelected"] = false;
            funds[i]["percentageValue"] = '';
            funds[i]["dollarValue"] = '';

        }
        this.setState({
            fundListData: funds,
            disableNextButton: true
        });
    }

    onClickAmountInPerc = (item, index) => {
        let funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i++) {
            if (i === index) {
                funds[i]["percentageSelected"] = !funds[i]["percentageSelected"];
            } else {
                funds[i]["percentageSelected"] = false;
            }
            funds[i]["allSharesSelected"] = false;
            funds[i]["dollarSelected"] = false;
            funds[i]["percentageValue"] = '';
            funds[i]["dollarValue"] = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: true
        });
    }

    onChangeDollarVal = (text) => {
        let funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i++) {
            if (i === this.state.selectedFundIndex) {
                funds[i]["dollarValue"] = text;
                funds[i]["dollarSelected"] = true;
            } else {
                funds[i]["dollarValue"] = '';
                funds[i]["dollarSelected"] = false;
            }
            funds[i]["percentageSelected"] = false;
            funds[i]["allSharesSelected"] = false;
            funds[i]["percentageValue"] = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: this.isEmpty(text),
        });

    }

    onChangePercentageVal = (text) => {
        let funds = this.state.fundListData;
        for (let i = 0; i < funds.length; i++) {
            if (i === this.state.selectedFundIndex) {
                funds[i]["percentageValue"] = text;
                funds[i]["percentageSelected"] = true;
            } else {
                funds[i]["percentageValue"] = '';
                funds[i]["percentageSelected"] = false;
            }
            funds[i]["dollarSelected"] = false;
            funds[i]["allSharesSelected"] = false;
            funds[i]["dollarValue"] = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: this.isEmpty(text),
        });
    }

    navigateLiquidationPageOne = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('tAmmendComponent');
        }
        else {
            this.props.navigation.navigate('LiquidationPageOne');
        }
    }
    navigateLiquidationPageTwo = () => this.props.navigation.navigate('LiquidationPageTwo');

    nextButtonAction = () => {
        console.log('On Click Next Fund Selection ... ');
        let i = this.state.selectedFundIndex;
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const updatedDate = date + '/' + month + '/' + year;
        const finalKey = menuList[menuList.length - 1];

        if (this.state.ammend) {
            const pIndex = menuList.findIndex((item) => item.key === ammendIndex);
            const amndObj = menuList[pIndex];
            const transType = ammendData.TransactionType;
            const ammendPayloadData = {
                "key": amndObj.key,
                "title": amndObj.title,
                "data": {
                    "count": ammendData.count,
                    "Dateadded": updatedDate,
                    "TransactionType": transType,
                    "OrderStatus": ammendData.OrderStatus,
                    "totalSHares": ammendData.totalSHares,
                    "worth": ammendData.worth,
                    "selectedAccountData": ammendData.selectedAccountData,
                    "selectedFundData": {
                        "fundName": this.state.fundListData[0].fundName,
                        "fundNumber": "",
                        "fundingOption": "",
                        "initialInvestment": "",
                        "monthlyInvestment": "",
                        "startDate": "",
                        "count": "",
                        "total": "",
                        "totalShares": this.state.fundListData[0].totalShares,
                        "worthAmount": this.state.fundListData[0].worthAmount,
                        "allSharesSelected": this.state.fundListData[0].allSharesSelected,
                        "dollarSelected": this.state.fundListData[0].dollarSelected,
                        "percentageSelected": this.state.fundListData[0].percentageSelected,
                        "dollarValue": this.state.fundListData[0].dollarValue,
                        "percentageValue": this.state.fundListData[0].percentageValue,
                        "funds": this.state.fundListData,
                    },
                    "selectedFundWithdrawalData": ammendData.selectedFundWithdrawalData,
                    "reviewConfirmLiquidationData":ammendData.reviewConfirmLiquidationData,
                    "selectedFundSourceData": ammendData.selectedFundSourceData,
                    "currentSecurities": ammendData.currentSecurities,
                    "contribution": ammendData.contribution,
                    "estimated": ammendData.estimated
                }
            }

            menuList.splice(pIndex, 1, ammendPayloadData);
            this.props.ammendActions(menuList);
            this.props.navigation.navigate('LiquidationPageThree', { ammend: true, index: ammendIndex, data: ammendData });
        }
        else {
            const payloadData = {
                saveLiquidationSelectedData: {
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
            console.log("payloadData---> " + JSON.stringify(payloadData));
            this.props.navigation.navigate('LiquidationPageThree', { ammend: false });
        }
    }

    formatAmount = (amount) => {
        var amt = parseInt(amount).toLocaleString();
        return amt;
    }

    navigateBack = () => this.props.navigation.goBack();


    componentDidMount() {
        console.log("ammendData Reducer---componentDidMount->" + JSON.stringify(this.props))
        if (this.props.navigation.getParam('ammend')) {
            menuList = this.props.amendReducerData.menu;
            ammendIndex = this.props.navigation.getParam('index');
            ammendData = this.props.amendReducerData.menu[ammendIndex - 1].data;
           
            this.setState({
                ammend: true,
            });
        }
        else {
            this.setState({ ammend: false });
        }
        if (this.props.liquidationInitialState && this.props.liquidationInitialState.saveLiquidationSelectedData) {
            savedData = this.props.liquidationInitialState.saveLiquidationSelectedData;
        }
        this.getFundList();

    }

    getFundList = () => {
        let selectedIndex = 0;
        let selectedAccountType = "";
        let selectedAccountNumber = "";
        let fundList = [];
        let accType = '';
        if (this.props.navigation.getParam('ammend')) {
            accType = ammendData.selectedAccountData.accountType;
            selectedAccountNumber = ammendData.selectedAccountData.accountNumber;
        } else {
            accType = savedData.selectedAccountData.accountType;
            selectedAccountNumber = savedData.selectedAccountData.accountNumber;
        }
        if (accType === "General") {
            selectedAccountType = "General_Account";
        } else if (accType === "IRA") {
            selectedAccountType = "IRA_Account";
        } else {
            selectedAccountType = "UTMA_Account";
        }

        for (let i = 0; i < this.props.liquidationInitialState.accSelectionData[selectedAccountType].length; i++) {
            if (selectedAccountNumber === this.props.liquidationInitialState.accSelectionData[selectedAccountType][i].accNumber) {
                selectedIndex = i;
            }
        }
        fundList = this.props.liquidationInitialState.accSelectionData[selectedAccountType][selectedIndex].funds;
        if (this.props.navigation.getParam('ammend')) {
            this.setState({
                fundListData: ammendData.selectedFundData.funds,
                disableNextButton: !(ammendData.selectedFundData.allSharesSelected || ammendData.selectedFundData.percentageSelected || ammendData.selectedFundData.dollarSelected)
            });
        } else {
            this.setState({
                fundListData: fundList,
                selectedIndex: selectedIndex,
                selectedAccountType: selectedAccountType
            });
        }
    }

    render() {
        let currentPage = 2;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.fundSelectionScreenName;
        if (this.state.ammend) {
            currentPage = 1;
            pageName = '1 - Fund Selection';
            totalCount = 3;
        }
        if (this.props.liquidationInitialState && this.props.liquidationInitialState.saveLiquidationSelectedData) {
            savedData = this.props.liquidationInitialState.saveLiquidationSelectedData;
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
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountName}{this.state.ammend ? ammendData.selectedAccountData.accountName : savedData.selectedAccountData.accountName}</Text>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountNumber}{this.state.ammend ? ammendData.selectedAccountData.accountNumber : savedData.selectedAccountData.accountNumber}</Text>
                        </View>

                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandLiquidation}>
                            <Text style={styles.headerText}>{this.state.collapseLiquidationIcon}</Text>
                            <Text style={styles.headerText}>{gblStrings.liquidation.liquidationYourFund}</Text>
                        </View>

                        <View style={styles.line} />
                    </View>
                    <Collapsible collapsed={this.state.collapseLiquidation} align="center">
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

                                                <View style={styles.allShares} >
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
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
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


LiquidationPageTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    liquidationInitialState: PropTypes.instanceOf(Object),
    amendReducerData: PropTypes.instanceOf(Object),
    saveData: PropTypes.func,
    ammendActions: PropTypes.func,
};

LiquidationPageTwoComponent.defaultProps = {
    navigation: {},
    liquidationInitialState: {},
    amendReducerData: {},
};
export default LiquidationPageTwoComponent;