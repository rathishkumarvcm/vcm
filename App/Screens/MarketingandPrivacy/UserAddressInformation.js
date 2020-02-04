import React from 'react';
import { View, Text, Switch} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import globalString from '../../Constants/GlobalStrings';

//  Address Informations Data
const switchTrackColor = { flase: '#DBDBDB', true: '#444444' };
const UserAddressInformation = (props) => {
    const {addressType,addressLineOne,addressCity,addressState,isMailingAddress,onAddressToggle} = props;
    return (
        <View style={styles.editEmailHolder}>
            <View style={styles.profileDivideIcon}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
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
                        onValueChange={onAddressToggle}
                        value={isMailingAddress}
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
    isMailingAddress: PropTypes.bool,   
    onAddressToggle:PropTypes.func,
};

UserAddressInformation.defaultProps = {
    addressType: '',
    addressLineOne: '',   
    addressCity:'',
    addressState:'',   
    isMailingAddress: false,
    onAddressToggle: null
};

export default UserAddressInformation;