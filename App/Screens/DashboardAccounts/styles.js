import { StyleSheet } from "react-native";
import {scaledHeight} from '../../Utils/Resolution';



const styles = StyleSheet.create({
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
    accountItemDescTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        lineHeight:scaledHeight(17),
        margin:scaledHeight(14),
        opacity:.75,
        textAlign:'center'
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
    accountItemTxt: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight:scaledHeight(35),
        margin:scaledHeight(12),
        textAlign:'center'
    },
    accountSection: {
        width: '80%',
        marginHorizontal:"10%",
       // flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
       
    },
    commonColView:{
        flexGrow:1
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    copyRightSection:{
        alignItems:'center',
        backgroundColor:'#56565A',
        height:scaledHeight(50),
        justifyContent:'center'
    },
    copyRightText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(12)

    },
    disclaimerTitleTxt:{ // termsofuseText
        fontSize : scaledHeight(16),
        marginBottom : scaledHeight(10),
        fontWeight : 'bold',
        color:'#56565A',
        lineHeight: 25
    },
    disclaimerTxt:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        lineHeight: 25

    },
    listContainer:{
         flexGrow: 1, 
         marginTop: scaledHeight(59) 
    },
    moreTxt:{
        color:'#61285F',
        fontSize : scaledHeight(16),
        fontWeight:'bold'
    },
    newVictorySection:{
        backgroundColor:'#FFFFFF',
        flexGrow:1,
        marginTop:scaledHeight(150),
        padding:scaledHeight(12),
        width:'100%',

    
    },
    pageFooter:{
        backgroundColor:'#FFFFFF',
        flexGrow:1,
        width:'100%',
 
        // backgroundColor:'yellow',
 
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
    privacyAgreement:{
        // marginTop:convertToDeviceResolution(4),
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
        // paddingLeft:'4%',
        marginVertical:'2%',
        color:'#61285F',
        fontWeight:'bold',
        fontSize:scaledHeight(16)
    },
    scrollView: {
        flex: .85
    },
    touchItem: {
       // width:scaledHeight(250),
      //  height:scaledHeight(250),
      marginVertical:"5%"

    },
    welcomeTxt: {
        color: '#56565A',
        fontSize: scaledHeight(28),
        fontWeight:'bold',
        lineHeight: 40,
        marginTop:scaledHeight(93),
        textAlign: 'center'

    }


   
});


export default styles;