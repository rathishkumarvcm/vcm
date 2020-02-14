/* eslint-disable import/no-duplicates */
import * as React from "react";
import PropTypes from "prop-types";
// import { GIcon } from '../../CommonComponents/GIcon';
import { Image } from 'react-native';

import inactiveMyVCM from '../../Images/tabMyvcmSelect.png';
import inactivePortfolio from '../../Images/tabSuitcase.png';
import inactiveInvest from '../../Images/tabInvest.png';

import activeMyVCM from '../../Images/tabMyvcmSelect.png';
import activePortfolio from '../../Images/tabSuitcase.png';
import activeInvest from '../../Images/tabInvest.png';

const Tab = ({ tabObj, routeName }) => {
    const { focused } = tabObj; // tintColor,
    let imagePath;
    if (routeName === 'myVCM') {
        imagePath = focused ? activeMyVCM : inactiveMyVCM;
        // iconName = 'home';
    } else if (routeName === 'portfolio') {
        imagePath = focused ? activePortfolio : inactivePortfolio;
        // iconName = 'note';
    } else if (routeName === 'invest') {
        imagePath = focused ? activeInvest : inactiveInvest;
        //  iconName = 'insert-chart';
    } else {
        imagePath = focused ? activeMyVCM : inactiveMyVCM;
        // iconName = 'more';
    }
    return (
        <Image source={imagePath} />
        // <GIcon
        //     name={iconName}
        //     type="material"
        //     size={20}
        //     color={tintColor}
        // />
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