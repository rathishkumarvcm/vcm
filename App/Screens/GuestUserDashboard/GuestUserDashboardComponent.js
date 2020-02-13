import React, { Component } from 'react';
import { Text, View, ScrollView,FlatList, TouchableOpacity, Platform, Linking} from 'react-native';
// import RNSecureKeyStore from 'react-native-secure-key-store';
import PropTypes from "prop-types";
import TextTicker from 'react-native-text-ticker';
import styles from './styles';
import { GHeaderComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import GuestUserAccounts from './GuestUesrAccounts';
import GuestUserFinancial from './GuestUserFinancial';
import GuestUserCommunicationCenter from './GuestUserCommunicationCenter';
// import GuestUserSavedItems from './GuestUserSavedItems';
// import AppUtils from '../../Utils/AppUtils';
// import GuestUserNewsAndCommentary from './GuestUserNewsAndCommentary';

class GuestUserDashboardComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            newsData: [],
            savedItemsData: [],
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
        const payload = '';
        const {newsAndCommentaryActions,savedItemsActions} = this.props;
        newsAndCommentaryActions(payload);
        savedItemsActions(payload);

    }

    static getDerivedStateFromProps(nextProps) {  
        return {
            newsData: nextProps.newsData.newsAndCommentary,
            savedItemsData: nextProps.savedItemsData.savedItems,
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

    onPressCall = () => {
        let phoneNumber = '+ 1 466 210 0255';
 
        if (Platform.OS === 'android') {
        // eslint-disable-next-line no-template-curly-in-string
        phoneNumber = 'tel:+ 1 466 210 0255';
        }
        else {
        // eslint-disable-next-line no-template-curly-in-string
        phoneNumber = 'telprompt:${+ 1 466 210 0255}';
        }
    
        Linking.openURL(phoneNumber);
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

    // getNewsKey = (index) => index
    getNewsKey = (item, index) => (`key ${index}`)

    renderNewsList = ({ item }) => (
        <TouchableOpacity style={styles.newsListView}>
            <Text style={styles.newsListText}>
               {item.title}
            </Text>
        </TouchableOpacity>
    )

    renderSavedItems = ({ item }) => (
        <TouchableOpacity style={styles.newsListView}>
            <Text style={styles.savedItemsText}>
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
        const {newsData,savedItemsData} = this.state;
        
        // const specialMFAUserType = `${ this.props && getParam('SpecialMFA','')}`; 
        return (


            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>  
                    <TextTicker
                        style={styles.bannerText}
                        duration={10000}
                        loop
                        bounce
                        repeatSpacer={0}
                        marqueeDelay={0}
                    // eslint-disable-next-line react-native/no-raw-text
                    >Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
                    </TextTicker>
                    <View style={styles.tileView}>
                        <View style={styles.profileHeader}>
                            <Text style={styles.profileHeadline}>
                                {gblStrings.guestDashBoard.savedItems}
                            </Text>
                        </View>
                        <View style={styles.dashboardSection}>
                            <FlatList
                                data={savedItemsData}
                                keyExtractor={this.getKey}
                                renderItem={this.renderSavedItems}
                            />
                        </View>
                    </View>
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
                                keyExtractor={this.getNewsKey}
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
                        <View>
                            <GuestUserCommunicationCenter 
                             onPressCall={this.onPressCall} 
                            />
                        </View>
                    </View>
                    
                </ScrollView>
                
            </View>

        );
    }
}

GuestUserDashboardComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    newsData:PropTypes.instanceOf(Object),
    savedItemsData:PropTypes.instanceOf(Object),
    newsAndCommentaryActions:PropTypes.func.isRequired,
    savedItemsActions:PropTypes.func.isRequired,
};


GuestUserDashboardComponent.defaultProps = {
    newsData: [],
    savedItemsData:{}
};
export default GuestUserDashboardComponent;