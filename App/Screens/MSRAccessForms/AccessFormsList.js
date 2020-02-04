import React from 'react';
import { Text, View, ScrollView, FlatList, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import gblStrings from '../../Constants/GlobalStrings';
import { GIcon, GHeaderComponent, GDropDownComponent, GSwitchComponent, GButtonComponent } from '../../CommonComponents';

const data = [{
    id: 1,
    formId: "101",
    formName: "Form 1",
    formDescription: "Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 1",
    isPopular: false

}, {
    id: 2,
    formId: "102",
    formName: "Form 2",
    formDescription: "To read more about John and his team, click here. To submit your own, click here. ",
    categoryName: "Category 2",
    isPopular: false
},
{
    id: 3,
    formId: "103",
    formName: "Form 3",
    formDescription: "Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 3",
    isPopular: false

},
{
    id: 4,
    formId: "104",
    formName: "Form 4",
    formDescription: "Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 4",
    isPopular: false

}, {
    id: 5,
    formId: "105",
    formName: "Form 5",
    formDescription: "To read more about John and his team, click here. To submit your own, click here. ",
    categoryName: "Category 5",
    isPopular: false
},
{
    id: 3,
    formId: "106",
    formName: "Form 6",
    formDescription: "Our culture is strong because we find the time to give back to our communities.",
    categoryName: "Category 6",
    isPopular: false

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
                        <Text>{index + 1}</Text>
                        <Text>{item.formName}</Text>
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
                    <Text>Forms</Text>
                    <GSwitchComponent
                        switchOnMethod={this.switchSort}
                        switchOffMethod={this.switchSort}
                        switchOn={!isSorted}
                        switchOff={isSorted}
                        switchOnText={"All"}
                        switchOffText={"Popular"}
                        // offStyle={styles.offButtonStyle}
                        // offStyleDisabled={styles.offButtonStyleDisable}
                        // onStyle={styles.onButtonStyle}
                        // onStyleDisabled={styles.onButtonStyleDisable}
                        textOnStyle={styles.blackText}
                        textOffStyle={styles.blackText}
                    />
                    <FlatList
                        scrollEnabled={false}
                        data={data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item._id}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={0.9}
                        ListFooterComponent={
                            < View style={styles.footerContainer} >
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