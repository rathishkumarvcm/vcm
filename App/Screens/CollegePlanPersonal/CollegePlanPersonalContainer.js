import { connect } from "react-redux";
import CollegePlanPersonalComponent from './CollegePlanPersonalComponent';
import { accOpeningActions, addressFormatActions } from "../../Shared/Actions";


/*----------------------
                                  Redux Methods
                                                             -------------------------- */
const mapStateToProps = (state /* , props */) => (
  {
    accOpeningData: state.accOpeningReducerData,
    initialState: state.initialAppData,
    masterLookupStateData: state.masterLookUpData,
    addressFormatData: state.addressFormatData

  }
);

const mapDispatchToProps = {
  ...accOpeningActions,
  ...addressFormatActions
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollegePlanPersonalComponent);