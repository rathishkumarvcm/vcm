import React, { Component } from 'react';
import { View, Text, ScrollView, Modal, Image } from 'react-native';
import PropTypes from 'prop-types';
import MultiSelect from 'react-native-multiple-select';
import { GHeaderComponent, GButtonComponent, GInputComponent, showAlert } from '../../CommonComponents';
import { styles, modalStyles } from './styles';
import AccountSummaryAccordion from './AccountSummaryAccordion';
import { scaledHeight } from '../../Utils/Resolution';
import globalStrings from '../../Constants/GlobalStrings';



class AccountSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      showAddGroupModal: false,
      groupName: "",
      selectedItems: [],
      listOfAllAccounts:[],
    };
  }


  static getDerivedStateFromProps(props, prevState) {

    let { accountSummaryInitialState: { holdingGroups } } = props;
    const { groups } = prevState;

    if (groups !== holdingGroups) {
      holdingGroups = holdingGroups.map((item) => {
        const accounts = item.accounts.map((account) => { return { ...account, checked: true }; });
        return { ...item, accounts };
      });
      return { groups: holdingGroups };
    }
    return null;
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  hide = () => {
    this.setState({ showAddGroupModal: false, groupName: "", selectedItems: [] });
  }

  show = () => {
    this.setState({ showAddGroupModal: true, groupName: "", selectedItems: [] });
  }


  renderAccordians = () => {
    const { groups } = this.state;

    const items = [];
    for (const item of groups) {
      items.push(
        <AccountSummaryAccordion
          title={item.groupName}
          data={item.accounts}
        />
      );
    }
    return items;
  }

  getAllAccounts = () => {
    const {groups} = this.state;
    const accountList = [];
      groups.forEach(element => {
      accountList.push(...element.accounts);
    });
    this.setState({
      listOfAllAccounts: this.uniqueArray(accountList, "accountID")
    });
  }

  uniqueArray = (array, objectKey) => {
    const unique = array
         .map(e => e[`${objectKey}`])
         // store the keys of the unique objects
         .map((e, i, final) => final.indexOf(e) === i && i)
         // eliminate the dead keys & store unique objects
        .filter(e => array[`${e}`]).map(e => array[`${e}`]);      
     return unique;
  }
    
  onClickShowModal = () => {
    this.show();
    this.getAllAccounts();
  }

  onClickAddAccount = () => {
    this.onClickAddNewGroup();
  }

  onClickCancelAccount = () => {
    this.hide();
  }


  onClickAddNewGroup = () => {
    const {addHoldingGroup} = this.props;
    const {groupName, listOfAllAccounts} = this.state;
    const selectedAccounts = [];

    const {selectedItems} = this.state;

    listOfAllAccounts.forEach(account => {
      selectedItems.forEach(accountID => {
        if (account.accountID === accountID) {
          selectedAccounts.push(account);
        }
      });
    });


    if(groupName && selectedAccounts.length !== 0) {
      const newHoldingGroup = {
        "groupName": groupName,
        "groupID": 85695,
        "accounts": selectedAccounts,
      };
      addHoldingGroup(newHoldingGroup);
      this.hide();
    }
    else {
      showAlert(globalStrings.common.appName, `Please enter the group name and account`, globalStrings.common.ok);
    }
  }

  setNewGroupName = (text) => {
    this.setState({
      groupName: text
    });
  }

  addNewGroupModal = () => {
    const { showAddGroupModal, groupName, selectedItems, listOfAllAccounts } = this.state;

    return (
      <Modal
        animationType="fade"
        transparent
        visible={showAddGroupModal}
        onRequestClose={() => this.setModalVisible(false)}
      >
        <View style={modalStyles.modalContainerView}>
          <View style={modalStyles.modalView}>
            <View style={modalStyles.groupNameView}>
              <Text style={modalStyles.groupNameText}>Group Name </Text>
            </View>
            {/* <GInputComponent placeholder={'Online ID'} /> */}

            <GInputComponent
              propInputStyle={modalStyles.groupNameInput}
              placeholder="Group Name"
              onChangeText={this.setNewGroupName}
              value={groupName}

            />

            <View style={modalStyles.selectAccountView}>
              <Text style={modalStyles.selectAccountText}> Select Account </Text>
            </View>

            <MultiSelect
              hideTags
              items={listOfAllAccounts}
              uniqueKey="accountID"
              ref={(component) => { this.multiSelect = component; }}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Accounts"
              searchInputPlaceholderText="Search Accounts..."
              onChangeInput={(text) => console.log(text)}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="accountName"
              // searchInputStyle={{ color: '#CCC' }}
              submitButtonColor="#CCC"
              hideSubmitButton
              hideDropdown
              fixedHeight
              searchInputStyle = {{marginLeft: 0, marginRight: 0}}
              styleInputGroup = {{ marginLeft: 30, marginRight: 30}}
              // styleMainWrapper = {{backgroundColor: 'green'}}
              styleTextDropdown = {{ marginLeft: 0, marginLeft: 0}}
              // styleListContainer  = {{backgroundColor: 'yellow', marginTop: 60}}
              styleDropdownMenuSubsection = {{}}
              searchIcon={false}
              styleDropdownMenu = {{backgroundColor: "#FFFFFF",
              borderColor: "#DEDEDF",
              borderRadius: scaledHeight(4),
              borderWidth: 1,
              height: scaledHeight(48),
              justifyContent: "center",
              width: '92%',
              marginLeft: '4%',
              marginRight: '4%',
              
          }}
            />





            <View style={modalStyles.modalButtonView}>
              <GButtonComponent
                buttonStyle={modalStyles.modalAddButton}

                buttonText="Add"
                textStyle={modalStyles.modalButtonText}
                onPress={this.onClickAddAccount}
              />
              <GButtonComponent
                buttonStyle={modalStyles.modalCancelButton}
                buttonText="Cancel"
                textStyle={modalStyles.modalButtonText}
                onPress={this.onClickCancelAccount}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  tableHeader = () => {
    return (
      <View style={styles.tableHeaderView}>
        <View style={styles.headerHoldingGroupView}>
          <Text style={styles.holdingGroupText}>Holding Group</Text>
        </View>
        <View style={styles.headerBalanceView}>
          <Text style={styles.balanceText}>Balance (USD)</Text>
        </View>
        <View style={styles.headerReturnsView}>
          <Text style={styles.returnText}>Returns</Text>
        </View>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {this.addNewGroupModal()}
        <GHeaderComponent navigation={navigation} />
        {this.tableHeader()}
        <ScrollView style={styles.scrollView}>
          {this.renderAccordians()}
        </ScrollView>
        <View style={styles.addGroupContainer}>
          <GButtonComponent
            buttonStyle={styles.addGroupButton}
            buttonText="Add a New Group"
            textStyle={styles.addGroupText}
            onPress={this.onClickShowModal}
          />
        </View>
      </View>
    );
  }
}

AccountSummaryComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  accountSummaryInitialState: PropTypes.instanceOf(Object),
  addHoldingGroup: PropTypes.func
};

AccountSummaryComponent.defaultProps = {
  navigation: {},
  accountSummaryInitialState: {},
  addHoldingGroup: () => {}
};


export default AccountSummaryComponent;



