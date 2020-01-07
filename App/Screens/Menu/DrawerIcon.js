import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
class DrawerIcon extends Component{
    render() {
    return (
        <TouchableOpacity
        style={{
            alignSelf:'center',
            width: 44,
            height: 44,
            marginLeft: 20
        }}
        onPress={()=>{
            this.props.navigation.openDrawer();
        }}>
            <Icon name='menu' size={20} color='black'/>
        </TouchableOpacity>
    )
    };
}
export default withNavigation(DrawerIcon);