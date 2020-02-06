import React from 'react';
import { View, Text, Switch} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';

const switchTrackColor = { flase: '#DBDBDB', true: '#444444' };
const UserEmailInformation = (props) => {
    const {emailId,onEmailToggle,isMarketingOffersEnabled,navigateEditSection} = props;
    return (
        <View style={styles.editEmailHolder}>
            <View style={styles.profileDivideIcon}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {globalString.accManagement.emailAddress}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {emailId}
                    </Text>
                    <Text style={styles.editTextStyle} onPress={navigateEditSection}>
                        {globalString.common.edit}
                    </Text>
                </View>
            </View>

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {isMarketingOffersEnabled ? globalString.marketingPrivacyLabel.marketingContactEnableLabel : globalString.marketingPrivacyLabel.marketingContactDisableLabel}                                       
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={switchTrackColor}
                        onValueChange={onEmailToggle}
                        value={isMarketingOffersEnabled}
                    />
                </View>
            </View>
        </View>
    );
};

UserEmailInformation.propTypes = {
    // emailType: PropTypes.string,
    emailId: PropTypes.string,
    isMarketingOffersEnabled: PropTypes.bool,  
    onEmailToggle: PropTypes.func,
    navigateEditSection:PropTypes.func
};

UserEmailInformation.defaultProps = {
   // emailType: '',
    emailId: '',   
    isMarketingOffersEnabled: false,
    onEmailToggle : () => { },
    navigateEditSection: () => { }
};

export default UserEmailInformation;