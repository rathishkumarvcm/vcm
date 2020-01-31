import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  blockMarginTop: {
    marginTop: scaledHeight(29)
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
  containerHeaderText: {
    color: "#54565B",
    fontSize: scaledHeight(12),
    fontWeight: "400",
    marginBottom: scaledHeight(8),
    marginTop: scaledHeight(8),
    paddingLeft: '4%',
  },
  containerView: {
    alignSelf: "center",
    backgroundColor: "#ECECEC",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    marginBottom: scaledHeight(15),
    width: "90%",
  },
  contentViewBlock: {
    marginTop: scaledHeight(15),
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  contentViewInternal: {
    borderColor: "#E2E4E5",
    borderRadius: scaledHeight(2),
    borderWidth: 1,
    marginBottom: scaledHeight(20),
    marginHorizontal: "4%",
    marginTop: scaledHeight(20),
    paddingBottom: "4%"
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
    fontSize: scaledHeight(16),
    fontWeight: "600",
    paddingLeft: "4%"
  },
  flexMainView: {
    flex: 0.85
  },
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: '4%',
    paddingRight: "4%",
    width: "90%"
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
  manageHeadline: {
    color: "#54565B",
    fontSize: scaledHeight(22),
    fontWeight: "bold",
    lineHeight: scaledHeight(29),
    marginTop: scaledHeight(20)
  },
  marginStyle: {
    marginTop: scaledHeight(26)
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
  paddingHorizontalStyle: {
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  shortContentText: {
    color: "#56565A",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    marginTop: scaledHeight(3)
  },
  shortContentValueText: {
    color: "#54565B",
    fontSize: scaledHeight(15),
    fontWeight: "400",
    lineHeight: 24
  },
  titleHeaderText: {
    color: "#151516",
    fontSize: scaledHeight(18),
    fontWeight: "bold",
    marginBottom: scaledHeight(5),
    width: '75%',
  },
  titleHeadingView: {
    paddingLeft: "4%"
  }
});

export default styles;