import { connect } from "react-redux";
import ManageBenificiariesComponent from './ManageBeneficiariesComponent';
import {accOpeningActions} from '../../Shared/Actions';
/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      accOpeningData: state.accOpeningReducerData,
      masterLookupStateData: state.masterLookUpData,
    }
  );

const mapDispatchToProps = {
  ...accOpeningActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ManageBenificiariesComponent);