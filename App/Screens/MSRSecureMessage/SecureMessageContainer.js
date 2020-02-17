import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SecureMessageComponent from './SecureMessageComponent';
import { msrServiceRequestActions } from "../../Shared/Actions";


const mapStateToProps = state => {
    return state.msrAccessFormsData;
};

// const mapDispatchToProps = {
//     ...msrServiceRequestActions
// };

const mapDispatchToProps = (dispatch) => bindActionCreators({
    dispatch,
    ...msrServiceRequestActions
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SecureMessageComponent);