import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
//  const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    agreeSectionGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(10),
        paddingHorizontal: scaledHeight(12),
        paddingVertical: scaledHeight(12)

    },
    agreeTermsTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(19),
        marginTop: scaledHeight(2),
        textAlign: 'left',
        //  marginTop:scaledHeight(5)

    },
    bottomView: {
        backgroundColor: "#EEEEEE",
        marginTop: "10%",
        paddingBottom: "5%"
    },
    cancelButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(12),
        //  borderRadius:scaledHeight(25),
        width: '80%',
    },
    cancelButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    lblLine: {
        //  width:"100%",
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: .25
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25),

    },
    lblTxtBottom: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        marginLeft: scaledHeight(20),
        marginTop: scaledHeight(25),
        width: '80%'

    },
    lblTxtBottomTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft: scaledHeight(20),
        marginTop: scaledHeight(25),
        width: '80%'

    },
    lblTxtSmall: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        //  fontWeight:'bold',
        marginTop: scaledHeight(25),

    },
    lblTxtToken: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25),
        width: scaledHeight(120)

    },
    messageFlex:{
        backgroundColor:"#EEEEEE",
        marginTop:scaledHeight(20),
    },
    messageText:{
        marginBottom:"5%",
        marginLeft:"5%",
        marginTop:"5%",
        width:"80%"
    },
    rowFlex:{
    flexDirection:'row'
    },
    saveButton: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(12),
        //  borderRadius:scaledHeight(25),
        width: '80%',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    scrollViewFlex: {
        flex: 0.85
    },
    signInView: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    signIntext: {
        color: '#535353',
        flexWrap: 'wrap',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        textAlign: 'left',
    },
    touchableOpacityStyle: {
        marginTop: "5%",

    },
    txtUnderline: {
        color: "#0000FF",
        height: scaledHeight(20),
        textDecorationLine: 'underline',
    },
    userIDTextBox: {

        marginBottom: scaledHeight(18),
        marginTop: scaledHeight(15),
        width: '60%'
    },
    widthView:{ 
        width: "100%" 
    }



});

export default styles;