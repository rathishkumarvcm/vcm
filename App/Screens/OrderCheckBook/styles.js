import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    accountName: {
        flexDirection: 'row',
        marginHorizontal: '4%'
    },
    accountNumber: {
        flexDirection: 'row',
        marginBottom: scaledHeight(15),
        marginHorizontal: '4%'
    },
    accountNameText: {
        alignSelf: 'flex-start',
        color: '#54565B',
        flex: 0.9,
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
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
        fontSize: scaledHeight(15),
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
        marginTop: scaledHeight(19),
        width: '78.6%'
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
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
        width: '60%',
        zIndex: 5
    },
    editInfo: {
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
        borderColor: '#B5B5B6',
        borderWidth: 1,
        justifyContent: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20),
        paddingBottom: scaledHeight(15),
        paddingTop: scaledHeight(15)
    },
    lastRequestedText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginHorizontal: '4%',
        marginTop: scaledHeight(15)
    },
    linkBreak1: {
        alignSelf:'stretch',
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginHorizontal: '4%',
        marginTop: scaledHeight(5),
        opacity: 0.4
    },
    linkBreak2: {
        alignSelf: "stretch",
        backgroundColor: '#9DB4CE',
        height: scaledHeight(1),
    },
    requestBtn: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        height: scaledHeight(50),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(45),
        position: 'absolute',        
        elevation: 6,
        shadowColor: '#00000029',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        paddingHorizontal: '4%'
    },
    requestButtonText: {
        alignSelf: 'flex-start',
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'

    },
    scrollviewStyle: {
        flex: 0.85
    },
    contentStyle: { justifyContent: 'center' },
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
    accountHeaderView: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: '4%',
        marginTop: scaledHeight(11),
        paddingVertical: scaledHeight(5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    accountHeaderText: {
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#56565A',
        marginRight: '4%',
        flex: 0.9,
        alignSelf: 'center'
    },
    iconStyle: { flex: 0.1, alignSelf: 'center' }
});
