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
class AutomaticInvestmentAccountComponent extends Component {
    constructor(props) {
        super(props);
        const automaticAccount = myInstance.getAutomaticInvestmentEditMode()? (myInstance.getScreenStateData().automaticAccount || {}):{};
        
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

            ...automaticAccount
        };

    }

    selectedAccount = (index,type) => () => {
        
        let json={};
        let id=0;
        switch (type) {
            case "general":
                json=this.state.generalAccountJson[Number(index)];
                id=this.props.automaticInvestmentState.general?this.props.automaticInvestmentState.general.length+1:0;
                break;
            case "ira":
                json=this.state.iraAccountJson[Number(index)];
                id=this.props.automaticInvestmentState.ira?this.props.automaticInvestmentState.ira.length+1:0;
                break;
            case "utma":
                json=this.state.utmaAccountJson[Number(index)];
                id=this.props.automaticInvestmentState.utma?this.props.automaticInvestmentState.utma.length+1:0;
                break;
            default:
                break;
        }
        
        this.setState({ selectedAccount: index ,selectedAccountJson:json,accountType:type,newItemId:id.toString()});
    }

    setStateUpdates = index => () => {
        const{expand} = this.state;
        const array = [...expand]; 
        const IndexExpand = this.state.expandIndex;


        if (index !== IndexExpand) {

            array[Number(IndexExpand)] = false;

        }
        array[Number(index)] = !array[Number(index)];

        this.setState({ expand: array, expandIndex: index,selectedAccount:-1 });// ,selectedAccount:-1


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
        
        const savedAutoData = myInstance.getSavedAutomaticData();
        const payload = {
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
            // this.props.saveData("automaticInvestmentAccount", payload); 
            const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAutomaticData(payload);
            const screenState = {
                ...stateData,
                "automaticAccount":{...this.state}
            };
            myInstance.setScreenStateData(screenState);
            this.props.navigation.navigate({routeName:'automaticInvestmentAdd',key:'automaticInvestmentAdd',  
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
            )



    render() {

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.scrollStyle}>
                    <View>
                        <Text style={styles.autoInvestHead}>{globalString.automaticInvestment.create_invest_plan}</Text>
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
                            <Text style={styles.autoInvest_title_text}>{globalString.automaticInvestment.acc_title}</Text>
                        </View>
                        <View style={styles.body}>


                            <Text style={styles.autoInvestCont}>{globalString.automaticInvestment.acc_content}</Text>

                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates(0)}>
                                <View style={styles.expandView}>
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
                                <View style={styles.expandView}>
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
                                <View style={styles.expandView}>
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
AutomaticInvestmentAccountComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    accountState: PropTypes.instanceOf(Object),
    automaticInvestmentState: PropTypes.instanceOf(Object),
};

AutomaticInvestmentAccountComponent.defaultProps = {
    navigation:{},
    accountState:{},
    automaticInvestmentState:{},
};

export default AutomaticInvestmentAccountComponent;