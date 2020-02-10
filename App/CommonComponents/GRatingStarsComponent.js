import React from "react";
import { View,StyleSheet } from 'react-native';
import PropTypes from "prop-types";
import Gicon from './GIcon';


const styles = StyleSheet.create({
    viewContainer:{
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'flex-start'
     }
});

const GRatingStarsComponent = (props) => {
    const stars = [];

    for (let i = 1; i <= 5; i+=1) {
       let tempcolor = props.unRatedStarColor;
        if (i <= props.rating) {
            tempcolor = props.ratedStarColor;
        }

        stars.push(
            <Gicon
                name="star"
                type="font-awesome"
                size={props.size}
                color={tempcolor}
                key={i}

            />
        );

    }
    return (
        <View style={styles.viewContainer}>
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