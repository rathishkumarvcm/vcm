import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import RNSecureKeyStore from 'react-native-secure-key-store';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GFooterSettingsComponent, GModalComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
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
               AppUtils.debugLog(res);
                this.setState({
                    memberId: res
                });
            }, (err) => {
               AppUtils.debugLog(err);
            });

    }

    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    goBack = () => {
        const { navigation} = this.props;
        const { goBack } = navigation;  
        goBack();
    }

    onClickOpenAnAccount = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;  
        navigate({ routeName: 'termsAndConditions', key: 'termsAndConditions' });
    }

    closeModal = () => {
        this.setState(prevState => ({
            modalVisible : !prevState.modalVisible
        }));
    }

    navigateAccountOpening = () => {
        const { navigation} = this.props;
        const { navigate ,getParam} = navigation;  
        
        this.setState(prevState => ({
            modalVisible : !prevState.modalVisible
        }));
        const specialMFAUserType = `${ this.props && getParam('SpecialMFA','')}`;   
        navigate('openAccPageFive',{SpecialMFA:specialMFAUserType});
    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const { navigation} = this.props;
        const {getParam} = navigation;  
        const {memberId,modalVisible} = this.state;

        const specialMFAUserType = `${ this.props && getParam('SpecialMFA','')}`; 
        return (


            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>          
                
                    <View style={styles.dashboardSection}>
                        <Text>{`welcome ${memberId}`}</Text>
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

                    {(specialMFAUserType !== "" && (specialMFAUserType === "UserForm" || specialMFAUserType === "NewUser"))? (
                        <GModalComponent 
                            modalVisible={modalVisible}
                            modalContainerStyle={styles.modalContainerStyle}
                            titleContent="Your Account Opening Form is Pending for Submission"
                            descContent1="Lorem ipsum is simple dummy text of printing."                           
                            buttonGoActionStyle={styles.buttonCancelActionStyle}
                            buttonCancelActionStyle={styles.buttonGoActionStyle}
                            buttonGoText="Cancel"
                            buttonCancelText="Proceed"                       
                            buttonGoTextStyle={styles.buttonGoTextStyle}
                            buttonCancelTextStyle={styles.buttonCancelTextStyle}
                            buttonGoOnPress={this.closeModal}
                            buttonGoCancelPress={this.navigateAccountOpening}
                        />
                      )
                    :null
                    }

                    <GFooterSettingsComponent />
                </ScrollView>
                
            </View>

        );
    }
}

DashboardComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default DashboardComponent;