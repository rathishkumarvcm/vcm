import { connect } from "react-redux";
import OpenAccPageFiveComponent from './OpenAccPageFiveComponent';
import { accOpeningActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      accOpeningData: state.accOpeningReducerData,
      initialState: state.initialAppData
    }
  );

const mapDispatchToProps = {
  ...accOpeningActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OpenAccPageFiveComponent);