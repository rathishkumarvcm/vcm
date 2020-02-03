import { connect } from "react-redux";
import RegisterPasswordComponent from './RegisterPasswordComponent';
import { loginActions } from "../../Shared/Actions";

const mapStateToProps = ( /* , props */) => {
  return ({});
};


const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterPasswordComponent);