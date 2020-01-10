import React, { Component } from 'react';
import { Text, View, ScrollView, Modal } from 'react-native';
import { styles } from './styles';
import { GButtonComponent} from '../../CommonComponents';

class TabMoreComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            modalVisible: true
        };
    }

    render() {
        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center' }}>
                <ScrollView style={{ flex: 1 }}>
                    <Modal
                        animationType="slide"
                        backdropOpacity={.5}
                        transparent
                        visible={this.state.modalVisible}
                        onRequestClose={!this.state.modalVisible}
                    >
                        <View style={{
                            flex: .5, flexDirection: 'column',
                            marginHorizontal: 20, marginVertical: 50
                        }}>
                            <Text>More Optionss</Text>
                            <GButtonComponent buttonText="More"
                                buttonStyle={styles.buttonGoActionStyle} />
                            <GButtonComponent buttonText="Close"
                                onPress={() => {
                                    this.setState({ modalVisible: false })
                                    this.props.navigation.goBack()
                                }}
                                buttonStyle={styles.buttonCancelActionStyle} />
                        </View>
                    </Modal>

                </ScrollView>
            </View>

        );
    }
}
export default TabMoreComponent;
