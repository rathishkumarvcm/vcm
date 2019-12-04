import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import PropTypes from "prop-types";
import globalString from '../../Constants/GlobalStrings';

const tempPrimaryMailData = [
    {
        "emailType": 'Primary Email',
        "emailId": 'abc@gmail.com'
    },
    {
        "emailType": 'Secondary Email',
        "emailId": 'abcd@gmail.com'
    }
];

const UserEmailInformation = (props) => {
    return (
        <View style={{ width: '92%', marginLeft: '4%', marginRight: '4%', backgroundColor: '#fff',  flexGrow: 1, marginTop: scaledHeight(5) }}>
            <View style={{ flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap', marginVertical: scaledHeight(10.5) }} >
                <Text>
                    {props.emailType}
                </Text>
            </View>
            <Text>
                {props.emailId}
            </Text>
        </View>
    );
};

UserEmailInformation.propTypes = {
    emailType: PropTypes.string,
    emailId: PropTypes.string
};

class editEmailInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

            profilePrimayMail: ''
        };
    }

    renderEmailInformation = (dataLength) =>  ({ item, index }) =>
        (<UserEmailInformation
            emailType={item.emailType}
            emailId={item.emailId} />);

    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.email) {
            this.setState({
                profilePrimayMail: this.props.initialState.email
            })
        }
    }

    emailAddNew = () => this.props.navigation.navigate('editEmailAddNew');

    emailAddNewOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.editEmailTitle}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>
                        <Text style={styles.editEmailAddNew}
                            onPress={this.emailAddNew}>
                            {globalString.editEmailInformations.editEmailAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder}></View>

                    <View>
                        <Text style={styles.editEmailPrimary}>
                            {globalString.editEmailInformations.editEmailPrimary}
                        </Text>

                        <GInputComponent
                            placeholder={this.state.profilePrimayMail}
                            editable={false} />
                    </View>

                    <FlatList
                        data={tempPrimaryMailData}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderEmailInformation(tempPrimaryMailData.length)} />

                    <View style={styles.editEmailInformations}>
                        <Text style={styles.editEmailInfoView}>
                            {globalString.editEmailInformations.editEmailInfoOne}
                        </Text>
                    </View>

                    <View style={styles.editEmailInformations}>
                        <Text style={styles.editEmailInfoView}>
                            {globalString.editEmailInformations.editEmailInfoTwo}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.emailAddNewOnCancel} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editEmailSecurityView}>
                            {globalString.editEmailInformations.editEmailSecurity}
                        </Text>
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

export default editEmailInfoComponent;