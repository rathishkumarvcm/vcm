import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
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
        const { navigation } = this.props;
        this.state = {
            isRelationShipScreen: navigation.getParam('isRelationShipScreen'),
            relationShipPosition: navigation.getParam('relationShipPosition'),
            // relationShipContactData: [],

            isZipApiCalling: false,
            isAddressApiCalling: false,

            // radioButton: false,
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
        // const { isRelationShipScreen, relationShipPosition } = this.state;
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

        // if (isRelationShipScreen) {
        //     let relationshipContacts = [];
        //     if (this.props &&
        //         profileState &&
        //         profileState.profileRelationShipDetails) {
        //         relationshipContacts = [...profileState.profileRelationShipDetails];
        //         this.setState({
        //             relationShipContactData: relationshipContacts[relationShipPosition]
        //         });
        //     }
        // }
    }

    addNewContactUpdate = (prevProps) => {
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;
        const { isZipApiCalling, isAddressApiCalling } = this.state;
        const { stateCityData } = this.props;

        if (isZipApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[stateCityResponseData]) {
                    const tempResponse = stateCityData[stateCityResponseData];
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

        if (isAddressApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[addressResponseData]) {
                    const tempAddressResponse = stateCityData[addressResponseData];
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

    radioButtonClicked = (index) => () => {
        const { radioButtonIndex } = this.state;
        if (index !== radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                // radioButton: false
            });
        } else {
            this.setState({
                // radioButton: false,
                radioButtonValue: 'U.S. or U.S. Territories'
            });
        }

        if (radioButtonIndex === 1) {
            this.setState({
                radioButtonValue: 'U.S. or U.S. Territories'
            });
        }

        if (radioButtonIndex === 2) {
            this.setState({
                radioButtonValue: 'APO (Army or Air Force Post Office)'
            });
        }

        if (radioButtonIndex === 3) {
            this.setState({
                radioButtonValue: 'FPO (Fleet Post Office)'
            });
        }

        if (radioButtonIndex === 4) {
            this.setState({
                radioButtonValue: 'DPO (Diplomatic Post Office)'
            });
        }
    }

    setAddressOne = (text) => {
        const { addressOne } = this.state;
        this.setState({
            addressOne: text,
            validationAddressOne: true
        });

        if (addressOne.length.toString() === "49") {
            this.setState({
                validationAddressOne: false,
                validAddressOneMessage: 'Max. character length exceeded'
            });
        }
    }

    setAddressTwo = (text) => {
        const { addressTwo } = this.state;
        this.setState({
            addressTwo: text,
            validationAddressTwo: true
        });

        if (addressTwo.length.toString() === "49") {
            this.setState({
                validationAddressTwo: false,
                validAddressTwoMessage: 'Max. character length exceeded'
            });
        }
    }

    setZipcodeValue = (text) => {
        const { zipCodeValue } = this.state;
        this.setState({
            zipCodeValue: text,
            isZipCodeValid: true
        });

        if (zipCodeValue.length.toString() === "5") {
            this.setState({
                isZipCodeValid: false,
                validZipCodeMessage: 'Max. character length exceeded'
            });
        }
    }

    addAddressOnValidate = (validationType) => () => {
        const { addressOne, addressTwo, zipCodeValue } = this.state;
        switch (validationType) {
            case 'validateAddressValueOne':
                if (addressOne === "") {
                    this.setState({
                        validationAddressOne: false,
                        validAddressOneMessage: globalString.profileValidationMessages.validateAddressLineOne
                    });
                }

                if (zipCodeValue === "") {
                    const validate = reGex.zipCodeRegex.test(zipCodeValue);
                    this.setState({
                        isZipCodeValid: validate
                    });
                }

                if (addressOne !== '' || addressTwo !== '' &&
                    zipCodeValue !== '') {
                    this.addNewAddress();
                }
                break;

            default:
                break;
        }
    }

    validateZipCodeValue = () => {
        const { zipCodeValue } = this.state;
        const { getStateCity } = this.props;
        if (zipCodeValue !== '') {
            const payload = {
                'Zip': zipCodeValue
            };

            this.setState({
                isZipCodeValid: true,
                isZipApiCalling: true
            });
            getStateCity(payload);
        } else {
            this.setState({
                isZipCodeValid: false,
                validZipCodeMessage: globalString.profileValidationMessages.validateZipcode
            });
        }
    }

    addNewAddress = () => {
        const { zipCodeValue, addressOne, addressTwo, userCity, userState } = this.state;
        const { getAddressFormat } = this.props;
        let addNewAddressPayload = {};
        if (zipCodeValue !== '') {
            addNewAddressPayload = {
                "Address1": addressOne,
                "Address2": addressTwo,
                "City": userCity,
                "State": userState,
                "Zip": zipCodeValue
            };
        } else {
            addNewAddressPayload = {
                "Address1": addressOne,
                "Address2": addressTwo,
                "City": userCity,
                "State": userState,
            };
        }
        this.setState({
            isAddressApiCalling: true
        });
        getAddressFormat(addNewAddressPayload);
    }

    manageContactInformations = () => {
        const { isRelationShipScreen, relationShipPosition } = this.state;
        const { saveProfileData, navigation } = this.props;
        let payloadData;
        if (isRelationShipScreen) {
            payloadData = this.getRelationContactPayload();
        } else {
            payloadData = this.getContactPayloadData();
        }
        saveProfileData("editContactInformation", payloadData);
        navigation.navigate('editAddressSettings', {
            contactPosition: relationShipPosition,
            isRelation: isRelationShipScreen
        });
    }

    getContactPayloadData = () => {
        let contactPayload = {};
        let payloadUserAddress = [];
        const { radioButtonValue, addressOne, addressTwo, userCity, userState, zipCodeValue } = this.state;
        const { profileState } = this.props;
        if (this.props && profileState) {
            const newContactInformation = {
                "addressType": radioButtonValue,
                "addressLineOne": addressOne === "" ? addressTwo : "",
                "addressCity": userCity,
                "addressState": userState,
                "addressZipcode": zipCodeValue,
                "isMailingAddress": false,
                "isPhysicalAddress": false
            };

            payloadUserAddress = profileState.profileUserAddressInformation;
            payloadUserAddress.push(newContactInformation);
            contactPayload = {
                ...profileState,
                profileUserAddressInformation: payloadUserAddress,
            };
        }
        return contactPayload;
    }

    getRelationContactPayload = () => {
        const {profileState} = this.props;
        const { radioButtonValue, addressOne, addressTwo, userCity, userState, zipCodeValue , relationShipPosition} = this.state;
        let relationContactPayload = {};
        let relationAddressPayload = [];
        if (this.props && profileState) {
            const addContactInformation = {
                "addressType": radioButtonValue,
                "addressLineOne": addressOne === "" ? addressTwo : "",
                "addressCity": userCity,
                "addressState": userState,
                "addressZipcode": zipCodeValue,
                "isMailingAddress": false,
                "isPhysicalAddress": false
            };

            relationAddressPayload = profileState.profileRelationShipDetails[relationShipPosition].relationAddress;
            relationAddressPayload.push(addContactInformation);
            const relationAddressUpdated = [profileState.profileRelationShipDetails[relationShipPosition]];
            relationContactPayload = {
                ...profileState,
                profileRelationShipDetails: relationAddressUpdated
            };
        }
        return relationContactPayload;
    }

    editAddressAddNewOnCancel = () => {
        const { isRelationShipScreen, relationShipPosition } = this.state;
        const { navigation } = this.props;
        if (!isRelationShipScreen) {
            navigation.navigate('editAddressSettings');
        } else {
            navigation.navigate('editAddressSettings',
                {
                    contactPosition: relationShipPosition,
                    isRelation: isRelationShipScreen
                });
        }
    }

    render() {
        const { navigation, stateCityData} = this.props;
        const {radioButtonIndex, addressOne, validationAddressOne, validAddressOneMessage, addressTwo, validationAddressTwo,
            validAddressTwoMessage, zipCodeValue, isZipCodeValid, validZipCodeMessage, userCity, userState} = this.state;
        return (
            <View style={styles.container}>
                {
                    stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.flexAddressNew}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={styles.addNewAddressTitleStyle}>
                            {globalString.addAddressInfo.addAddressTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.addNewAddressHeaderStyle}>
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
                                index === radioButtonIndex ? (
                                    <GRadioButtonComponent
                                        questionsStyle={styles.addNewAddressJustify}
                                        onPress={this.radioButtonClicked(index)}
                                        selected
                                        questions={item.question}
                                    />
                                ) : (
                                        <GRadioButtonComponent
                                            questionsStyle={styles.addNewAddressJustify}
                                            onPress={this.radioButtonClicked(index)}
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
                                value={addressOne}
                                maxLength={50}
                                errorFlag={!validationAddressOne}
                                errorText={validAddressOneMessage}
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
                                value={addressTwo}
                                maxLength={50}
                                onChangeText={this.setAddressTwo}
                                errorFlag={!validationAddressTwo}
                                errorText={validAddressTwoMessage}
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
                                value={zipCodeValue}
                                keyboardType="number-pad"
                                maxLength={5}
                                errorFlag={!isZipCodeValid}
                                errorText={validZipCodeMessage}
                            />
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editAddressCityLabel}>
                                {globalString.addAddressInfo.cityLabel}
                            </Text>
                            <Text style={styles.editAddressCityValue}>
                                {userCity}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editAddressCityLabel}>
                                {globalString.addAddressInfo.stateLabel}
                            </Text>
                            <Text style={styles.editAddressCityValue}>
                                {userState}
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
    saveProfileData: PropTypes.func,
    stateCityData: PropTypes.func
};

EditAddressAddNewComponent.defaultProps = {
    profileState: {},
    getStateCity: null,
    getAddressFormat: null,
    saveProfileData: null,
    stateCityData: null
};

export default EditAddressAddNewComponent;