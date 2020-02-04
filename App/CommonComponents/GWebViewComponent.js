import React from "react";
import PropTypes from "prop-types";
import { WebView } from 'react-native-webview';


export const GWebViewComponent = (props) => {
    const {source} = props;
    return(
    <WebView
            source={{ uri: source.uri }}
            //  injectedJavaScript={props.injectedJavaScript}
    /> 
);
};

GWebViewComponent.propTypes = {
    uri : PropTypes.string,
    source : PropTypes.instanceOf(Object).isRequired
};

GWebViewComponent.defaultProps = {
   uri : ''
};

export default GWebViewComponent;