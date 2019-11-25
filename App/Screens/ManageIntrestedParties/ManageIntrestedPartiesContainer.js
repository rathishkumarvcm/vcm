import { connect } from "react-redux";
import ManageIntrestedPartiesComponent from "./ManageIntrestedPartiesComponent";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

  const mapStateToProps = (state /* , props */) => (
    {
      masterLookupStateData: state.masterLookUpData,
    }
  );

  const mapDispatchToProps = {
  
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ManageIntrestedPartiesComponent);