import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
  GHeaderComponent,
  GFooterComponent,
  GButtonComponent,
  GInputComponent,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';
import { FlatList } from 'react-native-gesture-handler';


const autoInvestmentJson = [
    
    {
        id:'1',
        title:'Fund To',
        content:'Bank1',
    },
    {
        id:'2',
        title:'Total Amount',
        content:'$5000',
    },
    {
        id:'3',
        title:'Withdrawal From',
        content:'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES\nUSSPX VCM 300 INDEX FUND MEMBER CLASS SHARES',
    },
    {
        id:'4',
        title:'Contingent Funding Options',
        content:'I would like to add contingent funding from my core sweep account and other eligible mutual fund positions.',
    },
    {
        id:'5',
        title:'Frequency',
        content:'Twice a Month',
    },
    {
        id:'6',
        title:'Date',
        content:'5th & 20th of every month',
    },
    {
        id:'7',
        title:'Beginning on',
        content:'12/2019',
    },
];
class SystematicWithdrawalPlanVerifyComponent extends Component {
    constructor(props) {
        super(props);
    this.state = {
    };
}

generateKeyExtractor = (item) => item.id;
    renderInvestment = () => ({ item }) =>
        (

            <View style={styles.verifyContentView}>
                <Text style={styles.verifyConentTitle1}>{item.title}</Text>
                <Text style={styles.verifyConentTitle2}>{item.content}</Text>
            </View>

        )
        navigationNext = () => this.props.navigation.navigate('systematicWithdrawalEsign');
    render() 
    {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation}/>
                <ScrollView style={{ flex: 0.85 }}>
                <Text style={styles.autoInvestHead}>{'Create Systematic Withdrawal Plan'}</Text>
                <View style={styles.seperator_line} />
                <View style={styles.circle_view}>
                    <View style={styles.circle_Completed}>
                        <Text style={styles.circleTextNew}>{'1'}</Text>
                    </View>
                    <View style={styles.circle_connect}/>
                    <View style={styles.circle_Completed}>
                        <Text style={styles.circleTextNew}>{'2'}</Text>
                    </View>
                    <View style={styles.circle_connect}/>
                    <View style={styles.circle_Inprogress}>
                        <Text style={styles.circleTextNew}>{'3'}</Text>
                    </View>
                    <View style={styles.circle_connect}/>
                    <View style={styles.circle_NotStarted}>
                        <Text style={styles.circleText}>{'4'}</Text>
                    </View>
                </View>

                <View style={styles.autoInvest_title_view}>
                    <Text style={styles.autoInvest_title_text}>{'3 - Verify'}</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.autoInvest_sub_title_view}>
                        <Text style={styles.autoInvest_sub_title_text}>{'- Verify the Withdrawal Plan'}</Text>
                        <Text style={styles.autoInvest_sub_edit}>{'Edit'}</Text>
                    </View>
                    <View style={styles.seperator_line} />
                    <FlatList
                            data={autoInvestmentJson}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                        />
                        <View style={styles.verifyBottomView}>
                            <Text style={styles.verifyBottomText}>
                                {'Note : If the day you selected falls on a weekend or holiday, your Fund Transfer on next business day'}
                            </Text>
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
                </View>
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalPlanVerifyComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
  };
  
  SystematicWithdrawalPlanVerifyComponent.defaultProps = {
  
  };
  
  export default SystematicWithdrawalPlanVerifyComponent;