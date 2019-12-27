import { connect } from "react-redux";
import addNewIntrestedPartiesComponent from "./AddNewIntrestedPartiesComponent";
import { accOpeningActions, addressFormatActions, manageIntrestedPartiesActions } from '../../Shared/Actions';
/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  manageIntrestedPartiesData: state.manageIntrestedPartiesData,
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
)(addNewIntrestedPartiesComponent);
