import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accountContainer:{
       marginHorizontal:'4%',
       marginVertical:scaledHeight(20),       
    },
    accountDetailContainer: {
       backgroundColor:'#ECECEC',
       borderColor:'#5D83AE99',      
       borderWidth:0.5,
       marginTop:scaledHeight(10),
       paddingVertical:scaledHeight(10),          
    },
    accountIndvContainer:{
        marginHorizontal:'4%',
        marginVertical:scaledHeight(20),       
     },
    accountInfoContainer:{
        flexDirection:'row',
        paddingHorizontal:'4%'
    },
    accountNameText:{
        fontWeight:'bold'
    },
    accountNamecontainer:{
        borderRightWidth:0.5,
        flexDirection:'column',
        paddingRight:'4%'
    },
    accountNumberContainer:{
        flexDirection:'column',
        marginLeft:'4%'
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
        marginLeft:'3%'           
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    lineBorder: {       
        borderColor: '#707070',          
        borderWidth: 0.4,       
        marginBottom: scaledHeight(5),       
        marginTop: scaledHeight(5),       
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
    }


});

export default styles;