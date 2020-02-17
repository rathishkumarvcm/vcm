import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const arrayStyles = (props) => {
    return StyleSheet.create({
      labelText: {
        color: "#333333DE",
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        // marginBottom:scaledHeight(8)
        ...props
    }
    });
  };

  export default arrayStyles;