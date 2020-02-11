import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, showAlert } from 'react-native';
import PropTypes from "prop-types";
import AppUtils from '../../Utils/AppUtils';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import StyleSheet from './styles';


const basicTermsData = [
    {
        id: '1',
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aexercitationem ullam corporis',
    },
    {
        id: '2',
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aexercitationem ullam corporis',
    },
    {
        id: '3',
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aexercitationem ullam corporis',
    },
    {
        id: '4',
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aexercitationem ullam corporis',
    }


];






class TermsAndConditionsComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            agreeConditions: false

        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */

    /*----------------------
   
    /*----------------------
                                 Button Events 
                                                                 -------------------------- */

    onClickHeader = () => {
        AppUtils.debugLog("#TODO : onClickHeader");
    }

    goBack = () => {
        const { navigation } = this.props;
        const { goBack } = navigation;
        goBack();
    }

    onClickCancel = () => {
        const { navigation } = this.props;
        const { goBack } = navigation;
        goBack('termsAndConditions');
    }


    onClickNext = () => {
        this.validateFields();
    }

    // onPressCheck = (keyName) => () => this.setState({
    //     [keyName]: !this.state[keyName]
    // });

    onPressCheck = (keyName) => () => {
        this.setState(prevState => ({
            [keyName]: !prevState[`${keyName}`]
        }));
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === "null" || str === "undefined") {
            return true;
        }
        return false;

    }

    validateFields = () => {
        const { agreeConditions } = this.state;
        const { navigation } = this.props;
        const { navigate } = navigation;
        let errMsg = "";
        let isValidationSuccess = false;
        if (agreeConditions === false) {
            errMsg = gblStrings.accManagement.confirmAgreeCondMsg;

        } else {
            isValidationSuccess = true;
        }

        if (isValidationSuccess) {
            navigate({ routeName: 'dashboardAccounts', key: 'dashboardAccounts' });
        } else {
            AppUtils.debugLog(errMsg);
            showAlert(gblStrings.common.appName, errMsg, gblStrings.common.ok);

        }
    }

    generateKeyExtractor = (item) => item.id;

    renderBasicTerms = ({ item }) =>
        (
            <View style={StyleSheet.column}>
                <View style={StyleSheet.row}>
                    <Text style={StyleSheet.bullet}>{`${'\u2022'}`}</Text>
                    <Text style={StyleSheet.bulletText}>{item.title}</Text>
                </View>
            </View>
        );


    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const { agreeConditions } = this.state;
        const { navigation } = this.props;
        const nextBtnstyle = agreeConditions ? StyleSheet.normalBlackBtn : StyleSheet.nextOpacityBtn;

        return (
            <View style={StyleSheet.container}>
                <GHeaderComponent
                    navigation={navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={StyleSheet.scrollView}>

                    { /* -----------Terms and Conditions -------------------*/}
                    <View style={StyleSheet.sectionGrp}>
                        <View style={StyleSheet.accTypeSelectSection}>
                            <Text style={StyleSheet.headings}>
                                {gblStrings.dashBoard.termsAndConditions}
                            </Text>
                        </View>

                        <Text style={StyleSheet.lblLine} />

                        <Text style={StyleSheet.sectionDescTxt}>
                            {gblStrings.dashBoard.termsAndConditionsNote}
                        </Text>

                    </View>


                    { /* -----------Basic Terms -------------------*/}

                    <View style={StyleSheet.sectionGrp}>
                        <View style={StyleSheet.accTypeSelectSection}>
                            <Text style={StyleSheet.headings}>
                                {gblStrings.dashBoard.basicTerms}
                            </Text>
                        </View>

                        <View>
                            <FlatList
                                data={basicTermsData}
                                renderItem={this.renderBasicTerms}
                                keyExtractor={this.generateKeyExtractor}
                            />
                        </View>

                        <View style={StyleSheet.agreeSectionGrp}>
                            <CustomCheckBox
                                size={20}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor="#707070"
                                innerCicleColor="#61285F"
                                labelStyle={StyleSheet.agreeTermsTxt}
                                label={gblStrings.dashBoard.agreeMsgContent}
                                selected={agreeConditions}
                                onPress={this.onPressCheck("agreeConditions")}

                            />

                        </View>
                    </View>





                    { /* ----------- Buttons Group -------------------*/}

                    <View style={StyleSheet.btnGrp}>


                        <GButtonComponent
                            buttonStyle={StyleSheet.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={StyleSheet.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />

                        <GButtonComponent
                            buttonStyle={nextBtnstyle}
                            buttonText={gblStrings.common.next}
                            textStyle={StyleSheet.normalBlackBtnTxt}
                            onPress={this.onClickNext}
                            disabled={!agreeConditions}

                        />
                    </View>

                    { /* ----------- Disclaimer -------------------*/}

                    <View style={StyleSheet.newVictorySection}>
                        <Text style={StyleSheet.disclaimerTitleTxt}>
                            {gblStrings.accManagement.VCDiscalimerTitle}
                        </Text>
                        <Text style={StyleSheet.disclaimerTxt}>
                            {gblStrings.accManagement.VCDiscalimerDesc}
                        </Text>
                        <Text style={StyleSheet.moreTxt}>
                            {gblStrings.common.more}
                        </Text>
                    </View>
                    <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}


TermsAndConditionsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default TermsAndConditionsComponent;
