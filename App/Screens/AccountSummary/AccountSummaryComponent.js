import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent } from '../../CommonComponents';
import {styles} from './styles';
import AccountSummaryAccordion from './AccountSummaryAccordion';

class AccountSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [
        {
          "groupName": "Holding Group 1",
          "groupID": 12345,
          "accounts": [
            {
              "accountID": 6001,
              "accountName": "MF GI Plan 1",
              "balance": 8000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 6002,
              "accountName": "IRA Plan 1 IRA Plan 1 IRA Plan 1 IRA Plan 1 IRA Plan 1 IRA Plan 1 IRA Plan 1 IRA Plan 1 IRA Plan 1 IRA Plan 1 IRA Plan 1 ",
              "balance": 3000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 6003,
              "accountName": "529 Plan 1",
              "balance": 5000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 6003,
              "accountName": "ETF Plan 1",
              "balance": 9000,
              "qtd": 2.15,
              "ytd": 1.26
            }
          ]
        },
        {
          "groupName": "Holding Group 2",
          "groupID": 12346,
          "accounts": [
            {
              "accountID": 7001,
              "accountName": "MF GI Plan 2",
              "balance": 9000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 7002,
              "accountName": "IRA Plan 2",
              "balance": 5000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 7003,
              "accountName": "529 Plan 2",
              "balance": 4000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 7003,
              "accountName": "ETF Plan 2",
              "balance": 3000,
              "qtd": 2.15,
              "ytd": 1.26
            }
          ]
        },
        {
          "groupName": "Holding Group 3",
          "groupID": 12347,
          "accounts": [
            {
              "accountID": 8001,
              "accountName": "MF GI Plan 3",
              "balance": 8000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 8002,
              "accountName": "IRA Plan 3",
              "balance": 5000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 8003,
              "accountName": "529 Plan 3",
              "balance": 2000,
              "qtd": 2.15,
              "ytd": 1.26
            },
            {
              "accountID": 8003,
              "accountName": "ETF Plan 3",
              "balance": 1000,
              "qtd": 2.15,
              "ytd": 1.26
            }
          ]
        }
      ]
    };
  }


  renderAccordians = () => {
    const {accounts} = this.state;
    const items = [];
    for (const item of accounts) {
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
        <View style = {styles.headerHoldingGroupView}>
          <Text style={styles.holdingGroupText}>Holding Group</Text>
        </View>
        <View style = {styles.headerBalanceView}>
          <Text style={styles.balanceText}>Balance (USD)</Text>
        </View>
        <View style = {styles.headerReturnsView}>
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
        <ScrollView style = {styles.scrollView}>
          {this.renderAccordians()}
        </ScrollView>
      </View>
    );
  }
}

AccountSummaryComponent.propTypes = {
  navigation : PropTypes.instanceOf(Object),
};

AccountSummaryComponent.defaultProps = {
  navigation : {},
};


export default AccountSummaryComponent;



