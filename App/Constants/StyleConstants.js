/*
This file is to maintain following, which to be used accross app.
  color constants
  font size
  padding and margin size
  #TODO::: 
*/
import { scaledHeight } from "../Utils/Resolution";

 const AppConstant = {
  colors: {
    transparent:'transparent',
    primaryColor: "#33383F",
    primaryColorRGBA: "rgba(128, 128, 128, 0.4)",
    primaryColorDarkRGBA: "rgba(128, 128, 128, 0.6)",
    primaryColorBGRGBA: "rgba(0, 0, 0, 0.6)",
    primaryColorModalRGBA: "rgba(0, 0, 0, 0.4)",
    loginTextColour: "#999B9F"
  },

  fontSize: {
    primarySize: scaledHeight(16),
    heading2: scaledHeight(20),
    heading1: scaledHeight(24),
    heading3: scaledHeight(18),
    heading4: scaledHeight(17),
    heading5: scaledHeight(16),
    title: scaledHeight(36),
    claimLabel: scaledHeight(12),
    benefitLink: scaledHeight(14),
    twentyFour: scaledHeight(24),
    sixteen: scaledHeight(16),
    fourteen: scaledHeight(14),
    twenty: scaledHeight(20),
    thirty: scaledHeight(30),
    thirtyTwo: scaledHeight(32),
    ten: scaledHeight(10),
    eleven: scaledHeight(11),
    notification: scaledHeight(15),
    fourtyEight: scaledHeight(48)
  },
  lineHeight: {
    twenty: scaledHeight(20),
    twentyEight: scaledHeight(28),
    twentyFour: scaledHeight(24),
    thirtyTwo: scaledHeight(32),
    thirtySix: scaledHeight(36),
    sixteen: scaledHeight(16),
    fourty: scaledHeight(40),
    twelve: scaledHeight(12)
  },
  spacing: {
    spaceTen: scaledHeight(10),
    spaceTwenty: scaledHeight(20),
    spaceThirty: scaledHeight(30),
    spaceFourty: scaledHeight(40),
    spaceFifty: scaledHeight(50),
    spaceSixty: scaledHeight(60)
  }
};

export default AppConstant;