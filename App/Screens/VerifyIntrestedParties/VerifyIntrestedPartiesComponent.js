import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
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
      addedInterestedParty: {}
    };
  }

  componentDidMount() {
    this.updateInitialData();
  }

  updateInitialData = () => {
    const { navigation } = this.props;
    const newObj = navigation.getParam("addedData");
    this.setState({ addedInterestedParty: newObj });
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
    const { addedInterestedParty } = this.state;

    let list = [];
    if (this.props && manageInterestedPartiesData && manageInterestedPartiesData.data) {
      list = manageInterestedPartiesData.data;
    }
    // here write the logic...if add /Edit
    list.push(addedInterestedParty);
    return list;
  }

  generateKeyExtractor = (item) => item.key;

  renderAccounts = ({ item, index }) => {
    return (
      <View style={styles.blockMarginTop}>
        <View style={styles.flexStyle}>
          <Text style={styles.titleHeaderText}>{`Tagged Account #${index + 1}`}</Text>
          <TouchableOpacity>
            <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.paddingHorizontalStyle}>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>Account Type</Text>
            <Text style={styles.shortContentValueText}>{item.account_Type}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>Account Name</Text>
            <Text style={styles.shortContentValueText}>{item.account_Name}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>Account Number</Text>
            <Text style={styles.shortContentValueText}>{item.account_Number}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>Effective Start Date</Text>
            <Text style={styles.shortContentValueText}>{item.startDate}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>Effective End Date</Text>
            <Text style={styles.shortContentValueText}>{item.endDate}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { addedInterestedParty } = this.state;
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={navigation} />
        <ScrollView style={styles.flexMainView}>
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageHeadline}>Verify Interested Parties</Text>
          </View>

          <View style={styles.blockMarginTop}>
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
                <Text style={styles.shortContentValueText}>{`${addedInterestedParty.fname} ${addedInterestedParty.mname} ${addedInterestedParty.lname}`}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
                <Text style={styles.shortContentValueText}>{addedInterestedParty.email}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.company}</Text>
                <Text style={styles.shortContentValueText}>{addedInterestedParty.company}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.mailingAdd}</Text>
                <Text style={styles.shortContentValueText}>{`${addedInterestedParty.addressLine1}, ${addedInterestedParty.addressLine2}, ${addedInterestedParty.state}, ${addedInterestedParty.city} - ${addedInterestedParty.zipCode}`}</Text>
              </View>
            </View>
          </View>

          {/* --------------------------- Tagged Accounts View -------------------------------- */}

          <FlatList
            data={addedInterestedParty.interestedParties}
            renderItem={this.renderAccounts}
            keyExtractor={this.generateKeyExtractor}
            extraData={this.state}
          />

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
