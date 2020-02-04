import React from 'react';
import { View, Text, Switch} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';

const switchTrackColor = { flase: '#DBDBDB', true: '#444444' };
const UserEmailInformation = (props) => {
    const {emailType,emailId,onEmailToggle,isPrimaryEmail} = props;
    return (
        <View style={styles.editEmailHolder}>
            <View style={styles.profileDivideIcon}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {emailType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {emailId}
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
                        onValueChange={onEmailToggle}
                        value={isPrimaryEmail}
                    />
                </View>
            </View>
        </View>
    );
};

UserEmailInformation.propTypes = {
    emailType: PropTypes.string,
    emailId: PropTypes.string,
    isPrimaryEmail: PropTypes.bool,
    onEmailToggle: PropTypes.func
};

UserEmailInformation.defaultProps = {
    emailType: '',
    emailId: '',   
    isPrimaryEmail: false,
    onEmailToggle: null
};

export default UserEmailInformation;