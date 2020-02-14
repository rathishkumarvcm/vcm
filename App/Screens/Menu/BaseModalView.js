/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Modal from 'react-native-modal';
import { GIcon } from '../../CommonComponents';
import styles from './styles';
import { tabMoreActions } from '../../Shared/Actions';
import { navigate } from '../../Navigation/navigationService';
import { setModalVisible } from '../../Shared/Actions/TabMoreAction';
import onlineMethodImg from '../../Images/onlinemethod1.png';

class BaseViewComponent extends React.Component {
  closeModal = () => {
    const { dispatch } = this.props;
    dispatch(setModalVisible(false));
  };

  navigateToLogout = () => {
    const { dispatch } = this.props;
    dispatch(setModalVisible(false));
    navigate('draweriOS');
  }


  navigateToMemberSupport = () => {
    const { dispatch } = this.props;
    dispatch(setModalVisible(false));
    navigate('draweriOS');
  }

  render() {
    const { isMoreModalVisible, children } = this.props;
    return (
      <View style={styles.scrollViewStyle}>
        {children}
        <Modal
          style={styles.rightModalStyle}
          ref={this.modal}
          hideModalContentWhileAnimating={false}
          animationIn="slideInRight"
          animationOut="slideInLeft"
          animationOutTiming={20}
          onRequestClose={this.closeModal}
          onBackdropPress={this.closeModal}
          backdropOpacity={0.3}
          useNativeDriver
          isVisible={isMoreModalVisible}
        >
          <SafeAreaView style={styles.rightModalViewStyle}>
            <TouchableWithoutFeedback
              onPress={this.closeModal}
            >
              <Text style={styles.menuName}>Close</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.navigateToLogout}>
              <View style={styles.menuContainer}>
                <Image style={styles.menuIcon} source={onlineMethodImg} />
                <Text style={styles.menuName}>Logout</Text>
                <GIcon name="chevron-right" type="material" size={25} color="#4D0000" />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={this.navigateToMemberSupport}
            >
              <Text style={styles.menuName}>MSR</Text>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </Modal>
      </View>
    );
  }
}

BaseViewComponent.propTypes = {
  children: PropTypes.node, // children: PropTypes.element.isRequired
  isMoreModalVisible: PropTypes.bool,
  dispatch: PropTypes.instanceOf(Object)
};

BaseViewComponent.defaultProps = {
  children: {},
  isMoreModalVisible: false,
  dispatch: {}
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
)(BaseViewComponent);

