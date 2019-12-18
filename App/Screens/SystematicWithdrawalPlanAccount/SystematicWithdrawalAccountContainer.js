import { connect } from "react-redux";
import systematicWithdrawalAccountComponent from './SystematicWithdrawalAccountComponent';
//import { addAutomaticInvestmentActions } from "../../Shared/Actions";



const mapStateToProps = (state) => ({
      accountState:state.accountData,
      systamaticWithdrawalState:state.systamaticWithdrawalData,
  });

const mapDispatchToProps = {
   // ...addAutomaticInvestmentActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(systematicWithdrawalAccountComponent);