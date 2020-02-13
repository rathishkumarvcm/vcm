import React from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import PropTypes from "prop-types";
import { scaledHeight,getCustomStyle } from '../Utils/Resolution';
import { GIcon } from './GIcon';
import onlineIdprofile from '../Images/onlineIdprofile.png';
import onlineIdpassword from '../Images/onlineIdpassword.png';

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
  logoStyle:{
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
  inputBoxErrViewStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "red",
    borderRadius: scaledHeight(4),
    borderWidth: 1,
    height: scaledHeight(48),
    justifyContent: "center",
    width: '92%'
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
    placeholderTextColor,selectionColor,autoCapitalize,dropDownBox,arrowIconStyle,dropDownClick,
    errorText, underlineColorAndroid,loginOnlineId,loginPassword} = props;
return(
  <>
    <View style={errorFlag ? getCustomStyle(styles.inputBoxErrViewStyle, propInputStyle) : getCustomStyle(styles.inputBoxStyle, propInputStyle)}>
      <TextInput
        style={getCustomStyle(styles.textInputStyle, inputStyle)}
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
        underlineColorAndroid={underlineColorAndroid}
        autoCapitalize={autoCapitalize}
      />
      
      {dropDownBox ? (
        <TouchableOpacity style={getCustomStyle(styles.arrowIconStyle, arrowIconStyle)} onPress={dropDownClick}>
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
        {loginOnlineId ? (        
          <Image style={styles.logoStyle} source={onlineIdprofile} />  
        ):null}
         {loginPassword ? (        
          <Image style={styles.logoStyle} source={onlineIdpassword} />  
        ):null}        
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
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoFocus: PropTypes.bool,
  editable: PropTypes.bool,
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
  propInputStyle: PropTypes.instanceOf(Object),
  dropDownBox:PropTypes.bool,
  errorFlag:PropTypes.bool,
  errorText:PropTypes.string,
  loginOnlineId:PropTypes.bool,
  loginPassword:PropTypes.bool
};

GInputComponent.defaultProps = {
  inputStyle: {},
  arrowIconStyle:{},
  value: '',
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
  underlineColorAndroid: "transparent",
  autoCapitalize: "none",
  secureTextEntry:false,
  onFocus:() => { },
  dropDownClick:() => { },
  onKeyPress:() => { },
  propInputStyle:{},
  dropDownBox:false,
  errorFlag:false,
  errorText:'' ,
  loginOnlineId:false,
  loginPassword:false

};

export default GInputComponent;