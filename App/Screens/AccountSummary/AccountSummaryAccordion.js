import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, InteractionManager } from "react-native";
import PropTypes from 'prop-types';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { accordianStyles } from './styles';
import { GIcon } from '../../CommonComponents';
import GlobalStrings from '../../Constants/GlobalStrings';

const keys = {
    balance: "balance",
    qtd: "qtd",
    ytd: "ytd",
};

export default class AccountSummaryAccordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
        };

        this.accountMenu = [];
        this.groupMenu = null;
    }

    static getDerivedStateFromProps (props, prevState) {
        if(props.data.length !== prevState.data.length) {
            return { data: props.data };
        }
        return null;
    }

    setAccountMenuRef = index => input => {
        this.accountMenu[Number(index)] = input;
    };

    setGroupMenuRef = input => {
        this.groupMenu = input;
    };



    onClick = (index) => () => {
        const { data } = this.state;
        const temp = data.slice();
        temp[Number(index)].checked = !temp[Number(index)].checked;
        this.setState({ data: temp });
    }

    toggleExpand = () => {
        const { expanded } = this.state;
        this.setState({ expanded: !expanded });
    }

    setMenuRef = (ref, index) => {
        this.accountMenu[Number(index)] = ref;
    };

    hideMenu = (index) => {
        this.accountMenu[Number(index)].hide();
    };

    showMenu = (index) => () => {
        this.accountMenu[Number(index)].show();
    };

    hideGroupMenu = () => {
        this.groupMenu.hide();
    };

    showGroupMenu = () => {
        this.groupMenu.show();
    };

    addAccountInGroup = (groupId) => () => {
        const { addAccount } = this.props;
        InteractionManager.runAfterInteractions(() => {
            addAccount(groupId);
        });
        this.hideGroupMenu();
    }

    removeGroup = (groupId) => () => {
        const { removeGroup } = this.props;
        removeGroup(groupId);
        this.hideGroupMenu();
    }

    removeAccountFromGroup = (index) => () => {
        const { removeAccount, group } = this.props;
        this.hideMenu(index);
        const selectedAccountID = group.accounts[Number(index)].accountID;
        removeAccount(selectedAccountID, group);
    }

    manageAccountServices = (index) => () => {
        this.hideMenu(index);
    }

    managePreferences = (index) => () => {
        this.hideMenu(index);
    }

    viewStatement = (index) => () => {
        this.hideMenu(index);
    }

    viewAccountActivity = (index) => () => {
        this.hideMenu(index);
    }

    placeAnOrder = (index) => () => {
        this.hideMenu(index);
    }

    renderAccountList = ({ item, index }) => {

        return (
            <View>

                <View style={accordianStyles.accordionRow}>

                    <TouchableOpacity onPress={this.onClick(index)}>
                        {
                            item.checked ? (<GIcon name="check-box" type="material" size={25} color="#707070" />)
                                : (<GIcon name="check-box-outline-blank" type="material" size={25} color="#707070" />)
                        }
                    </TouchableOpacity>

                    <View style={accordianStyles.accountNameView}>
                        <Text numberOfLines={2} style={accordianStyles.accountNameText}>{item.accountName}</Text>
                    </View>
                    <View style={accordianStyles.accountBalanceView}>
                        <Text style={accordianStyles.accountBalanceText}>{item.balance}</Text>
                    </View> 
                    <View style={accordianStyles.accountReturnsView}>
                        <Text style={accordianStyles.accountQtdText}>{item.qtd}</Text>
                        <Text style={accordianStyles.accountYtdText}>{item.ytd}</Text>
                    </View>

                    <Menu
                        ref={this.setAccountMenuRef(index)}
                        button={(
                            <TouchableOpacity onPress={this.showMenu(index)}>
                                <GIcon
                                    name="more-vert"
                                    type="material"
                                    size={20}
                                    color="#707070"
                                />
                            </TouchableOpacity>
                        )}
                    >
                        <MenuDivider />
                        <MenuItem onPress={this.placeAnOrder(index)}>{GlobalStrings.accountSummary.placeAnOrder}</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.viewAccountActivity(index)}>{GlobalStrings.accountSummary.viewAccountActivity}</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.viewStatement(index)}>{GlobalStrings.accountSummary.viewStatement}</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.managePreferences(index)}>{GlobalStrings.accountSummary.managePreferences}</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.manageAccountServices(index)}>{GlobalStrings.accountSummary.manageAccountServices}</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.removeAccountFromGroup(index)}>{GlobalStrings.accountSummary.removeAccount}</MenuItem>
                        <MenuDivider />
                    </Menu>
                </View>
                <View style={accordianStyles.childHr} />
            </View>
        );
    }

    calculateAccountBalance = (key) => {
        const { data } = this.state;
        let total = 0;
        let noOfChecked = 0;
        data.forEach(element => {
            if (element.checked === true) {
                total += element[`${key}`];
                noOfChecked += 1;
            }
        });
        switch (key) {
            case keys.qtd:
                return total !== 0 ? Number(total / noOfChecked).toFixed(2) : 0.00;
            case keys.ytd:
                return total !== 0 ? Number(total / noOfChecked).toFixed(2) : 0.00;
            default:
                return Number(total);
        }
    }

    keyExtractor = (item, index) => (`key ${index}`)

    accordianSectionHeader = () => {

        const { expanded } = this.state;
        const { group } = this.props;

        return (
            <View style={accordianStyles.accordionSectionHeader}>

                <View style={accordianStyles.accordionSectionGroupNameView}>
                    <TouchableOpacity style={accordianStyles.plusMinusView} onPress={this.toggleExpand}>
                        {
                            expanded ? (<GIcon name="remove" type="material" size={25} color="#707070" />)
                                : (<GIcon name="add" type="material" size={25} color="#707070" />)
                        }
                        <Text style={accordianStyles.accordionSectionGroupNameText} numberOfLines={2}>{group.groupName}</Text>
                    </TouchableOpacity>
                </View>
                <View style={accordianStyles.accordionSectionBalanceView}>
                    <Text style={accordianStyles.accordionSectionBalanceText}>{this.calculateAccountBalance(keys.balance)}</Text>
                </View>
                <View style={accordianStyles.accordionSectionReturnsView}>
                    <Text style={accordianStyles.accordionSectionQtdText}>{this.calculateAccountBalance(keys.qtd)}</Text>
                    <Text style={accordianStyles.accordionSectionYtdText}>{this.calculateAccountBalance(keys.ytd)}</Text>
                </View>

                <Menu
                    ref={this.setGroupMenuRef}
                    button={(
                        <TouchableOpacity onPress={this.showGroupMenu}>
                            <GIcon
                                name="more-vert"
                                type="material"
                                size={25}
                                color="#707070"
                            />
                        </TouchableOpacity>
                    )}
                >
                    <MenuDivider />
                    <MenuItem onPress={this.addAccountInGroup(group.groupID)}>{GlobalStrings.accountSummary.addAccount}</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.removeGroup(group.groupID)}>{GlobalStrings.accountSummary.removeGroup}</MenuItem>
                    <MenuDivider />
                </Menu>

            </View>
        );
    }

    render() {
        const { data, expanded } = this.state;
        return (
            <View>
                {this.accordianSectionHeader()}
                <View style={accordianStyles.parentHr} />
                {
                    expanded && (
                        <View>
                            <FlatList
                                data={data}
                                numColumns={1}
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={this.renderAccountList}
                                keyExtractor={this.keyExtractor}
                                extraData={data}
                            />
                        </View>
                    )
                }
            </View>
        );
    }
}

AccountSummaryAccordion.propTypes = {
    data: PropTypes.instanceOf(Array),
    group: PropTypes.instanceOf(Object),
    addAccount: PropTypes.func,
    removeGroup: PropTypes.func,
    removeAccount: PropTypes.func,
};

AccountSummaryAccordion.defaultProps = {
    data: [],
    group: {},
    addAccount: () => {},
    removeGroup: () => {},
    removeAccount: () => {},
};
