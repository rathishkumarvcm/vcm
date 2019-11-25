import { connect } from "react-redux";
import OpenAccPageOneComponent from './OpenAccPageOneComponent';
import { accOpeningActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      accOpeningData: state.accOpeningReducerData

    }
  );

const mapDispatchToProps = {
    ...accOpeningActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OpenAccPageOneComponent);