import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GFooterComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class BankAccountsComponent extends Component {
    constructor(props) {
        super(props);
        this.updateBankDetails = true;
        this.showAlert = true;
        this.confirmDelete = false;
        this.deleteId = "";
        this.bankName = "";
        this.state = {
            isLoading: false,
            showDeleteOption: false,
            stateUpdated: false,
            bankAccountInfo: [
                {
                    Id: "1",
                    bankName: "Wells Fargo",
                    accountType: "Checking Account",
                    accountNumber: "0078256409872",
                    transitRoutingNumber: "569933659",
                    dateAdded: "21/11/2019",
                    isSystematicWithdrawalPlan: "Yes",
                    isAutomaticInvestmentPlan: "No",
                    showDeleteOption: false,
                },
                {
                    Id: "2",
                    bankName: "Bank Of America",
                    accountType: "Checking Account",
                    accountNumber: "0043589649087",
                    transitRoutingNumber: "123678987",
                    dateAdded: "16/10/2019",
                    isSystematicWithdrawalPlan: "No",
                    isAutomaticInvestmentPlan: "Yes",
                    showDeleteOption: false,
                },
                {
                    Id: "3",
                    bankName: "Chase",
                    accountType: "Checking Account",
                    accountNumber: "0012347896754",
                    transitRoutingNumber: "987678567",
                    dateAdded: "20/09/2019",
                    isSystematicWithdrawalPlan: "No",
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

    navigateAddBankAccount = () => {
        this.updateBankDetails = true;
        this.showAlert = true;
        this.props.navigation.navigate('addBankAccount');
    }

    navigateBack = () => this.props.navigation.goBack();

    updateView = () => this.setState({ stateUpdated: !this.state.stateUpdated });

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
                    this.updateView();

                    this.setState({ bankAccountInfo: tmpData });
                }
                break;

        }
    }

    deleteBankAccount = (shouldDelete) => {
        this.confirmDelete = false;
        if (shouldDelete) {
            let tmpData = [];
            let index = -1;
            tmpData = this.state.bankAccountInfo;
            tmpData.map((item) => {
                if (item.Id == this.deleteId) {
                    index = tmpData.indexOf(item);
                }
            });
            if (index != -1) {
                tmpData.splice(index, 1);
            }
            this.setState({ bankAccountInfo: tmpData });
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
    }

    addBankAccount = (item) => {
        tmpData = this.state.bankAccountInfo;
        tmpData.push(item);
        this.setState({ bankAccountInfo: tmpData });
        this.updateBankDetails = false;
        this.updateView();
    }

    updateIsScuccess = (showAlert) => {
        this.showAlert = showAlert;
        this.updateView();
    }

    updateConfirmDelete = (confirmDelete, itemId, bankName) => {
        this.confirmDelete = confirmDelete;
        this.deleteId = itemId;
        this.bankName = bankName;
        this.updateView();
    }

    render() {
        const { navigation } = this.props;
        const isSuccess = navigation.getParam('isSuccess', false);

        const accountType = navigation.getParam('accountType', "");
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
                                        onPress={() => this.updateConfirmDelete(true, item.Id, item.bankName)}
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
    navigation: PropTypes.instanceOf(Object)
};

export default BankAccountsComponent;