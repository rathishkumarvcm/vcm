import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';



const styles = StyleSheet.create({
    accountNameHeaderText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20)
    },
   accountNameSubHeaderText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        marginHorizontal: '4%',
        marginTop: scaledHeight(8),
    },
   addInvest: {
        color: '#0000FF',
        fontSize: scaledHeight(16),
        fontWeight: '500',
        marginBottom: scaledHeight(10),
        marginTop: scaledHeight(10),
        textAlign:'right',
        width: '20%',
    },
   addInvestFooterList:{
        color:'#54565B',fontSize:scaledHeight(14),marginBottom:scaledHeight(5) 
    },
   addInvestFooterText:{
        color:'#54565B',fontSize:scaledHeight(14),marginBottom:scaledHeight(20),marginTop:scaledHeight(10)
    },
    addInvestFooterTitle:{
        color:'#54565B',
        flex:0.9,
        fontSize:scaledHeight(15),
        marginBottom:scaledHeight(20),
        marginTop:scaledHeight(10)
    },
    addInvestTitle: {
        color:'#56565A',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        marginBottom: scaledHeight(10),
        marginTop: scaledHeight(20),
    },
    autoInvestHead: {
        color:'#707070',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginBottom: scaledHeight(15),
        marginTop: scaledHeight(15),
        width: '80%',
    },
    autoInvest_sub_title_text:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        fontWeight:'bold',
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(20)
    },
    bankInfoContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#9DB4CE',
        borderWidth: 1,
        elevation: 4,
        justifyContent: 'flex-start',
        paddingBottom: scaledHeight(21), 
        position: 'absolute', 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 1, }, 
        shadowOpacity: 0.23, 
        shadowRadius: 2.62, 
        top: scaledHeight(80), 
        width: '100%', 
        zIndex: 5, 
        
    },
    cancelBtn: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#707070',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        flex: 0.5,
        height: scaledHeight(44),
        justifyContent: 'center',
        marginHorizontal: '4%',
        width: '40%'
    },
    cancelBtnText: {
        color: '#544A54',
        fontSize: scaledHeight(14)
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
        width:'80%',
       // borderRadius:scaledHeight(25),
     },
    cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    conentMarginTop: {
        color:'#56565A',
        fontSize:scaledHeight(15),
        marginBottom:scaledHeight(25),
        marginTop: scaledHeight(10),
    },
    confirmDeleteView: {
        flexDirection: 'row',
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    deleteBtn: {
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        flex: 0.5,
        height: scaledHeight(44),
        justifyContent: 'center',
        marginHorizontal: '4%',
        width: '40%'
    },
    deleteBtnText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(14)
    },
    editDropdown:{
        backgroundColor:'#FFFFFF',
        borderBottomWidth:1,
        borderColor:'#00000029',
        height:scaledHeight(60), 
        // backgroundColor:'red',
        justifyContent:'center',
 },
    editDropdownText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginLeft:scaledWidth(20)
    },
    editFlatList:{ 
        elevation: 4, 
        position: 'absolute', 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 1, }, 
        shadowOpacity: 0.23, 
        shadowRadius: 2.62, 
        top: 55, 
        width: '100%', 
        zIndex: 5, 
    },
    editMenu:
    {
         flexDirection: "row", 
         flex: 0.1, 
         justifyContent: 'flex-end', 
         paddingRight: scaledWidth(10) 
    },
    expandView:
   { flexDirection: 'row', flex: 1, alignItems: "center" },
    flatBody:{ 
        backgroundColor: '#fff', 
        paddingBottom: scaledHeight(10), 
        
    },
    flatBodyDate:{ 
        color: '#9B9B9BDE', 
        fontSize: scaledHeight(13),
        marginBottom:scaledHeight(20),
        paddingLeft: scaledWidth(20) 
    },
    flatBodyNextDate:{ 
        alignItems: 'center', 
        flexDirection: "row", 
        marginRight: scaledWidth(10),
        paddingLeft: scaledWidth(10) 
    },
     flatBodySkip:{ 
        flexDirection: "column", 
        width: '70%' 
    },
    flatBodyTitle:{ 
        flexDirection: "row", 
        flex: 1, 
        marginBottom: scaledHeight(15), 
        marginTop: scaledHeight(15),
        paddingLeft: scaledWidth(20)  
    },
    flatBodyTitleLink:{ 
        color: '#0000FF', 
        flex: 0.3, 
        fontSize: scaledWidth(14), 
        marginLeft: scaledHeight(10), 
        textAlign: 'center', 
        textDecorationLine: 'underline' 
    },
    flatBodyTitleValue:{ 
        flex: 0.7, 
        fontSize: scaledWidth(15) 
    },
   flatHeader:{ 
       borderColor: '#E9E9E9', 
       borderWidth: 1, 
       marginBottom: scaledHeight(10), 
       marginTop: scaledHeight(10) 
    },
   flatHeaderContent:{ 
        flexDirection: "row", 
        flex: 0.9, 
        paddingLeft: scaledWidth(10), 
        paddingTop: scaledHeight(10), 
        paddingBottom: scaledHeight(10) 
    },
   
   flatHeaderTitle:{ 
        color: '#54565B', 
        fontSize: scaledWidth(18) 
    },
   flatHeaderValue:{ 
        color: '#54565B', 
        fontSize: scaledWidth(18), 
        marginLeft: scaledHeight(10) 
    },
    flatHeaderView:{ 
        flexDirection: "row", 
        flex: 1, 
        backgroundColor: "#E9E9E9", 
        height: scaledHeight(50), 
        alignItems: 'center' 
    },
    headerChildView:
   { alignItems: 'flex-end', flexDirection: 'row' },
    headerView:
   { marginLeft: scaledHeight(10), marginRight: scaledHeight(10) },
    instructionView:
   { backgroundColor: '#F2F2F2', borderColor: '#C7C7C7', borderWidth: 1, paddingLeft: scaledWidth(10), paddingRight: scaledWidth(10) },
    loginHeader: {
        flex: .15,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingLeft: '4%',
        paddingRight: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollStyle:{
        flex: 0.85 
   },
    seperator_line:{
        borderTopColor:'#C1C1C1',
        borderTopWidth:1,
       
    },
    skipButton: {   
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        borderColor: '#61285F45',
        borderWidth: 1,
        height: scaledHeight(40),
        justifyContent: "center",
        marginTop: '2%',
        width: '30%',
    },
    skipButtonText: {
        alignItems: "center",
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight:'500'
    },
    touchOpacityPosition: {
        position: 'relative',
    },
    verifyConent1:
   {
       color:'#333333DE',
       fontSize:scaledHeight(16),
       fontWeight:'bold',
       marginBottom: scaledHeight(10), 
       marginTop: scaledHeight(5)
   },
    verifyConent2:
   {
       color:'#333333DE',
       fontSize:scaledHeight(16),
       
   },
    verifyContentMain:{
        flexDirection: "column", 
        marginBottom:scaledHeight(10),
        marginTop: scaledHeight(10),
        paddingLeft: scaledWidth(10) 
   },
    verifyContentView:{
       borderColor:'#D6D8DC',
       borderWidth:1,
       flexDirection:'column',
       
       paddingBottom:scaledHeight(10),
       paddingTop:scaledHeight(10), 
   },

});

export default styles;