import {StyleSheet, Dimensions} from 'react-native';
import {scaledHeight,scaledWidth} from '../../Utils/Resolution';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  cancelButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#61285F45',
    borderWidth: 1,
    height: scaledHeight(50),
  
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: scaledHeight(15),
    width: '80%',
  },
  cancelButtonText: {
    color: '#544A54',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#F7FAFF',
    flex: 1,
    width: '100%',
  },
  continueButton: {
    alignItems: 'center',
    backgroundColor: '#544A54',
    borderColor: '#61285F45',
    borderWidth: 1,
    height: scaledHeight(50),
    justifyContent: 'center',
 
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: scaledHeight(15),
    width: '80%',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
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

  default:{
    backgroundColor:'#544A54',
    height: scaledHeight(3),
},

  enterOpt: {
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
    marginBottom: scaledHeight(8),
  },
  errorMessage: {
    color:"red",
    fontSize: scaledHeight(14),
    paddingLeft:'4%',
    paddingRight:'4%',
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

  good: {
    backgroundColor: 'orange',
    height: scaledHeight(3),
},
  hintText: {
    alignSelf: 'center',
    borderBottomColor: '#0000FF',
    borderBottomWidth: 1,
   
  },
  hintView: {
    flex: 1,
    flexDirection: 'row',

    paddingLeft: '4%',
    paddingRight: '4%',
    marginTop: scaledHeight(28),
  },
  lineBorder: {
    borderColor: '#DEDEDF',
    borderTopWidth: 1,
    marginTop: scaledHeight(25),
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
  newVictory: {
    color: '#56565A',
    fontSize: scaledHeight(30),
    height: scaledHeight(30),
    lineHeight: scaledHeight(30),
    marginTop: scaledHeight(20),
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
  notifClose: {
    alignSelf: 'center',
    color: '#56565A',
    fontSize: scaledHeight(25),
    width: '12%',
  },
  notifInner: {
    color: '#56565A',
    fontSize: scaledHeight(16),
    width: '80%',
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
  openInvestment: {
    color: '#56565A',
    fontSize: scaledHeight(20),
    marginTop: scaledHeight(10),
  },
  optTextMsg: {
    color: '#333333DE',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    marginBottom: scaledHeight(8),
  },

  passwordStrengthFlex: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
},
  passwordStrongFlex: {
    flexDirection: 'column',
    flex: 0.3,
    marginRight: scaledWidth(5)
},
  passwordTextBox: {
    marginLeft: '4%',
    marginRight: '4%',
   
  },
  passwordTextBoxError: {
    borderColor: 'red',
    marginLeft: '4%',
  
    marginRight: '4%',
  },
  passwordView: {
    marginTop: scaledHeight(28),
    paddingLeft: '4%',
    paddingRight: '4%',
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
   
  },
  refreshSecurity: {
    alignSelf: 'flex-end',
    color: 'blue',
    fontSize: scaledHeight(16),
    textDecorationLine: 'underline',
  },
  registernowButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#56565A',   
    borderWidth: 1,
    height: scaledHeight(28),
    justifyContent: 'center',
    width: width / 3.3,
  },
  registernowButton1: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#56565A',
      borderWidth: 1,
    height: scaledHeight(48),
    justifyContent: 'center',
    width: width / 2,
  },
  registernowText: {
    color: '#56565A',
    fontSize: scaledHeight(10),
  },
  retrievePasswordText: {
    color: '#56565A',
    fontSize: scaledHeight(30),
  },
  securityCheck: {
    backgroundColor: '#878280',
    height: scaledHeight(70),
    marginLeft: '4%',
    marginRight: '4%',
  
    width: '92%',
  },
  signInUser: {
    marginTop: scaledHeight(34),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  signInView: {
    marginTop: scaledHeight(50),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  strong: {
    backgroundColor: 'green',
    height: scaledHeight(3),
},
  strongText: {
    color: '#56565A',
    fontSize: scaledHeight(12),
    marginTop: scaledHeight(3)
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
usaaMemberSection: {
    flexDirection: 'row',
    marginTop: scaledHeight(15),
  },
usaaMembersText: {
    color: '#56565A',
    fontSize: scaledHeight(16),
    height: scaledHeight(50),
    lineHeight: scaledHeight(50),
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
    borderColor: 'red',
    marginLeft: '4%',
  
    marginRight: '4%',
  },
weak: {
    backgroundColor: 'red',
    height: scaledHeight(3),
},
});

export default styles;