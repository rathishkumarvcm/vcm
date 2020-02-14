import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { GTitleBarComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import * as COLORS from "../../Constants/ColorConstants";

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.BACKGROUND_GRAY, flex: 1, },
  contentContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE_COLOR,
    borderColor: "transparent",
    borderWidth: 0.5,
    bottom: 0,
    height: '100%',
    marginHorizontal: scaledHeight(35),
    position: 'absolute',
    top: scaledHeight(90),
    width: "85%"
  },
  triangleCorner: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    borderRightColor: 'transparent',
    borderRightWidth: 30,
    borderStyle: 'solid',
    borderTopColor: COLORS.CORNER_GREEN,
    borderTopWidth: 30,
    height: 0,
    width: 0,
  },

});

class Screen2Component extends React.PureComponent {
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <GTitleBarComponent toolbarTiltle="My VCM" backPress={null} />
          <View style={styles.contentContainer}>
            <View style={styles.triangleCorner} />
            <Text>Screen2...!</Text>
          </View>
        </SafeAreaView>
    );
  }
}
export default Screen2Component;