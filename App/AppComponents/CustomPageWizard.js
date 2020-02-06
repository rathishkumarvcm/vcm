import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';


export const styles = StyleSheet.create({
    
    lblLine: {
        backgroundColor: '#707070',       
        height: scaledHeight(1),
        position:"absolute",       
        width:"90%",
    },
    otplblLine: {
        backgroundColor: '#707070',    
        height: scaledHeight(1),
        position:"absolute",     
        width:"80%",
    },
    wizardGrid: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        height: scaledHeight(24),
        justifyContent: 'center',
        width: scaledHeight(24),

    },
    wizardGridCurrent: {
        alignItems: 'center',
        backgroundColor: '#CDDBFC',
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        height: scaledHeight(32),
        justifyContent: 'center',
        width: scaledHeight(32),

    },
    wizardGridVisited: {
        alignItems: 'center',
        backgroundColor: '#58D460',
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        height: scaledHeight(24),
        justifyContent: 'center',
        width: scaledHeight(24),

    },
    wizardGridVisitedTxt: {
        color: '#535353',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },

    wizardPageCurrentTxt: {
        color: '#535353',
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    wizardPageSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:scaledHeight(41),     
       width: '100%',

    },

    wizardPageTxt: {
        color: '#535353',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },
    wizardSection: {
        alignItems: 'flex-start',
        flexGrow: 1,
        justifyContent: 'flex-start',
        width: "100%",

    },
    wizardTitleTxt: {
        color: '#535353',    
        fontSize: scaledHeight(20),   
        fontWeight: 'bold',
        lineHeight: 22,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(34)
    }

});




const CustomPageWizard = props => 
{
     /* ----------- Wizard grid rendering -------------------*/
     const pages = [];
     const {currentPage,lastPage,pageName} = props;
     let totalCount;
    if(lastPage){
         totalCount = 4;
    }
    else{
         totalCount = 6;
    }
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
                 <View style={tempViewSkin}>
                     <Text style={tempTxtSkin}>
                         {i}
                     </Text>
                 </View>
             </TouchableOpacity>
         );
     }
    return (
        <View style={styles.wizardSection}>
            <View style={styles.wizardPageSection}>
            <Text style={lastPage ? styles.otplblLine :styles.lblLine} />

                          {pages}
            </View>
            <Text style={styles.wizardTitleTxt}>
                {pageName}
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