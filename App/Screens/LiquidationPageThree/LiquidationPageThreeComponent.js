import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent, GDropDownComponent, GSwitchComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';


let savedData = {};
let ammendData = {};
let ammendIndex = null;

const addAccount = require("../../Images/addaccount.png");
const checkOrder = require("../../Images/checkorder.png");

const bankAccounts = [
    { bankIcon: "", bankAccName: "Bank Account 1", bankAccountNo: "XXX-XXX-3838" },
    { bankIcon: "", bankAccName: "Bank Account 2", bankAccountNo: "XXX-XXX-5247", status: "To be verified" },
    { bankIcon: "", bankAccName: "Bank Account 1", bankAccountNo: "XXX-XXX-3839" },
];

const reqAmountTypeJson = [
    {
        key: '1',
        value: 'Before Taxes'
    },
    {
        key: '2',
        value: 'After Taxes'
    },
];

class LiquidationPageThreeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseFSIcon: "-   ",
            collpaseDAIcon: "-  ",
            collapseTAIcon: "-  ",
            collapseTWOIcon: "-   ",
            collapseFundSource: false,
            collapseDeliveryAddress: false,
            collapseTaxAccounting: false,
            collapseTaxWithHoldingOption: false,
            selectedBankAccountIndex: null,
            fundingSource: {
                selectedBankAccountNo: '',
                selectedBankAccountName: '',
                checkOrderSelected: false
            },
            taxAccountingMethodData: {
                requestedAmountType: 'Before Taxes',
                amountBeforeTaxes: '',
                amountAfterTaxes: '',
                federalTax: '',
                stateTax: '',
                totalTaxToBeWithhold: '',
                totalYouWillReceive: '',
                totalWithdrawal: '',
                stateTaxInDollars: '',
                federalTaxInDollars: '',
                taxHoldingOption: gblStrings.liquidation.withholdTaxes,
            },
            showMessageFlex: false,
            switchOff: true,
            switchOn: false,
            disableNextButton: true,
            ammend: false,
        };
    }

    componentDidMount() {
        const { liquidationInitialState } = this.props;
        console.log(" Screen 3 componentdidmount ", JSON.stringify(liquidationInitialState.saveLiquidationSelectedData));
        this.updateState();
    }

    updateState = () => {
        const { navigation } = this.props;
        const { getParam } = navigation;
        if (getParam('ammend')) {
            ammendData = getParam('data');
            ammendIndex = getParam('index');
            let selectedBankAccount = null;
            if (!ammendData.selectedFundWithdrawalData.checkSelectedOrder) {
                for (let i = 0; i < bankAccounts.length; i += 1) {
                    if (ammendData.selectedFundWithdrawalData.bankAccountNo === bankAccounts[i].bankAccountNo) {
                        selectedBankAccount = i;
                    }
                }

            }
            this.setState({
                ammend: true,
                taxAccountingMethodData: {
                    requestedAmountType: ammendData.selectedFundWithdrawalData.requestedAmountType,
                    amountBeforeTaxes: ammendData.selectedFundWithdrawalData.amountBeforeTaxes,
                    amountAfterTaxes: ammendData.selectedFundWithdrawalData.amountAfterTaxes,
                    federalTax: ammendData.selectedFundWithdrawalData.federalTaxInPerc,
                    stateTax: ammendData.selectedFundWithdrawalData.stateTaxInPerc,
                    totalTaxToBeWithhold: ammendData.selectedFundWithdrawalData.totalTaxToBeWithHold,
                    totalYouWillReceive: ammendData.selectedFundWithdrawalData.totalYouWillReceive,
                    totalWithdrawal: ammendData.selectedFundWithdrawalData.totalWithdrawal,
                    stateTaxInDollars: ammendData.selectedFundWithdrawalData.stateTaxInDollars,
                    federalTaxInDollars: ammendData.selectedFundWithdrawalData.federalTaxInDollars,
                    taxHoldingOption: ammendData.selectedFundWithdrawalData.taxWithHoldingOption,
                },
                fundingSource: {
                    selectedBankAccountNo: ammendData.selectedFundWithdrawalData.bankAccountNo,
                    selectedBankAccountName: ammendData.selectedFundWithdrawalData.bankAccountName,
                    checkOrderSelected: ammendData.selectedFundWithdrawalData.checkSelectedOrder
                },
                selectedBankAccountIndex: selectedBankAccount,
                showMessageFlex: false,
                disableNextButton: false

            });
        }
        else {
            this.setState({ ammend: false });
        }
    }

    formatAmount = (amount) => {
        if (this.isEmpty(amount)) {
            return "";
        }
        const amt = parseInt(amount).toLocaleString();
        return amt;
    }

    navigateBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
    }

    onClickExpandFundSource = () => {
        const { collapseFundSource } = this.state;
        this.setState(prevState => ({
            collapseFundSource: !prevState.collapseFundSource,
        }));
        if (collapseFundSource) {
            this.setState({ collapseFSIcon: "-   " });
        } else {
            this.setState({ collapseFSIcon: "+  " });
        }
    };

    onClickExpandDeliveryAddress = () => {
        const { collapseDeliveryAddress } = this.state;
        this.setState(prevState => ({
            collapseDeliveryAddress: !prevState.collapseDeliveryAddress,
        }));
        if (collapseDeliveryAddress) {
            this.setState({ collpaseDAIcon: "-   " });
        } else {
            this.setState({ collpaseDAIcon: "+  " });
        }
    }

    onClickExpandTaxAccounting = () => {
        const { collapseTaxAccounting } = this.state;
        this.setState(prevState => ({
            collapseTaxAccounting: !prevState.collapseTaxAccounting,
        }));
        if (collapseTaxAccounting) {
            this.setState({ collapseTAIcon: "-   " });
        } else {
            this.setState({ collapseTAIcon: "+  " });
        }
    };

    onClickExpandTaxWithHoldingOptions = () => {
        const { collapseTaxWithHoldingOption } = this.state;
        this.setState(prevState => ({
            collapseTaxWithHoldingOption: !prevState.collapseTaxWithHoldingOption,
        }));
        if (collapseTaxWithHoldingOption) {
            this.setState({ collapseTWOIcon: "-   " });
        } else {
            this.setState({ collapseTWOIcon: "+  " });
        }
    };

    addaccount = (props) => {
        return (

            <View style={[styles.selectedBankAccountFlex, props.flexStyle]} onTouchStart={props.onClickCheck}>
                <View style={styles.bankAccountFlex}>
                    <View style={styles.bankIconFlex}>
                        <Image style={styles.bankIconStyle}
                            resizeMode="contain"
                            source={props.Image}
                        />
                    </View>
                    <View style={styles.bankDetailsFlex}>
                        <Text style={styles.bankAccountName}>{props.accountName}</Text>
                    </View>
                </View>
            </View>

        );
    }

    onClickCheckOrder = () => {
        this.setState(prevState => ({
            fundingSource: {
                checkOrderSelected: !prevState.fundingSource.checkOrderSelected,
                selectedBankAccountNo: '',
                selectedBankAccountName: '',
            },
            selectedBankAccountIndex: null,
            disableNextButton: false

        }));
    }

    onSelectBankAccount = (item, index) => {
        this.setState({
            fundingSource: {
                selectedBankAccountNo: item.bankAccountNo,
                selectedBankAccountName: item.bankAccName,
                checkOrderSelected: false
            },
            selectedBankAccountIndex: index,
            showMessageFlex: item.status,
            disableNextButton: false
        });
    }

    onClickAddBankAccount = () => {
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate('bankAccount');
    }

    switchOnMethod = () => {
        const { switchOn } = this.state;
        this.setState(prevState => ({
            switchOff: !prevState.switchOff,
            switchOn: !prevState.switchOn,
        }));
        if (switchOn) {
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    taxHoldingOption: gblStrings.liquidation.withholdTaxes
                }
            }));
        } else {
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    taxHoldingOption: gblStrings.liquidation.doNotWithholdTaxes
                }
            }));
        }
    }


    selectedDropDownValue = (value) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                requestedAmountType: value,
                federalTax: '',
                stateTax: '',
                totalTaxToBeWithhold: '',
                totalYouWillReceive: '',
                totalWithdrawal: '',
                amountBeforeTaxes: '',
                amountAfterTaxes: '',
                stateTaxInDollars: '',
                federalTaxInDollars: ''
            },
        }));
    }

    onChangeAmountBeforeTaxes = (amount) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                amountBeforeTaxes: amount,
            }
        }));
    }

    onChangeAmountAfterTaxes = (amount) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                amountAfterTaxes: amount,
            }
        }));
    }

    onChangeFederalTax = (tax) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                federalTax: tax,
            }
        }));
    }

    onChangeStateTax = (tax) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                stateTax: tax,
            }
        }));
    }

    onSubmitEditingStateTax = () => {
        const { taxAccountingMethodData } = this.state;
        const statetax = taxAccountingMethodData.stateTax;
        const federaltax = taxAccountingMethodData.federalTax;
        let amount = 0;
        let totalTaxToBWithhold = 0;
        let stateTaxToDollars = 0;
        let federalTaxToDollars = 0;
        federalTaxToDollars = (((federaltax) / 100) * (amount));
        if (taxAccountingMethodData.requestedAmountType === "Before Taxes") {
            amount = taxAccountingMethodData.amountBeforeTaxes;
            stateTaxToDollars = (((statetax) / 100) * (amount));
            federalTaxToDollars = (((federaltax) / 100) * (amount));
            totalTaxToBWithhold = ((((statetax) / 100) * (amount)) + (((federaltax) / 100) * (amount)));
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    stateTaxInDollars: stateTaxToDollars,
                    federalTaxInDollars: federalTaxToDollars,
                    totalTaxToBeWithhold: totalTaxToBWithhold,
                    totalYouWillReceive: amount - totalTaxToBWithhold,
                    totalWithdrawal: amount
                }
            }));
        } else {
            amount = taxAccountingMethodData.amountAfterTaxes;
            stateTaxToDollars = (((statetax) / 100) * (amount));
            federalTaxToDollars = (((federaltax) / 100) * (amount));
            totalTaxToBWithhold = ((((statetax) / 100) * (amount)) + (((federaltax) / 100) * (amount)));
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    stateTaxInDollars: stateTaxToDollars,
                    federalTaxInDollars: federalTaxToDollars,
                    totalTaxToBeWithhold: totalTaxToBWithhold,
                    totalYouWillReceive: amount,
                    totalWithdrawal: parseInt(amount) + parseInt(totalTaxToBWithhold)
                }
            }));
        }
    }

    generatekeyBankAccNo = (a) => a.bankAccountNo;

    renderBankAccounts = ({ item, index }) => {
        const { selectedBankAccountIndex } = this.state;
        return (
            <View style={(selectedBankAccountIndex === index) ? styles.selectedBankAccountFlex : styles.unSelectedBankAccountFlex} onTouchStart={() => this.onSelectBankAccount(item, index)}>
                <View style={styles.bankAccountFlex}>
                    <View style={styles.bankIconFlex}>
                        <Image style={styles.bankIconStyle}
                            resizeMode="contain"
                            source={addAccount}
                        />
                    </View>
                    <View style={styles.bankDetailsFlex}>
                        <Text style={styles.bankAccountName}>{item.bankAccName}</Text>
                        <Text style={styles.bankAccountNo}>{item.bankAccountNo}</Text>
                        {item.status ? <Text style={styles.statusText}>{item.status}</Text> : null}
                    </View>
                </View>
            </View>
        );
    }

    navigateLiquidationPageOne = () => {
        const { ammend } = this.state;
        const { navigation } = this.props;
        const { navigate } = navigation;
        if (ammend) {
            navigate('tAmmendComponent', { ammend: true });
        }
        else {
            navigate('LiquidationPageOne', { ammend: false });
        }

    }

    navigateLiquidationPageTwo = () => {
        const { ammend } = this.state;
        const { navigation } = this.props;
        const { navigate } = navigation;
        if (ammend) {
            navigate('LiquidationPageTwo', { ammend: true });
        }
        else {
            navigate('LiquidationPageTwo', { ammend: false });
        }
    }

    navigateLiquidationPageFour = () => {
        const { ammend } = this.state;
        const { navigation } = this.props;
        const { navigate } = navigation;
        if (ammend) {
            navigate('LiquidationPageFour', { ammend: true });
        }
        else {
            navigate('LiquidationPageFour', { ammend: false });
        }
    }

    nextButtonAction = () => {
        const { fundingSource, taxAccountingMethodData, ammend } = this.state;
        const { saveData, navigation } = this.props;
        const { navigate } = navigation;
        let paymentMethod = "";
        if(fundingSource.checkOrderSelected){
            paymentMethod = "01";
        }else{
            paymentMethod = "05";
        }
        const payloadData = {
            saveLiquidationSelectedData: {
                ...savedData,
                "selectedFundWithdrawalData": {
                    "checkSelectedOrder": fundingSource.checkOrderSelected,
                    "bankAccountNo": fundingSource.selectedBankAccountNo,
                    "bankAccountName": fundingSource.selectedBankAccountName,
                    "taxWithHoldingOption": taxAccountingMethodData.taxHoldingOption,
                    "requestedAmountType": taxAccountingMethodData.requestedAmountType,
                    "PaymentMethod": paymentMethod,
                    "amountBeforeTaxes": taxAccountingMethodData.amountBeforeTaxes,
                    "amountAfterTaxes": taxAccountingMethodData.amountAfterTaxes,
                    "federalTaxInPerc": taxAccountingMethodData.federalTax,
                    "federalTaxInDollars": this.formatAmount(taxAccountingMethodData.federalTaxInDollars),
                    "stateTaxInPerc": taxAccountingMethodData.stateTax,
                    "stateTaxInDollars": this.formatAmount(taxAccountingMethodData.stateTaxInDollars),
                    "totalTaxToBeWithHold": this.formatAmount(taxAccountingMethodData.totalTaxToBeWithhold),
                    "totalYouWillReceive": this.formatAmount(taxAccountingMethodData.totalYouWillReceive),
                    "totalWithdrawal": this.formatAmount(taxAccountingMethodData.totalWithdrawal),
                },
            },
        };
        saveData(payloadData);
        if (ammend) {
            navigate('LiquidationPageFour', { ammend: true, data: ammendData, index: ammendIndex });
        }
        else {
            navigate('LiquidationPageFour', { ammend: false });
        }

    }

    render() {
        let currentPage = 3;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.fundWithdrawalHeading;
        const { ammend, collapseFSIcon, collapseTWOIcon, collapseFundSource, collapseTaxWithHoldingOption, disableNextButton, fundingSource, showMessageFlex, switchOff, switchOn, collapseTaxAccounting, collpaseDAIcon, collapseTAIcon, taxAccountingMethodData, collapseDeliveryAddress } = this.state;
        const { navigation, liquidationInitialState } = this.props;
        if (ammend) {
            currentPage = 2;
            pageName = '2 - Fund Withdrawl';
            totalCount = 3;
        }
        if (liquidationInitialState && liquidationInitialState.saveLiquidationSelectedData) {
            savedData = liquidationInitialState.saveLiquidationSelectedData;
        }
        let accType = "";
        if (ammend) {
            accType = ammendData.selectedAccountData.accountType;
        } else {
            accType = savedData.selectedAccountData.accountType;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <View style={styles.headerTextView}>
                        <Text style={styles.titleHeaderTextStyle}>{gblStrings.liquidation.liquidation}</Text>
                        <View style={styles.line} />
                    </View>
                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />

                    <View style={styles.flex2}>

                        <View style={styles.accountFlex}>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountName}{ammend ? ammendData.selectedAccountData.accountName : savedData.selectedAccountData.accountName}</Text>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountNumber}{ammend ? ammendData.selectedAccountData.accountNumber : savedData.selectedAccountData.accountNumber}</Text>
                        </View>

                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandFundSource}>
                            <Text style={styles.headerText}>{collapseFSIcon}</Text>
                            <Text style={styles.headerText}>{gblStrings.liquidation.fundSource}</Text>
                        </View>

                        <View style={styles.line} />
                    </View>

                    <Collapsible collapsed={collapseFundSource} align="center">
                        <View style={styles.flex2}>
                            <Text style={styles.fundSourceContent}>{gblStrings.liquidation.fundSourceContext}</Text>
                            <Text style={styles.subHeadingText}>{gblStrings.liquidation.offlineMethod}</Text>
                            <Text style={styles.offlineMethodContent}>{gblStrings.liquidation.offlineMethodContext}</Text>
                            <this.addaccount accountName="Check Order" Image={checkOrder} flexStyle={fundingSource.checkOrderSelected ? styles.selectedBankAccountFlex : styles.unSelectedBankAccountFlex} onClickCheck={this.onClickCheckOrder} />
                            <Text style={styles.or}>or</Text>
                            <Text style={styles.subHeadingText}>{gblStrings.liquidation.onlineMethod}</Text>
                            <FlatList
                                data={bankAccounts}
                                renderItem={this.renderBankAccounts}
                                keyExtractor={this.generatekeyBankAccNo}
                                extraData={this.state}
                            />

                            <this.addaccount accountName={gblStrings.accManagement.addBankAccount} Image={addAccount} flexStyle={styles.unSelectedBankAccountFlex} onClickCheck={this.onClickAddBankAccount} />
                        </View>
                    </Collapsible>
                    {
                        showMessageFlex ?
                            (
                                <View style={styles.messageFlex}>
                                    <Text style={styles.messageText}>Upon submission for your account’s security, you will receive a call momentarily to authenticate yourself.</Text>
                                </View>
                            ) : null
                    }
                    {/* -----------------------------Delivery Address starts here ------------------------*/}
                    {(fundingSource.checkOrderSelected) ? (
                        <View>
                            <View style={styles.flex2}>
                                <View style={styles.emptyFlex} />
                                <View style={styles.headerFlex} onTouchStart={this.onClickExpandDeliveryAddress}>
                                    <Text style={styles.headerText}>{collpaseDAIcon}</Text>
                                    <Text style={styles.headerText}>{gblStrings.liquidation.deliveryAddress}</Text>
                                </View>
                                <View style={styles.line} />
                            </View>
                            <Collapsible collapsed={collapseDeliveryAddress} align="center">
                                <View style={styles.flex2}>
                                    <View style={styles.flexGreyBG}>
                                        <Text style={styles.greyText14pxRegular}>If Mailing Address on file was changed within the last 14 days an additional validation with third party service is done.</Text>
                                    </View>
                                    <Text style={styles.cityHeading}>Address</Text>
                                    <GInputComponent
                                        propInputStyle={styles.addressBox}
                                        inputStyle={styles.inputStyle}
                                    />
                                    <GInputComponent
                                        propInputStyle={styles.addressBox}
                                        inputStyle={styles.inputStyle}
                                    />
                                    <Text style={styles.cityHeading}>ZIP Code</Text>
                                    <GInputComponent
                                        propInputStyle={styles.addressBox}
                                        inputStyle={styles.inputStyle}
                                    />
                                    <Text style={styles.cityHeading}>City & State</Text>
                                    <View style={styles.flexCityNState}>
                                        <GInputComponent
                                            propInputStyle={styles.city}
                                            inputStyle={styles.inputStyle}
                                        />
                                        <GInputComponent
                                            propInputStyle={styles.city}
                                            inputStyle={styles.inputStyle}
                                        />
                                    </View>
                                </View>
                            </Collapsible>
                        </View>
                    ) : null}

                    { /* -----------------------------Delivery Address ends here ------------------------*/}

                    { /* -----------------------------Tax Accounting Method starts here ------------------------*/}
                    <View style={styles.flex2}>
                        <View style={styles.emptyFlex} />
                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandTaxAccounting}>
                            <Text style={styles.headerText}>{collapseTAIcon}</Text>
                            <Text style={styles.headerText}>{gblStrings.liquidation.taxAccountingMethod}</Text>
                        </View>
                        <View style={styles.line} />
                    </View>

                    {!collapseTaxAccounting ?
                        (
                            <View>
                                <View style={styles.flex2}>
                                    <Text style={styles.fundSourceContent}>{gblStrings.liquidation.taxAccountingMethodContext}</Text>
                                    <Text style={styles.blackTextBold16}>{gblStrings.liquidation.currentMethod}</Text>
                                    <Text style={styles.greyTextRegular14px}>{gblStrings.liquidation.averageCostBasis}</Text>
                                </View>

                                {/* -----------------------------Tax Accounting Method ends here ------------------------*/}

                                {/* -----------------------------Tax Withholding Options starts here ------------------------*/}
                                {(accType === "IRA") ?
                                    (
                                        <View>
                                            <View style={styles.flex2}>
                                                <View style={styles.emptyFlex} />
                                                <View style={styles.headerFlex} onTouchStart={this.onClickExpandTaxWithHoldingOptions}>
                                                    <Text style={styles.headerText}>{collapseTWOIcon}</Text>
                                                    <Text style={styles.headerText}>{gblStrings.liquidation.taxWithHoldingOptions}</Text>
                                                </View>
                                                <View style={styles.line} />
                                            </View>

                                            {!collapseTaxWithHoldingOption ?
                                                (
                                                    <View>
                                                        <View style={styles.flex2}>
                                                            <Text style={styles.fundSourceContent}>{gblStrings.liquidation.taxWithHoldingOptionsContent}</Text>
                                                        </View>

                                                        { /* -----------------------------Tax Withholding Options ends here ------------------------*/}

                                                        <View style={styles.switchFlex}>
                                                            <GSwitchComponent
                                                                switchOffText={gblStrings.liquidation.doNotWithholdTaxes}
                                                                switchOnText={gblStrings.liquidation.withholdTaxes}
                                                                switchOff={switchOff}
                                                                switchOn={switchOn}
                                                                switchOnMethod={this.switchOnMethod}
                                                                switchOffMethod={this.switchOnMethod}
                                                                onStyle={styles.onButtonStyle}
                                                                offStyle={styles.offButtonStyle}
                                                                onStyleDisabled={styles.onButtonStyleDisable}
                                                                offStyleDisabled={styles.offButtonStyleDisable}
                                                                textOnStyle={styles.TextOnStyle}
                                                                textOffStyle={switchOff ? styles.TextOffStyle : styles.TextOffStyleWithholdtax}
                                                            />
                                                        </View>

                                                        {/* switch on view starts here */}
                                                        {switchOff ?
                                                            (
                                                                <View style={styles.flex2}>
                                                                    <GDropDownComponent
                                                                        dropDownLayout={styles.dropDownLayout}
                                                                        dropDownTextName={styles.blackTextBold16px}
                                                                        textInputStyle={styles.dropDownText}
                                                                        dropDownName={gblStrings.liquidation.isTheReqAmount}
                                                                        data={reqAmountTypeJson}
                                                                        dropDownValue={taxAccountingMethodData.requestedAmountType}
                                                                        selectedDropDownValue={this.selectedDropDownValue}
                                                                        dropDownPostition={{
                                                                            position: 'absolute', top: scaledHeight(80), width: "98%", marginLeft: "0%", paddingLeft: "4%", borderColor: "#DEDEDF",
                                                                            borderWidth: scaledHeight(1), zIndex: 3, backgroundColor: 'white'
                                                                        }}
                                                                    />

                                                                    {
                                                                        (taxAccountingMethodData.requestedAmountType === "Before Taxes") ?
                                                                            (
                                                                                <View style={styles.stateTaxFlex}>
                                                                                    <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.amountBeforeTaxes}</Text>
                                                                                    <View style={styles.totalWithdrawalFlex}>
                                                                                        <Text style={styles.dollarSkin}>$</Text>
                                                                                        <GInputComponent
                                                                                            propInputStyle={styles.amountBeforeTaxesVal}
                                                                                            inputStyle={styles.inputStyle}
                                                                                            value={taxAccountingMethodData.amountBeforeTaxes}
                                                                                            onChangeText={this.onChangeAmountBeforeTaxes}
                                                                                            maxLength={13}
                                                                                        />
                                                                                    </View>
                                                                                </View>
                                                                            ) :
                                                                            (
                                                                                <View style={styles.stateTaxFlex}>
                                                                                    <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.amountAfterTaxes}</Text>
                                                                                    <View style={styles.totalWithdrawalFlex}>
                                                                                        <Text style={styles.dollarSkin}>$</Text>
                                                                                        <GInputComponent
                                                                                            propInputStyle={styles.amountBeforeTaxesVal}
                                                                                            inputStyle={styles.inputStyle}
                                                                                            value={taxAccountingMethodData.amountAfterTaxes}
                                                                                            onChangeText={this.onChangeAmountAfterTaxes}
                                                                                            maxLength={13}
                                                                                        />
                                                                                    </View>
                                                                                </View>
                                                                            )
                                                                    }

                                                                    <View style={styles.stateTaxFlex}>
                                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.federalTax}</Text>
                                                                        <View style={styles.horizontalFlex}>
                                                                            <GInputComponent
                                                                                propInputStyle={styles.stateTaxInputStyle}
                                                                                inputStyle={styles.inputStyle}
                                                                                value={taxAccountingMethodData.federalTax}
                                                                                onChangeText={this.onChangeFederalTax}
                                                                                onSubmitEditing={this.onSubmitEditingStateTax}
                                                                                onBlur={this.onSubmitEditingStateTax}
                                                                                maxLength={3}
                                                                            />
                                                                            <View style={styles.stateTaxToDollarFlex}>
                                                                                <Text style={styles.dollarSkin}>$</Text>
                                                                                <Text style={styles.stateTaxToDollarText}>{this.formatAmount(taxAccountingMethodData.federalTaxInDollars)}</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>

                                                                    <View style={styles.stateTaxFlex}>
                                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.stateTax}</Text>
                                                                        <View style={styles.horizontalFlex}>
                                                                            <GInputComponent
                                                                                propInputStyle={styles.stateTaxInputStyle}
                                                                                inputStyle={styles.inputStyle}
                                                                                value={taxAccountingMethodData.stateTax}
                                                                                onChangeText={this.onChangeStateTax}
                                                                                onSubmitEditing={this.onSubmitEditingStateTax}
                                                                                onBlur={this.onSubmitEditingStateTax}
                                                                                maxLength={3}
                                                                            />
                                                                            <View style={styles.stateTaxToDollarFlex}>
                                                                                <Text style={styles.dollarSkin}>$</Text>
                                                                                <Text style={styles.stateTaxToDollarText}>{this.formatAmount(taxAccountingMethodData.stateTaxInDollars)}</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>

                                                                    <View style={styles.stateTaxFlex}>
                                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalTaxToBeWithhold}</Text>
                                                                        <View style={styles.totalWithdrawalFlex}>
                                                                            <Text style={styles.dollarSkin}>$</Text>
                                                                            <Text style={styles.totalWithdrawalVal}>{this.formatAmount(taxAccountingMethodData.totalTaxToBeWithhold)}</Text>
                                                                        </View>
                                                                    </View>

                                                                    <View style={styles.stateTaxFlex}>
                                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalYouWillReceive}</Text>
                                                                        <View style={styles.totalWithdrawalFlex}>
                                                                            <Text style={styles.dollarSkin}>$</Text>
                                                                            <Text style={styles.totalWithdrawalVal}>{this.formatAmount(taxAccountingMethodData.totalYouWillReceive)}</Text>
                                                                        </View>
                                                                    </View>

                                                                    <View style={styles.stateTaxFlex}>
                                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalWithdrawal}</Text>
                                                                        <View style={styles.totalWithdrawalFlex}>
                                                                            <Text style={styles.dollarSkin}>$</Text>
                                                                            <Text style={styles.totalWithdrawalVal}> {this.formatAmount(taxAccountingMethodData.totalWithdrawal)}</Text>
                                                                        </View>
                                                                    </View>

                                                                </View>
                                                            ) : null}

                                                        { /*  switch on view ends here */}

                                                    </View>
                                                ) : null}
                                        </View>
                                    ) : null}
                            </View>
                        )
                        : null}

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageTwo}>
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


LiquidationPageThreeComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    liquidationInitialState: PropTypes.instanceOf(Object),
    saveData: PropTypes.func,
};

LiquidationPageThreeComponent.defaultProps = {
    navigation: {},
    liquidationInitialState: {},
    saveData: () => { },
};
export default LiquidationPageThreeComponent;