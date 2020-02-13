import { StyleSheet } from "react-native";
import * as COLORS from "../../Constants/ColorConstants";
// import { scaledHeight, scaledWidth } from '../../Utils/Resolution';

const arrayStyles = (tint) => {
    return StyleSheet.create({
      tabLabelText: {
        color: COLORS.FONT_COLOR, fontSize: 10,
        ...tint
      }
    });
  };

  export default arrayStyles;