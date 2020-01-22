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
    optionHeaderView: {
        marginTop: scaledHeight(56)
    },
    accountView: {
        borderWidth: 1,
        borderColor: '#ECECEC',
        backgroundColor: '#ECECEC',
        height: scaledHeight(64),
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: scaledHeight(40),
        marginHorizontal: '4%'
    },
    reinvestContainer: {
        borderWidth: 1,
        borderColor: '#DCDCDC',
        backgroundColor: '#FFFFFF',        
        borderRadius: scaledHeight(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(25),
        paddingHorizontal: '4%',
        marginHorizontal:'4%'
    },
    fundContainer: {
        flexDirection: 'row',
        width: '84%',
        borderWidth: 1,
        borderColor: '#5D83AE99',
        backgroundColor: '#FFFFFF',
        height: scaledHeight(105),
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '6%'
    },
    fundAmtContainer: {       
        borderWidth: 1,
        borderColor: '#5D83AE99',
        backgroundColor: '#FFFFFF',
        height: scaledHeight(150),
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: '4%',
        width: '84%',
    },
    ammountView: {
        flexDirection: 'row',
        height: scaledHeight(15),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        marginVertical: scaledHeight(10)
    },
    amountHeader: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: scaledHeight(20)
    },
    fundText: {
        flex: 0.60,
        fontSize: scaledHeight(13),
        color: '#544A54',
        fontWeight: 'bold',
        marginRight: '16%',
        alignSelf: 'center'
    },
    amtText: {
        
        fontSize: scaledHeight(16),
        color: '#333333DE',
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    amtText2: {
        flex: 0.10,
        fontSize: scaledHeight(16),
        color: '#333333DE',
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    minText: {
        fontSize: scaledHeight(13),
        color: '#333333DE',
        alignSelf: 'flex-start',
        marginTop: scaledHeight(19)
    },
    optionHeaderText: {
        fontSize: scaledHeight(20),
        color: '#000000',
        fontWeight: 'bold',
        marginHorizontal: '4%'
    },
    accountText: {
        fontSize: scaledHeight(18),
        color: '#54565B',
        marginHorizontal: '4%'
    },
    subHeaderText: {
        fontSize: scaledHeight(15),
        color: '#333333DE',
        marginHorizontal: '6%',
        marginTop: scaledHeight(30)
    },
    optionSubHeaderText: {
        fontSize: scaledHeight(15),
        color: '#54565B',
        marginHorizontal: '8%',
        marginTop: scaledHeight(23.5)
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
    instructionsView: {
        borderWidth: 1,
        backgroundColor: '#F2F2F2',
        borderColor: '#C7C7C7',
        borderRadius: scaledHeight(4),
        marginHorizontal: '4%',
        marginTop: scaledHeight(50),
        marginBottom: scaledHeight(30),
        paddingVertical: scaledHeight(15),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    instructionText: {
        fontSize: scaledHeight(15),
        color: '#54565B',
        marginRight: '4%',
        flex:0.8,
        alignSelf: 'center'
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
    accountIconStyle: { flex: 0.2, alignSelf: 'center' },
    accountHeaderText: {
        fontSize: scaledHeight(22),
        color: '#56565A',
        marginRight: '4%',
        flex: 0.8,
        alignSelf: 'center'
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
        marginTop: scaledHeight(40),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    switchContainer: {
        marginHorizontal: '3%',
        marginTop: scaledHeight(31)
    },
    switchStyle: {
        flex: 0.40,
        marginHorizontal: '3%',
        height: scaledHeight(21),
        alignSelf: 'center',
    },
    offButtonStyle: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: 1,
        marginTop: scaledHeight(12),
        width: '50%',
        backgroundColor: '#B7B7B7',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    offButtonStyleDisable: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: 1,
        marginTop: scaledHeight(12),
        width: '70%',
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    onButtonStyle: {
        borderColor: '#56565A',
        position: 'absolute',
        left: '50%',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: 1,
        marginTop: scaledHeight(12),
        width: '50%',
        backgroundColor: '#B7B7B7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    onButtonStyleDisable: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        position: 'absolute',
        zIndex: -1,
        left: '30%',
        borderWidth: 1,
        marginTop: scaledHeight(12),
        width: '70%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextOnStyle: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '10%'
    },
    TextOffStyle: {
        color: '#544A54',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '10%'
    },
    amountTextBox: {
        flex: 0.90,
        alignSelf:'center'
    },
    switchFlexView: {
        flexDirection:'row',
        marginTop: scaledHeight(14),
        marginHorizontal: '6%'
    },
    switchInlineTex: {
        flex:0.50,
        fontSize: scaledHeight(13),
        color:'#54565B',
        textAlign:'center'
    },
    touchOpacityPosition: {
        marginVertical: scaledHeight(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    setupInstructionText: {
        color: '#54565B', 
        fontSize: scaledHeight(14),
        marginHorizontal: '4%',
        marginVertical: scaledHeight(20),
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
    requestButtonText: {
        fontSize: scaledHeight(16),
        color: '#56565A',
        fontWeight: 'bold',
        alignSelf: 'flex-start'

    },
    requestBtn: {
        position: 'absolute',
        borderColor: '#FFFFFF',
        marginLeft: '50%',
        marginRight: '4%',
        marginTop: scaledHeight(45),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        width: '40%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: '4%',
        elevation: 6,
        shadowColor: '#00000029',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
    },
    linkBreak2: {
        backgroundColor: '#9DB4CE',
        alignSelf: "stretch",
        height: scaledHeight(1),
    },
    editInfo: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        flex: 0.1
    },
    confirmationView: {
        borderWidth: 1,
        borderColor: '#C7C7C7',
        backgroundColor: '#F2F2F2',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: scaledHeight(15),
        marginTop: scaledHeight(20),
        marginHorizontal: '4%',
        paddingBottom: scaledHeight(15),
        paddingHorizontal: '4%',
        borderRadius: 4
    },
    confirmationText: {
        fontSize: scaledHeight(15),
        color: "#54565B",
    }
});
