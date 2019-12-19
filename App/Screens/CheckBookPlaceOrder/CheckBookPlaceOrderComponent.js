import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GDropDownComponent, GFooterComponent, GButtonComponent, GIcon } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class CheckBookPlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    navigateBack = (isSuccess) => this.props.navigation.navigate('orderCheckBook', { isSuccess: isSuccess});

    render() {
        const { navigation } = this.props;
        const accountName = navigation.getParam('accountName', '');
        const accountNumber = navigation.getParam('accountNumber', '');
        const noOfCheckLeaves = navigation.getParam('noOfCheckLeaves', '');
        const deliveryAddress = navigation.getParam('deliveryAddress', '');
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.orderCheckBook.order_checkbook}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <View style={styles.infoContainer}>

                        <Text style={styles.accountNameText}>
                            {"Account Name"}
                        </Text>
                        <Text style={styles.accountNumberText}>
                            {accountName}
                        </Text>
                        <Text style={styles.accountNumberText}>
                            {`Account Number ${accountNumber}`}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>

                        <Text style={styles.accountNameText}>
                            {"Number of Check Leaves"}
                        </Text>
                        <Text style={styles.accountNumberText}>
                            {noOfCheckLeaves}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>

                        <Text style={styles.accountNameText}>
                            {"Delivery Address"}
                        </Text>
                        <Text style={styles.accountNumberText}>
                            {deliveryAddress}
                        </Text>

                    </View>

                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.backButtonText}
                        onPress={() => this.navigateBack(false)}
                    />

                    <GButtonComponent
                        buttonStyle={styles.submitBtn}
                        buttonText={gblStrings.common.submit}
                        textStyle={styles.submitButtonText}
                        onPress={() => this.navigateBack(true)}
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

export default CheckBookPlaceOrder;