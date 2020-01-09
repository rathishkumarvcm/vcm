import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { styles } from './styles';
import { GHeaderComponent, GIcon, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class AccountServicesComponent extends Component {

    componentDidMount() { }

    navigateDividents = () => { 
        const { navigation } = this.props;
        navigation.navigate('dividentsAndCapitalGainsPref');
    }

    navigateOrderCheckBook = () => {
        const { navigation } = this.props;
        navigation.navigate('orderCheckBook');
    }

    navigateBankAccount = () => {
        const { navigation } = this.props;
        navigation.navigate('bankAccount');
    }

    navigateAutomatic = () => {
        const { navigation } = this.props;
        navigation.navigate({routeName:'automaticInvestment',key:'automaticInvestment'});
    }

    navigateSystamatic = () => {
        const { navigation } = this.props;
        navigation.navigate({routeName:'systematicWithdrawal',key:'systematicWithdrawal'});
    }
 

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.contentStyle}>
                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeadline}>
                            {gblStrings.accountServices.account_services}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <TouchableOpacity onPress={this.navigateBankAccount}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.accountServices.bank_accounts}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateAutomatic}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.accountServices.automatic_investment_plan}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateSystamatic}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.accountServices.systematic_withdrawal_plan}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateOrderCheckBook}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.accountServices.checkbook}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateDividents}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionIcon}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.accountServices.dividents}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.loremSecurityPref}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

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

AccountServicesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

AccountServicesComponent.defaultProps = {
    navigation: {}
};

export default AccountServicesComponent;
