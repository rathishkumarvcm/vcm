import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { scaledHeight } from '../Utils/Resolution';
import PropTypes from "prop-types";

const styles = StyleSheet.create({

    wizardSection: {
        width: "100%",
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    wizardPageSection: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: scaledHeight(8),

    },
    wizardGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(36),
        height: scaledHeight(36),
        borderRadius: scaledHeight(18),
        backgroundColor: '#C1C1C1',

    },
    wizardPageTxt: {
        fontSize: scaledHeight(13),
        color: '#000000',
        textAlign: 'center',
    },
    wizardGridVisited: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(36),
        height: scaledHeight(36),
        borderRadius: scaledHeight(18),
        backgroundColor: '#A7E993',

    },
    wizardGridVisitedTxt: {
        fontSize: scaledHeight(15),
        color: '#030303',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    wizardGridCurrent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(36),
        height: scaledHeight(36),
        borderRadius: scaledHeight(18),
        borderColor: '#9DB6F1',
        borderWidth: 1,
        backgroundColor: '#CDDBFC',
        marginTop: 18

    },
    wizardPageCurrentTxt: {
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center'
    },

    wizardTitleTxt: {
        color:'#4D79F6',
        fontSize:scaledHeight(20),
        fontWeight:'bold',
    },
    wizardTitleFlex:{
        backgroundColor:'#E4EBFE',
        height:scaledHeight(46),
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginBottom:scaledHeight(30),
        marginTop:scaledHeight(10)
    },
    lblLine: {
        width: "80%",
        height: scaledHeight(1),
        backgroundColor: '#707070',
        position: "absolute",
    },
    currentTriangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderTopWidth: 16,
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#CDDBFC',
        alignSelf: 'center'
    }

});
 const PageNumber = props => {
    /*----------- Wizard grid rendering -------------------*/
    var pages = [];
    let currentPage = props.currentPage;
    let totalCount = props.totalCount;
    var tempViewSkin = styles.wizardGrid;
    var tempTxtSkin = styles.wizardPageTxt;

    for (let i = 1; i <= totalCount; i++) {
        if (currentPage == i) {
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
                accessibilityRole={'button'}
                key={i}

            >
                <View style={{ flexDirection: 'column' }}>
                    <View style={tempViewSkin} >
                        <Text style={tempTxtSkin}>
                            {i}
                        </Text>
                    </View>
                    {(currentPage == i) ? <View style={styles.currentTriangle} /> : null}

                </View>

            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.wizardSection}>
            <View style={styles.wizardPageSection} >
                <Text style={styles.lblLine} />

                {pages}
            </View>
            <View style={styles.wizardTitleFlex}>
            <Text style={styles.wizardTitleTxt}>{props.pageName}</Text>
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
