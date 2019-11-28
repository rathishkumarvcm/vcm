import { connect } from "react-redux";
import InvestmentPlanInfoComponent from './InvestmentPlanInfoComponent';
import { accOpeningActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      fundDetailsData:state.accOpeningReducerData
    }
  );

const mapDispatchToProps = {
    ...accOpeningActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(InvestmentPlanInfoComponent); 