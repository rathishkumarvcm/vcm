import { StyleSheet } from "react-native";
import { scaledHeight } from '../Utils/Resolution';


const createStyles = (props) => { 
    return StyleSheet.create({
        buttonStyle:{
          alignItems:'center',
          backgroundColor:"#56565A",
          borderRadius:1,
          height:scaledHeight(props.height),
          justifyContent: "center",
          marginTop:'2%',
          width:'90%',
          ...props.buttonStyle
    }
    });
    };

export default createStyles;