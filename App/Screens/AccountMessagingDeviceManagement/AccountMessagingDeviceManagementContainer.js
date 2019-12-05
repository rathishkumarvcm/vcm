import { connect } from 'react-redux';
import AccountMessagingDeviceManagementComponent from './AccountMessagingDeviceManagementComponent';
import { accMessagingDeviceActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  accMessageDeviceinitialState: state.accMessagingDeviceData,
});

const mapDispatchToProps = {
  ...accMessagingDeviceActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountMessagingDeviceManagementComponent);
