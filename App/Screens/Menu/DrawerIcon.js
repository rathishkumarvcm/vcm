import React, { Component } from 'react';
import {
    Platform,
} from 'react-native';
import PropTypes from "prop-types";
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from "react-native-gesture-handler";
import { GIcon } from '../../CommonComponents';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'flex-end', justifyContent: 'center',
        marginEnd: 10
    }
});

// class DrawerIcon extends Component {
const DrawerIcon = ({ navigation }) =>
    (
        <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
                if (Platform.OS === 'android')
                    navigation.openDrawer();
                else
                    navigation.navigate("draweriOS");
            }}>
            {(Platform.OS === 'android') ?
                <GIcon
                    name="menu"
                    type="material"
                    size={40}
                    color="black"
                /> : <GIcon
                    name="account-circle"
                    type="material"
                    size={40}
                    color="black"
                />}
        </TouchableOpacity>
    );
DrawerIcon.propTypes = {
    navigation: PropTypes.node,
};

DrawerIcon.defaultProps = {
    navigation: null,
};
export default withNavigation(DrawerIcon);