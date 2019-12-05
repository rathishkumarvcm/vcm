import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


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
        height:scaledHeight(58),
        flexDirection:'column',
    },
    accountNumberText:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        fontWeight:'bold'
    },
    emptyFlex:{
        height:scaledHeight(30)
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
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        width: "100%",
        marginTop: '4%',
    },
    fundSourceContent:{
        color:'#54565B',
        fontSize:scaledHeight(14),
        marginTop:"3%",
        marginBottom:"5%"
    },
    offlineMethodFlex:{
        justifyContent:'space-between',
        marginBottom:"4%"
    },
    subHeadingText:{
        marginLeft:"4%",
        marginBottom:"4%",
        color:'#56565A',
        fontWeight:'bold',
        fontSize:scaledHeight(18)
    },
    offlineMethodContent:{
        color:'#333333DE',
        marginLeft:"4%",
        marginBottom:"4%",
        fontSize:scaledHeight(14)
    },
    or:{
        color:'#333333DE',
        fontSize:scaledHeight(18),
        height:scaledHeight(22),
        marginTop:scaledHeight(10),
        marginBottom:scaledHeight(30),
        textAlign:'center'
    },
    bankAccountFlex:{
        flexDirection: 'row', 
        borderWidth: scaledHeight(1), 
        borderColor: '#5D83AE99', 
        marginLeft: '4%', marginRight: '4%', 
        height: scaledHeight(80), 
        marginBottom: scaledHeight(24)
    },
    selectedBankAccountFlex:{
        flexDirection: 'row', 
        borderWidth: scaledHeight(4), 
        borderColor: '#B5E198', 
        marginLeft: '4%', marginRight: '4%', 
        height: scaledHeight(80), 
        marginBottom: scaledHeight(24)
    },
    bankIconFlex:{
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: scaledHeight(7), 
        marginTop: scaledHeight(7), 
        width: scaledHeight(76), 
        height: scaledHeight(66), 
        backgroundColor: '#E9E9E9'
    },
    bankIconStyle:{
        width: scaledHeight(43), 
        height: scaledHeight(45), 
        alignSelf: 'center'
    },
    bankDetailsFlex:{
        flexDirection: 'column', 
        marginLeft: "10%", 
        justifyContent: 'center', 
        alignContent: 'center'
    },
    bankAccountName:{
        color: '#56565A', 
        fontSize: scaledHeight(16), 
        fontWeight: 'bold', 
        height: scaledHeight(19)
    },
    bankAccountNo:{
        color: '#56565A', 
        fontSize: scaledHeight(14), 
        height: scaledHeight(17)
    },
    switchFlex:{
        height: scaledHeight(54),
    },
    amountBeforeTaxVal:{
        height: scaledHeight(48), 
        width: scaledHeight(318), 
        borderWidth: scaledHeight(1), 
        borderColor: '#DEDEDF', 
        marginLeft: scaledHeight(16), 
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        opacity: 0.8, 
        justifyContent: 'center', 
        alignContent: 'center' 
    },
    stateTaxValFlex:{
        height: scaledHeight(48),
        marginTop: scaledHeight(15), 
        width: scaledHeight(345), 
        borderWidth: scaledHeight(1), 
        borderColor: '#DEDEDF', 
        justifyContent: 'center', 
        alignContent: 'center' 
    },
    stateTaxVal:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        borderWidth: scaledHeight(1), 
        borderColor: '#DEDEDF', 
        backgroundColor:'#FFFFFF',
        width:"100%",
        paddingLeft:"4%",
        height: scaledHeight(48),
        marginTop: scaledHeight(15), 
        paddingTop:scaledHeight(15), 
    },
    stateTaxFlex:{
        marginTop:scaledHeight(26),
        height: scaledHeight(82),
    },
    dollarSkin:{
        height: scaledHeight(48), 
        width: "5%", 
        color: '#333333DE', 
        fontSize: scaledHeight(16), 
        fontWeight: 'bold',
        paddingTop:scaledHeight(15), 
    },
    totalWithdrawalVal:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        backgroundColor:'#F1F1F1',
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        opacity: 0.8,
        height: scaledHeight(48), 
        width:"92%",
        paddingLeft:"2%",
        paddingTop:scaledHeight(15), 
        marginLeft:"3%"
    },
    amountBeforeTaxesVal:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        height: scaledHeight(48), 
        width:"92%",
        marginLeft:"3%"
    },
    stateTaxInputStyle:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        height: scaledHeight(48), 
        width:"100%",
        marginTop:scaledHeight(15), 
    },
    inputStyle:{
        color:'#56565A',
        fontSize: scaledHeight(16), 
        paddingLeft:'1%'
    },
    reqAmountTypeStyle:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        width:"100%",
    },
    totalWithdrawalFlex:{
        height: scaledHeight(48), 
        marginTop: scaledHeight(15), 
        flexDirection: 'row'
    },
    blackTextBold16px:{
        fontSize: scaledHeight(16), 
        fontWeight: 'bold', 
        color: '#333333DE', 
        height: scaledHeight(19) ,
    },
    onlineMethodFlex:{
        justifyContent:'space-between',
    },
    offButtonStyle: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: scaledHeight(1),
        width: '60%',
        marginLeft:"-4%",
        backgroundColor: '#B7B7B7',
    },
    onButtonStyleDisable: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: 1,
        marginLeft:"10%",
        width: '72%',
        backgroundColor: '#FFFFFF',
    },
    offButtonStyleDisable: {
        borderColor:'#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: 1,
        width: '60%',
        marginLeft:"-4%",
        backgroundColor: '#FFFFFF',
    },
    onButtonStyle: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: 1,
        marginLeft:"30%",
        width: '48%',
        backgroundColor: '#B7B7B7',
    },
    TextOnStyle: {
        color:'#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        justifyContent:'flex-start',
        marginLeft:"0%",
        paddingLeft:"10%"
    },
    TextOffStyle: {
        color:'#544A54',
        opacity:0.5,
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        textAlign:'center',
        paddingLeft:"8%"
    },
    TextOffStyleWithholdtax:{
        color:'#544A54',
        opacity:0.5,
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginLeft:"0%",
        textAlign:'center',
        paddingLeft:"3%"
    },
    flex2:{
        marginLeft: "4%",
        marginRight:"4%",
    },
    flex4:{
        height: scaledHeight(951),
        marginLeft: "4%",
        marginRight:"4%",
    },
    flex4Hide:{
        height: scaledHeight(180),
        marginLeft: "4%",
        marginRight:"4%",
    },
    flex4a:{
        height: scaledHeight(140),
        flexDirection:'column',
    },
    flex4b:{
        height: scaledHeight(782),
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