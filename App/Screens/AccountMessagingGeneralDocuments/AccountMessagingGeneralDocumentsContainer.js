import { connect } from 'react-redux';
import AccountMessagingGeneralDocumentsComponent from './AccountMessagingGeneralDocumentsComponent';
import { accMessagingDocumentsActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({  
  accMessageDocumentinitialState: state.accMessagingDocumentsData,  
});

const mapDispatchToProps = {
  ...accMessagingDocumentsActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountMessagingGeneralDocumentsComponent);
