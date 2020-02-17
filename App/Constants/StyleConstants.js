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
    loginTextColour: "#999B9F",
    DARK_BLUE: '#194C7D', // dark blue
    BLUE: '#004A98', // bright dark blue
    CORNER_GREEN:'#8BC105', // corner green
    ORANGE:'#EA7400', // orange
    BACKGROUND_GRAY:"#F7F7F7", // screen bg
    BORDER_GRAY:"#242623",
    ACTIVITYINDICATOR_COLOR:"#17d8e3",
    STATUS_COLOR:'#17d8e3',
    LIGHT_TRANSPARENT_GRAY:'rgba(0,0,0,0.1)',
    GRAY:'#8f8f8f',
    FONT_COLOR:'#56565A', // font color
    WHITE_COLOR:'#FFFFFF',
  },

  fontSize: {
    primarySize: scaledHeight(16),
    heading2: scaledHeight(20),
    heading1: scaledHeight(24),
    heading3: scaledHeight(18),
    heading4: scaledHeight(17),
    heading5: scaledHeight(16),
    title: scaledHeight(36),
    ten: scaledHeight(10),
    eleven: scaledHeight(11),
    twelve: scaledHeight(12),
    thirteen: scaledHeight(13),
    fourteen: scaledHeight(14),
    fifteen: scaledHeight(15),   
    sixteen: scaledHeight(16),   
    eighteen:scaledHeight(18),
    twenty: scaledHeight(20),
    twentyFour: scaledHeight(24), 
    thirty: scaledHeight(30),
    thirtyTwo: scaledHeight(32),    
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