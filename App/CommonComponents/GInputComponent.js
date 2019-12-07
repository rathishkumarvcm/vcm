import React from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';
import { GIcon } from './GIcon';
/* **************************\
  Function: GInputComponent
  Explanation:
  Custom component for Input Field, where ever in project need of
  Input Fields this can be resued by giving  props value
\************************** */

export const styles = StyleSheet.create({

  textInputStyle: {
    fontSize: scaledHeight(16),
    marginLeft: scaledHeight(14),
    alignItems: 'center',
    justifyContent: 'center',
    color: '#B5B5B5'
  },
  inputBoxStyle: {
    height: scaledHeight(48),
    backgroundColor: "#FFFFFF",
    width: '92%',
    borderRadius: scaledHeight(4),
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DEDEDF"
  },
  errorSection: {
    marginLeft: '4%',
    marginRight: '4%'
  },
  errorSectionText: {
    color: 'red',
    fontSize: scaledHeight(12)
  },
  errorView: {
    //marginLeft:'4%',
    //marginRight:'4%',
    borderColor: 'red'
  },
  arrowIconStyle: {
    position: 'absolute',
    right: 15,
    top: 15
  }
});

export const GInputComponent = (props) => (
  <>
    <View style={props.errorFlag ? [styles.inputBoxStyle, props.propInputStyle, styles.errorView] : [styles.inputBoxStyle, props.propInputStyle]}>
      <TextInput
        {...props}
        style={[styles.textInputStyle, props.inputStyle]}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        autoFocus={props.autoFocus}
        editable={props.editable}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        onFocus={props.onFocus}
        onKeyPress={props.onKeyPress}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        maxLength={props.maxLength}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        selectionColor={props.selectionColor}
        underlineColorAndroid={props.underlineColorAndroid}
        autoCapitalize={props.autoCapitalize}
        ref={props.inputref}
      >
        {props.inputText}
      </TextInput>
      {props.dropDownBox ?
        <TouchableOpacity style={[styles.arrowIconStyle, props.arrowIconStyle]} onPress={props.dropDownClick}>
          <GIcon
            name="md-arrow-dropdown"
            type="ionicon"
            size={20}
            color="black"
          />
        </TouchableOpacity>
        :
        null}



    </View>
    {props.errorFlag ? <View style={styles.errorSection}>
      <Text style={styles.errorSectionText}>
        {props.errorText}
      </Text>
    </View> : null}

  </>
);

GInputComponent.propTypes = {
  inputStyle: PropTypes.instanceOf(Object),
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoFocus: PropTypes.bool,
  editable: PropTypes.bool,
  inputText: PropTypes.string,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  selectionColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  autoCapitalize: PropTypes.string,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  inputref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  propInputStyle: PropTypes.instanceOf(Object)
};

GInputComponent.defaultProps = {
  inputStyle: {},
  // value: '',
  autoFocus: false,
  editable: true,
  keyboardType: "default",
  returnKeyType: "next",
  onBlur: null,
  onChange: null,
  onChangeText: null,
  onSubmitEditing: null,
  maxLength: 100,
  multiline: false,
  numberOfLines: 1,
  placeholder: "",
  placeholderTextColor: null,
  selectionColor: null,
  underlineColorAndroid: null,
  autoCapitalize: "none"
};

export default GInputComponent;