import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex:{
        flex: 0.85
    },
    accountFlex:{
        height:scaledHeight(82),
        flexDirection:'column',
        borderWidth:scaledHeight(1),
        borderColor:'#9DB4CE',
        marginBottom:"6%"
    },
    accountNumberText:{
        color:'#54565B',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginTop:scaledHeight(10),
        marginLeft:scaledHeight(10)
    },
    headerFlex:{
        height:scaledHeight(29),
        flexDirection:'row',
    },
    headerText:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        fontWeight:'bold',
    },
    flexHead:{
        marginLeft: "4%",
        marginRight:"4%",
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        marginTop: '3%',
    },
    fundSourceContent:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        width:"92%",
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:"4%",
       // marginBottom:"5%"
    },
    sharesFlex:{
        height:scaledHeight(347),
        borderWidth:scaledHeight(1),
        borderColor:'#5D83AE99',
        flexDirection:'column'
    },
    fundsFlex:{
        borderWidth:scaledHeight(3),
        borderColor:'#FFFFFF',
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:"5%",
    },
    fundsFlexSelected:{
        borderWidth:scaledHeight(3),
        borderColor:'#B5E198',
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:"5%",
    },
    flex1:{
        flexDirection:'row',
        height:scaledHeight(60),
        borderBottomColor:'#5D83AE99',
        borderBottomWidth:scaledHeight(1)
    },
    blackTextBold13px:{
        fontSize:scaledHeight(13),
        fontWeight:'bold',
        color:'#544A54',
        width:"70%",
        alignSelf:'center',
        marginLeft:"4%"
    },
    flex2:{
        flexDirection:'row',
        height:scaledHeight(82),
        backgroundColor:'#EFECEC',
        //opacity:0.5,
        justifyContent:'space-between'
    },
    totalSharesFlex:{
        flexDirection:'column',
        marginLeft:"4%",
        width:"46%",
       justifyContent:'center',
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
    },
    flex3:{
        flexDirection:'column',
        height:scaledHeight(189),
    },
    allShares:{
        flexDirection:'row',
        marginLeft:"4%",
        marginRight:"4%",
        width:"92%",
        height:scaledHeight(40),
        marginTop:scaledHeight(20),
       // borderColor: 'red',
       //borderWidth: scaledHeight(1),
    },
    radioButtonFlexOff:{
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(32),
        height: scaledHeight(32),
        borderRadius: scaledHeight(16),
        borderColor: '#DEDEDF',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        marginTop:scaledHeight(4)
    },
    radioButtonFlexOn:{
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(16),
        height: scaledHeight(16),
        borderRadius: scaledHeight(8),
        backgroundColor: '#56565A',
        //paddingTop:scaledHeight(2)
    },
    allSharesText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        marginLeft:"3%",
        paddingTop:scaledHeight(11),
    },
    dollarText:{
        color:'#333333DE',
        fontSize:scaledHeight(15),
        fontWeight:'bold',
        marginLeft:"3%",
        paddingTop:scaledHeight(11),
    },
    amountTextBox:{
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        height:scaledHeight(40),
        width:"76%",
        marginLeft: "8%",
    },
    inputStyle:{
        color:'#56565A',
        fontSize:scaledHeight(16),
    },
    flex6:{
        height:scaledHeight(205),
        flexDirection: 'column',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"12%",
    },
    backButtonFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor:'#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:scaledHeight(18)
    },
    backButtonText: {
        color: '#544A54',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    submitFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor:'#544A54',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:scaledHeight(19)
    },
    submitFlexDisabled: {
        height: scaledHeight(50),
        borderColor: '#544A54',
        borderWidth: scaledHeight(1),
        backgroundColor:'#544A54',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:scaledHeight(19),
        opacity:0.5
    },
    submitText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%",
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },

});