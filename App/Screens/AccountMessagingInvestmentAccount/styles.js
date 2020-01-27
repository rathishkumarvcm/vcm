import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    SeasonalAddressText:{
        color: '#56565A',
        fontSize: scaledHeight(14), 
        fontWeight: 'bold',
        marginTop:scaledHeight(15),       
    },
    SeasonalAddressValueText:{
        color: '#56565A',
        fontSize: scaledHeight(14),       
    },
    accMainContainer:{
        alignItems:'center',
        flexDirection:'row'
    },
    accountContainer:{       
       marginHorizontal:'2%',    
       marginTop:scaledHeight(10)          
    },
    accountDetailContainer: {      
       borderColor:'#5D83AE99',      
       borderWidth:0.5, 
       marginVertical:scaledHeight(10)       
    },
    accountDetailContainerDesc: {     
        backgroundColor:'#ECECEC',
        marginRight:'0.2%',                     
     },
    accountIndvContainer:{
        marginHorizontal:'2%',
        marginVertical:scaledHeight(10),       
     },
    accountInfoContainer:{
        backgroundColor:'#ECECEC',
        flexDirection:'row',
        paddingHorizontal:'5%',
        paddingVertical:scaledHeight(6),       
        width:'60%'
    },
    accountNameText:{
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',    
    },
    accountNameValueText:{
        color: '#56565A',
        fontSize: scaledHeight(14),       
    },
    accountNamecontainer:{
        borderColor:'#C4C3C3',
        borderRightWidth:0.5,
        flexDirection:'column',
        paddingRight:'8%'
    },
    accountNumberContainer:{
        flexDirection:'column',
        marginLeft:'8%'
    },
    accountTypeTitle: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',        
    },
    accountTypeTitleDesc: {
        color: '#707070',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',    
        marginLeft:'8%'           
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    deliveryPreferenceText:{
        color: '#56565A',
        fontSize: scaledHeight(14),      
        fontWeight: 'bold',     
    },
    deliveryPreferenceValueText:{
        color: '#56565A',
        fontSize: scaledHeight(36),       
    },
    editContainer:{
        alignItems:'flex-end',
        marginBottom:scaledHeight(10),
        marginRight:'4%'
    },
    editText:{
        color: '#5D83AE',
        fontSize: scaledHeight(14),       
    },
    lineBorder: {       
        borderColor: '#707070',          
        borderWidth: 0.4,       
        marginBottom: scaledHeight(5),       
        marginTop: scaledHeight(5),       
    },
    prefernceContainer:{
       backgroundColor:'#FFFFFF',      
       borderColor:'#5D83AE99',
       borderTopWidth:0.5,      
       marginBottom:'0.2%',       
       marginRight:'0.2%',
       paddingLeft:'6%',      
       paddingVertical:scaledHeight(18),        
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
    touchOpacityPosition: {
        position: 'relative',
    },


});

export default styles;