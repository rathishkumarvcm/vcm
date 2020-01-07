import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accTypeSelectSection: {
        alignItems: "center",       
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',              
        marginTop: scaledHeight(18),
    },
    accTypeTilte:{
        color: '#56565A',
        fontSize: scaledHeight(22),   
        fontWeight:'bold',    
        marginLeft:'4%',       
        marginTop: scaledHeight(16),
        textTransform:'uppercase'        
    },
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },
    childSectionGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(33)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    customRowTxtBox: {
        width: '30%'
    },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
    },
    disclaimerTitleTxt: { //  termsofuseText
        color: '#56565A',        
        fontSize: scaledHeight(16),
        fontWeight: 'bold',       
        lineHeight: 25,
        marginBottom: scaledHeight(10),     
    },
    disclaimerTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25
    },
    downloadPDFBtn: {     
        alignContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#FFFFFF',
        borderColor: "#5D83AE",        
        borderWidth: 1,       
        height: scaledHeight(50),      
        justifyContent: 'center',
        marginTop: scaledHeight(22),
        width: '75%',
    },
    downloadPDFBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 20,
        textAlign: 'center',
        width: '100%'
    },
    expandCollpaseTxt: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },
    headings: {
        color: '#0E0E0F',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '80%'
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
        marginTop: scaledHeight(25)
    },
    moreTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    newVictorySection: {
        //   marginTop: scaledHeight(150),           
        backgroundColor: '#FFFFFF',        
        flexGrow: 1,
        padding: scaledHeight(12),
        width: '100%',
    },
    normalBlackBtn: {
        //   width: '90%',
        alignContent: 'center',
        alignItems: 'center',        
        backgroundColor: '#544A54',       
        borderColor: "#61285F45",
        borderWidth: 1,
        //  borderRadius: scaledHeight(24),
        height: scaledHeight(50),       
        justifyContent: 'center',       
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5),
    },
    normalBlackBtnDisabledTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },
    normalBlackBtnTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },
    normalBlackDisabledBtn: {
        //   width: '90%',        
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',        
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
        borderWidth: 1,       
        height: scaledHeight(50),     
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5),        
    },
    normalWhiteBtn: {
        //   width: '90%',
        alignContent: 'center',
        alignItems: 'center',        
        backgroundColor: '#fff',        
        borderColor: "#61285F45",
        borderWidth: 1,
       //  borderRadius: scaledHeight(24),
        height: scaledHeight(50),      
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5),        
    },
    normalWhiteBtnTxt: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        textAlign: 'center',
        width: '100%'
    },
    pdfDescTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        marginTop: scaledHeight(16)
    },
    pdfSection: {
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
        borderRadius: scaledHeight(5),
        borderWidth: 1,
        flexGrow: 1,
        marginBottom: scaledHeight(22),
        marginHorizontal: scaledHeight(12),
        padding: scaledHeight(32),
        shadowColor: "#56565A",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3
    },
    pdfTitleTxt: {
        color: '#486D89',
        fontSize: scaledHeight(26),
        lineHeight: 35
    },    
    scrollViewFlex:{
         flex: .85 
    },
    sectionDescTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(18),
        lineHeight: 22,
        marginTop: scaledHeight(19.5)
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
});

export default styles;
