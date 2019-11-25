import { connect } from "react-redux";
import RetrieveOnlineIdComponent from './RetrieveOnlineIdComponent';


const mapStateToProps = ( /* , props */) => (
    {
      //loginData: getLogin(state)
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RetrieveOnlineIdComponent);