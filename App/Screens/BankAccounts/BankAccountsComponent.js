import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { styles } from './styles';
import { GHeaderComponent, GFooterComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class BankAccountsComponent extends Component {
    constructor(props) {
        super(props);
        this.updateBankDetails = true;
        this.showAlert = true;
        this.confirmDelete = false;
        this.deleteId = "";
        this.accountNumber = "";
        this.bankName = "";
        this.state = {
            stateUpdated: false,
            bankAccountInfo: []
        };
    }

    componentDidMount() {
        this.props.getBankAccountInfo();
    }

    navigateAddBankAccount = () => {
        this.updateBankDetails = true;
        this.showAlert = true;
        this.props.navigation.navigate('addBankAccount');
    }

    navigateBack = () => this.props.navigation.goBack();

    updateView = () => this.setState({ stateUpdated: !this.state.stateUpdated });

    updateShowDeleteOption = (fromView, showDeleteOption, itemId) => {
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
                    this.updateView();

                    this.setState({ bankAccountInfo: tmpData });
                }
                break;

                default:
                    break;
        }
    }

    deleteBankAccount = (shouldDelete) => {
        this.confirmDelete = false;
        if (shouldDelete) {
            let payload = [];
            payload.push(JSON.stringify(this.state.bankAccountInfo));
            this.props.deleteBankAccount(JSON.stringify(payload), this.accountNumber);
        } else {
            let tmpData = [];
            tmpData = this.state.bankAccountInfo;
            tmpData.map((item) => {
                if (item.Id == this.deleteId) {
                    item.showDeleteOption = false;
                }
            });
            this.setState({ bankAccountInfo: tmpData });
        }
        this.updateView();
    }

    addBankAccount = (item) => {
        let payload = [];
        payload.push(JSON.stringify(this.state.bankAccountInfo));
        this.props.addBankAccount(item, JSON.stringify(payload));

        this.updateBankDetails = false;
        this.updateView();
    }

    updateIsScuccess = (showAlert) => {
        this.showAlert = showAlert;
        this.updateView();
    }

    updateConfirmDelete = (confirmDelete, item) => {
        this.confirmDelete = confirmDelete;
        this.deleteId = item.Id;
        this.accountNumber = item.accountNumber;
        this.bankName = item.bankName;
        this.updateView();
    }

    render() {
        if (this.props && this.props.bankAccountInfo && this.props.bankAccountInfo != this.state.bankAccountInfo) {
            this.setState({ bankAccountInfo: this.props.bankAccountInfo });
        }
        const {navigation} = this.props;
        const isSuccess = navigation.getParam('isSuccess', false);
        const accountType = navigation.getParam('accountType', '');
        const financialInstitutionName = navigation.getParam('financialInstitutionName', "");
        const accountOwnerNames = navigation.getParam('accountOwnerNames', "");
        const transitRoutingNumber = navigation.getParam('transitRoutingNumber', "");
        const accountNumber = navigation.getParam('accountNumber', "");

        let tmpData = {};
        if (isSuccess) {
            tmpData["Id"] = (this.state.bankAccountInfo.length + 1).toString();
            tmpData["bankName"] = financialInstitutionName;
            tmpData["accountType"] = accountType;
            tmpData["accountNumber"] = accountNumber;
            tmpData["transitRoutingNumber"] = transitRoutingNumber;
            tmpData["dateAdded"] = "20/09/2019";
            tmpData["isSystematicWithdrawalPlan"] = "No";
            tmpData["isAutomaticInvestmentPlan"] = "No";
            tmpData["showDeleteOption"] = false;
        }

        if (isSuccess && this.updateBankDetails) {
            this.addBankAccount(tmpData);
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
                    {this.confirmDelete &&
                        <View style={styles.bankInfoContainer}>
                            <Text style={styles.accountNameHeaderText}>
                                {`Delete ${this.bankName}`}
                            </Text>

                            <Text style={styles.accountNameSubHeaderText}>
                                {`Are you sure you want to delete ${this.bankName}`}
                            </Text>

                            <View style={styles.confirmDeleteView}>
                                <GButtonComponent
                                    buttonStyle={styles.cancelBtn}
                                    buttonText={gblStrings.common.cancel}
                                    textStyle={styles.cencelButtonText}
                                    onPress={() => this.deleteBankAccount(false)}
                                />
                                <GButtonComponent
                                    buttonStyle={styles.deleteBtn1}
                                    buttonText={gblStrings.common.delete}
                                    textStyle={styles.deleteButtonText}
                                    onPress={() => this.deleteBankAccount(true)}
                                />
                            </View>
                        </View>
                    }

                    {!this.confirmDelete &&
                        <>
                            {isSuccess && this.showAlert &&
                                <TouchableOpacity style={styles.alertBox} onPress={() => this.updateIsScuccess(false)}>
                                    <Text style={styles.alertText}>
                                        {gblStrings.bankAccounts.success_add_bank_account}
                                    </Text>
                                </TouchableOpacity>
                            }

                            <View style={styles.header}>
                                <Text style={styles.headerText}>
                                    {gblStrings.bankAccounts.bank_account_header}
                                </Text>

                                <TouchableOpacity style={styles.addBtn} onPress={() => this.navigateAddBankAccount()}>
                                    <Text style={styles.subTextAdd}>
                                        {gblStrings.bankAccounts.add}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.linkBreak1} />

                            <Text style={styles.instructionText}>
                                {gblStrings.bankAccounts.lorem_bank_account}
                            </Text>
                        </>
                    }

                    {this.props && this.props.bankAccountInfo &&
                        <FlatList
                            data={this.state.bankAccountInfo}
                            extraData={this.state.stateUpdated}
                            keyExtractor={(item) => item.Id}
                            renderItem={({ item, i }) => (
                                <View style={styles.bankInfoContainer}>
                                    <View style={styles.bankNameHeader}>
                                        <Text style={styles.accountTypeText}>
                                            {`${item.bankName}`}
                                        </Text>

                                        {item.isSystematicWithdrawalPlan == "No" && item.isAutomaticInvestmentPlan == "No" &&
                                            <TouchableOpacity style={styles.editBankInfo} key={item.Id} onPress={() => this.updateShowDeleteOption('showDelete', true, item.Id)}>
                                                <GIcon
                                                    name="dots-vertical"
                                                    type="material-community"
                                                    size={30}
                                                />
                                            </TouchableOpacity>
                                        }
                                    </View>

                                    {item.showDeleteOption && <GButtonComponent
                                        buttonStyle={styles.deleteBtn}
                                        buttonText={gblStrings.common.delete}
                                        textStyle={styles.backButtonText}
                                        onPress={() => this.updateConfirmDelete(true, item)}
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
                        onPress={() => this.navigateBack()}
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

BankAccountsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    getParam: PropTypes.func,
    getBankAccountInfo: PropTypes.func,
};

BankAccountsComponent.defaultProps = {
    navigation: {},
};
export default BankAccountsComponent;