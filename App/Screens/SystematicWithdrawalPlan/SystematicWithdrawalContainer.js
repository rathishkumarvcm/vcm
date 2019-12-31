import { connect } from "react-redux";
import systematicWithdrawalComponent from './SystematicWithdrawalComponent';



const mapStateToProps = (state) => ({
  systematicWithdrawalState:state.systematicWithdrawalData,
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(systematicWithdrawalComponent);