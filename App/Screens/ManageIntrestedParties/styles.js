import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  addAccountView: {
    alignSelf: "flex-start",
    marginBottom: scaledHeight(20),
    marginTop: scaledHeight(10),
    paddingLeft: '4%'
  },
  addBtn: {
    alignSelf: "flex-start",
    marginTop: scaledHeight(5)
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
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
  containerHeaderTextValue: {
    color: "#56565A",
    fontSize: scaledHeight(27),
    fontWeight: "bold"
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
  contentContainerStyle: {
    alignSelf: 'flex-start',
    marginBottom: scaledHeight(20),
    paddingLeft: "4%",
    width: '70%',
  },
  contentText: {
    color: "#56565A",
    fontSize: scaledHeight(15)
  },
  dateTextLayout: {
    marginTop: 0
  },
  editBtn: {
    alignSelf: "flex-end",
    paddingRight: '4%'
  },
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    lineHeight: scaledHeight(22)
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
  iconSideViewStyle: {
    alignItems: 'flex-end',
    marginTop: '4%',
    paddingRight: '4%',
    width: '30%'
  },
  infoShortText: {
    color: "#A7A7A7",
    fontSize: scaledHeight(14)
  },
  innerHeaderView: {
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingVertical: "4%",
  },
  innerContainerView: {
    alignSelf: "center",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10),
    width: "95%"
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
    backgroundColor: "#707070",
    height: scaledHeight(1),
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10),
    opacity: 0.5,
    width: "92%",
  },
  mainHeadingView: {
    marginTop: scaledHeight(20),
    paddingLeft: "4%",
    paddingRight: "4%",
    width: "100%",
  },
  mainHeadlineText: {
    color: "#54565B",
    fontSize: scaledHeight(22),
    fontWeight: "bold",
    lineHeight: 27
  },
  marginTopStyle: {
    marginTop: scaledHeight(15)
  },
  notificationView: {
    backgroundColor: "#E9E9E9",
    borderRadius: scaledHeight(15),
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: scaledHeight(20),
    marginTop: scaledHeight(10),
    padding: "4%",
    width: "100%",
  },
  notificationTxt: {
    color: "#56565A",
    fontSize: scaledHeight(16)
  },
  saveSuccessMsgTxt: {
    flex: 0.7
  },
  sideBtn: {
    width: scaledHeight(20)
  },
  shadowView: {
    backgroundColor: "white",
    flexDirection: 'row',
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.41
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
  subHeadlineText: {
    color: "#54565B",
    fontSize: scaledHeight(22),
    fontWeight: "bold",
    lineHeight: 29,
    marginTop: scaledHeight(15)
  },
  titleHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
  titleHeadingView: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  titleIconView: {
    color: "#56565A",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    paddingLeft: '4%',
    paddingRight: '4%'
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

export default styles;
