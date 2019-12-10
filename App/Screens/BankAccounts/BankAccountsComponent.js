import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GInputComponent, GSwitchComponent, GFooterComponent, GButtonComponent, GIcon } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class BankAccountsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            bankAccountInfo: [
                {
                    Id: "1",
                    bankName: "Wells Fargo",
                    accountType: "Checking Account",
                    accountNumber: "0012556968666",
                    transitRoutingNumber: "569933659",
                    dateAdded: "20/11/2019"
                },
                {
                    Id: "2",
                    bankName: "Bank Of America",
                    accountType: "Checking Account",
                    accountNumber: "0012556968666",
                    transitRoutingNumber: "569933659",
                    dateAdded: "20/11/2019"
                },
                {
                    Id: "3",
                    bankName: "Wells Fargo",
                    accountType: "Checking Account",
                    accountNumber: "0012556968666",
                    transitRoutingNumber: "569933659",
                    dateAdded: "20/11/2019"
                },
            ]
        };
    }

    componentDidMount() {
        let payload = [];

        payload.push(JSON.stringify(this.state.bankAccountInfo));
        this.props.getBankAccountInfo(JSON.stringify(payload));
    }

    componentDidUpdate(prevProps) {
        if (this.props && this.props.bankAccountInfo && this.props.bankAccountInfo != prevProps.bankAccountInfo) {
            this.setState({ bankAccountInfo: JSON.parse(JSON.parse(this.props.bankAccountInfo)[0]) });
        }
    }

    navigateAddBankAccount = () => this.props.navigation.navigate('addBankAccount')

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.bankAccounts.bank_account_header}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <View style={styles.subHeader}>
                        <Text style={styles.subHeaderText}>
                            {gblStrings.bankAccounts.current_bank_accounts}
                        </Text>

                        <TouchableOpacity style={styles.addBtn} onPress={this.navigateAddBankAccount}>
                            <Text style={styles.subTextAdd}>
                                {gblStrings.bankAccounts.add}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.linkBreak1} />

                    <Text style={styles.instructionText}>
                        {gblStrings.bankAccounts.lorem_bank_account}
                    </Text>

                    {this.props && this.props.bankAccountInfo &&
                        <FlatList
                            data={this.state.bankAccountInfo}
                            keyExtractor={(item) => item.Id}
                            renderItem={({ item, i }) => (<ViewAccountItem
                                item={item} />)}
                        />}

                    <View style={styles.fullLine} />

                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>

                    <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}

const ViewAccountItem = (props) => {
    item = props.item;
    return (
        <>
            <View style={styles.accountView}>
                <Text style={styles.accountText}>
                    {`${item.bankName}`}
                </Text>
            </View>

            <Text style={styles.accountTypeText}>
                {`${item.accountType}`}
            </Text>

            <Text style={styles.dateAddedText}>
                {gblStrings.bankAccounts.date_added + ` : ${item.dateAdded}`}
            </Text>

            <View style={styles.linkBreak2} />

            <Text style={styles.accountNameHeaderText}>
                {gblStrings.bankAccounts.account_number}
            </Text>

            <Text style={styles.accountNameSubHeaderText}>
                {`${item.accountNumber}`}
            </Text>

            <Text style={styles.accountNameHeaderText}>
                {gblStrings.bankAccounts.transit_routing_number}
            </Text>

            <Text style={styles.accountNameSubHeaderText}>
                {`${item.transitRoutingNumber}`}
            </Text>

        </>
    );
};

BankAccountsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

export default BankAccountsComponent;