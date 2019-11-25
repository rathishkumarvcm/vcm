import { connect } from "react-redux";
import OpenAccPageSixComponent from './OpenAccPageSixComponent';
import { accOpeningActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
  {
    accOpeningData: state.accOpeningReducerData,
    initialState: state.initialAppData,
    masterLookupStateData: state.masterLookUpData
  }
);

const mapDispatchToProps = {
  ...accOpeningActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenAccPageSixComponent);