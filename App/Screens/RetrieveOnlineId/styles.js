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
        flex:.15,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        paddingLeft:'4%',
        paddingRight:'4%',
        justifyContent:'center',
        alignItems:'center'
    },
    registernowButton:{
       borderColor:'#56565A',
       borderWidth:1,
       width:width/3.3,
       borderRadius:scaledHeight(14),
       height:scaledHeight(28),
       backgroundColor:'#FFFFFF',
       alignItems:'center',
       justifyContent:'center'
    },
    registernowButton1:{
        borderColor:'#56565A',
       borderWidth:1,
       width:width/2,
       borderRadius:scaledHeight(24),
       height:scaledHeight(48),
       backgroundColor:'#FFFFFF',
       alignSelf:'center',
       justifyContent:'center'
     },
    registernowText:{
        fontSize:scaledHeight(10),
        color:'#56565A'
    },
    signInView:{
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    passwordView:{
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    signIntext:{
        color:'#56565A',
        fontSize:scaledHeight(32)
    },
    userIDText:{
        color:'#000000',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginBottom:scaledHeight(8)
    },
    userIDTextBox:{
        marginLeft:'4%',
        marginRight:'4%',
        marginBottom:scaledHeight(18)
    },
    userIDTextBoxError:{
        marginLeft:'4%',
        marginRight:'4%',
        marginBottom:scaledHeight(18),
        borderColor:'red'
    },
    forgotLineText:{
        paddingLeft:'4%',
        paddingRight:'4%',
        flexDirection:'row',
        fontSize:scaledHeight(18)
    },
    forgotLineTextColor:{
        fontSize : scaledHeight(18),
        color:'#56565A',
        fontWeight:'bold'
    },
    termsofuse:{
        flexWrap:'wrap',
        flexDirection:'row',
        paddingLeft:'4%',
        paddingRight:'4%',
        marginTop:scaledHeight(10)
    },
    termsofuseText:{
        fontSize : scaledHeight(18),
        color:'#56565A'
    },
    termsofuseText1:{
        fontSize : scaledHeight(18),
        color:'#486D89',
        marginBottom:scaledHeight(5)
    },
    signInButton:{
        borderColor:'#56565A',
        borderWidth:1,
        width:'84%',
        marginLeft:'8%',
        marginRight:'8%',
        marginTop:scaledHeight(12),
        //borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center'
     },
     signInButtonText:{
        fontSize:scaledHeight(16),
        color:'#FFFFFF',
        fontWeight:'bold'
    },

    cancelButton:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:'84%',
        marginLeft:'8%',
        marginRight:'8%',
        marginTop:scaledHeight(12),
        //borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center'
     },
     cancelButtonText:{
        fontSize:scaledHeight(16),
        color:'#544A54',
        fontWeight:'bold'
    },
    newVictoryButton:{
        borderColor:'#56565A',
        borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        borderWidth:1,
        marginTop:scaledHeight(10),
        width:'70%',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center'

    },
    newVictoryButtonText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    newVictorySection:{
        marginLeft:'4%',
        marginRight:'4%',
        padding:scaledHeight(15),
        width:'92%',
        height:scaledHeight(190),
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(29)
    },
    newVictory:{
        height:scaledHeight(20),
        lineHeight:scaledHeight(20),
        fontSize:scaledHeight(20),
        color:'#486D89'
    },
    usaaMembersText:{
        height:scaledHeight(50),
        lineHeight:scaledHeight(50),
        fontSize:scaledHeight(16),
        color:'#486D89'
    },
    openInvestment:{
        fontSize:scaledHeight(14),
        color:'#56565A'
    },
    lineBorder:{
        marginTop:scaledHeight(15),
        borderTopWidth:1,
        color:'#707070'
    },
    usaaMemberSection:{
        flexDirection:'row',
        marginTop:scaledHeight(15)
    },
    privacyAgreement:{
        marginTop:scaledHeight(15),
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'white',
        height:scaledHeight(50),
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
    }, stepsOuter :{
        height: scaledHeight(8),
        width: '92%',
        backgroundColor: "#E6E6E6",
        justifyContent: "center",
        marginTop:scaledHeight(30),
        marginLeft:'4%',
        marginRight:'4%'
    },
    stepsInner:{
        height: scaledHeight(8),
        width:'20%',
        backgroundColor:'#56565A'
    },
    newVictorySection1:{
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%',
        height:scaledHeight(70),
        marginTop:scaledHeight(20)
    },
});