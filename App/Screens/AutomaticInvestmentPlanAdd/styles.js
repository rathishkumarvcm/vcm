import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight, scaledWidth} from '../../Utils/Resolution';



export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7FAFF',
        width:'100%'
    },
    loginHeader:{
        flex:.15,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        paddingLeft:'4%',
        paddingRight:'4%',
        justifyContent:'center',
        alignItems:'center'
    },
    autoInvestHead:{
        marginTop:scaledHeight(10),
        fontSize:scaledHeight(18),
        fontWeight:'500',
        marginBottom:scaledWidth(20)
    },
    planStatus:{
        height:scaledHeight(30),
        width:scaledWidth(80),
        borderWidth:1,
        borderColor:'#61285F45',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:scaledWidth(10),
        
    },
    planStatusText:
    {
        color:'#44aab4'
    },
    planStatusSelected:{
        height:scaledHeight(30),
        width:scaledWidth(80),
        borderWidth:1,
        borderColor:'#61285F45',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:scaledWidth(10),
        backgroundColor:'#b0e0e6'
    },
    cancelButton:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:'25%',
        height:scaledHeight(50),
        backgroundColor:'#FFFFFF',
        marginRight:scaledWidth(10)    
     },
     cancelButtonText:{
        fontSize:scaledHeight(14),
        color:'#544A54',
        fontWeight:'bold'
    },
    continueButton:{
        borderColor:'#56565A',
        borderWidth:1,
        width:'25%',
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        marginRight:scaledWidth(10)
     },
     continueButtonText:{
        fontSize:scaledHeight(14),
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    
    
});