import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GSwitchComponent, GFooterComponent, GButtonComponent, GIcon, GCollapseComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { getCustomStyle } from '../../Utils/Resolution';


class DividentsForAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateChanged: false,
            reinvestChanged: false,
            expand: false,
            collapsedState: true,
            dividentsData: [],
            accountInfo: [],
        };
    }

    componentDidMount() {
        const { getDividentsInfo } = this.props;
        getDividentsInfo();
    }

    navigateBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    navigateAccountServices = (requestSubmitted) => () => {
        const { navigation } = this.props;
        navigation.navigate('accountService', { message: requestSubmitted ? gblStrings.dividents.request_submit_dividents : "" });
    }

    updateStateChanged = () => { 
        const { stateChanged } = this.state;
        this.setState({ stateChanged: !stateChanged });
    }

    updateReinvestChanged = () => {
        const { reinvestChanged } = this.state;
        this.setState({ reinvestChanged: !reinvestChanged });
    }

    setDividentAmount = (text, accountId, fundId) => {
        let tmpData = [];
        const { dividentsData } = this.state;
        tmpData = dividentsData;
        tmpData.map((item) => () => {
            if (item.Id === accountId) {
                let tmpCurrentSecurities = [];
                tmpCurrentSecurities = item.CurrentSecurities;
                tmpCurrentSecurities.map((fund, i) => () => {
                    if (fund.FundId === fundId) {
                        tmpCurrentSecurities[`${i}`].amountRemaining = text;
                    }
                });
            }
        });
        this.setState({ dividentsData: tmpData });
    }

    switchOnOffStateUpdates = (fromView, flag, itemId) => () => {
        let tmpData = [];
        const { accountInfo } = this.state;
        tmpData = accountInfo;
        switch (fromView) {
            case 'currentSecurities':
                if (flag) {
                    tmpData.map((item, i) => () => {
                        if (item.Id === itemId) {
                            tmpData[`${i}`].currentSecuritiesSwitchOn = true;
                            tmpData[`${i}`].currentSecuritiesSwitchOff = false;
                            this.updateStateChanged();
                        }
                    });
                    this.setState({ accountInfo: tmpData });
                }
                else {
                    tmpData.map((item, i) => () =>{
                        if (item.Id === itemId) {
                            tmpData[`${i}`].currentSecuritiesSwitchOn = false;
                            tmpData[`${i}`].currentSecuritiesSwitchOff = true;
                            this.updateStateChanged();
                        }
                    });
                    this.setState({ accountInfo: tmpData });
                }
                break;
            case 'futureSecurities':
                if (flag) {
                    tmpData.map((item, i) => () => {
                        if (item.Id === itemId) {
                            tmpData[`${i}`].futureSecuritiesSwitchOn = true;
                            tmpData[`${i}`].futureSecuritiesSwitchOff = false;
                            this.updateStateChanged();
                        }
                    });
                    this.setState({ accountInfo: tmpData });
                }
                else {
                    tmpData.map((item, i) => () => {
                        if (item.Id === itemId) {
                            tmpData[`${i}`].futureSecuritiesSwitchOn = false;
                            tmpData[`${i}`].futureSecuritiesSwitchOff = true;
                            this.updateStateChanged();
                        }
                    });
                    this.setState({ accountInfo: tmpData });
                }
                break;
            default:
                break;

        }
    }

    switchOnOffReinvest = (fromView, flag, accountId, fundId) => () => {
        let tmpData = [];
        const { accountInfo } = this.state;
        tmpData = accountInfo;
        switch (fromView) {
            case 'currentSecurities':
                tmpData.map((item) => () => {
                    if (item.Id === accountId) {
                        let tmpCurrentSecurities = [];
                        tmpCurrentSecurities = item.currentFundList;
                        tmpCurrentSecurities.map((fund, i) => () => {
                            if (fund.FundId === fundId) {
                                if (flag) {
                                    tmpCurrentSecurities[`${i}`].enableReinvest = true;
                                } else {
                                    tmpCurrentSecurities[`${i}`].enableReinvest = false;
                                }
                                this.updateStateChanged();
                            }
                        });
                    }
                });
                this.setState({ accountInfo: tmpData });
                break;
            case 'futureSecurities':
                tmpData.map((item) => () =>{
                    if (item.Id === accountId) {
                        let tmpFutureSecurities = [];
                        tmpFutureSecurities = item.futureFundList;
                        tmpFutureSecurities.map((fund, i) => () =>{
                            if (fund.FundId === fundId) {
                                if (flag) {
                                    tmpFutureSecurities[`${i}`].enableReinvest = true;
                                } else {
                                    tmpFutureSecurities[`${i}`].enableReinvest = false;
                                }
                                this.updateStateChanged();
                            }
                        });
                    }
                });
                this.setState({ accountInfo: tmpData });
                break;
            default:
                break;
        }
    }

    setExpandInstruction = () => {
        const { expand } = this.state;
        this.setState({
            expand: !expand,
        });
    }

    getKey = (item) => item.Id

    updateCollapsedState = (flag) => () => {
        this.setState({ collapsedState: flag });
    }

    renderList = ({ item }) => {
        return (
            <>
                <View style={styles.accountView}>
                    <Text style={styles.accountText}>
                        {`${item.accountName}`}
                    </Text>
                    <Text style={styles.accountText}>
                        {`${gblStrings.dividents.account_number } ${item.AccountNumber}`}
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
                            switchOnMethod={this.switchOnOffStateUpdates('currentSecurities', false, item.Id)}
                            switchOffMethod={this.switchOnOffStateUpdates('currentSecurities', true, item.Id)}
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
    
                {item.currentSecuritiesSwitchOn ? (
                    <View style={styles.reinvestContainer}>
                        {item.currentSecurities.map((fund) => (
                            <>
                                <View style={styles.fundContainer}>
                                    <Text style={styles.fundText}>
                                        {fund.FundName}
                                    </Text>
                                    <Switch style={styles.switchStyle}
                                        onValueChange={this.switchOnOffReinvest('currentSecurities', !fund.enableReinvest, item.Id, fund.FundId)}
                                        value={fund.enableReinvest}
                                        trackColor={getCustomStyle({ true: '#000000', false: '#DBDBDB' },{})}
                                    />
                                </View>                            
                            </>
                          ))}
                    </View>
                  )
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
                            switchOnMethod={this.switchOnOffStateUpdates('futureSecurities', false, item.Id)}
                            switchOffMethod={this.switchOnOffStateUpdates('futureSecurities', true, item.Id)}
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
    
    
                {item.futureSecuritiesSwitchOn ? (
                    <View style={styles.reinvestContainer}>
                        {item.futureSecurities.map((fund) => (
                            <>
                                <View style={styles.fundContainer}>
                                    <Text style={styles.fundText}>
                                        {fund.FundName}
                                    </Text>
                                    <Switch style={styles.switchStyle}
                                        onValueChange={this.switchOnOffReinvest('futureSecurities', !fund.enableReinvest, item.Id, fund.FundId)}
                                        value={fund.enableReinvest}
                                        trackColor={getCustomStyle({ true: '#000000', false: '#DBDBDB' },{})}
                                    />
                                </View>
                            </>
                          ))}
                    </View>
                  )
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
                            switchOnMethod={this.switchOnOffStateUpdates('futureSecurities', false)}
                            switchOffMethod={this.switchOnOffStateUpdates('futureSecurities', true)}
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
    }

    render() {

        const { navigation } = this.props;
        const accountNumber = navigation.getParam('accountNumber', '');
        const { dividentsInfo } = this .props;
        const { dividentsData } = this.state;
        const { stateChanged } = this.state;
        const { accountInfo } = this.state;
        const { collapsedState } = this.state;

        if (this.props && dividentsInfo && dividentsInfo !== dividentsData) {
            this.setState({ dividentsData: dividentsInfo });
            const tmpData = dividentsInfo;
            const tmpAccountInfo = [];
            tmpData.map((item) => () =>{
                if (item.AccountNumber === accountNumber) {
                    tmpAccountInfo.push(item);
                }
            });
            this.setState({ accountInfo: tmpAccountInfo });
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.contentStyle}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.dividents.dividents_and_capital_gains_preferences}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    {this.props && dividentsInfo && (
                        <FlatList
                            data={accountInfo}
                            extraData={stateChanged}
                            keyExtractor={this.getKey}
                            renderItem={this.renderList}
                        />
                      )}


                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateAccountServices(false)}
                    />

                    <GButtonComponent
                        buttonStyle={styles.submitBtn}
                        buttonText={gblStrings.common.submit}
                        textStyle={styles.submitButtonText}
                        onPress={this.navigateAccountServices(true)}
                    />

                    <GCollapseComponent
                        collapsedState={collapsedState}
                        onPressAction={this.updateCollapsedState(!collapsedState)}
                        headerView={(
                            <View style={styles.instructionsView}>
                                <View style={styles.accountIconStyle}>
                                    {collapsedState ? (
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={22}
                                        />
                                      ) : (
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={22}
                                        />
                                      )}
                                </View>
                                <Text style={styles.instructionText}>{gblStrings.dividents.setup_instruction}</Text>
                            </View>
                          )}
                        collapseView={(
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
                          )}
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

// const ViewAccountItem = (props) => {
//     let item = [];
//     let currentSecurities = [];
//     let futureSecurities = [];
//     item = props.item;
//     currentSecurities = item.currentFundList;
//     futureSecurities = item.futureFundList;
//     props.updateStateChanged;
//     return (
//         <>
//             <View style={styles.accountView}>
//                 <Text style={styles.accountText}>
//                     {`${item.accountName}`}
//                 </Text>
//                 <Text style={styles.accountText}>
//                     {`${gblStrings.dividents.account_number } ${item.AccountNumber}`}
//                 </Text>
//             </View>

//             <View style={styles.optionHeaderView}>
//                 <Text style={styles.optionHeaderText}>
//                     {gblStrings.dividents.current_securities}
//                 </Text>

//                 <View style={styles.linkBreak1} />

//                 <Text style={styles.optionSubHeaderText}>
//                     {gblStrings.dividents.current_fund_header}
//                 </Text>

//                 <View style={styles.switchContainer}>
//                     <GSwitchComponent
//                         switchOnMethod={props.switchOnOffStateUpdates('currentSecurities', false, item.Id)}
//                         switchOffMethod={props.switchOnOffStateUpdates('currentSecurities', true, item.Id)}
//                         switchOn={item.currentSecuritiesSwitchOff}
//                         switchOff={item.currentSecuritiesSwitchOn}
//                         switchOnText={gblStrings.common.yes}
//                         switchOffText={gblStrings.common.no}
//                         offStyle={styles.offButtonStyle}
//                         offStyleDisabled={styles.offButtonStyleDisable}
//                         onStyle={styles.onButtonStyle}
//                         onStyleDisabled={styles.onButtonStyleDisable}
//                         textOnStyle={styles.TextOnStyle}
//                         textOffStyle={styles.TextOffStyle}
//                     />
//                     <View style={styles.switchFlexView}>
//                         <Text style={styles.switchInlineTex}>
//                             {gblStrings.dividents.no_do_not_want_to_reinvest}
//                         </Text>
//                         <Text style={styles.switchInlineTex}>
//                             {gblStrings.dividents.yes_want_to_reinvest}
//                         </Text>
//                     </View>
//                 </View>
//             </View>

//             {item.currentSecuritiesSwitchOn ? (
//                 <View style={styles.reinvestContainer}>
//                     {currentSecurities.map((fund) => (
//                         <>
//                             <View style={styles.fundContainer}>
//                                 <Text style={styles.fundText}>
//                                     {fund.FundName}
//                                 </Text>
//                                 <Switch style={styles.switchStyle}
//                                     onValueChange={props.switchOnOffReinvest('currentSecurities', !fund.enableReinvest, item.Id, fund.FundId)}
//                                     value={fund.enableReinvest}
//                                     trackColor={{ true: '#000000', false: '#DBDBDB' }}
//                                 />
//                             </View>                            
//                         </>
//                       ))}
//                 </View>
//               )
//                 : null
//             }

//             <View style={styles.optionHeaderView}>

//                 <Text style={styles.optionHeaderText}>
//                     {gblStrings.dividents.future_securites}
//                 </Text>

//                 <View style={styles.linkBreak1} />

//                 <Text style={styles.optionSubHeaderText}>
//                     {gblStrings.dividents.future_fund_header}
//                 </Text>

//                 <View style={styles.switchContainer}>
//                     <GSwitchComponent
//                         switchOnMethod={props.switchOnOffStateUpdates('futureSecurities', false, item.Id)}
//                         switchOffMethod={props.switchOnOffStateUpdates('futureSecurities', true, item.Id)}
//                         switchOn={item.futureSecuritiesSwitchOff}
//                         switchOff={item.futureSecuritiesSwitchOn}
//                         switchOnText={gblStrings.common.yes}
//                         switchOffText={gblStrings.common.no}
//                         offStyle={styles.offButtonStyle}
//                         offStyleDisabled={styles.offButtonStyleDisable}
//                         onStyle={styles.onButtonStyle}
//                         onStyleDisabled={styles.onButtonStyleDisable}
//                         textOnStyle={styles.TextOnStyle}
//                         textOffStyle={styles.TextOffStyle}
//                     />
//                     <View style={styles.switchFlexView}>
//                         <Text style={styles.switchInlineTex}>
//                             {gblStrings.dividents.no_do_not_want_to_reinvest}
//                         </Text>
//                         <Text style={styles.switchInlineTex}>
//                             {gblStrings.dividents.yes_want_to_reinvest}
//                         </Text>
//                     </View>
//                 </View>
//             </View>


//             {item.futureSecuritiesSwitchOn ? (
//                 <View style={styles.reinvestContainer}>
//                     {futureSecurities.map((fund) => (
//                         <>
//                             <View style={styles.fundContainer}>
//                                 <Text style={styles.fundText}>
//                                     {fund.FundName}
//                                 </Text>
//                                 <Switch style={styles.switchStyle}
//                                     onValueChange={props.switchOnOffReinvest('futureSecurities', !fund.enableReinvest, item.Id, fund.FundId)}
//                                     value={fund.enableReinvest}
//                                     trackColor={{ true: '#000000', false: '#DBDBDB' }}
//                                 />
//                             </View>
//                         </>
//                       ))}
//                 </View>
//               )
//                 : null
//             }

//             <View style={styles.optionHeaderView}>

//                 <Text style={styles.optionHeaderText}>
//                     {gblStrings.dividents.directed_dividents}
//                 </Text>

//                 <View style={styles.linkBreak1} />

//                 <Text style={styles.optionSubHeaderText}>
//                     {gblStrings.dividents.directed_dividents_header}
//                 </Text>
//                 <Text style={styles.contactText}>
//                     {gblStrings.dividents.directed_dividents_header_contact}
//                 </Text>

//                 <View style={styles.switchContainer}>
//                     <GSwitchComponent
//                         switchOnMethod={props.switchOnOffStateUpdates('futureSecurities', false)}
//                         switchOffMethod={props.switchOnOffStateUpdates('futureSecurities', true)}
//                         switchOn={item.futureSecuritiesSwitchOff}
//                         switchOff={item.futureSecuritiesSwitchOn}
//                         switchOnText={gblStrings.common.yes}
//                         switchOffText={gblStrings.common.no}
//                         offStyle={styles.offButtonStyle}
//                         offStyleDisabled={styles.offButtonStyleDisable}
//                         onStyle={styles.onButtonStyle}
//                         onStyleDisabled={styles.onButtonStyleDisable}
//                         textOnStyle={styles.TextOnStyle}
//                         textOffStyle={styles.TextOffStyle}
//                     />
//                     <View style={styles.switchFlexView}>
//                         <Text style={styles.switchInlineTex}>
//                             {gblStrings.dividents.no_do_not_want_to_reinvest}
//                         </Text>
//                         <Text style={styles.switchInlineTex}>
//                             {gblStrings.dividents.yes_want_to_reinvest}
//                         </Text>
//                     </View>
//                 </View>
//             </View>


//             {item.futureSecuritiesSwitchOn ?
//                 <View style={styles.reinvestContainer} />
//                 : null
//             }
//         </>
//     );
// };

// ViewAccountItem.propTypes = {
//     item: PropTypes.instanceOf(Object),
//     updateStateChanged: PropTypes.instanceOf(Function),
//     switchOnOffStateUpdates: PropTypes.instanceOf(Function),
//     switchOnOffReinvest: PropTypes.instanceOf(Function),
//     setDividentAmount: PropTypes.instanceOf(Function),
// };

// ViewAccountItem.defaultProps = {
//     item: {},
//     updateStateChanged: () => {},
//     switchOnOffStateUpdates: () => {},
//     switchOnOffReinvest: () => {},
//     setDividentAmount: () => {},
// };

DividentsForAccountComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    getDividentsInfo: PropTypes.instanceOf(Function),
    dividentsInfo: PropTypes.instanceOf(Object),
};

DividentsForAccountComponent.defaultProps = {
    getDividentsInfo: () => { },
    navigation: {},
    dividentsInfo: {}
};

export default DividentsForAccountComponent;