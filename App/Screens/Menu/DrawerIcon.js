import React, { Component } from 'react';
import {
    Platform,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from "react-native-gesture-handler";
import { GIcon } from '../../CommonComponents';

class DrawerIcon extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                    alignItems: 'flex-end', justifyContent: 'center',
                    marginEnd: 10
                }}
                onPress={() => {
                    if (Platform.OS === 'android')
                        this.props.navigation.openDrawer();
                    else
                        this.props.navigation.navigate("draweriOS");
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
        )
    };
}
export default withNavigation(DrawerIcon);