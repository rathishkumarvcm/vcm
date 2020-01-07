import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { scaledHeight } from '../Utils/Resolution';
import PropTypes from "prop-types";


export const styles = StyleSheet.create({
    
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
       //  marginVertical: scaledHeight(25)
       marginTop:scaledHeight(41),

    },
    wizardGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(24),
        height: scaledHeight(24),
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',

    },
    wizardPageTxt: {
        fontSize: scaledHeight(15),
        color: '#535353',
        textAlign: 'center'
    },
    wizardGridVisited: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(24),
        height: scaledHeight(24),
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        backgroundColor: '#58D460',

    },
    wizardGridVisitedTxt: {
        fontSize: scaledHeight(15),
        color: '#535353',
        textAlign: 'center'
    },

    wizardGridCurrent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(32),
        height: scaledHeight(32),
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        backgroundColor: '#CDDBFC',

    },
    wizardPageCurrentTxt: {
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        color: '#535353',
        textAlign: 'center'
    },

    wizardTitleTxt: {
        fontSize: scaledHeight(20),
      //   fontFamily:'Roboto',
        marginHorizontal: scaledHeight(12),
       //  marginVertical: scaledHeight(5),
        marginTop: scaledHeight(34),
        fontWeight: 'bold',
        color: '#535353',
        lineHeight: 22
    },
    lblLine: {
        width:"90%",
       //  flexGrow: 1,
       //  marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        // opacity: .25,
        position:"absolute",
    },
    otplblLine: {
        width:"80%",
       //  flexGrow: 1,
       //  marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        // opacity: .25,
        position:"absolute",
    }

});




const CustomPageWizard = props => 
{
     /*----------- Wizard grid rendering -------------------*/
     var pages = [];
     let currentPage = props.currentPage;
     let totalCount;
    if(props.lastPage){
         totalCount = 4;
    }
    else{
         totalCount = 6;
    }
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
                 <View style={tempViewSkin} >
                     <Text style={tempTxtSkin}>
                         {i}
                     </Text>
                 </View>
             </TouchableOpacity>
         );
     }
    return (
        <View style={styles.wizardSection}>
            <View style={styles.wizardPageSection} >
            <Text style={props.lastPage ? styles.otplblLine :styles.lblLine} />

                          {pages}
            </View>
            <Text style={styles.wizardTitleTxt}>
                {props.pageName}
            </Text>
        </View>
    );
};
CustomPageWizard.propTypes = {
    currentPage: PropTypes.number,
    pageName:PropTypes.string,
    lastPage:PropTypes.bool
};

CustomPageWizard.defaultProps = {
    currentPage: 1,
    pageName:"",
    lastPage:false

};


export default CustomPageWizard;