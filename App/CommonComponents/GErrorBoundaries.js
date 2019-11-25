import React from 'react';
import { View, Text,Button } from 'react-native';
import PropTypes from 'prop-types';
    export default class GErrorBoundaries extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              hasError:false
            };
          }
        
          static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            console.log("Error",error);
            return { hasError: true };
          }
        
          componentDidCatch(error, info) {
            // You can also log the error to an error reporting service
            this.setState({hasError: true});
             console.error(error, info);
            
          }
        
          render() {
            if (this.state.hasError) {
              // You can render any custom fallback UI
              return (
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <Text>Something went wrong.</Text>
               <Button title="Error" />
              </View>
              );
            }
        
            return this.props.children; 
          }

    }
    GErrorBoundaries.propTypes = {
      children: PropTypes.instanceOf(Object)
    };
    
    GErrorBoundaries.defaultProps = {
     
    };
    