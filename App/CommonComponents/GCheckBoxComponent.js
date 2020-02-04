import React from "react";
import { View , StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from "prop-types";

export const styles = StyleSheet.create({
    innerCircle : {
        backgroundColor: '#000',
        height: 15,  
        width: 15
    },
    optionsSection : {
        height:30, 
        marginLeft : '5%', 
        marginTop: '2%'
    },
    outerCircle : {
        alignItems: 'center',
        borderColor: '#000',      
        borderWidth: 2,
        height: 30,
        justifyContent: 'center',
        width: 30,
    },
    radioButtonLayout : {
        flexDirection: "row",        
        marginTop : '5%',
        width : '80%'
    }
});

export const GCheckBoxComponent = props => {
    const {onPress,selected,options}= props;
    return(
    <TouchableOpacity style={styles.radioButtonLayout} onPress={onPress}>
        <View style={styles.outerCircle}>
            {
              selected ?<View style={styles.innerCircle} /> : null
            }
        </View>
        <View style={styles.optionsSection}>
            <Text>{options}</Text>
        </View>
    </TouchableOpacity>
    );
    };

    GCheckBoxComponent.propTypes = {
        selected : PropTypes.bool.isRequired,
        onPress : PropTypes.func.isRequired,
        options : PropTypes.string.isRequired
    };

    GCheckBoxComponent.defaultProps = {

    };


export default GCheckBoxComponent;