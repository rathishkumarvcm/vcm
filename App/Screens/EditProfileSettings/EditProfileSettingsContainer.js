import { connect } from "react-redux";
import editProfileSettingsComponent from './EditProfileSettingsComponent';
import { profileSettingsAction } from "../../Shared/Actions";

const mapStateToProps = (state /* , props */) => (
  {
    initialstate: state.initialAppData,
    profileSettingsLookup: state.masterLookUpData,
    profileState: state.profileInformationData
  }
);

const mapDispatchToProps = {
  ...profileSettingsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editProfileSettingsComponent);