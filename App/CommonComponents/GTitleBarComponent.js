import React from "react";
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight} from '../Utils/Resolution';
import backArrow from '../Images/backArrow.png';

/* **************************\
  Function: GTitleBarComponent
  Explanation:  
\************************** */

const styles = StyleSheet.create({
   
    arrowIconStyle:{     
         alignSelf:'center',
          marginLeft: '2%',
          marginRight: '2%' 
    },
     toolBarContainer:{ 
         alignSelf:'stretch',
        backgroundColor: '#194C7D', 
        height: scaledHeight(156)
     },
    toolBarContent:{
        flexDirection: 'row',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(50),      
    },
    toolbarTitleText:{
        color: "#FFFFFF",
         fontSize: scaledHeight(24), 
         fontWeight: 'bold', 
         marginLeft: '2%', 
         marginRight: '2%',
         textAlign: 'center' 
    },
    touchableStyle:{
        alignSelf:'center'
    }       
});

const GTitleBarComponent = props => {
    const {toolbarTiltle,backPress}=props;
    return(
        <View style={styles.toolBarContainer}>
            <View style={styles.toolBarContent}>

                <TouchableOpacity style={styles.touchableStyle} onPress={backPress}>
                    <Image style={styles.arrowIconStyle} source={backArrow} />
                </TouchableOpacity>

                <Text style={styles.toolbarTitleText}>
                    {toolbarTiltle}
                </Text>
            </View>
        </View>
    );
};

GTitleBarComponent.propTypes = {  
    toolbarTiltle: PropTypes.string,
    backPress: PropTypes.func   
};

GTitleBarComponent.defaultProps = {
      toolbarTiltle: "",  
    backPress : () => {}
};

export default GTitleBarComponent;