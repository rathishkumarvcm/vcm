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
  contactUsLink: {
    color: "#0000FF",
    fontSize: scaledHeight(15),
    textDecorationLine: "underline"
  },
  addBtn:{
    alignSelf:'flex-end',
    paddingRight:'4%',
    marginTop:scaledHeight(10),
    marginBottom:scaledHeight(5)
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
    backgroundColor: "#ECECEC",
    borderWidth: scaledHeight(1),
    alignSelf: "center",
    marginBottom: scaledHeight(15)
  },
  containerHeaderView: {
    backgroundColor: "#ECECEC",
    borderBottomColor: "#5D83AE99",
    borderBottomWidth: scaledHeight(1),
    paddingTop: "2%",
    paddingLeft:'4%',
    marginBottom: scaledHeight(5)
  },
  containerHeaderText: {
    color: "#54565B",
    fontSize: scaledHeight(12),
    fontWeight: "400",
    paddingLeft:'4%',
    marginBottom:scaledHeight(8),
    marginTop:scaledHeight(8)
  },
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(15),
    fontWeight: "400"
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
    paddingRight: "2%",
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
  lblTxt: {
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: '600',
    marginTop: scaledHeight(25),
  },
  lblLargeTxt: {
    color: '#333333DE',
    fontSize: scaledHeight(18),
    fontWeight: 'bold',
    marginTop: scaledHeight(25),
  },
  customTxtBox: {
    marginTop: scaledHeight(9),
    width: '100%',
  },
  customCompTxtBox:{
    marginTop: scaledHeight(9),
    width: '85%',
  },
  circleView:{
    borderColor:"#DEDEDF",
    borderWidth:scaledHeight(1),
    borderRadius:scaledHeight(25),
    width:scaledHeight(30),
    height:scaledHeight(30),
    marginTop:scaledHeight(15),
    marginLeft:'4%',
    paddingTop:'1%',
    alignItems:'center'
  },
  customStateView: {
    marginTop: scaledHeight(9),
    width: '40%',
  },
  customCityView:{
    marginTop: scaledHeight(9),
    width: '50%',
  },
  optionalTxt: {
    color: '#6F7070',
    fontSize: scaledHeight(14),
    fontWeight: 'normal',
  },
  stateCityView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-between',
    flex: 1,
  },
  preferdTimeTxt:{
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: 'bold'
  },
  borderInternal: {
    marginTop: scaledHeight(10),
    marginBottom: scaledHeight(10),
    borderBottomWidth: 1,
    borderColor: "#E2E4E5"
  },
  errMsg:{
    color:'red',
    fontSize:scaledHeight(12)
  },
  dropdownTextInput:{
    width:'100%',
    marginLeft:0
  },
  dropDownLayout:{
    marginTop:scaledHeight(18),
    paddingLeft:0
  },
  btnGrp: {
    marginHorizontal: scaledHeight(12),
    marginVertical: scaledHeight(50),
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalWhiteBtn: {
    borderWidth: 1,
    borderColor: '#61285F45',
    borderRadius: scaledHeight(5),
    height: scaledHeight(50),
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: scaledHeight(7.5),
    marginHorizontal: scaledHeight(37),
  },
  normalWhiteBtnTxt: {
    fontSize: scaledHeight(16),
    color: '#544A54',
    width: '100%',
    textAlign: 'center',
    lineHeight: 22,
  },
  normalBlackBtn: {
    borderWidth: 1,
    borderColor: '#61285F45',
    borderRadius: scaledHeight(5),
    height: scaledHeight(50),
    backgroundColor: '#544A54',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: scaledHeight(7.5),
    marginHorizontal: scaledHeight(37),
  },
  normalBlackBtnTxt: {
    fontSize: scaledHeight(16),
    color: '#fff',
    width: '100%',
    textAlign: 'center',
  },
});
