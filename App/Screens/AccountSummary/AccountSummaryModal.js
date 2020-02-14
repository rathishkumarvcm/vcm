import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import PropTypes from 'prop-types';
import MultiSelect from 'react-native-multiple-select';
import { modalStyles } from './styles';
import { GButtonComponent, GInputComponent, showAlert } from '../../CommonComponents';
import globalStrings from '../../Constants/GlobalStrings';


class AccountSummaryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: "",
      selectedItems: [],
      listOfAllAccounts: [],
      selectedGroupID:null
    };

    this.multiSelect = null;
  }

  componentDidMount() {
    this.getAllAccounts();
  }

  static getDerivedStateFromProps(props, prevState) {
    const { groups, groupID } = props;
    if(groupID !== undefined && groupID !== null && prevState.selectedGroupID !== props.groupID) {
      const selectedGroup = groups.filter((group) => group.groupID === groupID );
      const selectedGroupName = selectedGroup[0].groupName;
      const selectedItems = selectedGroup[0].accounts.map(
        (account) => {
          return account.accountID;
        }
      );  
      return {selectedItems, groupName:selectedGroupName, selectedGroupID: groupID};
    }

    return {selectedGroupID: groupID};
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  getAllAccounts = () => {

    const { groups } = this.props;

    // if(groupID !== undefined && groupID !== null ) {
    //   const selectedGroup = groups.filter((group) => group.groupID === groupID );
    //   const selectedGroupName = selectedGroup[0].groupName;
    //   const selectedItems = selectedGroup[0].accounts.map(
    //     (account) => {
    //       return account.accountID;
    //     }
    //   );  
    // }

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

  createRandomNumber = () => {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  onClickAddAccount = () => {
    const { onClickAdd } = this.props;
    const { groupName, listOfAllAccounts } = this.state;
    const selectedAccounts = [];

    const { selectedItems } = this.state;

    listOfAllAccounts.forEach(account => {
      selectedItems.forEach(accountID => {
        if (account.accountID === accountID) {
          selectedAccounts.push(account);
        }
      });
    });

    if (groupName && selectedAccounts.length !== 0) {
      const randomGroupID = this.createRandomNumber();

      const { selectedGroupID } = this.state;

      const newHoldingGroup = { "groupName": groupName, "accounts": selectedAccounts, "groupID": selectedGroupID || randomGroupID};
      
      onClickAdd(newHoldingGroup);

      // Remove the modal data.
      this.setState({ groupName: "", selectedItems: [] });
    }
    else {
      showAlert(globalStrings.common.appName, `Please enter the group name and account`, globalStrings.common.ok);
    }
  }

  onClickCancelAccount = () => {
    const { onClickCancel } = this.props;
    onClickCancel();

    // Remove the modal data.
    this.setState({ groupName: "", selectedItems: [] });
  }

  setNewGroupName = (text) => {
    this.setState({
      groupName: text
    });
  }

  setGroupMenuRef = component => {
    this.multiSelect = component;
};


  addNewGroupModal = () => {
    const { groupName, selectedItems, listOfAllAccounts } = this.state;
    const { showAddGroupModal } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent
        visible={showAddGroupModal}
      >
        <View style={modalStyles.modalContainerView}>
          <View style={modalStyles.modalView}>
            <View style={modalStyles.groupNameView}>
              <Text style={modalStyles.groupNameText}>Group Name </Text>
            </View>
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
              ref={this.setGroupMenuRef}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Accounts"
              searchInputPlaceholderText="Search Accounts..."
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#5B89B5"
              selectedItemIconColor="#5B89B5"
              itemTextColor="#000"
              displayKey="accountName"
              // searchInputStyle={{ color: '#CCC' }}
              submitButtonColor="#CCC"
              hideSubmitButton
              hideDropdown
              fixedHeight
              searchInputStyle={modalStyles.multiSelectSearchInputStyle}
              styleInputGroup={modalStyles.multiSelectStyleInputGroup}
              styleTextDropdown={modalStyles.multiSelectStyleTextDropdown}
              searchIcon={false}
              styleDropdownMenu={modalStyles.multiSelectDropDownMenu}
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

  render() {
    return (
      <View>
        {this.addNewGroupModal()}
      </View>
    );
  }
}


AccountSummaryModal.propTypes = {
  showAddGroupModal: PropTypes.instanceOf(Boolean),
  groups: PropTypes.instanceOf(Array),
  onClickAdd: PropTypes.func,
  onClickCancel: PropTypes.func,
  groupID: PropTypes.instanceOf(String)

};

AccountSummaryModal.defaultProps = {
  showAddGroupModal: false,
  groups: [],
  onClickAdd: () => {},
  onClickCancel: () => {},
  groupID: ''
};


export default AccountSummaryModal;
