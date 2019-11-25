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
    securitycontainer: {
        borderWidth: 0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(24),
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },
    securitycontainerBottom: {
        borderWidth: 1,
        borderTopWidth: 0.5,
        borderColor: '#EBEDEF',
        backgroundColor: '#FFFFFF',
        marginLeft: '4%',
        marginRight: '4%',
    },
    securityHeaderview: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '2%',
        paddingTop: scaledHeight(14),
        paddingBottom: scaledHeight(14),
        backgroundColor: '#F1F1F2',
        alignItems: 'center',
    },
    securityHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '3%',
    },
    securityAlertsContent: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginLeft: '6%',
        marginTop: scaledHeight(18),
    },
    securitySuspiciousText: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginBottom: scaledHeight(14),
        marginTop: scaledHeight(14),
        marginLeft: '4%',
        marginRight: '4%',
    },
    securityLearnMoreText: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginBottom: scaledHeight(14),
        marginLeft: '4%',
        marginRight: '4%',
    },
    securityCenterView: {
        color: '#2A92EE',
        textDecorationLine: 'underline',
    },
});
