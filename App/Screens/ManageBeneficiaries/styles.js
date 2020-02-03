import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  addNewBeneText: {
    color: "#5D83AE",
    fontSize: scaledHeight(13),
    fontWeight: "400",
    marginTop: scaledHeight(30),
    paddingLeft: "4%"
  },
  addNewBeneView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%"
  },
  beneNameStyle: {
    color: "#56565A",
    fontSize: scaledHeight(36)
  },
  blockMarginTop: {
    marginTop: scaledHeight(25)
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
    fontWeight: "400"
  },
  containerHeaderView: {
    backgroundColor: "#ECECEC",
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    marginBottom: scaledHeight(5),
    paddingTop: "2%"
  },
  containerView: {
    alignSelf: "center",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    marginBottom: scaledHeight(15),
    width: "90%"
  },
  contentText: {
    color: "#56565A",
    fontSize: scaledHeight(15)
  },
  contractText: {
    color: "#54565B",
    fontSize: scaledHeight(16),
    fontWeight: "400",
    lineHeight: 24,
    paddingLeft: '4%'
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
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(15),
    fontWeight: "400",
    paddingLeft: "4%"
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
    width: "95%"
  },
  innerHeaderView: {
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingVertical: "4%"
  },
  lblLine: {
    backgroundColor: "#707070",
    flexGrow: 1,
    height: scaledHeight(1),
    opacity: 0.25
  },
  lblTxt: {
    color: "rgba(51, 51, 51, 0.87)",
    fontSize: scaledHeight(16),
    fontWeight: "bold"
  },
  lblTxtInner: {
    color: "rgba(51, 51, 51, 0.87)",
    fontSize: scaledHeight(14),
    fontWeight: "bold",
    margin: scaledHeight(10)
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
  marginBottomStyle: {
    marginBottom: scaledHeight(20)
  },
  marginPaddingStyle: {
    marginBottom: scaledHeight(20),
    paddingLeft: '4%'
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
    width: "100%"
  },
  paddingHorizontalStyle: {
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  paddingStyleLeft: {
    paddingLeft: "4%"
  },
  saveSuccessMsgTxt: {
    flex: 0.7,
    height: scaledHeight(50)
  },
  shadowView: {
    alignSelf: 'flex-end',
    backgroundColor: "white",
    elevation: 5,
    marginTop: scaledHeight(38),
    position: 'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: "40%"
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
  titleHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
  titleHeadingView: {
    flexDirection: "row",
    paddingLeft: "4%"
  },
  titleWithIconStyle: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    paddingLeft: '4%',
    paddingRight: '4%'
  }
});


export default styles;