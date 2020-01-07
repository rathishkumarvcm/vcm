
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image, FlatList, Modal } from 'react-native';
import PropTypes from "prop-types";
import { Auth } from "aws-amplify";
import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import { GIcon } from './GIcon';
import { scaledHeight, scaledWidth } from '../Utils/Resolution';

const { width } = Dimensions.get('window');


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
    //  navigateTo:'Logout'
    title: 'Sign Out',
  }
];

const styles = StyleSheet.create({
  loginHeader: {
    flex: .12,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingLeft: '4%',
    paddingRight: '4%',
    width: '100%'
  },
  modalGreenColorText: {
    marginTop: 10
  },
  modalImage: {
    width: 30, height: 30, marginTop: 20
  },
  modalInsideView: {
    alignItems: 'center',
    backgroundColor: '#F7FAFF',
    height: "100%",
    justifyContent: 'center',
    width: "100%",

  },
  modalRedColorText: {
    marginTop: 10
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: '#F7FAFF',
    flex: 1,
    justifyContent: 'center',
  },
  registernowButton: {
    borderColor: '#61285F',
    borderWidth: 1,
    width: width / 3.3,
    borderRadius: scaledHeight(14),
    height: scaledHeight(28),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  registernowText: {
    fontSize: scaledHeight(10),
    color: '#56565A'
  },
  signIntext: {
    textAlign: 'left',
    fontSize: scaledHeight(25),
    color: '#535353',
    flexWrap: 'wrap',
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
    this.props.navigation.navigate('login');
  }

  signOut = () => {

    //  For removing key
    RNSecureKeyStore.remove("currentSession")
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });

    RNSecureKeyStore.remove("jwtToken")
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });

    Auth.signOut({ global: true })
      .then(data => console.log("SigoutSucces", data))
      .catch(err => console.log(err));

  }


  headerClicked = () => this.props.navigation.navigate('login');

  setMenu = () => { this.setState({ menuList: !this.state.menuList }); }

  navigateProfile = () => this.props.navigation.navigate('profileSettings')

  moveToNotifications = () => this.props.navigation.navigate('NotificationTabs')
  openLeftDrawer = () =>  this.props.navigation.navigate('DrawerOpen') 

  updateDataList = ({ item }) => {
    return (<TouchableOpacity
      style={{
        height: scaledHeight(50),
        borderBottomWidth: 1,
        borderColor: "#DEDEDF",
        justifyContent: 'center'
      }
      }
      onPress={this.newMethod(item)}
    >
      <Text> {item.title} </Text>
    </TouchableOpacity>);
  }

  newMethod(item) {

    return () => {
      if (item.title == "Sign Out") {
        this.setState({ SignOut: true });
        this.showModal();
        this.signOut();

      }
      else {
        this.props.navigation.navigate(item.naviagteTo);
      }
    };
  }

  render() {

    return (

      <>
        {this.props.register ? (
          <TouchableOpacity style={styles.loginHeader}>
            <TouchableOpacity
              style={{ width: scaledWidth(100) }}
              onPress={this.headerClicked}
            >
              <Image style={{ width: '100%', height: scaledHeight(100), alignItems: 'flex-start' }}
                resizeMode="contain"
                source={require("../Images/logo.png")}
              />
            </TouchableOpacity>

            <View style={{ width: '60%' }} />

            <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: scaledHeight(25), justifyContent: 'center' }}>
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
              <TouchableOpacity style={{ width: '25%', height: scaledWidth(50) }}
                onPress={this.headerClicked}
              >
                <Image style={{ width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }}
                  resizeMode="contain"
                  source={require("../Images/logo.png")}
                />
              </TouchableOpacity>

              <View style={{ width: '15%' }} />

              {!this.props.registerShow ? (
<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: scaledHeight(15) }}
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

              <View style={{ width: '10%' }} />

              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                <GIcon
                  name="ios-search"
                  type="ionicon"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                onPress={()=>this.moveToNotifications()}
              >
                <GIcon
                  name="md-notifications-outline"
                  type="ionicon"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }}
                onPress={() =>this.openLeftDrawer()}
              >
                <GIcon
                  name="menu"
                  type="material"
                  size={40}
                  color="black"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            {this.state.menuList && (
              <TouchableOpacity
                onPress={this.navigateProfile}
                style={{ height: scaledHeight(250), marginTop: scaledHeight(85), zIndex: 2, position: 'absolute', borderWidth: 1, width: '100%', borderColor: "#DEDEDF", backgroundColor: 'white' }}
              >
                <FlatList
                  data={newData}
                  renderItem={this.updateDataList}
                  keyExtractor={item => item.title}
                />
                {this.state.SignOut ?
                  (
                    <Modal
                      transparent
                      visible={this.state.ModalVisibleStatus}
                    >
                      <View style={styles.modalView}>
                        <View style={styles.modalInsideView}>
                          <Text style={styles.signIntext}>Signing Out </Text>
                          <Image source={require('../Images/logo.png')} style={styles.modalImage} />
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
  navigation: PropTypes.instanceOf(Object)
};

GHeaderComponent.defaultProps = {

};

export default GHeaderComponent;

