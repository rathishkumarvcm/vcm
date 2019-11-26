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
        accountNumber:56789123,
        accountName: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
        date: '11/20/2019',
        fundFrom: 'Brokerage Core',
        schedule: 'Quarterly',
        onTheDate: '15th',
        amount: '$50',
        nextInvestement: '11/15/2019'
    },
    {
        accountNumber:66789123,
        accountName: 'LOREM 2 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
        date: '09/10/2019',
        fundFrom: 'Brokerage Core',
        schedule: 'Monthly',
        onTheDate: '05th',
        amount: '$10',
        nextInvestement: '10/10/2019'
    },
    {
        accountNumber:77489123,
        accountName: 'LOREM 3 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
        date: '03/27/2019',
        fundFrom: 'Brokerage Core',
        schedule: 'Yearly',
        onTheDate: '10th',
        amount: '$100',
        nextInvestement: '03/27/2020'
    }
];

class AutomaticInvestmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    generateKeyExtractor = (item) => item.accountName;
    renderInvestment = () => ({ item }) =>
        (

            <View style={{ borderColor: '#E9E9E9', borderWidth: 1, marginTop: scaledHeight(10),marginBottom:scaledHeight(10)}}>
                <View style={{ flexDirection: "row", flex: 1, backgroundColor: "#E9E9E9", height: scaledHeight(30), alignItems: 'center' }}>
                    <View style={{ flexDirection: "row", flex: 0.6, paddingLeft: scaledWidth(10) }}>
                        <Text>{globalString.automaticInvestment.acc_Name}</Text>
                        <Text style={{ marginLeft: scaledHeight(10) }}>{item.accountNumber}</Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 0.4, justifyContent: 'flex-end', paddingRight: scaledWidth(10) }}>
                        <Text>{":"}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff',paddingBottom:scaledHeight(10) }}>
                    <View style={{ flexDirection: "row", flex: 1, marginTop: scaledHeight(10) }}>
                        <View style={{ flexDirection: "row", flex: 0.6,marginLeft: scaledHeight(5)}}>
                            <Text>{item.accountName}</Text>
                            <Text style={{ marginLeft: scaledHeight(10) }}>{"5"}</Text>
                        </View>
                        <View style={{ flexDirection: "column", flex: 0.4, alignItems: 'flex-end', paddingRight: scaledWidth(10) }}>
                            <Text style={{ marginLeft: scaledHeight(10) }}>{"Date added"}</Text>
                            <Text style={{ marginLeft: scaledHeight(10) }}>{item.date}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: scaledHeight(10) }}>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10), marginLeft: scaledHeight(5) }}>
                            <Text>{"Fund From"}</Text>
                            <Text>{"Brokerage Core"}</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10), marginLeft: scaledHeight(5) }}>
                            <Text>{"Schedule"}</Text>
                            <Text>{item.schedule}</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10), marginLeft: scaledHeight(5) }}>
                            <Text>{"On the date"}</Text>
                            <Text>{item.onTheDate}</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10), marginLeft: scaledHeight(5) }}>
                            <Text>{"Amount"}</Text>
                            <Text>{item.amount}</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: scaledHeight(10), marginLeft: scaledHeight(5) }}>
                            <Text>{"Next Investment"}</Text>
                            <Text>{item.nextInvestement}</Text>
                        </View>


                    </View>

                    <GButtonComponent
                        buttonStyle={styles.skipButton}
                        buttonText={globalString.automaticInvestment.skip}
                        textStyle={styles.skipButtonText}
                    />
                </View>
            </View>

        )
    navigationInvestmentAdd = () => this.props.navigation.navigate('automaticInvestmentAdd');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <View style={{ marginLeft: scaledHeight(10), marginRight: scaledHeight(10) }}>
                        <Text style={styles.autoInvestHead}>{globalString.automaticInvestment.autoInves_Title}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.addInvestTitle}>{globalString.automaticInvestment.autoInves_current}</Text>
                            <Text style={styles.addInvest} onPress={this.navigationInvestmentAdd}>{'Add'}</Text>
                        </View>
                        <Text style={styles.conentMarginTop}>{globalString.automaticInvestment.autoInves_current_content}</Text>
                        <FlatList
                            data={autoInvestmentJson}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                        />
                    </View>

                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentComponent.defaultProps = {

};

export default AutomaticInvestmentComponent;