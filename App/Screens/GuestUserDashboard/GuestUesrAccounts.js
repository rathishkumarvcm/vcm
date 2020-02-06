/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';

const GuestUserAccounts = (props) => {   

    return (
        <View style={styles.dashboardSection}>
            <Text style={styles.openAccountText}>{gblStrings.guestDashBoard.guestUserOpenAccount}</Text>
            
            <View style={styles.accountTypesView}>
                <Text style={styles.accountTypesText}>
                    1. {gblStrings.accManagement.generalInvestmentAcc}
                </Text>

                <Text style={styles.accountTypesText}>
                    2. {gblStrings.accManagement.retirementAcc}
                </Text>

                <Text style={styles.accountTypesText}>
                    3. {gblStrings.accManagement.investingChildrenAcc}
                </Text>
            </View>

            <View style={styles.accountOpenView}>
                <Text style={styles.accountTypesText}>{gblStrings.dashBoard.openAnAccount} </Text>
                <Text style={styles.linkText} onPress={props.onPress}>here</Text>
            </View>

        </View>
    );

};


GuestUserAccounts.propTypes = {
    onPress: PropTypes.func
  };
  
  GuestUserAccounts.defaultProps = {
    onPress: PropTypes.func
  };

export default GuestUserAccounts;