import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, showAlertWithCancelButton } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import ImagesLoad from '../../Images/ImageIndex';

let editDeleteMenuOption = [
    {
        name: 'Edit',
        id: '1'
    },
    {
        name: 'Delete',
        id: '2'
    },
];

class EditAddressInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            selectedIndex: -1,

            contactPosition: this.props.navigation.getParam('contactPosition'),
            isRelation: this.props.navigation.getParam('isRelation'),
            relationContactInfo: {},

            refreshAddressData: false,
            profileUserAddressValue: [],

            isAddressTypeMailing: false,
            isAddressTypePhysical: false,
        };
    }

    componentDidMount() {
        if (!this.state.isRelation) {
            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserAddressInformation) {
                this.setState({
                    profileUserAddressValue: this.props.profileState.profileUserAddressInformation,
                    refreshAddressData: !this.state.refreshAddressData
                });
            }
        } else {
            let relationshipContacts = [];
            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileRelationShipDetails) {
                relationshipContacts = [...this.props.profileState.profileRelationShipDetails];
                this.setState({
                    relationContactInfo: relationshipContacts[this.state.contactPosition],
                    profileUserAddressValue: relationshipContacts[this.state.contactPosition].relationAddress,
                    refreshAddressData: !this.state.refreshAddressData
                });
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.state.isRelation) {
            if (this.props != prevProps) {
                if (this.props &&
                    this.props.profileState &&
                    this.props.profileState.profileUserAddressInformation) {
                    this.setState({
                        profileUserAddressValue: this.props.profileState.profileUserAddressInformation,
                        refreshAddressData: !this.state.refreshAddressData
                    });
                }
            }
        } else {
            if (this.props != prevProps) {
                let relationshipContacts = [];
                if (this.props &&
                    this.props.profileState &&
                    this.props.profileState.profileRelationShipDetails) {
                    relationshipContacts = [...this.props.profileState.profileRelationShipDetails];
                    this.setState({
                        relationContactInfo: relationshipContacts[this.state.contactPosition],
                        profileUserAddressValue: relationshipContacts[this.state.contactPosition].relationAddress,
                        refreshAddressData: !this.state.refreshAddressData
                    });
                }
            }
        }
    }

    renderAddressInformation = () => ({ item, index }) =>
        (<View style={styles.editEmailHolder}>
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
                        {item.addressState + ' ' + item.addressZipcode}
                    </Text>
                </View>

                <View style={styles.profileDivideIconTwo}>
                    <TouchableOpacity
                        onPress={this.onMenuOptionClicked(index)}>
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.menuIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {index === this.state.selectedIndex ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={this.renderMenuOptions()} />)
                : null}

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.editAddressInfo.editAddressSetMailing}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.onMailingSwitchToggle(index)}
                        value={item.isMailingAddress} />
                </View>
            </View>

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.editAddressInfo.editAddressSetPhysical}
                </Text>
                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.onPhysicalSwitchToggle(index)}
                        value={item.isPhysicalAddress} />
                </View>
            </View>
        </View>
        );

    renderMenuOptions = () => ({ item, index }) => (
        <TouchableOpacity style={styles.editDropdown}>
            <Text style={styles.editDropdownText}
                onPress={this.onMenuItemClicked(index)}>
                {item.name}
            </Text>
        </TouchableOpacity>);

    onMenuOptionClicked = (index) => () => {
        index === this.state.selectedIndex ?
            this.setState({
                refreshAddressData: !this.state.refreshAddressData,
                selectedIndex: -1
            }) :
            this.setState({
                refreshAddressData: !this.state.refreshAddressData,
                selectedIndex: index
            });
    }

    onMenuItemClicked = (index) => () => {
        switch (index) {
            case 0:
                this.setState({
                    refreshAddressData: !this.state.refreshAddressData,
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
                            refreshAddressData: !this.state.refreshAddressData,
                            selectedIndex: -1
                        });
                    },
                    () => {
                        var array = [...this.state.profileUserAddressValue];
                        var indexDelete = this.state.selectedIndex
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                profileUserAddressValue: array,
                                refreshAddressData: !this.state.refreshAddressData,
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
        var array = [...this.state.profileUserAddressValue];
        if (index !== -1) {
            let switchVal = array[index].isMailingAddress;
            array[index].isMailingAddress = !switchVal;
            this.setState({
                profileUserAddressValue: array,
                refreshAddressData: !this.state.refreshAddressData
            });
        }
    }

    onPhysicalSwitchToggle = (index) => () => {
        var array = [...this.state.profileUserAddressValue];
        if (index !== -1) {
            let switchVal = array[index].isPhysicalAddress;
            array[index].isPhysicalAddress = !switchVal;
            this.setState({
                profileUserAddressValue: array,
                refreshAddressData: !this.state.refreshAddressData
            });
        }
    }

    editAddressInfoAddNew = () => this.props.navigation.navigate('editAddressAddNew',
        {
            relationShipPosition: this.state.contactPosition,
            isRelationShipScreen: this.state.isRelation
        });

    editAddressOnCancel = () => {
        if (!this.state.isRelation) {
            this.props.navigation.navigate('profileSettings');
        } else {
            this.props.navigation.navigate('editFamilyMemberInfo');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={styles.addressInformationFlex}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editAddressInfo.editAddressTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.settingsHeadline, styles.editTitleBold]}>
                            {globalString.editAddressInfo.editAddressTitle}
                        </Text>

                        <Text style={styles.addEditTextLabel}
                            onPress={this.editAddressInfoAddNew} >
                            {globalString.editAddressInfo.editAddressAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <FlatList
                        data={this.state.profileUserAddressValue}
                        keyExtractor={this.generateKeyExtractor}
                        extraData={this.state.refreshAddressData}
                        renderItem={this.renderAddressInformation()} />

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editAddressOnCancel} />
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
                            source={ImagesLoad.applicationLogo} />
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
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object)
};

EditAddressInfoComponent.defaultProps = {
    navigation: {},
    profileState: {}
};

export default EditAddressInfoComponent;