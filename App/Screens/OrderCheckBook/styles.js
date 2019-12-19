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
        marginTop: scaledHeight(5),
        marginHorizontal: '4%',
        alignSelf:'stretch'
    },
    linkBreak2: {
        backgroundColor: '#707070',
        opacity: 0.5,
        height: scaledHeight(1),
        alignSelf: 'stretch'
    },
    backButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54'
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
        borderColor: '#B5B5B6',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: scaledHeight(15),
        marginTop: scaledHeight(20),
        marginHorizontal: '4%',
        paddingBottom: scaledHeight(15)
    },
    accountName: {
        marginHorizontal: '4%',
        marginBottom: scaledHeight(15),
        flexDirection: 'row'
    },
    accountNameText: {
        fontSize: scaledHeight(18),
        color: '#54565B',
        alignSelf: 'flex-start',
        flex: 0.9,
        fontWeight: 'bold',
    },
    editInfo: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        flex: 0.1
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
    requestBtn: {
        position: 'absolute',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(45),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',        
        zIndex: 5
    },
    backButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54'
    },
    requestButtonText: {
        fontSize: scaledHeight(16),
        color: '#56565A',
        fontWeight: 'bold',
        alignSelf: 'flex-start'

    },
    lastRequestedText: {
        fontSize: scaledHeight(14),
        color: '#56565A',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(15),
        marginHorizontal: '4%',
        fontWeight: 'bold'
    },
    linkBreak2: {
        backgroundColor: '#9DB4CE',
        alignSelf: "stretch",
        height: scaledHeight(1),
    },
    alertText: {
        color: '#54565B',
        fontSize: scaledHeight(15),
    },
    alertBox: {
        borderWidth: 1,
        borderColor: '#C7C7C7',
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(20),
        marginHorizontal: '4%',
        paddingVertical: scaledHeight(15),
        paddingHorizontal: '4%'
    }
});
