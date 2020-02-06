import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';

const styles = StyleSheet.create({

    currentTriangle: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderLeftWidth: 8,
        borderRightColor: 'transparent',
        borderRightWidth: 8,
        borderTopColor: '#CDDBFC',
        borderTopWidth: 16,
        height: 0,
        width: 0
    },
    lblLine: {
        backgroundColor: '#707070',
        height: scaledHeight(1),
        position: "absolute",
        width: "80%",
    },
    viewFlex:{
         flexDirection: 'column'
    },
    wizardGrid: {
        alignItems: 'center',
        backgroundColor: '#C1C1C1',
        borderRadius: scaledHeight(18),
        height: scaledHeight(36),
        justifyContent: 'center',
        width: scaledHeight(36),

    },
    wizardGridCurrent: {
        alignItems: 'center',
        backgroundColor: '#CDDBFC',
        borderColor: '#9DB6F1',
        borderRadius: scaledHeight(18),
        borderWidth: 1,
        height: scaledHeight(36),
        justifyContent: 'center',
        marginTop: 18,
        width: scaledHeight(36)

    },
    wizardGridVisited: {
        alignItems: 'center',
        backgroundColor: '#A7E993',
        borderRadius: scaledHeight(18),
        height: scaledHeight(36),
        justifyContent: 'center',
        width: scaledHeight(36),

    },

    wizardGridVisitedTxt: {
        color: '#030303',
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    wizardPageCurrentTxt: {
        color: '#000000',
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        textAlign: 'center'
    },

    wizardPageSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: scaledHeight(8),
        width: '100%',

    },
    wizardPageTxt: {
        color: '#000000',
        fontSize: scaledHeight(13),
        textAlign: 'center',
    },
    wizardSection: {
        alignItems: 'flex-start',
        flexGrow: 1,
        justifyContent: 'flex-start',
        width: "100%",

    },
    wizardTitleFlex:{
        alignItems:'center',
        backgroundColor:'#E4EBFE',
        height:scaledHeight(46),
        justifyContent:'center',
        marginBottom:scaledHeight(30),
        marginTop:scaledHeight(10),
        width:'100%'
    },
    wizardTitleTxt: {
        color:'#4D79F6',
        fontSize:scaledHeight(20),
        fontWeight:'bold',
    }

});
 const PageNumber = props => {
    /* ----------- Wizard grid rendering -------------------*/
    const pages = [];
    const {currentPage} = props;
    const {totalCount,pageName} = props;
    let tempViewSkin = styles.wizardGrid;
    let tempTxtSkin = styles.wizardPageTxt;

    for (let i = 1; i <= totalCount; i+=1) {
        if (currentPage === i) {
            tempViewSkin = styles.wizardGridCurrent;
            tempTxtSkin = styles.wizardPageCurrentTxt;
        } else if (i < currentPage) {
            tempViewSkin = styles.wizardGridVisited;
            tempTxtSkin = styles.wizardGridVisitedTxt;

        } else {
            tempViewSkin = styles.wizardGrid;
            tempTxtSkin = styles.wizardPageTxt;
        }
        pages.push(

            <TouchableOpacity
                activeOpacity={0.8}
                accessibilityRole="button"
                key={i}

            >
                <View style={styles.viewFlex}>
                    <View style={tempViewSkin}>
                        <Text style={tempTxtSkin}>
                            {i}
                        </Text>
                    </View>
                    {(currentPage === i) ? <View style={styles.currentTriangle} /> : null}

                </View>

            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.wizardSection}>
            <View style={styles.wizardPageSection}>
                <Text style={styles.lblLine} />

                {pages}
            </View>
            <View style={styles.wizardTitleFlex}>
            <Text style={styles.wizardTitleTxt}>{pageName}</Text>
            </View>
            
        </View>
    );
};

PageNumber.propTypes = {
    currentPage: PropTypes.number,
    totalCount:PropTypes.number,
    pageName:PropTypes.string,
};

PageNumber.defaultProps = {
    currentPage: 1,
    pageName:"",
    totalCount:4,

};


export default PageNumber;
