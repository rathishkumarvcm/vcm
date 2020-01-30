import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { tabMoreActions } from '../../Shared/Actions';

const S = StyleSheet.create({
  container: { flexDirection: 'row', height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
    dispatch
  } = props;

  const showRightModal = () => {
    dispatch(tabMoreActions.setModalVisible(true));
  };

  var { routes, index: activeRouteIndex } = navigation.state;

  return (
    <SafeAreaView style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
        console.log(JSON.stringify(route));
        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => onTabPress({ route })}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive, tintColor })}

            <Text>{getLabelText({ route })} </Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        style={S.tabButton}
        onPress={showRightModal}
      >
        <Text>More</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
// export default TabBar;
// export default connect()(TabBar);
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
// const mapDispatchToProps = {
//   ...tabMoreActions
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBar);
