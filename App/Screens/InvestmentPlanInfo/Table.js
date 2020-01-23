import React from 'react';
import { Text, View} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

const Table = (props) => {   
    AppUtils.debugLog(`TableRowItem::${JSON.stringify(props)}`);

    const { 
        tableName,
        YTD,
        oneYear,
        fiveYear,
        tenYear,
        sinceInceptionYear,
        sinceInception
    } = props;

    return (
        <View style={styles.summarySectionGrp}>
            <Text style={styles.tableHeading}>
                {tableName}
            </Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.YTD}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {YTD}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.rowSep} />
                </View>

                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.oneYear}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {oneYear}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.rowSep} />
                </View>


                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.fiveYear}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {fiveYear}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.rowSep} />
                </View>


                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.tenYear}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {tenYear}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.rowSep} />
                </View>



                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.sinceInception}
                            </Text>
                            <Text style={styles.lblSubNameTxt}>
                                {sinceInceptionYear}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {sinceInception}
                            </Text>
                        </View>
                    </View>
                </View>


            </View>
        </View>
    );

};

Table.propTypes = {   
    tableName: PropTypes.string,
    YTD: PropTypes.string,
    oneYear: PropTypes.string,
    fiveYear: PropTypes.string,
    tenYear: PropTypes.string,
    sinceInceptionYear: PropTypes.string,
    sinceInception: PropTypes.string,

};

Table.defaultProps = {    
    tableName: "",
    YTD: "",
    sinceInception: "",
    oneYear: "",
    fiveYear: "",
    tenYear: "",
    sinceInceptionYear: "",
};

export default Table;