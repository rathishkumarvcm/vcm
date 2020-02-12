import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import PropTypes from 'prop-types';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { accordianStyles } from './styles';
import { GIcon } from '../../CommonComponents';

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

    onClick = (index) => {
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

    showMenu = (index) => {
        this.accountMenu[Number(index)].show();
    };

    hideGroupMenu = () => {
        this.groupMenu.hide();
    };

    showGroupMenu = () => {
        this.groupMenu.show();
    };

    addAccountInGroup = () => {
        this.hideGroupMenu();
    }

    removeGroup = () => {
        this.hideGroupMenu();
    }


    renderAccountList = ({ item, index }) => {
        return (
            <View>

                <View style={accordianStyles.accordionRow}>

                    <TouchableOpacity onPress={() => this.onClick(index)}>
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
                        ref={(input) => { this.accountMenu[index] = input; }}
                        button={(
                            <TouchableOpacity onPress={() => this.showMenu(index)}>
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
                        <MenuItem onPress={() => this.hideMenu(index)}>Place an Order</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={() => this.hideMenu(index)}>View Account Activity</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={() => this.hideMenu(index)}>View Statement</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={() => this.hideMenu(index)}>Manage Preferences</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={() => this.hideMenu(index)}>Manage Account Services</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={() => this.hideMenu(index)}>Remove Account</MenuItem>
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
        const { title } = this.props;

        return (
            <View style={accordianStyles.accordionSectionHeader}>

                <View style={accordianStyles.accordionSectionGroupNameView}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={this.toggleExpand}>
                        {
                            expanded ? (<GIcon name="remove" type="material" size={25} color="#707070" />)
                                : (<GIcon name="add" type="material" size={25} color="#707070" />)
                        }
                        <Text style={accordianStyles.accordionSectionGroupNameText} numberOfLines={2}>{title}</Text>
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
                    ref={(input) => { this.groupMenu = input; }}
                    button={(
                        <TouchableOpacity onPress={() => this.showGroupMenu()}>
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
                    <MenuItem onPress={this.addAccountInGroup}>Add Account</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.removeGroup}>Remove Group</MenuItem>
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
                            />
                        </View>
                    )
                }
            </View>
        );
    }
}

AccountSummaryAccordion.propTypes = {
    title: PropTypes.instanceOf(String),
    data: PropTypes.instanceOf(Array)
};

AccountSummaryAccordion.defaultProps = {
    title: '',
    data: []
};
