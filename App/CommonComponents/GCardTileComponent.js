import React from "react";
import { View, Text, StyleSheet , Image } from "react-native";
import PropTypes from 'prop-types';

import { scaledHeight } from '../Utils/Resolution';

export const styles = StyleSheet.create({
    addMore:{
            color:'blue',           
            height:scaledHeight(15)
        },
    // addView : {
    //     alignItems:'center',
    //     backgroundColor:'#06748C',
    //     borderRadius:5,
    //     height:scaledHeight(20),
    //     justifyContent:'center',
    //     width:scaledHeight(20)
    // },
    container:{
        flex:1, 
        flexDirection : 'column',
        borderWidth:2,
        marginTop:'0.1%',
        marginBottom: '5%',
        alignItems:'center'
    },
    detailStyle:{
        fontWeight:'bold',
        height:scaledHeight(20)       
    },
    tileContainer:{
        flex:1,
        flexDirection:'row',
        height:scaledHeight(50),        
    },
    titileConatainerB:{
        flex: 1,
        flexDirection:'row',
        height:scaledHeight(50),      
    },
    wrapper:{       
        alignItems:'center',
        justifyContent:'center',
        marginBottom:scaledHeight(20),
        marginTop:'1%',
        textAlign:'center'
    }
});


export const GCardTileComponent = props => {

    const {/* tileStyles, */ details,title} = props;
    return(
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image style={styles.stretch}
             source="../Images/FaceID.png"
             resizeMode="contain"
            />
        </View>
        <View style={styles.tileContainer}>
        <Text style={styles.detailStyle}>  { /* [styles.detailStyle,tileStyles] */ }
        {title}
        </Text>
        </View>
        <View style={styles.titileConatainerB}>
        <Text style={styles.detailStyle}>
        {details}
        </Text>
        </View>
        <Text style={styles.addMore}>
                {"Add More"} {/* view more */}
        </Text>
    </View>
);
};

GCardTileComponent.propTypes = {
   // tileStyles : PropTypes.instanceOf(Object),
    title : PropTypes.string,
    details : PropTypes.string
};

GCardTileComponent.defaultProps = {
   // tileStyles:{},
    title:'',
    details:''

};


export default GCardTileComponent;



