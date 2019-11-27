import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
  GHeaderComponent,
  GFooterComponent,
  GButtonComponent,
  GInputComponent,
  GCheckBoxComponent,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';

class AutomaticInvestmentPlanEsignComponent extends Component {
    constructor(props) {
        super(props);
    this.state = {
    };
}


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
                <Text style={styles.autoInvest_title_text}>{'4 - E-sign'}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.autoInvest_sub_title_view}>
                    <Text style={styles.autoInvest_sub_title_text}>{'- E-Signature'}</Text>
                    
                </View>
                <View style={styles.seperator_line} />
                <View style={styles.esignBody}>
                    <Text style={styles.esignTitle}>{'Documents to Sign'}</Text>
                    <View style={styles.seperator_line} />
                    <Text style={styles.esignHeading}>{'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES'}</Text>
                    <Text style={styles.esignContent1}>{'This document contains the information provided by you as part of your automatic investment plan, including Terms and Conditions.'}</Text>
                    <Text  style={styles.esignContent2}>{'By selecting "Submit", I agree to the documents and terms above and certify that any information I provided is accurate, up-to-date and complete.'}</Text>
                    <View style={styles.esignBottomView}>
                    <GCheckBoxComponent 
                       
                    />
                        <Text style={styles.esignBottomText}>{'I, Agree that i have received, read, understood, and agree to the documents linked above.'}</Text>
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
            </View>
            </ScrollView>
        </View>
    );
}
}
AutomaticInvestmentPlanEsignComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
  };
  
  AutomaticInvestmentPlanEsignComponent.defaultProps = {
  
  };
  
  export default AutomaticInvestmentPlanEsignComponent;