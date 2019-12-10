import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent,GIcon } from '../../CommonComponents';
import { styles } from '../ChangeSignInMethod/styles';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from 'prop-types';



// eslint-disable-next-line react/prefer-stateless-function
class CSMPushNotificationComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
        };
        
       
      }
      onClickCancel = () => {
        this.props.navigation.navigate('ChangeSignInMethod');
      }

      dateFormat = () => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        this.setState({
            //Setting the value of the date time
            date:
              date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
          });
      }
      onClickSave = () => {
        let payloadData = {};
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
          let updatedDate=date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
        payloadData = {
            selectedMethod:'PUSHNOTIFICATION',
            lastUpdatedTime:updatedDate
        };
        this.props.signInMethods("signInMethodsData", payloadData);
        //console.log("----signInMethods",payloadData);
        this.props.navigation.navigate('ChangeSignInMethod',{showAlert:true,message:gblStrings.userManagement.pushNotification,index:2});
      
      }

    render() {
      return(
          <View style={styles.container} >
              <GHeaderComponent navigation={this.props.navigation} />
              <ScrollView style={{ flex: 0.85 }}>
              <TouchableOpacity >
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />

              </TouchableOpacity>
              <View style={styles.signInView} >
              <Text style={styles.signIntext}>
              {gblStrings.userManagement.changeSignInHeadingPushNotification}
              </Text>
              <Text style={styles.lblLine} />
              <View style={{ width: "100%" }}>
              <Text style={styles.lblTxt} >
              {gblStrings.userManagement.downloadPushNotification}
              </Text>
              </View>
              <TouchableOpacity style={styles.touchableOpacityStyle}>
              <Text style={styles.txtUnderline}>Download Push Notification Application </Text>
              </TouchableOpacity>
              <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.back}
                textStyle={styles.cancelButtonText}
                onPress={this.onClickCancel}
              />
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.cancel}
                textStyle={styles.cancelButtonText}
                onPress={this.onClickCancel}
                />
                <GButtonComponent
                buttonStyle={styles.saveButton}
                buttonText={gblStrings.common.save}
                textStyle={styles.saveButtonText}
                onPress={this.onClickSave}
                />
              </View>
              <GFooterComponent />
              </ScrollView>
          </View>
      );
    }
  }
CSMPushNotificationComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    signInMethodsData : PropTypes.instanceOf(Object),
    signInMethods : PropTypes.func
};

CSMPushNotificationComponent.defaultProps = {

};
    export default CSMPushNotificationComponent;