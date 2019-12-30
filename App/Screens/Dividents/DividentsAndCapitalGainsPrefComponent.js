import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { styles } from './styles';
import { GHeaderComponent, GFooterComponent, GButtonComponent, GIcon, GCollapseComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';


class DividentsAndCapitalGainsPrefComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateChanged: false,
            reinvestChanged: false,
            expand: false,
            collapsedState: true,
            requestSubmited: false,
            dividentsData: [],
            generalAccount: [],
            iraAccount: [],
            utmaAccount: [],
        };
        const { navigation } = props;
        this.focusListener = navigation.addListener(
            'didFocus',
            this.componentDidFocus,
        );
    }

    componentDidFocus = (payload) => {
        const { navigation } = this.props;
        this.setState({requestSubmited: navigation.getParam('requestSubmited', false)});
    };

    componentDidMount() {
        this.props.getDividentsInfo();
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    navigateBack = () => this.props.navigation.goBack();

    navigateDividentsForAccount = (item) => {
        this.updateShowRequestOption('showRequest', false, item.Id);
        this.props.navigation.navigate('dividentsForAccount', {
            accountName: item.accountName,
            accountNumber: item.AccountNumber,
        });
    }

    updateCollapsedState = (flag) => () => {
        this.setState({ collapsedState: flag });
    }

    updateCurrentSecurityChanged = () => this.setState({ stateChanged: !this.state.stateChanged });

    updateReinvestChanged = () => this.setState({ reinvestChanged: !this.state.reinvestChanged });

    setDividentAmount = (text, accountId, fundId) => () => {
        let tmpData = [];
        tmpData = this.state.dividentsData;
        tmpData.map((item) => () => {
            if (item.Id === accountId) {
                let tmpCurrentSecurities = [];
                tmpCurrentSecurities = item.CurrentSecurities;
                tmpCurrentSecurities.map((fund) => () => {
                    if (fund.FundId === fundId) {
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

                    tmpData = this.state.dividentsData;
                    tmpData.map((item) => () => {
                        if (item.Id === itemId) {
                            item.currentSecuritiesSwitchOn = true;
                            item.currentSecuritiesSwitchOff = false;
                            this.updateCurrentSecurityChanged();

                        }
                    });
                    this.setState({ dividentsData: tmpData });
                }
                else {
                    tmpData = this.state.dividentsData;
                    tmpData.map((item) => () => {
                        if (item.Id === itemId) {
                            item.currentSecuritiesSwitchOn = false;
                            item.currentSecuritiesSwitchOff = true;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    this.setState({ dividentsData: tmpData });
                }
                break;
            case 'futureSecurities':
                if (flag) {
                    tmpData = this.state.dividentsData;
                    tmpData.map((item) => () => {
                        if (item.Id === itemId) {
                            item.futureSecuritiesSwitchOn = true;
                            item.futureSecuritiesSwitchOff = false;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    this.setState({ dividentsData: tmpData });
                }
                else {
                    tmpData = this.state.dividentsData;
                    tmpData.map((item) => () => {
                        if (item.Id === itemId) {
                            item.futureSecuritiesSwitchOn = false;
                            item.futureSecuritiesSwitchOff = true;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    this.setState({ dividentsData: tmpData });
                }
                break;
            default:
                break;

        }
    }

    switchOnOffReinvest = (fromView, flag, accountId, fundId) => () => {
        let tmpData = [];
        switch (fromView) {
            case 'reinvestFund':
                tmpData = this.state.dividentsData;
                tmpData.map((item) => () => {
                    if (item.Id === accountId) {
                        let tmpCurrentSecurities = [];
                        tmpCurrentSecurities = item.CurrentSecurities;
                        tmpCurrentSecurities.map((fund) => {
                            if (fund.FundId === fundId) {
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
                this.setState({ dividentsData: tmpData });
                break;
            default:
                break;
        }
    }

    updateShowRequestOption = (fromView, showRequestOption, itemId) => {
        switch (fromView) {
            case 'showRequest':
                let tmpData = this.state.generalAccount;
                tmpData.map((item) => {
                    if (item.Id === itemId) {
                        item.showRequestOption = showRequestOption;
                    }
                });
                this.updateStateChanged();
                this.setState({ generalAccount: tmpData });
                break;
        }
    }

    updateStateChanged = () => this.setState({ stateChanged: !this.state.stateChanged });

    setExpandInstruction = () => {
        this.setState({
            expand: !this.state.expand,
        });
    }

    getKey(item) {
        return item.Id;
    }

    render() {
        console.log("render ::: ");
        if (this.props && this.props.dividentsInfo && this.props.dividentsInfo !== this.state.dividentsData) {
            this.setState({ dividentsData: this.props.dividentsInfo });

            const tmpData = this.props.dividentsInfo;
            let tmpGeneralAccount = [];
            let tmpIRAAccount = [];
            let tmpUTMAAccount = [];
            tmpData.map((item) => {
                switch (item.accountType) {
                    case 'General Account':
                        tmpGeneralAccount.push(item);
                        break;
                    case 'IRA Account':
                        tmpIRAAccount.push(item);
                        break;
                    case 'UTMA Account':
                        tmpUTMAAccount.push(item);
                        break;
                }
            });
            this.setState({ generalAccount: tmpGeneralAccount, iraAccount: tmpIRAAccount, utmaAccount: tmpUTMAAccount });
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
                    {this.state.requestSubmited &&
                        <TouchableOpacity style={styles.confirmationView} onPress={() => this.setState({requestSubmited: false})}>
                            <Text style={styles.confirmationText}>
                                {gblStrings.dividents.request_submit_dividents}
                            </Text>
                        </TouchableOpacity>
                    }

                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.dividents.dividents_and_capital_gains_preferences}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    {this.props && this.props.dividentsInfo && this.state.generalAccount.length > 0 &&
                        <FlatList
                            data={this.state.generalAccount}
                            extraData={this.state.stateChanged}
                            keyExtractor={this.getKey}
                            renderItem={({ item}) => (
                                <View style={styles.infoContainer}>
                                    <View style={styles.accountName}>
                                        <Text style={styles.accountNameText}>
                                            {`${item.accountName}`}
                                        </Text>

                                        <TouchableOpacity style={styles.editInfo} key={item.Id} onPress={() => this.updateShowRequestOption('showRequest', true, item.Id)}>
                                            <GIcon
                                                name="dots-vertical"
                                                type="material-community"
                                                size={30}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.accountName}>
                                        <Text style={styles.accountNameText}>
                                            {gblStrings.dividents.account_number}
                                        </Text>
                                        <Text style={styles.accountNameText}>
                                            {`${item.AccountNumber}`}
                                        </Text>
                                    </View>

                                    {item.showRequestOption && <GButtonComponent
                                        buttonStyle={styles.requestBtn}
                                        buttonText={gblStrings.common.edit}
                                        textStyle={styles.requestButtonText}
                                        onPress={() =>
                                            this.navigateDividentsForAccount(item)}
                                    />}

                                    <View style={styles.linkBreak2} />

                                    <Text style={styles.accountNameHeaderText}>
                                        {gblStrings.dividents.current_value}
                                    </Text>

                                    <Text style={styles.accountNameSubHeaderText}>
                                        {`${item.currectValue}`}
                                    </Text>

                                    <Text style={styles.accountNameHeaderText}>
                                        {gblStrings.dividents.holding}
                                    </Text>

                                    <Text style={styles.accountNameSubHeaderText}>
                                        {`${item.holding}`}
                                    </Text>

                                    <Text style={styles.accountNameHeaderText}>
                                        {gblStrings.dividents.current_funds}
                                    </Text>

                                    <Text style={styles.accountNameSubHeaderText}>
                                        {item.currentFunds ? `${gblStrings.dividents.yes_want_to_reinvest}` : `${gblStrings.dividents.do_not_reinvest}`}
                                    </Text>

                                    <Text style={styles.accountNameHeaderText}>
                                        {gblStrings.dividents.future_funds}
                                    </Text>

                                    <Text style={styles.accountNameSubHeaderText}>
                                        {item.futureFunds ? `${gblStrings.dividents.yes_want_to_reinvest}` : `${gblStrings.dividents.do_not_reinvest}`}
                                    </Text>

                                    <Text style={styles.accountNameHeaderText}>
                                        {gblStrings.dividents.directed_dividents}
                                    </Text>

                                    <Text style={styles.accountNameSubHeaderText}>
                                        {item.directedDividentsAndCapitalGains ? `${gblStrings.dividents.yes_want_to_reinvest}` : `${gblStrings.dividents.do_not_reinvest}`}
                                    </Text>

                                </View>)}
                        />}

                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.back}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateBack}
                    />


                    <GCollapseComponent
                        collapsedState={this.state.collapsedState}
                        onPressAction={() => this.updateCollapsedState(!this.state.collapsedState)}
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

DividentsAndCapitalGainsPrefComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    getDividentsInfo: PropTypes.instanceOf(Function),
    dividentsInfo: PropTypes.instanceOf(Object),
};

export default DividentsAndCapitalGainsPrefComponent;