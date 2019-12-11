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
      // borderRadius:scaledHeight(14),
       height:scaledHeight(28),
       backgroundColor:'#FFFFFF',
       alignItems:'center',
       justifyContent:'center'
    },
    registernowButton1:{
        borderColor:'#56565A',
       borderWidth:1,
       width:width/2,
       //borderRadius:scaledHeight(24),
       height:scaledHeight(48),
       backgroundColor:'#FFFFFF',
       alignSelf:'center',
       justifyContent:'center'
     },
    registernowText:{
        fontSize:scaledHeight(10),
        color:'#56565A'
    },
    onlineIDSuccess:
    {
        marginTop:scaledHeight(10),
        height:scaledHeight(50),
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'4%',
        marginRight:'4%',
        backgroundColor:'#F2F2F2',
        borderWidth:1,
        borderColor:'#E0E1E2'
    },
    signInView:{
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    signInUser:{
        marginTop:scaledHeight(34),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    passwordView:{
        paddingLeft:'4%',
        paddingRight:'4%',
        marginTop:scaledHeight(28)
    },
    signIntext:{
        color:'#56565A',
        fontSize:scaledHeight(30),
        fontWeight : '300'
    },
    userIDText:{
        color:'#333333DE',
        fontSize:scaledHeight(18),
        fontWeight : '500',
        marginBottom:scaledHeight(8)
    },
    userIDTextBox:{
        marginLeft:'4%',
        marginRight:'4%',
        marginBottom:scaledHeight(10)
    },
    userIDTextBoxError:{
        marginLeft:'4%',
        marginRight:'4%',
        marginBottom:scaledHeight(18),
        borderColor : 'red'
    },
    forgotLineText:{
        marginTop:scaledHeight(14),
        paddingLeft:'4%',
        paddingRight:'4%',
        flexDirection:'row',
        fontSize:scaledHeight(18)
    },
    forgotLineTextColor:{
        fontSize : scaledHeight(18),
        color:'#2C8DBF',
        fontWeight:'bold'
    },
    termsofuse:{
        flexWrap:'wrap',
        flexDirection:'row',
        paddingLeft:'4%',
        paddingRight:'4%',
        marginTop:scaledHeight(25)
    },
    termsofuseText:{
        fontSize : scaledHeight(18),
        color:'#56565A'
    },
    signInButton:{
        borderColor:'#56565A',
        borderWidth:1,
        width:'72%',
        marginLeft:'14%',
        marginRight:'14%',
        marginTop:scaledHeight(42),
       // borderRadius:scaledHeight(25),
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
    newVictoryButton:{
        borderColor:'#56565A',
        //borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        borderWidth:1,
        marginTop:scaledHeight(25),
        width:'60%',
        backgroundColor:'#FFFFFF',
        alignSelf:'center',
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
        height:scaledHeight(220),
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(29)
    },
    newVictory:{
        height:scaledHeight(30),
        lineHeight:scaledHeight(30),
        fontSize:scaledHeight(30),
        marginTop:scaledHeight(20),
        color:'#56565A'
    },
    usaaMembersText:{
        height:scaledHeight(50),
        lineHeight:scaledHeight(50),
        fontSize:scaledHeight(16),
        color:'#56565A'
    },
    openInvestment:{
        marginTop:scaledHeight(10),
        fontSize:scaledHeight(20),
        color:'#56565A'
    },
    lineBorder:{
        marginTop:scaledHeight(25),
        borderTopWidth:1,
        borderColor:'#DEDEDF'
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
        color:'#56565A',
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
    }
});