import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';


let savedData = {};
let ammendData = {};
let ammendIndex = null;

class ExchangeScreenTwoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseExchangeFundIcon: "-  ",
            collapseExchangeFund: false,
            disableNextButton: true,
            ammend: false,
            fundListData: [],
        };
    }

    componentDidMount() {
        this.getFundList();
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
    }

    onClickExpandExchangeFund = () => {
        const { collapseExchangeFund } = this.state;
        this.setState(prevState => ({
            collapseExchangeFund: !prevState.collapseExchangeFund,
        }));
        if (collapseExchangeFund) {
            this.setState({ collapseExchangeFundIcon: "-   " });
        } else {
            this.setState({ collapseExchangeFundIcon: "+  " });
        }
    };

    onClickSelectFund = (item, index) => () => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (i !== index) {
                funds[parseInt(i, 0)].allSharesSelected = false;
                funds[parseInt(i, 0)].percentageSelected = false;
                funds[parseInt(i, 0)].percentageValue = '';
                funds[parseInt(i, 0)].dollarSelected = false;
                funds[parseInt(i, 0)].dollarValue = '';
                funds[parseInt(i, 0)].sellingAmount = "";
                funds[parseInt(i, 0)].isSelected = false;
            } else {
                funds[parseInt(i, 0)].sellingAmount = "";
                funds[parseInt(i, 0)].isSelected = true;
            }
        }
        this.setState({
            fundListData: funds,
        });
    }

    onClickAllShares = (item, index) => () => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (i === index) {
                funds[parseInt(i, 0)].allSharesSelected = !funds[parseInt(i, 0)].allSharesSelected;
            } else {
                funds[parseInt(i, 0)].allSharesSelected = false;
            }
            funds[parseInt(i, 0)].percentageSelected = false;
            funds[parseInt(i, 0)].percentageValue = '';
            funds[parseInt(i, 0)].dollarSelected = false;
            funds[parseInt(i, 0)].dollarValue = '';

        }
        this.setState({
            fundListData: funds,
            disableNextButton: !funds[parseInt(index, 0)].allSharesSelected,
        });
    }

    onClickAmountinDollar = (item, index) => () => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (i === index) {
                funds[parseInt(i, 0)].dollarSelected = !funds[parseInt(i, 0)].dollarSelected;
            } else {
                funds[parseInt(i, 0)].dollarSelected = false;
            }
            funds[parseInt(i, 0)].allSharesSelected = false;
            funds[parseInt(i, 0)].percentageSelected = false;
            funds[parseInt(i, 0)].percentageValue = '';
            funds[parseInt(i, 0)].dollarValue = '';

        }
        this.setState({
            fundListData: funds,
            disableNextButton: true
        });
    }

    onClickAmountInPerc = (item, index) => () => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (i === index) {
                funds[parseInt(i, 0)].percentageSelected = !funds[parseInt(i, 0)].percentageSelected;
            } else {
                funds[parseInt(i, 0)].percentageSelected = false;
            }
            funds[parseInt(i, 0)].allSharesSelected = false;
            funds[parseInt(i, 0)].dollarSelected = false;
            funds[parseInt(i, 0)].percentageValue = '';
            funds[parseInt(i, 0)].dollarValue = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: true
        });
    }

    onChangeDollarVal = (text) => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (funds[parseInt(i, 0)].isSelected) {
                funds[parseInt(i, 0)].dollarValue = text;
                funds[parseInt(i, 0)].dollarSelected = true;
            } else {
                funds[parseInt(i, 0)].dollarValue = '';
                funds[parseInt(i, 0)].dollarSelected = false;
            }
            funds[parseInt(i, 0)].percentageSelected = false;
            funds[parseInt(i, 0)].allSharesSelected = false;
            funds[parseInt(i, 0)].percentageValue = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: this.isEmpty(text),
        });

    }

    onChangePercentageVal = (text) => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (funds[parseInt(i, 0)].isSelected) {
                funds[parseInt(i, 0)].percentageValue = text;
                funds[parseInt(i, 0)].percentageSelected = true;
            } else {
                funds[parseInt(i, 0)].percentageValue = '';
                funds[parseInt(i, 0)].percentageSelected = false;
            }
            funds[parseInt(i, 0)].dollarSelected = false;
            funds[parseInt(i, 0)].allSharesSelected = false;
            funds[parseInt(i, 0)].dollarValue = '';
        }
        this.setState({
            fundListData: funds,
            disableNextButton: this.isEmpty(text),
        });
    }

    navigateExchangeScreenOne = () => {
        const { navigation } = this.props;
        const { navigate } = navigation;
        const { ammend } = this.state;
        if (ammend) {
            navigate('tAmmendComponent');
        }
        else {
            navigate('exchangeScreenOne');
        }
    }

    nextButtonAction = () => {
        const { fundListData, ammend } = this.state;
        const { navigation, saveData } = this.props;
        const { navigate } = navigation;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (funds[parseInt(i, 0)].isSelected) {
                if (funds[parseInt(i, 0)].allSharesSelected) {
                    funds[parseInt(i, 0)].sellingAmount = funds[parseInt(i, 0)].worthAmount;
                } else if (this.isEmpty(funds[parseInt(i, 0)].percentageValue)) {
                    funds[parseInt(i, 0)].sellingAmount = funds[parseInt(i, 0)].dollarValue;
                } else {
                    funds[parseInt(i, 0)].sellingAmount = (funds[parseInt(i, 0)].percentageValue / 100) * funds[parseInt(i, 0)].worthAmount;
                }
            }
        }
        this.setState({
            fundListData: funds
        });

        if (ammend) {
            const { amendReducerData } = this.props;
            ammendData = amendReducerData.menu[ammendIndex - 1].data;

            const payloadData = {
                saveExchangeSelectedData: {
                    ...ammendData,
                    "selectedFundData": {
                        "fundName": "",
                        "fundNumber": "",
                        "fundingOption": "",
                        "initialInvestment": "",
                        "monthlyInvestment": "",
                        "startDate": "",
                        "count": "",
                        "total": "",
                        "funds": fundListData
                    },
                },
            };
            saveData(payloadData);

            navigate('exchangeScreenThree', { ammend: true, data: ammendData, index: ammendIndex });
        }
        else {
            const payloadData = {
                saveExchangeSelectedData: {
                    ...savedData,
                    "selectedFundData": {
                        "fundName": "",
                        "fundNumber": "",
                        "fundingOption": "",
                        "initialInvestment": "",
                        "monthlyInvestment": "",
                        "startDate": "",
                        "count": "",
                        "total": "",
                        "funds": fundListData
                    },
                },
            };
            saveData(payloadData);
            navigate('exchangeScreenThree', { ammend: false });
        }
    }

    formatAmount = (amount) => {
        const amt = parseInt(amount, 0).toLocaleString();
        return amt;
    }

    navigateBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    getFundList = () => {
        const { navigation, exchangeData } = this.props;
        const { getParam } = navigation;

        if (exchangeData && exchangeData.saveExchangeSelectedData) {
            savedData = exchangeData.saveExchangeSelectedData;
        }
        if (getParam('ammend')) {
            ammendData = getParam('data');
            ammendIndex = getParam('index');
            this.setState({
                ammend: true,
                fundListData: ammendData.selectedFundData.funds,
                disableNextButton: !(ammendData.selectedFundData.funds[0].allSharesSelected || ammendData.selectedFundData.funds[0].percentageSelected || ammendData.selectedFundData.funds[0].dollarSelected),
            });
        }
        else {
            this.setState({
                ammend: false,
                fundListData: exchangeData.fundsListData.funds,
            });
        }
    }

    genrateKeyFunds = (x) => x.fundName;

    renderFundList = ({ item, index }) => {
        return (
            <View style={(item.isSelected) ? styles.fundsFlexSelected : styles.fundsFlex} onTouchStart={this.onClickSelectFund(item, index)}>
                <View style={styles.sharesFlex}>

                    <View style={styles.flex1}>
                        <Text style={styles.blueTextBold13px}>{item.fundName}</Text>
                    </View>

                    <View style={styles.fundInfoFlex}>
                        <View style={styles.minAmountFlex}>
                            <Text style={styles.totalSharesText}>Min. / Max. Amount</Text>
                            <Text style={styles.totalSharesValue}>$ 300 / $ 5,000</Text>
                        </View>
                        <View style={styles.minAmountFlex}>
                            <View style={styles.horizontalFlex}>
                                <Text style={styles.totalSharesText}>NAV </Text>
                                <Text style={styles.greyTextRegular13px}>(Change in Percentage)</Text>
                            </View>

                            <Text style={styles.totalSharesValue}>↑ 14.3</Text>
                        </View>
                        <View style={styles.minAmountFlex}>
                            <View style={styles.horizontalFlex}>
                                <Text style={styles.totalSharesText}>Last NAV </Text>
                                <Text style={styles.greyTextRegular13px}>(Previous day close)</Text>
                            </View>
                            <Text style={styles.totalSharesValue}>$ 143</Text>
                        </View>
                        <View style={styles.minAmountFlex}>
                            <Text style={styles.totalSharesText}>52 week Min. / Max. Values</Text>
                            <Text style={styles.totalSharesValue}>$ 3,000 / $ 5,000</Text>
                        </View>
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
                            <TouchableOpacity onPress={this.onClickAllShares(item, index)} disabled={!(item.isSelected)}>
                                <View style={styles.radioButtonFlexOff}>
                                    {(item.allSharesSelected) ? <View style={styles.radioButtonFlexOn} /> : null}
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.allSharesText}>{gblStrings.liquidation.allShares}</Text>
                        </View>

                        <View style={styles.allShares}>
                            <TouchableOpacity onPress={this.onClickAmountinDollar(item, index)} disabled={!(item.isSelected)}>
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
                            <TouchableOpacity onPress={this.onClickAmountInPerc(item, index)} disabled={!(item.isSelected)}>
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
    }

    render() {
        let currentPage = 2;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.fundSelectionScreenName;

        const { navigation, exchangeData } = this.props;
        const { collapseExchangeFundIcon, collapseExchangeFund, fundListData, disableNextButton, ammend } = this.state;
        if (ammend) {
            currentPage = 1;
            pageName = '1 - Fund Selection';
            totalCount = 3;
        }
        if (exchangeData && exchangeData.saveExchangeSelectedData) {
            savedData = exchangeData.saveExchangeSelectedData;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
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
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountName}{ammend ? ammendData.selectedAccountData.accountName : savedData.selectedAccountData.accountName}</Text>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountNumber}{ammend ? ammendData.selectedAccountData.accountNumber : savedData.selectedAccountData.accountNumber}</Text>
                        </View>

                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandExchangeFund}>
                            <Text style={styles.headerText}>{collapseExchangeFundIcon}</Text>
                            <Text style={styles.headerText}>{gblStrings.exchange.exchangeYourFund}</Text>
                        </View>

                        <View style={styles.line} />
                    </View>
                    <Collapsible collapsed={collapseExchangeFund} align="center">
                        <Text style={styles.fundSourceContent}>{gblStrings.liquidation.fundSourceContext}</Text>
                        <FlatList
                            data={fundListData}
                            renderItem={this.renderFundList}
                            keyExtractor={this.genrateKeyFunds}
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
                        <TouchableOpacity style={disableNextButton ? styles.submitFlexDisabled : styles.submitFlex} onPress={this.nextButtonAction} disabled={disableNextButton}>
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
    amendReducerData: PropTypes.instanceOf(Object),
    saveData: PropTypes.func
};

ExchangeScreenTwoComponent.defaultProps = {
    exchangeData: {},
    navigation: {},
    amendReducerData: {},
    saveData: () => { }
};
export default ExchangeScreenTwoComponent;