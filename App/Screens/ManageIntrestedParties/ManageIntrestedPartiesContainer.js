import { connect } from "react-redux";
import manageIntrestedPartiesComponent from "./ManageIntrestedPartiesComponent";
import { accOpeningActions, addressFormatActions, manageIntrestedPartiesActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  accOpeningData: state.accOpeningReducerData,
  masterLookupStateData: state.masterLookUpData,
  manageIntrestedPartiesData: state.manageIntrestedPartiesData,
  stateCityData: state.addressFormatData
});

const mapDispatchToProps = {
  ...accOpeningActions,
  ...addressFormatActions,
  ...manageIntrestedPartiesActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(manageIntrestedPartiesComponent);
