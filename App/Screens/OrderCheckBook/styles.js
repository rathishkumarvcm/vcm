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
    accountView: {
        flexDirection:'row',
        borderWidth: 1,
        borderColor: '#ECECEC',
        backgroundColor: '#ECECEC',
        marginTop: scaledHeight(23),
        marginHorizontal: '4%',
        paddingTop:scaledHeight(20),
        paddingBottom: scaledHeight(12),
        justifyContent:'space-between',
        alignItems:'center'
    },
    checkLeavesView: {        
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: '4%',
        marginHorizontal: '4%'
    },
    requestInfoView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        marginTop:scaledHeight(23),
        marginHorizontal: '4%',
        marginBottom:scaledHeight(40),
    },
    checkLeavesHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(40),
    },
    requestValue: {
        flex: 0.30,
        fontSize: scaledHeight(16),
        color: '#A1A1A1',
        alignSelf: 'flex-start'
    },
    requestText: {
        flex: 0.70,
        fontSize: scaledHeight(16),
        color: '#A1A1A1',
        alignSelf: 'flex-start'
    },
    checkLeavesText: {
        flex: 0.70,
        fontSize: scaledHeight(15),
        color: '#333333DE',
        alignSelf: 'center'
    },
    accountText: {
        flex: 0.70,
        fontSize: scaledHeight(18),
        color: '#54565B',
        paddingLeft: '4%',
        alignSelf:'center'
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
    instructionsView: {
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        borderColor: '#C7C7C7',
        borderRadius: scaledHeight(4),
        marginHorizontal: '4%',
        height: scaledHeight(72),
        marginTop: scaledHeight(50),
        marginBottom: scaledHeight(30),
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    instructionText: {
        fontSize: scaledHeight(15),
        color: '#56565A',
        alignSelf:'flex-start',
        marginTop: scaledHeight(19),
        marginHorizontal: '4%'

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
    switchStyle: {
        flex: 0.20,
        height: scaledHeight(21)
    },
    dropDownInput: {
        flex: 0.30,
        marginHorizontal: '0%'
    }
});
