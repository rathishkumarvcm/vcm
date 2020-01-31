import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    contentStyle: { justifyContent: 'center' },
    page: {
        flex: 0.90,
        marginHorizontal: '4%'
    },
    header: {
        marginTop: scaledHeight(22),
        flexDirection: 'row',
    },
    headerText: {
        color: '#56565A',
        flex: 0.9,
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        paddingLeft: '4%',
    },
    accountIconStyle: {
        flex: 0.1,
    },
    linkBreak1: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(15),
    },
    webviewContainerStyle: {
        marginTop: scaledHeight(25),
        borderWidth:1
    },
    infoHeader: {
        marginHorizontal: '4%',
    },
    infoText: {
        color: '#56565A',
        fontSize: scaledHeight(14),
    },
});