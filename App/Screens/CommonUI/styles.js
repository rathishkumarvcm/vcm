import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';



export const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        marginLeft : '5%',
        marginRight : '5%',
        marginTop:'10%'
        //alignItems:'center'
    },
    homeText:{
        fontSize:scaledHeight(10)
    },

    addView : {
        height:40,
        width:40,
        backgroundColor:'#06748C',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    minusView: {
        height:40,
        width:40,
        backgroundColor:'#06748C',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    labeltext:{
        fontSize:20,
        marginBottom:'2%',
        height:30,
        color:'green'
    },
    button:{
        fontSize:scaledHeight(5)
    },
    buttonStyle:{
        height:scaledHeight(40),
        width:'90%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:scaledHeight(5),
        backgroundColor:"#06748C",
        marginTop:scaledHeight(10) 
        
    },
    buttonTextStyle:{
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight:scaledHeight(20),
    },
    floatStyle: {
            //height:scaledHeight(20),
            width:'90%',
            justifyContent: "center",
            alignItems:'center',
            borderRadius:scaledHeight(5),
            backgroundColor:"gray",
            marginTop:scaledHeight(100)    
    },
    floatInput: {
      width: "90%",
      // marginTop : "5%"
      //marginBottom : "5%"
    },
    initialfloatingBorder: {
        marginBottom:'5%',
        paddingTop: "6%",
        width: "100%",
        borderBottomWidth: scaledHeight(1),
        borderBottomColor: "gray"
    },
});