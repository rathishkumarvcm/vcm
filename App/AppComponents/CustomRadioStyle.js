import { StyleSheet } from "react-native";
import { scaledHeight } from '../Utils/Resolution';


const CustomRadioStyle = (size, innerCicleColor, itemBottom, itemTop, outerCicleColor, componentStyle) => { 
    return StyleSheet.create({
        radioselectedView:{
            backgroundColor: innerCicleColor,
            borderRadius: size / 2,
            height: size/2,  
            width: size/2
        },
        radiotouchStyle:{
            alignItems: 'flex-start',
            flexDirection: "row",
            justifyContent: 'flex-start',
            marginBottom: scaledHeight(itemBottom),
            marginTop: scaledHeight(itemTop),
            ...componentStyle
        },
        radiotouchView:{
            alignItems: 'center',
            borderColor: outerCicleColor,
            borderRadius: size / 2,
            borderWidth: 2, 
            height: size,    
            justifyContent: 'center',  
            marginTop: scaledHeight(2),   
            width: size,
        },
        viewContainer: {
            flexGrow: 1,
            marginLeft: scaledHeight(12),
            width: '80%'
        },
    });
    };

export default CustomRadioStyle;