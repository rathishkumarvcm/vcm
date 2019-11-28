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
    circleText:{      
        width: scaledWidth(35),
        height: scaledHeight(35),
        textAlign:"center",
        textAlignVertical:"center",
        
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
        marginTop:scaledHeight(20),
        height:scaledHeight(27),
        marginBottom:scaledHeight(10)
    },
    autoInvest_sub_title_text:{
        fontSize:scaledHeight(20),
        color:'#56565A',
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
    circleTextNew:{      
        width: scaledWidth(35),
        height: scaledHeight(35),
        textAlign:"center",
        fontSize:scaledHeight(15),
        fontWeight:'bold'
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
    esignBody:{
            borderColor:'#61285F45',
            borderWidth:1,
            
    },
    esignBody1:
    {
            paddingLeft:scaledWidth(15),
            paddingRight:scaledWidth(15),
            paddingTop:scaledHeight(15),
            paddingBottom:scaledHeight(15),
    },
    esignTitle:{
        color:'#54565B',
        fontSize:scaledHeight(16),
        marginBottom:scaledHeight(10),
    },
    esignHeading:{
        color:'#2C8DBF',
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(10),
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    esignContent1:{
        color:'#56565A',
        fontSize:scaledHeight(15),
        marginBottom:scaledHeight(15)
    },
    esignContent2:{
        color:'#56565A',
        fontSize:scaledHeight(15),
    },
    esignBottomView:{
        flexDirection:'row',
        backgroundColor:'#F3F3F3',
        paddingLeft:scaledWidth(15),
        paddingRight:scaledWidth(15),
        paddingTop:scaledHeight(15),
        paddingBottom:scaledHeight(15),
    },
    agreeTermsTxt: {
        textAlign: 'left',
        fontSize: scaledHeight(16),
        color: '#333333DE',
        //marginTop:scaledHeight(5)
    },
    
});