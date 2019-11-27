import React from "react";
import { Text, TouchableOpacity, StyleSheet,View, FlatList } from "react-native";
import PropTypes from "prop-types";
import {GInputComponent} from './GInputComponent';
import {GIcon} from './GIcon';
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
    paddingLeft:'4%',
    paddingRight:'4%',
},
dropDownTextName:{
    color:'#000000',
    fontSize:scaledHeight(16),
    fontWeight:'bold',
    marginBottom:scaledHeight(8)
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
}
});


export const GDropDownComponent = props => (
    <>
    <View style={[styles.dropDownLayout,props.dropDownLayout]}>
        <Text style={[styles.dropDownTextName,props.dropDownTextName]}>
            {props.dropDownName}       
        </Text>
    </View>


    <GInputComponent 
        propInputStyle={[styles.textInputStyle,props.textInputStyle]} 
        placeholder={""}
        editable={false}
        value={props.dropDownValue}
        errorFlag={props.errorFlag}
        errorText={props.errorText}
        dropDownBox={true}
        dropDownClick={props.changeState}
    />

    



{props.showDropDown && 
<View style={[styles.showDropDownSectionStyle,props.dropDownPostition]}
>
<FlatList
    data={props.data}
    renderItem={({ item }) => 
    (<TouchableOpacity style={{ height: 33 }} onPress={() => props.selectedDropDownValue(item.title)}>
        <Text> {item.title} </Text>
     </TouchableOpacity>)
    }
keyExtractor={item => item.id}
/>
</View> }
</>

);

GDropDownComponent.propTypes = {
  dropDownName : PropTypes.string,
  showDropDown : PropTypes.bool,
  dropDownLayout: PropTypes.instanceOf(Object),
  dropDownTextName: PropTypes.instanceOf(Object),
  textInputStyle: PropTypes.instanceOf(Object),
  dropDownPostition : PropTypes.instanceOf(Object),
  selectedDropDownValue: PropTypes.func,
  changeState : PropTypes.func
};

GDropDownComponent.defaultProps = {
  disabled : false,
  buttonStyle: {},
  textStyle: {}
};

export default GDropDownComponent;


