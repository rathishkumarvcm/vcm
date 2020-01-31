import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  addBtn: {
    marginBottom: scaledHeight(5),
    paddingRight: '4%'
  },
  blockMarginTop: {
    marginTop: scaledHeight(25)
  },
  btnGrp: {
    alignContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: scaledHeight(12),
    marginVertical: scaledHeight(50),
  },
  contactUsLink: {
    color: "#0000FF",
    fontSize: scaledHeight(15),
    textDecorationLine: "underline"
  },
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    width: "100%"
  },
  containerHeaderText: {
    color: "#54565B",
    fontSize: scaledHeight(12),
    fontWeight: "400",
    paddingLeft: '4%',
    marginBottom: scaledHeight(8),
    marginTop: scaledHeight(8)
  },
  containerHeaderView: {
    backgroundColor: "#ECECEC",
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    marginBottom: scaledHeight(5),
    paddingTop: "2%",
    paddingLeft: '4%'
  },
  containerView: {
    alignSelf: "center",
    backgroundColor: "#ECECEC",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    marginBottom: scaledHeight(15),
    width: "90%",
  },
  contentText: {
    color: "#56565A",
    fontSize: scaledHeight(15)
  },
  customCityView: {
    marginTop: scaledHeight(9),
    width: '50%',
  },
  customCompTxtBox: {
    marginTop: scaledHeight(9),
    width: '85%',
  },
  customStateView: {
    marginTop: scaledHeight(9),
    width: '40%',
  },
  customTxtBox: {
    marginTop: scaledHeight(9),
    width: '100%',
  },
  circleView: {
    alignItems: 'center',
    borderColor: "#DEDEDF",
    borderWidth: scaledHeight(1),
    borderRadius: scaledHeight(25),
    height: scaledHeight(30),
    marginTop: scaledHeight(15),
    marginLeft: '4%',
    paddingTop: '1%',
    width: scaledHeight(30),
  },
  dateStyle: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  disclaimerTextHeading: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "800",
    marginBottom: scaledHeight(10),
    lineHeight: scaledHeight(23)
  },
  disclaimerTxt: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(23),
  },
  dropDownLayout: {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
  },
  dropdownTextInput: {
    marginLeft: 0,
    width: '100%',
  },
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(15),
    fontWeight: "400"
  },
  errMsg: {
    color: 'red',
    paddingLeft: '4%',
    fontSize: scaledHeight(12)
  },
  flexDirectionStyle: {
    flexDirection: "row"
  },
  flexMainView: {
    flex: 0.85
  },
  flexSmall: {
    flex: 0.12
  },
  footerView: {
    marginBottom: scaledHeight(15),
    marginTop: scaledHeight(15)
  },
  infoShortText: {
    color: "#A7A7A7",
    fontSize: scaledHeight(14)
  },
  innerContainerView: {
    alignSelf: "center",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10),
    width: "95%",
  },
  innerHeaderView: {
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "4%",
    paddingRight: "2%",
    paddingVertical: "4%",
  },
  lblLargeTxt: {
    color: '#333333DE',
    fontSize: scaledHeight(18),
    fontWeight: 'bold',
    marginTop: scaledHeight(25),
  },
  lblTxt: {
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: '600',
    marginTop: scaledHeight(25),
  },
  line: {
    alignSelf: "center",
    backgroundColor: "#535353",
    height: scaledHeight(1),
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10),
    opacity: 0.25,
    width: "90%",
  },
  mainHeadingView: {
    marginTop: scaledHeight(20),
    paddingLeft: "4%",
    paddingRight: "4%",
    width: "100%",
  },
  mainHeadlineText: {
    color: '#54565B',
    fontWeight: 'bold',
    fontSize: scaledHeight(22),
    lineHeight: 27,
  },
  manageBenificiariesHeadline: {
    color: "#54565B",
    fontWeight: "bold",
    fontSize: scaledHeight(22),
    lineHeight: scaledHeight(29),
    marginTop: scaledHeight(20)
  },
  marginBottomStyle: {
    marginBottom: scaledHeight(20)
  },
  marginTopStyle: {
    marginTop: scaledHeight(15)
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
  notificationTxt: {
    color: "#56565A",
    fontSize: scaledHeight(16)
  },
  notificationView: {
    backgroundColor: "#E9E9E9",
    borderRadius: scaledHeight(15),
    flexDirection: "row",
    height: scaledHeight(60),
    justifyContent: "space-between",
    marginBottom: scaledHeight(20),
    marginTop: scaledHeight(10),
    padding: "4%",
    width: "100%",
  },
  optionalTxt: {
    color: '#6F7070',
    fontSize: scaledHeight(14),
    fontWeight: 'normal',
  },
  paddingStyleLeft: {
    paddingLeft: "4%"
  },
  paddingHorizontalStyle: {
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  preferdTimeTxt: {
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: 'bold'
  },
  saveSuccessMsgTxt: {
    flex: 0.7,
    height: scaledHeight(50)
  },
  shortContentText: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    marginTop: scaledHeight(3)
  },
  shortContentValueText: {
    color: "#54565B",
    fontWeight: "400",
    fontSize: scaledHeight(16),
    lineHeight: 24,
    paddingLeft: '4%'
  },
  sideBtn: {
    width: scaledHeight(20)
  },
  tagAccHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '4%',
    paddingRight: '4%'
  },
  titleHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
  titleHeadingView: {
    flexDirection: "row",
    paddingLeft: "4%"
  },
  validateBtn: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderColor: '#61285F45',
    borderRadius: scaledHeight(5),
    borderWidth: 1,
    height: scaledHeight(35),
    justifyContent: 'flex-end',
    marginVertical: scaledHeight(7.5),
    width: '30%'
  },
  validateBtnTxt: {
    color: '#544A54',
    fontSize: scaledHeight(14),
    lineHeight: 22,
    textAlign: 'center',
    width: '100%'
  }
});

export default styles;