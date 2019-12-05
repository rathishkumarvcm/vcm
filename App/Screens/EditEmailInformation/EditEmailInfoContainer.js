import { connect } from "react-redux";
import editEmailInfoComponent from './EditEmailInfoComponent';
import {profileSettingsAction} from '../../Shared/Actions';

const mapStateToProps = (state /* , props */) => (
  {
    profileState: state.profileInformationData,
    initialState: state.initialAppData,
  }
);

const mapDispatchToProps = {
  ...profileSettingsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editEmailInfoComponent);