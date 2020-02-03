import { connect } from "react-redux";
import RegisterAddressComponent from './RegisterAddressComponent';
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
  )(RegisterAddressComponent);