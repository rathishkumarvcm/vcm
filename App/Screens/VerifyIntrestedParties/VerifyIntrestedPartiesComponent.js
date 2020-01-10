import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  GHeaderComponent,
  GFooterSettingsComponent,
  GButtonComponent
} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';



class VerifyIntrestedPartiesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountData: {},
      newAddedInterestedParty: {}
    };
  }

  componentDidMount() {
    this.updateInitialData();
  }

  updateInitialData = () => {
    const { navigation } = this.props;
    const accData = navigation.getParam('acc_Data');
    const addedObj = navigation.getParam("added_obj");
    this.setState({ accountData: accData, newAddedInterestedParty: addedObj });
  }

  onClickEdit = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  onClickCancel = () => {
    const { navigation } = this.props;
    navigation.navigate("manageIntrestedParties");
  }

  onClickSubmit = () => {
    const { navigation, saveInterestedParties } = this.props;
    const { accountData } = this.state;
    const payloadData = this.getData();
    saveInterestedParties(payloadData);
    navigation.navigate("manageIntrestedParties", { showMsg: true, successMsg: `New Interested Party has been added in " ${accountData.account_Type} " successfully` });
  }

  getData = () => {
    const { manageInterestedPartiesData } = this.props;
    const {newAddedInterestedParty, accountData}=this.state;
    let list = [];
    const completeData = accountData;
    completeData.interestedParty.push(newAddedInterestedParty);
    if (this.props && manageInterestedPartiesData && manageInterestedPartiesData.list_manage_interested_parties) {
      list = manageInterestedPartiesData.list_manage_interested_parties;
    }
    list.map((m, n) => {
      if (m.key === completeData.key) {
        list.splice(n, 1, completeData);
      }
      return 0;
    });
    return list;
  }

  generateKeyExtractor = (item) => item.key;

  render() {
    const {navigation}=this.props;
    const {accountData, newAddedInterestedParty}=this.state;
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={navigation} />
        <ScrollView style={styles.flexMainView}>
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageHeadline}>
              {gblStrings.accManagement.manageIntrestedParties}
            </Text>
          </View>

          <View style={styles.blockMarginTop}>
            <View style={styles.titleHeadingView}>
              <Text style={styles.titleHeaderText}>{accountData.account_Type}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.containerView}>
              <Text style={styles.containerHeaderText}>
                {` Acc Name - ${accountData.account_Name} | Acc Number - ${accountData.account_Number}`}
              </Text>
            </View>
            <View style={styles.blockMarginTop} />
            <View style={styles.flexStyle}>
              <Text style={styles.titleHeaderText}>{gblStrings.accManagement.verifyIntrestedPartyInfo}</Text>
              <TouchableOpacity onPress={this.onClickEdit}>
                <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <View style={styles.paddingHorizontalStyle}>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                <Text style={styles.shortContentValueText}>{`${newAddedInterestedParty.fname} ${newAddedInterestedParty.mname} ${newAddedInterestedParty.lname}`}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToAccountHolder}</Text>
                <Text style={styles.shortContentValueText}>{newAddedInterestedParty.relationship_To_Account_holder}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
                <Text style={styles.shortContentValueText}>{newAddedInterestedParty.email}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.company}</Text>
                <Text style={styles.shortContentValueText}>{newAddedInterestedParty.company}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.mailingAdd}</Text>
                <Text style={styles.shortContentValueText}>{`${newAddedInterestedParty.addressLine1} , ${newAddedInterestedParty.addressLine2} , ${newAddedInterestedParty.state} , ${newAddedInterestedParty.city} - ${newAddedInterestedParty.zipCode}`}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.effStartDate}</Text>
                <Text style={styles.shortContentValueText}>{newAddedInterestedParty.startDate}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.effEndDate}</Text>
                <Text style={styles.shortContentValueText}>{newAddedInterestedParty.endDate}</Text>
              </View>
            </View>
          </View>


          {/* --------------------------- Button View -------------------------------- */}

          <View style={styles.btnGrp}>
            <GButtonComponent
              buttonStyle={styles.normalWhiteBtn}
              buttonText={gblStrings.common.save}
              textStyle={styles.normalWhiteBtnTxt}
            />
            <GButtonComponent
              buttonStyle={styles.normalWhiteBtn}
              buttonText={gblStrings.common.cancel}
              textStyle={styles.normalWhiteBtnTxt}
              onPress={this.onClickCancel}
            />
            <GButtonComponent
              buttonStyle={styles.normalWhiteBtn}
              buttonText={gblStrings.common.back}
              textStyle={styles.normalWhiteBtnTxt}
              onPress={this.onClickEdit}
            />
            <GButtonComponent
              buttonStyle={styles.normalBlackBtn}
              buttonText={gblStrings.common.submit}
              textStyle={styles.normalBlackBtnTxt}
              onPress={this.onClickSubmit}
            />
          </View>

          { /* ----------- Disclaimer -------------------*/}

          <GFooterSettingsComponent />
        </ScrollView>
      </View>
    );
  }
}

VerifyIntrestedPartiesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  saveInterestedParties: PropTypes.func,
  manageInterestedPartiesData: PropTypes.instanceOf(Object)
};

VerifyIntrestedPartiesComponent.defaultProps = {
  navigation: {},
  saveInterestedParties: () => { },
  manageInterestedPartiesData: {}
};
export default VerifyIntrestedPartiesComponent;
