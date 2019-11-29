import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


const autoInvestmentJson = [
    {
        accountNumber: 56789123,
        accountName: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
        date: '11/20/2019',
        fundFrom: 'Brokerage Core',
        schedule: 'Quarterly',
        onTheDate: '15th',
        amount: '$50',
        nextInvestement: '11/15/2019'
    },
    {
        accountNumber: 66789123,
        accountName: 'LOREM 2 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
        date: '09/10/2019',
        fundFrom: 'Brokerage Core',
        schedule: 'Monthly',
        onTheDate: '05th',
        amount: '$10',
        nextInvestement: '10/10/2019'
    },
    {
        accountNumber: 77489123,
        accountName: 'LOREM 3 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
        date: '03/27/2019',
        fundFrom: 'Brokerage Core',
        schedule: 'Yearly',
        onTheDate: '10th',
        amount: '$100',
        nextInvestement: '03/27/2020'
    }
];

class SystematicWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    generateKeyExtractor = (item) => item.accountName;
    renderInvestment = () => ({ item }) =>
        (

            <View style={{ borderColor: '#E9E9E9', borderWidth: 1, marginTop: scaledHeight(10), marginBottom: scaledHeight(10) }}>
                <View style={{ flexDirection: "row", flex: 1, backgroundColor: "#E9E9E9", height: scaledHeight(50), alignItems: 'center' }}>
                    <View style={{ flexDirection: "row", flex: 0.6, paddingLeft: scaledWidth(10), paddingTop: scaledHeight(10), paddingBottom: scaledHeight(10) }}>
                        <Text style={{ color: '#54565B', fontSize: scaledWidth(18) }}>{globalString.automaticInvestment.acc_Name}</Text>
                        <Text style={{ marginLeft: scaledHeight(10), color: '#54565B', fontSize: scaledWidth(18) }}>{item.accountNumber}</Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 0.4, justifyContent: 'flex-end', paddingRight: scaledWidth(10) }}>
                        <Text>{":"}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', paddingBottom: scaledHeight(10), paddingLeft: scaledWidth(15) }}>

                    <View style={{ flexDirection: "row", flex: 1, marginBottom: scaledHeight(15), marginTop: scaledHeight(15) }}>
                        <Text style={{ flex: 0.7, fontSize: scaledWidth(15) }}>{item.accountName}</Text>
                        <Text style={{ marginLeft: scaledHeight(10), flex: 0.3, textAlign: 'center', fontSize: scaledWidth(14), color: '#0000FF', textDecorationLine: 'underline' }}>{"5"}</Text>
                    </View>



                    <Text style={{ fontSize: scaledHeight(13), color: '#9B9B9BDE' }}>{"Date added " + item.date}</Text>

                    <View style={{ flexDirection: "column", marginTop: scaledHeight(10) }}>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10) }}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), marginTop: scaledHeight(15), marginBottom: scaledHeight(15), fontWeight: 'bold' }}>{"Fund From"}</Text>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(15) }}>{"Brokerage Core"}</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10) }}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), marginTop: scaledHeight(15), marginBottom: scaledHeight(15), fontWeight: 'bold' }}>{"Schedule"}</Text>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(15) }}>{item.schedule}</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10) }}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), marginTop: scaledHeight(15), marginBottom: scaledHeight(15), fontWeight: 'bold' }}>{"On the date"}</Text>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(15) }}>{item.onTheDate}</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10) }}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), marginTop: scaledHeight(15), marginBottom: scaledHeight(15), fontWeight: 'bold' }}>{"Amount"}</Text>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(15) }}>{item.amount}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center', marginRight: scaledWidth(10) }}>
                            <View style={{ flexDirection: "column", width: '70%' }}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), marginTop: scaledHeight(15), marginBottom: scaledHeight(15), fontWeight: 'bold' }}>{"Next Investment"}</Text>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(15) }}>{item.nextInvestement}</Text>
                            </View>
                            <GButtonComponent
                                buttonStyle={styles.skipButton}
                                buttonText={globalString.automaticInvestment.skip}
                                textStyle={styles.skipButtonText}
                            />
                        </View>
                    </View>


                </View>
            </View>

        )
    navigationInvestmentAdd = () => this.props.navigation.navigate('systematicWithdrawalAdd');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <View style={{ marginLeft: scaledHeight(10), marginRight: scaledHeight(10) }}>
                        <Text style={styles.autoInvestHead}>{globalString.systematicWithdrawal.sysWith_Title}</Text>
                        <View style={styles.seperator_line} />
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.addInvestTitle}>{globalString.systematicWithdrawal.sysWith_current}</Text>
                            <Text style={styles.addInvest} onPress={this.navigationInvestmentAdd}>{'Add'}</Text>
                        </View>
                        <View style={styles.seperator_line} />
                        <Text style={styles.conentMarginTop}>{globalString.systematicWithdrawal.sysWith_current_content}</Text>
                        {/* <FlatList
                            data={autoInvestmentJson}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                        /> */}
                        <View style={{borderWidth:1,borderColor:'#C7C7C7',borderRadius:4,height:scaledHeight(100),alignItems:'center',justifyContent:'center',marginBottom:scaledHeight(20)}}>
                            <Text style={{color:'#56565A',fontSize:scaledHeight(20),fontWeight:'bold'}}>{'No Withdrawal Plan'}</Text>
                        </View>
                        <View style={{ borderColor: '#C7C7C7', borderWidth: 1, backgroundColor: '#F2F2F2', paddingLeft: scaledWidth(10), paddingRight: scaledWidth(10) }}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                <Text style={{ flex: 0.1, }}>{'--'}</Text>
                                <Text style={styles.addInvestFooterTitle}>{'Instructions to Setup and manage Automatic Mutual Fund Purchases'}</Text>
                            </View>
                            <Text style={styles.addInvestFooterText}>{'Setup and manage Automatic Mutual Fund Purchases'}</Text>
                            <Text style={styles.addInvestFooterText}>{'When you make a habit of investing regularly, it can make it easier to achieve your financial goals. Get started in three easy steps'}</Text>
                            <Text style={styles.addInvestFooterList}>{'Choose your USAA Investment account'}</Text>
                            <Text style={styles.addInvestFooterList}>{'Enter an amount of $50 or more'}</Text>
                            <Text style={styles.addInvestFooterList}>{'Select how often you want to invest'}</Text>
                            <Text style={styles.addInvestFooterText}>{'There are no fees to setup an automatic investment and if your plans change, you can cancel at any time.'}</Text>
                            <Text style={styles.addInvestFooterText}>{'For IRA accounts the annual contribution limit for 2019 is $6,000 or $7,000 if you are over age 50. '}</Text>
                            <Text style={styles.addInvestFooterText}>{'Note: If you don\'t see your account below, you may need to use our Transfer Funds Tool.'}</Text>

                        </View>
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationLogin}
                        />
                    </View>

                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
  };
  
  SystematicWithdrawalComponent.defaultProps = {
  
  };
  
  export default SystematicWithdrawalComponent;