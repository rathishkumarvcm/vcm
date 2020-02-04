import * as React from "react";
import PropTypes from "prop-types";
import { GIcon } from '../../CommonComponents/GIcon';

const Tab = ({ tabObj, routeName }) => {
    const { tintColor } = tabObj;
    let iconName;
    if (routeName === 'myVCM') {
        iconName = 'home';
    } else if (routeName === 'portfolio') {
        iconName = 'note';
    } else if (routeName === 'invest') {
        iconName = 'insert-chart';
    }
    else if (routeName === 'learn') {
        iconName = 'library-books';
    } else {
        iconName = 'more';
    }
    return (
        <GIcon
            name={iconName}
            type="material"
            size={20}
            color={tintColor}
        />
    );

};
Tab.propTypes = {
    tabObj: PropTypes.instanceOf(Object),
    routeName: PropTypes.string,
};

Tab.defaultProps = {
    tabObj: {},
    routeName: "",
};

export default Tab;