import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GInputComponent, GSwitchComponent, GFooterComponent, GButtonComponent, GIcon, GCollapseComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';


class DividentsForAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            stateChanged: false,
            reinvestChanged: false,
            expand: false,
            collapsedState: true,
            dividentsData: [],
            accountInfo: [],
        };
    }

    componentDidMount() {
        this.props.getDividentsInfo();
    }

    navigateBack = () => this.props.navigation.goBack();

    navigateDividents = (requestSubmitted) => this.props.navigation.navigate('dividentsAndCapitalGainsPref', {
        requestSubmited: requestSubmitted
    });

    updateCurrentSecurityChanged = () => this.setState({ stateChanged: !this.state.stateChanged });

    updateReinvestChanged = () => this.setState({ reinvestChanged: !this.state.reinvestChanged });

    setDividentAmount = (text, accountId, fundId) => {
        let tmpData = [];
        tmpData = this.state.dividentsData;
        tmpData.map((item) => {
            if (item.Id == accountId) {
                let tmpCurrentSecurities = [];
                tmpCurrentSecurities = item.CurrentSecurities;
                tmpCurrentSecurities.map((fund) => {
                    if (fund.FundId == fundId) {
                        fund.amountRemaining = text;
                    }
                });
            }
        });
        this.setState({ dividentsData: tmpData });
    }

    switchOnOffStateUpdates = (fromView, flag, itemId) => () => {
        let tmpData = [];
        switch (fromView) {
            case 'currentSecurities':
                if (flag) {

                    tmpData = this.state.accountInfo;
                    tmpData.map((item) => {
                        if (item.Id == itemId) {
                            item.currentSecuritiesSwitchOn = true;
                            item.currentSecuritiesSwitchOff = false;
                            this.updateCurrentSecurityChanged();

                        }
                    });
                    this.setState({ accountInfo: tmpData });
                }
                else {
                    tmpData = this.state.accountInfo;
                    tmpData.map((item) => {
                        if (item.Id == itemId) {
                            item.currentSecuritiesSwitchOn = false;
                            item.currentSecuritiesSwitchOff = true;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    this.setState({ accountInfo: tmpData });
                }
                break;
            case 'futureSecurities':
                if (flag) {
                    tmpData = this.state.accountInfo;
                    tmpData.map((item) => {
                        if (item.Id == itemId) {
                            item.futureSecuritiesSwitchOn = true;
                            item.futureSecuritiesSwitchOff = false;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    this.setState({ accountInfo: tmpData });
                }
                else {
                    tmpData = this.state.accountInfo;
                    tmpData.map((item) => {
                        if (item.Id == itemId) {
                            item.futureSecuritiesSwitchOn = false;
                            item.futureSecuritiesSwitchOff = true;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    this.setState({ accountInfo: tmpData });
                }
                break;

        }
    }

    switchOnOffReinvest = (fromView, flag, accountId, fundId) => () => {
        let tmpData = [];
        switch (fromView) {
            case 'reinvestFund':
                tmpData = this.state.accountInfo;
                tmpData.map((item) => {
                    if (item.Id == accountId) {
                        let tmpCurrentSecurities = [];
                        tmpCurrentSecurities = item.currentFundList;
                        tmpCurrentSecurities.map((fund) => {
                            if (fund.FundId == fundId) {
                                if (flag) {
                                    fund.enableReinvest = true;
                                } else {
                                    fund.enableReinvest = false;
                                }
                                this.updateCurrentSecurityChanged();
                            }
                        });
                    }
                });
                this.setState({ accountInfo: tmpData });
                break;
        }
    }

    setExpandInstruction = () => {
        this.setState({
            expand: !this.state.expand,
        });
    }

    getKey(item) {
        return item.Id;
    }

    updateCollapsedState = (flag) => () => {
        this.setState({ collapsedState: flag });
    }

    renderList = ({ item }) => (
        <ViewAccountItem
            item={item}
            switchOnOffStateUpdates={this.switchOnOffStateUpdates}
            updateCurrentSecurityChanged={this.updateCurrentSecurityChanged}
            switchOnOffReinvest={this.switchOnOffReinvest}
            setDividentAmount={this.setDividentAmount}
        />)

    render() {

        const { navigation } = this.props;
        const accountName = navigation.getParam('accountName', '');
        const accountNumber = navigation.getParam('accountNumber', '');

        if (this.props && this.props.dividentsInfo && this.props.dividentsInfo != this.state.dividentsData) {
            this.setState({ dividentsData: this.props.dividentsInfo });
            tmpData = this.props.dividentsInfo;
            tmpAccountInfo = [];
            tmpData.map((item) => {
                if (item.AccountNumber == accountNumber) {
                    tmpAccountInfo.push(item);
                }
            });
            this.setState({ accountInfo: tmpAccountInfo });
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.dividents.dividents_and_capital_gains_preferences}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    {this.props && this.props.dividentsInfo &&
                        <FlatList
                            data={this.state.accountInfo}
                            extraData={this.state.stateChanged}
                            currentSecuritiesSwitchOn={this.state.currentSecuritiesSwitchOn}
                            keyExtractor={this.getKey}
                            renderItem={this.renderList}
                        />
                    }


                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.backButtonText}
                        onPress={() => this.navigateDividents(false)}
                    />

                    <GButtonComponent
                        buttonStyle={styles.submitBtn}
                        buttonText={gblStrings.common.submit}
                        textStyle={styles.submitButtonText}
                        onPress={() => this.navigateDividents(true)}
                    />

                    <GCollapseComponent
                        collapsedState={this.state.collapsedState}
                        onPressAction={this.updateCollapsedState(!this.state.collapsedState)}
                        headerView={
                            <View style={styles.instructionsView}>
                                <View style={{ flex: 0.2, alignSelf: 'center' }}>
                                    {this.state.collapsedState ?
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={22}
                                        /> :
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={22}
                                        />
                                    }
                                </View>
                                <Text style={styles.instructionText}>{gblStrings.dividents.setup_instruction}</Text>
                            </View>
                        }
                        collapseView={
                            <>
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.dividents_faq}</Text>
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.lorem_divident_header}</Text>
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.lorem_divident_subheader}</Text>
                                <View style={styles.linkBreak1} />
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.lorem_divident_header}</Text>
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.lorem_divident_subheader}</Text>
                                <View style={styles.linkBreak1} />
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.lorem_divident_header}</Text>
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.lorem_divident_subheader}</Text>
                                <View style={styles.linkBreak1} />
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.lorem_divident_header}</Text>
                                <Text style={styles.setupInstructionText}>{gblStrings.dividents.lorem_divident_subheader}</Text>
                            </>
                        }
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
    let item = [];
    let currentSecurities = [];
    item = props.item;
    currentSecurities = item.currentFundList;
    props.updateCurrentSecurityChanged;
    return (
        <>
            <View style={styles.accountView}>
                <Text style={styles.accountText}>
                    {`${item.accountName}`}
                </Text>
                <Text style={styles.accountText}>
                    {gblStrings.dividents.account_number + ` ${item.AccountNumber}`}
                </Text>
            </View>

            <View style={styles.optionHeaderView}>
                <Text style={styles.optionHeaderText}>
                    {gblStrings.dividents.current_securities}
                </Text>

                <View style={styles.linkBreak1} />

                <Text style={styles.optionSubHeaderText}>
                    {gblStrings.dividents.current_fund_header}
                </Text>

                <View style={styles.switchContainer}>
                    <GSwitchComponent
                        switchOnMethod={props.switchOnOffStateUpdates('currentSecurities', false, item.Id)}
                        switchOffMethod={props.switchOnOffStateUpdates('currentSecurities', true, item.Id)}
                        switchOn={item.currentSecuritiesSwitchOff}
                        switchOff={item.currentSecuritiesSwitchOn}
                        switchOnText={gblStrings.common.yes}
                        switchOffText={gblStrings.common.no}
                        offStyle={styles.offButtonStyle}
                        offStyleDisabled={styles.offButtonStyleDisable}
                        onStyle={styles.onButtonStyle}
                        onStyleDisabled={styles.onButtonStyleDisable}
                        textOnStyle={styles.TextOnStyle}
                        textOffStyle={styles.TextOffStyle}
                    />
                    <View style={styles.switchFlexView}>
                        <Text style={styles.switchInlineTex}>
                            {gblStrings.dividents.no_do_not_want_to_reinvest}
                        </Text>
                        <Text style={styles.switchInlineTex}>
                            {gblStrings.dividents.yes_want_to_reinvest}
                        </Text>
                    </View>
                </View>
            </View>

            {item.currentSecuritiesSwitchOn ?
                <View style={styles.reinvestContainer}>
                    {currentSecurities.map((fund) =>
                        <>
                            <View style={styles.fundContainer}>
                                <Text style={styles.fundText}>
                                    {fund.FundName}
                                </Text>
                                <Switch style={styles.switchStyle}
                                    onValueChange={props.switchOnOffReinvest('reinvestFund', !fund.enableReinvest, item.Id, fund.FundId)}
                                    value={fund.enableReinvest}
                                    trackColor={{ true: '#000000', false: '#DBDBDB' }}
                                />
                            </View>                            
                        </>)}
                </View>
                : null
            }

            <View style={styles.optionHeaderView}>

                <Text style={styles.optionHeaderText}>
                    {gblStrings.dividents.future_securites}
                </Text>

                <View style={styles.linkBreak1} />

                <Text style={styles.optionSubHeaderText}>
                    {gblStrings.dividents.future_fund_header}
                </Text>

                <View style={styles.switchContainer}>
                    <GSwitchComponent
                        switchOnMethod={props.switchOnOffStateUpdates('futureSecurities', false)}
                        switchOffMethod={props.switchOnOffStateUpdates('futureSecurities', true)}
                        switchOn={item.futureSecuritiesSwitchOff}
                        switchOff={item.futureSecuritiesSwitchOn}
                        switchOnText={gblStrings.common.yes}
                        switchOffText={gblStrings.common.no}
                        offStyle={styles.offButtonStyle}
                        offStyleDisabled={styles.offButtonStyleDisable}
                        onStyle={styles.onButtonStyle}
                        onStyleDisabled={styles.onButtonStyleDisable}
                        textOnStyle={styles.TextOnStyle}
                        textOffStyle={styles.TextOffStyle}
                    />
                    <View style={styles.switchFlexView}>
                        <Text style={styles.switchInlineTex}>
                            {gblStrings.dividents.no_do_not_want_to_reinvest}
                        </Text>
                        <Text style={styles.switchInlineTex}>
                            {gblStrings.dividents.yes_want_to_reinvest}
                        </Text>
                    </View>
                </View>
            </View>


            {item.futureSecuritiesSwitchOn ?
                <View style={styles.reinvestContainer} />
                : null
            }

            <View style={styles.optionHeaderView}>

                <Text style={styles.optionHeaderText}>
                    {gblStrings.dividents.directed_dividents}
                </Text>

                <View style={styles.linkBreak1} />

                <Text style={styles.optionSubHeaderText}>
                    {gblStrings.dividents.directed_dividents_header}
                </Text>
                <Text style={styles.contactText}>
                    {gblStrings.dividents.directed_dividents_header_contact}
                </Text>

                <View style={styles.switchContainer}>
                    <GSwitchComponent
                        switchOnMethod={props.switchOnOffStateUpdates('futureSecurities', false)}
                        switchOffMethod={props.switchOnOffStateUpdates('futureSecurities', true)}
                        switchOn={item.futureSecuritiesSwitchOff}
                        switchOff={item.futureSecuritiesSwitchOn}
                        switchOnText={gblStrings.common.yes}
                        switchOffText={gblStrings.common.no}
                        offStyle={styles.offButtonStyle}
                        offStyleDisabled={styles.offButtonStyleDisable}
                        onStyle={styles.onButtonStyle}
                        onStyleDisabled={styles.onButtonStyleDisable}
                        textOnStyle={styles.TextOnStyle}
                        textOffStyle={styles.TextOffStyle}
                    />
                    <View style={styles.switchFlexView}>
                        <Text style={styles.switchInlineTex}>
                            {gblStrings.dividents.no_do_not_want_to_reinvest}
                        </Text>
                        <Text style={styles.switchInlineTex}>
                            {gblStrings.dividents.yes_want_to_reinvest}
                        </Text>
                    </View>
                </View>
            </View>


            {item.futureSecuritiesSwitchOn ?
                <View style={styles.reinvestContainer} />
                : null
            }
        </>
    );
};

ViewAccountItem.propTypes = {
    item: PropTypes.instanceOf(Object),
    updateCurrentSecurityChanged: PropTypes.instanceOf(Function),
    switchOnOffStateUpdates: PropTypes.instanceOf(Function),
    switchOnOffReinvest: PropTypes.instanceOf(Function),
    setDividentAmount: PropTypes.instanceOf(Function),
};

DividentsForAccountComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    getDividentsInfo: PropTypes.instanceOf(Function),
    dividentsInfo: PropTypes.instanceOf(Object),
};

export default DividentsForAccountComponent;