import { StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%',
    },
    scrollViewFlex:{
        flex: 0.85
    },
    securityAlertsContent: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginLeft: '6%',
        marginTop: scaledHeight(18),
    },
    securityCenterView: {
        color: '#2A92EE',
        textDecorationLine: 'underline',
    },
    securityHeaderViewTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '3%',
    },
    securityHeaderview: {
        alignItems: 'center',
        backgroundColor: '#F1F1F2',
        flexDirection: 'row',
        paddingBottom: scaledHeight(14),
        paddingLeft: '2%',
        paddingTop: scaledHeight(14),
        width: '100%',
    },
    securityLearnMoreText: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginBottom: scaledHeight(14),
        marginLeft: '4%',
        marginRight: '4%',
    },
    securitySuspiciousText: {
        color: '#707070',
        fontSize: scaledHeight(14),
        marginBottom: scaledHeight(14),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(14),
    },   
    securitycontainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',
        borderWidth: 0.5,
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(24),
        width: '92%',
    },
    securitycontainerBottom: {
        backgroundColor: '#FFFFFF',
        borderColor: '#EBEDEF',
        borderTopWidth: 0.5,
        borderWidth: 1,
        marginLeft: '4%',
        marginRight: '4%',
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
        flexWrap: 'wrap',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
    },
    touchOpacityPosition: {
        position: 'relative',
    },
});
