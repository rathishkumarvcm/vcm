import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%',
    },
    goalAlertsContent: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginLeft: '6%',
        marginTop: scaledHeight(18),
        textTransform: 'uppercase'
    },
    goalCreateText: {
        color: '#5D83AE',
        fontSize: scaledHeight(14),
        marginLeft: '1%',
        textDecorationLine: 'underline',

    },
    goalCreateView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: scaledHeight(28),
        marginTop: scaledHeight(18),
        paddingLeft: '4%'
    },
    goalHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '3%',
    },
    goalHeaderview: {
        alignItems: 'center',
        backgroundColor: '#F1F1F2',
        flexDirection: 'row',
        paddingBottom: scaledHeight(14),
        paddingLeft: '2%',
        paddingTop: scaledHeight(14),
        width: '100%',
    },
    goalNoAlerts: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        marginLeft: '6%',
        marginTop: scaledHeight(3),        
    },   
    goalcontainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',
        borderWidth: 0.5,
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(24),
        width: '92%',
    },
    goalcontainerBottom: {
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',
        borderTopWidth: 0.5,
        borderWidth: 1,
        marginLeft: '4%',
        marginRight: '4%',
        width: '92%',
    },
    lineBorder: {
        borderColor: '#DEDEDF',
        borderTopWidth: 1,
        marginBottom: scaledHeight(20),
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: scaledHeight(16),
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
