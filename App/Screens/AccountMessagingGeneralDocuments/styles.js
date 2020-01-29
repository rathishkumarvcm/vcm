import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accountInfoContainer:{
        backgroundColor:'#ECECEC',
        borderColor:'#5D83AE99',
        borderWidth:1,
        flexDirection:'row',
        marginLeft:'4%',       
        marginRight:'4%',
        marginVertical:scaledHeight(10),
        paddingHorizontal:'4%',      
        paddingVertical:scaledHeight(10),        
    },
    accountNameContainer:{             
        flexDirection:'column',       
        marginRight:'4%', 
        width:'40%' 
    },
    accountNameText:{
        borderColor:'#C4C3C3',
        borderRightWidth:1, 
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginRight:'8%',
        paddingRight:'6%' 
    },
    accountNameValueText:{
        borderColor:'#C4C3C3',
        borderRightWidth:1, 
        color:'#56565A',
        fontSize:scaledHeight(16),
        marginRight:'8%',
        paddingRight:'6%',       
    },
    accountNumberText:{
        color:'#56565A',
        fontSize:scaledHeight(16),   
        fontWeight:'bold'    
    },
    accountNumberValueText:{
        color:'#56565A',
        fontSize:scaledHeight(16),            
    },
    alertIconText: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginLeft: '4%',
        width:'80%',            
    },      
    alertIconView: {
        alignItems: 'center',
        flexDirection: 'row',       
        marginTop: scaledHeight(10),        
    },
    alertsForDocumentTitle:{
        color: '#707070',
        fontSize: scaledHeight(16),
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    alertsForDocumentsContainer:{
        backgroundColor:'#F5F6F7',
        borderColor:'#EBEDEF',
        borderWidth:1,
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(24),
        paddingBottom:scaledHeight(15),
        paddingLeft:'4%',
        paddingRight:'4%',
        paddingTop:scaledHeight(15)
    },
    applyButton:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderWidth:1,
        height:scaledHeight(55),        
        justifyContent:'center',       
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(25),
        width:'80%',              
     },
    applySectionGrp: {
        backgroundColor:'#F3F3F3',
        flexGrow: 1,
        marginLeft: '4%',   
        marginRight:'4%',
        marginTop:scaledHeight(30),
        paddingHorizontal:'6%',
        paddingVertical:scaledHeight(20)     
    },
    applySectionTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(18),       
        marginLeft: '4%',       
        textAlign: 'left',     
    },
    cancelButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#7B8288',
        borderWidth:1,
        height:scaledHeight(55),        
        justifyContent:'center',       
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(35),
        width:'80%',          
     },
    cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    confirmationText:{
        color: '#56565A',
        fontSize: scaledHeight(16),       
        fontWeight:'bold',
        marginTop: scaledHeight(12),            
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%',
    },
    customPopulatedTxtBox: {
        backgroundColor: "#F0F1F2",
        marginTop: scaledHeight(9),
        width: '100%'
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
    dateContainer:{
        marginTop: scaledHeight(30),  
    },
    dateStyle: {
        marginLeft: 0,
        marginRight: 0,
        width: '100%'
      },
    deliveryPreferenceOptions:{     
        marginTop:scaledHeight(25),              
    },
    errTxtSubmit: {
        color: '#e60000',
        fontSize: scaledHeight(12),      
        marginHorizontal:'4%',
        marginTop:scaledHeight(20),        
    },
    generalDocumentDisclaimerView:{        
        backgroundColor: '#F1F1F2',
        marginBottom:scaledHeight(20),
        marginLeft: '4%',
        marginRight:'4%',
        paddingBottom:scaledHeight(14),   
        paddingTop:scaledHeight(14)
    },  
    generalDocumentDisclaimerViewFaq: {       
        color: '#2A92EE',
        textDecorationLine: 'underline',        
    },
    generalDocumentDisclaimerViewTitle:{
        
        color: '#707070',
        fontSize: scaledHeight(14),
        paddingBottom:scaledHeight(4),
        paddingLeft:'6%',
        paddingRight:'6%',
        paddingTop:scaledHeight(4),            
    },
    investmentTypeText:{
        color:'#56565A',
        fontSize:scaledHeight(15),   
        fontWeight:'bold'    
    },
    lblRadioBtnTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(16),
        lineHeight:28,
        marginLeft:'1%'
    },
    lblRadioDescTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(14),
        lineHeight:22,
        marginTop:scaledHeight(5),
        opacity:.75
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)
    },
    lblTxtCalender: {
        color: '#6F7070',
        fontSize: scaledHeight(12),       
        marginTop: scaledHeight(5)
    },
     lineBorder: {       
        borderColor: '#707070',          
        borderWidth: 0.4,       
        marginBottom: scaledHeight(5),       
        marginTop: scaledHeight(3),             
    },
    radioBtnGrp:{
        flexDirection:"row", 
        flexGrow:1,         
        marginTop:scaledHeight(14)   
    },
     radioBtnGrpConfirm:{        
        flexDirection:"row", 
        marginTop:scaledHeight(25),  
        width:'30%'     
    },
    saveButton:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderWidth:1,
        height:scaledHeight(55),        
        justifyContent:'center',       
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(25),
        width:'50%',              
     },    
    saveButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },    
    saveSuccessContainer:{
        backgroundColor:'#E9E9E9',
        borderRadius:scaledHeight(10),
        elevation: 4,   
        flexDirection:'row',        
        marginLeft:'4%',    
        marginRight:'4%',
        paddingHorizontal:'5%',
        paddingVertical:scaledHeight(15),
        position: 'absolute',        
        top:10,
        width:'92%', 
        zIndex: 5,         
    },
    saveSuccessText:{
        color:'#56565A',
        flex:0.95,
        fontSize:scaledHeight(16),        
        marginLeft:'2%',    
        marginRight:'2%',
    },
    scrollViewFlex:{
        flex: 0.85 
    },
    seasonalAddressContainer:{
        marginBottom:scaledHeight(16),
        marginHorizontal:'4%',        
    },
    settingsInfo: {
        color: '#B2B2B2',
        fontSize: scaledHeight(13),
        marginRight: '4%',   
    },
    settingsInfoCurrent: {
        color: '#707070',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',        
    },
    settingsInfoHead: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',       
    },
    settingsInfoHeadTilte: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        paddingBottom:scaledHeight(4)
    },
    settingsView: {       
        alignContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        flexWrap:'wrap',
        marginTop: scaledHeight(18),           
        paddingLeft: '4%',
        paddingRight: '4%',    
    },
    taxDocumentAlertsContent: {
        color: '#56565A',
        fontSize: scaledHeight(18),       
        fontWeight:'bold',
        marginTop: scaledHeight(5)
    },
    taxDocumentHeaderViewTitle: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight:'bold',          
    },
    taxDocumentHeaderview: {              
        alignItems:'center',       
        flexDirection:'row',
        paddingBottom:scaledHeight(14),
        paddingTop:scaledHeight(14),
        width: '100%'
    },
    taxDocumentcontainer: { 
        // backgroundColor: '#FFFFFF',
        // borderColor: '#EBEDEF',      
        // borderWidth: 0.5,
        marginLeft: '4%',       
        marginRight: '4%',       
        marginTop: scaledHeight(18),        
    },
    taxDocumentcontainerBottom: {       
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',       
        borderWidth: 1,      
        marginLeft: '4%',       
        marginRight: '4%',
        marginTop: scaledHeight(20), 
        paddingHorizontal:'6%',       
        paddingVertical:scaledHeight(20)
    },
    toggleOptionscontainer:{
        flexDirection:'row',
        marginHorizontal:'4%',
        marginTop:scaledHeight(10),
        paddingLeft:'6%',   
    },
    toggleText:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginRight:'15%',   
        width:'50%'    
    },    
    tooltipContainer:{                               
        marginLeft:'8%', 
        marginTop:scaledHeight(2)       
    },
    tooltipContainerIcon:{     
        backgroundColor:'#F1F1F2',        
        flexDirection: 'row',       
        marginBottom:scaledHeight(10),
        marginLeft:'1%',
        marginRight:'1%',
        marginTop:scaledHeight(2),
        padding:'3%'
    },
      tooltipContainerText:{       
        color:'#56565A',
        fontSize:scaledHeight(16), 
        marginRight:'10%'               
    },
    touchOpacityPosition: {
        position: 'relative',
    },


});

export default styles;