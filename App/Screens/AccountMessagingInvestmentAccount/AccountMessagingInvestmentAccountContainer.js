import { connect } from 'react-redux';
import AccountMessagingInvestmentAccountComponent from './AccountMessagingInvestmentAccountComponent';
// import { getLogin } from '../../Reducers';
// import { loginActions } from '../../Actions';

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  // dashboardData: getLogin(state),
});

const mapDispatchToProps = {
  // ...loginActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountMessagingInvestmentAccountComponent);
