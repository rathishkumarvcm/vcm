import { connect } from "react-redux";
import systematicWithdrawalComponent from './SystematicWithdrawalAddComponent';
import { accOpeningActions } from "../../Shared/Actions";//,getBankAccountInfo


const mapStateToProps = (state /* , props */) => (
    {
      fundListState:state.accOpeningReducerData,
      systematicWithdrawalState:state.systematicWithdrawalData,
    }
  );

const mapDispatchToProps = {
  ...accOpeningActions,
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(systematicWithdrawalComponent);