import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import CardHeader from './CardHeader';

let newInterestedParties = [];
class manageIntrestedPartiesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSavedSuccess: false,
            successMsg: "",
            collapseIcon: "-"
        };
    }

    componentDidMount() {
        this.updateNavigationProps();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ isSavedSuccess: this.props.navigation.getParam("showMsg"), successMsg: this.props.navigation.getParam("successMsg") });
        }
    }

    updateNavigationProps = () => {
        this.setState({ isSavedSuccess: this.props.navigation.getParam("showMsg"), successMsg: this.props.navigation.getParam("successMsg") });
    }

    addInterestedParty = (data) => () => {
        this.props.navigation.navigate("addIntrestedParties", { acc_Data: data });
    }

    onClickEdit = (pObj, pKey, data) => () => {
        this.props.navigation.navigate("editIntrestedParty", { acc_Data: data, parent_Obj: pObj, parent_Key: pKey });
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

    onDeleteFunc = (item, data) => () => {
        const payloadData = this.getDeleteData(item, data);
        this.props.deleteInterestedParties(payloadData);
    }

    renderData = ({ item }) => {
        return (
            <View style={styles.blockMarginTop}>
                <View style={styles.titleHeadingView}>
                    <Text style={styles.titleIconView}>{this.state.collapseIcon}</Text>
                    <Text style={styles.titleHeaderText}>{item.account_Type}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.containerView}>
                    <View style={styles.containerHeaderView}>
                        <Text style={styles.containerHeaderText}>{` - Acc Name - ${item.account_Name} | Acc Number - ${item.account_Number}`}</Text>
                        <View style={styles.addBtn}>
                            <TouchableOpacity onPress={this.addInterestedParty(item)}>
                                <Text style={styles.editBtnText}>{gblStrings.accManagement.addNew}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {item.interestedParty && item.interestedParty.map((data, k) => {
                        return (
                            <View key={data.key} style={styles.innerContainerView}>
                                <CardHeader item={data} navigate={this.onClickEdit(item, k, data)} onDelete={this.onDeleteFunc(item, data)} />
                                <View style={styles.contentContainerStyle}>
                                    <View style={styles.marginTopStyle}>
                                        <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                                        <Text style={styles.beneNameStyle}>{`${data.fname} ${data.mname} ${data.lname}`}</Text>
                                    </View>
                                    <View style={styles.marginTopStyle}>
                                        <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToAccountHolder}</Text>
                                        <Text style={styles.shortContentValueText}>{data.relationship_To_Account_holder}</Text>
                                    </View>
                                    <View style={styles.marginTopStyle}>
                                        <Text style={styles.shortContentText}>{gblStrings.accManagement.noOfAccTagged}</Text>
                                        <Text style={styles.shortContentValueText}>{`# ${data.accounts_Tagged}`}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                    }
                </View>
            </View>
        );
    }

    generateKeyExtractor = (item) => item.key;

    render() {
        if (this.props.manageInterestedPartiesData && this.props.manageInterestedPartiesData.list_manage_interested_parties) {
            newInterestedParties = this.props.manageInterestedPartiesData.list_manage_interested_parties;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                    <View style={styles.mainHeadingView}>
                        {this.state.isSavedSuccess &&
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
                                    <Text style={styles.notificationTxt}>{this.state.successMsg}</Text>
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
                        }
                        <Text style={styles.mainHeadlineText}>
                            {gblStrings.accManagement.manageIntrestedParties}
                        </Text>
                    </View>
                    <FlatList
                        data={newInterestedParties}
                        extraData={this.props}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderData}
                    />
                    <View style={styles.borderInternal} />
                    <View style={styles.mainHeadingView}>
                        <Text style={styles.disclaimerTextHeading}>{gblStrings.accManagement.VCDiscalimerTitle}</Text>
                        <Text style={styles.disclaimerTxt}>{gblStrings.accManagement.VCDiscalimerDescContent}</Text>
                    </View>
                    <GFooterComponent />
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