import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

class EditPhoneInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false
        };
    }

    componentDidMount() { }

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {"Settings > Personal info > "}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editPhoneInformations.phoneInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.settingsHeadline, styles.editTitleBold]}>
                            {globalString.editPhoneInformations.phoneInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder}></View>

                    <View style={styles.settingsView}>
                        <Text style={styles.phoneInfoLabel}>
                            {globalString.editPhoneInformations.phoneLabel}
                        </Text>
                        <Text style={styles.phoneInfoAddNewLabel}
                            onPress={() => this.props.navigation.navigate('editAddPhoneNumber')}>
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder}></View>

                    <View style={styles.settingsView}>
                        <Text style={styles.phoneMobileView}>
                            {globalString.editPhoneInformations.phoneMobileLabel}
                        </Text>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={styles.phoneInfoPrimaryLabel}>
                            {globalString.editPhoneInformations.phonePrimaryNumber}
                        </Text>
                        <Text style={styles.phoneInfoPrimaryData}>
                            {"+1 XXXXXXXXXX"}
                        </Text>
                        <Text style={styles.phoneInfoPrimaryData}>
                            {"Morning 8:00 AM - 10:00 AM"}
                        </Text>

                        <View style={styles.phonePreferred}>
                            <Text style={styles.phonePreferredLabel}>
                                {globalString.editPhoneInformations.phonePreferred}
                            </Text>
                        </View>

                        <View style={styles.phoneEditView}>
                            <Text style={styles.phoneEditLabel}>
                                {globalString.editPhoneInformations.phoneEditLabel}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: '1%', marginLeft: '2%' }}>{"Secondary Number"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"+1 XXXXXXXXXX"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"Evening 6:00 PM - 8:00 PM"}</Text>

                        <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row', alignSelf: 'baseline', marginLeft: '2%', display: 'flex' }}>
                            <Text style={{ color: '#56565A', fontSize: scaledHeight(15), padding: '1%' }}>{"Preferred"}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: '2%', width: '92%' }}>
                            <Text style={{ color: '#5D83AE', width: '46%', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '4%' }}>{"Edit"}</Text>
                            <Text style={{ color: '#5D83AE', width: '46%', textAlign: 'right', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '4%' }}>{"Delete"}</Text>
                        </View>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: '1%', marginLeft: '2%' }}>{"Tertiary Number"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"+1 XXXXXXXXXX"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"Evening 4:00 PM - 6:00 PM"}</Text>

                        <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row', alignSelf: 'baseline', marginLeft: '2%', display: 'flex' }}>
                            <Text style={{ color: '#56565A', fontSize: scaledHeight(15), padding: '1%' }}>{"Preferred"}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: '2%', width: '92%' }}>
                            <Text style={{ color: '#5D83AE', width: '46%', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '4%' }}>{"Edit"}</Text>
                            <Text style={{ color: '#5D83AE', width: '46%', textAlign: 'right', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '4%' }}>{"Delete"}</Text>
                        </View>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{"Home"}</Text>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: '1%', marginLeft: '2%' }}>{"Primary Number"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"+1 XXXXXXXXXX"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"Morning 8:00 AM - 10:00 AM"}</Text>

                        <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row', alignSelf: 'baseline', marginLeft: '2%' }}>
                            <Text style={{ color: '#56565A', fontSize: scaledHeight(15), padding: '1%' }}>{"Preferred"}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: '2%', width: '92%' }}>
                            <Text style={{ color: '#5D83AE', width: '46%', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '4%' }}>{"Edit"}</Text>
                        </View>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: '1%', marginLeft: '2%' }}>{"Secondary Number"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"+1 XXXXXXXXXX"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"Evening 6:00 PM - 8:00 PM"}</Text>

                        <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row', alignSelf: 'baseline', marginLeft: '2%', display: 'flex' }}>
                            <Text style={{ color: '#56565A', fontSize: scaledHeight(15), padding: '1%' }}>{"Preferred"}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: '2%', width: '92%' }}>
                            <Text style={{ color: '#5D83AE', width: '46%', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '4%' }}>{"Edit"}</Text>
                            <Text style={{ color: '#5D83AE', width: '46%', textAlign: 'right', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '4%' }}>{"Delete"}</Text>
                        </View>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(18), fontWeight: 'bold' }}>{"Work"}</Text>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: '1%', marginLeft: '2%' }}>{"Primary Number"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"+1 XXXXXXXXXX"}</Text>
                        <Text style={{ color: '#333333DE', fontSize: scaledHeight(15), marginBottom: '1%', marginLeft: '2%' }}>{"Morning 8:00 AM - 10:00 AM"}</Text>

                        <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row', alignSelf: 'baseline', marginLeft: '2%' }}>
                            <Text style={{ color: '#56565A', fontSize: scaledHeight(15), padding: '1%' }}>{"Preferred"}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: '2%', width: '92%' }}>
                            <Text style={{ color: '#5D83AE', width: '46%', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '4%' }}>{"Edit"}</Text>
                        </View>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.phoneAddFaxLabel}>
                            {globalString.editPhoneInformations.phoneFax}
                        </Text>
                        <Text style={styles.phoneFaxAddNewLabel}>
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder}></View>

                    <View style={styles.phoneFaxView}>
                        <GInputComponent
                            placeholder={globalString.editPhoneInformations.phoneFaxLabel} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={() => this.props.navigation.navigate('profileSettings')} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.phoneSecurity}>
                            {globalString.editPhoneInformations.phoneSecurity}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editPhoneInformations.phoneTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editPhoneInformations.phoneInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={require("../../Images/logo.png")} />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalString.common.connectWithUs}
                        </Text>
                    </View>

                    <View style={styles.whiteBackground}>
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/twitterlogo.png")} />
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/linkedinlogo.png")} />
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

export default EditPhoneInfoComponent;