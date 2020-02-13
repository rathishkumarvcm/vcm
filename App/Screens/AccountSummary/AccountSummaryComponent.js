import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent, GButtonComponent, showAlert } from '../../CommonComponents';
import { styles } from './styles';
import AccountSummaryAccordion from './AccountSummaryAccordion';
import AccountSummaryModal from './AccountSummaryModal';
import GlobalStrings from '../../Constants/GlobalStrings';

class AccountSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      showAddGroupModal: false,
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

  renderAccordians = () => {
    const { groups } = this.state;
    const items = [];
    groups.forEach((item, index) => {
      items.push(
        <AccountSummaryAccordion
          title={item.groupName}
          data={item.accounts}
          group={groups[Number(index)]}
          removeGroup={this.removeGroupFromList}
        />
      );
    });
    return items;
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

  hide = () => {
    this.setState({ showAddGroupModal: false });
  }

  show = () => {
    this.setState({ showAddGroupModal: true });
  }

  onClickAddNewGroup = () => {
    this.show();
  }

  onClickCancel = () => {
    this.hide();
  }

  createRandomNumber = () => {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  onClickAdd = (holdingGroup) => {
    // this.show();
    const randomGroupID = this.createRandomNumber();
    const { addHoldingGroup } = this.props;
    if (holdingGroup.groupName && holdingGroup.selectedAccounts.length !== 0) {
      const newHoldingGroup = {
        "groupName": holdingGroup.groupName,
        "groupID": randomGroupID,
        "accounts": holdingGroup.selectedAccounts,
      };
      addHoldingGroup(newHoldingGroup);
      this.hide();
    }
    else {
      showAlert(GlobalStrings.common.appName, `Please enter the group name and account`, GlobalStrings.common.ok);
    }
  }

  removeGroupFromList = (groupID) => {
    const { groups } = this.state;
    const { removeHoldingGroup } = this.props;

    if (groupID) {
      const updatedGroup = groups.filter((group) => group.groupID !== groupID );
      removeHoldingGroup(updatedGroup);
    }
  }

  render() {
    const { navigation } = this.props;
    const { groups, showAddGroupModal } = this.state;
    return (
      <View style={styles.container}>
        <AccountSummaryModal showAddGroupModal={showAddGroupModal} groups={groups} onClickAdd={this.onClickAdd} onClickCancel={this.onClickCancel} />
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
            onPress={this.onClickAddNewGroup}
          />
        </View>
      </View>
    );
  }
}

AccountSummaryComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  accountSummaryInitialState: PropTypes.instanceOf(Object),
  addHoldingGroup: PropTypes.func,
  removeHoldingGroup: PropTypes.func,
};

AccountSummaryComponent.defaultProps = {
  navigation: {},
  accountSummaryInitialState: {},
  addHoldingGroup: () => {},
  removeHoldingGroup: () => {}
};

export default AccountSummaryComponent;



