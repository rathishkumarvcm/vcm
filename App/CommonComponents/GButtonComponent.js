import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { scaledHeight } from '../Utils/Resolution';


/* **************************\
  Function: GButtonComponent
  Explanation:
  Custom component for Button, where ever in project need of
  Buttons this can be resued by giving  props value
\************************** */
const styles = StyleSheet.create({
buttonStyle:{
  height:scaledHeight(40),
  width:'90%',
  justifyContent: "center",
  alignItems:'center',
  borderRadius:1,
  backgroundColor:"#56565A",
  marginTop:'2%' 
  
},
buttonTextStyle:{
  fontSize: scaledHeight(14),
  fontWeight: "bold",
  lineHeight:scaledHeight(20),
}
});


export const GButtonComponent = props => (
  <TouchableOpacity 
    onPress={props.onPress}
    disabled={props.disabled}
    style={[styles.buttonStyle,props.buttonStyle]}
    activeOpacity={0.8}
  >
   {props.textStyle ? <Text style={[props.textStyle]}>{props.buttonText}</Text> :
   <Text style={[styles.buttonTextStyle,props.textStyle]}>{props.buttonText}</Text>

   } 
  </TouchableOpacity>

);

GButtonComponent.propTypes = {
  disabled : PropTypes.bool,
  buttonStyle: PropTypes.instanceOf(Object),
  textStyle: PropTypes.instanceOf(Object),
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

GButtonComponent.defaultProps = {
  disabled : false,
  buttonStyle: {},
  textStyle: {},
  onPress: PropTypes.func
};

export default GButtonComponent;
