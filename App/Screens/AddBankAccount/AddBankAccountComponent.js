import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GFooterComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class AddBankAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
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

    navigateAddOtherBank = function () {
        this.props.navigation.navigate('addOtherBankAccountComponent');
    }

    navigateBack = () => this.props.navigation.goBack();

    setExpandInstruction = () => {
        this.setState({
            expand: !this.state.expand,
        });
    }

    openAddBankOption = (bankName) => () => {
        if(bankName == "Others") {
            this.props.navigation.navigate('addOtherBankAccountComponent');
        }
    }

    componentDidMount() {
        let payload = [];

        payload.push(JSON.stringify(this.state.popularAccount));
        this.props.getPopularBankNames(payload);
    }

    componentDidUpdate(prevProps) {
        if (this.props && this.props.popularBankInfo && this.props.popularBankInfo != prevProps.popularBankInfo) {
            this.setState({ popularAccount: JSON.parse(this.props.popularBankInfo)});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
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

                    {this.props && this.props.popularBankInfo &&
                        <FlatList
                            data={this.state.popularAccount}
                            renderItem={({ item }) => (
                                <ViewAccountItem
                                    item={item}
                                    openAddBankOption={this.openAddBankOption}
                                />)}
                            keyExtractor={(item) => this.state.popularAccount.indexOf(item)}
                        />
                    }

                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.cancel}
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
    return (
        <TouchableOpacity style={styles.accountView} onPress={props.openAddBankOption(item)}>
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
};

AddBankAccountComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

export default AddBankAccountComponent;