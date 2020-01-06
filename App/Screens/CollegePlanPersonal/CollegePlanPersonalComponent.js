import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { scaledHeight } from '../../Utils/Resolution';
import PropTypes from "prop-types";


class CollegePlanPersonalComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            itemID: "",
            selectedItemID: "",
            selectedItemName: "",


        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

    }
    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    onClickHeader = () => {
        console.log("#TODO : onClickHeader");
    }
    goBack = () => {
        this.props.navigation.goBack();
    }
    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }
    onClickDownloadPDF = () => {
        alert("#TODO : Download");
    }
    onSelected = (item) => () => {
        console.log("item: " + item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    onClickNext = () => {
        this.props.navigation.navigate('collegePlanBeneficiary', { key: 'collegePlanBeneficiary' });
    }
    onClickSave = () => {
    }


    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {

        let currentPage = 4;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} onPress={this.onClickHeader} />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + " " + gblStrings.accManagement.personalInformation} />



                    { /*-----------Personal information -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <TouchableOpacity
                            // onPress={() => { alert("#TODO:: Edit") }}
                            activeOpacity={0.8}
                            accessibilityRole={'button'}
                            style={styles.editBtn}
                        >
                            <Text style={styles.editBtnTxt}>
                                {gblStrings.common.edit}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.editDetailsGrp} >

                            <Text style={styles.lblLeftColTxt}>
                                {gblStrings.accManagement.name}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"John Due"}
                            </Text>
                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.socialSecurityNo}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"000-00-1234"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.mailingAddress}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"287 Hillcrest Lane"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.physicalAddress}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"287 Hillcrest Lane"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.homeTelephone}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"(555) 555-1234      (Optional)"}
                            </Text>

                            <Text style={styles.lblNameTxt}>
                                {gblStrings.accManagement.workPhoneNo}
                            </Text>
                            <Text style={styles.lblNameValueTxt}>
                                {"(555) 555-1234      (Optional)"}
                            </Text>

                            <Text style={styles.regulatoryQuestTxt}>
                                {gblStrings.accManagement.regulatoryQuestTxt}
                            </Text>



                            <View style={styles.radioBtnGrp}>
                                <CustomRadio
                                    componentStyle={{ width: "30%", marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                    size={30}
                                    outerCicleColor={"#DEDEDF"}
                                    innerCicleColor={"#61285F"}
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label={"Yes"}
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel={""}
                                    selected={(this.state.selectedItemID !== "" && "Y" == this.state.selectedItemID) ? true : false}
                                    onPress={this.onSelected({ name: 'Yes', id: 'Y' })}
                                />
                                <CustomRadio

                                    size={30}
                                    componentStyle={{ width: "30%", marginBottom: scaledHeight(0), marginTop: scaledHeight(24) }}
                                    outerCicleColor={"#DEDEDF"}
                                    innerCicleColor={"#61285F"}
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label={"No"}
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel={""}
                                    selected={(this.state.selectedItemID !== "" && "N" == this.state.selectedItemID) ? true : false}
                                    onPress={this.onSelected({ name: 'No', id: 'N' })}
                                />
                            </View>


                            <Text style={{ textAlign: "left", fontSize: scaledHeight(16), textDecorationLine: 'underline', color: '#333333DE' }}>
                                {gblStrings.accManagement.whyWeNeedThis}
                            </Text>

                        </View>
                    </View>

                    { /*----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>

                        <Text style={styles.agreeTxt}>
                            {gblStrings.accManagement.ApplicationPartDisclaimer}
                        </Text>
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.save}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickSave}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={gblStrings.common.next}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickNext}

                        />
                    </View>
                    { /*----------- Disclaimer -------------------*/}

                    <View style={styles.newVictorySection}>
                        <Text style={styles.disclaimerTitleTxt}>
                            {gblStrings.accManagement.VCDiscalimerTitle}
                        </Text>
                        <Text style={styles.disclaimerTxt}>
                            {gblStrings.accManagement.VCDiscalimerDesc}
                        </Text>
                        <Text style={styles.moreTxt}>
                            {gblStrings.common.more}
                        </Text>
                    </View>
                    <GFooterComponent />


                </ScrollView>
            </View>

        );
    }
}

CollegePlanPersonalComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default CollegePlanPersonalComponent;