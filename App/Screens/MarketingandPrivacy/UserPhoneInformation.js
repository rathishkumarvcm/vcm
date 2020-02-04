import React from 'react';
import { View, Text, Switch} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';

const switchTrackColor = { flase: '#DBDBDB', true: '#444444' };
const UserPhoneInformation = (props) => {
    const {mobileNumberType,mobileNumber,mobilePreferredTime,onMobileToggle,isPrimaryMobile} = props;
    return (
        <View style={styles.editEmailHolder}>
            <View style={styles.profileDivideIcon}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {mobileNumberType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {mobileNumber}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {mobilePreferredTime}
                    </Text>
                </View>
                {/* <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View> */}
            </View>

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.marketingPrivacyLabel.marketingContactLabel}
                </Text>
                <View style={styles.editSwitchButton}>
                    <Switch trackColor={switchTrackColor}
                        onValueChange={onMobileToggle}
                        value={isPrimaryMobile}
                    />
                </View>
            </View>
        </View>
    );
};

UserPhoneInformation.propTypes = {
    mobileNumberType: PropTypes.string,
    mobileNumber: PropTypes.string,
    mobilePreferredTime: PropTypes.string,
    isPrimaryMobile: PropTypes.bool,
    onMobileToggle: PropTypes.func
};

UserPhoneInformation.defaultProps = {

    mobileNumberType: '',
    mobileNumber: '',
    mobilePreferredTime: '',
    isPrimaryMobile: false,
    onMobileToggle: null
};

export default UserPhoneInformation;