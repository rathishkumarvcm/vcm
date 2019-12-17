import { connect } from "react-redux";
import editFamilyMemberComponent from './EditFamilyMemberComponent';
import { profileSettingsAction } from "../../Shared/Actions";

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
)(editFamilyMemberComponent);