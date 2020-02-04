import React from 'react';
import { Text, View, ScrollView, FlatList, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import gblStrings from '../../Constants/GlobalStrings';
import { GIcon, GHeaderComponent, GDropDownComponent, GSwitchComponent, GButtonComponent } from '../../CommonComponents';

const data = [{
    id: 1,
    formId: "XXXXXX101",
    formName: "Lorem Ipsum Form 1",
    formDescription: "Our culture is strong because we find the time to give back to our communities.Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 1",
    isPopular: true

}, {
    id: 2,
    formId: "XXXXXX102",
    formName: "Form 2",
    formDescription: "To read more about John and his team, click here. To submit your own, click here. ",
    categoryName: "Category 2",
    isPopular: false
},
{
    id: 3,
    formId: "XXXXX103",
    formName: "Lorem Ipsum Form 3",
    formDescription: "Our culture is strong because we find the time to give back to our communities.Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 3",
    isPopular: true

},
{
    id: 4,
    formId: "XXXXX104",
    formName: "Form 4",
    formDescription: "Our culture is strong because we find the time to give back to our communities.Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 4",
    isPopular: true

}, {
    id: 5,
    formId: "XXXX105",
    formName: "Form 5",
    formDescription: "To read more about John and his team, click here. To submit your own, click here. ",
    categoryName: "Category 5",
    isPopular: false
},
{
    id: 6,
    formId: "XXXXXX106",
    formName: "Form 6",
    formDescription: "Our culture is strong because we find the time to give back to our communities.Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 6",
    isPopular: true

},
{
    id: 7,
    formId: "XXXX107",
    formName: "Lorem Ipsum Form 7",
    formDescription: "Our culture is strong because we find the time to give back to our communities.Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 7",
    isPopular: false

}, {
    id: 8,
    formId: "XXXXXX108",
    formName: "Lorem Ipsum Form 8",
    formDescription: "To read more about John and his team, click here. To submit your own, click here. ",
    categoryName: "Category 8",
    isPopular: false
},
{
    id: 9,
    formId: "XXXXX109",
    formName: "Lorem Ipsum Form 9",
    formDescription: "To read more about John and his team, click here. To submit your own, click here. Our culture is strong because we find the time to give back to our communities.Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 9",
    isPopular: true

},
];

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

    handleLoadMore = () => (null);

    renderItem = ({ item, index }) => {
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
        const { navigation } = this.props;
        //  const nextBtnstyle = this.state.agreeConditions ? StyleSheet.normalBlackBtn : [StyleSheet.normalBlackBtn, { opacity: .45 }];
        const { isSorted
        } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <View style={styles.container}>
                    <Text>{gblStrings.msrAccessForms.forms}</Text>
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
                        textOnStyle={styles.blackText}
                        textOffStyle={styles.blackText}
                    />
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item._id}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={0.9}
                        ListFooterComponent={
                            <View style={styles.footerContainer} >
                                <Text>Load More</Text>
                            </View >
                        }
                        renderItem={this.renderItem}
                    />

                </View>
            </SafeAreaView>
        );
    }
}

export default AccessFormList;