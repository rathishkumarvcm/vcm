import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { CustomDropDown, CustomCheckBox ,PageNumber} from '../../AppComponents';
import PropTypes from 'prop-types';

class LiquidationPageOneComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    navigateLiquidationPageOne = () => this.props.navigation.navigate('LiquidationPageOne');
    navigateLiquidationPageTwo = () => this.props.navigation.navigate('LiquidationPageTwo');
    navigateLiquidationPageThree = () => this.props.navigation.navigate('LiquidationPageThree');

    render() {
        let currentPage = 1;
        let pageName = '1 - Account Selection';
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity onPress={this.goBack}>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>

                   <PageNumber currentPage={currentPage} pageName = {pageName} />
                    
                    <View style={styles.fullLine} />
                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>
                    <GFooterComponent />
                </ScrollView>


            </View>

        );
    }
}


LiquidationPageOneComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

LiquidationPageOneComponent.defaultProps = {

};
export default LiquidationPageOneComponent;