import React, { Component } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import { GHeaderComponent, GDropDownComponent, GFooterComponent, GButtonComponent, GIcon } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';

class CheckBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            stateChanged: false,
            reinvestChanged: false,
            showRequestOption: false,
            checkBookDetails: [
                {
                    Id: "1",
                    AccountName: "Account Name1",
                    DeliveryAddress: "973 Gilbert Ferry Road Se, Attalla AL, 3554",
                    AccountType: "General Account",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    CheckBookRequestedOn: "30/10/2019",
                    showRequestOption: false,

                },
                {
                    Id: "2",
                    AccountName: "Account Name2",
                    DeliveryAddress: "973 Gilbert Ferry Road Se, Attalla AL, 3554",
                    AccountType: "General Account",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    showRequestOption: false,
                },
                {
                    Id: "3",
                    AccountName: "Account Name3",
                    DeliveryAddress: "973 Gilbert Ferry Road Se, Attalla AL, 3554",
                    AccountType: "General Account",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    CheckBookRequestedOn: "30/10/2019",
                    showRequestOption: false,

                },
                {
                    Id: "4",
                    AccountName: "Account Name4",
                    DeliveryAddress: "973 Gilbert Ferry Road Se, Attalla AL, 3554",
                    AccountType: "IRA Account",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    CheckBookRequestedOn: "30/10/2019",
                    showRequestOption: false,

                },
                {
                    Id: "5",
                    AccountName: "Account Name5",
                    DeliveryAddress: "973 Gilbert Ferry Road Se, Attalla AL, 3554",
                    AccountType: "UTMA Account",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    CheckBookRequestedOn: "30/10/2019",
                    showRequestOption: false,

                },
                {
                    Id: "6",
                    AccountName: "Account Name6",
                    DeliveryAddress: "973 Gilbert Ferry Road Se, Attalla AL, 3554",
                    AccountType: "IRA Account",
                    AccountNumber: "56654654",
                    NoOfCheckLeaves: "50",
                    enableReinvest: false,
                    CheckBookRequestedOn: "30/10/2019",
                    showRequestOption: false,

                },
            ],
            generalAccount: [],
            iraAccount: [],
            utmaAccount: []

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

            tmpData = this.state.checkBookDetails;
            tmpGeneralAccount = [];
            tmpIRAAccount = [];
            tmpUTMAAccount = [];
            tmpData.map((item) => {
                switch (item.AccountType) {
                    case 'General Account':
                        tmpGeneralAccount.push(item);
                        break;
                    case 'IRA Account':
                        tmpIRAAccount.push(item);
                        break;
                    case 'UTMA Account':
                        tmpUTMAAccount.push(item);
                        break;
                }
            });
            this.setState({ generalAccount: tmpGeneralAccount, iraAccount: tmpIRAAccount, utmaAccount: tmpUTMAAccount });
        }
    }

    navigateBack = () => this.props.navigation.goBack();

    updateStateChanged = () => this.setState({ stateChanged: !this.state.stateChanged });

    getKey = (item) => item.Id

    updateShowDeleteOption = (fromView, showRequestOption, itemId) => {
        console.log("updateShowDeleteOption:::: ", fromView, showRequestOption, itemId);
        switch (fromView) {

            case 'showDelete':
                if (showRequestOption) {
                    tmpData = this.state.generalAccount;
                    tmpData.map((item) => {
                        if (item.Id == itemId) {
                            item.showRequestOption = showRequestOption;
                        } else {
                            item.showRequestOption = !showRequestOption;
                        }
                    });
                    this.updateStateChanged();

                    this.setState({ generalAccount: tmpData });
                    console.log("updateShowDeleteOption:::: ", this.state.generalAccount);
                }
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

                    {this.props && this.props.checkBookInfo && this.state.generalAccount.length > 0 &&
                        <FlatList
                            data={this.state.generalAccount}
                            extraData={this.state.stateChanged}
                            keyExtractor={this.getKey}
                            renderItem={({ item, i }) => (
                                <View style={styles.infoContainer}>
                                    <View style={styles.accountName}>
                                        <Text style={styles.accountNameText}>
                                            {`${item.AccountName}`}
                                        </Text>

                                        <TouchableOpacity style={styles.editInfo} key={item.Id} onPress={() => this.updateShowDeleteOption('showDelete', true, item.Id)}>
                                            <GIcon
                                                name="dots-vertical"
                                                type="material-community"
                                                size={30}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.accountName}>
                                        <Text style={styles.accountNameText}>
                                            {`Account Number ${item.AccountNumber}`}
                                        </Text>
                                    </View>

                                    {item.showRequestOption && <GButtonComponent
                                        buttonStyle={styles.requestBtn}
                                        buttonText={"Checkbook Request"}
                                        textStyle={styles.requestButtonText}
                                        onPress={() =>
                                            this.props.navigation.navigate('checkBookPlaceOrder', {
                                                accountName: item.AccountName,
                                                accountNumber: item.AccountNumber,
                                                noOfCheckLeaves: item.NoOfCheckLeaves,
                                                deliveryAddress: item.DeliveryAddress,
                                            })}

                                    />}


                                    {(item.CheckBookRequestedOn != null) &&
                                        <>
                                            <View style={styles.linkBreak2} />

                                            <Text style={styles.lastRequestedText}>
                                                {`Last requested on : ${item.CheckBookRequestedOn}`}
                                            </Text>
                                        </>
                                    }
                                </View>)}
                        />}

                    <GButtonComponent
                        buttonStyle={styles.backBtn}
                        buttonText={gblStrings.common.back}
                        textStyle={styles.backButtonText}
                        onPress={this.navigateBack}
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

CheckBookComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    getCheckBookInfo: PropTypes.instanceOf(Function),
    checkBookInfo: PropTypes.instanceOf(Object),
};

export default CheckBookComponent;