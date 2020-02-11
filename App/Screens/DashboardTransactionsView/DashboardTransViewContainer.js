import { connect } from 'react-redux';
import DashboardTransViewComponent from './DashboardTransViewComponent';
import { dashboardTransViewActions } from "../../Shared/Actions";

/* ----------------------Redux Methods-------------------------- */
const mapStateToProps = (state /* , props */) => ({
    dashboardTransViewData:state.dashboardTransViewData,
});
const mapDispatchToProps = {
  ...dashboardTransViewActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardTransViewComponent);
