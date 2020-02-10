import React from "react";
import PropTypes from "prop-types";
import { WebView } from 'react-native-webview';


export const GWebViewComponent = (props) => {
    const {link} = props;
    return(
    <WebView
            source={link}
    /> 
);
};

GWebViewComponent.propTypes = {
    link : PropTypes.instanceOf(Object),
};

GWebViewComponent.defaultProps = {
    link: {uri: ''}
};

export default GWebViewComponent;