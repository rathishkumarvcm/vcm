import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import MSRAccessFormList from './MSRAccessFormsList';
import { msrAccessFormActions } from "../../Shared/Actions";

const mapStateToProps = state => {
    return state.msrAccessFormsData; 
};

const mapDispatchToProps = {
    ...msrAccessFormActions
};

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     dispatch,
//     ...msrAccessFormActions
// }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MSRAccessFormList);