import { connect } from "react-redux";
import editEmailAddNewComponent from './EditEmailAddNewComponent';

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
)(editEmailAddNewComponent);