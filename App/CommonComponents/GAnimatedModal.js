import React from 'react';
import {Animated, Easing, Dimensions} from 'react-native';
import PropTypes from "prop-types";

const { height } = Dimensions.get('window');

const styles = {
    container: {
      position: "absolute",
      height: '50%',
      width: '100%',
      bottom: -height, //  initial position of the view. Hide the view at bottom.
      backgroundColor: "#fff",
    }
  };

export default class GAnimatedModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };

        this.yTranslate = new Animated.Value(0);
        this.negativeHeight = -height;
        this.modalMoveY = this.yTranslate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, this.negativeHeight]
      });
      this.translateStyle = { transform: [{ translateY: this.modalMoveY }] }; 
    }

    static getDerivedStateFromProps(props, state){
      // initialize state variable and return. If no changes required for state
      // variable then return empty object. return {}
      console.log("props",props,state);
      return {}; // should return empty object by default
    }
    componentDidUpdate(prevProps, prevState) {
      console.log("prevProps",prevProps,prevState);
        if (this.props.visible) {
          //  animate to show the modal
          this.yTranslate.setValue(0); //  reset the animated value
          Animated.spring(this.yTranslate, {
            toValue: 1,
            duration: 400,
            overshootClamping:true 
          }).start();
        } else {
          //  animate to hide the modal
          Animated.timing(this.yTranslate, {
            toValue: 0,
            duration: 400,
            easing: Easing.linear
          }).start();
        }
      }
      shouldComponentUpdate(nextProps){
        if(this.props.visible==nextProps.visible){
            return false;
        }
        return true;
      }
    render(){
        return (
            <Animated.View style={[styles.container, this.translateStyle,this.props.containerStyle]}>
              {this.props.children}
            </Animated.View>
          );
    }
}

GAnimatedModal.propTypes = {
  visible : PropTypes.bool,
  children: PropTypes.instanceOf(Object)
};

GAnimatedModal.defaultProps = {
 
};