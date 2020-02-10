import React, { Component } from 'react';
import { View, Text, ScrollView, Modal, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import MultiSelect from 'react-native-multiple-select';
import SelectMultiple from 'react-native-select-multiple';
import { GHeaderComponent, GButtonComponent, GInputComponent } from '../../CommonComponents';
import { styles, modalStyles } from './styles';
import AccountSummaryAccordion from './AccountSummaryAccordion';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

const fruits = ['Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears'];


class AccountSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      showAddGroupModal: false,
      groupName: "",
      selectedItems: [],
      selectedFruits: []
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
    // return {
    //   groups: prevState.holdingGroups
    // };
  }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits });
  }

  onSelectedItemsChange = selectedItems => {
    console.log("selectedItems =>>>><<<<===", selectedItems);
    this.setState({ selectedItems });
  };

  hide = () => {
    this.setState({ showAddGroupModal: false, groupName: "" });
  }

  show = () => {
    this.setState({ showAddGroupModal: true, groupName: "" });
  }


  renderAccordians = () => {
    const { groups } = this.state;

    console.log("groups ===>>>>====>>>", groups);

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


  onClickShowModal = () => {
    this.show();
  }

  onClickHideModal = () => {
    this.hide();
  }

  onClickAddNewGroup = () => {

  }

  setNewGroupName = (text) => {
    this.setState({
      groupName: text
    });
  }

  renderLabel = (label, style) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={{ width: 42, height: 42 }} source={{ uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S' }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={style}>{accountName}</Text>
        </View>
      </View>
    );
  }


  addNewGroupModal = () => {
    const { showAddGroupModal, groupName, selectedItems, groups, selectedFruits } = this.state;
    const { accounts } = groups[0];

    return (
      <Modal
        animationType="fade"
        transparent
        visible={showAddGroupModal}
        onRequestClose={() => this.setModalVisible(false)}
      >
        <View style={modalStyles.modalContainerView}>
          <View style={{ backgroundColor: '#fff', height: '60%', width: '90%', marginTop: "20%"}}>


            <View style={{
              marginTop: scaledHeight(34),
              paddingLeft: '4%',
              paddingRight: '4%',
            }}
            >
              <Text style={{
                color: '#333333DE',
                fontSize: scaledHeight(20),
                fontWeight: 'bold',
                marginBottom: scaledHeight(8)
              }}
              >Group Name
              </Text>
            </View>
            {/* <GInputComponent placeholder={'Online ID'} /> */}

            <GInputComponent
              propInputStyle={{
                marginLeft: '4%',
                marginRight: '4%',
              }}
              placeholder="Group Name"
              onChangeText={this.setNewGroupName}
              value={groupName}

            />

            <View style={{
              marginTop: scaledHeight(34),
              paddingLeft: '4%',
              paddingRight: '4%',
            }}
            >
              <Text style={{
                color: '#333333DE',
                fontSize: scaledHeight(20),
                fontWeight: 'bold',
                marginBottom: scaledHeight(8)
              }}
              > Select Account
              </Text>
            </View>


            {/* <SelectMultiple
          items={accounts}
          selectedItems={selectedFruits}
          renderLabel={this.renderLabel} 
          onSelectionsChange={this.onSelectionsChange} 
          /> */}

            <MultiSelect
              hideTags
              items={accounts}
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
              searchInputStyle = {{backgroundColor: 'red',marginLeft: 0, marginRight: 0}}
              styleInputGroup = {{backgroundColor: 'green', marginLeft: 30, marginRight: 30}}
              // styleMainWrapper = {{backgroundColor: 'green'}}
              styleTextDropdown = {{backgroundColor: 'blue', marginLeft: 0, marginLeft: 0}}
              // styleListContainer  = {{backgroundColor: 'yellow', marginTop: 60}}
              styleDropdownMenuSubsection = {{backgroundColor: 'orange'}}
              searchIcon={false}
              styleDropdownMenu = {{backgroundColor: 'yellow', backgroundColor: "#FFFFFF",
              borderColor: "#DEDEDF",
              borderRadius: scaledHeight(4),
              borderWidth: 1,
              height: scaledHeight(48),
              justifyContent: "center",
              width: '92%',
              marginLeft: '4%',
              marginRight: '4%',

          }}
              // styleDropdownMenuSubsection = {{backgroundColor: 'pink'}}
            />

{/* searchInputStyle?: StyleProp<TextStyle>;
    styleDropdownMenu?: StyleProp<ViewStyle>;
    styleDropdownMenuSubsection?: StyleProp<ViewStyle>;
    styleInputGroup?: StyleProp<ViewStyle>;
    styleItemsContainer?: StyleProp<ViewStyle>;
    styleListContainer?: StyleProp<ViewStyle>;
    styleMainWrapper?: StyleProp<ViewStyle>;
    styleRowList?: StyleProp<ViewStyle>;
    styleSelectorContainer?: StyleProp<ViewStyle>;
    styleTextDropdown?: StyleProp<TextStyle>;
    styleTextDropdownSelected?: StyleProp<TextStyle>; */}





            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: "50%" }}>
              <GButtonComponent
                buttonStyle={{
                  alignContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#544A54',

                  borderColor: '#61285F',
                  borderWidth: 1,

                  height: scaledHeight(50),
                  justifyContent: 'center',
                  // marginBottom:scaledHeight(15),
                  // marginTop:scaledHeight(26),
                  width: '30%',
                  marginRight: 20
                }}

                buttonText="Add"
                textStyle={styles.addGroupText}
                onPress={this.onClickHideModal}
              />
              <GButtonComponent
                buttonStyle={{
                  alignContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#544A54',

                  borderColor: '#61285F',
                  borderWidth: 1,

                  height: scaledHeight(50),
                  justifyContent: 'center',
                  // marginBottom:scaledHeight(15),
                  // marginTop:scaledHeight(26),
                  width: '30%'
                }}
                buttonText="Cancel"
                textStyle={styles.addGroupText}
                onPress={this.onClickHideModal}
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
  accountSummaryInitialState: PropTypes.instanceOf(Object)
};

AccountSummaryComponent.defaultProps = {
  navigation: {},
  accountSummaryInitialState: {}
};


export default AccountSummaryComponent;



