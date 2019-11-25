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
    goalcontainer: {
        borderWidth: 0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(24),
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    goalcontainerBottom: {
        borderWidth: 1,
        borderTopWidth: 0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    goalHeaderview: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '2%',
        paddingTop: scaledHeight(14),
        paddingBottom: scaledHeight(14),
        backgroundColor: '#F1F1F2',
        alignItems: 'center',
    },
    goalHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '3%',
    },
    goalAlertsContent: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginLeft: '6%',
        marginTop: scaledHeight(18),
        textTransform: 'uppercase'
    },
    lineBorder: {
        marginBottom: scaledHeight(20),
        borderTopWidth: 1,
        borderColor: '#DEDEDF',
        marginLeft: '6%',
        marginTop: scaledHeight(16),
        marginRight: '6%',
    },
    goalNoAlerts: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        marginLeft: '6%',
        marginTop: scaledHeight(3),        
    },
    goalCreateView: {
        flexDirection: 'row',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        alignItems: 'center',
        marginBottom: scaledHeight(28)
    },
    goalCreateText: {
        marginLeft: '1%',
        color: '#5D83AE',
        textDecorationLine: 'underline',
        fontSize: scaledHeight(14),

    },
});
