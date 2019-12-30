import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex: {
        flex: 0.85
    },
    backgroundFlex: {
        height: scaledHeight(392)
    },
    transactionStatusFlex: {
        height: scaledHeight(92),
        marginLeft: "4%",
        marginRight: "4%",
        backgroundColor: '#F2F2F2',
        borderColor: '#E0E1E2',
        borderWidth: scaledHeight(1),
        marginTop: scaledHeight(30)
    },
    transactionStatusMessageFlex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: "4%"
    },
    transactionStatusText: {
        color: '#56565A',
        fontSize: scaledHeight(15)
    },
    transactionStatusTextBold: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        fontWeight: 'bold'
    },
    targetPageText: {
        height: scaledHeight(58),
        color: '#5D83AE',
        opacity: 0.25,
        fontWeight: 'bold',
        fontSize: scaledHeight(44),
        marginTop: scaledHeight(60),
        textAlign: 'center'
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(40)
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%"
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16)
    }
});

export default styles;