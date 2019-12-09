import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GInputComponent, GSwitchComponent, GFooterComponent, GButtonComponent, GIcon } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';


const data = [
    {
        Id: "1",
        AccountNumber: "56654654",
        currentSecuritiesSwitchOn: false,
        currentSecuritiesSwitchOff: true,
        futureSecuritiesSwitchOn: false,
        futureSecuritiesSwitchOff: true,
        CurrentSecurities: [
            {
                FundId: "1",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },
            {
                FundId: "2",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },
            {
                FundId: "3",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },

        ]
    },
    {
        Id: "2",
        AccountNumber: "56654654",
        currentSecuritiesSwitchOn: false,
        currentSecuritiesSwitchOff: true,
        futureSecuritiesSwitchOn: false,
        futureSecuritiesSwitchOff: true,
        CurrentSecurities: [
            {
                FundId: "1",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },
            {
                FundId: "2",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },
            {
                FundId: "3",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },

        ]
    },
    {
        Id: "3",
        AccountNumber: "56654654",
        currentSecuritiesSwitchOn: false,
        currentSecuritiesSwitchOff: true,
        futureSecuritiesSwitchOn: false,
        futureSecuritiesSwitchOff: true,
        CurrentSecurities: [
            {
                FundId:"1",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },
            {
                FundId:"2",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },
            {
                FundId:"3",
                FundName: "USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES",
                enableReinvest: false,
                amountRemaining: '0',
            },

        ]
    },
];

class DividentsAndCapitalGainsPrefComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            currentSecuritiesChanged: false,
            reinvestChanged: false,
            expand: false,
        };
    }

    componentDidMount() { }   

    navigateBack = () => this.props.navigation.goBack();

    updateCurrentSecurityChanged = () => this.setState({ currentSecuritiesChanged: !this.state.currentSecuritiesChanged });

    updateReinvestChanged = () => this.setState({ reinvestChanged: !this.state.reinvestChanged });

    setDividentAmount = (text, accountId, fundId) => {
        tmpData = data;
        tmpData.map((item, i) => {
            
            if (item.Id == accountId) {
                tmpCurrentSecurities = item.CurrentSecurities;
                tmpCurrentSecurities.map((fund, index) => {
                    if (fund.FundId == fundId) {
                        fund.amountRemaining = text;
                    }
                });
            }
        });
        data = tmpData;
    }

    switchOnOffStateUpdates = (fromView, flag, itemId) => () => {
        switch (fromView) {
            // Email Section Switch
            case 'currentSecurities':
                if (flag){
                    tmpData = data;
                    tmpData.map((item, i) => { if (item.Id == itemId) { 
                        item.currentSecuritiesSwitchOn= true; 
                        item.currentSecuritiesSwitchOff= false;
                        this.updateCurrentSecurityChanged();
                    
                    }});
                    data = tmpData;
                }
                else {
                    tmpData = data;
                    tmpData.map((item, i) => {
                        if (item.Id == itemId) {
                            item.currentSecuritiesSwitchOn = false;
                            item.currentSecuritiesSwitchOff = true;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    data = tmpData;
                }
                break;
            case 'futureSecurities':
                if (flag) {
                    tmpData = data;
                    tmpData.map((item, i) => {
                        if (item.Id == itemId) {
                            item.futureSecuritiesSwitchOn = true;
                            item.futureSecuritiesSwitchOff = false;
                            this.updateCurrentSecurityChanged();
                        }
                    });
                    data = tmpData;
                }
                else {
                    tmpData = data;
                    tmpData.map((item, i) => {
                        if (item.Id == itemId) {
                            item.futureSecuritiesSwitchOn = false;
                            item.futureSecuritiesSwitchOff = true;
                            this.updateCurrentSecurityChanged();  
                        }
                    });
                    data = tmpData;
                }
                break;
            
        }
    }

    switchOnOffReinvest = (fromView, flag, accountId, fundId) => () => {
        switch (fromView) {
            case 'reinvestFund':
                tmpData = data;
                tmpData.map((item, i) => {
                    if (item.Id == accountId) {
                        tmpCurrentSecurities = item.CurrentSecurities;
                        tmpCurrentSecurities.map((fund, index) => {
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
                data = tmpData;
            break;
        }
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
                            {gblStrings.dividents.dividents_and_capital_gains_preferences}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />                  

                    <FlatList
                        data={data}
                        extraData={this.state.currentSecuritiesChanged}
                        currentSecuritiesSwitchOn={this.state.currentSecuritiesSwitchOn}
                        keyExtractor={(item) => item.Id}
                        renderItem={({ item, i }) => (<ViewAccountItem
                        item = {item}
                        switchOnOffStateUpdates={this.switchOnOffStateUpdates}
                        updateCurrentSecurityChanged={this.updateCurrentSecurityChanged}
                        switchOnOffReinvest={this.switchOnOffReinvest}
                        setDividentAmount={this.setDividentAmount}
                                                      />)}
                    />

                    <View style={styles.instructionsView}>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setExpandInstruction}>
                            <View style={{flex:0.1, alignSelf:'center'}}>
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
                                <Text style={styles.instructionText}>{gblStrings.dividents.setup_instruction}</Text>
                        </TouchableOpacity>
                        {this.state.expand ?
                            <View>
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
                            </View>
                            : null}
                    </View>
                    
                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.back}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateBack}
                    />

                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateBack}
                    />

                    <GButtonComponent
                        buttonStyle={styles.submitBtn}
                        buttonText={gblStrings.common.submit}
                        textStyle={styles.submitButtonText}
                        onPress={() => this.webServiceCall()}
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
    currentSecurities = item.CurrentSecurities;
    props.updateCurrentSecurityChanged;
    return (
        <>
            <View style={styles.accountView}>
                <Text style={styles.accountText}>
                    {gblStrings.dividents.account_name + ` ${item.Id} | ${item.AccountNumber}`}
                </Text>
            </View>

            <Text style={styles.subHeaderText}>
                {gblStrings.dividents.txt_header_dividents}
            </Text>
            
            <View style={styles.optionHeaderView}>
                <Text style={styles.optionHeaderText}>
                    {gblStrings.dividents.current_securities}
                </Text>

                <View style={styles.linkBreak1} />

                <Text style={styles.optionSubHeaderText}>
                    {gblStrings.dividents.reinvest_current_securites}
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
                    {currentSecurities.map((fund, index) =>
                    (<>                    
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
                        <View style={styles.fundAmtContainer}>

                            <View style={styles.amountHeader}>
                                <Text style={styles.amtText}>
                                    {gblStrings.dividents.amount_remaining}
                                </Text>
                            </View>
 
                            <View style={styles.ammountView}>
                                <Text style={styles.amtText2}>
                                    {gblStrings.dividents.dollar_sign}
                                </Text>                            

                            <GInputComponent
                                propInputStyle={styles.amountTextBox}
                                placeholder={"0"}
                                onChangeText={(text) => props.setDividentAmount(text, item.Id, fund.FundId)}
                                value={fund.amountRemaining}                   
                            />
                            </View>
                            <Text style={styles.minText}>
                                {gblStrings.dividents.min_amt}
                            </Text>
                        </View>
                     </>))}
                </View>
                : null
            }

            <View style={styles.optionHeaderView}>

                <Text style={styles.optionHeaderText}>
                    {gblStrings.dividents.future_securites}
                </Text>

                <View style={styles.linkBreak1} />

                <Text style={styles.optionSubHeaderText}>
                    {gblStrings.dividents.reinvest_future_securites}
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

DividentsAndCapitalGainsPrefComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

export default DividentsAndCapitalGainsPrefComponent;