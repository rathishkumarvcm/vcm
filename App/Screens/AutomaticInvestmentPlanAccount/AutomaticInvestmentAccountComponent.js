import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GIcon,

} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings'


class AutomaticInvestmentAccountComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generalAccountJson: {},
            iraAccountJson: {},
            utmaAccountJson: {},
            selectedAccountJson:{},
            selectedAccount: -1,
            expand: [true, false, false],
            expandIndex: 0,
        };

    }
    selectedAccount = (index,type) => e => {
        let json={};
        switch (type) {
            case "general":
                json=this.state.generalAccountJson[index];
                break;
            case "ira":
                json=this.state.iraAccountJson[index];
                break;
            case "utma":
                json=this.state.utmaAccountJson[index];
                break;
            default:
                break;
        }
        
        this.setState({ selectedAccount: index ,selectedAccountJson:json})
    }
    setStateUpdates = index => e => {

        var array = [...this.state.expand]; // make a separate copy of the array
        let IndexExpand = this.state.expandIndex;


        if (index !== IndexExpand) {

            array[IndexExpand] = false;

        }
        array[index] = !array[index];

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
        

        let payload = {
            account: this.state.selectedAccountJson.accountName+'|'+this.state.selectedAccountJson.accountNumber,
        };
        if (this.props && this.props.automaticInvestmentState && this.props.automaticInvestmentState.savedAccData) {
            payload = {
                ...payload,
                ...this.props.automaticInvestmentState.savedAccData
            };
        }
        return payload;

    }

    navigationNext = () => {
            const payload = this.getPayload();
            this.props.saveData("automaticInvestmentAccount", payload); 
            this.props.navigation.navigate('automaticInvestmentAdd', 
                        { ItemToEdit: -1,
                        acc_name:this.state.selectedAccountJson.accountName,
                        acc_no:this.state.selectedAccountJson.accountNumber});
    }
    generateGeneralKeyExtractor = (item) => item.accountName;
    renderGeneralAccount = () => ({ item, index }) =>
        (
            
            <TouchableOpacity onPress={this.selectedAccount(index,"general")}>
                {console.log('##############################renderGeneralAccount')}
                <View style={this.state.selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                    <View style={styles.displayAccView}>
                        <Text style={styles.displayAcc}>{item.accountName}</Text>
                        <Text style={styles.displayAcc}>{item.accountNumber}</Text>
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


        generateIraKeyExtractor = (item) => item.accountName;
    renderIraAccount = () => ({ item, index }) =>
        (
            <TouchableOpacity onPress={this.selectedAccount(index,"ira")}>
                <View style={this.state.selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                    <View style={styles.displayAccView}>
                        <Text style={styles.displayAcc}>{item.accountName}</Text>
                        <Text style={styles.displayAcc}>{item.accountNumber}</Text>
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

        generateUtmaKeyExtractor = (item) => item.accountName;
        renderUtmaAccount = () => ({ item, index }) =>
            (
                <TouchableOpacity onPress={this.selectedAccount(index,"utma")}>
                    <View style={this.state.selectedAccount === index ? styles.selectedAccount : styles.accountList}>
                        <View style={styles.displayAccView}>
                            <Text style={styles.displayAcc}>{item.accountName}</Text>
                            <Text style={styles.displayAcc}>{item.accountNumber}</Text>
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
                        <Text style={styles.autoInvestHead}>{globalString.automaticInvestment.create_invest_plan}</Text>
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
                            <Text style={styles.autoInvest_title_text}>{globalString.automaticInvestment.acc_title}</Text>
                        </View>
                        <View style={styles.body}>


                            <Text style={styles.autoInvestCont}>{globalString.automaticInvestment.acc_content}</Text>

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

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentAccountComponent.defaultProps = {

};

export default AutomaticInvestmentAccountComponent;