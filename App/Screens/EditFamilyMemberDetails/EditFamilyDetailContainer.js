import { connect } from "react-redux";
import editFamilyDetailComponent from './EditFamilyDetailComponent';
import { profileSettingsAction } from "../../Shared/Actions";

const mapStateToProps = (state /* , props */) => (
    {
        initialstate: state.initialAppData,
        profileSettingsLookup: state.masterLookUpData,
        profileState: state.profileInformationData
    }
);

const mapDispatchToProps = {
    ...profileSettingsAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(editFamilyDetailComponent);