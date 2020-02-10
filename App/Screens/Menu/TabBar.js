import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { tabMoreActions } from '../../Shared/Actions';
import { GIcon } from '../../CommonComponents/GIcon';
import { setModalVisible } from '../../Shared/Actions/TabMoreAction';

const S = StyleSheet.create({
  container: { alignItems: "center", backgroundColor: 'white', elevation: 2, flexDirection: 'row', height: Platform.OS === "android" ? 52 : 65, },
  tabButton: {
    alignItems: 'center', flex: 1, height: "100%", justifyContent: 'center',
    marginBottom: Platform.OS === "android" ? 0 : 5
  },
  tabLabelText: { color: "#4F4F4F", fontSize: 10, }
});

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    onTabPress,
    getAccessibilityLabel,
    navigation,
    dispatch
  } = props;

  const showRightModal = () => dispatch(setModalVisible(true));

  // const onCustomTabPress = (route) => { return () => (onTabPress({ route })); };

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? "skyblue" : "#4F4F4F";
        // console.log(JSON.stringify(route));
        return (
          <View style={S.tabButton}>
            <TouchableOpacity
              // key={routeIndex}
              style={S.tabButton}
              onPress={() => onTabPress({ route })}
              // onPress={onCustomTabPress}
              accessibilityLabel={getAccessibilityLabel({ route })}
            >
              {renderIcon({ route, focused: isRouteActive, tintColor })}

              <Text style={[S.tabLabelText, { color: tintColor }]}>{getLabelText({ route })} </Text>
            </TouchableOpacity>
          </View>
        );
      })}
      <TouchableOpacity
        style={S.tabButton}
        onPress={showRightModal}
      >
        <GIcon
          name="more"
          type="material"
          size={20}
          color="#4F4F4F"
        />
        <Text style={S.tabLabelText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};
TabBar.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  dispatch: PropTypes.instanceOf(Object),
  renderIcon: PropTypes.instanceOf(Object),
  onTabPress: PropTypes.instanceOf(Object),
  getAccessibilityLabel: PropTypes.instanceOf(Object),
  getLabelText: PropTypes.instanceOf(Object),

};
TabBar.defaultProps = {
  navigation: {},
  dispatch: {},
  renderIcon: {},
  onTabPress: {},
  getAccessibilityLabel: {},
  getLabelText: {},
};

const mapStateToProps = state => {
  return state.tabMoreModalData;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatch,
      ...tabMoreActions
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBar);
