import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';
// import { Colors } from "react-native/Libraries/NewAppScreen";

const {width} = Dimensions.get('window');


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F7FAFF',
        flex:1,
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
    
    signInUser:{
        marginTop:scaledHeight(34),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    passwordView:{
        marginTop:scaledHeight(28),
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    
    userIDText:{
        color:'#333333DE',
        fontSize:scaledHeight(20),
        fontWeight:'bold',
        marginBottom:scaledHeight(8)
    },

    userIDTextBox:{
        marginLeft:'4%',
        marginRight:'4%',       
    },
    userIDTextBoxError:{
        borderColor : 'red',
        marginLeft:'4%',      
        marginRight:'4%'
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
    newVictory:{
        color:'#56565A',
        fontSize:scaledHeight(30),
        height:scaledHeight(30),
        lineHeight:scaledHeight(30),
        marginTop:scaledHeight(20)
    },
    usaaMembersText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        height:scaledHeight(50),
        lineHeight:scaledHeight(50)
    },
    openInvestment:{
        color:'#56565A',
        fontSize:scaledHeight(20),
        marginTop:scaledHeight(10)
    },
    lineBorder:{
        borderColor:'#DEDEDF',
        borderTopWidth:1,
        marginTop:scaledHeight(25)
    },
    usaaMemberSection:{
        flexDirection:'row',
        marginTop:scaledHeight(15)
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

    /* recovery */
    cancelButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#61285F45',
        borderWidth:1,
        height:scaledHeight(50),       
        justifyContent:'center',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
        width:'80%'
     },
     cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    continueButton:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',   
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
        width:'80%'
     },
     continueButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    retrievePasswordText:{
        color:'#56565A',
        fontSize:scaledHeight(30)
    },
    securityCheck:
    {
        backgroundColor:'#878280',
        height:scaledHeight(70),
        marginLeft:'4%',
        marginRight:'4%',
        width:'92%'
    },
    refreshSecurity:
    {
        alignSelf:'flex-end',
        color:'blue',
        fontSize:scaledHeight(16),
        textDecorationLine:"underline"
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
    notifClose: {
        alignItems: 'center',
        color: '#56565A',
        flex: 0.2,       
        fontSize: scaledHeight(25)
    },

    signInView:{
        marginTop:scaledHeight(50),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    optTextMsg:{
        color:'#333333DE',
        fontSize:scaledHeight(14),
        fontWeight:'bold',
        marginBottom:scaledHeight(8)
    },
    enterOpt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginBottom:scaledHeight(8)
    },
    refreshOtp:
    {
        
        color:'#2C8DBF',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        textDecorationLine:"underline",
        

    },
    refreshOtpView:{       
         alignSelf:'flex-end', 
        marginBottom:scaledHeight(42),
        marginRight:'4%'
        
    },
    errorMessage: {
        color:"red",
        fontSize: scaledHeight(14),
        paddingLeft:'4%',
        paddingRight:'4%',
      },
      pagerContainer:{
        alignItems: 'center',   
        flexDirection:'row',       
        justifyContent: 'center',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop:scaledHeight(30),
    },
    pagerOne:{
        backgroundColor:'#56565A',
        flex:0.4,
        height:scaledHeight(8),       
        marginRight:'1%'
    },
    pagerTwo:{
        backgroundColor:'#E6E6E6',
        flex:0.4,
        height:scaledHeight(8),
        marginRight:'1%'
    },
    scrollViewFlex:{
        flex:0.85
    }
    
});

export default styles;