import React from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { tabMoreActions } from '../../Shared/Actions';
import { GIcon } from '../../CommonComponents/GIcon';

const S = StyleSheet.create({
  container: { flexDirection: 'row', height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabLabelText: { color:"#4F4F4F",fontSize: 10, }
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

  const showRightModal = () => dispatch(tabMoreActions.setModalVisible(true));

  const onCustomTabPress = (routeN) => onTabPress({ routeN });

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <SafeAreaView style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? "skyblue" : "#4F4F4F";
       // console.log(JSON.stringify(route));
        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => onTabPress({ route })}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive, tintColor })}

            <Text style={[S.tabLabelText, { color: tintColor }]}>{getLabelText({ route })} </Text>
          </TouchableOpacity>
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
    </SafeAreaView>
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
