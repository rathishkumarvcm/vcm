import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import PropTypes from 'prop-types';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';


let savedData = {};
let ammendData = {};
let ammendIndex = null;

class LiquidationPageTwoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseLiquidationIcon: "-  ",
            collapseLiquidation: false,
            disableNextButton: true,
            ammend: false,
            fundListData: [],
        };
    }

    componentDidMount() {
        const { navigation, liquidationInitialState } = this.props;
        const { getParam } = navigation;
        console.log(" Screen 2 componentdidmount ", JSON.stringify(liquidationInitialState.saveLiquidationSelectedData));
        if (getParam('ammend')) {
            ammendData = getParam('data');
            ammendIndex = getParam('index');
            this.setState({ ammend: true });
        }
        else {
            this.setState({ ammend: false });
        }
        if (liquidationInitialState && liquidationInitialState.saveLiquidationSelectedData) {
            savedData = liquidationInitialState.saveLiquidationSelectedData;
        }
        this.getFundList();
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
    }

    onClickExpandLiquidation = () => {
        const { collapseLiquidation } = this.state;
        this.setState(prevState => ({
            collapseLiquidation: !prevState.collapseLiquidation,
        }));
        if(collapseLiquidation){
            this.setState({ collapseLiquidationIcon: "-   " });
        }else{
            this.setState({ collapseLiquidationIcon: "+  " });
        }
    };

    onClickSelectFund = (item, index) => () => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (i !== index) {
                funds[i].allSharesSelected = false;
                funds[i].percentageSelected = false;
                funds[i].percentageValue = '';
                funds[i].dollarSelected = false;
                funds[i].dollarValue = '';
                funds[i].sellingAmount = "";
                funds[i].isSelected = false;
            } else {
                funds[i].sellingAmount = "";
                funds[i].isSelected = true;
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

    onClickAmountinDollar = (item, index) => () => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
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

    onClickAmountInPerc = (item, index) => () => {
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
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
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (funds[i].isSelected) {
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
        const { fundListData } = this.state;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (funds[i].isSelected) {
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

    navigateLiquidationPageOne = () => {
        const { navigation } = this.props;
        const { navigate } = navigation;
        const { ammend } = this.state;
        if (ammend) {
            navigate('tAmmendComponent');
        }
        else {
            navigate('LiquidationPageOne');
        }
    }

    nextButtonAction = () => {
        const { fundListData, ammend } = this.state;
        const { navigation, saveData } = this.props;
        const { navigate } = navigation;
        const funds = fundListData;
        for (let i = 0; i < funds.length; i += 1) {
            if (funds[i].isSelected) {
                if (funds[i].allSharesSelected) {
                    funds[i].sellingAmount = funds[i].worthAmount;
                    funds[i].TypeValueReq = 'A';
                } else if (this.isEmpty(funds[i].percentageValue)) {
                    funds[i].sellingAmount = funds[i].dollarValue;
                    funds[i].TypeValueReq = 'D';
                } else {
                    funds[i].sellingAmount = (funds[i].percentageValue / 100) * funds[i].worthAmount;
                    funds[i].TypeValueReq = 'P';
                }
            }else{
                funds[i].TypeValueReq = '';
            }
        }
        this.setState({
            fundListData: funds
        });
        const payloadData = {
            saveLiquidationSelectedData: {
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
        if (ammend) {
            const { amendReducerData } = this.props;
            ammendData = amendReducerData.menu[ammendIndex - 1].data;
            navigate('LiquidationPageThree', { ammend: true, data: ammendData, index: ammendIndex });
        }
        else {
            navigate('LiquidationPageThree', { ammend: false });
        }
    }

    formatAmount = (amount) => {
        const amt = parseInt(amount).toLocaleString();
        return amt;
    }

    navigateBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    getFundList = () => {
        const { navigation, liquidationInitialState } = this.props;
        const { getParam } = navigation;
        if (getParam('ammend')) {
            this.setState({
                fundListData: ammendData.selectedFundData.funds,
                disableNextButton: !(ammendData.selectedFundData.funds[0].allSharesSelected || ammendData.selectedFundData.funds[0].percentageSelected || ammendData.selectedFundData.funds[0].dollarSelected),
            });
        } else {
            this.setState({
                fundListData: liquidationInitialState.fundsListData.funds,
            });
        }
    }

    genrateKeyFunds = (x) => x.fundName;

    renderFundList = ({ item, index }) => {
        return (
            <View style={(item.isSelected) ? styles.fundsFlexSelected : styles.fundsFlex} onTouchStart={this.onClickSelectFund(item, index)}>
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
                                errorFlag={item.percentageValue > 100}
                                errorText="Percentage cannot be greater than 100"
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
        const { navigation, liquidationInitialState } = this.props;
        const { ammend, disableNextButton, collapseLiquidationIcon, collapseLiquidation, fundListData } = this.state;
        if (ammend) {
            currentPage = 1;
            pageName = '1 - Fund Selection';
            totalCount = 3;
        }
        if (liquidationInitialState && liquidationInitialState.saveLiquidationSelectedData) {
            savedData = liquidationInitialState.saveLiquidationSelectedData;
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

                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandLiquidation}>
                            <Text style={styles.headerText}>{collapseLiquidationIcon}</Text>
                            <Text style={styles.headerText}>{gblStrings.liquidation.liquidationYourFund}</Text>
                        </View>

                        <View style={styles.line} />
                    </View>
                    <Collapsible collapsed={collapseLiquidation} align="center">
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
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
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


LiquidationPageTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    liquidationInitialState: PropTypes.instanceOf(Object),
    amendReducerData: PropTypes.instanceOf(Object),
    saveData: PropTypes.func,
};

LiquidationPageTwoComponent.defaultProps = {
    navigation: {},
    liquidationInitialState: {},
    amendReducerData: {},
    saveData: () => { },
};
export default LiquidationPageTwoComponent;