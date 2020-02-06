import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


 const styles = StyleSheet.create({
    accountFlex:{
        borderColor:'#9DB4CE',
        borderWidth:scaledHeight(1),
        flexDirection:'column',
        height:scaledHeight(82),
        marginBottom:"6%"
    },
    accountNumberText:{
        color:'#54565B',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginLeft:scaledHeight(10),
        marginTop:scaledHeight(10),
       
    },
    allShares:{
        flexDirection:'row',
        height:scaledHeight(40),
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:scaledHeight(20),
        width:"92%",
    },
    allSharesText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        marginLeft:"3%",
        paddingTop:scaledHeight(11),
    },
    amountTextBox:{
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        height:scaledHeight(40),
        marginLeft: "8%",
        width:"76%",
    },
    backButtonFlex: {
        alignItems: 'center',
        backgroundColor:'#FFFFFF',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop:scaledHeight(18)
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    blueTextBold13px:{
        alignSelf:'center',
        color:'#0D7CB5',
        fontSize:scaledHeight(13),
        fontWeight:'bold',
        marginLeft:"4%",
        width:"70%",
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    dollarText:{
        color:'#333333DE',
        fontSize:scaledHeight(15),
        fontWeight:'bold',
        marginLeft:"3%",
        paddingTop:scaledHeight(11),
    },
    flex1:{
        borderBottomColor:'#5D83AE99',
        borderBottomWidth:scaledHeight(1),
        flexDirection:'row',
        height:scaledHeight(60),
    },
    flex2:{
        backgroundColor:'#EFECEC',
        borderTopColor:'#5D83AE99',
        borderTopWidth:scaledHeight(1),
        flexDirection:'row',
        height:scaledHeight(82),
        justifyContent:'space-between',
        marginTop:"3%",
    },
    flex3:{
        flexDirection:'column',
        height:scaledHeight(189),
    },
    flex6:{
        flexDirection: 'column',
        height:scaledHeight(205),
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"12%",
    },
    flexHead:{
        marginLeft: "4%",
        marginRight:"4%",
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
        opacity: 0.4,
    },
    fundInfoFlex:{
        flexDirection:'column'
    },
    fundSourceContent:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:"4%",
        width:"92%",
    },
    fundsFlex:{
        borderColor:'#FFFFFF',
        borderWidth:scaledHeight(3),
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:"5%",
    },
    fundsFlexSelected:{
        borderColor:'#B5E198',
        borderWidth:scaledHeight(3),
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:"5%",
    },
    greyTextRegular13px:{
        color:'#56565A',
        fontSize:scaledHeight(13),
    },
    headerFlex:{
        flexDirection:'row',
        height:scaledHeight(29),
    },
    headerText:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        fontWeight:'bold',
    },
    headerTextView: {
        marginLeft: '4%',
        marginRight: '4%'
    },
    horizontalFlex:{
        flexDirection:'row'
    },
    inputStyle:{
        color:'#56565A',
        fontSize:scaledHeight(16),
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginTop: '3%',
        opacity: 0.25,
    },
    mainFlex:{
        flex: 0.85
    },
    minAmountFlex:{
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '3%',
    },
    radioButtonFlexOff:{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#DEDEDF',
        borderRadius: scaledHeight(16),
        borderWidth: 1,
        height: scaledHeight(32),
        justifyContent: 'center',
        marginTop:scaledHeight(4),
        width: scaledHeight(32),
    },
    radioButtonFlexOn:{
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderRadius: scaledHeight(8),
        height: scaledHeight(16),
        justifyContent: 'center',
        width: scaledHeight(16),
    },
    sharesFlex:{
        borderColor:'#5D83AE99',
        borderWidth:scaledHeight(1),
        flexDirection:'column',
        // height:scaledHeight(347),
    },
    submitFlex: {
        alignItems: 'center',
        backgroundColor:'#544A54',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop:scaledHeight(19)
    },
    submitFlexDisabled: {
        alignItems: 'center',
        backgroundColor:'#544A54',
        borderColor: '#544A54',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop:scaledHeight(19),
        opacity:0.5
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%",
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    titleHeaderTextStyle: {
        color: '#56565A',
        fontSize: scaledHeight(24),
        fontWeight: 'bold'
    },
    totalSharesFlex:{
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:"4%",
        width:"46%",
    },
    totalSharesText:{
        color:'#56565A',
        fontSize:scaledHeight(14),
        fontWeight:'bold',
        opacity:1
    },
    totalSharesValue:{
        color:'#56565A',
        fontSize:scaledHeight(14),
        paddingVertical:scaledHeight(5)
    },
});

export default styles;