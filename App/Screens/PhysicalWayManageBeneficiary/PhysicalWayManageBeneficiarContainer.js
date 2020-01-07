import { connect } from 'react-redux';
import PhysicalWayManageBeneficiaryComponent from './PhysicalWayManageBeneficiaryComponent';

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state) => ({
    manageBeneficiaryData: state.manageBeneficiaryData
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PhysicalWayManageBeneficiaryComponent);