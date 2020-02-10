import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GIcon,
    GSingletonClass
} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';

const myInstance = GSingletonClass.getInstance();
class SystematicWithdrawalAccountComponent extends Component {
    constructor(props) {
        super(props);
        const systematicAccount = myInstance.getSystematicWithdrawalEditMode()? (myInstance.getScreenStateData().systematicAccount || {}):{};
       const{navigation}=this.props;
        this.state = {
            generalAccountJson: {},
            iraAccountJson: {},
            utmaAccountJson: {},
            selectedAccountJson:{},
            selectedAccount: -1,
            expand: [true, false, false],
            expandIndex: 0,
            accountType:"",
            newItemId:"",
            newEdit:`${navigation.getParam('newEdit',false)}`,

            ...systematicAccount
        };

    }

    static getDerivedStateFromProps(nextProps) {
        const{accountState}=nextProps;
        if (accountState) {

            return({
                generalAccountJson: accountState.general,
                iraAccountJson: accountState.ira,
                utmaAccountJson: accountState.utma,

            });
        }
        return null;
    }

    // componentDidMount() {
    //     const{accountState}=this.props;
    //     if (accountState) {

    //         this.setState({
    //             generalAccountJson: accountState.general,
    //             iraAccountJson: accountState.ira,
    //             utmaAccountJson: accountState.utma,

    //         });
    //     }
    // }

    selectedAccount = (index,type) => () => {
        const{systematicWithdrawalState}=this.props;
        const{generalAccountJson,iraAccountJson,utmaAccountJson}=this.state;
        let json={};
        let id=0;
        switch (type) {
            case "general":
                json=generalAccountJson[Number(index)];
                id=systematicWithdrawalState.general?systematicWithdrawalState.general.length+1:0;
                break;
            case "ira":
                json=iraAccountJson[Number(index)];
                id=systematicWithdrawalState.ira?systematicWithdrawalState.ira.length+1:0;
                break;
            case "utma":
                json=utmaAccountJson[Number(index)];
                id=systematicWithdrawalState.utma?systematicWithdrawalState.utma.length+1:0;
                break;
            default:
                break;
        }
        
        this.setState({ selectedAccount: index ,selectedAccountJson:json,accountType:type,newItemId:id.toString()});
    }

    setStateUpdates = index => () => {
        const{expand,expandIndex} = this.state;
        const array = [...expand]; 
        const IndexExpand = expandIndex;


        if (index !== IndexExpand) {

            array[Number(IndexExpand)] = false;

        }
        array[Number(index)] = !array[Number(index)];

        this.setState({ expand: array, expandIndex: index,selectedAccount:-1 });


    }

    navigationCancel = () => {
        const{navigation}=this.props;
        navigation.goBack();
    }

    getPayload = () => {
        const{generalAccountJson,iraAccountJson,utmaAccountJson,selectedAccountJson,
            selectedAccount,expand,expandIndex,accountType,newItemId,newEdit} = this.state;
        const savedAutoData = myInstance.getSavedSystematicData();
        const payload = {
            ...savedAutoData,
            generalAccountJson,
            iraAccountJson,
            utmaAccountJson,
            selectedAccountJson,
            selectedAccount,
            expand,
            expandIndex,
            accountType,
            newItemId,
            newEdit,
        };
        return payload;

    }
    
    navigationNext = () => {
        const{navigation}=this.props;
        const{selectedAccountJson,accountType} =this.state;
        const payload = this.getPayload();
        const stateData = myInstance.getScreenStateData();
        myInstance.setSavedSystematicData(payload);
        const screenState = {
            ...stateData,
            "systematicAccount":{...this.state}
        };
        myInstance.setScreenStateData(screenState);
        navigation.navigate({routeName:'systematicWithdrawalAdd',key:'systematicWithdrawalAdd',  
                    params:{ ItemToEdit: -1,
                    accName:selectedAccountJson.accountName,
                    accNumber:selectedAccountJson.accountNumber,
                    accountType}});
}

generateGeneralKeyExtractor = (item) => item.accountName;

renderGeneralAccount = () => ({ item, index }) =>{
    const{selectedAccount} = this.state;
        return(
            <TouchableOpacity onPress={this.selectedAccount(index,globalString.automaticInvestment.general)}>

                <View style={selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                    <View style={styles.displayAccView}>
                        <Text style={styles.displayAcc}>{item.accountName}</Text>
                        <Text style={styles.displayAcc}>{item.accountNumber}</Text>
                    </View>
                    <View style={styles.currentView}>
                        <View style={styles.auto_invest_to_flat}>
                            <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.currentValue}</Text>
                            <Text style={styles.auto_invest_flat_min}>{item.currentValue}</Text>
                        </View>

                        <View style={styles.auto_invest_to_flat}>
                            <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.holding}</Text>
                            <Text style={styles.auto_invest_flat_min}>{item.holding}</Text>
                        </View>
                    </View>
                    <View style={styles.auto_invest_to_flat}>
                        <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.autoInves_Title}</Text>
                        <Text style={styles.auto_invest_flat_min}>{item.automaticInvestmentPlan}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );}

        generateIraKeyExtractor = (item) => item.accountName;

        renderIraAccount = () => ({ item, index }) =>{
            const{selectedAccount} = this.state;
            return(
                <TouchableOpacity onPress={this.selectedAccount(index,globalString.automaticInvestment.ira)}>
                    <View style={selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                        <View style={styles.displayAccView}>
                            <Text style={styles.displayAcc}>{item.accountName}</Text>
                            <Text style={styles.displayAcc}>{item.accountNumber}</Text>
                        </View>
                        <View style={styles.currentView}>
                            <View style={styles.auto_invest_to_flat}>
                                <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.currentValue}</Text>
                                <Text style={styles.auto_invest_flat_min}>{item.currentValue}</Text>
                            </View>
    
                            <View style={styles.auto_invest_to_flat}>
                                <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.holding}</Text>
                                <Text style={styles.auto_invest_flat_min}>{item.holding}</Text>
                            </View>
                        </View>
                        <View style={styles.auto_invest_to_flat}>
                            <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.autoInves_Title}</Text>
                            <Text style={styles.auto_invest_flat_min}>{item.automaticInvestmentPlan}</Text>
                        </View>
    
                    </View>
                </TouchableOpacity>
            );}
    
            generateUtmaKeyExtractor = (item) => item.accountName;

            renderUtmaAccount = () => ({ item, index }) =>{
                const{selectedAccount} = this.state;
                return(
                    <TouchableOpacity onPress={this.selectedAccount(index,globalString.automaticInvestment.utma)}>
                    <View style={selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                        <View style={styles.displayAccView}>
                            <Text style={styles.displayAcc}>{item.accountName}</Text>
                            <Text style={styles.displayAcc}>{item.accountNumber}</Text>
                        </View>
                        <View style={styles.currentView}>
                            <View style={styles.auto_invest_to_flat}>
                                <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.currentValue}</Text>
                                <Text style={styles.auto_invest_flat_min}>{item.currentValue}</Text>
                            </View>
    
                            <View style={styles.auto_invest_to_flat}>
                                <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.holding}</Text>
                                <Text style={styles.auto_invest_flat_min}>{item.holding}</Text>
                            </View>
                        </View>
                        <View style={styles.auto_invest_to_flat}>
                            <Text style={styles.auto_invest_to_top}>{globalString.automaticInvestment.autoInves_Title}</Text>
                            <Text style={styles.auto_invest_flat_min}>{item.automaticInvestmentPlan}</Text>
                        </View>
    
                    </View>
                    </TouchableOpacity>
                );}



    render() {
        const{navigation}=this.props;
        const{selectedAccount,expand,generalAccountJson,utmaAccountJson,iraAccountJson} = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollStyle}>
                    <View>
                        <Text style={styles.autoInvestHead}>Create Systematic Withdrawal Plan</Text>
                        <View style={styles.seperator_line} />
                        <View style={styles.circle_view}>
                            <View style={styles.circle_Inprogress}>
                                <Text style={styles.circleTextNew}>{globalString.automaticInvestment.one}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{globalString.automaticInvestment.two}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{globalString.automaticInvestment.three}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{globalString.automaticInvestment.four}</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>{globalString.automaticInvestment.five}</Text>
                            </View>
                        </View>
                        <View style={styles.autoInvest_title_view}>
                            <Text style={styles.autoInvest_title_text}>1 - Account Selection</Text>
                        </View>
                        <View style={styles.body}>


                            <Text style={styles.autoInvestCont}>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.'}</Text>

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(0)}>
                            <View style={styles.expandView}>
                                    {expand[0] ? (
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={20}
                                            color="#56565A"
                                        />
                                      ) : (
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={20}
                                            color="#56565A"
                                        />
                                      )}
                                    <Text style={styles.autoInvest_sub_title_text}>General Account</Text>
                            </View>
                            </TouchableOpacity>



                            <View style={styles.seperator_line} />
                            {expand[0] ? (
                                <FlatList style={styles.topSpace}
                                    data={generalAccountJson}
                                    renderItem={this.renderGeneralAccount()}
                                    keyExtractor={this.generateGeneralKeyExtractor}
                                    extraData={selectedAccount}
                                />
                              ) : null}

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(1)}>
                            <View style={styles.expandView}>
                                    {expand[1] ? (
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={20}
                                            color="#56565A"
                                        />
                                      ) : (
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={20}
                                            color="#56565A"
                                        />
                                      )}
                                    <Text style={styles.autoInvest_sub_title_text}>IRA Account</Text>
                            </View>
                            </TouchableOpacity>


                            <View style={styles.seperator_line} />
                            {expand[1] ? (
                                <FlatList style={styles.topSpace}
                                data={iraAccountJson}
                                renderItem={this.renderIraAccount()}
                                keyExtractor={this.generateIraKeyExtractor}
                                extraData={selectedAccount}
                                />
                              ) : null} 

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(2)}>
                            <View style={styles.expandView}>
                                    {expand[2] ? (
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={20}
                                            color="#56565A"
                                        />
                                      ) : (
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={20}
                                            color="#56565A"
                                        />
                                      )}
                                    <Text style={styles.autoInvest_sub_title_text}>UTMA Account</Text>
                            </View>
                            </TouchableOpacity>

                            <View style={styles.seperator_line} />

                            {expand[2] ? (
                                 <FlatList style={styles.topSpace}
                                 data={utmaAccountJson}
                                 renderItem={this.renderUtmaAccount()}
                                 keyExtractor={this.generateUtmaKeyExtractor}
                                 extraData={selectedAccount}
                                 />
                               ) : null}

                        </View>
                    </View>
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationCancel}
                    />
                    <GButtonComponent
                       buttonStyle={selectedAccount>-1?styles.continueButtonSelected:styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={selectedAccount>-1?this.navigationNext:null}
                    />
                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalAccountComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    accountState: PropTypes.instanceOf(Object),
    systematicWithdrawalState: PropTypes.instanceOf(Object),
};

SystematicWithdrawalAccountComponent.defaultProps = {
    navigation:{},
    accountState:{},
    systematicWithdrawalState:{},
};

export default SystematicWithdrawalAccountComponent;