import React from "react";
import { Text, StyleSheet,View } from "react-native";
import PropTypes from "prop-types";
import { Dropdown } from 'react-native-material-dropdown';
import { scaledHeight } from '../Utils/Resolution';

/* **************************\
  Function: GButtonComponent
  Explanation:
  Custom component for Button, where ever in project need of
  Buttons this can be resued by giving  props value
\************************** */

const styles = StyleSheet.create({
// arrowIconStyle:{
//     position:'absolute',
//     right:20,
//     top:14
// },
// buttonStyle:{
//   alignItems:'center',
//   backgroundColor:"#56565A",
//   borderRadius:1,
//   height:scaledHeight(40),
//   justifyContent: "center",
//   marginTop:'2%',
//   width:'90%'
// },
// buttonTextStyle:{
//   fontSize: scaledHeight(14),
//   fontWeight: "bold",
//   lineHeight:scaledHeight(20),
// },
dropDownLayout:{
    marginLeft:'4%',
    marginRight:'4%',
    marginTop:scaledHeight(18),
},
dropDownTextName:{
    color:"#333333DE",
    fontSize:scaledHeight(16),
    fontWeight:'bold',
    // marginBottom:scaledHeight(8)
},
errorInputStyle : {
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor:'red',
    borderBottomWidth:1,
    borderColor:'red',
    borderWidth:1,
    height:scaledHeight(50),
    justifyContent:'center',
    paddingLeft:'4%'
 },
inputStyle : {
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth:1,
    borderColor:"#DEDEDF",
    borderWidth:1,
    height:scaledHeight(50),
    justifyContent:'center',
    paddingLeft:'4%'
},
optionalTxt: {
  color: 'rgba(51, 51, 51, 0.87)',
  fontSize: scaledHeight(16),
  fontWeight: 'normal',
},
pickerStyle : {
    borderColor:"#DEDEDF",
    borderWidth:1,
    marginLeft:'2%',
    width:'92%'
},
// showDropDownSectionStyle:{
//     backgroundColor:'white',
//     borderColor : "#DEDEDF",
//     borderWidth:1,
//     height: 100,
//     marginLeft:'4%',
//     marginRight:'4%',
//     width:'92%',
//     zIndex:1
// },
//  textInputStyle:{
//     marginLeft:'4%',
//     marginRight:'4%',
//     width : '92%',
// }
});


export const GDropDownComponent = props => {
  const {dropDownLayout,dropDownTextName,dropDownName,isOptional,data,errorFlag,
    dropDownValue,selectedDropDownValue,errorText,itemCount,disabled} = props;
  return(

    <View style={[styles.dropDownLayout,dropDownLayout]}>
    <Text style={[styles.dropDownTextName, dropDownTextName]}>
      <Text>
        {dropDownName}
      </Text>
       {isOptional && <Text style={styles.optionalTxt}>{" (Optional)"}</Text>}
    </Text>
            
    <Dropdown
      data={data}
      dropdownOffset={{ 'top': 5 }}
      baseColor="#DEDEDF"
      // dropdownPosition={-5.75}
      placeholder= "Select"
      pickerStyle={styles.pickerStyle}
      inputContainerStyle={!errorFlag ? styles.inputStyle : styles.errorInputStyle}
      value={dropDownValue}
      onChangeText={selectedDropDownValue}
      error={errorFlag ? errorText : null}
      itemCount={itemCount}
      disabled={disabled}

    />
    </View>

);
  };

GDropDownComponent.propTypes = {
  dropDownName : PropTypes.string,
 // showDropDown : PropTypes.bool,
  isOptional:PropTypes.bool,
  disabled:PropTypes.bool,
  data:PropTypes.instanceOf(Object),
  errorFlag:PropTypes.instanceOf(Object),
  dropDownLayout: PropTypes.instanceOf(Object),
  // pickerStyle: PropTypes.instanceOf(Object),
  dropDownTextName: PropTypes.instanceOf(Object),
  // textInputStyle: PropTypes.instanceOf(Object),
  // dropDownPostition : PropTypes.instanceOf(Object),
  selectedDropDownValue: PropTypes.func,
 // changeState : PropTypes.func,
  errorText:PropTypes.string,
//   inputref : PropTypes.oneOfType([
//     PropTypes.func, 
//     PropTypes.shape({ current: PropTypes.object })
// ]),
};

GDropDownComponent.defaultProps = {
  dropDownName:"",
  disabled : false,
  isOptional:false,
  // buttonStyle: {},
  // textStyle: {},
  data:{},
  errorFlag:{},
  dropDownLayout:{},
  dropDownTextName:{},
  // textInputStyle:{},
  // dropDownPostition:{},
  selectedDropDownValue:null,
  // changeState:null,
  errorText:"",

};

export default GDropDownComponent;


