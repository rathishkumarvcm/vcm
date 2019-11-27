import React from "react";
import {View,Text,StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { GIcon } from './GIcon';
import { scaledHeight } from '../Utils/Resolution';
import DatePicker from 'react-native-datepicker';



const styles = StyleSheet.create({
    componentStyle : {
        height:scaledHeight(48),
        backgroundColor : "#FFFFFF",
        marginTop: scaledHeight(9),
        width : '100%',
        borderRadius:scaledHeight(4),
        justifyContent: "center",
        borderWidth : 1,
        borderColor : "#DEDEDF"
    },
    dateTextStyle :{
        fontSize: scaledHeight(16),
        marginLeft:scaledHeight(14),
        alignItems : 'center',
        justifyContent : 'center',
        color:'#B5B5B5',
        textAlign:'left'
    },
    dateInputStyle : {
        marginLeft: 0,
        borderWidth : 0,
        borderColor : "transparent",
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    dateIconStyle : {
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 0
    },
    dateTouchBodyStyle : {
      
    },
    errorSection:{
      marginLeft:'4%',
      marginRight:'4%'
    },
    errorSectionText:{
      color:'red',
      fontSize:scaledHeight(12)
    },
    errorView:{
      marginLeft:'4%',
      marginRight:'4%',
      borderColor:'red'
  }
});


export const GDateComponent = props => (
    <View>
    <DatePicker
        style={props.errorFlag ? [styles.componentStyle,props.componentStyle,styles.errorView]:[styles.componentStyle,props.componentStyle]}
        date={props.date}
        mode={props.mode}
        placeholder={props.placeholder}
        format={props.format}
        // minDate=""
        // maxDate=""
        iconComponent={props.iconComponent}
        confirmBtnText= {props.confirmBtnText}
        cancelBtnText= {props.cancelBtnText}
        customStyles={{
            dateIcon:props.dateIconStyle,
            dateInput: props.dateInputStyle,
            dateText: props.dateTextStyle,
            dateTouchBody:props.dateTouchBodyStyle,
            placeholderText:props.dateTextStyle
        }}
        onDateChange={props.onDateChange}
    />
        {props.errorFlag ? <View style={styles.errorSection}>
            <Text style={styles.errorSectionText}>
                {props.errorMsg}
            </Text>
        </View> : null}
    </View>

);

GDateComponent.propTypes = {
    componentStyle: PropTypes.instanceOf(Object),
    dateIconStyle: PropTypes.instanceOf(Object),
    dateInputStyle: PropTypes.instanceOf(Object),
    dateTextStyle: PropTypes.instanceOf(Object),
    dateTouchBody: PropTypes.instanceOf(Object),
    iconComponent: PropTypes.instanceOf(Object),


    date: PropTypes.string,
    format: PropTypes.string,
    mode: PropTypes.string,
    placeholder: PropTypes.string,
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string, 
    errorFlag: PropTypes.bool, 
    errorMsg: PropTypes.string, 

   
    onDateChange: PropTypes.func,
    onOpenModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    onPressMask: PropTypes.func,
    getDateStr: PropTypes.func,

};

GDateComponent.defaultProps = {
    componentStyle: styles.componentStyle,
    dateIconStyle: styles.dateIconStyle,
    dateInputStyle: styles.dateInputStyle,
    dateTextStyle: styles.dateTextStyle,
    dateTouchBody: styles.dateTouchBodyStyle,
   

    date: "",
    format: "MM-DD-YYYY",
    mode: "date",
    placeholder: "Select Date",
    iconComponent: <GIcon
        name="calendar"
        type="font-awesome"
        size={20}
        color="#B5B5B5"
    />,
    confirmBtnText: "Confirm",
    cancelBtnText: "Cancel",
    errorFlag: false, 
    errorMsg: "", 

    onDateChange: null,
    onOpenModal: null,
    onCloseModal: null,
    onPressMask: null,
    getDateStr: null,
};

export default GDateComponent;


