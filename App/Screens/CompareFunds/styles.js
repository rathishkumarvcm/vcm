import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    backToInvestpage: {
        color: '#0D7CB5',
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(25),
        marginTop: scaledHeight(25),        
    },
    backtoInvestContainer:{ 
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'flex-start' 
    },
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    fundCategoryView:{
        flexDirection:'row'
    },
    fundCompareCategoryTitle:{
        color:'#56565A',
        fontSize: scaledHeight(14),
        fontWeight:'bold',
        height:scaledHeight(60), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundCompareColumnContainer:{       
        backgroundColor:'#E9E9E9',
        borderBottomWidth:1,
        borderColor:'#7B8288',
        borderLeftWidth:0.2,
        borderRightWidth:1,
        borderTopWidth:0.2,
        flexDirection:'row',
        marginLeft:'6%',
        marginTop: scaledHeight(30),  
        width:'40%',
    },
    fundCompareContainer:{
        flexDirection:'column',
        width:scaledHeight(190),      
    },
    fundCompareExpenseRatioContents:{
        alignContent:'flex-end',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom: scaledHeight(10),
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(20) 
    },
    fundCompareExpenseRatioTitle:{
        color:'#56565A',
        fontSize: scaledHeight(14),
        fontWeight:'bold',
        height:scaledHeight(20),  
        marginTop: scaledHeight(10),      
        textAlign:'right',           
    },
    fundCompareHeadContents:{       
        alignContent:'flex-end',
        alignItems:'flex-end',
        backgroundColor:'#E9E9E9',
        justifyContent:'flex-end' 
    },
    fundCompareImburseTitle:{
        color:'#0D7CB5',
        fontSize: scaledHeight(14),       
        height:scaledHeight(60),        
        textAlign:'right',           
    },
    fundComparePerformanceHeadContainer:{       
        backgroundColor:'#E9E9E9',
        borderBottomWidth:0.8,
        borderColor:'#7B8288',
        borderLeftWidth:0.2,
        borderRightWidth:1,
        borderTopWidth:0.2,       
        marginLeft:'6%',  
        marginTop: scaledHeight(30),
    },
    fundComparePerformanceTitle:{
        color:'#56565A',
        fontSize: scaledHeight(18),
        fontWeight:'bold',
        height:scaledHeight(60),          
        marginRight:'8%',   
        textAlign:'right',            
    },
    fundComparePriceContents:{
        alignContent:'flex-end',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom: scaledHeight(40),
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(10) 
    },
    fundComparePriceHeadContainer:{       
        backgroundColor:'#E9E9E9',
        borderBottomWidth:1,      
        borderColor:'#7B8288',
        borderLeftWidth:0.2,
        borderRightWidth:1,       
        marginLeft:'6%',         
    },
    fundComparePriceHeadTitle:{
        color:'#56565A',
        fontSize: scaledHeight(18),
        fontWeight:'bold',
        height:scaledHeight(50), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundComparePriceTitle:{
        color:'#56565A',
        fontSize: scaledHeight(14),
        fontWeight:'bold',
        height:scaledHeight(50), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundComparePriceWaiversTitle:{
        color:'#0D7CB5DE',
        fontSize: scaledHeight(14),
        fontWeight:'bold',
        height:scaledHeight(50), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundCompareRatingsContents:{
        alignContent:'flex-end',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom: scaledHeight(20),
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(15) 
    },
    fundCompareRatingsHeadTitle:{
        color:'#56565A',
        fontSize: scaledHeight(18),
        fontWeight:'bold',
        height:scaledHeight(60), 
        marginBottom:scaledHeight(10),  
        marginTop:scaledHeight(10),   
        textAlign:'right',           
    },
    fundCompareSECContents:{
        alignContent:'flex-end',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom: scaledHeight(18),
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(30) 
    },
    fundCompareText:{
        color:'#141516',
        fontSize: scaledHeight(20),
        fontWeight:'bold',   
    },    
    fundCompareTextContainer:{
        marginLeft:'4%',
        marginRight:'4%',   
        marginTop:scaledHeight(20)    
    },
    fundCompareTitle:{
        color:'#56565A',
        fontSize: scaledHeight(14),     
        fontWeight:'bold',  
        height:scaledHeight(60),         
        marginRight:'8%', 
        textAlign:'right'    
    },
    fundDetailsCategoryTitle:{
        color:'#56565A',
        fontSize: scaledHeight(14),      
        height:scaledHeight(60), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundDetailsContents:{
        color:'#56565A',
        fontSize: scaledHeight(14),            
        height:scaledHeight(60),         
        marginRight:'8%', 
        textAlign:'right'    
    },
    fundDetailsContents1:{
        color:'#56565A',
        fontSize: scaledHeight(14),      
        height:scaledHeight(50), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundDetailsExpenseRatioContents:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: scaledHeight(10),
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(20),  
    },
    fundDetailsHeadContainer:{       
        borderBottomWidth:0.8,       
        borderColor:'#7B8288',
        borderLeftWidth:0.2,
        borderRightWidth:0.8,
        borderTopWidth:0.2,        
        marginTop: scaledHeight(30),
    },
    fundDetailsHeadContents:{             
        alignItems: 'center', 
        backgroundColor:'#E9E9E9', 
        height:scaledHeight(84),  
        justifyContent: 'center',          
    },
    fundDetailsHeadContentsDesc:{             
        alignContent:'center',
        alignItems:'center',      
        justifyContent:'center',
        marginTop:scaledHeight(36),    
    },
    fundDetailsHeadTitle:{
        color:'#56565A',
        fontSize: scaledHeight(18),
        fontWeight:'bold',       
        marginLeft:'4%',       
        marginRight:'4%',
        textAlign:'center'        
    },
    fundDetailsImburseTitle:{
        color:'#56565A',
        fontSize: scaledHeight(14),       
        height:scaledHeight(60),        
        textAlign:'right',           
    },
    fundDetailsPerformanceYearContents:{
        color:'#DE3C3C',
        fontSize: scaledHeight(14),            
        height:scaledHeight(60),         
        marginRight:'8%', 
        textAlign:'right'    
    },
    fundDetailsPriceContents:{      
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: scaledHeight(40),
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(10), 
    },
    fundDetailsPriceHeadContainer:{       
        borderBottomWidth:0.8,      
        borderColor:'#7B8288',
        borderLeftWidth:0.2,
        borderRightWidth:0.8,
        borderTopWidth:0.2,       
    },
    fundDetailsRatingsContents:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: scaledHeight(20),
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(15),  
    },
    fundDetailsSECContents:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: scaledHeight(18),
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(30),  
    },
    lineBorder: {
        borderColor: '#EBEDEF',
        borderWidth: 0.6,
        marginTop: scaledHeight(10),
    },
    normalWhiteBtn: {       
        alignContent: 'center',
        alignItems: 'center',        
        backgroundColor: '#fff',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(60),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5)
    },
    normalWhiteBtnTxt: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight:'bold',
        lineHeight: 22,
        textAlign: 'center',
        width: '100%'
    },
    ratingStar:{
        height:scaledHeight(50),
        marginTop:scaledHeight(10),           
    },
    scrollViewFlex:{
        flexDirection: 'row',flexGrow: 1
    },
    scrollviewcontainer:{
         flex: .85 
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(25),
        overflow: 'hidden'
    },
    touchStyle:{
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },    
});

export default styles;