import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accMainContainer:{
        alignItems:'center',
        flexDirection:'row'
    },
    accountIndvContainer:{
        backgroundColor:'#D6D6D6',
        marginHorizontal:'4%',   
        marginVertical:scaledHeight(10),
        paddingVertical:scaledHeight(10)    
     },    
    accountSharesAvailable: {
        color: '#56565A',
        fontSize: scaledHeight(12),
        fontWeight: 'bold',     
        marginLeft:'2%',       
    },   
    accountSharesContainer:{
        flexDirection:'row',
        marginHorizontal:'8%',
        marginVertical:scaledHeight(5),   
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
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
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
    scrollViewFlex:{
        flex: 0.85 
    },
    touchOpacityPosition: {
        position: 'relative',
    },
});

export default styles;