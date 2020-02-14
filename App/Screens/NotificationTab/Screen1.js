import React from 'react';
import PropTypes from "prop-types";
import { Text } from 'react-native';
import { GDashBoardContainer } from '../../CommonComponents';
import BaseModalView from '../Menu/BaseModalView';

class Screen1Component extends React.PureComponent {

  render() {
    const { navigation } = this.props;
    return (
      <BaseModalView>
        <GDashBoardContainer title="My VCM" navigation={navigation}>
          <Text>Screen1...!</Text>
        </GDashBoardContainer>
      </BaseModalView>
    );
  }
}
Screen1Component.propTypes = {
  navigation: PropTypes.instanceOf(Object),
};

Screen1Component.defaultProps = {
  navigation: {},
};
export default Screen1Component;