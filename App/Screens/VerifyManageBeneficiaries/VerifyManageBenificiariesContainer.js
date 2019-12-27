import { connect } from "react-redux";
import VerifyManageBenificiariesComponent from './VerifyManageBeneficiariesComponent';
import { manageBeneficiaryActions } from "../../Shared/Actions";
/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state) => ({
  manageBeneficiaryData: state.manageBeneficiaryData
});

const mapDispatchToProps = {
  ...manageBeneficiaryActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyManageBenificiariesComponent);
