import { connect } from "react-redux";
import CurrentPINComponent from './CurrentPINComponent';
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
  )(CurrentPINComponent);