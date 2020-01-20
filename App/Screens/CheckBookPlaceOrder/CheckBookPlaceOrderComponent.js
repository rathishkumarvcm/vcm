import React, { Component } from 'react';
import PropTypes from "prop-types";
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GFooterComponent, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class CheckBookPlaceOrder extends Component {

    navigateBack = (isSuccess) => () => {
        const { navigation } = this.props;
        navigation.navigate('accountService', { message: isSuccess ? gblStrings.orderCheckBook.request_received : "" });
    }

    render() {
        const { navigation } = this.props;
        const accountName = navigation.getParam('accountName', '');
        const accountNumber = navigation.getParam('accountNumber', '');
        const noOfCheckLeaves = navigation.getParam('noOfCheckLeaves', '');
        const deliveryAddress = navigation.getParam('deliveryAddress', '');
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.contentStyle}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.orderCheckBook.order_checkbook}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <View style={styles.infoContainer}>

                        <Text style={styles.accountNameText}>
                            {gblStrings.orderCheckBook.account_name}
                        </Text>
                        <Text style={styles.checkLeavesText}>
                            {accountName}
                        </Text>
                        <Text style={styles.accountNumberText}>
                            {`Account Number ${accountNumber}`}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>

                        <Text style={styles.accountNameText}>
                            {gblStrings.orderCheckBook.number_of_checkleaves}
                        </Text>
                        <Text style={styles.checkLeavesText}>
                            {noOfCheckLeaves}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>

                        <Text style={styles.accountNameText}>
                            {gblStrings.orderCheckBook.delivery_address}
                        </Text>
                        <Text style={styles.checkLeavesText}>
                            {deliveryAddress}
                        </Text>

                    </View>

                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateBack(false)}
                    />

                    <GButtonComponent
                        buttonStyle={styles.submitBtn}
                        buttonText={gblStrings.common.submit}
                        textStyle={styles.submitButtonText}
                        onPress={this.navigateBack(true)}
                    />

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

CheckBookPlaceOrder.propTypes = {
    navigation: PropTypes.instanceOf(Object),
};

CheckBookPlaceOrder.defaultProps = {
    navigation: {}
};

export default CheckBookPlaceOrder;