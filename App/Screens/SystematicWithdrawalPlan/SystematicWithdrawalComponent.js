import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList,TouchableOpacity ,TouchableWithoutFeedback} from 'react-native';
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



class SystematicWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
        this.showDeletePopup=false;
        this.selectedIndex= -1;
        this.state = {
            expand: false,
            generalySystematicWithdrawal: {},
            iraSystematicWithdrawal: {},
            utmaSystematicWithdrawal:{},
            arr_expand: [true, false, false],
            expandIndex: 0,
            refresh: false,
            popupIndex: -1,
        };
    }

    componentDidMount() {
        const{refresh} = this.state;
        if (this.props && this.props.systematicWithdrawalState) {
            if(this.props.systematicWithdrawalState.savedAccData)
            {
                console.log('componentDidMount#####################',this.props.systematicWithdrawalState.savedAccData)
                this.setState({
                    generalySystematicWithdrawal: this.props.systematicWithdrawalState.savedAccData.general,
                    iraSystematicWithdrawal: this.props.systematicWithdrawalState.savedAccData.ira,
                    utmaSystematicWithdrawal:this.props.systematicWithdrawalState.savedAccData.utma,
                    refresh: !refresh
                });
            }
            else
            {
                this.setState({
                    generalySystematicWithdrawal: this.props.systematicWithdrawalState.general,
                    iraSystematicWithdrawal: this.props.systematicWithdrawalState.ira,
                    utmaSystematicWithdrawal:this.props.systematicWithdrawalState.utma,
                   refresh: !refresh
                });
            }
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const{refresh} = this.state;
    //     if (this.props && this.props.systematicWithdrawalState) {
    //         if(this.props.systematicWithdrawalState.savedAccData)
    //         {
    //             console.log('componentDidMount#####################',this.props.systematicWithdrawalState.savedAccData)
    //             this.setState({
    //                 generalySystematicWithdrawal: this.props.systematicWithdrawalState.savedAccData.general,
    //                 iraSystematicWithdrawal: this.props.systematicWithdrawalState.savedAccData.ira,
    //                 utmaSystematicWithdrawal:this.props.systematicWithdrawalState.savedAccData.utma,
    //                 refresh: !refresh
    //             });
    //         }
    //         // else
    //         // {
    //         //     this.setState({
    //         //         generalySystematicWithdrawal: this.props.systematicWithdrawalState.general,
    //         //         iraSystematicWithdrawal: this.props.systematicWithdrawalState.ira,
    //         //         utmaSystematicWithdrawal:this.props.systematicWithdrawalState.utma,
    //         //         refresh: !refresh
    //         //     });
    //         // }
    //     }
        
    // }

    setCollapsableUpdates = index => e => {
        const{arr_expand} =this.state;
        const array = [...arr_expand]; 
        const indexExpand = this.state.expandIndex;
        if (index !== indexExpand) {
            array[Number(indexExpand)] = false;
        }
        array[Number(index)] = !array[Number(index)];
        this.setState({ arr_expand: array, expandIndex: index });
    }

    generateSelectedFunds= item => item.id;

    renderSelectedFunds =()=>({ item }) =>
    (<View style={styles.editDropdown}>
        <Text style={styles.editDropdownText}> {item.name} </Text>
        <Text style={styles.editDropdownText}> {item.amount} </Text>
     </View>)

    generateEditDelete = item => item.id;

    renderEditDeleteOption =()=>({ item, index }) =>
    (
    <TouchableOpacity style={styles.editDropdown}>
        <Text style={styles.editDropdownText} onPress={this.navigationInvestmentEdit(index)}> {item.name} </Text>
    </TouchableOpacity>
     )

    generateKeyExtractor = (item) => item.id;
    renderInvestment = () => ({ item, index }) =>
        (

            <View style={styles.flatHeader}>
                <View style={styles.flatHeaderView}>
                    <View style={styles.flatHeaderContent}>
                        <Text style={styles.flatHeaderValue}>{item.account}</Text>
                    </View>
                    <View style={styles.editMenu}>
                        <TouchableOpacity onPress={this.editDelete(index,item.accountType)}>
                            <GIcon
                                name="dots-vertical"
                                type="material-community"
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {
                    index === this.selectedIndex ?
                        <FlatList style={styles.editFlatList}
                            data={editDeleteJson}
                            renderItem={this.renderEditDeleteOption()}
                            keyExtractor={this.generateEditDelete}
                        /> : null}

                <View style={styles.flatBody}>

                    <View style={styles.flatBodyTitle}>
                    <Text style={styles.flatBodyTitleValue}>{item.investedIn[0].name}</Text>
                        <Text style={styles.flatBodyTitleLink} onPress={this.popupInvestedIn(index)}>{item.investedIn.length}</Text>
                    </View>

                    {
                        index === this.state.popupIndex ?
                        
                            <FlatList style={styles.editFlatList}
                                data={item.investedIn}
                                renderItem={this.renderSelectedFunds()}
                                keyExtractor={this.generateSelectedFunds}
                            /> : null}

                    <Text style={styles.flatBodyDate}>{"Date added " + item.dateAdded}</Text>
                    <View style={styles.seperator_line} />
                    <View style={styles.verifyContentMain}>
                        
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>{"Schedule"}</Text>
                            <Text style={styles.verifyConent2}>{item.invest}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>{"On the date"}</Text>
                            <Text style={styles.verifyConent2}>{item.dateToInvest === ''?item.dateFromInvest:(item.dateFromInvest+' & '+item.dateToInvest)}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>{"Amount"}</Text>
                            <Text style={styles.verifyConent2}>{item.totalAmount}</Text>
                        </View>
                        <View style={styles.verifyContentMain}>
                            <Text style={styles.verifyConent1}>{"Fund To"}</Text>
                            <Text style={styles.verifyConent2}>{item.fundTo}</Text>
                        </View>
                        
                        
                       
                        <View style={styles.flatBodyNextDate}>
                            <View style={styles.flatBodySkip}>
                                <Text style={styles.verifyConent1}>{"Next Withdrawal"}</Text>
                                <Text style={styles.verifyConent2}>{item.nextWithdrawalDate}</Text>
                            </View>
                            <GButtonComponent
                                buttonStyle={styles.skipButton}
                                buttonText={globalString.common.skip}
                                textStyle={styles.skipButtonText}
                                onPress={this.navigationInvestmentVerify(index,item.accountType)}
                            />
                        </View>
                    </View>


                </View>
            </View>

        )
        editDelete = (index,type) => () => {
            const{refresh} = this.state;
            if(index === this.selectedIndex) {
                this.selectedIndex= -1;
                this.setState({
                    refresh: !refresh,
                    accountType:type,
                });
            }
            else{
                this.selectedIndex= index;
                this.setState({
                    refresh: !refresh,
                    accountType:type,
                });
            }
    
        }
    
        popupInvestedIn = index => () => {
            const{refresh} = this.state;
            if(index === this.state.popupIndex)
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
            const{expand1} = this.state;
            this.setState({
                expand: !expand1,
            });
        }
    deleteAccount=(option)=>()=>{
        const{refresh} = this.state;
        this.showDeletePopup=false;
        const indexDelete = this.selectedIndex;
        this.selectedIndex=-1;
        if(option)
        {
            let array;
                switch (this.state.accountType.toLowerCase()) {
                    case 'general':
                        array = [...this.state.generalySystematicWithdrawal];
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({ generalySystematicWithdrawal: array});
                        }
                        break;
                    case 'ira':
                        array = [...this.state.iraSystematicWithdrawal];
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({ iraSystematicWithdrawal: array});
                        }
                        break;
                    case 'utma':
                        array = [...this.state.utmaSystematicWithdrawal];
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({ utmaSystematicWithdrawal: array});
                        }
                        break;
                    default:
                        array = [...this.state.generalySystematicWithdrawal];
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({ generalySystematicWithdrawal: array});
                        }
                        break;

                }
        }
        else{
            this.setState({refresh:!refresh});
        }
    }

    deleteConfirm=()=> 
    {
        const{refresh} = this.state;
        this.showDeletePopup=true;
        this.setState({refresh:!refresh});
    }

    navigationBack = () => this.props.navigation.goBack();

    navigationInvestmentAccount = () => 
            this.props.navigation.navigate({routeName:'systematicWithdrawalAccount',key:'systematicWithdrawalAccount',params:{newEdit:false}});

    navigationInvestmentVerify = (index,type) =>e=> this.props.navigation.navigate({routeName:'systematicWithdrawalVerify',key:'systematicWithdrawalVerify',params: { skip: true,indexSelected:index,accountType: type }});
    navigationInvestmentEdit = index => e => {
        switch ((index)) {
            case 0:
                this.props.navigation.navigate({routeName:'systematicWithdrawalAdd',key:'systematicWithdrawalAdd', params:{ option: index, ItemToEdit: this.selectedIndex ,accountType:this.state.accountType}});
                break;
            case 1:
                this.deleteConfirm();
                break;
            default:
                break;
        }

    }
    render() {

        return (
            <View style={styles.container}>
                {console.log('###############################',this.state.generalySystematicWithdrawal)}
                <GHeaderComponent navigation={this.props.navigation} />
                {this.showDeletePopup?<View style={styles.bankInfoContainer}>
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
                                      </View>:null}
                <ScrollView style={{ flex: 0.85 }}>
                <TouchableWithoutFeedback onPress={this.editDelete(-1)}>
                    <View>
                    <View style={{ marginLeft: scaledHeight(10), marginRight: scaledHeight(10) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.autoInvestHead}>{globalString.systematicWithdrawal.sysWith_Title}</Text>
                            <Text style={styles.addInvest} onPress={this.navigationInvestmentAccount}>{'Add'}</Text>
                        </View>
                        <View style={styles.seperator_line} />
                        
                        {this.state.generalySystematicWithdrawal.length>0?<View>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(0)}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                {this.state.arr_expand[0] ?
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={20}
                                        color="#088ACC"
                                    /> :
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={20}
                                        color="#088ACC"
                                    />
                                }
                                <Text style={styles.autoInvest_sub_title_text}>{'General Account'}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.seperator_line} /> 
                        {this.state.arr_expand[0] ?
                        <FlatList
                            data={this.state.generalySystematicWithdrawal}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.refresh}
                        />:null} 
                        </View>:null}
                    {this.state.iraSystematicWithdrawal.length>0?<View>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(1)}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                {this.state.arr_expand[1] ?
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={20}
                                        color="#088ACC"
                                    /> :
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={20}
                                        color="#088ACC"
                                    />
                                }
                                <Text style={styles.autoInvest_sub_title_text}>{'IRA Account'}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.seperator_line} />
                        {this.state.arr_expand[1] ?
                            <FlatList
                            data={this.state.iraSystematicWithdrawal}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.refresh}
                        />:null} 
                        </View>:null}

                    {this.props.systematicWithdrawalState.utma?<View>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setCollapsableUpdates(2)}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                {this.state.arr_expand[2] ?
                                    <GIcon
                                        name="minus"
                                        type="antdesign"
                                        size={20}
                                        color="#088ACC"
                                    /> :
                                    <GIcon
                                        name="plus"
                                        type="antdesign"
                                        size={20}
                                        color="#088ACC"
                                    />
                                }
                                <Text style={styles.autoInvest_sub_title_text}>{'UTMA Account'}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.seperator_line} />
                        {this.state.arr_expand[2] ?
                        <FlatList
                            data={this.state.utmaSystematicWithdrawal}
                            renderItem={this.renderInvestment()}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.refresh}
                        />:null} 
                        </View>:null}

                        <View style={{ borderColor: '#C7C7C7', borderWidth: 1, backgroundColor: '#F2F2F2', paddingLeft: scaledWidth(10), paddingRight: scaledWidth(10) }}>
                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.setStateUpdates}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
                                    {this.state.expand ?
                                        <GIcon
                                            name="minus"
                                            type="antdesign"
                                            size={20}
                                            color="#088ACC"
                                        /> :
                                        <GIcon
                                            name="plus"
                                            type="antdesign"
                                            size={20}
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
                    </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

SystematicWithdrawalComponent.defaultProps = {

};

export default SystematicWithdrawalComponent;