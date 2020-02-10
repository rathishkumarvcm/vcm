
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, Modal, Platform } from 'react-native';
import PropTypes from "prop-types";
import { Auth } from "aws-amplify";
import RNSecureKeyStore from 'react-native-secure-key-store';
// { ACCESSIBLE } from 'react-native-secure-key-store';
import { GIcon } from './GIcon';
import { scaledHeight, scaledWidth } from '../Utils/Resolution';


const logo = require("../Images/logo.png");

const newData = [
  {
    naviagteTo: 'profilePreference',
    title: 'Profile and Preferences',
  },
  {
    naviagteTo: 'accountService',
    title: 'Account Services',
  },
  {
    naviagteTo: 'generalSettings',
    title: 'Settings',
  },
  {
    naviagteTo: 'profileSettings',
    title: 'Profile',
  },
  {
    naviagteTo: 'deliverySettings',
    title: 'Delivery',
  },
  {
    naviagteTo: 'marketingandPrivacySettings',
    title: 'Marketing and Privacy',
  },
  {
    naviagteTo: 'tAmmendComponent',
    title: 'Ammend',
  },
  {
    naviagteTo: 'purchaseScreenOne',
    title: 'Purchase',
  },
  {
    naviagteTo: 'exchangeScreenOne',
    title: 'Exchange',
  },
  {
    naviagteTo: 'LiquidationPageOne',
    title: 'Liquidation',
  },
  {
    naviagteTo: "manageBeneficiaries",
    title: 'Manage Beneficiaries',
  },
  {
    naviagteTo: 'manageIntrestedParties',
    title: 'Manage Interested Parties',
  },
  {
    naviagteTo: 'rmdCalculator',
    title: 'RMD Calculator',
  },
  {
    //  navigateTo:'Logout'
    title: 'Sign Out',
  }
];

const styles = StyleSheet.create({
  headerClickStyle: {
    width: scaledWidth(100)
  },
  headerClickTouch: {
    height: scaledWidth(50),
    width: '25%'
  },
  loginHeader: {
    flex: .12,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingLeft: '4%',
    paddingRight: '4%',
    width: '100%'
  },
  logoStyle: {
    alignItems: 'flex-start',
    height: scaledHeight(100),
    width: '100%'
  },
  logoStyleHead: {
    alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%'
  },
  logoTouch: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: scaledHeight(25)
  },
  menuStyle: {
    alignItems: 'center', justifyContent: 'center', marginTop: scaledHeight(15)
  },
  modalImage: {
    height: 30, marginTop: 20, width: 30
  },
  modalInsideView: {
    alignItems: 'center',
    backgroundColor: '#F7FAFF',
    height: "100%",
    justifyContent: 'center',
    width: "100%",
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: '#F7FAFF',
    flex: 1,
    justifyContent: 'center',
  },
  navigateProfile: {
    backgroundColor: 'white',
    borderColor: "#DEDEDF",
    borderWidth: 1,
    height: scaledHeight(250),
    marginTop: scaledHeight(85),
    position: 'absolute',
    width: '100%',
    zIndex: 2
  },
  navigationTouch: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  searchTouch: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  signIntext: {
    color: '#535353',
    flexWrap: 'wrap',
    fontSize: scaledHeight(25),
    textAlign: 'left',
  },
  touchableStyle:
  {
    borderBottomWidth: 1,
    borderColor: "#DEDEDF",
    height: scaledHeight(50),
    justifyContent: 'center'
  },
  viewContainer: {
    width: '60%'
  },
  viewContainerOne: {
    width: '12%'
  }
});

class GHeaderComponent extends Component {

  constructor(props) {
    super(props);
    // set true to isLoading if data for this screen yet to be received and wanted to show loader.
    this.state = {
      menuList: false,
      SignOut: false,
      ModalVisibleStatus: true,
    };
  }

  showModal = () => {
    this.setState({
      ModalVisibleStatus: true,

    });
    setTimeout(() => {
      this.setState({
        ModalVisibleStatus: false,
        SignOut: false
      });
    }, 1000);
    const { navigation } = this.props;
    navigation.navigate('login');
  }

  signOut = () => {

    //  For removing key
    RNSecureKeyStore.remove("currentSession")
      .then(() => {
      }, () => {
      });

    RNSecureKeyStore.remove("jwtToken")
      .then(() => {
      }, () => {
      });

    Auth.signOut({ global: true })
      .then(() => { })
      .catch(() => { });

  }


  headerClicked = () => {
    const { navigation } = this.props;
    navigation.navigate('login');
  }

  setMenu = () => {
    const { menuList } = this.state;
    this.setState({ menuList: !menuList });
  }

  navigateProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('profileSettings');
  }

  navigateToDrawer = () => {
    const { navigation } = this.props;
    if (Platform.OS === 'android')
      navigation.openDrawer();
    else
      navigation.navigate("draweriOS");
  }

  moveToNotifications = () => {
    const { navigation } = this.props;
    navigation.navigate('notificationTabs');
  }

  openLeftDrawer = () => {
    const { navigation } = this.props;
    navigation.navigate('DrawerOpen');
  }

  updateDataList = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={this.newMethod(item)}
      >
        <Text> {item.title} </Text>
      </TouchableOpacity>
    );
  }

  keyExtractor = ({item}) => {
    return item.title;
  }

  newMethod(item) {

    return () => {
      if (item.title === "Sign Out") {
        this.setState({ SignOut: true });
        this.showModal();
        this.signOut();

      }
      else {
        const { navigation } = this.props;
        navigation.navigate(item.naviagteTo);
      }
    };
  }

  render() {
    const { register, registerShow,} = this.props;
    const { menuList, SignOut, ModalVisibleStatus } = this.state;

    return (
      <>
        {register ? (
          <TouchableOpacity style={styles.loginHeader}>
            <TouchableOpacity
              style={styles.headerClickStyle}
              onPress={this.headerClicked}
            >
              <Image style={styles.logoStyle}
                resizeMode="contain"
                source={logo}
              />
            </TouchableOpacity>

            <View style={styles.viewContainer} />

            <TouchableOpacity style={styles.logoTouch}>
              <GIcon
                name="typing"
                type="entypo"
                size={50}
                color="grey"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )
          : (
            <>
              <TouchableOpacity style={styles.loginHeader}>
                <TouchableOpacity style={styles.headerClickTouch}
                  onPress={this.headerClicked}
                >
                  <Image style={styles.logoStyleHead}
                    resizeMode="contain"
                    source={logo}
                  />
                </TouchableOpacity>

                <View style={styles.viewContainerOne} />

                {!registerShow ? (
                  <TouchableOpacity style={styles.menuStyle}
                    onPress={this.setMenu}
                  >
                    <GIcon
                      name="user"
                      type="evilicon"
                      size={40}
                      color="black"
                    />
                  </TouchableOpacity>
                ) : null}
                {/* <Text style={{ alignItems: 'center', justifyContent: 'center', marginTop: scaledHeight(15) }}>{this.props.headerText}</Text> */}

                <View style={styles.viewContainerOne} />

                <TouchableOpacity style={styles.searchTouch}>
                  <GIcon
                    name="ios-search"
                    type="ionicon"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchTouch}
                  onPress={this.moveToNotifications}
                >
                  <GIcon
                    name="md-notifications-outline"
                    type="ionicon"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigationTouch}
                  onPress={this.navigateToDrawer}
                >
                  {(Platform.OS === 'android') ?
                    (<GIcon name="menu" type="material" size={40} color="black" />)
                    : <GIcon name="account-circle" type="material" size={40} color="black" />
                  }
                </TouchableOpacity>
              </TouchableOpacity>
              {menuList && (
                <TouchableOpacity
                  onPress={this.navigateProfile}
                  style={styles.navigateProfile}
                >
                  <FlatList
                    data={newData}
                    renderItem={this.updateDataList}
                    keyExtractor={this.keyExtractor}
                  />
                  {SignOut ?
                    (
                      <Modal
                        transparent
                        visible={ModalVisibleStatus}
                      >
                        <View style={styles.modalView}>
                          <View style={styles.modalInsideView}>
                            <Text style={styles.signIntext}>Signing Out </Text>
                            <Image source={logo} style={styles.modalImage} />
                          </View>
                        </View>
                      </Modal>
                    ) : null
                  }
                </TouchableOpacity>
              )}

            </>
          )}

      </>
    );
  }
}
GHeaderComponent.propTypes = {
  register: PropTypes.bool,
  registerShow: PropTypes.bool,
  navigation: PropTypes.instanceOf(Object)
};

GHeaderComponent.defaultProps = {
  register: false,
  registerShow: false,
  navigation: {}

};

export default GHeaderComponent;

