import { connect } from "react-redux";
import systematicWithdrawalComponent from './SystematicWithdrawalComponent';



const mapStateToProps = (state) => ({
  systamaticWithdrawalState:state.systamaticWithdrawalData,
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(systematicWithdrawalComponent);