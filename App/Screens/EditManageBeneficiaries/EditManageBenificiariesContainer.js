import { connect } from "react-redux";
import EditManageBenificiariesComponent from "./EditManageBeneficiariesComponent";
import {
  accOpeningActions,
  manageBeneficiaryActions
} from "../../Shared/Actions";
/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state ) => ({
  accOpeningData: state.accOpeningReducerData,
  masterLookupStateData: state.masterLookUpData,
  manageBeneficiaryData: state.manageBeneficiaryData
});

const mapDispatchToProps = {
  ...accOpeningActions,
  ...manageBeneficiaryActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditManageBenificiariesComponent);
