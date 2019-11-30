import { connect } from "react-redux";
import ProfileSettingsComponent from './ProfileSettingsComponent';
import {profileSettingsAction} from '../../Shared/Actions';

const mapStateToProps = (state /* , props */) => (
  {
    initialState: state.initialAppData,
    profileState: state.profileInformationData
  }
);

const mapDispatchToProps = {
  ...profileSettingsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSettingsComponent);