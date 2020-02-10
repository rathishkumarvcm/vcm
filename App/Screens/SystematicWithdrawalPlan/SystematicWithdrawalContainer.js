import { connect } from "react-redux";
import systematicWithdrawalComponent from './SystematicWithdrawalComponent';
import {addSystematicWithdrawalActions } from "../../Shared/Actions";



const mapStateToProps = (state) => ({
  systematicWithdrawalProps:state.systematicWithdrawalData,
    }
  );

const mapDispatchToProps = {
  ...addSystematicWithdrawalActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(systematicWithdrawalComponent);