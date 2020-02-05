import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GIcon, GButtonComponent, GFooterSettingsComponent } from '../../CommonComponents';
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
      totalContingent: 0,
      totalPrimary: 0,
      totalTransferDeath: 0
    };
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
    const modObj = beneficiaryData[parseInt(pIndex, 0)];
    let cIndex;
    let arr;
    switch (pName) {
      case "pri":
        cIndex = beneficiaryData[parseInt(pIndex, 0)].primary_Bene.findIndex((data) => data.key === cKey);
        arr = [...beneficiaryData[parseInt(pIndex, 0)].primary_Bene];
        arr.splice(cIndex, 1);
        modObj.primary_Bene = arr;
        break;
      case "con":
        cIndex = beneficiaryData[parseInt(pIndex, 0)].contingent_Bene.findIndex((data) => data.key === cKey);
        arr = [...beneficiaryData[parseInt(pIndex, 0)].contingent_Bene];
        arr.splice(cIndex, 1);
        modObj.contingent_Bene = arr;
        break;
      case "tod":
        cIndex = beneficiaryData[parseInt(pIndex, 0)].transfer_on_Death_Bene.findIndex((data) => data.key === cKey);
        arr = [...beneficiaryData[parseInt(pIndex, 0)].transfer_on_Death_Bene];
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

  /* ---------------------- Flat List Events -------------------- */

  generateKeyExtractor = (item) => item.key;

  renderEmptyComponent = () => (
    <View style={styles.emptyComponentContainer}>
      <Text style={styles.containerDataText}>No Contingent Beneficiary available</Text>
    </View>
  );

  renderContingentBeneficiary = ({ item }) => (
    <View style={styles.innerContainerView}>
      <CardHeader item={item} onPressDelete={this.deleteBene(item)} />
    </View>
  );

  renderTransferOnDeathBeneficiary = ({ item }) => (
    <View style={styles.innerContainerView}>
      <CardHeader item={item} onPressDelete={this.deleteBene(item)} />
    </View>
  );

  renderPrimaryBeneficiary = ({ item }) => (
    <View style={styles.innerContainerView}>
      <CardHeader item={item} onPressDelete={this.deleteBene(item)} />
    </View>
  );

  renderBeneficiaryData = ({ item }) => {
    const { collapseIcon, totalPrimary, totalContingent, totalTransferDeath } = this.state;
    return (
      <View style={styles.blockMarginTop}>
        <View style={styles.titleHeadingView}>
          <Text style={styles.titleWithIconStyle}>{collapseIcon}</Text>
          <Text style={styles.titleHeaderText}>{item.account_Type}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.containerView}>

          <View style={styles.containerHeaderView}>
            <View style={styles.beneHeaderView}>
              <View style={styles.innerHeaderTitleView}>
                <Text style={styles.containerHeaderText}>Account Name</Text>
                <Text style={styles.containerDataText}>{item.account_Name}</Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={styles.innerHeaderTitleView}>
                <Text style={styles.containerHeaderText}>Account Number</Text>
                <Text style={styles.containerDataText}>{item.account_Number}</Text>
              </View>
            </View>
            <View style={styles.beneHeaderView}>
              <View style={styles.innerHeaderTitleView}>
                <Text style={styles.containerHeaderText}>Accured Value</Text>
                <Text style={styles.containerDataText}>{item.accumulated_Value}</Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={styles.innerHeaderTitleView}>
                <Text style={styles.containerHeaderText}>Primary Beneficiaries</Text>
                {item.primary_Bene &&
                  (
                    <Text style={styles.containerDataText}>{item.primary_Bene.length ? item.primary_Bene.length : '0'}</Text>
                  )
                }
                {item.transfer_on_Death_Bene &&
                  (
                    <Text style={styles.containerDataText}>{item.transfer_on_Death_Bene && item.transfer_on_Death_Bene ? item.transfer_on_Death_Bene.length : "0"}</Text>
                  )
                }
              </View>
            </View>
            <View style={styles.beneHeaderView}>
              <View style={styles.innerHeaderTitleView}>
                <Text style={styles.containerHeaderText}>Contingent Beneficiaries</Text>
                <Text style={styles.containerDataText}>{item.contingent_Bene && item.contingent_Bene.length ? item.contingent_Bene.length : '0'}</Text>
              </View>
            </View>
          </View>

          {item.primary_Bene &&
            (
              <View>
                <View style={styles.flexDirectionStyle}>
                  <View>
                    <Text style={styles.titleHeaderText}>Primary Beneficiary</Text>
                    {item.primary_Bene && item.primary_Bene.length > 0 &&
                      (
                        <View>
                          <Text style={styles.infoShortText}>{`(Last Updated on ${item.last_modified})`}</Text>
                        </View>
                      )
                    }
                  </View>
                  {item.primary_Bene && item.primary_Bene.length > 0 &&
                    (
                      <TouchableOpacity onPress={this.handleEdit(item)}>
                        <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
                      </TouchableOpacity>
                    )
                  }
                </View>
                <FlatList
                  data={item.primary_Bene}
                  extraData={this.props}
                  keyExtractor={this.generateKeyExtractor}
                  renderItem={this.renderPrimaryBeneficiary}
                />
                {item.primary_Bene && item.primary_Bene.length > 0 &&
                  (
                    <View style={styles.totalDisView}>
                      <Text style={styles.disTxtStr}>{`Total Distribution Percentage of Primary Beneficiary= ${totalPrimary} %`}</Text>
                    </View>
                  )
                }
                <TouchableOpacity style={styles.paddingStyleLeft}>
                  <Text style={styles.addPrimaryLink}>
                    + Add Primary Beneficiary
                  </Text>
                </TouchableOpacity>
              </View>

            )
          }

          {item.contingent_Bene &&
            (
              <View>
                <View style={styles.flexDirectionStyle}>
                  <View>
                    <Text style={styles.titleHeaderText}>Contingent Beneficiary</Text>
                    {item.contingent_Bene && item.contingent_Bene.length > 0 &&
                      (
                        <View>
                          <Text style={styles.infoShortText}>{`(Last Updated on ${item.last_modified})`}</Text>
                        </View>
                      )
                    }
                  </View>
                  {item.contingent_Bene && item.contingent_Bene.length > 0 &&
                    (
                      <TouchableOpacity onPress={this.handleEdit(item)}>
                        <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
                      </TouchableOpacity>
                    )
                  }
                </View>
                <FlatList
                  data={item.contingent_Bene}
                  extraData={this.props}
                  keyExtractor={this.generateKeyExtractor}
                  renderItem={this.renderContingentBeneficiary}
                  ListEmptyComponent={this.renderEmptyComponent}
                />
                {item.contingent_Bene && item.contingent_Bene.length > 0 &&
                  (
                    <View style={styles.totalDisView}>
                      <Text style={styles.disTxtStr}>{`Total Distribution Percentage of Contingent Beneficiary= ${totalContingent} %`}</Text>
                    </View>
                  )
                }
                <TouchableOpacity style={styles.paddingStyleLeft}>
                  <Text style={styles.addPrimaryLink}>
                    + Add Contingent Beneficiary
                  </Text>
                </TouchableOpacity>
              </View>

            )
          }

          {item.transfer_on_Death_Bene &&
            (
              <View>
                <View style={styles.flexDirectionStyle}>
                  <View>
                    <Text style={styles.titleHeaderText}>Primary Beneficiary</Text>
                    {item.transfer_on_Death_Bene && item.transfer_on_Death_Bene.length > 0 &&
                      (
                        <View>
                          <Text style={styles.infoShortText}>{`(Last Updated on ${item.last_modified})`}</Text>
                        </View>
                      )
                    }
                  </View>
                  {item.transfer_on_Death_Bene && item.transfer_on_Death_Bene.length > 0 &&
                    (
                      <TouchableOpacity onPress={this.handleEdit(item)}>
                        <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
                      </TouchableOpacity>
                    )
                  }
                </View>
                <FlatList
                  data={item.transfer_on_Death_Bene}
                  extraData={this.props}
                  keyExtractor={this.generateKeyExtractor}
                  renderItem={this.renderTransferOnDeathBeneficiary}
                />
                {item.transfer_on_Death_Bene && item.transfer_on_Death_Bene.length > 0 &&
                  (
                    <View style={styles.totalDisView}>
                      <Text style={styles.disTxtStr}>{`Total Distribution Percentage of Primary Beneficiary= ${totalTransferDeath} %`}</Text>
                    </View>
                  )
                }
                <TouchableOpacity style={styles.paddingStyleLeft}>
                  <Text style={styles.addPrimaryLink}>
                    + Add Primary Beneficiary
                  </Text>
                </TouchableOpacity>
              </View>
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

          {/* ---------------------- Notification View -------------------- */}

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
          {/* ---------------------- List of Beneficiaries -------------------- */}

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

          {/* ---------------------- Upload View -------------------- */}


          <View style={styles.mainHeadingView}>
            <View style={styles.downloadContainer}>
              <Text style={styles.downloadHeadingTxt}>Download the Form</Text>
              <Text style={styles.downloadDescTxt}>“Mutual Fund Designation of Beneficiary -Traditional, Roth ,SEP and Simple IRAs” form</Text>
              <GButtonComponent
                buttonStyle={styles.downloadPdfBtn}
                buttonText="Download PDFs"
                textStyle={styles.downloadPdfBtnTxt}
              />
            </View>
            <View style={styles.downloadContainer}>
              <Text style={styles.downloadHeadingTxt}>To Upload Forms</Text>
              <Text style={styles.downloadDescTxt}>Lorem Ipsum dolor dit amet sun nam caprioce delice Ipsum dolor dit amet sun nam caprioce delice</Text>
              <GButtonComponent
                buttonStyle={styles.downloadPdfBtn}
                buttonText="Click Here"
                textStyle={styles.downloadPdfBtnTxt}
              />
            </View>
          </View>


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
