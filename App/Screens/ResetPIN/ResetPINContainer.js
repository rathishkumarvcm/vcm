import { connect } from "react-redux";
import ResetPINComponent from './ResetPINComponent';
import {loginActions} from "../../Shared/Actions";


const mapStateToProps = (state) => (
  {
    loginData:state.loginData,
    initialState :state.initialAppData
  }
);

const mapDispatchToProps = {
  ...loginActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPINComponent);