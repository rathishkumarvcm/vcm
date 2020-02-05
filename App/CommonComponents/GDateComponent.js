import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import DatePicker from 'react-native-datepicker';
import { GIcon } from './GIcon';
import { scaledHeight } from '../Utils/Resolution';

const styles = StyleSheet.create({
    componentStyle: {
        backgroundColor: "#FFFFFF",
        borderColor: "#DEDEDF",
        borderRadius: scaledHeight(4),
        borderWidth: 1,
        height: scaledHeight(48),
        justifyContent: "center",
        marginTop:scaledHeight(9),
        width: '100%'
    },
    dateIconStyle: {
        left: 0,
        marginLeft: 0,
        position: 'absolute',
        top: 4
    },
    dateInputStyle: {
        alignItems: 'flex-start',
        borderColor: "transparent",
        borderWidth: 0,
        justifyContent: 'center',
        marginLeft: 0
    },
    dateTextLayout: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    dateTextStyle: {
        alignItems: 'center',
        color: '#B5B5B5',
        fontSize: scaledHeight(16),
        justifyContent: 'center',
        marginLeft: scaledHeight(14),
        textAlign: 'left'
    },
    dateTitleName: {
        color: '#000000',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(8)
    },
    dateTouchBodyStyle: {},
    errorSection: {
        marginLeft: '4%',
        marginRight: '4%'
    },
    errorSectionText: {
        color: 'red',
        fontSize: scaledHeight(12)
    },
    errorView: {
        borderColor: 'red'
    },
});


export const GDateComponent = props => {
const {dateTextName,dateTextLayout,dateTitleName,inputref,errorFlag,componentStyle,
    date,mode,placeholder,format,minDate,maxDate,iconComponent,confirmBtnText,cancelBtnText,
    dateIconStyle,dateInputStyle,dateTextStyle,dateTouchBodyStyle,onDateChange,errorMsg} = props;
return(
    <View>
       {
           (dateTextName && dateTextName!=="") && (
           <View style={[styles.dateTextLayout, dateTextLayout]}>
           <Text style={[styles.dateTitleName, dateTitleName]}>
               {dateTextName}
           </Text>
           </View>
         )}
       
        <DatePicker
            ref={inputref}
            style={errorFlag ? [styles.componentStyle, componentStyle, styles.errorView] : [styles.componentStyle, componentStyle]}
            date={date}
            mode={mode}
            placeholder={placeholder}
            format={format}
            minDate={minDate}
            maxDate={maxDate}
            iconComponent={iconComponent}
            confirmBtnText={confirmBtnText}
            cancelBtnText={cancelBtnText}
            customStyles={{
                dateIcon: dateIconStyle,
                dateInput: dateInputStyle,
                dateText: dateTextStyle,
                dateTouchBody: dateTouchBodyStyle,
                placeholderText: dateTextStyle
            }}
            onDateChange={onDateChange}
        />
        {errorFlag ? (
<View style={styles.errorSection}>
            <Text style={styles.errorSectionText}>
                {errorMsg}
            </Text>
</View>
) : null}
    </View>

);
};

GDateComponent.propTypes = {
    componentStyle: PropTypes.instanceOf(Object),
    dateIconStyle: PropTypes.instanceOf(Object),
    dateInputStyle: PropTypes.instanceOf(Object),
    dateTextStyle: PropTypes.instanceOf(Object),   
    iconComponent: PropTypes.instanceOf(Object),
    dateTextLayout: PropTypes.instanceOf(Object),
    dateTitleName: PropTypes.instanceOf(Object),
    dateTouchBodyStyle: PropTypes.instanceOf(Object),

    date: PropTypes.string,
    dateTextName : PropTypes.string,
    format: PropTypes.string,
    mode: PropTypes.string,
    placeholder: PropTypes.string,
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string,
    errorFlag: PropTypes.bool,
    errorMsg: PropTypes.string,
    minDate:PropTypes.string,
    maxDate:PropTypes.string,

    onDateChange: PropTypes.func,
    // onOpenModal: PropTypes.func,
    // onCloseModal: PropTypes.func,
    // onPressMask: PropTypes.func,
    // getDateStr: PropTypes.func,

    inputref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.object })
    ])

};

GDateComponent.defaultProps = {
    componentStyle: styles.componentStyle,
    dateIconStyle: styles.dateIconStyle,
    dateInputStyle: styles.dateInputStyle,
    dateTextStyle: styles.dateTextStyle,
    // dateTouchBody: styles.dateTouchBodyStyle,
    dateTextLayout: styles.dateTextStyle,
    dateTitleName:styles.dateTitleName,
    dateTouchBodyStyle:{},

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
   // minDate:"",
    // maxDate:"",

    onDateChange: null,
    // onOpenModal: null,
    // onCloseModal: null,
    // onPressMask: null,
    // getDateStr: null,
    dateTextName:null
};

export default GDateComponent;



