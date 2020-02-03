/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Modal from 'react-native-modal';
import { GIcon } from '../../CommonComponents';
import onlineMethodImg from '../../Images/onlinemethod1.png';
import styles from './styles';
import { tabMoreActions } from '../../Shared/Actions';
import { navigate } from '../../Navigation/navigationService';

class BaseViewComponent extends React.Component {
  closeModal = () => {
    this.props.dispatch(tabMoreActions.setModalVisible(false));
  };

  navigateToLogout = () => {
    this.props.dispatch(tabMoreActions.setModalVisible(false));
    navigate('draweriOS');
  }

  render() {
    let { isMoreModalVisible } = this.props;
    return (
      <SafeAreaView style={{flex:1}}>
        {this.props.children}
        <Modal
          style={styles.rightModalStyle}
          ref={this.modal}
          hardwareAccelerated={true}
          hideModalContentWhileAnimating={false}
          animationIn={'slideInRight'}
          animationOut={'slideInLeft'}
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
              <Text style={{ fontSize: 18, marginVertical: 20, marginHorizontal: 10 }}>Close</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.navigateToLogout}>
              <View style={styles.menuContainer}>
                <Image style={styles.menuIcon} source={onlineMethodImg} />
                <Text style={styles.menuName}>Logout</Text>
                <GIcon name="chevron-right" type="material" size={25} color="#4D0000" />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={this.navigateToLogout}
            >
              <Text style={{ fontSize: 18, marginHorizontal: 10 }}>Drawer</Text>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    );
  }
}
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

