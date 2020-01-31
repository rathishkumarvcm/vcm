import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  addAccountView: {
    alignSelf: "flex-start",
    marginTop: scaledHeight(25),
    paddingLeft: '4%'
  },
  addBtn: {
    alignSelf: "flex-end",
    marginBottom: scaledHeight(5),
    marginTop: scaledHeight(10),
    paddingRight: "4%",
  },
  beneNameStyle: {
    color: "#56565A",
    fontSize: scaledHeight(36)
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
    backgroundColor: "#F9FBFC",
    flex: 1,
    width: "100%"
  },
  containerHeaderText: {
    color: "#54565B",
    fontSize: scaledHeight(12),
    fontWeight: "400",
    marginBottom: scaledHeight(8),
    marginTop: scaledHeight(8),
    paddingLeft: '4%'
  },
  containerHeaderView: {
    backgroundColor: "#ECECEC",
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    marginBottom: scaledHeight(5),
    paddingLeft: '4%',
    paddingTop: "2%"
  },
  containerView: {
    alignSelf: "center",
    backgroundColor: "#ECECEC",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    marginBottom: scaledHeight(15),
    width: "90%"
  },
  contentText: {
    color: "#56565A",
    fontSize: scaledHeight(15)
  },
  customTxtBox: {
    marginTop: scaledHeight(9),
    width: '100%',
  },
  dateStyle: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%'
  },
  dateTextStyle: {
    marginTop: 0
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
  dropdownTextInput: {
    marginLeft: 0,
    width: '100%'
  },
  dropDownLayout: {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0
  },
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    lineHeight: scaledHeight(22)
  },
  errMsg: {
    color: 'red',
    fontSize: scaledHeight(12),
    paddingLeft: '4%',
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
    width: "95%"
  },
  innerHeaderView: {
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "4%",
    paddingRight: "2%",
    paddingVertical: "4%"
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
    fontSize: scaledHeight(22),
    fontWeight: 'bold',
    lineHeight: 27
  },
  marginBottomStyle: {
    marginBottom: scaledHeight(20)
  },
  marginTopStyle: {
    marginTop: scaledHeight(15)
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
  optionalTxt: {
    color: '#6F7070',
    fontSize: scaledHeight(14),
    fontWeight: 'normal',
  },
  paddingHorizontalStyle: {
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  paddingStyleLeft: {
    paddingLeft: "4%"
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
    fontSize: scaledHeight(16),
    fontWeight: "400",
    lineHeight: 24
  },
  sideBtn: {
    width: scaledHeight(20)
  },
  subHeadlineText: {
    color: '#54565B',
    fontSize: scaledHeight(22),
    fontWeight: 'bold',
    lineHeight: 29,
    marginTop: scaledHeight(15)
  },
  tagAccHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  titleHeadingView: {
    paddingLeft: "4%"
  },
  titleHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
  validateBtn: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderColor: '#61285F45',
    borderRadius: scaledHeight(5),
    borderWidth: 1,
    height: scaledHeight(40),
    justifyContent: 'flex-end',
    marginVertical: scaledHeight(7.5),
    width: '30%',
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