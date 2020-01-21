import { connect } from "react-redux";
import RegisterSelfComponent from './RegisterSelfComponent';
import { loginActions } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
      // console.log("test",state)
    }
  );

const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterSelfComponent);