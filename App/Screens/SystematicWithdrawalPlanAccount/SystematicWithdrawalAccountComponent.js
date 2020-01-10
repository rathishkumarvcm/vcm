import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GIcon,
    GSingletonClass
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

const myInstance = GSingletonClass.getInstance();
class SystematicWithdrawalAccountComponent extends Component {
    constructor(props) {
        super(props);
        const systematicAccount =  myInstance.getSystematicWithdrawalEditMode()? (myInstance.getScreenStateData().systematicAccount || {}):{};
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
            newEdit:`${this.props.navigation.getParam('newEdit',false)}`,

            ...systematicAccount
        };

    }

    selectedAccount = (index,type) => e => {
        let json={};
        let id=0;
        switch (type) {
            case "general":
                json=this.state.generalAccountJson[index];
                id=this.props.systematicWithdrawalState.general?this.props.systematicWithdrawalState.general.length+1:0;
                break;
            case "ira":
                json=this.state.iraAccountJson[index];
                id=this.props.systematicWithdrawalState.ira?this.props.systematicWithdrawalState.ira.length+1:0;
                break;
            case "utma":
                json=this.state.utmaAccountJson[index];
                id=this.props.systematicWithdrawalState.utma?this.props.systematicWithdrawalState.utma.length+1:0;
                break;
            default:
                break;
        }
        
        this.setState({ selectedAccount: index ,selectedAccountJson:json,accountType:type,newItemId:id.toString()})
    }

    setStateUpdates = index => e => {
        const{expand} = this.state;
        const array = [...expand]; 
        const IndexExpand = this.state.expandIndex;


        if (index !== IndexExpand) {

            array[Number(IndexExpand)] = false;

        }
        array[Number(index)] = !array[Number(index)];

        this.setState({ expand: array, expandIndex: index,selectedAccount:-1 });


    }

    componentDidMount() {
        if (this.props && this.props.accountState) {

            this.setState({
                generalAccountJson: this.props.accountState.general,
                iraAccountJson: this.props.accountState.ira,
                utmaAccountJson: this.props.accountState.utma,

            });
        }
    }
    navigationCancel = () => this.props.navigation.goBack();

    getPayload = () => {
        
        const savedAutoData = myInstance.getSavedSystematicData();
        let payload = {
            ...savedAutoData,
            generalAccountJson: this.state.generalAccountJson,
            iraAccountJson: this.state.iraAccountJson,
            utmaAccountJson: this.state.utmaAccountJson,
            selectedAccountJson:this.state.selectedAccountJson,
            selectedAccount: this.state.selectedAccount,
            expand: this.state.expand,
            expandIndex: this.state.expandIndex,
            accountType:this.state.accountType,
            newItemId:this.state.newItemId,
            newEdit:this.state.newEdit,
        };
        return payload;

    }
    
    navigationNext = () => {
        const payload = this.getPayload();
        const stateData = myInstance.getScreenStateData();
        myInstance.setSavedSystematicData(payload);
        const screenState = {
            ...stateData,
            "systematicAccount":{...this.state}
        }
        myInstance.setScreenStateData(screenState);
        this.props.navigation.navigate({routeName:'systematicWithdrawalAdd',key:'systematicWithdrawalAdd',  
                    params:{ ItemToEdit: -1,
                    acc_name:this.state.selectedAccountJson.accountName,
                    acc_no:this.state.selectedAccountJson.accountNumber,
                    accountType:this.state.accountType}});
}
generateGeneralKeyExtractor = (item) => item.accountName;
renderGeneralAccount = () => ({ item, index }) =>
        (
            <TouchableOpacity onPress={this.selectedAccount(index,globalString.automaticInvestment.general)}>

                <View style={this.state.selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                    <View style={styles.displayAccView}>
                        <Text style={styles.displayAcc}>{item.accountName}</Text>
                        <Text style={styles.displayAcc}>{item.accountNumber}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
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
        )
        generateIraKeyExtractor = (item) => item.accountName;
        renderIraAccount = () => ({ item, index }) =>
            (
                <TouchableOpacity onPress={this.selectedAccount(index,globalString.automaticInvestment.ira)}>
                    <View style={this.state.selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                        <View style={styles.displayAccView}>
                            <Text style={styles.displayAcc}>{item.accountName}</Text>
                            <Text style={styles.displayAcc}>{item.accountNumber}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
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
            )
    
            generateUtmaKeyExtractor = (item) => item.accountName;
            renderUtmaAccount = () => ({ item, index }) =>
                (
                    <TouchableOpacity onPress={this.selectedAccount(index,globalString.automaticInvestment.utma)}>
                    <View style={this.state.selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                        <View style={styles.displayAccView}>
                            <Text style={styles.displayAcc}>{item.accountName}</Text>
                            <Text style={styles.displayAcc}>{item.accountNumber}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
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
                )



    render() {

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <View>
                        <Text style={styles.autoInvestHead}>{'Create Systematic Withdrawal Plan'}</Text>
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
                                            size={23}
                                            color="#56565A"
                                        /> :
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={23}
                                            color="#56565A"
                                        />
                                    }
                                    <Text style={styles.autoInvest_sub_title_text}>General Account</Text>
                                </View>
                            </TouchableOpacity>



                            <View style={styles.seperator_line} />
                            {this.state.expand[0] ?
                                <FlatList style={styles.topSpace}
                                    data={this.state.generalAccountJson}
                                    renderItem={this.renderGeneralAccount()}
                                    keyExtractor={this.generateGeneralKeyExtractor}
                                    extraData={this.state.selectedAccount}
                                /> : null}

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(1)}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                    {this.state.expand[1] ?
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={23}
                                            color="#56565A"
                                        /> :
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={23}
                                            color="#56565A"
                                        />
                                    }
                                    <Text style={styles.autoInvest_sub_title_text}>IRA Account</Text>
                                </View>
                            </TouchableOpacity>


                            <View style={styles.seperator_line} />
                            {this.state.expand[1] ?
                                <FlatList style={styles.topSpace}
                                data={this.state.iraAccountJson}
                                renderItem={this.renderIraAccount()}
                                keyExtractor={this.generateIraKeyExtractor}
                                extraData={this.state.selectedAccount}
                            /> : null} 

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(2)}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                    {this.state.expand[2] ?
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={23}
                                            color="#56565A"
                                        /> :
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={23}
                                            color="#56565A"
                                        />
                                    }
                                    <Text style={styles.autoInvest_sub_title_text}>UTMA Account</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.seperator_line} />

                            {this.state.expand[2] ?
                                 <FlatList style={styles.topSpace}
                                 data={this.state.utmaAccountJson}
                                 renderItem={this.renderUtmaAccount()}
                                 keyExtractor={this.generateUtmaKeyExtractor}
                                 extraData={this.state.selectedAccount}
                             /> : null}

                        </View>
                    </View>
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationCancel}
                    />
                    <GButtonComponent
                       buttonStyle={this.state.selectedAccount>-1?styles.continueButtonSelected:styles.continueButton}
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.state.selectedAccount>-1?this.navigationNext:null}
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