import React from 'react';
import { Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, Switch } from 'react-native';
import PropTypes from "prop-types";
import styles from './style';
import gblStrings from '../../Constants/GlobalStrings';
import { GHeaderComponent } from '../../CommonComponents';
import logoImage from '../../Images/FaceID.png';
import * as COLORS from "../../Constants/ColorConstants";

class AccessFormList extends React.Component {

    switchSort = (value) => {
        const { sortByPopular } = this.props;
        sortByPopular(value);
    }

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

    footerComponent = () => {
        const { isMoreDataAvailable } = this.props;
        return (
            <View style={styles.footerContainer}>
                {isMoreDataAvailable ?
                    <ActivityIndicator size="large" color="#00f" /> :
                    <Text style={styles.boldText}>End of Forms</Text>
                }
            </View>
        );
    }

    handleLoadMore = () => {
        const { isMoreDataAvailable, loadForms, incementPageNumber } = this.props;
        if (!isMoreDataAvailable)
            return;
        incementPageNumber();
        loadForms();
    }

    keyExtractor = (item, index) => (`key ${index}`)

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
        const { navigation, forms, isSortByPopular,
            // isPageLoading, pageNumber,
        } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                {/* {isMoreDataAvailable &&
                    <GLoadingSpinner />} */}
                <View style={styles.container}>
                    <View style={styles.columnContainer}>
                        <Text style={styles.boldText}>{gblStrings.msrAccessForms.forms}</Text>
                        <Text style={styles.regularText}>You will need free Adobe reader to view the documents</Text>
                        <View style={styles.rowContainer}>
                            <Text style={styles.blackText}>{gblStrings.msrAccessForms.sortBy}</Text>
                            <Switch
                                // ios_backgroundColor={COLORS.PRIMARY_DARK_COLOR}
                                thumbColor={COLORS.WHITE_COLOR}
                                trackColor={COLORS.PRIMARY_DARK_COLOR}
                                onValueChange={this.switchSort}
                                value={isSortByPopular}
                            />
                            {/* <GSwitchComponent
                                switchOnMethod={this.switchSort(false)}
                                switchOffMethod={this.switchSort(true)}
                                switchOn={isSortByPopular}
                                switchOff={!isSortByPopular}
                                switchOnText={gblStrings.msrAccessForms.all}
                                switchOffText={gblStrings.msrAccessForms.popular}
                                offStyle={styles.offButtonStyle}
                                onStyle={styles.onButtonStyle}
                                offStyleDisabled={styles.offButtonStyleDisable}
                                onStyleDisabled={styles.onButtonStyleDisable}
                                textOnStyle={styles.smallText}
                                textOffStyle={styles.smallText}
                            /> */}
                        </View>
                        <View style={styles.dividerLine} />
                    </View>
                    <FlatList
                        style={styles.listStyle}
                        data={forms}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={this.keyExtractor}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={this.ListFooterComponent}
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
    isSortByPopular: PropTypes.bool,
    isMoreDataAvailable: PropTypes.bool,
    navigation: PropTypes.instanceOf(Object),
    loadForms: PropTypes.instanceOf(Object),
    incementPageNumber: PropTypes.instanceOf(Object),
    sortByPopular: PropTypes.instanceOf(Object)
};

AccessFormList.defaultProps = {
    forms: [],
    isMoreDataAvailable: true,
    isSortByPopular: false,
    navigation: {},
    loadForms: {},
    incementPageNumber: {},
    sortByPopular: {}
};

export default AccessFormList;