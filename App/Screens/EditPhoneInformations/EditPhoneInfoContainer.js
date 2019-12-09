import { connect } from "react-redux";
import editPhoneInfoComponent from './EditPhoneInfoComponent';
import {profileSettingsAction} from '../../Shared/Actions';

const mapStateToProps = (state /* , props */) => (
  {
    profileState: state.profileInformationData
  }
);

const mapDispatchToProps = {
  ...profileSettingsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editPhoneInfoComponent);