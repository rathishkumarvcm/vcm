import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import DatePicker from 'react-native-datepicker';
import { GIcon } from './GIcon';
import GDateComponentStyle from './GDateComponentStyle';


const getCustomStyles = (styles,props) => {
  return {
        dateIcon: [styles.dateIconStyle,props.dateIconStyle],
        dateInput: [styles.dateInputStyle,props.dateInputStyle],
        dateText: [styles.dateTextStyle,props.dateTextStyle],
        dateTouchBody: props.dateTouchBodyStyle,
        placeholderText: [styles.dateTextStyle,props.dateTextStyle]
      
};
};

export const GDateComponent = props => {
const {dateTextName,errorFlag,date,mode,placeholder,format,minDate,maxDate,iconComponent,confirmBtnText,cancelBtnText,onDateChange,errorMsg} = props;
    const styles = GDateComponentStyle(props);
    const customStyles = getCustomStyles(styles,props);
return(
    <View style={styles.container}>
       {
           (dateTextName && dateTextName!=="") && (
           <View style={styles.dateTextLayout}>
           <Text style={styles.dateTitleName}>
               {dateTextName}
           </Text>
           </View>
         )}
       
        <DatePicker
            style={errorFlag ? styles.componentErrViewStyle :styles.componentStyle}
            date={date}
            mode={mode}
            placeholder={placeholder}
            format={format}
            minDate={minDate}
            maxDate={maxDate}
            iconComponent={iconComponent}
            confirmBtnText={confirmBtnText}
            cancelBtnText={cancelBtnText}
            customStyles={customStyles}
            onDateChange={onDateChange}
            is24Hour={false}
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
    iconComponent:PropTypes.instanceOf(Object),
    onDateChange: PropTypes.func,
    // onOpenModal: PropTypes.func,
    // onCloseModal: PropTypes.func,
    // onPressMask: PropTypes.func,
    // getDateStr: PropTypes.func,

    // inputref: PropTypes.oneOfType([
    //     PropTypes.func,
    //     PropTypes.shape({ current: PropTypes.object })
    // ])

};

GDateComponent.defaultProps = {

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
    minDate: undefined,
    maxDate: undefined,

    onDateChange: null,
    // onOpenModal: null,
    // onCloseModal: null,
    // onPressMask: null,
    // getDateStr: null,
    dateTextName:null
};

export default GDateComponent;



