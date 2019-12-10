import { connect } from "react-redux";
import TAmmendComponent from './TAmmendComponent';
import {loginActions} from "../../Shared/Actions";


const mapStateToProps = (state) => (
  {
    loginState: state.loginData,
    initialState :state.initialAppData
  }
);

const mapDispatchToProps = {
  ...loginActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TAmmendComponent);