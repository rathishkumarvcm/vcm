import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, Switch } from 'react-native';
import { GHeaderComponent, GDropDownComponent, GFooterComponent, GButtonComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class CheckBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            currentSecuritiesChanged: false,
            reinvestChanged: false,
            checkBookDetails: [
                {
                    Id: "1",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    CheckBookRequestedOn: "30/10/2019",

                },
                {
                    Id: "2",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    CheckBookRequestedOn: "30/10/2019",

                },
                {
                    Id: "3",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    CheckBookRequestedOn: "30/10/2019",

                },
            ],
        };
    }

    componentDidMount() {
        let payload = [];

        payload.push(JSON.stringify(this.state.checkBookDetails));
        this.props.getCheckBookInfo(JSON.stringify(payload));
    }

    componentDidUpdate(prevProps) {
        if (this.props && this.props.checkBookInfo && this.props.checkBookInfo != prevProps.checkBookInfo) {
            this.setState({ checkBookDetails: JSON.parse(JSON.parse(this.props.checkBookInfo)[0]) });
        }
    }
    navigateBack = () => this.props.navigation.goBack();

    updateCurrentSecurityChanged = () => this.setState({ currentSecuritiesChanged: !this.state.currentSecuritiesChanged });

    switchOnOffReinvest = (fromView, flag, accountId) => () => {
        let tmpData = [];
        switch (fromView) {
            case 'orderNew':
                tmpData = this.state.checkBookDetails;
                tmpData.map((item) => {
                    if (item.Id == accountId) {
                        if (flag) {
                            item.enableReinvest = true;
                        } else {
                            item.enableReinvest = false;
                        }
                        this.updateCurrentSecurityChanged();
                    }
                });
                this.setState({ checkBookDetails: tmpData });
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={{ justifyContent: 'center' }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.orderCheckBook.order_checkbook}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <Text style={styles.instructionText}>
                        {gblStrings.orderCheckBook.verify_your_account}
                    </Text>

                    {this.props && this.props.checkBookInfo &&
                        <FlatList
                            data={this.state.checkBookDetails}
                            extraData={this.state.currentSecuritiesChanged}
                            keyExtractor={(item) => item.Id}
                            renderItem={({ item }) => (
                                <ViewAccountItem
                                    item={item}
                                    updateCurrentSecurityChanged={this.updateCurrentSecurityChanged}
                                    switchOnOffReinvest={this.switchOnOffReinvest}
                                />)}
                        />}

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
    let item = [];
    item = props.item;
    props.updateCurrentSecurityChanged;
    return (
        <>
            <View style={styles.accountView}>
                <Text style={styles.accountText}>
                    {gblStrings.dividents.account_name + ` ${item.Id} | ${item.AccountNumber}`}
                </Text>

                <Switch style={styles.switchStyle}
                    onValueChange={props.switchOnOffReinvest('orderNew', !item.enableReinvest, item.Id)}
                    value={item.enableReinvest}
                    trackColor={{ true: '#000000', false: '#DBDBDB' }}
                />
            </View>

            <View style={styles.checkLeavesView}>

                <View style={styles.checkLeavesHeader}>
                    <Text style={styles.checkLeavesText}>
                        {gblStrings.orderCheckBook.number_of_checkleaves}
                    </Text>

                    <GDropDownComponent
                        dropDownValue={item.NoOfCheckLeaves}
                        textInputStyle={styles.dropDownInput}
                    />
                </View>

                {item.enableReinvest ?
                    <>
                        <View style={styles.linkBreak2} />

                        <View style={styles.requestInfoView}>
                            <Text style={styles.requestText}>
                                {gblStrings.orderCheckBook.checkbook_requested_on}
                            </Text>

                            <Text style={styles.requestValue}>
                                {item.CheckBookRequestedOn}
                            </Text>
                        </View>
                    </> : null}

            </View>

        </>
    );
};

ViewAccountItem.propTypes = {
    item: PropTypes.instanceOf(Object),
    updateCurrentSecurityChanged: PropTypes.instanceOf(Function),
};

CheckBookComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    getCheckBookInfo: PropTypes.instanceOf(Function),
    checkBookInfo: PropTypes.instanceOf(Object),
    switchOnOffReinvest: PropTypes.instanceOf(Function),
};

export default CheckBookComponent;