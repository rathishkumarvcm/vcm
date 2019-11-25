import { connect } from "react-redux";
import DashboardAccComponent from './DashboardAccComponent';
import { accOpeningActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      dashboardData: state.accOpeningReducerData
    }
  );

const mapDispatchToProps = {
    ...accOpeningActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardAccComponent);