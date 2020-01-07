import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
//  const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    signInView: {
        marginTop: scaledHeight(30),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    signIntext: {
        textAlign: 'left',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#535353',
        flexWrap: 'wrap',
    },
    sorttext: {
        textAlign: 'right',
        //  color:'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(14),
        color: '#535353',
        flexWrap: 'wrap',
        marginTop: scaledHeight(6),
        marginLeft: scaledHeight(70)
    },
    lblLine: {
        //  width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
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
        marginTop: scaledHeight(25),
        marginLeft: "2%",
        marginRight: "2%",
        //  marginTop:"4%"     
    },
    lblCountText: {
        color: "#0000FF",
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginTop: scaledHeight(15),
        marginLeft: "10%",

    },

    bottomView: {
        backgroundColor: "#EEEEEE",
        marginTop: "10%",
        paddingBottom: "5%"
    },
    lblTxtSmall: {
        fontSize: scaledHeight(10),
        marginTop: scaledHeight(10),
        color: '#333333DE',
        marginLeft: "2%",
    },
    lblTxtMedium: {
        fontSize: scaledHeight(15),
        marginTop: scaledHeight(10),
        color: '#333333DE',
        marginLeft: "2%",
    },
    row: {
        flexDirection: 'row',
        marginTop: scaledHeight(18),
        height: 50,
        alignItems: 'center',
        backgroundColor: "#EEEEEE"

    }, modalView: {
        //  justifyContent: 'center',
        //  alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: "100%",
        marginTop: scaledHeight(10)
    },
    modalInsideView: {
        //  justifyContent: 'center',
        //  alignItems: 'center',
        backgroundColor: '#ffffff',
        height: "20%",
        width: "100%",
        marginTop: scaledHeight(52)
    },
    modalText: {
        textAlign: 'left',
        fontSize: scaledHeight(18),
        color: '#535353',
        flexWrap: 'wrap',
        marginLeft: scaledHeight(15),
        marginTop: scaledHeight(5)
    },
    cancelButton: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '35%',
        marginLeft: scaledHeight(15),
        //  marginRight:'10%',
        marginTop: scaledHeight(10),
        //  borderRadius:scaledHeight(25),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        fontWeight: 'bold'
    },
    filterButton: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: scaledHeight(120),
        marginLeft: scaledHeight(100),
        marginTop: scaledHeight(-5),
        height: scaledHeight(40),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterButtonText: {
        fontSize: scaledHeight(14),
        color: '#5D83AE',
        //  fontWeight:'bold'
    },
    saveButton: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: '35%',
        marginLeft: '5%',
        //  marginRight:'10%',
        marginTop: scaledHeight(10),
        //  borderRadius:scaledHeight(25),
        height: scaledHeight(50),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    saveButtonText: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    expandImage: {
        marginLeft: "3%", marginRight: "5%"
    },
    ellipseImage: {
        flexDirection: "column",
        marginLeft: "25%",
        justifyContent: "center"
    },
    shadowView: {
        flexDirection: 'column',
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 5
    },
    viewColum: {
        flexDirection: 'column'
    },
    viewRow: {
        flexDirection: 'row',
        width: "90%"
    },
    dropdownTextInput: {
        width: "50%",
        height: "30%"
    },
    flexAccDetails1: {
        //  height:scaledHeight(73),
        marginTop: "4%",
        flexDirection: 'row',
    },
    buttonView: {
        flexDirection: 'row',
        marginTop: "5%"
    },
    accordianView: {
        backgroundColor: "#ffffff",
        paddingBottom: "5%"
    },
    lblTxtInnerCancel: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginLeft: "2%",
        marginRight: "2%",
        marginBottom: "2%",
        marginTop: "3%",
    },
    lblTxtInnerAmmend: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        //  marginTop: scaledHeight(25),
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "4%",
       
    },
    marginTopView: {
        marginTop: "0%"
    },
    rowFlex:{
        flexDirection:'row'
    },
    scrollViewFlex:{
         flex: 0.85 
    }


});

export default styles;