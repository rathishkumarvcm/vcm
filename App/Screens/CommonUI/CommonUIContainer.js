import { connect } from "react-redux";
import CommonUIComponent from './CommonUIComponent';
import { loginActions } from "../../Shared/Actions";


const mapStateToProps = ( /* , props */) => (
    {
    }
  );

const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommonUIComponent);