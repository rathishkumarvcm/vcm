import React from "react";
import {View} from "react-native";
import PropTypes from "prop-types";
import GFloatingLabel from "./GFloatingLabel";

/* Custom component for Input Field , where ever in project need of
 Input field this can be resued by giving props value */

export const GFloatingInputComponent = props => {
  return (
    <View
      {...props}
      style={[
        props.contentStyle
      ]}
    >
      <View>
        <View style={{flexDirection: "row"}}>
          <GFloatingLabel
            labelStyle={props.labelStyle}
            placeholder={props.placeHolderText}
            inputStyle={props.inputBorder}
            style={[props.inputStyle]}
            value={props.value}
            onBlur={props.onBlur}
            secureTextEntry={props.isSecure}
            onChangeText={props.onChangeText}
            returnKeyType={props.returnType}
            disabled={props.disabled}
            keyboardType={props.keyboardType}
            underlineColorAndroid="transparent"
            bigFontSize={props.bigFontSize}
            updateRefs={props.updateRefs}
          >
            {props.labelText}
          </GFloatingLabel>
        </View>
      </View>
    </View>
  );
};

GFloatingInputComponent.propTypes = {
  labelText: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object),
  passwordText: PropTypes.string,
  value: PropTypes.string,
  labelStyle : PropTypes.instanceOf(Object),
  placeHolderText : PropTypes.string,
  inputBorder : PropTypes.instanceOf(Object),
  inputStyle : PropTypes.instanceOf(Object),
  onBlur : PropTypes.func,
  isSecure : PropTypes.bool,
  onChangeText : PropTypes.func,
  returnType : PropTypes.func,
  disabled : PropTypes.bool,
  keyboardType : PropTypes.func,
  bigFontSize : PropTypes.instanceOf(Object),
  updateRefs : PropTypes.func,
  contentStyle : PropTypes.instanceOf(Object)
};

GFloatingInputComponent.defaultProps = {
  style: {},
  passwordText: "",
  value: ""
};

export default GFloatingInputComponent;
