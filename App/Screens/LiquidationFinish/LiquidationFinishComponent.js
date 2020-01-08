import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import styles from './styles';

let orderId = '';

class LiquidationFinishComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const { liquidationInitialState } = this.props;
        console.log(" Screen 5 componentdidmount ", JSON.stringify(liquidationInitialState.saveLiquidationSelectedData));
    }

    render() {
        const { navigation } = this.props;
        const { getParam } = navigation; 
        // orderId = this.props.navigation.getParam('orderId');
        orderId = `${getParam('orderId', '')}`;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>
                    <View style={styles.backgroundFlex}>
                        <View style={styles.transactionStatusFlex}>
                            <View style={styles.transactionStatusMessageFlex}>
                                <Text style={styles.transactionStatusText}>The Liquidation Transaction <Text style={styles.transactionStatusTextBold}>{orderId}</Text>  is been successfully Submitted.</Text>
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

LiquidationFinishComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    liquidationInitialState: PropTypes.instanceOf(Object),
};

LiquidationFinishComponent.defaultProps = {
    navigation: {},
    liquidationInitialState: {},
};
export default LiquidationFinishComponent;