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
        title:'Total Amount',
        content:'$500',
    },
    {
        id:'2',
        title:'Fund From',
        content:'Bank1',
    },
    {
        id:'3',
        title:'Invest In',
        content:'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
    },
    {
        id:'4',
        title:'Invest',
        content:'Monthly',
    },
    {
        id:'5',
        title:'Date of Invest',
        content:'15th of every month',
    },
    {
        id:'6',
        title:'End Date',
        content:'15/11/2019',
    },
];
class AutomaticInvestmentPlanVerifyComponent extends Component {
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
        navigationNext = () => this.props.navigation.navigate('automaticInvestmentEsign');
    render() 
    {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation}/>
                <ScrollView style={{ flex: 0.85 }}>
                <View style={styles.circle_view}>
                    <View style={styles.circle_Completed}>
                        <Text style={styles.circleText}>{'1'}</Text>
                    </View>
                    <View style={styles.circle_connect}/>
                    <View style={styles.circle_Inprogress}>
                        <Text style={styles.circleText}>{'2'}</Text>
                    </View>
                    <View style={styles.circle_connect}/>
                    <View style={styles.circle_NotStarted}>
                        <Text style={styles.circleText}>{'3'}</Text>
                    </View>
                    <View style={styles.circle_connect}/>
                    <View style={styles.circle_NotStarted}>
                        <Text style={styles.circleText}>{'4'}</Text>
                    </View>
                </View>

                <View style={styles.autoInvest_title_view}>
                    <Text style={styles.autoInvest_title_text}>{'2 - Verify'}</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.autoInvest_sub_title_view}>
                        <Text style={styles.autoInvest_sub_title_text}>{'- Verify the Investment Plan'}</Text>
                        <Text>{'Edit'}</Text>
                    </View>
                    <View style={styles.seperator_line} />
                    <FlatList
                            data={autoInvestmentJson}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                        />
                        <View style={styles.verifyBottomView}>
                            <Text style={styles.verifyBottomText}>
                                {'Note : If the day you selected falls on a weekend or holiday, your draft will occur the next business day'}
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
AutomaticInvestmentPlanVerifyComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
  };
  
  AutomaticInvestmentPlanVerifyComponent.defaultProps = {
  
  };
  
  export default AutomaticInvestmentPlanVerifyComponent;