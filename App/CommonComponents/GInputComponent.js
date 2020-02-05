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

  arrowIconStyle: {
    position: 'absolute',
    right: 15,
    top: 15
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
    // marginLeft:'4%',
    // marginRight:'4%',
    borderColor: 'red'
  },
  inputBoxStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "#DEDEDF",
    borderRadius: scaledHeight(4),
    borderWidth: 1,
    height: scaledHeight(48),
    justifyContent: "center",
    width: '92%'
  },
  textInputStyle: {
    alignItems: 'center',
    color: '#B5B5B5',
    fontSize: scaledHeight(16),
    justifyContent: 'center',
    marginLeft: scaledHeight(14)
  }
});

export const GInputComponent = (props) => {

  const {errorFlag,propInputStyle,inputStyle,value,secureTextEntry,autoFocus,editable,onBlur,onChange,onChangeText,
    onSubmitEditing,onFocus,onKeyPress,keyboardType,returnKeyType,maxLength,multiline,numberOfLines,placeholder,
    placeholderTextColor,selectionColor,autoCapitalize,inputref,inputText,dropDownBox,arrowIconStyle,dropDownClick,
    errorText} = props;
return(
  <>
    <View style={errorFlag ? [styles.inputBoxStyle, propInputStyle, styles.errorView] : [styles.inputBoxStyle, propInputStyle]}>
      <TextInput
        {...props}
        style={[styles.textInputStyle, inputStyle]}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoFocus={autoFocus}
        editable={editable}
        onBlur={onBlur}
        onChange={onChange}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        // underlineColorAndroid={props.underlineColorAndroid}
        autoCapitalize={autoCapitalize}
        ref={inputref}
        underlineColorAndroid="transparent"
      >
        {inputText}
      </TextInput>
      {dropDownBox ? (
        <TouchableOpacity style={[styles.arrowIconStyle, arrowIconStyle]} onPress={dropDownClick}>
          <GIcon
            name="md-arrow-dropdown"
            type="ionicon"
            size={20}
            color="black"
          />
        </TouchableOpacity>
      )
        :
        null}
    </View>
    {errorFlag ? (
<View style={styles.errorSection}>
      <Text style={styles.errorSectionText}>
        {errorText}
      </Text>
</View>
) : null}
  </>
);
};

GInputComponent.propTypes = {
  inputStyle: PropTypes.instanceOf(Object),
  arrowIconStyle: PropTypes.instanceOf(Object),
  // value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoFocus: PropTypes.bool,
  editable: PropTypes.bool,
 // inputText: PropTypes.string,
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
  dropDownClick:PropTypes.func,
  onKeyPress: PropTypes.func,
  inputref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  propInputStyle: PropTypes.instanceOf(Object),
  dropDownBox:PropTypes.bool,
  errorFlag:PropTypes.bool,
  errorText:PropTypes.string
};

GInputComponent.defaultProps = {
  inputStyle: {},
  arrowIconStyle:{},
  // value: '',
  autoFocus: false,
  editable: true,
  keyboardType: "default",
  returnKeyType: "next",
  onBlur: () => { },
  onChange: () => { },
  onChangeText: () => { },
  onSubmitEditing: () => { },
  maxLength: 100,
  multiline: false,
  numberOfLines: 1,
  placeholder: "",
  placeholderTextColor: null,
  selectionColor: null,
  underlineColorAndroid: null,
  autoCapitalize: "none",
  secureTextEntry:false,
  // inputText:'',
  onFocus:() => { },
  dropDownClick:() => { },
  onKeyPress:() => { },
  propInputStyle:{},
  dropDownBox:false,
  errorFlag:false,
  errorText:''  
};

export default GInputComponent;