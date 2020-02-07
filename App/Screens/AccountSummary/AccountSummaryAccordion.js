import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import PropTypes from 'prop-types';
import { accordianStyles } from './styles';
import { GIcon } from '../../CommonComponents';

export default class AccountSummaryAccordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
        };
    }

    onClick = (index) => {
        const { data } = this.state;
        const temp = data.slice();
        temp[Number(index)].value = !temp[Number(index)].value;
        this.setState({ data: temp });
    }

    toggleExpand = () => {
        const { expanded } = this.state;
        this.setState({ expanded: !expanded });
    }

    onClick = (index) => {
        const { data } = this.state;

        const temp = data.slice();
        temp[Number(index)].value = !temp[Number(index)].value;
        this.setState({ data: temp });
    }

    toggleExpand = () => {

        const { expanded } = this.state;
        this.setState({ expanded: !expanded });
    }



    renderAccountList = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity style={accordianStyles.accordionRow} onPress={() => this.onClick(index)}>

                    <GIcon
                        name="check-box"
                        type="material"
                        size={25}
                        color="#707070"
                    />

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

                    <GIcon
                        name="more-vert"
                        type="material"
                        size={20}
                        color="#707070"
                    />

                </TouchableOpacity>
                <View style={accordianStyles.childHr} />
            </View>
        );
    }

    calculateAccountBalance = (key) => {
        const { data } = this.state;
        let total = 0;
        total = data.reduce((sum, item) => sum + item[`${key}`], total);
        return total;
    }

    keyExtractor = (item, index) => (`key ${index}`)

    render() {
        const { data, expanded } = this.state;
        const { title } = this.props;


        return (
            <View>
                <TouchableOpacity style={accordianStyles.accordionSectionHeader} onPress={this.toggleExpand}>
                    <View style={accordianStyles.accordionSectionGroupNameView}>
                        <Text style={accordianStyles.accordionSectionGroupNameText}>{title}</Text>
                    </View>
                    <View style={accordianStyles.accordionSectionBalanceView}>
                        <Text style={accordianStyles.accordionSectionBalanceText}>{this.calculateAccountBalance("balance")}</Text>
                    </View>
                    <View style={accordianStyles.accordionSectionReturnsView}>
                        <Text style={accordianStyles.accordionSectionQtdText}>{this.calculateAccountBalance("qtd")}</Text>
                        <Text style={accordianStyles.accordionSectionYtdText}>{this.calculateAccountBalance("ytd")}</Text>
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
                    )}

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
