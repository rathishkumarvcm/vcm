/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View,Image,Text,TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent } from '../../CommonComponents';



const GuestUserCommunicationCenter = (props) => {   

    return (
            <View style={styles.communicationView}>
                <TouchableOpacity style={styles.phoneImageView} onPress={props.onPressCall}>
                    <Image style={styles.phoneImage}
                        // eslint-disable-next-line global-require
                        source={require('../../Images/call.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.phoneTextView}>
                    <Text style={styles.phoneContentText}>Please contanct Victory Capital Management service Rep at</Text>
                    <Text style={styles.phoneNumText}>+ 1 466 210 0255</Text>
                </View>
                
                <GButtonComponent
                    buttonStyle={styles.callButton}
                    buttonText="Call"
                    textStyle={styles.linkButtonText}
                    onPress={props.onPressCall}
                />
            </View>
    );

};

GuestUserCommunicationCenter.propTypes = {
    onPress: PropTypes.func,
};
  
GuestUserCommunicationCenter.defaultProps = {
    onPress: PropTypes.func
};


export default GuestUserCommunicationCenter;