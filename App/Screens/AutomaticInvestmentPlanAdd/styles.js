import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth} from '../../Utils/Resolution';


const styles = StyleSheet.create({
    accountBlock:{ borderColor: '#9DB4CE', borderWidth: 1, flexDirection: 'column', justifyContent: "center", marginTop: scaledHeight(20), padding: scaledHeight(20) },
    accountText:{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' },
    addressInput:
    { marginTop: scaledHeight(9),width:'100%' },
    addressInputError: {
        borderColor: 'red',
        marginTop: scaledHeight(9),
        width: '100%'
    },
    addressPopulatedTxtBox: {
        backgroundColor: "#F0F1F2",
        marginTop: scaledHeight(9),
        width: '100%'
    },
    addressStyle:
    { flexDirection: 'column', marginLeft: scaledWidth(15), marginTop: scaledHeight(15), width: '100%' },

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
        fontSize:scaledHeight(20),
        fontWeight:'bold',
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(20)
    },
    autoInvest_title_text:
    {
        color:'#4D79F6',
        fontSize:scaledHeight(20),
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
        marginBottom:scaledHeight(20),
        marginTop:scaledHeight(20)
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
    bankMidView:{ justifyContent: 'center', marginLeft: scaledWidth(20) },
    bankNameText:{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold' },
    bankNumberText:{ color: '#56565A', fontSize: scaledHeight(14) },
    bankTopView:{ backgroundColor: '#E9E9E9', margin: scaledWidth(5), width: scaledWidth(66) },
    bankView:
    {
        borderColor: '#5D83AE99',borderWidth: 1, flexDirection:'row', height:scaledHeight(80),marginBottom:scaledHeight(20) 
    },
    bankViewSelected:
    {
        borderColor: '#B5E198',borderWidth: 5, flexDirection:'row', height:scaledHeight(80),marginBottom:scaledHeight(20) 
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
    checkingtxt:
    { marginBottom: scaledHeight(0), width: "50%" },
    childSectionGrp: {
        flexGrow: 1,
        marginHorizontal: '4%'
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
    cityStateBlock:
    { flexDirection: 'row', flex: 1, marginBottom: scaledHeight(20) },
     cityStateError:{
        borderColor: 'red',
        flex: 0.5, marginRight: scaledWidth(30)
    },
    cityStateStyle:
    { flex: 0.5, marginRight: scaledWidth(30) },
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
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
    },
     customTxtBoxError: {
        borderColor: 'red',
        marginTop: scaledHeight(9),
        width: '100%'
    },
     errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },
     financialTextLabel: {
        color: '#333333DE', fontSize: scaledHeight(18), fontWeight: 'bold', marginBottom: '4%'
    },
     fundListHeader:
     { flexDirection: 'row', flex: 1, justifyContent: "center", alignItems: 'center', borderBottomColor: '#61285F45', borderBottomWidth: 1, padding: scaledHeight(20) },
     fundListHeaderView:{ flex: 0.7 },
     
     fundListStyle:{ marginTop: scaledHeight(20) },
    fundListView:{ borderColor: '#5D83AE99', borderWidth: 1, marginTop: scaledHeight(10) },
    fundNameSwitch:
     { alignItems: 'flex-end', flex: 0.3, marginRight: '4%' },
    fundNameText:
     { color: '#544A54', fontSize: scaledHeight(13), fontWeight: 'bold' },
    fundRemainStyle:{ marginLeft: scaledWidth(10) },
    inputError:{flexDirection:'column',width:'100%'},
    lblRadioBtnTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(16),
        lineHeight:28
    },
    lblRadioBtnTxt: {
        color: '#333333DE',
        flexWrap: 'wrap',
        fontSize: scaledHeight(16),
        lineHeight: 28
    },
    lblRadioDescTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(14),
        lineHeight:22,
        marginTop:scaledHeight(14),
        opacity:.75
    },
    lblRadioDescTxt: {
        color: '#333333DE',
        flexWrap: 'wrap',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginTop: scaledHeight(14),
        opacity: .75
    },
    lblSpecimen: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(58),
        textAlign: 'center',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'

    },
    lblSpecimenDesc: {
        color: '#333333DE',
        fontSize: scaledHeight(11),
        marginTop: scaledHeight(58),
        textAlign: 'left'

    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)
    },
    leftSpace:{ 
        marginLeft: scaledWidth(10)
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
    radioBtnGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(19),
    },
    radioStyle:{ marginBottom: scaledHeight(0), marginTop: scaledHeight(24), width: "30%" },
    savingtxt:
    { marginBottom: scaledHeight(15), width: "50%" },
    scrollView:
     { flex: 0.85 },
    seperator_line:{
        borderTopColor:'#C1C1C1',
        borderTopWidth:1,
       
    },
    specimenImg: {
        height: scaledHeight(176)
    }
    
});

export default styles;