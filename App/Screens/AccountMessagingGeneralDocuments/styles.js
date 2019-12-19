import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
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
    cancelButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#7B8288',
        borderWidth:1,
        height:scaledHeight(55),        
        justifyContent:'center',       
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(28),
        width:'80%',          
     },
    cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    confirmationText:{
        color: '#707070',
        fontSize: scaledHeight(14),       
        fontWeight:'bold',
        marginTop: scaledHeight(12)
    },      
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%',
    },
    generalDocumentDisclaimerView:{        
        backgroundColor: '#F1F1F2',
        marginLeft: '4%',
        marginRight:'4%',
        paddingBottom:scaledHeight(14),
        paddingTop:scaledHeight(14),               
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
    lineBorder: {       
        borderColor: '#EBEDEF',          
        borderWidth: 0.6,       
        marginBottom: scaledHeight(18),       
        marginTop: scaledHeight(18),       
    },
    radioBtnGrp:{
        flexGrow:1,         
        marginTop:scaledHeight(14)   
    },
    radioBtnGrpConfirm:{        
        flexDirection:"row", 
        width:'30%',       
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
        width:'80%',              
     },
    saveButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    scrollViewFlex:{
        flex: 0.85 
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
        color: '#707070',
        fontSize: scaledHeight(14),       
        fontWeight:'bold',
        marginTop: scaledHeight(5)
    },
    taxDocumentHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(16),
        marginLeft: '3%',       
    },
    taxDocumentHeaderview: {
        alignItems: 'center',
        backgroundColor: '#F1F1F2',
        flexDirection: 'row',
        paddingBottom:scaledHeight(14),
        paddingLeft: '2%',
        paddingTop:scaledHeight(14),
        width: '100%',
    },
     taxDocumentcontainer: { 
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',      
        borderWidth: 0.5,
        marginLeft: '4%',       
        marginRight: '4%',       
        marginTop: scaledHeight(18),
        width: '92%',
    },
    taxDocumentcontainerBottom: {       
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',
        borderTopWidth:0.5,
        borderWidth: 1,      
        marginLeft: '4%',       
        marginRight: '4%',
        padding:'4%',
        width: '92%'
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