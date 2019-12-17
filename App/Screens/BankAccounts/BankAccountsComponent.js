import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GFooterComponent, GIcon, GButtonComponent} from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class BankAccountsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showDeleteOption: false,
            currentSecuritiesChanged: false,
            bankAccountInfo: [
                {
                    Id: "1",
                    bankName: "Wells Fargo",
                    accountType: "Checking Account",
                    accountNumber: "0012556968666",
                    transitRoutingNumber: "569933659",
                    dateAdded: "20/11/2019",
                    isSystematicWithdrawalPlan: "Yes",
                    isAutomaticInvestmentPlan: "No",
                    showDeleteOption: false,
                },
                {
                    Id: "2",
                    bankName: "Bank Of America",
                    accountType: "Checking Account",
                    accountNumber: "0012556968666",
                    transitRoutingNumber: "569933659",
                    dateAdded: "20/11/2019",
                    isSystematicWithdrawalPlan: "Yes",
                    isAutomaticInvestmentPlan: "No",
                    showDeleteOption: false,
                },
                {
                    Id: "3",
                    bankName: "Wells Fargo",
                    accountType: "Checking Account",
                    accountNumber: "0012556968666",
                    transitRoutingNumber: "569933659",
                    dateAdded: "20/11/2019",
                    isSystematicWithdrawalPlan: "Yes",
                    isAutomaticInvestmentPlan: "No",
                    showDeleteOption: false,
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

    navigateAddBankAccount = () => this.props.navigation.navigate('addBankAccount');
    
    navigateBack = () => this.props.navigation.goBack();

    updateCurrentSecurityChanged = () => this.setState({ currentSecuritiesChanged: !this.state.currentSecuritiesChanged });

    updateShowDeleteOption = (fromView, showDeleteOption, itemId) => {
        console.log("updateShowDeleteOption:::: ", fromView, showDeleteOption, itemId);
        switch (fromView) {

            case 'showDelete':
                if (showDeleteOption) {
                    tmpData = this.state.bankAccountInfo;
                    tmpData.map((item) => {
                        if (item.Id == itemId) {
                            item.showDeleteOption = showDeleteOption;
                        } else {
                            item.showDeleteOption = !showDeleteOption;
                        }
                    });
                    this.updateCurrentSecurityChanged();

                    this.setState({ bankAccountInfo: tmpData });
                    console.log("updateShowDeleteOption:::: ", this.state.bankAccountInfo);
                }
                break;

        }
    }

    deleteBankAccount = (itemId) => {
        let tmpData = [];
        let index = -1;
        tmpData = this.state.bankAccountInfo;
        tmpData.map((item) => {
            if (item.Id == itemId) {
                index = tmpData.indexOf(item);
            } 
        });
        if(index != -1) {
            tmpData.splice(index, 1);
        }

        this.updateCurrentSecurityChanged();

        this.setState({ bankAccountInfo: tmpData });
    }



    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.bankAccounts.bank_account_header}
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
                            extraData={this.state.currentSecuritiesChanged}
                            keyExtractor={(item) => item.Id}
                            renderItem={({ item, i }) => (
                                <View style={styles.bankInfoContainer}>
                                    <View style={styles.bankNameHeader}>
                                        <Text style={styles.accountTypeText}>
                                            {`${item.bankName}`}
                                        </Text>

                                        <TouchableOpacity style={styles.editBankInfo} key={item.Id} onPress={() => this.updateShowDeleteOption('showDelete', true, item.Id)}>
                                            <GIcon
                                                name="dots-vertical"
                                                type="material-community"
                                                size={30}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    {item.showDeleteOption && <GButtonComponent
                                        buttonStyle={styles.deleteBtn}
                                        buttonText={gblStrings.common.delete}
                                        textStyle={styles.backButtonText}
                                        onPress={() => this.deleteBankAccount(item.Id)}
                                    />}

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

                                    <Text style={styles.accountNameHeaderText}>
                                        {gblStrings.bankAccounts.systematic_withdrawal_plan_bank_account}
                                    </Text>

                                    <Text style={styles.accountNameSubHeaderText}>
                                        {`${item.isSystematicWithdrawalPlan}`}
                                    </Text>

                                    <Text style={styles.accountNameHeaderText}>
                                        {gblStrings.bankAccounts.automatic_investment_plan_bank_account}
                                    </Text>

                                    <Text style={styles.accountNameSubHeaderText}>
                                        {`${item.isAutomaticInvestmentPlan}`}
                                    </Text>


                                </View>

                            )}
                        />}

                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.back}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateBack}
                    />
                    
                       
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
    isCollapsed = false;
    console.log("ViewAccountItem:::: ",item);
    return (

        <View style={styles.bankInfoContainer}>
            <View style={styles.bankNameHeader}>
                <Text style={styles.accountTypeText}>
                    {`${item.bankName}`}
                </Text>

                <TouchableOpacity style={styles.editBankInfo} key={item.Id} onPress={() => props.updateShowDeleteOption('showDelete', true, item.Id)}>
                    <GIcon
                        name="dots-vertical"
                        type="material-community"
                        size={30}
                    />
                </TouchableOpacity>
            </View>

            {item.showDeleteOption && <GButtonComponent
                buttonStyle={styles.deleteBtn}
                buttonText={gblStrings.common.delete}
                textStyle={styles.backButtonText}
                onPress={this.navigateBack}
            />}

            <View style={styles.linkBreak2}/>
            
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

            <Text style={styles.accountNameHeaderText}>
                {gblStrings.bankAccounts.systematic_withdrawal_plan_bank_account}
            </Text>

            <Text style={styles.accountNameSubHeaderText}>
                {`${item.isSystematicWithdrawalPlan}`}
            </Text>

            <Text style={styles.accountNameHeaderText}>
                {gblStrings.bankAccounts.automatic_investment_plan_bank_account}
            </Text>

            <Text style={styles.accountNameSubHeaderText}>
                {`${item.isAutomaticInvestmentPlan}`}
            </Text>


        </View>

    );
};

BankAccountsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

export default BankAccountsComponent;