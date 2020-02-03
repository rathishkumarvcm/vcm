import { connect } from "react-redux";
import RegisterEmailComponent from './RegisterEmailComponent';
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
  )(RegisterEmailComponent);