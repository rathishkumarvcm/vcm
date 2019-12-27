import { connect } from "react-redux";
import ManageBenificiariesComponent from "./ManageBeneficiariesComponent";
import { manageBeneficiaryActions } from "../../Shared/Actions";

/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  manageBeneficiaryData: state.manageBeneficiaryData
});

const mapDispatchToProps = {
  ...manageBeneficiaryActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBenificiariesComponent);