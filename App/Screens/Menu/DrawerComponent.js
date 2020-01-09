import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer'
import PropTypes from 'prop-types';
import {styles} from './styles';

class DrawerComponent extends React.Component {
    // Detail Screen to show from any Open detail button
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 ,width:"100%"}}>
                    <View>
                        <View style={styles.headerContainer}>
                            <Image source={require('../../Images/FaceID.png')} />
                            <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
                                <Text style={styles.heading} >Ragavan</Text>
                                <Text >VCM0006754</Text>
                            </View>

                        </View>
                        <View style={{height:1,backgroundColor:'lightgray',marginHorizontal:15}}/>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('Home')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}  >Personal Information</Text>
                                <Icon name='chevron-right' size={25} color='#4D0000' />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('Home')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName} >Contact Information</Text>
                                <Icon name='chevron-right' size={25} color='#4D0000' />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('Home')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName} >Financial Information</Text>
                                <Icon name='chevron-right' size={25} color='#4D0000' />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('Home')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}  >Employee Information</Text>
                                <Icon name='chevron-right' size={25} color='#4D0000' />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('editMilitaryInfo')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName}  >Military Information</Text>
                                <Icon name='chevron-right' size={25} color='#4D0000' />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.navigateToScreen('editRelationshipInfo')}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.menuIcon} source={require('../../Images/onlinemethod1.png')} />
                                <Text style={styles.menuName} >Relationship Information</Text>
                                <Icon name='chevron-right' size={25} color='#4D0000' />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

DrawerComponent.propTypes = {
    navigation: PropTypes.object
};
export default DrawerComponent;
