import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex:{
        flex: 0.85
    },
    headerFlex:{
        backgroundColor:'#E4EBFE',
        height:scaledHeight(46),
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#4D79F6',
        fontSize:scaledHeight(20),
        fontWeight:'bold',
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        width: "92%",
        marginTop: '4%',
        marginLeft: "4%",
        marginRight: "4%"
    },
    buttonsFlex: {
        flexDirection: 'column',
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
        marginTop: scaledHeight(20),
    },
    backButtonFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(16)
    },
    backButtonText: {
        color: '#544A54',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    submitFlex: {
        backgroundColor: '#544A54',
        height: scaledHeight(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(16)
    },
    submitText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%",
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
});