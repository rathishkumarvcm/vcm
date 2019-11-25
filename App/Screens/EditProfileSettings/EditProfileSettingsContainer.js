import { connect } from "react-redux";
import EditProfileSettingsComponent from './EditProfileSettingsComponent';

const mapStateToProps = (state /* , props */) => (
  {
    initialstate: state.initialAppData,
    profileSettingsLookup: state.masterLookUpData
  }
);

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileSettingsComponent);