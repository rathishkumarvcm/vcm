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
        title: 'Before Taxes',
    },
    {
        id: '2',
        title: 'After Taxes',
    },
];


class LiquidationPageThreeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOff: false,
            switchOn: true,
            collapseFundSource: false,
            collapseTaxAccounting: false,
            collapseFSIcon: "-  ",
            collapseTAIcon: "-  ",
            showDropDown: false,
            selectedBankAccount: 0,
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
                totalWithdrawal: ''
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
        }))
    }

    onChangeStateTax = (tax) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                stateTax: tax,
            }
        }))
    }
    onChangeFederalTax = (tax) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                federalTax: tax,
            }
        }))
    }
    onSubmitEditingStateTax = (tax) => {
        var statetax = this.state.taxAccountingMethodData.stateTax;
        var federaltax = this.state.taxAccountingMethodData.federalTax;
        var amount = 0;
        var totalTaxToBWithhold = 0;
        if (this.state.taxAccountingMethodData.requestedAmountType == "Before Taxes") {
            amount = this.state.taxAccountingMethodData.amountBeforeTaxes;
            totalTaxToBWithhold = ((((statetax) / 100) * (amount)) + (((federaltax) / 100) * (amount)));
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    totalTaxToBeWithhold: totalTaxToBWithhold,
                    totalYouWillReceive: amount - totalTaxToBWithhold,
                    totalWithdrawal: amount
                }
            }))
        } else {
            amount = this.state.taxAccountingMethodData.amountAfterTaxes;
            totalTaxToBWithhold = ((((statetax) / 100) * (amount)) + (((federaltax) / 100) * (amount)));
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
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
        })
    }

    onClickExpandFundSource = () => {
        this.setState({ collapseFundSource: !this.state.collapseFundSource });
        (this.state.collapseFundSource ? this.setState({ collapseFSIcon: "-   " }) : this.setState({ collapseFSIcon: "+  " }))
    };

    onClickExpandTaxAccounting = () => {
        this.setState({ collapseTaxAccounting: !this.state.collapseTaxAccounting });
        (this.state.collapseTaxAccounting ? this.setState({ collapseTAIcon: "-   " }) : this.setState({ collapseTAIcon: "+  " }))
    };




    addaccount = (props) => {
        return (
            <View style={styles.bankAccountFlex}>
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

    navigateLiquidationPageOne = () => this.props.navigation.navigate('LiquidationPageOne');
    navigateLiquidationPageTwo = () => this.props.navigation.navigate('LiquidationPageTwo');
    navigateLiquidationPageFour = () => this.props.navigation.navigate('LiquidationPageFour', { taxAccountingMethodData: this.state.taxAccountingMethodData, fundingSource: this.state.fundingSource });

    render() {
        console.log("stateTax : " + this.state.taxAccountingMethodData.stateTax);
        console.log("federalTax : " + this.state.taxAccountingMethodData.federalTax);
        console.log("amountBeforeTaxes : " + this.state.taxAccountingMethodData.amountBeforeTaxes);
        console.log("totalTaxToBeWithhold :" + this.state.taxAccountingMethodData.totalTaxToBeWithhold);
        let currentPage = 3;
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

                    <PageNumber currentPage={currentPage} pageName={pageName} />
                    <View style = {styles.flex2}>
                    <View style={styles.accountFlex}>
                        <Text style={styles.accountNumberText}>Account Name 1</Text>
                        <Text style={styles.accountNumberText}>Account Number xxx-xxx-xxxx</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.emptyFlex}></View>

                    <View style={styles.headerFlex} onTouchStart={this.onClickExpandFundSource}>
                        <Text style={styles.headerText}>{this.state.collapseFSIcon}</Text>
                        <Text style={styles.headerText}>{gblStrings.liquidation.fundSource}</Text>
                    </View>

                    <View style={styles.line} />
                    </View>

                    <Collapsible collapsed={this.state.collapseFundSource} align="center">

                    <View style = {styles.flex2}>
                         <Text style={styles.fundSourceContent}>{gblStrings.liquidation.fundSourceContext}</Text>
                         </View>
                        <View style={styles.offlineMethodFlex}>
                            <Text style={styles.subHeadingText}>{gblStrings.liquidation.offlineMethod}</Text>
                            <Text style={styles.offlineMethodContent}>{gblStrings.liquidation.offlineMethodContext}</Text>
                            <this.addaccount accountName="Check Order" Image={require("../../Images/checkorder.png")} />
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
                            />
                        </View>

                    </Collapsible>

                    <View style={this.state.switchOn ? styles.flex4 : styles.flex4Hide}>
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
                                        textOffStyle={this.state.switchOn ? styles.TextOffStyle : styles.TextOffStyleWithholdtax}
                                    />
                                </View>
                            </View>


                            {this.state.switchOn ?
                                <View style={styles.flex4b} >

                                    <View style={{ marginTop: scaledHeight(26) }}>
                                        <GDropDownComponent
                                            dropDownTextName={styles.blackTextBold16px}
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
                                        <GInputComponent
                                            propInputStyle={styles.stateTaxInputStyle}
                                            inputStyle={styles.inputStyle}
                                            value={this.state.taxAccountingMethodData.federalTax}
                                            onChangeText={this.onChangeFederalTax}
                                            onSubmitEditing={this.onSubmitEditingStateTax}
                                        />
                                    </View>

                                    <View style={styles.stateTaxFlex}>
                                        <Text style={styles.blackTextBold16px}>{gblStrings.liquidation.stateTax}</Text>
                                        <GInputComponent
                                            propInputStyle={styles.stateTaxInputStyle}
                                            inputStyle={styles.inputStyle}
                                            value={this.state.taxAccountingMethodData.stateTax}
                                            onChangeText={this.onChangeStateTax}
                                            onSubmitEditing={this.onSubmitEditingStateTax} />
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

                        </View>:null}

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