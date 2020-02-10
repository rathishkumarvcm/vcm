import Collapsible from 'react-native-collapsible';
import React from "react";
import { View, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";


export default class GCollapseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           // isCollapsed: false,
        };
    }

    render() {
        const {onPressAction,headerView,collapsedState,collapseView} = this.props;
        return (
            <>
                <TouchableOpacity onPress={onPressAction}>
                    <View>{headerView}</View>
                </TouchableOpacity>

                <Collapsible collapsed={collapsedState}>
                    <View>{collapseView}</View>
                </Collapsible>
            </>
        );
    }
}

GCollapseComponent.propTypes = {
    collapseView: PropTypes.instanceOf(Object),
    headerView: PropTypes.instanceOf(Object),
    collapsedState: PropTypes.bool.isRequired,
    onPressAction: PropTypes.func.isRequired,
};

GCollapseComponent.defaultProps = { 
    collapseView: {},
    headerView: {}, 
    collapsedState: false      
};


