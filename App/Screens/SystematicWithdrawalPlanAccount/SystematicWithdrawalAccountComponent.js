import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GIcon,

} from '../../CommonComponents';
import { CustomRadio } from '../../AppComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import * as regEx from '../../Constants/RegexConstants';


class SystematicWithdrawalAccountComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            selectedItemID: "",
            selectedItemName: "",
            accountJson: {},
            selectedAccount: -1,
            //ItemToEdit: this.props.navigation.getParam('ItemToEdit', -1),
            expand: [true, false, false],
            expandIndex: 0,
        };

    }
    selectedAccount = index => e => {

        this.setState({ selectedAccount: index })
    }
    setStateUpdates = index => e => {

        var array = [...this.state.expand]; // make a separate copy of the array
        let IndexExpand = this.state.expandIndex;


        if (index !== IndexExpand) {

            array[IndexExpand] = false;

        }
        array[index] = !array[index];

        this.setState({ expand: array, expandIndex: index });


    }
    componentDidMount() {
        if (this.props && this.props.accountState) {

            this.setState({
                accountJson: this.props.accountState,
            });
        }
    }
    onSelected = (item) => () => {
        console.log("item: " + item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    //navigationNext = () => this.props.navigation.navigate('automaticInvestmentAdd', { ItemToEdit: -1 });
    navigationCancel = () => this.props.navigation.goBack();

    getPayload = () => {
        

        let payload = {
            account: "Account 3 / 90989123",
        };
        if (this.props && this.props.systamaticWithdrawalState && this.props.systamaticWithdrawalState.savedAccData) {
            payload = {
                ...payload,
                ...this.props.systamaticWithdrawalState.savedAccData
            };
        }
        return payload;

    }
    

    navigationNext = () => {
            //const payload = this.getPayload();
            //this.props.saveData("systematicWithdrawalAccount", payload); 
            this.props.navigation.navigate('systematicWithdrawalAdd', { ItemToEdit: -1});
    }
    generateAmountKeyExtractor = (item) => item.accountName;
    renderAmount = () => ({ item, index }) =>
        (
            <TouchableOpacity onPress={this.selectedAccount(index)}>

                <View style={this.state.selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', borderBottomColor: '#61285F45', borderBottomWidth: 1, padding: scaledHeight(20) }}>
                        <Text style={{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{item.accountName}</Text>
                        <Text style={{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{item.accountNumber}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.auto_invest_to_flat}>
                            <Text style={styles.auto_invest_to_top}>{'Current Value'}</Text>
                            <Text style={styles.auto_invest_flat_min}>{item.currentValue}</Text>
                        </View>

                        <View style={styles.auto_invest_to_flat}>
                            <Text style={styles.auto_invest_to_top}>{'Holding'}</Text>
                            <Text style={styles.auto_invest_flat_min}>{item.holding}</Text>
                        </View>
                    </View>
                    <View style={styles.auto_invest_to_flat}>
                        <Text style={styles.auto_invest_to_top}>{'Automatic Investment Plan'}</Text>
                        <Text style={styles.auto_invest_flat_min}>{item.automaticInvestmentPlan}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )



    render() {

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <View>
                        <Text style={styles.autoInvestHead}>{'Create Systematic Withdrawalß Plan'}</Text>
                        <View style={styles.seperator_line} />
                        <View style={styles.circle_view}>
                            <View style={styles.circle_Inprogress}>
                                <Text style={styles.circleTextNew}>{'1'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'2'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'3'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'4'}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{'5'}</Text>
                            </View>
                        </View>
                        <View style={styles.autoInvest_title_view}>
                            <Text style={styles.autoInvest_title_text}>{'1 - Account Selection'}</Text>
                        </View>
                        <View style={styles.body}>


                            <Text style={styles.autoInvestCont}>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.'}</Text>

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(0)}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                    {this.state.expand[0] ?
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={30}
                                            color="#088ACC"
                                        /> :
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={30}
                                            color="#088ACC"
                                        />
                                    }
                                    <Text style={styles.autoInvest_sub_title_text}>{'General Account'}</Text>
                                </View>
                            </TouchableOpacity>



                            <View style={styles.seperator_line} />
                            {this.state.expand[0] ?
                                <FlatList style={{ marginTop: scaledHeight(20) }}
                                    data={this.state.accountJson}
                                    renderItem={this.renderAmount()}
                                    keyExtractor={this.generateAmountKeyExtractor}
                                    extraData={this.state.accountJson}
                                /> : null}

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(1)}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                    {this.state.expand[1] ?
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={30}
                                            color="#088ACC"
                                        /> :
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={30}
                                            color="#088ACC"
                                        />
                                    }
                                    <Text style={styles.autoInvest_sub_title_text}>{'IRA Account'}</Text>
                                </View>
                            </TouchableOpacity>


                            <View style={styles.seperator_line} />
                            {this.state.expand[1] ?
                                <Text style={styles.autoInvest_sub_title_text}>{'Emty List'}</Text> : null}

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(2)}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                    {this.state.expand[2] ?
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={30}
                                            color="#088ACC"
                                        /> :
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={30}
                                            color="#088ACC"
                                        />
                                    }
                                    <Text style={styles.autoInvest_sub_title_text}>{'UTMA Account'}</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.seperator_line} />

                            {this.state.expand[2] ?
                                <Text style={styles.autoInvest_sub_title_text}>{'Emty List'}</Text> : null}



                        </View>
                    </View>
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationCancel}
                    />
                    <GButtonComponent
                        buttonStyle={styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.navigationNext}
                    />





                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalAccountComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

SystematicWithdrawalAccountComponent.defaultProps = {

};

export default SystematicWithdrawalAccountComponent;