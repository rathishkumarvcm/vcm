import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight,scaledWidth} from '../../Utils/Resolution';
//import { Colors } from "react-native/Libraries/NewAppScreen";

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
    circle_Completed: {
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#A7E993'
    },
    circle_Inprogress: {
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#CDDBFC',
        borderColor:'#9DB6F1'
    },
    circle_NotStarted: {
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#C1C1C1'
    },
    circleTextNew:{      
        width: scaledWidth(35),
        height: scaledHeight(35),
        textAlign:"center",
        fontSize:scaledHeight(15),
        fontWeight:'bold'
    },
    circleText:{      
        width: scaledWidth(35),
        height: scaledHeight(35),
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:scaledHeight(15),
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
    autoInvest_sub_title_view:{
        flex:1,
        flexDirection:'row',
        marginTop:scaledHeight(20),
        height:scaledHeight(27),
        marginBottom:scaledHeight(10)
    },
    autoInvest_sub_title_text:{
        flex:0.9,
        fontSize:scaledHeight(20),
        color:'#56565A',
        fontWeight:'bold'
    },
    autoInvest_sub_edit:{
        flex:0.1,
        color:'#5D83AE',
        fontSize:scaledHeight(15),
        textAlign:'right'
    },
    body:
    {
        marginLeft:'4%',
        marginRight:'4%'
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
    seperator_line:{
        borderTopWidth:1,
        borderTopColor:'#C1C1C1',
       
    },
    view_row:{
        flexDirection:'row',
    },
    dropdownWidth:{
        width:scaledWidth(80)
    },
    scheduleContent:{
        fontSize:scaledHeight(14),
        color:'#333333DE',
        marginTop:scaledHeight(20),
        marginBottom:scaledHeight(20)
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
    verifyContentView:{
        flexDirection:'column',
        borderWidth:1,
        borderColor:'#D6D8DC',
        paddingLeft:scaledWidth(20),
        paddingTop:scaledHeight(20),
        paddingBottom:scaledHeight(20),
    },
    verifyConentTitle1:
    {
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    verifyConentTitle2:
    {
        color:'#333333DE',
        fontSize:scaledHeight(16),
        marginTop:scaledHeight(10)
    },
    verifyBottomView:{
        backgroundColor:'#E8ECEE',
        justifyContent:"center",
        alignItems:'center',
        height:scaledHeight(120)
    },
    verifyBottomText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        paddingLeft:scaledWidth(20),
    }
});