import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, showAlertWithCancelButton } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

const editDeleteMenuOption = [
    {
        name: 'Edit',
        id: '1'
    },
    {
        name: 'Delete',
        id: '2'
    },
];

const switchColor = { flase: '#DBDBDB', true: '#444444' };

class EditAddressInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            selectedIndex: -1,
            contactPosition: '',
            isRelation: '',
            refreshAddressData: false,
            profileUserAddressValue: []
        };
    }

    componentDidMount() {
        this.addressDidMount();
    }

    componentDidUpdate(prevProps) {
        this.addressDidUpdate(prevProps);
    }

    addressDidMount = () => {
        const { isRelation, refreshAddressData, contactPosition } = this.state;
        const { profileState, navigation } = this.props;
        
        if (this.props) {
            this.setState({
                contactPosition: navigation.getParam('contactPosition'),
                isRelation: navigation.getParam('isRelation'),
            });
        }
        
        if (!isRelation) {
            if (this.props &&
                profileState &&
                profileState.profileUserAddressInformation) {
                this.setState({
                    profileUserAddressValue: profileState.profileUserAddressInformation,
                    refreshAddressData: !refreshAddressData
                });
            }
        } else {
            let relationshipContacts = [];
            if (this.props &&
                profileState &&
                profileState.profileRelationShipDetails) {
                relationshipContacts = [...profileState.profileRelationShipDetails];
                this.setState({
                    profileUserAddressValue: relationshipContacts[`${contactPosition}`].relationAddress,
                    refreshAddressData: !refreshAddressData
                });
            }
        }
    }

    addressDidUpdate = (prevProps) => {
        const { isRelation, refreshAddressData, contactPosition } = this.state;
        const { profileState } = this.props;
        if (!isRelation) {
            if (this.props !== prevProps) {
                if (this.props &&
                    profileState &&
                    profileState.profileUserAddressInformation) {
                    this.setState({
                        profileUserAddressValue: profileState.profileUserAddressInformation,
                        refreshAddressData: !refreshAddressData
                    });
                }
            }
        } else if (this.props !== prevProps) {
            let relationshipContacts = [];
            if (this.props &&
                profileState &&
                profileState.profileRelationShipDetails) {
                relationshipContacts = [...profileState.profileRelationShipDetails];
                this.setState({
                    profileUserAddressValue: relationshipContacts[`${contactPosition}`].relationAddress,
                    refreshAddressData: !refreshAddressData
                });
            }
        }
    }

    renderAddressInformation = () => ({ item, index }) => {
        const { selectedIndex } = this.state;
        
        return (
            <View style={styles.editEmailHolder}>
                <View style={styles.profileDivideIcon}>
                    <View style={styles.profileDivideIconOne}>
                        <Text style={styles.editEmailType}>
                            {item.addressType}
                        </Text>
                        <Text style={styles.editEmailId}>
                            {item.addressLineOne}
                        </Text>
                        <Text style={styles.editEmailId}>
                            {item.addressCity}
                        </Text>
                        <Text style={styles.editEmailId}>
                            {`${item.addressState} ${item.addressZipcode}`}
                        </Text>
                    </View>

                    <View style={styles.profileDivideIconTwo}>
                        <TouchableOpacity
                            onPress={this.onMenuOptionClicked(index)}
                        >
                            <Image style={styles.imageWidthHeight}
                                source={ImagesLoad.menuIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {index === selectedIndex ?
                    (
                        <FlatList style={styles.editFlatList}
                            data={editDeleteMenuOption}
                            renderItem={this.renderMenuOptions()}
                        />
                    )
                    : null}

                <View style={styles.editEmailBorder} />

                <View style={styles.editAddressView}>
                    <Text style={styles.editAddressLabel}>
                        {globalString.editAddressInfo.editAddressSetMailing}
                    </Text>

                    <View style={styles.editSwitchButton}>
                        <Switch trackColor={switchColor}
                            onValueChange={this.onMailingSwitchToggle(index)}
                            value={item.isMailingAddress}
                        />
                    </View>
                </View>

                <View style={styles.editAddressView}>
                    <Text style={styles.editAddressLabel}>
                        {globalString.editAddressInfo.editAddressSetPhysical}
                    </Text>
                    <View style={styles.editSwitchButton}>
                        <Switch trackColor={switchColor}
                            onValueChange={this.onPhysicalSwitchToggle(index)}
                            value={item.isPhysicalAddress}
                        />
                    </View>
                </View>
            </View>
        );
    }

    renderMenuOptions = () => ({ item, index }) => (
        <TouchableOpacity style={styles.editDropdown}>
            <Text style={styles.editDropdownText}
                onPress={this.onMenuItemClicked(index)}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    onMenuOptionClicked = (index) => () => {
        const { selectedIndex, refreshAddressData } = this.state;
        if (index === selectedIndex) {
            this.setState({
                refreshAddressData: !refreshAddressData,
                selectedIndex: -1
            });
        } else {
            this.setState({
                refreshAddressData: !refreshAddressData,
                selectedIndex: index
            });
        }
        // index === this.state.selectedIndex ?
        //     this.setState({
        //         refreshAddressData: !this.state.refreshAddressData,
        //         selectedIndex: -1
        //     }) :
        //     this.setState({
        //         refreshAddressData: !this.state.refreshAddressData,
        //         selectedIndex: index
        //     });
    }

    onMenuItemClicked = (index) => () => {
        const { selectedIndex, refreshAddressData, profileUserAddressValue } = this.state;
        switch (index) {
            case 0:
                this.setState({
                    refreshAddressData: !refreshAddressData,
                    selectedIndex: -1
                });
                break;

            case 1:
                showAlertWithCancelButton(globalString.common.vcmMemberService,
                    globalString.common.deleteAlertMsg,
                    globalString.common.cancel,
                    globalString.common.delete,
                    () => {
                        this.setState({
                            refreshAddressData: !refreshAddressData,
                            selectedIndex: -1
                        });
                    },
                    () => {
                        const array = [...profileUserAddressValue];
                        const indexDelete = selectedIndex;
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                profileUserAddressValue: array,
                                refreshAddressData: !refreshAddressData,
                                selectedIndex: -1
                            });
                        }
                    });
                break;

            default:
                break;
        }
    }

    onMailingSwitchToggle = (index) => () => {
        const { profileUserAddressValue, refreshAddressData } = this.state;
        const array = [...profileUserAddressValue];
        if (index !== -1) {
            const switchVal = array[parseInt(index, 10)].isMailingAddress;
            array[parseInt(index, 10)].isMailingAddress = !switchVal;
            this.setState({
                profileUserAddressValue: array,
                refreshAddressData: !refreshAddressData
            });
        }
    }

    onPhysicalSwitchToggle = (index) => () => {
        const { profileUserAddressValue, refreshAddressData } = this.state;
        const array = [...profileUserAddressValue];
        if (index !== -1) {
            const switchVal = array[parseInt(index, 10)].isPhysicalAddress;
            array[parseInt(index, 10)].isPhysicalAddress = !switchVal;
            this.setState({
                profileUserAddressValue: array,
                refreshAddressData: !refreshAddressData
            });
        }
    }

    editAddressInfoAddNew = () => {
        const { navigation } = this.props;
        const { contactPosition, isRelation } = this.state;
        navigation.navigate('editAddressAddNew',
            {
                relationShipPosition: contactPosition,
                isRelationShipScreen: isRelation
            });
    }

    editAddressOnCancel = () => {
        const { isRelation } = this.state;
        const { navigation } = this.props;
        if (!isRelation) {
            navigation.navigate('profileSettings');
        } else {
            navigation.navigate('editFamilyMemberInfo');
        }
    }

    render() {
        const { profileUserAddressValue, refreshAddressData } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.addressInformationFlex}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={styles.addressTitleStyle}>
                            {globalString.editAddressInfo.editAddressTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.addressHeaderTitleStyle}>
                            {globalString.editAddressInfo.editAddressTitle}
                        </Text>

                        <Text style={styles.addEditTextLabel}
                            onPress={this.editAddressInfoAddNew}
                        >
                            {globalString.editAddressInfo.editAddressAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <FlatList
                        data={profileUserAddressValue}
                        keyExtractor={this.generateKeyExtractor}
                        extraData={refreshAddressData}
                        renderItem={this.renderAddressInformation()}
                    />

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editAddressOnCancel}
                        />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editAddressInfo.editAddressTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editAddressInfo.editAddressInvestments}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={ImagesLoad.applicationLogo}
                        />
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalString.common.privacyPolicy}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalString.common.fundDocuments}
                        </Text>
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalString.common.userAgreement}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalString.common.support}
                        </Text>
                    </View>

                    <View style={styles.copyRightSection}>
                        <Text style={styles.copyRightText}>
                            {globalString.common.copyRights}
                        </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

EditAddressInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    profileState: PropTypes.instanceOf(Object)
};

EditAddressInfoComponent.defaultProps = {
    navigation: {},
    profileState: {}
};

export default EditAddressInfoComponent;