import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    adviceAlertsContent: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        marginBottom: scaledHeight(4),
        marginLeft: '4%',
        marginTop: scaledHeight(18)
    },
    adviceContainerBottom: {
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',
        borderTopWidth: 0.5,
        borderWidth: 1,
        marginLeft: '4%',
        marginRight: '4%',
        paddingBottom: scaledHeight(10),
        width: '92%',
    },
    adviceHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '3%',
    },
    adviceHeaderview: {
        alignItems: 'center',
        backgroundColor: '#F1F1F2',
        flexDirection: 'row',
        paddingBottom: scaledHeight(14),
        paddingLeft: '2%',
        paddingTop: scaledHeight(14),
        width: '100%',
    },
    adviceSwitchContent: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        marginBottom: scaledHeight(10),
        marginLeft: '6%',
        marginTop: scaledHeight(10)
    },
    advicecontainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',
        borderWidth: 0.5,
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(24),
        width: '92%',
    },
    cancelButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#7B8288',
        borderWidth: 1,
        height: scaledHeight(55),
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(42),
        width: '80%',
    },
    cancelButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%',
    },
    lineBorder: {
        borderColor: '#EBEDEF',
        borderWidth: 0.6,
        marginTop: scaledHeight(10),
    },
    saveButton: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderWidth: 1,
        height: scaledHeight(55),
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(30),
        width: '80%',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
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
        paddingBottom: scaledHeight(4)
    },
    settingsView: {
        flexDirection: 'row',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
    },
    touchOpacityPosition: {
        position: 'relative',
    },

});

export default styles;