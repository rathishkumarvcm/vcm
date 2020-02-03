import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';



export const styles = StyleSheet.create({
    addView : {
        alignItems:'center',
        backgroundColor:'#06748C',
        borderRadius:10,
        height:40,
        justifyContent:'center',
        width:40
    },
    button:{
        fontSize:scaledHeight(5)
    },

    buttonStyle:{
        alignItems:'center',
        backgroundColor:"#06748C",
        borderRadius:scaledHeight(5),
        height:scaledHeight(40),
        justifyContent: "center",
        marginTop:scaledHeight(10),
        width:'90%' 
        
    },
    buttonTextStyle:{
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight:scaledHeight(20),
    },
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        marginLeft : '5%',
        marginRight : '5%',
        marginTop:'10%'
        // alignItems:'center'
    },
    floatInput: {
      width: "90%",
      //  marginTop : "5%"
      // marginBottom : "5%"
    },
    floatStyle: {
            // height:scaledHeight(20),
            width:'90%',
            justifyContent: "center",
            alignItems:'center',
            borderRadius:scaledHeight(5),
            backgroundColor:"gray",
            marginTop:scaledHeight(100)    
    },
    homeText:{
        fontSize:scaledHeight(10)
    },
    initialfloatingBorder: {
        borderBottomColor: "gray",
        borderBottomWidth: scaledHeight(1),
        marginBottom:'5%',
        paddingTop: "6%",
        width: "100%"
    },
    labeltext:{
        color:'green',
        fontSize:20,
        height:30,
        marginBottom:'2%'
    },
    minusView: {
        alignItems:'center',
        backgroundColor:'#06748C',
        borderRadius:10,
        height:40,
        justifyContent:'center',
        width:40
    },
});