import { connect } from "react-redux";
import RMDDashboardComponent from './RMDDashboardComponent';
// import {RmdActions} from "../../Shared/Actions";


const mapStateToProps = (state) => (
  {
    
    rmdReducerData:state.rmdReducerData
  }
);

const mapDispatchToProps = {
 // ...RmdActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RMDDashboardComponent);