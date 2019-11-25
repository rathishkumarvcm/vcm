import { connect } from "react-redux";
import ManageBenificiariesComponent from './ManageBeneficiariesComponent';

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
  )(ManageBenificiariesComponent);