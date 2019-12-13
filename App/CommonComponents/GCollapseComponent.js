import Collapsible from 'react-native-collapsible';
import React from "react";
import { View, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";


export default class GCollapseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false,
        };
    }

    render() {
        return (
            <>
                <TouchableOpacity onPress={this.props.onPressAction}>
                    <View>{this.props.headerView}</View>
                </TouchableOpacity>

                <Collapsible collapsed={this.props.collapsedState}>
                    <View>{this.props.collapseView}</View>
                </Collapsible>
            </>
        );
    }
}

GCollapseComponent.propTypes = {
    collapseView: PropTypes.View,
    headerView: PropTypes.View,
    collapsedState: PropTypes.bool.isRequired,
    onPressAction: PropTypes.func.isRequired,
};

GCollapseComponent.defaultProps = {
    collapsedState: false,
};


