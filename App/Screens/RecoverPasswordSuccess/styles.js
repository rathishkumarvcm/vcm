import { StyleSheet, Dimensions } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7FAFF',
    flex: 1,
    width: '100%',
  },
  loginHeader: {
    flex: 0.15,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingLeft: '4%',
    paddingRight: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registernowButton: {
    borderColor: '#56565A',
    borderWidth: 1,
    width: width / 3.3,
    //  borderRadius:scaledHeight(14),
    height: scaledHeight(28),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registernowButton1: {
    borderColor: '#56565A',
    borderWidth: 1,
    width: width / 2,
    // borderRadius:scaledHeight(24),
    height: scaledHeight(48),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  registernowText: {
    color: '#56565A',
    fontSize: scaledHeight(10),
  },

  signInUser: {
    marginTop: scaledHeight(34),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  passwordView: {
    marginTop: scaledHeight(28),
    paddingLeft: '4%',
    paddingRight: '4%',
  },

  userIDText: {
    color: '#333333DE',
    fontSize: scaledHeight(20),
    fontWeight: 'bold',
    marginBottom: scaledHeight(8),
  },

  userIDTextBox: {
    marginLeft: '4%',
    marginRight: '4%',
    //  marginBottom:scaledHeight(18)
  },
  userIDTextBoxError: {
    marginLeft: '4%',
    marginRight: '4%',
    // marginBottom:scaledHeight(18),
    borderColor: 'red',
  },
  forgotLineText: {
    flexDirection: 'row',
    fontSize: scaledHeight(18),
    marginTop: scaledHeight(14),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  forgotLineTextColor: {
    color: '#56565A',
    fontSize: scaledHeight(18),
    fontWeight: 'bold',
  },
  termsofuse: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: scaledHeight(25),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  termsofuseText: {
    color: '#56565A',
    fontSize: scaledHeight(18),
  },

  newVictoryButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#56565A',
    borderRadius: scaledHeight(25),
    borderWidth: 1,
    height: scaledHeight(50),
    justifyContent: 'center',
    marginTop: scaledHeight(25),
    width: '60%',
  },
  newVictoryButtonText: {
    color: '#56565A',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
  },
  newVictorySection: {
    backgroundColor: '#FFFFFF',
    height: scaledHeight(450),
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: scaledHeight(29),
    padding: scaledHeight(15),
    width: '92%',
  },
  newVictory: {
    color: '#56565A',
    fontSize: scaledHeight(30),
    height: scaledHeight(30),
    lineHeight: scaledHeight(30),
    marginTop: scaledHeight(20),
  },
  usaaMembersText: {
    color: '#56565A',
    fontSize: scaledHeight(16),
    height: scaledHeight(50),
    lineHeight: scaledHeight(50),
  },
  openInvestment: {
    color: '#56565A',
    fontSize: scaledHeight(20),
    marginTop: scaledHeight(10),
  },
  lineBorder: {
    borderColor: '#DEDEDF',
    borderTopWidth: 1,
    marginTop: scaledHeight(25),
  },
  usaaMemberSection: {
    flexDirection: 'row',
    marginTop: scaledHeight(15),
  },
  privacyAgreement: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: scaledHeight(50),
    justifyContent: 'center',
    marginTop: scaledHeight(15),
    width: '100%',
  },
  privacyText: {
    color: '#56565A',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
    paddingLeft: '4%',
    width: '50%',
  },
  copyRightSection: {
    alignItems: 'center',
    backgroundColor: '#56565A',
    height: scaledHeight(50),
    justifyContent: 'center',
  },
  copyRightText: {
    color: '#FFFFFF',
  },
  faceIDlogo: {
    alignSelf: 'center',
    marginBottom: '5%',
    marginTop: '5%',
  },
  faceIDtextStyle: {
    alignItems: 'center',
    height: scaledHeight(20),
  },

  /* recovery */
  cancelButton: {
    borderColor: '#61285F45',
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    // marginTop:scaledHeight(42),
    //  borderRadius:scaledHeight(25),
    height: scaledHeight(50),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaledHeight(15),
  },
  cancelButtonText: {
    color: '#544A54',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
  },
  continueButton: {
    borderColor: '#61285F45',
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: scaledHeight(15),
    //  borderRadius:scaledHeight(25),
    height: scaledHeight(50),
    backgroundColor: '#544A54',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
  },
  retrievePasswordText: {
    color: '#56565A',
    fontSize: scaledHeight(32),
  },
  securityCheck: {
    width: '92%',
    marginLeft: '4%',
    marginRight: '4%',
    height: scaledHeight(70),
    // backgroundColor:'#aeb3b4'
    backgroundColor: '#878280',
  },
  refreshSecurity: {
    alignSelf: 'flex-end',
    color: 'blue',
    fontSize: scaledHeight(16),
    textDecorationLine: 'underline',
  },
  notifOuter: {
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    borderRadius: 25,
    flex: 1,
    flexDirection: 'row',
    height: scaledHeight(80),
    justifyContent: 'center',
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: scaledHeight(30),
    width: '92%',
  },
  notifInner: {
    color: '#56565A',
    fontSize: scaledHeight(16),
    width: '80%',
  },
  notifClose: {
    alignSelf: 'center',
    color: '#56565A',
    fontSize: scaledHeight(25),
    width: '12%',
  },
  signInView: {
    marginTop: scaledHeight(50),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  optTextMsg: {
    color: '#333333DE',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    marginBottom: scaledHeight(8),
  },
  enterOpt: {
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
    marginBottom: scaledHeight(8),
  },
  refreshOtp: {
    color: '#0000FF',
    // textDecorationLine:"underline",
    fontSize: scaledHeight(16),
    fontWeight: '500',
  },
  refreshOtpView: {
    alignSelf: 'center',
    borderBottomColor: '#0000FF',
    borderBottomWidth: 1,
    marginTop: scaledHeight(28),
    // marginBottom:scaledHeight(42)
  },
  hintView: {
    flex: 1,
    flexDirection: 'row',

    paddingLeft: '4%',
    paddingRight: '4%',
    marginTop: scaledHeight(28),
  },
  hintText: {
    alignSelf: 'center',
    borderBottomColor: '#0000FF',
    borderBottomWidth: 1,
    // marginBottom:scaledHeight(42)
  },
  passwordTextBox: {
    marginLeft: '4%',
    marginRight: '4%',
    //  marginBottom:scaledHeight(18)
  },
  passwordTextBoxError: {
    marginLeft: '4%',
    marginRight: '4%',
    // marginBottom:scaledHeight(18),
    borderColor: 'red',
  },
  passwordSuccessTitle:
  { fontSize: scaledHeight(16), marginBottom: '4%', marginTop: '6%' },

  // { fontSize: scaledHeight(16), marginTop: '4%', marginBottom: '4%' },
  passwordSuccessMessage:
  { fontSize: scaledHeight(16), fontWeight: '500', marginTop: '10%' },
  passwordSuccessMessage1:
  { fontSize: scaledHeight(16), fontWeight: '500', marginBottom: '4%', marginTop: '4%' },

});
