import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import {
  GHeaderComponent,
  GFooterComponent,
  GButtonComponent
} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';



class VerifyIntrestedPartiesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account_Data: {},
      newAddedInterestedParty: {}
    };
  }

  componentDidMount() {
    this.updateInitialData();
  }

  updateInitialData = () => {
    const accData = this.props.navigation.getParam('acc_Data');
    const addedObj = this.props.navigation.getParam("added_obj");
    this.setState({ account_Data: accData, newAddedInterestedParty: addedObj });
  }

  onClickEdit = () => {
    this.props.navigation.goBack();
  }

  onClickCancel = () => {
    this.props.navigation.navigate("manageIntrestedParties");
  }

  onClickSubmit = () => {
    const payloadData = this.getData();
    this.props.saveIntrestedParties("verifyIntrestedParty", payloadData);
    this.props.navigation.navigate("manageIntrestedParties", { showMsg: true, successMsg: "New Interested Party has been added in " + this.state.account_Data.account_Type + " successfully" });
  }

  getData = () => {
    let list = [];
    const completeData = this.state.account_Data;
    completeData.intrestedParty.push(this.state.newAddedInterestedParty);
    if (this.props && this.props.manageIntrestedPartiesData && this.props.manageIntrestedPartiesData.list_manage_intrested_parties) {
      list = this.props.manageIntrestedPartiesData.list_manage_intrested_parties;
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
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={this.props.navigation} />
        <ScrollView style={styles.flexMainView}>
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageBenificiariesHeadline}>
              {gblStrings.accManagement.manageIntrestedParties}
            </Text>
          </View>

          <View style={styles.blockMarginTop}>
            <View style={styles.titleHeadingView}>
              <Text style={styles.titleHeaderText}>{this.state.account_Data.account_Type}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.containerView}>
              <Text style={styles.containerHeaderText}>
                {` Acc Name - ${this.state.account_Data.account_Name} | Acc Number - ${this.state.account_Data.account_Number}`}
              </Text>
            </View>
            <View style={styles.blockMarginTop} />
            <View style={[styles.flexStyle, styles.paddingHorizontalStyle]}>
              <Text style={styles.titleHeaderText}>{gblStrings.accManagement.verifyIntrestedPartyInfo}</Text>
              <TouchableOpacity onPress={this.onClickEdit}>
                <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <View style={styles.paddingHorizontalStyle}>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                <Text style={styles.shortContentValueText}>{`${this.state.newAddedInterestedParty.fname} ${this.state.newAddedInterestedParty.mname} ${this.state.newAddedInterestedParty.lname}`}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToAccountHolder}</Text>
                <Text style={styles.shortContentValueText}>{this.state.newAddedInterestedParty.relationship_To_Account_holder}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
                <Text style={styles.shortContentValueText}>{this.state.newAddedInterestedParty.email}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.company}</Text>
                <Text style={styles.shortContentValueText}>{this.state.newAddedInterestedParty.company}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.mailingAdd}</Text>
                <Text style={styles.shortContentValueText}>{this.state.newAddedInterestedParty.addressLine1 + ", " + this.state.newAddedInterestedParty.addressLine2 + ", " + this.state.newAddedInterestedParty.state + ", " + this.state.newAddedInterestedParty.city + " - " + this.state.newAddedInterestedParty.zipCode}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.effStartDate}</Text>
                <Text style={styles.shortContentValueText}>{this.state.newAddedInterestedParty.startDate}</Text>
              </View>
              <View style={styles.contentViewBlock}>
                <Text style={styles.shortContentText}>{gblStrings.accManagement.effEndDate}</Text>
                <Text style={styles.shortContentValueText}>{this.state.newAddedInterestedParty.endDate}</Text>
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

          {/* --------------------------- Footer View -------------------------------- */}
          <View style={styles.footerView} />
          <View style={styles.line} />
          <View style={styles.blockMarginTop} />
          <View style={styles.mainHeadingView}>
            <Text style={styles.disclaimerTextHeading}>
              {gblStrings.accManagement.VCDiscalimerTitle}
            </Text>
            <Text style={styles.disclaimerTxt}>
              {gblStrings.accManagement.VCDiscalimerDescContent}
            </Text>
          </View>
          <GFooterComponent />
        </ScrollView>
      </View>
    );
  }
}

VerifyIntrestedPartiesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  saveIntrestedParties: PropTypes.func,
  manageIntrestedPartiesData: PropTypes.instanceOf(Object)
};

VerifyIntrestedPartiesComponent.defaultProps = {
  navigation: {},
  saveIntrestedParties: () => { },
  manageIntrestedPartiesData: {}
};
export default VerifyIntrestedPartiesComponent;
