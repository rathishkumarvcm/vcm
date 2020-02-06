import React from 'react';
import { View, Text, Switch} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';

const switchTrackColor = { flase: '#DBDBDB', true: '#444444' };
const UserPhoneInformation = (props) => {
    const {mobileNumber,onMobileToggle,isMarketingOffersEnabled,navigateEditSection} = props;   
    return (
        <View style={styles.editEmailHolder}>
            <View style={styles.profileDivideIcon}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {globalString.profileSettingsPage.profilePrimaryMobileLabel}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {mobileNumber}
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
                        onValueChange={onMobileToggle}
                        value={isMarketingOffersEnabled}
                    />
                </View>
            </View>
        </View>
    );
};

UserPhoneInformation.propTypes = {
   // mobileNumberType: PropTypes.string,
    mobileNumber: PropTypes.string,
   // mobilePreferredTime: PropTypes.string,
    isMarketingOffersEnabled: PropTypes.bool,
    onMobileToggle: PropTypes.func,
    navigateEditSection: PropTypes.func
};

UserPhoneInformation.defaultProps = {

  //  mobileNumberType: '',
    mobileNumber: '',
   // mobilePreferredTime: '',
    isMarketingOffersEnabled: false,
    onMobileToggle: () => { },
    navigateEditSection: () => { }
    
};

export default UserPhoneInformation;