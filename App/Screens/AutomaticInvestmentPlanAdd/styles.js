import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight, scaledWidth} from '../../Utils/Resolution';



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
    autoInvestHead:{
        marginTop:scaledHeight(10),
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginBottom:scaledWidth(10),
        color:'#56565A',
        marginLeft:'4%',
        marginRight:'4%'
    },
    circle_Completed: {
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#A7E993',
        alignItems:'center',
        justifyContent:'center'
    },
    circle_Inprogress: {
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#CDDBFC',
        borderColor:'#9DB6F1',
        alignItems:'center',
        justifyContent:'center'
    },
    circle_NotStarted: {
        
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#C1C1C1',
        alignItems:'center',
        justifyContent:'center'
        
    },
    circleTextNew:{      
       fontSize:scaledHeight(15),
        fontWeight:'bold'
    },
    circleText:{      
        fontSize:scaledHeight(15)
    },
    circle_connect:{
        borderTopWidth:1,
        borderTopColor:'#C1C1C1',
        width:scaledWidth(60),
        alignSelf:'center'
    },
    circle_view:{
        flexDirection:'row',
        justifyContent:"center",
        marginTop:scaledHeight(30),
    },
    autoInvestCont:
    {
        color:'#56565A',
        fontSize:scaledHeight(16),
        marginTop:scaledHeight(10),
        marginTop:scaledHeight(10),
    },
    autoInvest_title_view:{
        marginTop:scaledHeight(20),
        height:scaledHeight(40),
        borderWidth:1,
        borderColor:'#D5DEFD',
        backgroundColor:'#E4EBFE',
        justifyContent:"center",
        alignItems:'center'
    },
    autoInvest_title_text:
    {
        fontSize:scaledHeight(20),
        color:'#4D79F6',
    },
    
    autoInvest_sub_title_text:{
        fontSize:scaledHeight(20),
        color:'#56565A',
        fontWeight:'bold',
        marginTop:scaledHeight(20),
        marginBottom:scaledHeight(10)
    },
    body:
    {
        marginLeft:'4%',
        marginRight:'4%'
    },
    seperator_line:{
        borderTopWidth:1,
        borderTopColor:'#C1C1C1',
       
    },
    auto_invest_to:
    {
        flexDirection: 'column',  
        borderColor: '#DCDCDC', 
        borderWidth: 1,
        backgroundColor:'#EFECEC',
        padding:20,
    },
    auto_invest_to_flat:
    {
        flexDirection: 'column',   
        padding:20,
    },
    auto_invest_flat_min:
    {
        color:'#333333DE',
        fontSize:scaledHeight(13),
        marginTop:scaledHeight(20),
        marginBottom:scaledHeight(20)
    },
    auto_invest_to_top:
    {
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginBottom:scaledHeight(10),
        marginRight:scaledWidth(15),
    },
    auto_invest_to_top_view:
    {
        flexDirection: 'row',
        height:scaledHeight(45),
        alignItems:'center',
    },
    radioBtnGrp:{
        flexGrow:1,
        marginTop:scaledHeight(0),
        flexDirection:'row'
    },
    lblRadioBtnTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        lineHeight:28,
        flexWrap:'wrap'
    },
    lblRadioDescTxt:{
        marginTop:scaledHeight(14),
        color:'#333333DE',
        fontSize:scaledHeight(14),
        lineHeight:22,
        flexWrap:'wrap',
        opacity:.75
    },
    cancelButton:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
       // borderRadius:scaledHeight(25),
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
    continueButton:{
        borderColor:'#56565A',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
       // borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center'
     },
     continueButtonText:{
        fontSize:scaledHeight(16),
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    
    
});