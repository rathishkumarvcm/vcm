import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


 const styles = StyleSheet.create({
    accountDetailsFlex:{
        backgroundColor:'#FFFFFF',
        borderColor:'#9DB4CE',
        borderWidth:scaledHeight(1),
        flexDirection:'column',
        height:"100%",
    },
    accountDetailsFlexSelected:{
        backgroundColor:'#FFFFFF',
        borderColor:'#B5E198',
        borderWidth:scaledHeight(3),
        flexDirection:'column',
        height:scaledHeight(246),
        marginTop:scaledHeight(20),
    },
    accountDetailsFlexUnSelected:{
        backgroundColor:'#FFFFFF',
        borderColor:'#FFFFFF',
        borderWidth:scaledHeight(3),
        flexDirection:'column',
        height:scaledHeight(246),
        marginTop:scaledHeight(20),
    },
    accountNumberFlex:{
        width:"85%"
    },
    accountTypeFlex:{
        flexDirection:'column',
        height:scaledHeight(45),
        marginTop:scaledHeight(30),
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
    blackText14px:{
        color:'#56565A',
        fontSize:scaledHeight(14),
    },
    blackTextBold14px:{
        color:'#56565A',
        fontSize:scaledHeight(14),
        fontWeight:'bold'
    },
    blackTextBold18px:{
        color:'#54565B',
        fontSize:scaledHeight(18),
        fontWeight:'bold'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    currentValueflex:{
        flexDirection:'column',
        justifyContent:'space-between',
        width:"50%",
    },
    flex1:{
        marginLeft: "4%",
        marginRight: "4%"
    },
    flex6:{
        flexDirection: 'column',
        height:scaledHeight(140),
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"12%",
    },
    flexAccDetails1:{
        flexDirection:'row',
        height:scaledHeight(73),
        marginLeft: '2%',
        marginRight:"4%",
        marginTop:"4%",
    },
    flexAccDetails2:{
        flexDirection:'row',
        height:scaledHeight(44),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: scaledHeight(20),
    },
    flexAccDetails3:{
        flexDirection:'column',
        height:scaledHeight(44),
        justifyContent:'space-between',
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: scaledHeight(20),  
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
        opacity: 0.4,
    },
    greyText16px:{
        color:'#56565A',
        fontSize:scaledHeight(16),
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
    iconStyle:{
        alignItems: 'flex-start',
        justifyContent: 'flex-start', 
        width:"20%"
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginTop: '4%',
        opacity: 0.25,
        width: "100%",
    },
    mainFlex:{
        flex: 0.85
    },
    noRecordsFlex:{
        marginLeft:"8%",
        marginTop:"2%"
    },
    submitFlex: {
        alignItems: 'center',
        backgroundColor:'#544A54',
        borderColor: '#544A54',
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
    toggleOffCircle:{
        backgroundColor: '#FFFFFF',
        borderColor: '#707070', 
        borderRadius: scaledHeight(15), 
        borderWidth: scaledHeight(1), 
        height: scaledHeight(30), 
        position: 'absolute', 
        width: scaledHeight(30), 
        zIndex: 3
    },
    toggleOffFlex:{
        alignItems: 'flex-start', 
        backgroundColor: 'white', 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        marginRight: "6%",
        marginTop: "1%", 
        width: "15%", 
    },
    toggleOffGreyBg:{
        backgroundColor: '#DBDBDB', 
        borderColor: '#707070', 
        borderRadius: 15,
        borderWidth: scaledHeight(1), 
        height: scaledHeight(25), 
        marginTop: scaledHeight(2),
        width: "100%", 
    },
    toggleOnCircle:{
        backgroundColor: '#FFFFFF', 
        borderColor: '#707070', 
        borderRadius: scaledHeight(15), 
        borderWidth: scaledHeight(1), 
        height: scaledHeight(30), 
        marginLeft: scaledHeight(-30),
        width: scaledHeight(30), 
        zIndex: 3, 
    },
    toggleOnFlex:{
        alignItems: 'flex-start', 
        backgroundColor: 'white', 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        marginRight: "6%",
        marginTop: "1%", 
        width: "15%", 
    },
    toggleOnGreyBg:{
        backgroundColor: '#444444', 
        borderColor: '#707070', 
        borderRadius: 15, 
        borderWidth: scaledHeight(1), 
        height: scaledHeight(25), 
        marginTop: scaledHeight(2),
        width: "100%", 
    },
});

export default styles;