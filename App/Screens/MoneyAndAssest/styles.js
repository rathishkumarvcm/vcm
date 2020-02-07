import { StyleSheet } from 'react-native';
import { scaledWidth, scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    filterFundsBtn: {
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(60),
        justifyContent: 'center',
        marginBottom: scaledHeight(20),
        marginTop: scaledHeight(25),
        paddingHorizontal: scaledHeight(25),
        width: '50%'
    },
    filterFundsBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    financialTextLabel: {
        color: '#333333DE', 
        fontSize: scaledHeight(18), 
        fontWeight: 'bold', 
        marginBottom: '4%'
    },
    fundItemHeaderRight: {
        color: "#54565B",
        fontSize: scaledHeight(15),
        fontWeight: "bold",
    },
    fundItemHeaderTxt: {
        color: "#54565B",
        fontSize: scaledHeight(18),
        fontWeight: "bold",
    },
    fundItemStyle: {
        backgroundColor: "#FFFFFF",
        borderColor: "#9DB4CE",
        borderWidth: scaledHeight(1),
        marginBottom: "4%",
        padding: "2%",
        width: "100%"
    },
    fundItemTitle:
        { flex: 0.5 },
    fundItemTopView:
        { flexDirection: 'row', 
        flex: 1, 
        padding: scaledHeight(10) },
    fundItemValueHeading: {
        color: "#56565A",
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight: scaledHeight(19)
    },
    fundItemValueTxt: {
        color: "#56565A",
        fontSize: scaledHeight(14),
        fontWeight: "400",
        lineHeight: scaledHeight(17)
    },
    headerView:
        { marginLeft: scaledHeight(10), 
            marginRight: scaledHeight(10) },
    leftContainer:{
        marginTop: scaledHeight(18),
        width:'40%',
    },
    lineStyle: {
        backgroundColor: "#9DB4CE",
        height: scaledHeight(1),
        marginBottom: "4%",
        opacity: 1,
        width: "100%"
    },
    marginBottomStyle: {
        flex: 0.5,
        marginBottom: "4%"
    },
    modalActionContainer: {
        bottom:20,
        flexDirection: 'row',
        position:'absolute',
        width:'100%'
    },
    modalApplyBtnTxt: {
        color: '#FFFFFF',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%'
    },
    modalApplyFilterBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#486d90',
        height: scaledHeight(50),
        justifyContent: 'center',
        width: '50%',
    },
    modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
       
    },
    modalCancelBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%'
    },

    
    modalCheckBoxLabel: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },

    modalCheckBoxSelected: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    modalClearFilterBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor:'#486d90',
        borderWidth:1,
        height: scaledHeight(50),
        justifyContent: 'center',
        width: '50%',
    },

    modalContainer: {
        backgroundColor: '#FFFFFF',
        bottom:0,
        height:'50%',
        paddingBottom: scaledHeight(15),
        position:'absolute',
        width:'100%',
        
    },
    modalMinCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10),
        
    },

    modalMinInvestTitleSelected: {
        color: '#486d90',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(16),
    },

    modalMinInvestTitleText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(16),
    },

    modalTitleText: {
        color: '#fff',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        width: '85%'
    },
    modalTitleView: {
        alignItems:'flex-end',
        marginTop:scaledHeight(10),
        width:'100%'
    },
    moneyTitleText: {
        color: "#fff",
        fontSize: scaledHeight(20),
        fontWeight: "bold",
        paddingLeft:scaledWidth(10),
        width:'85%'
    },
    moneyTitleView: {
        backgroundColor: '#486d90', 
        flexDirection: 'row',
        marginBottom: scaledHeight(10),
        paddingBottom: scaledHeight(15), 
        paddingTop: scaledHeight(15),
        width:'100%',
    },
    rightContainer:{
        marginTop: scaledHeight(18),
        width:'60%',
    },
    scrollViewFlex: {
        flex: 0.85
    },
    viewContainer:{
        flexDirection:'row',
        paddingLeft: '4%',
        paddingRight: '4%',
        width:'100%',
    },
});

export default styles;