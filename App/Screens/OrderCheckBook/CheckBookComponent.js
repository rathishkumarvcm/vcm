import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GFooterComponent, GButtonComponent, GIcon, GCollapseComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class CheckBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateChanged: false,
            showAlert: true,
            generalAccount: [],
            iraAccount: [],
            utmaAccount: [],
            generalAccCollapsedState: false,
            iraAccCollapsedState: true,
            utmaAccCollapsedState: true,

        };
    }

    componentDidMount() {
        const { getCheckBookInfo } = this.props;
        getCheckBookInfo();
    }

    navigateBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    updateStateChanged = () => {
        const { stateChanged } = this.state;
        this.setState({ stateChanged: !stateChanged });
    }

    getKey = (item) => item.Id

    updateShowRequestOption = (fromView, itemId) => {
        let tmpData = [];
        const { generalAccount } = this.state;
        const { iraAccount } = this.state;
        const { utmaAccount } = this.state;

        switch (fromView) {
            case 'General Account':          
                tmpData = generalAccount;
                tmpData.map((item, index) => () => {
                    if (item.Id === itemId) {
                        const tmpVal = tmpData[`${index}`].showRequestOption;
                        tmpData[`${index}`].showRequestOption = !tmpVal;
                    }
                });
                this.updateStateChanged();
                this.setState({ generalAccount: tmpData });
                break;
            case 'IRA Account':
                tmpData = iraAccount;
                tmpData.map((item, index) => () => {
                    if (item.Id === itemId) {
                        const tmpVal = tmpData[`${index}`].showRequestOption;
                        tmpData[`${index}`].showRequestOption = !tmpVal;
                    }
                });
                this.updateStateChanged();
                this.setState({ iraAccount: tmpData });
                break;
            case 'UTMA Account':
                tmpData = utmaAccount;
                tmpData.map((item, index) => () => {
                    if (item.Id === itemId) {
                        const tmpVal = tmpData[`${index}`].showRequestOption;
                        tmpData[`${index}`].showRequestOption = !tmpVal;
                    }
                });
                this.updateStateChanged();
                this.setState({ utmaAccount: tmpData });
                break;
            default:
                break;
        }
    }

    navigatePlaceCheckBookOrder = (fromView, item) => () => {
        this.updateIsScuccess(true);
        this.updateShowRequestOption(fromView, item.Id);
        const { navigation } = this.props;
        navigation.navigate('checkBookPlaceOrder', {
            accountName: item.AccountName,
            accountNumber: item.AccountNumber,
            noOfCheckLeaves: item.NoOfCheckLeaves,
            deliveryAddress: item.DeliveryAddress,
        });
    }

    updateIsScuccess = (showAlert) => () =>{
        this.setState({ showAlert });
    }

    updateGeneralAccCollapsedState = (flag) => () => {
        this.setState({ generalAccCollapsedState: flag });
    }

    updateIRAAccCollapsedState = (flag) => () => {
        this.setState({ iraAccCollapsedState: flag });
    }

    updateUTMAAccCollapsedState = (flag) => () => {
        this.setState({ utmaAccCollapsedState: flag });
    }

    renderCheckBookList = (fromView) => ({ item }) => (
        <View style={styles.infoContainer}>
            <View style={styles.accountName}>
                <Text style={styles.accountNameText}>
                    {`${item.AccountName}`}
                </Text>

                <TouchableOpacity style={styles.editInfo} key={item.Id} onPress={this.updateShowRequestOption(fromView, item.Id)}>
                    <GIcon
                        name="dots-vertical"
                        type="material-community"
                        size={30}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.accountNumber}>
                <Text style={styles.accountNameText}>
                    {`Account Number ${item.AccountNumber}`}
                </Text>
            </View>

            {(item.CheckBookRequestedOn != null) && (
                <>
                    <View style={styles.linkBreak2} />

                    <Text style={styles.lastRequestedText}>
                        {`Last requested on : ${item.CheckBookRequestedOn}`}
                    </Text>
                </>
            )}

            {item.showRequestOption && (
                <GButtonComponent
                    buttonStyle={styles.requestBtn}
                    buttonText="Checkbook Request"
                    textStyle={styles.requestButtonText}
                    onPress={this.navigatePlaceCheckBookOrder(fromView, item)}
                />
            )}
            
        </View>
    );

    render() {
        const { navigation } = this.props;      
        const { checkBookInfo } = this.props;
        const { checkBookDetails } = this.state;
        const {generalAccount} = this.state;
        const { iraAccount } = this.state;
        const { utmaAccount } = this.state;
        const { stateChanged } = this.state;
        const { iraAccCollapsedState } = this.state;  
        const { generalAccCollapsedState } = this.state;  
        const { utmaAccCollapsedState } = this.state;  

        if (this.props) {            
            if (checkBookInfo && checkBookInfo !== checkBookDetails) {
                this.setState({ checkBookDetails: checkBookInfo }, () => {
                    const tmpGeneralAccount = [];
                    const tmpIRAAccount = [];
                    const tmpUTMAAccount = [];
                    checkBookInfo.map((item) => () => {
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
                            default:
                                break;
                        }
                    });
                    this.setState({ generalAccount: tmpGeneralAccount, iraAccount: tmpIRAAccount, utmaAccount: tmpUTMAAccount });
                });
            }
        }
        
        const isSuccess = navigation.getParam('isSuccess', false);
        const { showAlert } = this.state;

        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollviewStyle} contentContainerStyle={styles.contentStyle}>
                    {isSuccess && showAlert && (
                        <TouchableOpacity style={styles.alertBox} onPress={this.updateIsScuccess(false)}>
                            <Text style={styles.alertText}>
                                {gblStrings.orderCheckBook.request_received}
                            </Text>
                        </TouchableOpacity>
                      )}

                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {gblStrings.orderCheckBook.order_checkbook}
                        </Text>
                    </View>

                    <View style={styles.linkBreak1} />

                    <GCollapseComponent
                        collapsedState={generalAccCollapsedState}
                        onPressAction={this.updateGeneralAccCollapsedState(!generalAccCollapsedState)}
                        headerView={(
                            <>
                                <View style={styles.accountHeaderView}>
                                    <View style={styles.iconStyle}>
                                        {generalAccCollapsedState ? (
                                            <GIcon
                                                name="plus"
                                                type="antdesign"
                                                size={18}
                                            />
                                        ) : (
                                                <GIcon
                                                    name="minus"
                                                    type="antdesign"
                                                    size={18}
                                                />
                                            )}
                                    </View>

                                    <Text style={styles.accountHeaderText}>{gblStrings.dividents.general_account}</Text>

                                </View>
                                <View style={styles.linkBreak1} />
                            </>
                        )}
                        collapseView={(
                            <>
                                {this.props && checkBookInfo && generalAccount.length > 0 && (
                                    <FlatList
                                        data={generalAccount}
                                        extraData={stateChanged}
                                        keyExtractor={this.getKey}
                                        renderItem={this.renderCheckBookList('General Account')}
                                    />
                                )}
                            </>
                        )}
                    />                    

                    <GCollapseComponent
                        collapsedState={iraAccCollapsedState}
                        onPressAction={this.updateIRAAccCollapsedState(!iraAccCollapsedState)}
                        headerView={(
                            <>
                                <View style={styles.accountHeaderView}>
                                    <View style={styles.iconStyle}>
                                        {iraAccCollapsedState ? (
                                            <GIcon
                                                name="plus"
                                                type="antdesign"
                                                size={18}
                                            />
                                          ) : (
                                            <GIcon
                                                name="minus"
                                                type="antdesign"
                                                size={18}
                                            />
                                          )}
                                    </View>

                                    <Text style={styles.accountHeaderText}>{gblStrings.dividents.ira_account}</Text>

                                </View>
                                <View style={styles.linkBreak1} />
                            </>
                          )}
                        collapseView={(
                            <>
                                {this.props && checkBookInfo && iraAccount.length > 0 && (
                                    <FlatList
                                        data={iraAccount}
                                        extraData={stateChanged}
                                        keyExtractor={this.getKey}
                                        renderItem={this.renderCheckBookList('IRA Account')}
                                    />
                                )}
                            </>
                          )}
                    />

                    <GCollapseComponent
                        collapsedState={utmaAccCollapsedState}
                        onPressAction={this.updateUTMAAccCollapsedState(!utmaAccCollapsedState)}
                        headerView={(
                            <>
                                <View style={styles.accountHeaderView}>
                                    <View style={styles.iconStyle}>
                                        {utmaAccCollapsedState ? (
                                            <GIcon
                                                name="plus"
                                                type="antdesign"
                                                size={18}
                                            />
                                        ) : (
                                                <GIcon
                                                    name="minus"
                                                    type="antdesign"
                                                    size={18}
                                                />
                                            )}
                                    </View>

                                    <Text style={styles.accountHeaderText}>{gblStrings.dividents.utma_account}</Text>

                                </View>
                                <View style={styles.linkBreak1} />
                            </>
                        )}
                        collapseView={(
                            <>
                                {this.props && checkBookInfo && utmaAccount.length > 0 && (
                                    <FlatList
                                        data={utmaAccount}
                                        extraData={stateChanged}
                                        keyExtractor={this.getKey}
                                        renderItem={this.renderCheckBookList('UTMA Account')}
                                    />
                                )}
                            </>
                        )}
                    />

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

CheckBookComponent.defaultProps = {
    navigation: {},
    getCheckBookInfo: () => {},
    checkBookInfo: []
};

export default CheckBookComponent;