import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import PropTypes from 'prop-types';
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
    }

    // onClick = (index) => {
    //     const { data } = this.state;
    //     const temp = data.slice();
    //     temp[Number(index)].value = !temp[Number(index)].value;
    //     this.setState({ data: temp });
    // }

    toggleExpand = () => {
        const { expanded } = this.state;
        this.setState({ expanded: !expanded });
    }

    onClickMenu = () => {
    }

    renderMenuOptions = () => ({ item, index }) => (
        <TouchableOpacity style={accordianStyles.editDropdown}>
            <Text style={accordianStyles.editDropdownText}
                onPress={this.onMenuItemClicked(index)}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    onMenuItemClicked = () => () => {

        // const { selectedIndex, refreshAddressData, profileUserAddressValue } = this.state;
        // switch (index) {
        //     case 0:
        //         this.setState({
        //             refreshAddressData: !refreshAddressData,
        //             selectedIndex: -1
        //         });
        //         break;

        //     case 1:
        //         showAlertWithCancelButton(globalString.common.vcmMemberService,
        //             globalString.common.deleteAlertMsg,
        //             globalString.common.cancel,
        //             globalString.common.delete,
        //             () => {
        //                 this.setState({
        //                     refreshAddressData: !refreshAddressData,
        //                     selectedIndex: -1
        //                 });
        //             },
        //             () => {
        //                 const array = [...profileUserAddressValue];
        //                 const indexDelete = selectedIndex;
        //                 if (indexDelete !== -1) {
        //                     array.splice(indexDelete, 1);
        //                     this.setState({
        //                         profileUserAddressValue: array,
        //                         refreshAddressData: !refreshAddressData,
        //                         selectedIndex: -1
        //                     });
        //                 }
        //             });
        //         break;

        //     default:
        //         break;
        // }
    }



    // dropDownTextName={styles.lblTxt}
    // data={supportedAccountData}
    // textInputStyle={styles.dropdownTextInput}
    // dropDownLayout={styles.dropDownLayout}
    // dropDownValue={beneData.account_Type}
    // selectedDropDownValue={this.selectedSupportedAccountType()}
    // errorFlag={supportedAccountFlag}
    // errorText={supportedAccountMsg}


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
    // onPress={() => this.onClick(index)}


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
                    <TouchableOpacity onPress={this.onClickMenu()}>
                        <GIcon
                            name="more-vert"
                            type="material"
                            size={20}
                            color="#707070"
                        />
                    </TouchableOpacity>



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

    render() {
        const { data, expanded } = this.state;
        const { title } = this.props;
        return (
            <View>
                <TouchableOpacity style={accordianStyles.accordionSectionHeader} onPress={this.toggleExpand}>
                    {
                        expanded ? (<GIcon name="remove" type="material" size={25} color="#707070" />)
                            : (<GIcon name="add" type="material" size={25} color="#707070" />)
                    }

                    <View style={accordianStyles.accordionSectionGroupNameView}>
                        <Text style={accordianStyles.accordionSectionGroupNameText} numberOfLines={2}>{title}</Text>
                    </View>
                    <View style={accordianStyles.accordionSectionBalanceView}>
                        <Text style={accordianStyles.accordionSectionBalanceText}>{this.calculateAccountBalance(keys.balance)}</Text>
                    </View>
                    <View style={accordianStyles.accordionSectionReturnsView}>
                        <Text style={accordianStyles.accordionSectionQtdText}>{this.calculateAccountBalance(keys.qtd)}</Text>
                        <Text style={accordianStyles.accordionSectionYtdText}>{this.calculateAccountBalance(keys.ytd)}</Text>
                    </View>

                    <GIcon
                        name="more-vert"
                        type="material"
                        size={25}
                        color="#707070"
                    />

                </TouchableOpacity>

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

                {/* {
                    showMenu ? (
                        <FlatList style={accordianStyles.editFlatList}
                            data={editDeleteMenuOption}
                            renderItem={this.renderMenuOptions()}
                        />
                    ) : null
                }
 */}

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
