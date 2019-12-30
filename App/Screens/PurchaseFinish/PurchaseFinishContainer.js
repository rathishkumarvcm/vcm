import { connect } from 'react-redux';
import PurchaseFinishComponent from './PurchaseFinishComponent';
import { purchaseActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
    purchaseData: state.purchaseData,
});

const mapDispatchToProps = {
    ...purchaseActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PurchaseFinishComponent);