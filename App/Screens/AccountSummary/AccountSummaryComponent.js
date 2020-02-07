import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent, GButtonComponent } from '../../CommonComponents';
import { styles } from './styles';
import AccountSummaryAccordion from './AccountSummaryAccordion';

class AccountSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }


  static getDerivedStateFromProps(props, prevState) {

    let { accountSummaryInitialState: { holdingGroups } } = props;
    const { groups } = prevState;

    if (groups.length === 0) {
      holdingGroups = holdingGroups.map((item) => {
        const accounts = item.accounts.map((account) => { return { ...account, checked: true }; });
        return { ...item, accounts };
      });
      return { groups: holdingGroups };
    }
    return {
      groups: prevState.holdingGroups
    };
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

  onClickAddGroup = () => {

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
        <GHeaderComponent navigation={navigation} />
        {this.tableHeader()}
        <ScrollView style={styles.scrollView}>
          {this.renderAccordians()}
        </ScrollView>
        <View style = {styles.addGroupContainer}>
          <GButtonComponent
            buttonStyle={styles.addGroupButton}
            buttonText="Add an New Account"
            textStyle={styles.addGroupText}
            onPress={this.onClickOpenAnAccount}
          />
        </View>
      </View>
    );
  }
}

AccountSummaryComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  accountSummaryInitialState: PropTypes.instanceOf(Object)
};

AccountSummaryComponent.defaultProps = {
  navigation: {},
  accountSummaryInitialState: {}
};


export default AccountSummaryComponent;



