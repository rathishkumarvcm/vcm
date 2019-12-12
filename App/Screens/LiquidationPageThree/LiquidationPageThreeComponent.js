import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent, GDropDownComponent, GSwitchComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import { scaledHeight } from '../../Utils/Resolution';

const reqAmountTypeJson = [
    {
        id: '1',
        title: 'Before Taxes'
    },
    {
        id: '2',
        title: 'After Taxes'
    },
];

class LiquidationPageThreeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOff: true,
            switchOn: false,
            collapseFundSource: false,
            collapseTaxAccounting: false,
            collapseDeliveryAddress: false,
            collapseFSIcon: "-  ",
            collapseTAIcon: "-  ",
            collpaseDAIcon: "-   ",
            showDropDown: false,
            selectedBankAccount: 0,
            checkOrder: false,
            bankAccounts: [
                { bankIcon: "", bankAccName: "Bank Account 1", bankAccountNo: "XXX-XXX-3838" },
                { bankIcon: "", bankAccName: "Bank Account 2", bankAccountNo: "XXX-XXX-5247" },
                { bankIcon: "", bankAccName: "Bank Account 1", bankAccountNo: "XXX-XXX-3839" },
            ],
            taxAccountingMethodData: {
                requestedAmountType: 'Before Taxes',
                amountBeforeTaxes: '',
                amountAfterTaxes: '',
                federalTax: '',
                stateTax: '',
                totalTaxToBeWithhold: '',
                totalYouWillReceive: '',
                totalWithdrawal: '',
                stateTaxInDollars:'',
                federalTaxInDollars:''
            },
            fundingSource: {
                selectedBankAccountNo: 'XXX-XXX-3838',
                selectedBankAccountName: 'Bank Account 1'
            },
        };
        this.totalTaxToBeWithhold = "";
    }

    selectTheQuestion = () => {
        this.setState({
            showDropDown: !this.state.showDropDown
        });
    }

    selectedDropDownValue = (value) => {
        console.log("value--->" + JSON.stringify(value));
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                requestedAmountType: value.title,
                federalTax: '',
                stateTax: '',
                totalTaxToBeWithhold: '',
                totalYouWillReceive: '',
                totalWithdrawal: '',
                amountBeforeTaxes: '',
                amountAfterTaxes: '',
            },
            showDropDown: false
        }));
    }

    onChangeAmountBeforeTaxes = (amount) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                amountBeforeTaxes: amount,
            }
        }))
    }

    onChangeAmountAfterTaxes = (amount) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                amountAfterTaxes: amount,
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
    onChangeFederalTax = (tax) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                federalTax: tax,
            }
        }));
    }
    onSubmitEditingStateTax = (tax) => {
        var statetax = this.state.taxAccountingMethodData.stateTax;
        var federaltax = this.state.taxAccountingMethodData.federalTax;
        var amount = 0;
        var totalTaxToBWithhold = 0;
        var stateTaxToDollars = 0;
        var federalTaxToDollars = 0;
        federalTaxToDollars = (((federaltax) / 100) * (amount));
        if (this.state.taxAccountingMethodData.requestedAmountType == "Before Taxes") {
            amount = this.state.taxAccountingMethodData.amountBeforeTaxes;
            stateTaxToDollars = (((statetax) / 100) * (amount));
            federalTaxToDollars = (((federaltax) / 100) * (amount));
            totalTaxToBWithhold = ((((statetax) / 100) * (amount)) + (((federaltax) / 100) * (amount)));
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    stateTaxInDollars:stateTaxToDollars,
                    federalTaxInDollars:federalTaxToDollars,
                    totalTaxToBeWithhold: totalTaxToBWithhold,
                    totalYouWillReceive: amount - totalTaxToBWithhold,
                    totalWithdrawal: amount
                }
            }))
        } else {
            amount = this.state.taxAccountingMethodData.amountAfterTaxes;
            stateTaxToDollars = (((statetax) / 100) * (amount));
            federalTaxToDollars = (((federaltax) / 100) * (amount));
            totalTaxToBWithhold = ((((statetax) / 100) * (amount)) + (((federaltax) / 100) * (amount)));
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    stateTaxInDollars:stateTaxToDollars,
                    federalTaxInDollars:federalTaxToDollars,
                    totalTaxToBeWithhold: totalTaxToBWithhold,
                    totalYouWillReceive: amount,
                    totalWithdrawal: parseInt(amount) + parseInt(totalTaxToBWithhold)
                }
            }))
        }

    }
    onSubmitEditingFederalTax = (tax) => {

    }

    onSelectBankAccount = (item, index) => {
        console.log("index" + index + " item:: " + JSON.stringify(item));
        this.setState({
            fundingSource: {
                selectedBankAccountNo: item.bankAccountNo,
                selectedBankAccountName: item.bankAccName
            },
            selectedBankAccount: index
        });
    }


    switchOnMethod = () => {
        this.setState({
            switchOff: !this.state.switchOff,
            switchOn: !this.state.switchOn,
        });
    }

    onClickExpandFundSource = () => {
        this.setState({ collapseFundSource: !this.state.collapseFundSource });
        (this.state.collapseFundSource ? this.setState({ collapseFSIcon: "-   " }) : this.setState({ collapseFSIcon: "+  " }))
    };

    onClickExpandTaxAccounting = () => {
        this.setState({ collapseTaxAccounting: !this.state.collapseTaxAccounting });
        (this.state.collapseTaxAccounting ? this.setState({ collapseTAIcon: "-   " }) : this.setState({ collapseTAIcon: "+  " }))
    };

    onClickExpandDeliveryAddress = () => {
        this.setState({ collapseDeliveryAddress: !this.state.collapseDeliveryAddress });
        (this.state.collapseDeliveryAddress ? this.setState({ collpaseDAIcon: "-   " }) : this.setState({ collpaseDAIcon: "+  " }))
    }

    addaccount = (props) => {
        return (
            <View style={[styles.bankAccountFlex, props.flexStyle]} onTouchStart={props.onClickCheck}>
                <View style={styles.bankIconFlex}>
                    <Image style={styles.bankIconStyle}
                        resizeMode="contain"
                        source={props.Image}
                    />
                </View>
                <View style={styles.bankDetailsFlex}>
                    <Text style={styles.bankAccountName}>{props.accountName}</Text>
                    {props.accountNo ? <Text style={styles.bankAccountNo}>{props.accountNo}</Text> : null}
                </View>
            </View>
        )
    }

    onCheckOrder = () => {
        this.setState({
            checkOrder: !this.state.checkOrder
        })
    }

    navigateLiquidationPageOne = () => this.props.navigation.navigate('LiquidationPageOne');
    navigateLiquidationPageTwo = () => this.props.navigation.navigate('LiquidationPageTwo');
    navigateLiquidationPageFour = () => this.props.navigation.navigate('LiquidationPageFour', { taxAccountingMethodData: this.state.taxAccountingMethodData, fundingSource: this.state.fundingSource });

    render() {
        console.log("stateTax : " + this.state.taxAccountingMethodData.stateTax);
        console.log("federalTax : " + this.state.taxAccountingMethodData.federalTax);
        console.log("amountBeforeTaxes : " + this.state.taxAccountingMethodData.amountBeforeTaxes);
        console.log("totalTaxToBeWithhold :" + this.state.taxAccountingMethodData.totalTaxToBeWithhold);
        let currentPage = 3;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.fundWithdrawalHeading;
        return (
            <View style={styles.container} >
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

                    <PageNumber currentPage={currentPage} pageName={pageName} totalCount={totalCount}/>
                    <View style={styles.flex2}>
                        <View style={styles.accountFlex}>
                            <Text style={styles.accountNumberText}>Account Name 1</Text>
                            <Text style={styles.accountNumberText}>Account Number xxx-xxx-xxxx</Text>
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
                        </View>
                        <View style={styles.offlineMethodFlex}>
                            <Text style={styles.subHeadingText}>{gblStrings.liquidation.offlineMethod}</Text>
                            <Text style={styles.offlineMethodContent}>{gblStrings.liquidation.offlineMethodContext}</Text>
                            <this.addaccount accountName="Check Order" Image={require("../../Images/checkorder.png")} flexStyle={this.state.checkOrder ? styles.selectedBankAccountFlex : styles.bankAccountFlex} onClickCheck={this.onCheckOrder} />
                        </View>


                        <Text style={styles.or}>or</Text>


                        <View style={styles.offlineMethodFlex}>
                            <Text style={styles.subHeadingText}>{gblStrings.liquidation.onlineMethod}</Text>
                            <FlatList
                                data={this.state.bankAccounts}
                                renderItem={({ item, index }) => {
                                    console.log("index--> " + index + "  this.state.selectedBankAccount----> " + this.state.selectedBankAccount);
                                    return (
                                        <View style={(this.state.selectedBankAccount == index) ? styles.selectedBankAccountFlex : styles.bankAccountFlex} onTouchStart={() => this.onSelectBankAccount(item, index)}>
                                            <View style={styles.bankIconFlex}>
                                                <Image style={styles.bankIconStyle}
                                                    resizeMode="contain"
                                                    source={require("../../Images/addaccount.png")}
                                                />
                                            </View>
                                            <View style={styles.bankDetailsFlex}>
                                                <Text style={styles.bankAccountName}>{item.bankAccName}</Text>
                                                <Text style={styles.bankAccountNo}>{item.bankAccountNo}</Text>
                                            </View>
                                        </View>
                                    )
                                }}
                                keyExtractor={a => a.bankAccountNo}
                                extraData = {this.state}
                            />
                        </View>

                    </Collapsible>
                    {
                        this.state.checkOrder ? <View style={styles.messageFlex}>
                            <Text style={styles.messageText}>
                                For your account’s security, you will receive a call momentarily to authenticate yourself.
    </Text>

                        </View> : null
                    }



                    <View style={this.state.collapseTaxAccounting ? styles.flexTaxAccounting : null}>
                        <View style={this.state.switchOff ? styles.flex4 : styles.flex4Hide}>
                            <View style={styles.headerFlex} onTouchStart={this.onClickExpandTaxAccounting}>
                                <Text style={styles.headerText}>{this.state.collapseTAIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.taxAccountingMethod}</Text>
                            </View>
                            {!this.state.collapseTaxAccounting ?
                                <View>
                                    <View style={styles.flex4a}>
                                        <View style={styles.line} />
                                        <Text style={styles.fundSourceContent}>{gblStrings.liquidation.taxAccountingMethodContext}</Text>
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
                                    </View>
                                    {/* switch on view starts here*/}

                                    {this.state.switchOff ?
                                        <View style={styles.flex4b} >

                                            <View style={{ marginTop: scaledHeight(26) }}>
                                                <GDropDownComponent
                                                    dropDownTextName={styles.blackTextBold16px}
                                                    dropDownLayout={styles.dropDownLayout}
                                                    textInputStyle={{ width: "98%", paddingLeft: "2%", marginLeft: "0%" }}
                                                    dropDownName={gblStrings.liquidation.isTheReqAmount}
                                                    data={reqAmountTypeJson}
                                                    itemToDisplay={"title"}
                                                    changeState={this.selectTheQuestion}
                                                    showDropDown={this.state.showDropDown}
                                                    dropDownValue={this.state.taxAccountingMethodData.requestedAmountType}
                                                    selectedDropDownValue={this.selectedDropDownValue}
                                                    dropDownPostition={{
                                                        position: 'absolute', top: scaledHeight(80), width: "98%", marginLeft: "0%", paddingLeft: "4%", borderColor: "#DEDEDF",
                                                        borderWidth: scaledHeight(1), zIndex: 3, backgroundColor: 'white'
                                                    }}
                                                />
                                            </View>


                                            {
                                                (this.state.taxAccountingMethodData.requestedAmountType == "Before Taxes") ?
                                                    <View style={styles.stateTaxFlex}>
                                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.amountBeforeTaxes}</Text>
                                                        <View style={styles.totalWithdrawalFlex}>
                                                            <Text style={styles.dollarSkin}>$</Text>
                                                            <GInputComponent
                                                                propInputStyle={styles.amountBeforeTaxesVal}
                                                                inputStyle={styles.inputStyle}
                                                                value={this.state.taxAccountingMethodData.amountBeforeTaxes}
                                                                onChangeText={this.onChangeAmountBeforeTaxes}
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
                                                                onChangeText={this.onChangeAmountAfterTaxes} />
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
                                                        onBlur = {this.onSubmitEditingStateTax}
                                                    />
                                                    <View style={styles.stateTaxToDollarFlex}>
                                                        <Text style={styles.dollarSkin}>$</Text>
                                                        <Text style={styles.stateTaxToDollarText}>{this.state.taxAccountingMethodData.federalTaxInDollars}</Text>
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
                                                    onBlur = {this.onSubmitEditingStateTax} />
                                                    <View style={styles.stateTaxToDollarFlex}>
                                                        <Text style={styles.dollarSkin}>$</Text>
                                                        <Text style={styles.stateTaxToDollarText}>{this.state.taxAccountingMethodData.stateTaxInDollars}</Text>
                                                    </View>
                                                    </View>
                                            </View>

                                            <View style={styles.stateTaxFlex}>
                                                <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalTaxToBeWithhold}</Text>
                                                <View style={styles.totalWithdrawalFlex}>
                                                    <Text style={styles.dollarSkin}>$</Text>
                                                    <Text style={styles.totalWithdrawalVal}>{this.state.taxAccountingMethodData.totalTaxToBeWithhold}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.stateTaxFlex}>
                                                <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalYouWillReceive}</Text>
                                                <View style={styles.totalWithdrawalFlex}>
                                                    <Text style={styles.dollarSkin}>$</Text>
                                                    <Text style={styles.totalWithdrawalVal}>{this.state.taxAccountingMethodData.totalYouWillReceive}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.stateTaxFlex}>
                                                <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.totalWithdrawal}</Text>
                                                <View style={styles.totalWithdrawalFlex}>
                                                    <Text style={styles.dollarSkin}>$</Text>
                                                    <Text style={styles.totalWithdrawalVal}> {this.state.taxAccountingMethodData.totalWithdrawal}</Text>
                                                </View>
                                            </View>

                                        </View>
                                        :
                                        null}
                                    {/* switch on view ends here */}

                                </View> : null}


                        </View>

                    </View>



                    <View style={styles.flex5}>
                        <View style={styles.headerFlex} onTouchStart={this.onClickExpandDeliveryAddress}>
                            <Text style={styles.headerText}>{this.state.collpaseDAIcon}</Text>
                            <Text style={styles.headerText}>Delivery Address</Text>
                        </View>
                        <View style={styles.line} />
                        <Collapsible collapsed={this.state.collapseDeliveryAddress} align="center">
                            <View style={styles.flexGreyBG}>
                                <Text style={styles.greyText14pxRegular}>If Mailing Address on file was changed within the last 14 days an additional validation with third party service is done.</Text>
                            </View>
                            <Text style={styles.cityHeading}>Address</Text>
                            <GInputComponent
                                propInputStyle={styles.addressBox}
                                inputStyle={styles.inputStyle} />
                            <GInputComponent
                                propInputStyle={styles.addressBox}
                                inputStyle={styles.inputStyle} />
                            <Text style={styles.cityHeading}>ZIP Code</Text>
                            <GInputComponent
                                propInputStyle={styles.addressBox}
                                inputStyle={styles.inputStyle} />
                            <Text style={styles.cityHeading}>City & State</Text>
                            <View style={styles.flexCityNState}>
                                <GInputComponent
                                    propInputStyle={styles.city}
                                    inputStyle={styles.inputStyle} />
                                <GInputComponent
                                    propInputStyle={styles.city}
                                    inputStyle={styles.inputStyle} />
                            </View>
                        </Collapsible>
                    </View>



                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageTwo}>
                            <Text style={styles.backButtonText}>{gblStrings.common.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitFlex} onPress={this.navigateLiquidationPageFour}>
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
    navigation: PropTypes.instanceOf(Object)
};

LiquidationPageThreeComponent.defaultProps = {

};
export default LiquidationPageThreeComponent;