/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Text, View, ScrollView, Image,FlatList, TouchableOpacity} from 'react-native';
// import RNSecureKeyStore from 'react-native-secure-key-store';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import GuestUserAccounts from './GuestUesrAccounts';
import GuestUserFinancial from './GuestUserFinancial';
// import AppUtils from '../../Utils/AppUtils';
// import GuestUserNewsAndCommentary from './GuestUserNewsAndCommentary';

class GuestUserDashboardComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            newsData: [],
            // memberId: '',
            // modalVisible:true,
            // idToken:'',
            // accessToken:'',
            // refreshToken: ''
        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        this.props.newsAndCommentaryActions();

    }

    static getDerivedStateFromProps(nextProps) {  
        return {
            newsData: nextProps.newsData.newsAndCommentary
        };
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

    portfolioOnpress = () => {
        // alert("4111");
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

    getKey = (item) => item.id

    renderNewsList = ({ item }) => (
            <TouchableOpacity style={styles.newsListView}>
                <Text style={styles.newsListText}>
                    {item.id}) {item.title}
                </Text>
            </TouchableOpacity>
    )

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const { navigation} = this.props;
        // const {getParam} = navigation;  
        const {newsData} = this.state;
        
        // const specialMFAUserType = `${ this.props && getParam('SpecialMFA','')}`; 
        return (


            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>          
                
                    <View style={styles.tileView}>
                        <View style={styles.profileHeader}>
                            <Text style={styles.profileHeadline}>
                                {gblStrings.guestDashBoard.account}
                            </Text>
                        </View>
                        <GuestUserAccounts 
                            onPress={this.onClickOpenAnAccount}
                        />
                    </View>

                    <View style={styles.tileView}>
                        <View style={styles.profileHeader}>
                            <Text style={styles.profileHeadline}>
                                {gblStrings.guestDashBoard.financial}
                            </Text>
                        </View>
                        <GuestUserFinancial 
                            portfolioOnpress={this.portfolioOnpress}
                        />
                    </View>

                    <View style={styles.tileView}>
                        <View style={styles.profileHeader}>
                            <Text style={styles.profileHeadline}>
                                {gblStrings.guestDashBoard.news}
                            </Text>
                        </View>
                        <View style={styles.dashboardSection}>
                            <FlatList
                                data={newsData}
                                keyExtractor={this.getKey}
                                renderItem={this.renderNewsList}
                            />
                        </View>
                    </View>

                    <View style={styles.tileView}>
                        <View style={styles.profileHeader}>
                            <Text style={styles.profileHeadline}>
                                {gblStrings.guestDashBoard.communication}
                            </Text>
                        </View>
                        <View style={styles.communicationView}>
                            <Image style={styles.phoneImage}
                                // eslint-disable-next-line global-require
                                source={require('../../Images/phone.png')}
                                resizeMode="contain"
                            />
                            <Text style={styles.phoneNumText}>+ 1 466 210 0255</Text>
                        </View>
                    </View>
                    
                </ScrollView>
                
            </View>

        );
    }
}

GuestUserDashboardComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default GuestUserDashboardComponent;