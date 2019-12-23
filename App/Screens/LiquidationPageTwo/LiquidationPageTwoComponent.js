import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';


const shares = [
    {
        fundName: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
        totalShares: '2452',
        worthAmount: '5400'
    },
    {
        fundName: 'USSPX VCM 600 INDEX FUND MEMBER CLASS SHARES',
        totalShares: '3452',
        worthAmount: '2400'
    },
];



class LiquidationPageTwoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseLiquidationIcon: "-  ",
            collapseLiquidation: false,
            selectedFundIndex: null,
            allSharesSelected: false,
            dollarSelected: false,
            percSelected: false,
            dollarValue: [],
            percentageValue: [],
            disableNextButton: true,
            minHoldingDollar:[],
            selectedFundData: {
                fundName: '',
                totalShares: '',
                worthAmount: '',
                allSharesSelected: false,
                dollarValue: '',
                percentageValue: '',
            }
        };
    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
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
        this.setState(prevState => ({
            selectedFundData: {
                ...prevState.selectedFundData,
                fundName: item.fundName,
                totalShares: item.totalShares,
                worthAmount: item.worthAmount,
            },
            selectedFundIndex: index,
        }))
    }


    onClickAllShares = () => {
        this.setState(prevState => ({
            selectedFundData: {
                ...prevState.selectedFundData,
                dollarValue: '',
                percentageValue:'',
                allSharesSelected:!this.state.allSharesSelected,
            },
            allSharesSelected: !this.state.allSharesSelected,
            dollarSelected: false,
            percSelected: false,
            disableNextButton: this.state.allSharesSelected,
            percentageValue: [],
            dollarValue: [],
            minHoldingDollar:[],
        }));
    }

    onClickAmountinDollar = () => {
        this.setState(prevState => ({
            selectedFundData: {
                ...prevState.selectedFundData,
                percentageValue:'',
                allSharesSelected:false,
            },
            allSharesSelected: false,
            dollarSelected: !this.state.dollarSelected,
            percSelected: false,
            disableNextButton: true,
            percentageValue: [],
        }));
    }

    onClickAmountInPerc = () => {
        this.setState(prevState => ({
            selectedFundData: {
                ...prevState.selectedFundData,
                dollarValue:'',
                allSharesSelected:false,
            },
            allSharesSelected: false,
            dollarSelected: false,
            percSelected: !this.state.percSelected,
            disableNextButton: true,
            dollarValue: [],
            minHoldingDollar:[],
        }));
    }

    onChangeDollarVal = (text) => {
        let a = this.state.dollarValue.slice(); 
        let b = this.state.minHoldingDollar.slice();
        a[this.state.selectedFundIndex] = text;
        b[this.state.selectedFundIndex] = (a[this.state.selectedFundIndex]>(0.95*this.state.selectedFundData.worthAmount));
        this.setState(prevState => ({
            selectedFundData: {
                ...prevState.selectedFundData,
                dollarValue: a[this.state.selectedFundIndex],
                percentageValue:'',
                allSharesSelected:false
            },
            dollarValue: a,
            disableNextButton:this.isEmpty(text),
            minHoldingDollar: b
        }));
        
    }

    onChangePercentageVal = (text) => {
        let a = this.state.percentageValue.slice(); 
        a[this.state.selectedFundIndex] = text;
        this.setState(prevState => ({
            selectedFundData: {
                ...prevState.selectedFundData,
                dollarValue:'',
                percentageValue: a[this.state.selectedFundIndex],
                allSharesSelected:false,
            },
            percentageValue: a,
            disableNextButton:this.isEmpty(text),
        }));
    }

    navigateLiquidationPageOne = () => this.props.navigation.navigate('LiquidationPageOne');
    navigateLiquidationPageTwo = () => this.props.navigation.navigate('LiquidationPageTwo');

    nextButtonAction = () => {
        console.log('On Click Next Fund Selection ...');
        this.setState(prevState => ({
            selectedFundData: {
                ...prevState.selectedFundData,
            },
        }));
        const payloadData = this.state.selectedFundData;
        this.props.saveData(payloadData);
        console.log("payloadData---> " + JSON.stringify(payloadData));
        this.props.navigation.navigate('LiquidationPageThree');
    }

    formatAmount = (amount) => {
        var amt = parseInt(amount).toLocaleString();
        return amt;
    }

    componentDidMount() {
        console.log("Page Two Compoennt componentDidMount --> " + JSON.stringify(this.props));
    }

    render() {
        let currentPage = 2;
        let totalCount = 4;
        let pageName = gblStrings.liquidation.fundSelectionScreenName;
        return (
            <View style={styles.container} >
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
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountName}{this.props.liquidationInitialState.selectedAccountName}</Text>
                            <Text style={styles.accountNumberText}>{gblStrings.liquidation.accountNumber}{this.props.liquidationInitialState.selectedAccountNumber}</Text>
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
                            data={shares}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={(this.state.selectedFundIndex == index) ? styles.fundsFlexSelected : styles.fundsFlex} onTouchStart={() => this.onClickSelectFund(item, index)}>
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
                                                    <TouchableOpacity onPress={this.onClickAllShares} disabled={!(this.state.selectedFundIndex == index)}>
                                                        <View style={styles.radioButtonFlexOff}>
                                                            {(this.state.allSharesSelected && (this.state.selectedFundIndex == index)) ? <View style={styles.radioButtonFlexOn} /> : null}
                                                        </View>
                                                    </TouchableOpacity>
                                                    <Text style={styles.allSharesText}>{gblStrings.liquidation.allShares}</Text>
                                                </View>

                                                <View style={styles.allShares}>
                                                    <TouchableOpacity onPress={this.onClickAmountinDollar} disabled={!(this.state.selectedFundIndex == index)}>
                                                        <View style={styles.radioButtonFlexOff}>
                                                            {(this.state.dollarSelected && (this.state.selectedFundIndex == index)) ? <View style={styles.radioButtonFlexOn} /> : null}
                                                        </View>
                                                    </TouchableOpacity>
                                                    <Text style={styles.dollarText}>$</Text>
                                                    <GInputComponent
                                                        propInputStyle={styles.amountTextBox}
                                                        inputStyle={styles.inputStyle}
                                                        value={this.state.dollarValue[index]}
                                                        onChangeText={this.onChangeDollarVal}
                                                        editable={(this.state.dollarSelected && (this.state.selectedFundIndex == index))}
                                                        keyboardType="decimal-pad"
                                                        errorFlag={(this.state.minHoldingDollar[index])&& (this.state.selectedFundIndex == index)}
                                                        errorText="Due to market fluctuations, this trade may fail. We suggest you do an ‘All’ shares liquidations"
                                                    />
                                                </View>


                                                <View style={styles.allShares}>
                                                    <TouchableOpacity onPress={this.onClickAmountInPerc} disabled={!(this.state.selectedFundIndex == index)}>
                                                        <View style={styles.radioButtonFlexOff}>
                                                            {(this.state.percSelected && (this.state.selectedFundIndex == index)) ? <View style={styles.radioButtonFlexOn} /> : null}
                                                        </View>
                                                    </TouchableOpacity>
                                                    <Text style={styles.dollarText}>%</Text>
                                                    <GInputComponent
                                                        propInputStyle={styles.amountTextBox}
                                                        inputStyle={styles.inputStyle}
                                                        value={this.state.percentageValue[index]}
                                                        onChangeText={this.onChangePercentageVal}
                                                        editable={(this.state.percSelected) && (this.state.selectedFundIndex == index)}
                                                        keyboardType="decimal-pad"
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
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
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
    saveData: PropTypes.func,
};

LiquidationPageTwoComponent.defaultProps = {

};
export default LiquidationPageTwoComponent;