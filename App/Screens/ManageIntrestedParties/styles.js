import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
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
  mainHeadingView: {
    width: "100%",
    marginTop: scaledHeight(20),
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  mainHeadlineText: {
    color: "#54565B",
    fontWeight: "bold",
    fontSize: scaledHeight(22),
    lineHeight: 27
  },
  subHeadlineText: {
    color: "#54565B",
    fontWeight: "bold",
    fontSize: scaledHeight(22),
    marginTop: scaledHeight(15),
    lineHeight: 29
  },
  addBtn: {
    alignSelf: "flex-start",
    marginTop: scaledHeight(5)
  },
  addAccountView: {
    alignSelf: "flex-start",
    marginBottom: scaledHeight(20),
    marginTop: scaledHeight(10),
    paddingLeft: '4%'
  },
  contentText: {
    color: "#56565A",
    fontSize: scaledHeight(15)
  },
  editBtn: {
    alignSelf: "flex-end",
    paddingRight: '4%'
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
  contentContainerStyle: {
    alignSelf: 'flex-start',
    paddingLeft: "4%",
    width:'60%',
    marginBottom: scaledHeight(20)
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
    justifyContent: 'space-between'
  },
  titleHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  titleIconView: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    paddingLeft: '4%',
    paddingRight: '4%'
  },
  line: {
    alignSelf: "center",
    backgroundColor: "#707070",
    height: scaledHeight(1),
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10),
    opacity: 0.5,
    width: "92%",
  },
  containerView: {
    alignSelf: "center",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    marginBottom: scaledHeight(15),
    width: "92%",
  },
  containerHeaderView: {
    backgroundColor: "#F1F1F1",
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    height: scaledHeight(100),
    justifyContent: 'center',
    paddingLeft: "4%"
  },
  containerHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
  containerHeaderTextValue: {
    color: "#56565A",
    fontSize: scaledHeight(27),
    fontWeight: "bold"
  },
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    lineHeight: scaledHeight(22)
  },
  innerContainerView: {
    alignSelf: "center",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10),
    width: "90%"
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
  marginTopStyle: {
    marginTop: scaledHeight(15)
  },
  flexDirectionStyle: {
    flexDirection: "row"
  },
  notificationView: {
    width: "100%",
    //  height: scaledHeight(60),
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
    //  height: scaledHeight(50)
  },
  sideBtn: {
    width: scaledHeight(20)
  },
  iconSideViewStyle: {
    marginTop: '4%',
    paddingRight:'4%',
    alignItems:'flex-end',
    width:'40%'
  },
  borderInternal: {
    marginTop: scaledHeight(10),
    marginBottom: scaledHeight(10),
    borderBottomWidth: 1,
    borderColor: "#E2E4E5"
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
    flexDirection:'row',
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.41,
    elevation: 5
  },
  dateTextLayout: {
    marginTop: 0
  }
});

export default styles;
