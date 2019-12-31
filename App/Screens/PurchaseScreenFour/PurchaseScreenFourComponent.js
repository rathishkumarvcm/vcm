import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { PageNumber } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';


let savedData = {};
let menuList = [];

class PurchaseFourComponent extends Component {
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
        this.setState({
            ammend: this.props.navigation.getParam('ammend'),
            ammendData: this.props.navigation.getParam('data'),
            ammendIndex: this.props.navigation.getParam('index')
        });
        if (this.props && this.props.amendReducerData && this.props.amendReducerData.menu) {
            menuList = this.props.amendReducerData.menu;
        }
    }

    navigatePurchasePageOne = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('tAmmendComponent');
        }
        else {
            this.props.navigation.navigate('purchaseScreenOne');
        }
    }

    navigatePurchasePageThree = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('purchaseScreenThree', { ammend: true });
        }
        else {
            this.props.navigation.navigate('purchaseScreenThree', { ammend: false });
        }
    }

    onClickEditAccountSelection = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('tAmmendComponent', { ammend: true });
        }
        else {
            this.props.navigation.navigate('purchaseScreenOne', { ammend: false });
        }
    }

    onClickEditSelectedFund = () => {

        if (this.state.ammend) {
            this.props.navigation.navigate('purchaseScreenTwo', { ammend: true });
        }
        else {
            this.props.navigation.navigate('purchaseScreenTwo', { ammend: false });
        }
    }

    onClickEditFundingSource = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('purchaseScreenThree', { ammend: true });
        }
        else {
            this.props.navigation.navigate('purchaseScreenThree', { ammend: false });
        }
    }

    onClickSave = () => {

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const updatedDate = `${date} / ${month} / ${year}`;
        const finalKey = menuList[menuList.length - 1];

        if (this.state.ammend) {
            const pIndex = menuList.findIndex((item) => item.key === this.state.ammendIndex);
            const amndObj = menuList[pIndex];
            const transType = `${this.state.ammendData.TransactionType} Amended `;
            const ammendPayloadData = {
                "key": amndObj.key,
                "title": amndObj.title,
                "data": {
                    "count": this.state.ammendData.count,
                    "Dateadded": updatedDate,
                    "TransactionType": transType,
                    "OrderStatus": this.state.ammendData.OrderStatus,
                    "totalSHares": this.state.ammendData.totalSHares,
                    "worth": this.state.ammendData.worth,
                    "selectedAccountData": savedData.selectedAccountData,
                    "selectedFundData": savedData.selectedFundData,
                    "selectedFundSourceData": savedData.selectedFundSourceData,
                    "currentSecurities": savedData.currentSecurities,
                    "contribution": savedData.contribution,
                    "estimated": this.state.ammendData.estimated
                }
            };
            menuList.splice(pIndex, 1, ammendPayloadData);
            this.props.ammendActions(menuList);
            this.props.navigation.navigate('tAmmendComponent');
        }
        else {
            const orderId = `Order ID - PUR0${year}${month}${date}`;
            const payloadData = {
                "key": finalKey,
                "title": orderId,
                "data": {
                    "count": 5,
                    "Dateadded": updatedDate,
                    "TransactionType": "Purchase",
                    "OrderStatus": "Pending",
                    "totalSHares": "",
                    "worth": "",
                    "selectedAccountData": savedData.selectedAccountData,
                    "selectedFundData": savedData.selectedFundData,
                    "selectedFundSourceData": savedData.selectedFundSourceData,
                    "currentSecurities": savedData.currentSecurities,
                    "contribution": savedData.contribution,
                    "estimated": {}
                }
            };
            menuList.push(payloadData);
            this.props.ammendActions(menuList);
            this.props.navigation.navigate('purchaseFinish', { orderId: orderId });
        }
    }

    render() {
        let currentPage = 4;
        let pageName = `${currentPage} - ${gblStrings.purchase.reviewAndConfrm}`;
        let totalCount = 4;
        if (this.state.ammend) {
            currentPage = 3;
            pageName = `${currentPage} - ${gblStrings.purchase.reviewAndConfrm}`;
            totalCount = 3;
        }

        if (this.props.purchaseData && this.props.purchaseData.savePurchaseSelectedData) {
            savedData = this.props.purchaseData.savePurchaseSelectedData;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />
                    <View style={styles.flexContainer}>
                        <Text style={styles.subHeading}>{gblStrings.liquidation.tradeType}</Text>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.tradeType}</Text>
                            <Text style={styles.greyText16px}>Purchase</Text>
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
                            <Text style={styles.subHeading}>{gblStrings.accManagement.selectedMutualFunds}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditSelectedFund}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />

                        <View style={styles.govtSecuritiesFund}>
                            <Text style={styles.blackTextBold22px}>{savedData.selectedFundData.fundName}</Text>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Initial Investment</Text>
                                <Text style={styles.greyText16px}>{savedData.selectedFundData.initialInvestment}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Monthly Investment</Text>
                                <Text style={styles.greyText16px}>{savedData.selectedFundData.monthlyInvestment}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.greyTextBold16px}>Start Date</Text>
                                <Text style={styles.greyText16px}>{savedData.selectedFundData.startDate}</Text>
                            </View>
                        </View>

                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>Current Securities</Text>
                            <Text style={styles.edit} onPress={this.onClickEditFundingSource}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>Reinvest Earning,Income and capital Gains</Text>
                            <Text style={styles.greyText16px}>{savedData.currentSecurities.reinvest ? "I want to Re-Invest" : "No I dont want to Re-Invest"}</Text>
                        </View>
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>{gblStrings.accManagement.fundingSource}</Text>
                            <Text style={styles.edit} onPress={this.onClickEditFundingSource}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>{gblStrings.accManagement.fundingSource}</Text>
                            <Text style={styles.greyText16px}>{savedData.selectedFundSourceData.paymentMode}</Text>
                        </View>

                        {
                            (savedData.selectedFundSourceData.paymentMode === "Check" || "Wire Transfer") ?
                                <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.totalInvestment}</Text>
                                    <Text style={styles.greyText16px}>{savedData.selectedFundSourceData.totalInvestment}</Text>
                                </View> : <View style={styles.section}>
                                    <Text style={styles.greyTextBold16px}>{gblStrings.liquidation.accountNumber}</Text>
                                    <Text style={styles.greyText16px}>{savedData.selectedFundSourceData.bankAccountNumber}</Text>
                                </View>
                        }

                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>Contribution</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.section}>
                            <Text style={styles.greyTextBold16px}>Contribution for IRA account</Text>
                            <Text style={styles.greyText16px}>{savedData.contribution.contribution}</Text>
                        </View>
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.subHeading}>Estimated</Text>
                            <Text style={styles.edit} onPress={this.onClickEditSelectedFund}>{gblStrings.common.edit}</Text>
                        </View>
                        <View style={styles.line} />

                        <View style={styles.govtSecuritiesFund}>

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

                    {/* ----------------------------------- Footer View -------------------------------- */}

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


PurchaseFourComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    purchaseData: PropTypes.instanceOf(Object),
    amendReducerData: PropTypes.instanceOf(Object),
    ammendActions: PropTypes.func
};

PurchaseFourComponent.defaultProps = {
    navigation: {},
    purchaseData: {},
    amendReducerData: {},
    ammendActions: () => { }
};
export default PurchaseFourComponent;