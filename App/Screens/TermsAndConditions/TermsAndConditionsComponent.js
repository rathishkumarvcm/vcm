import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";




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
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            agreeConditions: false

        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

    }

    /*----------------------
   
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
    onClickNext = () => {
        this.validateFields();
    }
    onPressCheck = (keyName) => () => this.setState({
        [keyName]: !this.state[keyName]
    });

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }
    validateFields = () => {
        var errMsg = "";
        var isValidationSuccess = false;
        if (this.state.agreeConditions === false) {
            errMsg = gblStrings.accManagement.confirmAgreeCondMsg;

        } else {
            isValidationSuccess = true;
        }

        if (isValidationSuccess) {
            this.props.navigation.navigate({ routeName: 'dashboardAccounts', key: 'dashboardAccounts' });
        } else {
            alert(errMsg);
        }
    }
    generateKeyExtractor = (item) => item.id ;
    renderBasicTerms = ({ item }) =>
        (<View style={styles.column}>
            <View style={styles.row}>
                <Text style={styles.bullet}>{"" + '\u2022' + ""}</Text>
                <Text style={styles.bulletText}>{item.title}</Text>
            </View>
         </View>
        );

    
    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const nextBtnstyle = this.state.agreeConditions ? styles.normalBlackBtn : [styles.normalBlackBtn, { opacity: .45 }];

        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }}>

                    { /*-----------Terms and Conditions -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {gblStrings.dashBoard.termsAndConditions}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />

                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.dashBoard.termsAndConditionsNote}
                        </Text>

                    </View>


                    { /*-----------Basic Terms -------------------*/}

                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {gblStrings.dashBoard.basicTerms}
                            </Text>
                        </View>

                        <View style={{ flexGrow: 1 }}>
                            { /* <FlatList
                                data={basicTermsData}
                                renderItem={({ item }) =>
                                    (<View style={styles.column}>
                                        <View style={styles.row}>
                                            <Text style={styles.bullet}>{"" + '\u2022' + ""}</Text>
                                            <Text style={styles.bulletText}>{item.title}</Text>
                                        </View>
                                    </View>
                                    )
                                }
                                keyExtractor={item => item.id}
                            />
                            */}
                            <FlatList
                                data={basicTermsData}
                                renderItem={this.renderBasicTerms}
                                keyExtractor={this.generateKeyExtractor}
                            />
                        </View>

                        <View style={styles.agreeSectionGrp} >
                            <CustomCheckBox
                                size={20}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor={"#707070"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.agreeTermsTxt}
                                label={gblStrings.dashBoard.agreeMsgContent}
                                selected={this.state.agreeConditions}
                                onPress={this.onPressCheck("agreeConditions")}

                            />

                        </View>
                    </View>





                    { /*----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>


                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />

                        <GButtonComponent
                            buttonStyle={nextBtnstyle}
                            buttonText={gblStrings.common.next}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickNext}
                            disabled={!this.state.agreeConditions}

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


TermsAndConditionsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default TermsAndConditionsComponent;
