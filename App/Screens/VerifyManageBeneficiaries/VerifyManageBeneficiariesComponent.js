import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

let tempData = {};

class VerifyManageBenificiariesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beneData: {},
      totalPrimaryDistribution: 0,
      totalContingentDistribution: 0,
      totalDistribution: 0
    };
  }

  componentDidMount() {
    const { manageBeneficiaryData } = this.props;
    if (this.props && manageBeneficiaryData && manageBeneficiaryData.savedBeneficiaryData) {
      tempData = manageBeneficiaryData.savedBeneficiaryData;
      if (tempData.primary_Bene && tempData.primary_Bene.length <= 0 && tempData.contingent_Bene && tempData.contingent_Bene.length <= 0 && tempData.transfer_on_Death_Bene && tempData.transfer_on_Death_Bene.length > 0) {
        let priArr = [];
        let conArr = [];
        if (tempData.new_Primary_Bene && tempData.new_Contingent_Bene.length) {
          priArr = tempData.new_Primary_Bene;
        }
        if (tempData.new_Contingent_Bene && tempData.new_Contingent_Bene.length) {
          conArr = tempData.new_Contingent_Bene;
        }
        tempData.primary_Bene = priArr;
        tempData.contingent_Bene = conArr;
      } else {
        let todArr = tempData.transfer_on_Death_Bene;
        let conArr = tempData.contingent_Bene;
        if (tempData.new_Primary_Bene && tempData.new_Primary_Bene.length) {
          todArr = tempData.transfer_on_Death_Bene.concat(tempData.transfer_on_Death_Bene);
        }
        if (tempData.new_Contingent_Bene && tempData.new_Contingent_Bene.length) {
          conArr = tempData.contingent_Bene.concat(tempData.new_Contingent_Bene);
        }
        tempData.transfer_on_Death_Bene = todArr;
        tempData.contingent_Bene = conArr;

      }
      this.updateInitialData(tempData);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { manageBeneficiaryData } = this.props;
      if (this.props && manageBeneficiaryData && manageBeneficiaryData.savedBeneficiaryData) {
        tempData = manageBeneficiaryData.savedBeneficiaryData;
        if (tempData.primary_Bene && tempData.primary_Bene.length <= 0 && tempData.contingent_Bene && tempData.contingent_Bene.length <= 0 && tempData.transfer_on_Death_Bene && tempData.transfer_on_Death_Bene.length > 0) {
          let priArr = [];
          let conArr = [];
          if (tempData.new_Primary_Bene && tempData.new_Contingent_Bene.length) {
            priArr = tempData.new_Primary_Bene;
          }
          if (tempData.new_Contingent_Bene && tempData.new_Contingent_Bene.length) {
            conArr = tempData.new_Contingent_Bene;
          }
          tempData.primary_Bene = priArr;
          tempData.contingent_Bene = conArr;
        } else {
          let todArr = tempData.transfer_on_Death_Bene;
          let conArr = tempData.contingent_Bene;
          if (tempData.new_Primary_Bene && tempData.new_Primary_Bene.length) {
            todArr = tempData.transfer_on_Death_Bene.concat(tempData.transfer_on_Death_Bene);
          }
          if (tempData.new_Contingent_Bene && tempData.new_Contingent_Bene.length) {
            conArr = tempData.contingent_Bene.concat(tempData.new_Contingent_Bene);
          }
          tempData.transfer_on_Death_Bene = todArr;
          tempData.contingent_Bene = conArr;

        }
        this.updateInitialData(tempData);
      }
    }
  }

  updateInitialData = (data) => {
    if (data) {
      this.setState({ beneData: data }, () => this.setInitialValue());
    }
  }

  setInitialValue = () => {
    let totalPri = 0;
    let totalCon = 0;
    let totalTod = 0;
    let total = 0;
    const { beneData } = this.state;
    if (beneData.transfer_on_Death_Bene) {
      const tot = beneData.transfer_on_Death_Bene.reduce((prev, cur) => {
        let dist = parseInt(cur.distribution_Per);
        if (this.isEmpty(cur.distribution_Per)) {
          dist = 0;
        }
        return prev + dist;
      }, 0);
      totalTod = tot;
    }
    if (beneData.primary_Bene) {
      const tot = beneData.contingent_Bene.reduce((prev, cur) => {
        let dist = parseInt(cur.distribution_Per);
        if (this.isEmpty(cur.distribution_Per)) {
          dist = 0;
        }
        return prev + dist;
      }, 0);
      totalPri = tot;
    }
    if (beneData.contingent_Bene) {
      const tot = beneData.primary_Bene.reduce((prev, cur) => {
        let dist = parseInt(cur.distribution_Per);
        if (this.isEmpty(cur.distribution_Per)) {
          dist = 0;
        }
        return prev + dist;
      }, 0);
      totalCon = tot;
    }

    total = totalTod + totalPri + totalCon;
    this.setState({ totalPrimaryDistribution: totalPri, totalContingentDistribution: totalCon, totalDistribution: total });

  }

  isEmpty = (str) => {
    if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
      return true;
    }
    return false;
  }

  /* ------------------ Button events -------------------------- */
  onClickEdit = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  onClickCancel = () => {
    const { navigation } = this.props;
    navigation.navigate("manageBeneficiaries");
  }

  clearData = () => {
    const { clearBeneficiaryData } = this.props;
    const data =
    {
      "key": "",
      "account_Type": "",
      "account_Name": "",
      "account_Number": "",
      "accumulated_Value": "",
      "distribution_Per": "",
      "transfer_on_Death_Bene": [],
      "primary_Bene": [],
      "contingent_Bene": [],
      "new_Primary_Bene": [],
      "new_Contingent_Bene": []
    };

    const payload = {
      savedBeneficiaryData: data
    };
    clearBeneficiaryData(payload);
  }

  onClickSubmit = () => {
    const { saveBeneficiaryData, navigation } = this.props;
    const payloadData = this.getData();
    saveBeneficiaryData("verifyBeneficiary", payloadData);
    this.clearData();
    navigation.navigate("manageBeneficiaries", { showMsg: true, successMsg: "Data has been added Successfully" });
  }

  getData = () => {
    const { beneData } = this.state;
    const { manageBeneficiaryData } = this.props;
    let updateBeneData = {};
    let list = [];
    updateBeneData = beneData;
    if (this.props && manageBeneficiaryData && manageBeneficiaryData.manage_beneficiary) {
      list = manageBeneficiaryData.manage_beneficiary;
    }
    list.map((m, n) => {
      if (m.key === updateBeneData.key) {
        list.splice(n, 1, updateBeneData);
      }
      return 0;
    });
    return list;
  }

  /* ------------------ Render Functions for FlatList -------------------------- */

  renderContingentBeneficiary = ({ item }) => (
    <View style={styles.marginStyle}>
      <View style={styles.flexStyle}>
        <Text style={styles.titleHeaderText}>{gblStrings.accManagement.contingentInfo}</Text>
        <TouchableOpacity onPress={this.onClickEdit}>
          <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.paddingHorizontalStyle}>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
          <Text style={styles.shortContentValueText}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.socialSecurityNo}</Text>
          <Text style={styles.shortContentValueText}>{item.social_security_number}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.dob}</Text>
          <Text style={styles.shortContentValueText}>{item.dob}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
          <Text style={styles.shortContentValueText}>{item.email}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.beneficiary_type}</Text>
          <Text style={styles.shortContentValueText}>{item.beneficiaryType}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToOwner}</Text>
          <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.distributionPercentage}</Text>
          <Text style={styles.shortContentValueText}>{`${item.distribution_Per} %`}</Text>
        </View>
      </View>
    </View>
  );

  renderTransferOnDeathBeneficiary = ({ item }) => (
    <View style={styles.marginStyle}>
      <View style={styles.flexStyle}>
        <Text style={styles.titleHeaderText}>{gblStrings.accManagement.verifyTOD}</Text>
        <TouchableOpacity onPress={this.onClickEdit}>
          <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.paddingHorizontalStyle}>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
          <Text style={styles.shortContentValueText}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.socialSecurityNo}</Text>
          <Text style={styles.shortContentValueText}>{item.social_security_number}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.dob}</Text>
          <Text style={styles.shortContentValueText}>{item.dob}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
          <Text style={styles.shortContentValueText}>{item.email}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.beneficiary_type}</Text>
          <Text style={styles.shortContentValueText}>{item.beneficiaryType}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToOwner}</Text>
          <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.distributionPercentage}</Text>
          <Text style={styles.shortContentValueText}>{`${item.distribution_Per} %`}</Text>
        </View>
      </View>
    </View>
  );

  renderPrimaryBeneficiary = ({ item }) => (
    <View style={styles.marginStyle}>
      <View style={styles.flexStyle}>
        <Text style={styles.titleHeaderText}>{gblStrings.accManagement.primaryInfo}</Text>
        <TouchableOpacity onPress={this.onClickEdit}>
          <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.paddingHorizontalStyle}>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
          <Text style={styles.shortContentValueText}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.socialSecurityNo}</Text>
          <Text style={styles.shortContentValueText}>{item.social_security_number}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.dob}</Text>
          <Text style={styles.shortContentValueText}>{item.dob}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
          <Text style={styles.shortContentValueText}>{item.email}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.beneficiary_type}</Text>
          <Text style={styles.shortContentValueText}>{item.beneficiaryType}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToOwner}</Text>
          <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
        </View>
        <View style={styles.contentViewBlock}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.distributionPercentage}</Text>
          <Text style={styles.shortContentValueText}>{`${item.distribution_Per} %`}</Text>
        </View>
      </View>
    </View>
  );

  generateKeyExtractor = (item) => item.key;

  render() {
    const { beneData, totalPrimaryDistribution, totalContingentDistribution, totalDistribution, navigation } = this.state;
    // const { manageBeneficiaryData } = this.props;
    // if (manageBeneficiaryData && manageBeneficiaryData.savedBeneficiaryData) {
    //   this.setData();
    // }
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={navigation} />
        <ScrollView style={styles.flexMainView}>
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageBenificiariesHeadline}>
              {gblStrings.accManagement.manageBeneficiaries}
            </Text>
          </View>
          <View style={styles.line} />

          <View style={styles.contentViewInternal}>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{beneData.account_Type}</Text>
              <Text style={styles.shortContentValueText}>{beneData.account_Name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.registrationOwner}</Text>
              <Text style={styles.shortContentValueText}>{beneData.account_Name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.accountNumber}</Text>
              <Text style={styles.shortContentValueText}>{beneData.account_Number}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.balance}</Text>
              <Text style={styles.shortContentValueText}>{`$ ${beneData.accumulated_Value}`}</Text>
            </View>
          </View>

          {beneData.primary_Bene &&
            (
              <FlatList
                data={beneData.primary_Bene}
                keyExtractor={this.generateKeyExtractor}
                extraData={this.state}
                renderItem={this.renderPrimaryBeneficiary}
              />
            )
          }
          {beneData.contingent_Bene &&
            (
              <FlatList
                data={beneData.contingent_Bene}
                keyExtractor={this.generateKeyExtractor}
                extraData={this.state}
                renderItem={this.renderContingentBeneficiary}
              />
            )
          }
          {beneData.transfer_on_Death_Bene &&
            (
              <FlatList
                data={beneData.transfer_on_Death_Bene}
                keyExtractor={this.generateKeyExtractor}
                extraData={this.state}
                renderItem={this.renderTransferOnDeathBeneficiary}
              />
            )
          }

          {/* --------------------------- Distribution Percentage View -------------------------------- */}

          <View style={styles.distributionViewStyle}>
            {beneData.transfer_on_Death_Bene ?
              <Text style={styles.todBeneDistributionTxt}>Total Distribution Percentage</Text> :
              <Text style={styles.otherBeneDistributionTxt}>{`Total Distribution Percentage of Primary ( ${totalPrimaryDistribution} %) + Contingent ( ${totalContingentDistribution} %)`}</Text>
            }
            <Text style={styles.todBeneDistributionTxt}>{`= ${totalDistribution} %`}</Text>
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

VerifyManageBenificiariesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  saveBeneficiaryData: PropTypes.func,
  manageBeneficiaryData: PropTypes.instanceOf(Object),
  clearBeneficiaryData: PropTypes.instanceOf(Object)
};

VerifyManageBenificiariesComponent.defaultProps = {
  navigation: {},
  saveBeneficiaryData: () => { },
  manageBeneficiaryData: {},
  clearBeneficiaryData: () => { }
};

export default VerifyManageBenificiariesComponent;
