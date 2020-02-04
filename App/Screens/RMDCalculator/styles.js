import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accountIconStyle: {
        flex: 0.1,
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    contentStyle: { justifyContent: 'center' },
    header: {
        flexDirection: 'row',
        marginTop: scaledHeight(22),
    },
    headerText: {
        color: '#56565A',
        flex: 0.9,
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        paddingLeft: '4%',
    },
    infoHeader: {
        marginHorizontal: '4%',
    },
    infoText: {
        color: '#56565A',
        fontSize: scaledHeight(14),
    },
    linkBreak1: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginBottom: scaledHeight(15),
        marginTop: scaledHeight(10),
        opacity: 0.4,
    },
    page: {
        flex: 0.90,
        marginHorizontal: '4%'
    },
    webviewContainerStyle: {
        borderWidth:1,
        marginTop: scaledHeight(25)
    },
});

export default styles;