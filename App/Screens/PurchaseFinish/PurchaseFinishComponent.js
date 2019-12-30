import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { styles } from './styles';
import PropTypes from 'prop-types';

class PurchaseFinishComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: ''
        };
    }

    componentDidMount() {
        let data = this.props.navigation.getParam('orderId');
        this.setState({ orderId: data });
    }

    render() {
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <View style={styles.backgroundFlex}>
                        <View style={styles.transactionStatusFlex}>
                            <View style={styles.transactionStatusMessageFlex}>
                                <Text style={styles.transactionStatusText}>{"The Purchase Transaction "}<Text style={styles.transactionStatusTextBold}>{this.state.orderId}</Text> {"is been successfully Submitted."}</Text>
                            </View>
                        </View>
                        <Text style={styles.targetPageText}>{gblStrings.liquidation.targetPage}</Text>
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


PurchaseFinishComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

PurchaseFinishComponent.defaultProps = {
    navigation: {}
};

export default PurchaseFinishComponent;