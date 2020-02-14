import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';

const {width} = Dimensions.get('window');


const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        height: scaledHeight(280),
        opacity:0.2,
        width: '100%'   
    },
    container:{
        backgroundColor:'#063461',
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
    cornerTriangle:{      
        alignSelf:'flex-end',
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderRightWidth: 30,
        borderStyle: 'solid',
        borderTopColor: '#8BC105',
        borderTopWidth: 30,
        height: 0,
        transform: [{ rotate: '90deg' }],
        width: 0      
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
         flex: 0.85,          
    },
    forgotLineText:{
        flexDirection:'row',
        fontSize:scaledHeight(18),
        marginTop:scaledHeight(14),
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    forgotLineTextColor:{
        color:'#FFFFFF',
        fontSize : scaledHeight(16),
        fontWeight:'bold'
    },
    inActivityView : {
        alignItems :'center',
        backgroundColor : '#FFF6F6',
        borderColor : '#973937',
        borderRadius : 5,
        borderWidth : 1,
        height : scaledHeight(106),
        justifyContent : 'center',
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(10),
        width:'92%'
    },
    inActivitytext : {
        color:'#973937',
        fontSize:scaledHeight(14),
        fontWeight : '300',
        paddingLeft : '2%',
        paddingRight : '2%'
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
    logoStyle: {            
       alignSelf:'center',
       marginTop:scaledHeight(150),             
      },
    marginForOther:{ 
        marginLeft: '4%', 
        marginRight: '4%', 
        width: '92%' 
    },
      newVictory:{
        color:'#56565A',
        fontSize:scaledHeight(30),
        height:scaledHeight(30),
        lineHeight:scaledHeight(30),
        marginTop:scaledHeight(20)
    },
    newVictoryButton:{
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#56565A',
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
        alignSelf:'center',
        marginVertical:scaledHeight(20) 
    },
    onlineIDSuccess:
    {
        alignItems:'center',
        backgroundColor:'#F2F2F2',
        borderColor:'#E0E1E2',
        borderRadius:5,
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(10)
    },
    openInvestment:{
        color:'#56565A',
        fontSize:scaledHeight(20),
        marginTop:scaledHeight(10)
    },    
    passwordView:{
        marginTop:scaledHeight(15),
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
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        paddingLeft:'4%',
        width:'50%'
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
    retrieveContainer:{
        flex:1,
        flexDirection:'row'
    },
    retrieveTextStyle:{
        color:'#FFFFFF',
        fontSize:scaledHeight(14),
        textAlign:'center',
        width:'50%',
    },
     signInButton:{       
        alignSelf:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',        
        marginTop:scaledHeight(15),       
     },
    signInButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    signInContainer:{
      backgroundColor:'#F7F7F7',
      marginHorizontal:scaledHeight(20),
      marginVertical:'6%',     
    },
    signInInnerContainner:{
        paddingHorizontal:'2%'
    },
    signInLogoStyle: {      
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',                  
       },
    signInUser:{
        marginTop:scaledHeight(15),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    signInView:{
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:scaledHeight(5),        
    },
    signIntext:{
        color:'#194C7D',
        fontSize:scaledHeight(16),
        marginTop:scaledHeight(10),        
    },
    signUpText:{
        color:'#004A98',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    termsofuse:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginHorizontal:'6%',
        marginTop:scaledHeight(25),       
    },
    termsofuseText:{
        color:'#FFFFFF',
        fontSize : scaledHeight(16),    
        justifyContent:'center',
        textAlign:'center'   
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
        color:'#333333DE',
        fontSize:scaledHeight(13),       
        marginBottom:scaledHeight(8)
    },
    userIDTextBox:{
        marginBottom:scaledHeight(10),
        marginLeft:'4%',
        marginRight:'4%'
    },
    userIDTextBoxError:{
        borderColor : 'red',
        marginBottom:scaledHeight(18),
        marginLeft:'4%',
        marginRight:'4%'
    }
});

export default styles;