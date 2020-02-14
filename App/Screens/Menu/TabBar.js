import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform, View ,Image} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tabMoreActions } from '../../Shared/Actions';
import arrayStyles from './arrayStyles';
import * as COLORS from "../../Constants/ColorConstants";
import { scaledHeight } from '../../Utils/Resolution';
// import inactiveMore from '../../Images/tabMore.png';
import activeMore from '../../Images/tabMore.png';

const styles = StyleSheet.create({
  container: {
    alignItems: "center", backgroundColor: 'white', elevation: 2,
    flexDirection: 'row', height: Platform.OS === "android" ? 52 : 65,
    paddingHorizontal: scaledHeight(30)
  },
  tabButton: {
    alignItems: 'center', flex: 1, height: "100%", justifyContent: 'center',
    marginBottom: Platform.OS === "android" ? 0 : 5
  },
  tabLabelText: { color: COLORS.GRAY, fontSize: 10, }
});

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    onTabPress,
    getAccessibilityLabel,
    navigation,
    setMoreModalVisible
  } = props;

  const onCustomTabPress = (route) => () => onTabPress({ route });

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={styles.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? COLORS.DARK_BLUE : COLORS.GRAY;
        return (
          <View style={styles.tabButton}>
            <TouchableOpacity
              // key={routeIndex}
              style={styles.tabButton}
              // onPress={() => onTabPress({ route })}
              onPress={onCustomTabPress(route)}
              accessibilityLabel={getAccessibilityLabel({ route })}
            >
              {renderIcon({ route, focused: isRouteActive, tintColor })}

              <Text style={arrayStyles({ color: tintColor }).tabLabelText}>{getLabelText({ route })} </Text>
            </TouchableOpacity>
          </View>
        );
      })}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={setMoreModalVisible(true)}
      >
        <Image source={activeMore} />
        {/* <GIcon
          name="more"
          type="material"
          size={20}
          color={COLORS.GRAY}
        /> */}
        <Text style={styles.tabLabelText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};
TabBar.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  setMoreModalVisible: PropTypes.instanceOf(Object),
  renderIcon: PropTypes.instanceOf(Object),
  onTabPress: PropTypes.instanceOf(Object),
  getAccessibilityLabel: PropTypes.instanceOf(Object),
  getLabelText: PropTypes.instanceOf(Object),

};
TabBar.defaultProps = {
  navigation: {},
  setMoreModalVisible: {},
  renderIcon: {},
  onTabPress: {},
  getAccessibilityLabel: {},
  getLabelText: {},
};

const mapStateToProps = state => {
  return state.tabMoreModalData;
};

const mapDispatchToProps = {
  ...tabMoreActions,
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       dispatch,
//       ...tabMoreActions
//     },
//     dispatch
//   );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBar);
