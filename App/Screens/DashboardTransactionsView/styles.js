import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


 const styles = StyleSheet.create({
    blackTextBold16px:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginLeft: '4%',
        marginRight: '4%',
        paddingTop:scaledHeight(20)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    ellipseImage: {
       marginLeft:"90%"
    },
    filterButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderWidth: 1,
        marginLeft: scaledHeight(30),
        width: scaledHeight(120)
    },
    filterButtonText: {
        color: '#5D83AE',
        fontSize: scaledHeight(14),
    },
    greyTextRegular16px:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        marginLeft: '4%',
        marginRight: '4%',
        paddingTop:scaledHeight(12),
    },
    headerTextView: {
        marginLeft: '4%',
        marginRight: '4%',
    },
    horizontalFlex:{
        flexDirection:'row'
    },
    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: .25
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginTop: '4%',
        opacity: 0.25,
        width: "100%",
    },
    mainFlex:{
        flex: 0.85,
        marginTop:"12%"
    },
    row: {
        alignItems: 'center',
        backgroundColor: "#EEEEEE",
        flexDirection: 'row',
        height: 50,
    },
    shadowView: {
        backgroundColor: "white",
        elevation: 5,
        flexDirection: 'column',
        opacity:0.9,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    sortOptionsFlex:{
       alignSelf:'flex-end',
       backgroundColor: "#EEEEEE",
       borderColor:'black',
       borderWidth:scaledHeight(1),
       marginBottom:"-45%",
       marginRight:'4%',
       marginTop:"4%",
       width:"55%",
       zIndex:5,
    },
    titleHeaderTextStyle: {
        alignSelf:'flex-end',
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
    },
    transactionCard:{
        backgroundColor:'#FFFFFF',
        borderColor:'#9DB4CE',
        borderWidth:scaledHeight(1),
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:"4%",
        opacity:0.94,
        zIndex:1
    }
 });

 export default styles;