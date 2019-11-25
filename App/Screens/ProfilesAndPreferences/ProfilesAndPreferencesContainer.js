import { connect } from "react-redux";
import ProfilesAndPreferencesComponent from './ProfilesAndPreferencesComponent';

const mapStateToProps = (state) => (
    {
        initialState: state.initialAppData
    }
);

export default connect(
    mapStateToProps,
)(ProfilesAndPreferencesComponent);
