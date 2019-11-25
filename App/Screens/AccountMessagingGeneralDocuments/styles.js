import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%',
    },
    settingsView: {       
        flexDirection: 'row',
        flexWrap:'wrap',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',           
        alignContent:'center',
        alignItems:'center',    
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
    touchOpacityPosition: {
        position: 'relative',
    },
    settingsInfoHead: {
        width: '100%',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',       
    },
    settingsInfoHeadTilte: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        paddingBottom:scaledHeight(4)
    },      
    alertsForDocumentsContainer:{
        borderWidth:1,
        borderColor:'#EBEDEF',
        backgroundColor:'#F5F6F7',
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(24),
        paddingLeft:'4%',
        paddingRight:'4%',
        paddingTop:scaledHeight(15),
        paddingBottom:scaledHeight(15)
    },
    alertsForDocumentTitle:{
        color: '#707070',
        fontSize: scaledHeight(16),
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    alertIconView: {
        flexDirection: 'row',
        marginTop: scaledHeight(10),       
        alignItems: 'center',        
    },
    alertIconText: {
        width:'80%',
        fontSize: scaledHeight(14),
        marginLeft: '4%',
        color: '#707070',            
    },
    taxDocumentcontainer: { 
        borderWidth: 0.5,
        borderColor: '#EBEDEF',      
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(18),       
        width: '92%',       
        marginLeft: '4%',
        marginRight: '4%',
    },
    taxDocumentcontainerBottom: {       
        borderWidth: 1,
        borderTopWidth:0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',      
        width: '92%',       
        marginLeft: '4%',
        marginRight: '4%',
        padding:'4%'
    },
    taxDocumentHeaderview: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '2%',
        paddingTop:scaledHeight(14),
        paddingBottom:scaledHeight(14),
        backgroundColor: '#F1F1F2',
        alignItems: 'center',
    },
    taxDocumentHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(16),
        marginLeft: '3%',       
    },
    lineBorder: {       
        borderWidth: 0.6,          
        borderColor: '#EBEDEF',       
        marginTop: scaledHeight(18),       
        marginBottom: scaledHeight(18),       
    },
    taxDocumentAlertsContent: {
        color: '#707070',
        fontSize: scaledHeight(14),       
        marginTop: scaledHeight(5),
        fontWeight:'bold'
    },
    radioBtnGrp:{
        flexGrow:1,         
        marginTop:scaledHeight(14)   
    },
    lblRadioBtnTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        lineHeight:28,
        flexWrap:'wrap',
        marginLeft:'1%'
    },
    lblRadioDescTxt:{
        marginTop:scaledHeight(5),
        color:'#333333DE',
        fontSize:scaledHeight(14),
        lineHeight:22,
        flexWrap:'wrap',
        opacity:.75
    },
    confirmationText:{
        color: '#707070',
        fontSize: scaledHeight(14),       
        marginTop: scaledHeight(12),
        fontWeight:'bold'
    },
    radioBtnGrpConfirm:{        
        flexDirection:"row", 
        width:'30%',       
    },
    generalDocumentDisclaimerView:{        
        marginLeft: '4%',
        marginRight:'4%',
        paddingTop:scaledHeight(14),
        paddingBottom:scaledHeight(14),
        backgroundColor: '#F1F1F2',               
    },
    generalDocumentDisclaimerViewTitle:{
        
        paddingLeft:'6%',
        paddingRight:'6%',
        paddingTop:scaledHeight(4),
        paddingBottom:scaledHeight(4),
        color: '#707070',
        fontSize: scaledHeight(14),            
    },
    generalDocumentDisclaimerViewFaq: {       
        color: '#2A92EE',
        textDecorationLine: 'underline',        
    },
    cancelButton:{
        borderColor:'#7B8288',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',        
        marginTop:scaledHeight(28),       
        height:scaledHeight(55),
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',          
     },
     cancelButtonText:{
        fontSize:scaledHeight(16),
        color:'#544A54',
        fontWeight:'bold'
    },
    saveButton:{
        borderColor:'#56565A',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',        
        marginTop:scaledHeight(25),       
        height:scaledHeight(55),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center',              
     },
     saveButtonText:{
        fontSize:scaledHeight(16),
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    tooltipContainer:{                               
        marginTop:scaledHeight(2), 
        marginLeft:'8%'       
    },    
    tooltipContainerIcon:{     
        flexDirection: 'row',        
        backgroundColor:'#F1F1F2',       
        marginLeft:'1%',
        marginRight:'1%',
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(2),
        padding:'3%'
    },    
    tooltipContainerText:{       
        fontSize:scaledHeight(16),
        color:'#56565A', 
        marginRight:'10%'               
    },

});