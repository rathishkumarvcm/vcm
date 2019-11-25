import { StyleSheet } from "react-native";
import {scaledHeight} from '../../Utils/Resolution';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    pageHeader: {
        flex: .15,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingLeft: '4%',
        paddingRight: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    

 
    welcomeTxt: {
        color: '#56565A',
        fontSize: scaledHeight(28),
        fontWeight:'bold',
        textAlign: 'center',
        marginTop:scaledHeight(93),
        lineHeight: 40

    },
    accountSection: {
        width: '80%',
        marginHorizontal:"10%",
       // flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
       
    },
    newVictorySection:{
        marginTop:scaledHeight(150),
        padding:scaledHeight(12),
        width:'100%',
        flexGrow:1,
        backgroundColor:'#FFFFFF',

    
    },
    moreTxt:{
        fontSize : scaledHeight(16),
        color:'#61285F',
        fontWeight:'bold'
    },
    pageFooter:{
        width:'100%',
        flexGrow:1,
        backgroundColor:'#FFFFFF',
 
        //backgroundColor:'yellow',
 
     },
    disclaimerTitleTxt:{ //termsofuseText
        fontSize : scaledHeight(16),
        marginBottom : scaledHeight(10),
        fontWeight : 'bold',
        color:'#56565A',
        lineHeight: 25
    },
    disclaimerTxt:{
        fontSize:scaledHeight(16),
        color:'#56565A',
        lineHeight: 25

    },
    privacyAgreement:{
        //marginTop:convertToDeviceResolution(4),
        marginVertical:scaledHeight(19),
        padding:scaledHeight(12),
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'white',
        flexDirection:'row',
        flexWrap:'wrap',
        flexGrow:1
    },
    privacyText:{
        width:'50%',
        //paddingLeft:'4%',
        marginVertical:'2%',
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
        color:'#FFFFFF',
        fontSize:scaledHeight(12)

    },
    touchItem: {
       // width:scaledHeight(250),
      //  height:scaledHeight(250),
      marginVertical:"5%"

    },
    accountItemSelected: {
        backgroundColor: '#FFFFFF',
        // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderColor:'#5D83AE99',
        borderWidth:1,
        borderStyle:'solid',
        width:'100%',
        height:scaledHeight(250),
    },
    accountItem: {
        backgroundColor: '#FFFFFF',
       // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderColor:'#5D83AE99',
        borderWidth:1,
        borderStyle:'solid',
        width:scaledHeight(250),
        height:scaledHeight(250),
      
    },
    accountItemTxt: {
        color: '#56565A',
        fontWeight: 'bold',
        fontSize: scaledHeight(20),
        textAlign:'center',
        lineHeight:scaledHeight(35),
        margin:scaledHeight(12)
    },
    accountItemDescTxt: {
        color: '#333333DE',
        opacity:.75,
        fontSize: scaledHeight(14),
        textAlign:'center',
        lineHeight:scaledHeight(17),
        margin:scaledHeight(14)
    },


   
});