import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    accountNameHeaderText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20)
    },
    accountNameText: {
        alignSelf: 'flex-start',
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    accountNumberText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    backBtn: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(40),
        width: '78.6%'
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16)
    },
    backButtonText: {
        color: '#56565A',
        fontSize: scaledHeight(16)
    },
    checkLeavesText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(5)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    contentStyle: { justifyContent: 'center' },
    deleteBtn: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '56%',
        marginRight: '4%',
        marginTop: scaledHeight(45),
        position: 'absolute',
        width: '60%',
        zIndex: 5
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
        opacity: 0.4,
    },
    header: {
        alignItems: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(22)
    },
    headerText: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
    },
    infoContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#D6D8DC',
        borderWidth: 1,
        justifyContent: 'flex-start',
        marginHorizontal: '4%',
        paddingHorizontal: '4%',
        paddingVertical: scaledHeight(15)
    },
    linkBreak1: {
        alignSelf:'stretch',
        backgroundColor: '#707070',
        height: scaledHeight(1),
        marginBottom: scaledHeight(15),
        marginHorizontal: '4%',
        marginTop: scaledHeight(13),
        opacity: 0.25
    },
    scrollviewStyle: {
        flex: 0.85
    },
    submitBtn: {
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(19),
        width: '78.6%'
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16)
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: "4%",
        width: "92%",
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
});
