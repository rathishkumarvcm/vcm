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
    headerFlex:{
        height:scaledHeight(29),
        flexDirection:'row'
    },
    headerText:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        fontWeight:'bold',
    },
    toggleOnFlex:{
        backgroundColor: 'white', 
        width: "15%", 
        marginTop: "1%", 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        flexDirection: 'row', 
        marginRight: "6%" 
    },
    toggleOnGreyBg:{
        backgroundColor: '#444444', 
        borderColor: '#707070', 
        borderWidth: scaledHeight(1), 
        width: "100%", 
        height: scaledHeight(25), 
        borderRadius: 15, 
        marginTop: scaledHeight(2)
    },
    toggleOnCircle:{
        backgroundColor: '#FFFFFF', 
        width: scaledHeight(30),
        height: scaledHeight(30),  
        borderRadius: scaledHeight(15), 
        borderColor: '#707070', 
        borderWidth: scaledHeight(1), 
        zIndex: 3, 
        marginLeft: scaledHeight(-30)
    },
    toggleOffFlex:{
        backgroundColor: 'white', 
        width: "15%", 
        marginTop: "1%", 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        flexDirection: 'row', 
        marginRight: "6%"
    },
    toggleOffGreyBg:{
        backgroundColor: '#DBDBDB', 
        borderColor: '#707070', 
        borderWidth: scaledHeight(1), 
        width: "100%", 
        height: scaledHeight(25), 
        borderRadius: 15,
        marginTop: scaledHeight(2)
    },
    toggleOffCircle:{
        width: scaledHeight(30), 
        height: scaledHeight(30), 
        borderRadius: scaledHeight(15), 
        borderColor: '#707070', 
        borderWidth: scaledHeight(1), 
        backgroundColor: '#FFFFFF', 
        position: 'absolute', 
        zIndex: 3
    },
    flex1:{
        marginLeft: "4%",
        marginRight: "4%"
    },
    greyText16px:{
        color:'#56565A',
        fontSize:scaledHeight(16),
    },
    blackTextBold18px:{
        color:'#54565B',
        fontSize:scaledHeight(18),
        fontWeight:'bold'
    },
    currentValueflex:{
        flexDirection:'column',
        width:"50%",
        justifyContent:'space-between'
    },
    blackTextBold14px:{
        color:'#56565A',
        fontSize:scaledHeight(14),
        fontWeight:'bold'
    },
    blackText14px:{
        color:'#56565A',
        fontSize:scaledHeight(14),
    },
    accountTypeFlex:{
        height:scaledHeight(45),
        marginTop:scaledHeight(30),
        flexDirection:'column'
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        width: "100%",
        marginTop: '4%',
    },

    accountDetailsFlex:{
        height:scaledHeight(246),
        marginTop:scaledHeight(20),
        flexDirection:'column',
        borderColor:'#9DB4CE',
        borderWidth:scaledHeight(1),
        backgroundColor:'#FFFFFF',
    },
    accountDetailsFlexSelected:{
        height:scaledHeight(246),
        marginTop:scaledHeight(20),
        flexDirection:'column',
        borderColor:'#B5E198',
        borderWidth:scaledHeight(3),
        backgroundColor:'#FFFFFF',
    },

    flexAccDetails1:{
        height:scaledHeight(73),
        marginLeft: '4%',
        marginRight:"4%",
        marginTop:"4%",
        flexDirection:'row',
    },
    accountNumberFlex:{
        width:"85%"
    },
    flexAccDetails2:{
        height:scaledHeight(44),
        marginTop: scaledHeight(20),
        flexDirection:'row',
        marginLeft: "4%",
        marginRight: "4%"
    },
    flexAccDetails3:{
        height:scaledHeight(44),
        marginTop: scaledHeight(20),
        flexDirection:'column',
        marginLeft: "4%",
        marginRight: "4%",
        justifyContent:'space-between'
    },
    flex6:{
        height:scaledHeight(140),
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
        borderColor: '#544A54',
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