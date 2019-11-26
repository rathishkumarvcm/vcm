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
    skipButton:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:scaledWidth(70),
        marginLeft:'2%',
        marginRight:'2%',
        borderRadius:scaledHeight(5),
        height:scaledHeight(30),
        backgroundColor:'#FFFFFF',
        
    },
     skipButtonText:{
        fontSize:scaledHeight(12),
        color:'#544A54',
        fontWeight:'bold',
        alignItems:"center",
    },
    conentMarginTop:{
        marginTop:scaledHeight(10)
    },
    autoInvestHead:{
        marginTop:scaledHeight(10),
        fontSize:scaledHeight(18),
        fontWeight:'500'
    },
    addInvestTitle:{
        marginTop:scaledHeight(10),
        width:'65%',
        fontSize:scaledHeight(14),
        fontWeight:'400'
    },
    addInvest:{
        marginTop:scaledHeight(10),
        width:'35%',
        textAlign:"right",
        color:'#0000FF',
        //textDecorationLine:"underline",
        fontSize:scaledHeight(14),
        fontWeight:'400',
    }
    
    
    
});