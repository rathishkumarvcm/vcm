import { StyleSheet } from "react-native";
import { scaledHeight,scaledWidth} from '../../Utils/Resolution';

 const styles = StyleSheet.create({
    autoInvestHead:{
        color:'#56565A',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginBottom:scaledWidth(10),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(10)
    },
    autoInvestTitleBody:{
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(20)
    },
    autoInvest_sub_edit:{
        color:'#5D83AE',
        flex:0.1,
        fontSize:scaledHeight(15),
        textAlign:'right'
    },
    autoInvest_sub_title_skip:{
        color:'#56565A',
        flex:0.9,
        fontSize:scaledHeight(20),
        fontWeight:'bold',
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(30)
    },
    autoInvest_sub_title_text:{
        color:'#56565A',
        flex:0.9,
        fontSize:scaledHeight(20),
        fontWeight:'bold'
    },
    autoInvest_sub_title_view:{
        flex:1,
        flexDirection:'row',
        height:scaledHeight(27),
    },
    autoInvest_title_text:
    {
        color:'#4D79F6',
        fontSize:scaledHeight(20),
    },
     autoInvest_title_view:{
        alignItems:'center',
        backgroundColor:'#E4EBFE',
        borderColor:'#D5DEFD',
        borderWidth:1,
        height:scaledHeight(40),
        justifyContent:"center",
        marginTop:scaledHeight(20)
    },
    body:
    {
        marginLeft:'4%',
        marginRight:'4%'
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
        marginTop:scaledHeight(15),
        width:'80%'
     },
    cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    circleText:{      
         fontSize:scaledHeight(15)
     },
    circleTextNew:{      
        fontSize:scaledHeight(15),
         fontWeight:'bold'
     },
    circle_Completed: {
        alignItems:'center',
        backgroundColor: '#A7E993',
        borderRadius: scaledHeight(35)/2,
        height: scaledHeight(35),
        justifyContent:'center',
        width: scaledWidth(35)
    },
    circle_Inprogress: {
        alignItems:'center',
        backgroundColor: '#CDDBFC',
        borderColor:'#9DB6F1',
        borderRadius: scaledHeight(35)/2,
        height: scaledHeight(35),
        justifyContent:'center',
        width: scaledWidth(35)
    },
    circle_NotStarted: {
        alignItems:'center',
        backgroundColor: '#C1C1C1',
        borderRadius: scaledHeight(35)/2,
        height: scaledHeight(35),
        justifyContent:'center',
        width: scaledWidth(35)
    },
    circle_connect:{
        alignSelf:'center',
        borderTopColor:'#C1C1C1',
        borderTopWidth:1,
        width:scaledWidth(40)
    },
    circle_view:{
        flexDirection:'row',
        justifyContent:"center",
        marginTop:scaledHeight(30),
    },
    container:{
        backgroundColor:'#F7FAFF',
        flex:1,
        width:'100%'
    },
    continueButton:{
        alignItems:'center',
        backgroundColor:"rgba(84,74,84,0.5)",
        borderColor:'#61285F45',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
        width:'80%',
     },
     continueButtonSelected:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#61285F45',
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
    dropdownWidth:{
        width:scaledWidth(80)
    },
    financialTextLabel: {
        color: '#333333DE', 
        fontSize: scaledHeight(18), 
        fontWeight: 'bold', 
        marginBottom: '4%'
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
    scheduleContent:{
        color:'#333333DE',
        fontSize:scaledHeight(14),
        marginBottom:scaledHeight(20),
        marginTop:scaledHeight(20)
    },
     scrollStyle:{ flex: 0.85 },
    seperator_line:{
        borderTopColor:'#C1C1C1',
        borderTopWidth:1,
       
    },
    skipConentTitle:
    {
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginTop:scaledHeight(20)
    },
    verifyBottomText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        paddingLeft:scaledWidth(20),
        paddingRight:scaledWidth(10)
    },
    
    verifyBottomView:{
        alignItems:'center',
        backgroundColor:'#E8ECEE',
        height:scaledHeight(120),
        justifyContent:"center"
    },
    verifyConent1:
    {
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginBottom: scaledHeight(10), 
        marginTop: scaledHeight(10)
    },
    verifyConent2:
    {
        color:'#333333DE',
        fontSize:scaledHeight(16),
        
    },
    verifyContentMain:{
         flexDirection: "column", 
         marginTop: scaledHeight(20) 
    },
    verifyContentView:{
        borderColor:'#D6D8DC',
        borderWidth:1,
        flexDirection:'column',
        paddingBottom:scaledHeight(10),
        paddingLeft:scaledWidth(20),
        paddingTop:scaledHeight(10), 
    },
    view_row:{
        flexDirection:'row',
    },
});

export default styles;