import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

export const styles = StyleSheet.create({
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
  contentViewInternal: {
    marginTop: scaledHeight(20),
    marginBottom: scaledHeight(20),
    paddingBottom: "4%",
    borderRadius: scaledHeight(2),
    borderWidth: 1,
    marginHorizontal: "4%",
    borderColor: "#E2E4E5"
  },
  blockMarginTop: {
    marginTop: scaledHeight(29)
  },
  contentViewBlock: {
    paddingLeft: "8%",
    paddingRight: "8%",
    marginTop: scaledHeight(15)
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
  paddingHorizontalStyle: {
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  marginStyle: {
    marginTop: scaledHeight(26)
  },
  flexMainView: {
    flex: 0.85
  },
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footerView: {
    marginTop: scaledHeight(15),
    marginBottom: scaledHeight(15)
  },
  titleHeaderText: {
    color: "#151516",
    fontSize: scaledHeight(16),
    fontWeight: "bold",
    marginBottom: scaledHeight(5)
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
  containerDistributionView: {
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEFF0",
    borderWidth: scaledHeight(1),
    paddingTop: "4%",
    paddingBottom: "4%",
    width: "90%",
    alignSelf: "center"
  },
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(15),
    fontWeight: "400",
    paddingLeft: "4%"
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
    fontSize: scaledHeight(15),
    lineHeight: 24
  },
  distributionViewStyle:{
    marginTop:scaledHeight(30),
    width:'90%',
    alignSelf:'center',
    backgroundColor:'#EEEEEE',
    borderColor:'#EEEEEE',
    borderWidth:scaledHeight(1)
  },
  todBeneDistributionTxt:{
    margin:scaledHeight(15),
    color: "#56565A",
    fontWeight: "600",
    fontSize: scaledHeight(22),
    lineHeight: 27
  },
  otherBeneDistributionTxt:{
    margin:scaledHeight(15),
    color: "#56565A",
    fontWeight: "600",
    fontSize: scaledHeight(17),
    lineHeight: 20
  }
});
