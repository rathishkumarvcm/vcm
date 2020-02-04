import React from 'react';
import { View,} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { GButtonComponent } from '../../CommonComponents';

const GuestUserFinancial = (props) => {   

    return (
        <View style={styles.financialView}>
            <GButtonComponent
              buttonStyle={styles.linkButton}
              buttonText={gblStrings.guestDashBoard.financialResources.portfolio}
              textStyle={styles.linkButtonText}
              onPress={props.portfolioOnpress}
            />
            <GButtonComponent
              buttonStyle={styles.linkButton}
              buttonText={gblStrings.guestDashBoard.financialResources.retirement}
              textStyle={styles.linkButtonText}
              onPress={props.retirementOnpress}
            />
            <GButtonComponent
              buttonStyle={styles.linkButton}
              buttonText={gblStrings.guestDashBoard.financialResources.product}
              textStyle={styles.linkButtonText}
              onPress={props.productOnpress}
            />
            <GButtonComponent
              buttonStyle={styles.linkButton}
              buttonText={gblStrings.guestDashBoard.financialResources.learning}
              textStyle={styles.linkButtonText}
              onPress={props.learningOnpress}
            />
        </View>
    );

};


GuestUserFinancial.propTypes = {
    onPress: PropTypes.func
  };
  
  GuestUserFinancial.defaultProps = {
    onPress: PropTypes.func
  };

export default GuestUserFinancial;