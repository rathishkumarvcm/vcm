import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { GIcon } from './GIcon';
import { scaledHeight } from '../Utils/Resolution';
import DatePicker from 'react-native-datepicker';



const styles = StyleSheet.create({
    componentStyle: {
        backgroundColor: "#FFFFFF",
        borderColor: "#DEDEDF",
        borderRadius: scaledHeight(4),
        borderWidth: 1,
        height: scaledHeight(48),
        justifyContent: "center",
        marginLeft: '4%',
        marginRight: '4%',
        width: '92%'
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
    dateTouchBodyStyle: {

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
        borderColor: 'red',
        marginLeft: '4%',
        marginRight: '4%'
    },
});


export const GDateComponent = props => (
    <View>

        <View style={[styles.dateTextLayout, props.dateTextLayout]}>
            <Text style={[styles.dateTitleName, props.dateTitleName]}>
                {props.dateTextName}
            </Text>
        </View>
        <DatePicker
            ref={props.inputref}
            style={props.errorFlag ? [styles.componentStyle, props.componentStyle, styles.errorView] : [styles.componentStyle, props.componentStyle]}
            date={props.date}
            mode={props.mode}
            placeholder={props.placeholder}
            format={props.format}
            minDate={props.minDate}
            maxDate={props.maxDate}
            iconComponent={props.iconComponent}
            confirmBtnText={props.confirmBtnText}
            cancelBtnText={props.cancelBtnText}
            customStyles={{
                dateIcon: props.dateIconStyle,
                dateInput: props.dateInputStyle,
                dateText: props.dateTextStyle,
                dateTouchBody: props.dateTouchBodyStyle,
                placeholderText: props.dateTextStyle
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
    dateTextLayout: PropTypes.instanceOf(Object),
    dateTitleName: PropTypes.instanceOf(Object),

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
    dateTouchBody: styles.dateTouchBodyStyle,


    date: "",
    format: "MM-DD-YYYY",
    mode: "date",
    minDate: "",
    maxDate: "",
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



