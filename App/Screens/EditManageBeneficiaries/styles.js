import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  addPrimaryLink: {
    alignSelf: "flex-start",
    color: "#5D83AE",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    lineHeight: scaledHeight(22),
    marginTop: scaledHeight(30)
  },
  beneNameTxtStyle: {
    color: "#54565B",
    fontSize: scaledHeight(15),
    fontWeight: "400",
    lineHeight: 24,
    paddingLeft: '4%'
  },
  blockMarginTop: {
    marginTop: scaledHeight(30)
  },
  borderInternal: {
    borderBottomWidth: 1,
    borderColor: "#E2E4E5",
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10)
  },
  btnGrp: {
    alignContent: "center",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    marginHorizontal: scaledHeight(12),
    marginVertical: scaledHeight(50)
  },
  container: {
    backgroundColor: "#F9FBFC",
    flex: 1,
    width: "100%"
  },
  contentViewBlock: {
    marginTop: scaledHeight(15),
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  contentViewInternal: {
    borderColor: "#E2E4E5",
    borderRadius: scaledHeight(2),
    borderWidth: 1,
    marginBottom: scaledHeight(20),
    marginHorizontal: '4%',
    marginTop: scaledHeight(20),
    paddingBottom: "4%",
  },
  customTxtBox: {
    marginTop: scaledHeight(9),
    width: "100%"
  },
  dataAccountBeneficiary: {
    marginTop: scaledHeight(20),
    paddingRight: "8%",
    width: "90%"
  },
  disTxtStr: {
    color: "#56565A",
    fontSize: scaledHeight(17),
    fontWeight: "600",
    lineHeight: 20,
    margin: scaledHeight(15)
  },
  disclaimerTextHeading: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "800",
    lineHeight: scaledHeight(23),
    marginBottom: scaledHeight(10)
  },
  disclaimerTxt: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(23)
  },
  distributionTotalView: {
    alignSelf: "center",
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEFF0",
    borderRadius: scaledHeight(5),
    borderWidth: scaledHeight(1),
    flexDirection: "row",
    height: scaledHeight(64),
    justifyContent: "space-around",
    marginTop: scaledHeight(20),
    paddingLeft: "4%",
    paddingRight: "4%",
    width: "80%"
  },
  distributionValueTxt: {
    color: '#B5B5B5',
   //  width: scaledHeight(60),
    height: scaledHeight(40),
    fontSize: scaledHeight(10),
    borderColor: '#B5B5B5',
    textAlign: 'center',
    borderWidth: scaledHeight(1),
    paddingTop:'4%'
  },
  distributionView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: scaledHeight(15),
    marginTop: scaledHeight(10)
  },
  dropDownLayout: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: scaledHeight(18),
    paddingLeft: 0
  },
  dropdownTextInput: {
    marginLeft: 0,
    width: '100%',
  },
  enterDetailsTxt: {
    color: "#54565B",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    lineHeight: scaledHeight(24)
  },
  enterDetailsView: {
    alignSelf: 'center',
    flexDirection: "row",
    marginTop: scaledHeight(10),
    paddingRight: "4%",
    width: "80%"
  },
  errorMsg: {
    color: "red",
    fontSize: scaledHeight(12),
    marginLeft: "4%",
    textAlignVertical: "top"
  },
  flexDirectionRowStyle: {
    flexDirection: "row"
  },
  flexMainView: {
    flex: 0.85
  },
  footerView: {
    marginBottom: scaledHeight(15),
    marginTop: scaledHeight(15)
  },
  lblTxt: {
    color: "#333333DE",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    marginTop: scaledHeight(25)
  },
  line: {
    alignSelf: "center",
    backgroundColor: "#535353",
    height: scaledHeight(1),
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10),
    opacity: 0.25,
    width: "90%"
  },
  mainHeadingView: {
    marginTop: scaledHeight(20),
    paddingLeft: "4%",
    paddingRight: "4%",
    width: "100%"
  },

  manageBenificiariesHeadline: {
    color: "#54565B",
    fontSize: scaledHeight(22),
    fontWeight: "bold",
    lineHeight: scaledHeight(29),
    marginTop: scaledHeight(20)
  },
  marginStyle: {
    flexDirection: 'row',
    marginTop: scaledHeight(10)
  },
  normalBlackBtn: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#544A54",
    borderColor: "#61285F45",
    borderWidth: 1,
    height: scaledHeight(50),
    justifyContent: "center",
    marginHorizontal: scaledHeight(37),
    marginVertical: scaledHeight(7.5)
  },
  normalBlackBtnTxt: {
    color: "#fff",
    fontSize: scaledHeight(16),
    textAlign: "center",
    width: "100%"
  },
  normalWhiteBtn: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#61285F45",
    borderWidth: 1,
    height: scaledHeight(50),
    justifyContent: "center",
    marginHorizontal: scaledHeight(37),
    marginVertical: scaledHeight(7.5)
  },
  normalWhiteBtnTxt: {
    color: "#544A54",
    fontSize: scaledHeight(16),
    lineHeight: 22,
    textAlign: "center",
    width: "100%"
  },
  noteEnterDetail: {
    flexDirection: 'row',
    marginTop: scaledHeight(10)
  },
  noteIconView: {
    marginTop: scaledHeight(5),
    paddingRight: "6%"
  },
  optionalTxt: {
    color: "rgba(51, 51, 51, 0.87)",
    fontSize: scaledHeight(16),
    fontWeight: "normal"
  },
  paddingHorizontalStyle: {
    paddingLeft: "4%",
    paddingRight: "4%",
    width: '100%'
  },
  paddingHorizontalView: {
    paddingLeft: "4%",
    paddingRight: '4%'
  },
  paddingStyleLeft: {
    paddingLeft: "4%"
  },
  shortContentText: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
    marginTop: scaledHeight(3),

  },
  shortContentValueText: {
    color: "#54565B",
    fontSize: scaledHeight(15),
    fontWeight: "400",
    lineHeight: 24
  },
  sliderView: {
    width: scaledHeight(250)
  },
  subHeading: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    lineHeight: scaledHeight(24),
    marginTop: scaledHeight(20)
  },
  titleHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    paddingRight: '4%'
  },
  titleHeadingView: {
    flexDirection: "row",
    paddingLeft: "4%"
  },
  totalDisView: {
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
    borderWidth: scaledHeight(1),
    marginTop: scaledHeight(30),
    width: '90%'
  },
  totalDistributionTxt: {
    color: "#56565A",
    fontSize: scaledHeight(22),
    fontWeight: "600",
    lineHeight: 27,
    margin: scaledHeight(15)
  }
});

export default styles;