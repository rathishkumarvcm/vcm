import { connect } from "react-redux";
import systematicWithdrawalComponent from './SystematicWithdrawalAddComponent';
import { accOpeningActions,addressFormatActions,bankAccountAction } from "../../Shared/Actions";



const mapStateToProps = (state /* , props */) => (
    {
      fundListState:state.accOpeningReducerData,
      systematicWithdrawalState:state.systematicWithdrawalData,
      stateCityData:state.addressFormatData,
      masterLookupStateData: state.masterLookUpData,
      bankAccountInfo: state.bankAccountReducerData.bankAccountInfo,
    }
  );

const mapDispatchToProps = {
  ...accOpeningActions,
  ...addressFormatActions,
  ...bankAccountAction
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(systematicWithdrawalComponent);