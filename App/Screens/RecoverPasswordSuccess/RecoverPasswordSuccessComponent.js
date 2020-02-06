import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import {
  GHeaderComponent,
  GFooterComponent
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';
import globalStrings from '../../Constants/GlobalStrings';

class RecoveryPasswordSuccessComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    // set true to isLoading if data for this screen yet to be received and wanted to show loader.
  }

  componentDidMount() {
    const{navigation}=this.props;
    setTimeout(() => {
      navigation.navigate('login');
      }, 5000);
  }

  render() {
    const{navigation}=this.props;
    return (
      <View style={styles.container}>
        <GHeaderComponent register navigation={navigation} />
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.signInView}>
            <Text style={styles.retrievePasswordText}>
              {globalStrings.recoverPassword.password_suceess_head}
            </Text>



            <Text style={styles.passwordSuccessTitle}>
              {
                globalStrings.recoverPassword.password_success_title
              }
            </Text>
            <Text style={styles.passwordSuccessTitle}>{globalStrings.recoverPassword.password_success_msg1}</Text>
            <Text style={styles.passwordSuccessMessage}>{globalStrings.recoverPassword.password_success_msg2}</Text>
            <View style={styles.lineBorder} />
            <Text style={styles.passwordSuccessMessage}>{globalStrings.recoverPassword.password_success_footer1}</Text>

            <Text style={styles.footerStyle}>
              {
                globalStrings.recoverPassword.password_success_footer2
              }
            </Text>
          </View>

          
        </ScrollView>
        <GFooterComponent />
      </View>
    );
  }
}

RecoveryPasswordSuccessComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
};

RecoveryPasswordSuccessComponent.defaultProps = {
  navigation:{}
};

export default RecoveryPasswordSuccessComponent;
