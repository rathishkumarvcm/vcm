import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    }, settingsView: {
        flexDirection: 'row',
        width: '100%',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    }, settingsInfo: {
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
        position: 'relative'
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
    listContainer: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(24),
        width: '92%',
        borderRadius: scaledHeight(16),
        marginLeft: '4%',
        marginRight: '4%',
    },
    listContainerItem: {
        flexDirection: 'row',
        marginTop: scaledHeight(24),
        marginLeft: '3%',
        marginRight: '2%',
        alignItems: 'center',
    },
    listContainerItemTextTitle: {
        marginLeft: '2%',
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    listContainerItemTextSubtitle: {
        width: '90%',
        marginTop: scaledHeight(25),
        marginBottom: scaledHeight(35),
        marginLeft: '4%',
        color: '#B2B2B2',
        fontSize: scaledHeight(14),
        lineHeight: scaledHeight(20)
    },
});