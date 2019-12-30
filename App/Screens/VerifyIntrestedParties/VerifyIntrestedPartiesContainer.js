import { connect } from "react-redux";
import VerifyIntrestedPartiesComponent from './VerifyIntrestedPartiesComponent';
import { manageIntrestedPartiesActions } from "../../Shared/Actions";
/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state) => ({
  manageInterestedPartiesData: state.manageInterestedPartiesData
});

const mapDispatchToProps = {
  ...manageIntrestedPartiesActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyIntrestedPartiesComponent);
