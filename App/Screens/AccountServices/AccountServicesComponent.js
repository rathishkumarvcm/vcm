import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GIcon, GFooterComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class AccountServicesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount() { }

    navigateDividents = () => this.props.navigation.navigate('dividentsAndCapitalGainsPref')

    navigateOrderCheckBook = () => this.props.navigation.navigate('orderCheckBook')

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeadline}>
                            {gblStrings.accountServices.account_services}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

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

                    <View style={styles.optionContainer}>
                        <View style={styles.optionIcon}>
                            <GIcon
                                name="view-grid"
                                type="material-community"
                                size={30}
                                color="black"
                            />

                            <Text style={styles.optionHeaderText}>
                                {gblStrings.accountServices.failed_email}
                            </Text>
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={styles.optionSubHeaderText}>
                                {gblStrings.userManagement.loremSecurityPref}
                            </Text>
                        </View>
                    </View>

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

export default AccountServicesComponent;
