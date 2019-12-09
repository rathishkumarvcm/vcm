import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,

} from '../../CommonComponents';
import {CustomRadio} from '../../AppComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import * as regEx from '../../Constants/RegexConstants';

const autoInvestmentAddBankJson = [

    {
        account: 'Bank Account 1',
        accountNumber: 'xxx-xxx-xxxx'
    },
    {
        account: 'Bank Account 2',
        accountNumber: 'xxx-xxx-xxxx'
    },
    {
        account: 'Bank Account 3',
        accountNumber: 'xxx-xxx-xxxx'
    }
];

const autoInvestmentAddAmountJson = [
    {
        accountName: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
        switchOnOff:false
    },
    {
        accountName: 'LOREM 2 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
        switchOnOff:false
    },
    {
        accountName: 'LOREM 3 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
        switchOnOff:false
    }
];



class AutomaticInvestmentAddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch1Value: false,
            selectedItemID: "",
            selectedItemName: "",
        };
    }//test
    onSelected = (item) => () => {
        console.log("item: " + item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    navigationNext = () => this.props.navigation.navigate('automaticInvestmentSchedule');
    generateKeyExtractor = (item) => item.account;
    renderInvestment = () => ({ item }) =>
        (

            <View style={{ borderWidth: 1, borderColor: '#5D83AE99', padding: '5%', alignItems: 'center' }}>
                <Text style={{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold' }}>{item.account}</Text>
                <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>{item.accountNumber}</Text>
            </View>
        )
    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value });
        console.log('Switch 1 is: ' + value);
    }

    generateAmountKeyExtractor = (item) => item.accountName;
    renderAmount = () => ({ item }) =>
        (
            <View style={{ borderWidth: 1, borderColor: '#5D83AE99', marginTop: scaledHeight(10) }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: "center", alignItems: 'center', borderBottomColor: '#61285F45', borderBottomWidth: 1, padding: scaledHeight(20) }}>
                    <View style={{ flex: 0.7 }}>
                        <Text style={{ color: '#544A54', fontSize: scaledHeight(13), fontWeight: 'bold' }}>{item.accountName}</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'flex-end', marginRight: '4%' }}>
                        <Switch trackColor={{flase:'#DBDBDB',true:'#444444'}}
                            onValueChange={this.toggleSwitch1}
                            value={this.state.switch1Value}
                        />
                    </View>
                </View>
                <View style={styles.auto_invest_to_flat}>
                    <Text style={styles.auto_invest_to_top}>{'Amount'}</Text>
                    <View style={styles.auto_invest_to_top_view}>
                        <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                        <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
                    </View>
                    <Text style={styles.auto_invest_flat_min}>{'Min $50'}</Text>
                </View>

            </View>
        )



    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <View>
                        <Text style={styles.autoInvestHead}>{'Create Automatic Investment Plan'}</Text>
                        <View style={styles.seperator_line} />
                        <View style={styles.circle_view}>
                            <View style={styles.circle_Inprogress}>
                                <Text style={styles.circleTextNew}>{'1'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'2'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'3'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'4'}</Text>
                            </View>
                        </View>
                        <View style={styles.autoInvest_title_view}>
                            <Text style={styles.autoInvest_title_text}>{'1 - Plan Details'}</Text>
                        </View>
                        <View style={styles.body}>

                            <Text style={styles.autoInvest_sub_title_text}>{'- Fund To'}</Text>


                            <View style={styles.seperator_line} />
                            <Text style={styles.autoInvestCont}>{'Choose how you will fund your account and indicate your initial investment amount.'}</Text>
                            <FlatList style={{ marginTop: scaledHeight(20) }}
                                data={autoInvestmentAddBankJson}
                                renderItem={this.renderInvestment()}
                                keyExtractor={this.generateKeyExtractor}

                            />
                            <Text style={styles.autoInvest_sub_title_text}>{'- Invest To'}</Text>
                            <View style={styles.seperator_line} />

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Total Amount'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'In'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                <View style={styles.radioBtnGrp}>
                                <CustomRadio
                                    componentStyle={{ width: "30%", marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                    size={30}
                                    outerCicleColor={"#DEDEDF"}
                                    innerCicleColor={"#61285F"}
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label={"$"}
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel={""}
                                    selected={(this.state.selectedItemID !== "" && "Y" == this.state.selectedItemID) ? true : false}
                                    onPress={this.onSelected({ name: 'Yes', id: 'Y' })}
                                />
                                <CustomRadio

                                    size={30}
                                    componentStyle={{ width: "30%", marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                    outerCicleColor={"#DEDEDF"}
                                    innerCicleColor={"#61285F"}
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label={"%"}
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel={""}
                                    selected={(this.state.selectedItemID !== "" && "N" == this.state.selectedItemID) ? true : false}
                                    onPress={this.onSelected({ name: 'No', id: 'N' })}
                                />
                                </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Amount Consumed'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>{'Amount'}</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>{'$'}</Text>
                                    <GInputComponent style={{ marginLeft: scaledWidth(10) }} />
                                </View>
                            </View>


                            <FlatList style={{ marginTop: scaledHeight(20) }}
                                data={autoInvestmentAddAmountJson}
                                renderItem={this.renderAmount()}
                                keyExtractor={this.generateAmountKeyExtractor}

                            />
                        </View>
                    </View>
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.save}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationLogin}
                    />
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationLogin}
                    />
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.back}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationLogin}
                    />
                    <GButtonComponent
                        buttonStyle={styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.navigationNext}
                    />





                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentAddComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentAddComponent.defaultProps = {

};

export default AutomaticInvestmentAddComponent;