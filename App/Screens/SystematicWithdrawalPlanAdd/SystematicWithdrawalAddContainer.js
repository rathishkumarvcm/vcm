import { connect } from "react-redux";
import systematicWithdrawalComponent from './SystematicWithdrawalAddComponent';
import { accOpeningActions,addressFormatActions } from "../../Shared/Actions";// ,getBankAccountInfo



const mapStateToProps = (state /* , props */) => (
    {
      fundListState:state.accOpeningReducerData,
      systematicWithdrawalState:state.systematicWithdrawalData,
      stateCityData:state.addressFormatData,
      masterLookupStateData: state.masterLookUpData,
    }
  );

const mapDispatchToProps = {
  ...accOpeningActions,
  ...addressFormatActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(systematicWithdrawalComponent);