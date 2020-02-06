import { StyleSheet } from 'react-native';
import { scaledWidth,scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    scrollViewFlex:{
        flex: 0.85 
    },
    filterFundsBtn: {
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: "#61285F45",        
        borderWidth: 1,
        height: scaledHeight(60),      
        justifyContent: 'center',
        marginTop: scaledHeight(25),
        paddingHorizontal: scaledHeight(25),
        width: '50%',
        marginBottom:scaledHeight(20),
        alignSelf:'center'
    },
    filterFundsBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        marginBottom: scaledHeight(40),
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(40),
        paddingBottom: scaledHeight(15),
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: scaledHeight(15),
    },
    modalTitleView: {
        flexDirection: 'row',
    },
    modalTitleText: {
        color: '#56565A',
        fontSize: scaledHeight(26),
        fontWeight: 'bold',
        marginLeft: '2%',
        marginTop: scaledHeight(8),
        width: '85%'
    },
    modalMinCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10)
    },
    modalMinInvestTitleText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(16),
        marginTop: scaledHeight(18),
    },
    modalCheckBoxLabel: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(18),

    },
    financialTextLabel: {
        color: '#333333DE', fontSize: scaledHeight(18), fontWeight: 'bold', marginBottom: '4%'
    },
    fundItemStyle: {
        backgroundColor: "#FFFFFF",
        borderColor: "#9DB4CE",
        borderWidth: scaledHeight(1),
        marginBottom: "4%",
        padding:"2%",
        width: "100%"
      },
      moneyTitleView:{
        flexDirection: 'row', flex: 1,  padding: scaledHeight(20),backgroundColor:'#E9E9E9',marginBottom:scaledHeight(10)
      },
      moneyTitleText:{
            fontSize:scaledHeight(20),
            color: "#54565B",
            fontWeight: "bold",
      },
      fundItemTopView:
  { flexDirection: 'row', flex: 1,  padding: scaledHeight(10) },//borderBottomColor: '#61285F45', borderBottomWidth: 1,
  fundItemTitle:
{flex:0.5},
fundItemHeaderTxt: {
    color: "#54565B",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
  },
  fundItemHeaderRight: {
    color: "#54565B",
    fontSize: scaledHeight(15),
    fontWeight: "bold",
  },
  lineStyle: {
    backgroundColor: "#9DB4CE",
    height: scaledHeight(1),
    marginBottom: "4%",
    opacity: 1,
    width: "100%"
  },
  marginBottomStyle: {
    marginBottom: "4%",
    flex:0.5
  },
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
   { marginLeft: scaledHeight(10), marginRight: scaledHeight(10) },
   modalActionContainer: {
    flexDirection: 'row',
    marginBottom: scaledHeight(50),
    marginTop: scaledHeight(20)
},
modalClearFilterBtn: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: scaledHeight(60),
    justifyContent: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: scaledHeight(25),
    paddingLeft: '2%',
    width: scaledWidth(140)
},
modalCancelBtnTxt: {
    color: '#5D83AE',
    fontSize: scaledHeight(18),
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%'
},
modalApplyFilterBtn: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5D83AE',
    height: scaledHeight(60),
    justifyContent: 'center',
    marginLeft: '2%',
    marginTop: scaledHeight(25),
    width: scaledWidth(140),
},
modalApplyBtnTxt: {
    color: '#FFFFFF',
    fontSize: scaledHeight(18),
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%'
},
});

export default styles;