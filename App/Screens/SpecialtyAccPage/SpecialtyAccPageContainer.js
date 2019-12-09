import { connect } from "react-redux";
import SpecialtyAccPageComponent from './SpecialtyAccPageComponent';
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
  )(SpecialtyAccPageComponent);