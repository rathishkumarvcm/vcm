import { connect } from "react-redux";
import DashboardComponent from './DashboardComponent';
import { getLogin } from "../../Shared/Reducers";
import { loginActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      dashboardData: getLogin(state)
    }
  );

const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardComponent);