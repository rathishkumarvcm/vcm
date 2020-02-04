import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from "prop-types";
import { GWebViewComponent, GHeaderComponent, GIcon } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';

const url = 'https://www.dinkytown.net/java/required-minimum-distribution-rmd.html?KJEData=*ACCOUNT_BALANCE*:250000,*BENEFICIARY_AGE*:50,*BIRTHDAY_AFTER_JUNE30*:false,*IS_BENEFICIARY_YOUR_SPOUSE*:true,*RATE_OF_RETURN*:4.3,*YOUR_AGE*:72';

class RMDCalculatorComponent extends Component {

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <View style={styles.page}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.accountIconStyle} onPress={this.goBack}>
                            <GIcon
                                name="left"
                                type="antdesign"
                                size={20}
                            />
                        </TouchableOpacity>

                        <Text style={styles.headerText}>
                            {gblStrings.rmdCalculator.rmdCalculator_header}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />


                    <Text style={styles.infoText}>
                        {gblStrings.rmdCalculator.rmdCalculator_info}
                    </Text>


                    <View style={styles.linkBreak1} />

                    <GWebViewComponent
                        source={{ uri: url }}
                    />
                </View>
            </View>
        );
    }
}

RMDCalculatorComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
};

RMDCalculatorComponent.defaultProps = {
    navigation: {},
};

export default RMDCalculatorComponent;