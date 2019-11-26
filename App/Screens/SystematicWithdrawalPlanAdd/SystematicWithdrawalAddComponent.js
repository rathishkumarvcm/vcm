import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import {
  GHeaderComponent,
  GFooterSettingsComponent,
  GButtonComponent,
  GInputComponent,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';

import * as regEx from '../../Constants/RegexConstants';

class SystematicWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
    this.state = {
    };
}

    render() 
    {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation}/>
                <ScrollView style={{ flex: 0.85 }}>
                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
  };
  
  SystematicWithdrawalComponent.defaultProps = {
  
  };
  
  export default SystematicWithdrawalComponent;