import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accountNameHeaderText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20)
    },
    accountNameSubHeaderText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        marginHorizontal: '4%',
        marginTop: scaledHeight(8),
    },
    accountTypeText: {
        alignSelf: 'flex-start',
        color: '#54565B',
        flex: 0.9,
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        
    },
    addBtn: {
        alignSelf: 'flex-end',
        flex: 0.2,
        justifyContent: 'flex-end'
    },
    alertBox: {
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderColor: '#C7C7C7',
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20),
        paddingHorizontal: '4%',
        paddingVertical: scaledHeight(15)
    },
    alertText: {
        color: '#54565B',
        fontSize:  scaledHeight(15),
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
        marginTop: scaledHeight(50),
        width: '78.6%'
    },
    backButtonText: {
        color: '#56565A',
        fontSize: scaledHeight(16)
    },
    bankInfoContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#9DB4CE',
        borderWidth: 1,
        justifyContent: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20),
        paddingBottom: scaledHeight(21)
    },
    bankNameHeader: {
        flexDirection: 'row',
        marginHorizontal: '4%',
        marginVertical: scaledHeight(15)
    },
    cancelBtn: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#707070',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        flex: 0.5,
        height: scaledHeight(44),
        justifyContent: 'center',
        marginHorizontal: '4%',
        width: '40%'
    },
    cencelButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(14)
    },
    collapseHeaderText: {
        alignSelf: 'center',
        color: '#54565B',
        flex: 0.9,
        fontSize: scaledHeight(18),
    },
    collapseIconStyle: {
        alignSelf: 'center',
        flex: 0.1,
    },
    confirmDeleteView: {
        flexDirection: 'row',
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    contentStyle: {
        justifyContent: 'center'
    },
    dateAddedText: {
        alignSelf: 'flex-start',
        color: '#9B9B9BDE',
        fontSize: scaledHeight(13),
        marginHorizontal: '5%',
        marginTop: scaledHeight(28),
    },
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
        width: '40%',
        zIndex: 5
    },
    deleteBtn1: {
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        flex: 0.5,
        height: scaledHeight(44),
        justifyContent: 'center',
        marginHorizontal: '4%',
        width: '40%'
    },
    deleteButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(14)
    },
    editBankInfo: {
        alignSelf: 'flex-end',
        flex: 0.1,
        justifyContent: 'flex-end'
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
        opacity: 0.4,
    },
    header: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginHorizontal: '4%',
        marginTop: scaledHeight(22)
    },
    headerText: {
        color: '#56565A',
        flex: 0.8,
        fontSize: scaledHeight(18),
        fontWeight: 'bold'
    },
    headerView: {
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        borderColor: '#ECECEC',
        borderWidth: 1,
        flexDirection: 'row',
        flex: 1,
        height: scaledHeight(54),
        justifyContent: 'center',
        marginHorizontal: '4%',
        marginTop: scaledHeight(17),
    },
    iconStyle: {
        flex: 0.1
    },
    instructionText: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        marginHorizontal: '4%',
        marginTop: scaledHeight(15)
    },
    linkBreak1: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginHorizontal: '4%',
        marginTop: scaledHeight(10),
        opacity: 0.4,
    },
    linkBreak2: {
        alignSelf:"stretch",
        backgroundColor: '#9DB4CE',
        height: scaledHeight(1),
    },
    scrollviewStyle: {
        flex: 0.85
    },
    subHeader: {
        flexDirection: 'row',
        marginHorizontal: '4%',
        marginTop: scaledHeight(28)
    },
    subHeaderText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        flex: 0.8,
        fontSize: scaledHeight(18)
    },
    subTextAdd: {
        alignSelf: 'flex-end',
        color: '#0000FF',
        fontSize: scaledHeight(16),
        
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

export default styles;