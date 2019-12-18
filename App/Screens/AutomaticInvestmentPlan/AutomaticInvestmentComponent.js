import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GIcon
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';

let editDeleteJson = [

    {
        name: 'Edit',
        id: '1'
    },
    {
        name: 'Delete',
        id: '2'
    },
];

class AutomaticInvestmentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: false,
            selectedIndex: -1,
            generalAutoInvestment: {},
            iraAutoInvestment: {},
            utmaAutoInvest:{},
            arr_expand: [true, false, false],
            expandIndex: 0,
        };
    }

    componentDidMount() {
        if (this.props && this.props.automaticInvestmentState) {
            //console.log("++++++++++++++++++++++++++++++++++++++",this.props.automaticInvestmentState.general)
            this.setState({
                generalAutoInvestment: this.props.automaticInvestmentState.general,
                iraAutoInvestment: this.props.automaticInvestmentState.ira,
                utmaAutoInvest:this.props.automaticInvestmentState.utmaAutoInvest
            });
        }
    }
    setCollapsableUpdates = index => e => {

        var array = [...this.state.arr_expand]; // make a separate copy of the array
        let IndexExpand = this.state.expandIndex;


        if (index !== IndexExpand) {

            array[IndexExpand] = false;

        }
        array[index] = !array[index];

        this.setState({ arr_expand: array, expandIndex: index, selectedAccount: -1 });


    }
    generateKeyExtractor = item=> item.id;
    renderInvestment = () => ({ item, index }) =>
        (

            <View style={styles.flatHeader}>
                <View style={styles.flatHeaderView}>
                    <View style={styles.flatHeaderContent}>
                        {/* <Text style={styles.flatHeaderTitle}>{globalString.automaticInvestment.acc_Name}</Text> */}
                        <Text style={styles.flatHeaderValue}>{item.account}</Text>
                    </View>
                    <View style={styles.editMenu}>
                        <Text onPress={this.editDelete(index)}>{":"}</Text>
                    </View>
                </View>

                {
                    index === this.state.selectedIndex ?
                        <FlatList style={styles.editFlatList}
                            data={editDeleteJson}
                            renderItem={({ item, index }) =>
                                (<TouchableOpacity style={styles.editDropdown} >
                                    <Text style={styles.editDropdownText} onPress={this.navigationInvestmentEdit(index)}> {item.name} </Text>
                                </TouchableOpacity>)
                            }
                            keyExtractor={item => item.id}
                        /> : null}

                <View style={styles.flatBody}>

                    <View style={styles.flatBodyTitle}>
                        <Text style={styles.flatBodyTitleValue}>{item.investedIn}</Text>
                        <Text style={styles.flatBodyTitleLink}>{"5"}</Text>
                    </View>

                    <Text style={styles.flatBodyDate}>{"Date added " + item.dateAdded}</Text>
                    <View style={styles.seperator_line} />
                    <View style={styles.verifyContentMain}>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>{"Fund From"}</Text>
                            <Text style={styles.verifyConent2}>{item.fundFrom}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>{"Schedule"}</Text>
                            <Text style={styles.verifyConent2}>{item.invest}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>{"On the date"}</Text>
                            <Text style={styles.verifyConent2}>{item.dateToInvest}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>{"Amount"}</Text>
                            <Text style={styles.verifyConent2}>{item.totalAmount}</Text>
                        </View>
                        <View style={styles.flatBodyNextDate}>
                            <View style={styles.flatBodySkip}>
                                <Text style={styles.verifyConent1}>{"Next Investment"}</Text>
                                <Text style={styles.verifyConent2}>{item.nextInvestementDate}</Text>
                            </View>
                            <GButtonComponent
                                buttonStyle={styles.skipButton}
                                buttonText={globalString.common.skip}
                                textStyle={styles.skipButtonText}
                                onPress={this.navigationInvestmentVerify}
                            />
                        </View>
                    </View>


                </View>
            </View>

        )

    editDelete = index => e => {
        index === this.state.selectedIndex ?
            this.setState({
                selectedIndex: -1
            })
            :
            this.setState({
                selectedIndex: index
            });

    }

    setStateUpdates = ()=>e => {

        this.setState({
            expand: !this.state.expand,
        });
    }

    navigationBack = () => this.props.navigation.goBack();

    navigationInvestmentAccount = () => this.props.navigation.navigate('automaticInvestmentAccount');

    navigationInvestmentVerify = () => this.props.navigation.navigate('automaticInvestmentVerify', { skip: true });

    navigationInvestmentEdit = index => e => {
        switch ((index)) {
            case 0:
                this.props.navigation.navigate('automaticInvestmentAdd', { option: index, ItemToEdit: this.state.selectedIndex });
                break;
            case 1:
                var array = [...this.state.generalAutoInvestment]; // make a separate copy of the array
                var indexDelete = this.state.selectedIndex
                if (indexDelete !== -1) {
                    array.splice(indexDelete, 1);
                    this.setState({ generalAutoInvestment: array, selectedIndex: -1 });
                }

                break;
            default:
                break;
        }

    }
    render() {

        return (
            <View style={styles.container}>
                
                <GHeaderComponent register navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <View style={{ marginLeft: scaledHeight(10), marginRight: scaledHeight(10) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.autoInvestHead}>{globalString.automaticInvestment.autoInves_Title}</Text>
                            <Text style={styles.addInvest} onPress={this.navigationInvestmentAccount}>{'Add'}</Text>
                        </View>

                        <View style={styles.seperator_line} />
                        {/* <Text style={styles.addInvestTitle}>{globalString.automaticInvestment.autoInves_current}</Text> */}
                        {/* <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.addInvestTitle}>{globalString.automaticInvestment.autoInves_current}</Text>
                            <Text style={styles.addInvest} onPress={this.navigationInvestmentAdd}>{'Add'}</Text>
                        </View> */}
                        {/* <View style={styles.seperator_line} /> */}
                        {/* <Text style={styles.conentMarginTop}>{globalString.automaticInvestment.autoInves_current_content}</Text> */}
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(0)}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                {this.state.arr_expand[0] ?
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
                        {this.state.arr_expand[0] ?
                        <FlatList
                            data={this.state.generalAutoInvestment}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.selectedIndex}
                        />:null} 

                         <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(1)}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                {this.state.arr_expand[1] ?
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
                        {this.state.arr_expand[1] ?
                        <FlatList
                            data={this.state.iraAutoInvestment}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.selectedIndex}
                        />:null} 

                        
                        {this.state.utmaAutoInvest==="undefined"?null:<View>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(2)}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                {this.state.arr_expand[2] ?
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
                        </View>}
                        
                        
                        
                        <View style={{ borderColor: '#C7C7C7', borderWidth: 1, backgroundColor: '#F2F2F2', paddingLeft: scaledWidth(10), paddingRight: scaledWidth(10) }}>
                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                    {this.state.expand ?
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
                                    <Text style={styles.addInvestFooterTitle}>{'Instructions to Setup and manage Automatic Mutual Fund Purchases'}</Text>
                                </View>
                            </TouchableOpacity>
                            {this.state.expand ?
                                <View>
                                    <Text style={styles.addInvestFooterText}>{'Setup and manage Automatic Mutual Fund Purchases'}</Text>
                                    <Text style={styles.addInvestFooterText}>{'When you make a habit of investing regularly, it can make it easier to achieve your financial goals. Get started in three easy steps'}</Text>
                                    <Text style={styles.addInvestFooterList}>{'Choose your USAA Investment account'}</Text>
                                    <Text style={styles.addInvestFooterList}>{'Enter an amount of $50 or more'}</Text>
                                    <Text style={styles.addInvestFooterList}>{'Select how often you want to invest'}</Text>
                                    <Text style={styles.addInvestFooterText}>{'There are no fees to setup an automatic investment and if your plans change, you can cancel at any time.'}</Text>
                                    <Text style={styles.addInvestFooterText}>{'For IRA accounts the annual contribution limit for 2019 is $6,000 or $7,000 if you are over age 50. '}</Text>
                                    <Text style={styles.addInvestFooterText}>{'Note: If you don\'t see your account below, you may need to use our Transfer Funds Tool.'}</Text>
                                </View>
                                : null}
                        </View>
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationBack}
                        />
                    </View>

                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentComponent.defaultProps = {

};

export default AutomaticInvestmentComponent;