import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";


const styles = StyleSheet.create({

    addView : {
        height:40,
        width:40,
        backgroundColor:'#06748C',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    minusView: {
        height:40,
        width:40,
        backgroundColor:'#06748C',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
});

export const GCounterComponent = props => (
    <TouchableOpacity>
        <TouchableOpacity onPress={props.onAddPress}>
        <View style={styles.addView}>
            <Text style={{fontSize:20}}>
                {"+"}
            </Text>
        </View>
        </TouchableOpacity>
    <TouchableOpacity onPress={props.onMinusPress}>
    <View style={styles.minusView}>
        <Text style={{fontSize:20}}>
            {"-"}
        </Text>
    </View>
    </TouchableOpacity>
    </TouchableOpacity>
);

GCounterComponent.propTypes = {
    onAddPress: PropTypes.func.isRequired,
    onMinusPress: PropTypes.func.isRequired
  };
  
  GCounterComponent.defaultProps = {
 
  };

export default GCounterComponent;
