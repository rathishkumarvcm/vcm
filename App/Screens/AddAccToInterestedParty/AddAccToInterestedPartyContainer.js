import { connect } from "react-redux";
import AddAccToInterestedPartyComponent from "./AddAccToInterestedPartyComponent";
import { accOpeningActions, addressFormatActions, manageIntrestedPartiesActions } from '../../Shared/Actions';
/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  manageInterestedPartiesData: state.manageInterestedPartiesData,
  accOpeningData: state.accOpeningReducerData,
  masterLookupStateData: state.masterLookUpData,
  stateCityData: state.addressFormatData
});

const mapDispatchToProps = {
  ...accOpeningActions,
  ...manageIntrestedPartiesActions,
  ...addressFormatActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAccToInterestedPartyComponent);
