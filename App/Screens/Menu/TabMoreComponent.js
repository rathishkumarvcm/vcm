import React, { Component } from 'react';
import { Text, View, ScrollView, Modal } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GButtonComponent} from '../../CommonComponents';

class TabMoreComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            modalVisible: true
        };
    }

    closeButton = () => {
        const {navigation}=this.props;
        this.setState({ modalVisible: false });
        navigation.goBack();
    }

    render() {
        const {modalVisible}=this.state;
       
        return (
            <View style={styles.tabMoreContainer}>
                    <Modal
                        animationType="slide"
                        backdropOpacity={.5}
                        transparent
                        presentationStyle="fullScreen"
                        visible={modalVisible}
                        onRequestClose={!modalVisible}
                    >
                        <View style={styles.modalViewStyle}>
                            <Text>More Optionss</Text>
                            <GButtonComponent buttonText="More"
                                buttonStyle={styles.buttonGoActionStyle} />
                            <GButtonComponent buttonText="Close"
                                onPress={this.closeButton}
                                buttonStyle={styles.buttonCancelActionStyle} />
                        </View>
                        <View style={styles.dividerLine}/>
                        <GButtonComponent buttonText="Logout"
                                onPress={this.closeButton}
                                buttonStyle={styles.buttonCancelActionStyle} />
                    </Modal>
            </View>

        );
    }
}

TabMoreComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
};
TabMoreComponent.defaultProps={
navigation:{}
};
export default TabMoreComponent;
