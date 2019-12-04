import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    scrollviewStyle: {
        flex: 0.85
    },
    header: {
        marginTop: scaledHeight(22),
        alignItems: 'flex-start',
        marginHorizontal: '4%'
    },
    subHeader: {
        marginTop: scaledHeight(28),
        marginHorizontal: '4%',
        flexDirection: 'row'
    },
    accountView: {
        borderWidth: 1,
        borderColor: '#ECECEC',
        backgroundColor: '#ECECEC',
        height: scaledHeight(54),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(17),
        marginHorizontal: '4%'
    },
    accountText: {
        fontSize: scaledHeight(18),
        color: '#54565B',
        alignSelf: 'flex-start',
        marginHorizontal: '4%'
    },
    subHeaderText: {
        fontSize: scaledHeight(18),
        color: '#56565A',
        alignSelf: 'flex-start',
        flex: 0.8
    },
    subTextAdd: {
        fontSize: scaledHeight(16),
        color: '#0000FF',
        alignSelf: 'flex-end',
        
    },
    accountTypeText: {
        fontSize: scaledHeight(15),
        color: '#333333DE',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(30),
        marginHorizontal: '4%'
    },
    dateAddedText: {
        fontSize: scaledHeight(13),
        marginTop: scaledHeight(28),
        alignSelf: 'flex-start',
        marginHorizontal: '5%',
        color: '#9B9B9BDE',
    },
    accountNameHeaderText: {
        fontSize: scaledHeight(16),
        color: '#333333DE',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(12),
        marginHorizontal: '4%',
        fontWeight: 'bold'
    },
    accountNameSubHeaderText: {
        fontSize: scaledHeight(15),
        color: '#333333DE',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(12),
        marginHorizontal: '4%',
        marginBottom: scaledHeight(24)
    },
    headerText: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: "4%",
        width: "92%",
    },
    tNcHeader: {
        color: '#56565A',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    linkBreak1: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(10),
        marginHorizontal: '4%'
    },
    linkBreak2: {
        backgroundColor: '#707070',
        opacity: 0.2,
        height: scaledHeight(1),
        marginTop: scaledHeight(16),
        marginHorizontal: '4%'
    },
    instructionText: {
        fontSize: scaledHeight(15),
        color: '#56565A',
        marginHorizontal: '4%',
        marginTop: scaledHeight(15)
    },
    addBtn: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        flex: 0.2
    },
});
