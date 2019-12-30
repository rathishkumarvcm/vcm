import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    width: "100%"
  },
  mainHeadingView: {
    width: "100%",
    marginTop: scaledHeight(20),
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  manageBenificiariesHeadline: {
    color: "#54565B",
    fontWeight: "bold",
    fontSize: scaledHeight(22),
    marginTop: scaledHeight(20),
    lineHeight: scaledHeight(29)
  },
  borderInternal: {
    marginTop: scaledHeight(10),
    marginBottom: scaledHeight(10),
    borderBottomWidth: 1,
    borderColor: "#E2E4E5"
  },
  contentViewInternal: {
    marginTop: scaledHeight(20),
    marginBottom: scaledHeight(20),
    paddingBottom: "4%",
    borderRadius: scaledHeight(2),
    borderWidth: 1,
    marginHorizontal: '4%',
    borderColor: "#E2E4E5",
  },
  blockMarginTop: {
    marginTop: scaledHeight(30)
  },
  enterDetailsView: {
    width: "80%",
    paddingRight: "4%",
    flexDirection: "row",
    marginTop: scaledHeight(10),
    alignSelf: 'center'
  },
  paddingHorizontalView: {
    paddingLeft: "4%",
    paddingRight: '4%'
  },
  dataAccountBeneficiary: {
    marginTop: scaledHeight(20),
    paddingRight: "8%",
    width: "90%"
  },
  noteIconView: {
    paddingRight: "6%",
    marginTop: scaledHeight(5)
  },
  enterDetailsTxt: {
    fontSize: scaledHeight(18),
    lineHeight: scaledHeight(24),
    color: "#54565B",
    fontWeight: "bold"
  },
  noteEnterDetail: {
    marginTop: scaledHeight(10)
  },
  flexDirectionRowStyle: {
    flexDirection: "row"
  },
  contentViewBlock: {
    paddingLeft: "8%",
    paddingRight: "8%",
    marginTop: scaledHeight(15)
  },
  addPrimaryLink: {
    color: "#5D83AE",
    marginTop: scaledHeight(30),
    alignSelf: "flex-start",
    fontWeight: "600",
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(22)
  },
  subHeading: {
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(24),
    color: "#56565A",
    marginTop: scaledHeight(20),
    fontWeight: "600"
  },
  distributionTotalView: {
    height: scaledHeight(64),
    marginTop: scaledHeight(20),
    width: "80%",
    flexDirection: "row",
    borderColor: "#EEEFF0",
    backgroundColor: "#EEEEEE",
    borderWidth: scaledHeight(1),
    paddingLeft: "4%",
    paddingRight: "4%",
    alignSelf: "center",
    justifyContent: "space-around",
    borderRadius: scaledHeight(5)
  },
  lblTxt: {
    color: "#333333DE",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    marginTop: scaledHeight(25)
  },
  customTxtBox: {
    marginTop: scaledHeight(9),
    width: "100%"
  },
  optionalTxt: {
    color: "rgba(51, 51, 51, 0.87)",
    fontSize: scaledHeight(16),
    fontWeight: "normal"
  },
  btnGrp: {
    marginHorizontal: scaledHeight(12),
    marginVertical: scaledHeight(50),
    flexGrow: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  normalWhiteBtn: {
    borderWidth: 1,
    borderColor: "#61285F45",
    height: scaledHeight(50),
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: scaledHeight(7.5),
    marginHorizontal: scaledHeight(37)
  },
  normalWhiteBtnTxt: {
    fontSize: scaledHeight(16),
    color: "#544A54",
    width: "100%",
    textAlign: "center",
    lineHeight: 22
  },
  normalBlackBtn: {
    borderWidth: 1,
    borderColor: "#61285F45",
    height: scaledHeight(50),
    backgroundColor: "#544A54",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: scaledHeight(7.5),
    marginHorizontal: scaledHeight(37)
  },
  normalBlackBtnTxt: {
    fontSize: scaledHeight(16),
    color: "#fff",
    width: "100%",
    textAlign: "center"
  },
  disclaimerTextHeading: {
    fontSize: scaledHeight(16),
    marginBottom: scaledHeight(10),
    fontWeight: "800",
    color: "#56565A",
    lineHeight: scaledHeight(23)
  },
  disclaimerTxt: {
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(23),
    color: "#56565A"
  },

  errorMsg: {
    fontSize: scaledHeight(12),
    marginLeft: "4%",
    color: "red",
    textAlignVertical: "top"
  },
  paddingStyleLeft: {
    paddingLeft: "4%"
  },
  paddingHorizontalStyle: {
    paddingLeft: "4%",
    paddingRight: "4%",
    width: '100%'
  },
  marginStyle: {
    marginTop: scaledHeight(10)
  },
  flexMainView: {
    flex: 0.85
  },
  footerView: {
    marginTop: scaledHeight(15),
    marginBottom: scaledHeight(15)
  },
  titleHeadingView: {
    flexDirection: "row",
    paddingLeft: "4%"
  },
  titleHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    paddingRight: '4%'
  },
  line: {
    backgroundColor: "#535353",
    opacity: 0.25,
    height: scaledHeight(1),
    width: "90%",
    alignSelf: "center",
    marginTop: scaledHeight(10),
    marginBottom: scaledHeight(10)
  },
  shortContentText: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
    marginTop: scaledHeight(3),

  },
  shortContentValueText: {
    color: "#54565B",
    fontWeight: "400",
    fontSize: scaledHeight(15),
    lineHeight: 24
  },
  distributionView: {
    width: '100%',
    justifyContent: 'space-between'
  },
  dropdownTextInput: {
    width: '100%',
    marginLeft: 0
  },
  dropDownLayout: {
    marginTop: scaledHeight(18),
    paddingLeft: 0
  },
  distributionValueTxt: {
    color: '#B5B5B5',
    fontSize: scaledHeight(10),
    borderColor: '#B5B5B5',
    borderWidth: scaledHeight(1),
    padding: '4%'
  },
  sliderView: {
    width: '80%'
  },
  totalDisView: {
    marginTop: scaledHeight(30),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
    borderWidth: scaledHeight(1)
  },
  disTxtStr: {
    margin: scaledHeight(15),
    color: "#56565A",
    fontWeight: "600",
    fontSize: scaledHeight(17),
    lineHeight: 20
  },
  totalDistributionTxt: {
    margin: scaledHeight(15),
    color: "#56565A",
    fontWeight: "600",
    fontSize: scaledHeight(22),
    lineHeight: 27
  }
});

export default styles;