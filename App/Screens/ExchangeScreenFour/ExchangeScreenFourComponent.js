import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import { PageNumber } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';


let savedData = {};
let menuList = [];

class ExchangeScreenFourComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ammend: false,
            ammendData: {},
            ammendIndex: null
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const { navigation, amendReducerData } = this.props;
        this.setState({
            ammend: navigation.getParam('ammend'),
            ammendData: navigation.getParam('data'),
            ammendIndex: navigation.getParam('index')
        });
        if (this.props && amendReducerData && amendReducerData.menu) {
            menuList = amendReducerData.menu;
        }
    }

    navigatePurchasePageOne = () => {
        const { navigation } = this.props;
        const { ammend } = this.state;
        if (ammend) {
            navigation.navigate('tAmmendComponent');
        }
        else {
            navigation.navigate('exchangeScreenOne');
        }
    }

    navigatePurchasePageThree = () => {
        const { navigation } = this.props;
        const { ammend } = this.state;
        if (ammend) {
            navigation.navigate('exchangeScreenThree', { ammend: true });
        }
        else {
            navigation.navigate('exchangeScreenThree', { ammend: false });
        }
    }

    onClickEditAccountSelection = () => {
        const { navigation } = this.props;
        const { ammend } = this.state;
        if (ammend) {
            navigation.navigate('tAmmendComponent', { ammend: true });
        }
        else {
            navigation.navigate('exchangeScreenOne', { ammend: false });
        }
    }

    onClickEditSelectedFund = () => {
        const { navigation } = this.props;
        const { ammend } = this.state;
        if (ammend) {
            navigation.navigate('exchangeScreenTwo', { ammend: true });
        }
        else {
            navigation.navigate('exchangeScreenTwo', { ammend: false });
        }
    }

    onClickEditFundingSource = () => {
        const { navigation } = this.props;
        const { ammend } = this.state;
        if (ammend) {
            navigation.navigate('exchangeScreenThree', { ammend: true });
        }
        else {
            navigation.navigate('exchangeScreenThree', { ammend: false });
        }
    }

    onClickSave = () => {
        const { navigation, ammendActions } = this.props;
        const { ammend, ammendData, ammendIndex } = this.state;
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const updatedDate = `${date} / ${month} / ${year}`;
        const finalKey = menuList[menuList.length - 1].key + 1;

        if (ammend) {
            const pIndex = menuList.findIndex((item) => item.key === ammendIndex);
            const amndObj = menuList[pIndex];
            const transType = `Exchange Amended`;
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
                    "selectedAccountData": savedData.selectedAccountData,
                    "selectedFundData": savedData.selectedFundData,
                    "contribution": savedData.contribution,
                    
                }
            };
            menuList.splice(pIndex, 1, ammendPayloadData);
            ammendActions(menuList);
            // navigation.navigate('tAmmendComponent');
            navigation.navigate('tAmmendComponent',{ orderId : amndObj.title,transactionType:"Exchange",amend:true});
        }
        else {
            const orderId = `Order ID - EXC${year}${month}${date}${finalKey}`;
            const payloadData = {
                "key": finalKey,
                "title": orderId,
                "data": {
                    "count": 5,
                    "Dateadded": updatedDate,
                    "TransactionType": "Exchange",
                    "OrderStatus": "Pending",
                    "totalSHares": "",
                    "worth": "",
                    "selectedAccountData": savedData.selectedAccountData,
                    "selectedFundData": savedData.selectedFundData,
                      "contribution": savedData.contribution,
                    
                }
            };
            menuList.push(payloadData);
            ammendActions(menuList);
            navigation.navigate('tAmmendComponent', { orderId: orderId });
        }
    }

    formatAmount = (amount) => {
        const amt = parseInt(amount).toLocaleString();
        return amt;
    }

    render() {
        const { ammend } = this.state;
        const { exchangeData, navigation } = this.props;
        let currentPage = 4;
        let pageName = `${currentPage} - ${gblStrings.purchase.reviewAndConfrm}`;
        let totalCount = 4;
        if (ammend) {
            currentPage = 3;
            pageName = `${currentPage} - ${gblStrings.purchase.reviewAndConfrm}`;
            totalCount = 3;
        }

        if (this.props && exchangeData && exchangeData.saveExchangeSelectedData) {
            savedData = exchangeData.saveExchangeSelectedData;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.flexContainer}>
                        <Text style={styles.subHeading}>{gblStrings.liquidation.tradeType}</Text>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.tradeType}</Text>
                            <Text style={styles.greyText16px}>Exchange</Text>
                        </View>
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.liquidation.accountSelection}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditAccountSelection}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountName}</Text>
                            <Text style={styles.greyText16px}>{gblStrings.liquidation.accountName}{savedData.selectedAccountData.accountName}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                            <Text style={styles.greyText16px}>{savedData.selectedAccountData.accountNumber}</Text>
                        </View>

                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.accManagement.sellingFunds}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditSelectedFund}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />

                        <View style={styles.govtSecuritiesFund}>
                            <Text style={styles.blackTextBold22px}>{savedData.selectedFundData.funds[0].fundName}</Text>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Selling Amount</Text>
                                <Text style={styles.greyText16px}>{`$ ${this.formatAmount(savedData.selectedFundData.funds[0].sellingAmount)}`}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.accManagement.selectedMutualFunds}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditFundingSource}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />

                        <View style={styles.govtSecuritiesFund}>
                            <Text style={styles.blackTextBold22px}>{savedData.selectedFundData.fundName}</Text>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Initial Investment</Text>
                                <Text style={styles.greyText16px}>{`$ ${savedData.selectedFundData.initialInvestment}`}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Monthly Investment</Text>
                                <Text style={styles.greyText16px}>{`$ ${savedData.selectedFundData.monthlyInvestment}`}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Start Date</Text>
                                <Text style={styles.greyText16px}>{savedData.selectedFundData.startDate}</Text>
                            </View>
                        </View>

                     
                        {/* <View style={styles.govtSecuritiesFund}>

                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Estimated Fee</Text>
                                <Text style={styles.greyText16px}>{}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Estimated Net Trade Amount</Text>
                                <Text style={styles.greyText16px}>{}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Effective Date</Text>
                                <Text style={styles.greyText16px}>{}</Text>
                            </View>
                        </View> */}

                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>Dividents and Capital Gains Preferences </Text>
                            <Text style={styles.edit} onPress={this.onClickEditFundingSource}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} /> 
                         <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>Reinvest Earning,Income and capital Gains</Text>
                            {/* <Text style={styles.greyText16px}>{savedData.currentSecurities.reinvest ? "I want to Re-Invest" : "No I dont want to Re-Invest"}</Text> */}
                            <Text style={styles.greyText16px}>I want to Re-Invest</Text>
                         </View> 



                    </View>

                    {/* ----------------------------------- Button Fields -------------------------------- */}

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigatePurchasePageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigatePurchasePageThree}>
                            <Text style={styles.backButtonText}>{gblStrings.common.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitFlex} onPress={this.onClickSave}>
                            <Text style={styles.submitText}>{gblStrings.common.submit}</Text>
                        </TouchableOpacity>
                    </View>


                    { /* ----------- Disclaimer -------------------*/}

                    <GFooterSettingsComponent />

                </ScrollView>

            </View>

        );
    }
}


ExchangeScreenFourComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    exchangeData: PropTypes.instanceOf(Object),
    amendReducerData: PropTypes.instanceOf(Object),
    ammendActions: PropTypes.func
};

ExchangeScreenFourComponent.defaultProps = {
    navigation: {},
    exchangeData: {},
    amendReducerData: {},
    ammendActions: () => { }
};

export default ExchangeScreenFourComponent;