import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import RNSecureKeyStore from 'react-native-secure-key-store';
import PropTypes from "prop-types";

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            memberId: ''
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
    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {

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