import { StyleSheet } from "react-native";
// import { scaledHeight, scaledWidth } from '../../Utils/Resolution';

const arrayStyles = (tint) => {
    return StyleSheet.create({
      tabLabelText: {
        color: "#4F4F4F", fontSize: 10,
        ...tint
      }
    });
  };

  export default arrayStyles;