import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GTitleBarComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';

class RetrievePINInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isCustomer: true,           
        };
    }

    navigationGoBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <GTitleBarComponent
                    toolbarTiltle={globalString.retrievePINInfo.title}
                    backPress={this.navigationGoBack}
                />
                <View style={styles.layoutContainer}>
                    <View style={styles.cornerTriangle} />
                    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollStyle}>

                        <View style={styles.contentContainer}>

                            <View style={styles.retrievePINDetailsContainer}>

                                <Text style={styles.createNewPINText}>
                                    {globalString.retrievePINInfo.createNewPIN}
                                </Text>
                                <Text style={styles.retrievePINDescText}>
                                    Lorem Ipsum
                                </Text>

                                <Text style={styles.retrievePINDescContentText}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into typesetting. It was popularised in the 1960s with the release of Letraset sheets containing Lorem passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>

                                <Text style={styles.retrievePINDescText}>
                                    Lorem Ipsum Lorem Ipsum
                                </Text>

                                <Text style={styles.retrievePINDescContentText}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially centuries, but also the leap into centuries, but also the leap into centuries, but also the leap into centuries, but unchanged. It was popularised in the 1960s with the release Letraset sheets containing Lorem passages, and more recently with desktop publishing software like PageMaker including versions of Printer took a galley of type specimen book.
                                </Text>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

RetrievePINInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

RetrievePINInfoComponent.defaultProps = {
    navigation: {}
};

export default RetrievePINInfoComponent;