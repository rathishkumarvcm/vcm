import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';

const {width} = Dimensions.get('window');


export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7FAFF',
        width:'100%'
    },
    loginHeader:{
        flexDirection:'row',
        height:scaledHeight(91),
        backgroundColor:'#FFFFFF',
        paddingLeft:'4%',
        paddingRight:'4%',
        justifyContent:'center',
        alignItems:'center'
    },
    registernowButton:{
       borderColor:'#61285F',
       borderWidth:1,
       width:width/3.3,
       borderRadius:scaledHeight(25),
       height:scaledHeight(26),
       backgroundColor:'#FFFFFF',
       alignItems:'center',
       justifyContent:'center'
    },
    registernowButton1:{
        borderColor:'#61285F',
       borderWidth:1,
       width:width/2,
       borderRadius:scaledHeight(25),
       height:scaledHeight(36),
       backgroundColor:'#FFFFFF',
       alignSelf:'center',
       justifyContent:'center'
     },
    registernowText:{
        fontSize:scaledHeight(14),
        color:'#61285F'
    },
    signInView1:{
        marginTop:scaledHeight(32),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    signInView:{
        marginTop:scaledHeight(12),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    passwordView:{
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    signIntext:{
        alignSelf:'center',
        color:'#486D89',
        fontSize:scaledHeight(20)
    },
    userIDText:{
        color:'#000000',
        fontSize:scaledHeight(16),
        // fontWeight:'bold',
        marginBottom:scaledHeight(5)
    },
    userIDTextBox:{
        marginLeft:'4%',
        marginRight:'4%',
        marginBottom:scaledHeight(38)
    },
    forgotLineText:{
        paddingLeft:'4%',
        paddingRight:'4%',
        flexDirection:'row',
        fontSize:scaledHeight(16)
    },
    forgotLineTextColor:{
        fontSize : scaledHeight(16),
        color:'#61285F',
        fontWeight:'bold'
    },
    termsofuse:{
        flexWrap:'wrap',
        flexDirection:'row',
        paddingLeft:'4%',
        paddingRight:'4%',
        marginTop:scaledHeight(32)
    },
    termsofuseText:{
        fontSize : scaledHeight(16),
        color:'#56565A'
    },
    signInButton:{
        borderColor:'#61285F',
        borderWidth:1,
        width:'92%',
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(30),
        borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:'#61285F',
        alignItems:'center',
        justifyContent:'center'
     },
     signInButtonText:{
        fontSize:scaledHeight(16),
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    newVictoryButton:{
        borderColor:'#61285F',
        borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        borderWidth:1,
        marginTop:scaledHeight(15),
        width:'70%',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center'

    },
    newVictoryButtonText:{
        color:'#61285F',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    newVictorySection:{
        marginLeft:'4%',
        marginRight:'4%',
        padding:scaledHeight(30),
        width:'92%',
        height:scaledHeight(380),
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(58)
    },
    newVictory:{
        height:scaledHeight(36),
        lineHeight:scaledHeight(36),
        fontSize:scaledHeight(26),
        color:'#486D89'
    },
    usaaMembersText:{
        height:scaledHeight(70),
        lineHeight:scaledHeight(70),
        fontSize:scaledHeight(26),
        color:'#486D89'
    },
    openInvestment:{
        fontSize:scaledHeight(14),
        color:'#56565A'
    },
    lineBorder:{
        marginTop:scaledHeight(30),
        borderTopWidth:1,
        color:'#707070'
    },
    usaaMemberSection:{
        flexDirection:'row',
        marginTop:scaledHeight(30)
    },
    privacyAgreement:{
        marginTop:scaledHeight(30),
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'white',
        height:scaledHeight(70),
        flexDirection:'row'
    },
    privacyText:{
        width:'50%',
        paddingLeft:'4%',
        color:'#61285F',
        fontWeight:'bold',
        fontSize:scaledHeight(16)
    },
    copyRightSection:{
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center'
    },
    copyRightText:{
        color:'#FFFFFF'
    },
    faceIDlogo:{
        marginTop:'5%',
        marginBottom:'5%',
        alignSelf:'center'
    },
    faceIDtextStyle:{
        height:scaledHeight(20),
        alignItems:'center'
    },
    buttonStyle:{
        height:scaledHeight(40),
        width:'90%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:scaledHeight(5),
        backgroundColor:"#06748C",
        marginTop:scaledHeight(10),
        marginBottom:scaledHeight(20),
        marginLeft:'4%'
        
    },
    buttonTextStyle:{
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight:scaledHeight(20),
    },
    uploadAvatar:{
        height : scaledHeight(200),
        width: '100%'
    }
});