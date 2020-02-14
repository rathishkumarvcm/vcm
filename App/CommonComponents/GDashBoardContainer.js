import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, StatusBar, Platform } from 'react-native';
import PropTypes from "prop-types";
import { GIcon } from './GIcon';
import { scaledHeight } from '../Utils/Resolution';
import * as COLORS from "../Constants/ColorConstants";
import profileAvator from '../Images/profile.png';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: COLORS.BACKGROUND_GRAY, flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.WHITE_COLOR,
        borderColor: "transparent",
        borderWidth: 0.1,
        bottom: 0,
        elevation: scaledHeight(3),
        height: '100%',
        marginHorizontal: scaledHeight(35),
        position: 'absolute',
        top: scaledHeight(100),
        width: "87%"
    },
    imageStyle: {
        alignSelf: 'center',
        marginLeft: '2%',
        marginRight: '2%'
    },
    toolBarContainer: {
        alignSelf: 'stretch',
        backgroundColor: COLORS.DARK_BLUE,
        height: scaledHeight(156)
    },
    toolBarContent: {
        // backgroundColor:"pink",
        flexDirection: 'row',
        marginBottom: scaledHeight(20),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(50),
        width: "87%"
    },
    toolbarTitleText: {
        color: COLORS.WHITE_COLOR,
        flex: 2,
        fontSize: scaledHeight(24),
        fontWeight: 'bold',
        marginLeft: '2%',
        marginRight: '2%',
        textAlignVertical: 'center'
    },
    touchableStyle: {
        alignSelf: 'center'
    },
    triangleCorner: {
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderRightWidth: 30,
        borderStyle: 'solid',
        borderTopColor: COLORS.CORNER_GREEN,
        borderTopWidth: 30,
        height: 0,
        width: 0,
    },

});

class GDashBoardContainer extends React.Component {

    navigateToNotifications = () => {
        const { navigation } = this.props;
        navigation.navigate('notificationTabs');
    };

    navigateToDrawer = () => {
        const { navigation } = this.props;
        if (Platform.OS === 'android')
            navigation.openDrawer();
        else
            navigation.navigate("draweriOS");
    }

    render() {
        const { children, title } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.toolBarContainer}>
                    <StatusBar backgroundColor="#194C7D" barStyle="light-content" translucent showHideTransition="fade" />
                    <View style={styles.toolBarContent}>
                        <Text style={styles.toolbarTitleText}>{title}</Text>
                        <TouchableOpacity style={styles.touchableStyle} onPress={this.navigateToNotifications}>
                            <GIcon name="ios-search" type="ionicon" size={30} color={COLORS.WHITE_COLOR} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableStyle} onPress={this.navigateToNotifications}>
                            <GIcon name="ios-notifications-outline" type="ionicon" size={30} color={COLORS.WHITE_COLOR} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableStyle} onPress={this.navigateToDrawer}>
                            <Image style={styles.imageStyle} source={profileAvator} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.triangleCorner} />
                    {children}
                </View>
            </View>
        );
    }
}

GDashBoardContainer.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    children: PropTypes.node, // children: PropTypes.element.isRequired
    title: PropTypes.string
};

GDashBoardContainer.defaultProps = {
    navigation: {},
    children: {},
    title: ""
};

export default GDashBoardContainer;