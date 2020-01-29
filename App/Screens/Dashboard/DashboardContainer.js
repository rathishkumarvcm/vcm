import { connect } from "react-redux";
import DashboardComponent from './DashboardComponent';
import { accOpeningActions, loginActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      dashboardData: state.accOpeningReducerData
    }
  );

const mapDispatchToProps = {
  ...accOpeningActions, ...loginActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardComponent);