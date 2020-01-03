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
    scrollViewContentStyle: {
        justifyContent: 'center'
    },

    header: {
        marginTop: scaledHeight(18),
        alignItems: 'flex-start',
        marginHorizontal: '4%'
    },
    accountView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: scaledHeight(12),
        paddingHorizontal: '4%',
        flexDirection: 'row',
    },
    accountText: {
        flex: 0.9,
        fontSize: scaledHeight(15),
        color: '#5D83AEDE',
        marginHorizontal: '4%'
    },
    subHeaderView: {
        marginTop: scaledHeight(10),
        alignItems: 'flex-start',
        marginHorizontal: '4%'
    },
    subHeaderText: {
        fontSize: scaledHeight(14),
        color: '#333333DE',
        opacity: 0.75,
    },
    listHeaderText: {
        fontSize: scaledHeight(15),
        color: '#333333DE',
        marginTop: scaledHeight(35),
        marginHorizontal: '4%',
        marginBottom: scaledHeight(14),
    },
    headerText: {
        color: '#707070',
        fontSize: scaledHeight(20),
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
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(12.5),
        marginHorizontal: '4%'
    },
    instructionsView: {
        backgroundColor: '#F2F1F1',
        borderColor: '#C7C7C7',
        borderRadius: scaledHeight(4),
        marginHorizontal: '4%',
        marginTop: scaledHeight(61),
        marginBottom: scaledHeight(17.5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    instructionText: {
        fontSize: scaledHeight(15),
        color: '#54565B',
        marginRight: '4%',
        flex: 0.9,
        alignSelf: 'center'
    },
    touchOpacityPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    backBtn: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '78.6%',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(62),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54'
    },
});
