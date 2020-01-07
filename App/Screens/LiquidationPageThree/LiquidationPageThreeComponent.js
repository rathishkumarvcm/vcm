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
        console.log(" Screen 3 componentdidmount " + JSON.stringify(this.props.liquidationInitialState.saveLiquidationSelectedData));
        this.updateState();
    }

    updateState = () => {
        if (this.props.navigation.getParam('ammend')) {
            ammendData = this.props.navigation.getParam('data');
            ammendIndex = this.props.navigation.getParam('index');
            let selectedBankAccount = null;
            if(!ammendData.selectedFundWithdrawalData.checkSelectedOrder){
                for(let i=0; i <bankAccounts.length; i+=1){
                    if(ammendData.selectedFundWithdrawalData.bankAccountNo === bankAccounts[i].bankAccountNo){
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

    navigateBack = () => this.props.navigation.goBack();

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
    }

    onClickExpandFundSource = () => {
        this.setState(prevState => ({
            collapseFundSource: !prevState.collapseFundSource,
        }));
        (this.state.collapseFundSource ? this.setState({ collapseFSIcon: "-   " }) : this.setState({ collapseFSIcon: "+  " }));
    };

    onClickExpandDeliveryAddress = () => {
        this.setState(prevState => ({
            collapseDeliveryAddress: !prevState.collapseDeliveryAddress,
        }));
        (this.state.collapseDeliveryAddress ? this.setState({ collpaseDAIcon: "-   " }) : this.setState({ collpaseDAIcon: "+  " }));
    }

    onClickExpandTaxAccounting = () => {
        this.setState(prevState => ({
            collapseTaxAccounting: !prevState.collapseTaxAccounting,
        }));
        (this.state.collapseTaxAccounting ? this.setState({ collapseTAIcon: "-   " }) : this.setState({ collapseTAIcon: "+  " }));
    };

    onClickExpandTaxWithHoldingOptions = () => {
        this.setState(prevState => ({
            collapseTaxWithHoldingOption: !prevState.collapseTaxWithHoldingOption,
        }));
        (this.state.collapseTaxWithHoldingOption ? this.setState({ collapseTWOIcon: "-   " }) : this.setState({ collapseTWOIcon: "+  " }));
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
        this.props.navigation.navigate('bankAccount');
    }

    switchOnMethod = () => {
        this.setState(prevState => ({
            switchOff: !prevState.switchOff,
            switchOn: !prevState.switchOn,
        }));
        this.state.switchOn ? this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                taxHoldingOption: gblStrings.liquidation.withholdTaxes
            }
        })) : this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                taxHoldingOption: gblStrings.liquidation.doNotWithholdTaxes
            }
        }));
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

    onSubmitEditingStateTax = (tax) => {
        const statetax = this.state.taxAccountingMethodData.stateTax;
        const federaltax = this.state.taxAccountingMethodData.federalTax;
        let amount = 0;
        let totalTaxToBWithhold = 0;
        let stateTaxToDollars = 0;
        let federalTaxToDollars = 0;
        federalTaxToDollars = (((federaltax) / 100) * (amount));
        if (this.state.taxAccountingMethodData.requestedAmountType === "Before Taxes") {
            amount = this.state.taxAccountingMethodData.amountBeforeTaxes;
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
            amount = this.state.taxAccountingMethodData.amountAfterTaxes;
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

    navigateLiquidationPageOne = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('tAmmendComponent', { ammend: true });
        }
        else {
            this.props.navigation.navigate('LiquidationPageOne', { ammend: false });
        }

    }

    navigateLiquidationPageTwo = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('LiquidationPageTwo', { ammend: true });
        }
        else {
            this.props.navigation.navigate('LiquidationPageTwo', { ammend: false });
        }
    }

    navigateLiquidationPageFour = () => {
        if (this.state.ammend) {
            this.props.navigation.navigate('LiquidationPageFour',{ ammend: true });
        }
        else {
            this.props.navigation.navigate('LiquidationPageFour',{ ammend: false });
        }
    }

    nextButtonAction = () => {
            const payloadData = {
                saveLiquidationSelectedData: {
                    ...savedData,
                    "selectedFundWithdrawalData": {
                        "checkSelectedOrder": this.state.fundingSource.checkOrderSelected,
                        "bankAccountNo": this.state.fundingSource.selectedBankAccountNo,
                        "bankAccountName": this.state.fundingSource.selectedBankAccountName,
                        "taxWithHoldingOption": this.state.taxAccountingMethodData.taxHoldingOption,
                        "requestedAmountType": this.state.taxAccountingMethodData.requestedAmountType,
                        "amountBeforeTaxes": this.state.taxAccountingMethodData.amountBeforeTaxes,
                        "amountAfterTaxes": this.state.taxAccountingMethodData.amountAfterTaxes,
                        "federalTaxInPerc": this.state.taxAccountingMethodData.federalTax,
                        "federalTaxInDollars": this.state.taxAccountingMethodData.federalTaxInDollars,
                        "stateTaxInPerc": this.state.taxAccountingMethodData.stateTax,
                        "stateTaxInDollars":this.state.taxAccountingMethodData.stateTaxInDollars,
                        "totalTaxToBeWithHold": this.state.taxAccountingMethodData.totalTaxToBeWithhold,
                        "totalYouWillReceive": this.state.taxAccountingMethodData.totalYouWillReceive,
                        "totalWithdrawal": this.state.taxAccountingMethodData.totalWithdrawal,
                    },
                },
            };
            this.props.saveData(payloadData);
            if (this.state.ammend) {
                this.props.navigation.navigate('LiquidationPageFour', { ammend: true, data: ammendData, index: ammendIndex });
            }
            else {
                this.props.navigation.navigate('LiquidationPageFour', { ammend: false });
            }

    }

    render() {
        let currentPage = 3;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.fundWithdrawalHeading;
        if (this.state.ammend) {
            currentPage = 2;
            pageName = '2 - Fund Withdrawl';
            totalCount = 3;
        }
        if (this.props.liquidationInitialState && this.props.liquidationInitialState.saveLiquidationSelectedData) {
            savedData = this.props.liquidationInitialState.saveLiquidationSelectedData;
        }
        let accType = "";
        if (this.state.ammend) {
            accType = ammendData.selectedAccountData.accountType;
        } else {
            accType = savedData.selectedAccountData.accountType;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>

                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount} />

                    <View style={styles.flex2}>

                        <View style={styles.accountFlex}>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountName}{this.state.ammend ? ammendData.selectedAccountData.accountName : savedData.selectedAccountData.accountName}</Text>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountNumber}{this.state.ammend ? ammendData.selectedAccountData.accountNumber : savedData.selectedAccountData.accountNumber}</Text>
                        </View>

                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandFundSource}>
                            <Text style={styles.headerText}>{this.state.collapseFSIcon}</Text>
                            <Text style={styles.headerText}>{gblStrings.liquidation.fundSource}</Text>
                        </View>

                        <View style={styles.line} />
                    </View>

                    <Collapsible collapsed={this.state.collapseFundSource} align="center">
                        <View style={styles.flex2}>
                            <Text style={styles.fundSourceContent}>{gblStrings.liquidation.fundSourceContext}</Text>
                            <Text style={styles.subHeadingText}>{gblStrings.liquidation.offlineMethod}</Text>
                            <Text style={styles.offlineMethodContent}>{gblStrings.liquidation.offlineMethodContext}</Text>
                            <this.addaccount accountName="Check Order" Image={require("../../Images/checkorder.png")} flexStyle={this.state.fundingSource.checkOrderSelected ? styles.selectedBankAccountFlex : styles.unSelectedBankAccountFlex} onClickCheck={this.onClickCheckOrder} />
                            <Text style={styles.or}>or</Text>
                            <Text style={styles.subHeadingText}>{gblStrings.liquidation.onlineMethod}</Text>
                            <FlatList
                                data={bankAccounts}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={(this.state.selectedBankAccountIndex === index) ? styles.selectedBankAccountFlex : styles.unSelectedBankAccountFlex} onTouchStart={() => this.onSelectBankAccount(item, index)}>
                                            <View style={styles.bankAccountFlex}>
                                                <View style={styles.bankIconFlex}>
                                                    <Image style={styles.bankIconStyle}
                                                        resizeMode="contain"
                                                        source={require("../../Images/addaccount.png")}
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
                                }}
                                keyExtractor={a => a.bankAccountNo}
                                extraData={this.state}
                            />

                            <this.addaccount accountName={gblStrings.accManagement.addBankAccount} Image={require("../../Images/addaccount.png")} flexStyle={styles.unSelectedBankAccountFlex} onClickCheck={this.onClickAddBankAccount} />
                        </View>
                    </Collapsible>
                    {
                        this.state.showMessageFlex ?
                            <View style={styles.messageFlex}>
                                <Text style={styles.messageText}>Upon submission for your account’s security, you will receive a call momentarily to authenticate yourself.</Text>
                            </View> : null
                    }
                    {/* -----------------------------Delivery Address starts here ------------------------*/}
                    {(this.state.fundingSource.checkOrderSelected) ? (
                        <View>
                            <View style={styles.flex2}>
                                <View style={styles.emptyFlex} />
                                <View style={styles.headerFlex} onTouchStart={this.onClickExpandDeliveryAddress}>
                                    <Text style={styles.headerText}>{this.state.collpaseDAIcon}</Text>
                                    <Text style={styles.headerText}>{gblStrings.liquidation.deliveryAddress}</Text>
                                </View>
                                <View style={styles.line} />
                            </View>
                            <Collapsible collapsed={this.state.collapseDeliveryAddress} align="center">
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
                            <Text style={styles.headerText}>{this.state.collapseTAIcon}</Text>
                            <Text style={styles.headerText}>{gblStrings.liquidation.taxAccountingMethod}</Text>
                        </View>
                        <View style={styles.line} />
                    </View>

                    {!this.state.collapseTaxAccounting ?
                        <View>
                            <View style={styles.flex2}>
                                <Text style={styles.fundSourceContent}>{gblStrings.liquidation.taxAccountingMethodContext}</Text>
                            </View>

                            {/* -----------------------------Tax Accounting Method ends here ------------------------*/}

                            {/* -----------------------------Tax Withholding Options starts here ------------------------*/}
                            {(accType === "IRA") ?
                                <View>
                                    <View style={styles.flex2}>
                                        <View style={styles.emptyFlex} />
                                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandTaxWithHoldingOptions}>
                                            <Text style={styles.headerText}>{this.state.collapseTWOIcon}</Text>
                                            <Text style={styles.headerText}>{gblStrings.liquidation.taxWithHoldingOptions}</Text>
                                        </View>
                                        <View style={styles.line} />
                                    </View>

                                    {!this.state.collapseTaxWithHoldingOption ?
                                        <View>
                                            <View style={styles.flex2}>
                                                <Text style={styles.fundSourceContent}>{gblStrings.liquidation.taxWithHoldingOptionsContent}</Text>
                                            </View>

                                            { /* -----------------------------Tax Withholding Options ends here ------------------------*/}

                                            <View style={styles.switchFlex}>
                                                <GSwitchComponent
                                                    switchOffText={gblStrings.liquidation.doNotWithholdTaxes}
                                                    switchOnText={gblStrings.liquidation.withholdTaxes}
                                                    switchOff={this.state.switchOff}
                                                    switchOn={this.state.switchOn}
                                                    switchOnMethod={this.switchOnMethod}
                                                    switchOffMethod={this.switchOnMethod}
                                                    onStyle={styles.onButtonStyle}
                                                    offStyle={styles.offButtonStyle}
                                                    onStyleDisabled={styles.onButtonStyleDisable}
                                                    offStyleDisabled={styles.offButtonStyleDisable}
                                                    textOnStyle={styles.TextOnStyle}
                                                    textOffStyle={this.state.switchOff ? styles.TextOffStyle : styles.TextOffStyleWithholdtax}
                                                />
                                            </View>

                                            {/* switch on view starts here */}
                                            {this.state.switchOff ?
                                                <View style={styles.flex2}>
                                                    <GDropDownComponent
                                                        dropDownLayout={styles.dropDownLayout}
                                                        dropDownTextName={styles.blackTextBold16px}
                                                        textInputStyle={styles.dropDownText}
                                                        dropDownName={gblStrings.liquidation.isTheReqAmount}
                                                        data={reqAmountTypeJson}
                                                        dropDownValue={this.state.taxAccountingMethodData.requestedAmountType}
                                                        selectedDropDownValue={this.selectedDropDownValue}
                                                        dropDownPostition={{
                                                            position: 'absolute', top: scaledHeight(80), width: "98%", marginLeft: "0%", paddingLeft: "4%", borderColor: "#DEDEDF",
                                                            borderWidth: scaledHeight(1), zIndex: 3, backgroundColor: 'white'
                                                        }}
                                                    />

                                                    {
                                                        (this.state.taxAccountingMethodData.requestedAmountType === "Before Taxes") ?
                                                            <View style={styles.stateTaxFlex}>
                                                                <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.amountBeforeTaxes}</Text>
                                                                <View style={styles.totalWithdrawalFlex}>
                                                                    <Text style={styles.dollarSkin}>$</Text>
                                                                    <GInputComponent
                                                                        propInputStyle={styles.amountBeforeTaxesVal}
                                                                        inputStyle={styles.inputStyle}
                                                                        value={this.state.taxAccountingMethodData.amountBeforeTaxes}
                                                                        onChangeText={this.onChangeAmountBeforeTaxes}
                                                                        maxLength={13}
                                                                    />
                                                                </View>
                                                            </View> :
                                                            <View style={styles.stateTaxFlex}>
                                                                <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.amountAfterTaxes}</Text>
                                                                <View style={styles.totalWithdrawalFlex}>
                                                                    <Text style={styles.dollarSkin}>$</Text>
                                                                    <GInputComponent
                                                                        propInputStyle={styles.amountBeforeTaxesVal}
                                                                        inputStyle={styles.inputStyle}
                                                                        value={this.state.taxAccountingMethodData.amountAfterTaxes}
                                                                        onChangeText={this.onChangeAmountAfterTaxes}
                                                                        maxLength={13}
                                                                    />
                                                                </View>
                                                            </View>
                                                    }

                                                    <View style={styles.stateTaxFlex}>
                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.federalTax}</Text>
                                                        <View style={styles.horizontalFlex}>
                                                            <GInputComponent
                                                                propInputStyle={styles.stateTaxInputStyle}
                                                                inputStyle={styles.inputStyle}
                                                                value={this.state.taxAccountingMethodData.federalTax}
                                                                onChangeText={this.onChangeFederalTax}
                                                                onSubmitEditing={this.onSubmitEditingStateTax}
                                                                onBlur={this.onSubmitEditingStateTax}
                                                                maxLength={3}
                                                            />
                                                            <View style={styles.stateTaxToDollarFlex}>
                                                                <Text style={styles.dollarSkin}>$</Text>
                                                                <Text style={styles.stateTaxToDollarText}>{this.formatAmount(this.state.taxAccountingMethodData.federalTaxInDollars)}</Text>
                                                            </View>
                                                        </View>
                                                    </View>

                                                    <View style={styles.stateTaxFlex}>
                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.stateTax}</Text>
                                                        <View style={styles.horizontalFlex}>
                                                            <GInputComponent
                                                                propInputStyle={styles.stateTaxInputStyle}
                                                                inputStyle={styles.inputStyle}
                                                                value={this.state.taxAccountingMethodData.stateTax}
                                                                onChangeText={this.onChangeStateTax}
                                                                onSubmitEditing={this.onSubmitEditingStateTax}
                                                                onBlur={this.onSubmitEditingStateTax}
                                                                maxLength={3}
                                                            />
                                                            <View style={styles.stateTaxToDollarFlex}>
                                                                <Text style={styles.dollarSkin}>$</Text>
                                                                <Text style={styles.stateTaxToDollarText}>{this.formatAmount(this.state.taxAccountingMethodData.stateTaxInDollars)}</Text>
                                                            </View>
                                                        </View>
                                                    </View>

                                                    <View style={styles.stateTaxFlex}>
                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalTaxToBeWithhold}</Text>
                                                        <View style={styles.totalWithdrawalFlex}>
                                                            <Text style={styles.dollarSkin}>$</Text>
                                                            <Text style={styles.totalWithdrawalVal}>{this.formatAmount(this.state.taxAccountingMethodData.totalTaxToBeWithhold)}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={styles.stateTaxFlex}>
                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalYouWillReceive}</Text>
                                                        <View style={styles.totalWithdrawalFlex}>
                                                            <Text style={styles.dollarSkin}>$</Text>
                                                            <Text style={styles.totalWithdrawalVal}>{this.formatAmount(this.state.taxAccountingMethodData.totalYouWillReceive)}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={styles.stateTaxFlex}>
                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalWithdrawal}</Text>
                                                        <View style={styles.totalWithdrawalFlex}>
                                                            <Text style={styles.dollarSkin}>$</Text>
                                                            <Text style={styles.totalWithdrawalVal}> {this.formatAmount(this.state.taxAccountingMethodData.totalWithdrawal)}</Text>
                                                        </View>
                                                    </View>

                                                </View> : null}


                                            { /*  switch on view ends here */}



                                        </View> : null}
                                </View> : null}
                        </View> : null}



                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageTwo}>
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