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
    advicecontainer: {
        borderWidth: 0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(24),
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    adviceContainerBottom: {
        borderWidth: 1,
        borderTopWidth: 0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
        paddingBottom: scaledHeight(10),
    },
    adviceHeaderview: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '2%',
        paddingTop: scaledHeight(14),
        paddingBottom: scaledHeight(14),
        backgroundColor: '#F1F1F2',
        alignItems: 'center',
    },
    adviceHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '3%',
    },
    adviceAlertsContent: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        marginLeft: '4%',
        marginTop: scaledHeight(18),
        marginBottom: scaledHeight(4)
    },
    adviceSwitchContent: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        marginLeft: '6%',
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(10)
    },
    lineBorder: {
        borderWidth: 0.6,
        borderColor: '#EBEDEF',
        marginTop: scaledHeight(10),
    },

    cancelButton: {
        borderColor: '#7B8288',
        borderWidth: 1,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(42),
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
        borderWidth: 1,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(30),
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
