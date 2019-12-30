import { connect } from "react-redux";
import manageIntrestedPartiesComponent from "./ManageIntrestedPartiesComponent";
import { manageIntrestedPartiesActions } from "../../Shared/Actions";

/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  manageInterestedPartiesData: state.manageInterestedPartiesData
});

const mapDispatchToProps = {
  ...manageIntrestedPartiesActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(manageIntrestedPartiesComponent);
