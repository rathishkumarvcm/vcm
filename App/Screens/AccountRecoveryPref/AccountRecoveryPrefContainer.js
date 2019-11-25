import { connect } from "react-redux";
import AccountRecoveryPrefComponent from './AccountRecoveryPrefComponent';
import {loginActions} from '../../Shared/Actions';


const mapStateToProps = (state) => (
  {
    initialState :state.initialAppData
  }
);

const mapDispatchToProps = {
  ...loginActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccountRecoveryPrefComponent);