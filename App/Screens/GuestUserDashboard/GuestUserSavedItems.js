/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View,} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { GButtonComponent } from '../../CommonComponents';

const GuestUserSavedItems = (props) => {   

    return (
        <View style={styles.financialView}>
            <GButtonComponent
              buttonStyle={styles.linkButton}
              buttonText={gblStrings.guestDashBoard.financialResources.portfolio}
              textStyle={styles.linkButtonText}
              onPress={props.portfolioOnpress}
            />
        </View>
    );

};


GuestUserSavedItems.propTypes = {
    onPress: PropTypes.func,
  };
  
  GuestUserSavedItems.defaultProps = {
    onPress: PropTypes.func
  };

export default GuestUserSavedItems;