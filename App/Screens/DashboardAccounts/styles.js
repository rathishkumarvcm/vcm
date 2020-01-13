import { StyleSheet } from "react-native";
import {scaledHeight} from '../../Utils/Resolution';



const styles = StyleSheet.create({
    accountItem: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor:'#5D83AE99',
        borderStyle:'solid',
        borderWidth:1,
        height:scaledHeight(250),
        justifyContent: 'center',
        width:scaledHeight(250),
      
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
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor:'#5D83AE99',
        borderStyle:'solid',
        borderWidth:1,
        height:scaledHeight(250),
        justifyContent: 'center',
        width:'100%',
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
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:"10%",
        width: '80%'
       
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
    disclaimerTitleTxt:{ 
        color:'#56565A',
        fontSize : scaledHeight(16),
        fontWeight : 'bold',
        lineHeight: 25,
        marginBottom : scaledHeight(10)
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
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'row',
        flexGrow:1,
        flexWrap:'wrap',
        justifyContent:'center',
        marginVertical:scaledHeight(19),
        padding:scaledHeight(12),
        width:'100%'
    },
    privacyText:{
        color:'#61285F',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginVertical:'2%',
        width:'50%'
    },
    scrollView: {
        flex: .85
    },
    touchItem: {
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