import React from "react";
import { View , StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from "prop-types";

export const styles = StyleSheet.create({
    radioButtonLayout : {
        width : '80%', 
        //  marginRight : "50%", 
        marginTop : '5%',
        flexDirection: "row"
    },
    outerCircle : {
        height: 30,
        width: 30,
        // borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle : {
        height: 15,
        width: 15,
        // borderRadius: 6,
        backgroundColor: '#000'
    },
    optionsSection : {
        height:30, 
        marginLeft : '5%', 
        marginTop: '2%'
    }
});

export const GCheckBoxComponent = props => (
    <TouchableOpacity style={styles.radioButtonLayout} onPress={props.onPress}>
        <View style={styles.outerCircle}>
            {
              props.selected ?<View style={styles.innerCircle} /> : null
            }
        </View>
        <View style={styles.optionsSection}>
            <Text>{props.options}</Text>
        </View>
    </TouchableOpacity>
    );

    GCheckBoxComponent.propTypes = {
        selected : PropTypes.bool.isRequired,
        onPress : PropTypes.func.isRequired,
        options : PropTypes.string.isRequired
    };

    GCheckBoxComponent.defaultProps = {

    };


export default GCheckBoxComponent;