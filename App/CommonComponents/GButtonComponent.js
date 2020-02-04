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
  alignItems:'center',
  backgroundColor:"#56565A",
  borderRadius:1,
  height:scaledHeight(40),
  justifyContent: "center",
  marginTop:'2%',
  width:'90%' 
  
},
buttonTextStyle:{
  fontSize: scaledHeight(14),
  fontWeight: "bold",
  lineHeight:scaledHeight(20),
}
});

export const GButtonComponent = props => {
  const {onPress,disabled,buttonStyle,textStyle,buttonText}=props;
  return(
  <TouchableOpacity 
    onPress={onPress}
    disabled={disabled}
    style={[styles.buttonStyle,buttonStyle]}
    activeOpacity={0.8}
  >
   {textStyle ? <Text style={textStyle}>{buttonText}</Text> :
   <Text style={[styles.buttonTextStyle,textStyle]}>{buttonText}</Text>

   } 
  </TouchableOpacity>

);
};

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
