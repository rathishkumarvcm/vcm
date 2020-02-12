import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
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
            generalAccCollapsedState: false,
            iraAccCollapsedState: true,
            utmaAccCollapsedState: true,
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

    componentDidMount() {
        const { getDividentsInfo } = this.props;
        getDividentsInfo();
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    getKey = (item) => item.Id

    navigateBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    navigateDividentsForAccount = (item) => {
        this.updateShowRequestOption(item.accountType, item.Id);
        const { navigation } = this.props;
       navigation.navigate('dividentsForAccount', {
            accountName: item.accountName,
            accountNumber: item.AccountNumber,
        });
    }

    updateCollapsedState = (flag) => () => {
        this.setState({ collapsedState: flag });
    }

    updateGeneralAccCollapsedState = (flag) => () => {
        this.setState({ generalAccCollapsedState: flag });
    }

    updateIRAAccCollapsedState = (flag) => () => {
        this.setState({ iraAccCollapsedState: flag });
    }

    updateUTMAAccCollapsedState = (flag) => () => {
        this.setState({ utmaAccCollapsedState: flag });
    }

    updateCurrentSecurityChanged = () => {
        const { stateChanged } = this.state;
        this.setState({ stateChanged: !stateChanged });
    }

    updateReinvestChanged = () => {
        const { reinvestChanged } = this.state;
        this.setState({ reinvestChanged: !reinvestChanged });
    }

    setDividentAmount = (text, accountId, fundId) => () => {
        let tmpData = [];
        const { dividentsData } = this.state;
        tmpData = dividentsData;
        tmpData.map((item) => () => {
            if (item.Id === accountId) {
                let tmpCurrentSecurities = [];
                tmpCurrentSecurities = item.CurrentSecurities;
                tmpCurrentSecurities.map((fund, index) => () => {
                    if (fund.FundId === fundId) {
                        tmpCurrentSecurities[`${index}`].amountRemaining = text;
                    }
                });
            }
        });
        this.setState({ dividentsData: tmpData });
    }

    switchOnOffStateUpdates = (fromView, flag, itemId) => () => {
        let tmpData = [];
        const { dividentsData } = this.state;
        tmpData = dividentsData;

        switch (fromView) {
            case 'currentSecurities':
                if (flag) {
                    tmpData.map((item, index) => () => {
                        if (item.Id === itemId) {
                            tmpData[`${index}`].currentSecuritiesSwitchOn = true;
                            tmpData[`${index}`].currentSecuritiesSwitchOff = false;
                            this.updateCurrentSecurityChanged();

                        }
                    });
                    this.setState({ dividentsData: tmpData });
                }
                else {
                    tmpData.map((item, index) => () => {
                        if (item.Id === itemId) {
                            tmpData[`${index}`].currentSecuritiesSwitchOn = false;
                            tmpData[`${index}`].currentSecuritiesSwitchOff = true;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    this.setState({ dividentsData: tmpData });
                }
                break;
            case 'futureSecurities':
                if (flag) {
                    tmpData.map((item, index) => () => {
                        if (item.Id === itemId) {
                            tmpData[`${index}`].futureSecuritiesSwitchOn = true;
                            tmpData[`${index}`].futureSecuritiesSwitchOff = false;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    this.setState({ dividentsData: tmpData });
                }
                else {
                    tmpData.map((item, index) => () => {
                        if (item.Id === itemId) {
                            tmpData[`${index}`].futureSecuritiesSwitchOn = false;
                            tmpData[`${index}`].futureSecuritiesSwitchOff = true;
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
        const { dividentsData } = this.state;
        tmpData = dividentsData;
        switch (fromView) {
            case 'reinvestFund':
                tmpData.map((item) => () => {
                    if (item.Id === accountId) {
                        let tmpCurrentSecurities = [];
                        tmpCurrentSecurities = item.CurrentSecurities;
                        tmpCurrentSecurities.map((fund, index) => () => {
                            if (fund.FundId === fundId) {
                                if (flag) {
                                    tmpCurrentSecurities[`${index}`].enableReinvest = true;
                                } else {
                                    tmpCurrentSecurities[`${index}`].enableReinvest = false;
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

    updateShowRequestOption = (fromView, itemId) => {
        let tmpData = {};
        switch (fromView) {            
            case 'General Account': {
                const {generalAccount} = this.state;                
                tmpData = generalAccount;
                tmpData.map((item, i) => () => {
                    if (item.Id === itemId) {
                        const tmpOption = !tmpData[`${i}`].showRequestOption;
                        tmpData[`${i}`].showRequestOption = tmpOption;
                    }
                });
                this.setState({ generalAccount: tmpData });
                this.updateStateChanged();
                break;
            }
            case 'IRA Account': {
                const { iraAccount } = this.state;                
                tmpData = iraAccount;
                tmpData.map((item, i) => () => {
                    if (item.Id === itemId) {
                        const tmpOption = !tmpData[`${i}`].showRequestOption;
                        tmpData[`${i}`].showRequestOption = tmpOption;
                    }
                });
                this.setState({ iraAccount: tmpData });
                this.updateStateChanged();
                break;
            }
            case 'UTMA Account': {
                const { utmaAccount } = this.state;                
                tmpData = utmaAccount;
                tmpData.map((item, i) => () => {
                    if (item.Id === itemId) {
                        const tmpOption = !tmpData[`${i}`].showRequestOption;
                        tmpData[`${i}`].showRequestOption = tmpOption;
                    }
                });
                this.updateStateChanged();
                this.setState({ utmaAccount: tmpData });
                this.updateStateChanged();
                break;
            }
            default:
                break;
        }
    }

    updateStateChanged = () => {
        const { stateChanged }= this.state;
        this.setState({ stateChanged: !stateChanged });
    }

    setExpandInstruction = () => {
        const { expand } = this.state;
        this.setState({
            expand: !expand,
        });
    }

    componentDidFocus = () => {
        const { navigation } = this.props;
        this.setState({ requestSubmited: navigation.getParam('requestSubmited', false) });
    };

    renderList = ({ item }) => {
        return (
            <View style={styles.infoContainer}>
                <View style={styles.accountName}>
                    <Text style={styles.accountNameText}>
                        {`${item.accountName}`}
                    </Text>
    
                    <TouchableOpacity style={styles.editInfo} key={item.Id} onPress={this.updateShowRequestOption(item.accountType, item.Id)}>
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
    
                {item.showRequestOption && (
                <GButtonComponent
                    buttonStyle={styles.requestBtn}
                    buttonText={gblStrings.common.edit}
                    textStyle={styles.requestButtonText}
                    onPress={this.navigateDividentsForAccount(item)}
                />
                )}
    
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
    
            </View>
        );
    }

    render() {
        const { dividentsInfo,
            navigation } = this.props;
            
        const { dividentsData,
            generalAccCollapsedState,
            iraAccCollapsedState,
            utmaAccCollapsedState,
            generalAccount,
            utmaAccount,
            iraAccount,
            requestSubmited,
            stateChanged,
            collapsedState } = this.state;


        if (this.props && dividentsInfo && dividentsInfo !== dividentsData) {
            this.setState({ dividentsData: dividentsInfo });

            const tmpData = dividentsInfo;
            const tmpGeneralAccount = [];
            const tmpIRAAccount = [];
            const tmpUTMAAccount = [];
            tmpData.map((item) => () => {
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
                    default: 
                        break;
                }
            });
            this.setState({ generalAccount: tmpGeneralAccount, iraAccount: tmpIRAAccount, utmaAccount: tmpUTMAAccount });
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.contentStyle}>
                    {requestSubmited && (
                        <TouchableOpacity style={styles.confirmationView} onPress={this.setState({requestSubmited: false})}>
                            <Text style={styles.confirmationText}>
                                {gblStrings.dividents.request_submit_dividents}
                            </Text>
                        </TouchableOpacity>
                      )}

                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.dividents.dividents_and_capital_gains_preferences}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <GCollapseComponent
                        collapsedState={generalAccCollapsedState}
                        onPressAction={this.updateGeneralAccCollapsedState(!generalAccCollapsedState)}
                        headerView={(
                            <>
                                <View style={styles.accountHeaderView}>
                                    <View style={styles.accountIconStyle}>
                                        {generalAccCollapsedState ? (
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

                                    <Text style={styles.accountHeaderText}>{gblStrings.dividents.general_account}</Text>

                                </View>
                                <View style={styles.linkBreak1} />
                            </>
                          )}
                        collapseView={(
                            <>
                                {this.props && dividentsInfo && generalAccount.length > 0 && (
                                    <FlatList
                                        data={generalAccount}
                                        extraData={stateChanged}
                                        keyExtractor={this.getKey}
                                        renderItem={this.renderList}
                                    />
                                  )}
                            </>
                          )}
                    />

                    <GCollapseComponent
                        collapsedState={iraAccCollapsedState}
                        onPressAction={this.updateIRAAccCollapsedState(!iraAccCollapsedState)}
                        headerView={(
                            <>
                                <View style={styles.accountHeaderView}>
                                    <View style={styles.accountIconStyle}>
                                        {iraAccCollapsedState ? (
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

                                    <Text style={styles.accountHeaderText}>{gblStrings.dividents.ira_account}</Text>

                                </View>
                                <View style={styles.linkBreak1} />
                            </>
                          )}
                        collapseView={(
                            <>
                                {this.props && dividentsInfo && iraAccount.length > 0 && (
                                    <FlatList
                                        data={iraAccount}
                                        extraData={stateChanged}
                                        keyExtractor={this.getKey}
                                        renderItem={this.renderList}
                                    />
                                  )}
                            </>
                          )}
                    />

                    <GCollapseComponent
                        collapsedState={utmaAccCollapsedState}
                        onPressAction={this.updateUTMAAccCollapsedState(!utmaAccCollapsedState)}
                        headerView={(
                            <>
                                <View style={styles.accountHeaderView}>
                                    <View style={styles.accountIconStyle}>
                                        {utmaAccCollapsedState ? (
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

                                    <Text style={styles.accountHeaderText}>{gblStrings.dividents.utma_account}</Text>

                                </View>
                                <View style={styles.linkBreak1} />
                            </>
                          )}
                        collapseView={(
                            <>
                                {this.props && dividentsInfo && utmaAccount.length > 0 && (
                                    <FlatList
                                        data={utmaAccount}
                                        extraData={stateChanged}
                                        keyExtractor={this.getKey}
                                        renderItem={this.renderList}
                                    />
                                  )}
                            </>
                          )}
                    />


                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.back}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateBack}
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
//     item = props.item;    
//     return (
//         <View style={styles.infoContainer}>
//             <View style={styles.accountName}>
//                 <Text style={styles.accountNameText}>
//                     {`${item.accountName}`}
//                 </Text>

//                 <TouchableOpacity style={styles.editInfo} key={item.Id} onPress={() => props.updateShowRequestOption(item.accountType, item.Id)}>
//                     <GIcon
//                         name="dots-vertical"
//                         type="material-community"
//                         size={30}
//                     />
//                 </TouchableOpacity>
//             </View>

//             <View style={styles.accountName}>
//                 <Text style={styles.accountNameText}>
//                     {gblStrings.dividents.account_number}
//                 </Text>
//                 <Text style={styles.accountNameText}>
//                     {`${item.AccountNumber}`}
//                 </Text>
//             </View>

//             {item.showRequestOption && (
// <GButtonComponent
//                 buttonStyle={styles.requestBtn}
//                 buttonText={gblStrings.common.edit}
//                 textStyle={styles.requestButtonText}
//                 onPress={() =>
//                     props.navigateDividentsForAccount(item)}
// />
// )}

//             <View style={styles.linkBreak2} />

//             <Text style={styles.accountNameHeaderText}>
//                 {gblStrings.dividents.current_value}
//             </Text>

//             <Text style={styles.accountNameSubHeaderText}>
//                 {`${item.currectValue}`}
//             </Text>

//             <Text style={styles.accountNameHeaderText}>
//                 {gblStrings.dividents.holding}
//             </Text>

//             <Text style={styles.accountNameSubHeaderText}>
//                 {`${item.holding}`}
//             </Text>

//             <Text style={styles.accountNameHeaderText}>
//                 {gblStrings.dividents.current_funds}
//             </Text>

//             <Text style={styles.accountNameSubHeaderText}>
//                 {item.currentFunds ? `${gblStrings.dividents.yes_want_to_reinvest}` : `${gblStrings.dividents.do_not_reinvest}`}
//             </Text>

//             <Text style={styles.accountNameHeaderText}>
//                 {gblStrings.dividents.future_funds}
//             </Text>

//             <Text style={styles.accountNameSubHeaderText}>
//                 {item.futureFunds ? `${gblStrings.dividents.yes_want_to_reinvest}` : `${gblStrings.dividents.do_not_reinvest}`}
//             </Text>

//             <Text style={styles.accountNameHeaderText}>
//                 {gblStrings.dividents.directed_dividents}
//             </Text>

//             <Text style={styles.accountNameSubHeaderText}>
//                 {item.directedDividentsAndCapitalGains ? `${gblStrings.dividents.yes_want_to_reinvest}` : `${gblStrings.dividents.do_not_reinvest}`}
//             </Text>

//         </View>
//     );
// };

DividentsAndCapitalGainsPrefComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    getDividentsInfo: PropTypes.instanceOf(Function),
    dividentsInfo: PropTypes.instanceOf(Object),
};

DividentsAndCapitalGainsPrefComponent.defaultProps = {
    navigation: {},
    getDividentsInfo: () => {},
    dividentsInfo: () => {}
};

export default DividentsAndCapitalGainsPrefComponent;