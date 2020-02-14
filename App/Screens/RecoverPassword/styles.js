import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    arrowIconStyle:{     
        alignSelf:'center',
         marginLeft: '2%',
         marginRight: '2%' 
   },
      bottomView: {    
        alignItems: 'center',
        backgroundColor: '#194C7D',
        bottom: 0,
        height: scaledHeight(50),
        justifyContent: 'center',
        position: 'absolute', 
        width: '100%', 
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
        marginTop:scaledHeight(42),
        width:'80%'
     },
        cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
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
    continueButton:{
        alignItems:'center',       
        height:scaledHeight(50),
        justifyContent:'center',    
        marginTop:scaledHeight(15),
        width:'80%'
     },
    continueButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
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
    forgotLineText:{
        flexDirection:'row',
        fontSize:scaledHeight(18),
        marginTop:scaledHeight(14),
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    forgotLineTextColor:{
        color:'#56565A',
        fontSize : scaledHeight(18),
        fontWeight:'bold'
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
    layoutpositioncontainer: {
        backgroundColor: '#194C7D',
        height: scaledHeight(8),
        position: 'absolute',
        right: 0,
        top: 0,
    },
    lineBorder:{
        borderColor:'#DEDEDF',
        borderTopWidth:1,
        marginTop:scaledHeight(25)
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
        marginTop:scaledHeight(20)
    },
    newVictory:{
        color:'#56565A',
        fontSize:scaledHeight(30),
        height:scaledHeight(30),
        lineHeight:scaledHeight(30),
        marginTop:scaledHeight(20)
    },
    newVictoryButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#56565A',
        borderRadius:scaledHeight(25),
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginTop:scaledHeight(25),
        width:'60%'

    },
    newVictoryButtonText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    newVictorySection:{
        backgroundColor:'#FFFFFF',
        height:scaledHeight(450),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(29),
        padding:scaledHeight(15),
        width:'92%'
    },
    notifClose: {
        alignItems: 'center',
        color: '#56565A',
        flex: 0.2,       
        fontSize: scaledHeight(25)
    },
    notifInner: {
        alignItems: 'center',
        flex: 0.8,
        marginLeft:'4%',
    },
    notifInnerText:{
        color: '#56565A',
        fontSize: scaledHeight(17),
        lineHeight:scaledHeight(29),
    },
    notifOuter: {
        alignItems: 'center',
        backgroundColor: "#E9E9E9",
        borderRadius: scaledHeight(25),
        flex: 1,
        flexDirection: "row",
        height: scaledHeight(100),
        justifyContent: "center",
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(30),
        width: '92%'
    },
    openInvestment:{
        color:'#56565A',
        fontSize:scaledHeight(20),
        marginTop:scaledHeight(10)
    },
    passwordView:{
        marginTop:scaledHeight(20),      
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
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        paddingLeft:'4%',
        width:'50%'
    },
    refreshSecurity: {
        color: '#56565A',       
        fontSize: scaledHeight(14),       
      },
      refreshSecurityView: {
        alignSelf: 'center',             
        flexDirection:'row',
       marginTop:scaledHeight(20)
      },
  
    registernowButton:{
       alignItems:'center',
       backgroundColor:'#FFFFFF',
       borderColor:'#56565A',
    
       borderWidth:1,
       height:scaledHeight(28),
       justifyContent:'center',
       width:width/3.3
    },
     registernowButton1:{
        alignSelf:'center',
       backgroundColor:'#FFFFFF',
       borderColor:'#56565A',
     
       borderWidth:1,
       height:scaledHeight(48),
       justifyContent:'center',
       width:width/2
     },
    registernowText:{
        color:'#56565A',
        fontSize:scaledHeight(10)
    },  
    retrievePasswordText:{
        color:'#194C7D',
        fontSize:scaledHeight(18),       
    }, 
     scrollStyle:{ alignSelf:'stretch',flex:1 },    
    securityCheck:
    {
        backgroundColor:'#878280',
        height:scaledHeight(70), 
        marginTop:scaledHeight(20),          
    },
    signInUser:{
        marginTop:scaledHeight(20),       
    },
    
    signInView:{
        marginTop:scaledHeight(10),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
      ssnText:{
        color:'#56565A',
        fontSize:scaledHeight(13),    
        marginBottom:scaledHeight(10),        
    },
    submitButtonStyle:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    termsofuse:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:scaledHeight(25),
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    termsofuseText:{
        color:'#56565A',
        fontSize : scaledHeight(18)
    },
    touchableStyle: {
        alignItems: 'center',        
        width: '100%', 
      },
    usaaMemberSection:{
        flexDirection:'row',
        marginTop:scaledHeight(15)
    },
    usaaMembersText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        height:scaledHeight(50),
        lineHeight:scaledHeight(50)
    },
    userIDText:{
        color:'#56565A',
        fontSize:scaledHeight(13),     
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(20),        
    },
    userIDTextBox:{
        width:'100%'     
    },
    userIDTextBoxError:{
        borderColor : 'red',       
    },
    vcmIdText:{
        color:'#56565A',
        fontSize:scaledHeight(16),           
        fontWeight:'bold'
    }

    
});

export default styles;