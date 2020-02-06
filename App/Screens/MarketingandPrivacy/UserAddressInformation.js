import React from 'react';
import { View, Text, Switch} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';

//  Address Informations Data
const switchTrackColor = { flase: '#DBDBDB', true: '#444444' };
const UserAddressInformation = (props) => {
    const {addressType,addressLineOne,addressCity,addressState,isMarketingOffersEnabled,onAddressToggle,navigateEditSection} = props;
    return (
        <View style={styles.editEmailHolder}>
            <View style={styles.profileDivideIcon}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {globalString.marketingPrivacyLabel.marketingMailingLabel}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {addressType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {addressLineOne}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {addressCity}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {addressState}
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
                        onValueChange={onAddressToggle}
                        value={isMarketingOffersEnabled}
                    />
                </View>
            </View>
        </View>
    );
};

UserAddressInformation.propTypes = {
    addressType: PropTypes.string,
    addressLineOne: PropTypes.string,
    addressCity: PropTypes.string,
    addressState: PropTypes.string,  
    isMarketingOffersEnabled: PropTypes.bool,   
    onAddressToggle:PropTypes.func,
    navigateEditSection:PropTypes.func
};

UserAddressInformation.defaultProps = {
    addressType: '',
    addressLineOne: '',   
    addressCity:'',
    addressState:'',   
    isMarketingOffersEnabled: false,
    onAddressToggle: () => { },
    navigateEditSection: () => { }
};

export default UserAddressInformation;