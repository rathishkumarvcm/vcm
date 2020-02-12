import { StyleSheet } from "react-native";
import { scaledHeight,scaledWidth } from '../Utils/Resolution';


const GModalComponentStyle = (props) => {
    return StyleSheet.create({
        buttonCancelActionStyle: {
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5D83AE',
            height: scaledHeight(50),
            justifyContent: 'center',
            marginLeft: '2%',
            marginRight: '2%',
            marginTop: scaledHeight(20),
            width: scaledWidth(140),
            ...props.buttonCancelActionStyle
        },
        buttonCancelTextStyle: {
            color: '#FFFFFF',
            fontSize: scaledHeight(16),
            textAlign: 'center',
            width: '100%',
            ...props.buttonCancelTextStyle
            
        },
        buttonGoActionStyle: {
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5D83AE',
            height: scaledHeight(50),
            justifyContent: 'center',
            marginLeft: '2%',
            marginRight: '2%',
            marginTop: scaledHeight(20),
            width: scaledWidth(140),
            ...props.buttonGoActionStyle
        },
        buttonGoTextStyle: {
            color: '#FFFFFF',
            fontSize: scaledHeight(16),
            textAlign: 'center',
            width: '100%',
            ...props.buttonGoTextStyle
            
        },
        modalActionContainer: {
            flexDirection: 'row',
            marginBottom: scaledHeight(10),
            marginTop: scaledHeight(10)
        },
        modalBackgroundView: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: '100%',
        },
        modalContainer: {
            backgroundColor: '#FFFFFF',
            paddingBottom: scaledHeight(15),
            paddingLeft: '4%',
            paddingRight: '4%',
            paddingTop: scaledHeight(15),
            ...props.modalContainerStyle
        },
        modalContentText: {
            color: '#56565A',
            fontSize: scaledHeight(14),
            marginBottom: scaledHeight(10),
            marginTop: scaledHeight(10),
        },
        titleText: {
            color: '#000000',
            fontSize: scaledHeight(24),
            marginBottom: scaledHeight(10),
            marginTop: scaledHeight(10)
        },
    });
};

export default GModalComponentStyle;