import React, { Component } from 'react';
import { Text, View, ScrollView,} from 'react-native';
import RNSecureKeyStore from 'react-native-secure-key-store';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GModalComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            memberId: '',
            modalVisible:true,
            idToken:'',
            accessToken:'',
            refreshToken: '',
            mockApi : true
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
        
            RNSecureKeyStore.get("jwtToken")
            .then((value) => {
                this.setState({
                    idToken: value
                });
            }).catch(() => {
                this.setState({
                    idToken: ""
                });
            });

        
            RNSecureKeyStore.get("accessToken")
            .then((value) => {
                this.setState({
                    accessToken: value
                });
            }).catch(() => {
                this.setState({
                    accessToken: ""
                });
            });

        
            RNSecureKeyStore.get("refreshToken")
            .then((value) => {
                this.setState({
                    refreshToken: value
                });
            }).catch(() => {
                this.setState({
                    refreshToken: ""
                });
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

    tokenDetails = () => {
        const {mockApi} = this.state;
        const {setEnvironment} = this.props;

        if(mockApi){
            setEnvironment("MOCK");
        }
        else{
            setEnvironment("LIVE");
        }
        this.setState({
            mockApi : !mockApi
        });

    }

    onClickOpenAnAccount = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;  
        navigate({ routeName: 'termsAndConditions', key: 'termsAndConditions' });
    }

    onClickAccountSummary = () => {
        const { navigation} = this.props;
        const { navigate } = navigation;  
        navigate({ routeName: 'accountSummary', key: 'accountSummary' });
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

    navigateAccountPositions = () => {                     
        const {navigation} = this.props;
        navigation.navigate('accountPositions'); 
    }

    navigateMoneyAssest = () => {                     
        const {navigation} = this.props;
        navigation.navigate('moneyAndAsset'); 
    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const { navigation} = this.props;
        const {getParam} = navigation;  
        const {memberId,modalVisible, idToken, accessToken, refreshToken, mockApi} = this.state;

        const specialMFAUserType = `${ this.props && getParam('SpecialMFA','')}`; 
        return (


            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>          
                
                <View style={styles.welcomeText}>
                    <Text>{`Welcome ${memberId}`}</Text>       
                </View>                  

                <View style={styles.dashboardListContainer}>                                  
                        <View style={styles.dashboardItemContainer}>
                            <Text style={styles.dashboardTileText} onPress={this.selectTheState}>
                                Portfolio Analysis
                            </Text>                       
                        </View>
                    <View style={styles.dashboardItemContainer}>
                        <Text style={styles.dashboardTileText} onPress={this.selectTheState}>
                            {gblStrings.dashBoard.accountSummary}
                        </Text>                       
                    </View>
                </View>
                <View style={styles.dashboardListContainer}>               
                    <View style={styles.dashboardItemContainer}>
                        <Text style={styles.dashboardTileText} onPress={this.navigateMoneyAssest}>
                            Money & Asset Movement
                        </Text>                       
                    </View>
                    <View style={styles.dashboardItemContainer}>
                        <Text style={styles.dashboardTileText} onPress={this.navigateAccountPositions}>
                            Account Positions
                        </Text>                       
                    </View>
                </View>
                <View style={styles.dashboardListContainer}>               
                    <View style={styles.dashboardItemContainer}>
                        <Text style={styles.dashboardTileText} onPress={this.selectTheState}>
                            Transactions 
                        </Text>                       
                    </View>
                    <View style={styles.dashboardItemContainer}>
                        <Text style={styles.dashboardTileText} onPress={this.selectTheState}>
                            Add Holding Group
                        </Text>                       
                    </View>
                </View>

                    <View style={styles.dashboardSection}>            

                        <GButtonComponent
                            buttonStyle={styles.openAccBtn}
                            buttonText={gblStrings.dashBoard.openAnAccount}
                            textStyle={styles.openAccBtnTxt}
                            onPress={this.onClickOpenAnAccount}
                        />

                        <GButtonComponent
                            buttonStyle={styles.openAccBtn}
                            buttonText={mockApi ? "CONFIGURE MOCK API" : "CONFIGURE LIVE API"}
                            textStyle={styles.openAccBtnTxt}
                            onPress={this.tokenDetails}
                        />


    <Text style={styles.tokenText}>ID Token: {idToken}</Text>
    <Text style={styles.tokenText}>ACCESS Token: {accessToken}</Text>
    <Text style={styles.tokenText}>REFRESH Token: {refreshToken}</Text>
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

                  {/*  <GFooterSettingsComponent /> */}
                </ScrollView>
                
            </View>

        );
    }
}

DashboardComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    setEnvironment: PropTypes.func    
};

DashboardComponent.defaultProps = {
    setEnvironment: () => { }    
};

export default DashboardComponent;