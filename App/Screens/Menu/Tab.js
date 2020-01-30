import * as React from "react";
import { Animated, TouchableOpacity } from "react-native";
import { GIcon } from '../../CommonComponents/GIcon';

const Tab = ({ focusAnim, title, onPress }) => {
    let iconName;
    if (title === 'myVCM') {
        iconName = 'home';
    } else if (title === 'portfolio') {
        iconName = 'note';
    } else if (title === 'invest') {
        iconName = 'insert-chart';
    }
    else if (title === 'learn') {
        iconName = 'library-books';
    } else {
        iconName = 'more';
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Animated.View
                style={{
                    padding: 10,
                    flexDirection: 'column',
                    borderRadius: 10,
                    // backgroundColor: focusAnim.interpolate({
                    //     inputRange: [0, 1],
                    //     outputRange: ["transparent", "tomato"]
                    // })
                }}
            >
                <GIcon
                    name={iconName}
                    type="material"
                    size={20}
                    color={"black"}
                />
                <Animated.Text
                    style={{
                        // color: focusAnim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: ["#444", "#fff"]
                        // })
                    }}
                >{title}</Animated.Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

export default Tab;