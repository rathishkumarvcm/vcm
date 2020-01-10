import { connect } from "react-redux";
import OpenAccPageThreeComponent from './OpenAccPageThreeComponent';
import { accOpeningActions , addBankAccountAction } from "../../Shared/Actions";


/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
  {
    accOpeningData: state.accOpeningReducerData,
    initialState: state.initialAppData,
    masterLookupStateData: state.masterLookUpData,
    addBankAccount: state.addBankAccountData
  }
);

const mapDispatchToProps = {
  ...accOpeningActions,
  ...addBankAccountAction
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OpenAccPageThreeComponent);