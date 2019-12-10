import React from "react";
import { View } from 'react-native';
import PropTypes from "prop-types";
import GIcon from './GIcon';


const GRatingStarsComponent = (props) => {
    var stars = [];

    for (let i = 1; i <= 5; i++) {
       let tempcolor = props.unRatedStarColor;
        if (i <= props.rating) {
            tempcolor = props.ratedStarColor;
        }

        stars.push(
            <GIcon
                name="star"
                type="font-awesome"
                size={props.size}
                color={tempcolor}
                key={i}

            />
        );

    }
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            {stars}
        </View>
    );
};
GRatingStarsComponent.propTypes = {
    rating: PropTypes.number,
    ratedStarColor: PropTypes.string,
    unRatedStarColor: PropTypes.string,
    size: PropTypes.number,


};

GRatingStarsComponent.defaultProps = {
    rating: 0,
    ratedStarColor: '#DCDCDC',
    unRatedStarColor: '#393535',
    size: 30,

};

export default GRatingStarsComponent;