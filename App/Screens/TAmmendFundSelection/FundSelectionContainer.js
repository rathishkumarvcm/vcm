import { connect } from "react-redux";
import FundSelectionComponent from './FundSelectionComponent';
import {loginActions,ammendActions} from "../../Shared/Actions";


const mapStateToProps = (state) => (
  {
    loginState: state.loginData,
    initialState :state.initialAppData,
    amendReducerData:state.amendReducerData
  }
);

const mapDispatchToProps = {
  ...loginActions,
  ...ammendActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FundSelectionComponent);