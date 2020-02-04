import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
//  const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    accordianView: {
        backgroundColor: "#ffffff",
        paddingBottom: "5%"
    },
    bottomView: {
        backgroundColor: "#EEEEEE",
        marginTop: "10%",
        paddingBottom: "5%"
    },
    buttonView: {
        flexDirection: 'row',
        marginTop: "5%"
    },
    cancelButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderWidth: 1,
      
        height: scaledHeight(50),       
        justifyContent: 'center',
        marginLeft: scaledHeight(15),
        marginTop: scaledHeight(10),
        width: '35%'
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
    dropdownTextInput: {
        height: "30%",
        width: "50%"
    },
    ellipseImage: {
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "25%"
    },

    expandImage: {
        marginLeft: "3%", marginRight: "5%"
    },
    filterButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderWidth: 1,
        height: scaledHeight(40),
        justifyContent: 'center',
        marginLeft: scaledHeight(100),
        marginTop: scaledHeight(-5),
        width: scaledHeight(120)
    },
    filterButtonText: {
        color: '#5D83AE',
        fontSize: scaledHeight(14),
        //  fontWeight:'bold'
    },
    flexAccDetails1: {
      
        flexDirection: 'row',
        marginTop: "4%",
    }, lblCountText: {
        color: "#0000FF",
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginLeft: "10%",
        marginTop: scaledHeight(15),

    },
    lblLine: {
       
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
    },
    lblTxtInner: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: scaledHeight(25),
       
    },
    lblTxtInnerAmmend: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
      
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "4%",
       
    },
    lblTxtInnerCancel: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginBottom: "2%",
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "3%",
    },
    lblTxtMedium: {
        color: '#333333DE',
        fontSize: scaledHeight(15),
        marginLeft: "2%",
        marginTop: scaledHeight(10),
    },
    lblTxtSmall: {
        color: '#333333DE',
        fontSize: scaledHeight(10),
        marginLeft: "2%",
        marginTop: scaledHeight(10),
    },
    marginTopView: {
        marginTop: "0%"
    },
    modalInsideView: {
      
        backgroundColor: '#ffffff',
        height: "20%",
        marginTop: scaledHeight(52),
        width: "100%"
    },
    modalText: {
        color: '#535353',
        flexWrap: 'wrap',
        fontSize: scaledHeight(18),
        marginLeft: scaledHeight(15),
        marginTop: scaledHeight(5),
        textAlign: 'left'
    },
    modalView: {
     
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: "100%",
        marginTop: scaledHeight(10)
    },
    row: {
        alignItems: 'center',
        backgroundColor: "#EEEEEE",
        flexDirection: 'row',
        height: 50,
        marginTop: scaledHeight(18)

    },
    rowFlex:{
        flexDirection:'row',
        marginTop:scaledHeight(20),
    },
    saveButton: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderWidth: 1,
       
        height: scaledHeight(50),
       
        justifyContent: 'center',
        marginLeft: '5%',
        marginTop: scaledHeight(10),
        width: '35%'
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    scrollViewFlex:{
         flex: 0.85 
    },
    shadowView: {
        backgroundColor: "white",
        elevation: 5,
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41
    },
    signInView: {
        marginTop: scaledHeight(30),
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
    sorttext: {
        color: '#535353',
       
        flexWrap: 'wrap',
        fontSize: scaledHeight(14),
        marginLeft: scaledHeight(70),
        marginTop: scaledHeight(6),
        textAlign: 'right'
    },
    transactionStatusFlex: {
        backgroundColor: '#F2F2F2',
        borderColor: '#E0E1E2',
        borderRadius:scaledHeight(5),
        borderWidth: scaledHeight(1),
        
        height: scaledHeight(92),
      
        marginTop: scaledHeight(5)
    },
    transactionStatusMessageFlex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: "4%"
    },
    transactionStatusText: {
        color: '#56565A',
        fontSize: scaledHeight(15)
    },
    transactionStatusTextBold: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        fontWeight: 'bold'
    },
    viewColum: {
        flexDirection: 'column'
    },
    viewRow: {
        flexDirection: 'row',
        width: "90%"
    }


});

export default styles;