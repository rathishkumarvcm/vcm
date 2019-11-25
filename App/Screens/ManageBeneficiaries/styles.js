import {StyleSheet, Dimensions} from 'react-native';
import {scaledHeight} from '../../Utils/Resolution';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    width: '100%',
  },
  mainHeadingView: {
    width: '100%',
    marginTop: scaledHeight(20),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  manageBenificiariesHeadline: {
    color: '#54565B',
    fontWeight: 'bold',
    fontSize: scaledHeight(22),
    marginTop: scaledHeight(20),
    lineHeight: scaledHeight(29),
  },
  manageBenificiariesSubHeadline: {
    width: '100%',
    color: '#54565B',
    fontWeight: 'bold',
    fontSize: scaledHeight(18),
    lineHeight: 24,
  },
  settingsBorder: {
    marginTop: scaledHeight(10),
    marginBottom: scaledHeight(10),
    width: '92%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#E2E4E5',
  },
  borderInternal: {
    marginTop: scaledHeight(10),
    marginBottom: scaledHeight(10),
    borderBottomWidth: 1,
    borderColor: '#E2E4E5',
  },
  contactUsLink: {
    color: '#0000FF',
    fontSize: scaledHeight(15),
    textDecorationLine: 'underline',
  },
  userIDText: {
    color: '#333333DE',
    fontSize: scaledHeight(20),
    fontWeight: 'bold',
    marginBottom: scaledHeight(8),
  },
  contentText: {
    color: '#56565A',
    fontSize: scaledHeight(15),
    marginTop: scaledHeight(40),
  },
  contactUsInternalLink: {
    color: '#56565A',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: scaledHeight(15),
  },
  contentViewInternal: {
    marginTop: scaledHeight(40),
    paddingBottom: '4%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E2E4E5',
  },
  blockMarginTop: {
    marginTop: scaledHeight(29),
  },
  shortHeadingText: {
    color: '#56565A',
    fontSize: scaledHeight(15),
    marginTop: scaledHeight(3),
    fontWeight: 'bold',
  },
  shortContentText: {
    color: '#56565A',
    fontSize: scaledHeight(15),
    marginTop: scaledHeight(3),
  },
  infoShortText: {
    color: '#A7A7A7',
    fontSize: scaledHeight(14),
  },
  updateButton: {
    borderColor: '#707070',
    borderWidth: scaledHeight(1),
    width: width / 3,
    borderRadius: scaledHeight(1),
    height: scaledHeight(50),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  updateButtonText: {
    fontSize: scaledHeight(16),
    color: '#060606',
    fontWeight: '600',
  },
  primaryBeniView: {
    paddingLeft: '4%',
    paddingRight: '4%',
    marginTop: scaledHeight(30),
  },
  enterDetailsView: {
    //paddingLeft:'4%',
    paddingRight: '4%',
    flexDirection: 'row',
    marginTop: scaledHeight(20),
  },
  iconEnterView: {
    marginTop: scaledHeight(5),
  },
  paddingHorizontalView: {
    paddingHorizontal: '4%',
  },
  dataAccountBeneficiary: {
    marginTop: scaledHeight(20),
    paddingRight: '8%',
    width: '90%',
  },
  noteIconView: {
    paddingRight: '6%',
    marginTop: scaledHeight(5),
  },
  enterDetailsTxt: {
    fontSize: scaledHeight(18),
    lineHeight: scaledHeight(24),
    color: '#54565B',
    fontWeight: 'bold',
  },
  noteEnterDetail: {
    marginTop: scaledHeight(10),
  },
  flexDirectionRowStyle: {
    flexDirection: 'row',
  },
  contentViewBlock: {
    paddingLeft: '8%',
    paddingRight: '8%',
    marginTop: scaledHeight(15),
  },
  addPrimaryLink: {
    color: '#5D83AE',
    marginTop: scaledHeight(30),
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(22),
  },
  subHeading: {
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(24),
    color: '#56565A',
    marginTop: scaledHeight(20),
    fontWeight: '600',
  },
  distributionTotalView: {
    height: scaledHeight(64),
    marginTop: scaledHeight(20),
    width: '80%',
    flexDirection: 'row',
    borderColor: '#EEEFF0',
    backgroundColor: '#EEEEEE',
    borderWidth: scaledHeight(1),
    paddingLeft: '4%',
    paddingRight: '4%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    borderRadius: scaledHeight(5),
  },
  lblTxt: {
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: '800',
    marginTop: scaledHeight(25),
  },
  lblLargeTxt: {
    color: '#333333DE',
    fontSize: scaledHeight(18),
    fontWeight: 'bold',
    marginTop: scaledHeight(25),
  },
  customTxtBoxError: {
    marginTop: scaledHeight(9),
    width: '100%',
    borderColor: 'red',
  },
  customTxtBox: {
    marginTop: scaledHeight(9),
    width: '100%',
  },
  customDistributionTxtBox: {
    marginTop: scaledHeight(9),
    width: '80%',
  },
  customDistributionErrTxtBox:{
    marginTop: scaledHeight(9),
    width: '80%',
    borderColor: 'red'
  },
  optionalTxt: {
    color: 'rgba(51, 51, 51, 0.87)',
    fontSize: scaledHeight(16),
    fontWeight: 'normal',
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
  disclaimerTextHeading: {
    fontSize: scaledHeight(16),
    marginBottom: scaledHeight(10),
    fontWeight: '800',
    color: '#56565A',
    lineHeight: scaledHeight(23),
  },
  disclaimerTxt: {
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(23),
    color: '#56565A',
  },

  errorMsg: {
    fontSize: scaledHeight(12),
    marginLeft: '4%',
    color: 'red',
    textAlignVertical: 'top',
  },
  customListTxtBox: {
    width: '100%',
    alignSelf: 'center',
  },
  customDateTxtBox: {
    width: '90%',
  },
  paddingStyleLeft: {
    paddingLeft: '4%',
  },
  paddingHorizontalStyle: {
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  marginStyle: {
    lineHeight: scaledHeight(18),
    marginTop: scaledHeight(26),
  },
  flexMainView: {
    flex: 0.85,
  },
  flexStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteLink: {
    lineHeight: scaledHeight(18),
    marginTop: scaledHeight(26),
    alignSelf: 'center',
  },
  distributionFieldInput: {
    marginTop: scaledHeight(18),
    fontWeight: '600',
    lineHeight: scaledHeight(18),
  },
  contingentView: {
    paddingLeft: '4%',
    marginTop: scaledHeight(15),
  },
  contractNumberSize: {
    fontSize: scaledHeight(37),
  },
  footerView: {
    marginTop: scaledHeight(15),
    marginBottom: scaledHeight(15),
  },
  addBeneficiaryLink: {
    color: '#5D83AE',
    marginTop: scaledHeight(30),
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(22),
  },
  topContentText: {
    width: '90%',
    paddingHorizontal: '4%',
    color: '#7D7D7D',
    fontSize: scaledHeight(16),
    lineHeight: scaledHeight(23),
    marginTop: scaledHeight(10),
  },
  dateDropDownWidth: {
    width: '30%',
  },
  helpTextStyle: {
    color: '#CFCFCF',
    fontSize: scaledHeight(16),
  },
  titleAlignStyle: {
    paddingLeft: '4%',
    marginTop: scaledHeight(10),
  },
});
