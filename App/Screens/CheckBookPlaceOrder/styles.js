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
    contentStyle: { justifyContent: 'center' },
    header: {
        marginTop: scaledHeight(22),
        alignItems: 'flex-start',
        marginHorizontal: '4%'
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
        backgroundColor: '#707070',
        opacity: 0.25,
        height: scaledHeight(1),
        marginTop: scaledHeight(13),
        marginBottom: scaledHeight(15),
        marginHorizontal: '4%',
        alignSelf:'stretch'
    },
    submitButtonText: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF'
    },
    backButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54'
    },
    submitBtn: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '78.6%',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(19),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backBtn: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '78.6%',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(19),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoContainer: {
        borderWidth: 1,
        borderColor: '#D6D8DC',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: '4%',
        paddingVertical: scaledHeight(15),
        paddingHorizontal: '4%'
    },
    accountNameText: {
        fontSize: scaledHeight(16),
        color: '#333333DE',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    accountNumberText: {
        fontSize: scaledHeight(16),
        color: '#56565A',
        alignSelf: 'flex-start',
    },
    deleteBtn: {
        position: 'absolute',
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '60%',
        marginLeft: '56%',
        marginRight: '4%',
        marginTop: scaledHeight(45),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5
    },
    backButtonText: {
        fontSize: scaledHeight(16),
        color: '#56565A'
    },
    accountNameHeaderText: {
        fontSize: scaledHeight(14),
        color: '#56565A',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(20),
        marginHorizontal: '4%',
        fontWeight: 'bold'
    },
});
