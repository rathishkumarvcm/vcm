import { connect } from "react-redux";
import manageIntrestedPartiesComponent from "./ManageIntrestedPartiesComponent";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  manageIntrestedPartiesData: state.manageIntrestedPartiesData
});

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(manageIntrestedPartiesComponent);
