import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GInputComponent, GRadioButtonComponent, GLoadingSpinner } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import * as reGex from '../../Constants/RegexConstants';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import ImagesLoad from '../../Images/ImageIndex';

const profileAddNewAddress = [
    { index1: 0, question: "U.S. or U.S. Territories" },
    { index2: 1, question: "APO (Army or Air Force Post Office)" },
    { index3: 3, question: "FPO (Fleet Post Office)" },
    { index4: 4, question: "DPO (Diplomatic Post Office)" },
];

class EditAddressAddNewComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        const {navigation} = this.props;
        this.state = {
            isRelationShipScreen: navigation.getParam('isRelationShipScreen'),
            relationShipPosition: navigation.getParam('relationShipPosition'),
            relationShipContactData: [],

            isZipApiCalling: false,
            isAddressApiCalling: false,

            radioButton: false,
            radioButtonIndex: 0,
            radioButtonValue: 'U.S. or U.S. Territories',

            validationAddressOne: true,
            addressOne: '',
            validAddressOneMessage: '',

            validationAddressTwo: true,
            validAddressTwoMessage: '',

            isZipCodeValid: true,
            zipCodeValue: '',
            validZipCodeMessage: '',

            addressTwo: '',
            userCity: '',
            userState: ''
        };
    }

    componentDidMount() {
        this.addNewContactMount();
    }

    componentDidUpdate(prevProps) {
        this.addNewContactUpdate(prevProps);
    }

    addNewContactMount = () => {
        const { profileState } = this.props;
        const { isRelationShipScreen, relationShipPosition } = this.state;
        if (this.props && profileState && profileState.profileUserCity) {
            this.setState({
                userCity: profileState.profileUserCity
            });
        }

        if (this.props && profileState && profileState.profileUserState) {
            this.setState({
                userState: profileState.profileUserState
            });
        }

        if (isRelationShipScreen) {
            let relationshipContacts = [];
            if (this.props &&
                profileState &&
                profileState.profileRelationShipDetails) {
                relationshipContacts = [...rofileState.profileRelationShipDetails];
                this.setState({
                    relationShipContactData: relationshipContacts[relationShipPosition]
                });
            }
        }
    }

    addNewContactUpdate = (prevProps) => {
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;

        if (this.state.isZipApiCalling) {
            if (this.props != prevProps) {
                if (this.props && this.props.stateCityData[stateCityResponseData]) {
                    const tempResponse = this.props.stateCityData[stateCityResponseData];
                    if (tempResponse && tempResponse.City) {
                        this.setState({
                            userCity: tempResponse.City,
                            userState: tempResponse.State,
                            isZipCodeValid: true
                        });
                    } else {
                        this.setState({
                            userCity: ' - ',
                            userState: ' - ',
                            isZipCodeValid: false
                        });
                    }
                }
            }
        }

        if (this.state.isAddressApiCalling) {
            if (this.props != prevProps) {
                if (this.props && this.props.stateCityData[addressResponseData]) {
                    const tempAddressResponse = this.props.stateCityData[addressResponseData];
                    if (tempAddressResponse && tempAddressResponse.Address2) {
                        this.setState({
                            addressOne: tempAddressResponse.Address1 || "",
                            addressTwo: tempAddressResponse.Address2 || "",
                            validationAddressOne: true
                        });
                    } else {
                        this.setState({
                            addressOne: '',
                            addressTwo: '',
                            validationAddressOne: false,
                            validAddressOneMessage: globalString.profileValidationMessages.validateAddressLineOne
                        });
                    }
                }
            }
        }
    }

    radioButtonClicked = (index) => {
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });
        } else {
            this.setState({
                radioButton: false,
                radioButtonValue: 'U.S. or U.S. Territories'
            });
        }

        if (this.state.radioButtonIndex == 1) {
            this.setState({
                radioButtonValue: 'U.S. or U.S. Territories'
            });
        }

        if (this.state.radioButtonIndex == 2) {
            this.setState({
                radioButtonValue: 'APO (Army or Air Force Post Office)'
            });
        }

        if (this.state.radioButtonIndex == 3) {
            this.setState({
                radioButtonValue: 'FPO (Fleet Post Office)'
            });
        }

        if (this.state.radioButtonIndex == 4) {
            this.setState({
                radioButtonValue: 'DPO (Diplomatic Post Office)'
            });
        }
    }

    setAddressOne = (text) => {
        this.setState({
            addressOne: text,
            validationAddressOne: true
        });

        if (this.state.addressOne.length.toString() == 49) {
            this.setState({
                validationAddressOne: false,
                validAddressOneMessage: 'Max. character length exceeded'
            });
        }
    }

    setAddressTwo = (text) => {
        this.setState({
            addressTwo: text,
            validationAddressTwo: true
        });

        if (this.state.addressTwo.length.toString() == 49) {
            this.setState({
                validationAddressTwo: false,
                validAddressTwoMessage: 'Max. character length exceeded'
            });
        }
    }

    setZipcodeValue = (text) => {
        this.setState({
            zipCodeValue: text,
            isZipCodeValid: true
        });

        if (this.state.zipCodeValue.length.toString() == 5) {
            this.setState({
                isZipCodeValid: false,
                validZipCodeMessage: 'Max. character length exceeded'
            });
        }
    }

    addAddressOnValidate = (validationType) => () => {
        switch (validationType) {
            case 'validateAddressValueOne':
                if (this.state.addressOne === "") {
                    this.setState({
                        validationAddressOne: false,
                        validAddressOneMessage: globalString.profileValidationMessages.validateAddressLineOne
                    });
                }

                if (this.state.zipCodeValue === "") {
                    const validate = reGex.zipCodeRegex.test(this.state.zipCodeValue);
                    this.setState({
                        isZipCodeValid: validate
                    });
                }

                if (this.state.addressOne !== '' || this.state.addressTwo !== '' &&
                    this.state.zipCodeValue !== '') {
                    this.addNewAddress();
                }
                break;
        }
    }

    validateZipCodeValue = () => {
        if (this.state.zipCodeValue != '') {
            const payload = {
                'Zip': this.state.zipCodeValue
            };

            this.setState({
                isZipCodeValid: true,
                isZipApiCalling: true
            });
            this.props.getStateCity(payload);
        } else {
            this.setState({
                isZipCodeValid: false,
                validZipCodeMessage: globalString.profileValidationMessages.validateZipcode
            });
        }
    }

    addNewAddress = () => {
        let addNewAddressPayload = {};
        if (this.state.zipCodeValue != '') {
            addNewAddressPayload = {
                "Address1": this.state.addressOne,
                "Address2": this.state.addressTwo,
                "City": this.state.userCity,
                "State": this.state.userState,
                "Zip": this.state.zipCodeValue
            };
        } else {
            addNewAddressPayload = {
                "Address1": this.state.addressOne,
                "Address2": this.state.addressTwo,
                "City": this.state.userCity,
                "State": this.state.userState,
            };
        }
        this.setState({
            isAddressApiCalling: true
        });
        this.props.getAddressFormat(addNewAddressPayload);
    }

    manageContactInformations = () => {
        let payloadData;
        if (this.state.isRelationShipScreen) {
            payloadData = this.getRelationContactPayload();
        } else {
            payloadData = this.getContactPayloadData();
        }
        this.props.saveProfileData("editContactInformation", payloadData);
        this.props.navigation.navigate('editAddressSettings', {
            contactPosition: this.state.relationShipPosition,
            isRelation: this.state.isRelationShipScreen
        });
    }

    getContactPayloadData = () => {
        let contactPayload = {};
        let payloadUserAddress = [];
        if (this.props && this.props.profileState) {
            const newContactInformation = {
                "addressType": this.state.radioButtonValue,
                "addressLineOne": this.state.addressOne === "" ? this.state.addressTwo : "",
                "addressCity": this.state.userCity,
                "addressState": this.state.userState,
                "addressZipcode": this.state.zipCodeValue,
                "isMailingAddress": false,
                "isPhysicalAddress": false
            };

            payloadUserAddress = this.props.profileState.profileUserAddressInformation;
            payloadUserAddress.push(newContactInformation);
            contactPayload = {
                ...this.props.profileState,
                profileUserAddressInformation: payloadUserAddress,
            };
        }
        return contactPayload;
    }

    getRelationContactPayload = () => {
        let relationContactPayload = {};
        let relationAddressPayload = [];
        if (this.props && this.props.profileState) {
            const addContactInformation = {
                "addressType": this.state.radioButtonValue,
                "addressLineOne": this.state.addressOne === "" ? this.state.addressTwo : "",
                "addressCity": this.state.userCity,
                "addressState": this.state.userState,
                "addressZipcode": this.state.zipCodeValue,
                "isMailingAddress": false,
                "isPhysicalAddress": false
            };

            relationAddressPayload = this.props.profileState.profileRelationShipDetails[this.state.relationShipPosition].relationAddress;
            relationAddressPayload.push(addContactInformation);
            const relationAddressUpdated = [this.props.profileState.profileRelationShipDetails[this.state.relationShipPosition]];
            relationContactPayload = {
                ...this.props.profileState,
                profileRelationShipDetails: relationAddressUpdated
            };
        }
        return relationContactPayload;
    }

    editAddressAddNewOnCancel = () => {
        if (!this.state.isRelationShipScreen) {
            this.props.navigation.navigate('editAddressSettings');
        } else {
            this.props.navigation.navigate('editAddressSettings',
                {
                    contactPosition: this.state.relationShipPosition,
                    isRelation: this.state.isRelationShipScreen
                });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.addAddressInfo.addAddressTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.settingsHeadline, styles.editTitleBold]}>
                            {globalString.addAddressInfo.editAddressInformation}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editLabelText}>
                            {globalString.addAddressInfo.mailingAddress}
                        </Text>
                    </View>

                    <View style={styles.listContainer}>

                        <View style={styles.settingsView1}>
                            <Text style={styles.editAddressTypeLabel}>
                                {globalString.addAddressInfo.addressType}
                            </Text>
                        </View>

                        <View style={styles.editAddressInput}>
                            {profileAddNewAddress.map((item, index) =>
                                index == this.state.radioButtonIndex ? (
                                    <GRadioButtonComponent
                                        questionsStyle={{ justifyContent: 'center' }}
                                        onPress={() => this.radioButtonClicked(index)}
                                        selected
                                        questions={item.question}
                                    />
                                  )
                                    : (
                                    <GRadioButtonComponent
                                        questionsStyle={{ justifyContent: 'center' }}
                                        onPress={() => this.radioButtonClicked(index)}
                                        selected={false}
                                        questions={item.question}
                                    />
                                  ))}
                        </View>

                        <View style={styles.settingsView1}>
                            <Text style={styles.editAddressTypeLabel}>
                                {globalString.addAddressInfo.addressLineOne}
                            </Text>
                        </View>

                        <View style={styles.editAddressInput}>
                            <GInputComponent
                                propInputStyle={styles.editAddressInput}
                                placeholder={globalString.addAddressInfo.addressLineOne}
                                onChangeText={this.setAddressOne}
                                value={this.state.addressOne}
                                maxLength={50}
                                errorFlag={!this.state.validationAddressOne}
                                errorText={this.state.validAddressOneMessage}
                            />
                        </View>

                        <View style={styles.settingsView1}>
                            <Text style={styles.editAddressTypeLabel}>
                                {globalString.addAddressInfo.addressLineTwo}
                            </Text>
                        </View>

                        <View style={styles.editAddressInput}>
                            <GInputComponent
                                propInputStyle={styles.editAddressInput}
                                placeholder={globalString.addAddressInfo.addressLineTwo}
                                value={this.state.addressTwo}
                                maxLength={50}
                                onChangeText={this.setAddressTwo}
                                errorFlag={!this.state.validationAddressTwo}
                                errorText={this.state.validAddressTwoMessage}
                            />
                        </View>

                        <View style={styles.settingsView1}>
                            <Text style={styles.editAddressTypeLabel}>
                                {globalString.addAddressInfo.zipCode}
                            </Text>
                        </View>

                        <View style={styles.editAddressInput}>
                            <GInputComponent
                                propInputStyle={styles.editAddressInput}
                                placeholder={globalString.addAddressInfo.zipCode}
                                onBlur={this.validateZipCodeValue}
                                onChangeText={this.setZipcodeValue}
                                value={this.state.zipCodeValue}
                                keyboardType="number-pad"
                                maxLength={5}
                                errorFlag={!this.state.isZipCodeValid}
                                errorText={this.state.validZipCodeMessage}
                            />
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editAddressCityLabel}>
                                {globalString.addAddressInfo.cityLabel}
                            </Text>
                            <Text style={styles.editAddressCityValue}>
                                {this.state.userCity}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editAddressCityLabel}>
                                {globalString.addAddressInfo.stateLabel}
                            </Text>
                            <Text style={styles.editAddressCityValue}>
                                {this.state.userState}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.manageContactInformations}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                            onPress={this.addAddressOnValidate('validateAddressValueOne')}
                        />
                    </View>

                    <View style={styles.editAddressBorder} />

                    <View style={styles.editAddressBackground}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.addAddressInfo.addressTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.addAddressInfo.addressInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={ImagesLoad.applicationLogo}
                        />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalString.common.connectWithUs}
                        </Text>
                    </View>

                    <View style={styles.whiteBackground}>
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.twitterlogo}
                        />
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.linkedinlogo}
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

EditAddressAddNewComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object),
    getStateCity: PropTypes.func,
    getAddressFormat: PropTypes.func,
    saveProfileData: PropTypes.func
};

EditAddressAddNewComponent.defaultProps = {
    profileState: {},
    getStateCity: null,
    getAddressFormat: null,
    saveProfileData: null
};

export default EditAddressAddNewComponent;