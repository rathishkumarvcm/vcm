import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';
import * as COLORS from "../../Constants/ColorConstants";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    bottomView: {    
        alignItems: 'center',
        backgroundColor: '#194C7D',
        bottom: 0,
        height: scaledHeight(50),
        justifyContent: 'center',
        position: 'absolute', 
        width: '100%', 
      },
    buttonContainer:{
        alignItems:'flex-end',       
    },
    cancelButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#61285F45',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',       
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(12),
        width:'80%'
     },
    cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },   
    confirmButtonStyle:{
        alignItems:'center',      
        backgroundColor:COLORS.DARK_BLUE,    
        justifyContent:'center',         
        width:'35%',             
     },
    confirmButtonTextStyle:{
        alignItems:'center',
        alignSelf:'center',
        color:'#FFFFFF',
        fontSize:scaledHeight(16),    
        fontWeight:'500',        
    },
    confirmPasswordContainer:{
        marginTop:scaledHeight(10),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    confirmPasswordText:{
        color:'#194C7D',
        fontSize:scaledHeight(18), 
        fontWeight:'bold'      
    },
    container:{
        alignItems:'center',
        alignSelf:'stretch',     
        backgroundColor:'#F7F7F7',
        flex:1
    },
    contentContainer:{
        alignSelf:'stretch',
        paddingHorizontal:'2%',
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
    cornerTriangle:{
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderRightWidth: 30,
        borderStyle: 'solid',
        borderTopColor: '#8BC105',
        borderTopWidth: 30,
        height: 0,
        width: 0
    },
    errorMessage: {
        color:"red",
        fontSize: scaledHeight(14),       
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
    flexContainer:{
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
        marginTop:scaledHeight(15)
    },
    layoutContainer:{
        alignSelf:'stretch',
        backgroundColor: '#FFFFFF',       
        flex:1, 
        height: '100%',
        left: '4%',
        position: 'absolute',
        right: '4%',          
        top: scaledHeight(120)       
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
    mandatoryText:{
        color:'#56565A',
        fontSize:scaledHeight(12),        
    },
    marginTwenty:{
        marginTop:20
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
     otpAuthHeader:{
        color:'#56565A',
        fontSize:scaledHeight(32),
        opacity : 100
    },
    otpHeaderSection:{
        height:scaledHeight(70),
        marginTop:scaledHeight(30),
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%'
    },
    otpOutLine:{
        color:'#333333DE',
        fontSize:scaledHeight(13),
        marginBottom:scaledHeight(10),  
        marginTop:scaledHeight(20)     
    },
    otpTextBox:{
        marginBottom:scaledHeight(18),
        width:'100%'
    },
    otpTextBoxError:{
        borderColor:'red',
        marginBottom:scaledHeight(18),
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
    resendOtp:{
        alignItems:'center',
        justifyContent:'center'
    },
     resendOtpNewLine:{
        color:'#2C8DBF',
        fontSize:scaledHeight(16),
        textDecorationLine:'underline'
    },
    scrollStyle:{ 
        alignSelf:'stretch',      
    }, 
    sendOTPButton:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(12),
        width:'80%'
     },
    sentOTPText:{
        color:'#49494A',
        fontSize:scaledHeight(16),     
        marginBottom:scaledHeight(30),
        marginTop:scaledHeight(30),        
    },
    signInButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    signIntext:{
        color:'#535353',
        fontSize:scaledHeight(20),
        opacity : 100
    },
    submitButtonStyle:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    termsofuse:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:scaledHeight(10),
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
    },   
    touchableStyle: {
        alignItems: 'center',        
        width: '100%', 
      },
    usaaBorderLine:{
        borderBottomColor:'#535353',
        borderBottomWidth:1
    },
    usaaMemberSection:{
        flexDirection:'row',
        marginTop:scaledHeight(15)
    },
    usaaMembersText:{
        color:'#486D89',
        fontSize:scaledHeight(16),
        height:scaledHeight(50),
        lineHeight:scaledHeight(50)
    }
});

export default styles;