import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    backBtn: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(40),
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16)
    },
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#F7FAFF',
        flex: 1,
    },
    documentcontainer: {
        alignSelf: 'stretch',
        marginHorizontal: '4%',
        marginVertical: '4%',        
    },
    documentdatestyle: {
        alignSelf: 'stretch',        
        flex: 1,
        height: scaledHeight(50),
        marginTop: 0,
        width: '100%',
    },
    documentdetailcontainer: {
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        margin: scaledHeight(15)
    },
    documentdetailheadernexttext: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginTop: scaledHeight(10), 
    },
    documentdetailheadertext: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',        
    },    
    documentdetailtext: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        marginTop: scaledHeight(2),
    },
    documentdottedline: {
        alignSelf: 'stretch',        
        height: 1,
        marginRight: scaledHeight(3),
    }, 
    documentfilterflexallview: {        
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row',
        marginRight: scaledHeight(5),
        height: scaledHeight(50)
    },
    documentfilterflexfilterview: {     
        alignItems: 'center',   
        alignSelf: 'stretch',        
        borderColor: '#61285F45',
        borderWidth: 0.7,
        flex: 1,        
        flexDirection: 'row',
        justifyContent: 'center',        
        marginLeft: scaledHeight(5),
        height: scaledHeight(50)
    },
    documentfilterrowview: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        height: scaledHeight(50),
        marginTop: '2%',
    },
    documentfiltertext: {
        color: '#0D7CB5',
        fontSize: scaledHeight(14),
    },
    documentfilterview: {
        alignSelf: 'stretch',
        marginHorizontal: '4%',
        marginVertical: '2%'
    },
    documentindvcontainer: {
        alignSelf: 'stretch',
        borderColor: '#9DB4CE',
        borderWidth: 1,   
        marginBottom:  scaledHeight(15),  
    },
    documentsortbytext: {        
        color: '#333333',
        fontSize: scaledHeight(14),
    },
    documentsortbyview: {
        alignSelf: 'flex-start',
        marginTop: '4%',        
    },
    documenttitletext: {
        alignSelf: 'stretch',
        color: '#0D7CB5',
        fontSize: scaledHeight(18),
        fontWeight: 'bold', 
    },
    documenttitletexttype: {
        alignSelf: 'stretch',
        color: '#0D7CB5',
        fontSize: scaledHeight(14),        
    },
    documenttitleview: {
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        margin: scaledHeight(15),        
    },
    documenttitleviewmore: {
        alignItems: 'center',
        alignSelf: 'center', 
        justifyContent: 'center',
        position: 'absolute', 
        right: -20,
    },
    documenttitleviewtext: {
        alignSelf: 'stretch',
        marginRight: scaledHeight(40),
    },    
    dropDownLayout: {
        alignSelf: 'stretch',
        flex: 1,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0        
    }, 
    dropdownTextInput: {
        alignSelf: 'stretch',
        paddingLeft: scaledHeight(5),
    },  
    fragmentstyle: {
        flex: 1
    },
    safeareabottom: {
        backgroundColor: '#F7FAFF', 
        flex: 1
    },
    safeareatop: {
        backgroundColor: '#194C7D', 
        flex: 0
    },
    scrollViewFlex:{
        alignSelf: 'stretch',
        flex: 1,        
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
    settingsInfoDivider: {
        alignSelf: 'stretch',
        backgroundColor: '#D7D8D9',          
        height: scaledHeight(1),
        marginTop: '4%',        
    },
    settingsInfoHead: {
        alignSelf: 'stretch',
        marginHorizontal: '4%',
        marginTop: scaledHeight(10),
    },
    settingsInfoHeadTilte: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        paddingBottom:scaledHeight(4)
    },
    settingsInfoSubHead: {
        color: '#0D7CB5',
        fontSize: scaledHeight(14),
    },
    settingsView: { 
        alignContent:'center',        
        alignItems:'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginHorizontal: '4%',
        marginTop: scaledHeight(5),
    },       
    touchOpacityPosition: {
        alignSelf: 'flex-start',
        marginVertical: scaledHeight(8),
    }
});

export default styles;