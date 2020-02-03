import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accMainContainer:{
        alignItems:'center',
        flexDirection:'row'
    },
    accountCostContainer:{
        flexDirection:'row',  
        marginBottom:scaledHeight(10)
    },    
    accountDetailContainer: {     
        backgroundColor:'#FFFFFF',
        marginVertical:scaledHeight(10)      
     },   
    accountIndvContainer:{
        backgroundColor:'#D5D5D5',
        marginBottom:scaledHeight(2),   
        marginHorizontal:'4%',
        marginTop:scaledHeight(10),
        paddingVertical:scaledHeight(4)    
     },
    accountInfoContainer:{
        backgroundColor:'#FFFFFF',
        borderColor:'#5D83AE',  
        borderWidth:0.5,
        marginBottom:scaledHeight(5),
        marginHorizontal: '4%',
        paddingHorizontal:'4%',
        paddingVertical:scaledHeight(10)
    },
    accountNetAssetValue:{
        color: '#56565A',
        fontSize: scaledHeight(11),     
        fontWeight: 'bold',    
        textAlign:'right'  
    },
    accountSharesAvailable: {
        color: '#56565A',
        fontSize: scaledHeight(12),
        fontWeight: 'bold',     
        marginLeft:'2%',       
    },
    accountSharesContainer:{
        flexDirection:'column',
        marginHorizontal:'2%',
        marginVertical:scaledHeight(5),   
    },
    accountSharesCurrent:{        
        color: '#56565A',
        fontSize: scaledHeight(12),     
        fontWeight: 'bold',     
        marginRight:'4%',   
    },
    accountSharesTitle: {
        borderRightWidth:0.5,
        color: '#56565A',
        fontSize: scaledHeight(12),   
        fontWeight: 'bold',
        paddingRight:'4%'
    },
     accountSharesTotal: {
        borderRightWidth:0.5,
        color: '#56565A',
        fontSize: scaledHeight(12),     
        fontWeight: 'bold',
        marginLeft:'2%',
        paddingRight:'4%'  
    },
    accountTypeTitle: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',        
    },
    accountsContainer:{
        marginTop:scaledHeight(20),   
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',              
      },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    exchangeButtoncontainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',       
      },
    flexDirectionRow:{
        flexDirection:'row',        
    },
    fundNameText:{
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        width:'85%'
    },
    fundSymbolText:{
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        textAlign:'right'
    },
    gainContainer:{
        alignItems:'flex-end',
        flexDirection:'column'
    },
    gainText:{            
        color: '#56565A',        
        fontSize: scaledHeight(12),
        fontWeight:'400'    
    },  
    lineBorder: {       
        borderColor: '#707070',          
        borderWidth: 0.2,       
        marginBottom: scaledHeight(5),       
        marginTop: scaledHeight(5),       
    },
    pageInfoHeadContainer: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',       
    },
    pageInfoHeadDesc: {
        color: '#B2B2B2',
        fontSize: scaledHeight(13),
        marginRight: '4%',   
    },
    pageInfoHeadTilte: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        paddingBottom:scaledHeight(4)
    },
    performanceArrowContainer:{
        alignSelf:'center',       
        width:'10%'
    },
    performanceContainer:{
        backgroundColor:'#F1F1F1',
        flexDirection:'row',    
        paddingVertical:scaledHeight(4)        
    },
    performanceNameText:{
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',       
        marginTop:scaledHeight(10),
        width:'85%'
    },
    performanceValueContainer:{
        width:'25%'
    },
    performanceValueDownText:{
        color: '#ab3120',
        fontSize: scaledHeight(12),
        textAlign:'center',        
    },
    performanceValueUpText:{
        color: '#159638',
        fontSize: scaledHeight(12),
        textAlign:'center',        
    },
    performanceYearContainer:{
        width:'40%'
    },
    performanceYearText:{
        color: '#56565A',
        fontSize: scaledHeight(12),
        marginLeft:'2%'       
    },
    saveButton:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderWidth:1,
        height:scaledHeight(40),        
        justifyContent:'center',  
        marginTop:scaledHeight(20),
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
      touchOpacityPosition: {
        position: 'relative',
    }  

});

export default styles;