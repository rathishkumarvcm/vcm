import { connect } from "react-redux";
import CurrentPasswordComponent from './CurrentPasswordComponent';
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
  )(CurrentPasswordComponent);