import { connect } from "react-redux";
import RecoverTempComponent from './RecoverTempComponent';



const mapStateToProps = (state /* , props */) => (
    {
      initialState :state.initialAppData
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecoverTempComponent);