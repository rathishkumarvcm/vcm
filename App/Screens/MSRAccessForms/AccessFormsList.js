import React from 'react';
import { Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import styles from './style';
import gblStrings from '../../Constants/GlobalStrings';
import { GHeaderComponent, GSwitchComponent, GLoadingSpinner } from '../../CommonComponents';
import { msrAccessFormActions } from '../../Shared/Actions';
import logoImage from '../../Images/FaceID.png';

class AccessFormList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSorted: false
        };
    }

    switchSort = () => this.setState(prevState => ({
        isSorted: !prevState.isSorted
    }));

    emptyList = () => {
        return (
            <View style={styles.emptyContainer}>
                <View style={styles.iconContainer}>
                    <Image source={logoImage} />
                </View>
                <View style={styles.blueBoldText}>
                    <Text style={styles.text}>Not found</Text>
                </View>
            </View>
        );
    }

    handleLoadMore = () => {
        const { isMoreDataAvailable, loadForms, pageNumber, incementPageNumber } = this.props;
        if (!isMoreDataAvailable)
            return;
        incementPageNumber();
        loadForms();
    }


    renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity underlayColor="rgba(0,0,0,0.3)">
                    <View style={styles.cardContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.boldText}>Form ID</Text>
                            {(item.isPopular) &&
                                <Text style={styles.popularText}>Popular</Text>
                            }
                        </View>
                        <Text style={styles.regularText}>{item.formId}</Text>
                        <Text style={styles.boldText}>Form Name</Text>
                        <Text style={styles.blueBoldText}>{item.formName}</Text>
                        <Text style={styles.regularText}>{item.formDescription}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const { navigation, isMoreDataAvailable, isPageLoading, pageNumber, forms } = this.props;
        //  const nextBtnstyle = this.state.agreeConditions ? StyleSheet.normalBlackBtn : [StyleSheet.normalBlackBtn, { opacity: .45 }];
        const { isSorted
        } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                {/* {isMoreDataAvailable &&
                    <GLoadingSpinner />} */}
                <View style={styles.container}>
                    <Text style={styles.boldText}>{gblStrings.msrAccessForms.forms}</Text>
                    <Text style={styles.regularText}>You will need free Adobe reader to view the documents</Text>
                    <View style={styles.rowContainer}>
                        <Text style={styles.blackText}>{gblStrings.msrAccessForms.sortBy}</Text>
                        <GSwitchComponent
                            switchOnMethod={this.switchSort}
                            switchOffMethod={this.switchSort}
                            switchOn={!isSorted}
                            switchOff={isSorted}
                            switchOnText={gblStrings.msrAccessForms.all}
                            switchOffText={gblStrings.msrAccessForms.popular}
                            // offStyle={styles.offButtonStyle}
                            // offStyleDisabled={styles.offButtonStyleDisable}
                            // onStyle={styles.onButtonStyle}
                            // onStyleDisabled={styles.onButtonStyleDisable}
                            textOnStyle={styles.smallText}
                            textOffStyle={styles.smallText}
                        />
                    </View>
                    <View style={styles.dividerLine} />
                    <FlatList
                        style={{ height: "80%" }}
                        data={forms}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={
                            <View style={styles.footerContainer} >
                                {isMoreDataAvailable &&
                                    <ActivityIndicator size="large" color="#00f" />
                                }
                            </View>
                        }
                        ListEmptyComponent={this.emptyList}
                        renderItem={this.renderItem}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

AccessFormList.propTypes = {
    forms: PropTypes.arrayOf,
    isPageLoading: PropTypes.bool,
    isMoreDataAvailable: PropTypes.bool,
    loadForms: PropTypes.instanceOf(Object),
    incementPageNumber: PropTypes.instanceOf(Object),
};

AccessFormList.defaultProps = {
    forms: [],
    isPageLoading: true,
    isMoreDataAvailable: true,
    loadForms: {},
    incementPageNumber: {}
};

const mapStateToProps = state => {
    return state.msrAccessFormsData;
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    dispatch,
    ...msrAccessFormActions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccessFormList);