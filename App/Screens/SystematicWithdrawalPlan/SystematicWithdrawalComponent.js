import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GIcon
} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';

const editDeleteJson = [

    {
        name: 'Edit',
        id: '1'
    },
    {
        name: 'Delete',
        id: '2'
    },
];



class SystematicWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
        this.showDeletePopup = false;
        this.selectedIndex = -1;
        this.state = {
            expand: false,
            generalySystematicWithdrawal: {},
            iraSystematicWithdrawal: {},
            utmaSystematicWithdrawal: {},
            arrExpand: [true, false, false],
            expandIndex: 0,
            refresh: false,
            popupIndex: -1,
        };
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        const { refresh } = prevState;
        const { systematicWithdrawalProps } = nextProps;
        if(Object.keys(systematicWithdrawalProps.existingPlanList).length>0)
        {
            return{
                
                generalySystematicWithdrawal: systematicWithdrawalProps.existingPlanList.general,
                iraSystematicWithdrawal: systematicWithdrawalProps.existingPlanList.ira,
                utmaSystematicWithdrawal: systematicWithdrawalProps.existingPlanList.utma,
                refresh: !refresh
            };
        }
        // if (systematicWithdrawalProps.savedAccData && automaticInvestmentState !== systematicWithdrawalProps.savedAccData) {
        //     return{
        //         automaticInvestmentState:systematicWithdrawalProps,
        //          generalySystematicWithdrawal: systematicWithdrawalProps.savedAccData.general,
        //          iraSystematicWithdrawal: systematicWithdrawalProps.savedAccData.ira,
        //          utmaSystematicWithdrawal: systematicWithdrawalProps.savedAccData.utma,
        //          refresh: !refresh
        //      };
        //  }
        return prevState;

    }

    componentDidMount(){
        const { systematicWithdrawalProps,clearReduxKeyData } = this.props;
        if(Object.keys(systematicWithdrawalProps.existingPlanList).length>0){
            clearReduxKeyData();
        }
    }

    // componentDidMount() {
    //     const { refresh } = this.state;
    //     const { systematicWithdrawalProps } = this.props;
    //     if (systematicWithdrawalProps) {
    //         if (systematicWithdrawalProps.savedAccData) {
    //             this.setState({
    //                 generalySystematicWithdrawal: systematicWithdrawalProps.savedAccData.general,
    //                 iraSystematicWithdrawal: systematicWithdrawalProps.savedAccData.ira,
    //                 utmaSystematicWithdrawal: systematicWithdrawalProps.savedAccData.utma,
    //                 refresh: !refresh
    //             });
    //         }
    //         else {
    //             this.setState({
    //                 generalySystematicWithdrawal: systematicWithdrawalProps.general,
    //                 iraSystematicWithdrawal: systematicWithdrawalProps.ira,
    //                 utmaSystematicWithdrawal: systematicWithdrawalProps.utma,
    //                 refresh: !refresh
    //             });
    //         }
    //     }
    // }
 

    // componentDidUpdate(prevProps, prevState) {
    //     const{refresh} = this.state;
    //       const{systematicWithdrawalProps}=this.props;
    //     if (this.props && systematicWithdrawalProps) {
    //         if(systematicWithdrawalProps.savedAccData)
    //         {
    //             console.log('componentDidMount#####################',systematicWithdrawalProps.savedAccData)
    //             this.setState({
    //                 generalySystematicWithdrawal: systematicWithdrawalProps.savedAccData.general,
    //                 iraSystematicWithdrawal: systematicWithdrawalProps.savedAccData.ira,
    //                 utmaSystematicWithdrawal:systematicWithdrawalProps.savedAccData.utma,
    //                 refresh: !refresh
    //             });
    //         }
    //         // else
    //         // {
    //         //     this.setState({
    //         //         generalySystematicWithdrawal: systematicWithdrawalProps.general,
    //         //         iraSystematicWithdrawal: systematicWithdrawalProps.ira,
    //         //         utmaSystematicWithdrawal:systematicWithdrawalProps.utma,
    //         //         refresh: !refresh
    //         //     });
    //         // }
    //     }

    // }
    getNumberWithOrdinal = (n) => {
        const s=["th","st","nd","rd"];
        const v=n%100;
        return n+(s[(v-20)%10]||s[+v]||s[0]);
     }

     getAmountWithSymbol = (n) => {
        const s=["$"];
        return s+n;
    }
    
    setCollapsableUpdates = index => () => {
        const { arrExpand, expandIndex } = this.state;
        const array = [...arrExpand];
        const indexExpand = expandIndex;
        if (index !== indexExpand) {
            array[Number(indexExpand)] = false;
        }
        array[Number(index)] = !array[Number(index)];
        this.setState({ arrExpand: array, expandIndex: index });
    }

    generateSelectedFunds = item => item.id;

    renderSelectedFunds = () => ({ item }) =>
        (
            <View style={styles.editDropdown}>
                <Text style={styles.editDropdownText}> {item.fundName} </Text>
                <Text style={styles.editDropdownText}> {this.getAmountWithSymbol(item.fundAmount)} </Text>
            </View>
        )

    generateEditDelete = item => item.id;

    renderEditDeleteOption = () => ({ item, index }) =>
        (
            <TouchableOpacity style={styles.editDropdown}>
                <Text style={styles.editDropdownText} onPress={this.navigationInvestmentEdit(index)}> {item.name} </Text>
            </TouchableOpacity>
        )

    generateKeyExtractor = (item) => item.id;

    renderInvestment = () => ({ item, index }) => {
        const { popupIndex } = this.state;
        return(

            <View style={styles.flatHeader}>
                <View style={styles.flatHeaderView}>
                    <View style={styles.flatHeaderContent}>
                        <Text style={styles.flatHeaderValue}>{item.account}</Text>
                    </View>
                    <View style={styles.editMenu}>
                        <TouchableOpacity onPress={this.editDelete(index, item.accountType)}>
                            <GIcon
                                name="dots-vertical"
                                type="material-community"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {
                    index === this.selectedIndex ? (
                        <FlatList style={styles.editFlatList}
                            data={editDeleteJson}
                            renderItem={this.renderEditDeleteOption()}
                            keyExtractor={this.generateEditDelete}
                        />
                    ) : null}

                <View style={styles.flatBody}>

                    <View style={styles.flatBodyTitle}>
                        <Text style={styles.flatBodyTitleValue}>{item.investedIn[0].fundName}</Text>
                        <Text style={styles.flatBodyTitleLink} onPress={this.popupInvestedIn(index)}>{item.investedIn.length}</Text>
                    </View>

                    {
                        index === popupIndex ? (
                            <FlatList style={styles.editFlatList}
                                data={item.investedIn}
                                renderItem={this.renderSelectedFunds()}
                                keyExtractor={this.generateSelectedFunds}
                            />
                        ) : null}

                    <Text style={styles.flatBodyDate}>{`Date added ${item.dateAdded}`}</Text>
                    <View style={styles.seperator_line} />
                    <View style={styles.verifyContentMain}>

                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>Schedule</Text>
                            <Text style={styles.verifyConent2}>{item.invest}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>On the date</Text>
                            <Text style={styles.verifyConent2}>{item.dateToInvest === 'null'? this.getNumberWithOrdinal(item.dateFromInvest) : (`${this.getNumberWithOrdinal(item.dateFromInvest)} & ${this.getNumberWithOrdinal(item.dateToInvest)}`)}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>Amount</Text>
                            <Text style={styles.verifyConent2}>{this.getAmountWithSymbol(item.totalAmount)}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>Fund To</Text>
                            <Text style={styles.verifyConent2}>{item.fundTo}</Text>
                        </View>



                        <View style={styles.flatBodyNextDate}>
                            <View style={styles.flatBodySkip}>
                                <Text style={styles.verifyConent1}>Next Withdrawal</Text>
                                <Text style={styles.verifyConent2}>{item.nextWithdrawalDate}</Text>
                            </View>
                            <GButtonComponent
                                buttonStyle={styles.skipButton}
                                buttonText={globalString.common.skip}
                                textStyle={styles.skipButtonText}
                                onPress={this.navigationInvestmentVerify(index, item.accountType)}
                            />
                        </View>
                    </View>


                </View>
            </View>

        );
    }

    editDelete = (index, type) => () => {
        const { refresh } = this.state;
        if (index === this.selectedIndex) {
            this.selectedIndex = -1;
            this.setState({
                refresh: !refresh,
                accountType: type,
            });
        }
        else {
            this.selectedIndex = index;
            this.setState({
                refresh: !refresh,
                accountType: type,
            });
        }

    }

    popupInvestedIn = index => () => {
        const { refresh, popupIndex } = this.state;
        if (index === popupIndex)
            this.setState({
                popupIndex: -1,
                refresh: !refresh
            });
        else
            this.setState({
                popupIndex: index,
                refresh: !refresh
            });

    }

    setStateUpdates = () => {
        const { expand1 } = this.state;
        this.setState({
            expand: !expand1,
        });
    }

    deleteAccount = (option) => () => {
        const { refresh, accountType, generalySystematicWithdrawal, iraSystematicWithdrawal, utmaSystematicWithdrawal } = this.state;
        this.showDeletePopup = false;
        const indexDelete = this.selectedIndex;
        this.selectedIndex = -1;
        if (option) {
            let array;
            switch (accountType.toLowerCase()) {
                case 'general':
                    array = [...generalySystematicWithdrawal];
                    if (indexDelete !== -1) {
                        array.splice(indexDelete, 1);
                        this.setState({ generalySystematicWithdrawal: array });
                    }
                    break;
                case 'ira':
                    array = [...iraSystematicWithdrawal];
                    if (indexDelete !== -1) {
                        array.splice(indexDelete, 1);
                        this.setState({ iraSystematicWithdrawal: array });
                    }
                    break;
                case 'utma':
                    array = [...utmaSystematicWithdrawal];
                    if (indexDelete !== -1) {
                        array.splice(indexDelete, 1);
                        this.setState({ utmaSystematicWithdrawal: array });
                    }
                    break;
                default:
                    array = [...generalySystematicWithdrawal];
                    if (indexDelete !== -1) {
                        array.splice(indexDelete, 1);
                        this.setState({ generalySystematicWithdrawal: array });
                    }
                    break;

            }
        }
        else {
            this.setState({ refresh: !refresh });
        }
    }

    deleteConfirm = () => {
        const { refresh } = this.state;
        this.showDeletePopup = true;
        this.setState({ refresh: !refresh });
    }

    navigationBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    navigationInvestmentAccount = () => {
        const { navigation } = this.props;
        navigation.navigate({ routeName: 'systematicWithdrawalAccount', key: 'systematicWithdrawalAccount', params: { newEdit: false } });
    }

    navigationInvestmentVerify = (index, type) => () => {
        const { navigation } = this.props;
        navigation.navigate({ routeName: 'systematicWithdrawalVerify', key: 'systematicWithdrawalVerify', params: { skip: true, indexSelected: index, accountType: type } });
    }

    navigationInvestmentEdit = index => () => {
        const { navigation } = this.props;
        const { accountType } = this.state;
        switch ((index)) {
            case 0:
                navigation.navigate({ routeName: 'systematicWithdrawalAdd', key: 'systematicWithdrawalAdd', params: { option: index, ItemToEdit: this.selectedIndex, accountType } });
                break;
            case 1:
                this.deleteConfirm();
                break;
            default:
                break;
        }

    }

    render() {
        const { navigation, systematicWithdrawalProps } = this.props;
        const { generalySystematicWithdrawal, iraSystematicWithdrawal, utmaSystematicWithdrawal, arrExpand, refresh, expand } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                {this.showDeletePopup ? (
                    <View style={styles.bankInfoContainer}>
                        <Text style={styles.accountNameHeaderText}>
                            Delete Automatic Investment Plan
                        </Text>

                        <Text style={styles.accountNameSubHeaderText}>
                            Are you sure you want to delete selected Automatic Investment Plan
                        </Text>

                        <View style={styles.confirmDeleteView}>
                            <GButtonComponent
                                buttonStyle={styles.cancelBtn}
                                buttonText={globalString.common.cancel}
                                textStyle={styles.cancelBtnText}
                                onPress={this.deleteAccount(false)}
                            />
                            <GButtonComponent
                                buttonStyle={styles.deleteBtn}
                                buttonText={globalString.common.delete}
                                textStyle={styles.deleteBtnText}
                                onPress={this.deleteAccount(true)}
                            />
                        </View>
                    </View>
                ) : null}
                <ScrollView style={styles.scrollStyle}>
                    <TouchableWithoutFeedback onPress={this.editDelete(-1)}>
                        <View>
                        <View style={styles.headerView}>
                                <View style={styles.headerChildView}>
                                    <Text style={styles.autoInvestHead}>{globalString.systematicWithdrawal.sysWith_Title}</Text>
                                    <Text style={styles.addInvest} onPress={this.navigationInvestmentAccount}>Add</Text>
                                </View>
                                <View style={styles.seperator_line} />

                                {generalySystematicWithdrawal.length > 0 ? (
                                    <View>
                                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(0)}>
                                        <View style={styles.expandView}>
                                                {arrExpand[0] ? (
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
                                        {arrExpand[0] ? (
                                            <FlatList
                                                data={generalySystematicWithdrawal}
                                                renderItem={this.renderInvestment()}
                                                keyExtractor={this.generateKeyExtractor}
                                                extraData={refresh}
                                            />
                                        ) : null}
                                    </View>
                                ) : null}
                                {iraSystematicWithdrawal.length > 0 ? (
                                    <View>
                                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(1)}>
                                        <View style={styles.expandView}>
                                                {arrExpand[1] ? (
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
                                        {arrExpand[1] ? (
                                            <FlatList
                                                data={iraSystematicWithdrawal}
                                                renderItem={this.renderInvestment()}
                                                keyExtractor={this.generateKeyExtractor}
                                                extraData={refresh}
                                            />
                                        ) : null}
                                    </View>
                                ) : null}

                                {systematicWithdrawalProps.utma ? (
                                    <View>
                                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(2)}>
                                        <View style={styles.expandView}>
                                                {arrExpand[2] ? (
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
                                        {arrExpand[2] ? (
                                            <FlatList
                                                data={utmaSystematicWithdrawal}
                                                renderItem={this.renderInvestment()}
                                                keyExtractor={this.generateKeyExtractor}
                                                extraData={refresh}
                                            />
                                        ) : null}
                                    </View>
                                ) : null}

<View style={styles.instructionView}>
                                    <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates}>
                                        <View style={styles.expandView}>
                                            {expand ? (
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
                                            <Text style={styles.addInvestFooterTitle}>Instructions to Setup and manage Automatic Mutual Fund Purchases</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {expand ? (
                                        <View>
                                            <Text style={styles.addInvestFooterText}>Setup and manage Automatic Mutual Fund Purchases</Text>
                                            <Text style={styles.addInvestFooterText}>When you make a habit of investing regularly, it can make it easier to achieve your financial goals. Get started in three easy steps</Text>
                                            <Text style={styles.addInvestFooterList}>Choose your USAA Investment account</Text>
                                            <Text style={styles.addInvestFooterList}>Enter an amount of $50 or more</Text>
                                            <Text style={styles.addInvestFooterList}>Select how often you want to invest</Text>
                                            <Text style={styles.addInvestFooterText}>There are no fees to setup an automatic investment and if your plans change, you can cancel at any time.</Text>
                                            <Text style={styles.addInvestFooterText}>For IRA accounts the annual contribution limit for 2019 is $6,000 or $7,000 if you are over age 50.</Text>
                                            <Text style={styles.addInvestFooterText}>Note: If you don&apos;t see your account below, you may need to use our Transfer Funds Tool.</Text>
                                        </View>
                                    )
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
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    systematicWithdrawalProps: PropTypes.instanceOf(Object),
    clearReduxKeyData: PropTypes.func,
};

SystematicWithdrawalComponent.defaultProps = {
    navigation: {},
    systematicWithdrawalProps: {},
    clearReduxKeyData: null,
};

export default SystematicWithdrawalComponent;