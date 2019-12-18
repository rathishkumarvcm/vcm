import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GModalComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import RNSecureKeyStore from 'react-native-secure-key-store';
import PropTypes from "prop-types";

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            memberId: '',
            modalVisible:true
        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        RNSecureKeyStore.get("EmailAddress")
            .then((res) => {
                console.log(res);
                this.setState({
                    memberId: res
                });
            }, (err) => {
                console.log(err);
            });

    }
    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    goBack = () => {
        this.props.navigation.goBack();
    }
    onClickOpenAnAccount = () => {
        this.props.navigation.navigate({ routeName: 'termsAndConditions', key: 'termsAndConditions' });
    }

    closeModal = () => {
        this.setState({
            modalVisible : !this.state.modalVisible
        });
    }

    navigateAccountOpening = () => {
        this.setState({
            modalVisible : !this.state.modalVisible
        });
        const specialMFAUserType = "" + (this.props && this.props.navigation.getParam('SpecialMFA',''));   
        this.props.navigation.navigate('openAccPageFive',{SpecialMFA:specialMFAUserType});
    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const specialMFAUserType = "" + (this.props && this.props.navigation.getParam('SpecialMFA',''));   
        return (


            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: .85 }}
                    contentContainerStyle={{
                        flex: 1,
                       // justifyContent: 'space-between'
                    }}
                >
                    <View style={styles.dashboardSection}>
                        <Text>{`welcome ${this.state.memberId}`}</Text>
                        <Text style={styles.dashboardText}>
                            {gblStrings.dashBoard.dashboard}
                        </Text>
                        <GButtonComponent
                            buttonStyle={styles.openAccBtn}
                            buttonText={gblStrings.dashBoard.openAnAccount}
                            textStyle={styles.openAccBtnTxt}
                            onPress={this.onClickOpenAnAccount}
                        />
                    </View>

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

                    {(specialMFAUserType!="" && (specialMFAUserType=="UserForm" || specialMFAUserType=="NewUser"))?
                        <GModalComponent 
                            modalVisible={this.state.modalVisible}
                            modalContainerStyle={styles.modalContainerStyle}
                            titleContent={'Your Account Opening Form is Pending for Submission'}
                            descContent1={'Lorem ipsum is simple dummy text of printing.'}                           
                            buttonGoActionStyle={styles.buttonCancelActionStyle}
                            buttonCancelActionStyle={styles.buttonGoActionStyle}
                            buttonGoText={'Cancel'}
                            buttonCancelText={'Proceed'}                       
                            buttonGoTextStyle={styles.buttonGoTextStyle}
                            buttonCancelTextStyle={styles.buttonCancelTextStyle}
                            buttonGoOnPress={this.closeModal}
                            buttonGoCancelPress={this.navigateAccountOpening}
                        />
                    :null
                    }

                    <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}

DashboardComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default DashboardComponent;