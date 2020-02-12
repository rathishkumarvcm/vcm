import { StyleSheet } from "react-native";
import { scaledHeight } from '../Utils/Resolution';


const GRadioButtonComponentStyle = (props) => {
    return StyleSheet.create({
        additionalText : {
            alignItems:'flex-start',
            color : '#333333DE',
            fontSize : scaledHeight(12),
            marginTop:"5%"
        },
        innerCircle : {
            backgroundColor: '#707070',
            borderRadius: scaledHeight(6),
            height: scaledHeight(12),
            width: scaledHeight(12)
        },
        outerCircle : {
            alignItems: 'center',
            borderColor: '#707070',
            borderRadius: scaledHeight(16),
            borderWidth: scaledHeight(2),
            height: scaledHeight(32),
            justifyContent: 'center',
            width: scaledHeight(32),
        },
        questionsSection : {
            flexDirection:'column',        
            height:scaledHeight(50), 
            marginLeft : '5%',
            ...props.questionsStyle      
        },
        questionsText : {
            color : '#333333DE',
            fontSize : scaledHeight(16)
        },
        radioButtonLayout : {
            flexDirection: "row", 
            marginBottom : '2%',
           marginTop : '4%',
           width : '92%',
           ...props.radioButtonStyle
        }
    });
};

export default GRadioButtonComponentStyle;