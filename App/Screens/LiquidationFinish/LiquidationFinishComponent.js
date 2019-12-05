import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';

class LiquidationFinishComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <View style={styles.backgroundFlex}>
                        <View style={styles.transactionStatusFlex}>
                            <Text style={styles.transactionStatusText}>The Liquidation Transaction Order ID XXXXXX1234 is been successfully Submitted.</Text>
                        </View>
                        <Text style = {styles.targetPageText}>{gblStrings.liquidation.targetPage}</Text>
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
    navigation: PropTypes.instanceOf(Object)
};

LiquidationFinishComponent.defaultProps = {

};
export default LiquidationFinishComponent;