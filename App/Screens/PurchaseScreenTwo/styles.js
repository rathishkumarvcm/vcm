import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  amountBox: {
    width: '90%'
  },
  btnGrp: {
    alignContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: scaledHeight(12),
    marginVertical: scaledHeight(50),
  },
  compareFundsBtn: {
    alignContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#61285F45",
    borderWidth: 1,
    height: scaledHeight(55),
    justifyContent: "center",
    marginBottom: scaledHeight(5),
    marginTop: scaledHeight(15),
    paddingHorizontal: scaledHeight(25),
    width: "72%"
  },
  compareFundsBtnTxt: {
    color: "#5D83AE",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    textAlign: "center"
  },
  container: {
    backgroundColor: "#F7FAFF",
    flex: 1,

    width: "100%"
  },
  contentView: {
    flexGrow: 1
  },
  dollerIconTxt: {
    color: '#56565A',
    fontSize: scaledHeight(16)
  },
  dropDownLayout: {
    marginLeft: "0%",
    marginRight: "0%",
    width: "100%",
  },
  dropDownTextName: {
    color: "rgba(51, 51, 51, 0.87)",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    marginLeft: "0%",
    marginRight: "0%",
    marginTop: scaledHeight(0),
    paddingLeft: "0%",
    paddingRight: "0%",
    width: "100%"
  },
  errMsg: {
    color: "red",
    fontSize: scaledHeight(12),
    marginVertical: scaledHeight(12)
  },
  existingFundStyle: {
    borderColor: "#B8B8B8",
    borderRadius: scaledHeight(2),
    borderWidth: scaledHeight(1),
    color: "#656568",
    fontSize: scaledHeight(10),
    fontWeight: "400",
    height: scaledHeight(15),
    marginBottom: "2%",
    marginTop: "4%",
    padding: "2%",
    width: "30%"
  },
  filterFundsBtn: {
    alignContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#61285F45",
    borderWidth: 1,
    height: scaledHeight(55),
    justifyContent: "center",
    marginTop: scaledHeight(20),
    paddingHorizontal: scaledHeight(25),
    width: "50%",
  },
  filterFundsBtnTxt: {
    color: "#5D83AE",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    textAlign: "center"
  },
  flexDirectionStyle: {
    flexDirection: "row",
    marginBottom: "4%"
  },
  fundInvestTitle: {
    color: "#333333DE",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    lineHeight: scaledHeight(19),
  },
  fundInvestValue: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "400",
    lineHeight: scaledHeight(22)
  },
  fundInvestView: {
    borderColor: "#70707080",
    borderWidth: scaledHeight(1),
    marginTop: "2%",
    paddingHorizontal: "4%",
    paddingVertical: "4%"
  },
  fundItemContntView: {
    margin: "4%"
  },
  fundItemHeaderTxt: {
    color: "#54565B",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
  },
  fundItemHeaderView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: "4%"
  },
  fundItemStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "#9DB4CE",
    borderWidth: scaledHeight(1),
    marginBottom: "4%"
  },
  fundItemStyleSelected: {
    backgroundColor: "#FFFFFF",
    borderColor: "#B5E198",
    borderWidth: scaledHeight(3),
    marginBottom: "4%"
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
    lineHeight: scaledHeight(17),
    marginTop: scaledHeight(5)
  },
  fundListGrp: {
    marginTop: scaledHeight(27)
  },
  fundSourceContent: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: "4%",
    width: "90%",
  },
  headerText: {
    color: "#56565A",
    fontSize: scaledHeight(20),
    fontWeight: "bold",
    marginTop: scaledHeight(15)
  },
  headerTextView: {
    marginLeft: '4%',
    marginRight: '4%'
  },
  helpText: {
    color: '#56565A',
    fontSize: scaledHeight(12),
    marginTop: scaledHeight(12),
    textAlign: 'right',
    width: '100%',
  },
  iconFrontStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaledHeight(7)
  },
  innerContainerStyle: {
    marginTop: "4%",
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  line: {
    backgroundColor: "#535353",
    height: scaledHeight(1),
    marginBottom: "4%",
    marginRight: "4%",
    marginTop: "4%",
    opacity: 0.25,
    width: "100%",
  },
  lineStyle: {
    backgroundColor: "#9DB4CE",
    height: scaledHeight(1),
    marginBottom: "4%",
    opacity: 1,
    width: "100%",
  },
  loadMoreStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: scaledHeight(15)
  },
  mainFlex: {
    flex: 0.85
  },
  marginBottomStyle: {
    marginBottom: "4%"
  },
  marginTopStyle: {
    marginTop: scaledHeight(15)
  },
  modalActionContainer: {
    flexDirection: "row",
    marginBottom: scaledHeight(50),
    marginTop: scaledHeight(20)
  },
  modalApplyBtnTxt: {
    color: "#FFFFFF",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    width: "100%",
  },
  modalApplyFilterBtn: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#5D83AE",
    height: scaledHeight(60),
    justifyContent: "center",
    marginLeft: "2%",
    marginTop: scaledHeight(25),
    width: scaledWidth(140),
  },
  modalBackgroundView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%"
  },
  modalCancelBtnTxt: {
    color: "#5D83AE",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
  },
  modalCheckBoxLabel: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    marginBottom: scaledHeight(18)
  },
  modalClearFilterBtn: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: scaledHeight(60),
    justifyContent: "center",
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: scaledHeight(25),
    paddingLeft: "2%",
    width: scaledWidth(140),
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    marginBottom: scaledHeight(40),
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: scaledHeight(40),
    paddingBottom: scaledHeight(15),
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingTop: scaledHeight(15)
  },
  modalFundCheckBoxContainer: {
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: scaledHeight(20)
  },
  modalMinCheckBoxContainer: {
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: scaledHeight(10)
  },
  modalMinInvestTitleText: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    marginBottom: scaledHeight(16),
    marginTop: scaledHeight(18)
  },
  modalRiskCheckBoxContainer: {
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: scaledHeight(20)
  },
  modalRiskViewContainer: {
    flexDirection: "row",
    width: "80%"
  },
  modalTitleText: {
    color: "#56565A",
    fontSize: scaledHeight(26),
    fontWeight: "bold",
    marginLeft: "2%",
    marginTop: scaledHeight(8),
    width: "85%"
  },
  modalTitleView: {
    flexDirection: "row"
  },
  normalBlackBtnDisabledTxt: {
    color: '#fff',
    fontSize: scaledHeight(16),
    textAlign: 'center',
    width: '100%'
  },
  normalBlackBtn: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#544A54',
    borderColor: "#61285F45",
    borderWidth: 1,
    height: scaledHeight(50),
    justifyContent: 'center',
    marginHorizontal: scaledHeight(37),
    marginVertical: scaledHeight(7.5)
  },
  normalBlackBtnTxt: {
    color: '#fff',
    fontSize: scaledHeight(16),
    textAlign: 'center',
    width: '100%'
  },
  normalBlackDisabledBtn: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#544A54',
    borderColor: "#61285F45",
    borderWidth: 1,
    height: scaledHeight(50),
    justifyContent: 'center',
    marginHorizontal: scaledHeight(37),
    marginVertical: scaledHeight(7.5),
    opacity: 0.5,
  },
  normalWhiteBtn: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: "#61285F45",
    borderWidth: 1,
    height: scaledHeight(50),
    justifyContent: 'center',
    marginHorizontal: scaledHeight(37),
    marginVertical: scaledHeight(7.5)
  },
  normalWhiteBtnTxt: {
    color: '#544A54',
    fontSize: scaledHeight(16),
    lineHeight: 22,
    textAlign: 'center',
    width: '100%'
  },
  noteTextStyle: {
    color: "#56565A",
    fontSize: scaledHeight(13),
    fontWeight: "400",
    lineHeight: scaledHeight(19),
    marginTop: scaledHeight(5)
  },
  removeBtnStyle: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: scaledHeight(22)
  },
  removeTxtStyle: {
    color: '#5D83AE',
    fontSize: scaledHeight(16),
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'right',
    width: '100%'
  },
  stmtTxtStyle: {
    color: "#333333DE",
    fontSize: scaledHeight(18),
    width: "92%"
  },
  textInputStyle: {
    marginLeft: "0%",
    marginRight: "0%",
    marginTop: scaledHeight(0),
    width: "100%",
  },
  titleHeaderTextStyle: {
    color: '#56565A',
    fontSize: scaledHeight(24),
    fontWeight: 'bold'
  },
  topContainer: {
    borderColor: "#9DB4CE",
    borderWidth: scaledHeight(1),
    marginLeft: "4%",
    marginRight: "4%",
    paddingLeft: "4%",
    paddingRight: "4%",
    width: "90%"
  },
  topContainerTxtBold: {
    color: "#54565B",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    marginTop: "4%"
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: "space-between"
  }
});

export default styles;