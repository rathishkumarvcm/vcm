import { connect } from 'react-redux';
import DocumentCenterComponent from './DocumentCenterComponent';
// import { getLogin } from '../../Reducers';
// import { loginActions } from '../../Actions';

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  // dashboardData: getLogin(state),
  documentinitialState: state.documentPreferenceData,   
});

const mapDispatchToProps = {
  // ...loginActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentCenterComponent);
