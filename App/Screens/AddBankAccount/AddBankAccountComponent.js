import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GInputComponent, GSwitchComponent, GFooterComponent, GButtonComponent, GIcon } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

const data = 
    {    
        PopularAccount: [
            "Discover",
            "Bank of America",
            "Wells Fargo",
            "Chase",
            "Bank Name 1",
            "Bank Name 2",
            "Bank Name 3",
            "Others"
        ]
    }

;

class AddBankAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            popularAccountsList: data.PopularAccount,
            expand: false,
        };
    }

    setExpandInstruction = () => {
        this.setState({
            expand: !this.state.expand,
        });
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

                    <FlatList
                        data={this.state.popularAccountsList}
                        renderItem={({ item }) => (<ViewAccountItem
                            item={item}
                        />)}
                        keyExtractor={(item) => this.state.popularAccountsList.indexOf(item)}
                    />

                    <View style={styles.instructionsView}>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setExpandInstruction}>
                            <View style={{ flex: 0.1, alignSelf: 'center'}}>
                                {this.state.expand ?
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={30}
                                    /> :
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={30}
                                    />
                                }
                            </View>
                            <Text style={styles.instructionText}>{gblStrings.addPopularBankAccount.instruction_add_account}</Text>
                        </TouchableOpacity>
                        {this.state.expand ?
                            <View>
                                
                            </View>
                            : null}
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

const ViewAccountItem = (props) => {
    item = props.item;
    return (
        <>
            <View style={styles.accountView}>
                <GIcon 
                name="closesquareo"
                    type="antdesign"
                    size={11.43}
                    color="#56565A"
                />
                
                <Text style={styles.accountText}>
                    {`${item}`}
                </Text>
            </View>

        </>
    );
};

AddBankAccountComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

export default AddBankAccountComponent;