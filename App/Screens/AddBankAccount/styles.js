import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    accountText: {
        color: '#5D83AEDE',
        flex: 0.9,
        fontSize: scaledHeight(15),
        marginHorizontal: '4%'
    },
    accountView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: '4%',
        paddingVertical: scaledHeight(12),
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
        marginTop: scaledHeight(62),
        width: '78.6%'
    },

    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
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
        marginTop: scaledHeight(18)
    },
    headerText: {
        color: '#707070',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
    },
    instructionText: {
        alignSelf: 'center',
        color: '#54565B',
        flex: 0.9,
        fontSize: scaledHeight(15),
        marginRight: '4%'
    },
    instructionsView: {
        alignItems: 'center',
        backgroundColor: '#F2F1F1',
        borderColor: '#C7C7C7',
        borderRadius: scaledHeight(4),
        justifyContent: 'center',
        marginBottom: scaledHeight(17.5),
        marginHorizontal: '4%',
        marginTop: scaledHeight(61),
    },
    linkBreak1: {
        backgroundColor: '#707070',
        height: scaledHeight(1),
        marginHorizontal: '4%',
        marginTop: scaledHeight(12.5),
        opacity: 0.4
    },
    listHeaderText: {
        color: '#333333DE',
        fontSize: scaledHeight(15),
        marginBottom: scaledHeight(14),
        marginHorizontal: '4%',
        marginTop: scaledHeight(35),
    },
    scrollViewContentStyle: {
        justifyContent: 'center'
    },
    scrollviewStyle: {
        flex: 0.85
    },
    subHeaderText: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        opacity: 0.75,
    },
    subHeaderView: {
        alignItems: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(10)
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
    touchOpacityPosition: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
});
