import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';



const styles = StyleSheet.create({
    scrollStyle:{
         flex: 0.85 
    },
    headerView:
    { marginLeft: scaledHeight(10), marginRight: scaledHeight(10) },
    headerChildView:
    { flexDirection: 'row', alignItems: 'flex-end' },
    expandView:
    { flexDirection: 'row', flex: 1, alignItems: "center" },
    instructionView:
    { borderColor: '#C7C7C7', borderWidth: 1, backgroundColor: '#F2F2F2', paddingLeft: scaledWidth(10), paddingRight: scaledWidth(10) },
    bankInfoContainer: {
        borderWidth: 1,
        borderColor: '#9DB4CE',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingBottom: scaledHeight(21),
        position: 'absolute', 
        zIndex: 5, 
        top: scaledHeight(80), 
        width: '100%', 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 1, }, 
        shadowOpacity: 0.23, 
        shadowRadius: 2.62, 
        elevation: 4, 
        
    },
    accountNameHeaderText: {
        fontSize: scaledHeight(14),
        color: '#56565A',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(20),
        marginHorizontal: '4%',
        fontWeight: 'bold'
    },
    accountNameSubHeaderText: {
        fontSize: scaledHeight(14),
        color: '#56565A',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(8),
        marginHorizontal: '4%',
    },
    confirmDeleteView: {
        flexDirection: 'row',
    },
    cancelBtn: {
        borderColor: '#707070',
        borderWidth: 1,
        width: '40%',
        marginHorizontal: '4%',
        borderRadius: scaledHeight(1),
        height: scaledHeight(44),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5
    },
    deleteBtn: {
        borderWidth: 1,
        width: '40%',
        marginHorizontal: '4%',
        borderRadius: scaledHeight(1),
        height: scaledHeight(44),
        backgroundColor: '#544A54',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5
    },
    cancelBtnText: {
        fontSize: scaledHeight(14),
        color: '#544A54'
    },
    deleteBtnText: {
        fontSize: scaledHeight(14),
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    loginHeader: {
        flex: .15,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingLeft: '4%',
        paddingRight: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    skipButton: {   
        borderColor: '#61285F45',
        borderWidth: 1,
        height: scaledHeight(40),
        width: '30%',
        justifyContent: "center",
        alignItems: 'center',
       // borderRadius: scaledHeight(20),
        backgroundColor: "#FFFFFF",
        marginTop: '2%'
    },
    skipButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        alignItems: "center",
        fontWeight:'500'
    },
    conentMarginTop: {
        marginTop: scaledHeight(10),
        color:'#56565A',
        fontSize:scaledHeight(15),
        marginBottom:scaledHeight(25),
    },
    autoInvestHead: {
        marginTop: scaledHeight(15),
        marginBottom: scaledHeight(15),
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color:'#707070',
        width: '80%',
    },
    addInvestTitle: {
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(10),
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        color:'#56565A',
    },
    addInvest: {
        marginTop: scaledHeight(10),
        width: '20%',
        color: '#0000FF',
        fontSize: scaledHeight(16),
        fontWeight: '500',
        textAlign:'right',
        marginBottom: scaledHeight(10),
    },
    seperator_line:{
        borderTopWidth:1,
        borderTopColor:'#C1C1C1',
       
    },
    touchOpacityPosition: {
        position: 'relative',
    },
    addInvestFooterTitle:{
        color:'#54565B',
        fontSize:scaledHeight(15),
        marginBottom:scaledHeight(20),
        marginTop:scaledHeight(10),
        flex:0.9
    },
    addInvestFooterText:{
        color:'#54565B',fontSize:scaledHeight(14),marginBottom:scaledHeight(20),marginTop:scaledHeight(10)
    },
    addInvestFooterList:{
        color:'#54565B',fontSize:scaledHeight(14),marginBottom:scaledHeight(5) 
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
    editDropdown:{
        height:scaledHeight(60),
        backgroundColor:'#FFFFFF',
        // backgroundColor:'red',
        borderColor:'#00000029',
        borderBottomWidth:1,
        justifyContent:'center',
 },
    editDropdownText:{
        fontSize:scaledHeight(16),
        color:'#56565A',
        fontWeight:'bold',
        marginLeft:scaledWidth(20)
    },
    verifyContentMain:{
        flexDirection: "column", 
        marginTop: scaledHeight(10),
        marginBottom:scaledHeight(10),
        paddingLeft: scaledWidth(10) 
   },
   verifyContentView:{
       flexDirection:'column',
       borderWidth:1,
       borderColor:'#D6D8DC',
       
       paddingTop:scaledHeight(10),
       paddingBottom:scaledHeight(10), 
   },
   verifyConent1:
   {
       color:'#333333DE',
       fontSize:scaledHeight(16),
       fontWeight:'bold',
       marginTop: scaledHeight(5), 
       marginBottom: scaledHeight(10)
   },
   
   verifyConent2:
   {
       color:'#333333DE',
       fontSize:scaledHeight(16),
       
   },
   flatHeader:{ 
       borderColor: '#E9E9E9', 
       borderWidth: 1, 
       marginTop: scaledHeight(10), 
       marginBottom: scaledHeight(10) 
    },
    flatHeaderView:{ 
        flexDirection: "row", 
        flex: 1, 
        backgroundColor: "#E9E9E9", 
        height: scaledHeight(50), 
        alignItems: 'center',
        width:'100%'
    },
    flatHeaderContent:{ 
        flexDirection: "row", 
        flex: 0.9, 
        paddingLeft: scaledWidth(10), 
        paddingTop: scaledHeight(10), 
        paddingBottom: scaledHeight(10),
    },
    flatHeaderTitle:{ 
        color: '#54565B', 
        fontSize: scaledWidth(18) 
    },
    flatHeaderValue:{ 
        marginLeft: scaledHeight(10), 
        color: '#54565B', 
        fontSize: scaledWidth(17) 
    },
    editMenu:
    {
         flexDirection: "row", 
         flex: 0.1, 
         justifyContent: 'flex-end', 
         paddingRight: scaledWidth(10) 
    },
    editFlatList:{ 
        position: 'absolute', 
        zIndex: 5, 
        top: 55, 
        width: '100%', 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 1, }, 
        shadowOpacity: 0.23, 
        shadowRadius: 2.62, 
        elevation: 4, 
    },
    flatBodyTitle:{ 
        flexDirection: "row", 
        flex: 1, 
        marginBottom: scaledHeight(15), 
        marginTop: scaledHeight(15),
        paddingLeft: scaledWidth(20)  
    },
    flatBodyTitleValue:{ 
        flex: 0.7, 
        fontSize: scaledWidth(15) 
    },
    flatBodyTitleLink:{ 
        marginLeft: scaledHeight(10), 
        flex: 0.3, 
        textAlign: 'center', 
        fontSize: scaledWidth(14), 
        color: '#0000FF', 
        textDecorationLine: 'underline' 
    },
    flatBodyDate:{ 
        fontSize: scaledHeight(13), 
        color: '#9B9B9BDE',
        marginBottom:scaledHeight(20),
        paddingLeft: scaledWidth(20) 
    },
    flatBodyNextDate:{ 
        flexDirection: "row", 
        alignItems: 'center', 
        marginRight: scaledWidth(10),
        paddingLeft: scaledWidth(10) 
    },
    flatBodySkip:{ 
        flexDirection: "column", 
        width: '70%' 
    },
    flatBody:{ 
        backgroundColor: '#fff', 
        paddingBottom: scaledHeight(10), 
        
    },
    autoInvest_sub_title_text:{
        fontSize:scaledHeight(22),
        color:'#56565A',
        fontWeight:'bold',
        marginTop:scaledHeight(20),
        marginBottom:scaledHeight(10)
    },

});

export default styles;