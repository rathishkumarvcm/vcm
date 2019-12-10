import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    scrollviewcontainer:{
         flex: .85 
    },
    sectionGrp: {
        overflow: 'hidden',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(25),
        flexGrow: 1
    },
    touchStyle:{
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    backtoInvestContainer:{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start' 
    },
    backToInvestpage: {
        marginTop: scaledHeight(25),
        marginBottom: scaledHeight(25),
        color: '#0D7CB5',
        fontSize: scaledHeight(16),        
    },
    fundCompareTextContainer:{
        marginTop:scaledHeight(20),
        marginLeft:'4%',   
        marginRight:'4%'    
    },
    fundCompareText:{
        color:'#141516',
        fontWeight:'bold',
        fontSize: scaledHeight(20),   
    },
    lineBorder: {
        borderWidth: 0.6,
        borderColor: '#EBEDEF',
        marginTop: scaledHeight(10),
    },
    fundComparePerformanceHeadContainer:{       
        borderRightWidth:1,
        borderLeftWidth:0.2,
        borderTopWidth:0.2,
        borderBottomWidth:0.8,
        borderColor:'#7B8288',
        backgroundColor:'#E9E9E9',       
        marginLeft:'6%',  
        marginTop: scaledHeight(30),
    },
    fundCompareHeadContents:{       
        alignContent:'flex-end',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        backgroundColor:'#E9E9E9' 
    },
    fundComparePriceContents:{
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(40),
        alignContent:'flex-end',
        justifyContent:'flex-end',
        alignItems:'flex-end' 
    },
    fundComparePerformanceTitle:{
        height:scaledHeight(60),
        color:'#56565A',
        fontWeight:'bold',
        fontSize: scaledHeight(18),          
        textAlign:'right',   
        marginRight:'8%',            
    },
    fundCompareTitle:{
        height:scaledHeight(60),
        color:'#56565A',     
        fontWeight:'bold',  
        fontSize: scaledHeight(14),         
        textAlign:'right', 
        marginRight:'8%'    
    },
    fundDetailsContents:{
        height:scaledHeight(60),
        color:'#56565A',            
        fontSize: scaledHeight(14),         
        textAlign:'right', 
        marginRight:'8%'    
    },
    fundDetailsPerformanceYearContents:{
        height:scaledHeight(60),
        color:'#DE3C3C',            
        fontSize: scaledHeight(14),         
        textAlign:'right', 
        marginRight:'8%'    
    },
    fundDetailsContents1:{
        height:scaledHeight(50),
        color:'#56565A',      
        fontSize: scaledHeight(14), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundComparePriceHeadContainer:{       
        borderRightWidth:1,
        borderLeftWidth:0.2,      
        borderBottomWidth:1,
        borderColor:'#7B8288',
        backgroundColor:'#E9E9E9',       
        marginLeft:'6%',         
    },
    fundComparePriceTitle:{
        height:scaledHeight(50),
        color:'#56565A',
        fontWeight:'bold',
        fontSize: scaledHeight(14), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundComparePriceHeadTitle:{
        height:scaledHeight(50),
        color:'#56565A',
        fontWeight:'bold',
        fontSize: scaledHeight(18), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundComparePriceWaiversTitle:{
        height:scaledHeight(50),
        color:'#0D7CB5DE',
        fontWeight:'bold',
        fontSize: scaledHeight(14), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundCompareColumnContainer:{       
        flexDirection:'row',
        borderRightWidth:1,
        borderLeftWidth:0.2,
        borderTopWidth:0.2,
        borderBottomWidth:1,
        borderColor:'#7B8288',
        backgroundColor:'#E9E9E9',
        width:'40%',
        marginLeft:'6%',  
        marginTop: scaledHeight(30),
    },    
    fundCompareContainer:{
        flexDirection:'column',
        width:scaledHeight(190),      
    },
    fundDetailsHeadContainer:{       
        borderRightWidth:0.8,       
        borderTopWidth:0.2,
        borderBottomWidth:0.8,
        borderColor:'#7B8288',        
        marginTop: scaledHeight(30),
    },
    fundDetailsPriceHeadContainer:{       
        borderRightWidth:0.8,      
        borderTopWidth:0.2,
        borderBottomWidth:0.8,
        borderColor:'#7B8288',       
    },
    fundDetailsHeadContents:{             
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor:'#E9E9E9',  
        height:scaledHeight(84),          
    },
    fundDetailsHeadContentsDesc:{             
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        marginTop:scaledHeight(36),    
    },
    fundDetailsHeadTitle:{
        color:'#56565A',
        fontWeight:'bold',
        fontSize: scaledHeight(18),       
        textAlign:'center',       
        marginRight:'4%',
        marginLeft:'4%'        
    },
    fundDetailsPriceContents:{      
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(40),
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center', 
    },
    fundCompareSECContents:{
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(30),
        marginBottom: scaledHeight(18),
        alignContent:'flex-end',
        justifyContent:'flex-end',
        alignItems:'flex-end' 
    },
    fundDetailsSECContents:{
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(30),
        marginBottom: scaledHeight(18),
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',  
    },
    fundCompareExpenseRatioContents:{
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(10),
        alignContent:'flex-end',
        justifyContent:'flex-end',
        alignItems:'flex-end' 
    },
    fundCompareExpenseRatioTitle:{
        height:scaledHeight(20),
        color:'#56565A',
        fontWeight:'bold',
        fontSize: scaledHeight(14),  
        marginTop: scaledHeight(10),      
        textAlign:'right',           
    },
    fundCompareImburseTitle:{
        height:scaledHeight(60),
        color:'#0D7CB5',       
        fontSize: scaledHeight(14),        
        textAlign:'right',           
    },
    fundDetailsImburseTitle:{
        height:scaledHeight(60),
        color:'#56565A',       
        fontSize: scaledHeight(14),        
        textAlign:'right',           
    },
    fundDetailsExpenseRatioContents:{
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(10),
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',  
    },
    fundCompareRatingsContents:{
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(15),
        marginBottom: scaledHeight(20),
        alignContent:'flex-end',
        justifyContent:'flex-end',
        alignItems:'flex-end' 
    },
    fundCompareRatingsHeadTitle:{
        height:scaledHeight(60),
        color:'#56565A',
        fontWeight:'bold',
        fontSize: scaledHeight(18), 
        marginTop:scaledHeight(10),  
        marginBottom:scaledHeight(10),   
        textAlign:'right',           
    },
    fundDetailsRatingsContents:{
        marginLeft:'2%',
        marginRight:'8%',
        marginTop: scaledHeight(15),
        marginBottom: scaledHeight(20),
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',  
    },
    fundCompareCategoryTitle:{
        height:scaledHeight(60),
        color:'#56565A',
        fontWeight:'bold',
        fontSize: scaledHeight(14), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    fundDetailsCategoryTitle:{
        height:scaledHeight(60),
        color:'#56565A',      
        fontSize: scaledHeight(14), 
        marginTop:scaledHeight(10),    
        textAlign:'right',           
    },
    ratingStar:{
        height:scaledHeight(50),
        marginTop:scaledHeight(10),           
    },
    btnGrp: {
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50),
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalWhiteBtn: {       
        borderWidth: 1,
        borderColor: "#61285F45",        
        height: scaledHeight(60),
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)
    },
    normalWhiteBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        width: '100%',
        textAlign: 'center',
        lineHeight: 22,
        fontWeight:'bold'
    },    
});
