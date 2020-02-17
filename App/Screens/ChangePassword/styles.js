import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
import StyleConstants from "../../Constants/StyleConstants";

const styles = StyleSheet.create({
  bottomView: {
    alignItems: 'center',
    backgroundColor: StyleConstants.colors.DARK_BLUE,
    bottom: 0,
    height: scaledHeight(50),
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: StyleConstants.colors.BACKGROUND_GRAY,
    flex: 1
  },
  contentContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: '2%',
  },
  cornerTriangle: {
    backgroundColor: 'transparent',
    borderRightColor: 'transparent',
    borderRightWidth: 30,
    borderStyle: 'solid',
    borderTopColor: StyleConstants.colors.CORNER_GREEN,
    borderTopWidth: 30,
    height: 0,
    width: 0
  },
  currentPINText: {
    color: StyleConstants.colors.DARK_BLUE,
    fontSize: StyleConstants.fontSize.heading3,
  },
  default: {
    backgroundColor: '#544A54',
    borderRadius: scaledHeight(10),
    height: scaledHeight(4),
  },
  good: {
    backgroundColor: 'orange',
    borderRadius: scaledHeight(10),
    height: scaledHeight(4),
  },
  layoutContainer: {
    alignSelf: 'stretch',
    backgroundColor: StyleConstants.colors.WHITE_COLOR,
    flex: 1,
    height: '100%',
    left: '4%',
    position: 'absolute',
    right: '4%',
    top: scaledHeight(120)
  },
  logoStyle: {
    alignSelf: 'center',
  },
  mandatoryText: {
    color: StyleConstants.colors.FONT_COLOR,
    fontSize: StyleConstants.fontSize.twelve,
    marginTop: scaledHeight(20)
  },
  passwordInputText: {
    width: '100%',
  },
  passwordRuleContainer: {
    alignItems: 'center',
    flexDirection: "row",
    marginTop: scaledHeight(20)
  },
  passwordRuleItems: {
    color: StyleConstants.colors.FONT_COLOR,
    fontSize: StyleConstants.fontSize.thirteen,
    marginLeft: '4%',
  },
  passwordStrengthFlex: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scaledHeight(10),
  },
  passwordStrongFlex: {
    flexDirection: 'column',
    flex: 0.4,
    marginRight: '3%'
  },
  passwordText: {
    color: StyleConstants.colors.FONT_COLOR,
    fontSize: StyleConstants.fontSize.thirteen,
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(20),
  },
  passwordWeakFlex: {
    flexDirection: 'column',
    flex: 0.4,
  },
  scrollStyle: { alignSelf: 'stretch', flex: 1 },
  securePINDetailsContainer: {
    marginTop: scaledHeight(10),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  securePINTextBox: {
    width: '100%'
  },
  securePINTextBoxError: {
    borderColor: 'red',
  },
  strong: {
    backgroundColor: 'green',
    borderRadius: scaledHeight(10),
    height: scaledHeight(4),
  },
  strongText: {
    color: StyleConstants.colors.FONT_COLOR,
    fontSize: StyleConstants.fontSize.twelve,
    marginTop: scaledHeight(4)
  },
  submitButtonStyle: {
    color: StyleConstants.colors.WHITE_COLOR,
    fontSize: StyleConstants.fontSize.sixteen,
    fontWeight: 'bold'
  },
  touchableStyle: {
    alignItems: 'center',
    width: '100%',
  },
  weak: {
    backgroundColor: 'red',
    borderRadius: scaledHeight(10),
    height: scaledHeight(4),
  }
});

export default styles;