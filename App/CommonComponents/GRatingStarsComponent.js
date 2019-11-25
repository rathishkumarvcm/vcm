import React from "react";
import { View } from 'react-native';
import PropTypes from "prop-types";
import GIcon from './GIcon';


const GRatingStarsComponent = (props) => {
    var stars = [];
    var tempcolor = props.unRatedStarColor;

    for (let i = 1; i <= 5; i++) {
        tempcolor = props.unRatedStarColor;
        if (i <= props.rating) {
            tempcolor = props.ratedStarColor;
        }

        stars.push(
            <GIcon
                name="star"
                type="font-awesome"
                size={30}
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
    unRatedStarColor: PropTypes.string

};

GRatingStarsComponent.defaultProps = {
    rating: 0,
    ratedStarColor: '#DCDCDC',
    unRatedStarColor: '#393535'
};

export default GRatingStarsComponent;