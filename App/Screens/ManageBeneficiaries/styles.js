import { StyleSheet } from "react-native";
import { scaledHeight } from "../../Utils/Resolution";

const styles = StyleSheet.create({
  addNewBeneText: {
    color: "#5D83AE",
    fontSize: scaledHeight(13),
    fontWeight: "700",
    marginTop: scaledHeight(10),
    paddingLeft: "4%"
  },
  addNewBeneView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%"
  },
  addPrimaryLink: {
    alignSelf: "flex-start",
    color: "#5D83AE",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    lineHeight: scaledHeight(22),
    marginBottom: scaledHeight(30),
    marginTop: scaledHeight(30)
  },
  beneHeaderView: {
    flexDirection: 'row',
    paddingLeft: '4%',
    paddingRight: '4%'
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
  containerDataText: {
    color: "#56565A",
    fontSize: scaledHeight(14),
    fontWeight: "400",
    lineHeight: scaledHeight(17)
  },
  containerHeaderText: {
    color: "#56565A",
    fontSize: scaledHeight(14),
    fontWeight: "bold",
    lineHeight: scaledHeight(19)
  },
  containerHeaderView: {
    backgroundColor: "#F1F1F1",
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
  disTxtStr: {
    color: "#56565A",
    fontSize: scaledHeight(17),
    fontWeight: "600",
    lineHeight: 20,
    margin: scaledHeight(15)
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
  downloadContainer: {
    borderColor: '#D8D8D8',
    borderWidth: scaledHeight(1),
    marginTop: '6%',
    shadowColor: "#0000000F",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
  },
  downloadDescTxt: {
    color: '#56565A',
    fontSize: scaledHeight(16),
    fontWeight: '400',
    lineHeight: 22,
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: scaledHeight(17),
    textAlign: 'left',
  },
  downloadHeadingTxt: {
    color: '#56565A',
    fontSize: scaledHeight(25),
    fontWeight: "200",
    lineHeight: scaledHeight(35),
    marginHorizontal: scaledHeight(15),
    marginTop: scaledHeight(25)
  },
  downloadPdfBtn: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: "#5D83AE",
    borderWidth: 1,
    height: scaledHeight(50),
    justifyContent: 'center',
    marginHorizontal: scaledHeight(15),
    marginVertical: scaledHeight(25),
    width: '50%'
  },
  downloadPdfBtnTxt: {
    color: '#5D83AE',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
    lineHeight: 20,
    textAlign: 'center'
  },
  editBtnText: {
    color: "#5D83AE",
    fontSize: scaledHeight(16),
    fontWeight: "600",
    marginTop: scaledHeight(15)
  },
  emptyComponentContainer: {
    alignItems: 'center',
    alignSelf: "center",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    height: scaledHeight(120),
    justifyContent: 'center',
    marginTop: scaledHeight(10),
    width: "95%"
  },
  flexDirectionStyle: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: scaledHeight(15),
    paddingLeft: '4%',
    paddingRight: '4%',
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
    fontSize: scaledHeight(14),
    marginTop: scaledHeight(5)
  },
  innerContainerView: {
    alignSelf: "center",
    borderColor: "#5D83AE99",
    borderWidth: scaledHeight(1),
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10),
    width: "95%"
  },
  innerHeaderTitleView: {
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(10)
  },
  innerHeaderView: {
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
    lineHeight: scaledHeight(29)
  },
  marginBottomStyle: {
    marginBottom: scaledHeight(20)
  },
  marginPaddingStyle: {
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
  },
  totalDisView: {
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
    borderWidth: scaledHeight(1),
    marginTop: scaledHeight(10),
    width: '90%'
  },
  verticalLine: {
    alignSelf: "center",
    backgroundColor: "#C4C3C3",
    height: '70%',
    marginLeft: '6%',
    marginRight: '6%',
    opacity: 1,
    padding: scaledHeight(0.5)
  }
});


export default styles;