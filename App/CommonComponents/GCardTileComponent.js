import React from "react";
import { View, Text, StyleSheet , Image } from "react-native";
import PropTypes from 'prop-types';

import { scaledHeight } from '../Utils/Resolution';

export const styles = StyleSheet.create({
    container:{
        flex:1, 
        flexDirection : 'column',
        borderWidth:2,
        marginTop:'0.1%',
        marginBottom: '5%',
        alignItems:'center'
    },
    wrapper:{
        // flex:0.1,
        marginTop:'1%',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:scaledHeight(20)
    },
    tileContainer:{
        flex:1,
        flexDirection:'row',
        height:scaledHeight(50),
        // width:'90%',
        // borderRightWidth:1,
        // borderLeftWidth:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    titileConatainerB:{
        flex: 1,
        flexDirection:'row',
        height:scaledHeight(50),
        // borderLeftWidth:1,
        // borderRightWidth:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    detailStyle:{
        height:scaledHeight(20),
        fontWeight:'bold'
       //  textAlign:'center'
    },
    addMore:{
            height:scaledHeight(15),
           //  textAlign:'center',
            color:'blue'
        },
    addView : {
        height:scaledHeight(20),
        width:scaledHeight(20),
        backgroundColor:'#06748C',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }
});


export const GCardTileComponent = props => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image style={styles.stretch}
             source={require('../Images/FaceID.png')}
             resizeMode={"contain"}
            />
        </View>
        <View style={styles.tileContainer}>
        <Text style={[styles.detailStyle,props.tileStyles]}>
        {props.title}
        </Text>
        </View>
        <View style={styles.titileConatainerB}>
        <Text style={[styles.detailStyle,props.tileStyles]}>
        {props.details}
        </Text>
        </View>
        <Text style={styles.addMore}>
                {"Add More"} {/* view more */}
        </Text>
    </View>
);

GCardTileComponent.propTypes = {
    tileStyles : PropTypes.instanceOf(Object),
    title : PropTypes.string,
    details : PropTypes.string
};

GCardTileComponent.defaultProps = {

};


export default GCardTileComponent;



