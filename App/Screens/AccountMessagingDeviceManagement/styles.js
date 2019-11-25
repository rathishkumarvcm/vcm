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
        flexWrap: 'wrap',
        width: '100%',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
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
        paddingBottom: scaledHeight(4)
    },  
    devicecontainer: {
        borderWidth: 0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(24),
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    devicecontainerBottom: {
        borderWidth: 1,
        borderTopWidth: 0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    deviceHeaderview: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '2%',
        paddingTop: scaledHeight(14),
        paddingBottom: scaledHeight(14),
        backgroundColor: '#F1F1F2',
        alignItems: 'center',
    },
    deviceHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '3%',
    },
    deviceAlertsContent: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginLeft: '6%',
        marginTop: scaledHeight(18),
    },
    devicePushNotifyText: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginTop: scaledHeight(14),
        marginBottom: scaledHeight(8),
        marginLeft: '4%',
        marginRight: '4%'
    },
    deviceSectionGrp: {
        flexGrow: 1,
        marginLeft: '4%',        
    },
    deviceSectionTxt: {
        textAlign: 'left',
        fontSize: scaledHeight(14),
        color: '#333333DE',
        fontWeight: 'bold',       
        marginLeft: '4%',     
    },  
    lastUsedText: {       
        color: '#707070',
        fontSize: scaledHeight(14),      
        marginBottom: scaledHeight(8),
        marginLeft: '6%',      
    },
    cancelButton: {
        borderColor: '#7B8288',
        borderWidth: 0.5,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(28),
        height: scaledHeight(55),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        fontWeight: 'bold'
    },
    saveButton: {
        borderColor: '#56565A',
        borderWidth: 0.5,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(25),
        height: scaledHeight(55),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButtonText: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

});
