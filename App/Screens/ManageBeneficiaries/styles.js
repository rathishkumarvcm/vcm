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
  contactUsLink: {
    color: "#0000FF",
    fontSize: scaledHeight(15),
    textDecorationLine: "underline"
  },
  contentText: {
    color: "#56565A",
    fontSize: scaledHeight(15)
  },
  blockMarginTop: {
    marginTop: scaledHeight(25)
  },
  infoShortText: {
    color: "#A7A7A7",
    fontSize: scaledHeight(14)
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
  paddingStyleLeft: {
    paddingLeft: "4%"
  },
  paddingHorizontalStyle: {
    paddingLeft: "4%",
    paddingRight: "4%"
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
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
  titleWithIconStyle: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    paddingLeft: '4%',
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
  containerView: {
    width: "90%",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    alignSelf: "center",
    marginBottom: scaledHeight(15)
  },
  containerHeaderView: {
    backgroundColor: "#ECECEC",
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    paddingTop: "2%",
    marginBottom: scaledHeight(5)
  },
  containerHeaderText: {
    color: "#54565B",
    fontSize: scaledHeight(12),
    fontWeight: "400"
  },
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(15),
    fontWeight: "400",
    paddingLeft: "4%"
  },
  innerContainerView: {
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    alignSelf: "center",
    width: "95%",
    marginTop: scaledHeight(10),
    marginBottom: scaledHeight(10)
  },
  innerHeaderView: {
    paddingVertical: "4%",
    paddingLeft: "4%",
    paddingRight: "4%",
    flexDirection: "row",
    borderBottomWidth: scaledHeight(1),
    borderBottomColor: "#5D83AE99",
    justifyContent: "space-between"
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
    lineHeight: 24
  },
  marginPaddingStyle: {
    marginBottom: scaledHeight(20),
    paddingLeft: '4%'
  },
  contractText: {
    color: "#54565B",
    fontWeight: "400",
    fontSize: scaledHeight(16),
    lineHeight: 24,
    paddingLeft: '4%'
  },
  marginTopStyle: {
    marginTop: scaledHeight(15)
  },
  marginBottomStyle: {
    marginBottom: scaledHeight(20)
  },
  beneNameStyle: {
    fontSize: scaledHeight(36),
    color: "#56565A"
  },
  flexDirectionStyle: {
    flexDirection: "row"
  },
  notificationView: {
    width: "100%",
    height: scaledHeight(60),
    flexDirection: "row",
    marginTop: scaledHeight(10),
    marginBottom: scaledHeight(20),
    borderRadius: scaledHeight(15),
    backgroundColor: "#E9E9E9",
    padding: "4%",
    justifyContent: "space-between"
  },
  notificationTxt: {
    fontSize: scaledHeight(16),
    color: "#56565A"
  },
  flexSmall: {
    flex: 0.12
  },
  saveSuccessMsgTxt: {
    flex: 0.7,
    height: scaledHeight(50)
  },
  sideBtn: {
    width: scaledHeight(20)
  },
  lblLine: {
    flexGrow: 1,
    height: scaledHeight(1),
    backgroundColor: "#707070",
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
  shadowView: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    position: 'absolute',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
    width: "40%",
    marginTop: scaledHeight(38),
    alignSelf: 'flex-end'
  }
});


export default styles;