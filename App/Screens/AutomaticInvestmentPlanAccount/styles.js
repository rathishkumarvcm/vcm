import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth} from '../../Utils/Resolution';



const styles = StyleSheet.create({
    accountList:
    { borderColor: '#5D83AE99', borderWidth: 1, marginTop: scaledHeight(10) },
    autoInvestCont:
    {
        color:'#56565A',
        fontSize:scaledHeight(16),
        marginTop:scaledHeight(10),
    },
    autoInvestHead:{
        color:'#56565A',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginBottom:scaledWidth(10),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(10)
    },
    autoInvest_sub_title_text:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        fontWeight:'bold',
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(20)
    },
    autoInvest_title_text:
    {
        color:'#4D79F6',
        fontSize:scaledHeight(20),
        fontWeight:'bold'
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
    auto_invest_flat_min:
    {
        color:'#333333DE',
        fontSize:scaledHeight(13),
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(5)
    },
    auto_invest_to:
    {
        backgroundColor:'#EFECEC',  
        borderColor: '#DCDCDC', 
        borderWidth: 1,
        flexDirection: 'column',
        padding:20,
    },
    auto_invest_to_flat:
    {
        flexDirection: 'column',   
        padding:20,
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
        alignItems:'center',
        flexDirection: 'row',
        height:scaledHeight(45),
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
    currentView:{ flexDirection: 'row' },
    displayAcc:
    {color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' },
    displayAccView:
    { borderBottomColor: '#61285F45', borderBottomWidth: 1, flexDirection: 'column', justifyContent: 'center', padding: scaledHeight(20) },
     expandView:
    { flexDirection: 'row', flex: 1, alignItems: "center" },
    lblRadioBtnTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(16),
        lineHeight:28
    },
     lblRadioDescTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(14),
        lineHeight:22,
        marginTop:scaledHeight(14),
        opacity:.75
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
    radioBtnGrp:{
        flexDirection:'row',
        flexGrow:1,
        marginTop:scaledHeight(0)
    },
    scrollStyle:{ flex: 0.85 },
    selectedAccount:
    { borderColor: '#B5E198', borderWidth: 5, marginTop: scaledHeight(10) },
    seperator_line:{
        borderTopColor:'#C1C1C1',
        borderTopWidth:1,
       
    },
    topSpace:
    { marginTop: scaledHeight(20) }
});

export default styles;