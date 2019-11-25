import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import GIcon from "./GIcon";


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },    
    buttonStyle:{
      height:50,
      width:'90%',
      justifyContent: "center",
    //   alignItems:'center',
      borderRadius:1,
      backgroundColor:"#06748C",
      marginTop:'2%' 
      
    },
    buttonTextStyle:{
      fontSize: 17,
      fontWeight: "bold",
      lineHeight:20,
    },
    leftIconView:{
      flex: 0.2, 
      alignItems:"flex-start"
    },
    rightIconView:{
       flex: 0.2, 
       alignItems:"flex-end"
    },
    buttonTextView:{
       flex: 0.8, 
       alignItems:"center"
    }
});
    

export const GIconButton = props => {
    
    return (
        <View>        
            <TouchableOpacity
                style = {[styles.buttonStyle,props.buttonStyle]}
                activeOpacity = {0.8}
                onPress = {props.onPress}
            >
                <View style={styles.wrapper}>
                    {!props.iconRight &&
                    <View style={styles.leftIconView}>
                        <GIcon name={props.icon} type={props.iconType} size={props.iconSize} color={props.iconColor} />
                    </View>
                    }
                    <View style={styles.buttonTextView}> 
                        <Text style = {[styles.buttonTextStyle,props.textStyle]}>{props.title}</Text>
                    </View>
                    {props.iconRight &&
                    <View style={styles.rightIconView}>
                        <GIcon name={props.icon} type={props.iconType} size={props.iconSize} color={props.iconColor} />
                    </View>
                    }                    
                </View>
            </TouchableOpacity>
        </View>
    );
};

GIconButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconType: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    iconRight: PropTypes.bool,
    disabled : PropTypes.bool,
    buttonStyle: PropTypes.instanceOf(Object),
    textStyle: PropTypes.instanceOf(Object),
    onPress: PropTypes.func
};
  
GIconButton.defaultProps = {
    iconSize : 30,
    iconRight: false,
    disabled : false,
    buttonStyle: {},
    textStyle: {}
};

export default GIconButton;