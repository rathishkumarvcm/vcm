import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFF",
    width: "100%"
  },
  mainFlex: {
    flex: 0.85
  },
  innerContainerStyle: {
    marginTop: "4%",
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  headerText: {
    color: "#56565A",
    fontSize: scaledHeight(20),
    fontWeight: "bold",
    //marginTop: scaledHeight(15)
  },
  marginTopStyle: {
    marginTop: "4%"
  },
  stmtTxtStyle: {
    color: "#333333DE",
    fontSize: scaledHeight(18),
    width: "92%"
  },
  contentView: {
    flexGrow: 1
  },
  filterFundsBtn: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#61285F45",
    height: scaledHeight(55),
    backgroundColor: "#FFFFFF",
    alignContent: "center",
    justifyContent: "center",
    marginTop: scaledHeight(20),
    paddingHorizontal: scaledHeight(25)
  },
  filterFundsBtnTxt: {
    fontSize: scaledHeight(16),
    color: "#5D83AE",
    fontWeight: "bold",
    textAlign: "center"
  },
  compareFundsBtn: {
    width: "72%",
    borderWidth: 1,
    borderColor: "#61285F45",
    height: scaledHeight(55),
    backgroundColor: "#FFFFFF",
    alignContent: "center",
    justifyContent: "center",
    marginTop: scaledHeight(15),
    marginBottom: scaledHeight(5),
    paddingHorizontal: scaledHeight(25)
  },
  compareFundsBtnTxt: {
    fontSize: scaledHeight(16),
    color: "#5D83AE",
    fontWeight: "bold",
    textAlign: "center"
  },
  fundListGrp: {
    marginTop: scaledHeight(27)
  },
  fundItemStyle: {
    borderColor: "#9DB4CE",
    borderWidth: scaledHeight(1),
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginBottom: "4%"
  },
  fundItemStyleSelected: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginBottom: "4%",
    borderColor: "#B5E198",
    borderWidth: scaledHeight(3)
  },
  fundItemHeaderView: {
    margin: "4%"
  },
  lineStyle: {
    backgroundColor: "#9DB4CE",
    height: scaledHeight(1),
    width: "100%",
    marginBottom: "4%",
    opacity: 1
  },
  fundItemHeaderTxt: {
    fontSize: scaledHeight(18),
    color: "#54565B",
    fontWeight: "bold"
  },
  fundItemContntView: {
    margin: "4%"
  },
  fundItemValueHeading: {
    fontSize: scaledHeight(14),
    color: "#56565A",
    lineHeight: scaledHeight(19),
    fontWeight: "bold"
  },
  fundItemValueTxt: {
    fontSize: scaledHeight(14),
    color: "#56565A",
    lineHeight: scaledHeight(17),
    fontWeight: "400"
  },
  existingFundStyle: {
    borderColor: "#B8B8B8",
    borderWidth: scaledHeight(1),
    color: "#656568",
    borderRadius: scaledHeight(2),
    padding: "2%",
    fontSize: scaledHeight(10),
    fontWeight: "400",
    marginBottom: "2%",
    marginTop: "4%",
    height: scaledHeight(15),
    width: "30%"
  },
  line: {
    backgroundColor: "#535353",
    opacity: 0.25,
    height: scaledHeight(1),
    width: "100%",
    marginTop: "4%",
    marginRight: "4%",
    marginBottom: "4%"
  },
  marginBottomStyle: {
    marginBottom: "4%"
  },
  fundInvestView: {
    marginTop: "2%",
    borderColor: "#70707080",
    borderWidth: scaledHeight(1),
    paddingHorizontal: "4%",
    paddingVertical: "4%"
  },
  fundInvestTitle: {
    fontSize: scaledHeight(16),
    color: "#333333DE",
    lineHeight: scaledHeight(19),
    fontWeight: "bold"
  },
  fundInvestValue: {
    fontSize: scaledHeight(16),
    color: "#56565A",
    lineHeight: scaledHeight(22),
    fontWeight: "400"
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  topContainer: {
    marginLeft: "4%",
    marginRight: "4%",
    width: "90%",
    borderColor: "#9DB4CE",
    borderWidth: scaledHeight(1),
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  topContainerTxtBold: {
    color: "#54565B",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    marginTop: "4%"
  },
  flexDirectionStyle: {
    flexDirection: "row",
    marginBottom: "4%"
  },
  fundSourceContent: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    width: "90%",
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: "4%"
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
    height: scaledHeight(50),
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
    lineHeight: 22
  },
  normalBlackBtn: {
    borderWidth: 1,
    borderColor: "#61285F45",
    height: scaledHeight(50),
    backgroundColor: '#544A54',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: scaledHeight(7.5),
    marginHorizontal: scaledHeight(37)


  },
  normalBlackBtnTxt: {
    fontSize: scaledHeight(16),
    color: '#fff',
    width: '100%',
    textAlign: 'center'
  },
  marginTopStyle: {
    marginTop: scaledHeight(15)
  },
  normalBlackDisabledBtn: {
    borderWidth: 1,
    opacity: 0.5,
    borderColor: "#61285F45",
    height: scaledHeight(50),
    backgroundColor: '#544A54',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: scaledHeight(7.5),
    marginHorizontal: scaledHeight(37)
  },
  normalBlackBtnDisabledTxt: {
    fontSize: scaledHeight(16),
    color: '#fff',
    width: '100%',
    textAlign: 'center'
  },
  nextBtn: {
    height: scaledHeight(50),
    borderColor: "#61285F45",
    borderWidth: scaledHeight(1),
    backgroundColor: "#544A54",
    justifyContent: "center",
    alignItems: "center",
    marginTop: scaledHeight(19)
  },
  nextBtnDisable: {
    height: scaledHeight(50),
    borderColor: "#544A54",
    borderWidth: scaledHeight(1),
    backgroundColor: "#544A54",
    justifyContent: "center",
    alignItems: "center",
    marginTop: scaledHeight(19),
    opacity: 0.5
  },

  offButtonStyle: {
    borderColor: '#56565A',
    borderRadius: 30,
    height: scaledHeight(60),
    borderWidth: scaledHeight(1),
    width: "50%",
    backgroundColor: '#B7B7B7',
  },
  onButtonStyleDisable: {
    borderColor: '#56565A',
    borderRadius: 30,
    height: scaledHeight(60),
    borderWidth: 1,
    marginLeft: "10%",
    width: "67%",
    backgroundColor: '#FFFFFF',
  },
  offButtonStyleDisable: {
    borderColor: '#56565A',
    borderRadius: 30,
    height: scaledHeight(60),
    borderWidth: scaledHeight(1),
    width: "60%",
    marginLeft: "0%",
    backgroundColor: '#FFFFFF',
  },
  onButtonStyle: {
    borderColor: '#56565A',
    borderRadius: 30,
    height: scaledHeight(60),
    borderWidth: scaledHeight(1),
    width: "40%",
    marginLeft: "30%",
    backgroundColor: '#B7B7B7',
  },
  TextOnStyle: {
    color: '#56565A',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: '30%',
    paddingLeft: "10%"
  },
  TextOffStyle: {
    color: '#544A54',
    opacity: 0.5,
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: "8%"
  },
  TextOffStyleBold: {
    color: '#544A54',
    opacity: 0.5,
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: "3%"
  },
  switchContainer: {
    width: '90%',
    marginTop: scaledHeight(20),
  },
  switchTextStyle: {
    justifyContent: 'space-around',
    marginTop: '2%',
    marginHorizontal: '2%',
    flexDirection: 'row'
  },
  switchTxt: {
    color: '#54565B',
    fontSize: scaledHeight(13),
    fontWeight: '400'
  },
  stmtTxtStyle: {
    color: "#333333DE",
    fontSize: scaledHeight(18),
    width: "92%",
    marginTop: '2%'
},
stmtSmallTextStyle: {
    color: "#54565B",
    fontSize: scaledHeight(15),
    width: "92%",
    marginTop: '2%',
},
stmtBoldTxtStyle: {
    color: "#54565B",
    fontSize: scaledHeight(18),
    width: "92%",
    marginTop: '2%',
    fontWeight: 'bold'
},
  dropDownLayout: {
    width: "100%",
    marginLeft: "0%",
    marginRight: "0%",
  },
  dropDownTextName: {
    width: "100%",
    paddingLeft: "0%",
    paddingRight: "0%",
    marginLeft: "0%",
    marginRight: "0%",
    color: "rgba(51, 51, 51, 0.87)",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    marginTop: scaledHeight(0)
  },
  textInputStyle: {
    width: "100%",
    marginLeft: "0%",
    marginRight: "0%",
    marginTop: scaledHeight(0)
  },
  dropDownPostition: {
    width: "100%",
    marginLeft: scaledHeight(20),
    marginRight: scaledHeight(20),
    position: "absolute",
    left: 0
  },
  errMsg: {
    color: "red",
    fontSize: scaledHeight(12),
    marginVertical: scaledHeight(12)
  },

  modalBackgroundView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%"
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    marginLeft: "5%",
    marginRight: "5%",
    paddingRight: "4%",
    paddingLeft: "4%",
    paddingTop: scaledHeight(15),
    paddingBottom: scaledHeight(15),
    marginTop: scaledHeight(40),
    marginBottom: scaledHeight(40)
  },
  modalTitleView: {
    flexDirection: "row"
  },
  modalTitleText: {
    marginLeft: "2%",
    fontSize: scaledHeight(26),
    marginTop: scaledHeight(8),
    fontWeight: "bold",
    color: "#56565A",
    width: "85%"
  },
  modalMinInvestTitleText: {
    fontSize: scaledHeight(16),
    marginTop: scaledHeight(18),
    marginBottom: scaledHeight(16),
    fontWeight: "bold",
    color: "#56565A"
  },
  modalCheckBoxLabel: {
    fontSize: scaledHeight(16),
    marginBottom: scaledHeight(18),
    color: "#56565A"
  },
  modalMinCheckBoxContainer: {
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: scaledHeight(10)
  },
  modalRiskCheckBoxContainer: {
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: scaledHeight(20)
  },
  modalFundCheckBoxContainer: {
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: scaledHeight(20)
  },
  modalActionContainer: {
    flexDirection: "row",
    marginTop: scaledHeight(20),
    marginBottom: scaledHeight(50)
  },
  modalClearFilterBtn: {
    width: scaledWidth(140),
    height: scaledHeight(60),
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: scaledHeight(25),
    marginLeft: "2%",
    marginRight: "2%",
    paddingLeft: "2%"
  },
  modalApplyFilterBtn: {
    width: scaledWidth(140),
    height: scaledHeight(60),
    backgroundColor: "#5D83AE",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: scaledHeight(25),
    marginLeft: "2%"
  },
  modalCancelBtnTxt: {
    fontSize: scaledHeight(18),
    color: "#5D83AE",
    fontWeight: "bold",
    width: "100%",
    textAlign: "left"
  },
  modalApplyBtnTxt: {
    fontSize: scaledHeight(18),
    color: "#FFFFFF",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase"
  },
  modalRiskViewContainer: {
    flexDirection: "row",
    width: "80%"
  },
  removeBtnStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: scaledHeight(22)
  },
  removeTxtStyle: {
    fontSize: scaledHeight(16),
    color: '#5D83AE',
    fontWeight: '600',
    width: '100%',
    textAlign: 'right',
    lineHeight: 22
  },
  loadMoreStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    margin: scaledHeight(15)
  },
  iconFrontStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaledHeight(7)
  },
  dollerIconTxt: {
    color: '#56565A',
    fontSize: scaledHeight(16)
  },
  helpText: {
    textAlign: 'right',
    width: '100%',
    color: '#56565A',
    fontSize: scaledHeight(12),
    marginTop: scaledHeight(12)
  },
  amountBox: {
    width: '90%'
  }
});

export default styles;