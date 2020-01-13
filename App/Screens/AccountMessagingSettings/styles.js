import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    }, listContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D4D4D4',
        borderRadius: scaledHeight(16),
        borderWidth: 1,
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(24),
        width: '92%',
    }, listContainerItem: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '3%',
        marginRight: '2%',
        marginTop: scaledHeight(24),
    },
    listContainerItemTextSubtitle: {
        color: '#B2B2B2',
        fontSize: scaledHeight(14),
        lineHeight: scaledHeight(20),
        marginBottom: scaledHeight(35),
        marginLeft: '4%',
        marginTop: scaledHeight(25),
        width: '90%'
    },
    listContainerItemTextTitle: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft: '2%',
        textTransform: 'uppercase',
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
        position: 'relative'
    },
});

export default styles;