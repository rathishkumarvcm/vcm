import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GIcon, GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import CardHeader from './CardHeader';

let newInterestedParties = [];

class manageIntrestedPartiesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSavedSuccess: false,
            successMsg: "",
            collapseIcon: "-",
            interestedPartyData: []
        };
    }

    componentDidMount() {
        this.updateNavigationProps();
        this.getInterestedParties();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.updateNavigationProps();
        }
    }

    getInterestedParties = () => {
        const { manageInterestedPartiesData } = this.props;
        if (this.props && manageInterestedPartiesData && manageInterestedPartiesData.data) {
            this.setState({ interestedPartyData: manageInterestedPartiesData.data });
        }
    }

    updateNavigationProps = () => {
        const { navigation } = this.props;
        this.setState({ isSavedSuccess: navigation.getParam("showMsg"), successMsg: navigation.getParam("successMsg") });
    }

    addInterestedParty = () => {
        const { navigation } = this.props;
        navigation.navigate("addIntrestedParties");
    }

    onClickEdit = (pObj, pKey, data) => () => {
        // const { navigation } = this.props;
        // navigation.navigate("editIntrestedParty", { acc_Data: data, parent_Obj: pObj, parent_Key: pKey });
    }

    getDeleteData = (item, obj) => {
        const modObj = item;
        const pIndex = newInterestedParties.findIndex((data) => data.key === item.key);
        const cIndex = newInterestedParties[pIndex].interestedParty.findIndex((data) => data.key === obj.key);

        const arr = [...newInterestedParties[pIndex].interestedParty];
        arr.splice(cIndex, 1);

        modObj.interestedParty = arr;

        const newArr = [...newInterestedParties];
        newArr.splice(pIndex, 1, modObj);

        return newArr;
    }

    onDeleteFunc = (item) => () => {
        // const { deleteInterestedParties } = this.props;
        // const payloadData = this.getDeleteData(item, data);
        // deleteInterestedParties(payloadData);
    }

    renderAccountData = ({ item }) => {
        return (
            <CardHeader item={item} onDelete={this.onDeleteFunc(item)} />
        );
    }

    renderData = ({ item }) => {
        const { collapseIcon } = this.state;
        return (
            <View style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleIconView}>{collapseIcon}</Text>
                        <Text style={styles.titleHeaderText}>{`${item.fname} ${item.lname}`}</Text>
                    </View>
                    <View style={styles.editBtn}>
                        <TouchableOpacity>
                            <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.containerView}>
                    <View style={styles.containerHeaderView}>
                        <Text style={styles.containerHeaderText}>{gblStrings.accManagement.noOfAccTagged} <Text style={styles.containerHeaderTextValue}>{item.accounts_Tagged}</Text></Text>
                    </View>
                    <FlatList
                        data={item.interestedParties}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderAccountData}
                    />
                    <View style={styles.addAccountView}>
                        <TouchableOpacity>
                            <Text style={styles.editBtnText}>+ Add Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    generateKeyExtractor = (item) => item.key;

    render() {
        const { navigation, manageInterestedPartiesData } = this.props;
        const { successMsg, isSavedSuccess, interestedPartyData } = this.state;
        if (this.props && manageInterestedPartiesData && manageInterestedPartiesData.list_manage_interested_parties) {
            newInterestedParties = manageInterestedPartiesData.list_manage_interested_parties;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                    <View style={styles.mainHeadingView}>
                        {isSavedSuccess &&
                            (
                                <View style={styles.notificationView}>
                                    <TouchableOpacity style={styles.flexSmall}>
                                        <GIcon
                                            name="check"
                                            type="MaterialIcons"
                                            size={40}
                                            color="#707070"
                                        />
                                    </TouchableOpacity>
                                    <View style={styles.saveSuccessMsgTxt}>
                                        <Text style={styles.notificationTxt}>{successMsg}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.flexSmall}>
                                        <GIcon
                                            name="close"
                                            type="EvilIcons"
                                            size={40}
                                            color="#707070"
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        <Text style={styles.mainHeadlineText}>
                            {gblStrings.accManagement.manageIntrestedParties}
                        </Text>
                        <View style={styles.addBtn}>
                            <TouchableOpacity onPress={this.addInterestedParty}>
                                <Text style={styles.editBtnText}>{gblStrings.accManagement.addInterestedParty}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <FlatList
                        data={interestedPartyData}
                        extraData={this.state}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderData}
                    />
                    {/* ---------------------- Footer View -------------------- */}
                    <GFooterSettingsComponent />
                </ScrollView>
            </View>

        );
    }
}

manageIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    manageInterestedPartiesData: PropTypes.instanceOf(Object),
    deleteInterestedParties: PropTypes.func
};
manageIntrestedPartiesComponent.defaultProps = {
    navigation: {},
    manageInterestedPartiesData: {},
    deleteInterestedParties: () => { }
};

export default manageIntrestedPartiesComponent;