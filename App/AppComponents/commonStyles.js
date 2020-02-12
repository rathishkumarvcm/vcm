import { StyleSheet } from "react-native";
import { scaledHeight } from '../Utils/Resolution';


const createStyles = (props) => { 
    return StyleSheet.create({
        checkboxselectedView:{
            backgroundColor: (props.innerCicleColor) ? props.innerCicleColor : '#33A8FF',
            height: (props.size) ? (props.size/2) : 12,
            width: (props.size) ? (props.size/2) : 12,  
        },
        checkboxtextStyle:{
            marginLeft: scaledHeight(12),
            width: '80%',
            ...props.labelStyle
        },
        checkboxtouchStyle:{
            alignItems: 'flex-start',
            flexDirection: "row",
            flexGrow: 1, 
            justifyContent: 'flex-start', 
            marginBottom: (props.itemBottom) ? scaledHeight(props.itemBottom) : scaledHeight(12),
            marginTop: (props.itemBottom) ? scaledHeight(props.itemTop) : scaledHeight(0),        
            width: (props.width) ? props.width : '100%',
        },
        checkboxtouchView:{
            alignItems: 'center',
            borderColor: (props.outerCicleColor) ? props.outerCicleColor : '#33A8FF',
            borderWidth: 2, 
            height: (props.size) ? props.size : 24,    
            justifyContent: 'center',  
            marginTop: scaledHeight(2),   
            width: (props.size) ? props.size : 24,
        },
        radioselectedView:{
            backgroundColor: (props.innerCicleColor) ? props.innerCicleColor : '#33A8FF',
            borderRadius: (props.size) ? (props.size/2) : 12,
            height: (props.size) ? (props.size/2) : 12,  
            width: (props.size) ? (props.size/2) : 12
        },
        radiotouchStyle:{
            alignItems: 'flex-start',
            flexDirection: "row",
            justifyContent: 'flex-start',
            marginBottom: (props.itemBottom) ? scaledHeight(props.itemBottom) : scaledHeight(12),
            marginTop: (props.itemBottom) ? scaledHeight(props.itemTop) : scaledHeight(0),
            ...props.componentStyle
        },
        radiotouchView:{
            alignItems: 'center',
            borderColor: (props.outerCicleColor) ? props.outerCicleColor : '#33A8FF',
            borderRadius: (props.size) ? (props.size/2) : 12,
            borderWidth: 2, 
            height: (props.size) ? props.size : 24,   
            justifyContent: 'center',  
            marginTop: scaledHeight(2),   
            width: (props.size) ? props.size : 24,
        },
        radioviewContainer: {
            flexGrow: 1,
            marginLeft: scaledHeight(12),
            width: '80%'
        },
    });
};

export default createStyles;