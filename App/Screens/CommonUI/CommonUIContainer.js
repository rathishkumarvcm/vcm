import { connect } from "react-redux";
import CommonUIComponent from './CommonUIComponent';
import { getLogin } from "../../Shared/Reducers";
import { loginActions } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
      loginData: getLogin(state)
    }
  );

const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommonUIComponent);