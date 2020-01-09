import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { GHeaderComponent, GFooterComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { styles } from './styles';

class AddBankAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            popularAccount: [
                "Discover",
                "Bank of America",
                "Wells Fargo",
                "Chase",
                "Bank Name 1",
                "Bank Name 2",
                "Bank Name 3",
                "Others"
            ]
        };
    }

    componentDidMount() {
        const payload = [];

        payload.push(JSON.stringify(this.state.popularAccount));
        this.props.getPopularBankNames(payload);
    }

    componentDidUpdate(prevProps) {
        if (this.props && this.props.popularBankInfo && this.props.popularBankInfo !== prevProps.popularBankInfo) {
            this.setState({ popularAccount: JSON.parse(this.props.popularBankInfo) });
        }
    }

    setExpandInstruction = () => {
        const { expand } = this.state;
        this.setState({            
            expand: !expand,
        });
    }

    openAddBankOption = (bankName) => () => {
        const { navigation } = this.props;
        if(bankName === "Others") {
            navigation.navigate('addOtherBankAccountComponent');
        }
    }    

    navigateBankAccount = (isSuccess) => () => {
        const { navigation } = this.props;
        navigation.navigate('bankAccount', { isSuccess });
    }

    renderBankInfo = () => ({ item }) =>
    (
        <TouchableOpacity style={styles.accountView} onPress={this.openAddBankOption(item)}>
            <GIcon
                name="closesquareo"
                type="antdesign"
                size={11.43}
                color="#56565A"
            />

            <Text style={styles.accountText}>
                {`${item}`}
            </Text>
        </TouchableOpacity>
    );

    bankInfoKey = (item) => this.state.popularAccount.indexOf(item);

    render() {
        const { navigation } = this.props;
        const { popularAccount } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.scrollViewContentStyle}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.addPopularBankAccount.add_bank_account}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <View style={styles.subHeaderView}>
                        <Text style={styles.subHeaderText}>
                            {gblStrings.addPopularBankAccount.add_popular_bank_account}
                        </Text>
                    </View>

                    <Text style={styles.listHeaderText}>
                        {gblStrings.addPopularBankAccount.popular_account}
                    </Text>

                    {this.props && popularAccount && (
                        <FlatList
                            data={popularAccount}
                            renderItem={this.renderBankInfo()}
                            keyExtractor={this.bankInfoKey}
                        />
                      )}

                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateBankAccount(false)}
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

AddBankAccountComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    popularBankInfo: PropTypes.instanceOf(Object),
    getPopularBankNames: PropTypes.func,
};

AddBankAccountComponent.defaultProps = {
    navigation: {},
    popularBankInfo: {},
    getPopularBankNames: () => {},
};

export default AddBankAccountComponent;