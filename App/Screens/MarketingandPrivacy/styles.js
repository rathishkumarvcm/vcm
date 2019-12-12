import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';

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
    registernowButton:{
       borderColor:'#56565A',
       borderWidth:1,
       width:width/3.3,
       borderRadius:scaledHeight(14),
       height:scaledHeight(28),
       backgroundColor:'#FFFFFF',
       alignItems:'center',
       justifyContent:'center'
    },
    registernowButton1:{
        borderColor:'#56565A',
       borderWidth:1,
       width:width/2,
       borderRadius:scaledHeight(24),
       height:scaledHeight(48),
       backgroundColor:'#FFFFFF',
       alignSelf:'center',
       justifyContent:'center'
     },
    registernowText:{
        fontSize:scaledHeight(10),
        color:'#56565A'
    },
    settingsView:{
        flexDirection:'row',
        width:'100%',
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    settingsBorder:{
        marginTop:scaledHeight(10),
        marginLeft:'4%',
        marginRight:'4%',
        borderBottomWidth:1,
        borderColor: '#B2B2B2'
    },
    completeBorder:{
        marginTop:scaledHeight(10),
        height:scaledHeight(350),
        backgroundColor:'#FFFFFF',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: '#B2B2B2'
    },
    radioSection:{
        marginTop:scaledHeight(20),
        marginLeft:'4%',
        marginRight:'4%',
        backgroundColor:'#FCF9FB',
        height:scaledHeight(150)
    },
    settingsMobile:{
        flexDirection:'row',
        width:'92%',
        alignItems:'center',
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    settingsView1:{
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    settingsMobileText:{
        flexDirection:'row',
        marginTop:scaledHeight(2),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    signInView:{
        marginTop:scaledHeight(2),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    passwordView:{
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    settingsHeadline:{
        width:'90%',
        color:'#707070',
        fontSize:scaledHeight(20)
    },
    settingsInfo:{
        color:'#B2B2B2',
        fontSize:scaledHeight(16)
    },
    settingsHeadIdentity:{
        width:'50%',
        color:'#707070',
        fontSize:scaledHeight(20)
    },
    listContainer:{
        borderWidth :1,
        borderColor:'#D4D4D4',
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(20),
        width:'92%',
        height:scaledHeight(400),
        marginLeft:'4%',
        marginRight:'4%'
    },
    listContainerb:{
        borderWidth :1,
        borderColor:'#D4D4D4',
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(20),
        width:'92%',
        height:scaledHeight(280),
        marginLeft:'4%',
        marginRight:'4%'
    },
    settingsPhone:{
        borderWidth :1,
        borderColor:'#D4D4D4',
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(20),
        width:'92%',
        height:scaledHeight(90),
        marginLeft:'4%',
        marginRight:'4%'
    },
    settingsOccupation:{
        borderWidth :1,
        borderColor:'#D4D4D4',
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(20),
        width:'92%',
        height:scaledHeight(210),
        marginLeft:'4%',
        marginRight:'4%'
    },
    settingsAddress:{
        borderWidth :1,
        borderColor:'#D4D4D4',
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(20),
        width:'92%',
        height:scaledHeight(140),
        marginLeft:'4%',
        marginRight:'4%'
    },
    settingsSocialContainer:{
        borderWidth :1,
        borderColor:'#D4D4D4',
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(20),
        width:'92%',
        height:scaledHeight(100),
        marginLeft:'4%',
        marginRight:'4%'
    },
    settingsSocial:{
        flexDirection:'row',
        marginLeft:scaledHeight(10),
        marginTop:scaledHeight(10)
    },
    signIntext:{
        color:'#486D89',
        fontSize:scaledHeight(14)
    },
    userIDText:{
        color:'#000000',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginBottom:scaledHeight(8)
    },
    userIDTextBox:{
        marginLeft:'4%',
        marginRight:'4%',
        marginBottom:scaledHeight(18)
    },
    forgotLineText:{
        paddingLeft:'4%',
        paddingRight:'4%',
        flexDirection:'row',
        fontSize:scaledHeight(18)
    },
    forgotLineTextColor:{
        fontSize : scaledHeight(18),
        color:'#56565A',
        fontWeight:'bold'
    },
    termsofuse:{
        flexWrap:'wrap',
        flexDirection:'row',
        paddingLeft:'4%',
        paddingRight:'4%',
        marginTop:scaledHeight(10)
    },
    termsofuseText:{
        fontSize : scaledHeight(18),
        color:'#56565A'
    },
    termsofuseText1:{
        fontSize : scaledHeight(18),
        color:'#56565A',
        marginBottom:scaledHeight(5)
    },
    signInButton:{
        borderColor:'#56565A',
        borderWidth:1,
        width:'92%',
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(12),
        borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center'
     },
     signInButtonText:{
        fontSize:scaledHeight(16),
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    newVictoryButton:{
        borderColor:'#56565A',
        borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        borderWidth:1,
        marginTop:scaledHeight(10),
        width:'70%',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center'

    },
    newVictoryButtonText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    newVictorySection:{
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%',
        height:scaledHeight(120),
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(29)
    },
    newVictory:{
        height:scaledHeight(20),
        lineHeight:scaledHeight(20),
        fontSize:scaledHeight(20),
        color:'#486D89'
    },
    usaaMembersText:{
        height:scaledHeight(50),
        lineHeight:scaledHeight(50),
        fontSize:scaledHeight(16),
        color:'#486D89'
    },
    openInvestment:{
        fontSize:scaledHeight(14),
        color:'#56565A'
    },
    lineBorder:{
        marginTop:scaledHeight(15),
        borderTopWidth:1,
        color:'#707070'
    },
    usaaMemberSection:{
        flexDirection:'row',
        marginTop:scaledHeight(15)
    },
    privacyAgreement:{
        marginTop:scaledHeight(15),
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'white',
        height:scaledHeight(50),
        flexDirection:'row'
    },
    fundAgreement:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'white',
        height:scaledHeight(50),
        flexDirection:'row'
    },
    privacyText:{
        width:'50%',
        paddingLeft:'4%',
        color:'#61285F',
        fontWeight:'bold',
        fontSize:scaledHeight(16)
    },
    copyRightSection:{
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center'
    },
    copyRightText:{
        color:'#FFFFFF'
    },
    faceIDlogo:{
        marginTop:'5%',
        marginBottom:'5%',
        alignSelf:'center'
    },
    faceIDtextStyle:{
        height:scaledHeight(20),
        alignItems:'center'
    }, stepsOuter :{
        height: scaledHeight(8),
        width: '92%',
        backgroundColor: "#E6E6E6",
        justifyContent: "center",
        marginTop:scaledHeight(30),
        marginLeft:'4%',
        marginRight:'4%'
    },
    stepsInner:{
        height: scaledHeight(8),
        width:'20%',
        backgroundColor:'#4B8D62'
    },
    newVictorySection1:{
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%',
        height:scaledHeight(70),
        marginTop:scaledHeight(20)
    },
    marketingContentHolder: {
        borderWidth :1,
        borderColor:'#D4D4D4',
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(16),
        width:'94%',
        marginLeft:'3%',
        marginRight:'3%'
    },
    marketingHeaderBackground: {
        backgroundColor: '#ECECEC',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width: '100%',
    },
    marketingHeaderLabel: {
        fontSize: scaledHeight(16),
        color: '#54565B',
        margin: '3%',
        padding: '2%'
    },
    imageWidthHeight: {
        width: 40,
        height: 40,
        margin: '4%',
        resizeMode: 'contain'
    },
    editFlexDirectionColumn: {
        flexDirection: 'column',
        width: '100%',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    editEmailHolder: {
        width: '96%', marginLeft: '2%', marginRight: '2%', marginTop: '2%', marginBottom: '2%', borderColor: '#CCCCCC', borderWidth: 1, backgroundColor: '#fff'
    },
    editEmailType: {
        color: '#707070', fontSize: scaledHeight(16), fontWeight: 'bold', marginLeft: '3%', marginBottom: '2%', marginTop: '4%'
    },
    editEmailId: {
        color: '#707070', fontSize: scaledHeight(16), marginLeft: '3%', marginBottom: '2%'
    },
    editEmailBorder: { 
        borderBottomWidth: 1, borderColor: '#B2B2B2', marginTop: '4%', marginBottom: '4%' 
    },
    editEmailPrimaryContent: { 
        marginTop: '2%', marginBottom: '2%', flexDirection: 'row' 
    },
    editAddressView: {
        width: '100%', marginLeft: '3%', marginTop: '2%', marginBottom: '2%', flexDirection: 'row', alignItems: "center", justifyContent: 'center'
    },
    editAddressLabel: {
        width: '70%', color: '#707070', fontSize: scaledHeight(16), marginLeft: '3%', marginBottom: '2%'
    },
    editSwitchButton: {
        width: '30%', marginTop: '2%', marginBottom: '2%'
    },
    profileDivideIcon: { 
        width: '100%', margin: '3%', flexDirection: 'row'
    },
    profileDivideIconOne: { 
        width: '80%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' 
    },
    profileDivideIconTwo: { 
        width: '20%', color: '#0000FF', fontSize: scaledHeight(14) 
    },
    marketingHeadQues: { 
        paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) 
    },
    marketingHeadLabel: { 
        fontSize: scaledHeight(18), color: '#56565A' 
    },
    marketingPadding: {
        padding: '4%'
    },
    marketingHomeBold: {
        color: '#56565A', fontSize: scaledHeight(16), width: '92%', marginRight: '4%', marginLeft: '4%', marginTop: '4%', marginBottom: '2%', fontWeight: 'bold'
    },
    marketingHomeNormal: {
        color: '#56565A', fontSize: scaledHeight(16), width: '92%', marginRight: '4%', marginLeft: '4%', marginTop: '4%', marginBottom: '2%'
    },
    marketingNotes: {
        color: '#56565A', fontSize: scaledHeight(16), width: '100%', marginTop: '4%', marginBottom: '2%', lineHeight: 30, textAlign: 'justify'
    },
    marketingNotesLink: {
        color: '#0000FF', fontSize: scaledHeight(16), width: '100%', lineHeight: 30
    }
});