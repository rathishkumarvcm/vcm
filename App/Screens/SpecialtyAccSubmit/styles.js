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
    addressTitleTxt: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 22
    },
    addressTxt: {       
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        marginTop: scaledHeight(16)
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
        borderColor: "#61285F",
        borderRadius: scaledHeight(24),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(22),
        width: '75%'
    },
    downloadPDFBtnTxt: {
        color: '#61285F',
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
    fileDesctextStyle:{    
        color: '#707070',          
        flex:0.5,       
        fontSize: scaledHeight(14),
        marginHorizontal: scaledHeight(20), 
        marginLeft:scaledHeight(30)            
    },
    fileDesctextStyleError:{      
        color: '#de421b',  
        flex:0.5,       
        fontSize: scaledHeight(14),
        marginHorizontal: scaledHeight(20), 
        marginLeft:scaledHeight(30)            
    },
    headings: {
        color: '#56565A',
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
        opacity: .25,
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)
    },
    mailContainer:{ 
        flexGrow: 1, 
        marginTop: scaledHeight(20)
    },
    mailingText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',     
        marginBottom:scaledHeight(15),
        marginTop:scaledHeight(30)       
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
    orText: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',     
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(20)
    },
    phoneNoTxt: {
        color: '#5196E5',
        fontSize: scaledHeight(18),
        lineHeight: 22
    },
    scrollViewFlex:{ flex: .85 
    },
    sectionDescTxt: {
        color: '#56565A',
        fontSize: scaledHeight(22),
        lineHeight: 22,
        marginTop: scaledHeight(19.5)
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    selectFileContainer:{        
        alignItems: 'center', 
        backgroundColor: '#FFFFFF',        
        flexDirection:'row',
        justifyContent:'center',
        marginTop:scaledHeight(10),
        paddingVertical:scaledHeight(10)        
    },
    selectFilesBtn: {                   
        backgroundColor: '#B2B2B2',             
        borderColor: "#61285F45",
        borderRadius: scaledHeight(5),
        borderWidth: 1, 
        height:scaledHeight(30),  
        marginRight:'8%',                   
        shadowColor: "#56565A",   
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        width:'30%'        
    },
    selectFilesBtnTxt: {         
        color: '#FFFFFF',
        fontSize: scaledHeight(14),     
        textAlign: 'center',
        width: '100%'
    },
    selectedFileDescContainer:{  
        backgroundColor: '#FFFFFF',      
        flexDirection:'row',              
        paddingVertical:scaledHeight(10),
    },
    uploadFileContainer:{
        flexDirection:'row',
        marginTop:scaledHeight(10),
    },
    uploadFileDesc:{
        color: '#707070',
        flex:0.8,
        fontSize: scaledHeight(12),   
    },
    uploadFileDivider:{
        color: '#707070',
        flex:0.1,
        fontSize: scaledHeight(12),   
    },
    uploadFileTitle:{
        color: '#707070',
        flex:0.5,
        fontSize: scaledHeight(12),   
    },
    uploadText:{
        color: '#707070',
        fontSize: scaledHeight(20),    
        fontWeight:'bold', 
        marginRight:'4%', 
        textAlign: 'center',      
        textDecorationLine:'underline'       
    }
});

export default styles;