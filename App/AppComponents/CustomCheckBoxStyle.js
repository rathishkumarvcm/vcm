import { StyleSheet } from "react-native";
import { scaledHeight } from '../Utils/Resolution';


const CustomCheckBoxStyle = (size, innerCicleColor, mwidth, itemBottom, itemTop, outerCicleColor, labelStyle) => { 
    return StyleSheet.create({
        checkboxselectedView:{
            backgroundColor: innerCicleColor,
            height: size/2,
            width: size/2,  
        },
        checkboxtextStyle:{
            marginLeft: scaledHeight(12),
            width: '80%',
            ...labelStyle
        },
        checkboxtouchStyle:{
            alignItems: 'flex-start',
            flexDirection: "row",
            flexGrow: 1, 
            justifyContent: 'flex-start', 
            marginBottom: scaledHeight(itemBottom),
            marginTop: scaledHeight(itemTop),        
            width: mwidth,
        },
        checkboxtouchView:{
            alignItems: 'center',
            borderColor: outerCicleColor,
            borderWidth: 2, 
            height: size,    
            justifyContent: 'center',  
            marginTop: scaledHeight(2),   
            width: size,
        }
    });
    };

export default CustomCheckBoxStyle;