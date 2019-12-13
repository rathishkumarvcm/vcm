import { connect } from "react-redux";
import VerifyIntrestedPartiesComponent from './VerifyIntrestedPartiesComponent';
import { manageIntrestedPartiesActions } from "../../Shared/Actions";
/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  manageIntrestedPartiesData: state.manageIntrestedPartiesData
});

const mapDispatchToProps = {
  ...manageIntrestedPartiesActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyIntrestedPartiesComponent);
