import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

let orderId = '';

class PurchaseFinishComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        orderId = navigation.getParam('orderId');
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <View style={styles.backgroundFlex}>
                        <View style={styles.transactionStatusFlex}>
                            <View style={styles.transactionStatusMessageFlex}>
                                <Text style={styles.transactionStatusText}>The Purchase Transaction <Text style={styles.transactionStatusTextBold}>{orderId}</Text> is been successfully Submitted.</Text>
                            </View>
                        </View>
                        <Text style={styles.targetPageText}>{gblStrings.liquidation.targetPage}</Text>
                    </View>
                    { /* ----------- Disclaimer -------------------*/}

                    <GFooterSettingsComponent />
                </ScrollView>

            </View>

        );
    }
}


PurchaseFinishComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

PurchaseFinishComponent.defaultProps = {
    navigation: {}
};

export default PurchaseFinishComponent;