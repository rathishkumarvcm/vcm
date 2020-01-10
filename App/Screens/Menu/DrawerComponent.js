import React from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { GIcon } from '../../CommonComponents';

class DrawerComponent extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollViewStyle}>
                    <View>
                        <View style={styles.headerContainer}>
                            <Image source={require('../../Images/FaceID.png')} />
                            <View style={styles.columnContainer}>
                                <Text style={styles.heading}>Ragavan</Text>
                                <Text>VCM0006754</Text>
                            </View>

                        </View>
                        <View style={styles.dividerLine} />
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('profileSettings')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}>Personal Information</Text>
                                <GIcon name="chevron-right" type="material" size={25} color="#4D0000" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('editPhoneInformation')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}>Contact Information</Text>
                                <GIcon name="chevron-right" type="material" size={25} color="#4D0000" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('editAddFinancialInfo')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}>Financial Information</Text>
                                <GIcon name="chevron-right" type="material" size={25} color="#4D0000" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('editOccupationInfo')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}>Employee Information</Text>
                                <GIcon name="chevron-right" type="material" size={25} color="#4D0000" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('editMilitaryInfo')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}>Military Information</Text>
                                <GIcon name="chevron-right" type="material" size={25} color="#4D0000" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('editRelationshipInfo')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}>Relationship Information</Text>
                                <GIcon name="chevron-right" type="material" size={25} color="#4D0000" />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

DrawerComponent.propTypes = {
    navigation: PropTypes.object
};
export default DrawerComponent;

