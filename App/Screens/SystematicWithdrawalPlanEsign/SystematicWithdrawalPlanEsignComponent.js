import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
} from '../../CommonComponents';
import { CustomCheckBox } from '../../AppComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';

class SystematicWithdrawalPlanEsignComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saveCurrentDevice: false
        };
    }

    onCheckBoxCheck = () => {
        this.setState({ saveCurrentDevice: !this.state.saveCurrentDevice });
    }
    navigationBack = () => this.props.navigation.goBack();
    navigationCancel = () => this.props.navigation.navigate('systematicWithdrawal');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <Text style={styles.autoInvestHead}>{'Create Systematic Withdrawal Plan'}</Text>
                    <View style={styles.seperator_line} />
                    <View style={styles.circle_view}>
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>{'1'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>{'2'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleTextNew}>{'3'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Completed}>
                            <Text style={styles.circleText}>{'4'}</Text>
                        </View>
                        <View style={styles.circle_connect} />
                        <View style={styles.circle_Inprogress}>
                            <Text style={styles.circleText}>{'5'}</Text>
                        </View>
                    </View>

                    <View style={styles.autoInvest_title_view}>
                        <Text style={styles.autoInvest_title_text}>{'5 - E-Consent'}</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.autoInvest_sub_title_view}>
                            <Text style={styles.autoInvest_sub_title_text}>{'- E-Consent'}</Text>

                        </View>
                        <View style={styles.seperator_line} />
                        <View style={styles.esignBody}>
                            <View style={styles.esignBody1}>
                                <Text style={styles.esignTitle}>{'Documents to Sign'}</Text>
                                <View style={styles.seperator_line} />
                                <Text style={styles.esignHeading}>{'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES'}</Text>
                                <Text style={styles.esignContent1}>{'This document contains the information provided by you as part of your automatic investment plan, including Terms and Conditions.'}</Text>
                                <Text style={styles.esignContent2}>{'By selecting "Submit", I agree to the documents and terms above and certify that any information I provided is accurate, up-to-date and complete.'}</Text>
                            </View>

                            <View style={styles.esignBottomView}>
                                <CustomCheckBox
                                    size={24}
                                    itemBottom={0}
                                    itemTop={0}
                                    outerCicleColor={"#707070"}
                                    innerCicleColor={"#2C8DBF"}
                                    labelStyle={styles.agreeTermsTxt}
                                    label={'I, Agree that i have received, read, understood, and agree to the documents linked above.'}
                                    selected={this.state.saveCurrentDevice}
                                    onPress={this.onCheckBoxCheck}
                                />
                            </View>
                        </View>
                       
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationBack}
                        />
                        <GButtonComponent
                            buttonStyle={styles.continueButton}
                            buttonText={globalString.common.submit}
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
SystematicWithdrawalPlanEsignComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

SystematicWithdrawalPlanEsignComponent.defaultProps = {

};

export default SystematicWithdrawalPlanEsignComponent;