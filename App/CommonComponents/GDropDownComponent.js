import React from "react";
import { Text, TouchableOpacity, StyleSheet,View, FlatList } from "react-native";
import PropTypes from "prop-types";
import {GInputComponent} from './GInputComponent';
import {GIcon} from './GIcon';
import { Dropdown } from 'react-native-material-dropdown';
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
},
dropDownLayout:{
    marginTop:scaledHeight(18),
    marginLeft:'4%',
    marginRight:'4%',
},
dropDownTextName:{
    color:"#333333DE",
    fontSize:scaledHeight(16),
    fontWeight:'bold',
    //marginBottom:scaledHeight(8)
},
textInputStyle:{
    marginLeft:'4%',
    marginRight:'4%',
    width : '92%',
},
arrowIconStyle:{
    position:'absolute',
    right:20,
    top:14
},
showDropDownSectionStyle:{
    height: 100,
    zIndex:1,
    borderWidth:1,
    marginLeft:'4%',
    marginRight:'4%',
    width:'92%',
    borderColor : "#DEDEDF",
    backgroundColor:'white'
},
pickerStyle : {
    borderColor:"#DEDEDF",
    borderWidth:1,
    width:'92%',
    marginLeft:'2%'
},
inputStyle : {
    height:scaledHeight(50),
    borderBottomWidth:1,
    borderColor:"#DEDEDF",
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF',
    paddingLeft:'4%'
},
errorInputStyle : {
    height:scaledHeight(50),
    borderBottomWidth:1,
    borderWidth:1,
    borderColor:'red',
    borderBottomColor:'red',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF',
    paddingLeft:'4%'
 },
 optionalTxt: {
  color: 'rgba(51, 51, 51, 0.87)',
  fontSize: scaledHeight(16),
  fontWeight: 'normal',
}
});


export const GDropDownComponent = props => (

    <View style={[styles.dropDownLayout,props.dropDownLayout]}>
    <Text style={[styles.dropDownTextName, props.dropDownTextName]}>
      <Text>
        {props.dropDownName}
      </Text>
       {props.isOptional && <Text style={styles.optionalTxt}>{" (Optional)"}</Text>}
    </Text>
            
    <Dropdown
      data={props.data}
      dropdownOffset={{ 'top': 5 }}
      baseColor={"#DEDEDF"}
      //dropdownPosition={-5.75}
      pickerStyle={styles.pickerStyle}
      inputContainerStyle={!props.errorFlag ? styles.inputStyle : styles.errorInputStyle}
      value={props.dropDownValue}
      onChangeText={props.selectedDropDownValue}
      error={props.errorFlag ? props.errorText : null}
      itemCount={props.itemCount}
      disabled={props.disabled}

    />
        </View>

);

GDropDownComponent.propTypes = {
  dropDownName : PropTypes.string,
  showDropDown : PropTypes.bool,
  isOptional:PropTypes.bool,
  disabled:PropTypes.bool,

  dropDownLayout: PropTypes.instanceOf(Object),
  //pickerStyle: PropTypes.instanceOf(Object),
  dropDownTextName: PropTypes.instanceOf(Object),
  textInputStyle: PropTypes.instanceOf(Object),
  dropDownPostition : PropTypes.instanceOf(Object),
  selectedDropDownValue: PropTypes.func,
  changeState : PropTypes.func,
  inputref : PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.object })
]),
};

GDropDownComponent.defaultProps = {
  disabled : false,
  isOptional:false,
  buttonStyle: {},
  textStyle: {}
};

export default GDropDownComponent;


