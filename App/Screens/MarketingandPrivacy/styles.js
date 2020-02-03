import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';

const {width} = Dimensions.get('window');


export const styles = StyleSheet.create({
    completeBorder:{
        backgroundColor:'#FFFFFF',
        borderBottomWidth:1,
        borderColor: '#B2B2B2',
        borderTopWidth:1,
        height:scaledHeight(350),
        marginTop:scaledHeight(10)
    },
    connectWithUs: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingBottom: '5%',
        paddingLeft: '5%'
    },
    container:{
        backgroundColor:'#F7FAFF',
        flex:1,
        width:'100%'
    },
    copyRightSection: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        height: scaledHeight(50),
        justifyContent: 'center'
    },
    copyRightText: {
        color: '#FFFFFF'
    },
    editAddressLabel: {
        color: '#707070', fontSize: scaledHeight(16), marginBottom: '2%', marginLeft: '3%', width: '70%'
    },
    editAddressView: {
        alignItems: "center", flexDirection: 'row', justifyContent: 'center', marginBottom: '2%', marginLeft: '3%', marginTop: '2%', width: '100%'
    },
    editEmailBorder: { 
        borderBottomWidth: 1, borderColor: '#B2B2B2', marginBottom: '4%', marginTop: '4%' 
    },
    editEmailHolder: {
        backgroundColor: '#fff', borderColor: '#CCCCCC', borderWidth: 1, marginBottom: '2%', marginLeft: '2%', marginRight: '2%', marginTop: '2%', width: '96%'
    },
    editEmailId: {
        color: '#707070', fontSize: scaledHeight(16), marginBottom: '2%', marginLeft: '3%'
    },
    editEmailPrimaryContent: { 
        flexDirection: 'row', marginBottom: '2%', marginTop: '2%' 
    },
    editEmailType: {
        color: '#707070', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: '2%', marginLeft: '3%', marginTop: '4%'
    },
    editFlexDirectionColumn: {
        flexDirection: 'column',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
    },
    editSwitchButton: {
        marginBottom: '2%', marginTop: '2%', width: '30%'
    },
    faceIDlogo:{
        alignSelf:'center',
        marginBottom:'5%',
        marginTop:'5%'
    },
    faceIDtextStyle:{
        alignItems:'center',
        height:scaledHeight(20)
    },
    forgotLineText:{
        flexDirection:'row',
        fontSize:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    forgotLineTextColor:{
        color:'#56565A',
        fontSize : scaledHeight(18),
        fontWeight:'bold'
    },
    fundAgreement:{
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'row',
        height:scaledHeight(50),
        justifyContent:'center',
        width:'100%'
    },
    imageWidthHeight: {
        height: 40,
        margin: '4%',
        resizeMode: 'contain',
        width: 40
    },
    lineBorder:{
        borderTopWidth:1,
        color:'#707070',
        marginTop:scaledHeight(15)
    },
    listContainer:{
        backgroundColor:'#FFFFFF',
        borderColor:'#D4D4D4',
        borderWidth :1,
        height:scaledHeight(400),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(20),
        width:'92%'
    },
    listContainerb:{
        backgroundColor:'#FFFFFF',
        borderColor:'#D4D4D4',
        borderWidth :1,
        height:scaledHeight(280),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(20),
        width:'92%'
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
    marketingContentHolder: {
        backgroundColor:'#FFFFFF',
        borderColor:'#D4D4D4',
        borderWidth :1,
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:scaledHeight(16),
        width:'94%'
    },
    marketingHeadLabel: { 
        color: '#56565A', fontSize: scaledHeight(18) 
    },
    marketingHeadQues: { 
        marginTop: scaledHeight(15), paddingLeft: '4%', paddingRight: '4%', width: '92%' 
    },
    marketingHeaderBackground: {
        backgroundColor: '#ECECEC',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width: '100%',
    },
    marketingHeaderLabel: {
        color: '#54565B',
        fontSize: scaledHeight(16),
        margin: '3%',
        padding: '2%'
    },
    marketingHomeBold: {
        color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: '2%', marginLeft: '4%', marginRight: '4%', marginTop: '4%', width: '92%'
    },
    marketingHomeNormal: {
        color: '#56565A', fontSize: scaledHeight(16), marginBottom: '2%', marginLeft: '4%', marginRight: '4%', marginTop: '4%', width: '92%'
    },
    marketingNotes: {
        color: '#56565A', fontSize: scaledHeight(16), lineHeight: 30, marginBottom: '2%', marginTop: '4%', textAlign: 'justify', width: '100%'
    },
    marketingNotesLink: {
        color: '#0000FF', fontSize: scaledHeight(16), lineHeight: 30, width: '100%'
    },
     marketingPadding: {
        padding: '4%'
    },
    newVictory:{
        color:'#486D89',
        fontSize:scaledHeight(20),
        height:scaledHeight(20),
        lineHeight:scaledHeight(20)
    },
    newVictoryButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#56565A',
        borderRadius:scaledHeight(25),
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginTop:scaledHeight(10),
        width:'70%'

    },
    newVictoryButtonText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    newVictorySection:{
        backgroundColor:'#FFFFFF',
        height:scaledHeight(120),
        marginTop:scaledHeight(29),
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%'
    },
    newVictorySection1:{
        height:scaledHeight(70),
        marginTop:scaledHeight(20),
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%'
    },
    openInvestment:{
        color:'#56565A',
        fontSize:scaledHeight(14)
    },
    passwordView:{
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    privacyAgreement: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(8),
        width: '100%'
    },
    privacyText: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        paddingLeft: '4%',
        width: '50%'
    },
    profileDivideIcon: { 
        flexDirection: 'row', margin: '3%', width: '100%'
    },
    profileDivideIconOne: { 
        color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold', width: '80%' 
    },
    profileDivideIconTwo: { 
        color: '#0000FF', fontSize: scaledHeight(14), width: '20%' 
    },
    profileSettingConnectLabel: { color: '#56565A', fontSize: scaledHeight(18), marginTop: '4%' },
    profileSettingFooterView: { flexDirection: 'column', margin: '4%', width: '92%' },
    profileSettingInvestLabel: { color: '#56565A', flexWrap: 'wrap', fontSize: scaledHeight(16), lineHeight: 24, marginBottom: '3%', textAlign: 'justify' }, profileSettingSecurityLabel: { color: '#56565A', fontSize: scaledHeight(16), lineHeight: 24, marginTop: '4%', textAlign: 'justify' },
    profileSettingShareLabel: { color: '#56565A', fontSize: scaledHeight(16), lineHeight: 24, textAlign: 'justify' },
    profileSettingSocialLabel: { color: '#0000FF', fontSize: scaledHeight(16), marginTop: scaledHeight(3) },
    profileSettingSocialView: { color: '#707070', fontSize: scaledHeight(18), fontWeight: 'bold', width: '70%' },
    profileSettingView: { 
        alignItems: 'center', justifyContent: 'center' 
    },
    profileSettingViewOne: { 
        color: '#6F7072', fontSize: scaledHeight(18), fontWeight: 'bold', width: '70%' 
    },
    profileSettingViewTwo: { 
        color: '#0000FF', fontSize: scaledHeight(16), textAlign: 'right', width: '30%' 
    },
    radioSection:{
        backgroundColor:'#FCF9FB',
        height:scaledHeight(150),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(20)
    },
    registernowButton:{
       alignItems:'center',
       backgroundColor:'#FFFFFF',
       borderColor:'#56565A',
       borderRadius:scaledHeight(14),
       borderWidth:1,
       height:scaledHeight(28),
       justifyContent:'center',
       width:width/3.3
    },
    registernowButton1:{
        alignSelf:'center',
       backgroundColor:'#FFFFFF',
       borderColor:'#56565A',
       borderRadius:scaledHeight(24),
       borderWidth:1,
       height:scaledHeight(48),
       justifyContent:'center',
       width:width/2
     },
    registernowText:{
        color:'#56565A',
        fontSize:scaledHeight(10)
    },
    settingsAddress:{
        backgroundColor:'#FFFFFF',
        borderColor:'#D4D4D4',
        borderWidth :1,
        height:scaledHeight(140),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(20),
        width:'92%'
    },
    settingsBorder:{
        borderBottomWidth:1,
        borderColor: '#B2B2B2',
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(10)
    },
    settingsFooter: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        padding: '4%',
        width: '100%'
    },
    settingsHeadIdentity:{
        color:'#707070',
        fontSize:scaledHeight(20),
        width:'50%'
    },
    settingsHeadline:{
        color:'#707070',
        fontSize:scaledHeight(20),
        width:'90%'
    },
    settingsInfo:{
        color:'#B2B2B2',
        fontSize:scaledHeight(16)
    },
    settingsMobile:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'92%',
    },
    settingsMobileText:{
        flexDirection:'row',
        marginTop:scaledHeight(2),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    settingsOccupation:{
        backgroundColor:'#FFFFFF',
        borderColor:'#D4D4D4',
        borderWidth :1,
        height:scaledHeight(210),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(20),
        width:'92%'
    },
    settingsPhone:{
        backgroundColor:'#FFFFFF',
        borderColor:'#D4D4D4',
        borderWidth :1,
        height:scaledHeight(90),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(20),
        width:'92%'
    },
    settingsSocial:{
        flexDirection:'row',
        marginLeft:scaledHeight(10),
        marginTop:scaledHeight(10)
    },
    settingsSocialContainer:{
        backgroundColor:'#FFFFFF',
        borderColor:'#D4D4D4',
        borderWidth :1,
        height:scaledHeight(100),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(20),
        width:'92%'
    },
    settingsView:{
        flexDirection:'row',
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%',
    },
    settingsView1:{
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    signInButton:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderRadius:scaledHeight(25),
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(12),
        width:'92%'
     },
    signInButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    signInView:{
        marginTop:scaledHeight(2),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    signIntext:{
        color:'#486D89',
        fontSize:scaledHeight(14)
    },
    stepsInner:{
        backgroundColor:'#4B8D62',
        height: scaledHeight(8),
        width:'20%'
    },
    stepsOuter :{
        backgroundColor: "#E6E6E6",
        height: scaledHeight(8),
        justifyContent: "center",
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(30),
        width: '92%'
    },
    termsofuse:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:scaledHeight(10),
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    termsofuseText:{
        color:'#56565A',
        fontSize : scaledHeight(18)
    },
    termsofuseText1:{
        color:'#56565A',
        fontSize : scaledHeight(18),
        marginBottom:scaledHeight(5)
    },
    usaaMemberSection:{
        flexDirection:'row',
        marginTop:scaledHeight(15)
    },
    usaaMembersText:{
        color:'#486D89',
        fontSize:scaledHeight(16),
        height:scaledHeight(50),
        lineHeight:scaledHeight(50)
    },
    userIDText:{
        color:'#000000',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginBottom:scaledHeight(8)
    },
    userIDTextBox:{
        marginBottom:scaledHeight(18),
        marginLeft:'4%',
        marginRight:'4%'
    },
    whiteBackground: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
});