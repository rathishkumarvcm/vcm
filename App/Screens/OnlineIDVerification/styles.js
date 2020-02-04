import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';

const {width} = Dimensions.get('window');


const styles = StyleSheet.create({
    backButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#61285F45',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',       
        marginLeft:'8%',
        marginRight:'8%',
        marginTop:scaledHeight(12),
        width:'84%'
     },
    cancelButtonText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    container:{
        backgroundColor:'#F7FAFF',
        flex:1,
        width:'100%'
    },
    copyRightSection:{
        alignItems:'center',
        backgroundColor:'#56565A',
        height:scaledHeight(50),
        justifyContent:'center'
    },
    copyRightText:{
        color:'#FFFFFF'
    },
    faceIDlogo:{
        alignSelf:'center',
        marginBottom:'5%',
        marginTop:'5%'
    },
    faceIDtextStyle:{
        alignItems:'center',
        height:scaledHeight(20)
    },
    flexCont:{
        flex:0.85
    },
    forgotLineText:{
        flexDirection:'row',
        fontSize:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    forgotLineTextColor:{
        color:'#56565A',
        fontSize : scaledHeight(18),
        fontWeight:'bold'
    },
    goBack:{
        alignItems:'flex-start',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:scaledHeight(15)
    },
    lineBorder:{
        borderTopWidth:1,
        color:'#707070',
        marginTop:scaledHeight(15)
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
    newVictory:{
        color:'#486D89',
        fontSize:scaledHeight(20),
        height:scaledHeight(20),
        lineHeight:scaledHeight(20)
    },
    newVictoryButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#56565A',
        borderRadius:scaledHeight(25),
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginTop:scaledHeight(10),
        width:'70%'

    },
    newVictoryButtonText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    newVictorySection:{
        backgroundColor:'#FFFFFF',
        height:scaledHeight(190),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(29),
        padding:scaledHeight(15),
        width:'92%'
    },
    newVictorySection1:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:scaledHeight(20),
        
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%'
    },
    newVictorySection2:{
        marginTop:scaledHeight(4),
        paddingLeft:'4%',
        paddingRight:'4%',
       
        width:'100%',

    },
     openInvestment:{
        color:'#56565A',
        fontSize:scaledHeight(14)
    },
     openInvestment1:{
        color:'#56565A',
        fontSize:scaledHeight(14),
        marginTop:scaledHeight(20)
    },
     openInvestmentBold:{
        color:'#56565A',
        fontSize:scaledHeight(14),
        fontWeight:'bold'
    },
    openInvestmentlink:{
        color:'#2C8DBF',
        fontSize:scaledHeight(14),
        fontWeight:'bold'
    },
    optContainer:{
        marginLeft:'4%',
        marginRight:'4%'
    },
    passwordView:{
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    privacyAgreement:{
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'row',
        height:scaledHeight(50),
        justifyContent:'center',
        marginTop:scaledHeight(15),
        width:'100%'
    },
    privacyText:{
        color:'#61285F',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        paddingLeft:'4%',
        width:'50%'
    },
    registernowButton:{
       alignItems:'center',
       backgroundColor:'#FFFFFF',
       borderColor:'#56565A',
       borderRadius:scaledHeight(14),
       borderWidth:1,
       height:scaledHeight(28),
       justifyContent:'center',
       width:width/3.3
    },
    registernowButton1:{
        alignSelf:'center',
       backgroundColor:'#FFFFFF',
       borderColor:'#56565A',
       borderRadius:scaledHeight(24),
       borderWidth:1,
       height:scaledHeight(48),
       justifyContent:'center',
       width:width/2
     },
    registernowText:{
        color:'#56565A',
        fontSize:scaledHeight(10)
    },
    signInButton:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
       
        marginLeft:'8%',
        marginRight:'8%',
        marginTop:scaledHeight(12),
        width:'84%'
     },
    signInButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    signInView:{
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
    },   
    signIntext:{
        color:'#56565A',
        fontSize:scaledHeight(36),
        fontWeight: '300'
    },
    stepsInner:{
        backgroundColor:'#56565A',
        height: scaledHeight(8),
        width:'20%'
    },
    stepsOuter :{
        backgroundColor: "#E6E6E6",
        height: scaledHeight(8),
        justifyContent: "center",
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(30),
        width: '92%'
    },
    termsofuse:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:scaledHeight(40),
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    termsofuseText:{
        color:'#56565A',
        fontSize : scaledHeight(18)
    },
    termsofuseText1:{
        color:'#486D89',
        fontSize : scaledHeight(18),
        marginBottom:scaledHeight(5)
    }, usaaMemberSection:{
        flexDirection:'row',
        marginTop:scaledHeight(15)
    },
    usaaMembersText:{
        color:'#486D89',
        fontSize:scaledHeight(16),
        height:scaledHeight(50),
        lineHeight:scaledHeight(50)
    },
    userIDText:{
        color:'#000000',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginBottom:scaledHeight(8)
    },
    userIDTextBox:{
        marginBottom:scaledHeight(18),
        marginLeft:'4%',
        marginRight:'4%'
    },
    userIDTextBoxError:{
        borderColor:'red',
        marginBottom:scaledHeight(18),
        marginLeft:'4%',
        marginRight:'4%'
    },
});

export default styles;