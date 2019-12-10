import { connect } from "react-redux";
import CompareFundsComponent from './CompareFundsComponent';
import { accOpeningActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
  {
    fundDetailsData: state.accOpeningReducerData   
  }
);

const mapDispatchToProps = {  
  ...accOpeningActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompareFundsComponent);