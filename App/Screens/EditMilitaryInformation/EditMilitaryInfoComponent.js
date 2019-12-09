import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

const profileMilitaryService = [
    { index1: 0, question: "Yes" },
    { index2: 1, question: "No" },
];

class editMilitaryInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            radioButton: false,
            radioButtonIndex: 0
        };
    }

    radioButtonClicked = (index) => {
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });
        }
        else {
            this.setState({
                radioButton: false
            });
        }
    }

    componentDidMount() { }

    editMilitaryOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {
        return (

            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
                />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editMilitaryInfo.militaryInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.settingsHeadline, styles.editTitleBold]}>
                            {globalString.editMilitaryInfo.militaryInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editMilitaryInfo}>
                            {globalString.editMilitaryInfo.militaryInformations}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editMilitaryServing}>
                            {globalString.editMilitaryInfo.militaryServing}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <View style={styles.editMilitaryServingRadio}>
                            {profileMilitaryService.map((item, index) =>
                                index == this.state.radioButtonIndex ?
                                    <GRadioButtonComponent
                                        onPress={() => this.radioButtonClicked(index)}
                                        selected
                                        questions={item.question}
                                    />
                                    :
                                    <GRadioButtonComponent
                                        onPress={() => this.radioButtonClicked(index)}
                                        selected={false}
                                        questions={item.question}
                                    />
                            )}
                        </View>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editMilitaryOnCancel}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editMilitarySecurity}>
                            {globalString.editEmailInformations.editEmailSecurity}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editEmailInformations.editEmailTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editEmailInformations.editEmailInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={require("../../Images/logo.png")}
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

export default editMilitaryInfoComponent;