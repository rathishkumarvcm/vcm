import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GIcon, GFooterSettingsComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import CardHeader from './CardHeader';

let beneficiaryData = [];

class ManageBenificiariesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseIcon: "-",
      notificationMsg: "",
      isSuccessNotification: false,
    };
  }

  componentDidMount() {

  }

  handleEdit = (data) => () => {
    const { navigation, saveBeneficiaryData } = this.props;
    const payloadData = {
      savedBeneficiaryData: data
    };
    saveBeneficiaryData(payloadData);
    navigation.navigate("editManageBeneficiaries", { acc_Data: data });
  }

  onClickAddBeneficiary = () => {
    const { navigation } = this.props;
    navigation.navigate("addManageBeneficiaries");
  }

  getDeleteData = (item) => {
    const keyArr = item.key.split("_");
    const pName = keyArr[0];
    const pKey = keyArr[1];
    const cKey = keyArr[2];

    const pIndex = beneficiaryData.findIndex((data) => data.key === pKey);
    const modObj = beneficiaryData[pIndex];
    let cIndex;
    let arr;
    switch (pName) {
      case "pri":
        cIndex = beneficiaryData[pIndex].primary_Bene.findIndex((data) => data.key === cKey);
        arr = [...beneficiaryData[pIndex].primary_Bene];
        arr.splice(cIndex, 1);
        modObj.primary_Bene = arr;
        break;
      case "con":
        cIndex = beneficiaryData[pIndex].contingent_Bene.findIndex((data) => data.key === cKey);
        arr = [...beneficiaryData[pIndex].contingent_Bene];
        arr.splice(cIndex, 1);
        modObj.contingent_Bene = arr;
        break;
      case "tod":
        cIndex = beneficiaryData[pIndex].transfer_on_Death_Bene.findIndex((data) => data.key === cKey);
        arr = [...beneficiaryData[pIndex].transfer_on_Death_Bene];
        arr.splice(cIndex, 1);
        modObj.transfer_on_Death_Bene = arr;
        break;
      default:
        break;
    }

    const newArr = [...beneficiaryData];
    newArr.splice(pIndex, 1, modObj);

    return newArr;
  }

  deleteBene = (item) => () => {
    const { deleteBeneficiaryData } = this.props;
    const payloadData = this.getDeleteData(item);
    deleteBeneficiaryData(payloadData);
  }

  generateKeyExtractor = (item) => item.key;

  renderContingentBeneficiary = ({ item }) => {
    return (
      <View style={styles.innerContainerView}>
        <CardHeader item={item} onPressDelete={this.deleteBene(item)} />
        <View style={styles.marginPaddingStyle}>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.contingentBeneficiary}</Text>
            <Text style={styles.beneNameStyle}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToInsured}</Text>
            <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.accumulatedValue}</Text>
            <Text style={styles.shortContentValueText}>{`$ ${item.accumulated_Value}`}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.distribution}</Text>
            <Text style={styles.shortContentValueText}>{`${item.distribution_Per} %`}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.infoShortText}>{`Last Updated on ${item.last_modified}`}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderTransferOnDeathBeneficiary = ({ item }) => (
    <View style={styles.innerContainerView}>
      <CardHeader item={item} onPressDelete={this.deleteBene(item)} />
      <View style={styles.marginPaddingStyle}>
        <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.primaryBeneficiary}</Text>
          <Text style={styles.beneNameStyle}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
        </View>
        <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToInsured}</Text>
          <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
        </View>
        <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.accumulatedValue}</Text>
          <Text style={styles.shortContentValueText}>{`$ ${item.accumulated_Value}`}</Text>
        </View>
        <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.distribution}</Text>
          <Text style={styles.shortContentValueText}>{`${item.distribution_Per} %`}</Text>
        </View>
        <View style={styles.marginTopStyle}>
          <Text style={styles.infoShortText}>{`Last Updated on ${item.last_modified}`}</Text>
        </View>
      </View>
    </View>
  );

  renderPrimaryBeneficiary = ({ item }) => (
    <View style={styles.innerContainerView}>
      <CardHeader item={item} onPressDelete={this.deleteBene(item)} />
      <View style={styles.marginPaddingStyle}>
        <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.primaryBeneficiary}</Text>
          <Text style={styles.beneNameStyle}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
        </View>
        <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToInsured}</Text>
          <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
        </View>
        <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.accumulatedValue}</Text>
          <Text style={styles.shortContentValueText}>{`$ ${item.accumulated_Value}`}</Text>
        </View>
        <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.distribution}</Text>
          <Text style={styles.shortContentValueText}>{`${item.distribution_Per} %`}</Text>
        </View>
        <View style={styles.marginTopStyle}>
          <Text style={styles.infoShortText}>{`Last Updated on ${item.last_modified}`}</Text>
        </View>
      </View>
    </View>
  );

  renderBeneficiaryData = ({ item }) => {
    const { collapseIcon } = this.state;
    return (
      <View style={styles.blockMarginTop}>
        <View style={styles.titleHeadingView}>
          <Text style={styles.titleWithIconStyle}>{collapseIcon}</Text>
          <Text style={styles.titleHeaderText}>{item.account_Type}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.containerView}>
          <View style={styles.containerHeaderView}>
            <Text style={styles.containerHeaderText}>{` - Acc Name - ${item.account_Name} | Acc Number - ${item.account_Number}`}</Text>
            <View style={styles.flexDirectionStyle}>
              <Text style={styles.containerHeaderText}>{` Value - $ ${item.accumulated_Value} | ${gblStrings.accManagement.distributionPercentage} - ${item.distribution_Per} %`}</Text>
              <TouchableOpacity onPress={this.handleEdit(item)}>
                <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {item.primary_Bene &&
            (
              <FlatList
                data={item.primary_Bene}
                extraData={this.props}
                keyExtractor={this.generateKeyExtractor}
                renderItem={this.renderPrimaryBeneficiary}
              />
            )
          }
          {item.contingent_Bene &&
            (
              <FlatList
                data={item.contingent_Bene}
                extraData={this.props}
                keyExtractor={this.generateKeyExtractor}
                renderItem={this.renderContingentBeneficiary}
              />
            )
          }
          {item.transfer_on_Death_Bene &&
            (
              <FlatList
                data={item.transfer_on_Death_Bene}
                extraData={this.props}
                keyExtractor={this.generateKeyExtractor}
                renderItem={this.renderTransferOnDeathBeneficiary}
              />
            )
          }
        </View>
      </View>
    );
  }

  render() {
    const { manageBeneficiaryData, navigation } = this.props;
    const { isSuccessNotification, notificationMsg } = this.state;
    if (this.props && manageBeneficiaryData && manageBeneficiaryData.manage_beneficiary && manageBeneficiaryData.manage_beneficiary) {
      beneficiaryData = manageBeneficiaryData.manage_beneficiary;
    }

    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={navigation} />
        <ScrollView style={styles.flexMainView}>
          <View style={styles.mainHeadingView}>
            <View style={styles.addNewBeneView}>
              <Text style={styles.manageBenificiariesHeadline}>
                {gblStrings.accManagement.manageBeneficiaries}
              </Text>
              <TouchableOpacity onPress={this.onClickAddBeneficiary}>
                <Text style={styles.addNewBeneText}>
                  Add Beneficiary
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          {isSuccessNotification ?
            (
              <View style={styles.notificationView}>
                <TouchableOpacity style={styles.flexSmall}>
                  <GIcon name="check" type="MaterialIcons" size={40} color="#707070" />
                </TouchableOpacity>
                <View style={styles.saveSuccessMsgTxt}>
                  <Text style={styles.notificationTxt}>{notificationMsg}</Text>
                </View>
                <TouchableOpacity style={styles.flexSmall}>
                  <GIcon name="close" type="EvilIcons" size={40} color="#707070" />
                </TouchableOpacity>
              </View>
            ) : null
          }
          <View style={styles.mainHeadingView}>
            <Text style={styles.contentText}>
              {gblStrings.accManagement.beneficiariesAccount}
              <Text style={styles.contactUsLink}>
                {gblStrings.accManagement.contactUs}
              </Text>
            </Text>
          </View>
          <FlatList
            data={beneficiaryData}
            extraData={this.props}
            keyExtractor={this.generateKeyExtractor}
            renderItem={this.renderBeneficiaryData}
          />

          {/* ---------------------- Footer View -------------------- */}
          <GFooterSettingsComponent />
        </ScrollView>
      </View>
    );
  }
}

ManageBenificiariesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  manageBeneficiaryData: PropTypes.instanceOf(Object),
  deleteBeneficiaryData: PropTypes.func,
  saveBeneficiaryData: PropTypes.func
};

ManageBenificiariesComponent.defaultProps = {
  navigation: {},
  manageBeneficiaryData: {},
  deleteBeneficiaryData: () => { },
  saveBeneficiaryData: () => { }
};

export default ManageBenificiariesComponent;
