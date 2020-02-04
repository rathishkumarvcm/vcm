import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";


const styles = StyleSheet.create({

    addView : {
        alignItems:'center',
        backgroundColor:'#06748C',
        borderRadius:10,
        height:40,
        justifyContent:'center',
        width:40
    },
    fontSizeStyle:{
        fontSize:20
    },
    minusView: {
        alignItems:'center',
        backgroundColor:'#06748C',
        borderRadius:10,
        height:40,
        justifyContent:'center',
        width:40
    }
});

export const GCounterComponent = props => {
    const {onAddPress,onMinusPress} = props;
return(
    <TouchableOpacity>
        <TouchableOpacity onPress={onAddPress}>
        <View style={styles.addView}>
            <Text style={styles.fontSizeStyle}>
                +
            </Text>
        </View>
        </TouchableOpacity>
    <TouchableOpacity onPress={onMinusPress}>
    <View style={styles.minusView}>
        <Text style={styles.fontSizeStyle}> 
            -
        </Text>
    </View>
    </TouchableOpacity>
    </TouchableOpacity>
);
};

GCounterComponent.propTypes = {
    onAddPress: PropTypes.func.isRequired,
    onMinusPress: PropTypes.func.isRequired
  };
  
  GCounterComponent.defaultProps = {
 
  };

export default GCounterComponent;
