import { connect } from "react-redux";
import AccountPositionsComponent from './AccountPositionsComponent';

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
  {
    accountPositionsinitialState: state.accountPositionsData,   
  }
);

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPositionsComponent);