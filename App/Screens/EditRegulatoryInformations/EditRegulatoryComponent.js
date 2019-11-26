import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

class editRegulatoryComponent extends Component {
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

    editRegulatoryOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {
        return (

            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={styles.editRegulatoryOne}>
                            {"Pro.."}
                        </Text>

                        <Text style={styles.editRegulatoryTwo}>
                            {globalString.profileSettingsPage.profileHeadArrow}
                        </Text>

                        <Text style={styles.editRegulatoryOne}>
                            {"Bas.."}
                        </Text>

                        <Text style={styles.editRegulatoryTwo}>
                            {globalString.profileSettingsPage.profileHeadArrow}
                        </Text>

                        <Text style={styles.editRegulatoryHead}>
                            {globalString.editProfilePageValue.editManageRegulatory}
                        </Text>
                    </View>

                    {/* Manage Regulagtory Section */}

                    <View>
                        <View style={[styles.settingsView, styles.editRegulatoryView]}>
                            <Text style={styles.editRegulatoryHeadOne}>
                                {globalString.editProfilePageValue.editManageRegulatory}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.editRegulatoryMargin}>
                            <Text style={styles.editRegulatoryPolitical}>
                                {globalString.editProfilePageValue.editRegulatoryPoliticalLabel}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.cancelButtonStyle}
                                buttonText={globalString.common.cancel}
                                textStyle={styles.cancelButtonText}
                                onPress={this.editRegulatoryOnCancel} />
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.saveButtonStyle}
                                buttonText={globalString.common.save}
                                textStyle={styles.saveButtonText} />
                        </View>

                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editAddressSecurity}>
                            {globalString.editAddressInfo.editAddressSecurity}
                        </Text>
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
                            source={require("../../Images/logo.png")} />
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

export default editRegulatoryComponent;