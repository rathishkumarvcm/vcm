import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';

class editEmailAddNewComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
        };
    }

    componentDidMount() { }

    editEmailOnCancel = () => {
        const {navigation} = this.props;
        navigation.navigate('editEmailInformation');
    }

    render() {

        const {navigation} = this.props;


        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.scrollViewContainer}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.editEmailInfoLabel}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View>
                        <Text style={styles.editEmailPrimaryLabel}>
                            {globalString.editEmailInformations.editEmailPrimary}
                        </Text>
                    </View>

                    <View style={styles.editEamilMargin}>
                        <GInputComponent
                            placeholder=""
                            editable={false}
                        />
                    </View>

                    <View style={styles.editEmailPrimaryPreferred}>
                        <GRadioButtonComponent radioButtonStyle={styles.editEmailPreferred}
                            selected questions={globalString.editEmailInformations.editEmailPreferred}
                        />
                        <Text style={styles.editEmailDeleteLabel}>
                            {globalString.editEmailInformations.editEmailDelete}
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.editEmailPrimaryLabel}>
                            {globalString.editEmailInformations.editEmailSecondary}
                        </Text>
                    </View>

                    <View style={styles.editEamilMargin}>
                        <GInputComponent
                            placeholder=""
                            editable={false}
                        />
                    </View>

                    <View style={styles.editEmailPrimaryPreferred}>
                        <GRadioButtonComponent radioButtonStyle={styles.editEmailPreferred}
                            questions={globalString.editEmailInformations.editEmailPreferred}
                        />
                        <Text style={styles.editEmailDeleteLabel}>
                            {globalString.editEmailInformations.editEmailDelete}
                        </Text>
                    </View>

                    <View style={styles.editEmailInformations}>
                        <Text style={styles.editEmailLabelInfo}>
                            {globalString.editEmailInformations.editEmailInfoOne}
                        </Text>
                    </View>

                    <View style={styles.editEmailInformations}>
                        <Text style={styles.editEmailLabelInfo}>
                            {globalString.editEmailInformations.editEmailInfoTwo}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editEmailOnCancel}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                        />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editEmailInformations.editEmailTerms}
                        </Text>
                        <Text style={[styles.openInvestment, lineHeight = 30]}>
                            {globalString.editEmailInformations.editEmailInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source="../../Images/logo.png"
                        />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalString.common.connectWithUs}
                        </Text>
                    </View>

                    <View style={styles.whiteBackground}>
                        <Image style={styles.imageWidthHeight}
                            source="../../Images/twitterlogo.png"
                        />
                        <Image style={styles.imageWidthHeight}
                            source="../../Images/linkedinlogo.png"
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

editEmailAddNewComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
};

editEmailAddNewComponent.defaultProps = {
    navigation: {},
};


export default editEmailAddNewComponent;