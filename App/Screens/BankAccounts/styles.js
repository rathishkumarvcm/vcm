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
        marginHorizontal: '4%',
        flexDirection: 'row'
    },
    subHeader: {
        marginTop: scaledHeight(28),
        marginHorizontal: '4%',
        flexDirection: 'row'
    },
    headerView: {
        borderWidth: 1,
        borderColor: '#ECECEC',
        backgroundColor: '#ECECEC',
        height: scaledHeight(54),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(17),
        marginHorizontal: '4%',
        flexDirection: 'row',
        flex: 1,
    },
    collapseHeaderText: {
        fontSize: scaledHeight(18),
        color: '#54565B',
        alignSelf: 'center',
        flex: 0.9,
    },
    iconStyle: {
        flex: 0.1
    },
    collapseIconStyle: {
        flex: 0.1,
        alignSelf: 'center',
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
    bankNameHeader: {
        marginHorizontal: '4%',
        marginVertical: scaledHeight(15),
        flexDirection: 'row'
    },
    accountTypeText: {
        fontSize: scaledHeight(18),
        color: '#54565B',
        alignSelf: 'flex-start',
        flex: 0.9,
        fontWeight: 'bold',
        
    },
    dateAddedText: {
        fontSize: scaledHeight(13),
        marginTop: scaledHeight(28),
        alignSelf: 'flex-start',
        marginHorizontal: '5%',
        color: '#9B9B9BDE',
    },
    accountNameHeaderText: {
        fontSize: scaledHeight(14),
        color: '#56565A',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(20),
        marginHorizontal: '4%',
        fontWeight: 'bold'
    },
    accountNameSubHeaderText: {
        fontSize: scaledHeight(14),
        color: '#56565A',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(8),
        marginHorizontal: '4%',
    },
    headerText: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        flex: 0.8
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
        backgroundColor: '#9DB4CE',
        alignSelf:"stretch",
        height: scaledHeight(1),
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
    editBankInfo: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        flex: 0.1
    },
    bankInfoContainer: {
        borderWidth: 1,
        borderColor: '#9DB4CE',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: scaledHeight(20),
        marginHorizontal: '4%',
        paddingBottom: scaledHeight(21)
    },
    backBtn: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '78.6%',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(50),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteBtn: {
        position: 'absolute',
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '40%',
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
});
