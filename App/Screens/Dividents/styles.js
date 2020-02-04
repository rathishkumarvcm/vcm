import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    TextOffStyle: {
        color: '#544A54',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '10%'
    },
    TextOnStyle: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '10%'
    },
    accountHeaderText: {
        alignSelf: 'center',
        color: '#56565A',
        flex: 0.8,
        fontSize: scaledHeight(22),
        marginRight: '4%'
    },
    accountHeaderView: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: '4%',
        marginTop: scaledHeight(11),
        paddingVertical: scaledHeight(5),
    },
    accountIconStyle: { alignSelf: 'center', flex: 0.2 },
    accountName: {
        flexDirection: 'row',
        marginBottom: scaledHeight(15),
        marginHorizontal: '4%'
    },
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
    accountNameText: {
        alignSelf: 'flex-start',
        color: '#54565B',
        flex: 0.9,
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
    },
    accountText: {
        color: '#54565B',
        fontSize: scaledHeight(18),
        marginHorizontal: '4%'
    },
    accountView: {
        alignItems: 'flex-start',
        backgroundColor: '#ECECEC',
        borderColor: '#ECECEC',
        borderWidth: 1,
        height: scaledHeight(64),
        justifyContent: 'center',
        marginHorizontal: '4%',
        marginTop: scaledHeight(40)
    },
    ammountView: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: scaledHeight(15),
        justifyContent: 'flex-start',
        marginVertical: scaledHeight(10)
    },
    amountHeader: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: scaledHeight(20)
    },
    amountTextBox: {
        alignSelf:'center',
        flex: 0.90
    },
    amtText: {
        
        alignSelf: 'flex-start',
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    amtText2: {
        alignSelf: 'flex-start',
        color: '#333333DE',
        flex: 0.10,
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
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
    confirmationText: {
        color: "#54565B",
        fontSize: scaledHeight(15),
    },
    confirmationView: {
        alignItems: 'flex-start',
        backgroundColor: '#F2F2F2',
        borderColor: '#C7C7C7',
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20),
        paddingBottom: scaledHeight(15),
        paddingHorizontal: '4%',
        paddingTop: scaledHeight(15)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    contentStyle: { justifyContent: 'center' },
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
    fundAmtContainer: {       
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#5D83AE99',
        borderWidth: 1,
        height: scaledHeight(150),
        justifyContent: 'center',
        paddingHorizontal: '4%',
        width: '84%',
    },
    fundContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#5D83AE99',
        borderWidth: 1,
        flexDirection: 'row',
        height: scaledHeight(105),
        justifyContent: 'center',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '6%',
        width: '84%'
    },
    fundText: {
        alignSelf: 'center',
        color: '#544A54',
        flex: 0.60,
        fontSize: scaledHeight(13),
        fontWeight: 'bold',
        marginRight: '16%'
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
    instructionText: {
        alignSelf: 'center',
        color: '#54565B',
        flex:0.8,
        fontSize: scaledHeight(15),
        marginRight: '4%'
    },
    instructionsView: {
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderColor: '#C7C7C7',
        borderRadius: scaledHeight(4),
        borderWidth: 1,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: scaledHeight(30),
        marginHorizontal: '4%',
        marginTop: scaledHeight(50),
        paddingVertical: scaledHeight(15),
    },
    linkBreak1: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginHorizontal: '4%',
        marginTop: scaledHeight(10),
        opacity: 0.4
    },
    linkBreak2: {
        alignSelf: "stretch",
        backgroundColor: '#9DB4CE',
        height: scaledHeight(1),
    },
    minText: {
        alignSelf: 'flex-start',
        color: '#333333DE',
        fontSize: scaledHeight(13),
        marginTop: scaledHeight(19)
    },
    offButtonStyle: {
        alignItems: 'flex-start',
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(61),
        justifyContent: 'center',
        marginTop: scaledHeight(12),
        width: '50%'
    },
    offButtonStyleDisable: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(61),
        justifyContent: 'center',
        marginTop: scaledHeight(12),
        width: '70%'
    },
    onButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(61),
        justifyContent: 'center',
        left: '50%',
        marginTop: scaledHeight(12),
        position: 'absolute',
        width: '50%'
    },
    onButtonStyleDisable: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(61),
        justifyContent: 'center',
        left: '30%',
        marginTop: scaledHeight(12),
        position: 'absolute',
        width: '70%',
        zIndex: -1
    },
    optionHeaderText: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginHorizontal: '4%'
    },
    optionHeaderView: {
        marginTop: scaledHeight(56)
    },
    optionSubHeaderText: {
        color: '#54565B',
        fontSize: scaledHeight(15),
        marginHorizontal: '8%',
        marginTop: scaledHeight(23.5)
    },
    reinvestContainer: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#DCDCDC',        
        borderRadius: scaledHeight(10),
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal:'4%',
        marginTop: scaledHeight(25),
        paddingHorizontal: '4%'
    },
    requestBtn: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderRadius: scaledHeight(1),
        elevation: 6,
        height: scaledHeight(50),
        marginLeft: '50%',
        marginRight: '4%',
        marginTop: scaledHeight(45),
        paddingHorizontal: '4%',
        position: 'absolute',
        shadowColor: '#00000029',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        width: '40%',
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
    setupInstructionText: {
        color: '#54565B', 
        fontSize: scaledHeight(14),
        marginHorizontal: '4%',
        marginVertical: scaledHeight(20),
    },
    subHeaderText: {
        color: '#333333DE',
        fontSize: scaledHeight(15),
        marginHorizontal: '6%',
        marginTop: scaledHeight(30)
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
    switchContainer: {
        marginHorizontal: '3%',
        marginTop: scaledHeight(31)
    },
    switchFlexView: {
        flexDirection:'row',
        marginHorizontal: '6%',
        marginTop: scaledHeight(14)
    },
    switchInlineTex: {
        color:'#54565B',
        flex:0.50,
        fontSize: scaledHeight(13),
        textAlign:'center'
    },
    switchStyle: {
        alignSelf: 'center',
        flex: 0.40,
        height: scaledHeight(21),
        marginHorizontal: '3%',
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
        marginVertical: scaledHeight(15),
    }
});

export default styles;