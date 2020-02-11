import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { scaledHeight } from '../Utils/Resolution';

/* **************************\
  Function: GButtonComponent
  Explanation:
  Custom component for Button, where ever in project need of
  Buttons this can be resued by giving  props value

  Developer : Rathish
\************************** */
const createStyles = (props) => { 
return StyleSheet.create({
    buttonStyle:{
      alignItems:'center',
      backgroundColor:"#56565A",
      borderRadius:1,
      height:scaledHeight(props.height),
      justifyContent: "center",
      marginTop:'2%',
      width:'90%',
      ...props.buttonStyle
}
});
};

export const GButtonComponent = props => {
  const {onPress,disabled,textStyle,buttonText}=props;
  const styles = createStyles(props);
  return(
  <TouchableOpacity 
    onPress={onPress}
    disabled={disabled}
    style={styles.buttonStyle}
    activeOpacity={0.8}
  >
   {textStyle ? <Text style={textStyle}>{buttonText}</Text> :
   <Text style={styles.buttonStyle}>{buttonText}</Text>

   } 
  </TouchableOpacity>

);
};

GButtonComponent.propTypes = {
  disabled : PropTypes.bool,
  // buttonStyle: PropTypes.func,
  textStyle: PropTypes.instanceOf(Object),
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

GButtonComponent.defaultProps = {
  disabled : false,
  // buttonStyle: () => {},
  textStyle: {},
  onPress: PropTypes.func
};

export default GButtonComponent;
