import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent, GButtonComponent } from '../../CommonComponents';
import { styles } from './styles';
import AccountSummaryAccordion from './AccountSummaryAccordion';
import AccountSummaryModal from './AccountSummaryModal';

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
    this.setState({ showAddGroupModal: false});
  }

  show = () => {
    this.setState({ showAddGroupModal: true});
  }

  onClickAddNewGroup = () => {
    this.show();
  }

  onClickCancel = () => {
    this.hide();
  }

  onClickAdd = (newHoldingGroup) => {
    // this.show();
    const {addHoldingGroup} = this.props;
    addHoldingGroup(newHoldingGroup);
    this.hide();
  }

  render() {
    const { navigation } = this.props;
    const { groups, showAddGroupModal } = this.state;
    return (
      <View style={styles.container}>
        <AccountSummaryModal showAddGroupModal = {showAddGroupModal} groups = {groups} onClickAdd = {this.onClickAdd} onClickCancel={this.onClickCancel} />
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
  addHoldingGroup: PropTypes.func
};

AccountSummaryComponent.defaultProps = {
  navigation: {},
  accountSummaryInitialState: {},
  addHoldingGroup: () => {}
};


export default AccountSummaryComponent;



