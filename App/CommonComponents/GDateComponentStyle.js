import { StyleSheet } from "react-native";
import { scaledHeight } from '../Utils/Resolution';


const GDateComponentStyle = (props) => {
    return StyleSheet.create({
        componentErrViewStyle: {
            backgroundColor: "#FFFFFF",
            borderColor: 'red',
            borderRadius: scaledHeight(4),
            borderWidth: 1,
            height: scaledHeight(48),
            justifyContent: "center",
            marginTop:scaledHeight(9),
            width: '100%',
            ...props.componentStyle
        },
        componentStyle: {
            backgroundColor: "#FFFFFF",
            borderColor: "#DEDEDF",
            borderRadius: scaledHeight(4),
            borderWidth: 1,
            height: scaledHeight(48),
            justifyContent: "center",
            marginTop:scaledHeight(9),
            width: '100%',
            ...props.componentStyle
        },
        container: {
            alignSelf: 'stretch',
            width: '100%'
        },
        customStyles:{
            
              //  dateIcon: props.dateIconStyle,
              //  dateInput: props.dateInputStyle,
              //  dateText: props.dateTextStyle,
              //  dateTouchBody: props.dateTouchBodyStyle,
              //  placeholderText: props.dateTextStyle
            
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
            ...props.dateTextLayout
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
            marginBottom: scaledHeight(8),
            ...props.dateTitleName

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
            borderColor: 'red'
        },
    });
    
};

export default GDateComponentStyle;